export type LegacyRedirect = {
  source: `/${string}/`;
  destination: string;
  label: string;
  note?: string;
};

const SPECTRA = "https://spectrawellness.com/";

// Every route from the retired multi-page Astro site, mapped either to an
// anchor on the new long-scroll pages or out to the Spectra Wellness site
// (matching the old SpectraRedirect behavior).
export const legacyRedirects = [
  { source: "/about/", destination: "/#story", label: "About Dr. Lisa" },
  { source: "/approach/", destination: "/#about", label: "Approach" },
  { source: "/programs/", destination: "/#work", label: "Programs" },
  {
    source: "/programs/longevity-optimization/",
    destination: SPECTRA,
    label: "Longevity Optimization",
    note: "Clinical programs live with the practice at Spectra Wellness.",
  },
  {
    source: "/programs/nervous-system-recovery/",
    destination: SPECTRA,
    label: "Nervous System Recovery",
  },
  {
    source: "/programs/precision-preventive-care/",
    destination: SPECTRA,
    label: "Precision Preventive Care",
  },
  {
    source: "/programs/womens-metabolic-hormonal-health/",
    destination: SPECTRA,
    label: "Women's Metabolic & Hormonal Health",
  },
  { source: "/resources/", destination: "/#work", label: "Resources" },
  { source: "/insights/", destination: "/#work", label: "Insights" },
  { source: "/media/", destination: "/speaking/#media", label: "Media" },
  { source: "/contact/", destination: "/#contact", label: "Contact" },
  { source: "/patients/", destination: SPECTRA, label: "Patient Information" },
  { source: "/membership/", destination: SPECTRA, label: "Membership" },
  { source: "/team/", destination: SPECTRA, label: "The Spectra Team" },
  { source: "/testimonials/", destination: SPECTRA, label: "Testimonials" },
  { source: "/services/", destination: SPECTRA, label: "Services" },
  { source: "/services/functional-medicine/", destination: SPECTRA, label: "Functional Medicine" },
  { source: "/services/performance-longevity/", destination: SPECTRA, label: "Performance & Longevity" },
  { source: "/services/iv-nutrition/", destination: SPECTRA, label: "IV Nutrition" },
  { source: "/services/applied-kinesiology/", destination: SPECTRA, label: "Applied Kinesiology" },
  { source: "/services/chiropractic-care/", destination: SPECTRA, label: "Chiropractic Care" },
  { source: "/services/hormone-replacement/", destination: SPECTRA, label: "Hormone Replacement" },
  { source: "/services/aesthetics-regenerative-wellness/", destination: SPECTRA, label: "Aesthetics & Regenerative Wellness" },
  { source: "/services/destination-health/", destination: SPECTRA, label: "Destination Health" },
  { source: "/services/preventive-cardiology/", destination: SPECTRA, label: "Preventive Cardiology" },
  { source: "/services/healing-arts-collective/", destination: SPECTRA, label: "Healing Arts Collective" },
] as const satisfies readonly LegacyRedirect[];

export function normalizeLegacyPath(path: string) {
  const pathname = path.startsWith("http")
    ? new URL(path).pathname
    : path.split(/[?#]/)[0] ?? "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return withLeadingSlash.endsWith("/")
    ? (withLeadingSlash as `/${string}/`)
    : (`${withLeadingSlash}/` as `/${string}/`);
}

export function findLegacyRedirect(path: string) {
  const normalizedPath = normalizeLegacyPath(path);

  return legacyRedirects.find((redirect) => redirect.source === normalizedPath);
}

export function toLegacyParams(source: LegacyRedirect["source"]) {
  return source
    .replace(/^\/|\/$/g, "")
    .split("/")
    .filter(Boolean);
}
