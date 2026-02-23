import Callout from "./Callout";

/**
 * Production add-ons section with Photography and Matterport cards,
 * plus the travel/incidentals callout. Reused on home page and all option pages.
 */
export default function AddOnsSection() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Photography */}
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-ucf-gold/30 hover:bg-white/[0.08]">
          <h3 className="font-display text-xl tracking-wide text-ucf-gold">
            Premium Interior Photography
          </h3>
          <p className="mt-1 font-display text-2xl tracking-wide text-ucf-white">
            $10,000
          </p>
          <ul className="mt-4 flex-1 space-y-2 text-sm text-ucf-white/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-ucf-gold" aria-hidden>
                ✓
              </span>
              Up to five (5) luxury areas
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-ucf-gold" aria-hidden>
                ✓
              </span>
              20–30 edited images per space
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-ucf-gold" aria-hidden>
                ✓
              </span>
              Optimized for web and integrated into pages
            </li>
          </ul>
        </div>

        {/* Matterport */}
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-ucf-gold/30 hover:bg-white/[0.08]">
          <h3 className="font-display text-xl tracking-wide text-ucf-gold">
            Matterport 3D Tours
          </h3>
          <p className="mt-1 font-display text-2xl tracking-wide text-ucf-white">
            $22,000
          </p>
          <ul className="mt-4 flex-1 space-y-2 text-sm text-ucf-white/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-ucf-gold" aria-hidden>
                ✓
              </span>
              Up to five (5) luxury areas
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-ucf-gold" aria-hidden>
                ✓
              </span>
              Embeddable walkthrough experience
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-ucf-gold" aria-hidden>
                ✓
              </span>
              Ideal for remote buyers and donors
            </li>
          </ul>
        </div>
      </div>

      <Callout>
        Production add-ons (drone, photography, Matterport) exclude travel
        &amp; incidentals. Estimated{" "}
        <strong className="text-ucf-gold">$3,500</strong> per production
        engagement. Costs may be consolidated if scheduled in a single visit.
      </Callout>
    </div>
  );
}
