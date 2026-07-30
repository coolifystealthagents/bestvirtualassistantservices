export const virtualAssistantPhilippinesCrmAdministrationPost = {
  slug: 'virtual-assistant-philippines-crm-administration-guide',
  primaryKeyword: 'virtual assistant philippines crm administration',
  noPricing: true,
  title: 'Virtual Assistant Philippines: CRM Administration Guide',
  excerpt: 'A practical guide to testing and managing a Philippines-based virtual assistant for CRM records, duplicate checks, sales handoffs, access limits, and first-month review.',
  published: '2026-07-28',
  modified: '2026-07-28',
  readingMinutes: 15,
  revision: '2026-07-28-virtual-assistant-philippines-crm-administration-v1',
  keyTakeaways: [
    'Write field rules and owner decisions before an assistant edits live CRM records.',
    'Test record matching, duplicate handling, source notes, and exception judgment with dummy data.',
    'Use named accounts, limited permissions, multi-factor authentication, and a written removal list.',
    'Keep lead qualification, stage definitions, forecasts, deletions, exports, and final sales decisions with the client owner.'
  ],
  stats: [
    { value: '59.5%', label: 'Services employment', note: 'Philippine employment in services in 2025.', citation: 1 },
    { value: '67.3%', label: 'Internet use', note: 'People in the Philippines using the internet in 2024.', citation: 2 },
    { value: '47.4%', label: 'Tertiary enrollment', note: 'Gross tertiary enrollment in the Philippines in 2024.', citation: 3 },
    { value: '98.5%', label: 'Adult literacy', note: 'Latest Philippine observation in the World Bank series, from 2020.', citation: 4 }
  ],
  sections: [
    {
      heading: 'Give the CRM role a narrow first job',
      paragraphs: [
        { text: 'A CRM administration assistant can create records from approved sources, clean agreed fields, check possible duplicates, log contact activity, and prepare exception queues. The client owner should define stages, decide which records may be merged or deleted, approve bulk changes, control exports, and make sales judgments.' },
        { text: 'Start with one record type, such as inbound contacts from a web form or event list. Name the source, required fields, matching rules, allowed edits, review person, daily volume, completion time, and the exact conditions that make the assistant stop.' }
      ]
    },
    {
      heading: 'Use Philippines data as context, not a CRM score',
      paragraphs: [
        { text: 'World Bank data reports that 59.5% of Philippine employment was in services in 2025. It also reports internet use at 67.3% in 2024, gross tertiary enrollment at 47.4% in 2024, and adult literacy at 98.5% in 2020.', citations: [1, 2, 3, 4] },
        { text: 'These figures help describe the setting for remote service work, but they do not measure CRM accuracy, product knowledge, writing, schedule fit, or care with customer records. Check those skills with a role-specific work sample and direct questions about the candidate’s equipment, connection, experience, and review habits.' }
      ]
    },
    {
      heading: 'Write a field map before opening the live database',
      paragraphs: [
        { text: 'A field map tells the assistant where each value comes from, what format it uses, and who may change it. For example, the company name may come from the signed account record, while a phone number may come from the latest customer message and a sales stage may be locked to the client owner.' },
        { text: 'Give every important field an allowed source and a rule for missing or conflicting data. If a form, email, call note, spreadsheet, and existing CRM record disagree, the assistant should place the item in an exception queue rather than choose the value that looks most likely.' }
      ],
      bullets: [
        'Record type, source, required fields, and accepted format',
        'Match fields for possible duplicates and the person who decides merges'
      ]
    },
    {
      heading: 'Test the assistant with a small dummy CRM',
      paragraphs: [
        { text: 'Build a test set with fictional names and companies, then give every candidate the same written rules. Include two similar company names, one shared email domain, a contact who changed employers, a blank required field, a conflicting phone number, and a record that appears twice with different owners.' },
        { text: 'Ask the candidate to return the cleaned file, a change log, a possible-duplicate list, and a short exception note. Score field accuracy, source use, matching logic, written notes, questions asked, and whether the candidate leaves uncertain records untouched.' }
      ]
    },
    {
      heading: 'Run a daily queue that a manager can review',
      paragraphs: [
        { text: 'Split the daily queue into new records, approved updates, possible duplicates, returned errors, and owner questions. Each item should have a source, received time, assigned person, status, last action, and next review date so unfinished work does not disappear inside a private note.' },
        { text: 'Use a short handoff that names the record and the blocker. A useful note might say, "The form and existing contact use the same email, but the company names and owners differ. I did not merge or reassign either record, and I placed both links in the duplicate queue for the CRM owner."' }
      ]
    },
    {
      heading: 'Protect customer records and bulk actions',
      paragraphs: [
        { text: 'CRM records may contain names, email addresses, phone numbers, job details, messages, buying history, support notes, and links to other systems. Give the assistant a named account, turn on multi-factor authentication, limit object and field permissions, and keep user management, exports, bulk deletion, system settings, and connected-app approval outside the role.', citations: [5, 6, 7, 8] },
        { text: 'The Philippine Data Privacy Act sets duties around lawful processing, security, transparency, and accountability for personal information. It does not design a company’s CRM process, so the buyer still needs suitable agreements, written handling rules, training, review, and an incident plan for the records the assistant can reach.', citations: [6] }
      ]
    },
    {
      heading: 'Review the first month in three stages',
      paragraphs: [
        { text: 'During days 1 through 3, use dummy records and teach the field map, source rules, duplicate queue, note format, access limits, and exception owner. Check every edit and ask the assistant to explain why each source supports the selected value.' },
        { text: 'During days 4 through 10, allow live work on one approved record type and review every completed item. Track field errors, duplicate misses, unsupported changes, unclear notes, review time, questions, and any rule that two people read in different ways.' },
        { text: 'During days 11 through 30, compare the work with the starting scorecard and decide whether to keep, narrow, or expand the role. Use observed accuracy, exception judgment, queue age, manager review time, security behavior, and sales-team feedback instead of a broad claim about Philippines-based talent.' }
      ]
    }
  ],
  comparisonTable: {
    caption: 'A CRM ownership plan for a Philippines-based virtual assistant',
    headers: ['CRM step', 'Assistant may do', 'Client checks', 'Stop and escalate when'],
    rows: [
      ['Read the source', 'Identify the record type, source, required fields, owner, and received time', 'Source is approved and the field map fits the record', 'The source is unknown, incomplete, or outside the written scope'],
      ['Check existing records', 'Search approved match fields and list possible duplicates', 'Match logic, account relationship, owner, and prior activity', 'Records conflict or a merge, deletion, or reassignment may be needed'],
      ['Prepare the update', 'Enter allowed values, keep source notes, and use reason codes', 'Field format, source support, locked fields, and approval state', 'A value needs judgment or the sources disagree'],
      ['Submit for review', 'Return completed items and a separate exception queue', 'Accuracy sample, every exception, and any repeated error', 'A bulk change, export, forecast, or system setting is involved'],
      ['Close the handoff', 'Record the reviewer, decision, correction, and next action', 'Open items, queue age, access, and audit trail', 'Customer harm, account misuse, or a privacy incident may have occurred']
    ]
  },
  expertQuote: {
    quote: 'To prevent breaches when people are teleworking, organizations need to have stronger control over their sensitive data that can be accessed by, or stored on, telework devices',
    person: 'Murugiah Souppaya',
    title: 'NIST computer scientist',
    sourceId: 5
  },
  chart: {
    title: 'Philippines workforce and digital context indicators',
    unit: 'Share (%)',
    method: 'The bars use the latest cited World Bank observations shown in this guide. They cover different years and populations, so they are context only and are not combined into a CRM, language, or hiring score.',
    items: [
      { label: 'Services employment', value: 59.5, display: '59.5%', year: '2025', citation: 1 },
      { label: 'Internet use', value: 67.3, display: '67.3%', year: '2024', citation: 2 },
      { label: 'Tertiary enrollment', value: 47.4, display: '47.4%', year: '2024', citation: 3 },
      { label: 'Adult literacy', value: 98.5, display: '98.5%', year: '2020', citation: 4 }
    ]
  },
  graphic: {
    title: 'The CRM record handoff',
    steps: [
      { label: 'Assistant prepares', detail: 'Check the approved source, find possible matches, enter allowed fields, and list exceptions.' },
      { label: 'Reviewer checks', detail: 'Check field accuracy, source notes, duplicate risk, record owner, and locked decisions.' },
      { label: 'Owner decides', detail: 'Approve merges, deletions, reassignments, bulk changes, exports, and sales rules.' }
    ],
    note: 'A record moves forward only when its source, match check, allowed edits, review state, and next owner are clear.'
  },
  banners: [
    { eyebrow: 'Role scope', title: 'Write the CRM job before you hire', text: 'Bring one record type, source list, field map, duplicate rules, review steps, and owner-only decisions. We can help shape a Philippines-based role.', href: '/contact-us', linkLabel: 'Discuss the CRM role' },
    { eyebrow: 'Provider check', title: 'Ask how CRM work is tested and reviewed', text: 'Use the same questions to compare work samples, account limits, quality checks, manager support, and replacement handling.', href: '/provider-vetting', linkLabel: 'Open the vetting guide' },
    { eyebrow: 'Related service', title: 'See the CRM administration task lane', text: 'Review a Philippines-based service page with recurring record tasks, access controls, and a first-week plan.', href: '/services/crm-administration', linkLabel: 'Review CRM support' }
  ],
  methodology: [
    { text: 'This guide uses direct World Bank series for dated Philippines context, the text of the Philippine Data Privacy Act, and guidance from NIST and CISA. We checked the source pages on July 28, 2026 and kept each observation year visible.', citations: [1, 2, 3, 4, 5, 6, 7, 8] },
    { text: 'The field map, dummy CRM test, ownership table, daily queue, handoff note, and first-month stages are house rules for buyer planning. They are not legal advice, security certification, sales advice, or proof that one person or staffing provider will perform well.' },
    { text: 'Country indicators cover different years and broad populations. They do not measure virtual assistant headcount, CRM skill, record accuracy, schedule fit, connection stability, or the quality of this site.' }
  ],
  faq: [
    { q: 'What CRM tasks can a Philippines-based virtual assistant handle?', a: 'An assistant can create records from approved sources, clean agreed fields, check possible duplicates, log activity, prepare exception queues, and record handoffs. Keep stage rules, merges, deletions, reassignments, exports, forecasts, system settings, and final sales decisions with the client owner.' },
    { q: 'How should I test a CRM administration assistant?', a: 'Use dummy records with missing fields, conflicting sources, similar companies, changed employers, and possible duplicates. Score field accuracy, source use, matching logic, notes, questions, and whether the candidate stops instead of guessing.' },
    { q: 'How should CRM access be set up?', a: 'Give the assistant a named account with multi-factor authentication and only the objects, fields, and actions needed for approved work. Keep user management, integrations, exports, bulk deletion, system settings, and unrelated customer records outside that account.', citations: [5, 6, 7, 8] },
    { q: 'What should a manager review during the first month?', a: 'Review every edit and exception at first, including source support, field format, duplicate checks, owner, note quality, and approval state. Reduce checks only after one record type stays accurate, and return to full review after a serious miss or rule change.' }
  ],
  relatedLinks: [
    { title: 'CRM administration service', description: 'See recurring tasks, client controls, and a first-week plan for a Philippines-based CRM role.', href: '/services/crm-administration' },
    { title: 'Provider vetting guide', description: 'Ask consistent questions about tests, account limits, manager support, and quality review.', href: '/provider-vetting' },
    { title: 'Data entry quality control guide', description: 'Use source rules, validation checks, exception queues, and reviewer ownership for repeated data work.', href: '/research/philippines-virtual-assistant-data-entry-quality-control-guide' }
  ],
  sources: [
    { id: 1, name: 'World Bank', title: 'Employment in services (% of total employment), Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SL.SRV.EMPL.ZS?format=json&per_page=100', scope: 'Philippines evidence' },
    { id: 2, name: 'World Bank', title: 'Individuals using the Internet (% of population), Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&per_page=100', scope: 'Philippines evidence' },
    { id: 3, name: 'World Bank', title: 'School enrollment, tertiary (% gross), Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SE.TER.ENRR?format=json&per_page=100', scope: 'Philippines evidence' },
    { id: 4, name: 'World Bank', title: 'Adult literacy (% of people ages 15 and above), Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/SE.ADT.LITR.ZS?format=json&per_page=100', scope: 'Philippines evidence' },
    { id: 5, name: 'National Institute of Standards and Technology', title: 'Attackers Honing In On Teleworkers? How Organizations Can Secure Their Data', url: 'https://www.nist.gov/news-events/news/2016/03/attackers-honing-teleworkers-how-organizations-can-secure-their-data', scope: 'Buyer security standard' },
    { id: 6, name: 'Congress of the Philippines via Lawphil', title: 'Republic Act No. 10173: Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', scope: 'Philippines evidence' },
    { id: 7, name: 'National Institute of Standards and Technology', title: 'Guide to Enterprise Telework, Remote Access, and Bring Your Own Device Security', url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final', scope: 'Buyer security standard' },
    { id: 8, name: 'Cybersecurity and Infrastructure Security Agency', title: 'Multi-Factor Authentication (MFA)', url: 'https://www.cisa.gov/resources-tools/resources/multi-factor-authentication-mfa', scope: 'Buyer security standard' }
  ]
} as const;
