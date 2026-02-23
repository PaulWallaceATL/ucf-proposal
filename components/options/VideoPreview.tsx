"use client";

import { useRef, useState, useCallback, useEffect, useSyncExternalStore } from "react";

/**
 * Video preview component with two modes:
 * - autoplay mode: muted inline autoplay, no overlay, subtle hover effects
 * - interactive mode: hover-to-play on desktop, click-to-play on mobile, play overlay
 */
interface VideoPreviewProps {
  src: string;
  poster?: string | null;
  alt?: string;
  className?: string;
  autoplay?: boolean;
}

const MQ = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia(MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getReducedMotion() {
  return window.matchMedia(MQ).matches;
}

export default function VideoPreview({
  src,
  poster,
  alt = "Video preview",
  className = "",
  autoplay = false,
}: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false
  );

  useEffect(() => {
    if (!autoplay) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setIsPlaying(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [autoplay]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (autoplay) return;
    const video = videoRef.current;
    if (!video || !window.matchMedia("(pointer: fine)").matches) return;
    video.play().catch(() => {});
    setIsPlaying(true);
  }, [autoplay]);

  const handleMouseLeave = useCallback(() => {
    if (autoplay) return;
    const video = videoRef.current;
    if (!video || !window.matchMedia("(pointer: fine)").matches) return;
    video.pause();
    setIsPlaying(false);
  }, [autoplay]);

  const hoverClass =
    autoplay && !reducedMotion
      ? "transition-[filter,transform] duration-300 hover:brightness-110 hover:scale-[1.02]"
      : "";

  return (
    <div
      className={`group relative overflow-hidden ${hoverClass} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster ?? undefined}
        muted
        playsInline
        loop
        preload="metadata"
        className="h-full w-full object-cover"
        aria-label={alt}
        {...(autoplay ? { autoPlay: true } : {})}
      />

      {!autoplay && !isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-ucf-black/30 transition-opacity hover:bg-ucf-black/40"
          aria-label="Play video"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ucf-gold/90 text-ucf-black transition-transform group-hover:scale-110">
            <svg
              className="ml-1 h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
