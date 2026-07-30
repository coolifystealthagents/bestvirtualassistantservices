const sources = [
  { id: 1, name: 'World Bank', title: 'Employment in services, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=100', scope: 'Philippines evidence' },
  { id: 2, name: 'World Bank', title: 'Individuals using the Internet, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&per_page=100', scope: 'Philippines evidence' },
  { id: 3, name: 'World Bank', title: 'School enrollment, tertiary, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SE.TER.ENRR?format=json&per_page=100', scope: 'Philippines evidence' },
  { id: 4, name: 'World Bank', title: 'Adult literacy rate, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SE.ADT.LITR.ZS?format=json&per_page=100', scope: 'Philippines evidence' },
  { id: 5, name: 'Congress of the Philippines via Lawphil', title: 'Republic Act No. 10173: Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', scope: 'Philippines evidence' },
  { id: 6, name: 'National Privacy Commission', title: 'Data Privacy Act of 2012', url: 'https://privacy.gov.ph/data-privacy-act/', scope: 'Philippines evidence' },
  { id: 7, name: 'NIST', title: 'Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-4/', scope: 'Buyer security standard' },
  { id: 8, name: 'NIST', title: 'Guide to Enterprise Telework, Remote Access, and BYOD Security', url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final', scope: 'Buyer security standard' },
  { id: 9, name: 'CISA', title: 'More than a Password', url: 'https://www.cisa.gov/mfa', scope: 'Buyer security standard' },
  { id: 10, name: 'CISA', title: 'Secure Our World: Recognize and Report Phishing', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing', scope: 'Buyer security standard' },
  { id: 11, name: 'W3C', title: 'Web Content Accessibility Guidelines 2.2', url: 'https://www.w3.org/TR/WCAG22/', scope: 'Global comparison' },
  { id: 12, name: 'International Labour Organization', title: 'Working from home: From invisibility to decent work', url: 'https://www.ilo.org/publications/major-publications/working-home-invisibility-decent-work', scope: 'Global comparison' },
] as const;

const topics = [
  ['philippines-virtual-assistant-social-content-operations', 'Philippines Virtual Assistant Social Content Operations Guide', 'social content operations', 'asset intake, caption drafts, approval status, publishing queues, and response routing', 'Prepare and schedule approved content', 'Publish unapproved claims, impersonate an owner, or handle a crisis alone', '/services'],
  ['philippines-virtual-assistant-research-verification', 'Philippines Virtual Assistant Research Verification Routine', 'research verification', 'source logs, publication dates, claim checks, quotations, and unresolved evidence', 'Collect and label evidence from approved sources', 'Invent citations, hide uncertainty, or make the final expert judgment', '/services'],
  ['philippines-virtual-assistant-vendor-onboarding', 'Philippines Virtual Assistant Vendor Onboarding Controls', 'vendor onboarding coordination', 'document requests, status trackers, access requests, due dates, and owner approvals', 'Coordinate approved forms and status reminders', 'Approve vendors, change banking details, or accept contract terms', '/services'],
  ['philippines-virtual-assistant-sales-pipeline-handoff', 'Philippines Virtual Assistant Sales Pipeline Handoff Guide', 'sales pipeline support', 'lead routing, follow-up reminders, stage hygiene, and manager handoffs', 'Prepare records and approved follow-ups', 'Promise terms, qualify regulated needs, or close deals', '/services/sales-pipeline-support'],
  ['philippines-virtual-assistant-ecommerce-operations-checklist', 'Philippines Virtual Assistant Ecommerce Operations Checklist', 'ecommerce operations', 'catalog updates, order exceptions, returns queues, and stock alerts', 'Process documented catalog and order tasks', 'Change prices, issue exceptions, or alter payment settings', '/services/ecommerce-operations-assistance'],
  ['philippines-virtual-assistant-podcast-production-workflow', 'Philippines Virtual Assistant Podcast Production Workflow', 'podcast production coordination', 'guest scheduling, release checklists, show notes, and asset handoffs', 'Coordinate approved guests and production files', 'Grant rights, publish unapproved claims, or alter sponsor terms', '/services/podcast-production-coordination'],
  ['philippines-virtual-assistant-real-estate-transaction-support', 'Philippines Virtual Assistant Real Estate Transaction Support Controls', 'real estate transaction support', 'document trackers, deadline reminders, contact updates, and missing-item queues', 'Track documents and send approved reminders', 'Interpret contracts, negotiate, or provide licensed advice', '/services/real-estate-transaction-support'],
  ['philippines-virtual-assistant-legal-admin-boundaries', 'Philippines Virtual Assistant Legal Administrative Boundaries', 'legal administrative support', 'matter intake, file naming, deadline logs, and attorney review queues', 'Organize approved administrative records', 'Practice law, interpret rights, or send privileged material broadly', '/services/legal-administrative-assistance'],
  ['philippines-virtual-assistant-recruitment-coordination', 'Philippines Virtual Assistant Recruitment Coordination Guide', 'recruitment coordination', 'candidate scheduling, status records, interview packs, and consent-aware communication', 'Coordinate documented hiring steps', 'Choose candidates, infer protected traits, or promise employment', '/services'],
  ['philippines-virtual-assistant-bookkeeping-preparation', 'Philippines Virtual Assistant Bookkeeping Preparation Controls', 'bookkeeping preparation', 'receipt collection, transaction coding drafts, missing-document queues, and month-end handoffs', 'Prepare records for qualified review', 'Move money, file returns, or make final accounting judgments', '/services'],
  ['philippines-virtual-assistant-reporting-routine', 'Philippines Virtual Assistant Weekly Reporting Routine', 'weekly operations reporting', 'source checks, metric definitions, exception notes, and decision-ready summaries', 'Compile approved metrics with source links', 'Change definitions, conceal gaps, or claim unsupported conclusions', '/services'],
  ['philippines-virtual-assistant-document-control', 'Philippines Virtual Assistant Document Control Routine', 'document control', 'file naming, version status, approval logs, retention flags, and access requests', 'Maintain approved versions and registers', 'Destroy records, change retention rules, or approve restricted access', '/services'],
] as const;

function makePost(topic: typeof topics[number], index: number) {
  const [slug, title, role, workflow, allowed, prohibited, serviceHref] = topic;
  const noun = role[0].toUpperCase() + role.slice(1);
  return {
    slug, primaryKeyword: `${role} virtual assistant philippines`, noPricing: true,
    title,
    excerpt: `A source-backed routine for assigning ${role} to a Philippines-based virtual assistant with clear inputs, review points, access limits, and owner decisions.`,
    published: '2026-07-29', modified: '2026-07-29', readingMinutes: 12,
    revision: `2026-07-29-${slug}-v1`,
    thumbnail: ['/va-comparison-team.jpg', '/thank-you-hero.png', '/logo.svg'][index % 3],
    keyTakeaways: [
      `Define the finish line for ${role} before granting live access.`,
      'Test the routine with dummy records and the same scorecard for every candidate.',
      'Use named accounts, multi-factor authentication, least privilege, and an offboarding list.',
      `${allowed}; keep final judgment with the client owner.`,
      'Review exceptions and manager time before expanding the role.'
    ],
    stats: [
      { value: '59.5%', label: 'Services employment', note: 'Philippine employment in services in 2025.', citation: 1 },
      { value: '67.3%', label: 'Internet use', note: 'People in the Philippines using the internet in 2024.', citation: 2 },
      { value: '47.4%', label: 'Tertiary enrollment', note: 'Gross tertiary enrollment in the Philippines in 2024.', citation: 3 },
      { value: '98.5%', label: 'Adult literacy', note: 'Latest Philippine observation in the cited series, from 2020.', citation: 4 }
    ],
    sections: [
      { heading: `Start ${role} with one repeatable outcome`, paragraphs: [
        { text: `${noun} becomes delegable when the inputs, output, due time, source of truth, and exception owner are written. Begin with one narrow routine covering ${workflow}.` },
        { text: `Country-level indicators describe the environment for remote work, not the ability of one applicant. Check the person, workspace, connection, work sample, references, and tool habits for this exact role.`, citations: [1, 2, 3, 4] }
      ]},
      { heading: 'Write the operating brief before the work test', paragraphs: [
        { text: `The brief should name the queue, weekly volume, approved sources, required fields, local and client time zones, service standard, and the person who answers exceptions.` },
        { text: `State the control line in plain language: ${allowed}. ${prohibited}.` }
      ], bullets: ['One named queue and one source of truth', 'Examples of a correct result and a stop condition', 'Expected volume and review time', 'Owner-only decisions and emergency contact'] },
      { heading: 'Use a paid test with safe sample records', paragraphs: [
        { text: 'Give every finalist the same short paid exercise with dummy information. Include a normal item, a missing fact, a conflicting source, a sensitive request, and one case outside the written authority.' },
        { text: 'Score accuracy, source use, notes, questions, escalation, and completion time. A candidate should not gain points for guessing when the correct action is to stop.' }
      ]},
      { heading: 'Design access around the first task set', paragraphs: [
        { text: 'Create a named account, require multi-factor authentication, limit permissions to the approved queue, and keep recovery and administrator powers with the client.', citations: [7, 8, 9] },
        { text: 'Personal information needs written handling rules, appropriate agreements, supervision, and an incident path. Philippine privacy law is a baseline, not a substitute for configuring the actual system.', citations: [5, 6] }
      ]},
      { heading: 'Run a visible exception queue', paragraphs: [
        { text: `For ${role}, exceptions should show the item, source checked, missing decision, risk, owner, and next review time. The assistant should never have to hide uncertainty to appear productive.` },
        { text: 'Treat unexpected login prompts, credential requests, or suspicious messages as security events. Stop work and use the client reporting path instead of forwarding the message widely.', citations: [10] }
      ]},
      { heading: 'Review the first month in stages', paragraphs: [
        { text: 'During days 1 through 3, teach with examples and review every output. During days 4 through 10, use a narrow live queue and log errors by type.' },
        { text: 'During days 11 through 30, reduce review only after the routine stays stable. Compare accuracy, exceptions, manager time, attendance, and access behavior with the original scorecard.' }
      ]},
      { heading: 'Make the handoff usable across time zones', paragraphs: [
        { text: 'End each shift with completed items, blocked items, decisions needed, and the first next action. Use accessible headings, labels, and link text so the handoff remains usable by different teammates and assistive technology.', citations: [11] },
        { text: 'Set working hours and response expectations explicitly. Remote work should still have reasonable supervision, rest, communication, and a clear way to raise concerns.', citations: [12] }
      ]}
    ],
    comparisonTable: {
      caption: `${noun} delegation and control checklist`,
      headers: ['Stage', 'Assistant action', 'Client review', 'Stop condition'],
      rows: [
        ['Intake', 'Confirm approved source and required output', 'Check scope and priority', 'Source or authority is missing'],
        ['Prepare', allowed, 'Review the defined sample', prohibited],
        ['Exception', 'Record facts and route to the named owner', 'Make the decision', 'Sensitive or irreversible action is requested'],
        ['Handoff', 'List completed, blocked, and next items', 'Resolve decisions and update rules', 'Work cannot be verified'],
        ['Offboarding', 'Return work and confirm open items', 'Suspend access and preserve records', 'An account or asset is untracked']
      ]
    },
    expertQuote: { quote: 'Organizations should implement security measures based on the sensitivity of telework and remote access data.', person: 'National Institute of Standards and Technology', title: 'telework security guidance', sourceId: 8 },
    chart: {
      title: 'Philippines workforce and digital context indicators', unit: 'Share (%)',
      method: 'Latest cited observations are shown with their years. They describe different populations and are not combined into a candidate score.',
      items: [
        { label: 'Services employment', value: 59.5, display: '59.5%', year: '2025', citation: 1 },
        { label: 'Internet use', value: 67.3, display: '67.3%', year: '2024', citation: 2 },
        { label: 'Tertiary enrollment', value: 47.4, display: '47.4%', year: '2024', citation: 3 },
        { label: 'Adult literacy', value: 98.5, display: '98.5%', year: '2020', citation: 4 }
      ]
    },
    graphic: {
      title: `${noun} control line`,
      steps: [
        { label: 'Assistant prepares', detail: allowed },
        { label: 'Manager reviews', detail: 'Check exceptions, quality samples, and access behavior.' },
        { label: 'Owner decides', detail: prohibited }
      ],
      note: 'Expand scope only after the output, access boundary, and review record remain stable.'
    },
    banners: [
      { eyebrow: 'Role brief', title: `Define the ${role} routine`, text: 'Bring the tools, volume, examples, and decisions that must stay with your business.', href: '/contact-us', linkLabel: 'Discuss the role' },
      { eyebrow: 'Provider check', title: 'Compare the same evidence', text: 'Use one work test and scorecard across every provider or finalist.', href: '/provider-vetting', linkLabel: 'Open the vetting guide' },
      { eyebrow: 'Service lane', title: `Review ${role} support`, text: 'See the related responsibilities, controls, and first-week plan.', href: serviceHref, linkLabel: 'Review the service' }
    ],
    methodology: [
      { text: 'This guide separates broad Philippines context from role-specific buyer checks. It uses direct World Bank series, Philippine privacy sources, NIST and CISA security guidance, W3C accessibility guidance, and ILO remote-work research.', citations: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      { text: `The workflow is an editorial planning framework for ${role}. It is not legal, employment, tax, accounting, immigration, security, or regulated professional advice.` },
      { text: 'Sources were reviewed for this July 29, 2026 publication batch. Observation years remain visible, and no country statistic is presented as proof of individual performance.' }
    ],
    faq: [
      { q: `What can a virtual assistant do for ${role}?`, a: `${allowed}. The exact queue, source, output, and approval limit should be written first.` },
      { q: 'How should a candidate be tested?', a: 'Use a short paid exercise with dummy data, the same instructions, and a scorecard covering accuracy, source use, questions, and escalation.' },
      { q: 'What access should be granted?', a: 'Use a named account with multi-factor authentication and only the permissions needed for the first task set.', citations: [7, 8, 9] },
      { q: 'What should stay with the client?', a: prohibited },
      { q: 'When should the role expand?', a: 'Expand only after the original queue is stable, exceptions are visible, and review time is acceptable.' }
    ],
    relatedLinks: [
      { title: `${noun} service`, description: 'Review the related service lane and first-week plan.', href: serviceHref },
      { title: 'Provider vetting guide', description: 'Compare tests, controls, review, and support terms.', href: '/provider-vetting' },
      { title: 'Philippines hiring guide', description: 'Build the role, paid test, and first-month review.', href: '/research/hire-virtual-assistant-philippines-guide' }
    ],
    sources
  } as const;
}

export const researchBatch20260729Posts = topics.map(makePost);
