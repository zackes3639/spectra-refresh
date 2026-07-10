import type { Metadata } from "next";
import { SpeakingPage } from "@/components/speaking/speaking-page";

export const metadata: Metadata = {
  title: "Speaking & Media",
  description:
    "Invite Dr. Lisa Koche to speak — keynotes, podcasts, panels, and leadership sessions on whole-person health, energy, resilience, and heart-centered leadership.",
  alternates: {
    canonical: "/speaking/",
  },
};

export default function Speaking() {
  return <SpeakingPage />;
}
