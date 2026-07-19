import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://bestvirtualassistantservices.com'),
  title: { default: 'Best Virtual Assistant Services | Simple virtual assistant hiring guides', template: '%s | Best Virtual Assistant Services' },
  description: 'Simple, practical guides for hiring, pricing, onboarding, and managing best virtual assistant services support.',
  openGraph: { title: 'Best Virtual Assistant Services', description: 'Practical virtual assistant hiring guides for busy teams.', url: 'https://bestvirtualassistantservices.com', siteName: 'Best Virtual Assistant Services', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
