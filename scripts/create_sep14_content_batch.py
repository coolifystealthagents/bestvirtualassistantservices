#!/usr/bin/env python3
"""Create the exact 12-blog/5-research September 14, 2026 batch."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
DATE = "2026-09-14"
IMAGE = "/blog/images/virtual-assistant-daily-article-status.webp"
RESEARCH_IMAGE = "/blog/images/virtual-assistant-article-research-claim-triage.webp"

BLOGS = [
    ("virtual-assistant-monday-priority-reset", "A Monday Priority Reset for Virtual Assistant Work", "Restart the weekly queue with explicit owners, deadlines, and decision points.", "priority reset", "Sort every open item by business deadline, dependency, and accountable reviewer. Archive duplicates, keep blocked work visible, and record the first action that can move each eligible item."),
    ("virtual-assistant-shared-inbox-escalation-clock", "Set an Escalation Clock for a Shared Inbox", "Make urgent messages visible without treating every new email as an emergency.", "shared inbox escalation clock", "Define urgency labels with concrete examples, the maximum waiting time for each label, the person who can decide exceptions, and the evidence required in an escalation."),
    ("virtual-assistant-recurring-task-owner-check", "Check the Owner of Every Recurring Assistant Task", "Prevent scheduled work from continuing after responsibilities change.", "recurring-task owner check", "Review each recurrence against its current business owner, purpose, input source, due window, and stop condition. Pause tasks whose owner or approved destination cannot be confirmed."),
    ("virtual-assistant-meeting-decision-register", "Keep a Decision Register After Virtual Meetings", "Separate settled decisions from notes, ideas, and unresolved questions.", "meeting decision register", "For each decision, record the exact choice, decision maker, effective date, affected workflow, follow-up owner, and evidence location. Keep proposals in a different section until approved."),
    ("virtual-assistant-customer-request-scope-check", "Run a Scope Check Before Handling a Customer Request", "Confirm authority and required context before an assistant promises an outcome.", "customer request scope check", "Match the request to an approved category, verify the customer record, identify the authorized response, and escalate financial, legal, privacy, or policy exceptions to the named owner."),
    ("virtual-assistant-file-naming-governance", "A File-Naming Rule That Supports Reliable Handoffs", "Use stable names and versions so the next reviewer can find the right record.", "file-naming governance rule", "Define required fields such as project, document type, date, status, and version. Prohibit ambiguous labels such as final-final and keep the authoritative file in one approved location."),
    ("virtual-assistant-weekly-access-change-review", "Review Weekly Access Changes for Virtual Assistants", "Reconcile granted, changed, and removed permissions against approved work.", "weekly access change review", "Compare the access register with identity-provider and application records. Confirm the approver, business need, permission level, effective date, and removal trigger for every change."),
    ("virtual-assistant-knowledge-base-stale-page-triage", "Triage Stale Pages in a Virtual Assistant Knowledge Base", "Find guidance that needs review without silently rewriting policy.", "knowledge-base stale-page triage", "Queue pages using declared signals such as owner departure, broken links, expired dates, or conflicting procedures. Preserve the current version and send policy decisions to the accountable owner."),
    ("virtual-assistant-deliverable-acceptance-record", "Create an Acceptance Record for Assistant Deliverables", "Close work with evidence that the requested output was actually reviewed.", "deliverable acceptance record", "Capture the request, acceptance criteria, submitted version, reviewer, review time, exceptions, and final disposition. A delivery notification alone does not count as acceptance."),
    ("virtual-assistant-vendor-contact-verification", "Verify Vendor Contacts Before a Critical Handoff", "Keep operational messages from relying on outdated or unverified recipients.", "vendor contact verification", "Confirm the contact through an approved source, record role and verification time, and test the escalation route before it is urgent. Do not infer authority from an old email thread."),
    ("virtual-assistant-dashboard-definition-check", "Check Metric Definitions Before Updating a Dashboard", "Keep recurring reports consistent when sources or labels change.", "dashboard definition check", "Read the metric definition, source, time zone, inclusion rule, and refresh window before updating values. Record missing data and definition changes instead of smoothing them away."),
    ("virtual-assistant-end-of-day-exception-handoff", "Write an End-of-Day Exception Handoff", "Give the next operator a short, usable record of unresolved work.", "end-of-day exception handoff", "List each open exception with its current state, last verified evidence, accountable owner, next action, and next check time. Separate urgent deadlines from work that can wait."),
]

RESEARCH = [
    ("virtual-assistant-priority-reset-consistency-study", "Studying Consistency in Virtual Assistant Priority Resets", "A bounded observational protocol for comparing weekly queue decisions.", "priority reset consistency", "Sample complete weekly reset records from a fixed eight-week window. Two reviewers code whether priority, owner, dependency, deadline, and next action were present using a frozen rubric."),
    ("virtual-assistant-inbox-escalation-timing-study", "Measuring Shared-Inbox Escalation Timing", "A reproducible design for observing message classification and escalation intervals.", "shared-inbox escalation timing", "Define eligible messages and urgency categories before extraction. Measure elapsed time from receipt to classification, escalation, acknowledgment, and closure while retaining missing timestamps."),
    ("virtual-assistant-recurring-task-drift-study", "Observing Drift in Recurring Virtual Assistant Tasks", "A record-review method for detecting changes in purpose, ownership, and inputs.", "recurring-task drift", "Freeze the scheduled-task inventory at the start of the window. Compare current owner, purpose, source, destination, frequency, and stop rule with the last approved specification."),
    ("virtual-assistant-decision-register-completeness-study", "Evaluating Virtual Meeting Decision-Register Completeness", "A calibrated review of whether decisions retain enough context for follow-through.", "decision-register completeness", "Select meetings by a declared rule and code every recorded decision for decision maker, effective date, affected workflow, action owner, due point, and evidence link."),
    ("virtual-assistant-access-change-reconciliation-study", "A Reconciliation Study of Virtual Assistant Access Changes", "A controlled comparison of approvals, account records, and application permissions.", "access-change reconciliation", "For a fixed population and observation window, join approved requests to identity-provider events and application-level permissions. Report unmatched and inaccessible records in the denominator."),
]

SOURCES = [
    "https://www.rfc-editor.org/rfc/rfc9110", "https://www.w3.org/TR/WCAG22/", "https://www.w3.org/WAI/test-evaluate/",
    "https://developers.google.com/search/docs/crawling-indexing/canonicalization", "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
    "https://www.nist.gov/cyberframework", "https://www.archives.gov/records-mgmt", "https://www.ftc.gov/business-guidance/privacy-security",
    "https://www.cisa.gov/resources-tools", "https://www.nist.gov/itl/ai-risk-management-framework",
]

def frontmatter(slug, title, excerpt, research=False):
    extra = ""
    if research:
        extra = f"cluster: virtual assistant operations evidence\nsourceCount: 10\nlastVerified: {DATE}\nkey_takeaways: [Declare the rule first, Preserve missing records, Separate findings from causes]\nkeyStats: [\"10: primary references listed\", \"2: reviewers for calibration\", \"1: fixed observation window\"]\nsources: {json.dumps(SOURCES)}\n"
    return f"""---
