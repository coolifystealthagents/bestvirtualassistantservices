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

const crawlRedirects = [
  { source: '/cancellation', destination: '/cancellation-policy', permanent: true },
  { source: '/research/calendar-time-zone-error-cost', destination: '/services/executive-calendar-management', permanent: true },
  { source: '/research/client-onboarding-access-minimization', destination: '/research', permanent: true },
  { source: '/research/customer-inbox-language-escalation', destination: '/services/customer-inbox-support', permanent: true },
  { source: '/research/ecommerce-order-status-provenance', destination: '/services/ecommerce-operations-assistance', permanent: true },
  { source: '/research/executive-travel-itinerary-change-control', destination: '/services/travel-planning-assistance', permanent: true },
  { source: '/research/finance-document-reconciliation-boundaries', destination: '/services/legal-administrative-assistance', permanent: true },
  { source: '/research/knowledge-transfer-turnover-risk', destination: '/research', permanent: true },
  { source: '/research/lead-research-qualification-boundaries', destination: '/research', permanent: true },
  { source: '/research/market-research-source-diversity', destination: '/research', permanent: true },
  { source: '/research/philippines-virtual-assistant-data-entry-quality-control-guide', destination: '/research', permanent: true },
  { source: '/research/virtual-assistant-bookkeeping-support-controls', destination: '/services/legal-administrative-assistance', permanent: true },
  { source: '/research/virtual-assistant-calendar-management-rules', destination: '/services/executive-calendar-management', permanent: true },
  { source: '/research/virtual-assistant-ecommerce-product-catalog', destination: '/services/ecommerce-operations-assistance', permanent: true },
  { source: '/research/virtual-assistant-inbox-triage-workflow', destination: '/services/inbox-and-correspondence-support', permanent: true },
  { source: '/research/virtual-assistant-outsourcing-readiness-checklist', destination: '/research', permanent: true },
  { source: '/research/virtual-assistant-philippines-executive-calendar-management', destination: '/services/executive-calendar-management', permanent: true },
  { source: '/research/virtual-assistant-project-coordination-checklist', destination: '/research', permanent: true },
  { source: '/research/virtual-assistant-project-status-summaries', destination: '/research', permanent: true },
  { source: '/research/virtual-assistant-quality-scorecard', destination: '/research', permanent: true },
  { source: '/research/virtual-assistant-spreadsheet-review-queues', destination: '/research', permanent: true },
  { source: '/research/virtual-assistant-task-dependency-notes', destination: '/research', permanent: true },
  { source: '/research/virtual-assistant-travel-planning-brief', destination: '/services/travel-planning-assistance', permanent: true },
  { source: '/research/virtual-assistant-weekly-operations-report', destination: '/research', permanent: true },
  { source: '/research/website-content-freshness-evidence', destination: '/research', permanent: true },
];

const nextConfig = {
  async redirects() {
    return crawlRedirects;
  },
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
