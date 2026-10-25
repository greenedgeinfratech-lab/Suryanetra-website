import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { SERVICES } from "@/lib/constants/services";

export const metadata: Metadata = {
  title: "Renewable Energy Solutions",
  description:
    "Solar EPC, RESCO, Open Access and O&M solutions for industrial and commercial businesses across India.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader
            dark
            eyebrow="Solutions"
            title="Renewable Energy Solutions for Every Business"
            description="From owned EPC projects to zero-capex RESCO models and Open Access power procurement — engineered for industrial and commercial scale."
          />
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.key} service={s} />
          ))}
        </div>
      </section>

      <CTASection title="Not Sure Which Model Fits Your Business?" description="Talk to our energy team for a tailored recommendation." />
    </>
  );
}
