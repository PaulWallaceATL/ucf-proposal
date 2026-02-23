/**
 * Gold-bordered callout box for important notices (e.g., travel/incidentals).
 */
interface CalloutProps {
  children: React.ReactNode;
}

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="rounded-lg border border-ucf-gold/40 bg-ucf-gold/5 px-5 py-4">
      <p className="text-sm leading-relaxed text-ucf-white/90">{children}</p>
    </div>
  );
}
