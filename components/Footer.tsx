import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_SUBJECT } from "@/config/stadiumOptions";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Interactive 2D Experience", href: "/options/interactive-2d" },
  { label: "Immersive 3D Experience", href: "/options/immersive-3d" },
  { label: "Cinematic Drone Experience", href: "/options/drone-scroll" },
  {
    label: "Contact",
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`,
    external: true,
  },
  { label: "Learn about Antimatter", href: "https://antimatterai.com", external: true },
];

/**
 * Site footer with page links and copyright.
 */
export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-ucf-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
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

        <p className="mt-6 text-center text-sm text-ucf-white/40">
          © 2026 Antimatter Proposal for UCF Athletics
        </p>
      </div>
    </footer>
  );
}
