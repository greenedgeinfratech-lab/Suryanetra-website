import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Operations & Maintenance (O&M)",
  description: "Preventive maintenance, predictive monitoring and performance-focused O&M services for solar assets.",
  alternates: { canonical: "/solutions/om" },
};

const ITEMS = [
  "Preventive maintenance", "Predictive monitoring", "Performance analysis",
  "Fault detection", "Cleaning", "Electrical inspection", "Annual maintenance contracts",
];

export default function OmPage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader
            dark
            eyebrow="Operations & Maintenance"
            title="Performance-Focused O&M"
            description="Protecting asset life and maximizing generation across the project lifecycle."
          />
        </div>
      </section>
      <section className="container-page py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-black/5 bg-white p-5">
              <Check className="h-5 w-5 shrink-0" style={{ color: "var(--renewable-green)" }} />
              <span className="text-sm font-medium text-[var(--navy)]">{item}</span>
            </div>
          ))}
        </div>
      </section>
      <CTASection title="Keep Your Solar Assets Performing" primaryLabel="Talk to Our O&M Team" />
    </>
  );
}
