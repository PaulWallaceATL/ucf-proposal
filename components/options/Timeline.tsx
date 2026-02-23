import type { HowItWorksStep } from "@/config/stadiumOptions";

/**
 * Vertical timeline with numbered steps, gold accent line, and step labels.
 * Inspired by React Bits Pro timeline patterns, re-skinned to UCF brand.
 */
interface TimelineProps {
  steps: HowItWorksStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-5 top-0 bottom-0 w-px bg-ucf-gold/20 md:left-6"
        aria-hidden
      />

      <ol className="space-y-8">
        {steps.map(({ step, label }) => (
          <li key={step} className="relative flex items-start gap-4 pl-1">
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ucf-gold bg-ucf-black text-sm font-bold text-ucf-gold md:h-12 md:w-12 md:text-base">
              {step}
            </div>
            <p className="pt-2 text-sm leading-relaxed text-ucf-white/90 md:pt-2.5 md:text-base">
              {label}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
