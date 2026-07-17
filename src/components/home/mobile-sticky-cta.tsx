"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type MobileStickyCtaProps = {
  children: ReactNode;
  finalId: string;
  heroId: string;
  href: string;
};

const FOOTER_ID = "site-footer";

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();

  return rect.bottom > 0 && rect.top < window.innerHeight;
}

/**
 * Shared mobile conversion CTA. It stays out of the way while an equivalent
 * hero/final action or the footer is visible, then appears through the useful
 * middle portion of each page.
 */
export function MobileStickyCta({
  children,
  finalId,
  heroId,
  href,
}: MobileStickyCtaProps) {
  // Hidden by default so the CTA cannot flash over the hero during hydration.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const final = document.getElementById(finalId);
    const footer = document.getElementById(FOOTER_ID);

    // Missing sentinels indicate an integration error. Staying hidden is the
    // least obstructive fallback for the page.
    if (!hero || !final || !footer) {
      return;
    }

    const sentinels = [hero, final, footer];
    const visibility = new Map(
      sentinels.map((element) => [element.id, isInViewport(element)]),
    );
    const syncVisibility = () => {
      setVisible(sentinels.every((element) => !visibility.get(element.id)));
    };

    syncVisibility();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        visibility.set(entry.target.id, entry.isIntersecting);
      });
      syncVisibility();
    });

    sentinels.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [finalId, heroId]);

  return (
    <a
      className={`fixed left-4 right-4 z-40 min-h-12 items-center justify-center rounded-full bg-[var(--violet-deep)] px-6 py-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--violet-deep)] min-[900px]:hidden ${visible ? "inline-flex" : "hidden"}`}
      href={href}
      rel="noreferrer"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      target="_blank"
    >
      {children}
    </a>
  );
}
