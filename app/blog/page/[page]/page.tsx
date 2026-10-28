import type { Metadata } from "next";
import { FeaturedComparison } from "../../FeaturedComparison";
import { notFound } from "next/navigation";
import { Header, Footer } from "../../../components";
import { site } from "../../../data";
import { allBlogPosts } from "../../../content-library";
import { postsPerPage } from "../../../fleet-data";
import { parseBlogPage } from "./pagination.mjs";

type BlogPageProps = {
  params: Promise<{ page: string }>;
};

export function generateStaticParams() {
  const pages = Math.max(1, Math.ceil(allBlogPosts.length / postsPerPage));
  return Array.from({ length: pages }, (_, i) => ({ page: String(i + 1) }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { page } = await params;
  const pages = Math.max(1, Math.ceil(allBlogPosts.length / postsPerPage));
  const n = parseBlogPage(page, pages);
  if (n === null) notFound();

  return {
    title: `Virtual Assistant Guides - Page ${n}`,
    alternates: { canonical: n === 1 ? "/blog" : `/blog/page/${n}` },
  };
}

export default async function BlogPage({
  params,
}: BlogPageProps) {
  const { page } = await params;
  const pages = Math.max(1, Math.ceil(allBlogPosts.length / postsPerPage));
  const n = parseBlogPage(page, pages);
  if (n === null) notFound();
  const posts = allBlogPosts.slice((n - 1) * postsPerPage, n * postsPerPage);
  return (
    <>
      <Header />
      <main>
        <section className="fleet-hero">
          <div className="container">
            <p className="eyebrow">Blog page {n}</p>
            <h1>{site.brand} guides</h1>
            <p className="lead">
              Browse Philippines-based staffing and workflow articles.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-service-grid">
            {posts.map((p) => (
              <a className="card" href={`/blog/${p.slug}`} key={p.slug}>
                <img src={p.featuredImage} alt={`Illustration for ${p.title}`} width="1200" height="630" loading="lazy" />
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
                {p.published ? <time dateTime={p.published}>Published {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${p.published}T00:00:00Z`))}</time> : null}
                <span>{p.minutes} min read</span>
                <b>Read article →</b>
              </a>
            ))}
          </div>
          {n === 2 ? <FeaturedComparison /> : null}
          <nav className="pagination" aria-label="Blog pages">
            {Array.from({ length: pages }, (_, i) => (
              <a
                aria-current={i + 1 === n ? "page" : undefined}
                href={i === 0 ? "/blog" : `/blog/page/${i + 1}`}
                key={i}
              >
                {i + 1}
              </a>
            ))}
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
