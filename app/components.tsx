import { site } from './data';

export function Header(){
  return <header className="nav"><div className="container nav-inner"><a href="/" className="logo"><span className="mark">VA</span><span>{site.brand}</span></a><nav className="links"><a href="/compare">Compare</a><a href="/pricing">Pricing</a><a href="/provider-vetting">Vetting</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav><a className="btn" href="/contact">Get shortlist</a></div></header>;
}

export function Footer(){
  return <footer className="footer"><div className="container footer-grid"><div><b>{site.brand}</b><p>Research-backed virtual assistant hiring guides. Built for buyers who want clear steps, not hype.</p><p>© {new Date().getFullYear()} {site.brand}. Independent education site. Replace contact details before launch.</p></div><div><b>Plan</b><p><a href="/compare">Compare services</a><br/><a href="/pricing">Pricing guide</a><br/><a href="/provider-vetting">Provider vetting</a></p></div><div><b>Trust</b><p><a href="/privacy">Privacy</a><br/><a href="/terms">Terms</a><br/><a href="/contact">Contact</a></p></div></div></footer>;
}

export function CTA(){
  return <section className="section"><div className="container"><div className="callout"><p className="eyebrow" style={{color:'white'}}>Need help deciding?</p><h2>Get a simple assistant hiring plan.</h2><p>Tell us the tasks, tools, hours, and coverage you need. We will map the role, cost range, interview questions, and first-week checklist.</p><a className="btn secondary" href="/contact">Request a quote-style plan</a></div></div></section>;
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
