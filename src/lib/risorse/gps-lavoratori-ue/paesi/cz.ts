/**
 * Scheda-paese Repubblica Ceca per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 316 dello Zakonik prace (Codice del lavoro), guida UOOU/gdpr.cz sul
 * monitoraggio dei veicoli aziendali tramite GPS, lista UOOU dei trattamenti
 * che richiedono una DPIA, pagina UOOU per le segnalazioni, caso UOOU contro
 * Ceska posta sui GPS dei portalettere e GDPR.
 *
 * La Repubblica Ceca non e' uno Stato federale: c'e' un'unica autorita'
 * nazionale, l'UOOU, senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZP_316 = {
  titolo: 'Zakonik prace (Codice del lavoro), art. 316',
  url: 'https://www.zakonyprolidi.cz/cs/2006-262',
};
const FONTE_UOOU_GPS = {
  titolo: 'UOOU/gdpr.cz, monitoraggio dei veicoli aziendali tramite GPS',
  url: 'https://www.gdpr.cz/monitorovani-sluzebnich-vozidel-pomoci-gps',
};
const FONTE_UOOU_DPIA = {
  titolo: 'UOOU, lista dei trattamenti che richiedono una DPIA',
  url: 'https://uoou.gov.cz/media/profesional/seznam-operaci-zpracovani-nepodlehajicich-pozadavku-na-dpia.pdf',
};
const FONTE_UOOU_SEGNALAZIONE = {
  titolo: 'UOOU, presentare una segnalazione',
  url: 'https://uoou.gov.cz/verejnost/stiznost-na-spravce-nebo-zpracovatele',
};
const FONTE_UOOU_CESKA_POSTA = {
  titolo: 'UOOU, sanzione Ceska posta (GPS portalettere)',
  url: 'https://www.epravo.cz/top/clanky/gps-monitoring-zamestnancu-podruhe-106141.html',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const repubblicaCeca: SchedaPaese = {
  codiceISO: 'CZ',
  slugCanonico: 'repubblica-ceca',
  nome: 'Repubblica Ceca',
  nomi: {
    it: 'Repubblica Ceca',
    en: 'Czech Republic',
    'en-us': 'Czech Republic',
    'en-gb': 'Czech Republic',
    'en-au': 'Czech Republic',
    'en-ie': 'Czech Republic',
    'en-ca': 'Czech Republic',
    de: 'Tschechien',
    nl: 'Tsjechië',
    fr: 'République tchèque',
    es: 'República Checa',
    pt: 'Chéquia',
    da: 'Tjekkiet',
    sv: 'Tjeckien',
    nb: 'Tsjekkia',
    ru: 'Чехия',
  },
  bandiera: '🇨🇿',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'UOOU (Urad pro ochranu osobnich udaju)',
    portale: FONTE_UOOU_SEGNALAZIONE.url,
    urlFonte: FONTE_UOOU_SEGNALAZIONE.url,
    verificatoIl: '2026-06-15',
    note: "La Repubblica Ceca ha un'unica autorita' nazionale, l'UOOU; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Informazione diretta ai lavoratori su portata e modalita del monitoraggio (Zakonik prace art. 316)',
      risposta: 'si',
      dettaglio:
        'Se sussiste un motivo serio per il monitoraggio, il datore e\' obbligato a informare direttamente i lavoratori sulla portata del controllo e sul modo in cui viene svolto.',
      fonte: FONTE_ZP_316,
    },
    {
      voce: "Divieto di sorvegliare i lavoratori senza un motivo serio inerente alla natura dell'attivita (art. 316)",
      risposta: 'no',
      dettaglio:
        'Il datore non puo\', senza un motivo serio inerente alla particolare natura della sua attivita\', ledere la privacy del lavoratore sottoponendolo a sorveglianza aperta o occulta (incluso il tracciamento).',
      fonte: FONTE_ZP_316,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva dell'UOOU; il titolare valuta da se' base giuridica e proporzionalita', con DPIA quando richiesta.",
      fonte: FONTE_UOOU_GPS,
    },
    {
      voce: 'GPS proporzionato (protezione del patrimonio, registro viaggi), non controllo continuo; opt-out per l\'uso privato',
      risposta: 'si',
      dettaglio:
        "Per l'UOOU il GPS e' ammesso soprattutto per la protezione del patrimonio e il registro dei viaggi, non per un controllo intensivo o costante dei lavoratori; per l'uso privato del veicolo si raccomanda la disattivazione (opt-out).",
      fonte: FONTE_UOOU_GPS,
    },
    {
      voce: 'Valutazione d\'impatto (DPIA) per il monitoraggio della posizione o del movimento dei lavoratori (lista UOOU)',
      risposta: 'si',
      dettaglio:
        'La lista UOOU richiede la DPIA per i trattamenti che monitorano il movimento o la posizione delle persone e per i sistemi di rilevazione presenze.',
      fonte: FONTE_UOOU_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        "Verifica un motivo serio inerente alla natura della tua attivita' per il monitoraggio (art. 316).",
    },
    {
      passo: 2,
      descrizione:
        'Individua una base giuridica valida (di norma interesse legittimo, non il consenso).',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio della posizione dei lavoratori.",
    },
    {
      passo: 4,
      descrizione:
        "Informa direttamente i lavoratori su portata e modalita' del controllo (art. 316 + art. 13 GDPR).",
    },
    {
      passo: 5,
      descrizione:
        "Configura il sistema in modo proporzionato: niente controllo continuo, opt-out per l'uso privato.",
    },
  ],

  contatti: [
    {
      ente: 'UOOU, segnalazioni',
      portale: FONTE_UOOU_SEGNALAZIONE.url,
      urlFonte: FONTE_UOOU_SEGNALAZIONE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '80.000 CZK (circa 3.200 euro)',
    casoCitato:
      "UOOU contro Ceska posta (Poste Ceche): tra marzo 2012 e febbraio 2013 l'azienda aveva dotato 7.770 portalettere di localizzatori GPS che registravano l'intero percorso durante il turno; trattamento sproporzionato, durato troppo a lungo e su troppe persone. Multa 80.000 CZK. Deciso sotto la vecchia legge pre-GDPR, ma il principio resta.",
    urlFonte: FONTE_UOOU_CESKA_POSTA.url,
  },

  fonti: [
    FONTE_ZP_316,
    FONTE_UOOU_GPS,
    FONTE_UOOU_DPIA,
    FONTE_UOOU_SEGNALAZIONE,
    FONTE_UOOU_CESKA_POSTA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
