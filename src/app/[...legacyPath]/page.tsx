import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  findLegacyRedirect,
  legacyRedirects,
  toLegacyParams,
} from "@/data/legacy-redirects";

type LegacyRedirectPageProps = {
  params: Promise<{
    legacyPath: string[];
  }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return legacyRedirects.map((redirect) => ({
    legacyPath: toLegacyParams(redirect.source),
  }));
}

export async function generateMetadata({
  params,
}: LegacyRedirectPageProps): Promise<Metadata> {
  const { legacyPath } = await params;
  const redirect = findLegacyRedirect(`/${legacyPath.join("/")}/`);

  if (!redirect) {
    return {};
  }

  return {
    title: `${redirect.label} moved`,
    alternates: {
      canonical: redirect.destination,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function LegacyRedirectPage({
  params,
}: LegacyRedirectPageProps) {
  const { legacyPath } = await params;
  const redirect = findLegacyRedirect(`/${legacyPath.join("/")}/`);

  if (!redirect) {
    notFound();
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[var(--porcelain)] px-5 py-16 text-[var(--ink)]">
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(redirect.destination)});`,
        }}
      />
      <div className="max-w-xl rounded-[20px] border border-[var(--hairline)] bg-white p-8 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--orchid-deep)]">
          Page moved
        </p>
        <h1 className="mt-4 font-serif text-4xl font-[380]">
          {redirect.label}
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          This page now lives inside the refreshed Dr. Lisa Koche site or on
          Spectra Wellness.
        </p>
        <a
          className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--hairline)] px-5 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--porcelain)]"
          href={redirect.destination}
        >
          Continue to the updated page
        </a>
      </div>
    </main>
  );
}
