#!/usr/bin/env python3
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
DATE = "2026-09-03"
SOURCES = [
    ("NIST Cybersecurity Framework", "https://www.nist.gov/cyberframework"),
    ("NIST Small Business Cybersecurity Corner", "https://www.nist.gov/itl/smallbusinesscyber"),
    ("CISA Cyber Guidance for Small Businesses", "https://www.cisa.gov/audiences/small-and-medium-businesses"),
    ("FTC Data Security Guidance", "https://www.ftc.gov/business-guidance/privacy-security/data-security"),
    ("W3C Web Content Accessibility Guidelines 2.2", "https://www.w3.org/TR/WCAG22/"),
    ("National Archives Records Management", "https://www.archives.gov/records-mgmt"),
    ("Google Search Central Helpful Content Guidance", "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"),
    ("Google Search Central Sitemap Guidance", "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"),
    ("RFC 9110 HTTP Semantics", "https://www.rfc-editor.org/rfc/rfc9110"),
    ("OECD Digital Security", "https://www.oecd.org/en/topics/digital-security.html"),
]

TOPICS = [
    {
        "slug": "virtual-assistant-exception-queue-sampling-study",
        "title": "Can Exception-Queue Sampling Reveal Weaknesses in Virtual Assistant Workflows?",
        "focus": "exception-queue sampling",
        "image": "/blog/images/virtual-assistant-article-escalation-ladder.webp",
        "decision": "whether a manager can learn from a manageable sample of escalated tasks without mistaking that sample for the whole workload",
        "unit": "one exception record tied to its original task, rule, decision owner, timestamps, and final resolution",
        "case": "An inbox assistant routes messages that fall outside approved reply rules. The queue includes genuine judgment calls, missing customer context, access failures, and ordinary messages misclassified as exceptions.",
        "bias": "The queue excludes routine work that never triggered a flag, so its error mix cannot describe overall assistant performance. Urgent cases may also be overrepresented because managers resolve and document them first.",
        "finding": "A stratified sample is useful for redesigning escalation rules when the strata, exclusions, and unresolved cases remain visible. It is not a substitute for a workload-wide quality measure.",
    },
    {
        "slug": "virtual-assistant-access-expiry-evidence-study",
        "title": "What Evidence Shows That Virtual Assistant Access Expires as Intended?",
        "focus": "access-expiry evidence",
        "image": "/blog/images/virtual-assistant-access-control-audit.webp",
        "decision": "whether delegated system access ends at the approved time and leaves enough evidence for an owner to investigate exceptions",
        "unit": "one approved access grant joined to its system identity, intended expiry, observed state, reviewer, and exception outcome",
        "case": "A virtual assistant receives time-bounded access to a shared content tool for an article update. The study compares the approved end time with the account state and activity record after the assignment closes.",
        "bias": "A disabled login does not prove that exported files, copied credentials, active sessions, or connected applications also stopped working. Logs differ by system and may retain incomplete evidence.",
        "finding": "Expiry can be tested as an observable control only when the review covers the relevant access paths and assigns unresolved evidence to a security owner. A timestamp alone is inadequate proof.",
    },
    {
        "slug": "virtual-assistant-feedback-coding-reliability-study",
        "title": "How Reliable Is Feedback Coding by a Virtual Assistant?",
        "focus": "feedback-coding reliability",
        "image": "/blog/images/virtual-assistant-customer-feedback-controls.webp",
        "decision": "whether a virtual assistant can classify customer feedback consistently enough to support an editor or service owner without erasing ambiguity",
        "unit": "one de-identified feedback item independently labeled by the assistant and a reviewer under the same written codebook",
        "case": "A comment about a late reply also mentions unclear instructions. A single-label system forces a choice, while a multi-label system may preserve both themes but creates more room for inconsistent coding.",
        "bias": "Agreement can look high when one broad category dominates the sample. Removing difficult comments, changing the codebook during scoring, or letting the reviewer see the first label also inflates apparent reliability.",
        "finding": "Independent double-coding of a varied sample can show whether the codebook supports repeatable classification. Disagreement should remain visible and route to the service owner rather than being averaged away.",
    },
    {
        "slug": "virtual-assistant-knowledge-answer-traceability-study",
        "title": "Can Readers Trace Knowledge-Base Answers Prepared by a Virtual Assistant?",
        "focus": "knowledge-answer traceability",
        "image": "/blog/images/virtual-assistant-knowledge-base-maintenance.webp",
        "decision": "whether a published answer can be followed back to an approved source, applicable version, and named owner before a reader relies on it",
        "unit": "one answer statement mapped to the precise source location, source version, effective date, interpretation note, and approval decision",
        "case": "An assistant updates a help answer after a policy page changes. One sentence copies the policy, another interprets what a user should do, and a third carries over wording from the older article.",
        "bias": "A working link may point to a changed page, and a saved copy may omit later corrections. Traceability measures the evidence chain, not the truth of every policy or the reader's understanding.",
        "finding": "Claim-level mapping exposes unsupported carryovers and separates sourced statements from editorial interpretation. The source owner still decides which wording is authoritative and current.",
    },
    {
        "slug": "virtual-assistant-calendar-time-zone-error-study",
        "title": "Which Review Method Finds Time-Zone Errors in Virtual Assistant Calendar Handoffs?",
        "focus": "calendar time-zone error review",
        "image": "/blog/images/virtual-assistant-appointment-reminder-workflow.webp",
        "decision": "whether a structured second check catches calendar handoff errors that could move or invalidate a meeting across locations",
        "unit": "one proposed calendar event compared with the source request, named zones, daylight-saving rule, attendee display, and final approved invitation",
        "case": "A requester writes a local time without naming the city, while two attendees view the event from regions that change clocks on different dates. The assistant must pause rather than infer the missing zone.",
        "bias": "A test set built from simple whole-hour offsets understates real scheduling difficulty. Familiar recurring meetings can also hide weak reasoning because reviewers remember the expected answer.",
        "finding": "A source-to-invitation comparison using ambiguous and seasonal cases tests more than visual proofreading. The calendar owner must resolve missing zones and approve changes with external consequences.",
    },
]

