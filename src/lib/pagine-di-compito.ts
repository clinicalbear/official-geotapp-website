/**
 * Le pagine dove chi arriva sta FACENDO una cosa, non leggendo.
 *
 * Su queste un modale non e' un invito: e' un ostacolo che si mette davanti al
 * compito. Il 15/09/2026, durante il giro completo sul telefono, il modale del
 * sondaggio si e' aperto sopra il modulo del trial coprendo il campo email e il
 * captcha (`docs/collaudo/giro-completo-2026-09-15/01-modulo-compilato.png`):
 * lo stesso identico danno del modale sicurezza rimosso il 25/08, che era
 * costato tre settimane di iscrizioni.
 *
 * L'elenco e' di NOMI DI PAGINA, non di percorsi interi, perche' ogni pagina
 * vive sia sotto la lingua (`/it/trial/`) sia senza (`/trial/`).
 */
export const PAGINE_DI_COMPITO: readonly string[] = [
  'trial',          // iscrizione: la superficie di conversione principale
  'abbonati',       // pagamento
  'checkout',
  'login',
  'demo',           // modulo di richiesta demo
  'contact',
  'success',        // e' appena andata a buon fine: non gli si chiede altro
  'survey',         // invitarlo al sondaggio mentre e' NEL sondaggio
  'newsletter',
  'delete-account', // sta cancellando: e' l'ultimo momento per un popup
  'verify-report',  // sta verificando un documento, spesso non e' un cliente
];

/**
 * True se il percorso e' una pagina di compito.
 *
 * Guarda **solo i primi due segmenti**, che e' dove sta il nome della pagina
 * (`/trial/` oppure `/it/trial/`). Guardarli tutti darebbe falsi positivi su
 * uno slug di blog che si chiama per caso `demo` o `contact`.
 */
export function ePaginaDiCompito(pathname: string): boolean {
  const segmenti = pathname.split('/').filter(Boolean).slice(0, 2);
  return segmenti.some((s) => PAGINE_DI_COMPITO.includes(s.toLowerCase()));
}
