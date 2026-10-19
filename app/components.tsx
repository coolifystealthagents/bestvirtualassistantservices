'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import * as data from './data';
import { fleetServices } from './fleet-data';

const site = (data as any).site || {};
const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact' },
];

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/icon.svg" alt="" width="38" height="38" /><span className="logo-name">{site.brand}</span></span>;
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
    <header className="nav">
      <div className="nav-inner">
        <a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a>
        <div className="header-sponsor"><span className="sponsor-mark"><span>Powered by StealthAgents</span><SponsorMark /></span></div>
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
  const year = new Date().getFullYear();
  return <footer className="footer legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a><span className="sponsor-mark"><span>Powered by StealthAgents</span><SponsorMark /></span><p>Practical guidance for teams comparing virtual assistant providers and role models.</p><p className="footer-note">Requests submitted through this site may be shared with the staffing team for follow up.</p></div><div><h3>Services</h3><div className="footer-links">{fleetServices.slice(0, 6).map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.name}</a>)}</div></div><div><h3>Site</h3><div className="footer-links"><a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>{site.domain}</span></div></footer>;
}

export function CTA() {
  return <section className="final-cta fleet-final"><p className="eyebrow">Philippines based staffing</p><h2>Define the work before hiring.</h2><p>Share the positions, systems, hours, and approval points your team needs. A staffing specialist can use that context to discuss fit.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>;
}
