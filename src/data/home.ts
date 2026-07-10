export type Cta = {
  label: string;
  href: string;
  external?: boolean;
};

// Six primary items (five section anchors + the Speaking page link) so the
// brand, nav, and CTA pill share one flex line from 1100px, matching the
// Spectra header mechanics. Hrefs are root-qualified so the shared header
// works from /speaking/ and the legal pages.
export const navItems = [
  { label: "Story", href: "/#story" },
  { label: "Speaking", href: "/speaking/" },
  { label: "About", href: "/#about" },
  { label: "Work Together", href: "/#work" },
  { label: "Spectra", href: "/#spectra" },
  { label: "Contact", href: "/#contact" },
];

export const links = {
  spectraWellness: "https://spectrawellness.com/",
  discoveryCall: "https://calendly.com/nincandela-spectrawellness/15min",
  patientPortal: "https://spectrawellness.md-hq.com/",
  spectraShop: "https://spectrawellness.com/supplements/",
  speakingInquiry: "https://drlisakoche.com/speaker/",
  book: "https://drlisakoche.com/",
  freeResources: "https://drlisakoche.com/how-to-work-with-me/#freeresources",
  courses: "https://drlisakoche.com/how-to-work-with-me/#onlinecourses",
  favorites: "https://drlisakoche.com/affiliate-links/",
  academy: "https://academy.drlisakoche.com/login",
};

export const contact = {
  phoneLabel: "(813) 319-0911",
  phoneHref: "tel:+18133190911",
  email: "hello@spectrawellness.com",
  emailHref: "mailto:hello@spectrawellness.com",
  addressLabel: "504 N Reo St, Tampa, FL 33609",
  mapUrl: "https://maps.app.goo.gl/bi2yGXhshHaF6Yjw6",
};

export const socialLinks = [
  {
    label: "LI",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lisa-koche-m-d-64a43a100/",
  },
  {
    label: "IG",
    name: "Instagram",
    href: "https://www.instagram.com/drlisaskoche/",
  },
  {
    label: "YT",
    name: "YouTube",
    href: "https://www.youtube.com/@spectrawellness",
  },
];

export const trustItems = [
  "Triple Board-Certified Physician",
  "Founder of Spectra Wellness",
  "Author of GET LIT",
  "20+ Years in Integrative Medicine",
];

export const storySteps = [
  {
    number: "01",
    title: "A personal health story",
    description:
      "Her own experience with serious illness shaped deep empathy for people who feel dismissed, confused, or stuck between partial answers.",
  },
  {
    number: "02",
    title: "Physician and pattern-finder",
    description:
      "Two decades of medical training inform the way she notices relationships across body systems, lived experience, and long-term vitality.",
  },
  {
    number: "03",
    title: "Founder of Spectra Wellness",
    description:
      "She built the Tampa clinic where her vision of physician-led, whole-person care could take shape — and grow into a full care team.",
  },
  {
    number: "04",
    title: "Education beyond the office",
    description:
      "Through her book, courses, media, and speaking, Dr. Lisa helps people ask better questions and participate more actively in their health.",
  },
];

export const pillars = [
  {
    title: "Founder",
    description:
      "Built Spectra Wellness, the Tampa clinic that became home to her broader vision of whole-person, physician-led care.",
  },
  {
    title: "Physician",
    description:
      "A triple board-certified physician whose clinical training grounds every talk, program, and recommendation.",
  },
  {
    title: "Educator",
    description:
      "Translates complex physiology into language people can actually use — in her book, courses, and public teaching.",
  },
  {
    title: "Speaker",
    description:
      "Brings a grounded, human message about energy, resilience, and agency to stages, podcasts, and interviews.",
  },
];

// TODO: real content — confirm credential wording and add verified press
// logos / "as seen on" assets before launch.
export const credentials = [
  "Triple Board-Certified Physician",
  "Author of GET LIT",
  "Tony Robbins Summit · AgeMed · Gasparilla Conference",
  "Tampa General Hospital",
];

// Real outlets from her media library (drlisakoche.com/media/).
export const pressOutlets = [
  "WTSP Great Day Live",
  "WFLA Bloom",
  "Well+Good",
  "Everyday Health",
  "Reader's Digest",
  "The Energy Blueprint",
  "Myers Detox",
  "Be Well by Kelly",
];

export const workRows: Array<{
  title: string;
  description: string;
  cta: Cta;
}> = [
  {
    title: "Speaking & Media",
    description:
      "Keynotes, panels, podcasts, and interviews on whole-person health, energy, and heart-centered leadership — tailored to your audience.",
    cta: { label: "Explore speaking", href: "/speaking/" },
  },
  {
    title: "GET LIT — The Book",
    description:
      "A practical guide to overcoming exhaustion, escaping stress, and building lasting energy from the cellular level up.",
    cta: { label: "Explore the book", href: links.book, external: true },
  },
  {
    title: "Courses & Academy",
    description:
      "The LIT Journey and foundational frameworks — structured, self-paced education for people who want to go deeper.",
    cta: { label: "View courses", href: links.courses, external: true },
  },
  {
    title: "Free Resources & Favorites",
    description:
      "Guides, questionnaires, and Dr. Lisa's curated everyday wellness picks — a gentle entry point into her work.",
    cta: { label: "Browse resources", href: links.freeResources, external: true },
  },
];

// TODO: real content — replace these practice-voice quotes with attributed
// founder/speaking testimonials when they are collected.
export const testimonials = [
  {
    quote:
      "I finally felt like someone was looking at the whole picture, not just one symptom at a time.",
    author: "Spectra patient",
    context: "Patient story",
  },
  {
    quote:
      "The doctors actually spend time with you to find the root cause instead of masking symptoms.",
    author: "Spectra patient",
    context: "Patient story",
  },
];

export const footerExploreLinks = navItems;

export const footerDrLisaLinks = [
  { label: "Free Resources", href: links.freeResources, external: true },
  { label: "Courses", href: links.courses, external: true },
  { label: "Academy Login", href: links.academy, external: true },
  { label: "Favorites", href: links.favorites, external: true },
];

export const footerSpectraLinks = [
  { label: "Spectra Wellness", href: links.spectraWellness, external: true },
  { label: "Book a Discovery Call", href: links.discoveryCall, external: true },
  { label: "Patient Portal", href: links.patientPortal, external: true },
  { label: "Supplement Shop", href: links.spectraShop, external: true },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Terms of Service", href: "/terms/" },
  { label: "Medical Disclaimer", href: "/disclaimer/" },
];
