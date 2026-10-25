"use client";
import { useState } from "react";

export function ProcessTimeline({ steps }: { steps: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {steps.map((step, i) => (
          <button
            key={step}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              active === i
                ? "bg-[var(--energy-blue)] text-white"
                : "bg-[var(--off-white)] text-[var(--graphite)]/70 hover:bg-black/5"
            }`}
          >
            {i + 1}. {step}
          </button>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-black/5 bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-wide text-[var(--solar-gold)]">
          Step {active + 1} of {steps.length}
        </div>
        <div className="mt-1 text-lg font-bold text-[var(--navy)]">{steps[active]}</div>
      </div>
    </div>
  );
}
