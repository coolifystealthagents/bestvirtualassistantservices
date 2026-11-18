import { Header, Footer } from "../components";
import { allResearchPosts, frozenAug10ResearchRank } from "../content-library";
import { site } from "../data";
const formatDate = (date: string) => new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
export const metadata = {
  title: 'Research',
  description:
    "Original research and source-backed analysis for planning Philippines-based support.",
  alternates: { canonical: '/research' },
};
export default function Research() {
  const clusters = [
    "All Research",
    "Hiring Controls",
    "Scope Benchmarks",
    "Workflow Design",
  ];
  const posts = [...allResearchPosts].sort((a, b) => {
    const dateOrder = b.published.localeCompare(a.published);
    if (dateOrder) return dateOrder;
    const aRank = frozenAug10ResearchRank.get(a.slug);
    const bRank = frozenAug10ResearchRank.get(b.slug);
    if (aRank !== undefined || bRank !== undefined) {
      if (aRank === undefined) return 1;
      if (bRank === undefined) return -1;
      return aRank - bRank;
    }
    return a.slug.localeCompare(b.slug);
  });
  return (
    <>
      <Header />
      <main className="research-index-page">
        <section className="research-hero">
          <div className="container research-hero-grid">
            <div>
              <p className="eyebrow">Research Library</p>
              <h1>Source-backed research for better staffing decisions</h1>
              <p className="lead">
                Use these reports to compare roles, costs, controls, and
                onboarding decisions before building a Philippines-based support
                team.
              </p>
              <div className="research-meta">
                <span>{posts.length || 0} reports</span>
                <span>Methodology notes</span>
                <span>Buyer controls</span>
              </div>
            </div>
            <aside className="research-hero-card"><img src="/photos/research.webp" alt="Research notes and a laptop on a working desk" width="1200" height="800"/></aside>
          </div>
        </section>
        <section className="section research-library-section">
          <div className="container">

            <div className="research-card-grid">
              {posts.length ? (
                posts.map((p, i) => (
                  <a
                    className="research-library-card"
                    href={`/research/${p.slug}`}
                    key={p.slug}
                  >
                    <img src={p.thumbnail || "/photos/research.webp"} alt={p.title} width="1200" height="675" loading="lazy"/><span className="research-card-badge">
                      Research
                    </span>
                    <h2>{p.title}</h2>
                    <p className="research-card-highlight">
                      Published{" "}
                      <time dateTime={p.published}>{formatDate(p.published)}</time> ·
                      Planning signal: compare the role, review owner, and
                      handoff risk before hiring.
                    </p>
                    <p className="research-card-excerpt">{p.excerpt}</p>
                    <div className="research-card-meta">
                      <span>{site.brand} Research</span>
                      <span>{p.readingMinutes} min read</span>
                      <span>Source-backed</span>
                    </div>
                  </a>
                ))
              ) : (
                <div className="research-library-card empty-state">
                  <span className="research-card-badge">Coming soon</span>
                  <h2>Research is being prepared</h2>
                  <p className="research-card-highlight">
                    The library will group reports by buyer controls,
                    benchmarks, and workflow design.
                  </p>
                  <p className="research-card-excerpt">
                    Visit the blog for practical planning guides while formal
                    research pages are prepared.
                  </p>
                  <a className="btn primary" href="/blog">
                    Visit the blog
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="section research-methodology">
          <div className="container">
            <h2>Methodology and use</h2>
            <p>
              Each research page should make assumptions visible, separate
              sourced facts from recommendations, and translate findings into a
              role brief your team can review.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
