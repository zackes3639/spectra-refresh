# Dr. Lisa Koche / Spectra Wellness — design conventions

A premium, calm, editorial longevity-medicine brand. This kit ships the brand's
**design tokens and styling idiom** — colors, type, spacing, and a small utility
vocabulary — **not pre-built components**. Build layouts with standard HTML
elements styled through the classes and `var(--*)` tokens below; the result will
read as on-brand.

## Setup

No provider or wrapper is required — this is a plain CSS system. Every design
receives `styles.css`, which `@import`s the brand fonts (Fraunces + Manrope from
Google Fonts), the tokens, and the base/utility layer. Style with the vocabulary
below rather than inventing new class names or hex values.

- **Display / headings:** Fraunces (serif) — used at `font-weight: 400`, applied via `.section-heading` or `font-family: var(--font-display)`.
- **Body / UI:** Manrope (sans) — the default on `<body>`, or `var(--font-body)`.

## Tokens (the source of truth: `tokens/tokens.css`)

Always prefer a token over a literal value.

- **Brand color:** `--color-spectra-teal` `--color-spectra-mint` `--color-spectra-aqua` `--color-spectra-pink` `--color-spectra-magenta` `--color-spectra-violet` `--color-spectra-sun` `--color-spectra-lime` `--color-oxygen-blue` `--color-recovery-lavender` `--color-warm-vitality-coral` `--color-longevity-gold`
- **Neutrals / semantic:** `--color-warm-clinical-white` `--color-mineral-charcoal` `--color-botanical-sage` `--color-deep-evergreen` `--color-surface` `--color-surface-soft` `--color-text` `--color-muted` `--color-subtle` `--color-border` `--color-border-strong`
- **Gradients:** `--gradient-spectrum` (the signature multi-hue sweep) `--gradient-spectrum-soft` `--gradient-clinical-aqua` `--gradient-evergreen-spectrum`
- **Type:** `--font-display` `--font-body` `--body-font-size` `--body-line-height` `--heading-line-height`
- **Spacing** (use the semantic aliases first): `--space-2xs` `--space-xs` `--space-sm` `--space-md` `--space-lg` `--space-xl` `--space-2xl` `--space-3xl`, with a raw scale `--space-4` … `--space-96` and layout widths `--container` `--container-narrow` `--max-text-width` `--gutter`.
- **Radius:** `--radius-sm` `--radius-md` `--radius-lg` `--radius-xl` `--radius-pill`
- **Shadow:** `--shadow-soft` `--shadow-card` `--shadow-lift` `--shadow-spectrum`
- **Focus / motion:** `--focus-ring-color` `--focus-ring-width` `--focus-ring-offset` `--transition`

## Utility classes (the source of truth: `base.css`)

- **Layout:** `.container` `.container-narrow` (centered max-width wrappers) · `.section` `.section-soft` (vertical section rhythm; `-soft` adds a tinted band) · `.grid` `.two-column` (responsive content + media split) · `.text-measure` (caps line length) · `.nowrap`
- **Type:** `.eyebrow` (uppercase teal kicker) · `.section-heading` (Fraunces display heading) · `.section-copy` (muted intro paragraph) · `.placeholder-note` · `.visually-hidden`
- **Actions:** `.button` + `.button-primary` (gradient pill) or `.button-secondary` (outline pill)
- **Surfaces:** `.card` (glassy gradient-edged card with a spectrum top rule) · `.spectrum-mark` (the brand's five-dot spectrum glyph)

## Idiomatic example

```html
<section class="section section-soft">
  <div class="container two-column">
    <div>
      <p class="eyebrow">Longevity medicine</p>
      <h2 class="section-heading">Care designed around your biology</h2>
      <p class="section-copy">Precision, preventive, and deeply personal — built
        on root-cause diagnostics rather than symptom management.</p>
      <a class="button button-primary" href="#">Book a discovery call</a>
    </div>
    <article class="card" style="padding: var(--space-lg);">
      <span class="spectrum-mark" aria-hidden="true"></span>
      <h3 style="font-family: var(--font-display); margin: var(--space-md) 0 var(--space-xs);">Whole-system view</h3>
      <p style="color: var(--color-muted);">Metabolic, hormonal, and nervous-system health, considered together.</p>
    </article>
  </div>
</section>
```
