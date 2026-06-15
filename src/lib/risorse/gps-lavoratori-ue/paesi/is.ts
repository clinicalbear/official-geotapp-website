/**
 * Scheda-paese Islanda per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Regole n. 50/2023 sulla sorveglianza elettronica, FAQ del Persuvernd (Garante
 * islandese) sul GPS, lista Persuvernd dei trattamenti che richiedono una DPIA
 * (Auglysing nr. 828/2019), pagina dei reclami al Persuvernd, decisione
 * Islandspostur sull'uso illecito del GPS su un dipendente e GDPR.
 *
 * L'Islanda fa parte del SEE e applica il GDPR; ha un'unica autorita nazionale,
 * il Persuvernd, senza ripartizione regionale. Nessun numero, URL o autorita e
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_REGOLE_50_2023 = {
  titolo:
    'Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)',
  url: 'https://island.is/stjornartidindi/nr/00ede50f-ff8e-4a44-9bb1-019e440b32e1',
};
const FONTE_PERSUVERND_GPS = {
  titolo:
    'Persuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione',
  url: 'https://www.personuvernd.is/einstaklingar/spurt-og-svarad/allar-spurningar-og-svor/hvada-reglur-gilda-um-okurita-og-annan-rafraenan-stadsetningarbunad',
};
const FONTE_PERSUVERND_DPIA = {
  titolo:
    'Persuvernd, lista dei trattamenti che richiedono una DPIA (Auglysing nr. 828/2019)',
  url: 'https://island.is/stjornartidindi/nr/7034a38d-0b61-4f7a-b3ef-a63252df0d6e',
};
const FONTE_PERSUVERND_RECLAMO = {
  titolo: 'Persuvernd, presentare un reclamo',
  url: 'https://island.is/kvortun-til-personuverndar',
};
const FONTE_PERSUVERND_ISLANDSPOSTUR = {
  titolo:
    'Persuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)',
  url: 'https://www.personuvernd.is/urlausnir/rafraen-voktun-af-halfu-islandsposts',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const islanda: SchedaPaese = {
  codiceISO: 'IS',
  slugCanonico: 'islanda',
  nome: 'Islanda',
  nomi: {
    it: 'Islanda',
    en: 'Iceland',
    'en-us': 'Iceland',
    'en-gb': 'Iceland',
    'en-au': 'Iceland',
    'en-ie': 'Iceland',
    'en-ca': 'Iceland',
    de: 'Island',
    nl: 'IJsland',
    fr: 'Islande',
    es: 'Islandia',
    pt: 'Islândia',
    da: 'Island',
    sv: 'Island',
    nb: 'Island',
    ru: 'Исландия',
  },
  bandiera: '🇮🇸',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Persuvernd (Garante islandese per la protezione dei dati)',
    portale: FONTE_PERSUVERND_RECLAMO.url,
    urlFonte: 'https://www.personuvernd.is/',
    verificatoIl: '2026-06-15',
    note: "L'Islanda (SEE) ha un'unica autorita nazionale, il Persuvernd; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: "Informazione preventiva ai lavoratori e cartello sull'area sorvegliata (Regole 50/2023)",
      risposta: 'si',
      dettaglio:
        "La sorveglianza elettronica richiede una finalita chiara e lecita; chi sorveglia deve dare avviso con un cartello o in altro modo evidente prima che la persona entri nell'area sorvegliata.",
      fonte: FONTE_REGOLE_50_2023,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        'Non serve un\'autorizzazione preventiva del Persuvernd; il titolare valuta da se e documenta la liceita, con DPIA quando richiesta.',
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: 'Base = interesse legittimo con test documentato, non il consenso',
      risposta: 'si',
      dettaglio:
        'La base piu pertinente e l\'interesse legittimo del datore; il datore deve svolgere una valutazione documentata di prevalenza rispetto ai diritti dei lavoratori. Il consenso di norma non e valido nel rapporto di lavoro.',
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: "GPS solo se c'e un bisogno particolare; evitare la sorveglianza continua; disattivabile fuori orario",
      risposta: 'si',
      dettaglio:
        "L'uso di cronotachigrafi o dispositivi di localizzazione richiede un bisogno particolare; va rispettata la proporzionalita ed evitata la sorveglianza continua dei lavoratori; fuori orario il lavoratore deve poterlo disattivare.",
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il monitoraggio del rendimento o del comportamento dei dipendenti (lista Persuvernd)",
      risposta: 'si',
      dettaglio:
        "La lista Persuvernd include il trattamento che comporta il monitoraggio del rendimento o del comportamento dei dipendenti tra i casi che richiedono sempre una valutazione d'impatto.",
      fonte: FONTE_PERSUVERND_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Verifica un bisogno particolare e una finalita chiara e lecita per il GPS (Regole 50/2023).',
    },
    {
      passo: 2,
      descrizione:
        'Individua una base giuridica valida (interesse legittimo) e svolgi la valutazione documentata.',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti.",
    },
    {
      passo: 4,
      descrizione: "Informa i lavoratori in anticipo e segnala l'area sorvegliata.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: niente sorveglianza continua, disattivabile fuori orario, niente riuso per altre finalita senza preavviso.',
    },
  ],

  contatti: [
    {
      ente: 'Persuvernd, reclami',
      portale: FONTE_PERSUVERND_RECLAMO.url,
      urlFonte: FONTE_PERSUVERND_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'illiceita dichiarata, senza multa',
    casoCitato:
      "Persuvernd, decisione 2022050836 dell'8 dicembre 2023: Islandspostur (Poste islandesi) aveva usato i dati del cronotachigrafo/GPS di un veicolo aziendale per valutare il rendimento di un dipendente e giustificarne il licenziamento, cambiando la finalita (il dispositivo era stato presentato per sicurezza e qualita del servizio) senza preavviso. Trattamento dichiarato illecito, senza multa.",
    urlFonte: FONTE_PERSUVERND_ISLANDSPOSTUR.url,
  },

  fonti: [
    FONTE_REGOLE_50_2023,
    FONTE_PERSUVERND_GPS,
    FONTE_PERSUVERND_DPIA,
    FONTE_PERSUVERND_RECLAMO,
    FONTE_PERSUVERND_ISLANDSPOSTUR,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
