/**
 * Scheda-paese Finlandia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge sulla protezione della privacy nella vita lavorativa (759/2004), FAQ del
 * Garante finlandese (Tietosuojavaltuutettu) sulla vita lavorativa, lista del
 * Garante dei trattamenti che richiedono una DPIA, pagina del Garante per
 * segnalare una violazione, sanzione del Garante sui dati di localizzazione usati
 * per la rilevazione orario (2021) e GDPR.
 *
 * La Finlandia non e' uno Stato federale: ha un'unica autorita' nazionale, il
 * Garante (Tietosuojavaltuutettu), senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LEGGE_759 = {
  titolo:
    'Legge sulla protezione della privacy nella vita lavorativa (759/2004) - traduzione ufficiale',
  url: 'https://www.finlex.fi/en/legislation/translations/2004/eng/759',
};
const FONTE_GARANTE_FAQ = {
  titolo:
    'Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa',
  url: 'https://tietosuoja.fi/en/faq-working-life',
};
const FONTE_GARANTE_DPIA = {
  titolo:
    'Garante finlandese, lista dei trattamenti che richiedono una DPIA',
  url: 'https://tietosuoja.fi/en/list-of-processing-operations-which-require-dpia',
};
const FONTE_GARANTE_SEGNALAZIONE = {
  titolo: 'Garante finlandese, segnalare una violazione',
  url: 'https://tietosuoja.fi/en/report-of-fault-in-personal-data-processing',
};
const FONTE_GARANTE_SANZIONE = {
  titolo:
    'Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)',
  url: 'https://tietosuoja.fi/en/-/administrative-fine-imposed-on-higher-education-institution-for-data-protection-violations-connected-to-processing-of-location-data-recorded-as-part-of-working-hours-monitoring',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const finlandia: SchedaPaese = {
  codiceISO: 'FI',
  slugCanonico: 'finlandia',
  nome: 'Finlandia',
  nomi: {
    it: 'Finlandia',
    en: 'Finland',
    'en-us': 'Finland',
    'en-gb': 'Finland',
    'en-au': 'Finland',
    'en-ie': 'Finland',
    'en-ca': 'Finland',
    de: 'Finnland',
    nl: 'Finland',
    fr: 'Finlande',
    es: 'Finlandia',
    pt: 'Finlândia',
    da: 'Finland',
    sv: 'Finland',
    nb: 'Finland',
    ru: 'Финляндия',
  },
  bandiera: '🇫🇮',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Ufficio del Garante per la protezione dei dati (Tietosuojavaltuutetun toimisto)',
    portale: FONTE_GARANTE_SEGNALAZIONE.url,
    urlFonte: FONTE_GARANTE_SEGNALAZIONE.url,
    verificatoIl: '2026-06-15',
    note: "La Finlandia ha un'unica autorita' nazionale, il Garante (Tietosuojavaltuutettu); nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Procedura di cooperazione coi rappresentanti prima di introdurre il monitoraggio tecnico, inclusa la localizzazione',
      risposta: 'dipende',
      dettaglio:
        "La determinazione della posizione dei dipendenti e' una forma di sorveglianza tecnica che va trattata nella procedura di cooperazione sul luogo di lavoro prima dell'adozione. La negoziazione vale sopra una soglia dimensionale (50 dipendenti dal 1 luglio 2025); sotto, resta comunque un diritto dei lavoratori di essere sentiti.",
      fonte: FONTE_GARANTE_FAQ,
    },
    {
      voce: 'Solo dati direttamente necessari al rapporto di lavoro; il requisito di necessita non si deroga col consenso (Legge 759/2004)',
      risposta: 'si',
      dettaglio:
        "Il datore puo' trattare solo i dati direttamente necessari al rapporto di lavoro; nemmeno il consenso del lavoratore autorizza il trattamento di dati che non soddisfano questo requisito.",
      fonte: FONTE_LEGGE_759,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva del Garante; la vigilanza e' successiva.",
      fonte: FONTE_GARANTE_FAQ,
    },
    {
      voce: 'La localizzazione non va usata per il controllo dell\'orario salvo casi limitati; proporzionalita',
      risposta: 'si',
      dettaglio:
        "Per il Garante i dati di posizione non vanno usati di norma per monitorare l'orario di lavoro, salvo casi limitati (es. lavoro da remoto senza alternative meno invasive), e solo con una base e una necessita' adeguate.",
      fonte: FONTE_GARANTE_FAQ,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per i dati di localizzazione usati per il monitoraggio sistematico",
      risposta: 'si',
      dettaglio:
        "La lista del Garante richiede una valutazione d'impatto quando i dati di localizzazione sono usati per il monitoraggio sistematico delle persone o trattati su larga scala.",
      fonte: FONTE_GARANTE_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Tratta scopo, adozione e metodi del monitoraggio nella procedura di cooperazione coi rappresentanti (o garantisci ai lavoratori il diritto di essere sentiti).',
    },
    {
      passo: 2,
      descrizione:
        'Limita la raccolta ai dati direttamente necessari al rapporto di lavoro.',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per i dati di localizzazione usati per il monitoraggio sistematico.",
    },
    {
      passo: 4,
      descrizione:
        'Informa i lavoratori del contenuto della decisione e delle modalita di sorveglianza.',
    },
    {
      passo: 5,
      descrizione:
        "Non usare la localizzazione per il controllo dell'orario salvo casi limitati e giustificati.",
    },
  ],

  contatti: [
    {
      ente: 'Garante, segnalazioni',
      portale: FONTE_GARANTE_SEGNALAZIONE.url,
      urlFonte: FONTE_GARANTE_SEGNALAZIONE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '25.000 €',
    casoCitato:
      "Garante finlandese (collegio sanzioni), 2021: a un istituto di istruzione superiore e' stata inflitta una multa di 25.000 euro per aver trattato i dati di localizzazione dei dipendenti senza necessita' e senza base giuridica, tramite un'app destinata alla registrazione dell'orario di lavoro; ordinata anche la cessazione del trattamento.",
    urlFonte: FONTE_GARANTE_SANZIONE.url,
  },

  fonti: [
    FONTE_LEGGE_759,
    FONTE_GARANTE_FAQ,
    FONTE_GARANTE_DPIA,
    FONTE_GARANTE_SEGNALAZIONE,
    FONTE_GARANTE_SANZIONE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
