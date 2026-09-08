#!/usr/bin/env python3
"""Create the exact September 8, 2026 daily publishing batch."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
DATE = "2026-09-08"
VISIBLE = "September 8, 2026"

BLOGS = [
    ("virtual-assistant-brief-assumption-register", "The Brief Assumption Register: A Practical Check Before Drafting", "Expose unanswered assumptions before they quietly shape an article.", "Editorial Planning", "virtual-assistant-content-brief-research-reproducibility.webp", "brief assumption register", "List each assumption about audience, scope, evidence, format, and approval beside the person who can confirm it."),
    ("virtual-assistant-source-opening-routine", "A Source-Opening Routine for Virtual Assistant Researchers", "Start research with the original evidence, not a search-result summary.", "Editorial Research", "virtual-assistant-source-method-fit-audit.webp", "source-opening routine", "Open the publisher's page, identify the author or institution, record the publication date, and read enough context to understand what was actually studied."),
    ("virtual-assistant-draft-claim-inventory", "How to Build a Claim Inventory From a Working Draft", "Give every checkable statement a visible place in editorial review.", "Editorial Quality", "virtual-assistant-article-qa-evidence.webp", "draft claim inventory", "Pull factual, comparative, causal, and quantitative claims into a table without rewriting them, then attach the best available evidence and review state."),
    ("virtual-assistant-link-destination-check", "The Link-Destination Check Before an Article Goes Live", "Catch redirected, mismatched, and inaccessible citations before publication.", "Publishing Quality", "virtual-assistant-seo-publishing-checklist.webp", "link-destination check", "Open every external and internal link in a clean session, record its final destination and response, and compare the page with the surrounding claim."),
    ("virtual-assistant-editorial-question-log", "An Editorial Question Log That Keeps Daily Publishing Moving", "Turn scattered reviewer questions into owned, answerable decisions.", "Content Operations", "virtual-assistant-daily-article-status.webp", "editorial question log", "Record the exact passage, the question, why it matters, supporting context, decision owner, and latest useful answer time."),
    ("virtual-assistant-alt-text-context-pass", "A Context Pass for Article Image Alt Text", "Write image alternatives around purpose rather than filenames or decoration.", "Accessibility", "virtual-assistant-accessibility-review-controls.webp", "alt-text context pass", "Review each image where it appears and decide whether it conveys information, supports orientation, repeats nearby text, or is purely decorative."),
    ("virtual-assistant-draft-scope-boundary", "Keeping a Draft Inside Its Promised Scope", "Prevent useful side topics from displacing the reader's main question.", "Editorial Planning", "virtual-assistant-article-approval-window.webp", "draft scope boundary", "Restate the audience, decision, geography, time period, and exclusions from the approved brief, then test every section against that boundary."),
    ("virtual-assistant-review-comment-closure", "Closing Review Comments Without Losing the Decision Trail", "Resolve editorial comments with evidence that survives the next handoff.", "Editorial Governance", "virtual-assistant-sop-change-log.webp", "review comment closure", "For every comment, link the changed passage or record the reason no change was made, identify the decision owner, and preserve the resolved state."),
    ("virtual-assistant-title-promise-audit", "The Title-Promise Audit for Daily Article Teams", "Check that the article delivers the answer its headline advertises.", "Editorial Quality", "virtual-assistant-manager-article-queue.webp", "title-promise audit", "Translate the title into a reader question, locate the direct answer, and flag qualifications or missing steps that make the promise broader than the body."),
    ("virtual-assistant-mobile-article-proof", "A Mobile Article Proof for Virtual Assistant Publishers", "Inspect the real reading experience on a narrow screen before release.", "Publishing Quality", "virtual-assistant-article-accessibility-check.webp", "mobile article proof", "Load the rendered route at a narrow viewport and inspect headings, tables, link targets, image sizing, code, callouts, and navigation in reading order."),
    ("virtual-assistant-correction-intake-note", "Writing a Useful Article Correction Intake Note", "Capture reported problems without treating the report as a settled finding.", "Content Maintenance", "virtual-assistant-customer-feedback-summary.webp", "correction intake note", "Record the public route, quoted passage, reporter's concern, receipt time, supporting material, triage owner, and current status without prematurely validating the claim."),
    ("virtual-assistant-publication-evidence-packet", "The Small Publication Evidence Packet Every Article Needs", "Keep enough release evidence to reconstruct what readers received.", "Publishing Operations", "virtual-assistant-document-retention-workflow.webp", "publication evidence packet", "Bundle the approved slug, source version, commit, deployment result, canonical response, visible date, structured data, image responses, and index and sitemap checks."),
]

RESEARCH = [
    ("virtual-assistant-source-retrieval-reliability-study", "Studying Source Retrieval Reliability in Virtual Assistant Research", "A bounded method for measuring whether cited evidence remains available to reviewers.", "Editorial Research", "virtual-assistant-daily-article-source-freshness.webp", "source retrieval reliability", "Treat a source as retrievable only when a reviewer can reach the intended document, identify it, and locate the cited support without relying on a cached search snippet."),
    ("virtual-assistant-draft-review-loop-study", "Studying Draft Review Loops in Daily Virtual Assistant Publishing", "A research design for separating useful revision from preventable repeated work.", "Operations Research", "virtual-assistant-capacity-planning.webp", "draft review loops", "Define a repeated loop as work returned because of a changed or missed requirement, and keep ordinary drafting, fact correction, and requested refinement as separate categories."),
    ("virtual-assistant-internal-link-sampling-study", "Sampling Internal-Link Quality in a Virtual Assistant Content Library", "A reproducible way to inspect link purpose, destination fit, and route health.", "SEO Research", "virtual-assistant-seo-publishing-checklist.webp", "internal-link quality", "Select links across article families, ages, positions, and anchor styles, then test response, destination identity, contextual fit, and whether the link adds a genuine next step."),
    ("virtual-assistant-publication-date-consistency-study", "A Study Design for Publication-Date Consistency Across Article Surfaces", "Research guidance for comparing visible, structured, indexed, and sitemap dates.", "Publishing Research", "virtual-assistant-daily-article-status.webp", "publication-date consistency", "Compare the same article's visible date, JSON-LD datePublished, metadata, family index entry, sitemap record, and release evidence without substituting modified dates."),
    ("virtual-assistant-image-delivery-observation-study", "Observing Article Image Delivery in Virtual Assistant Publishing", "A limited study of whether assigned hero and social assets render on public routes.", "Web Operations Research", "virtual-assistant-research-image-rights-review.webp", "article image delivery", "Sample published routes by template and release date, extract rendered hero and Open Graph URLs, request each asset directly, and record format, status, and visible rendering separately."),
]

SOURCES = [
    "https://www.w3.org/TR/WCAG22/", "https://www.w3.org/WAI/test-evaluate/", "https://www.w3.org/WAI/tutorials/images/decision-tree/",
    "https://developers.google.com/search/docs/crawling-indexing/canonicalization", "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
    "https://www.rfc-editor.org/rfc/rfc9110", "https://www.nist.gov/cyberframework", "https://www.archives.gov/records-mgmt",
    "https://www.ftc.gov/business-guidance/privacy-security", "https://www.cisa.gov/resources-tools",
]

def frontmatter(slug, title, excerpt, category, image, research=False):
    extra = ""
    if research:
        extra = f"cluster: daily publishing evidence\nlastVerified: {DATE}\nkey_takeaways: [Define the observation before collection, Report missing and open cases, Keep inference with accountable reviewers]\nkeyStats: [\"10: authoritative sources listed\", \"6: evidence surfaces considered\", \"1: bounded study question\"]\nsources: {json.dumps(SOURCES)}\nsourceCount: 10\n"
    return f"""---
