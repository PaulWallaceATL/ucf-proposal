import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fan Zone | UCF Athletics Proposal",
  description:
    "Fan engagement and community — part of the Antimatter proposal for UCF Athletics.",
};

export default function FanZonePage() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-ucf-black">
      <h1 className="font-display text-4xl tracking-wide text-ucf-gold sm:text-5xl md:text-6xl">
        Fan Zone
      </h1>
    </section>
  );
}
