import { Header, Footer, JsonLd } from './components';
import { site, comparisonRows, reviewCriteria, vettingSteps, faqs, blogPosts } from './data';

const modelLabel = (option: string) => option.replace(' virtual assistant', '').replace(' assistant', '');

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: site.url,
    description: 'Independent guides for comparing virtual assistant services, support models, and provider fit.',
  };

  return <>
    <Header />
    <main className="research-home" data-design="comparison-desk-2026-07">
      <JsonLd data={schema} />

      <section className="research-hero">
        <div className="hero-rule" aria-hidden="true" />
        <div className="container research-hero-grid">
          <div className="research-copy">
            <p className="issue-label"><span>Independent buyer's guide</span><span>2026 edition</span></p>
            <h1>Find a virtual assistant service that fits.</h1>
            <p className="research-lead">A good VA match starts with the role, not a sales pitch. Compare managed services, specialist teams, freelancers, and local hires with one clear scorecard.</p>
            <div className="actions">
              <a className="btn primary" href="/contact">Build my shortlist</a>
              <a className="text-action" href="/compare">Compare service models <span aria-hidden="true">↗</span></a>
            </div>
            <p className="cta-note">The intake asks about the role, tools, schedule, and review needs. If a staffing partner fits the request, we may share the details so they can follow up.</p>
            <div className="planning-notes" aria-label="Planning guidance">
              <div><strong>4</strong><span>service models compared</span></div>
              <div><strong>Small</strong><span>first task list</span></div>
              <div><strong>Daily</strong><span>review during the first week</span></div>
            </div>
          </div>

          <div className="editorial-visual">
            <div className="image-frame">
              <img src="/va-comparison-team.jpg" alt="Team reviewing notes together while comparing virtual assistant support options" />
              <span className="photo-index">Comparison desk</span>
            </div>
            <aside className="quick-pick" aria-label="Management load by service model">
              <p>Planning lens</p>
              <h2>Management load by service model</h2>
              <div><span>Less</span><b>Managed service</b></div>
              <div><span>Some</span><b>Specialist team</b></div>
              <div><span>More</span><b>Freelance VA</b></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="What this guide helps compare">
        <div className="container">
          <span>Screening</span><i />
          <span>Role fit</span><i />
          <span>Management</span><i />
          <span>Backup</span><i />
          <span>Security</span>
        </div>
      </section>

      <section className="container editorial-section" id="models">
        <div className="section-intro">
          <div><p className="section-number">01 / Service models</p><h2>Four ways to get help. Four very different jobs for you.</h2></div>
          <p>The cheapest quote can still be the most work. Compare who screens, trains, reviews, and steps in when the first match falls through.</p>
        </div>
        <div className="model-list">
          {comparisonRows.map((row, index) => <article className="model-row" key={row.option}>
            <div className="model-count">{String(index + 1).padStart(2, '0')}</div>
            <div className="model-name"><p>{index === 1 ? 'Lower owner load' : index === 2 ? 'Role-specific support' : index === 0 ? 'Direct management' : 'In-house context'}</p><h3>{modelLabel(row.option)}</h3></div>
            <div className="model-fit"><span>Good fit when</span><p>{row.bestFor}</p></div>
            <div className="model-question"><span>Ask before signing</span><p>{row.ask}</p></div>
          </article>)}
        </div>
        <a className="inline-link" href="/compare">Read the full comparison <span>→</span></a>
      </section>

      <section className="scorecard-section">
        <div className="container scorecard-grid">
          <div className="scorecard-copy">
            <p className="section-number light">02 / Shortlist scorecard</p>
            <h2>Make the provider earn the shortlist.</h2>
            <p>Use the same questions in every call. A polished intro means less than clear answers about screening, supervision, access, and replacement support.</p>
            <a className="btn paper-btn" href="/provider-vetting">Open the vetting guide</a>
          </div>
          <div className="score-sheet" aria-label="Provider review criteria">
            <div className="score-sheet-head"><span>Review area</span><span>Weight</span></div>
            {reviewCriteria.map((item) => <div className="score-line" key={item.label}>
              <div><strong>{item.label}</strong><p>{item.note}</p></div>
              <b>{item.score}</b>
            </div>)}
            <div className="total-line"><span>Total</span><strong>100%</strong></div>
          </div>
        </div>
      </section>

      <section className="container editorial-section launch-section">
        <div className="section-intro compact">
          <div><p className="section-number">03 / First week</p><h2>Test the handoff with a small piece of real work.</h2></div>
          <p>Use real work, keep access narrow, and review at the same time each day. You are testing the handoff as much as the assistant.</p>
        </div>
        <div className="steps-grid">
          {vettingSteps.map((step, index) => <article key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>)}
        </div>
      </section>

      <section className="reading-room">
        <div className="container">
          <div className="reading-head"><div><p className="section-number light">04 / Reading room</p><h2>Do the homework before the sales call.</h2></div><a href="/blog">Browse all guides →</a></div>
          <div className="article-grid">
            {blogPosts.slice(0, 3).map((post, index) => <a href={`/blog/${post.slug}`} key={post.slug}>
              <span>{String(index + 1).padStart(2, '0')} · {post.minutes} min read</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <b>Read guide ↗</b>
            </a>)}
          </div>
        </div>
      </section>

      <section className="container faq-section">
        <div><p className="section-number">05 / Common questions</p><h2>Answers without the pitch.</h2></div>
        <div className="faq-list">
          {faqs.map((faq, index) => <details key={faq.q} open={index === 0}>
            <summary>{faq.q}<span>+</span></summary>
            <p>{faq.a}</p>
          </details>)}
        </div>
      </section>

      <section className="container shortlist-cta">
        <div><p className="section-number">A useful next step</p><h2>Bring the task list. Leave with a sharper shortlist.</h2></div>
        <div><p>Tell us what repeats, which tools are involved, and where mistakes would hurt. We will help narrow the service model before you start interviewing.</p><a className="btn primary" href="/contact">Build my shortlist</a></div>
      </section>
    </main>
    <Footer />
  </>;
}
