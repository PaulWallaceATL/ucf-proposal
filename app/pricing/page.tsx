import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposal Tiers | Antimatter × UCF",
  description:
    "Three tiers of digital transformation for UCF Athletics.",
};

const FEATURES = [
  { name: "Stadium Page (2D Showcase)", t1: true, t2: true, t3: true },
  { name: "Events Page", t1: true, t2: true, t3: true },
  { name: "Basic Homepage Reskin", t1: true, t2: true, t3: true },
  { name: "3D Stadium Walkthrough (Full)", t1: false, t2: true, t3: true },
  { name: "Ticketing System Integration", t1: false, t2: true, t3: true },
  { name: "Full Site Reskin (All Sub-pages)", t1: false, t2: false, t3: true },
  { name: "NIL & Fan Zone Pages", t1: false, t2: false, t3: true },
  { name: "Ongoing Support & Maintenance", t1: false, t2: false, t3: true },
] as const;

const STEPS = [
  { number: "1", title: "Choose Your Tier", description: "Select Knight Vision, Charge On, or Citronaut based on your goals and timeline." },
  { number: "2", title: "Kickoff Call with Antimatter", description: "We align on scope, timeline, and success metrics with your team." },
  { number: "3", title: "Launch", description: "Go live with a modern, fan-first digital experience." },
] as const;

const FAQ_ITEMS = [
  {
    question: "Can we upgrade tiers after launch?",
    answer: "Yes. We design each tier so you can grow into the next. Upgrading typically involves a short discovery phase and a defined scope add-on.",
  },
  {
    question: "Do you work with existing UCF vendor contracts?",
    answer: "We can work within existing vendor and procurement frameworks. We’ll align with your procurement and legal teams early in the process.",
  },
  {
    question: "What is the typical timeline for each tier?",
    answer: "Knight Vision and Charge On can typically launch within a few months depending on content and approvals. Citronaut, with full reskin and ongoing support, usually runs on a longer timeline — we’ll propose a detailed schedule on the kickoff call.",
  },
  {
    question: "Will the site be mobile-optimized?",
    answer: "Every tier is mobile-first and responsive. All pages and the 3D stadium experience are built to perform and look great on phones and tablets.",
  },
  {
    question: "Do you provide training for the UCF Athletics team?",
    answer: "Yes. We include training and handoff documentation so your team can manage content and day-to-day updates with confidence. Citronaut includes ongoing support and check-ins.",
  },
] as const;

const CONTACT_EMAIL = "Paul@antimatterai.com";

/**
 * Pricing page: hero, three-tier table, how it works, FAQ, and footer CTA.
 * React Bits Pro–style blocks implemented with Tailwind (Hero, Pricing, How It Works, FAQ).
 */
