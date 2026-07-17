# DrLisaKoche.com Site Review

**Review date:** July 17, 2026
**Scope:** Code cleanliness, versatility, speed, content, design, accessibility, SEO, and responsive behavior
**Review mode:** Read-only audit; no implementation changes were made as part of the review

## Executive Summary

The site already succeeds visually. It feels modern, clean, editorial, colorful without becoming cartoonish, and credible for a physician-led personal brand. The underlying design system does not need a reset.

It is not launch-ready yet. The most important risks are conversion routing, unfinished proof and legal content, mobile CTA behavior, migration SEO, and image payload—not the core aesthetic.

The production build, lint, and TypeScript checks pass. The rendered site was reviewed at 375px, 900px, 1024px, and 1280px across the homepage, speaking page, legal pages, legacy routes, and static output. No horizontal overflow or browser-console errors were observed.

### Highest-priority launch risks

1. Primary same-domain CTAs will fail after custom-domain cutover unless external routing preserves their current pages.
2. The brand logo does not navigate home from speaking or legal pages.
3. Legacy URLs return HTTP 200 pages with JavaScript redirects rather than real 301/308 redirects.
4. The homepage mobile sticky CTA covers content, including another hero CTA.
5. Testimonials, credentials, media proof, stage photography, and legal pages remain explicitly unfinished.
6. Large unoptimized images create avoidable payload costs.

The central recommendation is to preserve the visual system and perform a focused launch-hardening pass.

## Review Method

The audit included:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- Inspection of all generated static routes and metadata
- Local HTTP status checks for live and legacy paths
- Responsive visual review at 375px, 900px, 1024px, and 1280px
- Homepage and speaking-page navigation and CTA testing
- Accessibility, reduced-motion, contrast, semantics, and keyboard-structure review
- Image, font, JavaScript, and static-output payload inspection
- Content, claims, CTA, proof, legal-readiness, and design-system review

All validation passed at the build level, and the worktree was clean at the conclusion of the review.

---

## Area 1: Code Cleanliness, Website Versatility, and Speed

### What is working well

- Static export is appropriate for the site. It avoids server/runtime complexity and matches the site's content-led scope.
- Dependencies are minimal: Next.js, React, Tailwind, TypeScript, and linting, with no heavy component, animation, analytics, or data libraries.
- Site identity, navigation, destinations, contact information, homepage content, and speaking content are centralized in typed data modules.
- Tokens and primitives create a strong consistency layer for containers, sections, headings, buttons, cards, spectrum elements, and surface tones.
- Most content remains server-rendered. Client JavaScript is limited to navigation, scrollspy, and sticky-CTA behavior.
- Semantic structure is generally strong: one H1 per page, sensible H2/H3 progression, landmarks, useful image descriptions, visible focus rings, and adequate tap targets.
- Image containers reserve layout space, the primary images are preloaded, and below-fold imagery is lazy-loaded.
- Canonical origin, sitemap, robots, generated Open Graph artwork, and legal `noindex` scaffolding are present.
- No horizontal overflow was found at the tested widths.
- The browser console produced no warnings or errors.

### Launch-critical code and routing issues

#### 1. Primary same-domain CTA routes are absent from the export

`src/data/home.ts:20-31` points important CTAs to:

- `https://drlisakoche.com/speaker/`
- `https://drlisakoche.com/how-to-work-with-me/#freeresources`
- `https://drlisakoche.com/how-to-work-with-me/#onlinecourses`
- `https://drlisakoche.com/affiliate-links/`

None of `/speaker/`, `/how-to-work-with-me/`, or `/affiliate-links/` exists in the static output or `src/data/legacy-redirects.ts`. `vercel.json` contains no compensating rewrite or redirect rules.

These links work while the incumbent site owns `drlisakoche.com` and the refresh lives on a separate Vercel domain. If this export takes over the whole custom domain, the primary speaking conversion path and multiple resource links will return 404 unless those pages are separately preserved.

Additional route problems:

