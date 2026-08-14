from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
blog = ROOT / 'content' / 'blog'
topics = [
('virtual-assistant-accessibility-content-review', 'How a Virtual Assistant Can Review Website Content for Accessibility', 'website accessibility review', 'Review headings, link labels, image descriptions, keyboard flow notes, and plain-language issues before a page update is approved.'),
('virtual-assistant-membership-data-audit', 'A Practical Virtual Assistant Guide to Membership Data Audits', 'membership data audit', 'A useful audit compares the membership list with the source of truth, records the reason for each correction, and leaves uncertain records for owner review.'),
('virtual-assistant-client-portal-file-index', 'How to Build a Reliable Client Portal File Index', 'client portal file index', 'A clear index gives each file a meaningful name, owner, date, status, and location so clients and support staff can find the current version without guessing.'),
('virtual-assistant-appointment-reminder-review', 'Appointment Reminder Reviews That Reduce Avoidable Confusion', 'appointment reminder review', 'A reminder review checks the recipient, time zone, preparation details, contact method, and cancellation instructions against the approved appointment record.'),
('virtual-assistant-business-travel-packet', 'What Belongs in a Business Travel Packet Prepared by a Virtual Assistant', 'business travel packet', 'A travel packet should gather confirmed reservations, addresses, check-in rules, contact details, calendar holds, and a short exception list in one readable place.'),
('virtual-assistant-customer-feedback-coding', 'A Better Way to Organize Customer Feedback Themes', 'customer feedback themes', 'Consistent theme labels help an owner distinguish a one-off comment from a repeated friction point without flattening the customer’s original wording.'),
('virtual-assistant-course-support-inbox', 'How Virtual Assistants Can Organize a Course Support Inbox', 'course support inbox', 'Separate access questions, assignment questions, billing referrals, and technical issues so each message reaches the right reviewer with its context intact.'),
('virtual-assistant-donor-thank-you-records', 'Keeping Donor Thank-You Records Accurate and Useful', 'donor thank-you records', 'A dependable record links the gift date, acknowledgment status, preferred name, responsible reviewer, and any exception that needs personal attention.'),
('virtual-assistant-event-attendee-checkin', 'Event Attendee Check-In Lists: A Practical Preparation Guide', 'event attendee check-in', 'A check-in list needs a stable attendee identity, registration status, accessibility note handling, and a clear process for walk-ins and duplicate entries.'),
('virtual-assistant-expense-receipt-index', 'How to Create an Expense Receipt Index Without Losing Context', 'expense receipt index', 'Index receipts by transaction date, vendor, amount, account category, and source location while preserving a review note for anything that does not reconcile cleanly.'),
('virtual-assistant-follow-up-commitment-log', 'The Virtual Assistant Follow-Up Commitment Log Explained', 'follow-up commitment log', 'A commitment log captures who owes what, the agreed next step, the due date, and the last evidence of contact so follow-up is based on records rather than memory.'),
('virtual-assistant-help-desk-category-map', 'Designing a Help Desk Category Map People Can Actually Use', 'help desk category map', 'Good categories reflect the decision a responder must make, use plain labels, and include examples for edge cases that otherwise create inconsistent routing.'),
('virtual-assistant-inventory-restock-sheet', 'A Clear Inventory Restock Sheet for Small Teams', 'inventory restock sheet', 'A restock sheet combines item identity, current count, reorder threshold, supplier reference, and last checked date without pretending that an estimate is a confirmed order.'),
('virtual-assistant-knowledge-base-gap-review', 'How to Spot Gaps in a Customer Knowledge Base', 'knowledge base gap review', 'Compare recurring questions with published answers, check whether instructions match the current product experience, and rank gaps by customer impact.'),
('virtual-assistant-local-business-review-monitoring', 'A Responsible Workflow for Monitoring Local Business Reviews', 'local business review monitoring', 'Record the platform, review date, topic, sentiment evidence, and response status while keeping public replies within the owner’s approved voice and authority.'),
('virtual-assistant-meeting-decision-register', 'Why a Meeting Decision Register Matters After the Call', 'meeting decision register', 'A decision register separates settled choices from open questions and ties each choice to an owner, date, supporting document, and follow-up action.'),
('virtual-assistant-newsletter-link-check', 'A Pre-Send Newsletter Link Check for Virtual Assistant Support', 'newsletter link check', 'A pre-send check verifies destination, tracking expectations, mobile readability, unsubscribe behavior, and the relationship between each callout and its target page.'),
('virtual-assistant-project-risk-intake', 'How to Capture Project Risks Before They Become Surprises', 'project risk intake', 'A useful risk intake records the condition, possible effect, early signal, owner, response, and review date instead of using vague labels such as high priority.'),
('virtual-assistant-real-estate-showing-prep', 'Real Estate Showing Preparation Tasks a Virtual Assistant Can Organize', 'real estate showing preparation', 'Preparation may include confirming property details, assembling approved materials, checking access instructions, and flagging missing information before a showing.'),
('virtual-assistant-supplier-contact-records', 'Maintaining Supplier Contact Records That Stay Findable', 'supplier contact records', 'Keep the supplier identity, service area, current contact route, verification date, and escalation note together so a team does not rely on an outdated personal inbox.'),
('virtual-assistant-survey-response-coding', 'A Practical Method for Coding Survey Responses', 'survey response coding', 'Use a small documented codebook, preserve the original response, mark ambiguous answers, and review a sample for consistency before summarizing patterns.'),
('virtual-assistant-website-image-alt-text', 'A Virtual Assistant Guide to Checking Image Alt Text', 'website image alt text', 'Alt text review should describe purpose in context, avoid redundant phrases, flag decorative images for the right treatment, and leave technical judgment visible for approval.'),
]
images = ['virtual-assistant-website-update-accessibility.webp', 'virtual-assistant-data-entry-quality-controls.webp', 'virtual-assistant-document-control.webp', 'virtual-assistant-appointment-setting-quality.webp', 'virtual-assistant-travel-itinerary-review.webp', 'virtual-assistant-customer-feedback-summary.webp', 'virtual-assistant-knowledge-base-search-quality.webp', 'virtual-assistant-donor-records-controls.webp', 'virtual-assistant-event-operations.webp', 'virtual-assistant-receipt-review-notes.webp', 'virtual-assistant-follow-up-logs.webp', 'virtual-assistant-help-desk-routing.webp', 'virtual-assistant-inventory-tracking-controls.webp', 'virtual-assistant-knowledge-base-maintenance.webp', 'virtual-assistant-customer-feedback-workflow.webp', 'virtual-assistant-meeting-follow-up-workflow.webp', 'virtual-assistant-email-newsletter-operations.webp', 'virtual-assistant-project-risk-register.webp', 'virtual-assistant-real-estate-listing-prep.webp', 'virtual-assistant-vendor-onboarding.webp', 'virtual-assistant-survey-response-summary.webp', 'virtual-assistant-website-update-accessibility.webp']
internal = ['virtual-assistant-work-intake-triage', 'virtual-assistant-document-management-system', 'virtual-assistant-client-onboarding-controls', 'virtual-assistant-project-status-reporting']
specifics = [
    'Compare heading order, descriptive link text, form labels, image purpose, and the page’s reading order. Record observations separately from accessibility conclusions that require specialist review.',
    'Compare duplicate names, stale contact fields, renewal status, and opt-out notes. Never merge records solely because two names look similar.',
    'Index the client-facing folder tree, distinguish drafts from approved files, and note permissions or missing documents without copying confidential content into the index.',
    'Check local time, daylight-saving changes, preparation instructions, reminder timing, and the approved cancellation route before marking a reminder ready.',
    'Put confirmation numbers, traveler names, arrival constraints, transfer details, and emergency contacts in the same sequence the traveler will need them.',
    'Keep a short codebook for delivery, usability, response, and product themes. Quote enough context to preserve meaning while removing personal details from summaries.',
    'Separate learner identity, course area, urgency, and requested outcome. Route account-access problems differently from questions that belong with the instructor.',
    'Match the acknowledgment to the recorded gift and preferred salutation, then flag address uncertainty or duplicate acknowledgments for the responsible reviewer.',
    'Prepare a check-in view with registration lookup, attendance state, name pronunciation or access notes, and a visible path for resolving a duplicate registration.',
    'Use the receipt image as evidence, not as a substitute for the ledger. Flag missing dates, unclear vendors, duplicate uploads, and category questions for review.',
    'Write each commitment as an observable next action. Include the meeting or message where it originated and update status only when evidence supports the change.',
    'Test categories against real examples, measure how often items land in an “other” bucket, and revise labels with the support owner rather than adding endless subcategories.',
    'Record units and measurement dates, distinguish counted stock from expected deliveries, and preserve the supplier reference used for the last confirmed restock.',
    'Map unanswered questions to the page or article where an answer should live, then check whether the gap is missing content, poor navigation, or an outdated instruction.',
    'Capture the exact review URL, publication date, business location, and response status. Escalate allegations or personal data rather than improvising a public reply.',
    'Use one row per decision, link the supporting note, and mark superseded decisions clearly so an old agreement cannot quietly become the current instruction.',
    'Open every destination in the intended environment, check redirects and anchor targets, and compare the callout wording with the promise made by the destination page.',
    'Describe the trigger and consequence in plain language, assign a person who can act, and set a review date that is tied to the project milestone at risk.',
    'Confirm listing address, showing window, access method, approved property facts, and material requests before assembling the packet for the licensed professional.',
    'Store a role or service label with the supplier record, verify the contact route periodically, and note when a substitute contact is only temporary.',
    'Apply codes to a reviewed sample before processing the full set. Mark mixed or ambiguous responses rather than forcing them into a convenient category.',
    'Describe what the image contributes to the page, avoid repeating nearby text, and flag charts or diagrams whose meaning cannot be captured in a short label.',
]
for i, (slug, title, focus, lead) in enumerate(topics):
    related = [internal[i % 4], internal[(i + 1) % 4], internal[(i + 2) % 4]]
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

