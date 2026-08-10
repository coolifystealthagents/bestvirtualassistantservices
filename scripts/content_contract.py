#!/usr/bin/env python3
"""Deterministic v2.4 Markdown/MDX indexer and publication validator."""
import argparse, json, re, sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content"
INDEX = CONTENT / "index.json"

def parse_frontmatter(path):
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        return {}, text
    end = text.find("\n---", 4)
    if end < 0:
        return {}, text
    data = {}
    for line in text[4:end].splitlines():
        if not line.strip() or line.lstrip().startswith("#") or ":" not in line:
            continue
        key, value = line.split(":", 1)
        value = value.strip()
        if value.startswith("["):
            try: data[key.strip()] = json.loads(value.replace("'", '"'))
            except Exception: data[key.strip()] = [x.strip().strip('"\'') for x in value[1:-1].split(",") if x.strip()]
        else: data[key.strip()] = value.strip('"\'')
    return data, text[end + 4:]

def urls(body):
    internal = re.findall(r"\]\((/[^)]+)\)", body)
    external = re.findall(r"\]\((https?://[^)]+)\)", body)
    return internal, external

def validate(path, kind):
    errors = []
    fm, body = parse_frontmatter(path)
    required = {"slug", "title", "excerpt", "publishedAt", "updatedAt", "category", "tags", "featuredImage", "heroImageAlt", "readingTime", "relatedArticles"}
    if kind == "research": required |= {"cluster", "sourceCount", "lastVerified", "key_takeaways", "keyStats", "sources"}
    for key in sorted(required):
        if key not in fm or fm[key] in ("", [], None): errors.append(f"{path}: missing {key}")
    if fm.get("slug") and fm["slug"] != path.stem: errors.append(f"{path}: slug must match filename")
    if isinstance(fm.get("relatedArticles"), list) and len(fm["relatedArticles"]) != 3: errors.append(f"{path}: relatedArticles must contain exactly three slugs")
    if kind == "research" and isinstance(fm.get("sources"), list) and len(fm["sources"]) < 10: errors.append(f"{path}: research requires at least ten sources")
    if fm.get("featuredImage") and not str(fm["featuredImage"]).startswith("/blog/images/"): errors.append(f"{path}: featuredImage must be under /blog/images/")
    h1 = re.findall(r"^# (?!#)(.+)$", body, re.M)
    h2 = re.findall(r"^## (.+)$", body, re.M)
    if len(h1) != 1: errors.append(f"{path}: expected exactly one H1")
    if not h2: errors.append(f"{path}: requires H2 sections")
    if h2 and ("introduction" == h2[0].strip().lower() or (fm.get("title", "").split(":")[0].lower() not in h2[0].lower() and kind == "blog")): errors.append(f"{path}: first H2 must contain the focus topic")
    internal, external = urls(body)
    if kind == "blog" and len(set(internal)) != 2: errors.append(f"{path}: blog requires exactly two distinct contextual internal links")
    if kind == "blog" and len(set(external)) != 1: errors.append(f"{path}: blog requires exactly one authoritative external link")
    if kind == "research" and len(set(internal)) < 2: errors.append(f"{path}: research requires at least two contextual internal links")
    if "—" in body or re.search(r"(?<!-)--(?!-)", body): errors.append(f"{path}: em dash or double hyphen found")
    return errors, fm

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--check", action="store_true"); ap.add_argument("--write-index", action="store_true"); args = ap.parse_args()
    entries, errors = [], []
    for kind in ("blog", "research"):
        directory = CONTENT / kind
        for path in sorted(directory.glob("*.mdx")) + sorted(directory.glob("*.md")):
            problems, fm = validate(path, kind); errors.extend(problems)
            entries.append({"type": kind, "slug": fm.get("slug", path.stem), "title": fm.get("title", ""), "path": str(path.relative_to(ROOT)), "featuredImage": fm.get("featuredImage", "")})
    blog_entries = sorted((entry for entry in entries if entry["type"] == "blog"), key=lambda x: x["slug"])
    blog_entries.sort(key=lambda x: (parse_frontmatter(ROOT / x["path"])[0].get("publishedAt", "") or ""), reverse=True)
    research_entries = sorted((entry for entry in entries if entry["type"] == "research"), key=lambda x: x["slug"])
    entries = blog_entries + research_entries
    if args.write_index:
        INDEX.write_text(json.dumps({"version": 1, "generatedBy": "scripts/content_contract.py", "posts": entries}, indent=2) + "\n", encoding="utf-8")
    if errors:
        print("\n".join(errors), file=sys.stderr); return 1
    print(f"content contract PASS: {len(entries)} MD/MDX articles; index deterministic")
    return 0
if __name__ == "__main__": raise SystemExit(main())
