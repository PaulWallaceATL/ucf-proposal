import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * UCF-branded button with gold glow effect, inspired by Pricing5.
 * Supports solid/outline variants and renders as <a>, <Link>, or <button>.
 */
interface BrandButtonProps {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function BrandButton({
  children,
  variant = "solid",
  size = "lg",
  href,
  external = false,
  className,
  onClick,
  type = "button",
}: BrandButtonProps) {
  const base = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ucf-gold",
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
    variant === "solid"
      ? "bg-ucf-gold text-ucf-black shadow-[0_0_20px_rgba(255,201,4,0.35)] hover:shadow-[0_0_30px_rgba(255,201,4,0.55)]"
      : "border-2 border-ucf-gold bg-transparent text-ucf-gold hover:bg-ucf-gold/10",
    className,
  );

  const overlay =
    variant === "solid" ? (
      <span
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
    ) : null;

  if (href) {
    if (external || href.startsWith("mailto:") || href.startsWith("#")) {
      return (
        <a href={href} className={base}>
          {overlay}
          <span className="relative z-10">{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={base}>
        {overlay}
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {overlay}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