- `links.book` points to the site root. After launch, “Explore the book” will loop back to the refreshed homepage instead of reaching a book page or retailer.
- The “Full media library” entry points to `/media/`, whose legacy mapping returns users to `/speaking/#media`, creating a self-referential loop rather than a larger library.

**Recommendation:** Establish an explicit domain-cutover contract before launch. For every incumbent route, decide whether to rebuild it, redirect it, retain it behind upstream routing, or replace every link to it.

#### 2. The brand mark does not navigate home from subpages

`src/components/home/brand-mark.tsx:8-23` always calls `preventDefault()`, scrolls the current document to the top, and retains the current pathname.

Confirmed behavior: clicking “Dr. Lisa Koche home” from `/speaking/` leaves the user on `/speaking/`. The same component appears in both the header and footer and is also used on legal pages.

This violates a standard website convention and creates a direct navigation failure.

#### 3. Legacy redirects are not HTTP redirects

`src/app/[...legacyPath]/page.tsx:46-82` emits an HTTP 200 HTML document containing `window.location.replace(...)`. `vercel.json` does not define 301/308 redirects.

Confirmed behavior: `/about/` returns `200 OK`.

Consequences:

- Weaker migration and link-equity signals
- Possible soft-redirect interpretation by search engines
- No redirect for JavaScript-disabled or script-restricted clients
- Less accurate analytics and status-code monitoring
- Roughly 42KB of HTML plus framework resources for behavior that should happen before rendering

The redirect data, normalization, static enumeration, and safe string serialization are well implemented. The delivery layer is the problem.

**Recommendation:** Generate host-level redirects from the same typed redirect map so the source of truth remains centralized.

#### 4. Homepage mobile sticky CTA obstructs content

`src/components/home/home-page.tsx:508-515` renders the fixed mobile CTA at every scroll position.

At 375×812 on initial load:

- “Visit Spectra Wellness” occupied approximately pixels 724–772.
- The fixed speaking CTA occupied approximately pixels 748–796.
- The overlap was approximately 24px.

The CTA also covers portions of cards and footer content during normal scrolling. It duplicates the hero CTA and the CTA inside the open mobile menu.

The speaking page already has better sentinel-based visibility logic that hides its sticky CTA around the hero and final band. The homepage and speaking page should use one standardized implementation.

### Speed and payload findings

#### 5. Unoptimized original images dominate the avoidable payload

`next.config.ts:3-8` combines static export with `images.unoptimized: true`. As a result, the `sizes` declarations do not generate responsive image sources.

Measured assets:

- Homepage hero portrait: approximately 79KB — good.
- Spectra team PNG: 1,281,389 bytes — served unchanged despite rendering at roughly 423×320 on desktop.
- Speaking hero JPEG: 318,509 bytes.
- Existing same-dimension speaking AVIF: 62,741 bytes.
- Existing speaking WebP: 130,712 bytes.

The team image is lazy-loaded, which limits its initial-load cost, but it still makes the full homepage unnecessarily heavy. The speaking route starts near 700KB compressed before ancillary requests, driven substantially by the hero JPEG.

**Recommendation:** Pre-generate correctly sized AVIF/WebP variants or use `<picture>` sources appropriate to the static-export architecture.

#### 6. JavaScript is reasonable but should not grow

The homepage and speaking page each load approximately 197KB gzip of JavaScript plus approximately 174KB of preloaded fonts.

This is acceptable for the selected Next.js stack, but relatively high for the small interaction surface. The current server/client boundary is good and should remain narrow.

Do not turn complete sections or page shells into client components unless a real interaction requires it.

#### 7. Global section animation may weaken perceived loading

`src/app/globals.css:92-98` applies a reveal animation to every semantic `<section>`, including above-the-fold heroes.

This is motion-guarded, but an opt-in animation class would provide better control and avoid making priority content begin partially faded or translated.

### Accessibility and metadata findings

#### 8. Reduced-motion handling is unintentionally defeated

`src/app/layout.tsx:58-61` adds Tailwind's unconditional `scroll-smooth` class to `<html>`, while `src/app/globals.css:59-63` correctly attempts to restrict smooth scrolling to `prefers-reduced-motion: no-preference`.

