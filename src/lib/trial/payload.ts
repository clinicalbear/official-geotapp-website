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

export type TrialPayload = {
  email: string;
  plan: 'BUSINESS';
  businessUsers: number;
  timetrackerSeats: number;
  language: string;
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
): TrialPayload {
  return {
    email: email.trim(),
    plan: TRIAL_DEFAULTS.plan,
    businessUsers: TRIAL_DEFAULTS.businessUsers,
    timetrackerSeats: TRIAL_DEFAULTS.timetrackerSeats,
    language,
    hp: antiBot?.hp ?? '',
    ...(antiBot?.elapsedMs != null ? { elapsedMs: antiBot.elapsedMs } : {}),
    ...(antiBot?.turnstileToken ? { turnstileToken: antiBot.turnstileToken } : {}),
  };
}
