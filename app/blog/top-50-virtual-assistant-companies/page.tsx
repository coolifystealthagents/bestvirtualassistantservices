import type { Metadata } from 'next';
import { Footer, Header } from '../../components';
import styles from './comparison.module.css';

const companies = [
  {
    "name": "Stealth Agents",
    "domain": "StealthAgents.com",
    "url": "https://stealthagents.com/",
    "category": "Managed virtual assistance"
  },
  {
    "name": "Virtual Assistant Provider",
    "domain": "VirtualAssistantProvider.com",
    "url": "https://virtualassistantprovider.com/",
    "category": "General virtual assistance"
  },
  {
    "name": "Overseas Virtual Assistant",
    "domain": "OverseasVirtualAssistant.com",
    "url": "https://overseasvirtualassistant.com/",
    "category": "General virtual assistance"
  },
  {
    "name": "Outsourcing Assistant",
    "domain": "OutsourcingAssistant.com",
    "url": "https://outsourcingassistant.com/",
    "category": "General virtual assistance"
  },
  {
    "name": "CEO Executive Assistant",
    "domain": "CEOExecutiveAssistant.com",
    "url": "https://ceoexecutiveassistant.com/",
    "category": "Executive support"
  },
  {
    "name": "Executive Assistant Virtual",
    "domain": "ExecutiveAssistantVirtual.com",
    "url": "https://executiveassistantvirtual.com/",
    "category": "Executive support"
  },
  {
    "name": "Executive Support Staff",
    "domain": "ExecutiveSupportStaff.com",
    "url": "https://executivesupportstaff.com/",
    "category": "Executive support"
  },
  {
    "name": "Family Office Assistant",
    "domain": "FamilyOfficeAssistant.com",
    "url": "https://familyofficeassistant.com/",
    "category": "Executive support"
  },
  {
    "name": "Remote Executive Support",
    "domain": "RemoteExecutiveSupport.com",
    "url": "https://remoteexecutivesupport.com/",
    "category": "Executive support"
  },
  {
    "name": "Executive Assistant Agency",
    "domain": "ExecutiveAssistantAgency.com",
    "url": "https://executiveassistantagency.com/",
    "category": "Executive support"
  },
  {
    "name": "IT Virtual Assistant",
    "domain": "ITVirtualAssistant.com",
    "url": "https://itvirtualassistant.com/",
    "category": "Technology support"
  },
  {
    "name": "Legal Executive Assistant",
    "domain": "LegalExecutiveAssistant.com",
    "url": "https://legalexecutiveassistant.com/",
    "category": "Legal support"
  },
  {
    "name": "Outsourced Helpdesk Services",
    "domain": "OutsourcedHelpdeskServices.com",
    "url": "https://outsourcedhelpdeskservices.com/",
    "category": "Help desk"
  },
  {
    "name": "Dispensary VA",
    "domain": "DispensaryVA.com",
    "url": "https://dispensaryva.com/",
    "category": "Retail support"
  },
  {
    "name": "Scheduling Appointment",
    "domain": "SchedulingAppointment.com",
    "url": "https://schedulingappointment.com/",
    "category": "Sales support"
  },
  {
    "name": "Answering Service Staff",
    "domain": "AnsweringServiceStaff.com",
    "url": "https://answeringservicestaff.com/",
    "category": "Phone support"
  },
  {
    "name": "Recruiting Agencies",
    "domain": "Recruiting-Agencies.com",
    "url": "https://recruiting-agencies.com/",
    "category": "Recruiting"
  },
  {
    "name": "Operations Executive Assistant",
    "domain": "OperationsExecutiveAssistant.com",
    "url": "https://operationsexecutiveassistant.com/",
    "category": "Operations"
  },
  {
    "name": "InsuranceYo",
    "domain": "InsuranceYo.com",
    "url": "https://insuranceyo.com/",
    "category": "Insurance"
  },
  {
    "name": "Dental Receptionists",
    "domain": "Dental-Receptionists.com",
    "url": "https://dental-receptionists.com/",
    "category": "Dental support"
  },
  {
    "name": "Assistant Staffing",
    "domain": "AssistantStaffing.com",
    "url": "https://assistantstaffing.com/",
    "category": "General staffing"
  },
  {
    "name": "Customer Care Staff",
    "domain": "CustomerCareStaff.com",
    "url": "https://customercarestaff.com/",
    "category": "Customer support"
  },
  {
    "name": "QBO Assistant",
    "domain": "QBOAssistant.com",
    "url": "https://qboassistant.com/",
    "category": "Finance support"
  },
  {
    "name": "Outsourced Programmers",
    "domain": "OutsourcedProgrammers.com",
    "url": "https://outsourcedprogrammers.com/",
    "category": "Development"
  },
  {
    "name": "Staffing Care Home",
    "domain": "StaffingCareHome.com",
    "url": "https://staffingcarehome.com/",
    "category": "Care operations"
  },
  {
    "name": "Legal Services Offshore",
    "domain": "LegalServicesOffshore.com",
    "url": "https://legalservicesoffshore.com/",
    "category": "Legal support"
  },
  {
    "name": "Property Management Biz",
    "domain": "PropertyManagementBiz.com",
    "url": "https://propertymanagementbiz.com/",
    "category": "Real estate"
  },
  {
    "name": "Bookkeeping Staff",
    "domain": "BookkeepingStaff.com",
    "url": "https://bookkeepingstaff.com/",
    "category": "Finance support"
  },
  {
    "name": "Logistics Trucks",
    "domain": "LogisticsTrucks.com",
    "url": "https://logisticstrucks.com/",
    "category": "Logistics"
  },
  {
    "name": "Call Center Outsourced",
    "domain": "CallCenterOutsourced.com",
    "url": "https://callcenteroutsourced.com/",
    "category": "Phone support"
  },
  {
    "name": "Website Design Outsource",
    "domain": "WebsiteDesignOutsource.com",
    "url": "https://websitedesignoutsource.com/",
    "category": "Design and development"
  },
  {
    "name": "Global Distribution VA",
    "domain": "GlobalDistributionVA.com",
    "url": "https://globaldistributionva.com/",
    "category": "Distribution"
  },
  {
    "name": "Trucking VA",
    "domain": "TruckingVA.net",
    "url": "https://truckingva.net/",
    "category": "Logistics"
  },
  {
    "name": "Developer Offshore",
    "domain": "DeveloperOffshore.com",
    "url": "https://developeroffshore.com/",
    "category": "Development"
  },
  {
    "name": "Dental Office VA",
    "domain": "DentalOfficeVA.com",
    "url": "https://dentalofficeva.com/",
    "category": "Dental support"
  },
  {
    "name": "Landman Business",
    "domain": "LandmanBusiness.com",
    "url": "https://landmanbusiness.com/",
    "category": "Real estate"
  },
  {
    "name": "Offshore Bookkeepers",
    "domain": "OffshoreBookkeepers.com",
    "url": "https://offshorebookkeepers.com/",
    "category": "Finance support"
  },
  {
    "name": "Portfolio Rental",
    "domain": "PortfolioRental.com",
    "url": "https://portfoliorental.com/",
    "category": "Real estate"
  },
  {
    "name": "Hire Construction Estimator",
    "domain": "HireConstructionEstimator.com",
    "url": "https://hireconstructionestimator.com/",
    "category": "Construction"
  },
  {
    "name": "STR Virtual Assistant",
    "domain": "STRVirtualAssistant.com",
    "url": "https://strvirtualassistant.com/",
    "category": "Hospitality"
  },
  {
    "name": "Peptide Staff",
    "domain": "PeptideStaff.com",
    "url": "https://peptidestaff.com/",
    "category": "Health and wellness"
  },
  {
    "name": "Outsourced Callers",
    "domain": "OutsourcedCallers.com",
    "url": "https://outsourcedcallers.com/",
    "category": "Phone support"
  },
  {
    "name": "Wealth Management Assistant",
    "domain": "WealthManagementAssistant.com",
    "url": "https://wealthmanagementassistant.com/",
    "category": "Finance support"
  },
  {
    "name": "Medical Office VA",
    "domain": "MedicalOfficeVA.com",
    "url": "https://medicalofficeva.com/",
    "category": "Medical support"
  },
  {
    "name": "Real Estates Luxury",
    "domain": "RealEstatesLuxury.com",
    "url": "https://realestatesluxury.com/",
    "category": "Real estate"
  },
  {
    "name": "Fitness VA",
    "domain": "Fitness-VA.com",
    "url": "https://fitness-va.com/",
    "category": "Health and wellness"
  },
  {
    "name": "Mobile Home Biz",
    "domain": "MobileHomeBiz.com",
    "url": "https://mobilehomebiz.com/",
    "category": "Real estate"
  },
  {
    "name": "Hire Back Office",
    "domain": "HireBackOffice.com",
    "url": "https://hirebackoffice.com/",
    "category": "Back office"
  },
  {
    "name": "Virtual Assistant Call Center",
    "domain": "VirtualAssistantCallCenter.com",
    "url": "https://virtualassistantcallcenter.com/",
    "category": "Phone support"
  },
  {
    "name": "Sales Support Staff",
    "domain": "SalesSupportStaff.com",
    "url": "https://salessupportstaff.com/",
    "category": "Sales support"
  }
] as const;
const articleUrl = 'https://bestvirtualassistantservices.com/blog/top-50-virtual-assistant-companies';
const title = 'Directory of 50 Virtual Assistant Service Companies';
const description = 'An unranked directory of 50 virtual assistant service company websites with a practical scope, management, security, and contract checklist.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { title, description, url: articleUrl, type: 'article', siteName: 'Best Virtual Assistant Services', images: [{ url: '/va-comparison-team.jpg', width: 1400, height: 933, alt: 'Team members comparing virtual assistant service options' }] },
};

