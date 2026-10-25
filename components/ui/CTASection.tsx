import Link from "next/link";

export function CTASection({
  title,
  description,
  primaryLabel = "Request Consultation",
  primaryHref = "/contact",
}: {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="section-dark">
      <div className="container-page py-16 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {description && <p className="mx-auto mt-4 max-w-xl text-white/70">{description}</p>}
        <div className="mt-8">
          <Link
            href={primaryHref}
            className="inline-block rounded-md px-8 py-3.5 text-sm font-semibold text-[var(--navy)]"
            style={{ background: "var(--solar-gold)" }}
          >
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
