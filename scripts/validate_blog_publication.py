#!/usr/bin/env python3
"""Regression gate for the accepted August 10 Blog publication manifest."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "scripts/blog_publication_manifest_2026-08-10.json"
INDEX = ROOT / "content/index.json"
ROUTE = ROOT / "app/blog/[slug]/page.tsx"

def frontmatter(path):
    text = path.read_text(encoding="utf-8")
    block = re.search(r"^---\n(.*?)\n---", text, re.M | re.S)
    values = {}
    for line in (block.group(1) if block else "").splitlines():
        if ":" in line:
            key, value = line.split(":", 1)
            values[key.strip()] = value.strip().strip("'\"")
    return values

def fail(message):
    print(f"BLOG DATE REGRESSION FAIL: {message}", file=sys.stderr)
    raise SystemExit(1)

manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
slugs, date = manifest["slugs"], manifest["publicationDate"]
if manifest["family"] != "blog" or date != "2026-08-10" or len(slugs) < 22 or len(set(slugs)) != len(slugs):
    fail("manifest family, date, count, or uniqueness is invalid")
blog_index = [item for item in json.loads(INDEX.read_text(encoding="utf-8"))["posts"] if item["type"] == "blog"]
by_slug = {item["slug"]: item for item in blog_index}
for slug in slugs:
    item = by_slug.get(slug)
    if not item:
        fail(f"{slug}: missing from Blog index")
    path = ROOT / item["path"]
    if not path.is_file():
        fail(f"{slug}: source path is not routable")
    if frontmatter(path).get("publishedAt") != date:
        fail(f"{slug}: source publishedAt is not {date}")
route = ROUTE.read_text(encoding="utf-8")
if "datePublished: post.published" not in route or "Published {post.published}" not in route:
    fail("Blog route does not render the authoritative publication date")
dates = [frontmatter(ROOT / item["path"]).get("publishedAt", "") for item in blog_index]
if dates != sorted(dates, reverse=True):
    fail("Blog index is not newest-first by source publication date")
print(f"BLOG DATE REGRESSION PASS: {len(slugs)} accepted slugs; source dates, route metadata, routability, and index order verified")
