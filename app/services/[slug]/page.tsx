import type { Metadata } from 'next';
import Image from 'next/image';
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
    title: `${service.title} | Virtual Assistant Service Guide`,
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
  return (
    <section className="service-detail-card">
      <h2>{title}</h2>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();

  const url = `${base}/services/${service.slug}`;
  const related = service.relatedServices
    .map((relatedSlug) => fleetServices.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof fleetServices)[number] => Boolean(item));

  return (
    <>
      <Header />
      <main id="main-content" className="service-longform">
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.desc,
          url,
          image: `${base}${service.heroImage}`,
          areaServed: 'Worldwide',
          provider: { '@type': 'Organization', name: site.brand, url: base },
          serviceType: service.title
        }} />

        <header className="service-article-hero">
          <div className="container service-hero-grid">
            <div className="service-hero-copy">
              <nav className="service-breadcrumbs" aria-label="Breadcrumb">
                <Link href="/services">Services</Link><span aria-hidden="true">/</span><span>{service.title}</span>
              </nav>
              <p className="eyebrow">Philippines-based virtual assistant support</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.desc}</p>
              <div className="service-hero-actions">
                <Link className="btn primary" href="/contact-us">Discuss this service</Link>
                <a className="service-jump-link" href="#service-overview">Read the operating guide</a>
              </div>
            </div>
            <figure className="service-hero-figure">
              <Image src={service.heroImage} alt={service.heroAlt} width={900} height={600} priority sizes="(max-width: 900px) 100vw, 44vw" />
              <figcaption>{service.heroAlt}</figcaption>
            </figure>
          </div>
        </header>

        <div className="container service-article-layout">
          <aside className="service-article-nav" aria-label="On this page">
            <strong>On this page</strong>
            <a href="#service-overview">Overview</a>
            <a href="#service-fit">Who it serves</a>
            <a href="#service-operation">Operating scope</a>
            <a href="#service-measurement">Measurement and risk</a>
            <a href="#service-launch">Launch plan</a>
            <a href="#service-faq">Common question</a>
          </aside>

          <article className="service-article">
            <section id="service-overview" className="service-copy-section">
              <p className="service-section-label">Service overview</p>
              <h2>A controlled operating model for {service.title.toLowerCase()}</h2>
              {service.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>

            <section id="service-fit" className="service-copy-section">
              <p className="service-section-label">Fit and friction</p>
              <div className="service-two-column">
                <DetailList title="Who this service is for" items={service.audience} />
                <DetailList title="Problems it addresses" items={service.painPoints} />
              </div>
            </section>

            <section id="service-operation" className="service-copy-section">
              <p className="service-section-label">Operating scope</p>
              <h2>Responsibilities, inputs, and outputs</h2>
              <div className="service-detail-grid">
                <DetailList title="Responsibilities" items={service.responsibilities} />
                <DetailList title="Tools and workspaces" items={service.tools} />
                <DetailList title="Required inputs" items={service.inputs} />
                <DetailList title="Workflow" items={service.workflow} />
                <DetailList title="Deliverables" items={service.deliverables} />
                <DetailList title="Authority boundaries" items={service.boundaries} />
              </div>
              <div className="service-scenario-box">
                <h3>Situations the workflow should handle</h3>
                <ul>{service.scenarios.map((scenario) => <li key={scenario}>{scenario}</li>)}</ul>
              </div>
            </section>

            <section id="service-measurement" className="service-copy-section">
              <p className="service-section-label">Measurement and safeguards</p>
              <h2>Observe the process without inventing outcomes</h2>
              <div className="service-detail-grid service-detail-grid-three">
                <DetailList title="Practical metrics" items={service.metrics} />
                <DetailList title="Risks to manage" items={service.risks} />
                <DetailList title="Quality controls" items={service.qualityControls} />
              </div>
            </section>

            <section id="service-launch" className="service-copy-section">
              <p className="service-section-label">Current scope and launch</p>
              <h2>Start narrow, review the work, then expand</h2>
              <div className="service-detail-grid service-detail-grid-three">
                <DetailList title="Current tasks" items={service.tasks} />
                <DetailList title="Controls to retain" items={service.controls} />
                <DetailList title="First-week plan" items={service.firstWeek} />
              </div>
            </section>

            <section id="service-faq" className="service-copy-section service-faq-block">
              <p className="service-section-label">Common question</p>
              <h2>{service.faq[0].q}</h2>
              <p>{service.faq[0].a}</p>
            </section>

            <section className="service-related" aria-labelledby="related-services-heading">
              <p className="service-section-label">Continue planning</p>
              <h2 id="related-services-heading">Related service guides</h2>
              <div>
                {related.map((item) => (
                  <Link key={item.slug} href={`/services/${item.slug}`}>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </Link>
                ))}
              </div>
              <p className="service-all-link"><Link href="/services">View all virtual assistant services</Link></p>
            </section>

            <section className="service-contact-panel">
              <div>
                <p className="service-section-label">Define the handoff</p>
                <h2>Discuss your workflow and control requirements</h2>
              </div>
              <div>
                <p>Bring the tools, examples, approval limits, and recurring work you want to evaluate. The conversation can focus on a narrow, reviewable starting scope.</p>
                <Link className="btn primary" href="/contact-us">Contact the team</Link>
              </div>
            </section>
          </article>
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
