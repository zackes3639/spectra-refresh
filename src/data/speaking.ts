import { links } from "./home";

export const inviteCta = {
  label: "Invite Dr. Lisa to Speak",
  href: links.speakingInquiry,
};

export const subnavItems = [
  { label: "Topics", href: "/speaking/#topics" },
  { label: "Formats", href: "/speaking/#formats" },
  { label: "What to expect", href: "/speaking/#experience" },
  { label: "Press & media", href: "/speaking/#media" },
  { label: "Booking", href: "/speaking/#booking" },
];

// Values render as large italic serif "numerals"; non-numeric values are fine.
export const speakingStats = [
  { value: "20+", label: "Years in integrative & functional medicine" },
  { value: "5", label: "Signature topics, tailored per room" },
  { value: "10,000s", label: "Reached across stages, TV, and podcasts" },
];

export const topics = [
  {
    title: "Sovereign Medicine",
    description:
      "How people can reclaim voice, agency, and discernment in their health journey.",
  },
  {
    title: "The LIT Journey",
    description:
      "A practical introduction to Dr. Lisa's framework for healing, performance, and alignment.",
  },
  {
    title: "Mitochondria & Cell Danger Response",
    description:
      "A clear translation of cellular energy, stress signaling, and recovery capacity.",
  },
  {
    title: "Heart-Centered Leadership",
    description:
      "Health, coherence, and burnout prevention for leaders and high-demand teams.",
  },
  {
    title: "Inner Harmony",
    description:
      "A science-and-spirit conversation about regulation, resilience, and whole-person vitality.",
  },
];

export const formats = [
  {
    title: "Keynotes & conference stages",
    description:
      "Science-backed, story-driven talks for wellness, medical, and general audiences — from summit main stages to breakout rooms.",
  },
  {
    title: "Podcasts & interviews",
    description:
      "A practiced guest who brings clear takeaways, grounded science, and a warm conversational presence to any show.",
  },
  {
    title: "Panels & moderated conversations",
    description:
      "A physician perspective that keeps complex health topics honest, practical, and accessible for mixed audiences.",
  },
  {
    title: "Leadership & team sessions",
    description:
      "Working sessions on energy, resilience, and burnout prevention for executive teams and high-demand organizations.",
  },
];

export const experienceSteps = [
  {
    number: "01",
    title: "Share your event",
    description:
      "Send the date, audience, format, and what you want the room to walk away with.",
  },
  {
    number: "02",
    title: "A fit conversation",
    description:
      "A short call to confirm the topic, the tone, and the shape of the session.",
  },
  {
    number: "03",
    title: "Tailored to your room",
    description:
      "Every talk is adapted — the science stays rigorous, the language meets your audience.",
  },
  {
    number: "04",
    title: "Follow-through",
    description:
      "Resources and next steps for attendees who want to keep going after the talk.",
  },
];

// TODO: real content — confirm this list against drlisakoche.com/media/ before
// launch and add approved outlet logos when supplied.
export const mediaAppearances = [
  {
    title: "Tips for Getting a Better Night's Sleep",
    outlet: "WTSP Great Day Live",
    href: "https://www.wtsp.com/article/features/great-day-live/tips-for-getting-a-better-nights-sleep/67-8809c335-14d6-4727-8eae-662123c595a3",
  },
  {
    title: "Bio-Hack Your Way to Better Health",
    outlet: "WFLA Bloom",
    href: "https://www.wfla.com/bloom/tampa-doctor-helps-patients-biohack-their-way-to-better-health/",
  },
  {
    title: "Functional Medicine Approach to Hormones, Thyroid, and Menopause",
    outlet: "WFLA Bloom",
    href: "https://www.wfla.com/bloom-tampa-bay/functional-medicine-approach-to-hormones-thyroid-and-menopause/",
  },
  {
    title: "Top Strategies for Optimizing Health",
    outlet: "The Energy Blueprint",
    href: "https://www.theenergyblueprint.com/dr-lisa-koche/",
  },
  {
    title: "Optimizing Energy and Your Mitochondria",
    outlet: "Myers Detox",
    href: "https://myersdetox.com/",
  },
  {
    title: "Light Up Your Mitochondria",
    outlet: "Be Well by Kelly",
    href: "https://kellyleveque.com/",
  },
  {
    title: "Get Yourself Optimized",
    outlet: "Podcast Interview",
    href: "https://www.youtube.com/watch?v=luaYkcPvlpA",
  },
  {
    title: "Full media library",
    outlet: "DrLisaKoche.com",
    href: "https://drlisakoche.com/media/",
  },
];

export const notableStages = [
  "Tony Robbins Summit",
  "AgeMed Conference",
  "Tampa General Hospital",
  "Gasparilla Conference",
];

export const inquiryChecklist = [
  "Event name, date, and location (or virtual)",
  "Audience — who's in the room, and roughly how many",
  "Format — keynote, podcast, panel, or team session",
  "Topics you're drawn to, or the outcome you want",
];
