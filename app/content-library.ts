import fs from 'node:fs';
import path from 'node:path';
import { blogPosts, BlogPost } from './data';
import { researchPosts, ResearchPost } from './fleet-data';

type IndexPost = { type: 'blog' | 'research'; slug: string; title: string; path: string; featuredImage?: string };

function readIndex(): IndexPost[] {
  const file = path.join(process.cwd(), 'content', 'index.json');
  return JSON.parse(fs.readFileSync(file, 'utf8')).posts as IndexPost[];
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
    slug: item.slug, title: item.title, excerpt: fm.excerpt || 'A practical virtual assistant workflow guide.', minutes: Number.parseInt(fm.readingTime || '8', 10),
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

export const allBlogPosts = [...blogPosts, ...publishedContentBlogPosts.filter((post) => !blogPosts.some((existing) => existing.slug === post.slug))];
export const allResearchPosts = [...researchPosts, ...publishedContentResearchPosts.filter((post) => !researchPosts.some((existing) => existing.slug === post.slug))];
