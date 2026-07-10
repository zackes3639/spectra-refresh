import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy review placeholder for Dr. Lisa Koche.",
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      paragraphs={[
        "This page is a launch-review placeholder and must be replaced or approved by legal counsel before production. For privacy-related questions, contact the office directly. Do not submit protected health information through unapproved website forms.",
        "A final policy should explain what information is collected, how it is used, how third-party platforms are involved, how visitors can make requests, and how privacy obligations are handled.",
      ]}
    />
  );
}
