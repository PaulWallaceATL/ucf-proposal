"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import SplitText from "@/components/reactbits/SplitText";
import { CONTACT_EMAIL, CONTACT_SUBJECT } from "@/config/stadiumOptions";
import BrandButton from "@/components/ui/BrandButton";

const MQ = "(prefers-reduced-motion: reduce)";
function subscribeRM(cb: () => void) {
  const mq = window.matchMedia(MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getRM() {
  return window.matchMedia(MQ).matches;
}

const PRELOADER_SEEN_KEY = "ucf-proposal-preloader-seen";

/**
 * Polls sessionStorage until the preloader marks itself done,
 * then triggers a state change to mount the SplitText animations.
 */
function usePreloaderDone(): boolean {
  const [done, setDone] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem(PRELOADER_SEEN_KEY) === "1"
  );

  const check = useCallback(() => {
    if (sessionStorage.getItem(PRELOADER_SEEN_KEY) === "1") {
      setDone(true);
    }
  }, []);

  useEffect(() => {
    if (done) return;
    const id = setInterval(check, 150);
    const fallback = setTimeout(() => { clearInterval(id); setDone(true); }, 4000);
    return () => { clearInterval(id); clearTimeout(fallback); };
  }, [done, check]);

  return done;
}

/**
 * Hero left-column content with animated SplitText headline/subhead.
 * Waits for the preloader to finish before mounting SplitText
 * so the animations play once the hero is actually visible.
 */
export default function HeroContent() {
  const reducedMotion = useSyncExternalStore(subscribeRM, getRM, () => false);
  const preloaderDone = usePreloaderDone();
  const [animReady, setAnimReady] = useState(false);

  useEffect(() => {
    if (!preloaderDone) return;
    const t = setTimeout(() => setAnimReady(true), 350);
    return () => clearTimeout(t);
  }, [preloaderDone]);

  const showAnimation = !reducedMotion && animReady;

  return (
    <div>
      {showAnimation ? (
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
            threshold={0.1}
            rootMargin="0px"
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
              threshold={0.1}
              rootMargin="0px"
              textAlign="left"
            />
          </div>
        </>
      ) : (
        <>
          <h1 className="font-display text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl lg:text-7xl">
            UCF Stadium Digital Experience
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ucf-gold sm:text-xl md:text-2xl">
            Three premium web experience options to showcase luxury seating,
            suites, and event spaces—built inside UCFKnights.com.
          </p>
        </>
      )}

      <p className="mt-3 text-sm text-ucf-white/60">
        Designed to elevate donor perception, premium seating conversion,
        and recruiting impact.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <BrandButton href="#options" variant="solid" size="lg">
          View Experience Options
        </BrandButton>
        <BrandButton href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`} variant="outline" size="lg">
          Let&apos;s Talk
        </BrandButton>
      </div>
    </div>
  );
}
