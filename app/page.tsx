import type { Metadata } from 'next';
import { Header, Footer, JsonLd, CTA } from './components';
import { site, comparisonRows, reviewCriteria, faqs } from './data';
import { fleetServices } from './fleet-data';
import { allBlogPosts } from './content-library';
import { TestimonialsRail } from './booking-components';
import { HomeMotion } from './redesign-motion';

export const metadata: Metadata = { title: 'Virtual Assistant Service Comparison Guide', alternates: { canonical: '/' } };
export default function Home() {
  return <><Header/><main id="main-content" className="bva-home" data-design="bva-editorial-2026-11">
    <JsonLd data={{'@context':'https://schema.org','@type':'WebSite',name:site.brand,url:site.url,description:'Practical guidance and Philippines-based virtual assistant support.'}}/>
    <HomeMotion/>
    <section className="bva-hero">
      <div className="container">
        <h1>Your best work.<br/><span>A little more supported.</span></h1>
        <p>Find the right Filipino virtual assistant for the work that fills your day. Clear roles, thoughtful comparisons, and a better way to hand things over.</p>
        <div className="bva-actions"><a className="btn primary" href="/contact-us">Find my support <span aria-hidden="true">↗</span></a><a className="btn secondary" href="/services">Explore the services</a></div>
      </div>
      <figure className="bva-hero-photo"><img src="/photos/hero.webp" alt="A bright shared workspace with thoughtfully arranged desks" width="1800" height="1100" fetchPriority="high"/><figcaption>More room for the work only you can do.</figcaption></figure>
      <div className="bva-disclosure container"><span>Philippines-based talent. Your priorities.</span><p>Powered by Stealth Agents. Contact requests go directly to its staffing team.</p></div>
    </section>
    <section className="bva-section container" id="services">
      <div className="bva-section-head"><h2>Good support starts<br/>with the <span className="bva-inline-photo"><img src="/photos/calendar.webp" alt="A working calendar" width="160" height="90" loading="lazy"/></span> right role.</h2><div><p>From the first meeting to the last follow-up, give recurring work a clear owner and a reliable rhythm.</p><a className="bva-link" href="/services">Explore all services ↗</a></div></div>
      <div className="bva-service-accordion">{fleetServices.slice(0,4).map(s=><a href={`/services/${s.slug}`} className="bva-service-slice" key={s.slug}><img src={s.heroImage} alt={s.heroAlt} width="900" height="600" loading="lazy"/><div><h3>{s.name}</h3><p>{s.desc}</p><span>Explore service ↗</span></div></a>)}</div>
      <div className="bva-service-links">{fleetServices.slice(4).map(s=><a href={`/services/${s.slug}`} key={s.slug}>{s.name}<span aria-hidden="true">↗</span></a>)}</div>
    </section>
    <section className="bva-models" id="models"><div className="container bva-model-layout"><div className="bva-pin"><p className="bva-overline">A more thoughtful shortlist</p><h2>Choose the support.<br/>Know the trade-offs.</h2><p>A good match goes beyond an hourly rate. Compare the training, review time, and backup your team will actually need.</p><a className="btn secondary" href="/compare">Compare the models ↗</a></div><div className="bva-model-cards">{comparisonRows.map((row,i)=><article className="bva-stack-card" key={row.option}><span className="bva-model-symbol" aria-hidden="true">{['↗','✳','⌘','◇'][i]}</span><h3>{row.option}</h3><p>{row.bestFor}</p><div><strong>Ask before you commit</strong><p>{row.ask}</p></div></article>)}</div></div></section>
    <section className="bva-section container bva-score"><div><p className="bva-overline">Make every conversation count</p><h2>A clearer scorecard.<br/>A more confident choice.</h2><p>Use the same questions with every provider. Look for evidence of the work, a named reviewer, and an honest answer when something goes wrong.</p><a className="bva-link" href="/provider-vetting">Get the provider vetting guide ↗</a></div><div className="bva-score-sheet">{reviewCriteria.map(item=><div key={item.label}><strong>{item.label}<small>{item.note}</small></strong><span>{item.score}</span></div>)}<p>Suggested weighting for your shortlist, not a provider rating.</p></div></section>
    <section className="bva-reviews"><div className="container"><TestimonialsRail/></div></section>
    <section className="bva-section container"><div className="bva-section-head"><h2>A little reading.<br/>A better first handoff.</h2><a className="bva-link" href="/blog">Visit the Blog ↗</a></div><div className="bva-blog-grid">{allBlogPosts.slice(0,3).map(post=><a className="bva-blog-card" href={`/blog/${post.slug}`} key={post.slug}><div className="bva-thumb"><img src={post.featuredImage} alt={post.title} width="1200" height="675" loading="lazy"/></div><span>{post.minutes} min read</span><h3>{post.title}</h3><p>{post.excerpt}</p><b>Read the guide ↗</b></a>)}</div></section>
    <section className="bva-section container bva-faq"><h2>A few things<br/>worth asking.</h2><div>{faqs.map(f=><details key={f.q}><summary>{f.q}<span aria-hidden="true">+</span></summary><p>{f.a}</p></details>)}</div></section>
    <CTA/>
  </main><Footer/></>;
}
