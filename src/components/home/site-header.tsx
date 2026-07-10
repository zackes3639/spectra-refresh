"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { links, navItems } from "@/data/home";
import { BrandMark } from "./brand-mark";
import { MobileNavigation } from "./mobile-navigation";
import { Container, PrimaryButton } from "./primitives";

// Five deep hues cycled via index % 5 so no two adjacent links of the
// six-item nav share a hue. Warm hues lead on Dr. Lisa's site.
const navAccents = [
  "hover:text-[var(--orchid-deep)] after:bg-[var(--orchid-deep)]",
  "hover:text-[var(--violet-deep)] after:bg-[var(--violet-deep)]",
  "hover:text-[var(--azure-deep)] after:bg-[var(--azure-deep)]",
  "hover:text-[var(--lagoon-deep)] after:bg-[var(--lagoon-deep)]",
  "hover:text-[var(--leaf-deep)] after:bg-[var(--leaf-deep)]",
];

// Trailing-slash-insensitive path comparison for page links.
function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    // Derive ids with split("#")[1] so root-qualified hrefs ("/#story")
    // resolve the same as bare fragments ("#story").
    const ids = navItems
      .map((item) => item.href.split("#")[1])
      .filter((id): id is string => Boolean(id));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setActive((current) => {
          const intersecting = entries.filter((entry) => entry.isIntersecting);

          if (intersecting.length > 0) {
            return intersecting[intersecting.length - 1].target.id;
          }

          const leftCurrent = entries.some(
            (entry) => entry.target.id === current && !entry.isIntersecting,
          );

          return leftCurrent ? null : current;
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-[var(--porcelain)]/95 backdrop-blur">
      <Container
        className={`flex items-center justify-between gap-5 transition-[min-height] duration-300 ease-out motion-reduce:transition-none ${scrolled ? "min-h-[64px]" : "min-h-[76px]"}`}
      >
        <BrandMark />
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 min-[900px]:flex min-[1200px]:gap-6"
        >
          {navItems.map((item, index) => {
            // Page links (no "#") get client-side navigation and a
            // pathname-based active state; hash anchors keep the plain <a>
            // smooth-scroll behavior and the scrollspy active state.
            const isPageLink = !item.href.includes("#");
            const isActive = isPageLink
              ? normalizePath(pathname) === normalizePath(item.href)
              : active === item.href.split("#")[1];
            const linkClassName = `relative rounded-sm py-2 text-[11px] font-semibold whitespace-nowrap uppercase tracking-[0.18em] transition after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:rounded-full after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:after:scale-x-100 motion-reduce:after:transition-none ${navAccents[index % navAccents.length]} ${isActive ? "text-[var(--ink)] after:scale-x-100" : "text-[var(--muted)] after:scale-x-0"}`;

            if (isPageLink) {
              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={linkClassName}
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                aria-current={isActive ? "true" : undefined}
                className={linkClassName}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        {/* The header CTA goes straight to the external speaking-inquiry page
            so it works identically from every route. */}
        <div className="hidden min-[1100px]:block">
          <PrimaryButton href={links.speakingInquiry} rel="noreferrer" target="_blank">
            Invite Dr. Lisa to Speak
          </PrimaryButton>
        </div>
        <MobileNavigation />
      </Container>
    </header>
  );
}
