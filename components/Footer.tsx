import { CONTACT_EMAIL, CONTACT_SUBJECT } from "@/config/stadiumOptions";
import BrandButton from "@/components/ui/BrandButton";

/**
 * Minimal site footer with a single CTA and copyright line.
 */
export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-ucf-black">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <BrandButton
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
          variant="solid"
          size="lg"
        >
          Connect with Antimatter
        </BrandButton>
        <p className="mt-8 text-sm text-ucf-white/40">
          © 2026 Antimatter Proposal for UCF Athletics
        </p>
      </div>
    </footer>
  );
}
