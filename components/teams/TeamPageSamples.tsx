"use client";

import Link from "next/link";

/**
 * Sample components for the Team Page Redesign Proposal.
 * Each mirrors a React Bits Pro–style block with UCF branding.
 */

export function TeamHeroSample() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-ucf-black to-ucf-black/95 p-10 md:p-14">
      <div className="relative z-10">
        <span className="text-sm font-semibold uppercase tracking-widest text-ucf-gold">
          Sport
        </span>
        <h2 className="font-display mt-2 text-4xl tracking-wide text-ucf-white md:text-5xl lg:text-6xl">
          Baseball
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ucf-white/80">
          One template, all 16 programs — consistent identity and navigation.
        </p>
      </div>
    </div>
  );
}

export function FeaturedStoryCardSample() {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-ucf-black">
      <div className="aspect-video bg-white/5" />
      <div className="border-t border-white/10 p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-ucf-gold">
          Featured
        </span>
        <h3 className="mt-2 font-display text-xl tracking-wide text-ucf-white md:text-2xl">
          Baseball Tops Notre Dame, 4-2, in 10 Innings
        </h3>
        <p className="mt-2 text-sm text-ucf-white/70">
          Jax Classic Opener — View story and video.
        </p>
        <Link
          href="#"
          className="mt-4 inline-flex items-center text-sm font-semibold text-ucf-gold transition-colors hover:text-ucf-gold-alt"
        >
          View Story →
        </Link>
      </div>
    </article>
  );
}

export function NewsGridSample() {
  const items = [
    { title: "Baseball Heads to Jacksonville for Jax Classic", date: "Feb 19" },
    { title: "UCFAA x Disney & ESPN Spring Broadcast", date: "Feb 19" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <article
          key={i}
          className="flex items-start justify-between gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-ucf-gold/30"
        >
          <div>
            <h4 className="font-medium text-ucf-white">{item.title}</h4>
            <time className="mt-1 block text-xs text-ucf-gold">{item.date}</time>
          </div>
          <span className="shrink-0 text-ucf-gold" aria-hidden>→</span>
        </article>
      ))}
    </div>
  );
}

export function ScheduleStripSample() {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-ucf-gold">
          Next Up
        </span>
        <p className="mt-1 font-display text-lg text-ucf-white">vs Notre Dame</p>
      </div>
      <div className="h-8 w-px bg-white/20" />
      <div>
        <span className="text-xs text-ucf-white/70">Date</span>
        <p className="mt-1 text-ucf-white">Feb 20, 2026</p>
      </div>
      <div className="h-8 w-px bg-white/20" />
      <div>
        <span className="text-xs text-ucf-white/70">Venue</span>
        <p className="mt-1 text-ucf-white">Jacksonville, Fla.</p>
      </div>
      <Link
        href="#"
        className="ml-auto rounded-md bg-ucf-gold px-4 py-2 text-sm font-semibold text-ucf-black"
      >
        Tickets
      </Link>
    </div>
  );
}

export function VideoCardSample() {
  return (
    <div className="rounded-xl border border-white/10 bg-ucf-black overflow-hidden">
      <div className="aspect-video flex items-center justify-center bg-white/5 text-ucf-white/50">
        <span className="text-sm">Video thumbnail / embed</span>
      </div>
      <div className="border-t border-white/10 p-4">
        <h4 className="font-display text-lg text-ucf-white">
          Postgame Presser — Notre Dame
        </h4>
        <p className="mt-1 text-sm text-ucf-white/70">
          Coach Wallace, Evan Jones, James Hankerson Jr.
        </p>
      </div>
    </div>
  );
}

export function DonateCTASample() {
  return (
    <div className="rounded-xl border-2 border-ucf-gold bg-ucf-gold/10 p-8 text-center">
      <h3 className="font-display text-2xl tracking-wide text-ucf-white md:text-3xl">
        Support Baseball
      </h3>
      <p className="mt-2 text-ucf-white/80">
        ChargeOn Fund — every gift helps the program.
      </p>
      <Link
        href="/donate"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-ucf-gold px-6 py-3 font-semibold text-ucf-black transition-opacity hover:opacity-90"
      >
        Donate
      </Link>
    </div>
  );
}
