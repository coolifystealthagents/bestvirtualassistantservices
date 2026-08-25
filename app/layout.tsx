import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';
import { JsonLd } from './components';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Compare the Best Virtual Assistant Services', template: '%s | Best Virtual Assistant Services' },
  description: 'Simple, practical guides for comparing virtual assistant services, role scope, onboarding, provider vetting, and safe first tasks.',
  openGraph: { title: 'Best Virtual Assistant Services', description: 'Practical virtual assistant service comparisons for busy teams.', url: site.url, siteName: site.brand, type: 'website' },
  twitter: { card: 'summary_large_image', title: site.brand, description: 'Compare virtual assistant services, role scope, and provider fit in plain English.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = [{ '@context': 'https://schema.org', '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.brand, url: site.url }, { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.brand, url: site.url, publisher: { '@id': `${site.url}/#organization` } }];
  return <html lang="en"><body><JsonLd data={schema}/>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'best-virtual-assistant-services',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
