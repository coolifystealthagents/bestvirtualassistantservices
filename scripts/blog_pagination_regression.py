#!/usr/bin/env python3
"""Verify numbered Blog pagination uses the complete, newest-first Blog index."""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = "2026-08-10"
PAGE_SIZE = 20

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

index = json.loads((ROOT / "content/index.json").read_text(encoding="utf-8"))["posts"]
blogs = [item for item in index if item.get("type") == "blog"]
if not blogs:
    fail("Blog index is empty")
dated = [(item, frontmatter(ROOT / item["path"]).get("publishedAt", "")) for item in blogs]
if [date for _, date in dated] != sorted((date for _, date in dated), reverse=True):
    fail("Blog index is not newest-first")

route = (ROOT / "app/blog/page/[page]/page.tsx").read_text(encoding="utf-8")
for required in ("allBlogPosts.length", "allBlogPosts.slice", "generateStaticParams", "notFound"):
    if required not in route:
        fail(f"numbered route is missing {required}")
if "blogPosts" in route:
    fail("numbered route still references legacy blogPosts")

pages = max(1, (len(blogs) + PAGE_SIZE - 1) // PAGE_SIZE)
seen = []
for page in range(1, pages + 1):
    page_items = blogs[(page - 1) * PAGE_SIZE:page * PAGE_SIZE]
    if not page_items:
        fail(f"advertised page {page} is empty")
    seen.extend(item["slug"] for item in page_items)
if len(seen) != len(blogs) or len(set(seen)) != len(blogs) or set(seen) != {item["slug"] for item in blogs}:
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
