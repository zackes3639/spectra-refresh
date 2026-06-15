# Site Review: Spectra Wellness — Live Site vs. Proposed Redesign

**Reviewed:** June 15, 2026
**Live (current):** https://spectrawellness.com/ — WordPress + Elementor Pro practice site
**Redesign (proposed):** http://localhost:4321/ — Astro build, "Dr. Lisa Koche" founder-brand page
**Lens:** Graphic redesigner / UI engineer
**Scope:** Both home pages, desktop (1440px) + mobile (≈390px) viewports, console + network + a11y/SEO audit

---

## Executive Summary (Bottom Line Up Front)

The redesign is a clear, decisive level-up: it trades a heavy, plugin-bloated WordPress build that throws live JavaScript errors for a clean, fast, component-based Astro site with a real visual identity (Cormorant serif display, Constellation accent palette, glassy floating nav). If the live site is a leased storefront with someone else's fixtures bolted to the walls, the redesign is a custom-built room where every element was chosen on purpose.

**Biggest win in the redesign:** craftsmanship and cohesion — typography, spacing, color, and component rhythm finally feel intentional and premium instead of "default Elementor."

**Biggest issue to fix before this ships:** the redesign is missing the production-readiness scaffolding the *live* site already has — specifically **Open Graph/social-share tags (0 vs. 10 on live)**, and it isn't yet a 1:1 replacement (it's the *founder* pillar, not the *practice* site, so service/booking content still lives only on the old build).

**One framing caveat for your engineer:** these are **two different pages in your three-pillar architecture**, not before/after of the same page. Live = the clinical practice (Spectra). Redesign = the founder brand (Dr. Lisa). Judge the redesign as "the quality bar and design system the practice site should be rebuilt into," not as a finished swap.

---

## At-a-Glance Scorecard

| Dimension | Live (Spectra/Elementor) | Redesign (Astro) | Verdict |
|---|---|---|---|
| Visual identity | Generic wellness template, multicolor logo | Distinct serif + Constellation palette, custom marks | ✅ Redesign |
| Console health | **12+ recurring JS exceptions** on scroll | 0 errors | ✅ Redesign |
| Stylesheets / scripts | 48 CSS / 32 JS files | ~14 scoped CSS, ~0 blocking JS | ✅ Redesign |
| DOM weight | 1,211 nodes | Lean, component-scoped | ✅ Redesign |
| Image hygiene | 14 imgs, **all missing alt**, 3 PNGs >1 MB, no webp | 6 imgs, all alt'd, webp used | ✅ Redesign |
| Image format | jpeg/png only (1.3 MB heroes) | webp + optimized | ✅ Redesign |
| Heading structure | Single H1 ✓ | Single H1 ✓ (but footer labels are H2) | ⚠️ Tie |
| SEO / social | meta desc ✓, **10 OG tags ✓** | meta desc ✓, **0 OG tags ✗** | ✅ Live |
| Mobile nav | Standard hamburger | Collapses to "Menu" pill ✓ | ✅ Redesign |
| Content completeness | Full practice site (services, shop, testimonials) | Founder page only | ✅ Live (for now) |

---

## 🎨 UI/UX Review

### What's Working (Redesign)
- **Typography has a point of view.** The Cormorant serif display against a clean sans body reads "premium clinical" — closer to a longevity brand like a Fountain Life or a Parsley Health than a local practice. The live site's uniform heavy sans says "template."
- **The tri-color accent stack** (educator / advocate / healer in teal / lavender / gold) is a genuinely smart identity moment — it encodes the Constellation palette into the first thing you read.
- **Whitespace is doing real work.** Sections breathe; the eye is guided. The live site alternates dense mint cards with little rhythm.
- **Component rhythm is consistent** — the "Ways to begin" card row, the "Why Dr. Lisa" role cards, and the numbered founder timeline all share radius, shadow, and spacing language. This is the hallmark of a design system vs. page-by-page Elementor assembly.
- **The floating glass nav + gradient CTA band** ("Follow Dr. Lisa's work") are the kind of finishing touches that signal 2026, not 2019.

### Issues & Recommendations (Redesign)

