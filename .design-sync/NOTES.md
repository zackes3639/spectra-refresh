# design-sync notes — Dr. Lisa Koche / Spectra Wellness

## Why this is an off-script import

This repo is an **Astro static site**, not a React component library:

- All 34 components in `src/components/` are `.astro` files — HTML-templating that
  compiles to static HTML pages at build time, **not** runtime JS/React modules.
- `package.json` deps = `astro` only. No React, no `@astrojs/react`, so there is no
  framework-component runtime to expose at `window.<globalName>.*`.
- No Storybook (`.storybook/` absent, no `*.stories.*`).

The standard converter (`package-build.mjs`) bundles a compiled `dist/` of runtime
components; an Astro site has none. Reimplementing the components as React is the only
way to get real component cards, and that is out of scope (the skill forbids reimplementation).

## What was shipped instead

A **tokens/styles-only** artifact, hand-authored into `ds-bundle/` and uploaded:

- `styles.css` — entry. Its `@import` closure is what every design receives.
- `tokens/tokens.css` — verbatim copy of `src/styles/tokens.css` (57 tokens).
- `base.css` — `src/styles/global.css` minus its tokens `@import` (18 utility classes
  + base element styles). **The source `<body>` 5-gradient spectrum wash was dropped**
  so designs start on a clean canvas (kept only `--color-warm-clinical-white`).
- `README.md` — conventions header (set as `readmeHeader` would be in a normal config);
  enumerates the real token + class vocabulary and an idiomatic snippet. All 57 tokens
  and 18 classes were validated to exist in the artifact before upload.

There are **no component cards** and **no `_ds_sync.json` anchor** (nothing to anchor) —
both correct for an off-script styles-only push.

## Fonts

The source site self-hosts **no** fonts (no `@font-face`, no web-font link) — it declares
Fraunces/Manrope and relies on local install / fallbacks. `styles.css` adds a **Google
Fonts `@import`** for both families so the brand type renders in Claude Design. This is an
addition beyond the repo, isolated to `ds-bundle/styles.css`.

## Re-syncing later

If `src/styles/tokens.css` or `src/styles/global.css` change, re-run by re-copying them
into `ds-bundle/` (re-applying the body-wash trim to `base.css`), re-validating the README
names, and re-uploading to the pinned `projectId`. Do **not** invoke the package/storybook
converter — it cannot process this repo.
