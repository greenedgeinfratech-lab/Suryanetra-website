"use client";
import { useState } from "react";

const STEPS = [
  { title: "Surynetra Invests", desc: "Capital and engineering committed to the project." },
  { title: "Solar Plant Developed", desc: "Design, procurement and construction managed end-to-end." },
  { title: "Plant Operated", desc: "Ongoing monitoring, maintenance and performance management." },
  { title: "Customer Uses Power", desc: "Generated electricity is supplied to the customer's facility." },
  { title: "Customer Pays for Energy", desc: "Payment is made under a long-term energy agreement." },
];

export function RescoFlowDiagram() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="grid gap-4 sm:grid-cols-5">
      {STEPS.map((step, i) => (
        <button
          key={step.title}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(i)}
          className={`rounded-xl border p-5 text-left transition ${
            active === i ? "border-[var(--solar-gold)] bg-white shadow-lg" : "border-white/10 bg-white/5"
          }`}
        >
          <div className="text-xs font-semibold text-[var(--solar-gold)]">Step {i + 1}</div>
          <div className={`mt-2 text-sm font-bold ${active === i ? "text-[var(--navy)]" : "text-white"}`}>
            {step.title}
          </div>
          <div className={`mt-1.5 text-xs leading-relaxed ${active === i ? "text-[var(--graphite)]/70" : "text-white/60"}`}>
            {step.desc}
          </div>
        </button>
      ))}
    </div>
  );
}
