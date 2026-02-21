import type { Metadata } from "next";
import ProposalPageLayout from "@/components/proposal/ProposalPageLayout";
import {
  TeamHeroSample,
  FeaturedStoryCardSample,
  NewsGridSample,
  ScheduleStripSample,
  VideoCardSample,
  DonateCTASample,
} from "@/components/teams/TeamPageSamples";

export const metadata: Metadata = {
  title: "Teams | UCF Athletics Proposal",
  description:
    "UCF Knights teams and sport programs — part of the Antimatter digital proposal for UCF Athletics.",
};

const ENHANCEMENTS = [
  {
    id: "hero",
    title: "Hero / Sport Identity",
    component: <TeamHeroSample />,
    rationale:
      "Current team pages lead with a generic hero. A dedicated sport hero with program name, tagline, and optional imagery creates instant recognition and works across all 16 sports from one template.",
    proRef: "React Bits Pro Hero",
  },
  {
    id: "featured",
    title: "Featured Story Card",
    component: <FeaturedStoryCardSample />,
    rationale:
      "The main story deserves a hero-style card instead of blending with the list. Large, tappable cards increase engagement and give video/photo room to breathe.",
    proRef: "React Bits Pro Feature / Showcase",
  },
  {
    id: "news",
    title: "News & Content Grid",
    component: <NewsGridSample />,
    rationale:
      "A responsive card grid with clear date and headline hierarchy makes scanning easier. Hover states and consistent spacing reduce clutter compared to a long single-column list.",
    proRef: "React Bits Pro Features grid",
  },
  {
    id: "schedule",
    title: "Schedule & Next Game Strip",
    component: <ScheduleStripSample />,
    rationale:
      "Fans want the next game and tickets in one glance. A horizontal strip (or sticky bar on scroll) keeps 'Next up' and ticket CTA visible without digging into a full schedule.",
    proRef: "React Bits Pro Stats / CTA bar",
  },
  {
    id: "video",
    title: "Video & Media Block",
    component: <VideoCardSample />,
    rationale:
      "Video sections can feel buried. A dedicated media block with thumbnail, title, and optional playlist keeps pressers and highlights discoverable and on-brand.",
    proRef: "React Bits Pro Media / Card",
  },
  {
    id: "donate",
    title: "Donate / Program CTA",
    component: <DonateCTASample />,
    rationale:
      "Donate and program support should be a clear, gold-accent CTA on every team page — not only in the nav. One template drives consistent giving across sports.",
    proRef: "React Bits Pro CTA block",
  },
];

export default function TeamsPage() {
  return (
    <ProposalPageLayout
      title="Team Page Redesign"
      description={
        <>
          Enhancement ideas for the UCF Knights team template — one flexible
          layout for all 16 sports, from{" "}
          <a
            href="https://ucfknights.com/sports/baseball"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ucf-gold underline decoration-ucf-gold underline-offset-2 hover:text-ucf-gold-alt"
          >
            Baseball
          </a>{" "}
          to Football.
        </>
      }
      sourceUrl="https://ucfknights.com/sports/baseball"
      sourceLabel="Current team page (Baseball) on ucfknights.com"
      enhancements={ENHANCEMENTS}
      closingTitle="One template. All sports. Your brand."
      closingCtaLabel="See the full proposal"
    />
  );
}
