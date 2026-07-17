import Image from "next/image";
import { MethodStep, TopicCard } from "@/components/home/cards";
import {
  Accent,
  Container,
  DiamondItem,
  Eyebrow,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionHeading,
} from "@/components/home/primitives";
import { SiteHeader } from "@/components/home/site-header";
import { MobileStickyCta } from "@/components/home/mobile-sticky-cta";
import {
  AnnouncementBar,
  SiteFooter,
  SkipLink,
} from "@/components/home/site-chrome";
import { ArrowUpRightIcon } from "@/components/home/icons";
import {
  experienceSteps,
  formats,
  inquiryChecklist,
  inviteCta,
  mediaAppearances,
  notableStages,
  speakingStats,
  topics,
} from "@/data/speaking";
import { SpeakingSubnav } from "./speaking-subnav";

const statAccents = ["var(--violet)", "var(--orchid)", "var(--azure)"];
const formatAccents = ["var(--violet)", "var(--orchid)", "var(--azure)", "var(--lagoon)"];
const experienceAccents = [
  "var(--violet)",
  "var(--orchid)",
  "var(--azure)",
  "var(--lagoon-deep)",
];
const mediaAccents = [
  "var(--violet-deep)",
  "var(--orchid-deep)",
  "var(--azure-deep)",
  "var(--lagoon-deep)",
  "var(--leaf-deep)",
];

