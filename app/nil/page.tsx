import type { Metadata } from "next";
import ProposalPageLayout from "@/components/proposal/ProposalPageLayout";
import { NilHeroSample, NilCtaCardSample } from "@/components/nil/NilSamples";

export const metadata: Metadata = {
  title: "NIL | UCF Athletics Proposal",
  description:
    "NIL redesign — Get Involved, Endorse a Student-Athlete — Antimatter proposal for UCF Athletics.",
};

const ENHANCEMENTS = [
  {
    id: "hero",
    title: "NIL Hero",
    component: <NilHeroSample />,
    rationale:
      "Name, Image & Likeness deserves a dedicated hero that explains the opportunity for fans and partners and drives a single 'Get involved' CTA so NIL isn't buried in nav.",
    proRef: "React Bits Pro Hero / CTA",
  },
  {
    id: "endorse",
    title: "Endorse CTA Card",
    component: <NilCtaCardSample />,
    rationale:
      "Endorse a Student-Athlete is a key subpage. A clear card on the NIL hub connects partners and fans to NIL opportunities without requiring multiple clicks.",
    proRef: "React Bits Pro Card / CTA",
  },
];

export default function NilPage() {
  return (
    <ProposalPageLayout
      title="NIL Redesign"
      description={
        <>
          One NIL hub: Get Involved and Endorse a Student-Athlete — so
          partners and fans can support Knights with a clear, on-brand
          experience.
        </>
      }
      sourceUrl="https://ucfknights.com"
      sourceLabel="Current NIL on ucfknights.com"
      enhancements={ENHANCEMENTS}
      closingTitle="One NIL hub. Every opportunity."
      closingCtaLabel="See the full proposal"
    />
  );
}
