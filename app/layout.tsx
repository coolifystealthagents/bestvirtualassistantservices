import './globals.css';
import type { Metadata } from 'next';
import { JsonLd } from './components';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Best Virtual Assistant Services | Compare VA providers, roles, and tasks', template: '%s | Best Virtual Assistant Services' },
  description: 'Simple, practical guides for comparing virtual assistant services, role scope, onboarding, provider vetting, and safe first tasks.',
  openGraph: { title: 'Best Virtual Assistant Services', description: 'Practical virtual assistant service comparisons for busy teams.', url: site.url, siteName: site.brand, type: 'website' },
  twitter: { card: 'summary_large_image', title: site.brand, description: 'Compare virtual assistant services, role scope, and provider fit in plain English.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = [{ '@context': 'https://schema.org', '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.brand, url: site.url }, { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.brand, url: site.url, publisher: { '@id': `${site.url}/#organization` } }];
  return <html lang="en"><body><JsonLd data={schema}/>{children}</body></html>;
}
