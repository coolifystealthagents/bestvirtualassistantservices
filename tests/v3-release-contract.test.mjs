import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('shared shell carries the exact sponsorship phrase and only three primary destinations', () => {
  const shell = read('app/components.tsx');
  const css = read('app/globals.css');
  assert.equal((shell.match(/Powered by StealthAgents/g) || []).length, 2);
  for (const href of ['/', '/services', '/contact-us']) {
    assert.ok(shell.includes(`href="${href}"`) || shell.includes(`href='${href}'`), `missing primary destination ${href}`);
  }
  assert.match(shell, /aria-expanded/);
  assert.match(shell, /aria-controls/);
  assert.match(shell, /Skip to content/);
  assert.match(shell, /usePathname/);
  assert.match(shell, /aria-current=\{isActive\(link\.href\) \? ['"]page['"] : undefined\}/);
  assert.match(shell, /className=\{isActive\(link\.href\) \? ['"]is-active['"] : undefined\}/);
  const mobileRules = [...css.matchAll(/@media\(max-width:[^)]+\)\{([^]*?)(?=\n\s*@media|\n\s*\/\*|$)/g)].map((match) => match[1]).join('\n');
  assert.doesNotMatch(mobileRules, /\.header-sponsor[^{}]*\{[^{}]*(?:display\s*:\s*none|visibility\s*:\s*hidden)/i);
  assert.match(mobileRules, /\.header-sponsor\s*\{[^{}]*display\s*:\s*block/i);
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
  const serviceSource = data.slice(data.indexOf('export const fleetServices'), data.indexOf('export const researchPosts'));
  const records = serviceSource.split(/\n  \{\n    slug:/).slice(1).map((record) => `slug:${record}`);
  assert.equal(records.length, 10);

  const requiredFields = ['audience', 'problem', 'inputs', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faq', 'relatedServices', 'heroImage'];
  const metaTitles = [];
  const heroPaths = [];
  for (const record of records) {
    for (const field of requiredFields) assert.match(record, new RegExp(`\\n    ${field}:`), `service record is missing ${field}`);
    const slug = record.match(/slug:\s*'([^']+)'/)?.[1];
    const metaTitle = record.match(/metaTitle:\s*'([^']+)'/)?.[1];
    const heroPath = record.match(/heroImage:\s*'([^']+)'/)?.[1];
    assert.ok(slug && metaTitle && heroPath, 'service record lacks slug, metaTitle, or heroImage');
    assert.ok(metaTitle.length <= 60, `${slug} metaTitle exceeds 60 characters`);
    metaTitles.push(metaTitle);
    assert.match(heroPath, /^\/services\/[a-z0-9-]+\.svg$/);
    heroPaths.push(heroPath);

    const faqSource = record.match(/\n    faq:\s*\[([^]*?)\n    \],/)?.[1] || '';
    assert.ok((faqSource.match(/\{ q:/g) || []).length >= 3, `${slug} needs at least three FAQ questions`);
    const bodySource = record.match(/\n    body:\s*\[([^]*?)\n    \],/)?.[1] || '';
    assert.ok((bodySource.match(/^\s*'/gm) || []).length >= 4, `${slug} needs at least four body paragraphs`);
    assert.ok(bodySource.length >= 1600, `${slug} body lacks long-form depth`);
  }
  assert.equal(new Set(metaTitles).size, 10, 'service meta titles must be unique');
  assert.equal(new Set(heroPaths).size, 10, 'service heroes must be unique');

  for (const heroPath of heroPaths) {
    const assetUrl = new URL(`../public${heroPath}`, import.meta.url);
    assert.ok(existsSync(assetUrl), `missing ${heroPath}`);
    const svg = readFileSync(assetUrl, 'utf8');
    assert.match(svg, /^\s*<svg\b/i, `${heroPath} must be a standalone SVG`);
    assert.match(svg, /\bviewBox=["']0 0 1200 675["']/i, `${heroPath} has the wrong viewBox`);
    assert.doesNotMatch(svg, /<script\b|\bon\w+\s*=|\b(?:href|xlink:href)\s*=\s*["'](?:https?:|\/\/|data:|javascript:)/i, `${heroPath} contains active or external content`);
  }

  const template = read('app/services/[slug]/page.tsx');
  assert.match(template, /service-longform/);
  assert.match(template, /service\.faq\.map/);
  assert.match(template, /['"]@type['"]:\s*['"]BreadcrumbList['"]/);
  assert.match(template, /['"]@type['"]:\s*['"]FAQPage['"]/);
  assert.match(template, /provider:\s*\{[^}]*name:\s*['"]Stealth Agents['"][^}]*url:\s*['"]https:\/\/stealthagents\.com\//);
  assert.doesNotMatch(template, /areaServed:\s*['"]Worldwide['"]/);
  assert.match(read('app/globals.css'), /#main-content\s*\{[^}]*scroll-margin-top\s*:/);

  const sourceRoot = new URL('../', import.meta.url);
  const sourceExtensions = /\.(?:ts|tsx|js|jsx|mjs|cjs|json|md|mdx|css)$/;
  const excludedDirectories = new Set(['.git', '.next', 'node_modules', 'public', 'tests']);
  const allowedReferenceFile = new URL('../app/fleet-data.ts', import.meta.url).pathname;
  const unexpectedReferences = [];
  const visit = (directory) => {
    for (const entry of readdirSync(directory)) {
      if (excludedDirectories.has(entry)) continue;
      const path = `${directory}/${entry}`;
      if (statSync(path).isDirectory()) visit(path);
      else if (sourceExtensions.test(entry) && path !== allowedReferenceFile && /\/services\/[a-z0-9-]+\.svg/.test(readFileSync(path, 'utf8'))) unexpectedReferences.push(path);
    }
  };
  visit(sourceRoot.pathname.replace(/\/$/, ''));
  assert.deepEqual(unexpectedReferences, [], 'only service data may reference service hero assets');
});

test('blog articles generate anchored TOC, desktop sidebar, and mobile fallback', () => {
  const article = read('app/blog/[slug]/page.tsx');
  const css = read('app/globals.css');
  assert.match(article, /ArticleNavigation/);
  assert.match(article, /id=\{headingId/);
  assert.match(article, /usedIds\.get\(baseId\)/);
  assert.match(article, /occurrence === 1 \? baseId : `\$\{baseId\}-\$\{occurrence\}`/);
  assert.match(article, /articleNavigationItems\.push\(\{ id, label \}\)/);
  const articleH2Tags = article.match(/<h2\b[^>]*>/g) || [];
  assert.ok(articleH2Tags.length > 0 && articleH2Tags.every((tag) => /\bid=\{/.test(tag)), 'every shared-template H2 must have an anchor ID');
  assert.equal((article.match(/<h1\b/g) || []).length, 1, 'article template must preserve one H1');
  const nav = read('app/blog/[slug]/ArticleNavigation.tsx');
  assert.match(nav, /IntersectionObserver/);
  assert.match(nav, /<details/);
  assert.match(nav, /position|article-sidebar/);
  assert.match(nav, /aria-current=\{activeId === item\.id \? 'location' : undefined\}/);
  assert.equal((nav.match(/<NavigationLinks/g) || []).length, 2, 'desktop and mobile navigation must share the complete item list');
  assert.match(css, /\.article-sidebar\{[^}]*position:sticky/);
  assert.match(css, /\.article-body h2\[id\]\{[^}]*scroll-margin-top:/);
  assert.match(css, /\.article-navigation-mobile\{display:none\}/);
  assert.match(css, /@media\(max-width:960px\)[^{]*\{[^]*?\.article-navigation-mobile\{display:block/);
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
