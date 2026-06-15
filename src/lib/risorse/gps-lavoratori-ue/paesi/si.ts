/**
 * Scheda-paese Slovenia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * linee guida e parere dell'IP-RS (Garante sloveno) sull'uso dei dispositivi GPS
 * e sul tracciamento dei dipendenti, art. 48 ZDR-1 (dati dei lavoratori), pagina
 * IP-RS sulla valutazione d'impatto, modulo IP-RS per le segnalazioni e GDPR.
 *
 * La Slovenia ha un'unica autorita' nazionale, l'IP-RS, senza ripartizione
 * regionale. La legge nazionale ZVOP-2 e' recente (2023), quindi le sanzioni
 * pubblicate specifiche per il GPS sono ancora poche. Nessun numero, URL o
 * autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_IPRS_GPS = {
  titolo: "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS",
  url: 'https://www.ip-rs.si/fileadmin/user_upload/Pdf/smernice/GPS_smernice_net_.pdf',
};
const FONTE_IPRS_SLEDENJE = {
  titolo:
    "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)",
  url: 'https://www.ip-rs.si/mnenja-gdpr/6048a57a34c82',
};
const FONTE_ZDR1_48 = {
  titolo: 'Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)',
  url: 'https://pisrs.si/Pis.web/pregledPredpisa?id=ZAKO5944',
};
const FONTE_IPRS_DPIA = {
  titolo: "IP-RS, valutazione d'impatto sulla protezione dei dati",
  url: 'https://www.ip-rs.si/zakonodaja/reforma-evropskega-zakonodajnega-okvira-za-varstvo-osebnih-podatkov/kljucna-podrocja-uredbe/ocena-ucinka-v-zvezi-z-varstvom-podatkov/',
};
const FONTE_IPRS_SEGNALAZIONE = {
  titolo: 'IP-RS, presentare una segnalazione',
  url: 'https://www.ip-rs.si/varstvo-osebnih-podatkov/pravice-posameznika/vlo%C5%BEitev-prijave',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const slovenia: SchedaPaese = {
  codiceISO: 'SI',
  slugCanonico: 'slovenia',
  nome: 'Slovenia',
  nomi: {
    it: 'Slovenia',
    en: 'Slovenia',
    'en-us': 'Slovenia',
    'en-gb': 'Slovenia',
    'en-au': 'Slovenia',
    'en-ie': 'Slovenia',
    'en-ca': 'Slovenia',
    de: 'Slowenien',
    nl: 'Slovenië',
    fr: 'Slovénie',
    es: 'Eslovenia',
    pt: 'Eslovénia',
    da: 'Slovenien',
    sv: 'Slovenien',
    nb: 'Slovenia',
    ru: 'Словения',
  },
  bandiera: '🇸🇮',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Informacijski pooblascenec (IP-RS)',
    urlFonte: FONTE_IPRS_SEGNALAZIONE.url,
    verificatoIl: '2026-06-15',
    note: "La Slovenia ha un'unica autorita' nazionale, l'IP-RS; nessuna ripartizione regionale. La legge nazionale ZVOP-2 e' recente (2023), quindi le sanzioni pubblicate sono ancora poche.",
  },

  checklist: [
    {
      voce: 'Test di proporzionalita: il tracciamento indiscriminato dei dipendenti non ha base giuridica (IP-RS)',
      risposta: 'si',
      dettaglio:
        "Per il Garante sloveno il tracciamento indiscriminato dei lavoratori tramite GPS non raggiunge lo standard di necessita' per l'esercizio di diritti e obblighi del rapporto di lavoro: in tal caso manca la base giuridica. Serve superare il test di proporzionalita' (necessita', idoneita', proporzionalita' in senso stretto).",
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: 'Base giuridica = esecuzione del contratto (ZDR-1 art. 48) o interesse legittimo, non il consenso',
      risposta: 'si',
      dettaglio:
        "La base e' l'esecuzione del rapporto di lavoro (art. 48 ZDR-1) o il legittimo interesse; il consenso del dipendente difficilmente e' valido per lo squilibrio di potere.",
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva dell'IP-RS; il titolare valuta da se' base giuridica, proporzionalita' e DPIA.",
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: 'Niente sorveglianza continua: solo dati puntuali o in tempo reale, non conservazione permanente; dispositivo di sicurezza disattivabile',
      risposta: 'si',
      dettaglio:
        "Per l'IP-RS non e' proporzionato il tracciamento continuo quando basterebbero dati puntuali o in tempo reale senza conservazione; un dispositivo per la sola sicurezza deve poter restare disattivato finche' il lavoratore non lo attiva.",
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: 'Informazione ai lavoratori e atto interno; informazione del consiglio dei lavoratori se esiste (ZDR-1)',
      risposta: 'dipende',
      dettaglio:
        "Il datore deve informare i lavoratori (art. 13 GDPR) e adottare un atto interno; dove esiste un consiglio dei lavoratori va informato prima di adottare l'atto generale.",
      fonte: FONTE_ZDR1_48,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per la geolocalizzazione e i dati dei dipendenti (lista IP-RS)",
      risposta: 'si',
      dettaglio:
        "Il Garante raccomanda di svolgere una valutazione d'impatto prima di introdurre dispositivi GPS, e la geolocalizzazione e i dati dei dipendenti sono nella lista che la richiede.",
      fonte: FONTE_IPRS_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Supera il test di proporzionalita: niente tracciamento indiscriminato, scegli il mezzo meno invasivo.',
    },
    {
      passo: 2,
      descrizione:
        "Individua una base giuridica valida (esecuzione del contratto, art. 48 ZDR-1, o interesse legittimo).",
    },
    {
      passo: 3,
      descrizione:
        'Adotta un atto interno e informa i lavoratori; informa il consiglio dei lavoratori se esiste.',
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) prima di introdurre il GPS.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: niente sorveglianza continua, niente conservazione permanente, dispositivi di sicurezza disattivabili.',
    },
  ],

  contatti: [
    {
      ente: 'IP-RS, segnalazioni',
      portale: FONTE_IPRS_SEGNALAZIONE.url,
      urlFonte: FONTE_IPRS_SEGNALAZIONE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
    casoCitato:
      "La legge nazionale ZVOP-2 e' entrata in vigore nel 2023, quindi non risulta ancora una multa pubblicata specifica per il GPS sui dipendenti. Il Garante (IP-RS) ha pero' gia' stabilito in piu' pareri che il tracciamento indiscriminato dei lavoratori e' privo di base giuridica. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).",
    urlFonte: FONTE_IPRS_SLEDENJE.url,
  },

  fonti: [
    FONTE_IPRS_GPS,
    FONTE_IPRS_SLEDENJE,
    FONTE_ZDR1_48,
    FONTE_IPRS_DPIA,
    FONTE_IPRS_SEGNALAZIONE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
