"""Validate all locally referenced editorial images and new photography before release."""
from pathlib import Path
import re,json,hashlib
from PIL import Image
root=Path(__file__).resolve().parents[1]
errors=[];images=[];refs=set()
for folder in ['app','content']:
 for file in (root/folder).rglob('*'):
  if file.suffix not in ['.ts','.tsx','.md','.mdx','.json']:continue
  refs.update(re.findall(r'''["'\s(](\/(?:blog|brand|photos|services|illustrations|icons)\/[^\s"'<>?){}]+\.(?:webp|png|jpe?g|svg))''',file.read_text()))
for ref in sorted(refs):
 p=root/'public'/ref.lstrip('/')
 if not p.exists(): errors.append({'path':ref,'error':'missing'});continue
 try:
  if p.suffix!='.svg':
   with Image.open(p) as im:
    size=im.size;im.verify()
   images.append({'path':ref,'width':size[0],'height':size[1]})
 except Exception as e:errors.append({'path':ref,'error':str(e)})
photos=list((root/'public/photos').glob('*.webp'));hashes=[hashlib.sha256(p.read_bytes()).hexdigest() for p in photos]
if len(set(hashes))!=len(hashes):errors.append({'error':'duplicate new photograph files'})
report={'references':len(refs),'decodedRasterImages':len(images),'newPhotos':len(photos),'uniqueNewPhotos':len(set(hashes)),'errors':errors,'images':images}
(root/'docs/redesign-image-audit.json').write_text(json.dumps(report,indent=2));print(json.dumps({k:v for k,v in report.items() if k!='images'}))
raise SystemExit(bool(errors))
