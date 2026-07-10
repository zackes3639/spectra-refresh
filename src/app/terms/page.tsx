import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service review placeholder for Dr. Lisa Koche.",
  robots: { index: false, follow: true },
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      paragraphs={[
        "This page is a launch-review placeholder and must be replaced or approved by legal counsel before production. The site is informational and does not create a provider relationship, guarantee availability, or replace individualized medical advice.",
        "Final terms should address website use, content ownership, external links, appointment and payment references, limitations of liability, and any jurisdiction-specific requirements.",
      ]}
    />
  );
}
