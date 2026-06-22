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
};

export function buildTrialPayload(email: string, language: string): TrialPayload {
  return {
    email: email.trim(),
    plan: TRIAL_DEFAULTS.plan,
    businessUsers: TRIAL_DEFAULTS.businessUsers,
    timetrackerSeats: TRIAL_DEFAULTS.timetrackerSeats,
    language,
  };
}