slug: {slug}
title: {title}
excerpt: {excerpt}
publishedAt: {DATE}
updatedAt: {DATE}
category: {'Operations Research' if research else 'Virtual Assistant Operations'}
tags: [virtual assistant, workflow control, quality review]
featuredImage: {RESEARCH_IMAGE if research else IMAGE}
heroImageAlt: {title} workflow evidence
readingTime: {'10' if research else '8'} minutes
relatedArticles: [virtual-assistant-project-coordination-checklist, virtual-assistant-quality-scorecard, virtual-assistant-remote-team-handoff-checklist]
{extra}---
"""

def blog(title, focus, action):
    return f"""# {title}

A {focus} gives a virtual assistant a bounded operating check while an accountable manager retains judgment, approval, and exception authority.

## {title}: start with a defined record

{action} State the source and verification time for each field. Keep missing information visible instead of guessing, and align status labels with the [project coordination checklist](/blog/virtual-assistant-project-coordination-checklist).

## Define completion before work begins

Write entry and exit rules, required evidence, the review owner, and the point that stops the task. Exclude tests and documented duplicates. This prevents a quiet scope change from looking like progress.

## Separate preparation from approval

The assistant may gather approved records, apply a documented rule, draft a response, and flag exceptions. The named owner decides commitments, access changes, financial outcomes, policy exceptions, and actions outside the brief. The [provider vetting checklist](/provider-vetting) can support a broader review of supervision and backup practices.