**1. The hero headshot still carries the OLD brand**
- **Issue:** Dr. Lisa's lab coat in the hero photo has the legacy multicolor "Spectra Wellness Solutions" logo embroidered on it — the exact mark you're moving away from.
- **Why it matters:** It quietly reintroduces the old identity into the most prominent image on the new site, undercutting the rebrand.
- **Recommendation:** Reshoot, retouch the embroidery, or crop tighter to exclude it.
- **Priority:** 🟡 Medium

**2. CTA hierarchy is slightly ambiguous in the hero**
- **Issue:** "Meet Dr. Lisa" (filled) and "Speaking & Media" (outlined) are close in visual weight; the gradient CTA band at the bottom repeats "Meet Dr. Lisa" + "Spectra Wellness."
- **Why it matters:** When two buttons compete, conversion leaks. A user should never wonder which is *the* action.
- **Recommendation:** Make one unmistakable primary per section. Confirm the outlined "Spectra Wellness" pill in the footer CTA has enough contrast — it currently reads faint against the dark gradient.
- **Priority:** 🟡 Medium

**3. "Ways to begin" link affordances are subtle**
- **Issue:** The Meet/Book/Read/Visit links at card bottoms are small teal text with no button or underline-on-rest.
- **Why it matters:** On a card, users expect the whole card or a clear button to be the target. Quiet text links get missed.
- **Recommendation:** Make the full card clickable (with hover lift) or upgrade the link to a chevron affordance.
- **Priority:** 🟢 Low

**4. Confirm interactive/hover + focus states exist**
- **Issue:** Couldn't confirm hover lift / focus rings on cards and nav from static capture.
- **Why it matters:** Keyboard focus rings are an accessibility requirement; hover feedback is a polish baseline.
- **Recommendation:** Verify every interactive element has a visible `:focus-visible` state and a hover transition.
- **Priority:** 🟡 Medium

### Issues (Live site — context for what to retire)
- **Sticky top utility bar + sticky nav** eats ~140px of vertical space before content even starts.
- **Mint-tinted alternating service cards** are repetitive and low-contrast; headings are dark slate on pale mint, which is readable but flat.
- **Hero video/photo with text overlay** has weak text/background contrast in spots (white headline over a bright background image).

---

## 🔧 Engineering Review

### What's Working (Redesign)
- **Zero console errors**, all assets return 200/304.
- **Clean component architecture** — discrete `.astro` components (`PageHero`, `PathwayCard`, `TimelineList`, `CTASection`, `Footer`, `Header`, `BrandLogo`, `MetricStrip`, etc.). Maintainable, the opposite of monolithic page builders.
- **Scoped CSS per component** instead of 48 global stylesheets.
- **Single semantic H1**, all images carry `alt`, `lang="en"` set, meta description present.
- **webp imagery** + sensible eager-loading of above-the-fold assets.

### Issues & Recommendations (Redesign)

**1. No Open Graph / Twitter Card tags 🔴**
- **Issue:** `meta[property^="og:"]` count = **0**. The live site has 10.
- **Why it matters:** Share this URL in iMessage, LinkedIn, or a podcast booking email and it renders as a bare blue link — no image, no title card. For a founder/speaker brand whose whole purpose is being shared and booked, this is a real miss.
- **Recommendation:** Add `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`, plus `twitter:card=summary_large_image`. Put it in the base layout `<head>`.
- **Priority:** 🔴 High

**2. Footer column labels are H2s**
- **Issue:** EXPLORE / SPECTRA / DR. LISA / LEGAL / CONNECT render as `<h2>`, competing with real content headings in the document outline.
- **Why it matters:** Screen-reader users navigating by heading hit five "section headings" that are just footer nav groups; mild SEO noise too.
- **Recommendation:** Demote to styled `<p>`/`<span>` or wrap footer nav in `<nav aria-label>` with non-heading labels.
- **Priority:** 🟢 Low

**3. Headshot served as raw `.jpeg`**
- **Issue:** `dr-lisa-koche-headshot.jpeg` isn't webp; it's loaded twice (logo + headshot eager, which is fine above the fold).
- **Recommendation:** Convert the headshot to webp/avif with an explicit `width`/`height` to lock aspect ratio and prevent layout shift.
- **Priority:** 🟢 Low

