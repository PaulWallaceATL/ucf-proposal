import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | UCF Athletics Proposal",
  description:
    "Support UCF Athletics — part of the Antimatter proposal for UCF Knights.",
};

export default function DonatePage() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-ucf-black">
      <h1 className="font-display text-4xl tracking-wide text-ucf-gold sm:text-5xl md:text-6xl">
        Donate
      </h1>
    </section>
  );
}
