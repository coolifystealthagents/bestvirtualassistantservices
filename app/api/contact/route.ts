import { NextRequest, NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../lib/lead-fallback-mattermost';

const MAX_BODY_BYTES = 64_000;
const MAX_FIELD_LENGTH = 4_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 15 * 60_000;
const attempts = new Map<string, number[]>();

type Fields = Record<string, string>;

function text(fields: Fields, key: string, max = MAX_FIELD_LENGTH) {
  return (fields[key] || '').trim().slice(0, max);
}

function errorResponse(status: number, json: boolean) {
  if (json) {
    return NextResponse.json(
      { ok: false, error: 'We could not send your request. Please review the form and try again.' },
      { status, headers: { 'cache-control': 'no-store' } },
    );
  }
  return new Response(
    '<!doctype html><html lang="en"><meta charset="utf-8"><title>Submission problem</title><main><h1>We could not send your request.</h1><p>Please go back and try again.</p><a href="/contact-us">Return to the contact form</a></main>',
    { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } },
  );
}

function ip(request: NextRequest) {
  return request.headers.get('cf-connecting-ip')
    || request.headers.get('x-real-ip')
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || 'unknown';
}

function limited(key: string, max: number) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((timestamp) => now - timestamp < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5_000) {
    for (const [storedKey, values] of attempts) {
      if (!values.some((timestamp) => now - timestamp < WINDOW_MS)) attempts.delete(storedKey);
    }
  }
  return recent.length > max;
}

async function readFields(request: NextRequest, contentType: string): Promise<Fields> {
  if (contentType.includes('application/json')) {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) throw new Error('body-too-large');
    const value = JSON.parse(raw) as unknown;
    if (!value || Array.isArray(value) || typeof value !== 'object') throw new Error('invalid-json');
    return Object.fromEntries(
      Object.entries(value).map(([key, field]) => [key, typeof field === 'string' ? field : '']),
    );
  }
  const form = await request.formData();
  return Object.fromEntries(
    [...form.entries()].map(([key, field]) => [key, typeof field === 'string' ? field : '']),
  );
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  const contentLength = Number(request.headers.get('content-length') || 0);
  const origin = request.headers.get('origin');
  const json = contentType.includes('application/json');
  const supported = json
    || contentType.includes('application/x-www-form-urlencoded')
    || contentType.includes('multipart/form-data');

  if (
    (origin && origin !== request.nextUrl.origin)
    || !Number.isFinite(contentLength)
    || contentLength > MAX_BODY_BYTES
    || !supported
  ) return errorResponse(400, json);
  if (limited(`ip:${ip(request)}`, 10)) return errorResponse(429, json);

  let fields: Fields;
  try {
    fields = await readFields(request, contentType);
  } catch {
    return errorResponse(400, json);
  }

  if (
    text(fields, 'websiteConfirm')
    || text(fields, 'website_confirm')
    || text(fields, 'website_url')
    || text(fields, 'company_homepage')
  ) return errorResponse(400, json);

  const first = text(fields, 'firstName', 100);
  const last = text(fields, 'lastName', 100);
  const name = `${first} ${last}`.trim() || text(fields, 'name', 200) || text(fields, 'fullName', 200);
  const email = (text(fields, 'email', 320) || text(fields, 'businessEmail', 320)).toLowerCase();
  if (!name || !email || !EMAIL_RE.test(email)) return errorResponse(422, json);
  if (limited(`email:${email}`, 3)) return errorResponse(429, json);

  const pageUrl = request.headers.get('referer') || new URL('/contact-us', request.url).toString();
  const localPhone = text(fields, 'phoneLocal', 100);
  const phone = text(fields, 'phone', 100) || [text(fields, 'countryCode', 8), localPhone].filter(Boolean).join(' ');
  const business = text(fields, 'company', 300) || text(fields, 'companyName', 300);
  const companySize = text(fields, 'companySize', 100);
  const positions = text(fields, 'positions') || text(fields, 'positionsToFill') || text(fields, 'role');
  const referral = text(fields, 'referral', 300) || text(fields, 'howTheyHeard', 300) || text(fields, 'source', 300);
  const referralSpecify = text(fields, 'referralSpecify', 300);
  const message = [
    text(fields, 'message'),
    text(fields, 'needs'),
    text(fields, 'details'),
    positions,
    text(fields, 'tier'),
    companySize,
    text(fields, 'website'),
    referralSpecify ? `Referral detail: ${referralSpecify}` : '',
  ].filter(Boolean).join('\n');

  const payload = {
    full_name: name,
    email,
    phone,
    company_name: business,
    message,
    how_they_heard: referral || 'Website contact form',
    client_event_id: crypto.randomUUID(),
    attribution: {
      source_page: pageUrl,
      landing_page: pageUrl,
      referrer: request.headers.get('referer') || '',
      page_journey: ['Contact form'],
    },
  };
  const token = process.env.LEAD_AUTH_TOKEN;
  const endpoint = process.env.LEAD_INGEST_URL || 'https://leads.stealthagents.com/api/leads';
  if (!token) return errorResponse(503, json);

  try {
    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-lead-token': token },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(12_000),
    });
    const result = await upstream.json().catch(() => null) as { ok?: boolean } | null;
    if (!upstream.ok || result?.ok !== true) return errorResponse(502, json);
  } catch {
    return errorResponse(502, json);
  }

  void sendLeadFallbackToMattermost({
    name,
    email,
    phone,
    business,
    message,
    companySize,
    positions,
    referral,
    pageUrl,
    userAgent: request.headers.get('user-agent') || '',
  });

  if (json) return NextResponse.json({ ok: true, redirect: '/thank-you' });
  return NextResponse.redirect(new URL('/thank-you?lead=accepted', request.url), 303);
}
