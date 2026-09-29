// Default del trial "ad accesso pieno" (esperimento 2026-06-22).
// Il form chiede SOLO l'email: piano e licenze non si scelgono all'ingresso,
// si decidono alla conversione. Durante i 14 giorni l'utente ha accesso pieno:
// piano Business (utenti Flow illimitati) + un cap alto di licenze TimeTracker.
// Il backend /api/trial/start accetta già la sola email con questi valori
// (BUSINESS bypassa il limite TT; maxUsers = businessUsers).
export const TRIAL_DEFAULTS = {
  plan: 'BUSINESS',
  businessUsers: 9999, // utenti Flow "illimitati" per il trial
  timetrackerSeats: 50, // cap alto anti-abuso, "illimitato" per qualsiasi PMI reale
} as const;

/**
 * A19: scaglioni di quanti operai stanno sul campo. Facoltativo, una riga sola
 * di bottoni, non allunga il modulo. Serve a dimensionare e a scrivere
 * follow-up mirati: oggi di un trial non sappiamo nemmeno se ha tre operai o
 * sessanta, e la stessa email va a tutti e due.
 * I tagli seguono il listino: 25 e' il confine del primo scaglione di prezzo.
 */
export const FASCE_OPERATORI = ['1-5', '6-20', '21-60', '60+'] as const;
export type FasciaOperatori = (typeof FASCE_OPERATORI)[number];

/**
 * Da dove e' arrivato chi apre il trial (29/09/2026). Fino a oggi il CRM non lo
 * sapeva per nessuno dei trial: `referralSource` era stato creato il 15/09 e
 * restava vuoto su tutte le aziende.
 *
 * Si legge solo cio' che il browser ha gia' davanti al momento dell'invio, niente
 * di nuovo salvato sul dispositivo: la CTA d'origine (gia' tenuta dieci minuti in
 * sessionStorage da analytics.ts), le UTM dell'indirizzo della pagina trial e la
 * pagina da cui si arriva. Della pagina di provenienza si tiene solo host e
 * percorso: la query puo' contenere un indirizzo email o un token, e nel CRM non
 * deve finire. Limite onesto: e' l'ultimo passo, non il primo. Chi arriva da
 * Medium, legge tre articoli e poi apre il trial risulta arrivato dall'ultimo
 * articolo.
 */
export type TrialOrigine = {
  cta?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  ref?: string;
};

const CORTO = 100;

function pulito(v: string | null | undefined): string | undefined {
  const s = (v ?? '').trim().slice(0, CORTO);
  return s ? s : undefined;
}

export function leggiOrigine(
  search: string,
  referrer: string,
  cta?: string | null,
): TrialOrigine | undefined {
  const p = new URLSearchParams(search);
  let ref: string | undefined;
  try {
    if (referrer) {
      const u = new URL(referrer);
      ref = pulito(`${u.hostname}${u.pathname}`);
    }
  } catch {
    ref = undefined;
  }
  const o: TrialOrigine = {
    cta: pulito(cta),
    utm_source: pulito(p.get('utm_source')),
    utm_medium: pulito(p.get('utm_medium')),
    utm_campaign: pulito(p.get('utm_campaign')),
    ref,
  };
  const pieno = Object.fromEntries(Object.entries(o).filter(([, v]) => v)) as TrialOrigine;
  return Object.keys(pieno).length ? pieno : undefined;
}

export type TrialPayload = {
  email: string;
  plan: 'BUSINESS';
  businessUsers: number;
  timetrackerSeats: number;
  language: string;
  /** A19: facoltativo. Assente = la persona non ha risposto, non "zero". */
  fieldEmployeesBand?: FasciaOperatori;
  /** Da dove e' arrivato, se si sa. Assente = ingresso diretto o dato non disponibile. */
  origine?: TrialOrigine;
  // Anti-bot signals read server-side by /api/trial/start:
  // `hp` = honeypot (hidden field; only bots fill it),
  // `elapsedMs` = time from page load to submit (bot-speed signal),
  // `turnstileToken` = token del captcha invisibile Cloudflare Turnstile.
  // hp ed elapsedMs sono SEMPRE inviati: la loro assenza lato server ora significa
  // "richiesta non arrivata dal form" (POST diretto di un bot) e viene bloccata.
  hp?: string;
  elapsedMs?: number;
  turnstileToken?: string;
};

export function buildTrialPayload(
  email: string,
  language: string,
  antiBot?: { hp?: string; elapsedMs?: number; turnstileToken?: string },
  fieldEmployeesBand?: FasciaOperatori | '',
  origine?: TrialOrigine,
): TrialPayload {
  return {
    email: email.trim(),
    plan: TRIAL_DEFAULTS.plan,
    businessUsers: TRIAL_DEFAULTS.businessUsers,
    timetrackerSeats: TRIAL_DEFAULTS.timetrackerSeats,
    language,
    ...(fieldEmployeesBand ? { fieldEmployeesBand } : {}),
    ...(origine ? { origine } : {}),
    hp: antiBot?.hp ?? '',
    ...(antiBot?.elapsedMs != null ? { elapsedMs: antiBot.elapsedMs } : {}),
    ...(antiBot?.turnstileToken ? { turnstileToken: antiBot.turnstileToken } : {}),
  };
}
