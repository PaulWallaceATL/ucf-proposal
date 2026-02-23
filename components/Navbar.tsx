import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_SUBJECT } from "@/config/stadiumOptions";
import BrandButton from "@/components/ui/BrandButton";

/**
 * Sticky site header with UCF branding and a single CTA button.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-ucf-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-ucf-gold sm:text-2xl"
        >
          UCF KNIGHTS
        </Link>

        <BrandButton
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
          variant="solid"
          size="md"
        >
          Let&apos;s Talk
        </BrandButton>
      </div>
    </header>
  );
}
