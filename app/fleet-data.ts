export type FleetService = { slug: string; title: string; desc: string; tasks: readonly string[]; controls: readonly string[]; firstWeek: readonly string[] };
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
};

export const fleetServices: readonly FleetService[] = [
  { slug: 'executive-calendar-management', title: 'Executive Calendar Management', desc: 'Build a Philippines-based executive calendar management workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring virtual assistant work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'inbox-and-correspondence-support', title: 'Inbox and Correspondence Support', desc: 'Build a Philippines-based inbox and correspondence support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring virtual assistant work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'travel-planning-assistance', title: 'Travel Planning Assistance', desc: 'Build a Philippines-based travel planning assistance workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring virtual assistant work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'crm-administration', title: 'CRM Administration', desc: 'Build a Philippines-based crm administration workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring virtual assistant work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'sales-pipeline-support', title: 'Sales Pipeline Support', desc: 'Build a Philippines-based sales pipeline support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring virtual assistant work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'customer-inbox-support', title: 'Customer Inbox Support', desc: 'Build a Philippines-based customer inbox support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring virtual assistant work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'ecommerce-operations-assistance', title: 'Ecommerce Operations Assistance', desc: 'Build a Philippines-based ecommerce operations assistance workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring virtual assistant work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'podcast-production-coordination', title: 'Podcast Production Coordination', desc: 'Build a Philippines-based podcast production coordination workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring virtual assistant work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'real-estate-transaction-support', title: 'Real Estate Transaction Support', desc: 'Build a Philippines-based real estate transaction support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring virtual assistant work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'legal-administrative-assistance', title: 'Legal Administrative Assistance', desc: 'Build a Philippines-based legal administrative assistance workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring virtual assistant work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] }
];

export const researchPosts: readonly ResearchPost[] = [
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
      'The safest first hire owns repeatable work while a client-side manager keeps pricing, refunds, legal judgment, money movement, and final approvals.'
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
          { text: 'IBPAP says that, as of July 2023, 30–40% of employees at its member companies worked remotely and 60–70% worked onsite. This is first-party context from the wider Philippine IT and business-process industry, not a count of freelance virtual assistants or a promise about any staffing provider.', citations: [5] },
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
          { text: 'An hourly number is not a complete service price. Ask whether the quote includes recruiting, screening, management, replacement support, backup coverage, software, equipment, overtime, local holidays, payment costs, and any minimum term.' },
          { text: 'This site publishes three Philippines-based hourly tiers: $10 for executive-assistant support, $15 for senior-assistant support, and $18 for C-suite or operations support. Review the current scope on the pricing page, then use the same task brief when comparing any other quote so the numbers describe similar work.' },
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
          { text: 'During days 1–3, teach one small task set with examples and dummy records. Confirm access, escalation rules, schedule, and the person who approves exceptions before live customer or financial data is used.' },
          { text: 'During days 4–10, review every completed item at a fixed time and record the reasons for misses. Improve the instruction or example when the process is unclear, and coach the assistant when the written step was clear but not followed.' },
          { text: 'During days 11–20, reduce review only for tasks that stay accurate. Keep higher-risk work behind approval and do not add a new system merely because basic tasks are going well.' },
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
        ['Remote share in IBPAP member firms', '30–40% remote (July 2023)', 'No equivalent used', 'Candidate workspace, schedule, device, privacy, and provider controls']
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
      { q: 'How much does a Filipino virtual assistant cost?', a: "The answer depends on role level, schedule, management, tools, backup, and replacement support. This site's current Philippines-based tiers are $10, $15, and $18 per hour. Compare the full written scope rather than one rate." },
      { q: 'How do I vet a Filipino virtual assistant?', a: "Start with one written role, ask for matching examples, and run a short paid test with dummy data. Then verify the candidate's connection, power backup, device, schedule, references, access rules, and first-month review plan." },
      { q: 'Can a Filipino virtual assistant safely handle customer data?', a: 'Remote access can be managed safely only when the buyer sets proper controls and the assistant follows them. Use named accounts, least privilege, multi-factor authentication, written escalation rules, activity review, and an offboarding checklist before sharing sensitive data.', citations: [7, 9, 10] }
    ],
    relatedLinks: [
      { title: 'Virtual assistant budget planning', description: 'Compare role scope, staffing models, and the parts of a quote that change the real cost.', href: '/blog/virtual-assistant-planning' },
      { title: 'Assistant onboarding checklist', description: 'Turn the first week into a clear sequence for access, examples, reviews, and scorecards.', href: '/blog/assistant-onboarding-checklist' },
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
  }
];

export const postsPerPage = 20;
