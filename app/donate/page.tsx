import type { Metadata } from "next";
import ProposalPageLayout from "@/components/proposal/ProposalPageLayout";
import { DonateHeroSample, GivingTiersSample } from "@/components/donate/DonateSamples";

export const metadata: Metadata = {
  title: "Donate | UCF Athletics Proposal",
  description:
    "Donate redesign — ChargeOn Fund, Shareholders, Varsity Knights, Mission XII, Knight Walk — Antimatter proposal for UCF Athletics.",
};

const ENHANCEMENTS = [
  {
    id: "hero",
    title: "Donate Hero",
    component: <DonateHeroSample />,
    rationale:
      "ChargeOn Fund as the central giving hub deserves a hero and single primary CTA so donors know where to start. Gold-accent styling reinforces giving as a priority.",
    proRef: "React Bits Pro Hero / CTA",
  },
  {
    id: "tiers",
    title: "Giving Tiers",
    component: <GivingTiersSample />,
    rationale:
      "Shareholders Society, Varsity Knights, Knightmare Society, Mission XII, and Knight Walk Legacy Brick each need a clear entry so donors can choose their level and benefits without getting lost in subpages.",
    proRef: "React Bits Pro Features / List",
  },
];

export default function DonatePage() {
  return (
    <ProposalPageLayout
      title="Donate Redesign"
      description={
        <>
          One giving experience: ChargeOn Fund, Shareholders, Varsity Knights,
          Mission XII, and Knight Walk — so every donor finds their path and
          benefits.
        </>
      }
      sourceUrl="https://ucfknights.com"
      sourceLabel="Current Donate on ucfknights.com"
      enhancements={ENHANCEMENTS}
      closingTitle="One giving hub. Every impact."
      closingCtaLabel="See the full proposal"
    />
  );
}
