# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the site's public marketing and editorial copy. The pass covered the homepage, shared site data, comparison and provider-vetting pages, blog index and article template, all four guide records, contact intake, shared header/footer/CTA copy, thank-you page, and page metadata.

## Reviewed files

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/compare/page.tsx`
- `app/provider-vetting/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`
- `app/layout.tsx`

## What changed

- Removed unsupported setup-time and task-count ranges from the homepage.
- Removed dormant ratings and proof-like statistics that had no source and could leak back into a later design.
- Replaced one repeated set of article takeaways with guidance written for each guide.
- Repaired damaged FAQ wording, including the broken monthly-plan question and a sentence where "price" had been replaced by "plan."
- Rewrote the contact intake around role details and owner decisions instead of broad promises from "our staffing team."
- Replaced the launch placeholder and false "request received" message with an honest note that the preview form is not connected to an inbox.
- Shortened several headings after local visual review found orphaned words.
- Changed curly quotation marks and stiff CTA language to plain, direct copy.

## Final anti-AI pass

The first edit still had a few tidy, repeated patterns: every article used the same three takeaways, the contact page sounded like a generic staffing pitch, and several numbers looked more authoritative than the site could support. The final pass made each guide specific, removed unsupported figures, fixed broken sentences, and kept the writing direct without adding invented proof or personal stories.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were excluded. Their wording and legal meaning were not changed. `DESIGN-RESEARCH.md` was read for context but not edited. Route slugs, source citations, schema types, comparison structure, and the site's referral disclosure were preserved.
