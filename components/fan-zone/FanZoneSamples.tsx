"use client";

import Link from "next/link";

/** Sample components for Fan Zone redesign proposal (Promotions, Digital, Fans). */

export function PromoHeroSample() {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-br from-ucf-black to-ucf-black/90 p-8 md:p-12">
      <span className="text-xs font-semibold uppercase tracking-widest text-ucf-gold">Promotions</span>
      <h2 className="font-display mt-2 text-3xl tracking-wide text-ucf-white md:text-4xl">OUC Hometown Hero</h2>
      <p className="mt-3 max-w-md text-ucf-white/80">Visit Orlando · Fan Promotions · 12 for XII</p>
      <Link href="#" className="mt-6 inline-block text-sm font-semibold text-ucf-gold">View all promotions →</Link>
    </div>
  );
}

export function DigitalLinksGridSample() {
  const items = ["12 for XII", "Subscribe – Space U Brew", "All Sports Schedule"];
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((label, i) => (
        <Link
          key={i}
          href="#"
          className="rounded-lg border border-white/10 bg-white/5 p-4 text-center font-medium text-ucf-white transition-colors hover:border-ucf-gold/40 hover:bg-white/10"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export function FansCtaCardsSample() {
  const cards = [
    { title: "Knightro's Kids Club", desc: "Young fans" },
    { title: "Endorse a Student-Athlete", desc: "NIL" },
    { title: "Visiting Fans", desc: "Info & guides" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map((c, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-ucf-black p-5">
          <h3 className="font-display text-lg text-ucf-white">{c.title}</h3>
          <p className="mt-1 text-sm text-ucf-gold">{c.desc}</p>
        </div>
      ))}
    </div>
  );
}
