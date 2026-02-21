import type { Metadata } from "next";
import Link from "next/link";
import {
  TeamHeroSample,
  FeaturedStoryCardSample,
  NewsGridSample,
  ScheduleStripSample,
  VideoCardSample,
  DonateCTASample,
} from "@/components/teams/TeamPageSamples";

export const metadata: Metadata = {
  title: "Teams | UCF Athletics Proposal",
  description:
    "UCF Knights teams and sport programs — part of the Antimatter digital proposal for UCF Athletics.",
};

const ENHANCEMENTS = [
  {
    id: "hero",
    title: "Hero / Sport Identity",
    component: <TeamHeroSample />,
    rationale:
      "Current team pages lead with a generic hero. A dedicated sport hero with program name, tagline, and optional imagery creates instant recognition and works across all 16 sports from one template.",
    proRef: "React Bits Pro Hero",
  },
  {
    id: "featured",
    title: "Featured Story Card",
    component: <FeaturedStoryCardSample />,
    rationale:
      "The main story deserves a hero-style card instead of blending with the list. Large, tappable cards increase engagement and give video/photo room to breathe.",
    proRef: "React Bits Pro Feature / Showcase",
  },
  {
    id: "news",
    title: "News & Content Grid",
    component: <NewsGridSample />,
    rationale:
      "A responsive card grid with clear date and headline hierarchy makes scanning easier. Hover states and consistent spacing reduce clutter compared to a long single-column list.",
    proRef: "React Bits Pro Features grid",
  },
  {
    id: "schedule",
    title: "Schedule & Next Game Strip",
    component: <ScheduleStripSample />,
    rationale:
      "Fans want the next game and tickets in one glance. A horizontal strip (or sticky bar on scroll) keeps 'Next up' and ticket CTA visible without digging into a full schedule.",
    proRef: "React Bits Pro Stats / CTA bar",
  },
  {
    id: "video",
    title: "Video & Media Block",
    component: <VideoCardSample />,
    rationale:
      "Video sections can feel buried. A dedicated media block with thumbnail, title, and optional playlist keeps pressers and highlights discoverable and on-brand.",
    proRef: "React Bits Pro Media / Card",
  },
  {
    id: "donate",
    title: "Donate / Program CTA",
    component: <DonateCTASample />,
    rationale:
      "Donate and program support should be a clear, gold-accent CTA on every team page — not only in the nav. One template drives consistent giving across sports.",
    proRef: "React Bits Pro CTA block",
  },
];

/**
 * Teams page: redesign proposal for UCF’s team page template (e.g. baseball).
 * Each section pairs a sample component with rationale and React Bits Pro reference.
 */
export default function TeamsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-ucf-black px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl lg:text-7xl">
            Team Page Redesign
          </h1>
          <p className="mt-6 text-lg text-ucf-white/90 md:text-xl">
            Enhancement ideas for the UCF Knights team template — one flexible
            layout for all 16 sports, from{" "}
            <a
              href="https://ucfknights.com/sports/baseball"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ucf-gold underline decoration-ucf-gold underline-offset-2 hover:text-ucf-gold-alt"
            >
              Baseball
            </a>{" "}
            to Football.
          </p>
        </div>
      </section>

      {/* Enhancement sections */}
      <section className="border-t border-white/10 bg-ucf-black">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="font-display mb-12 text-center text-2xl tracking-wide text-ucf-gold md:text-3xl">
            Section Enhancements & Sample Components
          </h2>

          <ul className="space-y-16 md:space-y-20">
            {ENHANCEMENTS.map(({ id, title, component, rationale, proRef }) => (
              <li key={id} id={id} className="scroll-mt-24">
                <div className="mb-4 flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-xl tracking-wide text-ucf-white md:text-2xl">
                    {title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-ucf-gold/80">
                    {proRef}
                  </span>
                </div>
                <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ucf-white/80">
                  {rationale}
                </p>
                <div className="rounded-lg ring-1 ring-white/10 ring-offset-2 ring-offset-ucf-black">
                  {component}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-white/10 bg-ucf-black px-4 py-16 text-center md:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-normal tracking-wide text-ucf-white md:text-3xl">
            One template. All sports. Your brand.
          </h2>
          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-ucf-gold px-8 py-4 font-semibold text-ucf-black transition-opacity hover:opacity-90"
          >
            See the full proposal
          </Link>
        </div>
      </section>
    </>
  );
}
