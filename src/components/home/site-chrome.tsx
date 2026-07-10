import Link from "next/link";
import {
  contact,
  footerDrLisaLinks,
  footerExploreLinks,
  footerLegalLinks,
  footerSpectraLinks,
  links,
  socialLinks,
} from "@/data/home";
import { BrandMark } from "./brand-mark";
import { ArrowRightIcon, ArrowUpRightIcon } from "./icons";
import { Container, SpectrumStrip } from "./primitives";

export function AnnouncementBar() {
  return (
    <div className="bg-[var(--ink)] text-white">
      <Container className="flex min-h-10 items-center justify-center gap-3 text-center text-xs font-semibold min-[900px]:justify-between sm:text-sm">
        <span className="inline-flex items-center gap-3">
          <span>Now booking speaking engagements, podcasts, and media.</span>
          <Link
            className="hidden items-center gap-1 text-[var(--azure-bright)] underline-offset-4 transition hover:underline sm:inline-flex"
            href="/speaking/"
          >
            See topics
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </span>
        <div className="hidden items-center gap-5 min-[900px]:flex">
          <a
            className="inline-flex items-center gap-1 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--azure-bright)] transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            href={links.spectraWellness}
            rel="noreferrer"
            target="_blank"
          >
            Spectra Wellness
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
          <a
            className="inline-flex items-center gap-1 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--azure-bright)] transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            href={links.academy}
            rel="noreferrer"
            target="_blank"
          >
            Academy
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
        </div>
      </Container>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-white">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.75fr_0.75fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandMark />
            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--muted)]">
              Physician, founder of Spectra Wellness, educator, and speaker —
              helping people understand their bodies and reclaim agency over
              their health.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  aria-label={social.name}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[var(--hairline)] bg-white text-xs font-bold text-[var(--orchid-deep)] transition hover:border-[var(--orchid-deep)]"
                  href={social.href}
                  key={social.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--orchid-deep)]">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {footerExploreLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-sm text-[var(--muted)] hover:text-[var(--ink)]" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--violet-deep)]">
              Dr. Lisa
            </h2>
            <ul className="mt-5 space-y-3">
              {footerDrLisaLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-sm text-[var(--muted)] hover:text-[var(--ink)]"
                    href={link.href}
                    rel={link.external ? "noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--lagoon-deep)]">
              Spectra
            </h2>
            <ul className="mt-5 space-y-3">
              {footerSpectraLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-sm text-[var(--muted)] hover:text-[var(--ink)]"
                    href={link.href}
                    rel={link.external ? "noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--azure-deep)]">
              Visit
            </h2>
            <address className="mt-5 not-italic text-sm leading-7 text-[var(--muted)]">
              <a href={contact.mapUrl} rel="noreferrer" target="_blank">{contact.addressLabel}</a>
              <br />
              <a href={contact.phoneHref}>{contact.phoneLabel}</a>
              <br />
              <a href={contact.emailHref}>{contact.email}</a>
            </address>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[var(--hairline)] pt-8 text-xs text-[var(--muted)] sm:flex-row">
          <p>© 2026 Dr. Lisa Koche. All rights reserved.</p>
          <div className="flex gap-5">
            {footerLegalLinks.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <SpectrumStrip height={5} variant={7} />
    </footer>
  );
}
