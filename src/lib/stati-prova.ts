/**
 * I tre stati della prova, lato sito. A47 del piano del 15/09.
 *
 * Sono gli stessi tre che stanno nel rapportino PDF
 * (`firebase-functions-clean/src/lib/statiDellaProva.ts`, che e' la fonte), nel
 * verificatore e in Flow. Quando il visitatore vede la pastiglia "Sigillato"
 * sul sito e poi la ritrova identica sul PDF che riceve e nel verificatore che
 * apre, sta guardando la stessa cosa tre volte: e' il punto.
 *
 * `docs/design-system/controlla-stati.mjs` verifica che le quattro superfici
 * dicano la stessa parola in tutte e undici le lingue.
 */

export type StatoProva = 'registrato' | 'sigillato' | 'verifica-fallita';

export const TINTE: Record<StatoProva, { fondo: string; inchiostro: string; bordo: string }> = {
  registrato: { fondo: '#F2F2EE', inchiostro: '#4A5259', bordo: '#CFD1CC' },
  sigillato: { fondo: '#EAF2EC', inchiostro: '#144A27', bordo: '#3F8C5A' },
  'verifica-fallita': { fondo: '#FAECEA', inchiostro: '#7C1F17', bordo: '#C65246' },
};

export const PAROLE: Record<string, Record<StatoProva, string>> = {
  it: { registrato: 'Registrato', sigillato: 'Sigillato', 'verifica-fallita': 'Verifica fallita' },
  en: { registrato: 'Recorded', sigillato: 'Sealed', 'verifica-fallita': 'Verification failed' },
  de: { registrato: 'Erfasst', sigillato: 'Gesiegelt', 'verifica-fallita': 'Prüfung fehlgeschlagen' },
  es: { registrato: 'Registrado', sigillato: 'Sellado', 'verifica-fallita': 'Verificación fallida' },
  fr: { registrato: 'Enregistré', sigillato: 'Scellé', 'verifica-fallita': 'Vérification échouée' },
  pt: { registrato: 'Registado', sigillato: 'Selado', 'verifica-fallita': 'Verificação falhada' },
  nl: { registrato: 'Vastgelegd', sigillato: 'Verzegeld', 'verifica-fallita': 'Verificatie mislukt' },
  da: { registrato: 'Registreret', sigillato: 'Forseglet', 'verifica-fallita': 'Verifikation mislykkedes' },
  sv: { registrato: 'Registrerad', sigillato: 'Plomberad', 'verifica-fallita': 'Verifieringen misslyckades' },
  nb: { registrato: 'Registrert', sigillato: 'Forseglet', 'verifica-fallita': 'Verifiseringen mislyktes' },
  // 'опечатано' e non 'заверено': заверить in russo e' autenticare davanti al
  // notaio, e la scheda claim vieta la certificazione.
  ru: { registrato: 'Записано', sigillato: 'Опечатано', 'verifica-fallita': 'Проверка не пройдена' },
};

/** La parola dello stato; l'inglese per le varianti regionali e per l'ignoto. */
export function parolaStato(stato: StatoProva, locale: string | null | undefined): string {
  const base = String(locale ?? 'en').split('-')[0];
  return (PAROLE[base] ?? PAROLE.en)[stato];
}
