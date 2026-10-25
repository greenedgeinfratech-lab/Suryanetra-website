const STEPS = ["Generation", "Grid", "Business", "Savings", "Sustainability"];

export function EnergyFlowDiagram() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {STEPS.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className="rounded-full border border-[var(--energy-blue)]/20 bg-[var(--off-white)] px-5 py-2.5 text-sm font-semibold text-[var(--navy)]">
            {step}
          </div>
          {i < STEPS.length - 1 && (
            <div className="h-px w-6 shrink-0" style={{ background: "var(--solar-gold)" }} />
          )}
        </div>
      ))}
    </div>
  );
}
