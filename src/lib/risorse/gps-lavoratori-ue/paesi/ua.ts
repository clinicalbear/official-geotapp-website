/**
 * Scheda-paese Ucraina per la risorsa "GPS sui lavoratori in UE".
 *
 * ATTENZIONE: l'Ucraina NON e' uno Stato membro dell'UE (e' un paese candidato)
 * e NON applica il GDPR. La disciplina vigente e' la Legge "Sulla protezione dei
 * dati personali" n. 2297-VI del 2010, fortemente incentrata sul consenso. Una
 * riforma di allineamento al GDPR (disegno di legge 8153) e' in attesa ma NON e'
 * in vigore. Va inoltre tenuto presente il contesto di guerra, che rende
 * l'applicazione della normativa limitata e irregolare.
 *
 * Contenuti basati su fonti verificate e citate nella sezione "Fonti": Legge
 * 2297-VI, pagina del Difensore civico (Garante) ucraino, scheda ICLG sulla
 * protezione dei dati in Ucraina e GDPR come riferimento comparativo. Nessun
 * numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti citate.
const FONTE_LEGGE_2297 = {
  titolo:
    "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)",
  url: 'https://zakon.rada.gov.ua/laws/show/en/2297-17',
};
const FONTE_OMBUDSMAN = {
  titolo: 'Difensore civico (Garante ucraino), protezione dei dati personali',
  url: 'https://ombudsman.gov.ua/en/zahist-personalnih-danih',
};
const FONTE_ICLG = {
  titolo:
    'ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)',
  url: 'https://iclg.com/practice-areas/data-protection-laws-and-regulations/ukraine/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const ucraina: SchedaPaese = {
  codiceISO: 'UA',
  slugCanonico: 'ucraina',
  nome: 'Ucraina',
  nomi: {
    it: 'Ucraina',
    en: 'Ukraine',
    'en-us': 'Ukraine',
    'en-gb': 'Ukraine',
    'en-au': 'Ukraine',
    'en-ie': 'Ukraine',
    'en-ca': 'Ukraine',
    de: 'Ukraine',
    nl: 'Oekraïne',
    fr: 'Ukraine',
    es: 'Ucrania',
    pt: 'Ucrânia',
    da: 'Ukraine',
    sv: 'Ukraina',
    nb: 'Ukraina',
    ru: 'Украина',
  },
  bandiera: '🇺🇦',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Difensore civico del Parlamento ucraino (Garante per la protezione dei dati)',
    portale: FONTE_OMBUDSMAN.url,
    urlFonte: FONTE_OMBUDSMAN.url,
    verificatoIl: '2026-06-15',
    note: "L'Ucraina e' un paese candidato, fuori dall'UE, e non applica il GDPR. Vale la Legge 2297-VI del 2010, consent-centric; una riforma allineata al GDPR e' in attesa. Autorita': il Difensore civico (Ombudsman). Contesto di guerra: l'applicazione e' limitata e irregolare.",
  },

  checklist: [
    {
      voce: 'Base giuridica valida (art. 11) e informazione preventiva ai lavoratori',
      risposta: 'si',
      dettaglio:
        "Il trattamento dei dati dei lavoratori (incluso il GPS) richiede una delle sei basi dell'art. 11 della Legge 2297-VI; i lavoratori vanno informati su titolare, dati, finalita', diritti e destinatari, alla raccolta o entro 30 giorni lavorativi.",
      fonte: FONTE_LEGGE_2297,
    },
    {
      voce: "Autorizzazione o registrazione preventiva di un'autorita' prima di installare",
      risposta: 'no',
      dettaglio:
        "La registrazione obbligatoria delle banche dati e' stata abolita dal 1 gennaio 2014; la notifica dei trattamenti a rischio non si applica ai dati del rapporto di lavoro (esenti).",
      fonte: FONTE_LEGGE_2297,
    },
    {
      voce: 'Base = di norma il consenso documentato del lavoratore',
      risposta: 'si',
      dettaglio:
        "A differenza del GDPR, la legge ucraina si basa molto sul consenso come base principale; per il GPS conviene informare in anticipo e documentare il consenso, oltre a definire una finalita' scritta.",
      fonte: FONTE_LEGGE_2297,
    },
    {
      voce: 'Trattamento limitato alla finalita\' dichiarata (limitazione della finalita\')',
      risposta: 'si',
      dettaglio:
        "I dati vanno trattati solo nei limiti della finalita' dichiarata; i dipendenti del titolare possono usarli solo per i propri compiti professionali.",
      fonte: FONTE_ICLG,
    },
    {
      voce: "Valutazione d'impatto (DPIA)",
      risposta: 'no',
      dettaglio:
        "La legge attuale non richiede una valutazione d'impatto; lo prevedera' solo l'eventuale riforma allineata al GDPR (ddl 8153), non ancora in vigore.",
      fonte: FONTE_ICLG,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        "Individua una base giuridica valida (di norma il consenso) e definisci una finalita' scritta.",
    },
    {
      passo: 2,
      descrizione:
        "Informa i lavoratori su dati, finalita', diritti e destinatari (alla raccolta o entro 30 giorni lavorativi).",
    },
    {
      passo: 3,
      descrizione: 'Documenta il consenso del lavoratore per la geolocalizzazione.',
    },
    {
      passo: 4,
      descrizione: "Limita il trattamento alla sola finalita' dichiarata.",
    },
    {
      passo: 5,
      descrizione:
        "Tieni presente la riforma in arrivo (ddl 8153): se entra in vigore, introdurra' regole in stile GDPR (informazione preventiva, niente decisioni solo automatizzate, DPIA).",
    },
  ],

  contatti: [
    {
      ente: 'Difensore civico, protezione dei dati',
      portale: FONTE_OMBUDSMAN.url,
      urlFonte: FONTE_OMBUDSMAN.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'sanzioni attuali modeste (circa 150 - 380 euro)',
    casoCitato:
      "Non risulta una decisione ucraina specifica e pubblicata sul GPS sui dipendenti, e l'applicazione e' limitata. Le sanzioni amministrative attuali sono modeste (circa 150 - 380 euro). La riforma in attesa (ddl 8153) porterebbe sanzioni in stile GDPR (fino a 150 milioni di UAH o 8% del fatturato), ma non e' in vigore.",
    urlFonte: FONTE_ICLG.url,
  },

  fonti: [FONTE_LEGGE_2297, FONTE_OMBUDSMAN, FONTE_ICLG, FONTE_GDPR],

  aggiornatoIl: '2026-06-15',
};
