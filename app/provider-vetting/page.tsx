import { Header, Footer, CTA, JsonLd } from '../components';
import { providerQuestions, site, vettingSteps } from '../data';

export const metadata = { title: 'Virtual assistant provider vetting checklist', description: 'Simple questions and steps for vetting virtual assistant service providers before you sign.' };

export default function VettingPage(){
  const schema = { '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to vet a virtual assistant provider', step: vettingSteps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text, url: `${site.url}/provider-vetting#step-${i+1}` })) };
  return <><Header/><main className="section"><JsonLd data={schema}/><div className="container"><p className="eyebrow">Provider vetting</p><h1>Vetting checklist for virtual assistant services</h1><p className="lead">A good VA provider asks about your work before selling hours. Use this checklist to spot fit, risk, and vague promises.</p><div className="cards">{vettingSteps.map((s, i)=><div className="card" id={`step-${i+1}`} key={s.title}><span className="pill">Step {i+1}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></div><section className="section"><div className="container two"><div><h2>Questions to copy into your call notes</h2><ul className="list">{providerQuestions.map((q)=><li key={q}>{q}</li>)}</ul></div><div className="card"><h3>What good answers sound like</h3><p>Good answers are specific. The provider names the role, tools, training steps, backup plan, and quality check. Weak answers sound like “we can do anything” without examples.</p><p>Ask for a small paid test when the role touches customers, money, passwords, or private records.</p></div></div></section><CTA/></main><Footer/></>;
}
