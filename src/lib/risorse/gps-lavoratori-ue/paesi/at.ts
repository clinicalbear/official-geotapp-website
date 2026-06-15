/**
 * Scheda-paese Austria per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * § 96 e § 96a dell'Arbeitsverfassungsgesetz (ArbVG) sulle misure di controllo e
 * sui sistemi che trattano dati dei lavoratori, regolamento DSFA-V sulla
 * valutazione d'impatto, decisione della Datenschutzbehorde (DSB) 2022-0.021.739
 * sul GPS dei veicoli aziendali, procedura di reclamo della DSB e GDPR.
 *
 * L'Austria e' uno Stato federale ma ha un'unica autorita garante nazionale, la
 * DSB con sede a Vienna: nessuna ripartizione per Land, a differenza della
 * Germania. Per questo federale=false. Nessun numero, URL o autorita' e'
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ARBVG_96 = {
  titolo:
    'Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)',
  url: 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008329&Paragraf=96',
};
const FONTE_ARBVG_96A = {
  titolo:
    'Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)',
  url: 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008329&Paragraf=96a',
};
const FONTE_DSFA_V = {
  titolo:
    "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto",
  url: 'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20010375',
};
const FONTE_DSB_DECISIONE = {
  titolo:
    'Datenschutzbehorde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)',
  url: 'https://ris.bka.gv.at/Dokumente/Dsk/DSBT_20220301_2022_0_021_739_00/DSBT_20220301_2022_0_021_739_00.html',
};
const FONTE_DSB_RECLAMO = {
  titolo: 'Datenschutzbehorde (DSB), procedura di reclamo',
  url: 'https://dsb.gv.at/ueber-die-datenschutzbehoerde/beschwerdeverfahren',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const austria: SchedaPaese = {
  codiceISO: 'AT',
  slugCanonico: 'austria',
  nome: 'Austria',
  nomi: {
    it: 'Austria',
    en: 'Austria',
    'en-us': 'Austria',
    'en-gb': 'Austria',
    'en-au': 'Austria',
    'en-ie': 'Austria',
    'en-ca': 'Austria',
    de: 'Österreich',
    nl: 'Oostenrijk',
    fr: 'Autriche',
    es: 'Austria',
    pt: 'Áustria',
    da: 'Østrig',
    sv: 'Österrike',
    nb: 'Østerrike',
    ru: 'Австрия',
  },
  bandiera: '🇦🇹',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Datenschutzbehorde (DSB)',
    portale: FONTE_DSB_RECLAMO.url,
    urlFonte: FONTE_DSB_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: "L'Austria e' uno Stato federale ma ha un'unica autorita garante nazionale, la DSB con sede a Vienna: nessuna ripartizione per Land (a differenza della Germania).",
  },

  checklist: [
    {
      voce: 'Consenso del consiglio aziendale (Betriebsrat) per misure di controllo che toccano la dignita (ArbVG § 96 Abs. 1 Z 3)',
      risposta: 'dipende',
      dettaglio:
        "Le misure di controllo e i sistemi tecnici idonei a controllare i lavoratori che toccano la dignita umana richiedono il consenso del consiglio aziendale (Betriebsvereinbarung obbligatoria): senza, sono inammissibili. Vale dove esiste un Betriebsrat; in sua assenza serve un accordo individuale ex § 10 AVRAG.",
      fonte: FONTE_ARBVG_96,
    },
    {
      voce: "Betriebsvereinbarung per sistemi che trattano dati personali dei lavoratori oltre l'anagrafica (ArbVG § 96a)",
      risposta: 'dipende',
      dettaglio:
        "I sistemi che raccolgono e trattano automaticamente dati personali dei lavoratori oltre l'anagrafica e la qualifica richiedono una Betriebsvereinbarung (o, in assenza di consiglio aziendale, il consenso individuale).",
      fonte: FONTE_ARBVG_96A,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva: il vecchio registro DVR e' stato abolito col GDPR; vale la responsabilizzazione (registro dei trattamenti e valutazione d'impatto quando richiesta).",
      fonte: FONTE_DSFA_V,
    },
    {
      voce: 'Divieto di monitoraggio GPS permanente; ammesso solo se lo scopo non e raggiungibile con mezzi piu miti',
      risposta: 'si',
      dettaglio:
        "Nel caso austriaco di riferimento la DSB ha ritenuto illecito il tracciamento permanente di veicoli aziendali perche lo scopo era raggiungibile con mezzi piu miti, e ne ha ordinato la cessazione; i controlli fuori dall'orario di lavoro sono comunque inammissibili.",
      fonte: FONTE_DSB_DECISIONE,
    },
    {
      voce: "Valutazione d'impatto (DSFA) per la geolocalizzazione dei lavoratori",
      risposta: 'si',
      dettaglio:
        "Il regolamento austriaco sulla valutazione d'impatto include i trattamenti che valutano comportamento, luogo o spostamenti della persona e quelli su dati di lavoratori; la geolocalizzazione dei dipendenti rientra tra i casi che richiedono una valutazione d'impatto.",
      fonte: FONTE_DSFA_V,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Se esiste un consiglio aziendale, ottieni il suo consenso con una Betriebsvereinbarung prima di attivare (ArbVG § 96 / § 96a); in sua assenza, un accordo individuale ex § 10 AVRAG.',
    },
    {
      passo: 2,
      descrizione:
        'Verifica che lo scopo non sia raggiungibile con mezzi piu miti del tracciamento permanente.',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DSFA) per la geolocalizzazione dei lavoratori.",
    },
    {
      passo: 4,
      descrizione:
        'Informa i lavoratori e individua una base giuridica valida (art. 6 GDPR).',
    },
    {
      passo: 5,
      descrizione:
        "Configura il sistema: niente tracciamento permanente, nessun controllo fuori dall'orario di lavoro.",
    },
  ],

  contatti: [
    {
      ente: 'Datenschutzbehorde (DSB), reclamo',
      portale: FONTE_DSB_RECLAMO.url,
      urlFonte: FONTE_DSB_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo:
      'ordine di cessazione (nessuna multa in denaro); rischio GDPR fino a 20 milioni di euro o 4% del fatturato (art. 83)',
    casoCitato:
      "Datenschutzbehorde, decisione del 1 marzo 2022 (2022-0.021.739): un'azienda aveva installato tracker GPS permanenti su 15 veicoli aziendali a uso misto; la DSB ha ritenuto il trattamento illecito perche lo scopo era raggiungibile con mezzi piu miti e ne ha ordinato la cessazione immediata, senza multa in denaro.",
    urlFonte: FONTE_DSB_DECISIONE.url,
  },

  fonti: [
    FONTE_ARBVG_96,
    FONTE_ARBVG_96A,
    FONTE_DSFA_V,
    FONTE_DSB_DECISIONE,
    FONTE_DSB_RECLAMO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
