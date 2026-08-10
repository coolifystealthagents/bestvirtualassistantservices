#!/usr/bin/env python3
"""Machine-verifiable August 10 Blog date repair regression gate."""
import json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / ".paperclip/aug10-2026/blog.json"
INDEX = ROOT / "content/index.json"
ROUTE = ROOT / "app/blog/[slug]/page.tsx"
TARGET = "2026-08-10"

def fail(message):
    print(f"BLOG DATE REGRESSION FAIL: {message}", file=sys.stderr)
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

def git(*args):
    return subprocess.check_output(["git", *args], cwd=ROOT, text=True).strip()

manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
if manifest.get("schemaVersion") != 1 or manifest.get("contract") != "sites3-aug10-public-date-v6":
    fail("manifest schema or contract is invalid")
if manifest.get("family") != "blog" or manifest.get("targetDate") != TARGET or manifest.get("minimum", 0) < 22:
    fail("manifest family, target date, or minimum is invalid")
entries = manifest.get("entries", [])
if len(entries) < manifest["minimum"] or len({e["slug"] for e in entries}) != len(entries):
    fail("accepted count or slug uniqueness is invalid")
index = json.loads(INDEX.read_text(encoding="utf-8"))["posts"]
blog_index = [item for item in index if item.get("type") == "blog"]
by_slug = {item["slug"]: item for item in blog_index}
route_text = ROUTE.read_text(encoding="utf-8")
if "datePublished: post.published" not in route_text or "dateTime={post.published}" not in route_text or "canonical: `${site.url}/blog/${post.slug}`" not in route_text:
    fail("Blog route does not expose JSON-LD and visible datetime publication dates")
for entry in entries:
    slug = entry["slug"]
    if entry.get("route") != f"/blog/{slug}" or not entry["route"].startswith("/blog/"):
        fail(f"{slug}: route is not Blog-family-correct")
    if entry.get("sourceDate") != TARGET or entry.get("renderedDate") != TARGET:
        fail(f"{slug}: manifest date is invalid")
    if entry.get("provenance") not in {"original-aug10-batch", "repair-replacement"}:
        fail(f"{slug}: provenance is invalid")
    item = by_slug.get(slug)
    if not item or item.get("path") != entry.get("sourcePath") or not entry["sourcePath"].startswith("content/blog/"):
        fail(f"{slug}: source record is missing or not Blog-family routable")
    path = ROOT / entry["sourcePath"]
    if not path.is_file() or frontmatter(path).get(entry["sourceDateField"]) != TARGET:
        fail(f"{slug}: authoritative source date is not {TARGET}")
    commit, source = entry["introducedByCommit"], entry["sourcePath"]
    if not re.fullmatch(r"[0-9a-f]{40}", commit):
        fail(f"{slug}: introducing commit is not a full lowercase SHA")
    before = git("show", f"{commit}^:{source}") if subprocess.run(["git", "cat-file", "-e", f"{commit}^:{source}"], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0 else ""
    after = git("show", f"{commit}:{source}")
    if slug in before or slug not in after:
        fail(f"{slug}: absent-before/present-after provenance proof failed")
    if entry["provenance"] == "original-aug10-batch" and commit != "cda6b787530863f4a13891571f2eab77f054fcaa":
        fail(f"{slug}: original provenance does not point to the original batch commit")
    if entry["provenance"] == "repair-replacement" and commit == "cda6b787530863f4a13891571f2eab77f054fcaa":
        fail(f"{slug}: replacement provenance points to the original batch commit")
    if "datePublished" not in entry.get("renderedDateFields", []) or "time[datetime]" not in entry.get("renderedDateFields", []):
        fail(f"{slug}: rendered date fields are incomplete")
dates = [frontmatter(ROOT / item["path"]).get("publishedAt", "") for item in blog_index]
if dates != sorted(dates, reverse=True):
    fail("Blog index is not newest-first by source publication date")
sitemap = (ROOT / "app/sitemap.xml/route.ts").read_text(encoding="utf-8")
if "allBlogPosts" not in sitemap or "blogs.map(b=>`/blog/${b.slug}`)" not in sitemap:
    fail("sitemap route does not include all Blog posts")
print(f"BLOG DATE REGRESSION PASS: {len(entries)} accepted Blog slugs; provenance, source/rendered dates, canonical route, sitemap eligibility, and newest-first index verified")
