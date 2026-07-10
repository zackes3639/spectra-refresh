import type { Cta } from "@/data/home";
import { ArrowRightIcon } from "./icons";

type ProgramRowProps = {
  index: number;
  title: string;
  description: string;
  cta?: Cta;
};

// Warm-first accent cycle: orchid leads on Dr. Lisa's site (the clinic site
// leads with azure/lagoon).
const programAccents = [
  "var(--orchid)",
  "var(--violet)",
  "var(--azure)",
  "var(--lagoon-deep)",
];

export function ProgramRow({ index, title, description, cta }: ProgramRowProps) {
  const accent = programAccents[index % programAccents.length];
  const numeral = String(index + 1).padStart(2, "0");

  const numeralEl = (
    <span
      aria-hidden="true"
      className="font-serif text-3xl italic leading-none font-[380] sm:text-4xl"
      style={{ color: accent }}
    >
      {numeral}
    </span>
  );
  const titleEl = (
    <h3 className="font-serif text-2xl leading-tight font-[420] text-[var(--ink)] sm:text-[1.7rem]">
      {title}
    </h3>
  );
  const descriptionEl = (
    <p className="text-sm leading-7 text-[var(--muted)]">{description}</p>
  );

  // Linkless variant: same grid and typography, no arrow circle, no hover bg,
  // no focus ring, no sr-only label.
  if (!cta) {
    return (
      <div className="grid items-center gap-x-8 gap-y-3 border-b border-[var(--hairline)] py-8 first:border-t sm:grid-cols-[3.5rem_1.15fr_1.6fr] sm:py-9">
        {numeralEl}
        {titleEl}
        {descriptionEl}
      </div>
    );
  }

  return (
    <a
      className="group grid items-center gap-x-8 gap-y-3 border-b border-[var(--hairline)] py-8 transition duration-200 first:border-t hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 sm:grid-cols-[3.5rem_1.15fr_1.6fr_auto] sm:py-9"
      href={cta.href}
      rel={cta.external ? "noreferrer" : undefined}
      target={cta.external ? "_blank" : undefined}
    >
      {numeralEl}
      {titleEl}
      {descriptionEl}
      <span
        aria-hidden="true"
        className="hidden h-11 w-11 items-center justify-center rounded-full border border-[var(--hairline)] transition duration-200 group-hover:translate-x-0.5 sm:flex"
        style={{ color: accent }}
      >
        <ArrowRightIcon className="h-5 w-5" />
      </span>
      <span className="sr-only">{cta.label}</span>
    </a>
  );
}

type MethodStepProps = {
  number: string;
  title: string;
  description: string;
  accent: string;
};

export function MethodStep({ number, title, description, accent }: MethodStepProps) {
  return (
    <article>
      <p
        aria-hidden="true"
        className="font-serif text-5xl italic leading-none font-[380]"
        style={{ color: accent }}
      >
        {number}
      </p>
      <h3 className="mt-5 text-base font-semibold text-[var(--ink)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>
    </article>
  );
}

type TestimonialCardProps = {
  quote: string;
  author: string;
  index: number;
  context?: string;
};

const testimonialAccents = [
  "var(--orchid)",
  "var(--violet)",
  "var(--azure)",
  "var(--lagoon)",
  "var(--leaf)",
];

export function TestimonialCard({
  quote,
  author,
  index,
  context = "Story",
}: TestimonialCardProps) {
  const accent = testimonialAccents[index % testimonialAccents.length];

  return (
    <article className="rounded-[18px] border border-[var(--hairline)] bg-white p-7">
      <p
        aria-hidden="true"
        className="font-serif text-6xl italic leading-[0.6] font-[380]"
        style={{ color: accent }}
      >
        &ldquo;
      </p>
      <p className="mt-6 font-serif text-xl leading-snug font-[420] text-[var(--ink)] sm:text-2xl">
        {quote}
      </p>
      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
        {author} · {context}
      </p>
    </article>
  );
}

type TopicCardProps = {
  title: string;
  description: string;
  index: number;
};

const topicAccents = [
  "var(--orchid)",
  "var(--violet)",
  "var(--azure)",
  "var(--lagoon)",
  "var(--leaf)",
];

/** Flat hairline card for a speaking topic, with a ◆ marker in a cycling hue. */
export function TopicCard({ title, description, index }: TopicCardProps) {
  const accent = topicAccents[index % topicAccents.length];

  return (
    <article className="rounded-[18px] border border-[var(--hairline)] bg-white p-7">
      <h3 className="flex items-start gap-3 font-serif text-2xl leading-tight font-[420] text-[var(--ink)]">
        <span
          aria-hidden="true"
          className="mt-2 text-xs leading-none"
          style={{ color: accent }}
        >
          ◆
        </span>
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
    </article>
  );
}
