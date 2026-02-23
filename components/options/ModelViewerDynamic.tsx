"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(
  () => import("@/components/options/ModelViewer"),
  { ssr: false }
);

/**
 * Dynamic wrapper for ModelViewer with SSR disabled.
 * Uses IntersectionObserver to only mount when visible.
 *
 * When autoActivate is true, the 3D model loads automatically on viewport
 * entry (no click required). Otherwise shows a poster + activation overlay.
 */
interface ModelViewerDynamicProps {
  modelUrl: string;
  posterUrl?: string | null;
  className?: string;
  autoActivate?: boolean;
  autoRotate?: boolean;
}

export default function ModelViewerDynamic({
  modelUrl,
  posterUrl,
  className = "",
  autoActivate = false,
  autoRotate = true,
}: ModelViewerDynamicProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (autoActivate) setIsActivated(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [autoActivate]);

  const showModel = isActivated && isVisible;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      aria-label="Interactive 3D model preview"
    >
      {showModel ? (
        <ModelViewer
          modelUrl={modelUrl}
          autoRotate={autoRotate}
        />
      ) : (
        <>
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt="3D stadium preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white/[0.03]">
              <span className="text-sm text-ucf-white/40">3D Preview</span>
            </div>
          )}

          {!autoActivate && (
            <button
              type="button"
              onClick={() => setIsActivated(true)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ucf-black/40 transition-colors hover:bg-ucf-black/50"
              aria-label="Load 3D model viewer"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ucf-gold bg-ucf-black/80 text-ucf-gold">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-ucf-white">
                Click to View 3D Model
              </span>
            </button>
          )}
        </>
      )}
    </div>
  );
}
