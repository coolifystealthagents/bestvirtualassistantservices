import { hireVirtualAssistantPhilippinesPost } from './research/hire-virtual-assistant-philippines-data';
import { philippinesVirtualAssistantDataEntryQualityControlPost } from './research/philippines-virtual-assistant-data-entry-quality-control-data';
import { virtualAssistantPhilippinesCustomerInboxSupportPost } from './research/virtual-assistant-philippines-customer-inbox-support-data';
import { virtualAssistantPhilippinesExecutiveCalendarManagementPost } from './research/virtual-assistant-philippines-executive-calendar-management-data';
import { virtualAssistantPhilippinesTravelPlanningAssistancePost } from './research/virtual-assistant-philippines-travel-planning-assistance-data';
import { virtualAssistantPhilippinesCrmAdministrationPost } from './research/virtual-assistant-philippines-crm-administration-data';
import { researchBatch20260729Posts } from './research/research-batch-2026-07-29-data';

export type FleetService = {
  slug: string;
  name: string;
  metaTitle: string;
  title: string;
  desc: string;
  audience: readonly string[];
  painPoints: readonly string[];
  responsibilities: readonly string[];
  tools: readonly string[];
  metrics: readonly string[];
  risks: readonly string[];
  body: readonly string[];
  heroImage: string;
  heroAlt: string;
  tasks: readonly string[];
  controls: readonly string[];
  firstWeek: readonly string[];
  problem: string;
  inputs: readonly string[];
  workflow: readonly string[];
  deliverables: readonly string[];
  boundaries: readonly string[];
  qualityControls: readonly string[];
  scenarios: readonly string[];
  faq: readonly [{ q: string; a: string }, ...{ q: string; a: string }[]];
  relatedServices: readonly string[];
};
export type ResearchSource = { id: number; name: string; title: string; url: string; scope: 'Philippines evidence' | 'Global comparison' | 'Buyer security standard' };
export type ResearchParagraph = { text: string; citations?: readonly number[] };
export type ResearchPost = {
  slug: string;
  title: string;
  excerpt: string;
  published: string;
  modified: string;
  readingMinutes: number;
  revision: string;
  keyTakeaways: readonly string[];
  stats: readonly { value: string; label: string; note: string; citation: number }[];
  sections: readonly { heading: string; paragraphs: readonly ResearchParagraph[]; bullets?: readonly string[] }[];
  comparisonTable: { caption: string; headers: readonly string[]; rows: readonly (readonly string[])[] };
  methodology: readonly ResearchParagraph[];
  faq: readonly { q: string; a: string; citations?: readonly number[] }[];
  relatedLinks: readonly { title: string; description: string; href: string }[];
  sources: readonly ResearchSource[];
  primaryKeyword?: string;
  noScope?: boolean;
  expertQuote?: { quote: string; person: string; title: string; sourceId: number };
  chart?: { title: string; unit: string; method: string; items: readonly { label: string; value: number; display: string; year: string; citation: number }[] };
  graphic?: { title: string; steps: readonly { label: string; detail: string }[]; note: string };
  banners?: readonly { eyebrow: string; title: string; text: string; href: string; linkLabel: string }[];
  thumbnail?: string;
};

