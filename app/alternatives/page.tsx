import { Header, Footer } from '../components';
import { alternatives } from './data';
export const metadata={title:'Virtual Assistant Service Alternatives | 2026 Buyer Guides',description:'Compare named virtual assistant service alternatives using equivalent hours, location, management, backup, and current pricing evidence.',alternates:{canonical:'/alternatives'}};
export default function Alternatives(){
  return <><Header/><main className="alt-page"><section className="alt-index-hero"><div className="container"><p className="eyebrow">Independent buyer guides · Reviewed July 29, 2026</p><h1>Virtual assistant service alternatives</h1><p>Named comparisons built around equivalent scope, not a headline rate. Check hours, location, management, backup, and contract terms before choosing.</p></div></section><section className="section"><div className="container alt-index-grid">{alternatives.map((item,index)=><a href={`/alternatives/${item.slug}`} className="alt-card" key={item.slug}><span>{String(index+1).padStart(2,'0')}</span><h2>{item.competitor} alternatives</h2><p>{item.serviceModel}</p><b>Compare options →</b></a>)}</div></section></main><Footer/></>;
}

