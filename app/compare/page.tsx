import { Header, Footer, JsonLd } from '../components';
import { comparisonRows, homepageImages, providerQuestions, reviewCriteria, site } from '../data';

export const metadata = {
  title: 'Compare the best virtual assistant services',
  description: 'Compare freelance VAs, managed VA services, specialist agencies, and employees with a practical buyer scorecard.',
  alternates: { canonical: '/compare' },
};

const modelNotes = [
  { label: 'Best for direct control', load: 'High owner involvement', badge: 'Flexible start' },
  { label: 'Best for less admin', load: 'Lower owner involvement', badge: 'Managed support' },
  { label: 'Best for skilled roles', load: 'Shared involvement', badge: 'Role expertise' },
  { label: 'Best for company context', load: 'Full employer involvement', badge: 'In-house hire' },
] as const;

export default function ComparePage(){
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Compare virtual assistant services',
    url: `${site.url}/compare`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Compare virtual assistant services', item: `${site.url}/compare` },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: comparisonRows.map((row, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: row.option,
        description: row.bestFor,
      })),
    },
  };

  return <>
    <Header/>
    <main className="compare-page">
      <JsonLd data={schema}/>

      <section className="compare-hero">
        <div className="container compare-hero-grid">
          <div className="compare-hero-copy">
            <p className="compare-kicker"><span>2026 buyer&apos;s guide</span><span>4 service models</span></p>
            <h1>Compare virtual assistant services without getting lost in the sales pitch.</h1>
            <p>The right choice depends on the work and how much management you can provide. This guide puts four common service models on the same page.</p>
            <div className="compare-hero-actions">
              <a className="compare-primary" href="#comparison-board">See the comparison</a>
              <a className="compare-secondary" href="/provider-vetting">Get the vetting questions</a>
            </div>
            <div className="editorial-promise">
              <span aria-hidden="true">★</span>
              <p><strong>No universal number one.</strong> Each model wins for a different kind of buyer.</p>
            </div>
          </div>
          <figure className="compare-cover">
            <img src={homepageImages.comparisonDesk.url} alt={homepageImages.comparisonDesk.alt}/>
            <figcaption><span>Editor&apos;s desk</span><strong>Fit before price</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="compare-board" id="comparison-board">
        <div className="container">
          <div className="compare-section-head">
            <div><p>At-a-glance review</p><h2>Start with the model, then compare providers.</h2></div>
            <p>A low rate can hide extra training and review time. Check who recruits, who checks the work, and what happens when the first match fails.</p>
          </div>
          <div className="model-review-grid">
            {comparisonRows.map((row, index) => <article className="model-review-card" key={row.option}>
              <div className="model-review-top"><span>{String(index + 1).padStart(2, '0')}</span><b>{modelNotes[index].badge}</b></div>
              <p className="model-award">{modelNotes[index].label}</p>
              <h3>{row.option}</h3>
              <div className="involvement-meter" aria-label={modelNotes[index].load}>
                <span className={index === 1 ? 'filled' : ''}/><span className={index < 3 ? 'filled' : ''}/><span className={index !== 1 ? 'filled' : ''}/><span className={index === 0 || index === 3 ? 'filled' : ''}/>
              </div>
              <small>{modelNotes[index].load}</small>
              <p>{row.bestFor}</p>
              <div className="ask-box"><span>Ask first</span><strong>{row.ask}</strong></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="review-method">
        <div className="container review-method-grid">
          <div className="review-method-copy">
            <p className="review-label">Our review sheet</p>
            <h2>Score every sales call the same way.</h2>
            <p>Do not rely on a smooth demo or a long client list. Ask for clear proof about screening, day-to-day support, safe access, role fit, and pilot terms.</p>
            <a href="/provider-vetting">Open the full provider vetting guide <span>→</span></a>
            <div className="source-note">
              <strong>Security check:</strong> Use least-access rules when a VA handles company systems. The <a href="https://www.nist.gov/itl/smallbusinesscyber">NIST small business cybersecurity guide</a> is a useful starting point.
            </div>
          </div>
          <div className="review-rubric" aria-label="Provider review scorecard">
            <div className="rubric-head"><span>Review area</span><span>Weight</span></div>
            {reviewCriteria.map((item) => <div className="rubric-row" key={item.label}>
              <div><strong>{item.label}</strong><p>{item.note}</p></div><b>{item.score}</b>
            </div>)}
            <div className="rubric-total"><span>Provider score</span><strong>____ / 100</strong></div>
          </div>
        </div>
      </section>

      <section className="compare-call-guide">
        <div className="container compare-call-grid">
          <div><p className="compare-kicker dark"><span>Shortlist step</span></p><h2>Take these questions into the call.</h2><p>Write down the answer while the provider talks. A vague answer is easier to spot when every company gets the same question.</p></div>
          <ol>{providerQuestions.slice(0, 5).map((question, index) => <li key={question}><span>{index + 1}</span><p>{question}</p></li>)}</ol>
        </div>
      </section>

      <section className="container compare-final-cta">
        <div><p>Need a second set of eyes?</p><h2>Bring us the role, tools, and hours.</h2></div>
        <div><p>We will help you choose a service model and build a tighter provider shortlist.</p><a href="/contact">Build my shortlist</a></div>
      </section>
    </main>
    <Footer/>
  </>;
}