**4. Verify nav links route**
- **Issue:** Couldn't confirm About/Approach/Programs/Resources/Media/Speaking/Contact targets resolve vs. placeholder anchors.
- **Recommendation:** QA every nav + footer link for a real destination or an honest "coming soon" state.
- **Priority:** 🟡 Medium

### Issues & Recommendations (Live site — why the migration is justified)

**1. Recurring runtime JavaScript exceptions 🔴**
- **Current:** Elementor Pro throws `TypeError: Cannot read properties of undefined (reading 'translateY')` repeatedly on scroll (captured 12+ times), originating in `elementor-pro/frontend.min.js` motion-effects code via jQuery.
- **Why it matters:** Errors mid-scroll can break sticky/parallax effects, hurt Core Web Vitals, and are a smell of plugin/version drift. This alone is a strong "rebuild, don't patch" signal.
- **Priority:** 🔴 High (resolved by migrating off Elementor)

**2. Massive asset & request bloat**
- **Current:** 48 stylesheets, 32 scripts, 1,211 DOM nodes, jQuery + Elementor + Elementor Pro runtime.
- **Recommendation:** The Astro approach already eliminates this. No action on the old site — it's the baseline you're escaping.
- **Priority:** 🔴 High (resolved by migration)

**3. Unoptimized hero imagery**
- **Current:** Three PNGs at ~1.3 MB, 1.3 MB, 1.0 MB; zero webp; **all 14 images missing alt text.**
- **Recommendation:** In the new build, enforce webp/avif + mandatory alt as a lint rule so this class of problem can't recur.
- **Priority:** 🟡 Medium

### Console & Network Log
- **Redesign:** No errors. 20 requests, all 200/304. Vite dev assets + 4 local images.
- **Live:** 12+ repeating Elementor Pro `translateY` TypeErrors on scroll. 80+ requests, jQuery/Elementor stack, multi-MB PNG heroes.

---

## 📣 Marketing Review

### What's Working
- **Redesign messaging is sharp and human:** "educator / advocate / healer" + "The person behind the platform" gives the founder brand a clear, ownable position. It tells a story (origin → vision → education → next chapter).
- **Live site has strong proof assets** the redesign hasn't ported yet: real patient testimonials, a clear services taxonomy, membership offer, and local trust signals (Tampa address, phone, "physician-led"). Don't lose these in the migration.

### Issues & Recommendations
**1. Redesign lacks trust/proof signals**
- **Issue:** No testimonials, credentials, press logos, or stats on the founder page.
- **Why it matters:** A speaker/educator brand sells on credibility. "Healer" is a claim; a testimonial or "as seen on" is proof.
- **Recommendation:** Add a credentials/press strip and 1–2 testimonials or speaking logos. The `MetricStrip` component already in the codebase looks purpose-built for this.
- **Priority:** 🟡 Medium

**2. Cross-pillar wayfinding**
- **Issue:** The founder page points to "Spectra Wellness" but the bridge between founder brand and practice booking should be obvious and bidirectional.
- **Recommendation:** Ensure a clear, consistent "Visit the practice / Book care" path, and that the practice rebuild links back to the founder brand.
- **Priority:** 🟢 Low

---

## 🛠️ Technical Handoff — Coding Agent Instructions

Copy-paste-ready tasks for Codex / Claude Code. Each is self-contained.

#### Task 1: Add Open Graph + Twitter Card meta to base layout
- **Category:** Engineering / SEO
- **Priority:** 🔴 High
- **Current:** 0 OG tags in `<head>`; shared links render bare.
- **Expected:** Full social preview card on iMessage, LinkedIn, X, Slack.
- **Implementation:** In the base layout `<head>`, add `og:title`, `og:description`, `og:image` (create a 1200×630 share image using the Constellation palette + serif logo), `og:url`, `og:type=website`, `twitter:card=summary_large_image`, `twitter:image`. Make title/description/image props overridable per page.
- **Files likely affected:** `src/layouts/*.astro` (base layout), `src/pages/index.astro`.

#### Task 2: Remove legacy Spectra logo from hero headshot
- **Category:** UI/UX / Brand
- **Priority:** 🟡 Medium
- **Current:** Hero portrait shows old multicolor "Spectra Wellness Solutions" embroidery.
- **Expected:** No legacy mark visible in any hero/brand imagery.
- **Implementation:** Replace `images/dr-lisa-koche-headshot.jpeg` with a retouched/reshot/cropped version; export as webp with explicit dimensions.
- **Files likely affected:** `public/images/`, `src/components/PageHero.astro`.

