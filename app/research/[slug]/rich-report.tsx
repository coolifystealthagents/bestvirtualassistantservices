import { Footer, Header, JsonLd } from '../../components';
import type { ResearchParagraph, ResearchPost } from '../../fleet-data';
import { site } from '../../data';

function CitationLinks({ ids }: { ids?: readonly number[] }) {
  if (!ids?.length) return null;
  return <>{ids.map((id) => <sup className="research-citation" key={id}><a href={`#source-${id}`} aria-label={`Source ${id}`}>[{id}]</a></sup>)}</>;
}

function Narrative({ paragraph }: { paragraph: ResearchParagraph }) {
  return <p data-narrative="true">{paragraph.text}<CitationLinks ids={paragraph.citations}/></p>;
}

function ArticleBanner({ banner, number }: { banner: NonNullable<ResearchPost['banners']>[number]; number: number }) {
  return <aside className="publisher-banner" data-article-banner={number}>
    <div><p className="eyebrow">{banner.eyebrow}</p><h2>{banner.title}</h2></div>
    <div><p>{banner.text}</p><a className="btn primary" href={banner.href}>{banner.linkLabel}</a></div>
  </aside>;
}

function EvidenceChart({ chart }: { chart: NonNullable<ResearchPost['chart']> }) {
  const max = 100;
  return <figure className="publisher-visual" id="evidence-chart" tabIndex={0} aria-label={`${chart.title}. Scroll sideways to read the full chart.`}>
    <figcaption><strong>{chart.title}</strong><span>{chart.unit}</span></figcaption>
    <p className="visual-scroll-cue">Swipe sideways to read the chart.</p>
    <svg viewBox="0 0 760 390" role="img" aria-labelledby="chart-title chart-desc">
      <title id="chart-title">{chart.title}</title>
      <desc id="chart-desc">Horizontal bar chart of four Philippine indicators. Each bar is labeled with its percentage and year.</desc>
      {[0, 25, 50, 75, 100].map((tick) => <g key={tick}>
        <line x1={190 + tick * 5} x2={190 + tick * 5} y1="38" y2="335" className="chart-grid"/>
        <text x={190 + tick * 5} y="360" textAnchor="middle" className="chart-axis">{tick}%</text>
      </g>)}
      {chart.items.map((item, index) => {
        const y = 55 + index * 70;
        const width = Math.max(1, (item.value / max) * 500);
        return <g key={item.label}>
          <text x="176" y={y + 19} textAnchor="end" className="chart-label">{item.label}</text>
          <rect x="190" y={y} width={width} height="30" rx="5" className="chart-bar"/>
          <text
            x={item.value > 85 ? 675 : 200 + width}
            y={y + 20}
            textAnchor={item.value > 85 ? 'end' : 'start'}
            className={`chart-value${item.value > 85 ? ' chart-value-inside' : ''}`}
          >{item.display} · {item.year} [{item.citation}]</text>
        </g>;
      })}
    </svg>
    <p className="visual-note"><strong>Method:</strong> {chart.method}</p>
  </figure>;
}

function ControlGraphic({ graphic }: { graphic: NonNullable<ResearchPost['graphic']> }) {
  return <figure className="publisher-visual publisher-control-map" id="control-map" tabIndex={0} aria-label={`${graphic.title}. Scroll sideways to read the full graphic.`}>
    <figcaption><strong>{graphic.title}</strong><span>Task ownership guide</span></figcaption>
    <p className="visual-scroll-cue">Swipe sideways to read the graphic.</p>
    <svg viewBox="0 0 900 350" role="img" aria-labelledby="control-title control-desc">
      <title id="control-title">{graphic.title}</title>
      <desc id="control-desc">Three connected boxes show that the assistant prepares work, the manager reviews it, and the owner keeps final decisions.</desc>
      {graphic.steps.map((step, index) => {
        const x = 25 + index * 295;
        return <g key={step.label}>
          <rect x={x} y="55" width="260" height="205" rx="18" className={`control-box control-box-${index + 1}`}/>
          <text x={x + 22} y="95" className="control-number">0{index + 1}</text>
          <text x={x + 22} y="132" className="control-title">{step.label}</text>
          <foreignObject x={x + 22} y="148" width="215" height="92">
            <p className="control-detail">{step.detail}</p>
          </foreignObject>
          {index < graphic.steps.length - 1 ? <path d={`M ${x + 265} 145 L ${x + 288} 145`} className="control-arrow" markerEnd="url(#arrowhead)"/> : null}
        </g>;
      })}
      <defs><marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" className="control-arrow-head"/></marker></defs>
    </svg>
    <p className="visual-note">{graphic.note}</p>
  </figure>;
}

