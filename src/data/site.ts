/**
 * Site-wide identity used for absolute URLs in metadata, the sitemap, robots,
 * and Open Graph.
 *
 * `url` is the canonical production origin. The Vercel draft lives at
 * dr-lisa-koche-site.vercel.app; drlisakoche.com is the launch target.
 */
export const site = {
  url: "https://drlisakoche.com",
  name: "Dr. Lisa Koche",
  title: "Dr. Lisa Koche | Physician, Founder, Educator & Speaker",
  description:
    "Dr. Lisa Saff Koche, MD is a triple board-certified physician, founder of Spectra Wellness in Tampa, author of GET LIT, and a speaker on whole-person health, energy, and resilience.",
  locale: "en_US",
} as const;
