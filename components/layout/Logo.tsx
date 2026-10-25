import Link from "next/link";
import { COMPANY } from "@/lib/constants/company";

// Swap for <img src="/logo.svg" /> once a final logo asset is supplied.
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={COMPANY.name}>
      <span
        className="flex h-9 w-9 items-center justify-center rounded-md font-bold text-white"
        style={{ background: "linear-gradient(135deg, var(--energy-blue), var(--renewable-green))" }}
      >
        S
      </span>
      <span className={`leading-tight ${dark ? "text-white" : "text-[var(--navy)]"}`}>
        <span className="block text-sm font-bold tracking-wide">SURYNETRA ENERGY</span>
        <span className="block text-[10px] tracking-[0.2em] opacity-70">PRIVATE LIMITED</span>
      </span>
    </Link>
  );
}