The unconditional utility remains active for reduced-motion users.

#### 9. Speaking statistics are hidden from assistive technology

`src/components/speaking/speaking-page.tsx:92-104` marks the values `20+`, `5`, and `10,000s` as `aria-hidden="true"`.

Screen-reader users receive labels such as “Years in integrative & functional medicine” without the corresponding values. These numbers are meaningful content, not decoration.

#### 10. One documented color combination misses AA contrast

The 11px “The practice” eyebrow uses `--lagoon-deep` on `--lagoon-mist` in `src/components/home/home-page.tsx:277,301-304`.

Measured contrast is approximately 4.33:1, below the 4.5:1 normal-text requirement. The source Spectra design guide explicitly warns that this exact color combination fails for small text.

Nearly all other checked primary text combinations meet the documented requirements.

#### 11. There is no skip-to-content link

Keyboard users must traverse the announcement bar and complete navigation on every page. The page landmarks and heading hierarchy are otherwise good.

#### 12. Speaking social metadata remains homepage metadata

`src/app/speaking/page.tsx:4-10` correctly overrides the document title, description, and canonical, but it does not override the root Open Graph/Twitter object from `src/app/layout.tsx:28-38`.

The exported speaking page therefore contains:

- Correct document title and canonical
- Homepage `og:title`
- Homepage `og:description`
- Homepage `og:url`
- Homepage Twitter title and description

Shared speaking links will preview as the homepage, weakening a primary conversion page.

#### 13. Secondary SEO cleanup

- Legal pages inherit the homepage canonical, although their current `noindex` limits impact.
- There is no branded `src/app/not-found.tsx`; unknown routes get the generic Next.js 404.
- `src/app/sitemap.ts:10,16` uses `new Date()` on every build, making the output non-deterministic and implying every page was recently modified.
- There is no Person/Physician/WebSite structured data. Verified entity data would be useful after all professional claims are approved.
- The announcement “See topics” link points to `/speaking/` rather than `/speaking/#topics`, so it does not move users to the topics section when already on the speaking page.

### Maintainability and versatility findings

#### 14. Developer documentation is stale

`README.md` still describes an Astro starter, port 4321, a `dist/` folder, and Astro commands. `.design-sync/NOTES.md` likewise says the repository has no React.

`package.json` defines `npm start` as `next start`, but Next reports that `next start` does not work with `output: "export"`.

`AGENTS.md` is accurate and helpful, but new contributors can still be misled by the stale files and broken preview command.

#### 15. Automated QA is effectively absent

There are no application-level unit, integration, route, accessibility, link, Lighthouse-budget, or CI checks.

The most important defects found in this audit are inexpensive to catch automatically:

- Logo navigation from subpages
- Missing same-origin routes
- Legacy redirect status
- Incorrect social metadata
- Hidden speaking statistics
- Mobile sticky-CTA overlap
- Generated-output link integrity

#### 16. Several patterns are beginning to drift

- Site-header and speaking-subnav scrollspy logic are nearly duplicated.
- Homepage and speaking sticky CTAs use separate implementations with different behavior.
- Shared chrome is manually repeated across home, speaking, and legal page shells.
- Surface-tone types and class maps are duplicated between `Section` and `SecondaryButton`.
- Several icon exports are unused.
- Alternative AVIF/WebP assets are copied into deployments while the larger JPEG is still selected.

These are lower priority than launch correctness. A shared page-shell layout, small scrollspy hook, centralized tone map, and one mobile-CTA controller would improve future versatility without over-abstracting the site.

---

## Area 2: Content and Design

### What is working well

