from pathlib import Path

OUT = Path('content/research')
sources = [
('NIST Privacy Framework','https://www.nist.gov/privacy-framework'),
('NIST SP 800-53 Rev. 5','https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final'),
('CISA Secure Our World','https://www.cisa.gov/secure-our-world'),
('W3C WCAG 2.2','https://www.w3.org/TR/WCAG22/'),
('FTC Privacy and Security','https://www.ftc.gov/business-guidance/privacy-security'),
('U.S. National Archives records management','https://www.archives.gov/records-mgmt'),
('ILO working from home research','https://www.ilo.org/publications/major-publications/working-home-invisibility-decent-work'),
('OECD digital economy research','https://www.oecd.org/en/topics/sub-issues/digital-economy.html'),
('Google Search helpful content guidance','https://developers.google.com/search/docs/fundamentals/creating-helpful-content'),
('Library of Congress copyright guidance','https://www.loc.gov/copyright/'),
]

topics = [
('client-portal-permission-review','Client Portal Permission Review by Virtual Assistants','client portal permission review','virtual-assistant-document-access-governance.webp','invitation records, role assignments, access expiry, document visibility, and owner approvals','a reviewer can document whether access matches the task, but cannot approve a new privilege or infer consent','virtual-assistant-document-access-governance','virtual-assistant-client-onboarding-controls'),
('calendar-accessibility-planning','Calendar Accessibility Planning by Virtual Assistants','calendar accessibility planning','virtual-assistant-calendar-capacity-planning.webp','time-zone conversions, accessibility requests, buffer rules, confirmation records, and unresolved conflicts','administrative scheduling can surface constraints, but cannot promise accommodation or decide a clinical, legal, or employment matter','virtual-assistant-calendar-booking-integrity','virtual-assistant-meeting-accessibility'),
('digital-records-intake','Digital Records Intake by Virtual Assistants','digital records intake','virtual-assistant-document-control.webp','received files, source identity, version dates, naming consistency, missing pages, and review ownership','intake can establish a traceable receipt record, but cannot certify authenticity, completeness, or compliance','virtual-assistant-document-retention-workflow','virtual-assistant-file-migration-controls'),
('email-consent-audit','Email Consent Record Review by Virtual Assistants','email consent record review','virtual-assistant-email-security-controls.webp','subscription source, consent timestamp, preference changes, suppression status, and exception notes','record review can surface missing evidence, but cannot invent consent or decide the legal basis for a campaign','virtual-assistant-email-security-controls','virtual-assistant-newsletter-list-hygiene'),
('event-registration-controls','Event Registration Controls by Virtual Assistants','event registration controls','virtual-assistant-event-operations.webp','registration fields, consent choices, attendee updates, access requests, and post-event ownership','coordination can reconcile records and route questions, but cannot disclose attendee data or approve event claims','virtual-assistant-event-operations','virtual-assistant-meeting-agenda-operations'),
('inventory-record-reconciliation','Inventory Record Reconciliation by Virtual Assistants','inventory record reconciliation','virtual-assistant-inventory-tracking-controls.webp','count dates, unit labels, adjustment reasons, source documents, and unresolved variances','a reconciler can compare records and report variance, but cannot write off stock or assert physical existence without verification','virtual-assistant-inventory-tracking-controls','virtual-assistant-spreadsheet-review-queues'),
('member-data-retention','Member Data Retention Review by Virtual Assistants','member data retention review','virtual-assistant-customer-success-handoffs.webp','record purpose, last activity, retention instruction, deletion request, and escalation status','administrative review can locate records and apply an approved instruction, but cannot choose retention periods or override a hold','virtual-assistant-customer-success-handoffs','virtual-assistant-client-intake-data-controls'),
('service-queue-escalation','Service Queue Escalation Research by Virtual Assistants','service queue escalation research','virtual-assistant-customer-support-escalation.webp','arrival time, issue category, promised response, urgency evidence, owner assignment, and handoff status','triage can classify and route a queue item, but cannot diagnose a problem, promise an outcome, or suppress a complaint','virtual-assistant-customer-support-escalation','virtual-assistant-inbox-triage-service-levels'),
('website-localization-review','Website Localization Review by Virtual Assistants','website localization review','virtual-assistant-website-update-accessibility.webp','source and translated strings, terminology decisions, locale formatting, links, and reviewer questions','language review can find inconsistency and missing context, but a qualified owner approves high-impact meaning','virtual-assistant-digital-accessibility-review','virtual-assistant-website-update-accessibility'),
('work-order-documentation','Work Order Documentation by Virtual Assistants','work order documentation','virtual-assistant-project-status-summaries.webp','request scope, responsible party, due date, completion evidence, change history, and blocked status','documentation can preserve the operational record, but cannot approve scope changes or attest that work was physically completed','virtual-assistant-project-status-summaries','virtual-assistant-task-dependency-notes'),
]

