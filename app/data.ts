export const site = {
  domain: 'BestVirtualAssistantServices.com',
  url: 'https://bestvirtualassistantservices.com',
  slug: 'bestvirtualassistantservices',
  brand: 'Best Virtual Assistant Services',
  primary: 'best virtual assistant services',
  audience: 'buyers comparing VA service companies, plans, role scope, and use cases',
  angle: 'plain-English comparisons and checklists for picking the best VA service for each role',
  color: '#0891b2',
  accent: '#4d7c0f'
} as const;

export const roles = ['Executive assistant', 'Customer support assistant', 'Lead follow-up assistant', 'Operations assistant', 'Bookkeeping support assistant', 'CRM assistant'] as const;
export const industries = ['real estate', 'healthcare offices', 'legal teams', 'ecommerce stores', 'coaches and agencies', 'home services'] as const;

export const stats = [
  { label: 'Role clarity', value: 'Scope first', note: 'the right plan depends on tasks, schedule, skill, tools, and management needs' },
  { label: 'Common ramp time', value: '7-21 days', note: 'Faster ramps need sample work, tool access, and review time.' },
  { label: 'Best first handoff', value: '5-10 tasks', note: 'A short repeatable list beats a vague all-purpose role.' },
];

export const comparisonRows = [
  { option: 'Freelance marketplace VA', bestFor: 'Low-risk admin tasks, short projects, and teams that can train directly.', ask: 'Who covers sick days, missed shifts, and quality checks?' },
  { option: 'Managed virtual assistant service', bestFor: 'Recurring support where screening, backup, and replacement help matter.', ask: 'Who manages the assistant each week, and what does replacement support include?' },
  { option: 'Specialist VA agency', bestFor: 'Customer support, real estate, legal admin, healthcare admin, ecommerce, or sales ops.', ask: 'Show examples of the exact role, tools, and scripts you have supported.' },
  { option: 'Local employee', bestFor: 'In-person tasks, sensitive judgment calls, or roles needing deep company context.', ask: 'Is the workload steady enough to justify payroll, benefits, and management time?' },
];

export const vettingSteps = [
  { title: 'Write the job in plain words', text: 'List the tools, task volume, hours, and the decisions the assistant cannot make.' },
  { title: 'Ask for role examples', text: 'A good provider can explain similar work, training steps, and common failure points.' },
  { title: 'Run a small paid test', text: 'Use 3 to 5 real tasks. Check accuracy, speed, notes, and when they ask for help.' },
  { title: 'Score the first week', text: 'Review missed items, customer impact, response time, and whether the handoff got easier.' },
];

export const providerQuestions = [
  'Who screens the assistant and what do you test?',
  'Who trains the assistant on our tools and examples?',
  'What happens if the assistant is sick, quits, or is not a fit?',
  'How are passwords, customer data, refunds, and approvals handled?',
  'Can we start with a small pilot before adding more hours?',
  'What reports or scorecards do we see each week?',
];

export const reviewCriteria = [
  { label: 'Screening', score: '25%', note: 'Role tests, writing samples, reference checks, and tool comfort.' },
  { label: 'Management help', score: '25%', note: 'Who checks the work, handles misses, and replaces a poor fit.' },
  { label: 'Security basics', score: '20%', note: 'Password sharing rules, least-access setup, and customer-data boundaries.' },
  { label: 'Role match', score: '20%', note: 'Proof the provider has staffed the same kind of assistant before.' },
  { label: 'Pilot terms', score: '10%', note: 'A small paid test before a long contract or bigger hour block.' },
] as const;

export const homepageImages = {
  hero: {
    url: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80',
    alt: 'Business owner reviewing virtual assistant service notes on a laptop',
  },
  scorecard: {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
    alt: 'Editorial team comparing provider scorecards on a conference table',
  },
  comparisonDesk: {
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    alt: 'Review desk with notes, rating sheets, and laptop used to compare assistant providers',
  },
} as const;

