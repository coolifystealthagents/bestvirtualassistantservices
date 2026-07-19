import { allPaths, site } from '../data';

export function GET() {
  const urls = allPaths.map((p)=>`<url><loc>${site.url}${p === '/' ? '' : p}</loc><changefreq>${p === '/' ? 'weekly' : 'monthly'}</changefreq></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'content-type': 'application/xml' } });
}
