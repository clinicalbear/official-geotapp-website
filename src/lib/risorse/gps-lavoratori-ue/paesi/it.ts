/**
 * Scheda-paese Italia per la risorsa "GPS sui lavoratori in UE".
 *
 * Fonte unica dei contenuti: docs/risorse/osservatorio-garante-gps-dipendenti-2026.md
 * (Osservatorio sui provvedimenti del Garante Privacy, dati verificati alla fonte
 * primaria garanteprivacy.it). Nessun numero, URL o autorità è inventato qui:
 * ogni valore proviene da quel documento.
 *
 * NOTA per la pagina (Task successivo): il download di `modelloPdf.url` va
 * collegato alla cattura lead-magnet esistente (leadMagnet 'informativa-gps',
 * MailerLite). Il file PDF è in public/downloads/.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate nel documento (sezione "Fonti").
const FONTE_PROVV_AUTOTRASPORTI = {
  titolo: 'Garante Privacy, Provvedimento del 16 gennaio 2025, n. 10112287',
  url: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10112287',
};
const FONTE_PROVV_ARSAC = {
  titolo: 'Garante Privacy, Provvedimento del 13 marzo 2025, n. 10128005',
  url: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10128005',
};
const FONTE_STATUTO_ART4 = {
  titolo: 'Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4',
  url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1970-05-20;300',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88',
  url: 'https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32016R0679',
};

export const italia: SchedaPaese = {
  codiceISO: 'IT',
  slugCanonico: 'italia',
  nome: 'Italia',
  bandiera: '🇮🇹',
  federale: false,
  stato: 'completo',

  autoritaCompetente: {
    ente: 'Garante per la protezione dei dati personali',
    urlFonte: 'https://www.garanteprivacy.it',
    verificatoIl: '2026-06-15',
  },

  checklist: [
    {
      voce: 'Hai completato la procedura dell’art. 4 PRIMA di installare il sistema?',
      risposta: 'si',
      dettaglio:
        'Il GPS è uno strumento da cui può derivare un controllo a distanza dei lavoratori. L’art. 4 dello Statuto dei Lavoratori lo consente solo dopo accordo sindacale con RSA o RSU, oppure autorizzazione dell’Ispettorato Territoriale del Lavoro. Installare prima di questo passaggio, o usarlo in modo difforme da quanto autorizzato, è la strada più rapida verso la sanzione.',
      fonte: FONTE_STATUTO_ART4,
    },
    {
      voce: 'L’informativa al lavoratore è completa, chiara e veritiera?',
      risposta: 'si',
      dettaglio:
        'Il lavoratore deve sapere in modo chiaro e veritiero che viene geolocalizzato, come, quando e perché (art. 13 GDPR). Nel caso degli autotrasporti l’informativa c’era ma piena di incongruenze e refusi: per il Garante è come non averla.',
      fonte: FONTE_PROVV_AUTOTRASPORTI,
    },
    {
      voce: 'Eviti il tracciamento continuo, raccogliendo la posizione solo quando serve?',
      risposta: 'si',
      dettaglio:
        'Seguire il mezzo h24, pause comprese, viola il principio di minimizzazione (art. 5 GDPR). La posizione si raccoglie quando serve a una finalità legittima, non per sapere sempre dov’è la persona. Il tracciamento continuo è uno dei motivi della sanzione da 50.000 € all’azienda di autotrasporti.',
      fonte: FONTE_PROVV_AUTOTRASPORTI,
    },
    {
      voce: 'Usi i dati di posizione per la sola finalità dichiarata, senza riusarli per sanzionare?',
      risposta: 'no',
      dettaglio:
        'Riutilizzare dati raccolti per un’altra finalità (per esempio verificare la sede di lavoro) per avviare un procedimento disciplinare è uno sviamento di finalità, e il Garante lo colpisce sempre. È l’errore costato caro all’ente pubblico nel caso ARSAC.',
      fonte: FONTE_PROVV_ARSAC,
    },
    {
      voce: 'Hai svolto la valutazione d’impatto (DPIA) quando il rischio è elevato?',
      risposta: 'dipende',
      dettaglio:
        'Per un trattamento di questo tipo serve la DPIA (art. 35 GDPR) quando il rischio è elevato. Ometterla, come nel caso dell’ente pubblico, è di per sé una violazione.',
      fonte: FONTE_PROVV_ARSAC,
    },
    {
      voce: 'La conservazione dei dati è limitata al tempo strettamente necessario?',
      risposta: 'si',
      dettaglio:
        'I dati si tengono per il tempo necessario alla finalità, non "per sicurezza" a tempo indefinito. Nel caso degli autotrasporti la conservazione per 180 giorni ha contribuito alla sanzione.',
      fonte: FONTE_PROVV_AUTOTRASPORTI,
    },
    {
      voce: 'La finalità è legittima e dichiarata (organizzativa, di sicurezza, di tutela del patrimonio)?',
      risposta: 'si',
      dettaglio:
        'Esigenze organizzative, di sicurezza o di tutela del patrimonio aziendale sono finalità legittime. Mai "controllare cosa fa il dipendente": è esattamente la cosa che l’art. 4 vieta.',
      fonte: FONTE_STATUTO_ART4,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Completa la procedura dell’art. 4 prima, non dopo: accordo con le rappresentanze sindacali (RSA o RSU) oppure autorizzazione dell’Ispettorato Territoriale del Lavoro. Senza, sei fuori dal primo minuto.',
    },
    {
      passo: 2,
      descrizione:
        'Definisci una finalità legittima e dichiarata: esigenze organizzative, di sicurezza, di tutela del patrimonio aziendale. Mai "controllare cosa fa il dipendente".',
    },
    {
      passo: 3,
      descrizione:
        'Predisponi un’informativa completa e vera ai sensi dell’art. 13 GDPR: senza refusi, senza zone grigie.',
    },
    {
      passo: 4,
      descrizione:
        'Applica la minimizzazione: raccogli solo i dati che servono, solo quando servono. Niente tracciamento durante le pause, prevedi la possibilità di spegnimento.',
    },
    {
      passo: 5,
      descrizione:
        'Limita la conservazione: i dati si tengono per il tempo necessario alla finalità, non a tempo indefinito.',
    },
    {
      passo: 6,
      descrizione:
        'Svolgi la valutazione d’impatto (DPIA) quando il rischio è elevato (art. 35 GDPR).',
    },
    {
      passo: 7,
      descrizione:
        'Mantieni un solo scopo: i dati raccolti per una finalità non si riusano per sanzionare. Mai.',
    },
  ],

  contatti: [
    {
      ente: 'Garante per la protezione dei dati personali',
      urlFonte: 'https://www.garanteprivacy.it',
      verificatoIl: '2026-06-15',
    },
  ],

  // Il download va instradato tramite la cattura lead-magnet esistente
  // (leadMagnet 'informativa-gps', MailerLite) nel Task della pagina.
  modelloPdf: {
    disponibile: true,
    lingua: 'it',
    url: '/downloads/fac-simile-informativa-gps-dipendenti.pdf',
  },

  sanzioneMax: {
    importo: '120.000 €',
    casoCitato:
      'Garante Privacy, newsletter del 29 gennaio 2026: società del settore sementi, 5 dipendenti, dispositivi sui veicoli che monitoravano lo stile di guida dei lavoratori.',
    urlFonte: 'https://www.garanteprivacy.it',
  },

  fonti: [
    FONTE_PROVV_AUTOTRASPORTI,
    FONTE_PROVV_ARSAC,
    {
      titolo:
        'Garante Privacy, newsletter del 29 gennaio 2026 (sanzione settore sementi)',
      url: 'https://www.garanteprivacy.it',
    },
    {
      titolo: 'Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4',
      url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1970-05-20;300',
    },
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