def body(d):
    slug,title,role,image,scope,boundary,rel1,rel2=d
    name=role.title()
    links=f'[{rel1.replace("virtual-assistant-", "").replace("-", " ")}](/research/{rel1}) and [{rel2.replace("virtual-assistant-", "").replace("-", " ")}](/research/{rel2})'
    angle = {
        'client portal permission review': 'The central risk is excess access: a person may be able to see or change more than the assignment requires.',
        'calendar accessibility planning': 'The central risk is treating a scheduling constraint as a minor preference when it may determine whether a person can participate at all.',
        'digital records intake': 'The central risk is losing provenance at the moment a file enters the business record.',
        'email consent record review': 'The central risk is confusing a deliverability signal or an old list entry with documented permission.',
        'event registration controls': 'The central risk is allowing a registration workflow to expose personal details or silently discard an attendee request.',
        'inventory record reconciliation': 'The central risk is turning a spreadsheet match into an unsupported claim about physical stock.',
        'member data retention review': 'The central risk is keeping records by habit after their purpose has ended, or deleting them while a valid hold remains.',
        'service queue escalation research': 'The central risk is allowing a queue label to hide urgency, vulnerability, or an owner decision that has not happened.',
        'website localization review': 'The central risk is treating translation consistency as proof that the localized meaning is correct for its audience.',
        'work order documentation': 'The central risk is mistaking a neat status record for evidence that the requested work was actually performed.',
    }[role]
    return f'''# {title}

This research brief examines {role} for small businesses using Philippines-based virtual assistant services. The question is narrower than whether remote support is useful: what evidence shows that this particular administrative responsibility can be assigned, reviewed, and handed back without obscuring a decision that belongs to the client? The scope here is {scope}. {boundary.capitalize()}.

## The question buyers should answer first

Start with the record, not the job title. A buyer should be able to name the source of truth, the normal input, the expected output, the allowed completion time, and the person who resolves an exception. For {role}, that usually means separating observable facts from interpretation. A missing field is a fact. A guess about why the field is missing is an interpretation. The two should not share a status label.

The first useful measure is coverage: the share of sampled records that contain every required field. The second is evidence age: how many days have passed since the source or approval was last checked. A third measure is owner effort, recorded as minutes spent resolving exceptions in a defined seven-day period. These measures describe the work being reviewed; they do not score a person by nationality or imply that a broad workforce statistic predicts individual performance.

## The topic-specific risk

{angle} For a small business, the practical test is whether the record makes that risk visible before an irreversible action occurs. Define the trigger, the evidence required to continue, the exact stop condition, and the owner who decides what happens next. This is more informative than a broad claim that the task is routine.

## What the evidence says about the control problem

Privacy guidance treats collection, use, access, retention, and disposal as connected decisions. That matters because an assistant may see more information while preparing a record than is needed to complete the narrow task. The practical implication is to mask irrelevant fields, use named accounts, and record why an access grant exists. The NIST Privacy Framework and the FTC's business guidance are useful baselines, but neither one configures a client's specific tools or determines whether a proposed use is lawful.

Security guidance reaches a similar conclusion from another direction. A password is not a complete access control, and an access list is not a complete review. Buyers should combine least privilege with multi-factor authentication, a clear reporting path for suspicious messages, and a dated review of active permissions. CISA's public guidance explains the value of stronger sign-in protection; NIST SP 800-53 provides a catalog of controls that organizations can adapt. Neither source says that a particular provider or worker is automatically safe.

For {role}, the most useful evidence is local and inspectable. Sample 20 completed records from one defined week. Count records that have all required fields, records returned for correction, records escalated before an unauthorized action, and records whose source date is visible. Note the median correction time as well as the total. A small sample cannot establish long-run performance, but it can expose a missing field, unclear ownership, or a permission that is wider than the task requires.

## Findings for {role}

The first finding is that completion quality depends on the boundary around the work. A description such as "manage the portal" hides several different actions: read a request, change a field, attach a record, send a message, or grant access. Each action has a different consequence. Write them separately and mark which ones need owner approval. This makes a sample meaningful because the reviewer can distinguish an execution error from an intentionally stopped item.

The second finding is that evidence must travel with the record. A status such as complete is weak when it has no source link, received date, reviewer name, or note explaining an exception. The National Archives records-management guidance is not a playbook for every private business, yet its emphasis on reliable, usable records supports a simple test: can another authorized person understand what happened without asking the original operator to reconstruct it?

The third finding is that accessibility belongs in the service result. W3C WCAG 2.2 describes technical success criteria for web content, but buyer-facing administrative work also has a human layer. Use descriptive labels, preserve meaningful headings, avoid color-only status signals, and make handoff notes readable with keyboard and assistive technology. A record that is technically present but difficult for an authorized colleague to use is not a complete handoff.

The fourth finding concerns source reuse. Google Search guidance asks publishers to show original value and clear purpose, while copyright guidance from the Library of Congress explains that ownership and permission do not disappear because material is easy to copy. For {role}, the safe practice is to record the source, quote only what the assignment permits, distinguish a summary from a verbatim excerpt, and route uncertain rights questions to the owner. A source list is evidence of research, not proof that every reuse is permitted.

## A bounded review method

Use three periods: a baseline week, a controlled trial of one to two weeks, and a review week. In the baseline, the client completes or observes the existing handling and records volume, error types, exception minutes, and access points. During the trial, keep the scope fixed and give every person the same sample definitions. During review, compare like with like. If the volume, source quality, or owner changes, label the comparison rather than pretending it is a clean experiment.

For the sample, select ordinary records and edge cases. Include one incomplete input, one conflicting source, one sensitive field, and one request outside authority. Score four dimensions from 0 to 2: factual accuracy, evidence captured, escalation choice, and handoff clarity. A zero should mean the record could create a material misunderstanding or unauthorized action. Do not reward a fast guess over a correct stop. Record the scoring rubric before looking at names so the result does not depend on impression.

The owner should review the first five records in full, then a random sample of at least five more. If any high-impact boundary is crossed, return to full review for the next sample. This is a control response, not a judgment about character. Log the cause, correction, and rule change separately. Otherwise a changed instruction can make a later result look better without showing that the work itself improved.

## Limitations and interpretation

This brief does not establish a universal error rate for {role}. Twenty records from one organization are a diagnostic sample, not a population estimate. Results can change with season, volume, language, software changes, staff turnover, source quality, and the amount of owner review. The cited standards describe principles and control options, not a certification of a business, platform, or service provider.

Remote work also has social and scheduling dimensions. The International Labour Organization's research on working from home discusses visibility, working conditions, and decent work. A business should therefore define hours, rest expectations, escalation routes, and a realistic handoff. A person who is technically reachable at every moment is not the same as a sustainable service arrangement. The OECD's digital-economy research provides broad context, but broad context cannot answer whether one assignment is properly staffed.

## Conclusion

{name} is a reasonable candidate for delegated support when the input, output, evidence, authority, and review sample are explicit. The strongest early signal is not a polished claim. It is a record that another authorized person can verify, correct, and continue. Start with the narrowest safe task set, measure accuracy and owner effort for a named period, and expand only after the evidence and access boundary remain stable.

## Frequently asked questions

### What can a virtual assistant handle?

The assistant can complete documented administrative actions within the approved scope, capture evidence, and route exceptions. The client retains consequential decisions, final approvals, and changes to the authority boundary.

### What should the buyer measure?

Measure required-field coverage, source-date visibility, correction rate, appropriate escalation, and owner minutes for a defined sample period. Keep the sample size and conditions visible.

### How should access be granted?

Use a named account, multi-factor authentication, and only the permissions needed for the first task set. Review access before adding a new system or a new type of record.

### What is the main limitation of this research?

The sources describe frameworks and broad working conditions. They do not predict an individual result, certify a provider, or replace legal, security, accessibility, or professional advice for a specific situation.

## Related research

Read the {links} for adjacent evidence and control questions.

## Sources

''' + '\n'.join(f'{i}. [{name}]({url})' for i,(name,url) in enumerate(sources,1)) + '\n'

for slug,title,role,image,scope,boundary,rel1,rel2 in topics:
    related = [rel1, rel2, 'virtual-assistant-operations-reporting']
    fm = f'''---
slug: {slug}
title: {title}
excerpt: Evidence-led research on {role} with bounded responsibilities, source checks, access controls, and owner review.
publishedAt: 2026-08-13
updatedAt: 2026-08-13
category: {role.title()}
tags: [virtual assistant, {role}, research]
featuredImage: /blog/images/{image}
heroImageAlt: {title}
readingTime: 12 minutes
relatedArticles: ["{related[0]}", "{related[1]}", "{related[2]}"]
cluster: buyer controls
sourceCount: 10
lastVerified: 2026-08-13
key_takeaways: [Define the boundary, Preserve evidence, Escalate uncertainty]
keyStats: ["20: diagnostic sample records", "7: day measurement period", "1: named decision owner"]
sources: [{', '.join('"'+u+'"' for _,u in sources)}]
---
'''
    (OUT / f'{slug}.md').write_text(fm + body((slug,title,role,image,scope,boundary,rel1,rel2)), encoding='utf-8')
