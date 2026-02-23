import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_SUBJECT } from "@/config/stadiumOptions";
import BrandButton from "@/components/ui/BrandButton";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Option 1", href: "/options/interactive-2d" },
  { label: "Option 2", href: "/options/immersive-3d" },
  { label: "Option 3", href: "/options/drone-scroll" },
  {
    label: "Contact",
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`,
    external: true,
  },
  { label: "Learn about Antimatter", href: "https://antimatterai.com", external: true },
];

/**
 * Site footer with CTA, page links, and copyright.
 */
export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-ucf-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="text-center">
          <BrandButton
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
            variant="solid"
            size="lg"
          >
            Connect with Antimatter
          </BrandButton>
        </div>

        {/* Links */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {FOOTER_LINKS.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                className="text-sm text-ucf-white/60 transition-colors hover:text-ucf-gold"
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="text-sm text-ucf-white/60 transition-colors hover:text-ucf-gold"
              >
                {label}
              </Link>
            ),
          )}
        </nav>

        <p className="mt-8 text-center text-sm text-ucf-white/40">
          © 2026 Antimatter Proposal for UCF Athletics
        </p>
      </div>
    </footer>
  );
}
