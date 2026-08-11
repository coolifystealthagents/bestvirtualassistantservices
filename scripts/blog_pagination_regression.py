#!/usr/bin/env python3
"""Verify numbered Blog pagination uses the complete, newest-first Blog index."""
import json
import re
import sys
from functools import cmp_to_key
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = "2026-08-10"
DATA_FILE = ROOT / "app/data.ts"
FLEET_DATA_FILE = ROOT / "app/fleet-data.ts"
ARTICLE_ROUTE = ROOT / "app/blog/[slug]/page.tsx"
SITEMAP_ROUTE = ROOT / "app/sitemap.xml/route.ts"

def fail(message):
    print(f"BLOG PAGINATION REGRESSION FAIL: {message}", file=sys.stderr)
    raise SystemExit(1)

def frontmatter(path):
    text = path.read_text(encoding="utf-8")
    match = re.search(r"^---\n(.*?)\n---", text, re.M | re.S)
    values = {}
    for line in (match.group(1) if match else "").splitlines():
        if ":" in line:
            key, value = line.split(":", 1)
            values[key.strip()] = value.strip().strip("'\"")
    return values

manifest = json.loads((ROOT / ".paperclip/aug10-2026/blog.json").read_text(encoding="utf-8"))
if manifest.get("family") != "blog" or len(manifest.get("entries", [])) < manifest.get("minimum", 22):
    fail("committed Blog manifest is missing or below minimum")
manifest_slugs = [entry.get("slug") for entry in manifest["entries"]]
if len(manifest_slugs) != len(set(manifest_slugs)) or any(not slug for slug in manifest_slugs):
    fail("manifest slugs are not unique")

index = json.loads((ROOT / "content/index.json").read_text(encoding="utf-8"))["posts"]
indexed_blogs = [item for item in index if item.get("type") == "blog"]

# Mirror app/content-library.ts: production merges the indexed content with
# the legacy records in app/data.ts, de-duplicates by slug, then sorts by
# published date descending and title ascending.
data_text = DATA_FILE.read_text(encoding="utf-8")
legacy_block = data_text.split("export const blogPosts: BlogPost[] = [", 1)[1].split("export const allPaths", 1)[0]
legacy_slugs = re.findall(r"(?:['\"]slug['\"]|\bslug):\s*['\"]([^'\"]+)['\"]", legacy_block)
legacy_titles = re.findall(r"(?:['\"]title['\"]|\btitle):\s*['\"]([^'\"]+)['\"]", legacy_block)
if len(legacy_slugs) != len(legacy_titles):
    fail("could not derive legacy Blog slug/title records")
legacy = [{"slug": slug, "title": title, "path": None, "published": ""}
          for slug, title in zip(legacy_slugs, legacy_titles)]
indexed = []
for item in indexed_blogs:
    source = ROOT / item["path"]
    indexed.append({"slug": item["slug"], "title": item["title"], "path": item["path"],
                    "published": frontmatter(source).get("publishedAt", "")})
by_slug = {item["slug"]: item for item in legacy}
for item in indexed:
    by_slug.setdefault(item["slug"], item)
blogs = list(by_slug.values())
# Mirror app/content-library.ts: descending date, then the exact accepted August
# 10 manifest batch, then title. This makes the accepted batch deterministic
# and keeps it ahead of the legacy records.
manifest_rank = {slug: index for index, slug in enumerate(manifest_slugs)}
def compare_posts(left, right):
    date_order = (right["published"] > left["published"]) - (right["published"] < left["published"])
    if date_order:
        return date_order
    left_rank = manifest_rank.get(left["slug"])
    right_rank = manifest_rank.get(right["slug"])
    if left_rank is not None or right_rank is not None:
        if left_rank is None:
            return 1
        if right_rank is None:
            return -1
        return left_rank - right_rank
    return (left["title"] > right["title"]) - (left["title"] < right["title"])
blogs.sort(key=cmp_to_key(compare_posts))
if not blogs:
    fail("Blog index is empty")
if len(blogs) != len(indexed_blogs) + len(legacy) - len(set(legacy_slugs) & {item["slug"] for item in indexed_blogs}):
    fail("merged Blog dataset does not include indexed and legacy records exactly once")
if blogs[:len(manifest_slugs)] and [item["slug"] for item in blogs[:len(manifest_slugs)]] != manifest_slugs:
    fail("accepted manifest slugs are not the first allBlogPosts entries")
if any(slug not in {item["slug"] for item in blogs} for slug in manifest_slugs):
    fail("manifest contains a slug missing from allBlogPosts")
if [item["published"] for item in blogs] != sorted((item["published"] for item in blogs), reverse=True):
    fail("Blog index is not newest-first")

fleet_text = FLEET_DATA_FILE.read_text(encoding="utf-8")
page_size_match = re.search(r"export const postsPerPage\s*=\s*(\d+)\s*;", fleet_text)
if not page_size_match:
    fail("could not derive production postsPerPage")
posts_per_page = int(page_size_match.group(1))
if posts_per_page < 1:
    fail("production postsPerPage is invalid")

route = (ROOT / "app/blog/page/[page]/page.tsx").read_text(encoding="utf-8")
for required in ("allBlogPosts.length", "allBlogPosts.slice", "generateStaticParams", "notFound"):
    if required not in route:
        fail(f"numbered route is missing {required}")
if "blogPosts" in route:
    fail("numbered route still references legacy blogPosts")

article_route = ARTICLE_ROUTE.read_text(encoding="utf-8")
for required in ("allBlogPosts", "datePublished: post.published", "dateTime={post.published}", "canonical: `${site.url}/blog/${post.slug}`"):
    if required not in article_route:
        fail(f"article route is missing {required}")
sitemap_route = SITEMAP_ROUTE.read_text(encoding="utf-8")
if "allBlogPosts" not in sitemap_route or "blogs.map(b=>`/blog/${b.slug}`)" not in sitemap_route:
    fail("sitemap is not sourced from allBlogPosts")

pages = max(1, (len(blogs) + posts_per_page - 1) // posts_per_page)
expected_sizes = [min(posts_per_page, len(blogs) - page * posts_per_page) for page in range(pages)]
if expected_sizes != [20, 20, 20, 12]:
    fail(f"unexpected production page slices: {expected_sizes}")
seen = []
for page in range(1, pages + 1):
    page_items = blogs[(page - 1) * posts_per_page:page * posts_per_page]
    if not page_items:
        fail(f"advertised page {page} is empty")
    seen.extend(item["slug"] for item in page_items)
if len(seen) != 72 or len(set(seen)) != 72 or set(seen) != {item["slug"] for item in blogs}:
    fail("traversing advertised pages does not cover every Blog entry exactly once")

by_slug = {item["slug"]: item for item in blogs}
for entry in manifest["entries"]:
    item = by_slug.get(entry["slug"])
    if not item or item["path"] != entry["sourcePath"]:
        fail(f"manifest entry {entry['slug']} is not in the routed Blog index")
    if frontmatter(ROOT / item["path"]).get("publishedAt") != TARGET:
        fail(f"manifest entry {entry['slug']} has the wrong source date")
    if entry.get("renderedDate") != TARGET:
        fail(f"manifest entry {entry['slug']} has the wrong rendered date")
print(f"BLOG PAGINATION REGRESSION PASS: {pages} advertised pages cover {len(blogs)} Blog entries exactly once; manifest has {len(manifest['entries'])} accepted entries")
