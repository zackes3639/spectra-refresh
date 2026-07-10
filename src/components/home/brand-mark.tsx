"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { SPECTRUM_5 } from "./primitives";

export function BrandMark() {
  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0 });
    history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  return (
    <Link
      aria-label="Dr. Lisa Koche home"
      className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2"
      href="/"
      onClick={scrollToTop}
    >
      {/* Vertical 5-stripe spectrum mark — the shared family signature with
          the Spectra Wellness brand mark. */}
      <span aria-hidden="true" className="flex h-9 w-[18px] gap-[2px]">
        {SPECTRUM_5.map((color) => (
          <span
            className="flex-1 rounded-full"
            key={color}
            style={{ background: color }}
          />
        ))}
      </span>
      <span className="font-serif text-[1.25rem] leading-none font-[500] whitespace-nowrap text-[var(--ink)]">
        Dr. Lisa Koche
      </span>
    </Link>
  );
}
