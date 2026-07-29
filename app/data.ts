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


export const comparisonRows = [
  { option: 'Freelance VA', bestFor: 'Low-risk admin tasks, short projects, and teams that can train directly.', ask: 'Who covers sick days, missed shifts, and quality checks?' },
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


export const faqs = [
  { q: 'What is the best virtual assistant service?', a: 'The best service depends on the work. A simple admin role may fit a freelance VA. Customer support, CRM, or phone work often needs a managed provider with training, backup, and quality checks.' },
  { q: 'How much should I budget for a virtual assistant?', a: 'Budget depends on the role, hours, country, management help, and coverage needs. Compare the task scope and support model before you compare price.' },
  { q: 'What should I delegate first?', a: 'Start with repeatable tasks: inbox sorting, calendar cleanup, CRM updates, simple reports, appointment setting, order checks, or first-draft replies.' },
  { q: 'Should I hire a VA or an employee?', a: 'Use a VA when the work is repeatable and remote-friendly. Hire an employee when the role needs in-person work, sensitive judgment, or deep internal ownership.' },
];

export const guideSources = [
  { name: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/oes/current/oes436014.htm', note: 'Reference point for U.S. administrative assistant wage context.' },
  { name: 'SBA hiring guidance', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'General hiring and employee-management guidance for small businesses.' },
  { name: 'NIST small business cybersecurity', url: 'https://www.nist.gov/itl/smallbusinesscyber', note: 'Useful baseline for password, access, and data-safety planning.' },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  keyTakeaways: string[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  faq: { q: string; a: string }[];
  sources?: { name: string; url: string; note?: string }[];
};

export const blogPosts: BlogPost[] = [];

export const allPaths = ['/', '/blog', '/contact', '/compare', '/provider-vetting', '/privacy', '/terms', '/thank-you', '/alternatives', ...blogPosts.map((p) => `/blog/${p.slug}`)];

export const staffingOffer = {
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'a task list written as one clear role with limits and owner-only decisions',
    'the skills, schedule, tools, and communication needs a candidate must match',
    'questions about SOPs, reporting, review, and safe tool access',
    'the management and replacement support you should ask a provider to explain',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality while the person is learning the role?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingFitNote = 'Every staffing plan depends on the role, schedule, tools, and the amount of management you can provide. Your answers help a staffing partner see whether the request fits.';
