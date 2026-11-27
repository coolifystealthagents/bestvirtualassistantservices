'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import * as data from './data';
import { fleetServices } from './fleet-data';

const site = (data as any).site || {};
const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' },
];

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/icon.svg" alt={`${site.brand} mark`} width="38" height="38" /><span className="logo-name">{site.brand}</span></span>;
}

function SponsorMark() {
  return <img src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width="149" height="50" />;
}

export function Header(_props: any = {}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'main-content';
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');
    focusable?.[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === 'Tab' && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const isActive = (href: string) => href === '/services'
    ? pathname === '/services' || pathname.startsWith('/services/')
    : pathname === href;
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header data-site-header="sticky" className="nav">
      <div className="nav-inner">
        <a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a>
        <a className="header-sponsor" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a>
        <nav className="links fleet-nav desktop-primary" aria-label="Primary navigation">
          {primaryLinks.map((link) => <a className={isActive(link.href) ? 'is-active' : undefined} aria-current={isActive(link.href) ? 'page' : undefined} href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-primary" onClick={() => setOpen((value) => !value)}>
          <span className="sa-sr-only">{open ? 'Close' : 'Open'} navigation</span><span aria-hidden="true">Menu</span>
        </button>
      </div>
      <div id="mobile-primary" ref={panelRef} className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile primary navigation">
          {primaryLinks.map((link) => <a className={isActive(link.href) ? 'is-active' : undefined} aria-current={isActive(link.href) ? 'page' : undefined} href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>)}
          <button type="button" onClick={() => { closeMenu(); toggleRef.current?.focus(); }}>Close menu</button>
        </nav>
      </div>
    </header>
  </>;
}

export function Footer(_props: any = {}) {
  return <footer data-site-footer="true" className="bva-footer"><div className="container bva-footer-grid">
    <div><a className="footer-logo" href="/"><LogoMark/></a><p>Thoughtful guidance for finding the right virtual assistant support. Built around clear roles, practical comparisons, and Philippines-based talent.</p></div>
    <div className="bva-parent"><h3>Parent Company</h3><a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer"><SponsorMark/></a><p>Best Virtual Assistant Services is a subsidiary of Stealth Agents. Its staffing team handles your inquiry and next steps.</p><a className="bva-link" href="https://stealthagents.com/">Powered by StealthAgents ↗</a></div>
    <div data-footer-menu="true"><h3>Explore</h3><a href="/services">Services</a><a href="/compare">Compare service models</a><a href="/provider-vetting">Provider vetting</a><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact-us">Contact Us</a></div>
    <div data-footer-menu="true"><h3>Useful details</h3><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a><a href="/cancellation-policy">Cancellation Policy</a><a href="/alternatives">Service alternatives</a></div>
    </div><div className="container bva-footer-bottom"><span>© {new Date().getFullYear()} {site.brand}</span><span>Good work starts with a good handoff.</span></div></footer>;
}
export function CTA(){return <section className="bva-final"><div className="container"><p className="bva-overline">Your next chapter, with support</p><h2>Make room for<br/>what you do best.</h2><div><p>Tell us what fills your week. The Stealth Agents team will help you explore a clear, practical starting role.</p><a className="btn primary" href="/contact-us">Let’s find your support ↗</a></div></div></section>}
