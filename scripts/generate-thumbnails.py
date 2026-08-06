#!/usr/bin/env python3
"""Deterministic Pillow thumbnails: 1200x630 WebP, no daily API calls."""
import hashlib, json, math, re
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from content_contract import parse_frontmatter

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT / "thumbnail-framework/brand_config.json").read_text())
OUT = ROOT / "public/blog/images"
W, H = 1200, 630

def rgb(value):
    value = value.lstrip("#"); return tuple(int(value[i:i+2], 16) for i in (0, 2, 4))
def font(size, bold=False):
    candidates = ["/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]
    for candidate in candidates:
        if Path(candidate).exists(): return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()
def wrap(text, limit=30):
    words = text.split(); lines=[]; line=""
    for word in words:
        if line and len(line)+len(word)+1 > limit: lines.append(line); line=word
        else: line = (line + " " + word).strip()
    if line: lines.append(line)
    return lines[:3]
def render(slug, title, label):
    concepts = CONFIG["concepts"]; index = int(hashlib.sha256(slug.encode()).hexdigest(), 16) % len(concepts)
    base, accent = rgb(CONFIG["colors"]["background"]), rgb(CONFIG["colors"]["accent"])
    image = Image.new("RGB", (W,H), base); d=ImageDraw.Draw(image, "RGBA")
    # Stable concept-specific geometry; the left 55% remains text-safe.
    for n in range(10):
        x = 720 + ((index * 83 + n * 97) % 500); y = (index * 41 + n * 67) % 610
        radius = 20 + ((index+n)*13)%100
        if index % 3 == 0: d.polygon([(x,y),(W,y-90),(W,y+90)], fill=accent+(35,))
        elif index % 3 == 1: d.ellipse((x-radius,y-radius,x+radius,y+radius), outline=accent+(75,), width=4)
        else: d.line((x-180,y+80,x+100,y-80), fill=accent+(70,), width=5)
    d.rectangle((0,0,W,H), fill=rgb(CONFIG["colors"]["overlay"])+(105,))
    d.text((60,58), label.upper(), font=font(20, True), fill=accent, spacing=4)
    y=155
    for line in wrap(title): d.text((60,y), line, font=font(56, True), fill=rgb(CONFIG["colors"]["text"]), stroke_width=2, stroke_fill=(0,0,0,100)); y += 67
    d.text((60, y+18), "Virtual assistant services · Practical guidance", font=font(22), fill=rgb(CONFIG["colors"]["secondary"]))
    return image
def main():
    OUT.mkdir(parents=True, exist_ok=True); count=0
    for kind in ("blog", "research"):
        for path in sorted((ROOT/"content"/kind).glob("*.mdx")) + sorted((ROOT/"content"/kind).glob("*.md")):
            fm, _ = parse_frontmatter(path); image_path = str(fm.get("featuredImage", "")); target = ROOT / "public" / image_path.lstrip("/") if image_path else OUT / f"{path.stem}.webp"
            if target.suffix.lower() not in (".webp", ".png", ".jpg", ".jpeg"): target = OUT / f"{path.stem}.webp"
            target.parent.mkdir(parents=True, exist_ok=True); render(path.stem, fm.get("title", path.stem), fm.get("category", kind)).save(target, "WEBP", quality=88, method=6); count += 1
    print(f"thumbnail framework PASS: {count} deterministic 1200x630 assets rendered")
if __name__ == "__main__": main()
