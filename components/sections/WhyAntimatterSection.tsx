import {
  ShieldCheck,
  Users,
  Activity,
  Lock,
  Wand2,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_SUBJECT } from "@/config/stadiumOptions";
import DirectionalHoverCard from "@/components/ui/DirectionalHoverCard";
import BrandButton from "@/components/ui/BrandButton";

interface BentoTile {
  title: string;
  body: string;
  icon: LucideIcon;
  big?: boolean;
}

/**
 * Tile order is intentional for the 4-column bento layout:
 *
 *  Desktop (4 cols, 3 rows):
 *  ┌──────┬──────┬─────────────┐
 *  │  T0  │  T1  │     T2      │
 *  ├──────┴──────┤   (big)     │
 *  │     T3      ├──────┬──────┤
 *  │   (big)     │  T4  │  T5  │
 *  └─────────────┴──────┴──────┘
 */
const tiles: BentoTile[] = [
  {
    title: "US-Based Senior Team",
    body: "A senior, US-based team across design, engineering, and delivery\u2014built for responsive collaboration and accountability.",
    icon: Users,
  },
  {
    title: "Security-First Delivery",
    body: "Modern best practices for secure architecture, access control, and operational hygiene\u2014especially for high-visibility brands.",
    icon: Lock,
  },
  {
    title: "Trusted by Serious Orgs",
    body: "We partner with organizations like OWASP\u2014the global leader in cybersecurity\u2014where precision and reliability are non-negotiable. When the stakes are high, teams trust Antimatter to deliver.",
    icon: ShieldCheck,
    big: true,
  },
  {
    title: "100% Uptime Track Record",
    body: "100% uptime since company inception across all client deployments. We treat reliability like a feature, not a hope. Your launch day is safe with us.",
    icon: Activity,
    big: true,
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
 * "Why Antimatter" bento-grid section with directional hover effect.
 */
export default function WhyAntimatterSection() {
  return (
    <section className="w-full border-t border-white/10 bg-ucf-black px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
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
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map(({ title, body, icon: Icon, big }) => (
            <DirectionalHoverCard
              key={title}
              className={`bento-tile group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-[border-color,transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ucf-gold sm:p-7 ${
                big ? "lg:col-span-2 lg:row-span-2" : "min-h-[200px]"
              }`}
            >
              {/* Icon */}
              <div
                className={`mb-5 flex items-center justify-center rounded-xl bg-ucf-gold/[0.08] ${
                  big ? "h-12 w-12" : "h-10 w-10"
                }`}
              >
                <Icon
                  className={`text-ucf-gold transition-colors duration-300 group-hover:text-ucf-gold-alt ${
                    big ? "h-6 w-6" : "h-5 w-5"
                  }`}
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>

              {/* Text */}
              <div className="mt-auto">
                <h3
                  className={`font-display tracking-wide text-ucf-white ${
                    big
                      ? "text-xl sm:text-2xl lg:text-3xl"
                      : "text-lg md:text-xl"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-2 leading-relaxed text-ucf-white/60 ${
                    big ? "text-sm sm:text-base" : "text-sm"
                  }`}
                >
                  {body}
                </p>
              </div>
            </DirectionalHoverCard>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-ucf-white/40">
            Case studies and references available upon request.
          </p>
          <BrandButton
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
            variant="outline"
            size="md"
          >
            Let&apos;s Talk
          </BrandButton>
        </div>
      </div>
    </section>
  );
}
