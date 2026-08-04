import type { AppLocale } from '@/lib/i18n/config';

/**
 * Title e description SOLO per le varianti regionali EN degli idraulici.
 *
 * Perche' esistono (misurato su GSC il 04/08/2026, finestra 90gg al 02/08):
 * il cluster idraulici EN fa 528 impressioni e ZERO click, e la causa non e' il
 * ranking. `plumbing technician app with gps` e' passata da pos 8-9 a pos 4,4
 * dopo il rewrite del 14/07, quindi quella leva ha funzionato; i click restano
 * zero. Guardando le pagine che rankano, per la stessa query Google alterna
 * /en/sectors/plumbers/ (184 imp, pos 7,3) e /en-us/sectors/plumbers/ (88 imp,
 * pos 3,5), e le due mostrano lo STESSO identico snippet: chi cerca dagli Stati
 * Uniti (231 impressioni su 265) vede due risultati indistinguibili.
 *
 * Le pagine regionali pero' NON sono cloni: hanno un blocco di conformita' reale
 * (UPC/IPC e certificazione ASSE/IAPMO per gli USA, WRAS e Gas Safe per il Regno
 * Unito) e il prezzo in valuta locale. Il 96,6% di somiglianza col testo di /en/
 * e' il corpo condiviso, il 3,4% e' quella parte, ed e' l'unica cosa che al
 * lettore americano o inglese interessa davvero. Qui la portiamo nello snippet.
 *
 * NB: /en/ resta INTATTA di proposito. E' la pagina su cui sta salendo la
 * posizione: cambiarle il title adesso renderebbe impossibile attribuire
 * qualunque effetto. Se fra 3-4 settimane le regionali prendono click e /en/ no,
 * abbiamo imparato qualcosa di replicabile sugli altri settori.
 *
 * Falsificabile: se a 4 settimane il CTR resta 0% con le posizioni invariate,
 * il problema non e' lo snippet ma la SERP (intento diverso, o risultato mai
 * davvero visibile), e la pagina va ripensata invece che ritoccata.
 *
 * en-au, en-ca e en-ie restano sull'inglese generico: hanno troppe poche
 * impressioni su queste query per poter misurare l'effetto di un cambio.
 */
export const REGIONAL_META: Partial<Record<AppLocale, { title: string; description: string }>> = {
  // Query di riferimento: `plumbing technician app with gps`, 265 imp, pos 4,4
  // negli ultimi 7 giorni, 231 impressioni su 265 dagli Stati Uniti.
  'en-us': {
    title: 'Plumbing Technician App with GPS: UPC/IPC Records | GeoTapp',
    description:
      'GPS check-ins and photo proof on every plumbing job, with UPC or IPC inspection records and backflow tester IDs kept per worker for permit reconciliation.',
  },
  // Query di riferimento: `gps time tracking plumbers`, 124 imp, di cui 111 dal
  // Regno Unito, dove oggi rankano quattro nostre pagine diverse.
  'en-gb': {
    title: 'GPS Time Tracking for Plumbers: WRAS & Gas Safe | GeoTapp',
    description:
      'Track plumber hours job by job with GPS and photo proof, with WRAS Approved Plumber and Gas Safe registrations held per worker and ready for audit.',
  },
};
