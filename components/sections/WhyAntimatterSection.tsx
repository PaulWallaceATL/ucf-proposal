import {
  ShieldCheck,
  Users,
  Activity,
  Lock,
  Wand2,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT_EMAIL } from "@/config/stadiumOptions";

interface BentoTile {
  title: string;
  body: string;
  icon: LucideIcon;
}

const tiles: BentoTile[] = [
  {
    title: "Trusted by Serious Orgs",
    body: "We partner with organizations like OWASP\u2014the global leader in cybersecurity\u2014where precision and reliability are non-negotiable.",
    icon: ShieldCheck,
  },
  {
    title: "US-Based Senior Team",
    body: "A senior, US-based team across design, engineering, and delivery\u2014built for responsive collaboration and accountability.",
    icon: Users,
  },
  {
    title: "100% Uptime Track Record",
    body: "100% uptime since company inception across all client deployments. We treat reliability like a feature, not a hope.",
    icon: Activity,
  },
  {
    title: "Security-First Delivery",
    body: "Modern best practices for secure architecture, access control, and operational hygiene\u2014especially for high-visibility brands.",
    icon: Lock,
  },
  {
    title: "Design + Engineering Under One Roof",
    body: "Brand-level design paired with production-grade engineering\u2014so the experience looks premium and performs like it.",
    icon: Wand2,
  },
  {
    title: "Built for Conversion & Storytelling",
    body: "We structure experiences to drive action: premium seating interest, donor confidence, recruiting impact, and event inquiries.",
    icon: TrendingUp,
  },
];

/**
 * "Why Antimatter" bento-grid section for the homepage.
 * Uses a Magic Bento-inspired layout re-skinned to UCF brand colors.
 */
export default function WhyAntimatterSection() {
  return (
    <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ucf-gold">
            Why Antimatter
          </p>
          <h2 className="font-display text-3xl tracking-wide text-ucf-white md:text-4xl">
            A partner built for high-stakes digital experiences
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ucf-white/70">
            We build premium web experiences for institutions that can&apos;t
            afford downtime&mdash;delivered by a senior US-based team.
          </p>
        </div>

        {/* Bento grid */}
        <div className="bento-grid">
          {tiles.map(({ title, body, icon: Icon }, i) => (
            <div
              key={title}
              className={`bento-tile group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-[border-color,transform,box-shadow] duration-300 hover:border-ucf-gold/40 hover:shadow-lg hover:shadow-ucf-gold/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ucf-gold md:p-7 ${
                i === 0 ? "bento-tile--wide" : ""
              } ${i === 3 ? "bento-tile--tall" : ""}`}
              tabIndex={0}
            >
              {/* Icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-ucf-gold/10">
                <Icon
                  className="h-5 w-5 text-ucf-gold transition-colors duration-300 group-hover:text-ucf-gold-alt"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-display text-lg tracking-wide text-ucf-white md:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ucf-white/70">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer: footnote + CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-ucf-white/40">
            Case studies and references available upon request.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Antimatter Credentials — UCF`}
            className="inline-flex items-center justify-center rounded-md border-2 border-ucf-gold bg-transparent px-6 py-3 text-sm font-semibold text-ucf-gold transition-colors hover:bg-ucf-gold hover:text-ucf-black sm:w-auto"
          >
            View Credentials
          </a>
        </div>
      </div>
    </section>
  );
}
