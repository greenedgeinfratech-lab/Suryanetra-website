import { ArrowDown } from "lucide-react";

const STEPS = ["Solar Project", "Generation", "Power Grid", "Open Access", "Industrial / Commercial Consumer"];

export function OpenAccessDiagram() {
  return (
    <div className="flex flex-col items-center gap-1">
      {STEPS.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <div className="w-full min-w-[260px] rounded-lg border border-[var(--energy-blue)]/20 bg-white px-6 py-3.5 text-center text-sm font-semibold text-[var(--navy)] shadow-sm">
            {step}
          </div>
          {i < STEPS.length - 1 && <ArrowDown className="my-1 h-4 w-4 text-[var(--solar-gold)]" />}
        </div>
      ))}
    </div>
  );
}
