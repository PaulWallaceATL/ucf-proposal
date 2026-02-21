import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athletics | UCF Athletics Proposal",
  description:
    "UCF Athletics overview — part of the Antimatter digital proposal.",
};

export default function AthleticsPage() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-ucf-black">
      <h1 className="font-display text-4xl tracking-wide text-ucf-gold sm:text-5xl md:text-6xl">
        Athletics
      </h1>
    </section>
  );
}
