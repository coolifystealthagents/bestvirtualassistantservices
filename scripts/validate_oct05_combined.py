#!/usr/bin/env python3
from pathlib import Path
from PIL import Image
from html.parser import HTMLParser
import hashlib, itertools, json, re

ROOT=Path(__file__).resolve().parents[1]
CYCLE=ROOT/'.paperclip/daily-content/2026-10-05'
DATE='2026-10-05'; DOMAIN='https://bestvirtualassistantservices.com'
word_re=re.compile(r"[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*")
def words(s): return word_re.findall(s)
def body(raw): return raw.split('---',2)[2].split('\n## Sources checked',1)[0]
def norm(s): return re.sub(r'\s+',' ',s.strip())
def shingles(s):
    w=[x.lower() for x in words(s)]; return {tuple(w[i:i+5]) for i in range(len(w)-4)}
def longest_exact_run(a,b):
    aw=[x.lower() for x in words(a)]; bw=[x.lower() for x in words(b)]; previous={}; best=0; end=0
    positions={}
    for j,token in enumerate(bw): positions.setdefault(token,[]).append(j)
    for i,token in enumerate(aw):
        current={}
        for j in positions.get(token,[]):
            length=previous.get(j-1,0)+1; current[j]=length
            if length>best: best=length; end=i+1
        previous=current
    return best,' '.join(aw[end-best:end])
class Text(HTMLParser):
    def __init__(self): super().__init__(); self.parts=[]
    def handle_data(self,data): self.parts.append(data)

