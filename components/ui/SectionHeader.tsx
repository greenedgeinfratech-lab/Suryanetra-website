export function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--solar-gold)" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-[var(--navy)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/70" : "text-[var(--graphite)]/75"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
