"use client";

import { useEffect, useState } from "react";

const CURSOR_VISIBLE_CLASS = "custom-cursor-active";

/**
 * Custom cursor (React Bits Pro Custom/Dither Cursor–style). UCF gold ring
 * that follows the pointer; applied globally via root layout.
 */
export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
      if (!isVisible) setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    document.body.classList.add(CURSOR_VISIBLE_CLASS);
    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);
    document.body.addEventListener("mouseenter", handleEnter);

    return () => {
      document.body.classList.remove(CURSOR_VISIBLE_CLASS);
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.body.removeEventListener("mouseenter", handleEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed left-[var(--cursor-x)] top-[var(--cursor-y)] z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ucf-gold"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed left-[var(--cursor-x)] top-[var(--cursor-y)] z-[9998] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ucf-gold"
        aria-hidden
      />
    </>
  );
}
