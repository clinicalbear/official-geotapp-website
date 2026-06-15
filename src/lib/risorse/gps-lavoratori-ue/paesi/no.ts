/**
 * Scheda-paese Norvegia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Arbeidsmiljoloven cap. 9 (misure di controllo, §§ 9-1 e 9-2), guida del
 * Datatilsynet su GPS e tracciamento dei veicoli aziendali, guida del
 * Datatilsynet su quando svolgere una valutazione d'impatto, decisione
 * Personvernnemnda PVN-2017-07 e GDPR.
 *
 * La Norvegia (SEE) ha un'unica autorita garante nazionale, il Datatilsynet:
 * non c'e' alcuna ripartizione regionale. Nessun numero, URL o autorita' e'
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_AML_KAP9 = {
  titolo:
    'Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)',
  url: 'https://lovdata.no/nav/lov/2005-06-17-62/kap9',
};
const FONTE_DATATILSYNET_VEICOLI = {
  titolo:
    'Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali',
  url: 'https://www.datatilsynet.no/personvern-pa-ulike-omrader/personvern-pa-arbeidsplassen/overvaking-kjoretoy/',
};
const FONTE_DATATILSYNET_DPIA = {
  titolo:
    "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto",
  url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/vurdering-av-personvernkonsekvenser/nar-ma-man-gjennomfore-en-vurdering-av-personvernkonsekvenser/',
};
const FONTE_DATATILSYNET = {
  titolo: 'Datatilsynet (autorita garante norvegese)',
  url: 'https://www.datatilsynet.no/en/',
};
const FONTE_PVN_2017_07 = {
  titolo:
    'Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)',
  url: 'https://personvernnemnda.no/2017/08/26/pvn-2017-07-arbeidsgivers-bruk-av-innsamlede-opplysninger-til-et-nytt-formal-overtredelsesgebyr/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const norvegia: SchedaPaese = {
  codiceISO: 'NO',
  slugCanonico: 'norvegia',
  nome: 'Norvegia',
  nomi: {
    it: 'Norvegia',
    en: 'Norway',
    'en-us': 'Norway',
    'en-gb': 'Norway',
    'en-au': 'Norway',
    'en-ie': 'Norway',
    'en-ca': 'Norway',
    de: 'Norwegen',
    nl: 'Noorwegen',
    fr: 'Norvège',
    es: 'Noruega',
    pt: 'Noruega',
    da: 'Norge',
    sv: 'Norge',
    nb: 'Norge',
    ru: 'Норвегия',
  },
  bandiera: '🇳🇴',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Datatilsynet (autorita garante norvegese)',
    portale: FONTE_DATATILSYNET.url,
    urlFonte: FONTE_DATATILSYNET.url,
    verificatoIl: '2026-06-15',
    note: "La Norvegia (SEE) ha un'unica autorita nazionale, il Datatilsynet; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Motivo oggettivo (saklig grunn) e non sproporzionato (Arbeidsmiljoloven § 9-1)',
      risposta: 'si',
      dettaglio:
        "Una misura di controllo (incluso il GPS) e ammessa solo se ha un motivo oggettivo nelle esigenze dell'impresa e non comporta un onere sproporzionato per il lavoratore.",
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: 'Discussione preventiva con i rappresentanti (tillitsvalgte) (§ 9-2)',
      risposta: 'dipende',
      dettaglio:
        'Il datore deve discutere il piu presto possibile la misura con i rappresentanti dei lavoratori. Vale dove esistono rappresentanti (tillitsvalgte).',
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        'Il capitolo 9 non prevede alcuna autorizzazione preventiva del Datatilsynet; la liceita e responsabilita del titolare.',
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: 'Informazione preventiva ai lavoratori (scopo, conseguenze, durata; § 9-2 + art. 13 GDPR)',
      risposta: 'si',
      dettaglio:
        'Prima di attivare, il datore informa i lavoratori su scopo della misura, conseguenze pratiche (come sara svolta) e durata prevista.',
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: 'GPS sui veicoli solo per la finalita dichiarata, senza riuso per valutare il rendimento',
      risposta: 'si',
      dettaglio:
        'Il GPS sui veicoli e normalmente una misura di controllo: lo scopo va specificato, e i dati raccolti non possono essere riusati per valutare il rendimento dei dipendenti.',
      fonte: FONTE_DATATILSYNET_VEICOLI,
    },
    {
      voce: 'Valutazione d\'impatto per il monitoraggio sistematico dei dipendenti e i dati di localizzazione',
      risposta: 'si',
      dettaglio:
        "Il Datatilsynet richiede sempre una valutazione d'impatto per il monitoraggio sistematico dei dipendenti, e per i dati di localizzazione combinati con altri criteri di rischio.",
      fonte: FONTE_DATATILSYNET_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Verifica un motivo oggettivo (saklig grunn) e che la misura non sia sproporzionata (§ 9-1).',
    },
    {
      passo: 2,
      descrizione:
        'Se esistono rappresentanti dei lavoratori, discuti con loro il piu presto possibile la misura (§ 9-2).',
    },
    {
      passo: 3,
      descrizione:
        'Informa i lavoratori su scopo, conseguenze e durata prima di attivare.',
    },
    {
      passo: 4,
      descrizione:
        'Svolgi la valutazione d\'impatto per il monitoraggio sistematico o i dati di localizzazione.',
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: solo finalita dichiarata, niente riuso per valutare il rendimento.',
    },
  ],

  contatti: [
    {
      ente: 'Datatilsynet',
      portale: FONTE_DATATILSYNET.url,
      urlFonte: FONTE_DATATILSYNET.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '100.000 NOK (circa 8.500 euro)',
    casoCitato:
      "Personvernnemnda, PVN-2017-07: un datore confrontava i dati GPS del veicolo aziendale con i fogli ore del dipendente, a sua insaputa, per controllare se avesse lavorato le ore dichiarate, riusando i dati per un nuovo scopo senza base giuridica. Deciso sotto la vecchia legge pre-GDPR, ma il principio (vietato riusare il GPS per controllare le ore) e confermato dalle linee guida attuali del Datatilsynet.",
    urlFonte: FONTE_PVN_2017_07.url,
  },

  fonti: [
    FONTE_AML_KAP9,
    FONTE_DATATILSYNET_VEICOLI,
    FONTE_DATATILSYNET_DPIA,
    FONTE_DATATILSYNET,
    FONTE_PVN_2017_07,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
