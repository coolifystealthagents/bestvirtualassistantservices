#!/usr/bin/env python3
"""Create the exact September 9, 2026 publication batch."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
DATE = "2026-09-09"
VISIBLE = "September 9, 2026"

BLOGS = [
    ("virtual-assistant-editorial-desk-opening-check", "The 15-Minute Editorial Desk Opening Check", "Start a publishing shift with the queue, owners, and blockers in view.", "Content Operations", "virtual-assistant-daily-article-status.webp", "editorial desk opening check", "Open the live calendar beside the handoff log. Match every due article to its current file, editor, approval state, and release window. If one field is missing, assign the question before anyone starts polishing prose.", "A writer can lose half a morning improving a draft that is waiting on a scope decision. The opening check makes that dependency visible while there is still time to change the day's order."),
    ("virtual-assistant-citation-context-note", "Write a Citation Context Note Before You Use the Source", "Record what a source supports while the surrounding evidence is still fresh.", "Editorial Research", "virtual-assistant-blog-reference-snapshot.webp", "citation context note", "Copy the claim under review into the note, then record the source section that bears on it. Add the publisher, date, retrieval time, and any qualification that would change the wording.", "A link by itself leaves the next reviewer to repeat the search. A short context note explains why the source earned a place in the draft and where its limits begin."),
    ("virtual-assistant-reader-task-test", "Can the Reader Act on It? Run a Reader Task Test", "Check an instructional article by following it as a reader would.", "Editorial Quality", "virtual-assistant-article-reader-scenario-test.webp", "reader task test", "Choose one realistic starting point and attempt the instructions in order. Mark hidden prerequisites, undefined choices, missing examples, and steps that depend on access the reader may not have.", "A draft can sound complete because the writer already knows the process. The test exposes knowledge that never made it onto the page."),
    ("virtual-assistant-table-small-screen-review", "How to Review an Article Table on a Small Screen", "Keep comparisons readable when a wide table meets a narrow viewport.", "Accessibility", "virtual-assistant-article-accessibility-check.webp", "small-screen table review", "Load the published preview at phone width and read each row without zooming. Check headers, horizontal movement, line breaks, link targets, and whether the same comparison needs a compact alternative.", "Tables often pass a desktop proof and fail where readers actually encounter them. The useful question is whether the relationship between each label and value survives the narrower layout."),
    ("virtual-assistant-editorial-handoff-cutoff", "Set an Editorial Handoff Cutoff That People Can Use", "Define when a draft is ready to move and what happens when it is late.", "Editorial Governance", "virtual-assistant-article-review-sla.webp", "editorial handoff cutoff", "Write the cutoff as a time, time zone, required state, and named receiver. Add one late path: who receives the alert, what evidence travels with it, and who may move the release.", "'By end of day' sounds precise until contributors work in different time zones. A usable cutoff removes the translation work from an already busy handoff."),
    ("virtual-assistant-example-fact-check", "Fact-Check the Example, Not Just the Main Claim", "Treat illustrative scenarios as factual surfaces that need their own review.", "Editorial Quality", "virtual-assistant-content-fact-checking.webp", "example fact-check", "List every number, date, named product, policy detail, and implied outcome inside the example. Verify or generalize each item, then confirm that the example still teaches the point without overstating it.", "Examples feel informal, so unsupported detail can slip through them. Readers may remember the scenario more clearly than the paragraph that qualified it."),
    ("virtual-assistant-draft-file-naming-rule", "A Draft File-Naming Rule for Busy Content Queues", "Make the current article version identifiable without opening five files.", "Content Operations", "virtual-assistant-article-version-handoff.webp", "draft file-naming rule", "Choose a stable slug and append only the working state or approved version identifier. Keep dates in the history record, not as a substitute for version control, and document who may label a file final.", "Names such as final-v2-new invite mistakes because they describe confidence, not identity. A small rule helps reviewers land on the same artifact."),
    ("virtual-assistant-source-quote-boundary", "Draw the Boundary Around a Source Quote", "Preserve the conditions that make a quotation accurate.", "Editorial Research", "virtual-assistant-article-quote-permission-check.webp", "source quote boundary", "Read the paragraph before and after the selected words. Record who is speaking, what question they address, the date, and any condition that narrows the statement before drafting the surrounding sentence.", "A quotation can be letter-perfect and still mislead when its condition disappears. Context belongs in the evidence record before the prose becomes polished."),
    ("virtual-assistant-article-redirect-handoff", "The Article Redirect Handoff After a Slug Change", "Coordinate the route, links, canonical tag, and release evidence as one change.", "Publishing Operations", "virtual-assistant-seo-publishing-checklist.webp", "article redirect handoff", "Document the old and new routes, the reason for the change, redirect owner, internal-link update owner, canonical expectation, and rollback contact. Test both routes after the pinned release.", "Changing a filename is the easy part. The handoff must account for readers and crawlers that still arrive through the old address."),
    ("virtual-assistant-screenshot-evidence-label", "Label Screenshot Evidence So Another Reviewer Can Use It", "Give visual proof enough context to survive beyond the capture session.", "Publishing Quality", "virtual-assistant-article-qa-evidence.webp", "screenshot evidence label", "Attach the route, capture time, viewport, environment, commit, and the exact acceptance check. Crop only after preserving enough interface context to identify what was tested.", "An unlabeled screenshot proves very little. It may show a preview, an old deployment, or a viewport that hides the reported problem."),
    ("virtual-assistant-daily-publishing-stop-rule", "A Stop Rule for Daily Publishing When Evidence Is Missing", "Decide in advance which gaps pause release and who can clear them.", "Editorial Governance", "virtual-assistant-content-exception-log.webp", "daily publishing stop rule", "Name the evidence gaps that block publication, such as an unverified central claim or an unreachable hero asset. Pair each trigger with an owner, escalation time, and documented exception authority.", "Without a stop rule, deadline pressure makes the standard change from article to article. The team needs a consistent way to distinguish a fixable note from a release blocker."),
    ("virtual-assistant-next-morning-publication-check", "The Next-Morning Publication Check", "Revisit yesterday's releases after caches, feeds, and indexes have had time to update.", "Content Maintenance", "virtual-assistant-content-refresh-trigger.webp", "next-morning publication check", "Request each canonical route, confirm the visible and structured dates, open the hero image, inspect the family index and sitemap, and compare the page with the approved title. Log new failures instead of editing silently.", "The launch check captures one moment. A short follow-up catches delayed image, cache, and indexing problems while the release is still easy to reconstruct."),
]

RESEARCH = [
    ("virtual-assistant-editorial-handoff-delay-study", "Measuring Editorial Handoff Delay in a Daily Article Queue", "A bounded observational design for timing the gap between ready and received.", "Operations Research", "virtual-assistant-capacity-planning.webp", "editorial handoff delay", "Use system timestamps for the declared ready event and the receiver's acknowledgement. Keep time spent awaiting a scheduled window separate from unexplained delay.", "The unit is one handoff for one article version. A later revision starts a new record rather than extending the first interval."),
    ("virtual-assistant-citation-context-completeness-study", "A Study of Citation Context Completeness in Published Articles", "A reproducible review of whether citations support nearby wording and qualifications.", "Editorial Research", "virtual-assistant-article-research-claim-triage.webp", "citation context completeness", "Sample factual claims with external citations, read the cited section in context, and code support, partial support, mismatch, or inaccessible evidence.", "The review measures the sampled claim-link pairs. It does not score an author's intent or prove the accuracy of uncited passages."),
    ("virtual-assistant-mobile-reading-friction-study", "Observing Mobile Reading Friction in Virtual Assistant Articles", "A small usability study for tables, links, headings, and long instructional pages.", "UX Research", "virtual-assistant-article-reader-fit.webp", "mobile reading friction", "Give participants a defined information-finding task on a specified viewport. Record completion, wrong turns, zooming, horizontal scrolling, and the point where a participant stops.", "Behavior in a moderated task may differ from ordinary reading. Device settings, familiarity, network conditions, and the chosen articles can affect the observations."),
    ("virtual-assistant-publication-stop-rule-study", "Studying Publication Stop Rules in Daily Content Operations", "A method for comparing written release gates with observed decisions.", "Publishing Research", "virtual-assistant-article-approval-record.webp", "publication stop rules", "Collect the rule version in force at each release, the recorded evidence gap, the decision, the decision owner, and the eventual outcome. Do not infer a rule from the outcome alone.", "The study can describe consistency and documented exceptions. It cannot determine whether a stricter rule would have improved traffic, trust, or editorial quality."),
    ("virtual-assistant-post-release-drift-study", "Tracking Post-Release Drift Across Article Surfaces", "A longitudinal check of route metadata, images, indexes, and sitemap membership.", "Web Operations Research", "virtual-assistant-daily-article-source-freshness.webp", "post-release drift", "Capture a baseline immediately after deployment, then repeat the same checks at stated intervals. Compare route response, title, visible date, structured date, canonical, image URLs, index presence, and sitemap presence.", "A failed observation shows a difference at that time. Logs or controlled tests are still needed before assigning the cause to a cache, template, deployment, or manual edit."),
]

SOURCES = [
    "https://www.w3.org/TR/WCAG22/", "https://www.w3.org/WAI/test-evaluate/", "https://www.w3.org/WAI/tutorials/tables/",
    "https://developers.google.com/search/docs/crawling-indexing/canonicalization", "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
    "https://www.rfc-editor.org/rfc/rfc9110", "https://www.nist.gov/cyberframework", "https://www.archives.gov/records-mgmt",
    "https://www.ftc.gov/business-guidance/privacy-security", "https://www.cisa.gov/resources-tools",
]

def frontmatter(slug, title, excerpt, category, image, research=False):
    extra = ""
    if research:
        extra = f"cluster: daily publishing evidence\nlastVerified: {DATE}\nkey_takeaways: [Define the observation before collection, Preserve missing and unresolved cases, Keep interpretation with an accountable reviewer]\nkeyStats: [\"10: authoritative sources listed\", \"8: article surfaces available for observation\", \"1: bounded research question\"]\nsources: {json.dumps(SOURCES)}\nsourceCount: 10\n"
    return f"""---
