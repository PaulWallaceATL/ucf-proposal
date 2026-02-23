"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import BrandButton from "@/components/ui/BrandButton";

interface Plan {
  name: string;
  price: string;
  label: string;
  features: string[];
  route: string;
}

const plans: Plan[] = [
  {
    name: "Interactive 2D Experience",
    price: "$28,000",
    label: "base",
    route: "/options/interactive-2d",
    features: [
      "Interactive 2D map with pin navigation",
      "Pins link to Matterport tour OR detail pages",
      "Up to 5 luxury/suite/event pages included",
      "Built inside UCFKnights.com (sitemap + integration)",
      "Requires UCF-provided 2D stadium render/map",
    ],
  },
  {
    name: "Immersive 3D Scroll Experience",
    price: "$55,000",
    label: "base",
    route: "/options/immersive-3d",
    features: [
      "3D model-driven landing page with scroll camera path",
      "Navigation to VIP/luxury area detail pages",
      "Up to 5 luxury/suite/event pages included",
      "Built inside UCFKnights.com (sitemap + integration)",
      "Requires CAD or existing 3D model of the stadium",
    ],
  },
  {
    name: "Cinematic Drone Scroll Experience",
    price: "$58,000",
    label: "base",
    route: "/options/drone-scroll",
    features: [
      "Drone-driven scroll-tied video experience",
      "VIP area navigation + suite/event pages",
      "Up to 5 luxury/suite/event pages included",
      "Includes raw drone footage delivery",
      "Drone capture required (travel billed separately)",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/**
 * Pricing section with 3 plan cards, Pricing5-style layout + motion,
 * re-skinned to UCF black + gold branding.
 */
export default function PricingSection() {
  return (
    <section id="pricing" className="w-full scroll-mt-20 border-t border-white/10 bg-ucf-black px-4 py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="mb-12 text-center md:mb-16" variants={itemVariants}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ucf-gold">
            Pricing
          </p>
          <h2 className="font-display text-3xl tracking-wide text-ucf-white md:text-4xl lg:text-5xl">
            Premium experiences, transparent pricing.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ucf-white/60">
            Each package is built to live within UCFKnights.com and includes up
            to five luxury/suite/event detail pages.
          </p>
        </motion.div>

        {/* Plan cards */}
        <motion.div
          className="grid gap-0 overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-3"
          variants={containerVariants}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`flex flex-col border-white/10 bg-white/[0.02] p-8 ${
                i < plans.length - 1 ? "border-b lg:border-b-0 lg:border-r" : ""
              }`}
              variants={itemVariants}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-ucf-gold">
                {plan.name}
              </p>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl tracking-wide text-ucf-white md:text-5xl">
                  {plan.price}
                </span>
                <span className="text-sm text-ucf-white/50">{plan.label}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-ucf-white/80"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-ucf-gold"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <BrandButton href={plan.route} variant="solid" size="md" className="w-full">
                  View Details
                </BrandButton>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Travel note */}
        <motion.p
          className="mt-6 text-center text-xs text-ucf-white/40"
          variants={itemVariants}
        >
          Travel &amp; incidentals are not included for on-site capture
          (estimate: $3,500 per trip).
        </motion.p>

      </motion.div>
    </section>
  );
}
