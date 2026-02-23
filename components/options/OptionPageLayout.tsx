"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { StadiumOption } from "@/config/stadiumOptions";
import { CONTACT_EMAIL, CONTACT_SUBJECT } from "@/config/stadiumOptions";
import MediaPreview from "./MediaPreview";
import Timeline from "./Timeline";
import AddOnsSection from "./AddOnsSection";
import BrandButton from "@/components/ui/BrandButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/**
 * Shared layout for all three option detail pages.
 * Renders breadcrumb, hero + media, timeline, deliverables,
 * requirements, included pages, add-ons, and CTA footer.
 * Uses motion stagger-in animations matching the homepage style.
 */
interface OptionPageLayoutProps {
  option: StadiumOption;
}

export default function OptionPageLayout({ option }: OptionPageLayoutProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Section 1: Breadcrumb + Hero */}
      <section className="w-full bg-ucf-black px-4 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <motion.nav aria-label="Breadcrumb" className="mb-8" variants={itemVariants}>
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ucf-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-ucf-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/#options" className="transition-colors hover:text-ucf-gold">
                  Options
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ucf-white">{option.title}</li>
            </ol>
          </motion.nav>

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div variants={itemVariants}>
              <h1 className="font-display text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl">
                {option.title}
              </h1>
              <p className="mt-3 font-display text-3xl tracking-wide text-ucf-gold md:text-4xl">
                {option.price}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ucf-white/90">
                {option.positioning}
              </p>
            </motion.div>

            <motion.div className="overflow-hidden rounded-xl border border-white/10" variants={itemVariants}>
              <MediaPreview
                mediaType={option.mediaType}
                src={option.mediaSrc}
                poster={option.posterSrc}
                alt={`${option.title} preview`}
                fullSize
                autoplay
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <motion.section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20" variants={itemVariants}>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-10 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            How It Works
          </h2>
          <Timeline steps={option.howItWorksSteps} />
        </div>
      </motion.section>

      {/* Section 3: Deliverables */}
      <motion.section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20" variants={itemVariants}>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-8 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Deliverables
          </h2>
          <ul className="space-y-3">
            {option.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ucf-white/90 md:text-base">
                <span className="mt-0.5 shrink-0 text-ucf-gold" aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Section 4: Requirements */}
      <motion.section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20" variants={itemVariants}>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-8 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Requirements
          </h2>
          <ul className="space-y-3">
            {option.requirements.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ucf-white/90 md:text-base">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ucf-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Section 5: Included Luxury Pages */}
      <motion.section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20" variants={itemVariants}>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display mb-8 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Included Luxury / Suite / Event Pages
          </h2>
          <p className="mb-6 text-center text-sm text-ucf-white/60">
            Up to five (5) detail pages included in this package
          </p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {option.includedPages.map((page, i) => (
              <li key={page} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ucf-gold/10 text-xs font-bold text-ucf-gold">
                  {i + 1}
                </span>
                <span className="text-sm text-ucf-white/90">{page}</span>
              </li>
            ))}
          </ol>
        </div>
      </motion.section>

      {/* Section 6: Add-Ons */}
      <motion.section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20" variants={itemVariants}>
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-10 text-center text-3xl tracking-wide text-ucf-white md:text-4xl">
            Add-On Production Packages
          </h2>
          <AddOnsSection />
        </div>
      </motion.section>

      {/* Section 7: CTA Footer */}
      <motion.section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 text-center md:py-24" variants={itemVariants}>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-normal tracking-wide text-ucf-white md:text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-ucf-white/70">
            Let&apos;s discuss how this option fits your goals.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BrandButton
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
              variant="solid"
              size="lg"
            >
              Let&apos;s Connect
            </BrandButton>
            <BrandButton href="/#options" variant="outline" size="lg">
              Compare All Options
            </BrandButton>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