slug: {slug}
title: {title}
excerpt: {excerpt}
publishedAt: {DATE}
updatedAt: {DATE}
category: {category}
tags: [virtual assistant, daily publishing, editorial operations]
heroImageAlt: virtual assistant reviewing article evidence before publication
relatedArticles: [virtual-assistant-daily-article-status, virtual-assistant-article-source-traceability, virtual-assistant-seo-publishing-checklist]
featuredImage: /blog/images/{image}
readingTime: {'10' if research else '7'} minutes
{extra}---
"""

def blog_body(title, focus, action):
    return f"""# {title}

Published {VISIBLE}.

Daily article work becomes fragile when a small check lives only in someone's memory. A {focus} gives the virtual assistant a repeatable way to prepare evidence while leaving editorial judgment and publication authority with the responsible owner.

## {title}: start with the article's real question

{action} Write the acceptance rule in plain language before opening the working draft. Include the article slug, version, intended reader, owner, and decision deadline so observations cannot drift between files.

## Review the evidence in context

Work from the source or rendered page rather than a copied snippet. Note what was directly observed, when it was checked, and what remains uncertain. The [article source traceability guide](/blog/virtual-assistant-article-source-traceability) provides a useful companion record, while the [SEO publishing checklist](/blog/virtual-assistant-seo-publishing-checklist) covers the release handoff. For public-web checks, the [HTTP Semantics standard](https://www.rfc-editor.org/rfc/rfc9110) defines the meaning of response status codes.

## Separate a finding from a decision

An assistant can identify a mismatch and assemble its evidence. The editor decides whether wording changes, an exception is acceptable, or publication should wait. This distinction prevents a checklist from silently becoming approval.

## Hand off one answerable exception

When the rule is not met, send the affected passage or asset, the observed problem, supporting evidence, likely reader impact, available options, and the person who must choose. Avoid broad requests to “take a look.”

## Verify the public result

After release, open the canonical route and confirm its HTTP response, title, visible publication date, structured date, hero and social images, family index entry, sitemap entry, and narrow-screen layout. Record the deployed commit with the result; a successful build alone does not prove the article is live.
"""

def research_body(title, focus, method):
    source_lines = "\n".join(f"{i}. [{u.split('/')[2]}]({u})" for i, u in enumerate(SOURCES, 1))
    return f"""# {title}

Published {VISIBLE}.

This research brief examines {focus} as one part of the daily article routine at BestVirtualAssistantServices.com. It describes a measurement method, not a provider ranking, legal conclusion, universal benchmark, or claim that the observed relationship is causal.

Use the [article source traceability guide](/blog/virtual-assistant-article-source-traceability) to identify evidence and the [SEO publishing checklist](/blog/virtual-assistant-seo-publishing-checklist) to verify the released route.

## Research question and scope

Ask whether a defined set of article records meets a written observation rule during a fixed period. {method} State the content families, release dates, exclusions, and evidence fields before selecting records.

## Methodology

Build a sampling frame from the canonical content inventory and preserve every selected case. Two reviewers should apply the same rubric to a calibration subset, discuss disagreements, and revise ambiguous wording before the full review. Record direct observations, system records, missing evidence, and reviewer judgments in separate fields.

## Evidence and analysis

Use version identifiers, timestamps, source links, HTTP responses, structured metadata, rendered observations, approval records, and deployment evidence where each fits the question. Report counts and distributions with their denominators. Keep unresolved and inaccessible cases visible instead of treating them as passes or dropping them.

## Inference limits

The result describes the sampled records under the published rule. It cannot establish the quality of untested articles, the cause of a change, legal compliance, or the performance of virtual assistant providers. Differences may reflect templates, content age, staffing, tooling, or missing records.

## Operational use

The virtual assistant can maintain the evidence table, repeat mechanical checks, and flag anomalies. An accountable editor owns interpretation, corrections, and any public claim. Repeating the study with the same definitions can show operational change, but it still does not prove what caused it.

## Sources

{source_lines}
"""

for row in BLOGS:
    slug, title, excerpt, category, image, focus, action = row
    path = ROOT / "content/blog" / f"{slug}.mdx"
    if path.exists() and f"publishedAt: {DATE}" not in path.read_text(encoding="utf-8"):
        raise FileExistsError(path)
    path.write_text(frontmatter(slug, title, excerpt, category, image) + blog_body(title, focus, action), encoding="utf-8")

for row in RESEARCH:
    slug, title, excerpt, category, image, focus, method = row
    path = ROOT / "content/research" / f"{slug}.mdx"
    if path.exists() and f"publishedAt: {DATE}" not in path.read_text(encoding="utf-8"):
        raise FileExistsError(path)
    path.write_text(frontmatter(slug, title, excerpt, category, image, True) + research_body(title, focus, method), encoding="utf-8")

print(f"created {len(BLOGS)} blog and {len(RESEARCH)} research articles for {DATE}")
