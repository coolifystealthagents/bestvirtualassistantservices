#!/usr/bin/env python3
import json,textwrap
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
ROOT=Path(__file__).resolve().parents[2];m=json.loads((ROOT/'publishing/2026-10-13/manifest.json').read_text());out=ROOT/'public/blog/images';out.mkdir(parents=True,exist_ok=True)
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf';regular='/System/Library/Fonts/Supplemental/Arial.ttf';pal=[((35,34,82),(102,145,194)),((25,52,72),(63,178,173)),((66,31,61),(205,104,151)),((48,49,28),(165,184,82)),((32,42,72),(114,125,220))]
for i,a in enumerate(m['items']):
 bg,ac=pal[i%len(pal)];im=Image.new('RGB',(1200,630),bg);d=ImageDraw.Draw(im);d.polygon([(745,0),(1200,0),(1200,630),(865,630),(610,320)],fill=ac)
 d.rounded_rectangle((55,45,255 if a['system']=='Blog' else 345,87),10,fill=ac);d.text((72,55),a['system'].upper(),font=ImageFont.truetype(bold,22),fill=(255,255,255))
 cx=980+(i%3-1)*20;cy=220+(i%4)*10
 for n in range(3):
  r=50+n*48;d.arc((cx-r,cy-r,cx+r,cy+r),15+i*19+n*20,260+i*7,fill=(255,255,255),width=5)
 d.line((825,470,1120,470),fill=(255,255,255),width=6);d.line((875,500,1120,500),fill=(255,255,255),width=3)
 size=48
 while True:
  f=ImageFont.truetype(bold,size);lines=textwrap.wrap(a['title'],27)
  if len(lines)<=5 and max(d.textbbox((0,0),x,font=f)[2] for x in lines)<=600:break
  size-=2
 y=145
 for line in lines:d.text((55,y),line,font=f,fill=(255,255,255));y+=size+12
 d.text((55,574),'BestVirtualAssistantServices.com',font=ImageFont.truetype(regular,20),fill=(255,255,255));d.text((430,576),f'OCT 13 · {i+1:02d}',font=ImageFont.truetype(bold,18),fill=ac)
 xmp=(f'<?xpacket begin=""?><x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/" dc:title="{a["title"]}"/></rdf:RDF></x:xmpmeta><?xpacket end="w"?>').encode()
 im.save(ROOT/'public'/a['thumbnail'].lstrip('/'),'WEBP',quality=87,method=6,xmp=xmp)
print(f"Rendered {len(m['items'])} exact-title WebP thumbnails")
