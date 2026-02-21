import type { Metadata } from "next";
import ProposalPageLayout from "@/components/proposal/ProposalPageLayout";
import {
  PromoHeroSample,
  DigitalLinksGridSample,
  FansCtaCardsSample,
} from "@/components/fan-zone/FanZoneSamples";

export const metadata: Metadata = {
  title: "Fan Zone | UCF Athletics Proposal",
  description:
    "Fan Zone redesign — Promotions, Digital, Fans (Knightro's Kids Club, Visiting Fans, NIL) — Antimatter proposal for UCF Athletics.",
};

const ENHANCEMENTS = [
  {
    id: "promo-hero",
    title: "Promotions Hero",
    component: <PromoHeroSample />,
    rationale:
      "Fan Zone spans Promotions (OUC Hometown Hero, Visit Orlando), Digital (12 for XII, All Sports Schedule), and Fans (Kids Club, Endorse, Visiting Fans). A clear hero and grouped CTAs reduce clutter and make subpages discoverable.",
    proRef: "React Bits Pro Hero / CTA",
  },
  {
    id: "digital-grid",
    title: "Digital Links Grid",
    component: <DigitalLinksGridSample />,
    rationale:
      "Digital offerings deserve equal weight in a simple grid — subscribe, schedules, and special programs in one glance instead of buried in nav dropdowns.",
    proRef: "React Bits Pro Features grid",
  },
  {
    id: "fans-cta",
    title: "Fans CTA Cards",
    component: <FansCtaCardsSample />,
    rationale:
      "Knightro's Kids Club, Endorse a Student-Athlete, and Visiting Fans each get a card so families and partners know where to go without digging through menus.",
    proRef: "React Bits Pro Card / CTA",
  },
];

export default function FanZonePage() {
  return (
    <ProposalPageLayout
      title="Fan Zone Redesign"
      description={
        <>
          Enhancement ideas for Fan Zone — Promotions, Digital, and Fans — so
          every subpage (OUC Hometown Hero, 12 for XII, Knightro's Kids Club,
          Visiting Fans, etc.) has a clear home and consistent layout.
        </>
      }
      sourceUrl="https://ucfknights.com"
      sourceLabel="Current Fan Zone on ucfknights.com"
      enhancements={ENHANCEMENTS}
      closingTitle="One Fan Zone. Every audience."
      closingCtaLabel="See the full proposal"
    />
  );
}
