/**
 * Scheda-paese Montenegro per la risorsa "GPS sui lavoratori in UE".
 *
 * Il Montenegro NON e' uno Stato membro dell'UE: e' un paese candidato. La legge
 * sulla protezione dei dati personali (ZZPL, 79/08 e successive modifiche fino a
 * 77/24) e' solo PARZIALMENTE allineata al GDPR; una nuova legge pienamente
 * allineata e' ancora una bozza nel 2026.
 *
 * Particolarita' unica rispetto al GDPR: il Montenegro mantiene un'autorizzazione
 * preventiva. L'art. 27 ZZPL richiede il consenso dell'autorita' garante (AZLP)
 * prima di costituire un archivio di dati.
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * testo ufficiale inglese della ZZPL, posizione del Consiglio dell'AZLP sull'uso
 * del GPS nei veicoli di servizio (29.04.2025), contatti e moduli dell'AZLP, GDPR
 * come riferimento comparativo. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZZPL = {
  titolo: 'Legge sulla protezione dei dati (ZZPL), testo ufficiale inglese',
  url: 'https://www.azlp.me/docs/zajednicka/zakoni/personaldataprotectionlaweng.pdf',
};
const FONTE_AZLP_GPS = {
  titolo:
    'AZLP, posizione del Consiglio sull\'uso del GPS nei veicoli di servizio (29.04.2025)',
  url: 'https://www.azlp.me/storage/docs/zastita/Stavovi%20Savjeta/Upotreba%20GPS-a%20u%20slu%C5%BEbenim%20vozilima.docx',
};
const FONTE_AZLP_CONTATTI = {
  titolo: 'AZLP (Garante montenegrino), contatti',
  url: 'https://www.azlp.me/en/contact',
};
const FONTE_AZLP_MODULI = {
  titolo: 'AZLP, moduli (richiesta di tutela dei diritti)',
  url: 'https://www.azlp.me/en/forms',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR), riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const montenegro: SchedaPaese = {
  codiceISO: 'ME',
  slugCanonico: 'montenegro',
  nome: 'Montenegro',
  nomi: {
    it: 'Montenegro',
    en: 'Montenegro',
    'en-us': 'Montenegro',
    'en-gb': 'Montenegro',
    'en-au': 'Montenegro',
    'en-ie': 'Montenegro',
    'en-ca': 'Montenegro',
    de: 'Montenegro',
    nl: 'Montenegro',
    fr: 'Monténégro',
    es: 'Montenegro',
    pt: 'Montenegro',
    da: 'Montenegro',
    sv: 'Montenegro',
    nb: 'Montenegro',
    ru: 'Черногория',
  },
  bandiera: '🇲🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AZLP (Agenzia per la protezione dei dati personali e il libero accesso all\'informazione)',
    portale: FONTE_AZLP_MODULI.url,
    urlFonte: FONTE_AZLP_CONTATTI.url,
    verificatoIl: '2026-06-15',
    note: "Il Montenegro e' un paese candidato, fuori dall'UE, con una legge solo parzialmente allineata al GDPR. Unica autorita' nazionale, l'AZLP. Particolarita': serve il consenso preventivo dell'autorita' prima di costituire l'archivio dati (art. 27).",
  },

  checklist: [
    {
      voce: 'Informazione scritta e preventiva ai lavoratori e regole interne sul GPS (ZZPL art. 20; posizione AZLP)',
      risposta: 'si',
      dettaglio:
        "Il datore deve informare i lavoratori su finalita', metodi, dati raccolti e diritti, e adottare regole interne sul trattamento GPS con una valutazione preliminare delle misure di sicurezza.",
      fonte: FONTE_AZLP_GPS,
    },
    {
      voce: 'Consenso preventivo dell\'autorita\' garante prima di costituire l\'archivio dati (ZZPL art. 27)',
      risposta: 'si',
      dettaglio:
        "A differenza del GDPR, il Montenegro mantiene un'autorizzazione ex ante: prima di costituire un archivio di dati il titolare deve ottenere il consenso dell'autorita' garante (se non risponde in 30 giorni, il consenso si intende dato).",
      fonte: FONTE_ZZPL,
    },
    {
      voce: 'Base = interesse legittimo (art. 10), non il consenso; per i veicoli privati consenso scritto e solo orario',
      risposta: 'si',
      dettaglio:
        "La base e' l'interesse legittimo; per i veicoli privati usati a fini di servizio serve il consenso scritto del lavoratore e il GPS va limitato all'orario di lavoro.",
      fonte: FONTE_AZLP_GPS,
    },
    {
      voce: 'Niente decisioni sui dipendenti basate solo su trattamento automatizzato (ZZPL art. 15a)',
      risposta: 'si',
      dettaglio:
        "Le decisioni su risultati, affidabilita' o comportamento dei dipendenti non possono basarsi unicamente su un trattamento automatizzato; il lavoratore deve poter esprimere la propria posizione.",
      fonte: FONTE_AZLP_GPS,
    },
    {
      voce: 'Valutazione d\'impatto (DPIA) formale',
      risposta: 'dipende',
      dettaglio:
        "La legge attuale non prevede una DPIA formale in stile GDPR; il sostituto e' l'autorizzazione preventiva dell'art. 27 piu' le misure di sicurezza e la valutazione preliminare di adeguatezza (artt. 24 e 26).",
      fonte: FONTE_ZZPL,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        "Definisci finalita' e metodi del GPS e adotta regole interne con valutazione preliminare delle misure di sicurezza.",
    },
    {
      passo: 2,
      descrizione:
        "Ottieni il consenso preventivo dell'autorita' garante prima di costituire l'archivio dati (art. 27).",
    },
    {
      passo: 3,
      descrizione:
        "Informa per iscritto i lavoratori; per i veicoli privati raccogli il consenso scritto e limita il GPS all'orario.",
    },
    {
      passo: 4,
      descrizione:
        'Non basare decisioni sui dipendenti unicamente su un trattamento automatizzato (art. 15a).',
    },
    {
      passo: 5,
      descrizione: "Limita il GPS all'orario e alla finalita' dichiarata.",
    },
  ],

  contatti: [
    {
      ente: 'AZLP, tutela dei diritti',
      portale: FONTE_AZLP_MODULI.url,
      urlFonte: FONTE_AZLP_MODULI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'fino a 20 milioni di euro o 4% del fatturato (rischio generale)',
    casoCitato:
      "Non risulta una multa dell'AZLP specifica e pubblicata per il GPS sui dipendenti. La posizione di riferimento e' quella del Consiglio dell'AZLP del 2025: il GPS sui veicoli di servizio e' un controllo legittimo, ma serve definirne finalita' e metodi, informare i lavoratori, adottare regole interne e ottenere il consenso preventivo dell'autorita' per l'archivio dati.",
    urlFonte: FONTE_AZLP_GPS.url,
  },

  fonti: [
    FONTE_ZZPL,
    FONTE_AZLP_GPS,
    FONTE_AZLP_CONTATTI,
    FONTE_AZLP_MODULI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
