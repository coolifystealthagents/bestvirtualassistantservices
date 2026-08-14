from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / "content/blog"

topics = [
    ("virtual-assistant-customer-onboarding-timeline", "A Customer Onboarding Timeline a Virtual Assistant Can Keep Current", "customer onboarding timeline", "An onboarding timeline turns a welcome promise into visible milestones: information received, access confirmed, first appointment prepared, and open questions assigned.", "Track each milestone against the approved customer record, and keep a separate exception note for missing information rather than silently moving a date.", "A useful timeline distinguishes customer-owned steps from team-owned steps. That makes delays easier to explain and prevents a support specialist from promising a completion date they cannot control."),
    ("virtual-assistant-sales-call-preparation", "Sales Call Preparation Tasks for a Virtual Assistant", "sales call preparation", "Sales call preparation is most useful when it assembles approved context without turning guesses into customer facts.", "Gather the confirmed attendee names, prior conversation links, requested outcomes, and questions already supplied by the prospect. Mark every missing item instead of filling gaps from an old record.", "Keep preparation separate from the call owner’s judgment. A virtual assistant can organize the brief and check links; the responsible person decides what to promise or disclose."),
    ("virtual-assistant-client-asset-request", "How to Organize Client Asset Requests", "client asset requests", "A clear asset request gives clients one understandable list of what is needed, why it matters, and where to place the approved file.", "Group requests by purpose, name accepted formats, provide an example, and record the date requested. Avoid asking for sensitive material through an unapproved channel.", "When an asset arrives, record its source, version, and review status. The working list should show what is still missing without exposing private contents in a broad team channel."),
    ("virtual-assistant-service-renewal-calendar", "Keeping a Service Renewal Calendar Useful", "service renewal calendar", "A renewal calendar helps a business notice upcoming decisions without treating a calendar entry as proof that a contract will continue.", "Record the agreement name, decision date, notice requirement, owner, and source document. Add a reminder early enough for review, not merely on the final day.", "A calendar entry should lead to a review packet containing current terms, usage notes, and open questions. Keep renewal decisions with the authorized owner."),
    ("virtual-assistant-webinar-registration-check", "A Webinar Registration Check Before Promotion", "webinar registration check", "Before a webinar is promoted, a virtual assistant can verify that the registration path, event details, and confirmation message agree.", "Test the title, time zone, presenter names, registration fields, confirmation destination, and calendar file in a controlled review. Do not submit live leads while testing.", "Record the result and the environment used. If a form or confirmation behaves unexpectedly, escalate with a screenshot or exact error rather than changing the public event details."),
    ("virtual-assistant-returns-evidence-index", "An Evidence Index for Customer Returns", "returns evidence index", "A returns evidence index keeps each case understandable without making a support coordinator decide whether a refund or exception is warranted.", "Link the case identifier to the order record, customer message, item details, dates, and current status. Preserve the original evidence and label staff summaries as summaries.", "Escalate safety claims, disputed receipt information, and policy exceptions. The index should help the authorized reviewer decide, not make that decision by implication."),
    ("virtual-assistant-podcast-production-calendar", "Organizing a Podcast Production Calendar", "podcast production calendar", "A podcast calendar is easier to trust when recording, guest, asset, review, and release milestones are visibly distinct.", "Record the guest contact, confirmed recording time, preparation materials, consent status, editor handoff, and review owner. Use one source of truth for the current episode status.", "Do not publish a guest detail or episode claim without approval. A virtual assistant can surface missing assets and conflicts while the producer retains editorial control."),
    ("virtual-assistant-employee-onboarding-checklist", "An Employee Onboarding Checklist with Clear Ownership", "employee onboarding checklist", "An onboarding checklist should make administrative readiness visible while leaving employment, payroll, and access decisions with the responsible team.", "Separate paperwork received, equipment prepared, accounts requested, introductions scheduled, and training completed. Record an owner and evidence for each item.", "Limit sensitive fields to the approved system. If an identity, payroll, or access question does not match the written policy, stop and escalate rather than improvising."),
    ("virtual-assistant-website-faq-review", "How a Virtual Assistant Can Review Website FAQs", "website FAQ review", "A good FAQ review checks whether answers are findable, current, and supported by an approved source.", "List each question, destination answer, last checked date, broken link, and owner. Compare the wording with the current service page and flag claims that need subject-matter approval.", "A reviewer may identify gaps and inconsistencies, but should not invent policy or service promises. Keep proposed edits separate from approved public copy."),
    ("virtual-assistant-calendar-conflict-summary", "A Calendar Conflict Summary for Busy Teams", "calendar conflict summary", "A conflict summary gives the calendar owner a compact view of overlapping commitments, travel constraints, and decisions still needed.", "Include event names, local time zones, duration, location, attendees, and the source of each constraint. Rank conflicts by consequence, not by how recently they appeared.", "Never move a meeting or disclose a private calendar detail without the owner’s authority. The summary is a decision aid, not permission to make changes."),
    ("virtual-assistant-customer-preference-record", "Maintaining Customer Preference Records Carefully", "customer preference records", "Preference records are useful only when their source, scope, and freshness are clear.", "Record the preference, date observed, source, confidence, and the service context where it applies. Keep a correction path when a customer changes their mind.", "Do not infer sensitive preferences from behavior or copy personal details into an unnecessary system. Escalate conflicts between a request and a documented consent choice."),
    ("virtual-assistant-team-availability-board", "A Team Availability Board That Avoids Guesswork", "team availability board", "An availability board can make scheduling easier when it shows the difference between confirmed availability, a tentative hold, and an unreviewed assumption.", "Use a consistent status, time zone, source, and last-confirmed date. Record recurring constraints separately from one-time exceptions.", "Do not treat an unconfirmed entry as a commitment. The board owner should approve changes that affect staffing, service promises, or personal information."),
    ("virtual-assistant-content-asset-inventory", "Building a Content Asset Inventory", "content asset inventory", "A content asset inventory helps a team find approved material while keeping drafts, licenses, and usage notes visible.", "Track the asset name, format, location, owner, approval state, date checked, and permitted use. Link to the source record rather than duplicating large files.", "Do not publish an asset because it appears in the inventory. Confirm its approval and usage rights, and escalate unclear ownership or licensing."),
    ("virtual-assistant-customer-complaint-timeline", "How to Build a Customer Complaint Timeline", "customer complaint timeline", "A complaint timeline gives an authorized reviewer a factual sequence without assigning blame or promising an outcome.", "Capture the original message, response times, people involved, commitments made, and evidence links. Separate direct quotes from staff interpretation.", "Keep medical, legal, safety, and harassment concerns in their prescribed escalation lane. A coordinator can organize evidence but should not resolve high-risk complaints."),
    ("virtual-assistant-conference-speaker-brief", "A Conference Speaker Brief a Virtual Assistant Can Prepare", "conference speaker brief", "A speaker brief reduces last-minute confusion by collecting confirmed logistics, approved biography text, and open questions in one place.", "Verify the session title, venue, time zone, arrival instructions, presentation format, contact person, and submission deadline against source emails or the event portal.", "Do not edit a speaker’s credentials or make travel promises without approval. Flag contradictions and let the speaker or event owner resolve them."),
    ("virtual-assistant-purchase-request-register", "A Purchase Request Register for Small Teams", "purchase request register", "A purchase request register makes pending decisions visible without turning administrative support into purchasing authority.", "Record the requester, business purpose, requested item, source link, needed-by date, approval state, and budget owner. Keep rejected and withdrawn requests distinguishable from open ones.", "Do not place an order, approve a supplier, or disclose payment details unless that authority is explicitly assigned. Escalate unclear ownership or duplicate requests."),
    ("virtual-assistant-client-meeting-brief", "Preparing a Client Meeting Brief", "client meeting brief", "A client meeting brief should help people arrive prepared with verified context, clear questions, and a realistic decision list.", "Gather the last approved summary, open actions, requested decisions, relevant links, and attendee roles. Note the date each source was checked.", "Keep recommendations and commitments with the meeting owner. The assistant can identify missing context and organize the brief without presenting an unapproved position."),
    ("virtual-assistant-contact-preference-audit", "A Careful Audit of Contact Preferences", "contact preference audit", "A contact preference audit checks whether outreach records reflect the latest approved customer instruction.", "Compare the preference field with its source, effective date, channel, and exception note. Treat conflicting records as an escalation, not as an invitation to choose the most convenient value.", "Do not send a message as part of the audit or override an opt-out. Limit access to the records needed for the review."),
    ("virtual-assistant-product-launch-readiness", "A Product Launch Readiness List for Administrative Support", "product launch readiness", "A launch readiness list helps a team see which administrative details are confirmed before public work begins.", "Check approved naming, page links, support references, owner assignments, event dates, and internal handoff materials. Mark each item with evidence and a last-checked date.", "Do not announce a launch, alter production content, or make a claim based on an incomplete checklist. Escalate blockers to the owner responsible for that lane."),
    ("virtual-assistant-client-offboarding-record", "Keeping a Client Offboarding Record Complete", "client offboarding record", "A client offboarding record documents what was returned, closed, transferred, or left for a named owner.", "List active access, open commitments, final deliverables, data-return instructions, contact preferences, and the approval for each closure step. Keep dates and evidence together.", "Do not delete records, revoke access, or promise retention terms without authorization. Sensitive account and legal questions belong with the designated owner."),
    ("virtual-assistant-market-research-interview-log", "An Interview Log for Market Research Support", "market research interview log", "An interview log preserves scheduling facts and consent context without pretending that administrative notes are research conclusions.", "Record participant code, confirmed time, consent status, source link, attendance state, and follow-up owner. Keep personal details to the minimum approved fields.", "Do not fabricate responses, infer demographic facts, or publish findings from an incomplete log. Escalate consent or privacy questions before further contact."),
    ("virtual-assistant-service-request-intake", "Designing a Better Service Request Intake", "service request intake", "A service request intake form is easier to act on when it captures the requested outcome, deadline, context, and decision owner.", "Use plain labels, a useful example, a safe way to attach supporting context, and a visible route for urgent or sensitive requests. Review repeated ambiguity with the service owner.", "Do not promise acceptance, urgency, or completion from the intake alone. Avoid collecting information that the team does not need to perform the requested work."),
]

