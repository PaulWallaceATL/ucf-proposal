import type { Metadata } from "next";
import ProposalPageLayout from "@/components/proposal/ProposalPageLayout";
import {
  TicketsHeroSample,
  NextGameTickerSample,
  TicketLinksGridSample,
} from "@/components/tickets/TicketsSamples";

export const metadata: Metadata = {
  title: "Tickets | UCF Athletics Proposal",
  description:
    "Tickets redesign — Buy, manage, digital guide, premium tailgating — Antimatter proposal for UCF Athletics.",
};

const ENHANCEMENTS = [
  {
    id: "hero",
    title: "Tickets Hero",
    component: <TicketsHeroSample />,
    rationale:
      "Tickets should lead with a clear hero: buy, manage, and use digital tickets in one place. Reduces confusion between Ticket Information, Manage My Tickets, and sport-specific ticketing.",
    proRef: "React Bits Pro Hero",
  },
  {
    id: "next-game",
    title: "Next Game Ticker",
    component: <NextGameTickerSample />,
    rationale:
      "A strip showing the next big game (e.g. UCF vs. LSU) with date/time and a direct 'Get tickets' CTA keeps conversion one click away from the homepage or any section.",
    proRef: "React Bits Pro Stats / CTA bar",
  },
  {
    id: "links",
    title: "Ticket Links Grid",
    component: <TicketLinksGridSample />,
    rationale:
      "Ticket Information, Manage My Tickets, Digital Ticket Guide, Premium Tailgating, Student FB & MBB Guide, and Olympic Sport Tickets in a simple grid so every audience finds the right entry point.",
    proRef: "React Bits Pro Features grid",
  },
];

export default function TicketsPage() {
  return (
    <ProposalPageLayout
      title="Tickets Redesign"
      description={
        <>
          One tickets hub: buy, manage, digital guide, premium tailgating, and
          sport-specific guides — so fans get to the right flow without
          digging.
        </>
      }
      sourceUrl="https://ucfknights.com"
      sourceLabel="Current Tickets on ucfknights.com"
      enhancements={ENHANCEMENTS}
      closingTitle="One tickets experience. Every game."
      closingCtaLabel="See the full proposal"
    />
  );
}