export const shortlistCards = [
  {
    rank: 'Best for busy owners',
    title: 'Managed VA service',
    score: '4.8',
    fit: 'Recurring admin, inbox, calendar, calls, and follow-up when you want help with matching and backup.',
    proof: 'Ask for the manager path, replacement terms, weekly reports, and a small pilot before a long agreement.',
    href: '/provider-vetting',
  },
  {
    rank: 'Best for simple projects',
    title: 'Freelance VA',
    score: '4.1',
    fit: 'Short task lists, cleanup work, research, data entry, and owners who can train the assistant directly.',
    proof: 'Use sample tasks, time limits, and shared examples. Keep account access narrow at first.',
    href: '/blog/tasks-to-delegate-first',
  },
  {
    rank: 'Best for customer work',
    title: 'Specialist assistant team',
    score: '4.5',
    fit: 'Support tickets, ecommerce replies, lead follow-up, real estate admin, or phone-heavy roles.',
    proof: 'Look for scripts, escalation rules, coverage plans, and examples from the same type of role.',
    href: '/compare',
  },
] as const;

export const faqs = [
  { q: 'What is the best virtual assistant service?', a: 'The best service depends on the work. A simple admin role may fit a freelance VA. Customer support, CRM, or phone work often needs a managed provider with training, backup, and quality checks.' },
  { q: 'How much should I budget for a virtual assistant?', a: 'Budget depends on the role, hours, country, management help, and coverage needs. Compare the task scope and support model before you compare price.' },
  { q: 'What should I delegate first?', a: 'Start with repeatable tasks: inbox sorting, calendar cleanup, CRM updates, simple reports, appointment setting, order checks, or first-draft replies.' },
  { q: 'Should I hire a VA or an employee?', a: 'Use a VA when the work is repeatable and remote-friendly. Hire an employee when the role needs in-person work, sensitive judgment, or deep internal ownership.' },
];

