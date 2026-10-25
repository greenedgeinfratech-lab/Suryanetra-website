import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RescoFlowDiagram } from "@/components/diagrams/RescoFlowDiagram";
import { CTASection } from "@/components/ui/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "RESCO Solar Company",
  description: "Surynetra develops, finances, owns and operates solar assets — customers purchase the generated electricity under a long-term agreement.",
  alternates: { canonical: "/solutions/resco" },
};

const BENEFITS = [
  "Lower upfront investment", "Predictable energy costs", "Professional O&M",
  "Long-term energy partnership", "Reduced dependence on conventional power",
];

export default function RescoPage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader
            dark
            eyebrow="RESCO"
            title="Own Nothing. Save From Day One."
            description="We develop, finance, own and operate solar assets while customers purchase the generated electricity under a long-term agreement."
          />
          <div className="mt-14">
            <RescoFlowDiagram />
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeader eyebrow="Benefits" title="Why Businesses Choose RESCO" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <div key={b} className="flex items-center gap-3 rounded-lg border border-black/5 bg-white p-5">
              <Check className="h-5 w-5 shrink-0" style={{ color: "var(--renewable-green)" }} />
              <span className="text-sm font-medium text-[var(--navy)]">{b}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-[var(--off-white)] p-8">
            <div className="text-xs font-semibold uppercase tracking-wide text-[var(--graphite)]/50">Traditional Model</div>
            <div className="mt-4 text-sm font-medium text-[var(--navy)]">Customer → CAPEX → Solar Plant</div>
          </div>
          <div className="rounded-xl border border-[var(--solar-gold)]/30 bg-white p-8 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-[var(--warm-orange)]">RESCO Model</div>
            <div className="mt-4 text-sm font-medium text-[var(--navy)]">Surynetra → Investment + Plant → Customer → Energy Payment</div>
          </div>
        </div>
      </section>

      <CTASection title="Is RESCO Right for Your Business?" primaryLabel="Understand RESCO" primaryHref="/resco" />
    </>
  );
}
