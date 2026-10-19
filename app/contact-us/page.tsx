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
      <div className="official-team-copy"><div className="official-logo-plate"><img src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width="149" height="50" /></div><p className="contact-kicker">First party team image</p><h2>An official image from the staffing provider.</h2><p>This official photo and logo come from the Stealth Agents website. Contact form details are sent to Stealth Agents so its staffing team can respond about role fit and next steps.</p><a className="btn primary" href="/services">Review services</a></div>
    </div></section>
  </main><Footer /></>;
}
