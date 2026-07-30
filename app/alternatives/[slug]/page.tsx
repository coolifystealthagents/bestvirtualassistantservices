import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { alternatives } from '../data';
import { site } from '../../data';
export function generateStaticParams(){return alternatives.map(item=>({slug:item.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const item=alternatives.find(x=>x.slug===slug); if(!item)return{};
  const title=`${item.competitor} Alternatives: A Fair 2026 Comparison`;
  const description=`Compare ${item.competitor} alternatives by equivalent hours, location, management, backup, contract terms, and current published pricing.`;
  return {title,description,alternates:{canonical:`/alternatives/${slug}`},openGraph:{title,description,type:'article',images:[{url:`${site.url}${item.image}`,alt:`${item.competitor} alternatives comparison guide`}]}};
}
export default async function AlternativePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const item=alternatives.find(x=>x.slug===slug); if(!item)notFound();
  const sections=[
    ['shortlist',`The short answer on ${item.competitor} alternatives`],
    ['criteria','Use fair equivalent criteria'],
    ['options','Which alternative model fits?'],
    ['pricing','Price and contract check'],
    ['decision','A practical decision routine'],
  ];
  const faq=[
    [`What is the best ${item.competitor} alternative?`,`There is no universal winner. The best fit is the provider that meets the same written task scope, hours, location, management, and risk controls at a total price you can sustain.`],
    [`How should I compare ${item.competitor} pricing?`,`Convert every quote to the same monthly capacity, then add setup, software, management, overage, and contract costs. Do not compare a small hour bundle with a full-time hire.`],
    [`Should I choose a freelancer instead?`,`A freelancer can fit low-risk work when you can recruit, train, review, and arrange backup. A managed service may fit better when you want those duties included.`],
    [`What should a paid test include?`,`Use redacted examples from the real workflow. Score accuracy, questions, handoff notes, response time, and whether the assistant stops at approval boundaries.`],
    [`What access should a new assistant receive?`,`Start with named accounts, multi-factor authentication, and the least access needed. Keep money movement, legal judgment, refunds, and final approvals with an authorized owner.`],
  ];
  const schema={'@context':'https://schema.org','@type':'Article',headline:`${item.competitor} Alternatives: A Fair 2026 Comparison`,datePublished:'2026-07-29',dateModified:'2026-07-29',image:`${site.url}${item.image}`,author:{'@type':'Organization',name:site.brand},mainEntityOfPage:`${site.url}/alternatives/${item.slug}`,about:item.competitor};
  const faqSchema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))};
  return <><Header/><main className="alt-page"><JsonLd data={schema}/><JsonLd data={faqSchema}/>
    <header className="alt-hero"><div className="container alt-hero-grid"><div><p className="eyebrow">Independent comparison · Pricing checked July 29, 2026</p><h1>{item.competitor} Alternatives: A Fair 2026 Comparison</h1><p className="lead">Compare the same work, capacity, support, and risk controls before treating one provider as a substitute for another.</p><div className="alt-hero-tags"><span>{item.serviceModel}</span><span>{item.publishedPrice}</span></div></div><img src={item.image} width="620" height="410" alt={`${item.competitor} alternatives buyer comparison`}/></div></header>
    <div className="container alt-layout"><aside className="alt-toc"><strong>On this page</strong>{sections.map(([id,label])=><a href={`#${id}`} key={id}>{label}</a>)}<a href="#faq">FAQ</a></aside>
    <article className="alt-article">
      <section id="shortlist"><p className="alt-label">Buyer brief</p><h2>{sections[0][1]}</h2><p>{item.bestWhen} An alternative deserves the shortlist only if it covers the same job, not merely because its advertised rate is lower.</p><p>First write the role, working hours, tool access, review owner, and prohibited decisions. The <a href="/provider-vetting">provider vetting guide</a> gives you a consistent question set for every sales call.</p><div className="alt-callout"><strong>Watch for</strong><p>{item.watchFor}</p></div></section>
      <section id="criteria"><p className="alt-label">Equivalent scope</p><h2>{sections[1][1]}</h2><p>{item.equivalent} Keep candidate skill and country-level assumptions separate. Ask for evidence from the person or team assigned to your account.</p><div className="alt-table-wrap"><table><caption>Fair-equivalent comparison table</caption><thead><tr><th>Factor</th><th>Match before comparing price</th><th>Proof to request</th></tr></thead><tbody><tr><th>Capacity</th><td>Same monthly hours and coverage window</td><td>Written schedule and overage rule</td></tr><tr><th>Delivery</th><td>Dedicated person, shared pool, or managed team</td><td>Named owner and backup process</td></tr><tr><th>Role</th><td>Same tasks, tools, and seniority</td><td>Relevant sample plus paid test</td></tr><tr><th>Risk</th><td>Same access and approval boundaries</td><td>Security and offboarding checklist</td></tr><tr><th>Cost</th><td>All recurring and one-time fees</td><td>Itemized quote and cancellation terms</td></tr></tbody></table></div></section>
      <section id="options"><p className="alt-label">Named-competitor structure</p><h2>{sections[2][1]}</h2><div className="alt-options"><div><h3>Fractional managed service</h3><p>Best when you need a limited weekly workload plus matching, account help, or backup.</p></div><div><h3>Dedicated offshore assistant</h3><p>Best when recurring work can fill a steady schedule and your manager can own the workflow.</p></div><div><h3>Independent specialist</h3><p>Best when one skill matters more than broad coverage and you can handle recruiting and continuity.</p></div></div><p>For Philippines-based support, review the site’s <a href="/pricing">current hourly tiers</a> against the identical role brief. A listed hourly number is not equivalent until management, tools, backup, and hours also match.</p></section>
      <section id="pricing"><p className="alt-label">Freshness check</p><h2>{sections[3][1]}</h2><div className="alt-source"><span>Primary visible source</span><h3>{item.competitor}: current service or pricing information</h3><p><strong>Observed price:</strong> {item.publishedPrice}. {item.priceNote}</p><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Check {item.competitor}'s first-party information ↗</a></div><p>Recheck the source on the day you buy. Promotions, minimum terms, taxes, setup fees, and role-specific quotes can change the effective price.</p></section>
      <section id="decision"><p className="alt-label">Routine</p><h2>{sections[4][1]}</h2><ol className="alt-steps"><li><b>Write one brief.</b> Fix the tasks, hours, tools, outcomes, and approval limits.</li><li><b>Collect itemized quotes.</b> Require capacity, location, management, backup, and all fees.</li><li><b>Run the same paid test.</b> Use safe examples and one scoring sheet.</li><li><b>Review after 30 days.</b> Measure accuracy, manager time, responsiveness, and access discipline.</li></ol></section>
      <aside className="alt-cta"><div><p className="alt-label">Need a scoped comparison?</p><h2>Bring the role, not just the provider name.</h2></div><a href="/contact-us">Discuss the staffing brief</a></aside>
      <section id="faq" className="alt-faq"><p className="alt-label">Frequently asked questions</p><h2>{item.competitor} alternatives FAQ</h2>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <section className="alt-related"><p className="alt-label">Related buyer guides</p><h2>Continue the comparison</h2><div><a href="/compare"><strong>Compare service models</strong><span>See where freelancers, managed services, agencies, and employees fit.</span></a><a href="/research"><strong>Research library</strong><span>Read evidence-led guides for scoping and controlling remote work.</span></a></div></section>
    </article></div></main><Footer/></>;
}

