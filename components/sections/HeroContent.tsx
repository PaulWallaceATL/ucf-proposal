"use client";

import { useSyncExternalStore } from "react";
import SplitText from "@/components/reactbits/SplitText";
import { CONTACT_EMAIL } from "@/config/stadiumOptions";

const MQ = "(prefers-reduced-motion: reduce)";
function subscribe(cb: () => void) {
  const mq = window.matchMedia(MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getSnapshot() {
  return window.matchMedia(MQ).matches;
}

/**
 * Hero left-column content with animated SplitText headline/subhead.
 * Falls back to static text when prefers-reduced-motion is active.
 */
export default function HeroContent() {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, () => false);

  return (
    <div>
      {reducedMotion ? (
        <>
          <h1 className="font-display text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl lg:text-7xl">
            UCF Stadium Digital Experience
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ucf-gold sm:text-xl md:text-2xl">
            Three premium web experience options to showcase luxury seating,
            suites, and event spaces—built inside UCFKnights.com.
          </p>
        </>
      ) : (
        <>
          <SplitText
            text="UCF Stadium Digital Experience"
            tag="h1"
            className="font-display text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl lg:text-7xl"
            delay={18}
            duration={1.05}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 18 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.3}
            rootMargin="-80px"
            textAlign="left"
          />
          <div className="mt-6">
            <SplitText
              text="Three premium web experience options to showcase luxury seating, suites, and event spaces—built inside UCFKnights.com."
              tag="p"
              className="text-lg leading-relaxed text-ucf-gold sm:text-xl md:text-2xl"
              delay={8}
              duration={0.9}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="-80px"
              textAlign="left"
            />
          </div>
        </>
      )}

      <p className="mt-3 text-sm text-ucf-white/60">
        Designed to elevate donor perception, premium seating conversion,
        and recruiting impact.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#options"
          className="inline-flex items-center justify-center rounded-md bg-ucf-gold px-8 py-4 text-base font-semibold text-ucf-black transition-opacity hover:opacity-90"
        >
          View Experience Options
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center justify-center rounded-md border-2 border-ucf-gold bg-transparent px-8 py-4 text-base font-semibold text-ucf-gold transition-colors hover:bg-ucf-gold hover:text-ucf-black"
        >
          Speak to a Representative
        </a>
      </div>
    </div>
  );
}
