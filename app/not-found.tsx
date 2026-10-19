import type { Metadata } from 'next';
import { Footer, Header } from './components';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="legal-page">
        <section className="legal-hero">
          <div className="container">
            <p className="eyebrow">404 error</p>
            <h1>We could not find that page.</h1>
            <p className="lead">The address may have changed, or the page may no longer be available.</p>
            <nav aria-label="Helpful destinations">
              <a className="btn primary" href="/">Return home</a>{' '}
              <a className="btn" href="/services">Explore services</a>{' '}
              <a className="btn" href="/blog">Read the blog</a>{' '}
              <a className="btn" href="/contact-us">Contact us</a>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
