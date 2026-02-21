import type { Metadata } from "next";
import Link from "next/link";
import StadiumOverlay from "@/components/stadium/StadiumOverlay";
import StadiumSceneDynamic from "@/components/stadium/StadiumSceneDynamic";

export const metadata: Metadata = {
  title: "3D Stadium Experience | UCF Athletics Proposal",
  description: "An immersive 3D walkthrough of the Acrisure Bounce House.",
};

/**
 * Stadium 3D walkthrough page. Hero at top, scroll-driven canvas + overlay,
 * then closing CTA section.
 */
export default function StadiumPage() {
  return (
    <div className="relative">
      {/* Hero: clean start, centered, above the 3D experience */}
      <section
        className="relative z-20 flex min-h-screen w-full flex-col items-center justify-center bg-ucf-black px-4"
        aria-label="Introduction"
      >
        <h1 className="font-display text-center text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl lg:text-7xl">
          Scroll to Experience
        </h1>
        <p className="mt-6 max-w-md text-center text-lg text-ucf-white/80">
          An immersive 3D walkthrough of the Acrisure Bounce House.
        </p>
        <div className="mt-10 flex items-center gap-2 text-ucf-gold">
          <span className="text-sm font-medium uppercase tracking-widest">
            Scroll down
          </span>
          <svg
            className="h-6 w-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Scroll-driven 3D + overlay */}
      <div id="stadium-scroll-root" className="relative h-[500vh] w-full" />
      <div className="fixed inset-0 z-0 h-screen w-screen">
        <StadiumSceneDynamic />
      </div>
      <div className="absolute left-0 right-0 top-[100vh] z-10 h-[500vh] w-full">
        <StadiumOverlay />
      </div>

      {/* End section: clean close with CTA */}
      <section
        className="relative z-20 flex min-h-screen w-full flex-col items-center justify-center bg-ucf-black px-4"
        aria-label="Continue to proposal"
      >
        <h2 className="font-display text-center text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl">
          Ready to Build This?
        </h2>
        <p className="mt-6 max-w-lg text-center text-lg text-ucf-white/80">
          See the full Antimatter proposal for UCF Athletics — tiers, timeline, and next steps.
        </p>
        <Link
          href="/pricing"
          className="mt-10 inline-flex items-center justify-center rounded-md bg-ucf-gold px-8 py-4 text-lg font-semibold text-ucf-black transition-opacity hover:opacity-90"
        >
          View the Proposal
        </Link>
      </section>
    </div>
  );
}
