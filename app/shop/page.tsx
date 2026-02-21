import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | UCF Athletics Proposal",
  description:
    "Official UCF Knights gear and merchandise — part of the Antimatter proposal for UCF Athletics.",
};

export default function ShopPage() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-ucf-black">
      <h1 className="font-display text-4xl tracking-wide text-ucf-gold sm:text-5xl md:text-6xl">
        Shop
      </h1>
    </section>
  );
}
