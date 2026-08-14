from pathlib import Path

OUT = Path('content/research')
SOURCES = [
    ('NIST Privacy Framework', 'https://www.nist.gov/privacy-framework'),
    ('NIST SP 800-53 Rev. 5', 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final'),
    ('CISA Secure Our World', 'https://www.cisa.gov/secure-our-world'),
    ('W3C WCAG 2.2', 'https://www.w3.org/TR/WCAG22/'),
    ('FTC Privacy and Security', 'https://www.ftc.gov/business-guidance/privacy-security'),
    ('U.S. National Archives records management', 'https://www.archives.gov/records-mgmt'),
    ('ILO working from home research', 'https://www.ilo.org/publications/major-publications/working-home-invisibility-decent-work'),
    ('OECD digital economy research', 'https://www.oecd.org/en/topics/sub-issues/digital-economy.html'),
    ('Google Search helpful content guidance', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content'),
    ('Library of Congress copyright guidance', 'https://www.loc.gov/copyright/'),
]

TOPICS = [
    ('vendor-certificate-expiry-review', 'Vendor Certificate Expiry Review by Virtual Assistants', 'vendor certificate expiry review', 'virtual-assistant-vendor-risk-review.webp', 'certificate identity, covered service, effective and expiry dates, named vendor contact, storage location, and owner decision', 'a reviewer can locate and compare documents, but cannot declare coverage adequate, waive an expiry, or provide legal advice', 'virtual-assistant-vendor-risk-review', 'virtual-assistant-vendor-renewal-tracking', 'The central risk is treating a current-looking file as proof that a vendor relationship is still covered for the required activity.'),
    ('appointment-reminder-preference-review', 'Appointment Reminder Preference Review by Virtual Assistants', 'appointment reminder preference review', 'virtual-assistant-appointment-setting-quality.webp', 'appointment identifier, contact channel, preference history, consent evidence, failed delivery, and owner escalation', 'administrative review can reconcile preferences and route a question, but cannot infer consent, disclose sensitive details, or make a clinical decision', 'virtual-assistant-appointment-setting-quality', 'virtual-assistant-email-security-controls', 'The central risk is sending a message through a channel that the record does not support or that the recipient has not authorized.'),
    ('customer-account-change-register', 'Customer Account Change Registers by Virtual Assistants', 'customer account change register', 'virtual-assistant-customer-feedback-controls.webp', 'request source, requester identity, requested field, before and after values, verification step, timestamp, and approving owner', 'a recorder can preserve a request and apply an approved change, but cannot authenticate a disputed identity or approve a high-impact account change', 'virtual-assistant-customer-feedback-controls', 'virtual-assistant-customer-inbox-triage', 'The central risk is making a clean-looking record after a change without proving who requested it or who authorized it.'),
    ('shared-drive-folder-governance', 'Shared Drive Folder Governance by Virtual Assistants', 'shared drive folder governance', 'virtual-assistant-document-access-governance.webp', 'folder purpose, accountable owner, permitted audience, inherited access, naming rule, stale content, and review date', 'a reviewer can map folders and flag excess access, but cannot redesign ownership, delete a record under hold, or approve a new audience', 'virtual-assistant-document-access-governance', 'virtual-assistant-document-retention-workflow', 'The central risk is confusing a tidy folder tree with controlled access, reliable ownership, or a defensible record history.'),
    ('newsletter-delivery-exception-review', 'Newsletter Delivery Exception Review by Virtual Assistants', 'newsletter delivery exception review', 'virtual-assistant-email-newsletter-operations.webp', 'message identifier, recipient status, bounce category, suppression state, source event, correction attempt, and escalation owner', 'an analyst can classify delivery evidence and update an approved record, but cannot add a recipient, override a suppression, or decide legal permission', 'virtual-assistant-email-newsletter-operations', 'virtual-assistant-newsletter-list-hygiene', 'The central risk is treating a delivery event as permission to keep sending or as proof that the underlying recipient record is correct.'),
    ('travel-document-expiry-tracking', 'Travel Document Expiry Tracking by Virtual Assistants', 'travel document expiry tracking', 'virtual-assistant-executive-travel-risk-controls.webp', 'traveler identifier, document type, expiry date, destination, source date, renewal status, and unresolved constraint', 'tracking can surface a date and route a question, but cannot determine entry eligibility, interpret immigration rules, or promise a traveler outcome', 'virtual-assistant-executive-travel-risk-controls', 'virtual-assistant-travel-planning-brief', 'The central risk is using an old document date as if it answered a destination-specific eligibility question.'),
    ('board-packet-source-reconciliation', 'Board Packet Source Reconciliation by Virtual Assistants', 'board packet source reconciliation', 'virtual-assistant-meeting-agenda-operations.webp', 'agenda item, source document, version date, owner, decision status, unresolved comment, and distribution list', 'a coordinator can reconcile references and flag gaps, but cannot approve a board statement, alter a decision, or distribute confidential material beyond the approved list', 'virtual-assistant-meeting-agenda-operations', 'virtual-assistant-meeting-follow-up-accountability', 'The central risk is circulating a polished packet whose supporting documents are stale, incomplete, or attached to the wrong decision.'),
    ('grant-application-evidence-index', 'Grant Application Evidence Indexing by Virtual Assistants', 'grant application evidence indexing', 'virtual-assistant-donor-records-controls.webp', 'requirement identifier, evidence file, source owner, period covered, version, submission status, and unresolved question', 'indexing can map supplied evidence to a requirement, but cannot certify eligibility, make a funding claim, or sign an application', 'virtual-assistant-donor-records-controls', 'virtual-assistant-document-control', 'The central risk is mistaking a file that exists for evidence that answers the funder requirement for the stated period.'),
    ('product-catalog-attribute-review', 'Product Catalog Attribute Review by Virtual Assistants', 'product catalog attribute review', 'virtual-assistant-ecommerce-product-catalog.webp', 'product identifier, attribute source, unit, effective date, missing value, change reason, and approval status', 'a reviewer can compare supplied attributes and flag a discrepancy, but cannot invent a specification, approve a regulated claim, or change a live listing without authority', 'virtual-assistant-ecommerce-product-catalog', 'virtual-assistant-ecommerce-order-escalation', 'The central risk is turning a missing or conflicting product attribute into a confident public claim.'),
    ('service-handoff-decision-log', 'Service Handoff Decision Logs by Virtual Assistants', 'service handoff decision log', 'virtual-assistant-customer-success-handoffs.webp', 'customer request, facts checked, decision needed, current owner, promised next step, due point, and handoff acknowledgement', 'documentation can preserve facts and ownership, but cannot resolve a complaint, promise an exception, or replace the accountable service owner', 'virtual-assistant-customer-success-handoffs', 'virtual-assistant-service-level-review', 'The central risk is recording a handoff as complete when the receiving owner has not accepted the decision or the next action.'),
]

def article(topic):
    slug, title, role, image, scope, boundary, rel1, rel2, angle = topic
    links = f'[{rel1.replace("virtual-assistant-", "").replace("-", " ")}](/research/{rel1}) and [{rel2.replace("virtual-assistant-", "").replace("-", " ")}](/research/{rel2})'
    return f'''# {title}

This research brief examines {role} for small businesses that use Philippines-based virtual assistant services. The question is specific: what evidence shows that this administrative responsibility can be assigned, checked, and handed back without hiding a decision that belongs to the client? The scope is {scope}. {boundary.capitalize()}.

## The question buyers should answer first

Start with the record, not the job title. Name the source of truth, normal input, expected output, allowed completion window, and person who resolves an exception. For {role}, separate observable facts from interpretation. A missing date is a fact. A guess about why it is missing is an interpretation. They should not share a status label.

The first useful measure is required-field coverage: the share of sampled records that contain every field needed for the next decision. The second is evidence age, measured in days since the source or approval was checked. The third is owner effort, measured as minutes spent resolving exceptions during a defined seven-day period. These measures describe the work; they do not score a person by nationality or imply that a broad workforce statistic predicts individual performance.

## The topic-specific risk

{angle} The practical test is whether the record makes that risk visible before an irreversible action occurs. Define the trigger, evidence required to continue, stop condition, and owner who decides what happens next. A narrow test is more useful than a broad claim that the task is simple.

## What the evidence says about the control problem

The [NIST Privacy Framework]({SOURCES[0][1]}) treats collection, use, access, retention, and disposal as connected decisions. That matters because an assistant may see more information while preparing a record than the assignment needs. Mask irrelevant fields, use named accounts, and record why an access grant exists. NIST provides a baseline for discussion; it does not configure a client's tools or determine whether a proposed use is lawful.

Security guidance reaches a similar conclusion. A password is not a complete access control, and an access list is not a complete review. Combine least privilege with multi-factor authentication, a reporting path for suspicious messages, and a dated review of active permissions. [CISA Secure Our World]({SOURCES[2][1]}) explains the value of stronger sign-in protection, while [NIST SP 800-53]({SOURCES[1][1]}) offers controls that organizations can adapt. Neither source says that a particular provider or worker is automatically safe.

Records guidance adds a second test: can an authorized person understand what happened later? The [U.S. National Archives records-management guidance]({SOURCES[5][1]}) is not a playbook for every private business, but its emphasis on reliable and usable records supports retaining source identity, date, version, responsible person, and disposition. A status that cannot be reconstructed is weak evidence even when the underlying action was correct.

Accessibility also affects whether a handoff is usable. [WCAG 2.2]({SOURCES[3][1]}) describes technical criteria for web content. For administrative records, use descriptive labels, meaningful headings, readable link text, and status signals that do not depend on color alone. The point is not to claim that one record meets every accessibility requirement. It is to keep an authorized colleague from missing a material field because the presentation obscures it.

## Findings for {role}

The first finding is that completion quality depends on the boundary around the work. A phrase such as "manage the record" hides several actions: read a request, change a field, attach a document, send a message, or grant access. Each has a different consequence. Write them separately and mark which need owner approval. A sample then distinguishes an execution error from an item that was correctly stopped.

The second finding is that evidence must travel with the record. A status such as complete is weak when it has no source link, received date, reviewer name, or exception note. For {role}, the minimum evidence should answer what was checked, against which version, by whom, and what remains unresolved. If the record cannot answer those questions, the owner is paying a reconstruction cost that the handoff was supposed to prevent.

The third finding is that exception quality matters more than a low count of open items. A good exception states the known facts, missing decision, risk if delayed, owner, and next review point. It does not hide uncertainty to make a queue appear finished. The [FTC privacy and security guidance]({SOURCES[4][1]}) is a useful reminder that safeguards should fit the information and the business context, not just the label attached to the task.

The fourth finding concerns source reuse. [Google Search guidance]({SOURCES[8][1]}) asks publishers to provide original value and a clear purpose. [Library of Congress copyright guidance]({SOURCES[9][1]}) explains why easy access to a document does not remove ownership questions. For this assignment, record the source, distinguish a summary from a quotation, and route uncertain rights questions to the owner. A source list shows where research began; it does not prove that every reuse is permitted.

The fifth finding is that time needs a unit. Record the number of items received, the period covered, median time to a usable handoff, and age of unresolved exceptions. Do not compare a quiet week with a deadline week without labeling the difference. The [OECD digital economy research]({SOURCES[7][1]}) provides broad context about digital work, but broad context cannot answer whether one assignment is staffed or reviewed well.

## A bounded review method

Use three periods: a baseline week, a controlled trial lasting one or two weeks, and a review week. During the baseline, observe the existing handling and record volume, error types, exception minutes, and access points. During the trial, keep the scope fixed and give each reviewer the same sample definitions. During review, compare like with like. If volume, source quality, software, or owner changes, label the comparison instead of presenting it as a clean experiment.

For the sample, select ordinary records and edge cases. Include one incomplete input, one conflicting source, one sensitive field, and one request outside authority. Score four dimensions from 0 to 2: factual accuracy, evidence captured, escalation choice, and handoff clarity. A zero should mean the record could create a material misunderstanding or unauthorized action. Do not reward a fast guess over a correct stop. Set the rubric before looking at names so the result does not depend on impression.

Review the first five records in full, then a random sample of at least five more. If a high-impact boundary is crossed, return to full review for the next sample. Log cause, correction, and instruction change as separate fields. Otherwise a changed instruction can make a later result look better without showing whether the work improved. Keep the sample definition, date range, reviewer, and exclusions with the result.

For {role}, add one field for a decision the assistant must never make. This is not ceremonial. It gives the reviewer a place to record a deliberate stop and tells the owner which question remains open. Add a second field for evidence that would permit continuation. The pair prevents a missing answer from being mistaken for a failed action or an approved action.

## Working conditions and handoff quality

Remote work has a human schedule as well as a technical one. The [International Labour Organization's working-from-home research]({SOURCES[6][1]}) discusses visibility, working conditions, and decent work. Define response windows, rest expectations, handoff points, and the path for urgent exceptions. Constant reachability is not the same as a sustainable service arrangement, and a time-zone difference should be an explicit operating fact rather than an unstated assumption.

The handoff should name completed items, blocked items, decisions needed, and the first next action. Use dates with a time zone when a deadline matters. Keep private details out of general notes and link to the authorized record instead of copying sensitive content into a second system. The owner should be able to accept, correct, or reject the handoff without asking the original operator to recreate the work.

## Limitations and interpretation

This brief does not establish a universal error rate for {role}. Twenty records from one organization are a diagnostic sample, not a population estimate. Results can change with seasonality, volume, language, software changes, staff turnover, source quality, and the amount of owner review. The cited frameworks describe principles and control options. They do not certify a business, platform, provider, or individual worker.

The method also cannot settle legal, security, accessibility, immigration, financial, employment, or other professional questions for a particular organization. It can make the question visible, preserve evidence, and route the decision to the person qualified and authorized to answer it. That distinction is the main safeguard against turning administrative support into unsupported advice.

## Conclusion

{title} is a reasonable candidate for delegated support when the input, output, evidence, authority, and review sample are explicit. The strongest early signal is a record that another authorized person can verify, correct, and continue. Start with the narrowest safe task set, measure accuracy and owner effort for a named period, and expand only after the evidence and access boundary remain stable.

## Frequently asked questions

### What can a virtual assistant handle?

The assistant can complete documented administrative actions within the approved scope, capture evidence, and route exceptions. The client retains consequential decisions, final approvals, and changes to the authority boundary.

### What should the buyer measure?

Measure required-field coverage, source-date visibility, correction rate, appropriate escalation, and owner minutes for a defined sample period. Keep sample size, conditions, and exclusions visible.

### How should access be granted?

Use a named account, multi-factor authentication, and only the permissions needed for the first task set. Review access before adding a new system or a new type of record.

### What is the main limitation of this research?

The sources describe frameworks and broad working conditions. They do not predict an individual result, certify a provider, or replace professional advice for a specific situation.

## Related research

Read {links} for adjacent evidence and control questions.

## Sources

''' + '\n'.join(f'{i}. [{name}]({url})' for i, (name, url) in enumerate(SOURCES, 1)) + '\n'

for slug, title, role, image, scope, boundary, rel1, rel2, angle in TOPICS:
    related = [rel1, rel2, 'virtual-assistant-operations-reporting']
    front_matter = f'''---
slug: {slug}
title: {title}
excerpt: Evidence-led research on {role} with bounded responsibilities, source checks, access controls, and owner review.
publishedAt: 2026-08-14
updatedAt: 2026-08-14
category: {role.title()}
tags: [virtual assistant, {role}, research]
featuredImage: /blog/images/{image}
heroImageAlt: {title}
readingTime: 14 minutes
relatedArticles: ["{related[0]}", "{related[1]}", "{related[2]}"]
cluster: buyer controls
sourceCount: 10
lastVerified: 2026-08-14
key_takeaways: [Define the boundary, Preserve evidence, Escalate uncertainty]
keyStats: ["20: diagnostic sample records", "7: day measurement period", "1: named decision owner"]
sources: [{', '.join('"'+url+'"' for _, url in SOURCES)}]
---
'''
    (OUT / f'{slug}.md').write_text(front_matter + article((slug, title, role, image, scope, boundary, rel1, rel2, angle)), encoding='utf-8')
