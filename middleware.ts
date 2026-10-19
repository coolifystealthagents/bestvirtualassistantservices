import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_ORIGIN = 'https://bestvirtualassistantservices.com';
const CANONICAL_HOST = 'bestvirtualassistantservices.com';
const WWW_HOST = `www.${CANONICAL_HOST}`;

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== 'production') return NextResponse.next();

  const forwardedHost = request.headers.get('x-forwarded-host');
  const hostHeader = (forwardedHost || request.headers.get('host') || '').split(',')[0].trim().toLowerCase();
  const hostname = hostHeader.replace(/:\d+$/, '');
  const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0].trim().toLowerCase();
  const protocol = forwardedProtocol || request.nextUrl.protocol.replace(':', '');

  // Redirect only recognized production hosts. Never construct a destination
  // from an untrusted Host or X-Forwarded-Host header.
  const isProductionHost = hostname === CANONICAL_HOST || hostname === WWW_HOST;
  if (!isProductionHost || (hostname === CANONICAL_HOST && protocol === 'https')) {
    return NextResponse.next();
  }

  const destination = new URL(`${request.nextUrl.pathname}${request.nextUrl.search}`, CANONICAL_ORIGIN);
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: '/((?!_next/static|_next/image).*)',
};
