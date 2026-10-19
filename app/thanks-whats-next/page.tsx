import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'What Happens Next',
  description: 'A clear summary of what happens after a staffing request or meeting.',
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return <><Header /><main id="main-content" className="conversion-page"><section className="conversion-sheet"><p className="eyebrow">What happens next</p><h1>Here is what to expect.</h1><p>If you submitted a request or completed a meeting, the Stealth Agents team can review the details you provided and follow up using your contact information.</p><p>If you opened this page directly, no submission or booking has been confirmed. You can explore the site or contact the team when you are ready.</p><nav aria-label="Next destinations"><a className="btn primary" href="/">Home</a><a className="btn" href="/services">Services</a><a className="btn" href="/contact-us">Contact Us</a></nav></section></main><Footer /></>;
}