export default function PricingPage() {
  return (
    <>
      {/* 1. Page Header — React Bits Pro Hero–style: black, centered */}
      <header className="w-full bg-ucf-black px-4 py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl lg:text-7xl">
            The Antimatter Proposal
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ucf-white/90 md:text-xl">
            A tiered engagement designed to meet UCF Athletics where you are —
            and take you where you want to go.
          </p>
        </div>
      </header>

      {/* 2. Pricing Tiers — Three-Column Table (React Bits Pro Pricing–style) */}
      <section className="w-full bg-ucf-black px-4 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Tier 1: Knight Vision */}
            <div className="flex flex-col rounded-xl border border-white/15 bg-white/5">
              <div className="border-b border-white/10 p-6 text-center">
                <h2 className="font-display text-2xl tracking-wide text-ucf-white">
                  Knight Vision
                </h2>
                <p className="mt-2 text-sm text-ucf-white/70">Tier 1</p>
              </div>
              <ul className="flex-1 border-b border-white/10 p-6">
                {FEATURES.map((f) => (
                  <li
                    key={f.name}
                    className="flex items-center justify-between gap-2 border-b border-white/5 py-3 text-sm last:border-0"
                  >
                    <span className="text-ucf-white/90">{f.name}</span>
                    <span className="shrink-0 text-ucf-gold">
                      {f.t1 ? "✓" : "—"}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="p-6">
                <p className="text-center text-sm font-medium text-ucf-white/80">
                  Estimated Investment
                </p>
                <p className="mt-1 text-center font-semibold text-ucf-gold">
                  Contact Us
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Knight Vision — Antimatter Proposal`}
                  className="mt-4 flex w-full items-center justify-center rounded-md border-2 border-ucf-gold bg-transparent px-4 py-3 text-sm font-semibold text-ucf-gold transition-colors hover:bg-ucf-gold hover:text-ucf-black"
                >
                  Start Conversation
                </a>
              </div>
            </div>

            {/* Tier 2: Charge On — Most Popular */}
            <div className="relative flex flex-col rounded-xl border-2 border-ucf-gold bg-white/[0.08]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ucf-gold px-4 py-1 text-sm font-bold text-ucf-black">
                Most Popular
              </div>
              <div className="border-b border-white/10 p-6 pt-8 text-center">
                <h2 className="font-display text-2xl tracking-wide text-ucf-white">
                  Charge On
                </h2>
                <p className="mt-2 text-sm text-ucf-white/70">Tier 2</p>
              </div>
              <ul className="flex-1 border-b border-white/10 p-6">
                {FEATURES.map((f) => (
                  <li
                    key={f.name}
                    className="flex items-center justify-between gap-2 border-b border-white/5 py-3 text-sm last:border-0"
                  >
                    <span className="text-ucf-white/90">{f.name}</span>
                    <span className="shrink-0 text-ucf-gold">
                      {f.t2 ? "✓" : "—"}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="p-6">
                <p className="text-center text-sm font-medium text-ucf-white/80">
                  Estimated Investment
                </p>
                <p className="mt-1 text-center font-semibold text-ucf-gold">
                  Contact Us
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Charge On — Antimatter Proposal`}
                  className="mt-4 flex w-full items-center justify-center rounded-md bg-ucf-gold px-4 py-3 text-sm font-semibold text-ucf-black transition-opacity hover:opacity-90"
                >
                  Start Conversation
                </a>
              </div>
            </div>

            {/* Tier 3: Citronaut */}
            <div className="flex flex-col rounded-xl border border-white/15 bg-white/5">
              <div className="border-b border-white/10 p-6 text-center">
                <h2 className="font-display text-2xl tracking-wide text-ucf-white">
                  Citronaut
                </h2>
                <p className="mt-2 text-sm text-ucf-white/70">Tier 3</p>
              </div>
              <ul className="flex-1 border-b border-white/10 p-6">
                {FEATURES.map((f) => (
                  <li
                    key={f.name}
                    className="flex items-center justify-between gap-2 border-b border-white/5 py-3 text-sm last:border-0"
                  >
                    <span className="text-ucf-white/90">{f.name}</span>
                    <span className="shrink-0 text-ucf-gold">
                      {f.t3 ? "✓" : "—"}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="p-6">
                <p className="text-center text-sm font-medium text-ucf-white/80">
                  Estimated Investment
                </p>
                <p className="mt-1 text-center font-semibold text-ucf-gold">
                  Contact Us
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Citronaut — Antimatter Proposal`}
                  className="mt-4 flex w-full items-center justify-center rounded-md border-2 border-ucf-gold bg-transparent px-4 py-3 text-sm font-semibold text-ucf-gold transition-colors hover:bg-ucf-gold hover:text-ucf-black"
                >
                  Start Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works — Three-step horizontal flow (React Bits Pro How It Works–style) */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display mb-12 text-center text-3xl tracking-wide text-ucf-white md:mb-16 md:text-4xl">
            How It Works
          </h2>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0">
            {STEPS.flatMap((step, i) => [
              <div key={step.number} className="flex flex-1 flex-col items-center px-4 text-center md:max-w-[260px]">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-ucf-gold bg-ucf-black text-2xl font-bold text-ucf-gold">
                  {step.number}
                </div>
                <h3 className="mt-6 font-display text-xl tracking-wide text-ucf-white md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ucf-white/80">
                  {step.description}
                </p>
              </div>,
              i < STEPS.length - 1 ? (
                <div
                  key={`connector-${i}`}
                  className="hidden h-0.5 flex-1 max-w-16 self-start mt-8 bg-ucf-gold/50 md:block"
                  aria-hidden
                />
              ) : null,
            ]).filter(Boolean)}
          </div>
        </div>
      </section>

      {/* 4. FAQ — React Bits Pro FAQ–style (details/summary for no-JS accordion) */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-10 text-center text-3xl tracking-wide text-ucf-white md:mb-12 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <ul className="divide-y divide-white/10 rounded-xl border border-white/10">
            {FAQ_ITEMS.map((item) => (
              <li key={item.question}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 pr-4 text-left font-medium text-ucf-white transition-colors hover:text-ucf-gold [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span className="shrink-0 text-ucf-gold transition-transform group-open:rotate-180" aria-hidden>
                      ▼
                    </span>
                  </summary>
                  <div className="pb-4 pr-8 text-sm leading-relaxed text-ucf-white/85">
                    {item.answer}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Footer CTA */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-normal tracking-wide text-ucf-white md:text-4xl lg:text-5xl">
            Ready to Charge On?
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block text-xl font-semibold text-ucf-gold underline decoration-ucf-gold underline-offset-4 transition-colors hover:text-ucf-gold-alt"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>
    </>
  );
}