## Review evidence and exceptions

Sample open and completed items on a fixed rhythm. Check sources, timestamps, required fields, correction history, and acknowledgment by the receiving owner. Pair speed with rework and exception counts; volume alone does not prove quality.

Use named accounts and minimum necessary access. The [NIST small-business cybersecurity guidance](https://www.nist.gov/itl/smallbusinesscyber) provides a baseline for account protection. Keep sensitive information in the approved system of record.

## Close with a usable handoff

Record what changed, what remains open, the evidence supporting the status, who acts next, and when the next check occurs. Pilot the workflow with ordinary, urgent, incomplete, duplicate, and out-of-scope examples before expanding it.
"""

def research(title, focus, method):
    refs = "\n".join(f"{i}. [{u.split('/')[2]}]({u})" for i, u in enumerate(SOURCES, 1))
    return f"""# {title}

This research brief describes a reproducible review of {focus} for BestVirtualAssistantServices.com. It is a study protocol, not a completed experiment, provider ranking, causal finding, or performance promise.

## Scope, population, and observation window

Define the eligible virtual assistant workflow records, exclusions, and evidence fields before selection. Use a fixed observation window of September 1 through September 13, 2026. Retain inaccessible, incomplete, and disputed eligible records in the denominator.

## Methodology

{method} Preserve original codes and adjudication notes. The [quality scorecard](/blog/virtual-assistant-quality-scorecard) supports adjacent review, while the [project coordination checklist](/blog/virtual-assistant-project-coordination-checklist) keeps ownership fields consistent.

## Evidence and analysis plan

Capture identifiers, timestamps, versions, URLs, statuses, and evidence locations separately from interpretation. Publish eligible, reviewed, missing, disputed, passing, and failing counts with denominators. Report rubric changes and reviewer disagreement.

## Causal and inference boundaries

The design can describe recorded patterns under the declared rules. It cannot show that an assistant, tool, training choice, or management practice caused them. Workload, selection, configuration, record quality, and reviewer interpretation remain plausible alternatives.

## Limitations and operational use

The fixed window may miss seasonal variation, system timestamps may not represent human action, and results may not transfer to another organization. An assistant may assemble records and repeat mechanical checks; an accountable manager owns interpretation, correction, access decisions, and public claims.

## Sources and references

{refs}
"""

for slug, title, excerpt, focus, action in BLOGS:
    path = ROOT / "content/blog" / f"{slug}.mdx"
    if path.exists() and f"publishedAt: {DATE}" not in path.read_text(encoding="utf-8"): raise FileExistsError(path)
    path.write_text(frontmatter(slug, title, excerpt) + blog(title, focus, action), encoding="utf-8")

for slug, title, excerpt, focus, method in RESEARCH:
    path = ROOT / "content/research" / f"{slug}.mdx"
    if path.exists() and f"publishedAt: {DATE}" not in path.read_text(encoding="utf-8"): raise FileExistsError(path)
    path.write_text(frontmatter(slug, title, excerpt, True) + research(title, focus, method), encoding="utf-8")

print(f"created {len(BLOGS)} blog and {len(RESEARCH)} research articles for {DATE}")
