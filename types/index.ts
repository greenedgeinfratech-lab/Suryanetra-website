export type SolutionKey = "epc" | "resco" | "open-access" | "om";

export interface Service {
  key: SolutionKey;
  title: string;
  summary: string;
  points: string[];
  cta: string;
  href: string;
}

export type ProjectType = "EPC" | "RESCO" | "Open Access" | "Rooftop" | "Ground Mount" | "C&I";

export interface Project {
  id: string;
  name: string;
  image: string;
  capacity: string; // e.g. "2.5 MW"
  location: string;
  type: ProjectType[];
  clientSector: string;
  status: "Commissioned" | "Under Construction" | "In Development";
  isSample: true;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  isSample: true;
}

export interface LeadFormData {
  name: string;
  company: string;
  designation?: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  monthlyConsumption?: string;
  currentTariff?: string;
  projectInterest: string[];
  message?: string;
}

export interface CalculatorInput {
  monthlyConsumptionKwh: number;
  tariffPerKwh: number;
  contractDemandKva?: number;
  state: string;
  availableAreaSqft?: number;
  model: "EPC" | "RESCO" | "Open Access";
}

export interface CalculatorResult {
  annualElectricityCost: number;
  estimatedSolarRequirementKwp: number;
  estimatedAnnualGenerationKwh: number;
  estimatedAnnualSolarCost: number;
  potentialAnnualSavings: number;
  paybackYears: number | null;
  co2ReductionTonnes: number;
}
