import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProcessTimeline } from "@/components/diagrams/ProcessTimeline";
import { CTASection } from "@/components/ui/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar EPC Company in India",
  description: "Engineering, procurement and construction of high-performance solar projects for industrial and commercial businesses.",
  alternates: { canonical: "/solutions/epc" },
};

const STEPS = [
  "Energy Assessment", "Site Survey", "Feasibility Study", "System Design",
  "Financial Analysis", "Engineering & Procurement", "Construction",
  "Commissioning", "Monitoring", "O&M",
];

const SCOPE = ["Engineering & Design", "Procurement", "Construction", "Commissioning", "Quality Control", "Project Management"];

export default function EpcPage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader
            dark
            eyebrow="Solar EPC"
            title="Engineering, Procurement & Construction"
            description="High-performance solar projects delivered end-to-end — from engineering and design through construction, commissioning and quality control."
          />
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCOPE.map((s) => (
            <div key={s} className="flex items-center gap-3 rounded-lg border border-black/5 bg-white p-5">
              <Check className="h-5 w-5 shrink-0" style={{ color: "var(--renewable-green)" }} />
              <span className="text-sm font-medium text-[var(--navy)]">{s}</span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeader eyebrow="EPC Process" title="Our Project Delivery Timeline" />
          <div className="mt-8">
            <ProcessTimeline steps={STEPS} />
          </div>
        </div>
      </section>

      <CTASection title="Start Your Solar EPC Project" primaryLabel="Explore Solar EPC" />
    </>
  );
}
