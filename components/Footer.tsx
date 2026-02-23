"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_SUBJECT } from "@/config/stadiumOptions";

const OPTION_LINKS = [
  { label: "Interactive 2D Experience", href: "/options/interactive-2d" },
  { label: "Immersive 3D Experience", href: "/options/immersive-3d" },
  { label: "Cinematic Drone Experience", href: "/options/drone-scroll" },
];

/**
 * Site footer with page links (Options dropdown) and copyright.
 */
export default function Footer() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <footer className="w-full border-t border-white/10 bg-ucf-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          aria-label="Footer"
        >
          <Link
            href="/"
            className="text-sm text-ucf-white/60 transition-colors hover:text-ucf-gold"
          >
            Home
          </Link>

          {/* Options dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-sm text-ucf-white/60 transition-colors hover:text-ucf-gold"
              aria-expanded={open}
              aria-haspopup="true"
            >
              Options
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute bottom-full left-1/2 mb-2 w-64 -translate-x-1/2 rounded-lg border border-white/10 bg-ucf-black/95 py-1 shadow-xl backdrop-blur-sm">
                {OPTION_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2.5 text-sm text-ucf-white/70 transition-colors hover:bg-white/5 hover:text-ucf-gold"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
            className="text-sm text-ucf-white/60 transition-colors hover:text-ucf-gold"
          >
            Contact
          </a>

          <a
            href="https://antimatterai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ucf-white/60 transition-colors hover:text-ucf-gold"
          >
            Learn about Antimatter
          </a>
        </nav>

        <p className="mt-6 text-center text-sm text-ucf-white/40">
          © 2026 Antimatter Proposal for UCF Athletics
        </p>
      </div>
    </footer>
  );
}
