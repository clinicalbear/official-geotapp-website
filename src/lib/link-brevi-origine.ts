/**
 * Da dove e' arrivata un'apertura di `/s/<codice>`, senza identificare nessuno.
 *
 * Serve a un esperimento: quanto del traffico dei social porta un referrer leggibile? Facebook e
 * Instagram dentro l'app spesso non ne mandano, LinkedIn e YouTube mandano solo il loro dominio e
 * mai il post. Prima di costruire pagine d'arrivo per piattaforma si guarda cosa arriva davvero.
 *
 * COSA SI TIENE: l'host del referrer (mai il percorso, mai la query) e un si/no "e' un robot".
 * COSA NON SI TIENE: user agent, IP, cookie. Il si/no si ricava dall'user agent al volo e l'user
 * agent non viene scritto. Il robot va separato perche' le anteprime di Meta e LinkedIn aprono ogni
 * link da datacenter e gonfiavano il contatore (vedi la memoria sul contatore dei link brevi).
 */

const ROBOT = /bot|crawler|spider|facebookexternalhit|facebookcatalog|whatsapp|slurp|preview|embedly|skypeuripreview|bingpreview|headless|python-requests|curl\//i;

/** Host del referrer in minuscolo e senza "www.", oppure "_" se manca o non si legge. */
export function hostDelReferrer(referer: string | null | undefined): string {
  if (!referer) return '_';
  try {
    const h = new URL(referer).hostname.toLowerCase().replace(/^www\./, '');
    const pulito = h.replace(/[^a-z0-9.-]/g, '').slice(0, 60);
    return pulito || '_';
  } catch {
    return '_';
  }
}

export function eRobot(userAgent: string | null | undefined): boolean {
  // Senza user agent non e' un browser: nessun browser lo omette.
  if (!userAgent) return true;
  return ROBOT.test(userAgent);
}

/** Chiave KV dell'esperimento. Famiglia `r:` a parte: non rompe chi legge le chiavi `l:`. */
export function chiaveOrigine(p: {
  giorno: string;
  paese: string;
  etichetta: string;
  referer: string | null | undefined;
  userAgent: string | null | undefined;
  id: string;
}): string {
  return `r:${p.giorno}:${p.paese}:${p.etichetta}:${hostDelReferrer(p.referer)}:${eRobot(p.userAgent) ? 'robot' : 'umano'}:${p.id}`;
}
