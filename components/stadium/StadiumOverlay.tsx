"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SHADOW_CLASS =
  "[text-shadow:0_2px_20px_rgba(0,0,0,0.9),0_0_40px_rgba(0,0,0,0.6)]";

/**
 * Scroll-triggered overlay text for the stadium flythrough. Sections fade in/out
 * at specific scroll percentages; all text white with shadow for legibility.
 */
export default function StadiumOverlay() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = "#stadium-scroll-root";
    const getProgress = (start: number, end: number) => ({
      start: `${start * 100}%`,
      end: `${end * 100}%`,
    });

    if (section1Ref.current) {
      gsap.fromTo(
        section1Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger,
            start: "5% top",
            end: "18% top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        section1Ref.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger,
            start: "18% top",
            end: "22% top",
            scrub: true,
          },
        }
      );
    }

    if (section2Ref.current) {
      gsap.fromTo(
        section2Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger,
            start: "25% top",
            end: "28% top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        section2Ref.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger,
            start: "43% top",
            end: "46% top",
            scrub: true,
          },
        }
      );
    }

    if (section3Ref.current) {
      gsap.fromTo(
        section3Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger,
            start: "50% top",
            end: "53% top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        section3Ref.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger,
            start: "68% top",
            end: "72% top",
            scrub: true,
          },
        }
      );
    }

    if (section4Ref.current) {
      gsap.fromTo(
        section4Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger,
            start: "75% top",
            end: "78% top",
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 w-full" aria-hidden>
      {/* Section 1: 0–20% — Acrisure Bounce House */}
      <div
        ref={section1Ref}
        className={`fixed inset-0 flex flex-col items-center justify-center px-4 opacity-0 ${SHADOW_CLASS}`}
      >
        <h2 className="font-display text-center text-6xl font-normal tracking-wide text-white md:text-7xl lg:text-[96px]">
          Acrisure Bounce House
        </h2>
        <p className="mt-4 text-center text-xl text-white md:text-2xl">
          Orlando&apos;s Home of Champions.
        </p>
      </div>

      {/* Section 2: 25–45% — Fan Experience */}
      <div
        ref={section2Ref}
        className={`fixed inset-0 flex flex-col items-center justify-center px-4 opacity-0 ${SHADOW_CLASS}`}
      >
        <h2 className="font-display max-w-4xl text-center text-5xl font-normal tracking-wide text-white md:text-6xl lg:text-7xl">
          The Fan Experience, Reimagined
        </h2>
        <p className="mt-6 max-w-2xl text-center text-lg text-white md:text-xl">
          From the tunnel to the upper deck — every seat, every moment.
        </p>
      </div>

      {/* Section 3: 50–70% — 50,000 Strong */}
      <div
        ref={section3Ref}
        className={`fixed inset-0 flex flex-col items-center justify-center px-4 opacity-0 ${SHADOW_CLASS}`}
      >
        <h2 className="font-display text-center text-6xl font-normal tracking-wide text-white md:text-7xl lg:text-8xl">
          50,000 Strong
        </h2>
        <p className="mt-6 max-w-2xl text-center text-lg text-white md:text-xl">
          The largest crowd in UCF history, waiting for the next chapter.
        </p>
      </div>

      {/* Section 4: 75–95% — Build It With Antimatter + CTA */}
      <div
        ref={section4Ref}
        className={`fixed inset-0 flex flex-col items-center justify-center px-4 opacity-0 ${SHADOW_CLASS}`}
      >
        <h2 className="font-display text-center text-5xl font-normal tracking-wide text-white md:text-6xl lg:text-7xl">
          Build It With Antimatter
        </h2>
        <div className="pointer-events-auto mt-8">
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
