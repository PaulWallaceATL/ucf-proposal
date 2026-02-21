"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SHADOW_CLASS =
  "[text-shadow:0_1px_2px_rgba(255,255,255,0.8),0_0_20px_rgba(0,0,0,0.15)]";

/** Scroll ranges (0–1) where each section is visible; only one active at a time. */
const SECTION_RANGES: { start: number; end: number }[] = [
  { start: 0.05, end: 0.18 },
  { start: 0.25, end: 0.43 },
  { start: 0.5, end: 0.68 },
  { start: 0.75, end: 1 },
];

/**
 * Scroll-triggered overlay text for the stadium flythrough. Exactly one section
 * is visible at a time based on scroll progress; no overlapping text.
 */
export default function StadiumOverlay() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!mounted) return;

    const trigger = "#stadium-scroll-root";
    ScrollTrigger.create({
      trigger,
      start: "top top",
      end: "bottom bottom",
      scrub: false,
      onUpdate: (self) => {
        const p = self.progress;
        let idx = -1;
        SECTION_RANGES.forEach(({ start, end }, i) => {
          if (p >= start && p < end) idx = i;
        });
        if (p >= SECTION_RANGES[3].start) idx = 3;
        setActiveIndex(idx);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [mounted]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 w-full" aria-hidden>
      {/* Section 1: Acrisure Bounce House */}
      <div
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className={`fixed inset-0 flex flex-col items-center justify-center px-4 transition-opacity duration-200 ${SHADOW_CLASS} ${activeIndex === 0 ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <h2 className="font-display text-center text-6xl font-normal tracking-wide text-ucf-black md:text-7xl lg:text-[96px]">
          Acrisure Bounce House
        </h2>
        <p className="mt-4 text-center text-xl text-ucf-black/90 md:text-2xl">
          Orlando&apos;s Home of Champions.
        </p>
      </div>

      {/* Section 2: Fan Experience */}
      <div
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className={`fixed inset-0 flex flex-col items-center justify-center px-4 transition-opacity duration-200 ${SHADOW_CLASS} ${activeIndex === 1 ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <h2 className="font-display max-w-4xl text-center text-5xl font-normal tracking-wide text-ucf-black md:text-6xl lg:text-7xl">
          The Fan Experience, Reimagined
        </h2>
        <p className="mt-6 max-w-2xl text-center text-lg text-ucf-black/90 md:text-xl">
          From the tunnel to the upper deck — every seat, every moment.
        </p>
      </div>

      {/* Section 3: 50,000 Strong */}
      <div
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className={`fixed inset-0 flex flex-col items-center justify-center px-4 transition-opacity duration-200 ${SHADOW_CLASS} ${activeIndex === 2 ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <h2 className="font-display text-center text-6xl font-normal tracking-wide text-ucf-black md:text-7xl lg:text-8xl">
          50,000 Strong
        </h2>
        <p className="mt-6 max-w-2xl text-center text-lg text-ucf-black/90 md:text-xl">
          The largest crowd in UCF history, waiting for the next chapter.
        </p>
      </div>

      {/* Section 4: Build It With Antimatter + CTA */}
      <div
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        className={`fixed inset-0 flex flex-col items-center justify-center px-4 transition-opacity duration-200 ${SHADOW_CLASS} ${activeIndex === 3 ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0"}`}
      >
        <h2 className="font-display text-center text-5xl font-normal tracking-wide text-ucf-black md:text-6xl lg:text-7xl">
          Build It With Antimatter
        </h2>
        <div className="mt-8">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-ucf-gold px-8 py-4 text-lg font-semibold text-ucf-black transition-opacity hover:opacity-90"
          >
            See the Proposal
          </Link>
        </div>
      </div>
    </div>
  );
}