export const fleetServices: readonly FleetService[] = [
  {
    slug: 'executive-calendar-management',
    name: 'Executive Calendar Management',
    metaTitle: 'Executive Calendar Management Services',
    title: 'Executive Calendar Management for Deliberate Leadership Time',
    desc: 'Create a controlled scheduling operation that protects focus, prepares meetings, and routes calendar conflicts to the right executive decision.',
    audience: ['Founders with meeting-heavy weeks', 'Executives supported by several internal teams', 'Chiefs of staff formalizing calendar operations'],
    painPoints: ['Competing requests arrive without context', 'Travel and focus blocks are lost during rescheduling', 'Attendees receive changes too late'],
    responsibilities: ['Triage requests against written priorities', 'Prepare agendas, links, and attendee context', 'Maintain holds, buffers, and follow-up reminders'],
    tools: ['Google Calendar or Microsoft Outlook', 'Slack or Microsoft Teams', 'A documented scheduling brief'],
    metrics: ['Conflicts identified before confirmation', 'Meetings with complete location and preparation details', 'Exceptions resolved by the executive owner'],
    risks: ['Overbooking from ambiguous priority rules', 'Exposing private attendee or meeting details', 'Moving a commitment without authorized approval'],
    body: [
      'Executive calendar management is not simply finding an empty square. A useful operator understands which conversations create decisions, which commitments cannot move, and where an executive needs preparation or recovery time. The service begins with a written priority map that distinguishes customer meetings, leadership reviews, recruiting, personal holds, and optional requests. The assistant applies that map consistently, asks for missing context, and sends true tradeoffs to the executive or chief of staff instead of quietly deciding whose meeting matters most.',
      'The working system should make each request inspectable. Intake captures the organizer, objective, required attendees, duration, deadline, time-zone constraints, and whether the meeting can be handled asynchronously. Before confirming, the assistant checks buffers, travel time, recurring conflicts, conferencing access, and the preparation materials that must be available. When a change is needed, the assistant preserves the original thread, proposes a limited set of viable alternatives, and records who approved the change so later questions can be answered without reconstructing the week from memory.',
      'Good calendar support protects information as carefully as time. Private appointments, candidate names, board topics, and customer negotiations should be visible only to people who need them. A named account, delegated calendar permissions, and explicit rules for titles and guest lists are safer than sharing an executive password. The assistant can coordinate logistics and draft responses, while the client retains decisions about sensitive attendance, cancellation of strategic commitments, and any change that creates a material cost or relationship risk.',
      'Review focuses on the quality of the week, not the number of invitations processed. A manager can sample confirmed meetings for correct attendees, links, buffers, and preparation notes; inspect unresolved conflicts; and compare changes with the priority rules. Early reviews also reveal whether recurring meetings still deserve their place. Once the basic workflow is reliable, the assistant can maintain a forward look for deadlines, travel, and preparation, giving the executive a calmer planning horizon without claiming ownership of priorities that belong to leadership.'
    ],
    heroImage: '/services/executive-calendar-management.svg',
    heroAlt: 'Editorial workflow showing calendar blocks, protected focus time, and a conflict review panel',
    tasks: ['Triage incoming meeting requests', 'Prepare complete invitations and agenda reminders', 'Maintain buffers, holds, and a forward calendar review'],
    controls: ['Use delegated access through a named account', 'Escalate priority conflicts and sensitive attendees', 'Keep an approval trail for material changes'],
    firstWeek: ['Map meeting types and decision owners', 'Practice conflict handling with sample requests', 'Review every confirmed or moved event together'],
    problem: 'An overloaded calendar hides priority conflicts and turns small scheduling changes into executive interruptions.',
    inputs: ['Priority map', 'Working hours and time zones', 'Meeting templates and contact rules'],
    workflow: ['Capture request context', 'Check constraints and preparation', 'Confirm or escalate', 'Review the forward calendar'],
    deliverables: ['Accurate invitations', 'Conflict queue', 'Weekly forward look'],
    boundaries: ['No strategic prioritization without an owner', 'No cancellation of protected commitments', 'No shared executive credentials'],
    qualityControls: ['Invitation sampling', 'Daily conflict check', 'Weekly recurring-meeting review'],
    scenarios: ['A customer asks to move into a protected focus block', 'International travel changes the usable meeting window'],
    faq: [
      { q: 'Can the assistant accept every meeting?', a: 'No. Acceptance follows the written priority and approval rules.' },
      { q: 'How are sensitive calendar details protected?', a: 'Use delegated access, limited visibility, neutral event titles where appropriate, and written rules for private attendees and topics.' },
      { q: 'What should be reviewed during the first week?', a: 'Review every confirmation and change for priority, attendees, links, time zones, buffers, preparation notes, and approval evidence.' }
    ],
    relatedServices: ['inbox-and-correspondence-support', 'travel-planning-assistance']
  },
  {
    slug: 'inbox-and-correspondence-support',
    name: 'Inbox and Correspondence Support',
    metaTitle: 'Inbox and Correspondence Support',
    title: 'Executive Inbox and Correspondence Support With Clear Authority',
    desc: 'Turn a crowded executive inbox into a reviewed queue of priorities, safe drafts, delegated actions, and visible exceptions.',
    audience: ['Leaders whose inbox mixes decisions and routine coordination', 'Teams that need consistent executive correspondence', 'Owners preparing to delegate email triage'],
    painPoints: ['Urgent messages disappear among newsletters', 'Drafting style varies across senders', 'Delegated threads return without a clear owner'],
    responsibilities: ['Classify mail using approved rules', 'Draft routine replies from source material', 'Track delegated requests and unanswered threads'],
    tools: ['Gmail or Microsoft Outlook', 'Help desk or task tracker', 'Approved tone and response library'],
    metrics: ['Priority messages surfaced within the agreed review window', 'Drafts accepted or revised by category', 'Delegated threads with a named owner and due date'],
    risks: ['Sending an unapproved commitment', 'Misrouting legal, financial, or personnel mail', 'Using sensitive content in an unauthorized tool'],
    body: [
      'Inbox support works when classification is based on business meaning rather than the visual appearance of a message. The assistant needs a small, explicit taxonomy for decisions, customer concerns, scheduling, delegated work, receipts, newsletters, and sensitive matters. Sender status alone is not enough because a familiar contact can raise a new legal or financial issue. During setup, the client supplies representative threads and explains what made each one urgent, delegable, draftable, or private. Those examples become the operating reference for daily triage.',
      'A controlled routine separates sorting from speaking for the executive. The assistant can label, summarize, request missing context, create tasks, and prepare drafts without automatically sending them. Draft templates should describe the intended tone, facts that must be verified, commitments that require approval, and phrases that should never be used. For routine categories the client may later grant send authority, but the system should preserve a clear line between an approved factual response and a message that negotiates price, policy, employment, liability, or a strategic relationship.',
      'Correspondence also needs closure. A polished draft is not useful if the promised document never arrives or a delegated question has no owner. The assistant records follow-ups in the client task system, links them back to the original thread, and checks the agreed due date. Threads that stall are surfaced in a concise exception list rather than repeatedly forwarded. This creates a dependable connection between email and actual work while leaving the accountable employee or executive visible to everyone involved.',
      'Quality review should sample each message category because a single overall count can hide serious errors. The manager can inspect priority detection, summary accuracy, tone, factual support, recipient selection, and whether the assistant stopped at the authority boundary. False urgency and missed urgency are discussed separately. As patterns stabilize, rules can be refined and low-risk newsletters or notifications can be automated, while human review remains around sensitive content, external promises, unusual requests, and any thread where identity or intent is uncertain.'
    ],
    heroImage: '/services/inbox-and-correspondence-support.svg',
    heroAlt: 'Editorial inbox workflow showing priority, draft, delegated, and escalation queues',
    tasks: ['Sort messages into approved categories', 'Draft low-risk correspondence with source links', 'Track delegated threads through closure'],
    controls: ['Keep send authority category-specific', 'Escalate sensitive and ambiguous messages', 'Review recipients and attachments before sending'],
    firstWeek: ['Label historical examples together', 'Draft without sending', 'Score priority detection and draft quality daily'],
    problem: 'A mixed executive inbox makes urgent decisions, routine coordination, and sensitive correspondence difficult to distinguish.',
    inputs: ['Message taxonomy', 'Tone examples', 'Delegation directory and authority matrix'],
    workflow: ['Classify', 'Summarize or draft', 'Approve or send within authority', 'Track follow-up'],
    deliverables: ['Priority digest', 'Draft queue', 'Open-thread register'],
    boundaries: ['No new commercial commitments', 'No legal or personnel response without review', 'No deletion outside retention rules'],
    qualityControls: ['Category-based sampling', 'Recipient and attachment check', 'Unanswered-thread review'],
    scenarios: ['A familiar vendor sends changed bank details', 'A customer copies the executive on an unresolved complaint'],
    faq: [
      { q: 'Does inbox support require full send access?', a: 'No. Teams can begin with triage and drafts, then approve narrow send categories.' },
      { q: 'Which messages should always be escalated?', a: 'Legal, financial, personnel, security, unusual payment, and material commitment messages should go to the named client owner.' },
      { q: 'How is correspondence quality checked?', a: 'Sample each message category for priority, factual support, tone, recipients, attachments, follow-up ownership, and authority compliance.' }
    ],
    relatedServices: ['executive-calendar-management', 'customer-inbox-support']
  },
  {
    slug: 'travel-planning-assistance',
    name: 'Travel Planning Assistance',
    metaTitle: 'Business Travel Planning Assistance',
    title: 'Business Travel Planning Assistance Built Around Constraints',
    desc: 'Organize business travel research, approvals, itineraries, and change handling without transferring traveler judgment or payment authority.',
    audience: ['Executives with multi-city business travel', 'Operations teams coordinating group itineraries', 'Frequent travelers who need documented preferences'],
    painPoints: ['Options are compared without the full trip constraints', 'Approvals and loyalty details are scattered', 'Schedule changes do not reach every itinerary component'],
    responsibilities: ['Research options against a written brief', 'Assemble approval-ready comparisons', 'Maintain itinerary details and change checklists'],
    tools: ['Approved travel portals and carrier sites', 'Shared itinerary workspace', 'Expense and approval system'],
    metrics: ['Options that satisfy all mandatory constraints', 'Confirmed segments reflected in the master itinerary', 'Changes communicated to named travelers and owners'],
    risks: ['Booking before approval', 'Mishandling passport or loyalty information', 'Overlooking fare restrictions or ground-transfer timing'],
    body: [
      'Travel planning begins with constraints, not a search box. The brief should identify the purpose of the trip, traveler names as recorded for booking, approved dates, required arrival time, airport preferences, accessibility needs, baggage expectations, loyalty programs, budget guidance, and the person authorized to approve. Preferences such as a favored airline must be distinguished from requirements such as arriving before a customer presentation. This prevents attractive but unusable options from consuming review time or creating avoidable changes later.',
      'The assistant researches a compact set of comparable options and records what is included. A useful comparison shows local departure and arrival times, connection duration, airport changes, fare conditions visible at review, baggage terms, hotel cancellation terms, and ground-transfer implications. Prices and availability can change, so the document includes the retrieval time and avoids presenting a quote as guaranteed. The traveler or designated owner chooses the option, and the assistant books only when the approved process and payment controls explicitly allow it.',
      'After confirmation, the itinerary becomes the operational source of truth. Reservation references, addresses, check-in windows, meeting locations, transfer time, relevant contacts, and approval evidence are organized in one controlled workspace. Sensitive identifiers are stored only where the client permits and are not copied into casual chat. The assistant checks that calendar entries use the correct local time zones and that each confirmed segment aligns with the others, especially where a late arrival, separate ticket, or distant airport could threaten a business commitment.',
      'Change handling deserves its own checklist because one disrupted flight can affect hotels, cars, meetings, and colleagues. The assistant confirms what changed, identifies linked reservations, gathers available alternatives, and sends decision points to the authorized traveler. Cancellation or change actions follow approval and cost thresholds rather than urgency alone. After the trip, receipts and final itinerary details can be organized for expense preparation, while the client retains responsibility for reimbursement decisions, travel-risk policy, immigration advice, and any judgment requiring licensed expertise.'
    ],
    heroImage: '/services/travel-planning-assistance.svg',
    heroAlt: 'Editorial travel itinerary showing connected flights, hotel, ground transfer, and approval checkpoints',
    tasks: ['Research trip options against mandatory constraints', 'Build a clear approval comparison', 'Maintain confirmations, itinerary details, and change dependencies'],
    controls: ['Require approval before purchases or material changes', 'Store traveler data only in approved systems', 'Show restrictions and retrieval time with options'],
    firstWeek: ['Document traveler preferences and mandatory constraints', 'Compare a sample itinerary', 'Test a change scenario across all trip components'],
    problem: 'Travel research becomes unreliable when preferences, business deadlines, fare terms, and approvals live in separate conversations.',
    inputs: ['Trip brief', 'Traveler profile', 'Budget and approval thresholds'],
    workflow: ['Validate constraints', 'Research comparable options', 'Obtain approval', 'Confirm and monitor itinerary'],
    deliverables: ['Option comparison', 'Master itinerary', 'Change-impact checklist'],
    boundaries: ['No purchase without authorized approval', 'No immigration or travel-risk advice', 'No storage of sensitive documents outside approved systems'],
    qualityControls: ['Time-zone verification', 'Segment reconciliation', 'Restriction and cancellation-term review'],
    scenarios: ['A flight cancellation threatens a morning meeting', 'A preferred hotel exceeds the approved trip guidance'],
    faq: [
      { q: 'Can an assistant make travel decisions for the traveler?', a: 'The assistant can research and coordinate, while choices and risk acceptance remain with the authorized traveler.' },
      { q: 'What belongs in a useful travel brief?', a: 'Include traveler identity, dates, required arrival, airports, accessibility, baggage, loyalty, budget, preferences, and the approval owner.' },
      { q: 'How are itinerary disruptions handled?', a: 'The assistant identifies linked reservations and alternatives, then obtains approval before changes that create cost or travel risk.' }
    ],
    relatedServices: ['executive-calendar-management', 'inbox-and-correspondence-support']
  },
  {
    slug: 'crm-administration',
    name: 'CRM Administration',
    metaTitle: 'CRM Administration Services',
    title: 'CRM Administration for Trustworthy Customer Records',
    desc: 'Maintain usable account, contact, activity, and pipeline data through defined fields, evidence-based updates, and auditable exception handling.',
    audience: ['Sales teams with inconsistent CRM hygiene', 'Revenue operations leaders standardizing records', 'Service firms migrating from spreadsheets'],
    painPoints: ['Required fields are incomplete or interpreted differently', 'Duplicates split account history', 'Stage changes lack evidence and ownership'],
    responsibilities: ['Validate and update approved fields', 'Research and queue possible duplicates', 'Maintain activity, ownership, and exception reports'],
    tools: ['Salesforce, HubSpot, or another client CRM', 'Approved enrichment sources', 'Import staging and validation sheets'],
    metrics: ['Required-field completeness by record type', 'Duplicate candidates reviewed and resolved', 'Updates supported by a source or owner instruction'],
    risks: ['Overwriting a trusted value with weak data', 'Merging distinct people or accounts', 'Changing pipeline stage without seller confirmation'],
    body: [
      'CRM administration is a data-governance role before it is a data-entry role. The team first defines each important object, field, acceptable value, owner, and source of truth. A contact role, lead source, lifecycle stage, and opportunity stage often mean different things to different departments, so examples and non-examples matter. The assistant follows the agreed dictionary and places uncertain updates in an exception queue rather than choosing the value that appears most plausible from an incomplete email or website.',
      'Daily work can include creating records from approved intake, correcting formatting, associating contacts with accounts, logging supported activity, and checking required fields. Each update should be traceable to a form, correspondence, contract, seller instruction, or approved research source. Bulk changes are prepared in a staging file, tested on a small sample, and reviewed before import. This makes rollback and diagnosis possible if a mapping behaves differently than expected or a required field rejects records during processing.',
      'Duplicate management requires more care than matching names. Two people can share an email pattern, companies can have regional entities, and one buyer may use several domains. The assistant gathers evidence such as domain, location, ownership, and activity history, then proposes the surviving record and field choices. A designated CRM owner approves uncertain merges. Pipeline stages and forecast categories remain seller or revenue-lead decisions unless the client defines objective evidence that permits a specific administrative transition.',
      'A practical scorecard examines completeness, validity, freshness, and exception age without pretending that every blank field is an error. The manager samples updates against their sources, reviews failed imports, and watches for repeated ambiguity that signals a bad form or unclear definition. Over time, the assistant can produce a short hygiene report showing patterns that need a process fix. The result is a more dependable operational record, while customer strategy, forecast judgment, and system-administrator privileges stay with accountable client owners.'
    ],
    heroImage: '/services/crm-administration.svg',
    heroAlt: 'Editorial CRM table showing validated records, duplicate review, ownership, and source status',
    tasks: ['Create and update records from approved evidence', 'Prepare duplicate candidates and import files', 'Report field, ownership, and synchronization exceptions'],
    controls: ['Use field-level permissions where available', 'Review samples before bulk imports', 'Reserve merge and stage authority for named owners'],
    firstWeek: ['Review the data dictionary and sample records', 'Process a controlled update batch', 'Compare every change with its source'],
    problem: 'Inconsistent definitions and unsupported edits turn the CRM from a shared operating record into an unreliable contact list.',
    inputs: ['Data dictionary', 'Approved sources', 'Ownership and merge rules'],
    workflow: ['Validate source', 'Stage update', 'Review high-risk changes', 'Commit and report exceptions'],
    deliverables: ['Clean record batch', 'Duplicate review queue', 'Hygiene report'],
    boundaries: ['No unsupported stage changes', 'No uncertain merges', 'No unapproved bulk deletion'],
    qualityControls: ['Source-to-record sampling', 'Import reconciliation', 'Required-field validity review'],
    scenarios: ['An import contains two rows for one contact', 'A salesperson asks to advance an opportunity without recorded evidence'],
    faq: [
      { q: 'Can CRM administration improve forecasts?', a: 'It can improve record quality, but forecast interpretation remains a sales leadership responsibility.' },
      { q: 'Who should approve duplicate merges?', a: 'A named CRM owner should approve uncertain merges after reviewing identity, account, domain, location, ownership, and activity evidence.' },
      { q: 'How should bulk updates be controlled?', a: 'Stage the file, retain source references, test a small sample, review mappings and permissions, then reconcile the completed import.' }
    ],
    relatedServices: ['sales-pipeline-support', 'customer-inbox-support']
  },
  {
    slug: 'sales-pipeline-support',
    name: 'Sales Pipeline Support',
    metaTitle: 'Sales Pipeline Support Services',
    title: 'Sales Pipeline Support for Consistent Follow-Through',
    desc: 'Coordinate lead routing, follow-up preparation, evidence-based pipeline hygiene, and handoffs while sales owners retain qualification and commercial decisions.',
    audience: ['Founder-led sales teams losing follow-ups', 'Sales managers with uneven pipeline hygiene', 'Revenue teams formalizing lead handoffs'],
    painPoints: ['New inquiries wait without an owner', 'Next steps are absent after conversations', 'Pipeline stages do not reflect recorded activity'],
    responsibilities: ['Route leads using approved territory and fit rules', 'Prepare follow-up tasks and meeting context', 'Surface stale records and missing next steps'],
    tools: ['CRM and sales engagement platform', 'Calendar and business email', 'Approved qualification and routing guide'],
    metrics: ['New leads assigned within the agreed operating window', 'Open opportunities with a dated next step', 'Handoffs containing required context'],
    risks: ['Treating administrative scoring as sales judgment', 'Sending unsupported pricing or product claims', 'Allowing automation to contact excluded recipients'],
    body: [
      'Sales pipeline support creates continuity around the seller rather than replacing the seller. The operating guide defines intake sources, territory rules, disqualifying conditions that can be applied objectively, required record fields, and the person who resolves ambiguous ownership. The assistant checks new inquiries for usable contact information and stated context, creates or updates the record, and routes it according to the guide. Strategic fit, likelihood to buy, and the meaning of a complex customer need remain decisions for trained sales owners.',
      'Preparation makes sales time more useful. Before a meeting, the assistant can assemble the original inquiry, relevant account history, known participants, previous commitments, and links to approved collateral. Afterward, the assistant records seller-approved notes, creates follow-up tasks, and drafts routine scheduling or resource messages. Any draft involving pricing, contractual terms, competitor comparison, product capability, or a promise of delivery receives review from the responsible employee before it leaves the business.',
      'Pipeline hygiene should reveal missing evidence, not manufacture progress. The assistant identifies opportunities without activity, a dated next step, an owner, or the fields required for the current stage. These become a seller review queue. The assistant may close or move records only under explicit rules or direct owner instruction, preserving the reason and date. This avoids the common failure where a tidy dashboard masks stale opportunities by changing stages administratively without confirming what actually happened with the prospect.',
      'Managers can review routing accuracy, follow-up completeness, exception age, and the proportion of active opportunities with a meaningful next action. These are process indicators rather than promises of revenue. Samples of sent messages should be checked for consent rules, correct recipients, supported claims, and useful context. When the same ambiguity appears repeatedly, the routing guide or sales process should be corrected. A dependable support layer gives sellers more time for conversations while keeping qualification, negotiation, forecasts, and commercial approval where they belong.'
    ],
    heroImage: '/services/sales-pipeline-support.svg',
    heroAlt: 'Editorial sales funnel showing inquiry routing, seller ownership, follow-up, and exception review',
    tasks: ['Validate and route new inquiries', 'Prepare meeting context and approved follow-ups', 'Maintain stale-record and missing-next-step queues'],
    controls: ['Keep qualification and pricing decisions with sellers', 'Apply contact and exclusion rules before outreach', 'Require evidence for pipeline changes'],
    firstWeek: ['Map lead sources and routing rules', 'Process sample leads without sending outreach', 'Review every assignment and drafted follow-up'],
    problem: 'Pipeline value is obscured when leads, owners, next actions, and stage evidence are updated inconsistently.',
    inputs: ['Routing guide', 'Qualification prompts', 'Approved messaging and collateral'],
    workflow: ['Validate inquiry', 'Assign owner', 'Prepare and track follow-up', 'Surface pipeline exceptions'],
    deliverables: ['Routed lead queue', 'Meeting briefs', 'Pipeline hygiene list'],
    boundaries: ['No subjective qualification without seller review', 'No pricing or contractual promise', 'No outreach to excluded contacts'],
    qualityControls: ['Routing sample review', 'Stage-evidence check', 'Outbound message approval by category'],
    scenarios: ['Two territories could own the same account', 'An opportunity has recent activity but no recorded next step'],
    faq: [
      { q: 'Does pipeline support include closing sales?', a: 'No. It supports administration and follow-through while sellers own commercial conversations and decisions.' },
      { q: 'Can an assistant change opportunity stages?', a: 'Only under explicit evidence-based rules or direct seller instruction, with the reason and date preserved in the record.' },
      { q: 'What makes a useful sales handoff?', a: 'A useful handoff includes inquiry context, account history, participants, owner, qualification questions, commitments, and a dated next action.' }
    ],
    relatedServices: ['crm-administration', 'inbox-and-correspondence-support']
  },
  {
    slug: 'customer-inbox-support',
    name: 'Customer Inbox Support',
    metaTitle: 'Customer Inbox Support Services',
    title: 'Customer Inbox Support With Safe Escalation Paths',
    desc: 'Operate a responsive customer queue using approved answers, identity checks, documented ownership, and clear escalation to client specialists.',
    audience: ['Small support teams with a shared mailbox', 'Service businesses introducing ticket workflows', 'Operations leaders separating routine help from exceptions'],
    painPoints: ['Customers repeat context across handoffs', 'Routine tickets and material complaints share one queue', 'Agents improvise answers when documentation is incomplete'],
    responsibilities: ['Classify and acknowledge incoming requests', 'Resolve approved low-risk topics from the knowledge base', 'Escalate with complete context and track ownership'],
    tools: ['Help desk or shared inbox', 'Client knowledge base', 'Order, account, or scheduling system with limited access'],
    metrics: ['New requests acknowledged within the service window', 'Escalations accepted with required context', 'Resolved samples matching approved guidance'],
    risks: ['Disclosing account information before verification', 'Promising a refund or remedy outside authority', 'Closing a ticket while the customer still needs action'],
    body: [
      'Customer inbox support starts with a service map that identifies request types, available answers, verification requirements, authority limits, and specialist destinations. The assistant reads the full thread, labels the actual need, checks for duplicate contacts, and acknowledges receipt in the approved tone. Classification should reflect customer impact and risk, not emotion alone. A frustrated message about a familiar process may be straightforward, while a calm request involving account ownership, safety, legal threats, or payment changes may require immediate specialist review.',
      'Routine resolution depends on current source material. The assistant uses approved knowledge articles, policies, order details, or scheduling rules and links the answer to the relevant source in the internal note. If documentation conflicts with the customer record or does not cover the situation, the assistant asks a focused clarifying question or escalates. Guessing to preserve a response-time target creates more work and can expose the business to commitments it never intended to make.',
      'Escalation is a structured handoff, not a forward with no explanation. The note states the customer request, checks already performed, relevant identifiers, urgency reason, promised timing, and the exact decision needed from the client owner. Sensitive data is minimized and handled in the approved system. Refunds, credits, account ownership changes, legal responses, safety issues, and product or service exceptions stay with authorized staff unless the client has created a narrow, documented rule for a low-risk category.',
      'Quality review combines queue health with conversation sampling. Managers inspect accuracy, empathy, verification, source use, escalation quality, and whether the final disposition matches the customer outcome. Reopenings and repeat contacts are useful signals when interpreted by issue type, not treated as proof that an individual agent failed. The support guide and knowledge base should be updated when the same gap recurs. This lets the assistant handle repeatable service work consistently while preserving specialist judgment for unusual, sensitive, or costly outcomes.'
    ],
    heroImage: '/services/customer-inbox-support.svg',
    heroAlt: 'Editorial support queue showing verification, approved responses, escalation, and confirmed closure',
    tasks: ['Classify, verify, and acknowledge customer requests', 'Answer approved routine topics from current sources', 'Build complete escalations and monitor ownership'],
    controls: ['Require identity checks for account-specific information', 'Limit refund and exception authority', 'Keep customer work inside approved systems'],
    firstWeek: ['Map request types and escalation owners', 'Practice with historical tickets', 'Review every response and disposition together'],
    problem: 'A shared customer inbox becomes risky when routine answers, identity-sensitive requests, and policy exceptions are handled the same way.',
    inputs: ['Service map', 'Knowledge base', 'Verification and escalation rules'],
    workflow: ['Classify and verify', 'Resolve or clarify', 'Escalate exceptions', 'Confirm closure'],
    deliverables: ['Maintained customer queue', 'Escalation briefs', 'Knowledge-gap log'],
    boundaries: ['No unapproved refund or credit', 'No disclosure before verification', 'No legal or safety judgment'],
    qualityControls: ['Conversation sampling', 'Source and verification check', 'Reopened-ticket review'],
    scenarios: ['A customer asks to change an account email', 'A complaint requests compensation beyond the assistant limit'],
    faq: [
      { q: 'Can customer inbox support replace specialists?', a: 'No. It resolves documented routine issues and routes exceptions to the correct client owner.' },
      { q: 'When is customer identity verification needed?', a: 'Verify identity before disclosing or changing account-specific information according to the client’s approved process.' },
      { q: 'What should an escalation contain?', a: 'Include the request, checks performed, relevant identifiers, impact, promised timing, owner, and exact decision needed.' }
    ],
    relatedServices: ['inbox-and-correspondence-support', 'ecommerce-operations-assistance']
  },
  {
    slug: 'ecommerce-operations-assistance',
    name: 'Ecommerce Operations Assistance',
    metaTitle: 'Ecommerce Operations Assistance',
    title: 'Ecommerce Operations Assistance Across Orders and Catalogs',
    desc: 'Coordinate catalog upkeep, order exceptions, returns administration, and operational reporting through platform-specific rules and approval limits.',
    audience: ['Online stores with growing operational queues', 'Brands coordinating stores, warehouses, and support', 'Marketplace teams needing consistent catalog administration'],
    painPoints: ['Catalog changes lack source approval', 'Order exceptions bounce among systems', 'Return status is unclear to customers and operators'],
    responsibilities: ['Stage approved product and catalog updates', 'Investigate order and fulfillment exceptions', 'Coordinate return records and operational handoffs'],
    tools: ['Shopify or another commerce platform', 'Marketplace and fulfillment portals', 'Help desk and approved product source files'],
    metrics: ['Published catalog changes matching approved source data', 'Order exceptions with a named owner and next action', 'Return records reconciled across approved systems'],
    risks: ['Publishing incorrect price, inventory, or product claims', 'Issuing an unauthorized refund', 'Changing an order after fulfillment cutoffs'],
    body: [
      'Ecommerce assistance spans several systems, so the first requirement is a clear source hierarchy. The client identifies where approved titles, descriptions, variants, prices, images, inventory status, and policy language originate. The assistant stages changes from those sources and does not infer a missing specification from another product. High-impact edits such as price, availability, regulated claims, shipping promise, or marketplace category receive the designated review before publication, even when the platform technically permits the assistant to make the change.',
      'For order operations, the assistant follows the order across storefront, payment status, fulfillment system, carrier record, and customer conversation without assuming those systems synchronize perfectly. An exception note records what each system shows, the last confirmed event, the customer impact, and the next owner. Address changes, cancellations, replacements, and shipment interventions are handled only within written timing and authority limits because an apparently simple edit can create duplicate shipments, fraud exposure, or a promise the warehouse cannot honor.',
      'Returns administration benefits from the same discipline. The assistant can verify that a request contains the required order details, apply published eligibility rules, create an approved return record, and monitor receipt or inspection status. Refund release, goodwill credit, disputed condition, and policy exceptions remain with authorized client staff unless a narrow rule says otherwise. Customer updates distinguish confirmed events from estimates so a carrier scan or warehouse delay is not represented as a completed refund.',
      'Operational review samples catalog changes against source files and reconciles selected orders or returns across systems. Teams can track exception age, missing ownership, failed synchronization, and correction patterns without turning the metrics into unsupported performance claims. Repeated errors may indicate a bad integration, unclear warehouse cutoff, or conflicting product source rather than an assistant issue. The goal is a visible, controlled flow of routine commerce work that helps client specialists focus on merchandising, supply decisions, fraud, policy, and material customer remedies.'
    ],
    heroImage: '/services/ecommerce-operations-assistance.svg',
    heroAlt: 'Editorial ecommerce order board showing storefront, warehouse, carrier, return, and exception states',
    tasks: ['Stage source-backed catalog updates', 'Investigate and route order exceptions', 'Maintain return and fulfillment handoffs'],
    controls: ['Review prices, claims, and availability before publication', 'Restrict refunds and order changes by rule', 'Reconcile changes across connected systems'],
    firstWeek: ['Map platforms and sources of truth', 'Process sample catalog and order exceptions', 'Review every publication and customer-impacting action'],
    problem: 'Commerce operations become inconsistent when catalog, order, warehouse, carrier, and return records disagree.',
    inputs: ['Approved catalog source', 'Order and return policies', 'Warehouse cutoffs and authority limits'],
    workflow: ['Validate source or order state', 'Stage action', 'Approve sensitive change', 'Reconcile connected records'],
    deliverables: ['Catalog change log', 'Order exception queue', 'Return status register'],
    boundaries: ['No unsupported product claim', 'No unauthorized refund', 'No inventory or price guess'],
    qualityControls: ['Source-to-store sampling', 'Cross-system order reconciliation', 'Customer-impact review'],
    scenarios: ['A customer requests an address change after release', 'The storefront and warehouse show different inventory status'],
    faq: [
      { q: 'Can the assistant set product prices?', a: 'The assistant can stage approved prices, but pricing decisions remain with the client.' },
      { q: 'How are order exceptions investigated?', a: 'Compare storefront, payment, fulfillment, carrier, and customer records, then document the confirmed event, impact, owner, and next action.' },
      { q: 'Which catalog changes need approval?', a: 'Prices, availability, regulated claims, shipping promises, marketplace categories, and other high-impact changes need designated review.' }
    ],
    relatedServices: ['customer-inbox-support', 'crm-administration']
  },
  {
    slug: 'podcast-production-coordination',
    name: 'Podcast Production Coordination',
    metaTitle: 'Podcast Production Coordination',
    title: 'Podcast Production Coordination From Guest Brief to Release',
    desc: 'Keep podcast guests, assets, approvals, publishing steps, and promotion handoffs moving through a repeatable production calendar.',
    audience: ['Business podcasts with recurring guests', 'Marketing teams coordinating external editors', 'Hosts who need reliable preflight and publishing administration'],
    painPoints: ['Guest details and release forms arrive late', 'Episode assets lack version clarity', 'Publishing dependencies are discovered near release'],
    responsibilities: ['Coordinate guest intake and recording logistics', 'Maintain asset and approval status', 'Prepare platform entries and promotion handoffs'],
    tools: ['Calendar and recording platform', 'Project tracker and controlled file storage', 'Podcast host and approved channel templates'],
    metrics: ['Recordings with complete guest and technical preflight', 'Episode assets approved before scheduled publication', 'Published metadata matching the final approved brief'],
    risks: ['Publishing unapproved audio or claims', 'Using music or imagery without documented rights', 'Sending a private recording link to the wrong recipient'],
    body: [
      'Podcast coordination begins before the recording invitation. The assistant collects the guest name, role, biography, topic boundaries, pronunciation, contact details, release requirements, accessibility needs, and any links the producer expects to mention. A preflight message explains the recording tool, time zone, expected format, microphone guidance, and contact route for problems. The host or producer retains editorial control over guest selection, episode angle, sensitive questions, and any promise about when or how the conversation will be published.',
      'After recording, the assistant creates a controlled asset set with consistent episode identifiers. Raw files, editor exports, transcripts, artwork, music documentation, show notes, and approval comments should not be mixed in an ambiguous folder. The tracker shows the current version, assigned owner, due date, and decision still needed. The assistant can check file presence and naming, coordinate edits, and compare requested corrections with the delivered version, but does not represent an editorial or legal review of the underlying content.',
      'Publishing preparation translates the approved brief into each platform carefully. Titles, descriptions, guest links, episode numbers, content notices, artwork, chapter information, and scheduled time are checked against the final source. The assistant uses preview or draft states where available and obtains approval for the assembled release. Rights-sensitive music, images, quotations, endorsements, or clips require documented client clearance. Credentials are granted through named roles, and private feeds or unreleased links are treated as confidential production material.',
      'A release checklist continues after the publish button. The assistant confirms that the episode is available where expected, links resolve, metadata displays correctly, and approved promotion tasks have owners. Problems are logged with evidence and routed to the host, editor, platform, or site owner. Review measures coordination quality such as missing assets, late approvals, version corrections, and metadata accuracy. It does not claim that administration alone drives audience growth. Creative direction, factual claims, rights decisions, sponsorship approval, and final editorial judgment remain with the client.'
    ],
    heroImage: '/services/podcast-production-coordination.svg',
    heroAlt: 'Editorial podcast timeline showing guest preflight, recording, edit versions, approval, and release',
    tasks: ['Coordinate guest intake and recording preflight', 'Track episode assets, versions, and approvals', 'Prepare and verify approved publishing metadata'],
    controls: ['Keep final editorial and rights approval with the client', 'Use named platform access', 'Publish only the approved asset version'],
    firstWeek: ['Map the episode lifecycle and owners', 'Audit one previous episode package', 'Run a draft release checklist without publishing'],
    problem: 'Podcast schedules slip when guest logistics, files, edits, rights, metadata, and approvals are managed in disconnected conversations.',
    inputs: ['Guest brief', 'Episode template', 'Asset, rights, and approval rules'],
    workflow: ['Prepare guest', 'Receive and track assets', 'Assemble approval draft', 'Publish and verify'],
    deliverables: ['Guest packet', 'Episode status board', 'Release checklist'],
    boundaries: ['No editorial approval', 'No assumption of media rights', 'No publication of an unapproved version'],
    qualityControls: ['Asset completeness check', 'Version reconciliation', 'Post-release link and metadata verification'],
    scenarios: ['An editor uploads two similarly named final files', 'A guest requests a change shortly before scheduled release'],
    faq: [
      { q: 'Does coordination include audio editing?', a: 'This scope coordinates files and approvals; editing is included only if separately assigned to a qualified owner.' },
      { q: 'How are episode versions kept clear?', a: 'Use consistent episode identifiers, controlled storage, one current-version field, named owners, and recorded approval comments.' },
      { q: 'Who approves an episode for publication?', a: 'The client’s host or producer retains final editorial, factual, rights, sponsorship, and publication approval.' }
    ],
    relatedServices: ['inbox-and-correspondence-support', 'executive-calendar-management']
  },
  {
    slug: 'real-estate-transaction-support',
    name: 'Real Estate Transaction Support',
    metaTitle: 'Real Estate Transaction Support',
    title: 'Real Estate Transaction Support for Documented Milestones',
    desc: 'Coordinate administrative milestones, document requests, contact updates, and exception reporting while licensed professionals retain regulated work.',
    audience: ['Real estate teams managing active transaction files', 'Brokerages standardizing administrative coordination', 'Agents who need consistent milestone follow-up'],
    painPoints: ['Deadlines live in messages instead of one file', 'Missing documents surface close to milestones', 'Parties receive inconsistent status updates'],
    responsibilities: ['Maintain client-provided milestone and document checklists', 'Request and organize administrative materials', 'Prepare status updates and route exceptions'],
    tools: ['Broker-approved transaction platform', 'Secure document storage', 'Calendar, email, and approved templates'],
    metrics: ['Required administrative items logged by checklist stage', 'Upcoming milestones reviewed with the licensed owner', 'Exceptions assigned with a next action and due date'],
    risks: ['Performing licensed activity or interpreting contracts', 'Sending confidential documents to an unverified party', 'Representing a date as legally controlling without professional review'],
    body: [
      'Real estate transaction support must be designed around jurisdiction, brokerage policy, and professional boundaries. The client supplies the checklist, milestone definitions, approved templates, participant directory, and the licensed person responsible for each decision. The assistant records dates and requirements exactly as provided, organizes administrative materials, and asks for missing information. Contract interpretation, negotiation, advice, representations about legal effect, and any activity reserved to a licensed professional remain outside the assistant scope even if the software makes the action easy to perform.',
      'A transaction file should show what was received, where it came from, which version is current, and what still requires review. The assistant applies the broker-approved naming convention, stores documents in the authorized workspace, and limits access to the relevant participants. Before sending a document or status message, recipient details and attachment versions are checked. Sensitive financial, identity, and property information should not be copied into informal channels merely to speed up a handoff.',
      'Milestone coordination uses a forward-looking exception list rather than silent assumptions. The assistant compares the client’s checklist with recorded activity, reminds the responsible person, and notes dependencies such as inspection scheduling, signatures, title items, financing updates, or closing logistics only as directed by the client. When dates conflict or an item appears late, the assistant flags it to the licensed owner. The owner determines contractual significance, required notice, remedy, and communication that could affect the parties’ rights or obligations.',
      'Quality review checks document identity, checklist completeness, recipient accuracy, owner assignment, and evidence that exceptions reached the appropriate professional. It should not score the assistant on whether a transaction closes because that outcome depends on buyers, sellers, financing, inspections, title, legal conditions, and licensed decisions. A disciplined support process gives the team a clearer file and earlier visibility into administrative gaps, while brokerage supervision and qualified professional judgment remain central throughout the transaction.'
    ],
    heroImage: '/services/real-estate-transaction-support.svg',
    heroAlt: 'Editorial real estate milestone path showing documents, inspection, professional review, and closing coordination',
    tasks: ['Maintain approved transaction checklists', 'Organize and request administrative documents', 'Prepare status summaries and route milestone exceptions'],
    controls: ['Keep licensed activities with licensed professionals', 'Verify recipients and document versions', 'Treat dates as client-provided until professionally confirmed'],
    firstWeek: ['Review brokerage rules and the transaction template', 'Audit a closed sample file', 'Practice exception routing with the licensed owner'],
    problem: 'Transaction files become difficult to supervise when milestones, documents, versions, and responsible parties are tracked inconsistently.',
    inputs: ['Broker-approved checklist', 'Participant directory', 'Templates and secure file rules'],
    workflow: ['Create administrative file', 'Track provided milestones', 'Request and organize items', 'Escalate exceptions'],
    deliverables: ['Transaction checklist', 'Document register', 'Milestone exception summary'],
    boundaries: ['No licensed activity', 'No contract interpretation', 'No unverified disclosure of confidential records'],
    qualityControls: ['Document version check', 'Recipient verification', 'Licensed-owner milestone review'],
    scenarios: ['Two versions of a signed document arrive', 'A checklist date conflicts with a recent participant message'],
    faq: [
      { q: 'Can an assistant interpret a purchase agreement?', a: 'No. Contract interpretation belongs with the licensed or qualified professional designated by the client.' },
      { q: 'How should transaction dates be handled?', a: 'Record dates exactly as provided, identify their source, and route conflicts or significance questions to the licensed owner.' },
      { q: 'What protects confidential transaction documents?', a: 'Use broker-approved storage, participant-level access, naming and version rules, plus recipient and attachment checks before sending.' }
    ],
    relatedServices: ['legal-administrative-assistance', 'executive-calendar-management']
  },
  {
    slug: 'legal-administrative-assistance',
    name: 'Legal Administrative Assistance',
    metaTitle: 'Legal Administrative Assistance',
    title: 'Legal Administrative Assistance With Matter-Level Controls',
    desc: 'Support legal teams with intake, document organization, deadline data, and status coordination under direct professional supervision.',
    audience: ['Law firms standardizing administrative intake', 'In-house legal teams with recurring matter coordination', 'Qualified professionals seeking controlled clerical support'],
    painPoints: ['Matter intake arrives incomplete', 'Documents lose source and version context', 'Administrative deadlines are copied without independent review'],
    responsibilities: ['Collect intake fields from approved forms', 'Organize matter documents and correspondence', 'Enter client-provided dates and prepare review queues'],
    tools: ['Approved practice or matter management system', 'Secure document workspace', 'Client templates and communication channels'],
    metrics: ['Intake records containing required administrative fields', 'Documents filed to the correct matter and version', 'Entered dates reviewed by the supervising professional'],
    risks: ['Unauthorized practice of law', 'Privilege or confidentiality exposure', 'Treating a copied deadline as professionally calculated or verified'],
    body: [
      'Legal administrative assistance is useful only when professional responsibility is explicit. The supervising lawyer or qualified client owner defines the permitted clerical tasks, matter access, communication templates, and issues that require immediate escalation. The assistant can collect facts through approved intake questions, create administrative records, organize supplied documents, and coordinate meetings. The assistant does not interpret law, assess legal merit, advise a client, select a legal strategy, or communicate a professional conclusion under the appearance of independent authority.',
      'Matter intake should preserve the source and avoid premature conclusions. The assistant records what the prospective or existing client states, identifies missing required fields, applies a neutral status, and routes conflict-check or eligibility information through the firm’s approved process. No promise of representation, confidentiality status, outcome, fee, or response timing is made beyond approved language. Urgent facts are escalated according to the client’s rules, but the supervising professional determines their legal significance and the action required.',
      'Document administration depends on matter-level access and reliable versions. Files are named using the client convention, linked to the correct matter, and accompanied by source, receipt date, and status where required. The assistant can compare a checklist with files present, prepare signature packets from approved templates, or assemble a review bundle. Substantive edits, legal citations, privilege decisions, filing approval, and final correspondence remain with qualified professionals. Sensitive documents stay in approved systems rather than personal storage or unsanctioned artificial intelligence tools.',
      'Dates deserve special caution. An assistant may enter a date supplied by the supervising team and set reminders, but should not independently calculate a limitation period, court deadline, notice requirement, or contractual obligation. A professional reviews the source, calculation, jurisdiction, and calendar entry. Quality checks sample matter assignment, document version, access, intake completeness, and date approval. These controls make clerical work easier to supervise without suggesting that administrative support substitutes for legal judgment, professional duties, or jurisdiction-specific advice.'
    ],
    heroImage: '/services/legal-administrative-assistance.svg',
    heroAlt: 'Editorial legal intake workflow showing approved fields, conflict review, matter access, and professional sign-off',
    tasks: ['Collect approved administrative intake fields', 'Organize documents within the correct matter', 'Enter supplied dates and maintain professional review queues'],
    controls: ['Work under named professional supervision', 'Restrict access by matter', 'Require professional review of substantive communication and dates'],
    firstWeek: ['Confirm permitted tasks and escalation triggers', 'Practice with sanitized matter examples', 'Review every intake, document placement, and date entry'],
    problem: 'Legal clerical work creates serious risk when intake, matter access, document versions, and deadline sources are not tightly supervised.',
    inputs: ['Approved intake form', 'Matter and document rules', 'Professional supervision and escalation matrix'],
    workflow: ['Receive approved request', 'Record without interpretation', 'Organize or prepare', 'Submit for professional review'],
    deliverables: ['Administrative intake record', 'Matter document index', 'Date and exception review queue'],
    boundaries: ['No legal advice or strategy', 'No independent deadline calculation', 'No unsupervised substantive communication'],
    qualityControls: ['Matter-level access review', 'Source and version sampling', 'Professional sign-off on dates and substantive output'],
    scenarios: ['An intake asks whether the firm can meet an urgent deadline', 'A document arrives without a clear matter reference'],
    faq: [
      { q: 'Is legal administrative assistance legal advice?', a: 'No. It is supervised clerical and coordination support, not legal analysis, representation, or advice.' },
      { q: 'Can an assistant calculate legal deadlines?', a: 'No. An assistant may enter a supplied date and reminders, but a qualified professional must calculate and approve legal deadlines.' },
      { q: 'How is matter confidentiality controlled?', a: 'Use named accounts, matter-level permissions, approved systems, source and version records, and professional review before substantive communication.' }
    ],
    relatedServices: ['real-estate-transaction-support', 'inbox-and-correspondence-support']
  }
];

