export function Disclaimer({ text }: { text: string }) {
  return (
    <p className="rounded-md border border-[var(--solar-gold)]/30 bg-[var(--solar-gold)]/5 px-4 py-3 text-xs leading-relaxed text-[var(--graphite)]/70">
      {text}
    </p>
  );
}
