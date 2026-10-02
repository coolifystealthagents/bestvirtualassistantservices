#!/usr/bin/env python3
"""Verify that the October 2 Blog Markdown links render as real anchors."""
import argparse
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / ".paperclip/daily-content/2026-10-02/blog.json"
ROUTE = ROOT / "app/blog/[slug]/page.tsx"
MARKDOWN_LINK = re.compile(r"\[([^\]\n]+)\]\((/[^\s)]*|https?://[^\s)]+)\)")


class ArticleParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.article_depth = 0
        self.anchor = None
        self.anchor_text = []
        self.anchors = []
        self.text = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "article":
            self.article_depth += 1
        if self.article_depth and tag == "a":
            self.anchor = attrs.get("href")
            self.anchor_text = []

    def handle_endtag(self, tag):
        if self.article_depth and tag == "a" and self.anchor:
            self.anchors.append((" ".join(self.anchor_text).strip(), self.anchor))
            self.anchor = None
        if tag == "article" and self.article_depth:
            self.article_depth -= 1

    def handle_data(self, data):
        if self.article_depth:
            self.text.append(data)
            if self.anchor:
                self.anchor_text.append(data)


def fetch(url):
    request = Request(url, headers={"User-Agent": "BES-84-rendered-link-validator/1.0"})
    with urlopen(request, timeout=30) as response:
        return response.status, response.read().decode("utf-8", "replace")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--base-url", default="http://127.0.0.1:3000")
    parser.add_argument("--check-destinations", action="store_true")
    args = parser.parse_args()
    entries = json.loads(MANIFEST.read_text(encoding="utf-8"))["entries"]
    errors = []
    destinations = set()
    route_source = ROUTE.read_text(encoding="utf-8")
    guarded_slugs = set(re.findall(r"^  '([^']+)',?$", route_source, re.M))
    expected_slugs = {entry["slug"] for entry in entries}
    if guarded_slugs != expected_slugs:
        errors.append(f"renderer scope mismatch: guarded={sorted(guarded_slugs)} expected={sorted(expected_slugs)}")
    for entry in entries:
        source = (ROOT / entry["sourcePath"]).read_text(encoding="utf-8")
        expected = MARKDOWN_LINK.findall(source)
        if len(expected) != 3:
            errors.append(f"{entry['slug']}: expected exactly 3 contextual/source Markdown links, found {len(expected)}")
            continue
        status, html = fetch(f"{args.base_url}{entry['route']}")
        rendered = ArticleParser()
        rendered.feed(html)
        article_text = " ".join(rendered.text)
        if status != 200:
            errors.append(f"{entry['slug']}: route returned HTTP {status}")
        if MARKDOWN_LINK.search(article_text):
            errors.append(f"{entry['slug']}: raw Markdown link remains visible")
        for label, href in expected:
            if (label, href) not in rendered.anchors:
                errors.append(f"{entry['slug']}: missing rendered anchor {label!r} -> {href}")
            destinations.add(urljoin(args.base_url, href) if href.startswith("/") else href)
    if args.check_destinations:
        for destination in sorted(destinations):
            try:
                status, _ = fetch(destination)
                if not 200 <= status < 400:
                    errors.append(f"destination returned HTTP {status}: {destination}")
            except Exception as exc:
                errors.append(f"destination failed: {destination}: {exc}")
    if errors:
        for error in errors:
            print(f"OCT02 BLOG LINK FAIL: {error}")
        raise SystemExit(1)
    print(f"OCT02 BLOG LINK PASS: {len(entries)} routes; contextual internal and authoritative external anchors rendered; no raw Markdown; {len(destinations)} destinations healthy")


if __name__ == "__main__":
    main()
