import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { EnergyFlowDiagram } from "@/components/diagrams/EnergyFlowDiagram";
import { RescoFlowDiagram } from "@/components/diagrams/RescoFlowDiagram";
import { OpenAccessDiagram } from "@/components/diagrams/OpenAccessDiagram";
import { StatCard } from "@/components/ui/StatCard";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { SERVICES } from "@/lib/constants/services";
import { FAQS } from "@/lib/constants/faqs";
import { COMPANY } from "@/lib/constants/company";
import { ShieldCheck, TrendingUp, Handshake, Gauge, Layers, Leaf } from "lucide-react";

const WHY = [
  { icon: ShieldCheck, title: "Engineering First", desc: "Technology-led project design and execution." },
  { icon: TrendingUp, title: "Commercial Understanding", desc: "Solutions designed around real business energy economics." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "Not just project installation — long-term energy relationships." },
  { icon: Gauge, title: "Performance Focused", desc: "Monitoring, optimization and lifecycle management." },
  { icon: Layers, title: "Scalable", desc: "Solutions from medium-scale C&I projects to large renewable assets." },
  { icon: Leaf, title: "Sustainable", desc: "Helping businesses move toward measurable decarbonization." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-page -mt-12 relative z-10">
        <CapabilityStrip />
      </section>

      {/* About */}
      <section className="container-page py-24">
        <SectionHeader
          eyebrow="About Surynetra"
          title="Building the Infrastructure for India's Clean Energy Future"
          description="Surynetra Energy works across the renewable-energy value chain, combining engineering, project development, financing-oriented models and long-term energy management for industrial and commercial customers."
        />
        <div className="mt-10 overflow-x-auto">
          <EnergyFlowDiagram />
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[var(--off-white)] py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Solutions" title="Renewable Energy Solutions for Every Business" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <ServiceCard key={s.key} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* RESCO interactive */}
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader
            dark
            eyebrow="RESCO Model"
            title="How the RESCO Model Works"
            description="Surynetra develops, finances, owns and operates the solar asset — customers pay only for the energy they use."
          />
          <div className="mt-12">
            <RescoFlowDiagram />
          </div>
        </div>
      </section>

      {/* Open Access */}
      <section className="container-page py-24">
        <SectionHeader
          eyebrow="Open Access"
          title="Open Access Renewable Power for High-Consumption Businesses"
          description="Renewable electricity procurement, long-term price visibility and support toward corporate decarbonization goals."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <OpenAccessDiagram />
          <div className="space-y-4">
            {[
              "Renewable electricity procurement",
              "Long-term price visibility",
              "Reduced dependence on conventional power",
              "Sustainability targets & corporate decarbonization",
              "Diversified renewable energy sourcing",
            ].map((point) => (
              <div key={point} className="rounded-lg border border-black/5 bg-white p-4 text-sm font-medium text-[var(--graphite)]">
                {point}
              </div>
            ))}
            <Link
              href="/solutions/open-access"
              className="inline-block rounded-md bg-[var(--energy-blue)] px-6 py-3 text-sm font-semibold text-white"
            >
              Enquire for Feasibility
            </Link>
            <Disclaimer text={COMPANY.disclaimers.openAccess} />
          </div>
        </div>
      </section>

      {/* Why Surynetra */}
      <section className="bg-[var(--off-white)] py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Why Surynetra" title="A Partner Built for Long-Term Energy Infrastructure" center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-black/5 bg-white p-6">
                <Icon className="h-6 w-6" style={{ color: "var(--energy-blue)" }} />
                <div className="mt-3 text-sm font-bold text-[var(--navy)]">{title}</div>
                <div className="mt-1.5 text-xs leading-relaxed text-[var(--graphite)]/70">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability stats */}
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader dark center eyebrow="Impact" title="Clean Energy at Scale" />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCard label="Solar Capacity (MW)" value="—" />
            <StatCard label="Clean Energy Generated (MWh)" value="—" />
            <StatCard label="CO₂ Avoided (tonnes)" value="—" />
            <StatCard label="Businesses Powered" value="—" />
          </div>
          <p className="mt-6 text-center text-xs text-white/40">
            Figures pending verified company data — placeholders shown until available.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-page py-24">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" center />
        <div className="mx-auto mt-12 max-w-2xl">
          <FAQAccordion items={FAQS.slice(0, 6)} />
        </div>
      </section>

      <CTASection
        title="Ready to Assess Your Energy Transition?"
        description="Speak with our energy team to explore the right solar model for your business."
      />
    </>
  );
}
