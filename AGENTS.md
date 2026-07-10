# DrLisaKoche.com Working Rules

## Project Purpose

This is the refresh draft of DrLisaKoche.com — the personal-brand site for Dr. Lisa Saff Koche, MD (physician, founder of Spectra Wellness, educator, speaker). It deploys to dr-lisa-koche-site.vercel.app via `npx vercel --prod --yes` (pushes to main do NOT auto-deploy).

## Brand Relationship

Dr. Lisa is the founder and visionary of Spectra Wellness. This site shares Spectra's design system — "Vivid Spectrum on Porcelain," documented in `/Users/zackarysimon/spectra_web/design.md` and `brand.md` — but anchors on the **warm end of the spectrum (orchid + violet)** where the clinic site anchors on leaf/lagoon/azure. Shared: porcelain surfaces, ink/muted text, hairline rules, Fraunces + Manrope, the 5/7-stripe spectrum strip, ◆ markers, mist section rooms, flat hairline cards, white pill CTAs in a spectrum ring. The one deliberately cool room on the homepage is the `#spectra` section (lagoon), citing the family brand.

Follow spectra_web's design.md rules: no gradient washes, no glows, no coral, AA contrast (deep shades for small text; display shades for large serif type only), reduced-motion guards, no two adjacent sections sharing a surface, each mist room's tint matching its section's accent hue.

## Tech Stack

- Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS v4 — mirrors the spectra_web repo
- Static export (`output: "export"`, trailing slashes, unoptimized images) to `out/`
- Tokens in `src/app/globals.css`; primitives ported from spectra_web in `src/components/home/primitives.tsx`
- Content lives in typed data files under `src/data/` (site, home, speaking, legacy-redirects)

## Structure

- `/` — long-scroll anchored homepage (hero → trust → #story → #about → #press → #work → #spectra → #stories → #contact → violet-deep final band)
- `/speaking/` — the one deep subpage (violet anchor, sticky scrollspy subnav, single CTA: "Invite Dr. Lisa to Speak")
- `/privacy/`, `/terms/`, `/disclaimer/` — legal placeholders pending counsel review
- `src/app/[...legacyPath]/` — static-export redirects for every retired multi-page route (old Astro-era URLs → home anchors or spectrawellness.com)

## Scope Guardrails

- No CMS, backend APIs, auth, databases, or patient systems.
- Patient-facing clinical CTAs route to Spectra Wellness properties; speaking CTAs route to drlisakoche.com/speaker/.
- Healthcare copy discipline per spectra_web/brand.md: no guaranteed results, no diagnosis claims, testimonials framed as perspective.
- Copy marked `TODO: real content` (press logos, credentials wording, testimonials, stage photography) needs verification before launch — do not remove the markers without supplying verified content.

## Workflow Expectations

- Make small, coherent changes; prefer the existing primitives and data files.
- Verify mobile (375px) and desktop (1280px) behavior before considering design work done.
- `npm run build` must pass (static export). Preview with any static server over `out/`.