function SpeakingHero() {
  return (
    <section className="bg-[var(--porcelain)] pb-16 pt-12 sm:pt-16" id="overview">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow color="var(--violet-deep)">Speaking · Podcasts · Media</Eyebrow>
          <h1 className="font-serif text-[3.1rem] leading-[1.02] font-[360] tracking-normal text-[var(--ink)] sm:text-[4.2rem] lg:text-[4.8rem]">
            A physician voice for
            <br />
            <Accent color="var(--violet-deep)">stages and studios.</Accent>
          </h1>
          <p className="mx-auto mt-7 max-w-[680px] text-lg leading-8 text-balance text-[var(--muted)] sm:text-xl">
            Dr. Lisa translates complex physiology into grounded, memorable
            teaching — science-backed health insight with a human and
            spiritually aware lens, tailored to every room.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-7">
            <PrimaryButton href={inviteCta.href} rel="noreferrer" target="_blank">
              {inviteCta.label}
            </PrimaryButton>
            <SecondaryButton color="var(--violet)" href="/speaking/#topics">
              See speaking topics
            </SecondaryButton>
          </div>
        </div>
        {/* TODO: real content — replace with approved stage photography; the
            current headshot still shows the retired embroidered Spectra logo. */}
        <div className="mt-14 rounded-[28px] border border-[var(--hairline)] bg-[var(--violet-mist)] p-6">
          <div className="relative min-h-[20rem] w-full overflow-hidden rounded-[18px] sm:min-h-[25rem]">
            <Image
              alt="Dr. Lisa Koche"
              className="object-cover object-[50%_30%]"
              fill
              priority
              sizes="(min-width: 1180px) 1052px, 100vw"
              src="/images/dr-lisa-koche-headshot.jpeg"
            />
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--violet-deep)]">
              Dr. Lisa Saff Koche, MD
            </p>
            <p className="text-xs text-[var(--muted)]">
              Physician · Founder · Educator · Speaker
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {speakingStats.map((stat, index) => (
            <div className="text-center" key={stat.label}>
              <p
                className="font-serif text-4xl italic leading-none font-[380] sm:text-5xl"
                style={{ color: statAccents[index % statAccents.length] }}
              >
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TopicsSection() {
  return (
    <Section id="topics" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Topics"
          eyebrowColor="var(--violet-deep)"
          title={
            <>
              Talks that make complex health{" "}
              <Accent color="var(--violet-deep)">easier to understand.</Accent>
            </>
          }
          body="Each topic can be tailored for conferences, leadership rooms, wellness audiences, podcasts, and public education events."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <TopicCard
              description={topic.description}
              index={index}
              key={topic.title}
              title={topic.title}
            />
          ))}
          <article className="flex flex-col justify-between rounded-[18px] border border-[var(--hairline)] bg-[var(--porcelain)] p-7">
            <p className="font-serif text-2xl leading-tight font-[420] text-[var(--ink)]">
              Something else in mind?
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Topics flex to your audience — share the outcome you want and
              Dr. Lisa will shape the talk around it.
            </p>
            <div className="mt-6">
              <SecondaryButton
                color="var(--violet)"
                href={inviteCta.href}
                rel="noreferrer"
                target="_blank"
              >
                Start an inquiry
              </SecondaryButton>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}

function FormatsSection() {
  return (
    <Section id="formats" tone="violet-mist">
      <Container>
        <SectionHeading
          eyebrow="Formats"
          eyebrowColor="var(--violet-deep)"
          title={
            <>
              One voice, <Accent color="var(--violet-deep)">four rooms.</Accent>
            </>
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {formats.map((format, index) => (
            <article
              className="rounded-[20px] border border-[var(--hairline)] bg-white p-7"
              key={format.title}
            >
              <h3 className="flex items-center gap-3 font-serif text-2xl leading-tight font-[420] text-[var(--ink)]">
                <span
                  aria-hidden="true"
                  className="text-xs"
                  style={{ color: formatAccents[index % formatAccents.length] }}
                >
                  ◆
                </span>
                {format.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {format.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" tone="white">
      <Container>
        <SectionHeading
          eyebrow="What to expect"
          eyebrowColor="var(--violet-deep)"
          title={
            <>
              From inquiry <Accent color="var(--violet-deep)">to standing room.</Accent>
            </>
          }
        />
        <div className="mt-14 grid gap-10 border-t border-[var(--hairline)] pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {experienceSteps.map((step, index) => (
            <MethodStep
              accent={experienceAccents[index % experienceAccents.length]}
              key={step.number}
              {...step}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function MediaSection() {
  return (
    <Section id="media" tone="porcelain">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <SectionHeading
            eyebrow="Press & media"
            eyebrowColor="var(--violet-deep)"
            title={
              <>
                Already in the <Accent color="var(--violet-deep)">conversation.</Accent>
              </>
            }
          />
          <p className="text-lg leading-9 text-[var(--muted)]">
            Selected television segments, podcast conversations, and features —
            with notable stages including{" "}
            {notableStages.slice(0, -1).join(", ")}, and{" "}
            {notableStages[notableStages.length - 1]}.
          </p>
        </div>
        <div className="mt-12">
          {mediaAppearances.map((appearance, index) => (
            <a
              className="group grid items-center gap-x-8 gap-y-1 border-b border-[var(--hairline)] py-6 transition duration-200 first:border-t hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 sm:grid-cols-[14rem_1fr_auto]"
              href={appearance.href}
              key={appearance.title}
              rel="noreferrer"
              target="_blank"
            >
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: mediaAccents[index % mediaAccents.length] }}
              >
                {appearance.outlet}
              </span>
              <span className="font-serif text-xl leading-snug font-[420] text-[var(--ink)] sm:text-[1.35rem]">
                {appearance.title}
              </span>
              <ArrowUpRightIcon className="hidden h-5 w-5 text-[var(--muted)] transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--ink)] sm:block" />
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function BookingSection() {
  return (
    <Section id="booking" tone="white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Booking"
              eyebrowColor="var(--violet-deep)"
              title={
                <>
                  Bring Dr. Lisa <Accent color="var(--violet-deep)">to your event.</Accent>
                </>
              }
              body="Every inquiry gets a personal read — the more you can share about your room and your goals, the faster the fit conversation goes."
            />
            <div className="mt-9">
              <PrimaryButton href={inviteCta.href} rel="noreferrer" target="_blank">
                {inviteCta.label}
              </PrimaryButton>
            </div>
          </div>
          <article className="rounded-[20px] border border-[var(--hairline)] bg-white p-8">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--violet-deep)]">
              What to include in your inquiry
            </h3>
            <ul className="mt-6 space-y-4">
              {inquiryChecklist.map((item) => (
                <li key={item}>
                  <DiamondItem color="var(--violet)">{item}</DiamondItem>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}

function FinalInviteBand() {
  return (
    <section className="bg-[var(--violet-deep)] py-24 sm:py-28" id="invite">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-5xl leading-[1.02] font-[380] text-[var(--cream)] sm:text-[4.6rem]">
            Give your audience a talk{" "}
            <em className="italic">they&rsquo;ll still be using next year.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-2xl leading-9 text-[var(--cream)]">
            Keynotes, podcasts, panels, and leadership sessions — tailored to
            your room.
          </p>
          <div className="mt-10 flex justify-center">
            <PrimaryButton
              className="focus-visible:ring-white focus-visible:ring-offset-[var(--violet-deep)]"
              href={inviteCta.href}
              rel="noreferrer"
              target="_blank"
            >
              {inviteCta.label}
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SpeakingPage() {
  return (
    <>
      <SkipLink />
      <AnnouncementBar />
      <SiteHeader />
      <SpeakingSubnav />
      <main id="main-content" tabIndex={-1}>
        <SpeakingHero />
        <TopicsSection />
        <FormatsSection />
        <ExperienceSection />
        <MediaSection />
        <BookingSection />
        <FinalInviteBand />
      </main>
      <MobileStickyCta
        finalId="invite"
        heroId="overview"
        href={inviteCta.href}
      >
        {inviteCta.label}
      </MobileStickyCta>
      <SiteFooter />
    </>
  );
}
