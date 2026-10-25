"use client";

import { useState } from "react";

const INTERESTS = ["Solar EPC", "RESCO", "Open Access", "O&M"];

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const projectInterest = INTERESTS.filter((i) => formData.get(`interest-${i}`));

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      designation: formData.get("designation"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      city: formData.get("city"),
      state: formData.get("state"),
      monthlyConsumption: formData.get("monthlyConsumption"),
      currentTariff: formData.get("currentTariff"),
      projectInterest,
      message: formData.get("message"),
      website: formData.get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrorMsg("Please check the form for errors and try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[var(--renewable-green)]/30 bg-[var(--renewable-green)]/5 p-8 text-center">
        <h3 className="text-lg font-bold text-[var(--navy)]">Thank you — request received.</h3>
        <p className="mt-2 text-sm text-[var(--graphite)]/70">
          Our energy team will get in touch shortly to schedule your assessment.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--energy-blue)] focus:ring-2 focus:ring-[var(--energy-blue)]/20";
  const labelClass = "mb-1.5 block text-xs font-semibold text-[var(--graphite)]/70";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot field — hidden from real users */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input required id="name" name="name" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">Company</label>
          <input required id="company" name="company" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="designation">Designation</label>
          <input id="designation" name="designation" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input required id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input required id="email" name="email" type="email" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="city">City</label>
          <input required id="city" name="city" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="state">State</label>
          <input required id="state" name="state" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="monthlyConsumption">Monthly Electricity Consumption (kWh)</label>
          <input id="monthlyConsumption" name="monthlyConsumption" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="currentTariff">Current Electricity Tariff (₹/kWh)</label>
          <input id="currentTariff" name="currentTariff" className={inputClass} />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>Project Interest</legend>
        <div className="flex flex-wrap gap-4">
          {INTERESTS.map((interest) => (
            <label key={interest} className="flex items-center gap-2 text-sm">
              <input type="checkbox" name={`interest-${interest}`} className="h-4 w-4" />
              {interest}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={labelClass} htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </div>

      {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-[var(--energy-blue)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--navy)] disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Request Energy Assessment"}
      </button>
    </form>
  );
}
