# Markdown/MDX publishing contract

Daily publishing writes only to `content/blog/{slug}.mdx` or
`content/research/{slug}.mdx`. Both directories are intentionally separate
from the existing app data layer so the foundation can be adopted without
changing current routes.

## Required frontmatter

Blog posts require `slug`, `title`, `excerpt`, `publishedAt`, `updatedAt`,
`category`, `tags`, `featuredImage`, `heroImageAlt`, `readingTime`, and
`relatedArticles` (exactly three slugs). Research posts use the same fields and
also require `cluster`, `sourceCount`, `lastVerified`, `key_takeaways`,
`keyStats`, and `sources` (at least ten URLs).

`featuredImage` must point to a 1200x630 WebP under `/blog/images/`.
`canonical` is derived from the slug and must not be hand-edited. Article
prose must contain exactly two distinct contextual internal links and exactly
one authoritative external link for blogs. Research prose must contain at
least two contextual internal links and a numbered `## Sources` section.

The build runs deterministic index and content validation before Next.js.
Thumbnails are rendered locally with Pillow; no daily image API call is used.
