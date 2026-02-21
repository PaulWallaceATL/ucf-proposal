import type { Metadata } from "next";
import ProposalPageLayout from "@/components/proposal/ProposalPageLayout";
import {
  WatchListenHeroSample,
  WatchLinksSample,
  ListenStripSample,
} from "@/components/watch-listen/WatchListenSamples";

export const metadata: Metadata = {
  title: "Watch / Listen | UCF Athletics Proposal",
  description:
    "Watch and Listen redesign — ESPN+, YouTube, Listen Live, FM 96.9 — Antimatter proposal for UCF Athletics.",
};

const ENHANCEMENTS = [
  {
    id: "hero",
    title: "Watch & Listen Hero",
    component: <WatchListenHeroSample />,
    rationale:
      "Streaming and radio live under one section. A dedicated hero and clear Watch vs. Listen split matches how fans actually use the site — find the game, then choose platform.",
    proRef: "React Bits Pro Hero",
  },
  {
    id: "watch",
    title: "Watch Links (ESPN+, YouTube)",
    component: <WatchLinksSample />,
    rationale:
      "ESPN+ and YouTube deserve prominent, tappable CTAs so fans aren't hunting through dropdowns. Same pattern scales to future partners.",
    proRef: "React Bits Pro CTA / Button group",
  },
  {
    id: "listen",
    title: "Listen Live Strip",
    component: <ListenStripSample />,
    rationale:
      "FM 96.9 / AM 740 The Game (iHeart) should be a visible strip or card — radio listeners expect 'Listen Live' in one click, especially on mobile.",
    proRef: "React Bits Pro Stats / CTA bar",
  },
];

export default function WatchListenPage() {
  return (
    <ProposalPageLayout
      title="Watch / Listen Redesign"
      description={
        <>
          One hub for streams and radio: ESPN+, YouTube, Listen Live, and
          station info — so every game is one click away.
        </>
      }
      sourceUrl="https://ucfknights.com"
      sourceLabel="Current Watch/Listen on ucfknights.com"
      enhancements={ENHANCEMENTS}
      closingTitle="One place to watch and listen."
      closingCtaLabel="See the full proposal"
    />
  );
}
