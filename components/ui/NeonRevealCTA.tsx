"use client";

import { useRef, useState, useEffect } from "react";

/**
 * Wraps children with a UCF gold neon-reveal gradient sweep
 * that triggers when the section scrolls into view.
 */
export default function NeonRevealCTA({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`neon-cta relative w-full overflow-hidden ${className}`}
    >
      {/* Gold gradient sweep bar */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 transition-none ${
          revealed ? "neon-cta--revealed" : "neon-cta--hidden"
        }`}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
