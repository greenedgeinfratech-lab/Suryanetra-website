import { SectionHeader } from "@/components/ui/SectionHeader";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { COMPANY } from "@/lib/constants/company";

export default function DisclaimerPage() {
  return (
    <section className="container-page py-24">
      <SectionHeader eyebrow="Legal" title="Disclaimer" />
      <div className="mt-8 max-w-2xl space-y-4">
        <Disclaimer text={COMPANY.disclaimers.openAccess} />
        <Disclaimer text={COMPANY.disclaimers.calculator} />
        <Disclaimer text={COMPANY.disclaimers.general} />
      </div>
    </section>
  );
}
