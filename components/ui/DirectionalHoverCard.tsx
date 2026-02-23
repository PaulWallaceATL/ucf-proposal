"use client";

import { useRef, useCallback, useState, useSyncExternalStore } from "react";

const MQ = "(prefers-reduced-motion: reduce)";
function subRM(cb: () => void) {
  const mq = window.matchMedia(MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getRM() {
  return window.matchMedia(MQ).matches;
}

type Edge = "top" | "bottom" | "left" | "right";

const EDGE_GRADIENTS: Record<Edge, string> = {
  top: "to bottom",
  bottom: "to top",
  left: "to right",
  right: "to left",
};

/**
 * Wraps children with a Magic Bento-style directional hover effect.
 * On mousemove: radial cursor-follow highlight + edge-biased sheen.
 * Re-skinned to UCF gold. Degrades gracefully on touch/reduced-motion.
 */
interface DirectionalHoverCardProps {
  children: React.ReactNode;
  className?: string;
  tabIndex?: number;
}

export default function DirectionalHoverCard({
  children,
  className = "",
  tabIndex = 0,
}: DirectionalHoverCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [hovered, setHovered] = useState(false);
  const reduced = useSyncExternalStore(subRM, getRM, () => false);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced) return;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const mx = `${(x / rect.width) * 100}%`;
      const my = `${(y / rect.height) * 100}%`;

      const distTop = y;
      const distBottom = rect.height - y;
      const distLeft = x;
      const distRight = rect.width - x;
      const minDist = Math.min(distTop, distBottom, distLeft, distRight);

      let edge: Edge = "top";
      if (minDist === distBottom) edge = "bottom";
      else if (minDist === distLeft) edge = "left";
      else if (minDist === distRight) edge = "right";

      setStyle({
        background: [
          `linear-gradient(${EDGE_GRADIENTS[edge]}, rgba(255,201,4,0.10), transparent 55%)`,
          `radial-gradient(circle at ${mx} ${my}, rgba(255,201,4,0.16), transparent 55%)`,
          "rgba(255,255,255,0.03)",
        ].join(", "),
      });
    },
    [reduced],
  );

  const handleEnter = useCallback(() => setHovered(true), []);

  const handleLeave = useCallback(() => {
    setHovered(false);
    setStyle({});
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${hovered && !reduced ? "border-ucf-gold/30 shadow-lg shadow-ucf-gold/[0.06]" : ""}`}
      style={hovered && !reduced ? style : undefined}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  );
}