export function RichResearchArticle({ post, schemas }: { post: ResearchPost; schemas: readonly unknown[] }) {
  const canonical = `${site.url}/research/${post.slug}`;
  const banners = post.banners || [];
  const publishedLabel = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${post.published}T00:00:00Z`));
  const firstSections = post.sections.slice(0, 2);
  const middleSections = post.sections.slice(2, 5);
  const lastSections = post.sections.slice(5);

  return <>
    <Header hidePricing={post.noPricing}/>
    <main className="research-report publisher-report" data-article-revision={post.revision} data-primary-keyword={post.primaryKeyword}>
      <JsonLd data={schemas}/>
      <article data-publisher-article="true">
        <header className="research-report-hero publisher-hero">
          <div className="container research-report-hero-grid">
            <div>
              <nav className="research-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/research">Research</a><span>/</span><span>Hiring guide</span></nav>
              <p className="eyebrow">Philippines hiring guide · 2026</p>
              <h1>{post.title}</h1>
              <p className="research-report-lead">{post.excerpt}</p>
              <div className="research-report-meta" aria-label="Article details">
                <span>Published <time dateTime={post.published}>{publishedLabel}</time></span>
                <span>{post.readingMinutes} minute read</span>
                <span>{post.sources.length} numbered sources</span>
              </div>
            </div>
            <aside className="research-key-box" aria-labelledby="publisher-takeaways-title">
              <p className="eyebrow">Key takeaways</p>
              <h2 id="publisher-takeaways-title">A safer hiring path</h2>
              <ul>{post.keyTakeaways.map((item) => <li key={item}>{item}</li>)}</ul>
            </aside>
          </div>
        </header>

        <section className="research-stat-band" aria-label="Dated Philippines indicators">
          <div className="container research-stat-grid">{post.stats.map((stat) => <article key={stat.label}>
            <strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.note} <a href={`#source-${stat.citation}`}>[{stat.citation}]</a></small>
          </article>)}</div>
        </section>

        <div className="container research-report-layout">
          <aside className="research-toc" aria-label="On this page">
            <strong>On this page</strong>
            <a href="#role-first">Role first</a><a href="#evidence-chart">Evidence chart</a><a href="#hiring-table">Hiring table</a><a href="#expert-quote">Expert view</a><a href="#control-map">Control map</a><a href="#methodology">Method</a><a href="#faq">FAQs</a><a href="#sources">Sources</a>
          </aside>
          <div className="research-report-body">
            {firstSections.map((section, index) => <section id={index === 0 ? 'role-first' : undefined} className="research-copy-section" key={section.heading}>
              <h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <Narrative paragraph={paragraph} key={paragraph.text}/>)}
              {section.bullets?.length ? <ul className="research-check-list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </section>)}

            {banners[0] ? <ArticleBanner banner={banners[0]} number={1}/> : null}
            {post.chart ? <EvidenceChart chart={post.chart}/> : null}

            {middleSections.slice(0, 1).map((section) => <section className="research-copy-section" key={section.heading}>
              <h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <Narrative paragraph={paragraph} key={paragraph.text}/>)}
              {section.bullets?.length ? <ul className="research-check-list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </section>)}

            <section id="hiring-table" className="research-copy-section">
              <h2>What to check at each hiring step</h2>
              <p data-narrative="true">The table keeps candidate evidence beside the decisions that remain with your business. It also flags shortcuts that can expose customer information or produce a poor role match.</p>
              <p className="table-scroll-cue">Swipe the table sideways to read every column.</p>
              <div className="research-table-wrap" data-wide-table="true">
                <table><caption>{post.comparisonTable.caption}</caption><thead><tr>{post.comparisonTable.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
                <tbody>{post.comparisonTable.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td data-label={post.comparisonTable.headers[index]} key={cell}>{cell}</td>)}</tr>)}</tbody></table>
              </div>
            </section>

            {middleSections.slice(1).map((section) => <section className="research-copy-section" key={section.heading}>
              <h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <Narrative paragraph={paragraph} key={paragraph.text}/>)}
              {section.bullets?.length ? <ul className="research-check-list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </section>)}

            {post.expertQuote ? <figure id="expert-quote" className="publisher-quote">
              <blockquote>"{post.expertQuote.quote}"</blockquote>
              <figcaption>{post.expertQuote.person}, {post.expertQuote.title} <a href={`#source-${post.expertQuote.sourceId}`}>[source {post.expertQuote.sourceId}]</a></figcaption>
            </figure> : null}

            {banners[1] ? <ArticleBanner banner={banners[1]} number={2}/> : null}

            {lastSections.map((section, index) => <section className="research-copy-section" key={section.heading}>
              <h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <Narrative paragraph={paragraph} key={paragraph.text}/>)}
              {section.bullets?.length ? <ul className="research-check-list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              {index === 0 && post.graphic ? <ControlGraphic graphic={post.graphic}/> : null}
            </section>)}

            {banners[2] ? <ArticleBanner banner={banners[2]} number={3}/> : null}

            <section id="methodology" className="research-method-card">
              <p className="eyebrow">Method and limits</p><h2>How this guide was built</h2>
              {post.methodology.map((paragraph) => <Narrative paragraph={paragraph} key={paragraph.text}/>)}
            </section>

            <section id="faq" className="research-faq-section">
              <p className="eyebrow">Buyer questions</p><h2>Hiring a Philippines-based virtual assistant FAQs</h2>
              <div>{post.faq.map((item) => <details key={item.q} open><summary>{item.q}</summary><p>{item.a}<CitationLinks ids={item.citations}/></p></details>)}</div>
            </section>

            <section className="research-related-section">
              <p className="eyebrow">Related planning</p><h2>Build the role before adding access</h2>
              <div className="research-related-grid">{post.relatedLinks.map((link) => <a href={link.href} key={link.href}><strong>{link.title}</strong><span>{link.description}</span><b>Read next →</b></a>)}</div>
            </section>

            <section id="sources" className="research-sources">
              <p className="eyebrow">Numbered sources</p><h2>{post.sources.length} authoritative sources</h2>
              <ol>{post.sources.map((source) => <li id={`source-${source.id}`} key={source.id}><span>{source.scope}</span><a href={source.url} rel="noopener noreferrer">{source.name}: {source.title}</a></li>)}</ol>
            </section>
            <span className="publisher-revision" aria-hidden="true">{post.revision}</span>
          </div>
        </div>
      </article>
    </main>
    <Footer hidePricing={post.noPricing}/>
  </>;
}
