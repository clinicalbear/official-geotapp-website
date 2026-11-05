/**
 * Quale piano Flow regge un certo numero di operatori, e quante postazioni si pagano.
 * Stessi numeri di geotapp-crm/src/lib/plan-limits.ts (TT_SEAT_CEILING, PROMO_FINE_2026,
 * billableTtSeats): il CRM decide cosa si fattura, qui si spiega a chi legge il listino.
 */
export type PianoFlow = 'solo' | 'team' | 'business';

/** null = senza limite. */
export const POSTAZIONI_PIANO: Record<PianoFlow, { tetto: number | null; tettoPromo: number | null; compresePromo: number }> = {
  solo: { tetto: 2, tettoPromo: 5, compresePromo: 1 },
  team: { tetto: 5, tettoPromo: 15, compresePromo: 1 },
  business: { tetto: null, tettoPromo: null, compresePromo: 5 },
};

const ORDINE: readonly PianoFlow[] = ['solo', 'team', 'business'];

export function pianoPerOperatori(operatori: number, promo: boolean) {
  const piano =
    ORDINE.find((p) => {
      const tetto = promo ? POSTAZIONI_PIANO[p].tettoPromo : POSTAZIONI_PIANO[p].tetto;
      return tetto === null || operatori <= tetto;
    }) ?? 'business';
  const comprese = promo ? Math.min(operatori, POSTAZIONI_PIANO[piano].compresePromo) : 0;
  return { piano, comprese, daPagare: operatori - comprese };
}