export const sourcePlaceholders = [
  { name: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/oes/current/oes436014.htm', note: 'Reference point for U.S. administrative assistant wage context.' },
  { name: 'SBA hiring guidance', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'General hiring and employee-management guidance for small businesses.' },
  { name: 'NIST small business cybersecurity', url: 'https://www.nist.gov/itl/smallbusinesscyber', note: 'Useful baseline for password, access, and data-safety planning.' },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faq: { q: string; a: string }[];
  sources?: { name: string; url: string; note?: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'virtual-assistant-planning',
    title: 'How much should you budget for a virtual assistant?',
    excerpt: 'A plain guide to role scope, staffing models, and launch planning.',
    minutes: 7,
    sections: [
      { heading: 'The short answer', body: 'Budget depends on the role, hours, country, management help, and coverage needs. U.S.-based assistants, specialist roles, and managed services usually need a larger budget than simple overseas admin help.' },
      { heading: 'What changes the plan', body: 'Plan moves up when the role needs phone work, strong writing, bookkeeping support, sales tools, healthcare or legal admin care, weekend coverage, or a manager checking the work.', bullets: ['Basic admin is usually cheaper than customer-facing work.', 'Part-time help may have a higher published rate than full-time help.', 'Managed services may include screening, backup, and replacement help.'] },
      { heading: 'A safer way to compare quotes', body: 'Ask each provider to quote the same task list. Include hours, tools, response time, call coverage, and who checks quality. A cheap quote is not cheap if you spend every day fixing work.' },
      { heading: 'Simple budget example', body: 'If you need 20 hours per week, ask each provider to quote the same task list. Separate labor, management fees, tools, training time, and backup coverage. Start with a pilot before you lock in a larger plan.' },
    ],
    faq: [
      { q: 'Is a monthly plan better than public?', a: 'Monthly plans can work when the task list is steady. Hourly plans are safer when you are still learning the real workload.' },
      { q: 'Why are managed VA services more expensive?', a: 'They may include recruiting, training help, backup coverage, account management, and replacement support.' },
    ],
    sources: sourcePlaceholders,
  },
  {
    slug: 'tasks-to-delegate-first',
    title: 'What tasks should you delegate first?',
    excerpt: 'Start with repeatable admin, follow-up, inbox, CRM, and scheduling work.',
    minutes: 6,
    sections: [
      { heading: 'Start with tasks that repeat', body: 'The best first tasks happen every day or every week and have clear examples. Do not start with fuzzy strategy work. Start with work you can explain, check, and improve.' },
      { heading: 'Good first VA tasks', body: 'These tasks are usually easier to train because they have a clear before and after.', bullets: ['Inbox labels and simple draft replies', 'Calendar cleanup and appointment reminders', 'CRM updates after calls', 'Lead list cleanup', 'Customer support first replies', 'Order checks and simple reports'] },
      { heading: 'Tasks to keep with the owner', body: 'Keep pricing decisions, refunds, hiring choices, legal advice, medical judgment, and account approvals with the owner or licensed professional. The assistant can prepare information, but you decide.' },
      { heading: 'Use a 5-task pilot', body: 'Pick 5 recurring tasks for the first week. Give examples, show the tool, record one short walkthrough, and review the work at the same time each day.' },
    ],
    faq: [
      { q: 'How many tasks should I delegate at first?', a: 'Five to ten is enough. More than that can hide mistakes and make training messy.' },
      { q: 'Can a VA handle customer messages?', a: 'Yes, if you give scripts, examples, refund rules, escalation rules, and a clear quality check.' },
    ],
    sources: sourcePlaceholders,
  },
  {
    slug: 'virtual-assistant-vs-employee',
    title: 'Virtual assistant vs employee: which is better?',
    excerpt: 'When to hire in-house and when a managed assistant is the safer first step.',
    minutes: 8,
    sections: [
      { heading: 'The simple rule', body: 'Use a virtual assistant when the work is remote, repeatable, and easy to check. Hire an employee when the role needs in-person work, deep company judgment, or daily ownership of sensitive decisions.' },
      { heading: 'Where a VA fits best', body: 'A VA can help with admin, scheduling, CRM updates, support replies, research, reporting, document cleanup, and follow-up. The owner should still set priorities and review risky work.' },
      { heading: 'Where an employee fits better', body: 'An employee may be better for roles with in-person customer work, sensitive financial authority, private judgment calls, or work that changes all day without a checklist.' },
      { heading: 'How to decide', body: 'Write the task list. Mark each task as repeatable, sensitive, customer-facing, or owner-only. If most work is repeatable and remote, test a VA. If most work needs judgment and authority, hire closer to the business.' },
    ],
    faq: [
      { q: 'Can a VA replace a full-time employee?', a: 'Sometimes for admin-heavy roles, but it is safer to test a clear scope first.' },
      { q: 'Is a VA cheaper than an employee?', a: 'Often, but plan is not the only issue. Training, quality control, backup, and security matter too.' },
    ],
    sources: sourcePlaceholders,
  },
  {
    slug: 'assistant-onboarding-checklist',
    title: 'Assistant onboarding checklist',
    excerpt: 'A simple first-week checklist for logins, SOPs, calls, QA, and scorecards.',
    minutes: 9,
    sections: [
      { heading: 'Before day one', body: 'Create a short task list, gather examples, decide tool access, and record one walkthrough. Remove any access the assistant does not need.' },
      { heading: 'Day one setup', body: 'Walk through the role, tools, examples, and escalation rules. Ask the assistant to repeat the task steps back to you in their own words.' },
      { heading: 'First-week scorecard', body: 'Check the same simple measures each day.', bullets: ['Work completed', 'Missed steps', 'Questions asked', 'Customer risk', 'Response time', 'One fix for tomorrow'] },
      { heading: 'End of week review', body: 'Keep what worked, remove confusing tasks, improve examples, and decide whether to add hours. A good first week should make the next week easier.' },
    ],
    faq: [
      { q: 'How long does onboarding take?', a: 'Simple admin roles can ramp in 7 to 21 days when examples and access are ready.' },
      { q: 'Should I share all logins on day one?', a: 'No. Start with the least access needed and add permissions only after the assistant proves the first tasks.' },
    ],
    sources: sourcePlaceholders,
  },
];

export const allPaths = ['/', '/blog', '/contact', '/compare', '/provider-vetting', '/privacy', '/terms', '/thank-you', ...blogPosts.map((p) => `/blog/${p.slug}`)];

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
