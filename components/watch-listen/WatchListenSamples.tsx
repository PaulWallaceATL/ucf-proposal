"use client";

import Link from "next/link";

/** Sample components for Watch/Listen redesign (ESPN+, YouTube, Listen Live, radio). */

export function WatchListenHeroSample() {
  return (
    <div className="rounded-xl border border-white/10 bg-ucf-black p-8 md:p-12">
      <h2 className="font-display text-3xl tracking-wide text-ucf-white md:text-4xl">Watch & Listen</h2>
      <p className="mt-3 text-ucf-white/80">One place for streams, replays, and radio — all sports.</p>
    </div>
  );
}

export function WatchLinksSample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="#" className="rounded-lg bg-white/10 px-6 py-3 font-semibold text-ucf-white hover:bg-ucf-gold hover:text-ucf-black">ESPN+</Link>
      <Link href="#" className="rounded-lg bg-white/10 px-6 py-3 font-semibold text-ucf-white hover:bg-ucf-gold hover:text-ucf-black">YouTube</Link>
    </div>
  );
}

export function ListenStripSample() {
  return (
    <div className="rounded-xl border border-ucf-gold/40 bg-ucf-gold/10 p-6">
      <span className="text-xs font-semibold uppercase tracking-wider text-ucf-gold">Listen Live</span>
      <p className="mt-2 font-display text-xl text-ucf-white">FM 96.9 / AM 740 The Game</p>
      <p className="mt-1 text-sm text-ucf-white/80">iHeart · All games, all season</p>
      <Link href="#" className="mt-4 inline-block text-sm font-semibold text-ucf-gold">Listen now →</Link>
    </div>
  );
}
