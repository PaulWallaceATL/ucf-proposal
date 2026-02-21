"use client";

import Link from "next/link";

/** Sample components for Tickets (Ticket Info, Manage Tickets, Digital Guide, Premium). */

export function TicketsHeroSample() {
  return (
    <div className="rounded-xl border border-white/10 bg-ucf-black p-8 md:p-12">
      <h2 className="font-display text-3xl tracking-wide text-ucf-white md:text-4xl">Tickets</h2>
      <p className="mt-3 text-ucf-white/80">Buy, manage, and use digital tickets — one account, all sports.</p>
    </div>
  );
}

export function NextGameTickerSample() {
  return (
    <div className="flex items-center gap-6 overflow-x-auto rounded-xl border border-white/10 bg-white/5 px-6 py-4">
      <div>
        <span className="text-xs text-ucf-gold">Next</span>
        <p className="font-display text-ucf-white">UCF vs. LSU</p>
      </div>
      <div className="text-sm text-ucf-white/80">Sun, Feb 22 · 3:00 PM</div>
      <Link href="#" className="ml-auto shrink-0 rounded-md bg-ucf-gold px-4 py-2 font-semibold text-ucf-black">Get tickets</Link>
    </div>
  );
}

export function TicketLinksGridSample() {
  const links = [
    "Ticket Information",
    "Manage My Tickets",
    "Digital Ticket Guide",
    "Premium Tailgating",
    "Student FB & MBB Guide",
    "Olympic Sport Tickets",
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {links.map((label, i) => (
        <Link key={i} href="#" className="rounded-lg border border-white/10 bg-white/5 p-4 text-ucf-white hover:border-ucf-gold/40">{label}</Link>
      ))}
    </div>
  );
}
