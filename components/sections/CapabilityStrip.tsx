import { Wrench, Building2, Zap, Gauge } from "lucide-react";

const items = [
  { icon: Wrench, title: "Solar EPC", desc: "End-to-end design, build and commissioning." },
  { icon: Building2, title: "RESCO", desc: "We own and operate; you pay for energy used." },
  { icon: Zap, title: "Open Access", desc: "Renewable power procurement at scale." },
  { icon: Gauge, title: "O&M", desc: "Monitoring and performance management." },
];

export function CapabilityStrip() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="bg-white p-6">
          <Icon className="h-6 w-6" style={{ color: "var(--energy-blue)" }} />
          <div className="mt-3 text-sm font-semibold text-[var(--navy)]">{title}</div>
          <div className="mt-1 text-xs text-[var(--graphite)]/70">{desc}</div>
        </div>
      ))}
    </div>
  );
}
