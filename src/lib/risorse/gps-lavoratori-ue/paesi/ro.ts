/**
 * Scheda-paese Romania per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge 190/2018 art. 5 (condizioni per il monitoraggio dei dipendenti), Codul
 * Muncii art. 40 (obblighi del datore e riservatezza dei dati), comunicato
 * ANSPDCP del 23 marzo 2023 sul caso GPS Tehnoplus, Decizia ANSPDCP 174/2018
 * (lista dei trattamenti che richiedono una DPIA), pagina ANSPDCP sulla
 * presentazione dei reclami e GDPR.
 *
 * La Romania non e' uno Stato federale: ha un'unica autorita' nazionale,
 * l'ANSPDCP, senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LEGGE_190_ART5 = {
  titolo: 'Legge 190/2018, art. 5 (monitoraggio dei dipendenti)',
  url: 'https://legislatie.just.ro/Public/DetaliiDocument/203151',
};
const FONTE_CODUL_MUNCII_40 = {
  titolo: 'Codul Muncii, art. 40 (obblighi del datore, riservatezza dati)',
  url: 'https://www.codulmuncii.eu/titlu-2/capitol-2/articol-40.html',
};
const FONTE_ANSPDCP_TEHNOPLUS = {
  titolo:
    'ANSPDCP, comunicato del 23 marzo 2023 (sanzione Tehnoplus, GPS)',
  url: 'https://www.dataprotection.ro/?page=Comunicat_Presa_23.03.2023',
};
const FONTE_ANSPDCP_DPIA = {
  titolo:
    'ANSPDCP, Decizia 174/2018 (lista trattamenti che richiedono DPIA)',
  url: 'https://lege5.ro/Gratuit/gmydoobxhe3q/decizia-nr-174-2018-privind-lista-operatiunilor-pentru-care-este-obligatorie-realizarea-evaluarii-impactului-asupra-protectiei-datelor-cu-caracter-personal',
};
const FONTE_ANSPDCP_RECLAMI = {
  titolo: 'ANSPDCP, presentazione dei reclami',
  url: 'https://www.dataprotection.ro/?page=Transmiterea_plangerilor_catre_ANSPDCP&lang=ro',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const romania: SchedaPaese = {
  codiceISO: 'RO',
  slugCanonico: 'romania',
  nome: 'Romania',
  nomi: {
    it: 'Romania',
    en: 'Romania',
    'en-us': 'Romania',
    'en-gb': 'Romania',
    'en-au': 'Romania',
    'en-ie': 'Romania',
    'en-ca': 'Romania',
    de: 'Rumänien',
    nl: 'Roemenië',
    fr: 'Roumanie',
    es: 'Rumanía',
    pt: 'Roménia',
    da: 'Rumænien',
    sv: 'Rumänien',
    nb: 'Romania',
    ru: 'Румыния',
  },
  bandiera: '🇷🇴',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'ANSPDCP (Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal)',
    portale: FONTE_ANSPDCP_RECLAMI.url,
    urlFonte: FONTE_ANSPDCP_RECLAMI.url,
    verificatoIl: '2026-06-15',
    note: "La Romania ha un'unica autorita nazionale, l'ANSPDCP; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Informazione preventiva obbligatoria, completa ed esplicita dei lavoratori (Legge 190/2018 art. 5 lett. b)',
      risposta: 'si',
      dettaglio:
        "il monitoraggio dei dipendenti tramite mezzi elettronici/geolocalizzazione e ammesso solo dopo un'informazione preventiva obbligatoria, completa ed esplicita dei lavoratori.",
      fonte: FONTE_LEGGE_190_ART5,
    },
    {
      voce: 'Consultazione preventiva del sindacato o dei rappresentanti dei dipendenti (art. 5 lett. c)',
      risposta: 'dipende',
      dettaglio:
        'prima di introdurre i sistemi di monitoraggio il datore deve consultare il sindacato o, se del caso, i rappresentanti dei dipendenti. Vale dove esistono.',
      fonte: FONTE_LEGGE_190_ART5,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "la legge subordina il monitoraggio alle condizioni dell'art. 5, ma non a un'autorizzazione preventiva dell'ANSPDCP.",
      fonte: FONTE_LEGGE_190_ART5,
    },
    {
      voce: 'Mezzi meno intrusivi gia rivelatisi inefficaci e interesse legittimo prevalente (art. 5 lett. a, d)',
      risposta: 'si',
      dettaglio:
        "il monitoraggio e ammesso solo se altre forme meno intrusive non si sono gia rivelate efficaci e se l'interesse legittimo del datore prevale sui diritti dei lavoratori.",
      fonte: FONTE_LEGGE_190_ART5,
    },
    {
      voce: 'Conservazione proporzionata, non oltre 30 giorni salvo eccezioni (art. 5 lett. e)',
      risposta: 'si',
      dettaglio:
        'la durata di conservazione deve essere proporzionata allo scopo e non superiore a 30 giorni, salvo casi previsti dalla legge o debitamente giustificati.',
      fonte: FONTE_LEGGE_190_ART5,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per la geolocalizzazione sistematica dei dipendenti (Decizia 174/2018)",
      risposta: 'si',
      dettaglio:
        "la lista nazionale rende obbligatoria la valutazione d'impatto per il monitoraggio sistematico su larga scala di persone vulnerabili (inclusi i dipendenti) e per il trattamento sistematico di dati di localizzazione.",
      fonte: FONTE_ANSPDCP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Informa i lavoratori in modo preventivo, obbligatorio, completo ed esplicito (art. 5 lett. b).',
    },
    {
      passo: 2,
      descrizione:
        'Consulta il sindacato o i rappresentanti dei dipendenti prima di introdurre il sistema (art. 5 lett. c).',
    },
    {
      passo: 3,
      descrizione:
        "Verifica che altri mezzi meno intrusivi non siano gia bastati e documenta l'interesse legittimo prevalente.",
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per la geolocalizzazione sistematica.",
    },
    {
      passo: 5,
      descrizione:
        'Limita la conservazione a 30 giorni salvo eccezioni giustificate; usa i dati solo per la finalita dichiarata.',
    },
  ],

  contatti: [
    {
      ente: 'ANSPDCP, reclami',
      portale: FONTE_ANSPDCP_RECLAMI.url,
      urlFonte: FONTE_ANSPDCP_RECLAMI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '5.000 €',
    casoCitato:
      'ANSPDCP contro Tehnoplus Industry SRL (23 marzo 2023): tracciamento GPS di un veicolo aziendale assegnato a un dipendente, con trattamento eccessivo dei dati di localizzazione fuori dall\'orario di servizio, senza aver prima esaurito metodi meno intrusivi, senza informare il dipendente e con conservazione oltre i 30 giorni. Multa complessiva 5.000 euro (3.000 + 2.000).',
    urlFonte: FONTE_ANSPDCP_TEHNOPLUS.url,
  },

  fonti: [
    FONTE_LEGGE_190_ART5,
    FONTE_CODUL_MUNCII_40,
    FONTE_ANSPDCP_TEHNOPLUS,
    FONTE_ANSPDCP_DPIA,
    FONTE_ANSPDCP_RECLAMI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
