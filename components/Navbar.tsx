"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Teams", href: "/teams" },
  { label: "Fan Zone", href: "/fan-zone" },
  { label: "Watch/Listen", href: "/watch-listen" },
  { label: "Athletics", href: "/athletics" },
  { label: "Shop", href: "/shop" },
  { label: "Donate", href: "/donate" },
  { label: "Tickets", href: "/tickets" },
  { label: "NIL", href: "/nil" },
  { label: "Stadium", href: "/stadium" },
  { label: "Events", href: "/events" },
  { label: "Options", href: "/#options" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-ucf-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo placeholder */}
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-ucf-gold sm:text-2xl"
        >
          UCF KNIGHTS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-ucf-white transition-colors hover:text-ucf-gold"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ucf-white hover:bg-white/10 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-white/10 bg-ucf-black lg:hidden"
          aria-label="Main mobile"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-ucf-white transition-colors hover:bg-white/10 hover:text-ucf-gold"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
