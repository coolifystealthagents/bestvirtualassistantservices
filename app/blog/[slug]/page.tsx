import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';

export function generateStaticParams() { return blogPosts.map((p)=>({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p)=>p.slug===slug);
  return { title: post?.title || 'Guide', description: post?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const post = blogPosts.find((p)=>p.slug===slug) || blogPosts[0];
 const related = blogPosts.filter((p)=>p.slug !== post.slug).slice(0,3);
 const schema = [{
  '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt, url: `${site.url}/blog/${post.slug}`,
  publisher: { '@type': 'Organization', name: site.brand, url: site.url },
  mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  citation: post.sources?.map((s)=>s.url),
  hasPart: post.sections.map((s, i)=>({ '@type': 'WebPageElement', position: i + 1, name: s.heading }))
 }, {
  '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: post.faq.map((f)=>({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
 }];
 return <><Header/><main className="section"><JsonLd data={schema}/><article className="container" style={{maxWidth:900}}><p className="eyebrow">{site.brand} guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><div className="card"><h2>Key takeaways</h2><ul className="list"><li>Start with one clear role and a short task list.</li><li>Compare providers by support model, not only rate card.</li><li>Use a small pilot before adding more access or hours.</li></ul></div>{post.sections.map((section)=><section className="article-section" key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p>{section.bullets ? <ul className="list">{section.bullets.map((b)=><li key={b}>{b}</li>)}</ul> : null}</section>)}<section className="card"><h2>Provider call script</h2><p className="quote">“Here is the exact work we need help with. Can you show how you would screen, train, back up, and check quality for this role?”</p><p>Then share 3 to 5 real tasks and ask what the first week would look like.</p></section><section className="article-section"><h2>FAQ</h2>{post.faq.map((f)=><div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}</section>{post.sources?.length ? <section className="article-section"><h2>Sources and context</h2><div className="cards">{post.sources.map((s)=><a className="card" href={s.url} key={s.name}><h3>{s.name}</h3><p>{s.note}</p></a>)}</div></section> : null}<section className="article-section"><h2>Related guides</h2><div className="cards">{related.map((p)=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h3>{p.title}</h3><p>{p.excerpt}</p></a>)}</div></section></article><CTA/></main><Footer/></>;
}
