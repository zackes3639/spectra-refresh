import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "Medical Disclaimer review placeholder for Dr. Lisa Koche.",
  robots: { index: false, follow: true },
};

export default function Disclaimer() {
  return (
    <LegalPage
      title="Medical Disclaimer"
      paragraphs={[
        "Content on this site is for informational and educational purposes only and does not constitute medical advice or a guarantee of outcome. Personal health decisions should be made with a qualified professional who can review individual history, risks, labs, medications, and goals.",
        "Do not use this website for urgent symptoms, emergencies, or protected health information. For Spectra Wellness questions, use that site's approved contact paths, or call 911 for emergencies. Final disclaimer language should be reviewed before production.",
      ]}
    />
  );
}
