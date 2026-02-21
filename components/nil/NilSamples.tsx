"use client";

import Link from "next/link";

/** Sample components for NIL (Get Involved, Endorse, etc.). */

export function NilHeroSample() {
  return (
    <div className="rounded-xl border border-ucf-gold/50 bg-ucf-black p-10 text-center">
      <h2 className="font-display text-3xl tracking-wide text-ucf-white md:text-4xl">Name, Image & Likeness</h2>
      <p className="mt-4 text-ucf-white/90">Support student-athletes. Build your brand with UCF Knights.</p>
      <Link href="#" className="mt-6 inline-block rounded-md bg-ucf-gold px-8 py-4 font-semibold text-ucf-black">Get involved</Link>
    </div>
  );
}

export function NilCtaCardSample() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
      <h3 className="font-display text-xl text-ucf-white">Endorse a Student-Athlete</h3>
      <p className="mt-2 text-sm text-ucf-white/80">Partners and fans: connect with Knights for NIL opportunities.</p>
      <Link href="#" className="mt-6 inline-block text-ucf-gold font-semibold">Learn more →</Link>
    </div>
  );
}
