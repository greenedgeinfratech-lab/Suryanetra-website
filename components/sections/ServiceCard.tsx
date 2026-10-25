import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-bold text-[var(--navy)]">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--graphite)]/75">{service.summary}</p>
      <ul className="mt-5 flex-1 space-y-2">
        {service.points.slice(0, 4).map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-[var(--graphite)]/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--renewable-green)" }} />
            {p}
          </li>
        ))}
      </ul>
      <Link
        href={service.href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--energy-blue)]"
      >
        {service.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
