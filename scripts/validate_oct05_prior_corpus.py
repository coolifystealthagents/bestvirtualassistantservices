#!/usr/bin/env python3
"""Audit the October 5 candidate against the complete pre-cycle corpus."""
from pathlib import Path
import hashlib, itertools, json, re, subprocess

ROOT=Path(__file__).resolve().parents[1]
BASELINE='de7a4524f46e323421c51041a930d84bf4b61414'
CYCLE=ROOT/'.paperclip/daily-content/2026-10-05'
DISTINCTIONS={
'property-management-virtual-assistant-tenant-communications':'The prior bilingual-service guide evaluates language capability. This article instead models resident-message classes, housing-decision boundaries, maintenance evidence, vendor disclosure, and an acknowledged emergency route.',
'construction-virtual-assistant-bid-coordination':'The prior task-brief article is a general delegation format. This article follows a bid package through addenda, subcontractor outreach, estimator exceptions, portal failure, and authorized submission evidence.',
'architecture-firm-virtual-assistant-submittal-tracking':'The prior inventory-controls study concerns stock records. This article treats linked submittal revisions, discipline routing, professional comment conflicts, contractual aging data, and controls against issuing a draft disposition.',
'saas-virtual-assistant-customer-onboarding-scope':'The prior customer-onboarding checklist is a general onboarding aid. This article tests purchased SaaS outcomes, configuration permissions, custom-integration ownership, accessibility during training, and acceptance into support.',
'online-course-virtual-assistant-student-operations':'The prior article-metrics piece concerns content operations. This article addresses learner access, accessibility privacy, moderation, late-work judgment, certificate eligibility, and launch-week continuity.',
'membership-association-virtual-assistant-renewal-operations':'The prior service-level review discusses general operational performance. This article reconciles dues events, renewal segments, grace and discount authority, benefit access, consent, and payment discrepancies.',
'nonprofit-virtual-assistant-donor-records-workflow':'The prior donor-controls research states broad controls. This article works through settlement reconciliation, conflicting gift designations, duplicate identity evidence, noncash review, anonymity exports, and acknowledgement release states.',
'marketplace-seller-virtual-assistant-catalog-operations':'The prior daily-retrospective article concerns editorial operations. This article tests parent-child catalog inheritance, product-claim evidence, suppressions, regional preview, rollback, and the actual customer listing.',
'healthcare-virtual-assistant-referral-coordination':'The prior financial-boundary study concerns spending authority. This article follows an ordered referral, minimum-necessary packet, symptom interruption, payer-status boundary, patient choice, rejected packet, and loop closure.',
'accounting-firm-virtual-assistant-client-document-intake':'The prior intake-call article prepares a client conversation. This article preserves document provenance, separates presence from sufficiency, handles conflicting payroll reports and wrong-client data, and produces an engagement-owned exception index.',
'insurance-agency-virtual-assistant-policy-service-intake':'The prior interview scorecard is a general provider-selection tool. This article separates verified identity, licensed coverage interpretation, certificate wording, claim facts, corrections, and communication evidence.',
'home-services-virtual-assistant-dispatch-intake':'The prior daily-article intake piece is an editorial queue design. This article tests dispatch capacity, observable safety triggers, restricted entry details, diagnostic-fee language, new hazards, and acknowledged shift ownership.',
'virtual-assistant-provider-supervision-evidence-study':'The prior supervision-cadence study asks whether a managed-service label is verifiable and proposes a general cadence test. This study decomposes supervision into intake, method review, acceptance, and recovery, then compares detection and correction evidence through a role-matched pilot and decision record.',
'virtual-assistant-billing-time-reconciliation-study':'The prior time-tracking study asks what activity evidence can prove. This study begins with the commercial invoice question, reconciles billed categories backward to accepted outputs, tests pause and rework exceptions, and limits monitoring through a privacy boundary. The closest sentence repeats the same cited PSA statistic, not an argument or example.',
'virtual-assistant-subcontractor-transparency-study':'The prior supervision study concerns reviewer evidence. This study maps the delivery chain across subcontractors, partner teams, replacements, material-change notice, incident oversight, access inheritance, and exit obligations.',
'virtual-assistant-business-continuity-test-study':'The prior bilingual-support study tests language claims. This study runs a service-interruption exercise across alternate communications, queue truth, backup access, recovery priorities, and post-test learning.',
'virtual-assistant-service-exit-data-return-study':'The prior AI-disclosure study examines tool transparency; the separately reviewed offboarding article provides a broad exit test. This study narrows the decision to return of work product and business records, open-work reconciliation, hidden access paths, inventory-based deletion exceptions, and two independent sign-offs.',
}
word_re=re.compile(r"[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*")
def words(s): return word_re.findall(s)
def norm(s): return re.sub(r'\s+',' ',s.strip())
def body(raw): return raw.split('---',2)[2].split('\n## Sources checked',1)[0] if raw.startswith('---') else raw
def title(raw,path):
    fm=raw.split('---',2)[1] if raw.startswith('---') else ''
    m=re.search(r'^title:\s*["\']?(.+?)["\']?$',fm,re.M)
    return m.group(1).strip() if m else path.stem.replace('-',' ').title()
def shingles(s,n=5):
    w=[x.lower() for x in words(s)]; return {tuple(w[i:i+n]) for i in range(len(w)-n+1)}
