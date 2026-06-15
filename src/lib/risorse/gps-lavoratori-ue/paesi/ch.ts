/**
 * Scheda-paese Svizzera per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Svizzera NON fa parte dell'UE ne dello SEE, quindi il GDPR non
 * si applica direttamente. Il quadro giuridico e' interno: la nuova legge sulla
 * protezione dei dati (nLPD / revFADP), il Codice delle obbligazioni (CO art.
 * 328b) e soprattutto l'Ordinanza 3 sulla legge sul lavoro (OLT 3) art. 26, che
 * vieta i sistemi destinati a sorvegliare il comportamento dei lavoratori.
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * sentenza del Tribunale federale ATF 130 II 425 sul GPS sui veicoli aziendali,
 * pagine del PFPDT/FDPIC sui mezzi tecnici di sorveglianza, sul trattamento dei
 * dati da parte del datore (CO art. 328b) e sulla valutazione d'impatto (nLPD
 * art. 22), oltre al GDPR come riferimento comparativo.
 *
 * Per i datori privati vigila l'autorita' federale (PFPDT/FDPIC); le autorita'
 * cantonali coprono gli enti pubblici cantonali. Nessun numero, URL o autorita'
 * e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ATF_130_II_425 = {
  titolo:
    'Tribunale federale, ATF 130 II 425 (GPS sui veicoli dei dipendenti; cita OLT 3 art. 26)',
  url: 'https://www.bger.ch/ext/eurospider/live/fr/php/aza/http/index.php?highlight_docid=atf://130-II-425:fr&lang=fr&type=show_document&zoom=YES',
};
const FONTE_FDPIC_SORVEGLIANZA = {
  titolo: 'PFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro',
  url: 'https://www.edoeb.admin.ch/fr/moyens-techniques-de-surveillance-sur-le-lieu-de-travail',
};
const FONTE_FDPIC_DATORE = {
  titolo:
    'PFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)',
  url: 'https://www.edoeb.admin.ch/fr/traitement-des-donnees-par-lemployeur',
};
const FONTE_FDPIC_VALUTAZIONE = {
  titolo:
    "PFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)",
  url: 'https://www.edoeb.admin.ch/fr/analyse-dimpact-relative-a-la-protection-des-donnees-personnelles',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const svizzera: SchedaPaese = {
  codiceISO: 'CH',
  slugCanonico: 'svizzera',
  nome: 'Svizzera',
  nomi: {
    it: 'Svizzera',
    en: 'Switzerland',
    'en-us': 'Switzerland',
    'en-gb': 'Switzerland',
    'en-au': 'Switzerland',
    'en-ie': 'Switzerland',
    'en-ca': 'Switzerland',
    de: 'Schweiz',
    nl: 'Zwitserland',
    fr: 'Suisse',
    es: 'Suiza',
    pt: 'Suíça',
    da: 'Schweiz',
    sv: 'Schweiz',
    nb: 'Sveits',
    ru: 'Швейцария',
  },
  bandiera: '🇨🇭',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'PFPDT / FDPIC (Preposto federale alla protezione dei dati e alla trasparenza)',
    portale: FONTE_FDPIC_SORVEGLIANZA.url,
    urlFonte: FONTE_FDPIC_SORVEGLIANZA.url,
    verificatoIl: '2026-06-15',
    note: "La Svizzera e' fuori dall'UE. Per i datori privati e' competente l'autorita' federale (PFPDT/FDPIC); le autorita' cantonali coprono gli enti pubblici cantonali.",
  },

  checklist: [
    {
      voce: 'Divieto di sistemi destinati a sorvegliare il comportamento dei lavoratori (OLT 3, art. 26)',
      risposta: 'si',
      dettaglio:
        "Regola cardine svizzera, piu' severa del GDPR: e' vietato usare sistemi destinati a sorvegliare il comportamento dei lavoratori sul posto di lavoro. Se servono per altri motivi (sicurezza, produzione, organizzazione), vanno concepiti in modo da non ledere salute e liberta' di movimento, e un sistema e' vietato se mira unicamente o essenzialmente a sorvegliare il comportamento.",
      fonte: FONTE_ATF_130_II_425,
    },
    {
      voce: "Trattamento dei dati solo se riguarda l'idoneita' al lavoro o e' necessario al contratto (CO art. 328b)",
      risposta: 'si',
      dettaglio:
        "Il datore puo' trattare i dati del lavoratore solo se riguardano la sua idoneita' all'impiego o sono necessari all'esecuzione del contratto, nel rispetto di buona fede e proporzionalita'.",
      fonte: FONTE_FDPIC_DATORE,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita' prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva del PFPDT; il datore valuta da se' liceita' e proporzionalita'.",
      fonte: FONTE_FDPIC_SORVEGLIANZA,
    },
    {
      voce: 'Informazione e consultazione preventiva dei lavoratori; niente sorveglianza permanente del comportamento',
      risposta: 'si',
      dettaglio:
        "I lavoratori vanno informati in anticipo; e' vietata una sorveglianza continua, periodica o a campione volta a controllare il comportamento; va scelto il mezzo proporzionato e meno lesivo.",
      fonte: FONTE_FDPIC_SORVEGLIANZA,
    },
    {
      voce: "Valutazione d'impatto (AIPD, nLPD art. 22) se il trattamento comporta un rischio elevato",
      risposta: 'si',
      dettaglio:
        "La nLPD impone una valutazione d'impatto quando il trattamento e' suscettibile di comportare un rischio elevato per la personalita' o i diritti fondamentali, come la sorveglianza sistematica.",
      fonte: FONTE_FDPIC_VALUTAZIONE,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Verifica che il sistema non sia destinato a sorvegliare il comportamento dei lavoratori (OLT 3 art. 26): se lo e\', e\' vietato.',
    },
    {
      passo: 2,
      descrizione:
        "Accertati che i dati trattati riguardino l'idoneita' al lavoro o siano necessari al contratto (CO art. 328b).",
    },
    {
      passo: 3,
      descrizione: 'Informa e consulta in anticipo i lavoratori.',
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (AIPD) se il trattamento comporta un rischio elevato.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema in modo proporzionato e differito (non un tracciamento in tempo reale della persona).',
    },
  ],

  contatti: [
    {
      ente: 'PFPDT/FDPIC',
      portale: FONTE_FDPIC_DATORE.url,
      urlFonte: FONTE_FDPIC_DATORE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo:
      "fino a 250.000 CHF, a carico della persona fisica responsabile (non l'azienda), inflitte dai tribunali cantonali",
    casoCitato:
      "Tribunale federale, ATF 130 II 425: il GPS sui veicoli aziendali e' ammesso solo se proporzionato, per ragioni legittime e con informazione preventiva, ed e' vietato se mira unicamente o essenzialmente a sorvegliare il comportamento del lavoratore (OLT 3 art. 26, piu' severo del GDPR). In Svizzera le multe della nLPD arrivano a 250.000 CHF e colpiscono la persona fisica responsabile, non l'impresa.",
    urlFonte: FONTE_ATF_130_II_425.url,
  },

  fonti: [
    FONTE_ATF_130_II_425,
    FONTE_FDPIC_SORVEGLIANZA,
    FONTE_FDPIC_DATORE,
    FONTE_FDPIC_VALUTAZIONE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
