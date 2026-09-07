/**
 * Traduzione degli errori del server nella lingua della pagina.
 *
 * Perche' esiste (misurato il 07/09/2026): il 31/08 un visitatore da Manchester
 * ha premuto "Inizia" tre volte sulla pagina en-gb e tre volte si e' preso
 * "Indirizzo email non valido" — in italiano. In GA4 l'errore sta lì, tre eventi
 * `trial_form_error` con `cta_locale: en-gb`. Se ne e' andato.
 *
 * Il server risponde con `{ code, error }`: `code` e' stabile e non si traduce,
 * `error` e' la frase italiana di riserva. Qui il codice diventa una chiave del
 * dizionario della pagina; quando non lo conosciamo si mostra la frase del
 * server, come prima. La stessa cosa vale per `trial_form_error`: nell'evento va
 * il CODICE, non il testo, altrimenti lo stesso guasto arriva in GA4 spezzato in
 * undici lingue e non si riesce piu' a contarlo.
 */

/** Codici del server che hanno una frase nostra nel dizionario `trial`. */
export const TRIAL_ERROR_DICT_KEYS: Record<string, string> = {
  email_required: 'error_email_required',
  invalid_email: 'error_invalid_email',
  disposable_email: 'error_disposable_email',
  domain_not_allowed: 'error_domain_not_allowed',
  trial_already_active: 'error_trial_already_active',
  trial_already_used: 'error_trial_already_used',
  email_already_registered: 'error_email_already_registered',
  too_many_attempts: 'error_too_many_attempts',
  ip_blocked: 'error_too_many_attempts',
  bot_speed: 'error_bot_speed',
  captcha_failed: 'error_captcha',
  internal_error: 'error_message',
};

/**
 * Frase da mostrare in caso di errore, nell'ordine: traduzione nostra del
 * codice → frase del server → messaggio generico della pagina.
 */
export function trialErrorMessage(
  code: string | undefined | null,
  dict: Record<string, string>,
  serverError?: string | null,
): string {
  const key = code ? TRIAL_ERROR_DICT_KEYS[code] : undefined;
  const translated = key ? dict[key] : undefined;
  return translated || serverError || dict.error_message || '';
}

/**
 * Valore da mandare a GA4 nel parametro `error`. Il codice quando c'e', perche'
 * e' l'unica cosa confrontabile fra lingue diverse; altrimenti il testo, tagliato
 * (GA4 tronca i parametri a 100 caratteri e un messaggio lungo arriva mozzo).
 */
export function trialErrorForAnalytics(code: string | undefined | null, message?: string | null): string {
  if (code) return code;
  return (message || 'unknown').slice(0, 100);
}
