"use client";

import Link from "next/link";

/** Sample components for Donate section (ChargeOn Fund, Shareholders, Mission XII, etc.). */

export function DonateHeroSample() {
  return (
    <div className="rounded-xl border-2 border-ucf-gold bg-ucf-gold/10 p-10 text-center">
      <h2 className="font-display text-3xl tracking-wide text-ucf-white md:text-4xl">ChargeOn Fund</h2>
      <p className="mt-4 max-w-lg mx-auto text-ucf-white/90">One central giving experience — support your program, unlock benefits.</p>
      <Link href="#" className="mt-6 inline-block rounded-md bg-ucf-gold px-8 py-4 font-semibold text-ucf-black">Give now</Link>
    </div>
  );
}

export function GivingTiersSample() {
  const tiers = [
    { name: "Shareholders Society", tag: "Premium" },
    { name: "Varsity Knights", tag: "Leadership" },
    { name: "Knightmare Society", tag: "Community" },
    { name: "Mission XII", tag: "Impact" },
    { name: "Knight Walk Legacy Brick", tag: "Legacy" },
  ];
  return (
    <div className="space-y-3">
      {tiers.map((t, i) => (
        <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-5 py-4">
          <span className="font-medium text-ucf-white">{t.name}</span>
          <span className="text-xs text-ucf-gold">{t.tag}</span>
        </div>
      ))}
    </div>
  );
}
