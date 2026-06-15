/**
 * Scheda-paese Portogallo per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 20 del Codigo do Trabalho (mezzi di sorveglianza a distanza), Deliberacao
 * 7680/2014 della CNPD sulla geolocalizzazione nel contesto lavorativo, art. 28
 * della Lei 58/2019 sulle relazioni di lavoro, lista CNPD dei trattamenti che
 * richiedono una valutazione d'impatto, portale CNPD per le segnalazioni e GDPR.
 *
 * Il Portogallo non e' uno Stato federale: l'autorita' garante e' unica e
 * nazionale (CNPD), senza ripartizioni regionali. Nessun numero, URL o
 * autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_CT_20 = {
  titolo: 'Codigo do Trabalho, art. 20 (mezzi di sorveglianza a distanza)',
  url: 'https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=1047&tabela=leis',
};
const FONTE_CNPD_7680 = {
  titolo:
    'CNPD, Deliberacao 7680/2014 (geolocalizzazione nel contesto lavorativo)',
  url: 'https://www.cnpd.pt/media/zvxmdfad/del_7680-2014_geo_laboral.pdf',
};
const FONTE_LEI_58_28 = {
  titolo: 'Lei 58/2019, art. 28 (relazioni di lavoro)',
  url: 'https://files.dre.pt/1s/2019/08/15100/0000300040.pdf',
};
const FONTE_CNPD_AIPD = {
  titolo: "CNPD, valutazione d'impatto sulla protezione dei dati",
  url: 'https://www.cnpd.pt/organizacoes/outras-obrigacoes/avaliacao-de-impacto/',
};
const FONTE_CNPD_SEGNALAZIONI = {
  titolo: 'CNPD, presentare una segnalazione',
  url: 'https://www.cnpd.pt/cidadaos/participacoes/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const portogallo: SchedaPaese = {
  codiceISO: 'PT',
  slugCanonico: 'portogallo',
  nome: 'Portogallo',
  nomi: {
    it: 'Portogallo',
    en: 'Portugal',
    'en-us': 'Portugal',
    'en-gb': 'Portugal',
    'en-au': 'Portugal',
    'en-ie': 'Portugal',
    'en-ca': 'Portugal',
    de: 'Portugal',
    nl: 'Portugal',
    fr: 'Portugal',
    es: 'Portugal',
    pt: 'Portugal',
    da: 'Portugal',
    sv: 'Portugal',
    nb: 'Portugal',
    ru: 'Португалия',
  },
  bandiera: '🇵🇹',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'CNPD (Comissao Nacional de Protecao de Dados)',
    portale: FONTE_CNPD_SEGNALAZIONI.url,
    urlFonte: FONTE_CNPD_SEGNALAZIONI.url,
    verificatoIl: '2026-06-15',
    note: "Il Portogallo ha un'unica autorita nazionale, la CNPD; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: "Informazione ai lavoratori sull'esistenza e finalita della sorveglianza (art. 20 Codigo do Trabalho)",
      risposta: 'si',
      dettaglio:
        "Il datore deve informare i lavoratori dell'esistenza e dello scopo dei mezzi di sorveglianza usati.",
      fonte: FONTE_CT_20,
    },
    {
      voce: 'Divieto di usare la sorveglianza a distanza per controllare il rendimento del lavoratore (art. 20 CT)',
      risposta: 'si',
      dettaglio:
        "La sorveglianza a distanza non puo servire a controllare la prestazione professionale; e ammessa solo per la protezione e sicurezza di persone e beni o per particolari esigenze dell'attivita.",
      fonte: FONTE_CT_20,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Con il GDPR e venuta meno la vecchia autorizzazione preventiva della CNPD; resta un controllo a posteriori. Nota: l'art. 21 CT non e stato esplicitamente abrogato e la dottrina e divisa, ma in pratica l'autorizzazione preventiva non viene piu richiesta.",
      fonte: FONTE_LEI_58_28,
    },
    {
      voce: 'Geolocalizzazione proporzionata, limitata all\'orario di lavoro, con modo privato fuori orario',
      risposta: 'si',
      dettaglio:
        "Per la CNPD la geolocalizzazione non puo localizzare il lavoratore ne monitorarne il rendimento, non puo estendersi a pause e riposi, e il lavoratore deve poter passare al modo privato fuori dall'orario. Il consenso del lavoratore non e una base valida.",
      fonte: FONTE_CNPD_7680,
    },
    {
      voce: "Valutazione d'impatto (AIPD) per il tracciamento della localizzazione dei lavoratori",
      risposta: 'si',
      dettaglio:
        "La lista CNPD richiede una valutazione d'impatto per i trattamenti che permettono di tracciare la localizzazione o i comportamenti dei lavoratori con effetto di valutazione o classificazione.",
      fonte: FONTE_CNPD_AIPD,
    },
    {
      voce: 'Parere della commissione dei lavoratori, se esiste',
      risposta: 'dipende',
      dettaglio:
        'Dove esiste una commissione dei lavoratori, va richiesto il suo parere.',
      fonte: FONTE_LEI_58_28,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        "Informa i lavoratori sull'esistenza e lo scopo della sorveglianza (art. 20 CT).",
    },
    {
      passo: 2,
      descrizione:
        'Verifica la finalita: ammessa solo per sicurezza di persone/beni o esigenze particolari dell\'attivita, mai per controllare il rendimento.',
    },
    {
      passo: 3,
      descrizione:
        'Se esiste una commissione dei lavoratori, richiedi il suo parere.',
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (AIPD) per il tracciamento della localizzazione.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema con minimizzazione: niente tracciamento del paradeiro, modo privato fuori orario, conservazione limitata.',
    },
  ],

  contatti: [
    {
      ente: 'CNPD, segnalazioni',
      portale: FONTE_CNPD_SEGNALAZIONI.url,
      urlFonte: FONTE_CNPD_SEGNALAZIONI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'fino a 20 milioni di euro o 4% del fatturato annuo mondiale',
    casoCitato:
      "La violazione dell'art. 20 del Codigo do Trabalho e una contraordenacao grave. Dal GDPR la CNPD non pubblica piu le singole decisioni sanzionatorie, quindi non esiste un importo-faro pubblicabile per la geolocalizzazione dei dipendenti; il rischio resta quello generale del GDPR (art. 83): fino a 20 milioni di euro o il 4% del fatturato annuo mondiale.",
    urlFonte: FONTE_GDPR.url,
  },

  fonti: [
    FONTE_CT_20,
    FONTE_CNPD_7680,
    FONTE_LEI_58_28,
    FONTE_CNPD_AIPD,
    FONTE_CNPD_SEGNALAZIONI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
