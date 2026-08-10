import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';
import { allBlogPosts } from '../../content-library';

export function generateStaticParams() {
  return allBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${site.brand}`,
    description: post.excerpt,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
  };
}

function ArticleHtml({ html }: { html: string }) {
  return <p dangerouslySetInnerHTML={{ __html: html }} />;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        <article className="section">
          <div className="container article-shell">
            {post.published ? <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, datePublished: post.published, dateModified: post.modified || post.published, mainEntityOfPage: `${site.url}/blog/${post.slug}`, publisher: { '@type': 'Organization', name: site.brand } }} /> : null}
            <p className="eyebrow">{site.brand} blog</p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            {post.published ? <p className="article-date">Published {post.published}</p> : null}
            <div className="blog-standards-strip" aria-label="Article standards">
              <span>{post.minutes} minute read</span>
              <span>Contextual internal links</span>
              <span>Authoritative source in body</span>
            </div>

            <aside className="article-rotation-banner article-rotation-banner-top" data-article-banner="true">
              <p className="eyebrow">Role planning checkpoint</p>
              <h2>Turn this guide into a clear role brief</h2>
              <p>Share the work queue, tools, review owner, and approval limits before adding outside support.</p>
              <a className="btn" href="/contact-us">Contact Us</a>
            </aside>

            <section className="card article-card">
              <h2>Key takeaways</h2>
              <ul>
                {post.keyTakeaways.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            {post.sections.map((section, index) => (
              <section className="card article-card" key={section.heading}>
                <h2>{section.heading}</h2>
                <ArticleHtml html={section.body} />
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
                {index === 1 ? (
                  <aside className="article-rotation-banner article-rotation-banner-middle" data-article-banner="true">
                    <p className="eyebrow">Midpoint planning check</p>
                    <h2>Compare every provider against the same workflow</h2>
                    <p>Use one task lane, one reviewer, and one quality check so each provider conversation is easier to judge.</p>
                    <a className="btn" href="/contact-us">Contact Us</a>
                  </aside>
                ) : null}
              </section>
            ))}

            {post.faq.length ? (
              <section className="card article-card">
                <h2>FAQ</h2>
                {post.faq.map((item) => (
                  <div className="faq-item" key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </section>
            ) : null}

          </div>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
