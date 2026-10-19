# V3 Acceptance Ledger

Status vocabulary: **PASS** means the repository source gate was checked in this worktree. **PENDING** means implementation belongs to a later task. **NOT VERIFIED** means the implementation may exist, but this task did not perform the named browser or live check.

| Phase | Gate | Status | Evidence or next check |
| --- | --- | --- | --- |
| Task 1: official sources | Official logo and Bacolod team image are local PNG assets with provenance | PASS | `public/brand/` and `content/stealth-agents-proof.json` |
| Task 1: proof | Ten unique verbatim first party reviews, attribution, source URL, and limitation | PASS | `content/stealth-agents-proof.json` |
| Task 1: proof rail | One mapped DOM card per record; automatic horizontal rail; static reduced motion set | PASS | `app/booking-components.tsx`, `app/globals.css` |
| Task 1: shell | Subsidiary icon, separate sponsor wordmark, exact sponsorship phrase, three primary links | PASS | `app/components.tsx` |
| Task 1: shell accessibility | Skip link, mobile disclosure state, Escape, focus containment and return, overflow cleanup | PASS | Source inspection of `app/components.tsx` |
| Task 1: contact | Form is owned by contact page; no scheduler; official team section follows hero | PASS | `app/contact-us/page.tsx` |
| Task 1: ingestion | Only accepted POST redirects; tracking is best effort after acceptance | PASS | `app/contact-us/StandardContactForm.tsx` |
| Task 1: conversion | Truthful direct-load next page and scheduler isolated to noindex thank-you route | PASS | `app/thanks-whats-next/page.tsx`, `app/thank-you/page.tsx` |
| Task 1: desktop fold | Balanced layout and visible submit at 1366 by 768 and 1440 by 800 | NOT VERIFIED | Requires browser screenshots at both viewport sizes |
| Task 1: responsive and accessibility | Keyboard, screen reader, reduced motion, and 44 pixel target browser behavior | NOT VERIFIED | Requires browser and assistive technology checks |
| Task 1: production | Deployed asset responses, submission endpoint, tracking, redirect, and scheduler | NOT VERIFIED | No deployment or live verification performed |
| Task 2: service source | Ten service records, unique concise metadata, deep body content, three or more FAQs, and complete long-form rendering | PASS | `app/fleet-data.ts`, `app/services/[slug]/page.tsx`, and focused contract assertions |
| Task 2: service artwork | Ten unique local route-specific SVG heroes use the exact 1200 by 675 canvas and contain no active or external content | PASS | `public/services/` and XML parse plus focused contract assertions |
| Task 2: navigation source | Route-aware active state, `aria-current`, persistent mobile sponsor, and main-content scroll offset | PASS | `app/components.tsx`, `app/globals.css`, and focused contract assertions |
| Task 2: service and navigation visual | Hero composition, sticky navigation, mobile sponsor layout, responsive wrapping, and focus behavior | NOT VERIFIED | Requires browser screenshots and keyboard checks across the viewport matrix |
| Task 2: service and navigation production | Deployed service images, structured data, route status, canonical response, and navigation state | NOT VERIFIED | No deployment or live verification performed |
| Task 3: blog source | Stable duplicate-safe H2 anchors, complete shared navigation, active section state, sticky desktop sidebar, and mobile disclosure | PASS | `app/blog/[slug]/page.tsx`, `app/blog/[slug]/ArticleNavigation.tsx`, `app/globals.css`, and focused contract assertions |
| Task 3: blog browser | Sticky offset, active-section changes, focus visibility, disclosure behavior, reading measure, and overflow across the viewport matrix | NOT VERIFIED | Requires browser screenshots, keyboard checks, and responsive interaction checks |
| Task 3: blog production | Deployed article anchors, direct fragment loads, navigation state, and responsive behavior | NOT VERIFIED | No deployment or live verification performed |
| Task 4: platform | Middleware, canonical host, security headers, sitemap, not found, and punctuation sanitation | PENDING | Outside Task 2 scope |
| Final release | Full contract, build, browser matrix, live smoke test, and deployment approval | PENDING | Complete after all remediation tasks |

## Task 1 source acceptance

The focused V3 contract and diff hygiene command must be recorded in the implementing commit report. Failures tied only to later task phases remain pending and must not be represented as Task 1 regressions without review.
