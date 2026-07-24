import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { researchPosts, ResearchPost, ResearchParagraph } from '../../fleet-data';
import { site } from '../../data';

const baseUrl = site.url;

export function generateStaticParams() {
  return researchPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const canonical = `${baseUrl}/research/${post.slug}`;
  return {
    title: { absolute: `${post.title} | ${site.brand}` },
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      siteName: site.brand,
      type: 'article',
      publishedTime: post.published,
      modifiedTime: post.modified,
    },
    twitter: { card: 'summary', title: post.title, description: post.excerpt },
  };
}

function CitationLinks({ ids }: { ids?: readonly number[] }) {
  if (!ids?.length) return null;
  return <>{ids.map((id) => <sup className="research-citation" key={id}><a href={`#source-${id}`} aria-label={`Source ${id}`}>[{id}]</a></sup>)}</>;
}

function Paragraph({ paragraph }: { paragraph: ResearchParagraph }) {
  return <p>{paragraph.text}<CitationLinks ids={paragraph.citations}/></p>;
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const canonical = `${baseUrl}/research/${post.slug}`;
  const reportSchema = {
    '@context': 'https://schema.org',
    '@type': 'Report',
    '@id': `${canonical}#report`,
    headline: post.title,
    description: post.excerpt,
    url: canonical,
    datePublished: post.published,
    dateModified: post.modified,
    inLanguage: 'en-US',
    author: { '@type': 'Organization', '@id': `${baseUrl}/#organization`, name: site.brand },
    publisher: { '@id': `${baseUrl}/#organization` },
    isPartOf: { '@id': `${baseUrl}/#website` },
    about: [
      { '@type': 'Thing', name: 'Filipino virtual assistants' },
      { '@type': 'Country', name: 'Philippines' },
      { '@type': 'Thing', name: 'Remote staffing buyer research' },
    ],
    citation: post.sources.map((source) => source.url),
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Research', item: `${baseUrl}/research` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return <>
    <Header/>
    <main className="research-report" data-article-revision={post.revision}>
      <JsonLd data={[reportSchema, breadcrumbSchema, faqSchema]}/>
      <article>
        <header className="research-report-hero">
          <div className="container research-report-hero-grid">
            <div>
              <nav className="research-breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Home</a><span>/</span><a href="/research">Research</a><span>/</span><span>Buyer report</span>
              </nav>
              <p className="eyebrow">Philippines talent research · 2026 report</p>
              <h1>{post.title}</h1>
              <p className="research-report-lead">{post.excerpt}</p>
              <div className="research-report-meta" aria-label="Article details">
                <span>Published <time dateTime={post.published}>July 24, 2026</time></span>
                <span>{post.readingMinutes} minute read</span>
                <span>{post.sources.length} direct sources</span>
              </div>
              <div className="research-hero-actions">
                <a className="btn primary" href="/contact">Discuss a Philippines-based role</a>
                <a className="research-text-link" href="#methodology">Read the method</a>
              </div>
            </div>
            <aside className="research-key-box" aria-labelledby="takeaways-title">
              <p className="eyebrow">Key takeaways</p>
              <h2 id="takeaways-title">What the evidence means</h2>
              <ul>{post.keyTakeaways.map((item) => <li key={item}>{item}</li>)}</ul>
            </aside>
          </div>
        </header>

        <section className="research-stat-band" aria-label="Headline statistics">
          <div className="container research-stat-grid">
            {post.stats.map((stat) => <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <small>{stat.note} <a href={`#source-${stat.citation}`}>[{stat.citation}]</a></small>
            </article>)}
          </div>
        </section>

        <div className="container research-report-layout">
          <aside className="research-toc" aria-label="On this page">
            <strong>On this page</strong>
            <a href="#evidence">Evidence</a>
            <a href="#comparison-table">Data table</a>
            <a href="#buyer-method">Buyer method</a>
            <a href="#security">Data safety</a>
            <a href="#cost">Cost</a>
            <a href="#launch">30-day launch</a>
            <a href="#methodology">Method and limits</a>
            <a href="#faq">FAQs</a>
            <a href="#sources">Sources</a>
          </aside>

          <div className="research-report-body">
            {post.sections.slice(0, 3).map((section, index) => <section id={index === 1 ? 'evidence' : undefined} className="research-copy-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <Paragraph paragraph={paragraph} key={paragraph.text}/>)}
              {section.bullets?.length ? <ul className="research-check-list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </section>)}

            <section id="comparison-table" className="research-copy-section">
              <h2>Philippines evidence beside global context</h2>
              <p>The table keeps national indicators separate from the checks a buyer must run on one candidate. Values come from the direct sources listed below, and each year stays visible so unlike periods are not presented as the same measurement.</p>
              <div className="research-table-wrap">
                <table>
                  <caption>{post.comparisonTable.caption}</caption>
                  <thead><tr>{post.comparisonTable.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
                  <tbody>{post.comparisonTable.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td data-label={post.comparisonTable.headers[index]} key={cell}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            </section>

            {post.sections.slice(3).map((section, index) => {
              const ids = ['buyer-method', 'security', 'cost', 'hours', 'launch'];
              return <section id={ids[index]} className="research-copy-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <Paragraph paragraph={paragraph} key={paragraph.text}/>)}
                {section.bullets?.length ? <ul className="research-check-list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                {section.heading.startsWith('How to compare cost') ? <a className="research-inline-cta" href="/pricing">See the published Philippines-based pricing tiers <span>→</span></a> : null}
              </section>;
            })}

            <aside className="research-contact-cta">
              <div>
                <p className="eyebrow">Plan one clear role</p>
                <h2>Turn the evidence into a hiring brief</h2>
              </div>
              <div>
                <p>Tell us the tasks, tools, hours, and decisions that must stay with your team. We can help you shape a Philippines-based role and choose the right public pricing tier without promising an outcome before the work is tested.</p>
                <a className="btn primary" href="/contact">Contact a staffing specialist</a>
              </div>
            </aside>

            <section id="methodology" className="research-method-card">
              <p className="eyebrow">Methodology and limitations</p>
              <h2>How this report was built</h2>
              {post.methodology.map((paragraph) => <Paragraph paragraph={paragraph} key={paragraph.text}/>)}
            </section>

            <section id="faq" className="research-faq-section">
              <p className="eyebrow">Buyer questions</p>
              <h2>Filipino virtual assistant FAQs</h2>
              <div>{post.faq.map((item) => <details key={item.q} open>
                <summary>{item.q}</summary>
                <p>{item.a}<CitationLinks ids={item.citations}/></p>
              </details>)}</div>
            </section>

            <section className="research-related-section">
              <p className="eyebrow">Related research and planning</p>
              <h2>Keep checking the role, not the stereotype</h2>
              <div className="research-related-grid">{post.relatedLinks.map((link) => <a href={link.href} key={link.href}>
                <strong>{link.title}</strong><span>{link.description}</span><b>Read next →</b>
              </a>)}</div>
            </section>

            <section id="sources" className="research-sources">
              <p className="eyebrow">Source notes</p>
              <h2>{post.sources.length} direct sources</h2>
              <ol>{post.sources.map((source) => <li id={`source-${source.id}`} key={source.id}>
                <span>{source.scope}</span>
                <a href={source.url} rel="noopener noreferrer">{source.name}: {source.title}</a>
              </li>)}</ol>
            </section>
          </div>
        </div>
      </article>
    </main>
    <Footer/>
  </>;
}
