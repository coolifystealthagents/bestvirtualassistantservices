/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const commonSecurityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
  ...(isProduction
    ? [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }]
    : []),
];

// Next.js needs inline bootstrap scripts; the ACR origin serves the approved tracker.
// OnceHub is allowed as a frame only on the scheduler route below.
const contentSecurityPolicy = (allowScheduler) => [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  `frame-src ${allowScheduler ? "'self' https://go.oncehub.com" : "'none'"}`,
  "script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com",
  "font-src 'self' data:",
  "connect-src 'self' https://acrtracking.stealthagents.us",
  "media-src 'self'",
  "worker-src 'self' blob:",
  ...(isProduction ? ['upgrade-insecure-requests'] : []),
].join('; ');

const withCsp = (allowScheduler = false) => [
  ...commonSecurityHeaders,
  { key: 'Content-Security-Policy', value: contentSecurityPolicy(allowScheduler) },
];

const nextConfig = {
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/icon.svg' }];
  },
  async headers() {
    return [
      { source: '/thank-you', headers: withCsp(true) },
      // The negative lookahead prevents a second, stricter CSP on /thank-you.
      { source: '/:path((?!thank-you$).*)', headers: withCsp(false) },
    ];
  },
};

export default nextConfig;
