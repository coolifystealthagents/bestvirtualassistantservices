import type { Metadata } from 'next';
import Image from 'next/image';
import { TestimonialsRail } from '../../booking-components';
import { ServiceMotion } from '../service-motion';
import '../service-landing.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA, Footer, Header, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return { title: 'Service not found' };

  return {
    title: service.metaTitle,
    description: service.desc,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.desc,
      url: `/services/${service.slug}`,
      images: [{ url: service.heroImage, alt: service.heroAlt }]
    }
  };
}

function DetailList({ title, items }: { title: string; items: readonly string[] }) {
  return <details className="sv-detail"><summary>{title}<span aria-hidden="true">+</span></summary><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></details>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();

  const url = `${base}/services/${service.slug}`;
  const related = service.relatedServices
    .map((relatedSlug) => fleetServices.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof fleetServices)[number] => Boolean(item));
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Services', item: `${base}/services` },
      { '@type': 'ListItem', position: 2, name: service.name, item: url }
    ]
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };

  return (
    <>
      <Header />
      <main id="main-content" className="service-landing">
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.desc,
          url,
          image: `${base}${service.heroImage}`,
          provider: { '@type': 'Organization', '@id': 'https://stealthagents.com/#organization', name: 'Stealth Agents', url: 'https://stealthagents.com/' },
          serviceType: service.title
        }} />
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={faqSchema} />

        <ServiceMotion />
        <header className="sv-hero">
          <div className="container">
            <Link className="sv-back" href="/services">← All services</Link>
            <p className="eyebrow">Your next right hand</p>
            <h1>{service.name}</h1>
            <p className="sv-intro">{service.desc}</p>
            <div className="sv-actions"><Link className="btn primary" href="/contact-us">Find my support ↗</Link><a className="btn ghost" href="#what-you-can-delegate">Explore the service</a></div>
          </div>
          <figure className="sv-hero-image"><Image src={service.heroImage} alt={service.heroAlt} width={1800} height={1000} priority sizes="100vw"/><figcaption>{service.deliverables.join(' · ')}</figcaption></figure>
        </header>

        <section className="container sv-section sv-intro-grid">
          <div><p className="eyebrow">Less friction. More focus.</p><h2>Good support changes<br/>how the day feels.</h2></div>
          <div><p className="sv-reveal">{service.problem}</p><p>Start with a clear role, a practical handoff, and an assistant who knows what needs your attention—and what can move forward.</p><Link className="sv-text-link" href="/contact-us">Let’s talk about your workflow ↗</Link></div>
        </section>

        <section className="sv-section sv-scope" id="what-you-can-delegate"><div className="container">
          <div className="sv-section-heading"><div><p className="eyebrow">Support that fits your day</p><h2>Here’s what you<br/>can hand over.</h2></div><p>Choose the responsibilities that matter to your team. We’ll define the tools, handoffs, and approval points together.</p></div>
          <div className="sv-responsibilities">{service.responsibilities.map((item,i)=><details key={item} className="sv-responsibility" open={i===0}><summary><span>{item}</span><b aria-hidden="true">↗</b></summary><div><p>{service.tasks[i] || service.desc}</p><small>What you’ll receive</small><strong>{service.deliverables[i % service.deliverables.length]}</strong></div></details>)}</div>
          <div className="sv-tools"><span>Built around your workflow</span>{service.tools.map(tool=><strong key={tool}>{tool}</strong>)}</div>
        </div></section>

        <section className="container sv-section sv-outcomes"><div className="sv-section-heading"><h2>A clear handoff.<br/>Something tangible back.</h2><p>Know what the work produces and what stays in your hands.</p></div><div className="sv-deliverables">{service.deliverables.map((item,i)=><div key={item}><span className="sv-outcome-symbol" aria-hidden="true">{['↗','✓','↔'][i%3]}</span><h3>{item}</h3><p>{service.qualityControls[i % service.qualityControls.length]}</p></div>)}</div></section>

        <section className="sv-process sv-section"><div className="container sv-process-grid"><div className="sv-process-title"><p className="eyebrow">A thoughtful start</p><h2>From a busy week<br/>to a working rhythm.</h2><p>Start with a focused scope. Review real work together. Build confidence before expanding the role.</p><Link className="btn primary" href="/contact-us">Plan my first handoff ↗</Link></div><div className="sv-steps">{service.firstWeek.map((step,i)=><div className="sv-step" key={step}><span>{['Define the role','Put it into practice','Review together'][i] || 'Keep improving'}</span><h3>{step}</h3><p>{service.workflow[i % service.workflow.length]}</p></div>)}</div></div></section>

        <section className="container sv-section sv-fit"><div><p className="eyebrow">The right fit matters</p><h2>Built for teams<br/>like yours.</h2></div><div>{service.audience.map(item=><p className="sv-fit-line" key={item}><span aria-hidden="true">↗</span>{item}</p>)}</div></section>

        <section className="sv-proof"><div className="container"><TestimonialsRail /></div></section>

        <section className="container sv-section sv-details-grid"><div><p className="eyebrow">Clear expectations, from day one</p><h2>The details that<br/>make it work.</h2><p>Explore the scope and safeguards before choosing your support.</p></div><div>
          <DetailList title="The everyday work" items={service.tasks}/>
          <DetailList title="What we’ll need from you" items={service.inputs}/>
          <DetailList title="How the workflow runs" items={service.workflow}/>
          <DetailList title="Decisions you keep" items={service.boundaries}/>
          <DetailList title="Quality checks and progress" items={[...service.metrics,...service.qualityControls]}/>
          <DetailList title="Risks and safeguards" items={[...service.risks,...service.controls]}/>
          <DetailList title="Situations we’ll plan for" items={[...service.painPoints,...service.scenarios]}/>
          <details className="sv-detail sv-context"><summary>More about this service<span aria-hidden="true">+</span></summary><div>{service.body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></details>
        </div></section>

        <section className="sv-faq sv-section"><div className="container sv-details-grid"><h2>A few things<br/>worth asking.</h2><div>{service.faq.map(item=><details className="sv-detail" key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></div></section>

        <section className="container sv-section"><div className="sv-section-heading"><h2>A little more support.</h2><Link className="sv-text-link" href="/services">Explore every service ↗</Link></div><div className="sv-related">{related.map(item=><Link key={item.slug} href={`/services/${item.slug}`}><div><Image src={item.heroImage} alt={item.heroAlt} width={900} height={540} sizes="(max-width:700px) 100vw, 50vw"/></div><h3>{item.name}<span aria-hidden="true">↗</span></h3><p>{item.desc}</p></Link>)}</div></section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
