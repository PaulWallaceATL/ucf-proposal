import Link from "next/link";
import type { MediaType } from "@/config/stadiumOptions";
import MediaPreview from "./MediaPreview";

/**
 * Option card for the home page "Choose Your Experience" grid.
 * Supports image, video, or 3D media preview with equal-height layout.
 */
interface OptionCardProps {
  title: string;
  price: string;
  summary: string;
  bullets: string[];
  route: string;
  ctaLabel: string;
  mediaType: MediaType;
  mediaSrc: string;
  posterSrc?: string | null;
}

export default function OptionCard({
  title,
  price,
  summary,
  bullets,
  route,
  ctaLabel,
  mediaType,
  mediaSrc,
  posterSrc,
}: OptionCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-ucf-gold/30 hover:bg-white/[0.08]">
      {/* Media area */}
      <div className="relative">
        <MediaPreview
          mediaType={mediaType}
          src={mediaSrc}
          poster={posterSrc}
          alt={`${title} preview`}
        />
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl tracking-wide text-ucf-gold md:text-2xl">
          {title}
        </h3>
        <p className="mt-1 font-display text-3xl tracking-wide text-ucf-white">
          {price}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ucf-white/80">
          {summary}
        </p>

        <ul className="mt-4 flex-1 space-y-2 text-sm text-ucf-white/80">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-ucf-gold" aria-hidden>
                ✓
              </span>
              {bullet}
            </li>
          ))}
        </ul>

        <Link
          href={route}
          className="mt-6 flex items-center justify-center rounded-md bg-ucf-gold px-6 py-3 text-sm font-semibold text-ucf-black transition-opacity hover:opacity-90"
        >
          {ctaLabel}
          <span className="ml-2" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
