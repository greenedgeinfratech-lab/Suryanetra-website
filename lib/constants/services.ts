import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    key: "epc",
    title: "Solar EPC",
    summary:
      "Engineering, procurement and construction of high-performance solar projects, delivered end-to-end.",
    points: [
      "Engineering & Design",
      "Procurement",
      "Construction",
      "Commissioning",
      "Quality Control",
      "Project Management",
    ],
    cta: "Explore Solar EPC",
    href: "/solutions/epc",
  },
  {
    key: "resco",
    title: "RESCO",
    summary:
      "We develop, finance, own and operate solar assets while customers purchase the generated electricity under a long-term agreement.",
    points: [
      "Lower upfront investment",
      "Predictable energy costs",
      "Professional O&M",
      "Long-term energy partnership",
      "Reduced dependence on conventional power",
    ],
    cta: "Understand RESCO",
    href: "/solutions/resco",
  },
  {
    key: "open-access",
    title: "Open Access",
    summary:
      "Renewable power procurement for eligible commercial and industrial customers through third-party, captive or group-captive structures.",
    points: [
      "Renewable power procurement",
      "Third-party / captive / group-captive structures",
      "Grid connectivity",
      "Transmission and distribution",
      "Long-term power agreements",
      "Cost optimization",
    ],
    cta: "Explore Open Access",
    href: "/solutions/open-access",
  },
  {
    key: "om",
    title: "Operations & Maintenance",
    summary:
      "Performance-focused O&M to protect asset life and maximize generation over the project lifecycle.",
    points: [
      "Preventive maintenance",
      "Predictive monitoring",
      "Performance analysis",
      "Fault detection",
      "Cleaning",
      "Electrical inspection",
      "Annual maintenance contracts",
    ],
    cta: "Learn About O&M",
    href: "/solutions/om",
  },
];
