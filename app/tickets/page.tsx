import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickets | UCF Athletics Proposal",
  description:
    "Get tickets for UCF Knights games and events — part of the Antimatter proposal for UCF Athletics.",
};

export default function TicketsPage() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-ucf-black">
      <h1 className="font-display text-4xl tracking-wide text-ucf-gold sm:text-5xl md:text-6xl">
        Tickets
      </h1>
    </section>
  );
}
