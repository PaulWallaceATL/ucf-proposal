import type { Metadata } from "next";
import ProposalPageLayout from "@/components/proposal/ProposalPageLayout";
import {
  AthleticsNavGridSample,
  QuickLinksBarSample,
} from "@/components/athletics/AthleticsSamples";

export const metadata: Metadata = {
  title: "Athletics | UCF Athletics Proposal",
  description:
    "Athletics section redesign — Staff, Academics, Facilities, Compliance, Mission XII — Antimatter proposal for UCF Athletics.",
};

const ENHANCEMENTS = [
  {
    id: "nav-grid",
    title: "Athletics Nav Grid",
    component: <AthleticsNavGridSample />,
    rationale:
      "Athletics covers many subpages: Staff Directory, Academics, Facilities, Compliance, Marching Knights, Mission XII, Knightmare Society, Corporate Partnerships, Mental Health & Performance. A grouped grid (People & Org, Campus & Compliance, Partners & Fans) makes discovery easier than a long flat list.",
    proRef: "React Bits Pro Features / Nav grid",
  },
  {
    id: "quick-links",
    title: "Quick Links Bar",
    component: <QuickLinksBarSample />,
    rationale:
      "UCF.edu, Social Media Directory, Public Records, and Trademark & Licensing are utility links that belong in a consistent footer or quick-links bar so they're findable without cluttering the main nav.",
    proRef: "React Bits Pro Footer / Link bar",
  },
];

export default function AthleticsPage() {
  return (
    <ProposalPageLayout
      title="Athletics Redesign"
      description={
        <>
          Enhancement ideas for the Athletics section — Staff, Academics,
          Facilities, Compliance, Marching Knights, Mission XII, and more — so
          every subpage has a clear entry point and consistent layout.
        </>
      }
      sourceUrl="https://ucfknights.com"
      sourceLabel="Current Athletics on ucfknights.com"
      enhancements={ENHANCEMENTS}
      closingTitle="One Athletics hub. Every audience."
      closingCtaLabel="See the full proposal"
    />
  );
}
