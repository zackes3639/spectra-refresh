import Image from "next/image";
import {
  contact,
  credentials,
  links,
  pillars,
  pressOutlets,
  socialLinks,
  storySteps,
  testimonials,
  trustItems,
  workRows,
} from "@/data/home";
import { MethodStep, ProgramRow, TestimonialCard } from "./cards";
import {
  Accent,
  Container,
  DiamondItem,
  Eyebrow,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionHeading,
} from "./primitives";
import { SiteHeader } from "./site-header";
import { AnnouncementBar, SiteFooter } from "./site-chrome";

// Warm-first accent cycles — orchid/violet lead on Dr. Lisa's site, where the
// clinic site leads with leaf/lagoon/azure.
const trustAccents = [
  "var(--orchid)",
  "var(--violet)",
  "var(--azure)",
  "var(--lagoon)",
];
const storyAccents = [
  "var(--orchid)",
  "var(--violet)",
  "var(--azure)",
  "var(--lagoon-deep)",
];
const pillarAccents = [
  "var(--orchid)",
  "var(--violet)",
  "var(--azure)",
  "var(--lagoon)",
];
const credentialAccents = ["var(--violet)", "var(--orchid)", "var(--azure)", "var(--lagoon)"];

function HeroSection() {
  return (
    <section className="bg-[var(--porcelain)] pb-16 pt-12 sm:pt-16" id="home">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Eyebrow>Physician · Founder · Educator · Speaker</Eyebrow>
            <h1 className="font-serif text-[3.1rem] leading-[1.02] font-[360] tracking-normal text-[var(--ink)] sm:text-[4.2rem] lg:text-[4.6rem]">
              The voice behind
              <br />
              <Accent>whole-person medicine.</Accent>
            </h1>
            <p className="mt-7 max-w-[560px] text-lg leading-8 text-balance text-[var(--muted)] sm:text-xl">
              Dr. Lisa Saff Koche, MD is a triple board-certified physician,
              founder of Spectra Wellness, author of GET LIT, and a speaker
              helping people understand their bodies — and reclaim agency over
              their health.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
              <PrimaryButton href="/speaking/">Explore Speaking</PrimaryButton>
              <SecondaryButton
                href={links.spectraWellness}
                rel="noreferrer"
                target="_blank"
              >
                Visit Spectra Wellness
              </SecondaryButton>
            </div>
          </div>
          {/* Orchid-mist photo mat — the site's anchor-hue treatment of the
              standard Spectra mat pattern. */}
          <div className="rounded-[28px] border border-[var(--hairline)] bg-[var(--orchid-mist)] p-5 sm:p-6">
            <div className="relative aspect-square overflow-hidden rounded-[18px]">
              <Image
                alt="Dr. Lisa Saff Koche, MD"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                src="/images/spectra-dr-lisa-portrait.jpg"
              />
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--orchid-deep)]">
                Dr. Lisa Saff Koche, MD
              </p>
              <p className="text-xs text-[var(--muted)]">Tampa, Florida</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="border-y border-[var(--hairline)] bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-6">
        {trustItems.map((item, index) => (
          <div className="flex items-center gap-2.5" key={item}>
            <span
              aria-hidden="true"
              className="text-sm leading-none"
              style={{ color: trustAccents[index % trustAccents.length] }}
            >
              ✦
            </span>
            <span className="text-sm font-semibold text-[var(--muted)]">{item}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}

function StorySection() {
  return (
    <Section id="story" tone="orchid-mist">
      <Container>
        <SectionHeading
          eyebrow="Founder story"
          title={
            <>
              From patient to physician, <Accent>founder, and guide.</Accent>
            </>
          }
          body="Dr. Lisa's work has always been shaped by a desire to make complex health ideas more humane, more practical, and easier to discuss."
        />
        <div className="mt-14 grid gap-10 border-t border-[var(--hairline)] pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {storySteps.map((step, index) => (
            <MethodStep
              accent={storyAccents[index % storyAccents.length]}
              key={step.number}
              {...step}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function AboutSection() {
  return (
    <Section id="about" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Why Dr. Lisa"
          eyebrowColor="var(--violet-deep)"
          title={
            <>
              The person behind <Accent color="var(--violet-deep)">the platform.</Accent>
            </>
          }
          body="Four roles, one throughline: helping people ask clearer questions and trust their own discernment."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <article
              className="rounded-[20px] border border-[var(--hairline)] bg-white p-7"
              key={pillar.title}
            >
              <h3 className="flex items-center gap-3 font-serif text-3xl leading-none font-[420] text-[var(--ink)]">
                <span
                  aria-hidden="true"
                  className="text-xs"
                  style={{ color: pillarAccents[index % pillarAccents.length] }}
                >
                  ◆
                </span>
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PressSection() {
  return (
    <Section id="press" tone="violet-mist">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <SectionHeading
            eyebrow="Credibility"
            eyebrowColor="var(--violet-deep)"
            title={
              <>
                Proof behind <Accent color="var(--violet-deep)">the platform.</Accent>
              </>
            }
          />
          <p className="text-lg leading-9 text-[var(--muted)]">
            Real credentials, a physician&rsquo;s training, and a public voice
            already in the conversation — on stages, on television, and on the
            podcasts people trust for health insight.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          {credentials.map((credential, index) => (
            <DiamondItem
              color={credentialAccents[index % credentialAccents.length]}
              key={credential}
            >
              {credential}
            </DiamondItem>
          ))}
        </div>
        {/* TODO: real content — replace text outlets with approved press logos
            once supplied. Outlet list is sourced from drlisakoche.com/media/. */}
        <div className="mt-12 border-t border-[var(--hairline)] pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            As seen &amp; heard on
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
            {pressOutlets.map((outlet) => (
              <span
                className="font-serif text-xl font-[420] text-[var(--ink)] opacity-80"
                key={outlet}
              >
                {outlet}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function WorkSection() {
  return (
    <Section id="work" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Work together"
          title={
            <>
              Ways to work <Accent>with Dr. Lisa.</Accent>
            </>
          }
          body="Four doors into her work — from a stage or a studio to a book, a course, or a free starting point."
        />
        <div className="mt-10 sm:mt-12">
          {workRows.map((row, index) => (
            <ProgramRow
              cta={row.cta}
              description={row.description}
              index={index}
              key={row.title}
              title={row.title}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SpectraSection() {
  return (
    <Section id="spectra" tone="lagoon-mist">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Lagoon mat: the clinic's own hue — the one deliberately cool room
              on this page, citing the family brand. */}
          <div className="rounded-[28px] border border-[var(--hairline)] bg-white p-5 sm:p-6">
            <div className="relative min-h-[16rem] overflow-hidden rounded-[18px] sm:min-h-[20rem]">
              <Image
                alt="The Spectra Wellness care team outside the Tampa clinic"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                src="/images/spectra-team.png"
              />
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pt-4">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink)]">
                <span aria-hidden="true" className="text-[var(--lagoon-deep)]">◆</span>
                The Spectra care team
              </p>
              <p className="text-xs text-[var(--muted)]">Tampa, Florida</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="The practice"
              eyebrowColor="var(--lagoon-deep)"
              title={
                <>
                  Founder &amp; visionary of{" "}
                  <Accent color="var(--lagoon-deep)">Spectra Wellness.</Accent>
                </>
              }
              body="Spectra Wellness is the Tampa clinic where Dr. Lisa's vision became a full care team: physician-led functional medicine, advanced diagnostics, and restorative therapies designed around each patient's unique biology."
            />
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <DiamondItem color="var(--lagoon)">Physician-led care</DiamondItem>
              <DiamondItem color="var(--azure)">Advanced diagnostics</DiamondItem>
              <DiamondItem color="var(--leaf)">Team-based wellness</DiamondItem>
            </div>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <SecondaryButton
                href={links.spectraWellness}
                rel="noreferrer"
                surface="white"
                target="_blank"
                variant="ring"
              >
                Explore Spectra Wellness
              </SecondaryButton>
              <SecondaryButton
                color="var(--lagoon-deep)"
                href={links.discoveryCall}
                rel="noreferrer"
                target="_blank"
              >
                Book a Discovery Call
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function StoriesSection() {
  return (
    <Section id="stories" tone="white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Voices"
          title={
            <>
              What people say about <Accent>working with her.</Accent>
            </>
          }
        />
        {/* TODO: real content — swap for attributed founder/speaking
            testimonials when collected; these are Spectra patient voices. */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              author={testimonial.author}
              context={testimonial.context}
              index={index}
              key={testimonial.quote}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ContactSection() {
  return (
    <section
      className="border-t border-[var(--hairline)] bg-[var(--porcelain)] py-20 sm:py-24"
      id="contact"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Start a <Accent>conversation.</Accent>
            </>
          }
          body="For stages, studios, and interviews — or for patient care at Spectra Wellness."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <article className="rounded-[20px] border border-[var(--hairline)] bg-white p-7">
            <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">
              <span aria-hidden="true" className="text-[0.6rem] leading-none text-[var(--orchid)]">◆</span>
              Speaking &amp; media
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Keynotes, podcasts, panels, and interviews — start with the
              inquiry form.
            </p>
            <a
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--orchid-deep)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2"
              href={links.speakingInquiry}
              rel="noreferrer"
              target="_blank"
            >
              Request availability →
            </a>
          </article>
          <article className="rounded-[20px] border border-[var(--hairline)] bg-white p-7">
            <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">
              <span aria-hidden="true" className="text-[0.6rem] leading-none text-[var(--lagoon)]">◆</span>
              Patient care
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Appointments and office questions are handled by the Spectra
              Wellness team in Tampa.
            </p>
            <a
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--lagoon-deep)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2"
              href={contact.emailHref}
            >
              {contact.email} →
            </a>
          </article>
          <article className="rounded-[20px] border border-[var(--hairline)] bg-white p-7">
            <h3 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">
              <span aria-hidden="true" className="text-[0.6rem] leading-none text-[var(--violet)]">◆</span>
              Follow along
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Ongoing teaching, media appearances, and everyday wellness
              guidance.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((social) => (
                <a
                  className="inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-[0.14em] text-[var(--violet-deep)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2"
                  href={social.href}
                  key={social.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[var(--violet-deep)] py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-5xl leading-[1.02] font-[380] text-[var(--cream)] sm:text-[4.6rem]">
            Bring a bigger conversation about health{" "}
            <em className="italic">to your audience.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-2xl leading-9 text-[var(--cream)]">
            Invite Dr. Lisa to your stage, podcast, or event — or visit Spectra
            Wellness to begin your own care.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton
              className="focus-visible:ring-white focus-visible:ring-offset-[var(--violet-deep)]"
              href={links.speakingInquiry}
              rel="noreferrer"
              target="_blank"
            >
              Invite Dr. Lisa to Speak
            </PrimaryButton>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--cream)]/70 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--violet-deep)]"
              href={links.spectraWellness}
              rel="noreferrer"
              target="_blank"
            >
              Visit Spectra Wellness
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <StorySection />
        <AboutSection />
        <PressSection />
        <WorkSection />
        <SpectraSection />
        <StoriesSection />
        <ContactSection />
        <FinalCta />
      </main>
      <a
        className="fixed bottom-4 left-4 right-4 z-40 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--violet-deep)] px-6 py-3 text-sm font-semibold text-white min-[900px]:hidden"
        href={links.speakingInquiry}
        rel="noreferrer"
        target="_blank"
      >
        Invite Dr. Lisa to Speak
      </a>
      <SiteFooter />
    </>
  );
}
