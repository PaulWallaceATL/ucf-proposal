"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_EMAIL, CONTACT_SUBJECT } from "@/config/stadiumOptions";
import BrandButton from "@/components/ui/BrandButton";

const SECTION_ANCHORS = [
  { label: "Options", href: "#options" },
  { label: "Why Antimatter", href: "#why-antimatter" },
  { label: "What\u2019s Included", href: "#included" },
  { label: "Add-Ons", href: "#add-ons" },
  { label: "Pricing", href: "#pricing" },
];

/**
 * Sticky site header. Shows section anchor links on the homepage only,
 * with a single CTA on all pages.
 */
export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-ucf-black/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-ucf-gold sm:text-2xl"
        >
          UCF KNIGHTS
        </Link>

        {/* Desktop section anchors (homepage only) */}
        {isHome && (
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Page sections">
            {SECTION_ANCHORS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-ucf-white/70 transition-colors hover:text-ucf-gold"
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          {/* Mobile hamburger (homepage only) */}
          {isHome && (
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-ucf-white hover:bg-white/10 lg:hidden"
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}

          <BrandButton
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
            variant="solid"
            size="md"
          >
            Let&apos;s Talk
          </BrandButton>
        </div>
      </div>

      {/* Mobile menu (homepage only) */}
      {isHome && mobileOpen && (
        <nav className="border-t border-white/10 bg-ucf-black lg:hidden" aria-label="Page sections mobile">
          <div className="flex flex-col gap-1 px-4 py-3">
            {SECTION_ANCHORS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-sm text-ucf-white/80 transition-colors hover:bg-white/10 hover:text-ucf-gold"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
