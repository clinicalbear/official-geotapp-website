import { promises as fs } from "fs";
import path from "path";

const EVENTS_LIMIT = Number(process.env.STRIPE_EVENT_LOG_LIMIT ?? 50);

export type StripeEventEntry = {
  id: string;
  type: string;
  created: number;
  livemode: boolean;
  payload: Record<string, unknown> | null;
  receivedAt: string;
  status: "received" | "error";
  errorMessage?: string;
};

const fallbackPath = path.join(
  process.cwd(),
  "src",
  "content",
  "stripeEvents.json",
);
const eventsPath = process.env.STRIPE_EVENTS_FILE_PATH ?? fallbackPath;

async function ensureFileExists() {
  try {
    await fs.access(eventsPath);
  } catch {
    await fs.mkdir(path.dirname(eventsPath), { recursive: true });
    await fs.writeFile(eventsPath, "[]", "utf-8");
  }
}

export async function getStripeEvents(limit = 25) {
  await ensureFileExists();
  const raw = await fs.readFile(eventsPath, "utf-8");
  const events: StripeEventEntry[] = JSON.parse(raw);
  return events.slice(0, limit);
}

export async function appendStripeEvent(entry: StripeEventEntry) {
  await ensureFileExists();
  const raw = await fs.readFile(eventsPath, "utf-8");
  const events: StripeEventEntry[] = JSON.parse(raw);

  const filtered = events.filter((event) => event.id !== entry.id);
  filtered.unshift(entry);
  const trimmed = filtered.slice(0, EVENTS_LIMIT);

  await fs.writeFile(eventsPath, JSON.stringify(trimmed, null, 2), "utf-8");
}
