import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('shared shell carries the exact sponsorship phrase and only three primary destinations', () => {
  const shell = read('app/components.tsx');
  assert.equal((shell.match(/Powered by StealthAgents/g) || []).length, 2);
  for (const href of ['/', '/services', '/contact-us']) {
    assert.ok(shell.includes(`href="${href}"`) || shell.includes(`href='${href}'`), `missing primary destination ${href}`);
  }
  assert.match(shell, /aria-expanded/);
  assert.match(shell, /aria-controls/);
  assert.match(shell, /Skip to content/);
});

test('first-party proof has ten unique records, provenance, and local official assets', () => {
  const proof = JSON.parse(read('content/stealth-agents-proof.json'));
  assert.equal(proof.reviews.length, 10);
  assert.equal(new Set(proof.reviews.map((r) => `${r.name}|${r.quote}`)).size, 10);
  assert.match(proof.sourceUrl, /^https:\/\/stealthagents\.com\/?$/);
  assert.ok(existsSync(new URL('../public/brand/stealth-agents-logo-black.png', import.meta.url)));
  assert.ok(existsSync(new URL('../public/brand/stealth-agents-team-bacolod.png', import.meta.url)));
  const rail = read('app/booking-components.tsx');
  assert.doesNotMatch(rail, /Pause testimonials|Play testimonials|repeated/);
  assert.match(rail, /proof\.reviews\.map/);
  assert.match(read('app/globals.css'), /prefers-reduced-motion:reduce/);
});

test('contact owns form, contains no scheduler, and official section immediately follows hero', () => {
  const page = read('app/contact-us/page.tsx');
  assert.doesNotMatch(page, /oncehub|booking|35\+|Forbes|top rated/i);
  assert.match(page, /contact-hero[\s\S]*TestimonialsRail[\s\S]*StandardContactForm/);
  assert.match(page, /<\/section>\s*<section className="official-team"/);
  assert.match(page, /Official team, Bacolod/);
});

test('lead ingestion failure never becomes tracker-owned success', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const catchBlock = form.slice(form.indexOf('} catch'));
  assert.doesNotMatch(catchBlock, /location\.assign/);
  assert.match(form, /if \(!response\.ok\) throw/);
});

test('conversion routes and scheduler contract are explicit', () => {
  assert.ok(existsSync(new URL('../app/thanks-whats-next/page.tsx', import.meta.url)));
  assert.match(read('app/thank-you/page.tsx'), /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(read('app/thanks-whats-next/page.tsx'), /index: false/);
});

test('ten service records expose complete deep-content fields and unique heroes', () => {
  const data = read('app/fleet-data.ts');
  for (const field of ['audience', 'problem', 'inputs', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faq', 'relatedServices', 'heroImage']) assert.match(data, new RegExp(`${field}:`));
  assert.match(read('app/services/[slug]/page.tsx'), /service-longform/);
});

test('blog articles generate anchored TOC, desktop sidebar, and mobile fallback', () => {
  const article = read('app/blog/[slug]/page.tsx');
  assert.match(article, /ArticleNavigation/);
  assert.match(article, /id=\{headingId/);
  const nav = read('app/blog/[slug]/ArticleNavigation.tsx');
  assert.match(nav, /IntersectionObserver/);
  assert.match(nav, /<details/);
  assert.match(nav, /position|article-sidebar/);
});

test('SEO, host canonicalization, security headers, not-found, and punctuation sanitation exist', () => {
  const config = read('next.config.mjs');
  for (const header of ['Strict-Transport-Security', 'Content-Security-Policy', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.match(config, new RegExp(header));
  assert.match(config, /bestvirtualassistantservices\.com/);
  assert.ok(existsSync(new URL('../middleware.ts', import.meta.url)));
  assert.ok(existsSync(new URL('../app/sitemap.ts', import.meta.url)));
  assert.ok(existsSync(new URL('../app/not-found.tsx', import.meta.url)));
  assert.match(read('app/layout.tsx'), /VisiblePunctuationSanitizer/);
});

test('design and acceptance documentation record required decisions', () => {
  const design = read('docs/design-registry-proposal.md');
  assert.match(design, /Reading this as: a practical virtual assistant buyer publication/);
  assert.match(design, /DESIGN_VARIANCE.*8/);
  assert.match(design, /MOTION_INTENSITY.*2/);
  assert.match(design, /VISUAL_DENSITY.*7/);
  assert.ok(existsSync(new URL('../docs/v3-acceptance-ledger.md', import.meta.url)));
});
