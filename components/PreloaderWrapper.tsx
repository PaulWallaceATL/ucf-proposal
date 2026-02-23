"use client";

import { useState, useEffect, useCallback } from "react";
import Preloader from "@/components/Preloader";

const PRELOADER_SEEN_KEY = "ucf-proposal-preloader-seen";

function hasBeenSeen(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(PRELOADER_SEEN_KEY) === "1";
}

/**
 * Wraps site content with the React Bits-style preloader.
 * Shows the stairs variant on first visit per session, then skips.
 */
export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(() => !hasBeenSeen());

  const markSeen = useCallback(() => {
    sessionStorage.setItem(PRELOADER_SEEN_KEY, "1");
  }, []);

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      markSeen();
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [loading, markSeen]);

  return (
    <Preloader
      loading={loading}
      variant="stairs"
      position="fixed"
      duration={2500}
      loadingText="Loading the Future of UCF Athletics"
      bgColor="#000000"
      textClassName="font-display tracking-wide text-ucf-gold"
      zIndex={10000}
      respectReducedMotion
      reducedMotionFallback="fade"
      ariaLabel="Loading UCF Stadium Experience"
      stairCount={10}
      stairsRevealFrom="left"
      stairsRevealDirection="up"
    >
      {children}
    </Preloader>
  );
}
