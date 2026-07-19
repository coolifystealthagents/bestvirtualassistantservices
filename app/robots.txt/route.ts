import { site } from '../data';
export function GET() { return new Response(`User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`, { headers: { 'content-type': 'text/plain' } }); }
