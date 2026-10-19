import type { MetadataRoute } from 'next';
import { alternatives } from './alternatives/data';
import { allBlogPosts, allResearchPosts } from './content-library';
import { site } from './data';
import { fleetServices, postsPerPage } from './fleet-data';
import { guides } from './non-competitor-alternatives/data';

const staticPaths = [
  '',
  '/alternatives',
  '/blog',
  '/blog/top-50-virtual-assistant-companies',
  '/cancellation',
  '/cancellation-policy',
  '/compare',
  '/contact',
  '/contact-us',
  '/non-competitor-alternatives',
  '/privacy',
  '/provider-vetting',
  '/research',
  '/services',
  '/terms',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPageCount = Math.max(1, Math.ceil(allBlogPosts.length / postsPerPage));
  const paths = new Set<string>([
    ...staticPaths,
    ...fleetServices.map((service) => `/services/${service.slug}`),
    ...allBlogPosts.map((post) => `/blog/${post.slug}`),
    ...Array.from({ length: Math.max(0, blogPageCount - 1) }, (_, index) => `/blog/page/${index + 2}`),
    ...allResearchPosts.map((post) => `/research/${post.slug}`),
    ...alternatives.map((alternative) => `/alternatives/${alternative.slug}`),
    ...guides.map((guide) => `/non-competitor-alternatives/${guide.slug}`),
  ]);

  return [...paths].map((path) => ({ url: `${site.url}${path}` }));
}
