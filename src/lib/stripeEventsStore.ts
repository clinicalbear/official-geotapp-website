// src/lib/stripeEventsStore.ts

const EVENTS_LIMIT = Number(process.env.STRIPE_EVENT_LOG_LIMIT ?? 50);

export type StoredStripeEvent = {
  id: string;
  type: string;
  created: number;
  livemode: boolean;
  payload: Record<string, unknown> | null;
  receivedAt: string;
  status: "received" | "processed" | "failed";
  errorMessage?: string; // opzionale: mantiene la compatibilità con la pagina
};

const g = globalThis as unknown as {
  __STRIPE_EVENTS__?: StoredStripeEvent[];
};

function bucket(): StoredStripeEvent[] {
  if (!g.__STRIPE_EVENTS__) g.__STRIPE_EVENTS__ = [];
  return g.__STRIPE_EVENTS__;
}

export async function appendStripeEvent(e: StoredStripeEvent): Promise<void> {
  const b = bucket();
  b.unshift(e);
  if (b.length > EVENTS_LIMIT) b.length = EVENTS_LIMIT;
}

/** Restituisce gli eventi, con limite opzionale (default: EVENTS_LIMIT) */
export async function listStripeEvents(limit?: number): Promise<StoredStripeEvent[]> {
  const max = Math.min(limit ?? EVENTS_LIMIT, EVENTS_LIMIT);
  return bucket().slice(0, max);
}

/** Alias per compatibilità con la pagina admin */
export { listStripeEvents as getStripeEvents };

export async function clearStripeEvents(): Promise<void> {
  g.__STRIPE_EVENTS__ = [];
}