def units(s,kind):
    chunks=s.split('\n\n') if kind=='paragraph' else re.split(r'(?<=[.!?])\s+',s)
    minimum=20 if kind=='paragraph' else 12
    return [norm(x) for x in chunks if len(words(x))>=minimum and not x.lstrip().startswith('#')]
def jac(a,b):
    A={x.lower() for x in words(a)}; B={x.lower() for x in words(b)}
    return len(A&B)/len(A|B) if A|B else 0
def git(*args): return subprocess.check_output(['git',*args],cwd=ROOT,text=True)

paths=[p for p in git('ls-tree','-r','--name-only',BASELINE,'content/blog','content/research').splitlines() if p.endswith(('.md','.mdx'))]
prior=[]
for rel in paths:
    raw=git('show',f'{BASELINE}:{rel}'); article=body(raw)
    prior.append({'path':rel,'slug':Path(rel).stem,'title':title(raw,Path(rel)),'body':article,'shingles':shingles(article),'paragraphs':units(article,'paragraph'),'sentences':units(article,'sentence'),'hash':hashlib.sha256(raw.encode()).hexdigest()})

prior_paras={}
prior_sents={}
for p in prior:
    for x in p['paragraphs']: prior_paras.setdefault(x,[]).append(p['slug'])
    for x in p['sentences']: prior_sents.setdefault(x,[]).append(p['slug'])

current=[]
for family in ('blog','research'):
    manifest=json.loads((CYCLE/f'{family}.json').read_text())
    for e in manifest['entries']:
        path=ROOT/e.get('sourcePath',e.get('sourcePaths',[''])[0]); raw=path.read_text(); article=body(raw)
        current.append({'family':family,'slug':e['slug'],'title':title(raw,path),'body':article,'shingles':shingles(article),'paragraphs':units(article,'paragraph'),'sentences':units(article,'sentence'),'hash':hashlib.sha256(raw.encode()).hexdigest()})

records=[]; errors=[]
for c in current:
    ranked=[]
    ct={x.lower() for x in words(c['title'])}
    for p in prior:
        overlap=100*len(c['shingles']&p['shingles'])/max(1,min(len(c['shingles']),len(p['shingles'])))
        pt={x.lower() for x in words(p['title'])}; title_j=len(ct&pt)/len(ct|pt) if ct|pt else 0
        ranked.append((max(overlap/100,title_j),overlap,title_j,p))
    ranked.sort(key=lambda x:(x[0],x[1]),reverse=True); candidates=ranked[:8]
    exact_paras=[{'text':x,'priorSlugs':prior_paras[x]} for x in c['paragraphs'] if x in prior_paras]
    exact_sents=[{'text':x,'priorSlugs':prior_sents[x]} for x in c['sentences'] if x in prior_sents]
    best_para=(0,'','',None); best_sent=(0,'','',None)
    for _,_,_,p in candidates:
        for x,y in itertools.product(c['paragraphs'],p['paragraphs']):
            score=jac(x,y)
            if x!=y and score>best_para[0]: best_para=(score,x,y,p)
        for x,y in itertools.product(c['sentences'],p['sentences']):
            score=jac(x,y)
            if x!=y and score>best_sent[0]: best_sent=(score,x,y,p)
    _,overlap,title_j,nearest=ranked[0]
    exact_slug=next((p for p in prior if p['slug']==c['slug']),None); exact_title=next((p for p in prior if p['title'].lower()==c['title'].lower()),None)
    collision=(bool(exact_slug) or bool(exact_title) or overlap>=50 or bool(exact_paras) or len(exact_sents)>2 or best_para[0]>=0.8)
    if collision: errors.append(f"{c['family']}/{c['slug']}: prior-corpus collision gate")
    records.append({'family':c['family'],'slug':c['slug'],'title':c['title'],'contentHash':c['hash'],'decision':'fail' if collision else 'pass','qualitativeDistinction':DISTINCTIONS[c['slug']],'exactSlugCollision':exact_slug['path'] if exact_slug else None,'exactTitleCollision':exact_title['path'] if exact_title else None,'nearestPrior':{'slug':nearest['slug'],'title':nearest['title'],'path':nearest['path'],'contentHash':nearest['hash'],'titleTokenJaccard':round(title_j,3),'fiveWordShingleOverlapPercent':round(overlap,3)},'exactReusedSubstantiveParagraphs':exact_paras,'exactReusedSubstantiveSentences':exact_sents,'nearestParagraph':{'score':round(best_para[0],3),'currentExcerpt':best_para[1][:400],'priorExcerpt':best_para[2][:400],'priorSlug':best_para[3]['slug'] if best_para[3] else None},'nearestSentence':{'score':round(best_sent[0],3),'currentExcerpt':best_sent[1][:400],'priorExcerpt':best_sent[2][:400],'priorSlug':best_sent[3]['slug'] if best_sent[3] else None}})

report={'baseline':BASELINE,'priorCorpus':{'blog':sum(p['path'].startswith('content/blog/') for p in prior),'research':sum(p['path'].startswith('content/research/') for p in prior),'total':len(prior)},'candidateCount':len(current),'records':records,'errors':errors}
(CYCLE/'prior-corpus-audit.json').write_text(json.dumps(report,indent=2)+'\n')
if errors:
    print('\n'.join('FAIL '+x for x in errors)); raise SystemExit(1)
print(f"PRIOR CORPUS PASS: {len(current)} candidates against {len(prior)} baseline articles")