slug: {slug}
title: {title}
excerpt: {excerpt}
publishedAt: {DATE}
updatedAt: {DATE}
category: {category}
tags: [virtual assistant, daily publishing, editorial operations]
heroImageAlt: virtual assistant checking article evidence during a publishing routine
relatedArticles: [virtual-assistant-daily-article-status, virtual-assistant-article-source-traceability, virtual-assistant-seo-publishing-checklist]
featuredImage: /blog/images/{image}
readingTime: {'10' if research else '7'} minutes
{extra}---
"""

def blog_body(title, focus, action, reason):
    return f"""# {title}

Published {VISIBLE}.

Daily publishing leaves little room for a vague handoff. A {focus} gives a virtual assistant a concrete check to run, but the editor keeps responsibility for judgment and release.

## {title}: define the finish line

{action}

{reason}

## Work from the current article

Put the canonical slug and version at the top of the record. Review the source file or rendered preview, not a pasted excerpt whose context may have changed. The [article source traceability guide](/blog/virtual-assistant-article-source-traceability) shows how to connect a claim with its evidence.

## Write observations before recommendations

Record what you saw, where you saw it, and when. Then explain the reader or publishing consequence. Keep the proposed fix in a separate field so the editor can accept it, choose another response, or document an exception.

## Hand off the exception

