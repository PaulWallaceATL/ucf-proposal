import Image from "next/image";
import { veoClips, type VeoClip } from "@/config/stadiumProposalAssets";

/**
 * 3-card grid for Veo video concept clips.
 * Shows "Coming Soon" badge when videoUrl is null, or a play overlay when available.
 */
function VeoCard({ clip }: { clip: VeoClip }) {
  const isAvailable = clip.status === "available" && clip.videoUrl;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-ucf-gold/30 hover:bg-white/[0.08]">
      {/* Thumbnail / placeholder area */}
      <div className="relative flex aspect-video items-center justify-center bg-white/[0.03]">
        {clip.thumbnailUrl ? (
          <Image
            src={clip.thumbnailUrl}
            alt={`${clip.title} thumbnail`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-ucf-white/30">
            <svg
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs">{clip.duration}</span>
          </div>
        )}

        {/* Play overlay for available clips */}
        {isAvailable && (
          <div className="absolute inset-0 flex items-center justify-center bg-ucf-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ucf-gold text-ucf-black">
              <svg
                className="ml-1 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Coming Soon badge */}
        {!isAvailable && (
          <div className="absolute right-3 top-3 rounded-full bg-ucf-gold/90 px-3 py-1 text-xs font-bold text-ucf-black">
            Coming Soon
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-4">
        <h3 className="font-display text-lg tracking-wide text-ucf-white">
          {clip.title}
        </h3>
        <p className="mt-1 text-xs text-ucf-white/60">Veo Clip</p>
      </div>
    </div>
  );
}

export default function VeoClipsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {veoClips.map((clip) => (
        <VeoCard key={clip.id} clip={clip} />
      ))}
    </div>
  );
}
