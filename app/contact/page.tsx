import { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { COMPANY } from "@/lib/constants/company";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Request an energy assessment from Surynetra Energy's team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="container-page py-24">
      <SectionHeader eyebrow="Contact" title="Request an Energy Assessment" description="Tell us about your business and our energy team will get in touch." />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 shrink-0" style={{ color: "var(--energy-blue)" }} />
            <div>
              <div className="text-sm font-semibold text-[var(--navy)]">Phone</div>
              <div className="text-sm text-[var(--graphite)]/70">{COMPANY.phone}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 shrink-0" style={{ color: "var(--energy-blue)" }} />
            <div>
              <div className="text-sm font-semibold text-[var(--navy)]">Email</div>
              <div className="text-sm text-[var(--graphite)]/70">{COMPANY.email}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 shrink-0" style={{ color: "var(--energy-blue)" }} />
            <div>
              <div className="text-sm font-semibold text-[var(--navy)]">Office</div>
              <div className="text-sm text-[var(--graphite)]/70">
                {COMPANY.address.line1}, {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.pincode}
              </div>
            </div>
          </div>
          <a
            href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 rounded-md bg-[var(--renewable-green)] px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
          <div className="flex h-48 items-center justify-center rounded-xl border border-black/5 bg-[var(--off-white)] text-xs text-[var(--graphite)]/50">
            Google Maps embed placeholder
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
