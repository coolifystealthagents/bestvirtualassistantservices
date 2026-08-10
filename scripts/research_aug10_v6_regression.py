#!/usr/bin/env python3
"""Machine-verifiable August 10 Research publication contract v6."""
import json, re, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
manifest_path = ROOT / '.paperclip/aug10-2026/research.json'
manifest = json.loads(manifest_path.read_text())
target = '2026-08-10'
errors = []
entries = manifest.get('entries', [])
if manifest.get('schemaVersion') != 1 or manifest.get('contract') != 'sites3-aug10-public-date-v6': errors.append('manifest schema/contract mismatch')
if manifest.get('family') != 'research' or manifest.get('domain') != 'bestvirtualassistantservices.com': errors.append('manifest identity mismatch')
if len(entries) < manifest.get('minimum', 10) or len({e.get('slug') for e in entries}) != len(entries): errors.append('accepted count/uniqueness failed')
index = json.loads((ROOT / 'content/index.json').read_text())
research_index = {p.get('slug'): p for p in index.get('posts', []) if p.get('type') == 'research'}
for e in entries:
    slug, route = e.get('slug'), e.get('route')
    source = ROOT / e.get('sourcePath', '')
    if route != f'/research/{slug}': errors.append(f'{slug}: route is not research family')
    if not source.is_file(): errors.append(f'{slug}: source record missing'); continue
    text = source.read_text()
    if not re.search(r'^slug:\s*' + re.escape(slug) + r'\s*$', text, re.M): errors.append(f'{slug}: source slug mismatch')
    if not re.search(r'^publishedAt:\s*2026-08-10\s*$', text, re.M): errors.append(f'{slug}: source date failed')
    if e.get('sourceDate') != target or e.get('renderedDate') != target: errors.append(f'{slug}: manifest date failed')
    if slug not in research_index: errors.append(f'{slug}: routed research index record missing')
    parent = subprocess.run(['git','cat-file','-e',f"{e['introducedByCommit']}^:{e['sourcePath']}"], cwd=ROOT, capture_output=True)
    present = subprocess.run(['git','cat-file','-e',f"{e['introducedByCommit']}:{e['sourcePath']}"], cwd=ROOT, capture_output=True)
    if parent.returncode == 0 or present.returncode != 0: errors.append(f'{slug}: introducing commit absent-before/present-after proof failed')
    built = ROOT / '.next/server/app' / (e['route'].lstrip('/') + '.html')
    if not built.exists(): errors.append(f'{slug}: built route missing')
    else:
        rendered = built.read_text(errors='ignore')
        if '2026-08-10' not in rendered or 'August 10, 2026' not in rendered: errors.append(f'{slug}: built/rendered date failed')
        if f'https://bestvirtualassistantservices.com{route}' not in rendered: errors.append(f'{slug}: canonical route missing')
sitemap = (ROOT / 'app/sitemap.xml/route.ts').read_text()
if 'allResearchPosts.map(r=>`/research/${r.slug}`)' not in sitemap: errors.append('research sitemap eligibility contract missing')
page = (ROOT / 'app/research/[slug]/page.tsx').read_text()
if 'datePublished: post.published' not in page or 'publishedTime: post.published' not in page or '<time dateTime={post.published}>{publishedLabel(post.published)}</time>' not in page: errors.append('render date fields contract missing')
index_page = (ROOT / 'app/research/page.tsx').read_text()
if 'b.published.localeCompare(a.published)' not in index_page: errors.append('index newest-first contract missing')
if errors:
    print('\n'.join(errors), file=sys.stderr); raise SystemExit(1)
print(f'August 10 Research v6 PASS: {len(entries)} accepted routes, provenance, source/rendered dates, canonical, sitemap, and newest-first checks passed')
