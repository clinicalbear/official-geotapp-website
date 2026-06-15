/**
 * Scheda-paese Ungheria per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 11/A del Codice del lavoro ungherese (Mt.), guida del NAIH sui trattamenti
 * sul luogo di lavoro (incluso il GPS), lista NAIH dei trattamenti che richiedono
 * una valutazione d'impatto, decisione NAIH del caso Auchan (NAIH/2018/412/2/H)
 * e GDPR.
 *
 * L'Ungheria ha un'unica autorita nazionale, il NAIH: nessuna ripartizione
 * regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_MT_11A = {
  titolo: 'Codice del lavoro (Mt.), art. 11/A (controllo dei lavoratori)',
  url: 'https://net.jogtar.hu/jogszabaly?docid=a1200001.tv',
};
const FONTE_NAIH_GUIDA = {
  titolo: 'NAIH, guida sui trattamenti sul luogo di lavoro (GPS)',
  url: 'https://www.naih.hu/files/2016_11_15_Tajekoztato_munkahelyi_adatkezelesek.pdf',
};
const FONTE_NAIH_DPIA = {
  titolo:
    "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto",
  url: 'https://www.naih.hu/hatasvizsgalati-lista',
};
const FONTE_NAIH_AUCHAN = {
  titolo: 'NAIH, sanzione Auchan (monitoraggio dei dipendenti)',
  url: 'https://www.naih.hu/files/NAIH-2018-412-H_hatarozat.pdf',
};
const FONTE_NAIH = {
  titolo: 'NAIH (Garante ungherese), pagina ufficiale',
  url: 'https://www.naih.hu',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const ungheria: SchedaPaese = {
  codiceISO: 'HU',
  slugCanonico: 'ungheria',
  nome: 'Ungheria',
  nomi: {
    it: 'Ungheria',
    en: 'Hungary',
    'en-us': 'Hungary',
    'en-gb': 'Hungary',
    'en-au': 'Hungary',
    'en-ie': 'Hungary',
    'en-ca': 'Hungary',
    de: 'Ungarn',
    nl: 'Hongarije',
    fr: 'Hongrie',
    es: 'Hungría',
    pt: 'Hungria',
    da: 'Ungarn',
    sv: 'Ungern',
    nb: 'Ungarn',
    ru: 'Венгрия',
  },
  bandiera: '🇭🇺',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'NAIH (Garante ungherese per la protezione dei dati)',
    portale: FONTE_NAIH.url,
    urlFonte: FONTE_NAIH.url,
    verificatoIl: '2026-06-15',
    note: "L'Ungheria ha un'unica autorita nazionale, il NAIH; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Informazione scritta e preventiva ai lavoratori sul monitoraggio e i mezzi tecnici (Codice del lavoro art. 11/A)',
      risposta: 'si',
      dettaglio:
        'Il lavoratore puo essere controllato solo per condotte connesse al rapporto di lavoro; il datore puo usare mezzi tecnici, ma deve informarlo prima e per iscritto.',
      fonte: FONTE_MT_11A,
    },
    {
      voce: 'Il monitoraggio riguarda solo condotte connesse al rapporto di lavoro, non la vita privata (art. 11/A)',
      risposta: 'si',
      dettaglio:
        'Il controllo non puo ledere la dignita ne riguardare la vita privata del lavoratore; sui dispositivi aziendali il datore puo accedere solo ai dati connessi al lavoro.',
      fonte: FONTE_MT_11A,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        'Non serve un\'autorizzazione preventiva del NAIH; il datore valuta da se base giuridica e proporzionalita prima dell\'introduzione.',
      fonte: FONTE_NAIH_GUIDA,
    },
    {
      voce: 'Base = interesse legittimo con test di bilanciamento documentato; GPS solo in orario, non fuori orario, con opt-out',
      risposta: 'si',
      dettaglio:
        'La base e l\'interesse legittimo, non il consenso; il datore deve svolgere prima il test di bilanciamento. Per il NAIH il GPS localizza il veicolo per il lavoro, non segue il lavoratore: solo in orario, niente controllo fuori orario, e il lavoratore deve poterlo spegnere.',
      fonte: FONTE_NAIH_GUIDA,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il monitoraggio della posizione e dell'attivita dei lavoratori (lista NAIH)",
      risposta: 'si',
      dettaglio:
        "La lista NAIH include il monitoraggio del lavoro dei dipendenti e il trattamento di dati di posizione che indica un monitoraggio sistematico tra i casi che richiedono una valutazione d'impatto.",
      fonte: FONTE_NAIH_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        "Svolgi il test di bilanciamento dell'interesse legittimo prima dell'introduzione.",
    },
    {
      passo: 2,
      descrizione:
        'Informa i lavoratori per iscritto e in anticipo sul monitoraggio e sui mezzi tecnici (art. 11/A + art. 13 GDPR).',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio della posizione dei lavoratori.",
    },
    {
      passo: 4,
      descrizione:
        'Limita il GPS alla localizzazione del veicolo per il lavoro: solo in orario, niente controllo fuori orario.',
    },
    {
      passo: 5,
      descrizione:
        'Prevedi un opt-out per spegnere il GPS quando il veicolo resta al lavoratore fuori orario.',
    },
  ],

  contatti: [
    {
      ente: 'NAIH',
      portale: FONTE_NAIH.url,
      urlFonte: FONTE_NAIH.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '15.000.000 HUF (circa 37.500 euro)',
    casoCitato:
      "NAIH contro Auchan Magyarorszag (gennaio 2018, caso NAIH/2018/412/2/H): videosorveglianza sul luogo di lavoro senza una base giuridica adeguata, informazione carente ai lavoratori e violazione della limitazione della finalita. Multa 15.000.000 HUF. Non e un caso di GPS, ma e la sanzione di riferimento del NAIH sul monitoraggio dei dipendenti.",
    urlFonte: FONTE_NAIH_AUCHAN.url,
  },

  fonti: [
    FONTE_MT_11A,
    FONTE_NAIH_GUIDA,
    FONTE_NAIH_DPIA,
    FONTE_NAIH_AUCHAN,
    FONTE_NAIH,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
