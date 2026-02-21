import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams | UCF Athletics Proposal",
  description:
    "UCF Knights teams and sport programs — part of the Antimatter digital proposal for UCF Athletics.",
};

export default function TeamsPage() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-ucf-black">
      <h1 className="font-display text-4xl tracking-wide text-ucf-gold sm:text-5xl md:text-6xl">
        Teams
      </h1>
    </section>
  );
}