- The “Vivid Spectrum on Porcelain” system is implemented faithfully.
- Fraunces and Manrope provide a distinctive editorial identity with comfortable body leading and restrained line lengths.
- The orchid/violet anchor differentiates Dr. Lisa's personal brand while the lagoon Spectra section clearly signals the related clinic brand.
- Section alternation is disciplined; adjacent primary sections do not repeat the same surface.
- Hairline borders, flat cards, spectrum rings, mist rooms, spacing, radii, and decorative markers feel standardized across the homepage and speaking page.
- The site avoids the prohibited visual habits: no washed gradient backgrounds, glows, heavy shadows, coral UI fills, or generic SaaS styling.
- Desktop hero composition is excellent at 1024px and 1280px.
- Mobile headline wrapping is controlled and readable at 375px.
- The palette feels bright and approachable without compromising medical credibility.
- Photography and mist mats keep the site human and clinical-warm.
- Most copy is concise, optimistic, and relatively jargon-light.

### Content launch blockers

#### 1. Five trust-critical areas are explicitly unfinished

- Credential wording and press proof: `src/data/home.ts:117-124`
- Homepage testimonials: `src/data/home.ts:169-184`
- Press-logo stand-ins: `src/components/home/home-page.tsx:224-239`
- Speaking photography: `src/components/speaking/speaking-page.tsx:70-81`
- Speaking media verification: `src/data/speaking.ts:101-143`

The privacy, terms, and disclaimer pages are also visibly labeled as launch-review placeholders pending counsel approval.

The TODO markers have correctly been preserved, but every one should be resolved before launch.

#### 2. Important claims require source documentation and approval

Repeated claims include:

- Triple board certification
- 20+ years in integrative/functional medicine
- `10,000s` reached
- Tony Robbins Summit
- AgeMed Conference
- Tampa General Hospital
- Gasparilla Conference
- “Science-backed” teaching
- A personal serious-illness chronology
- “Every inquiry gets a personal read”
- “A talk they'll still be using next year”

Recommended editorial controls:

- Maintain one claim-verification sheet with source, exact wording, owner, and approval status.
- Replace `10,000s` with a conventional form such as `10K+` only if verified.
- Clarify whether each named event represents a speaking role, panel, teaching engagement, media appearance, or attendance.
- Treat the final speaking promise as positioning rather than a guaranteed outcome.

#### 3. Patient contact language conflicts with the site's privacy guidance

`src/components/home/home-page.tsx:409-423` invites patient office questions through a direct email link.

The privacy and disclaimer pages tell users not to send protected health information through unapproved website forms or channels.

This is not necessarily a legal violation, but it is inconsistent and invites predictable user error. Patient contact should route through an approved Spectra pathway, or the email presentation should carry a concise no-PHI warning.

### Messaging and hierarchy findings

#### 4. The middle of the homepage repeats the same story too often

The hero, trust strip, founder story, four-role cards, and credibility section repeatedly establish the same physician/founder/author/speaker credentials.

The homepage is approximately 11,700px, or 14.4 viewport heights, at 375px. Much of its length comes from repeated modular proof rather than substantially new information.

Recommendation:

- Consolidate one of the story/about modules.
- Replace general positioning with specific biography: board names, career milestones, founder chronology, book details, and verified appearances.
- Let each section answer a distinct visitor question rather than restating the same positioning.

#### 5. “Platform” feels too SaaS-like

“The person behind the platform” and “Proof behind the platform” appear in adjacent sections, but “platform” is undefined and sounds technological rather than human, medical, or editorial.

A more personal phrase would better support the intended brand.

#### 6. The current testimonials weaken the proposition

The section promises “What people say about working with her,” but both entries are anonymous Spectra patient voices, and one refers to “the doctors.”

This blurs three different propositions:

- Dr. Lisa as an individual
- The Spectra care team
- Dr. Lisa's speaking/media work

The “root cause instead of masking symptoms” quote also carries a stronger healthcare implication than the rest of the site's disciplined copy.

Recommendation:

- Prefer approved organizer, host, founder, media, or speaking testimonials.
- If patient perspectives remain, label the section explicitly as Spectra patient perspective and confirm consent and wording.

#### 7. The speaking-page proof layer is too thin

The speaking page has a strong structural foundation: topics, formats, process, media, and booking guidance.

It lacks several proof elements organizers commonly expect:

- Approved stage or event photography
- A short speaking reel
- An organizer or podcast-host testimonial
- Recognizable event context
- A downloadable one-sheet
- A short and long biography
- Approved headshot package

