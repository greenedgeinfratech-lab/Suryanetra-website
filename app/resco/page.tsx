import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "RESCO Process",
  description: "Step-by-step overview of how Surynetra's RESCO model works, from energy assessment to long-term operations.",
  alternates: { canonical: "/resco" },
};

const STEPS = [
  ["Step 1", "Energy consumption assessment"],
  ["Step 2", "Technical feasibility"],
  ["Step 3", "Commercial modelling"],
  ["Step 4", "Project development"],
  ["Step 5", "Investment / financing structure"],
  ["Step 6", "Construction"],
  ["Step 7", "Commissioning"],
  ["Step 8", "Long-term operations"],
  ["Step 9", "Energy supply under agreement"],
];

const QUALIFICATION = [
  "Is your monthly electricity consumption significant and consistent?",
  "Do you have available rooftop, ground or facility space?",
  "Are you looking to avoid upfront capital investment?",
  "Do you want predictable, long-term energy costs?",
];

export default function RescoProcessPage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader dark eyebrow="RESCO Process" title="How a RESCO Project Comes Together" />
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(([step, desc]) => (
            <div key={step} className="rounded-xl border border-black/5 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--solar-gold)]">{step}</div>
              <div className="mt-2 text-sm font-medium text-[var(--navy)]">{desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-black/5 bg-[var(--off-white)] p-8">
          <h3 className="text-lg font-bold text-[var(--navy)]">Is RESCO Right for Your Business?</h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--graphite)]/75">
            {QUALIFICATION.map((q) => (
              <li key={q}>• {q}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Talk to Our RESCO Team" />
    </>
  );
}
