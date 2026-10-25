import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EnergyFlowDiagram } from "@/components/diagrams/EnergyFlowDiagram";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Surynetra Energy's approach to solar EPC, RESCO and Open Access renewable energy infrastructure.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader
            dark
            eyebrow="About Us"
            title="Building the Infrastructure for India's Clean Energy Future"
            description="Surynetra Energy Private Limited works across the renewable-energy value chain — combining engineering expertise, commercial understanding, project execution and long-term energy partnerships to help businesses transition to clean power."
          />
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Engineering Expertise", "Technology-led design and execution across project scales."],
            ["Commercial Understanding", "Structures aligned to real business energy economics."],
            ["Project Execution", "End-to-end delivery from feasibility to commissioning."],
            ["Long-Term Energy Partnerships", "Relationships that extend well beyond installation."],
            ["Technology", "Modern monitoring and performance management systems."],
            ["Sustainability", "Supporting measurable corporate decarbonization."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="text-sm font-bold text-[var(--navy)]">{title}</div>
              <div className="mt-1.5 text-xs leading-relaxed text-[var(--graphite)]/70">{desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeader eyebrow="The Energy Journey" title="From Generation to Sustainability" />
          <div className="mt-8 overflow-x-auto">
            <EnergyFlowDiagram />
          </div>
        </div>
      </section>

      <CTASection title="Partner With Surynetra Energy" description="Let's discuss your business's energy transition." />
    </>
  );
}
