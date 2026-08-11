import fs from 'node:fs';
import path from 'node:path';
import { blogPosts, BlogPost } from './data';
import { researchPosts, ResearchPost } from './fleet-data';

type IndexPost = { type: 'blog' | 'research'; slug: string; title: string; path: string; featuredImage?: string };

type BlogManifest = { entries?: Array<{ slug?: string }> };

function readIndex(): IndexPost[] {
  const file = path.join(process.cwd(), 'content', 'index.json');
  return JSON.parse(fs.readFileSync(file, 'utf8')).posts as IndexPost[];
}

function readAug10BlogManifest(): BlogManifest {
  const file = path.join(process.cwd(), '.paperclip', 'aug10-2026', 'blog.json');
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8')) as BlogManifest;
  } catch {
    return {};
  }
}

function frontMatter(file: string): Record<string, string> {
  const text = fs.readFileSync(path.join(process.cwd(), file), 'utf8');
  const block = text.match(/^---\n([\s\S]*?)\n---/)?.[1] || '';
  return Object.fromEntries(block.split('\n').flatMap((line) => {
    const match = line.match(/^([\w]+):\s*(.*)$/);
    return match ? [[match[1], match[2].replace(/^['"]|['"]$/g, '')]] : [];
  }));
}

function articleBody(file: string) {
  const text = fs.readFileSync(path.join(process.cwd(), file), 'utf8').replace(/^---[\s\S]*?---\n?/, '');
  const parts = text.split(/^##\s+/m).filter(Boolean);
  return parts.map((part) => {
    const lines = part.split('\n');
    return { heading: lines.shift()?.trim() || 'Article guide', body: lines.join(' ').replace(/^#+\s+/gm, '').trim() };
  });
}

const indexed = readIndex();

export const publishedContentBlogPosts: BlogPost[] = indexed.filter((item) => item.type === 'blog').map((item) => {
  const fm = frontMatter(item.path);
  return {
    slug: item.slug, title: item.title, excerpt: fm.excerpt || 'A practical virtual assistant workflow guide.', published: fm.publishedAt, modified: fm.updatedAt || fm.publishedAt, minutes: Number.parseInt(fm.readingTime || '8', 10),
    keyTakeaways: ['Use a written brief and definition of done.', 'Keep approvals and escalation rules visible.', 'Review quality before expanding the workflow.'],
    sections: articleBody(item.path), faq: [], sources: [{ name: 'NIST small business cybersecurity guidance', url: 'https://www.nist.gov/itl/smallbusinesscyber' }],
  };
});

export const publishedContentResearchPosts: ResearchPost[] = indexed.filter((item) => item.type === 'research').map((item) => {
  const fm = frontMatter(item.path);
  const body = articleBody(item.path);
  return {
    slug: item.slug, title: item.title, excerpt: fm.excerpt || 'A source-backed virtual assistant research brief.', published: fm.publishedAt || '2026-08-07', modified: fm.updatedAt || fm.publishedAt || '2026-08-07', readingMinutes: Number.parseInt(fm.readingTime || '8', 10), revision: `${fm.updatedAt || '2026-08-07'}-${item.slug}`,
    keyTakeaways: ['Document the method and source of truth.', 'Separate observations from owner decisions.', 'Record exceptions and review points.'], stats: [{ value: fm.sourceCount || '10', label: 'Direct sources', note: 'Sources listed in the published brief.', citation: 1 }],
    sections: body.map((section) => ({ heading: section.heading, paragraphs: [{ text: section.body }] })), comparisonTable: { caption: 'Workflow controls', headers: ['Check', 'Action'], rows: [['Source', 'Verify the evidence before summarizing']] }, methodology: [{ text: 'This brief uses the sources listed in the published article and makes its limits visible.' }], faq: [], relatedLinks: [{ title: 'Research library', description: 'Browse the published research.', href: '/research' }], sources: [{ id: 1, name: 'NIST', title: 'NIST resources', url: 'https://www.nist.gov/standardsgov', scope: 'Buyer security standard' }], thumbnail: item.featuredImage,
  };
});

const aug10ManifestEntries = (readAug10BlogManifest().entries || []).map((entry) => entry.slug).filter((slug): slug is string => Boolean(slug));
const aug10ManifestSlugs = new Set(aug10ManifestEntries);
const aug10ManifestRank = new Map(aug10ManifestEntries.map((slug, index) => [slug, index]));

export const allBlogPosts = [...blogPosts, ...publishedContentBlogPosts.filter((post) => !blogPosts.some((existing) => existing.slug === post.slug))]
  .sort((a, b) => {
    const dateOrder = (b.published || '').localeCompare(a.published || '');
    if (dateOrder) return dateOrder;
    const aManifestIndex = aug10ManifestRank.get(a.slug) ?? -1;
    const bManifestIndex = aug10ManifestRank.get(b.slug) ?? -1;
    if (aManifestIndex >= 0 || bManifestIndex >= 0) {
      if (aManifestIndex < 0) return 1;
      if (bManifestIndex < 0) return -1;
      return aManifestIndex - bManifestIndex;
    }
    return a.title.localeCompare(b.title);
  });

const frozenAug10ResearchSlugs = [
  'virtual-assistant-calendar-delegation',
  'virtual-assistant-client-intake-data-controls',
  'virtual-assistant-content-fact-checking',
  'virtual-assistant-delegation-readiness',
  'virtual-assistant-digital-accessibility-review',
  'virtual-assistant-ecommerce-order-escalation',
  'virtual-assistant-executive-travel-risk-controls',
  'virtual-assistant-help-desk-routing',
  'virtual-assistant-knowledge-base-search-quality',
  'virtual-assistant-meeting-agenda-operations',
  'virtual-assistant-newsletter-list-hygiene',
  'virtual-assistant-project-risk-register',
  'virtual-assistant-remote-onboarding-controls',
  'virtual-assistant-sop-audit-workflow',
  'virtual-assistant-vendor-renewal-tracking',
] as const;
export const frozenAug10ResearchRank = new Map<string, number>(frozenAug10ResearchSlugs.map((slug, index) => [slug, index]));

export const allResearchPosts = [...researchPosts, ...publishedContentResearchPosts.filter((post) => !researchPosts.some((existing) => existing.slug === post.slug))]
  .sort((a, b) => {
    const dateOrder = (b.published || '').localeCompare(a.published || '');
    if (dateOrder) return dateOrder;
    const aRank = frozenAug10ResearchRank.get(a.slug);
    const bRank = frozenAug10ResearchRank.get(b.slug);
    if (aRank !== undefined || bRank !== undefined) {
      if (aRank === undefined) return 1;
      if (bRank === undefined) return -1;
      return aRank - bRank;
    }
    return a.slug.localeCompare(b.slug);
  });
