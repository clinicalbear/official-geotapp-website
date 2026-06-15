/**
 * Scheda-paese Slovacchia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Zakonnik prace (Codice del lavoro slovacco) art. 13 par. 4 sul monitoraggio
 * dei dipendenti, procedura di tutela dell'UOOU SR (Garante slovacco), guida
 * podnikajte.sk sul monitoraggio dei veicoli aziendali e GDPR, GDPR e rassegna
 * sanzioni UOOU SR di Havel & Partners.
 *
 * La Slovacchia non e' uno Stato federale: la vigilanza spetta a un'unica
 * autorita' nazionale, l'UOOU SR. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZP_13 = {
  titolo:
    'Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)',
  url: 'https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/2001/311/',
};
const FONTE_UOOU_PROCEDURA = {
  titolo: 'UOOU SR (Garante slovacco), procedura di tutela',
  url: 'https://www.dataprotection.gov.sk/sk/urad/konanie-ochrane-osobnych-udajov/',
};
const FONTE_PODNIKAJTE = {
  titolo: 'podnikajte.sk, monitoraggio dei veicoli aziendali e GDPR',
  url: 'https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/monitorovanie-sluzobnych-vozidiel-gdpr',
};
const FONTE_UOOU_RECLAMO = {
  titolo:
    'UOOU SR, presentare una proposta di avvio del procedimento (reclamo)',
  url: 'https://www.dataprotection.gov.sk/sk/ine/vyhladavanie-sluzby-formulara-elektronicku-komunikaciu/podavanie-navrhu-zacatie-konania/',
};
const FONTE_HAVEL = {
  titolo:
    'Havel & Partners, rassegna sanzioni UOOU SR (caso HR psicodiagnostica 40.000 euro)',
  url: 'https://www.havelpartners.sk/4-roky-s-gdpr-za-ake-porusenia-udeloval-uoou-najcastejsie-pokuty/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const slovacchia: SchedaPaese = {
  codiceISO: 'SK',
  slugCanonico: 'slovacchia',
  nome: 'Slovacchia',
  nomi: {
    it: 'Slovacchia',
    en: 'Slovakia',
    'en-us': 'Slovakia',
    'en-gb': 'Slovakia',
    'en-au': 'Slovakia',
    'en-ie': 'Slovakia',
    'en-ca': 'Slovakia',
    de: 'Slowakei',
    nl: 'Slowakije',
    fr: 'Slovaquie',
    es: 'Eslovaquia',
    pt: 'Eslováquia',
    da: 'Slovakiet',
    sv: 'Slovakien',
    nb: 'Slovakia',
    ru: 'Словакия',
  },
  bandiera: '🇸🇰',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'UOOU SR (Urad na ochranu osobnych udajov SR)',
    portale:
      'https://www.dataprotection.gov.sk/sk/ine/vyhladavanie-sluzby-formulara-elektronicku-komunikaciu/podavanie-navrhu-zacatie-konania/',
    urlFonte: FONTE_UOOU_PROCEDURA.url,
    verificatoIl: '2026-06-15',
    note: "La Slovacchia ha un'unica autorita nazionale, l'UOOU SR; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Discussione coi rappresentanti dei lavoratori su portata, modalita e durata del controllo, e informazione preventiva (Zakonnik prace art. 13 par. 4)',
      risposta: 'dipende',
      dettaglio:
        "Se introduce un meccanismo di controllo, il datore deve discutere con i rappresentanti dei lavoratori portata, modalita e durata del controllo e informarne i lavoratori. La discussione coi rappresentanti vale dove esistono; l'informazione ai lavoratori vale sempre.",
      fonte: FONTE_ZP_13,
    },
    {
      voce: "Divieto di sorvegliare senza motivi seri inerenti alla natura dell'attivita, senza preavviso (art. 13 par. 4)",
      risposta: 'si',
      dettaglio:
        "Il datore non puo, senza motivi seri inerenti alla particolare natura della sua attivita, ledere la privacy del lavoratore monitorandolo senza averlo avvisato prima.",
      fonte: FONTE_ZP_13,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva dell'UOOU SR; il titolare agisce sotto la propria responsabilita, con DPIA quando richiesta, e l'autorita interviene successivamente.",
      fonte: FONTE_UOOU_PROCEDURA,
    },
    {
      voce: 'Base = interesse legittimo (non il consenso); GPS proporzionato, niente monitoraggio durante l\'uso privato',
      risposta: 'si',
      dettaglio:
        "Il datore puo trattare i dati del lavoratore senza consenso sulla base del proprio interesse legittimo; il monitoraggio deve essere proporzionato nella durata e non avvenire durante l'uso privato del veicolo.",
      fonte: FONTE_PODNIKAJTE,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico dei dipendenti, incluso il GPS (lista UOOU SR)",
      risposta: 'si',
      dettaglio:
        "La lista UOOU SR dei trattamenti che richiedono una valutazione d'impatto include il monitoraggio sistematico dei dipendenti, incluso il GPS.",
      fonte: FONTE_UOOU_PROCEDURA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Verifica motivi seri inerenti alla natura della tua attivita per il controllo.',
    },
    {
      passo: 2,
      descrizione:
        'Discuti con i rappresentanti dei lavoratori portata, modalita e durata del controllo, e informa i lavoratori in anticipo.',
    },
    {
      passo: 3,
      descrizione:
        'Individua una base giuridica valida (di norma interesse legittimo, non il consenso).',
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema in modo proporzionato: niente monitoraggio durante l\'uso privato del veicolo.',
    },
  ],

  contatti: [
    {
      ente: 'UOOU SR, avvio del procedimento',
      portale: FONTE_UOOU_RECLAMO.url,
      urlFonte: FONTE_UOOU_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '40.000 € (caso affine, non GPS)',
    casoCitato:
      "Non risulta una multa dell'UOOU SR specifica e pubblicata per il GPS sui dipendenti. Caso affine: gennaio 2022, multa di 40.000 euro al reparto risorse umane di un'azienda per la valutazione psicodiagnostica dei dipendenti fondata su un consenso non valido nel rapporto di lavoro. Riguarda i dati dei dipendenti, non il GPS.",
    urlFonte: FONTE_HAVEL.url,
  },

  fonti: [
    FONTE_ZP_13,
    FONTE_UOOU_PROCEDURA,
    FONTE_PODNIKAJTE,
    FONTE_UOOU_RECLAMO,
    FONTE_HAVEL,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
