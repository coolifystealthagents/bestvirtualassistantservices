#!/usr/bin/env python3
"""Regression gate for the accepted August 10, 2026 Research batch."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "scripts/accepted-research-2026-08-10.txt"
INDEX = json.loads((ROOT / "content/index.json").read_text())
slugs = [line.strip() for line in MANIFEST.read_text().splitlines() if line.strip()]
errors = []
if len(slugs) < 10 or len(slugs) != len(set(slugs)):
    errors.append(f"accepted manifest must contain at least 10 unique slugs (got {len(slugs)})")
for slug in slugs:
    path = ROOT / "content/research" / f"{slug}.mdx"
    if not path.exists():
        errors.append(f"{slug}: source file is not present")
        continue
    text = path.read_text()
    if not re.search(r"^publishedAt:\s*2026-08-10\s*$", text, re.M):
        errors.append(f"{slug}: source date is not 2026-08-10")
    if not re.search(r"^updatedAt:\s*2026-08-10\s*$", text, re.M):
        errors.append(f"{slug}: updated date is not 2026-08-10")
    if not re.search(rf"^slug:\s*{re.escape(slug)}\s*$", text, re.M):
        errors.append(f"{slug}: front matter slug mismatch")
    if not any(p.get("type") == "research" and p.get("slug") == slug for p in INDEX["posts"]):
        errors.append(f"{slug}: missing from content index")

page = (ROOT / "app/research/[slug]/page.tsx").read_text()
index_page = (ROOT / "app/research/page.tsx").read_text()
for needle, label in [("datePublished: post.published", "JSON-LD datePublished"), ("publishedTime: post.published", "OpenGraph published time"), ("<time dateTime={post.published}>", "visible article date")]:
    if needle not in page and needle not in (ROOT / "app/research/[slug]/rich-report.tsx").read_text():
        errors.append(f"render contract missing {label}")
if "sort((a,b)=>b.published.localeCompare(a.published)||a.slug.localeCompare(b.slug))" not in index_page:
    errors.append("Research index is not explicitly newest-first")
if "allResearchPosts" not in index_page:
    errors.append("Research index does not use routed content records")

if errors:
    print("\n".join(errors), file=sys.stderr)
    sys.exit(1)
print(f"August 10 Research repair PASS: {len(slugs)} accepted slugs; source dates, routed index membership, render metadata, and newest-first index contract verified")
