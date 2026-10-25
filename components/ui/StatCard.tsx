export function StatCard({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
      <div className="text-3xl font-bold text-white sm:text-4xl">
        {value}
        {suffix && <span className="text-[var(--solar-gold)]">{suffix}</span>}
      </div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}
