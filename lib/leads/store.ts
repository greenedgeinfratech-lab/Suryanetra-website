import { LeadFormData } from "@/types";
import fs from "fs/promises";
import path from "path";

/**
 * PLACEHOLDER lead storage implementation.
 *
 * This writes submitted leads to a local JSON file (`.data/leads.json`) so the
 * form is fully functional during development. Replace `saveLead` with a real
 * integration before production use — e.g.:
 *   - CRM API (HubSpot, Zoho, Salesforce)
 *   - Email notification (Resend, SendGrid, SES)
 *   - Google Sheets API
 *   - A database (Postgres/Supabase/PlanetScale via Prisma/Drizzle)
 *
 * Swap the implementation here; callers (the /api/leads route) do not change.
 */

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");

export interface StoredLead extends LeadFormData {
  id: string;
  submittedAt: string;
}

export async function saveLead(lead: LeadFormData): Promise<StoredLead> {
  await fs.mkdir(DATA_DIR, { recursive: true });

  let existing: StoredLead[] = [];
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  const stored: StoredLead = {
    ...lead,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };

  existing.push(stored);
  await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf-8");

  // TODO: trigger CRM sync / email notification / webhook here.
  return stored;
}
