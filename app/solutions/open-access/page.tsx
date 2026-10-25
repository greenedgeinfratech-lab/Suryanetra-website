import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OpenAccessDiagram } from "@/components/diagrams/OpenAccessDiagram";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { COMPANY } from "@/lib/constants/company";

export const metadata: Metadata = {
  title: "Open Access Solar & Renewable Energy",
  description: "Open Access renewable power procurement for eligible commercial and industrial businesses through third-party, captive and group-captive structures.",
  alternates: { canonical: "/solutions/open-access" },
};

const OA_FAQS = [
  { question: "What is Open Access?", answer: "Open Access allows eligible commercial and industrial consumers to procure renewable power from a generator outside their local distribution utility, using the shared transmission and distribution network, subject to applicable regulations." },
  { question: "Who should consider it?", answer: "Businesses with significant electricity consumption and contract demand that meet state-specific eligibility criteria for Open Access." },
  { question: "What structures are available?", answer: "Third-party procurement, captive, and group-captive structures — the right fit depends on load profile, ownership preferences and regulatory eligibility." },
];

export default function OpenAccessPage() {
  return (
    <>
      <section className="section-dark py-24">
        <div className="container-page">
          <SectionHeader
            dark
            eyebrow="Open Access"
            title="Open Access Renewable Power for High-Consumption Businesses"
            description="Renewable electricity procurement with long-term price visibility, reduced dependence on conventional power, and support for corporate sustainability targets."
          />
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <OpenAccessDiagram />
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[var(--navy)]">Business Model Overview</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--graphite)]/75">
                Open Access enables eligible businesses to source renewable power directly through third-party,
                captive or group-captive structures, using existing grid connectivity and transmission/distribution
                infrastructure.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--navy)]">Value Proposition</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-[var(--graphite)]/75">
                <li>• Renewable electricity procurement</li>
                <li>• Long-term price visibility</li>
                <li>• Reduced dependence on conventional power</li>
                <li>• Support for sustainability targets and corporate decarbonization</li>
              </ul>
            </div>
            <Disclaimer text={COMPANY.disclaimers.openAccess} />
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader eyebrow="FAQ" title="Open Access Questions" />
          <div className="mt-8">
            <FAQAccordion items={OA_FAQS} />
          </div>
        </div>
      </section>

      <CTASection title="Assess Your Open Access Feasibility" primaryLabel="Enquire for Feasibility" />
    </>
  );
}
