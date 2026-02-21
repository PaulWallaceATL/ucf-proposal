import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antimatter × UCF Athletics | A Web Proposal",
  description:
    "Antimatter's proposal to reimagine the UCF Athletics digital experience.",
};

const PILLARS = [
  {
    title: "3D Stadium Experience",
    description:
      "Immersive, interactive stadium exploration and game-day experience powered by real-time 3D.",
    href: "/stadium",
  },
  {
    title: "Events & Ticketing",
    description:
      "Unified events calendar and streamlined ticketing with modern UX and flexible fulfillment.",
    href: "/tickets",
  },
  {
    title: "Full Site Redesign",
    description:
      "A cohesive, mobile-first redesign of the UCF Athletics digital presence and information architecture.",
    href: "/pricing",
  },
] as const;

const STATS = [
  { value: "16", label: "Sports" },
  { value: "50,000+", label: "Fans" },
  { value: "Big 12", label: "Conference" },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero: full-screen black, animated background, headline, CTA */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-ucf-black px-4 py-24 text-center">
        <div className="hero-aurora-bg" aria-hidden />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="font-display text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            The Future of UCF Athletics
          </h1>
          <p className="mt-6 text-lg text-ucf-gold sm:text-xl md:text-2xl">
            A web proposal by Antimatter.
          </p>
          <div className="mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md bg-ucf-gold px-8 py-4 text-lg font-semibold text-ucf-black transition-opacity hover:opacity-90"
            >
              View the Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Proposal Overview: three-column feature cards (React Bits Pro Features-style) */}
      <section className="w-full bg-ucf-black py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display mb-12 text-center text-3xl tracking-wide text-ucf-white md:mb-16 md:text-4xl">
            Proposal Overview
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-ucf-gold/30 hover:bg-white/[0.08] md:p-8"
              >
                <h3 className="font-display text-xl tracking-wide text-ucf-gold md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ucf-white/90 md:text-base">
                  {pillar.description}
                </p>
                <Link
                  href={pillar.href}
                  className="mt-6 inline-flex items-center text-sm font-medium text-ucf-gold transition-colors hover:text-ucf-gold-alt"
                >
                  Learn more
                  <span className="ml-1" aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats (React Bits Pro Stats-style horizontal bar) */}
      <section className="w-full border-t border-white/10 bg-ucf-black py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-8">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center md:flex-1"
              >
                <span className="font-display text-4xl tracking-wide text-ucf-gold md:text-5xl lg:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm uppercase tracking-wider text-ucf-white/80 md:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
