"use client";

import Preloader from "@/components/Preloader";

/**
 * Next.js App Router loading UI for route segment transitions.
 * Uses the circle variant for a quick, clean transition.
 */
export default function Loading() {
  return (
    <Preloader
      loading={true}
      variant="circle"
      position="fixed"
      duration={1500}
      loadingText="Loading the Future of UCF Athletics"
      bgColor="#000000"
      textClassName="font-display tracking-wide text-ucf-gold"
      zIndex={9999}
      respectReducedMotion
      reducedMotionFallback="fade"
    >
      <div />
    </Preloader>
  );
}
