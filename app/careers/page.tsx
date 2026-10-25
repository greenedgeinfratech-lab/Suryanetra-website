import { SectionHeader } from "@/components/ui/SectionHeader";

export default function CareersPage() {
  return (
    <section className="container-page py-24">
      <SectionHeader eyebrow="Careers" title="Careers at Surynetra Energy" />
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--graphite)]/70">
        No open roles are listed yet. Check back soon, or write to us at your convenience.
      </p>
    </section>
  );
}