export const researchPosts: readonly ResearchPost[] = [
  ...researchBatch20260729Posts,
  {
    slug: 'filipino-virtual-assistant-evidence-report',
    title: "Filipino Virtual Assistant: A 2026 Buyer's Evidence Report",
    excerpt: 'National workforce data, Philippine law, and security standards can help a buyer plan Philippines-based support. This report shows what that evidence can and cannot say about one virtual assistant.',
    published: '2026-07-24',
    modified: '2026-07-24',
    readingMinutes: 12,
    revision: '2026-07-24-filipino-virtual-assistant-evidence-report',
    keyTakeaways: [
      'Country data supports a serious Philippines-based remote-work market, but it does not prove that one assistant or provider can do your job well.',
      'A role-specific paid test, reference checks, and a written first-month scorecard are stronger buying signals than a broad national statistic.',
      'Named accounts, limited access, multi-factor authentication, review logs, and a clear offboarding plan should be set before customer data is shared.',
      'Compare the whole service package instead of an hourly number alone, including screening, management, tools, backup, replacement, and schedule coverage.',
      'The safest first hire owns repeatable work while a client-side manager keeps scope, refunds, legal judgment, money movement, and final approvals.'
    ],
    stats: [
      { value: '67.3%', label: 'Internet use', note: 'Share of people in the Philippines using the internet in 2024; the world value was 71.2%.', citation: 1 },
      { value: '59.5%', label: 'Services employment', note: 'Share of Philippine employment in services in 2025; the world value was 50.6%.', citation: 2 },
      { value: '47.4%', label: 'Tertiary enrollment', note: 'Philippine gross tertiary enrollment in 2024; the world value was 43.6%.', citation: 3 },
      { value: '98.5%', label: 'Adult literacy', note: 'Latest Philippine observation in the World Bank series, from 2020.', citation: 4 },
      { value: '30-40%', label: 'Remote share', note: "IBPAP's July 2023 estimate for remote work among member-company employees.", citation: 5 }
    ],
    sections: [
      {
        heading: 'The short answer for buyers',
        paragraphs: [
          { text: 'A Filipino virtual assistant can be a strong fit for repeatable admin, customer support, CRM, research, scheduling, and operations work. Do not judge a candidate by a broad claim about one country. Check whether that person can perform your tasks under clear controls.' },
          { text: "The Philippines has a large service economy, broad education participation, and a formal policy push for digital work. Those facts help explain the country's remote talent market, but they do not replace a work sample, a reference check, or a review of the assistant's actual equipment and internet setup.", citations: [2, 3, 6] },
          { text: 'This report turns public evidence into a practical hiring method. It also marks the limits of each statistic so a national number is never presented as proof of individual skill, reliability, English level, or data safety.' }
        ]
      },
      {
        heading: 'What the Philippines data really says',
        paragraphs: [
          { text: 'World Bank data reports that 59.5% of Philippine employment was in services in 2025, compared with 50.6% worldwide. That is useful market context because virtual assistant work sits inside a much broader service economy, yet the measure includes many jobs that have nothing to do with remote assistance.', citations: [2] },
          { text: 'Gross tertiary enrollment reached 47.4% in the Philippines in 2024, above the 43.6% world value in the same dataset. Enrollment describes access to education across a population; it does not show that a particular candidate finished a degree or has the writing, software, and judgment needed for your role.', citations: [3] },
          { text: 'The latest Philippine adult-literacy observation in the World Bank series is 98.5% for 2020. The world series shows 87.7% for 2024, but the dates differ, so this is context rather than a clean same-year comparison.', citations: [4] },
          { text: 'Internet use in the Philippines was 67.3% in 2024, while the world value was 71.2%. A national rate cannot tell you whether one home office has stable fiber, backup power, a second connection, or a quiet call environment, so every buyer should verify those items directly.', citations: [1] }
        ]
      },
      {
        heading: 'Broader industry evidence is not a VA headcount',
        paragraphs: [
          { text: 'IBPAP says that, as of July 2023, 30 to 40% of employees at its member companies worked remotely and 60 to 70% worked onsite. This is first-party context from the wider Philippine IT and business-process industry, not a count of freelance virtual assistants or a promise about any staffing provider.', citations: [5] },
          { text: 'Republic Act No. 11927 created a national policy framework for digital-workforce skills, training, certification, and career development. The law shows public support for digital careers, but a buyer still needs to inspect the exact training, experience, and work samples claimed by a candidate or provider.', citations: [6] },
          { text: "The Philippines has real service and digital work foundations, but hiring quality comes down to the role and the person. Country data cannot prove a candidate's quality. It can still give buyers useful context about the market where they are hiring." }
        ]
      },
      {
        heading: 'A five-part evidence test before you hire',
        paragraphs: [
          { text: 'First, write one role in plain language and separate repeatable tasks from owner-only decisions. A useful scope names the tools, weekly volume, work hours, examples, approval limits, and the manager who will review exceptions.' },
          { text: 'Second, ask for evidence that matches the role rather than a general résumé. For inbox work, test sorting and draft quality; for CRM work, test field accuracy and notes; for customer support, test tone, escalation, and use of an approved answer.' },
          { text: 'Third, run a short paid work sample using safe dummy data. Score accuracy, completion, questions asked, handoff notes, and whether the candidate stops when an approval is missing instead of guessing.' },
          { text: 'Fourth, verify the work setting before live access begins. Ask the candidate to show the main connection, backup connection, power plan, device ownership, headset or call space, and the exact schedule they can sustain.' },
          { text: 'Fifth, document the first 30 days with a small scorecard and fixed review times. Add work only after the original task set is accurate, secure, and easier for the manager to review.' }
        ],
        bullets: [
          'Role scope with tasks, tools, volume, hours, and prohibited decisions',
          'Candidate evidence tied to the same work, rather than a generic portfolio',
          'Paid test with dummy records and a written scoring sheet',
          'Connection, power, device, privacy, and schedule check',
          'Thirty-day review plan with one client-side owner'
        ]
      },
      {
        heading: 'Data privacy and account access',
        paragraphs: [
          { text: "The Philippine Data Privacy Act of 2012 sets rules for processing personal information and creates duties around security, transparency, and lawful handling. It is a legal foundation, but buyers still need their own contracts, access rules, training, and supervision.", citations: [7] },
          { text: "NIST's telework guidance says organizations should treat remote access as part of their security program. That includes policies, secured devices, protected connections, and a plan for incidents. CISA explains that multi-factor authentication adds protection because a stolen password alone cannot complete the login.", citations: [9, 10] },
          { text: "Give each assistant a named account and only the permissions needed for current tasks. Keep password sharing, bank changes, refunds, legal or medical decisions, payroll approval, and account owner controls outside the assistant's authority unless a qualified client-side owner has approved a safer process." },
          { text: 'Your offboarding checklist should be written before onboarding. It should cover account suspension, password rotation where shared credentials cannot yet be removed, device or file return, forwarding rules, open-task transfer, and a final access review.' }
        ],
        bullets: [
          'Named user accounts instead of shared logins',
          'Multi-factor authentication and a business password manager',
          'Least access needed for the current task set',
          'Written approval and escalation boundaries',
          'Activity review for sensitive systems',
          'Same-day access removal when the assignment ends'
        ]
      },
      {
        heading: 'How to compare cost without hiding the real bill',
        paragraphs: [
          { text: 'An hourly number is not a complete service terms. Ask whether the quote includes recruiting, screening, management, replacement support, backup coverage, software, equipment, overtime, local holidays, payment costs, and any minimum term.' },
          { text: 'This site publishes three Philippines-based support levels: entry support level for executive-assistant support, senior support level for senior-assistant support, and operations support level for C-suite or operations support. Review the current scope on the scope page, then use the same task brief when comparing any other quote so the numbers describe similar work.' },
          { text: "Do not compare a worker's possible pay with a managed service fee as if they were the same product. A provider fee may cover screening, management, tools, or backup, but the buyer should ask for those items in writing." },
          { text: 'The best first contract is usually narrow enough to review and change. Set the tasks, schedule, billing unit, review date, replacement terms, data rules, and exit steps before adding more hours.' }
        ]
      },
      {
        heading: 'Work hours and employment terms',
        paragraphs: [
          { text: 'A Philippines-based assistant can work an agreed overlap with a US team, but the schedule should be explicit before hiring. Ask for the exact local start and end times, break rules, holiday coverage, response window, and what happens when weather or an outage interrupts a shift.' },
          { text: 'Republic Act No. 11165 sets a framework for telecommuting arrangements involving employees and says remote workers should receive fair treatment under applicable labor standards. Contractor, employee, and provider-managed arrangements can carry different duties, so obtain qualified advice for the actual relationship instead of copying a generic online contract.', citations: [8] },
          { text: 'Night work can affect retention and daily life even when a candidate agrees to it. A stable schedule, written handoff, and limited emergency coverage are more credible than a promise that one person will always be available.' }
        ]
      },
      {
        heading: 'A practical 30-day launch plan',
        paragraphs: [
          { text: 'During days 1 to 3, teach one small task set with examples and dummy records. Confirm access, escalation rules, schedule, and the person who approves exceptions before live customer or financial data is used.' },
          { text: 'During days 4 to 10, review every completed item at a fixed time and record the reasons for misses. Improve the instruction or example when the process is unclear, and coach the assistant when the written step was clear but not followed.' },
          { text: 'During days 11 to 20, reduce review only for tasks that stay accurate. Keep higher-risk work behind approval and do not add a new system merely because basic tasks are going well.' },
          { text: 'During days 21-30, compare the result with the original scorecard and decide whether to keep, narrow, expand, or end the assignment. Use observed work quality, manager time, schedule fit, and security behavior. Do not base the decision on a broad claim about Filipino talent.' }
        ]
      }
    ],
    comparisonTable: {
      caption: 'Country-level indicators: useful context, never a candidate score',
      headers: ['Indicator', 'Philippines', 'World comparison', 'What a buyer must still verify'],
      rows: [
        ['People using the internet', '67.3% (2024)', '71.2% (2024)', 'Primary connection, backup connection, power plan, and actual call quality'],
        ['Employment in services', '59.5% (2025)', '50.6% (2025)', 'Role experience, references, writing, software skill, and judgment'],
        ['Gross tertiary enrollment', '47.4% (2024)', '43.6% (2024)', 'Completed education, certificates, and a role-specific paid test'],
        ['Adult literacy', '98.5% (2020)', '87.7% (2024)', 'Business writing, reading accuracy, tone, and comprehension in the work sample'],
        ['Remote share in IBPAP member firms', '30 to 40% remote (July 2023)', 'No equivalent used', 'Candidate workspace, schedule, device, privacy, and provider controls']
      ]
    },
    methodology: [
      { text: "We selected the topic with authenticated Ahrefs data captured on July 22, 2026, then used primary and first-party sources for factual claims. Country indicators come from the World Bank's public API series, while legal claims link to the text of Philippine laws.", citations: [1, 2, 3, 4, 6, 7, 8] },
      { text: 'The indicators use different years and populations, and some are modeled estimates rather than direct counts. None measures the number, quality, pay, availability, or performance of Filipino virtual assistants, so this report uses them only as market context.' },
      { text: 'IBPAP figures describe member companies in the broader IT-BPM sector and should not be projected onto freelancers or every provider. Security sources describe buyer controls and do not certify this site, a staffing partner, or any assistant.', citations: [5, 9, 10] }
    ],
    faq: [
      { q: 'What is a Filipino virtual assistant?', a: 'A Filipino virtual assistant is a remote worker based in the Philippines who supports a business with agreed digital tasks. The role can cover admin, inboxes, customer support, CRM, scheduling, research, or operations, but the exact authority should be written before work begins.' },
      { q: 'Why hire a Filipino virtual assistant?', a: 'The Philippines has a large service-sector workforce, broad education participation, and public support for digital skills. Those factors create a useful talent market, but the hiring decision should still rest on a paid test, references, work-setting checks, and fit for the exact role.', citations: [2, 3, 6] },
      { q: 'How much does a Filipino virtual assistant cost?', a: "The answer depends on role level, schedule, management, tools, backup, and replacement support. This site's current Philippines-based tiers are entry support level, senior support level, and operations support level per hour. Compare the full written scope rather than one rate." },
      { q: 'How do I vet a Filipino virtual assistant?', a: "Start with one written role, ask for matching examples, and run a short paid test with dummy data. Then verify the candidate's connection, power backup, device, schedule, references, access rules, and first-month review plan." },
      { q: 'Can a Filipino virtual assistant safely handle customer data?', a: 'Remote access can be managed safely only when the buyer sets proper controls and the assistant follows them. Use named accounts, least privilege, multi-factor authentication, written escalation rules, activity review, and an offboarding checklist before sharing sensitive data.', citations: [7, 9, 10] }
    ],
    relatedLinks: [
      { title: 'Virtual assistant budget planning', description: 'Compare role scope, staffing models, and the parts of a quote that change the real cost.', href: '/blog' },
      { title: 'Assistant onboarding checklist', description: 'Turn the first week into a clear sequence for access, examples, reviews, and scorecards.', href: '/blog' },
      { title: 'Provider vetting guide', description: 'Use role examples, a paid test, security questions, and replacement terms to compare providers.', href: '/provider-vetting' },
      { title: 'Research library', description: 'Browse reviewed reports about Philippines-based virtual assistant operations.', href: '/research' }
    ],
    sources: [
      { id: 1, name: 'World Bank', title: 'Individuals using the Internet (% of population), Philippines and World', url: 'https://api.worldbank.org/v2/country/PHL;WLD/indicator/IT.NET.USER.ZS?format=json&per_page=100', scope: 'Global comparison' },
      { id: 2, name: 'World Bank', title: 'Employment in services (% of total employment), Philippines and World', url: 'https://api.worldbank.org/v2/country/PHL;WLD/indicator/SL.SRV.EMPL.ZS?format=json&per_page=100', scope: 'Global comparison' },
      { id: 3, name: 'World Bank', title: 'School enrollment, tertiary (% gross), Philippines and World', url: 'https://api.worldbank.org/v2/country/PHL;WLD/indicator/SE.TER.ENRR?format=json&per_page=100', scope: 'Global comparison' },
      { id: 4, name: 'World Bank', title: 'Literacy rate, adult total (% of people ages 15 and above), Philippines and World', url: 'https://api.worldbank.org/v2/country/PHL;WLD/indicator/SE.ADT.LITR.ZS?format=json&per_page=100', scope: 'Global comparison' },
      { id: 5, name: 'IT & Business Process Association of the Philippines', title: 'Knowledge Hub FAQs: Philippine IT-BPM workforce context', url: 'https://ibpap.org/knowledge-hub', scope: 'Philippines evidence' },
      { id: 6, name: 'Congress of the Philippines via Lawphil', title: 'Republic Act No. 11927: Philippine Digital Workforce Competitiveness Act', url: 'https://lawphil.net/statutes/repacts/ra2022/ra_11927_2022.html', scope: 'Philippines evidence' },
      { id: 7, name: 'Congress of the Philippines via Lawphil', title: 'Republic Act No. 10173: Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', scope: 'Philippines evidence' },
      { id: 8, name: 'Congress of the Philippines via Lawphil', title: 'Republic Act No. 11165: Telecommuting Act', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html', scope: 'Philippines evidence' },
      { id: 9, name: 'National Institute of Standards and Technology', title: 'Guide to Enterprise Telework, Remote Access, and Bring Your Own Device Security', url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final', scope: 'Buyer security standard' },
      { id: 10, name: 'Cybersecurity and Infrastructure Security Agency', title: 'Multi-Factor Authentication (MFA)', url: 'https://www.cisa.gov/resources-tools/resources/multi-factor-authentication-mfa', scope: 'Buyer security standard' }
    ]
  },
  hireVirtualAssistantPhilippinesPost,
  philippinesVirtualAssistantDataEntryQualityControlPost,
  virtualAssistantPhilippinesCustomerInboxSupportPost,
  virtualAssistantPhilippinesExecutiveCalendarManagementPost,
  virtualAssistantPhilippinesTravelPlanningAssistancePost,
  virtualAssistantPhilippinesCrmAdministrationPost
];

export const postsPerPage = 20;
