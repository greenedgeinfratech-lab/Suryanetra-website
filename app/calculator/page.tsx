import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Calculator } from "@/components/forms/Calculator";

export const metadata: Metadata = {
  title: "Energy Savings Calculator",
  description: "Get an indicative estimate of your solar requirement, generation and savings potential.",
  alternates: { canonical: "/calculator" },
};

export default function CalculatorPage() {
  return (
    <section className="container-page py-24">
      <SectionHeader
        eyebrow="Calculator"
        title="Energy Savings Calculator"
        description="Enter your consumption details to get an indicative estimate for your business."
      />
      <div className="mt-12">
        <Calculator />
      </div>
    </section>
  );
}