def article(t):
    source_urls = [url for _, url in SOURCES]
    front = f'''---
slug: {t["slug"]}
title: {t["title"]}
excerpt: Evidence-led research on {t["focus"]} for bounded and reviewable virtual assistant services.
publishedAt: {DATE}
updatedAt: {DATE}
category: operations research
tags: [virtual assistant, operations research, service quality]
featuredImage: {t["image"]}
heroImageAlt: evidence review for {t["focus"]}
readingTime: 10 minutes
relatedArticles: [virtual-assistant-service-quality-assurance, virtual-assistant-work-intake-triage, virtual-assistant-sop-audit-workflow]
cluster: workflow evidence
sourceCount: 10
lastVerified: {DATE}
key_takeaways: [Define the observation unit, Preserve exceptions, Keep approval with the accountable owner]
keyStats: ["10: public control references", "1: bounded study question", "0: provider performance claims"]
sources: {json.dumps(source_urls)}
---
'''
    body = f'''# {t["title"]}

Published September 3, 2026.

## Research question

This report asks {t["decision"]}. The question matters to buyers of virtual assistant services because delegated work often produces an orderly queue while hiding the decisions that shaped it. A useful study must expose what was counted, what never entered the sample, and what remained with the client-side owner.

The report does not rate BestVirtualAssistantServices.com, any customer, provider, or individual assistant. It develops a small observational method from public guidance on security, records, accessibility, web publishing, and evidence quality. Operational examples are hypothetical and illustrate the method rather than reported company results.

## Method and evidence scope

The proposed unit is {t["unit"]}. Select a fixed review period before looking at outcomes. Draw cases from the full eligible set, retain exclusions, and prevent the person who performed the work from silently choosing only clean examples. A second reviewer applies the same definitions without seeing the assistant's preferred conclusion.

The evidence base is a desk synthesis of ten public institutional sources. NIST and CISA inform control and access questions. FTC guidance supports data-handling caution. National Archives material informs record integrity. W3C, Google Search Central, RFC 9110, and OECD resources provide public reference points for accessible publishing, discoverability, HTTP behavior, and digital-security governance. These sources guide the study design; they do not measure the company or prove a service outcome.

## What counts as an observation

{t["case"]} The record should preserve the original input, the applicable rule, the assistant's action, any question sent to the owner, and the final disposition. Without that chain, reviewers may judge a reconstructed story instead of the decision that occurred.

Keep facts separate from analysis. A timestamp, selected label, access state, source passage, or displayed calendar value is an observation. A statement that the workflow is effective is analysis. The owner may accept, qualify, or reject that analysis after reviewing the sample and its limits.

## Sampling and comparison

Build the sample around the risk in the research question, not around convenience. Include ordinary cases, boundary cases, missing information, and at least one case that should stop. If categories have very different volumes, sample within each category and report the denominators. Do not blend them into a single rate that disguises a weak but consequential subgroup.

The comparison should be reproducible. Give both reviewers the same artifact version and codebook, then compare their decisions. Record agreement, material disagreements, missing evidence, and cases the rules could not classify. A disagreement resolved after discussion is still a disagreement in the first pass and should remain in the study record.

## Bias and alternative explanations

{t["bias"]} Work may also change because people know it is being reviewed. That does not invalidate the exercise, but it limits any claim about normal practice.

Alternative explanations belong beside the result. A lower error count may reflect easier work, a smaller queue, a stricter intake rule, or more owner intervention. A higher count may reflect better detection rather than worse execution. The study should report those plausible explanations and avoid causal language unless the design can support it.

## Role boundaries

A virtual assistant can assemble public sources, maintain the case register, apply written labels, calculate transparent totals, and flag missing evidence. The assistant should not approve its own disputed classification, make a legal or security determination, expose personal information, or turn an incomplete record into a confident public claim.

The client-side owner chooses the review period, authorizes access to records, resolves sensitive exceptions, and approves the conclusion. When the work affects an external message, account permission, policy interpretation, or meeting invitation, the owner also decides whether correction or notification is required.

## Interpreting the result

{t["finding"]} Report the numerator and denominator, the cases excluded, the first-pass reviewer differences, and any unresolved items. A percentage without those details invites a precision the study did not earn.

The finding should change a specific operating choice. It might lead to a narrower assistant brief, a clearer stop rule, a different review sample, or a named approval point. If the evidence does not support a change, say so. Daily research is useful when it improves a decision, not when it manufactures a positive conclusion.

## Limitations

This design is observational and small by intent. It cannot establish market-wide performance, predict the result of hiring a virtual assistant, or replace professional advice. Public control references may change, local systems expose different logs, and a review sample may miss rare events. Readers should apply the method to their own task, authority, and evidence boundaries.

The method also depends on accurate records. Missing source versions, altered timestamps, inaccessible messages, or an undocumented owner decision weaken the result. Treat those gaps as findings rather than filling them with assumptions. A later study should state whether the record quality improved before comparing periods.

## Evidence-led conclusion

The evidence supports a bounded conclusion about {t["focus"]}: define the observation unit before sampling, retain difficult and unresolved cases, compare independent judgments, and keep interpretation with an accountable owner. That approach gives a buyer inspectable evidence about the workflow without claiming more than the records show.

For BestVirtualAssistantServices.com, the practical value is a clearer boundary for research support. An assistant can organize the evidence and surface exceptions. The buyer or designated owner remains responsible for the service decision, sensitive approval, and any public statement about results.

## Sources

''' + "\n".join(f"{i}. [{name}]({url})" for i, (name, url) in enumerate(SOURCES, 1)) + "\n"
    return front + body

for t in TOPICS:
    path = ROOT / "content/research" / f'{t["slug"]}.mdx'
    if path.exists():
        raise SystemExit(f"refusing to overwrite {path}")
    path.write_text(article(t), encoding="utf-8")

manifest = {
    "campaignDate": DATE,
    "family": "research",
    "imageStatus": "gemini-unavailable-fallback-text-complete",
    "imageBlocker": "No Gemini image-generation provider was available. Existing repository imagery was referenced without modification; no stock or newly templated image was substituted.",
    "entries": [{
        "route": f'/research/{t["slug"]}',
        "sourcePaths": [f'content/research/{t["slug"]}.mdx'],
        "publishedAt": DATE,
    } for t in TOPICS],
}
mp = ROOT / ".paperclip/daily-content/2026-09-03/research.json"
mp.parent.mkdir(parents=True, exist_ok=True)
mp.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
print("created exactly 5 September 3 research records")
