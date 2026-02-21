import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIL | UCF Athletics Proposal",
  description:
    "Name, Image & Likeness and athlete partnerships — part of the Antimatter proposal for UCF Athletics.",
};

export default function NilPage() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-ucf-black">
      <h1 className="font-display text-4xl tracking-wide text-ucf-gold sm:text-5xl md:text-6xl">
        NIL
      </h1>
    </section>
  );
}
