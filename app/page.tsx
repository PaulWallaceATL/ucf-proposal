import Link from "next/link";
import type { Metadata } from "next";
import { stadiumOptions, CONTACT_EMAIL } from "@/config/stadiumOptions";
import OptionCard from "@/components/options/OptionCard";
import AddOnsSection from "@/components/options/AddOnsSection";
import VeoClipsGrid from "@/components/options/VeoClipsGrid";
import WhyAntimatterSection from "@/components/sections/WhyAntimatterSection";
import HeroContent from "@/components/sections/HeroContent";

export const metadata: Metadata = {
  title: "UCF Stadium Digital Experience | Antimatter × UCF",
  description:
    "Three premium web experience options to showcase luxury seating, suites, and event spaces—built inside UCFKnights.com.",
};

const INCLUDED_ITEMS = [
  "Integrated within UCFKnights.com (navigation + sitemap alignment + CMS-ready)",
  "One premium stadium landing experience",
  "Up to five (5) luxury/suite/event detail pages",
  "Responsive (mobile-first) and performance optimized",
  "Lead capture / 'Speak to a Representative' CTA integration",
];

export default function Home() {
  return (
    <>
      {/* ───────── Section 1: Hero ───────── */}
      <section className="relative w-full overflow-hidden bg-ucf-black px-4 py-20 md:py-28 lg:py-32">
        <div className="hero-aurora-bg" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column: animated text */}
          <HeroContent />

          {/* Right column: stadium video in premium frame */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-ucf-gold/20 bg-white/5 p-2 shadow-2xl shadow-ucf-gold/5">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <video
                  className="h-full w-full object-cover"
                  src="/assets/Stadium_Zoom_Video_Generation.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  aria-label="Stadium cinematic zoom video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Section 2: Choose Your Experience ───────── */}
      <section
        id="options"
        className="w-full scroll-mt-20 border-t border-white/10 bg-ucf-black px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display mb-4 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Choose Your Experience
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-ucf-white/70 md:mb-16">
            Each option is built to live within UCFKnights.com and includes up
            to five luxury/suite/event detail pages.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stadiumOptions.map((opt, i) => (
              <OptionCard
                key={opt.slug}
                title={opt.title}
                price={opt.price}
                summary={opt.summary}
                bullets={opt.bullets}
                route={opt.route}
                ctaLabel={`View Option ${i + 1}`}
                mediaType={opt.mediaType}
                mediaSrc={opt.mediaSrc}
                posterSrc={opt.posterSrc}
                autoplay={opt.mediaType === "3d" || opt.mediaType === "video"}
                showTag={opt.mediaType === "3d" ? "Try Me!" : null}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Section 3: Why Antimatter ───────── */}
      <WhyAntimatterSection />

      {/* ───────── Section 4: What's Included ───────── */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-10 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            What&apos;s Included in Every Package
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="mt-0.5 shrink-0 text-ucf-gold" aria-hidden>
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-ucf-white/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Section 5: Production Add-Ons ───────── */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-10 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Production Add-Ons
          </h2>
          <AddOnsSection />
        </div>
      </section>

      {/* ───────── Section 6: Video Concepts (Coming Soon) ───────── */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display mb-4 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Video Concepts
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-ucf-white/60">
            We can turn existing stadium renders into cinematic clips.
          </p>
          <VeoClipsGrid />
        </div>
      </section>

      {/* ───────── Section 7: Final CTA Band ───────── */}
      <section className="w-full border-t border-ucf-gold/20 bg-ucf-black px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-normal tracking-wide text-ucf-white md:text-4xl lg:text-5xl">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="mt-4 text-ucf-white/70">
            Ready to elevate the UCF premium experience? Get in touch.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=UCF Stadium Digital Experience — Proposal Request`}
              className="inline-flex items-center justify-center rounded-md bg-ucf-gold px-8 py-4 font-semibold text-ucf-black transition-opacity hover:opacity-90"
            >
              Request Proposal
            </a>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center rounded-md border-2 border-ucf-gold bg-transparent px-8 py-4 font-semibold text-ucf-gold transition-colors hover:bg-ucf-gold hover:text-ucf-black"
            >
              Email / Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