The existing hero image is warm and personable but reads “clinic physician,” shows a retired embroidered logo, and does not demonstrate speaking experience.

This is the highest-value subjective design/content opportunity on the site.

#### 8. Press proof still looks provisional

Homepage outlets are styled as text approximations of wordmarks but are neither approved logos nor links.

Two speaking entries point to publisher homepages instead of the cited episode:

- Myers Detox
- Be Well by Kelly

Specific verified destinations would improve credibility more than decorative logos alone.

### Visual and responsive recommendations

#### 9. Preserve the existing color strategy

The site is already colorful in the right way. Increasing saturation across every section would make it feel less credible rather than more modern.

If stakeholders want greater energy, add it through:

- Approved stage/event photography
- A book cover
- Editorial lifestyle imagery
- Media stills
- A speaking reel panel

Do not add additional gradient washes, glows, tinted card fills, or decorative color effects.

#### 10. Vary the composition periodically

The repeated `heading → cards/numbered rows` structure is consistent but becomes predictable through the middle of each page.

Every two or three sections, introduce one different editorial composition:

- Full-width or asymmetric photograph
- Pull quote
- Speaking-reel panel
- Book feature
- Milestone timeline
- Editorial biography split

This would create rhythm without abandoning the system.

#### 11. Introduce Dr. Lisa visually sooner on mobile

At 375px, the full headline, description, and two CTAs consume the first viewport. The portrait remains below the fold.

For a personal-brand site, consider a slightly tighter mobile introduction or a compact portrait treatment so visitors see the person earlier.

#### 12. Add mobile orientation to the speaking page

Desktop has a useful sticky section subnav. Mobile users navigate approximately 10,000px, or 12.3 viewport heights, without an equivalent orientation control.

A compact “Jump to” disclosure or horizontal section navigator would materially improve scanning.

#### 13. Reduce mobile footer burden

The single-column mobile footer adds substantial length and is particularly vulnerable to the fixed CTA overlap.

A compact two-column treatment or selectively collapsed link groups would improve the ending experience.

### Design elements that should not be broadly changed

- Fraunces + Manrope typography pairing
- Porcelain, white, and mist-room surface system
- Warm orchid/violet personal-brand anchor
- Lagoon Spectra family-brand room
- Hairline card and rule treatment
- Segmented spectrum CTA ring
- Flat, restrained interaction style
- Static-export architecture
- Minimal dependency strategy
- General desktop hero composition

---

## Recommended Order of Work

### Phase 1: Launch integrity

1. Resolve the custom-domain route and CTA contract.
2. Implement real host-level 301/308 redirects.
3. Fix brand-logo navigation from subpages.
4. Correct homepage mobile sticky-CTA behavior.

### Phase 2: Trust and compliance

5. Approve or replace credentials, claims, testimonials, and media references.
6. Replace legal placeholders with counsel-approved content.
7. Align patient contact paths with the no-PHI guidance.
8. Replace the speaking hero placeholder with approved stage-oriented proof.

### Phase 3: Performance and accessibility

9. Replace the large team PNG and speaking JPEG with responsive AVIF/WebP assets.
10. Correct speaking Open Graph/Twitter metadata.
11. Fix reduced-motion behavior, speaking-stat semantics, lagoon contrast, and skip navigation.
12. Account for mobile safe-area insets and footer visibility in sticky-CTA behavior.

### Phase 4: Editorial refinement and resilience

13. Consolidate repeated homepage positioning.
14. Add concrete biography and event context.
15. Add speaking proof such as a reel, organizer testimonial, and downloadable speaker assets.
16. Update README, preview scripts, and stale design-sync notes.
17. Add lightweight route, link, metadata, accessibility, and responsive regression checks.

## Final Assessment

The visual system is much closer to launch quality than the placeholder status suggests. The site does not need a redesign. It needs conversion-route certainty, verified proof, compliant final content, corrected mobile CTA behavior, and a focused technical hardening pass.

Preserve the current design foundation and prioritize correctness, evidence, and conversion continuity before adding more visual decoration.
