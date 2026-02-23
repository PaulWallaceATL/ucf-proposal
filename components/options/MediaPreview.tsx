"use client";

import Image from "next/image";
import type { MediaType } from "@/config/stadiumOptions";
import VideoPreview from "./VideoPreview";
import ModelViewerDynamic from "./ModelViewerDynamic";

/**
 * Polymorphic media preview: renders image, video, or 3D preview
 * based on the mediaType prop.
 */
interface MediaPreviewProps {
  mediaType: MediaType;
  src: string;
  poster?: string | null;
  alt?: string;
  className?: string;
  /** When true, renders at a larger size for option detail pages */
  fullSize?: boolean;
}

export default function MediaPreview({
  mediaType,
  src,
  poster,
  alt = "Media preview",
  className = "",
  fullSize = false,
}: MediaPreviewProps) {
  const containerClass = fullSize
    ? `aspect-video w-full ${className}`
    : `aspect-video w-full ${className}`;

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
      />
    );
  }

  if (mediaType === "3d") {
    return (
      <ModelViewerDynamic
        modelUrl={src}
        posterUrl={poster}
        className={containerClass}
      />
    );
  }

  return null;
}