{lead} This is the difference between a useful support task and a pile of unverified updates.

## {title} starts with a defined source of truth

Name the system, document, or approved list that controls the work. Record the date checked and the person who can resolve a conflict. Use the [work intake guide](/blog/{internal[i % 4]}) to state the requested outcome, deadline, and definition of done before the first record is changed.

For this task, the most useful working check is specific: {specifics[i]}

## Separate preparation from approval

A virtual assistant can gather details, normalize labels, identify missing fields, and prepare a review queue. The owner or designated specialist should retain decisions that affect commitments, sensitive information, public statements, or irreversible changes. Keep an exception note beside the record rather than hiding it in a private message.

## Use a reviewable handoff

At handoff, include the completed range, unresolved items, source links, and a short explanation of unusual cases. A [document management system](/blog/{internal[(i + 1) % 4]}) helps keep the working copy and approved copy distinguishable. For access and record-handling basics, consult the [NIST small business cybersecurity guidance](https://www.nist.gov/itl/smallbusinesscyber).

## Improve the lane from real exceptions

After review, group corrections by cause: missing instruction, ambiguous source data, access problem, or judgment call. Update the brief only when the owner agrees the rule is stable. Keep a small set of approved examples so the next handoff explains the standard without exposing private client information.

## Frequently asked questions

### What should be checked first?

Confirm the source of truth, the intended audience, the required output, and the approval boundary.

### What belongs in an exception note?

State what is unusual, what evidence was checked, what remains uncertain, and who must decide the next step.

### When is the task ready to expand?

Expand only after several review cycles show that the instructions, records, and escalation path work together consistently.
'''
    (blog / f'{slug}.md').write_text(body, encoding='utf-8')
for old in blog.glob('*.mdx'):
    if 'publishedAt: 2026-08-13' in old.read_text(encoding='utf-8'):
        old.unlink()
manifest = {'schemaVersion': 1, 'contract': 'sites3-aug13-creation-v1', 'family': 'blog', 'targetDate': '2026-08-13', 'minimum': 22, 'entries': [{'slug': slug, 'route': f'/blog/{slug}', 'sourcePath': f'content/blog/{slug}.md', 'sourceDateField': 'publishedAt', 'sourceDate': '2026-08-13', 'renderedDate': '2026-08-13', 'renderedDateFields': ['datePublished', 'time[datetime]'], 'provenance': 'replacement-identity', 'introducedByCommit': 'PENDING'} for slug, *_ in topics]}
(ROOT / '.paperclip/aug13-2026').mkdir(parents=True, exist_ok=True)
(ROOT / '.paperclip/aug13-2026/blog.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
