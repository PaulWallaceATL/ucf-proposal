"use client";

import Image from "next/image";
import type { MediaType } from "@/config/stadiumOptions";
import VideoPreview from "./VideoPreview";
import ModelViewerDynamic from "./ModelViewerDynamic";

/**
 * Polymorphic media preview: renders image, video, or 3D preview
 * based on the mediaType prop. Supports autoplay/autoRotate pass-through.
 */
interface MediaPreviewProps {
  mediaType: MediaType;
  src: string;
  poster?: string | null;
  alt?: string;
  className?: string;
  fullSize?: boolean;
  autoplay?: boolean;
  autoRotate?: boolean;
  showTag?: boolean;
}

export default function MediaPreview({
  mediaType,
  src,
  poster,
  alt = "Media preview",
  className = "",
  fullSize = false,
  autoplay = false,
  autoRotate = true,
}: MediaPreviewProps) {
  const containerClass = `aspect-video w-full ${className}`;

  if (mediaType === "image") {
    return (
      <div className={`relative overflow-hidden ${containerClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={fullSize ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
          priority={fullSize}
        />
      </div>
    );
  }

  if (mediaType === "video") {
    return (
      <VideoPreview
        src={src}
        poster={poster}
        alt={alt}
        className={containerClass}
        autoplay={autoplay}
      />
    );
  }

  if (mediaType === "3d") {
    return (
      <ModelViewerDynamic
        modelUrl={src}
        posterUrl={autoplay ? null : poster}
        className={containerClass}
        autoActivate={autoplay}
        autoRotate={autoRotate}
      />
    );
  }

  return null;
}
