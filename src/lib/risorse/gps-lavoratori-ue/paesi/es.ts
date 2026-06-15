/**
 * Scheda-paese Spagna per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 90 LOPDGDD, artt. 20.3 e 64 dell'Estatuto de los Trabajadores, FAQ AEPD
 * sul GPS nelle auto aziendali, lista AEPD dei trattamenti che richiedono una
 * valutazione d'impatto (art. 35.4 GDPR), guida AEPD sulla protezione dei dati
 * nei rapporti di lavoro, sanzione AEPD contro Ares Capital (PS/00454/2024) e GDPR.
 *
 * La Spagna non e' uno Stato federale: per le aziende private vigila sempre
 * l'AEPD nazionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LOPDGDD_90 = {
  titolo:
    'Ley Organica 3/2018 (LOPDGDD), art. 90 (geolocalizzazione sul lavoro)',
  url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673',
};
const FONTE_ESTATUTO = {
  titolo: 'Estatuto de los Trabajadores, artt. 20.3 e 64',
  url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430',
};
const FONTE_AEPD_FAQ_GPS = {
  titolo: 'AEPD, FAQ sul GPS nelle auto aziendali usate dai lavoratori',
  url: 'https://www.aepd.es/preguntas-frecuentes/3-proteccion-de-datos-en-el-ambito-laboral/FAQ-0306-se-puede-instalar-gps-en-los-coches-de-la-empresa-que-utilizan-los-trabajadores',
};
const FONTE_AEPD_DPIA = {
  titolo:
    "AEPD, lista dei trattamenti che richiedono una valutazione d'impatto (art. 35.4 GDPR)",
  url: 'https://www.aepd.es/documento/listas-dpia-es-35-4.pdf',
};
const FONTE_AEPD_GUIDA = {
  titolo: 'AEPD, guida sulla protezione dei dati nei rapporti di lavoro',
  url: 'https://www.aepd.es/documento/la-proteccion-de-datos-en-las-relaciones-laborales.pdf',
};
const FONTE_AEPD_ARES = {
  titolo: 'AEPD, sanzione PS/00454/2024 (Ares Capital, 200.000 €)',
  url: 'https://www.aepd.es/documento/ps-00454-2024.pdf',
};
const FONTE_AEPD = {
  titolo: 'AEPD, Agencia Espanola de Proteccion de Datos',
  url: 'https://www.aepd.es/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const spagna: SchedaPaese = {
  codiceISO: 'ES',
  slugCanonico: 'spagna',
  nome: 'Spagna',
  nomi: {
    it: 'Spagna',
    en: 'Spain',
    'en-us': 'Spain',
    'en-gb': 'Spain',
    'en-au': 'Spain',
    'en-ie': 'Spain',
    'en-ca': 'Spain',
    de: 'Spanien',
    nl: 'Spanje',
    fr: 'Espagne',
    es: 'España',
    pt: 'Espanha',
    da: 'Spanien',
    sv: 'Spanien',
    nb: 'Spania',
    ru: 'Испания',
  },
  bandiera: '🇪🇸',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AEPD (Agencia Espanola de Proteccion de Datos)',
    portale: FONTE_AEPD.url,
    urlFonte: FONTE_AEPD.url,
    verificatoIl: '2026-06-15',
    note: "Per le aziende private l'autorita competente e sempre l'AEPD nazionale. Alcune comunita autonome (Catalogna APDCAT, Paesi Baschi AVPD) hanno un'autorita propria, ma riguarda soprattutto il settore pubblico della regione.",
  },

  checklist: [
    {
      voce: 'Informazione espressa, chiara e inequivocabile ai lavoratori prima di attivare (LOPDGDD art. 90)',
      risposta: 'si',
      dettaglio:
        "L'art. 90 LOPDGDD consente di trattare i dati di geolocalizzazione per le funzioni di controllo dell'art. 20.3 dello Statuto dei Lavoratori, ma solo dopo aver informato in modo espresso, chiaro e inequivocabile i lavoratori (e, se esistono, i loro rappresentanti) sull'esistenza e le caratteristiche dei dispositivi e sui loro diritti.",
      fonte: FONTE_LOPDGDD_90,
    },
    {
      voce: 'Informazione ai rappresentanti dei lavoratori (Estatuto art. 64)',
      risposta: 'dipende',
      dettaglio:
        "L'art. 64 dello Statuto da al comitato d'impresa il diritto di essere informato e di emettere un rapporto preventivo sull'introduzione di sistemi di organizzazione e controllo del lavoro. Vale solo dove esistono rappresentanti dei lavoratori.",
      fonte: FONTE_ESTATUTO,
    },
    {
      voce: "Autorizzazione di un'autorita del lavoro prima di installare",
      risposta: 'no',
      dettaglio:
        "La Spagna non prevede un'autorizzazione amministrativa o di un'autorita del lavoro per installare un sistema di geolocalizzazione. Le garanzie sono l'informazione ex art. 90 LOPDGDD, l'informazione ai rappresentanti (art. 64) e il GDPR.",
      fonte: FONTE_AEPD_FAQ_GPS,
    },
    {
      voce: 'Divieto di sorveglianza continua: minimizzazione e proporzionalita',
      risposta: 'si',
      dettaglio:
        "L'AEPD richiede che la geolocalizzazione sia proporzionata e non usata per una sorveglianza permanente; se la finalita e il registro orario, i dati possono indicare solo inizio e fine dell'attivita, non la posizione in ogni momento, e il sistema non deve essere operativo finita la giornata.",
      fonte: FONTE_AEPD_GUIDA,
    },
    {
      voce: "Valutazione d'impatto (EIPD) per geolocalizzazione sistematica ed esaustiva",
      risposta: 'si',
      dettaglio:
        "La lista AEPD include tra i trattamenti che richiedono una valutazione d'impatto quelli che comportano osservazione, monitoraggio, geolocalizzazione o controllo dell'interessato in modo sistematico ed esaustivo.",
      fonte: FONTE_AEPD_DPIA,
    },
    {
      voce: 'Base giuridica valida (art. 20.3 Statuto / esecuzione del contratto, GDPR art. 6)',
      risposta: 'si',
      dettaglio:
        "Il trattamento si fonda sul potere di controllo del datore (art. 20.3 Statuto) e sull'esecuzione del rapporto di lavoro, nei limiti del GDPR; non e ammessa una finalita piu ampia che consenta l'osservazione continua dei lavoratori.",
      fonte: FONTE_AEPD_FAQ_GPS,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Informa i lavoratori in modo espresso, chiaro e inequivocabile prima di attivare (art. 90 LOPDGDD).',
    },
    {
      passo: 2,
      descrizione:
        'Se esistono rappresentanti dei lavoratori, informali e raccogli il loro rapporto preventivo (art. 64 Statuto).',
    },
    {
      passo: 3,
      descrizione:
        "Definisci una base giuridica valida (potere di controllo art. 20.3 Statuto / esecuzione del contratto).",
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (EIPD) se la geolocalizzazione e sistematica ed esaustiva.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema con minimizzazione: niente sorveglianza continua, disattivazione fuori orario; se serve il registro orario, solo inizio e fine.',
    },
  ],

  contatti: [
    {
      ente: 'AEPD, sede elettronica',
      portale: FONTE_AEPD.url,
      urlFonte: FONTE_AEPD.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '200.000 €',
    casoCitato:
      "AEPD contro Ares Capital S.A. (PS/00454/2024), 4 marzo 2026: la societa obbligava gli autisti a installare sul telefono personale app che raccoglievano in continuo la geolocalizzazione (oltre a foto e audio/video). Violazione della minimizzazione (art. 5.1.c), della base giuridica (art. 6.1, consenso non libero) e dell'informazione (art. 13 GDPR).",
    urlFonte: FONTE_AEPD_ARES.url,
  },

  fonti: [
    FONTE_LOPDGDD_90,
    FONTE_ESTATUTO,
    FONTE_AEPD_FAQ_GPS,
    FONTE_AEPD_DPIA,
    FONTE_AEPD_GUIDA,
    FONTE_AEPD_ARES,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
