import { LeadFormData } from "@/types";

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof LeadFormData, string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]{7,15}$/;

export function validateLead(data: Partial<LeadFormData>): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  if (!data.name || data.name.trim().length < 2) errors.name = "Name is required.";
  if (!data.company || data.company.trim().length < 2) errors.company = "Company is required.";
  if (!data.phone || !PHONE_RE.test(data.phone)) errors.phone = "Enter a valid phone number.";
  if (!data.email || !EMAIL_RE.test(data.email)) errors.email = "Enter a valid email address.";
  if (!data.city || data.city.trim().length < 2) errors.city = "City is required.";
  if (!data.state || data.state.trim().length < 2) errors.state = "State is required.";
  if (!data.projectInterest || data.projectInterest.length === 0)
    errors.projectInterest = "Select at least one area of interest.";

  return { valid: Object.keys(errors).length === 0, errors };
}

// Minimal in-memory rate limiting hook (per server instance).
// Replace with a durable store (Redis/Upstash) for multi-instance deployments.
const submissionsByIp = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}
