"use client";

import { useSyncExternalStore } from "react";
import SplitText from "@/components/reactbits/SplitText";

const MQ = "(prefers-reduced-motion: reduce)";
function subscribeRM(cb: () => void) {
  const mq = window.matchMedia(MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getRM() {
  return window.matchMedia(MQ).matches;
}

/**
 * Route-segment loading overlay for Next.js App Router (app/loading.tsx).
 * UCF black + gold branding with SplitText animated headline.
 */
export default function LoaderOverlay() {
  const reducedMotion = useSyncExternalStore(subscribeRM, getRM, () => false);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-ucf-black"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="w-full max-w-[860px] px-6">
        <div className="mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="mb-5 inline-flex items-center rounded-full border border-ucf-gold/30 bg-ucf-gold/10 px-3 py-1 text-xs font-semibold tracking-widest text-ucf-gold">
            UCF KNIGHTS
          </div>

          <div className="space-y-4">
            {reducedMotion ? (
              <h1 className="font-display text-balance text-3xl tracking-wide text-ucf-gold md:text-5xl">
                Loading the Future of UCF Athletics
              </h1>
            ) : (
              <SplitText
                text="Loading the Future of UCF Athletics"
                tag="h1"
                className="font-display text-balance text-3xl tracking-wide text-ucf-gold md:text-5xl"
                splitType="chars"
                delay={14}
                duration={0.9}
                ease="power3.out"
                from={{ opacity: 0, y: 14 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.9}
                rootMargin="-20px"
                textAlign="left"
              />
            )}

            <p className="max-w-[60ch] text-sm leading-relaxed text-ucf-white/50 md:text-base">
              Preparing a premium stadium experience—built inside
              UCFKnights.com.
            </p>

            {/* Indeterminate progress bar */}
            <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="loader-bar h-full w-1/3 rounded-full bg-ucf-gold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
