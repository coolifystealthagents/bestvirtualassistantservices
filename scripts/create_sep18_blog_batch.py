#!/usr/bin/env python3
from pathlib import Path
import hashlib
import json

ROOT = Path(__file__).resolve().parents[1]
DATE = "2026-09-18"
SOURCE = "https://www.nist.gov/itl/smallbusinesscyber"

ROWS = [
    ("virtual-assistant-trial-project-scorecard", "How to Score a Virtual Assistant Trial Project", "Hiring", "trial project", "a five-day inbox classification exercise", "accuracy, judgment, documentation, questions, and handoff quality", "work sample review", "/blog/images/virtual-assistant-work-sample-review.webp"),
    ("virtual-assistant-part-time-vs-full-time-planning", "Part-Time vs Full-Time Virtual Assistant: A Workload Test", "Hiring", "capacity choice", "a founder with 18 hours of recurring work and irregular launches", "weekly volume, peaks, response windows, meeting load, and management time", "capacity planning", "/blog/images/virtual-assistant-capacity-planning.webp"),
    ("virtual-assistant-agency-vs-freelancer-operations", "Virtual Assistant Agency vs Freelancer: Compare the Operating Model", "Provider Selection", "provider model", "a customer-support role that needs weekday backup", "coverage, supervision, replacement, access control, escalation, and continuity", "provider comparison", "/blog/images/virtual-assistant-vendor-comparison-checklist.webp"),
    ("virtual-assistant-coverage-hours-planning", "Plan Virtual Assistant Coverage Hours Without Guesswork", "Operations Planning", "coverage plan", "a US-based team working with a Philippines-based assistant", "time zones, deadlines, overlap, response promises, queues, and backup", "coverage planning", "/blog/images/virtual-assistant-time-zone-handoff.webp"),
    ("virtual-assistant-security-questions-before-hiring", "Security Questions to Ask Before Hiring a Virtual Assistant", "Risk and Security", "security review", "an assistant who will enter the CRM and shared inbox", "identity, access, devices, sharing, logging, incidents, and offboarding", "security screening", "/blog/images/virtual-assistant-security-access-checklist.webp"),
    ("virtual-assistant-first-30-days-onboarding", "A 30-Day Virtual Assistant Onboarding Plan", "Onboarding", "onboarding plan", "a new operations assistant taking over recurring administrative work", "outcomes, access, examples, practice, review, and independence", "onboarding", "/blog/images/virtual-assistant-client-onboarding-checklist.webp"),
    ("virtual-assistant-handoff-quality-metrics", "Five Metrics for Virtual Assistant Handoff Quality", "Quality Management", "handoff measurement", "a team receiving completed research and customer follow-ups", "acceptance, rework, missing context, reopened work, and decision latency", "quality measurement", "/blog/images/virtual-assistant-quality-scorecard.webp"),
    ("virtual-assistant-ecommerce-catalog-change-control", "Use Change Control for Ecommerce Catalog Updates", "Ecommerce Support", "catalog change", "a promotion that changes price, copy, inventory status, and collection placement", "request, source, fields, approval, preview, release, and rollback", "catalog administration", "/blog/images/virtual-assistant-ecommerce-product-catalog.webp"),
    ("virtual-assistant-crm-lead-routing-rules", "Write CRM Lead-Routing Rules a Virtual Assistant Can Follow", "CRM Administration", "lead routing", "a form submission that matches two territories and lacks company size", "source, ownership, territory, qualification, duplicates, timing, and exceptions", "CRM administration", "/blog/images/virtual-assistant-lead-qualification-workflow.webp"),
    ("virtual-executive-assistant-meeting-brief", "What to Put in an Executive Meeting Brief", "Executive Assistance", "meeting brief", "an executive joining a renewal call after several months away", "purpose, attendees, history, decisions, risks, agenda, and follow-up", "meeting preparation", "/blog/images/virtual-assistant-meeting-preparation-process.webp"),
    ("virtual-assistant-refund-authority-matrix", "Build a Refund Authority Matrix for Customer Support", "Customer Support", "refund decision", "a late shipment with a partial-use claim and a repeat customer", "request type, evidence, threshold, approver, response, record, and escalation", "refund support", "/blog/images/virtual-assistant-customer-refund-escalation.webp"),
    ("virtual-assistant-service-scope-estimator", "Estimate a Virtual Assistant Role Before You Hire", "Hiring", "scope estimate", "a small business combining inbox, scheduling, CRM, and weekly reporting", "task volume, handling time, variability, access, review, and growth", "role scoping", "/blog/images/virtual-assistant-outsourcing-readiness-checklist.webp"),
]

