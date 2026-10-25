import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(10,25,48,0.95), rgba(18,36,74,0.85)), url('/images/hero-solar-farm.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* Animated energy-line grid overlay */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e0a63c" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container-page relative py-28 sm:py-36">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--solar-gold)]">
            Renewable Energy Infrastructure
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Powering Business with Smarter Renewable Energy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Solar EPC, RESCO and Open Access solutions designed to reduce energy costs, improve
            power resilience and accelerate the transition to clean energy.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/solutions/epc"
              className="rounded-md px-7 py-3.5 text-sm font-semibold text-[var(--navy)]"
              style={{ background: "var(--solar-gold)" }}
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Talk to Our Energy Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
