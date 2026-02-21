const COLUMN_1 = [
  "Staff Directory",
  "Academics",
  "Facilities",
  "Employment",
  "Compliance",
];

const COLUMN_2 = [
  "Marching Knights",
  "Knightmare Society",
  "Mission XII",
  "UCF.Edu",
  "Social Media Directory",
];

const COLUMN_3 = [
  "Corporate Partnerships",
  "Mental Health & Performance",
];

function FooterColumn({ links }: { links: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {links.map((label) => (
        <li key={label}>
          <a
            href="#"
            className="text-ucf-white/90 transition-colors hover:text-ucf-gold"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-ucf-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo */}
          <div
            className="font-bebas-neue text-2xl tracking-wide text-ucf-gold"
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          >
            UCF KNIGHTS
          </div>

          {/* Three columns of links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <FooterColumn links={COLUMN_1} />
            <FooterColumn links={COLUMN_2} />
            <FooterColumn links={COLUMN_3} />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-ucf-white/70">
          © 2026 Antimatter Proposal for UCF Athletics
        </div>
      </div>
    </footer>
  );
}
