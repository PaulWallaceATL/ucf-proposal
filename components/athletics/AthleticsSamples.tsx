"use client";

import Link from "next/link";

/** Sample components for Athletics section (Staff, Academics, Facilities, Compliance, etc.). */

export function AthleticsNavGridSample() {
  const groups = [
    { label: "People & Org", links: ["Staff Directory", "Academics", "Employment"] },
    { label: "Campus & Compliance", links: ["Facilities", "Compliance", "Marching Knights"] },
    { label: "Partners & Fans", links: ["Mission XII", "Knightmare Society", "Corporate Partnerships", "Mental Health & Performance"] },
  ];
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {groups.map((g, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="font-display text-ucf-gold">{g.label}</h3>
          <ul className="mt-3 space-y-2">
            {g.links.map((link, j) => (
              <li key={j}>
                <Link href="#" className="text-sm text-ucf-white/90 hover:text-ucf-gold">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function QuickLinksBarSample() {
  const links = ["UCF.edu", "Social Media Directory", "Public Records", "Trademark & Licensing"];
  return (
    <div className="flex flex-wrap gap-4 rounded-lg border border-white/10 bg-ucf-black px-6 py-4">
      {links.map((label, i) => (
        <Link key={i} href="#" className="text-sm font-medium text-ucf-gold hover:text-ucf-gold-alt">{label}</Link>
      ))}
    </div>
  );
}