def article(slug, title, category, focus, scenario, fields, pillar, image):
    excerpt = f"A practical guide to {pillar} using observable workload, clear authority, and review evidence."
    return f"""---
slug: {slug}
title: {title}
excerpt: {excerpt}
publishedAt: {DATE}
updatedAt: {DATE}
category: {category}
tags: [virtual assistant, {pillar}, delegation]
featuredImage: {image}
heroImageAlt: {title}
readingTime: 9 minutes
relatedArticles: [virtual-assistant-task-brief-for-repeatable-delegation, virtual-assistant-security-access-checklist, virtual-assistant-project-coordination-checklist]
---
# {title}

Choosing a virtual assistant is easier when the work is described as an operating system rather than a list of attractive traits. This guide turns {focus} into a decision a manager can inspect. It uses a realistic example, {scenario}, and keeps preparation separate from the judgments that still belong to the business owner.

## {title}: begin with the business outcome

Write one sentence describing what should be reliably different after the role is working. Then record {fields}. These details reveal whether the request is repeatable support, a specialist project, or a collection of unrelated jobs. They also prevent a candidate from being judged against expectations that were never shared.

Avoid starting with a target number of hours. Hours are an input, not the outcome. First count eligible items for two representative weeks, note busy periods, and identify the deadline attached to each type of work. Separate routine volume from exceptions. If the business has no usable history, run a short observation period and label the estimate as provisional.

## Define what the assistant may decide

A workable {focus} names three levels of authority. At the first level, the assistant follows a documented rule and records the result. At the second, the assistant prepares options and recommends a next step for review. At the third, the accountable owner makes the decision. Financial commitments, policy exceptions, legal interpretations, sensitive access changes, and promises outside an approved script normally stay at the third level.

This boundary is not a criticism of the assistant. It protects both sides from invisible expectations. Put examples beside each level, including one ambiguous case. Link the rule to the system where the work occurs, and name the person who can answer an exception. “Ask the manager” is incomplete if several managers could respond differently.

## Build a representative test

Use five to ten samples that reflect ordinary work, incomplete inputs, duplicates, urgent cases, and an out-of-scope request. For {scenario}, include at least one record where two instructions conflict. Provide the same source material, access limits, deadline, and output format that would exist in the real role. Do not create a trick test whose difficulty comes from missing instructions.

Score the output against observable criteria: correct use of the source, required fields completed, uncertainty made visible, escalation sent to the right owner, and a handoff another person can continue. Keep communication style separate from factual accuracy. A polished answer that hides an unresolved exception should not outrank a plain answer that stops safely and asks a precise question.

## Estimate capacity with ranges

Measure active handling time separately from waiting time. A task may remain open for two days while requiring only fifteen minutes of assistant work. Calculate a low, expected, and peak weekly range. Add recurring meetings, quality review, documentation, and exception handling instead of assuming every paid hour is direct production.

Then test the estimate against coverage requirements. Work that must happen in a narrow window may require scheduled overlap even when its total volume is small. Work that can be queued may fit asynchronous coverage. Reserve capacity for predictable peaks, but do not purchase permanent capacity solely to solve a rare exception without comparing backup options.

## Specify access before granting it

List each system, the action required, the minimum permission that supports that action, the approver, and the removal trigger. Use named accounts, multifactor authentication where supported, and approved sharing methods. Do not pass passwords in chat or copy customer data into a convenience sheet simply because it is faster.

The [NIST small-business cybersecurity guidance]({SOURCE}) is a useful baseline for discussing accounts, devices, backups, and incident preparation. Apply it to the actual systems in scope. A provider should be able to explain how access is granted, reviewed, and removed without claiming that a checklist eliminates all risk.

## Design the first handoff

The first handoff should contain the request, the source records, the version of the instruction used, work completed, exceptions found, decisions needed, and the next owner. Ask a second person to continue using only that record. Every clarification they need points to a missing field or an unclear rule. The [project coordination checklist](/blog/virtual-assistant-project-coordination-checklist) gives this handoff a consistent structure.

Retain a short correction history. Do not rewrite the earlier state as though the final answer had always been known. That history helps distinguish a one-time exception from a standing instruction and gives the assistant a safer example when the situation returns.

## Review quality without rewarding silence

Track accepted work, rework, missing-context returns, reopened items, response time at the agreed percentile, and time waiting for owner decisions. Always publish the denominator with a rate. Review a sample of underlying records because a low exception count can mean the process improved. It can also mean that people stopped recording exceptions.

Use measures for coaching and system repair, not surveillance. If the same error repeats, inspect the intake form, example, ownership rule, and access path before blaming attention. A good control makes the correct action easier and gives uncertainty somewhere visible to go.

## Compare providers on the same evidence

Ask every candidate or service provider the same operating questions. Who supervises the work? What happens during absence? How are instructions versioned? How are access changes approved? Who reviews quality? How are mistakes disclosed and corrected? What is excluded from the service? Record answers rather than relying on a sales-call impression.

Compare the full management model as well as the quoted fee. A lower rate may require more recruiting, training, backup planning, or direct supervision. A managed service may include those functions but offer less individual control. Neither model is automatically best; the right choice depends on the continuity, specialization, and management load the work requires.

## Use a 30-day decision gate

During the first week, verify access and practice on bounded examples. In the second, run routine work with complete review. In the third, reduce review only for categories that have met the acceptance rule. In the fourth, compare actual volume, exceptions, rework, and owner time with the original estimate.

At the gate, choose whether to continue, narrow, expand, retrain, or stop. Record the evidence and the next review date. Do not expand scope merely because unused hours remain. New work needs its own outcome, authority boundary, source, acceptance rule, and access check.

## A practical next step

Choose one recurring workflow and complete the [repeatable delegation brief](/blog/virtual-assistant-task-brief-for-repeatable-delegation). Pair it with the security and coordination controls described above. If you want help matching the scope to Philippines-based virtual assistant support, describe the outcome, weekly volume, required overlap, and systems involved before speaking with a provider.
"""

