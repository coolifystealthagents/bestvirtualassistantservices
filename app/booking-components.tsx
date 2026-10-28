import proof from '../content/stealth-agents-proof.json';

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  const headingId = contact ? 'contact-client-reviews' : 'booking-client-reviews';
  const movingReviews = [...proof.reviews, ...proof.reviews];
  return (
    <section className={`sa-testimonials${contact ? ' sa-testimonials-contact' : ''}`} aria-labelledby={headingId}>
      <div className="sa-testimonial-heading">
        <h2 id={headingId}>Client reviews published by Stealth Agents</h2>
      </div>
      <div className="sa-testimonial-viewport" tabIndex={0} aria-label="Client testimonial marquee">
        <div className="sa-testimonial-track">
          {movingReviews.map((review, index) => (
            <article className="sa-testimonial-card" key={`${review.name}-${index}`} aria-hidden={index >= proof.reviews.length ? true : undefined} style={{ '--review-index': index } as React.CSSProperties}>
              <div className="sa-testimonial-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></div>
              <blockquote>“{review.quote}”</blockquote>
              <p><cite>{review.name}</cite></p>
            </article>
          ))}
        </div>
      </div>
      <p className="sa-testimonial-source">First party testimonials. <a href={proof.sourceUrl} target="_blank" rel="noopener noreferrer">View the source</a>. Outcomes have not been independently verified by this site.</p>
    </section>
  );
}
