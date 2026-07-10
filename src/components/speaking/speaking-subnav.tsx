"use client";

import { useEffect, useState } from "react";
import { subnavItems } from "@/data/speaking";
import { Container } from "@/components/home/primitives";

// Same per-hue underline cycle as the site header nav (warm hues first), so
// the subnav reads as a quieter sibling of the primary navigation.
const navAccents = [
  "hover:text-[var(--orchid-deep)] after:bg-[var(--orchid-deep)]",
  "hover:text-[var(--violet-deep)] after:bg-[var(--violet-deep)]",
  "hover:text-[var(--azure-deep)] after:bg-[var(--azure-deep)]",
  "hover:text-[var(--lagoon-deep)] after:bg-[var(--lagoon-deep)]",
  "hover:text-[var(--leaf-deep)] after:bg-[var(--leaf-deep)]",
];

export function SpeakingSubnav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Derive ids with split("#")[1] so root-qualified hrefs ("/speaking/#topics")
    // resolve the same as bare fragments ("#topics").
    const ids = subnavItems
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
    <nav
      aria-label="Speaking page sections"
      className="sticky top-[64px] z-40 hidden border-b border-[var(--hairline)] bg-[var(--porcelain)]/95 backdrop-blur min-[900px]:block"
    >
      <Container className="flex min-h-[46px] items-center gap-6">
        {subnavItems.map((item, index) => {
          const id = item.href.split("#")[1];
          const isActive = active === id;

          return (
            <a
              aria-current={isActive ? "true" : undefined}
              className={`relative rounded-sm py-2 text-[11px] font-semibold whitespace-nowrap uppercase tracking-[0.18em] transition after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:rounded-full after:transition-transform after:duration-200 hover:after:scale-x-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:after:scale-x-100 motion-reduce:after:transition-none ${navAccents[index % navAccents.length]} ${isActive ? "text-[var(--ink)] after:scale-x-100" : "text-[var(--muted)] after:scale-x-0"}`}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          );
        })}
      </Container>
    </nav>
  );
}
