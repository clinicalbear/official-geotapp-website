// Promo di fine 2026: la stessa finestra di geotapp-crm/src/lib/plan-limits.ts
// (PROMO_FINE_2026). Il CRM decide cosa si fattura; qui si decide solo se
// mostrare badge e testi. Le due date vanno cambiate insieme.
export const PROMO_FINE_2026 = {
  startsAt: new Date('2026-10-18T00:00:00+02:00'),
  endsAt: new Date('2026-12-18T23:59:59+01:00'),
} as const;

export function promoFine2026Attiva(now: Date = new Date()): boolean {
  const t = now.getTime();
  return t >= PROMO_FINE_2026.startsAt.getTime() && t <= PROMO_FINE_2026.endsAt.getTime();
}