A useful exception note includes the affected route or passage, the failed check, supporting evidence, the last known good state, and the person who can decide. The [SEO publishing checklist](/blog/virtual-assistant-seo-publishing-checklist) covers the route-level checks that belong in the release record. For response-code interpretation, use the [HTTP Semantics standard](https://www.rfc-editor.org/rfc/rfc9110).

## Check the public result

After deployment, request the canonical route directly. Confirm the title, visible publication date, structured date, self-canonical, family index entry, sitemap entry, and hero and social images. Test the reading view at a narrow width, then store the deployed commit and result with the article record.
"""

def research_body(title, focus, method, limit):
    source_lines = "\n".join(f"{i}. [{u.split('/')[2]}]({u})" for i, u in enumerate(SOURCES, 1))
    return f"""# {title}

Published {VISIBLE}.

This research brief examines {focus} within the daily article routine at BestVirtualAssistantServices.com. It sets out an observation method. It is not a provider ranking, legal conclusion, causal finding, or universal benchmark.

## Research question and scope

Ask whether a defined set of article records meets a written observation rule during a fixed period. State the content family, release dates, exclusions, and evidence fields before selecting records. {limit}

## Methodology

{method} Build the sampling frame from the canonical content inventory and preserve every selected case. Have two reviewers apply the rubric to a calibration subset. Resolve ambiguous wording before the full review, while keeping the original observations.

The [article source traceability guide](/blog/virtual-assistant-article-source-traceability) supports evidence capture. The [SEO publishing checklist](/blog/virtual-assistant-seo-publishing-checklist) defines complementary checks on the released page.

## Evidence and analysis

Store timestamps, version identifiers, URLs, HTTP results, rendered observations, and approval records in separate fields. Report counts with denominators. Classify missing, inaccessible, and disputed evidence openly instead of converting those cases into passes.

## Inference limits and limitations

The result applies to the sampled records, chosen period, tools, and published rubric. Template differences, content age, reviewer interpretation, incomplete logs, and network conditions may affect it. An observed association cannot establish what caused the outcome, and untested articles remain outside the finding.

## Operational use

A virtual assistant can maintain the evidence table and repeat mechanical checks. An accountable editor owns interpretation, corrections, exceptions, and public claims. A later repetition can show change under the same definition, but it still cannot explain the cause without a stronger design.

## Sources

{source_lines}
"""

for row in BLOGS:
    slug, title, excerpt, category, image, focus, action, reason = row
    path = ROOT / "content/blog" / f"{slug}.mdx"
    if path.exists():
        raise FileExistsError(path)
    if not (ROOT / "public/blog/images" / image).exists():
        raise FileNotFoundError(image)
    path.write_text(frontmatter(slug, title, excerpt, category, image) + blog_body(title, focus, action, reason), encoding="utf-8")

for row in RESEARCH:
    slug, title, excerpt, category, image, focus, method, limit = row
    path = ROOT / "content/research" / f"{slug}.mdx"
    if path.exists():
        raise FileExistsError(path)
    if not (ROOT / "public/blog/images" / image).exists():
        raise FileNotFoundError(image)
    path.write_text(frontmatter(slug, title, excerpt, category, image, True) + research_body(title, focus, method, limit), encoding="utf-8")

print(f"created {len(BLOGS)} blog and {len(RESEARCH)} research articles for {DATE}")
