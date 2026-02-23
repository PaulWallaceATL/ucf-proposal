"use client";

import { motion } from "motion/react";
import { Crown, Building2, Users, CalendarDays, Star, Camera } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Luxury Suites",
    description:
      "Premium suite inventory showcased with immersive visuals, detailed amenities, and direct inquiry conversion paths.",
  },
  {
    icon: Building2,
    title: "Club Level & Member Areas",
    description:
      "Highlight elevated seating and member-exclusive spaces with hospitality benefits, sightlines, and premium access positioning.",
  },
  {
    icon: Users,
    title: "VIP Hospitality",
    description:
      "Dedicated pages for elite hospitality packages designed to attract corporate partners and major donors.",
  },
  {
    icon: CalendarDays,
    title: "Event Spaces",
    description:
      "Multi-purpose venue experiences optimized for private events, rentals, and recruiting showcases.",
  },
  {
    icon: Star,
    title: "Premium Seating / Sideline",
    description:
      "High-impact presentation of premium seating inventory with storytelling and conversion-focused layout.",
  },
  {
    icon: Camera,
    title: "Photography & Virtual Tours",
    description:
      "Pages can feature professional interior photography, Matterport 3D walkthroughs, or immersive media to bring each space to life remotely.",
  },
];

/**
 * Features5-style grid section showcasing the included luxury pages.
 * Dark UCF-branded theme with motion stagger-in and bordered grid cells.
 */
export function IncludedPagesSection() {
  return (
    <section className="relative w-full bg-ucf-black px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-14 text-center md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl tracking-wide text-ucf-white sm:text-4xl md:text-5xl"
          >
            Included Luxury, Suite &amp; Event Pages
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base text-ucf-white/50 sm:text-lg"
          >
            Every package includes up to five (5) premium detail
            pages&mdash;showcasing suites, member areas, event spaces, and more.
            Pages can incorporate professional photography, Matterport 3D tours,
            or immersive media to bring each space to life for buyers and donors.
          </motion.p>
        </div>

        {/* Features Grid — 6 cells, 3x2 on desktop */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`bg-ucf-black p-8 md:p-10
                  ${index < 3 ? "border-b border-white/10" : ""}
                  ${index % 3 !== 2 ? "lg:border-r lg:border-white/10" : ""}
                  ${index % 2 === 0 && index < 4 ? "md:border-r md:border-white/10" : ""}
                  ${index < 4 ? "md:border-b md:border-white/10" : ""}
                `}
              >
                <div className="mb-8 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center">
                    <Icon
                      className="h-full w-full text-ucf-gold"
                      strokeWidth={0.8}
                    />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-ucf-white sm:text-xl">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-ucf-white/50 sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-ucf-white/30">
            Additional pages beyond five (5) may be scoped and priced
            separately.
          </p>
        </div>
      </div>
    </section>
  );
}
