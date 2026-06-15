/**
 * Scheda-paese Serbia per la risorsa "GPS sui lavoratori in UE".
 *
 * La Serbia NON e' un paese UE: e' un paese candidato. La sua Legge sulla
 * protezione dei dati (LPDP, 87/2018, in vigore dal 2019) rispecchia da vicino
 * il GDPR: modello di responsabilizzazione, niente registrazione preventiva,
 * valutazione d'impatto per i trattamenti a rischio elevato e parere del
 * Poverenik (Garante serbo).
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * testo ufficiale della LPDP, decisione del Poverenik sulla lista dei
 * trattamenti che richiedono una DPIA (Gazzetta 45/2019), analisi PR Legal sul
 * GPS dei veicoli aziendali, pagina istituzionale del Poverenik, cronaca N1 sul
 * caso JKP Mediana di Nis e GDPR come riferimento comparativo.
 *
 * La Serbia non e' federale: l'unica autorita nazionale e' il Poverenik, senza
 * ripartizione regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LPDP = {
  titolo: 'Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale',
  url: 'https://www.poverenik.rs/en/закони4/2970-закон-о-заштити-података-о-личности-сл-гласник-рс-бр-87-2018-од-13-11-2018.html',
};
const FONTE_LISTA_DPIA = {
  titolo:
    'Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)',
  url: 'https://www.pravno-informacioni-sistem.rs/SlGlasnikPortal/eli/rep/sgrs/drugidrzavniorganiorganizacije/odluka/2019/45/1/reg',
};
const FONTE_PR_LEGAL = {
  titolo:
    'PR Legal, GPS sui veicoli aziendali (lista DPIA, voce monitoraggio dipendenti)',
  url: 'https://www.prlegal.rs/sr/da-li-pratite-kretanje-kompanijskih-vozila-gps-om/',
};
const FONTE_POVERENIK = {
  titolo: 'Poverenik (Garante serbo), competenze e contatti',
  url: 'https://www.poverenik.rs/en/o-nama/authority.html',
};
const FONTE_N1_MEDIANA = {
  titolo:
    'N1, GPS su 80 cassonetti del JKP Mediana di Nis (ispezione del Poverenik)',
  url: 'https://n1info.rs/vesti/u-nisu-postavljeni-gps-uredjaji-za-pracenje-kanti-za-djubre-radnici-higijene-se-bune/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const serbia: SchedaPaese = {
  codiceISO: 'RS',
  slugCanonico: 'serbia',
  nome: 'Serbia',
  nomi: {
    it: 'Serbia',
    en: 'Serbia',
    'en-us': 'Serbia',
    'en-gb': 'Serbia',
    'en-au': 'Serbia',
    'en-ie': 'Serbia',
    'en-ca': 'Serbia',
    de: 'Serbien',
    nl: 'Servië',
    fr: 'Serbie',
    es: 'Serbia',
    pt: 'Sérvia',
    da: 'Serbien',
    sv: 'Serbien',
    nb: 'Serbia',
    ru: 'Сербия',
  },
  bandiera: '🇷🇸',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Poverenik (Garante serbo per l\'informazione e la protezione dei dati)',
    portale: FONTE_POVERENIK.url,
    urlFonte: FONTE_POVERENIK.url,
    verificatoIl: '2026-06-15',
    note: 'La Serbia e un paese candidato, fuori dall\'UE, con una legge (LPDP) che rispecchia il GDPR. Unica autorita nazionale, il Poverenik; nessuna ripartizione regionale.',
  },

  checklist: [
    {
      voce: 'Informazione dettagliata e preventiva ai lavoratori (LPDP art. 23)',
      risposta: 'si',
      dettaglio:
        'I lavoratori che useranno i veicoli vanno informati in dettaglio sul trattamento: titolare, finalita, base giuridica, destinatari, conservazione e diritti.',
      fonte: FONTE_LPDP,
    },
    {
      voce: 'Autorizzazione o registrazione preventiva di un\'autorita prima di installare',
      risposta: 'no',
      dettaglio:
        'La LPDP rispecchia il modello di responsabilizzazione del GDPR: la vecchia registrazione e stata abolita.',
      fonte: FONTE_POVERENIK,
    },
    {
      voce: 'Base = interesse legittimo con test tripartito documentato, non il consenso',
      risposta: 'si',
      dettaglio:
        'La base e l\'interesse legittimo del datore, che deve essere chiaramente definito, documentato con un test tripartito e comunicato al lavoratore; il consenso nel rapporto di lavoro e la base piu debole.',
      fonte: FONTE_PR_LEGAL,
    },
    {
      voce: 'Niente tracciamento continuo (grave ingerenza); solo orario e finalita',
      risposta: 'si',
      dettaglio:
        'Per il Poverenik il monitoraggio GPS continuo e una grave ingerenza nella privacy, perche consente il tracciamento in tempo reale di movimenti e comportamenti; le giustificazioni generiche di tutela del patrimonio sono respinte.',
      fonte: FONTE_LPDP,
    },
    {
      voce: 'Valutazione d\'impatto (DPIA) e parere preventivo del Poverenik per il monitoraggio dei dipendenti tramite app o sistemi di tracciamento (lista, LPDP art. 54)',
      risposta: 'si',
      dettaglio:
        'Il trattamento dei dati dei dipendenti tramite app o sistemi che ne tracciano lavoro, movimenti e comunicazione e nella lista che richiede una valutazione d\'impatto; per questi trattamenti il titolare deve, prima di iniziare, svolgere la DPIA e chiedere il parere del Poverenik.',
      fonte: FONTE_LPDP,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Definisci e documenta l\'interesse legittimo con un test tripartito.',
    },
    {
      passo: 2,
      descrizione:
        'Informa in dettaglio i lavoratori che useranno i veicoli (art. 23).',
    },
    {
      passo: 3,
      descrizione:
        'Svolgi la valutazione d\'impatto (DPIA) e chiedi il parere preventivo del Poverenik prima di iniziare.',
    },
    {
      passo: 4,
      descrizione:
        'Limita il GPS all\'orario e alla finalita: niente tracciamento continuo.',
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema in modo proporzionato e rispetta il diritto di opposizione dei lavoratori.',
    },
  ],

  contatti: [
    {
      ente: 'Poverenik',
      portale: FONTE_POVERENIK.url,
      urlFonte: FONTE_POVERENIK.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo:
      'da 50.000 a 2.000.000 RSD per la persona giuridica (circa 425 - 17.000 euro)',
    casoCitato:
      'Non risulta una multa del Poverenik specifica e pubblicata per il GPS sui dipendenti. Nel 2026 il Poverenik ha aperto un\'ispezione straordinaria sul JKP Mediana di Nis, che aveva installato 80 dispositivi GPS sui cassonetti, contestati dai lavoratori dell\'igiene perche ne tracciavano indirettamente i movimenti. La mancata DPIA o richiesta di parere e punita con una sanzione da 50.000 a 2.000.000 RSD per la persona giuridica.',
    urlFonte: FONTE_N1_MEDIANA.url,
  },

  fonti: [
    FONTE_LPDP,
    FONTE_LISTA_DPIA,
    FONTE_PR_LEGAL,
    FONTE_POVERENIK,
    FONTE_N1_MEDIANA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
