/**
 * Scheda-paese Polonia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 22(2) e art. 22(3) del Kodeks pracy (Codice del lavoro), guida UODO alla
 * protezione dei dati sul luogo di lavoro, lista UODO dei trattamenti che
 * richiedono una DPIA, pagina UODO per i reclami, decisione UODO contro Centrum
 * Medyczne Ujastek e GDPR.
 *
 * La Polonia ha un'unica autorita' nazionale, l'UODO, senza ripartizione
 * regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_KP_22_2 = {
  titolo: 'Kodeks pracy, art. 22(2) (monitoraggio)',
  url: 'https://lexlege.pl/kp/art-22-2/',
};
const FONTE_KP_22_3 = {
  titolo: 'Kodeks pracy, art. 22(3) (altre forme di monitoraggio, incl. GPS)',
  url: 'https://lexlege.pl/kp/art-22-3/',
};
const FONTE_UODO_GUIDA = {
  titolo: 'UODO, guida alla protezione dei dati sul luogo di lavoro',
  url: 'https://uodo.gov.pl/pl/file/1469',
};
const FONTE_UODO_DPIA = {
  titolo:
    'UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)',
  url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WMP20190000666',
};
const FONTE_UODO_RECLAMO = {
  titolo: 'UODO, presentare un reclamo',
  url: 'https://www.uodo.gov.pl/pl/153/155',
};
const FONTE_UODO_UJASTEK = {
  titolo:
    'UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)',
  url: 'https://uodo.gov.pl/pl/138/3543',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const polonia: SchedaPaese = {
  codiceISO: 'PL',
  slugCanonico: 'polonia',
  nome: 'Polonia',
  nomi: {
    it: 'Polonia',
    en: 'Poland',
    'en-us': 'Poland',
    'en-gb': 'Poland',
    'en-au': 'Poland',
    'en-ie': 'Poland',
    'en-ca': 'Poland',
    de: 'Polen',
    nl: 'Polen',
    fr: 'Pologne',
    es: 'Polonia',
    pt: 'Polónia',
    da: 'Polen',
    sv: 'Polen',
    nb: 'Polen',
    ru: 'Польша',
  },
  bandiera: '🇵🇱',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'UODO (Urzad Ochrony Danych Osobowych)',
    portale: FONTE_UODO_RECLAMO.url,
    urlFonte: FONTE_UODO_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: "La Polonia ha un'unica autorita nazionale, l'UODO; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Finalita, portata e modalita del monitoraggio fissate in contratto collettivo, regolamento del lavoro o avviso (Kodeks pracy art. 22(2)/22(3))',
      risposta: 'si',
      dettaglio:
        "il Codice del lavoro polacco disciplina espressamente il monitoraggio: finalita, portata e modalita vanno stabilite nel contratto collettivo, nel regolamento del lavoro o in un avviso, e le regole sul monitoraggio video si applicano anche alle altre forme (GPS incluso).",
      fonte: FONTE_KP_22_3,
    },
    {
      voce: 'Informazione preventiva ai lavoratori almeno 2 settimane prima, e per iscritto al neoassunto (art. 22(2) par. 7-8)',
      risposta: 'si',
      dettaglio:
        "il datore informa i lavoratori dell'introduzione del monitoraggio almeno due settimane prima dell'avvio, e consegna l'informazione per iscritto al neoassunto prima di adibirlo al lavoro.",
      fonte: FONTE_KP_22_2,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "non serve un'autorizzazione preventiva dell'UODO; la procedura e interna (regole nel regolamento/avviso, informazione, segnalazione delle aree) piu il rispetto del GDPR.",
      fonte: FONTE_UODO_GUIDA,
    },
    {
      voce: 'Niente tracciamento degli spostamenti privati o fuori orario; proporzionalita (UODO)',
      risposta: 'si',
      dettaglio:
        "per l'UODO il datore non e legittimato a raccogliere dati sugli spostamenti privati del lavoratore (salvo casi eccezionali come furto del veicolo); se il veicolo e usato anche privatamente vanno previste regole e la disattivazione fuori servizio. Il rischio per i diritti deve essere proporzionato allo scopo.",
      fonte: FONTE_UODO_GUIDA,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per i dati di localizzazione dei lavoratori (lista UODO)",
      risposta: 'si',
      dettaglio:
        "la lista UODO dei trattamenti che richiedono una valutazione d'impatto include espressamente il trattamento dei dati di localizzazione dei lavoratori e il monitoraggio sistematico nel contesto del lavoro.",
      fonte: FONTE_UODO_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Fissa finalita, portata e modalita del monitoraggio nel contratto collettivo, nel regolamento del lavoro o in un avviso.',
    },
    {
      passo: 2,
      descrizione:
        "Informa i lavoratori almeno due settimane prima dell'avvio; consegna l'informazione per iscritto al neoassunto prima del lavoro.",
    },
    {
      passo: 3,
      descrizione:
        'Individua una base giuridica valida ai sensi del GDPR (di norma interesse legittimo, non il consenso).',
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per i dati di localizzazione dei lavoratori.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: niente tracciamento privato/fuori orario, finalita coincidente con l\'uso reale.',
    },
  ],

  contatti: [
    {
      ente: 'UODO, reclami',
      portale: FONTE_UODO_RECLAMO.url,
      urlFonte: FONTE_UODO_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'circa 266.000 € (1.145.891 PLN)',
    casoCitato:
      'UODO contro Centrum Medyczne Ujastek (Cracovia, decisione DKN.5131.4.2024): videosorveglianza installata in due stanze di neonatologia senza che ne fossero informati pazienti ne dipendenti, piu sicurezza inadeguata delle registrazioni. Multa complessiva 1.145.891 PLN (circa 266.000 euro). Non e un caso di GPS, ma riguarda il monitoraggio dei dipendenti non comunicato.',
    urlFonte: FONTE_UODO_UJASTEK.url,
  },

  fonti: [
    FONTE_KP_22_2,
    FONTE_KP_22_3,
    FONTE_UODO_GUIDA,
    FONTE_UODO_DPIA,
    FONTE_UODO_RECLAMO,
    FONTE_UODO_UJASTEK,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
