import { CalculatorInput, CalculatorResult } from "@/types";

// Modular, clearly-labeled ASSUMPTIONS — replace with verified engineering
// assumptions before using this for any real customer-facing estimate.
export const CALC_ASSUMPTIONS = {
  // Average generation per kWp installed per year, in kWh (indicative, India average).
  annualGenerationPerKwp: 1450,
  // Approx. rooftop/ground area (sqft) needed per kWp.
  areaPerKwpSqft: 100,
  // System cost benchmark per kWp (₹) — illustrative only.
  systemCostPerKwp: 45000,
  // Illustrative effective solar energy cost per kWh under RESCO/Open Access (₹).
  solarEnergyCostPerKwh: 4.2,
  // Grid emission factor (kg CO2 per kWh) — indicative, India grid average.
  gridEmissionFactorKgPerKwh: 0.82,
};

export function calculateSolarEstimate(input: CalculatorInput): CalculatorResult {
  const { monthlyConsumptionKwh, tariffPerKwh } = input;
  const annualConsumptionKwh = monthlyConsumptionKwh * 12;
  const annualElectricityCost = annualConsumptionKwh * tariffPerKwh;

  const estimatedSolarRequirementKwp =
    annualConsumptionKwh / CALC_ASSUMPTIONS.annualGenerationPerKwp;

  const estimatedAnnualGenerationKwh =
    estimatedSolarRequirementKwp * CALC_ASSUMPTIONS.annualGenerationPerKwp;

  const estimatedAnnualSolarCost =
    input.model === "EPC"
      ? 0 // owned asset — no recurring energy purchase cost assumed here
      : estimatedAnnualGenerationKwh * CALC_ASSUMPTIONS.solarEnergyCostPerKwh;

  const potentialAnnualSavings = Math.max(
    0,
    Math.min(annualConsumptionKwh, estimatedAnnualGenerationKwh) * tariffPerKwh -
      estimatedAnnualSolarCost
  );

  let paybackYears: number | null = null;
  if (input.model === "EPC") {
    const capex = estimatedSolarRequirementKwp * CALC_ASSUMPTIONS.systemCostPerKwp;
    const annualGridCostOffset =
      Math.min(annualConsumptionKwh, estimatedAnnualGenerationKwh) * tariffPerKwh;
    paybackYears = annualGridCostOffset > 0 ? +(capex / annualGridCostOffset).toFixed(1) : null;
  }

  const co2ReductionTonnes =
    (estimatedAnnualGenerationKwh * CALC_ASSUMPTIONS.gridEmissionFactorKgPerKwh) / 1000;

  return {
    annualElectricityCost: Math.round(annualElectricityCost),
    estimatedSolarRequirementKwp: +estimatedSolarRequirementKwp.toFixed(1),
    estimatedAnnualGenerationKwh: Math.round(estimatedAnnualGenerationKwh),
    estimatedAnnualSolarCost: Math.round(estimatedAnnualSolarCost),
    potentialAnnualSavings: Math.round(potentialAnnualSavings),
    paybackYears,
    co2ReductionTonnes: +co2ReductionTonnes.toFixed(1),
  };
}
