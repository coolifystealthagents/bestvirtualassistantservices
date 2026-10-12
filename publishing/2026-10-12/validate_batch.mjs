import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'../..');
const manifest=JSON.parse(readFileSync(resolve(root,'publishing/2026-10-12/manifest.json'),'utf8'));
const parse=(path)=>{const text=readFileSync(resolve(root,path),'utf8');const parts=text.split(/^---\s*$/m);assert.ok(parts.length>=3,`${path}: frontmatter`);const fm={};for(const line of parts[1].trim().split('\n')){const m=line.match(/^([\w_]+):\s*(.*)$/);if(!m)continue;let value=m[2].replace(/^['"]|['"]$/g,'');if(value.startsWith('['))value=value.slice(1,-1).split(',').map(x=>x.trim().replace(/^['"]|['"]$/g,''));fm[m[1]]=value}return {fm,body:parts.slice(2).join('---')}};
const norm=s=>s.toLowerCase().replace(/\[[^\]]+\]\([^)]+\)/g,' ').replace(/[^a-z0-9]+/g,' ').trim();
const prose=body=>body.split(/\n\s*\n/).map(x=>x.trim()).filter(x=>!x.startsWith('#')&&!/^\d+\.\s/.test(x)&&x.split(/\s+/).length>=35);
assert.equal(manifest.site,'BestVirtualAssistantServices.com');assert.equal(manifest.blogCount,12);assert.equal(manifest.researchCount,5);assert.equal(manifest.items.length,17);
assert.equal(new Set(manifest.items.map(x=>x.slug)).size,17);assert.equal(new Set(manifest.items.map(x=>x.title)).size,17);
const newParagraphs=[],paths=[];
for(const item of manifest.items){
  const {fm,body}=parse(item.source);paths.push(item.source);
  assert.equal(fm.slug,item.slug);assert.equal(fm.title,item.title);assert.equal(fm.publishedAt,'2026-10-12');assert.equal(fm.updatedAt,'2026-10-12');
  assert.doesNotMatch(item.title,/2026|October\s+12|10[-/]12/i,`${item.slug}: date-free title`);
  assert.match(body,/Published October 12, 2026\./,`${item.slug}: visible date`);assert.equal(fm.featuredImage,item.thumbnail);assert.equal(fm.heroImageAlt,item.title);assert.equal(item.thumbnailTitle,item.title);
  assert.ok(Array.isArray(fm.relatedArticles)&&fm.relatedArticles.length===3,`${item.slug}: related content`);
  assert.ok(body.match(/[A-Za-z0-9'-]+/g).length>=(item.system==='Research'?1400:850),`${item.slug}: depth`);
  const internal=new Set([...body.matchAll(/\]\((\/[^)]+)\)/g)].map(m=>m[1]));const external=new Set([...body.matchAll(/\]\((https:\/\/[^)]+)\)/g)].map(m=>m[1]));
  if(item.system==='Research'){assert.ok(internal.size>=2);assert.equal(fm.sources.length,10);assert.equal(external.size,10);assert.equal((body.match(/^\d+\. \[.+?\]\(https:\/\//gm)||[]).length,10)}else{assert.equal(internal.size,2);assert.equal(external.size,1)}
  assert.ok(existsSync(resolve(root,item.source)));assert.ok(existsSync(resolve(root,'public',item.thumbnail.slice(1))));newParagraphs.push(...prose(body));
}
assert.equal(new Set(newParagraphs.map(norm)).size,newParagraphs.length,'duplicate substantive paragraph within batch');
const current=new Set(paths.map(x=>resolve(root,x))),oldParagraphs=[];
for(const folder of ['content/blog','content/research'])for(const name of readdirSync(resolve(root,folder)).filter(x=>/\.mdx?$/.test(x))){const path=resolve(root,folder,name);if(current.has(path))continue;oldParagraphs.push(...prose(readFileSync(path,'utf8').replace(/^---[\s\S]*?---\s*/,'')))}
const oldSet=new Set(oldParagraphs.map(norm));const collisions=newParagraphs.filter(x=>oldSet.has(norm(x)));assert.deepEqual(collisions,[],'substantive prose collides with existing corpus');
const index=JSON.parse(readFileSync(resolve(root,'content/index.json'),'utf8'));for(const item of manifest.items){const hit=index.posts.filter(x=>x.slug===item.slug&&x.type===item.system.toLowerCase());assert.equal(hit.length,1,`${item.slug}: registry`)}
const checks=[['app/content-library.ts',/publishedContentBlogPosts/,/publishedContentResearchPosts/,/relatedArticles/,/relatedLinks/],['app/blog/page.tsx',/allBlogPosts/,/formatDate/],['app/research/page.tsx',/allResearchPosts/,/formatDate/],['app/blog/[slug]/page.tsx',/relatedPosts/,/article-date/],['app/research/[slug]/page.tsx',/research-toc/,/relatedLinks/,/publishedLabel/]];for(const [path,...patterns] of checks){const src=readFileSync(resolve(root,path),'utf8');for(const p of patterns)assert.match(src,p,`${path}: ${p}`)}
const images=manifest.items.map(x=>resolve(root,'public',x.thumbnail.slice(1))),hashes=images.map(path=>createHash('sha256').update(readFileSync(path)).digest('hex'));assert.equal(new Set(hashes).size,17,'unique thumbnails');
const sizes=JSON.parse(execFileSync('python3',['-c','import json,sys; from PIL import Image; print(json.dumps([list(Image.open(p).size)+[Image.open(p).format] for p in sys.argv[1:]]))',...images],{encoding:'utf8'}));for(const size of sizes)assert.deepEqual(size,[1200,630,'WEBP']);
console.log(`PASS: 12 Blog + 5 Research, ${newParagraphs.length} unique substantive paragraphs, zero existing-corpus collisions, 17 unique exact-title 1200x630 WEBP thumbnails, separate loaders/routes/indexes and related navigation verified.`);