entries = []
for row in ROWS:
    slug = row[0]
    path = ROOT / "content/blog" / f"{slug}.mdx"
    if path.exists() and f"publishedAt: {DATE}" not in path.read_text(encoding="utf-8"):
        raise FileExistsError(path)
    body = article(*row)
    path.write_text(body, encoding="utf-8")
    entries.append({
        "family": "blog", "topic": row[1], "slug": slug,
        "sources": [SOURCE], "contentHash": hashlib.sha256(body.encode()).hexdigest(),
        "actualPublicationDate": DATE, "commitSha": "PENDING",
        "deploymentEvidence": "PENDING", "liveUrl": f"https://bestvirtualassistantservices.com/blog/{slug}",
        "verificationTime": "PENDING", "route": f"/blog/{slug}",
        "sourcePath": str(path.relative_to(ROOT)), "imagePath": row[-1],
    })

manifest = ROOT / ".paperclip/daily-content" / DATE / "blog.json"
manifest.parent.mkdir(parents=True, exist_ok=True)
manifest.write_text(json.dumps({
    "schemaVersion": 2, "contract": "canonical-daily-blog-publishing",
    "family": "blog", "domain": "bestvirtualassistantservices.com",
    "targetDate": DATE, "required": 12, "verified": 0, "entries": entries,
}, indent=2) + "\n", encoding="utf-8")
print(f"created {len(entries)} new articles")
