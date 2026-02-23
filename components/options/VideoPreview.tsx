"use client";

import { useRef, useState, useCallback } from "react";

/**
 * Accessible video preview: muted, playsInline, poster frame.
 * Desktop: hover to play/pause. Mobile: click to play with controls.
 * Includes a visible play overlay button for accessibility.
 */
interface VideoPreviewProps {
  src: string;
  poster?: string | null;
  alt?: string;
  className?: string;
}

export default function VideoPreview({
  src,
  poster,
  alt = "Video preview",
  className = "",
}: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    const video = videoRef.current;
    if (!video || !window.matchMedia("(pointer: fine)").matches) return;
    video.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const video = videoRef.current;
    if (!video || !window.matchMedia("(pointer: fine)").matches) return;
    video.pause();
    setIsPlaying(false);
  }, []);

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
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
      />

      {/* Play overlay button */}
      {!isPlaying && (
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
