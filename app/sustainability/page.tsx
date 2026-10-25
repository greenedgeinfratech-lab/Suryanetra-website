import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "How Surynetra Energy's renewable projects contribute to lower carbon intensity and corporate sustainability goals.",
  alternates: { canonical: "/sustainability" },
};

export default function SustainabilityPage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader
            dark
            eyebrow="Sustainability"
            title="Clean Energy Transition"
            description="Renewable energy contributes to lower carbon intensity, reduced fossil-fuel dependence, corporate sustainability goals and long-term energy resilience."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl"><AnimatedCounter target={0} suffix=" MW" /></div>
              <div className="mt-2 text-sm text-white/60">Solar Capacity</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl"><AnimatedCounter target={0} suffix=" MWh" /></div>
              <div className="mt-2 text-sm text-white/60">Clean Energy Generated</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl"><AnimatedCounter target={0} suffix=" t" /></div>
              <div className="mt-2 text-sm text-white/60">CO₂ Avoided</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl"><AnimatedCounter target={0} /></div>
              <div className="mt-2 text-sm text-white/60">Businesses Powered</div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-white/40">
            Values shown as placeholders (0) — configure with verified company data before launch.
          </p>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            "Lower carbon intensity",
            "Reduced fossil-fuel dependence",
            "Corporate sustainability goals",
            "Long-term energy resilience",
          ].map((point) => (
            <div key={point} className="rounded-lg border border-black/5 bg-white p-6 text-sm font-medium text-[var(--navy)]">
              {point}
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Plan Your Sustainability Roadmap" />
    </>
  );
}
