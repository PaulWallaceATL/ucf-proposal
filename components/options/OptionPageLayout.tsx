import Link from "next/link";
import type { StadiumOption } from "@/config/stadiumOptions";
import { CONTACT_EMAIL, CONTACT_SUBJECT } from "@/config/stadiumOptions";
import MediaPreview from "./MediaPreview";
import Timeline from "./Timeline";
import AddOnsSection from "./AddOnsSection";

/**
 * Shared layout for all three option detail pages.
 * Renders breadcrumb, hero + media, timeline, deliverables,
 * requirements, included pages, add-ons, and CTA footer.
 */
interface OptionPageLayoutProps {
  option: StadiumOption;
}

export default function OptionPageLayout({ option }: OptionPageLayoutProps) {
  return (
    <>
      {/* Section 1: Breadcrumb + Hero */}
      <section className="w-full bg-ucf-black px-4 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ucf-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-ucf-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/#options"
                  className="transition-colors hover:text-ucf-gold"
                >
                  Options
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ucf-white">{option.title}</li>
            </ol>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Text column */}
            <div>
              <h1 className="font-display text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl">
                {option.title}
              </h1>
              <p className="mt-3 font-display text-3xl tracking-wide text-ucf-gold md:text-4xl">
                {option.price}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ucf-white/90">
                {option.positioning}
              </p>
            </div>

            {/* Media column */}
            <div className="overflow-hidden rounded-xl border border-white/10">
              <MediaPreview
                mediaType={option.mediaType}
                src={option.mediaSrc}
                poster={option.posterSrc}
                alt={`${option.title} preview`}
                fullSize
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-10 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            How It Works
          </h2>
          <Timeline steps={option.howItWorksSteps} />
        </div>
      </section>

      {/* Section 3: Deliverables */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-8 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Deliverables
          </h2>
          <ul className="space-y-3">
            {option.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-ucf-white/90 md:text-base"
              >
                <span className="mt-0.5 shrink-0 text-ucf-gold" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4: Requirements */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-8 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Requirements
          </h2>
          <ul className="space-y-3">
            {option.requirements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-ucf-white/90 md:text-base"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ucf-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5: Included Luxury Pages */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-8 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Included Luxury / Suite / Event Pages
          </h2>
          <p className="mb-6 text-center text-sm text-ucf-white/60">
            Up to five (5) detail pages included in this package
          </p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {option.includedPages.map((page, i) => (
              <li
                key={page}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ucf-gold/10 text-xs font-bold text-ucf-gold">
                  {i + 1}
                </span>
                <span className="text-sm text-ucf-white/90">{page}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 6: Add-Ons */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-10 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Add-On Production Packages
          </h2>
          <AddOnsSection />
        </div>
      </section>

      {/* Section 7: CTA Footer */}
      <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-normal tracking-wide text-ucf-white md:text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-ucf-white/70">
            Let&apos;s discuss how this option fits your goals.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
              className="inline-flex items-center justify-center rounded-full bg-ucf-gold px-8 py-4 font-semibold text-ucf-black shadow-[0_0_20px_rgba(255,201,4,0.35)] transition-all hover:shadow-[0_0_30px_rgba(255,201,4,0.55)]"
            >
              Let&apos;s Connect
            </a>
            <Link
              href="/#options"
              className="inline-flex items-center justify-center rounded-full border-2 border-ucf-gold bg-transparent px-8 py-4 font-semibold text-ucf-gold transition-colors hover:bg-ucf-gold/10"
            >
              Compare All Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
