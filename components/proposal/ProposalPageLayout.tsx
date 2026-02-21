import Link from "next/link";

export interface EnhancementItem {
  id: string;
  title: string;
  rationale: string;
  proRef: string;
  component: React.ReactNode;
}

interface ProposalPageLayoutProps {
  title: string;
  description: React.ReactNode;
  sourceUrl: string;
  sourceLabel: string;
  enhancements: EnhancementItem[];
  closingTitle: string;
  closingCtaLabel?: string;
}

/**
 * Reusable layout for category redesign proposal pages (Teams, Fan Zone, etc.).
 * Renders hero, enhancement list with rationale + samples, and closing CTA.
 */
export default function ProposalPageLayout({
  title,
  description,
  sourceUrl,
  sourceLabel,
  enhancements,
  closingTitle,
  closingCtaLabel = "See the full proposal",
}: ProposalPageLayoutProps) {
  return (
    <>
      <section className="bg-ucf-black px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-normal tracking-wide text-ucf-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <div className="mt-6 text-lg text-ucf-white/90 md:text-xl">
            {description}
          </div>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-ucf-gold underline decoration-ucf-gold underline-offset-2 hover:text-ucf-gold-alt"
          >
            {sourceLabel} →
          </a>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ucf-black">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="font-display mb-12 text-center text-2xl tracking-wide text-ucf-gold md:text-3xl">
            Section Enhancements & Sample Components
          </h2>
          <ul className="space-y-16 md:space-y-20">
            {enhancements.map(({ id, title, rationale, proRef, component }) => (
              <li key={id} id={id} className="scroll-mt-24">
                <div className="mb-4 flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-xl tracking-wide text-ucf-white md:text-2xl">
                    {title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-ucf-gold/80">
                    {proRef}
                  </span>
                </div>
                <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ucf-white/80">
                  {rationale}
                </p>
                <div className="rounded-lg ring-1 ring-white/10 ring-offset-2 ring-offset-ucf-black">
                  {component}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ucf-black px-4 py-16 text-center md:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-normal tracking-wide text-ucf-white md:text-3xl">
            {closingTitle}
          </h2>
          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-ucf-gold px-8 py-4 font-semibold text-ucf-black transition-opacity hover:opacity-90"
          >
            {closingCtaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