images = [
    "virtual-assistant-client-onboarding-metrics.webp", "virtual-assistant-meeting-follow-up-workflow.webp", "virtual-assistant-document-control.webp", "virtual-assistant-calendar-capacity-review.webp", "virtual-assistant-event-operations.webp", "virtual-assistant-customer-feedback-summary.webp", "virtual-assistant-podcast-guest-brief.webp", "virtual-assistant-employee-onboarding-admin.webp", "virtual-assistant-website-content-updates.webp", "virtual-assistant-calendar-capacity-review.webp", "virtual-assistant-client-onboarding-controls.webp", "virtual-assistant-calendar-delegation.webp", "virtual-assistant-content-approval-workflow.webp", "virtual-assistant-customer-support-queue-workflow.webp", "virtual-assistant-event-operations.webp", "virtual-assistant-invoice-follow-up.webp", "virtual-assistant-meeting-follow-up-workflow.webp", "virtual-assistant-customer-feedback-workflow.webp", "virtual-assistant-client-onboarding-checklist.webp", "virtual-assistant-document-control.webp", "virtual-assistant-travel-itinerary-review.webp", "virtual-assistant-work-intake-triage.webp",
]

old_aug13 = []
for path in BLOG.glob("*.mdx"):
    text = path.read_text(encoding="utf-8")
    if "publishedAt: 2026-08-13" in text:
        old_aug13.append(path)
