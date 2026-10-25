"use client";

import { useState } from "react";
import { calculateSolarEstimate } from "@/lib/calculations/solar-calculator";
import { CalculatorResult } from "@/types";
import { COMPANY } from "@/lib/constants/company";
import { Disclaimer } from "@/components/ui/Disclaimer";

export function Calculator() {
  const [consumption, setConsumption] = useState(20000);
  const [tariff, setTariff] = useState(8);
  const [demand, setDemand] = useState(0);
  const [state, setState] = useState("");
  const [area, setArea] = useState(0);
  const [model, setModel] = useState<"EPC" | "RESCO" | "Open Access">("RESCO");
  const [result, setResult] = useState<CalculatorResult | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setResult(
      calculateSolarEstimate({
        monthlyConsumptionKwh: consumption,
        tariffPerKwh: tariff,
        contractDemandKva: demand || undefined,
        state,
        availableAreaSqft: area || undefined,
        model,
      })
    );
  }

  const inputClass =
    "w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--energy-blue)] focus:ring-2 focus:ring-[var(--energy-blue)]/20";
  const labelClass = "mb-1.5 block text-xs font-semibold text-[var(--graphite)]/70";

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={handleCalculate} className="space-y-5 rounded-2xl border border-black/5 bg-white p-8">
        <div>
          <label className={labelClass}>Monthly Electricity Consumption (kWh)</label>
          <input
            type="number"
            min={0}
            className={inputClass}
            value={consumption}
            onChange={(e) => setConsumption(Number(e.target.value))}
          />
        </div>
        <div>
          <label className={labelClass}>Current Electricity Tariff (₹/kWh)</label>
          <input
            type="number"
            min={0}
            step={0.1}
            className={inputClass}
            value={tariff}
            onChange={(e) => setTariff(Number(e.target.value))}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Contract Demand (kVA)</label>
            <input
              type="number"
              min={0}
              className={inputClass}
              value={demand}
              onChange={(e) => setDemand(Number(e.target.value))}
            />
          </div>
          <div>
            <label className={labelClass}>Available Area (sq ft)</label>
            <input
              type="number"
              min={0}
              className={inputClass}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>State</label>
          <input className={inputClass} value={state} onChange={(e) => setState(e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Preferred Model</label>
          <div className="flex gap-2">
            {(["EPC", "RESCO", "Open Access"] as const).map((m) => (
              <button
                type="button"
                key={m}
                onClick={() => setModel(m)}
                className={`flex-1 rounded-md border px-3 py-2.5 text-xs font-semibold transition ${
                  model === m
                    ? "border-[var(--energy-blue)] bg-[var(--energy-blue)] text-white"
                    : "border-black/10 text-[var(--graphite)]/70"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-[var(--energy-blue)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--navy)]"
        >
          Calculate Estimate
        </button>
      </form>

      <div className="rounded-2xl border border-black/5 bg-[var(--off-white)] p-8">
        {!result ? (
          <div className="flex h-full items-center justify-center text-sm text-[var(--graphite)]/50">
            Enter your details and calculate to see an indicative estimate.
          </div>
        ) : (
          <div className="space-y-4">
            {[
              ["Annual Electricity Cost", `₹${result.annualElectricityCost.toLocaleString("en-IN")}`],
              ["Estimated Solar Requirement", `${result.estimatedSolarRequirementKwp} kWp`],
              ["Estimated Annual Generation", `${result.estimatedAnnualGenerationKwh.toLocaleString("en-IN")} kWh`],
              ["Estimated Annual Solar Cost", `₹${result.estimatedAnnualSolarCost.toLocaleString("en-IN")}`],
              ["Potential Annual Savings", `₹${result.potentialAnnualSavings.toLocaleString("en-IN")}`],
              ["Payback Period", result.paybackYears ? `${result.paybackYears} years` : "Not applicable (RESCO/Open Access)"],
              ["CO₂ Reduction", `${result.co2ReductionTonnes} tonnes/year`],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-black/5 pb-3">
                <span className="text-sm text-[var(--graphite)]/70">{label}</span>
                <span className="text-sm font-bold text-[var(--navy)]">{value}</span>
              </div>
            ))}
            <div className="pt-2">
              <Disclaimer text={COMPANY.disclaimers.calculator} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
