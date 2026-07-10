"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { links, navItems } from "@/data/home";
import { CloseIcon, MenuIcon } from "./icons";
import { PrimaryButton } from "./primitives";

export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = useCallback(() => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", closeMenu);

    return () => {
      window.removeEventListener("hashchange", closeMenu);
    };
  }, [closeMenu]);

  return (
    <details className="group relative min-[900px]:hidden" ref={detailsRef}>
      <summary className="flex h-11 list-none items-center gap-2 rounded-full border border-[var(--hairline)] bg-white px-4 text-sm font-semibold text-[var(--ink)] [&::-webkit-details-marker]:hidden">
        <MenuIcon className="h-5 w-5 group-open:hidden" />
        <CloseIcon className="hidden h-5 w-5 group-open:block" />
        Menu
      </summary>
      <div className="absolute right-0 mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-[18px] border border-[var(--hairline)] bg-white p-3 motion-safe:animate-[menu-in_0.18s_ease-out]">
        <nav aria-label="Mobile navigation" className="grid">
          {navItems.map((item) =>
            // Page links (no "#") use next/link; hash anchors keep the plain
            // <a> so in-page smooth scrolling is untouched.
            item.href.includes("#") ? (
              <a
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--porcelain)]"
                href={item.href}
                key={item.label}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ) : (
              <Link
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--porcelain)]"
                href={item.href}
                key={item.label}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ),
          )}
          <div aria-hidden="true" className="my-2 h-px bg-[var(--hairline)]" />
          <a
            className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--porcelain)]"
            href={links.spectraWellness}
            onClick={closeMenu}
            rel="noreferrer"
            target="_blank"
          >
            Spectra Wellness
          </a>
          <a
            className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--porcelain)]"
            href={links.academy}
            onClick={closeMenu}
            rel="noreferrer"
            target="_blank"
          >
            Academy Login
          </a>
          <PrimaryButton
            className="mt-3 w-full"
            href={links.speakingInquiry}
            onClick={closeMenu}
            rel="noreferrer"
            target="_blank"
          >
            Invite Dr. Lisa to Speak
          </PrimaryButton>
        </nav>
      </div>
    </details>
  );
}
