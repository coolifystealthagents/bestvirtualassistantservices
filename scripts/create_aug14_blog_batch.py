from pathlib import Path
import json
R=Path(__file__).resolve().parents[1]; B=R/'content/blog'; D='2026-08-14'
rows=[
('inbox-decision-log','Inbox Decision Logs','Record the request, approved answer, owner, due date, and source thread.','Separate decisions from ideas; conflicts go to the authorized owner.'),
('travel-preference-summary','Travel Preference Summaries','Record confirmed dates, locations, time zones, supplied needs, and each source. Mark preferences firm or flexible.','Do not book or cancel without approval; present alternatives to the traveler.'),
('vendor-contact-directory','Vendor Contact Directories','Track organization, service lane, named contact, role, channel, and verification date.','Do not infer authority or send commitments; escalate identity uncertainty.'),
('board-meeting-packet','Board Meeting Packets','List contents, versions, owners, dates, and items requiring decisions.','Do not alter legal or governance material; flag missing approvals.'),
('support-escalation-summary','Support Escalation Summaries','Use case, reported issue, verified observations, steps taken, impact, policy, and decision needed.','Do not promise remedies or diagnose causes; route high-risk concerns.'),
('contract-renewal-brief','Contract Renewal Briefs','List agreement, parties, term, notice window, owner, source, and open obligations.','Do not interpret legal language or send notices without authorization.'),
('team-handoff-note','Team Handoff Notes','State outcome, status, completed work, questions, sources, next owner, and deadline.','Do not close work because a note exists; retain unresolved items.'),
('customer-account-change-register','Customer Account Change Registers','Record request source, field, effective date, verification, owner, and completion evidence.','Do not change details or bypass verification; limit unnecessary fields.'),
('meeting-action-reconciliation','Meeting Action Reconciliation','Record each action’s owner, outcome, due date, source, and confirmation state.','Do not attribute unaccepted commitments; ask the meeting owner to resolve ambiguity.'),
('knowledge-base-article-review','Knowledge-Base Article Reviews','Check title, audience, answer, steps, links, owner, review date, and escalation route.','Do not invent behavior or silently rewrite policy; send conflicts to the subject owner.'),
('invoice-exception-register','Invoice Exception Registers','Record identifier, supplier, date, amount, exception, evidence, requester, and reviewer.','Do not alter values or approve payment; escalate identity, tax, and fraud concerns.'),
('event-attendee-accommodation-list','Event Accommodation Requests','Track reference, category, deadline, owner, and status while minimizing sensitive detail.','Do not promise or broadly disclose requests; escalate specialist matters.'),
('document-signature-tracker','Document Signature Trackers','Record title, version, sender, signer, dates, evidence, and storage location.','Do not sign for others or change signed documents; escalate legal questions.'),
('client-reference-request','Client Reference Requests','Capture requester, purpose, deadline, contact route, consent, and response owner.','Do not disclose client information or promise a reference without approval.'),
('shared-drive-folder-map','Shared-Drive Folder Maps','Map folder purpose, owner, access group, naming, retention note, and source location.','Do not broaden access, move records, or delete duplicates to tidy a map.'),
('appointment-intake-summary','Appointment Intake Summaries','Record purpose, participants, time zone, preparation, source, and unresolved questions.','Do not give professional advice or promise outcomes; route urgent matters.'),
('newsletter-approval-register','Newsletter Approval Registers','Track edition, subject, audience, sources, reviewer, approval date, and final asset.','Do not send campaigns or alter permissions; escalate consent and legal issues.'),
('office-supply-reorder-list','Office Supply Reorder Lists','Use item, location, observed quantity, check date, requester, urgency, and approval.','Do not order or approve spending; escalate unusual quantities and substitutions.'),
('client-feedback-theme-log','Client Feedback Theme Logs','Link original feedback to date, service area, neutral theme, and review status.','Do not fabricate frequency or publish conclusions from a small sample.'),
('software-access-request-register','Software Access Request Registers','Record requester, system, role, reason, approver, verification, decision, and evidence.','Do not grant access or share credentials; escalate privileged or mismatched requests.'),
('quarterly-priority-review','Quarterly Priority Reviews','Gather approved goals, status, owner, evidence, dependency, due date, and decision needed.','Do not set priorities or report unsourced performance; owners resolve trade-offs.'),
('client-document-return-checklist','Client Document Return Checklists','List category, version, transfer date, recipient, evidence, and awaiting confirmations.','Do not send sensitive documents through unapproved channels or promise retention.')
]
imgs=['virtual-assistant-inbox-triage-workflow.webp','virtual-assistant-travel-itinerary-review.webp','virtual-assistant-vendor-research-process.webp','virtual-assistant-document-control.webp','virtual-assistant-customer-support-queue-workflow.webp','virtual-assistant-document-version-control.webp','virtual-assistant-meeting-follow-up-workflow.webp','virtual-assistant-client-onboarding-controls.webp','virtual-assistant-calendar-capacity-review.webp','virtual-assistant-knowledge-base-search-quality.webp','virtual-assistant-invoice-follow-up.webp','virtual-assistant-event-operations.webp','virtual-assistant-document-control.webp','virtual-assistant-client-onboarding-checklist.webp','virtual-assistant-document-management-system.webp','virtual-assistant-appointment-reminder-workflow.webp','virtual-assistant-blog-brief-template.webp','virtual-assistant-office-administration.webp','virtual-assistant-customer-feedback-workflow.webp','virtual-assistant-access-review.webp','virtual-assistant-project-risk-register.webp','virtual-assistant-document-version-control.webp']
es=[]
for i,(s,t,d,b) in enumerate(rows,1):
 slug=f'virtual-assistant-aug14-{i:02d}-{s}'; title=f'Field Guide: {t}'
 body=f'''---
slug: {slug}
title: {title}
excerpt: Practical guidance for {t.lower()} with verified context, clear ownership, and sensible boundaries.
publishedAt: {D}
updatedAt: {D}
category: Operations
tags: [virtual assistant, workflow, operations]
featuredImage: /blog/images/{imgs[i-1]}
heroImageAlt: {title}
readingTime: 8 minutes
relatedArticles: [virtual-assistant-work-intake-triage, virtual-assistant-document-management-system, virtual-assistant-client-onboarding-controls]
---
# {title}

{t} work best when an owner can see current status, supporting evidence, and the next decision. This guide focuses on a practical record and a clean handoff.

## {title} starts with a reliable source of truth

{d} Name the authoritative record before collecting secondary details and note when it was checked. Keep incomplete information pending rather than turning assumptions into completed items.

## Keep preparation separate from decisions

{b} Administrative support can gather context, normalize labels, identify missing evidence, and prepare a review queue. The accountable owner retains decisions affecting commitments, sensitive information, public statements, or irreversible changes.

## Make the handoff reproducible

At handoff, include completed items, unresolved questions, source links, next owner, and review date. An exception note should say what is unusual, what was verified, and what remains. See the [service role library](/services) for adjacent support examples and the [provider vetting checklist](/provider-vetting) for access and backup questions. For a security baseline, consult the [NIST small business cybersecurity guidance](https://www.nist.gov/itl/smallbusinesscyber).

## Frequently asked questions

### What should be recorded first?

Record the intended outcome, source of truth, owner, and approval boundary.

### How should uncertainty be handled?

Label it plainly, preserve evidence, and route the decision to the person with authority.

### When is the record ready to share?

When status, open questions, sources, and the next action are clear without reconstructing the conversation.
'''
 (B/f'{slug}.mdx').write_text(body)
 es.append({'slug':slug,'route':f'/blog/{slug}','sourcePath':f'content/blog/{slug}.mdx','sourceDateField':'publishedAt','sourceDate':D,'renderedDate':D,'renderedDateFields':['datePublished','time[datetime]'],'provenance':'original-aug14-batch','introducedByCommit':'PENDING'})
m=R/'.paperclip/aug14-2026/blog.json'; m.parent.mkdir(parents=True,exist_ok=True); m.write_text(json.dumps({'schemaVersion':1,'contract':'sites3-aug14-public-date-v1','family':'blog','targetDate':D,'minimum':22,'entries':es},indent=2)+'\n')
print(len(es))