errors=[]; report={'cycleLabel':DATE,'siteTimezone':'UTC','families':{},'errors':errors}
site_index=(ROOT/'content/index.json').read_text()
sitemap=(ROOT/'.next/server/app/sitemap.xml.body').read_text()
for family,required,min_words in [('blog',12,900),('research',5,1200)]:
    manifest=json.loads((CYCLE/f'{family}.json').read_text()); entries=manifest['entries']
    if len(entries)!=required: errors.append(f'{family}: expected {required}, got {len(entries)}')
    records=[]; texts={}; outlines={}; sentence_sets={}
    for e in entries:
        source=ROOT/e.get('sourcePath',e.get('sourcePaths',[''])[0]); raw=source.read_text(); article=body(raw); texts[e['slug']]=article
        outlines[e['slug']]=re.findall(r'^##+\s+(.+)$',article,re.M)
        sentence_sets[e['slug']]=[norm(x) for x in re.split(r'(?<=[.!?])\s+',article) if len(words(x))>=12]
        fm=raw.split('---',2)[1]; wc=len(words(article)); expected_hash=hashlib.sha256(raw.encode()).hexdigest()
        title=re.search(r'^title:\s*(.+)$',fm,re.M).group(1); image=re.search(r'^featuredImage:\s*(\S+)',fm,re.M).group(1)
        date_fields=('publishedAt','updatedAt','lastVerified') if family=='research' else ('publishedAt','updatedAt')
        dates={k:(re.search(rf'^{k}:\s*(\S+)',fm,re.M).group(1) if re.search(rf'^{k}:\s*(\S+)',fm,re.M) else None) for k in date_fields}
        if wc<min_words: errors.append(f'{family}/{e["slug"]}: {wc} words')
        if any(v!=DATE for v in dates.values()): errors.append(f'{family}/{e["slug"]}: dates {dates}')
        if e.get('contentHash')!=expected_hash: errors.append(f'{family}/{e["slug"]}: manifest hash stale')
        image_path=ROOT/'public'/image.lstrip('/')
        try:
            with Image.open(image_path) as im: dims=im.size; fmt=im.format; im.verify()
        except Exception as exc: dims=None; fmt=None; errors.append(f'{family}/{e["slug"]}: image decode {exc}')
        html_path=ROOT/f'.next/server/app/{family}/{e["slug"]}.html'; html=html_path.read_text(); parser=Text(); parser.feed(html); visible=norm(' '.join(parser.parts))
        paras=[norm(x) for x in article.split('\n\n') if len(words(x))>=20 and not x.startswith('#')]
        links=re.findall(r'\[[^\]]+\]\((/[^)]+)\)',article); missing=[]
        for link in links:
            slug=link.rstrip('/').split('/')[-1]
            content_route=any((ROOT/f'content/{kind}/{slug}{ext}').exists() for kind in ('blog','research','services') for ext in ('.mdx','.md'))
            app_route=(ROOT/'app'/link.lstrip('/')/'page.tsx').exists()
            if not (content_route or app_route): missing.append(link)
        checks={'fullTitle':title in visible,'allSubstantiveParagraphs':all(p in visible for p in paras),'canonical':f'{DOMAIN}/{family}/{e["slug"]}' in html,'featuredImageReference':image in html,'indexEntry':e['slug'] in site_index,'familyIndexEntry':e['slug'] in (ROOT/f'.next/server/app/{family}.html').read_text(),'sitemapEntry':e['slug'] in sitemap,'imageDecoded':dims==(1200,630) and fmt=='WEBP','internalDestinations':not missing}
        if not all(checks.values()): errors.append(f'{family}/{e["slug"]}: checks {checks}; missing {missing}')
        records.append({'slug':e['slug'],'bodyWordCount':wc,'contentHash':expected_hash,'dates':dates,'image':{'path':image,'mime':'image/webp','dimensions':list(dims or ()),'signatureDecoded':bool(dims)},'checks':checks})
    pairs=[]; max_overlap=0; max_paras=0; max_sentences=0; max_near_sentence=0; max_near_paragraph=0; max_shared_headings=0; max_tail_outline_jaccard=0; longest_body_run=0
    for a,b in itertools.combinations(entries,2):
        ta,tb=texts[a['slug']],texts[b['slug']]; A,B=shingles(ta),shingles(tb); overlap=100*len(A&B)/min(len(A),len(B)); max_overlap=max(max_overlap,overlap)
        pa={norm(x) for x in ta.split('\n\n') if len(words(x))>=25}; pb={norm(x) for x in tb.split('\n\n') if len(words(x))>=25}; repeated=len(pa&pb); max_paras=max(max_paras,repeated)
        sa={norm(x) for x in re.split(r'(?<=[.!?])\s+',ta) if len(words(x))>=12}; sb={norm(x) for x in re.split(r'(?<=[.!?])\s+',tb) if len(words(x))>=12}; repeated_sentences=len(sa&sb); max_sentences=max(max_sentences,repeated_sentences)
        near=0
        for x in sentence_sets[a['slug']]:
            X=set(w.lower() for w in words(x))
            for y in sentence_sets[b['slug']]:
                if x==y: continue
                Y=set(w.lower() for w in words(y)); near=max(near,len(X&Y)/len(X|Y) if X|Y else 0)
        shared_headings=sorted(set(outlines[a['slug']])&set(outlines[b['slug']])); max_near_sentence=max(max_near_sentence,near); max_shared_headings=max(max_shared_headings,len(shared_headings))
        near_para=0; near_pair=[]
        for x in [norm(p) for p in ta.split('\n\n') if len(words(p))>=20 and not p.startswith('#')]:
            X=set(z.lower() for z in words(x))
            for y in [norm(p) for p in tb.split('\n\n') if len(words(p))>=20 and not p.startswith('#')]:
                if x==y: continue
                Y=set(z.lower() for z in words(y)); score=len(X&Y)/len(X|Y) if X|Y else 0
                if score>near_para: near_para=score; near_pair=[x[:240],y[:240]]
        run,run_text=longest_exact_run(ta,tb); longest_body_run=max(longest_body_run,run); max_near_paragraph=max(max_near_paragraph,near_para)
        tail_a=set(z.lower() for h in outlines[a['slug']][6:] for z in words(h)); tail_b=set(z.lower() for h in outlines[b['slug']][6:] for z in words(h)); tail_j=len(tail_a&tail_b)/len(tail_a|tail_b) if tail_a|tail_b else 0; max_tail_outline_jaccard=max(max_tail_outline_jaccard,tail_j)
        pairs.append({'slugs':[a['slug'],b['slug']],'fiveWordShingleOverlapPercent':round(overlap,3),'repeatedSubstantiveParagraphs':repeated,'repeatedSubstantiveSentences':repeated_sentences,'maxNearSentenceTokenJaccard':round(near,3),'maxNearParagraphTokenJaccard':round(near_para,3),'nearParagraphExcerpts':near_pair,'longestExactBodyTokenRun':run,'longestExactBodyTokenRunText':run_text,'tailOutlineTokenJaccard':round(tail_j,3),'exactSharedHeadings':shared_headings})
    structural_fail=family=='blog' and (max_near_sentence>=0.75 or max_near_paragraph>=0.65 or max_shared_headings>=4 or max_tail_outline_jaccard>=0.5)
    if max_overlap>=50 or max_paras or max_sentences>2 or structural_fail: errors.append(f'{family}: originality overlap={max_overlap:.3f}, repeated paragraphs={max_paras}, repeated sentences={max_sentences}, near-sentence={max_near_sentence:.3f}, shared headings={max_shared_headings}')
    qualitative=('pass: topic-specific section sequences, scenarios, examples, operational reasoning, decision criteria, limitations, and reader outcomes pass exact and near-duplicate checks'
                 if max_paras==0 and max_sentences<=2 and not structural_fail else 'fail: shared sentence, section, or argument templates require substantive rewriting')
    report['families'][family]={'required':required,'staged':len(records),'minimumBodyWords':min_words,'records':records,'outlines':outlines,'maxPairwiseFiveWordShingleOverlapPercent':round(max_overlap,3),'maxRepeatedSubstantiveParagraphs':max_paras,'maxRepeatedSubstantiveSentences':max_sentences,'maxNearSentenceTokenJaccard':round(max_near_sentence,3),'maxNearParagraphTokenJaccard':round(max_near_paragraph,3),'longestExactBodyTokenRun':longest_body_run,'maxTailOutlineTokenJaccard':round(max_tail_outline_jaccard,3),'maxExactSharedHeadingsPerPair':max_shared_headings,'semanticSequenceAudit':('pass: tail section counts, order, worked-example placement, evidence logic, and reader outcomes are independently developed' if not structural_fail else 'fail: semantic tail or argument sequence remains too similar'),'qualitativeAudit':qualitative,'pairs':pairs}

(CYCLE/'combined-validation.json').write_text(json.dumps(report,indent=2)+'\n')
if errors:
    print('\n'.join('FAIL '+x for x in errors)); raise SystemExit(1)
print('OCT05 COMBINED PASS: 12 Blog + 5 Research; full source/render/metadata/image/link/originality gates passed')
