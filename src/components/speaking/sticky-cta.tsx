"use client";

import { useEffect, useState } from "react";
import { inviteCta } from "@/data/speaking";

// Mobile sticky speaking CTA (same shape as the homepage one) but
// visibility-managed: it stays hidden while the hero is on screen and while
// the final violet band is on screen, so there is never a second CTA
// competing with the hero or the final band in the same viewport.
export function SpeakingStickyCta() {
  // Default to the at-load reality (hero on screen, final off screen) so the
  // CTA renders hidden and never flashes at the top of the page.
  const [heroVisible, setHeroVisible] = useState(true);
  const [finalVisible, setFinalVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("overview");
    const final = document.getElementById("invite");

    // Fail open to visible when either sentinel is missing (homepage behavior).
    // Deferred off the effect body so state only updates asynchronously.
    if (!hero || !final) {
      const id = requestAnimationFrame(() => {
        setHeroVisible(false);
        setFinalVisible(false);
      });
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "overview") {
          setHeroVisible(entry.isIntersecting);
        }
        if (entry.target.id === "invite") {
          setFinalVisible(entry.isIntersecting);
        }
      });
    });

    observer.observe(hero);
    observer.observe(final);

    return () => {
      observer.disconnect();
    };
  }, []);

  const visible = !heroVisible && !finalVisible;

  return (
    <a
      className={`fixed bottom-4 left-4 right-4 z-40 min-h-12 items-center justify-center rounded-full bg-[var(--violet-deep)] px-6 py-3 text-sm font-semibold text-white motion-safe:transition-opacity motion-safe:duration-200 min-[900px]:hidden ${visible ? "inline-flex" : "hidden"}`}
      href={inviteCta.href}
      rel="noreferrer"
      target="_blank"
    >
      {inviteCta.label}
    </a>
  );
}
