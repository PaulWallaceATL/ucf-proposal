"use client";

import Link from "next/link";

/** Sample components for Shop redesign (UCF Shop, Men, Women, Kids, Auctions). */

export function ShopHeroSample() {
  return (
    <div className="rounded-xl border border-white/10 bg-ucf-black p-8 text-center">
      <h2 className="font-display text-3xl tracking-wide text-ucf-white">Official Online Store</h2>
      <p className="mt-2 text-sm text-ucf-gold">Presented by Nike</p>
      <Link href="#" className="mt-6 inline-block rounded-md bg-ucf-gold px-6 py-3 font-semibold text-ucf-black">Find your fit</Link>
    </div>
  );
}

export function CategoryPillsSample() {
  const cats = ["Men", "Women", "Kids", "Photos", "Auctions"];
  return (
    <div className="flex flex-wrap gap-2">
      {cats.map((c, i) => (
        <Link key={i} href="#" className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-ucf-white hover:border-ucf-gold hover:text-ucf-gold">{c}</Link>
      ))}
    </div>
  );
}

export function ProductCardSample() {
  return (
    <div className="rounded-xl border border-white/10 bg-ucf-black overflow-hidden">
      <div className="aspect-square bg-white/5" />
      <div className="p-4">
        <p className="text-sm text-ucf-gold">Men's Nike</p>
        <h3 className="font-display text-ucf-white">Space Game Jersey</h3>
        <p className="mt-1 font-semibold text-ucf-gold">$129.99</p>
      </div>
    </div>
  );
}
