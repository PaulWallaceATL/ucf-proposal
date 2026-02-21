import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | UCF Athletics Proposal",
  description: "Experience UCF Knights events like never before.",
};

const GRID_EVENTS = [
  {
    type: "Game Day",
    headline: "Game Day Experience",
    description: "The full stadium experience with pregame festivities and in-seat delivery.",
    date: "Sep 3, 2026",
  },
  {
    type: "Virtual",
    headline: "Virtual Fan Zone",
    description: "Watch parties, live Q&As, and exclusive content all season long.",
    date: "Season-long",
  },
  {
    type: "In-Person",
    headline: "Player Meet & Greet",
    description: "Get up close with Knights athletes. Autographs, photos, and more.",
    date: "Oct 2026",
  },
  {
    type: "Campus",
    headline: "Homecoming Weekend",
    description: "Alumni, tailgates, and the biggest game of the year on campus.",
    date: "Oct 2026",
  },
  {
    type: "Watch Party",
    headline: "Big 12 Championship Watch Party",
    description: "Join thousands of fans to watch the Knights chase the title.",
    date: "Dec 2026",
  },
  {
    type: "NIL",
    headline: "NIL Athlete Showcase",
    description: "Meet the next generation of Knight stars and brand partners.",
    date: "Mar 2026",
  },
] as const;

/**
 * Events page: Tony Robbins–inspired bold layout with hero, featured event card,
 * event grid, and CTA. High-contrast, large typography, urgency and energy.
 */
export default function EventsPage() {
  return (
    <>
      {/* 1. Hero: full-screen black, left headline, right sub + CTA */}
      <section className="flex min-h-screen w-full flex-col justify-center bg-ucf-black px-4 py-24 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
        <div className="md:max-w-[55%]">
          <h1 className="font-display text-5xl font-normal tracking-wide text-ucf-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px]">
            UCF Knights Events
          </h1>
        </div>
        <div className="mt-10 flex flex-col items-start md:mt-0 md:max-w-[42%] md:items-end md:text-right">
          <p className="text-lg leading-relaxed text-ucf-white/95 md:text-xl">
            From game day to championship week — experience UCF like never
            before.
          </p>
          <Link
            href="/tickets"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-ucf-gold px-8 py-4 text-lg font-semibold text-ucf-black transition-opacity hover:opacity-90"
          >
            View the Calendar
          </Link>
        </div>
      </section>

      {/* 2. Featured Event Card: full-width, dark image overlay */}
      <section className="w-full bg-ucf-black px-4 py-12 md:px-8 lg:px-12">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl md:aspect-[3/1]">
          <Image
            src="https://images.unsplash.com/photo-1504450758481-7338bbe71b2a?q=80&w=1920"
            alt="Packed stadium at night"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ucf-black/95 via-ucf-black/50 to-ucf-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12">
            <span className="mb-3 inline-block w-fit rounded border border-ucf-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ucf-gold">
              In-Person & Virtual
            </span>
            <h2 className="font-display text-4xl tracking-wide text-ucf-white md:text-5xl lg:text-6xl">
              2026 UCF Football Season
            </h2>
            <p className="mt-2 text-ucf-white/90 md:text-lg">
              Sep 3 – Nov 28, 2026
            </p>
            <p className="text-ucf-gold md:text-lg">
              Orlando, Fla. / Acrisure Bounce House
            </p>
            <Link
              href="/tickets"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-md bg-ucf-gold px-8 py-4 text-base font-semibold text-ucf-black transition-opacity hover:opacity-90"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Event Grid: 6 cards (React Bits Pro Showcase/Features–style) */}
      <section className="w-full bg-ucf-black px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display mb-12 text-3xl tracking-wide text-ucf-white md:mb-16 md:text-4xl">
            Upcoming Events
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GRID_EVENTS.map((event) => (
              <article
                key={event.headline}
                className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-ucf-gold/30 hover:bg-white/[0.08]"
              >
                <span className="mb-3 inline-block w-fit rounded border border-ucf-gold/80 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-ucf-gold">
                  {event.type}
                </span>
                <h3 className="font-display text-xl tracking-wide text-ucf-white md:text-2xl">
                  {event.headline}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ucf-white/85">
                  {event.description}
                </p>
                <p className="mt-4 text-sm font-medium text-ucf-gold">
                  {event.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section: full-width gold, black text */}
      <section className="w-full bg-ucf-gold px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-normal tracking-wide text-ucf-black md:text-4xl lg:text-5xl">
            Design Your Blueprint for an Extraordinary Fan Experience.
          </h2>
          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center justify-center rounded-md border-2 border-ucf-black bg-transparent px-8 py-4 text-lg font-semibold text-ucf-black transition-colors hover:bg-ucf-black hover:text-ucf-gold"
          >
            Talk to Antimatter
          </Link>
        </div>
      </section>
    </>
  );
}