const faqs = [
  { question: 'Is this directory a ranking?', answer: 'No. Companies are listed as a starting point for research, not scored or ranked. Inclusion does not imply endorsement.' },
  { question: 'Were all listed services purchased and tested?', answer: 'No. This directory links to public first-party websites. Confirm current scope, location, fees, management, security, and contract terms directly with each provider.' },
  { question: 'How should I compare providers?', answer: 'Give each provider the same written role brief. Compare the same hours, delivery model, manager duties, backup coverage, access controls, replacement terms, and total contract cost.' },
] as const;

export default function ComparisonArticle() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', '@id': `${articleUrl}#article`, headline: title, description, datePublished: '2026-07-28', dateModified: '2026-10-28', mainEntityOfPage: articleUrl, publisher: { '@type': 'Organization', name: 'Best Virtual Assistant Services', url: 'https://bestvirtualassistantservices.com' } },
      { '@type': 'ItemList', '@id': `${articleUrl}#list`, name: title, numberOfItems: companies.length, itemListOrder: 'https://schema.org/ItemListUnordered', itemListElement: companies.map((company, index) => ({ '@type': 'ListItem', position: index + 1, name: company.name, url: company.url })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bestvirtualassistantservices.com' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://bestvirtualassistantservices.com/blog' }, { '@type': 'ListItem', position: 3, name: title, item: articleUrl }] },
      { '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
    ],
  };

  return <>
    <Header />
    <main className={styles.page} data-content-profile="unranked-provider-directory" data-article-template="editorial-ledger">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.hero}><div className={styles.shell}><p className={styles.eyebrow}>Provider directory · Reviewed October 28, 2026</p><h1>{title}</h1><p className={styles.lead}>Use this unranked directory to find provider websites, then compare every candidate against the same written role, capacity, management, security, and contract requirements.</p><div className={styles.facts}><span><b>{companies.length}</b> first-party company websites</span><span><b>{new Set(companies.map((company) => company.category)).size}</b> service categories</span><span><b>Unranked</b> alphabetical and category-neutral research list</span></div></div></header>
      <article className={`${styles.shell} ${styles.body}`}>
        <section className={styles.method}><p className={styles.eyebrow}>Commercial relationship disclosure</p><h2>What this directory does and does not claim</h2><p>Best Virtual Assistant Services is powered by Stealth Agents and sends staffing inquiries to its team. Stealth Agents appears in this directory, but no provider is ranked or endorsed. Inclusion is not presented as paid placement.</p><p>We did not purchase or independently test every service. Provider names, categories, and destination links are a research starting point. Verify current claims and terms on each provider's first-party website before buying.</p></section>
        <nav className={styles.jump} aria-label="Directory sections"><a href="#company-list">Browse all companies</a><a href="#buyer-checklist">Use the comparison checklist</a><a href="#questions">Read common questions</a></nav>
        <section id="company-list" className={styles.companySection}><p className={styles.eyebrow}>Unranked company directory</p><h2>50 provider websites to research</h2><p className={styles.intro}>Ordering does not indicate quality, preference, or fit. Open the first-party site, record the date checked, and request a written proposal for your exact role.</p><ol className={styles.list}>{companies.map((company) => <li className={styles.entry} key={company.domain}><div className={styles.heading}><div><p>{company.category}</p><h3>{company.name}</h3></div><a href={company.url} target="_blank" rel="noopener noreferrer">Visit {company.domain} ↗</a></div><div className={styles.prose}><p>Review this provider's current first-party site for published scope, staffing location, hours, and delivery model.</p><p>Request written details for management, backup coverage, data access, replacement, fees, and cancellation before comparing it with another option.</p></div></li>)}</ol></section>
        <section className={styles.checklist} id="buyer-checklist"><p className={styles.eyebrow}>Before requesting proposals</p><h2>Use the same four checks for every provider</h2><div className={styles.checkGrid}><article><b>Role brief</b><h3>Define the work</h3><p>List recurring tasks, tools, hours, inputs, finished examples, and approval boundaries.</p></article><article><b>Delivery</b><h3>Name the owner</h3><p>Confirm who performs, reviews, manages, and covers the work when the primary person is unavailable.</p></article><article><b>Validation</b><h3>Run one safe sample</h3><p>Use redacted real work and the same accuracy, communication, and handoff criteria.</p></article><article><b>Commercial terms</b><h3>Count the full cost</h3><p>Include setup, software, management, overtime, replacement, taxes, minimum terms, and cancellation.</p></article></div></section>
        <section className={styles.faq} id="questions"><p className={styles.eyebrow}>Directory questions</p><h2>What to settle before choosing support</h2>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
        <section className={styles.cta}><p className={styles.eyebrow}>Plan the role before hiring</p><h2>Bring the task list, tools, hours, and approval limits</h2><p>Contact requests are sent to Stealth Agents, the staffing provider that powers this site, so its team can discuss the role and service fit.</p><a href="/contact-us">Discuss a virtual assistant role</a></section>
      </article>
    </main>
    <Footer />
  </>;
}