for path in old_aug13:
    path.unlink()

entries = []
for i, (slug, title, focus, opening, detail, boundary) in enumerate(topics):
    related = ["virtual-assistant-work-intake-triage", "virtual-assistant-document-management-system", "virtual-assistant-client-onboarding-controls"]
    body = f'''---
slug: {slug}
title: {title}
excerpt: Practical guidance for organizing {focus} with clear records, review points, and sensible boundaries.
publishedAt: 2026-08-13
updatedAt: 2026-08-13
category: Operations
tags: [virtual assistant, workflow, operations]
featuredImage: /blog/images/{images[i]}
heroImageAlt: {title}
readingTime: 7 minutes
relatedArticles: [{', '.join(related)}]
---
# {title}

{opening}

## {title} starts with a reliable record

{detail} Name the source of truth before work begins, record when it was checked, and make the intended outcome explicit. This keeps a small administrative task from becoming a chain of assumptions.

## Separate preparation from approval

{boundary} A virtual assistant can gather details, normalize labels, identify missing fields, and prepare a review queue. The owner or designated specialist should retain decisions that affect commitments, sensitive information, public statements, or irreversible changes.

## Make the handoff easy to review

At handoff, include the completed range, unresolved items, source links, and a short explanation of unusual cases. Use the [service role library](/services) for adjacent support examples and the [provider vetting checklist](/provider-vetting) when reviewing access, training, and backup questions. For a security baseline, consult the [NIST small business cybersecurity guidance](https://www.nist.gov/itl/smallbusinesscyber).

## Frequently asked questions

### What should be checked first?

Confirm the source of truth, the intended audience, the required output, and the approval boundary.

### What belongs in an exception note?

State what is unusual, what evidence was checked, what remains uncertain, and who must decide the next step.

### When is the task ready to expand?

Expand only after review shows that the instructions, records, and escalation path work together consistently.
'''
    (BLOG / f"{slug}.md").write_text(body, encoding="utf-8")
    entries.append({"slug": slug, "route": f"/blog/{slug}", "sourcePath": f"content/blog/{slug}.md", "sourceDateField": "publishedAt", "sourceDate": "2026-08-13", "renderedDate": "2026-08-13", "renderedDateFields": ["datePublished", "time[datetime]"], "provenance": "strict-repair-replacement", "introducedByCommit": "PENDING"})

manifest = {"schemaVersion": 1, "contract": "sites3-aug13-strict-repair-v2", "family": "blog", "targetDate": "2026-08-13", "minimum": 22, "entries": entries}
(ROOT / ".paperclip/aug13-2026/blog.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
print(f"created {len(entries)} new Blog Markdown records; removed {len(old_aug13)} unaccepted August 13 MDX records")