#### Task 3: Demote footer column labels from H2
- **Category:** Engineering / a11y
- **Priority:** 🟢 Low
- **Current:** EXPLORE/SPECTRA/DR. LISA/LEGAL/CONNECT are `<h2>`.
- **Expected:** Footer groups don't pollute the heading outline.
- **Implementation:** Change to styled `<p class="footer-col-title">` (or `<span>`) and wrap each group in `<nav aria-label="...">`.
- **Files likely affected:** `src/components/Footer.astro`.

#### Task 4: Audit & guarantee focus-visible + hover states
- **Category:** UI/UX / a11y
- **Priority:** 🟡 Medium
- **Current:** Unconfirmed for cards, nav links, CTA pills.
- **Expected:** Every interactive element has a visible `:focus-visible` ring and a hover transition.
- **Implementation:** Add a global `:focus-visible` outline token; add hover lift/translate to `PathwayCard`; verify CTA pill contrast (esp. the faint outlined "Spectra Wellness" on dark gradient).
- **Files likely affected:** `src/styles/global.css`, `PathwayCard.astro`, `CTASection.astro`, `Header.astro`.

#### Task 5: Strengthen card click targets in "Ways to begin"
- **Category:** UI/UX
- **Priority:** 🟢 Low
- **Current:** Small teal text links (Meet/Book/Read/Visit).
- **Expected:** Whole card is clickable with hover feedback, or links upgraded to chevron affordances.
- **Implementation:** Wrap `PathwayCard` content in an `<a>` (or add a stretched-link pattern); add hover elevation.
- **Files likely affected:** `src/components/PathwayCard.astro`.

#### Task 6: Convert/optimize all imagery to webp/avif with dimensions
- **Category:** Engineering / Performance
- **Priority:** 🟢 Low
- **Current:** Headshot is raw jpeg.
- **Expected:** All raster images webp/avif, explicit `width`/`height`, lazy below the fold.
- **Implementation:** Use Astro's `<Image />` component or a build-time pipeline; add a lint/CI check requiring `alt` + dimensions on every `<img>`.
- **Files likely affected:** `astro.config`, image components, `public/images/`.

#### Task 7: Add trust/proof strip to founder page
- **Category:** Marketing
- **Priority:** 🟡 Medium
- **Current:** No testimonials/credentials/press on the founder page.
- **Expected:** A credentials or "as seen on" strip + 1–2 testimonials.
- **Implementation:** Reuse the existing `MetricStrip` component (or extend it) to hold credentials/logos; port a couple of testimonials from the live practice site.
- **Files likely affected:** `src/components/MetricStrip.astro`, `src/pages/index.astro`.

#### Task 8: Full link + route QA pass
- **Category:** Engineering
- **Priority:** 🟡 Medium
- **Current:** Nav/footer link destinations unverified.
- **Expected:** Every link resolves or shows an intentional "coming soon."
- **Implementation:** Crawl nav + footer; replace dead anchors with real routes or disabled/badged states.
- **Files likely affected:** `Header.astro`, `Footer.astro`, `src/pages/*`.

---

## Priority Matrix

| Priority | Count | Key Items |
|---|---|---|
| 🔴 High | 1 (redesign) + 2 (live, migration-resolved) | OG/social tags missing; live JS errors & plugin bloat (fixed by migrating) |
| 🟡 Medium | 5 | Legacy logo in headshot, focus/hover states, nav link QA, trust strip, image optimization rule |
| 🟢 Low | 3 | Footer H2 demotion, card click targets, headshot webp |

---

## Migration Note (the strategic point)

The redesign isn't just prettier — it's **architecturally healthier**: component-based, error-free, ~70% fewer stylesheets, optimized images, accessible markup. The single most important takeaway for your engineer is that this Astro system should become the **template the practice (Spectra) site is rebuilt into next**, carrying over the live site's proof assets (testimonials, services, membership, local trust signals) into the new design language — and that the only thing the new build is currently *behind* the old one on is social-share metadata, which is a 30-minute fix.
