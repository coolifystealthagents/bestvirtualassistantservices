import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { TestimonialsRail } from '../proof-components';
import StandardContactForm from './StandardContactForm';

export const metadata: Metadata = {
  title: 'Share Your Staffing Needs',
  description: 'Share your role, workload, and staffing needs with the Stealth Agents team.',
  alternates: { canonical: '/contact-us' },
  robots: { index: true, follow: true },
};

export default function ContactUsPage() {
  return <><Header /><main id="main-content" className="contact-page">
    <section className="contact-hero"><div className="contact-shell contact-hero-grid">
      <div className="contact-copy">
        <p className="contact-kicker">Start with the work</p>
        <h1>Tell us what your team needs help with.</h1>
        <p className="contact-lead">Share the role, systems, schedule, and priorities. Your details give the staffing team useful context for a direct follow up.</p>
        <TestimonialsRail contact />
      </div>
      <div className="contact-form"><StandardContactForm endpoint="/api/contact" encoding="form" /></div>
    </div></section>
    <section className="official-team"><div className="contact-shell official-team-grid">
      <figure><img src="/brand/stealth-agents-team-bacolod.png" alt="Stealth Agents team photo" width="953" height="540" /><figcaption>Official Stealth Agents team image</figcaption></figure>
      <div className="official-team-copy"><div className="official-logo-plate"><img src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width="149" height="50" /><span>Official team, Bacolod</span></div><p className="contact-kicker">The people behind your support</p><h2>Meet the team in Bacolod.</h2><p>Contact form details are sent to Stealth Agents. Its team will discuss the role, working hours, tools, and review process with you before recommending a starting scope.</p><a className="btn primary" href="/services">Review services</a></div>
    </div></section>
  <section className="bva-section contact-shell bva-contact-detail"><div><p className="bva-overline">A useful first conversation</p><h2>Bring the work.<br/>We’ll talk through the handoff.</h2><p>A clear brief helps the staffing team understand the support you need and the decisions that should stay with you.</p></div><div><article><h3>Share a typical week</h3><p>List the recurring tasks, approximate volume, working hours, and tools. Include an example of what a good result looks like.</p></article><article><h3>Set the boundaries</h3><p>Identify the approvals, sensitive records, and customer commitments your assistant should route to a named owner.</p></article><article><h3>Plan a manageable start</h3><p>Discuss training, a small initial scope, review frequency, and backup coverage before expanding the role.</p></article></div></section></main><Footer /></>;
}
