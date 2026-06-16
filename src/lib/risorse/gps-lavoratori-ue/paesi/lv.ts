/**
 * Scheda-paese Lettonia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * chiarimenti del DVI (Datu valsts inspekcija, Garante lettone) sul tracciamento
 * GPS dei viaggi del dipendente e sulla videosorveglianza dei lavoratori, lista
 * DVI dei trattamenti che richiedono una DPIA (art. 35.4 GDPR), pagina DVI per i
 * reclami e GDPR.
 *
 * La Lettonia ha un'unica autorita nazionale per la protezione dei dati, il DVI;
 * non e uno Stato federale e non esiste una ripartizione regionale della
 * vigilanza. Nessun numero, URL o autorita e inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_DVI_GPS = {
  titolo:
    'DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)',
  url: 'https://www.dvi.gov.lv/lv/jaunums/dviskaidro-vai-drikstu-izsekot-sava-darbinieka-braucieniem',
};
const FONTE_DVI_VIDEO = {
  titolo: 'DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)',
  url: 'https://www.dvi.gov.lv/lv/jaunums/dviskaidro-16092022',
};
const FONTE_DVI_VIDEO_REMOTO = {
  titolo: 'DVI, videosorveglianza dei dipendenti nel lavoro da remoto',
  url: 'https://www.dvi.gov.lv/lv/jaunums/dviskaidro-darbinieku-videonoverosana-attalinata-darba-process',
};
const FONTE_DVI_DPIA = {
  titolo: 'DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)',
  url: 'https://www.edpb.europa.eu/sites/default/files/decisions/lv_sa_dpia_final_list_20181212.pdf',
};
const FONTE_DVI_RECLAMO = {
  titolo: 'DVI, presentare un reclamo',
  url: 'https://www.dvi.gov.lv/en/services/complaint-concerning-processing-personal-data',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const lettonia: SchedaPaese = {
  codiceISO: 'LV',
  slugCanonico: 'lettonia',
  nome: 'Lettonia',
  nomi: {
    it: 'Lettonia',
    en: 'Latvia',
    'en-us': 'Latvia',
    'en-gb': 'Latvia',
    'en-au': 'Latvia',
    'en-ie': 'Latvia',
    'en-ca': 'Latvia',
    de: 'Lettland',
    nl: 'Letland',
    fr: 'Lettonie',
    es: 'Letonia',
    pt: 'Letónia',
    da: 'Letland',
    sv: 'Lettland',
    nb: 'Latvia',
    ru: 'Латвия',
  },
  bandiera: '🇱🇻',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'DVI (Datu valsts inspekcija, Garante lettone)',
    portale: FONTE_DVI_RECLAMO.url,
    urlFonte: FONTE_DVI_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Lettonia ha un'unica autorita nazionale, il DVI; nessuna ripartizione regionale.",
      en: 'Latvia has a single national authority, the DVI; there is no regional split.',
      de: 'Lettland hat eine einzige nationale Behoerde, die DVI; es gibt keine regionale Aufteilung.',
      fr: "La Lettonie dispose d'une seule autorite nationale, la DVI; il n'existe pas de repartition regionale.",
      es: 'Letonia tiene una unica autoridad nacional, la DVI; no existe un reparto regional.',
      nl: 'Letland heeft een enkele nationale autoriteit, de DVI; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Test di bilanciamento prima del trattamento e informazione preventiva ai lavoratori (DVI)',
        en: 'Balancing test before processing and prior notice to workers (DVI)',
        de: 'Abwaegungstest vor der Verarbeitung und vorherige Information der Beschaeftigten (DVI)',
        fr: 'Test de mise en balance avant le traitement et information prealable des salaries (DVI)',
        es: 'Test de ponderacion antes del tratamiento e informacion previa a los trabajadores (DVI)',
        nl: 'Afwegingstoets voor de verwerking en voorafgaande informatie aan werknemers (DVI)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il datore deve, prima di iniziare il trattamento, valutare il bilanciamento tra il proprio interesse e quello del lavoratore, e informarlo prima che inizi a usare il veicolo, in modo trasparente e in linguaggio semplice.',
        en: 'Before starting the processing, the employer must assess the balance between its own interest and the worker\'s interest, and must inform the worker before they begin using the vehicle, in a transparent way and in plain language.',
        de: 'Der Arbeitgeber muss vor Beginn der Verarbeitung die Abwaegung zwischen seinem eigenen Interesse und dem des Beschaeftigten vornehmen und den Beschaeftigten informieren, bevor dieser das Fahrzeug benutzt, transparent und in einfacher Sprache.',
        fr: "Avant de commencer le traitement, l'employeur doit evaluer la mise en balance entre son propre interet et celui du salarie, et l'informer avant qu'il ne commence a utiliser le vehicule, de maniere transparente et en langage simple.",
        es: 'Antes de iniciar el tratamiento, el empleador debe evaluar la ponderacion entre su propio interes y el del trabajador, e informarlo antes de que comience a usar el vehiculo, de forma transparente y en lenguaje sencillo.',
        nl: 'Voordat de verwerking begint, moet de werkgever de afweging maken tussen zijn eigen belang en dat van de werknemer, en de werknemer informeren voordat deze het voertuig gaat gebruiken, op transparante wijze en in eenvoudige taal.',
      },
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: {
        it: 'Base = interesse legittimo, non il consenso (DVI)',
        en: 'Basis = legitimate interest, not consent (DVI)',
        de: 'Grundlage = berechtigtes Interesse, nicht die Einwilligung (DVI)',
        fr: "Base = interet legitime, non le consentement (DVI)",
        es: 'Base = interes legitimo, no el consentimiento (DVI)',
        nl: 'Grondslag = gerechtvaardigd belang, niet de toestemming (DVI)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La base e l\'interesse legittimo del datore; il consenso del lavoratore non e ottenibile come base valida nel rapporto di lavoro.',
        en: "The basis is the employer's legitimate interest; the worker's consent cannot be obtained as a valid basis within the employment relationship.",
        de: 'Die Grundlage ist das berechtigte Interesse des Arbeitgebers; die Einwilligung des Beschaeftigten kann im Arbeitsverhaeltnis nicht als gueltige Grundlage eingeholt werden.',
        fr: "La base est l'interet legitime de l'employeur; le consentement du salarie ne peut pas etre obtenu comme base valable dans la relation de travail.",
        es: 'La base es el interes legitimo del empleador; el consentimiento del trabajador no puede obtenerse como base valida en la relacion laboral.',
        nl: 'De grondslag is het gerechtvaardigd belang van de werkgever; de toestemming van de werknemer kan binnen de arbeidsverhouding niet als geldige grondslag worden verkregen.',
      },
      fonte: FONTE_DVI_VIDEO,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'La legge lettone sul trattamento dei dati non prevede un\'autorizzazione preventiva del DVI; il titolare valuta da se la liceita.',
        en: 'Latvian data processing law does not provide for a prior authorisation by the DVI; the controller assesses lawfulness on its own.',
        de: 'Das lettische Datenschutzrecht sieht keine vorherige Genehmigung durch die DVI vor; der Verantwortliche beurteilt die Rechtmaessigkeit selbst.',
        fr: "La loi lettone sur le traitement des donnees ne prevoit pas d'autorisation prealable de la DVI; le responsable du traitement evalue lui-meme la liceite.",
        es: 'La ley letona sobre el tratamiento de datos no preve una autorizacion previa del DVI; el responsable evalua por si mismo la licitud.',
        nl: 'De Letse wet inzake gegevensverwerking voorziet niet in een voorafgaande toestemming van de DVI; de verwerkingsverantwoordelijke beoordeelt de rechtmatigheid zelf.',
      },
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: {
        it: "Niente trattamento durante l'uso privato del veicolo; niente sorveglianza continua",
        en: 'No processing during private use of the vehicle; no continuous surveillance',
        de: 'Keine Verarbeitung waehrend der privaten Nutzung des Fahrzeugs; keine kontinuierliche Ueberwachung',
        fr: "Pas de traitement pendant l'usage prive du vehicule; pas de surveillance continue",
        es: 'Ningun tratamiento durante el uso privado del vehiculo; ninguna vigilancia continua',
        nl: 'Geen verwerking tijdens privegebruik van het voertuig; geen continue bewaking',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il datore non ha base ne diritto di trattare i dati per il periodo in cui il lavoratore usa il veicolo per scopi privati; la sorveglianza continua e priva di giustificazione adeguata.',
        en: 'The employer has neither a basis nor a right to process data for the period in which the worker uses the vehicle for private purposes; continuous surveillance lacks adequate justification.',
        de: 'Der Arbeitgeber hat weder eine Grundlage noch ein Recht, Daten fuer den Zeitraum zu verarbeiten, in dem der Beschaeftigte das Fahrzeug fuer private Zwecke nutzt; die kontinuierliche Ueberwachung entbehrt einer angemessenen Rechtfertigung.',
        fr: "L'employeur n'a ni base ni droit de traiter les donnees pour la periode pendant laquelle le salarie utilise le vehicule a des fins privees; la surveillance continue est depourvue de justification adequate.",
        es: 'El empleador no tiene base ni derecho a tratar los datos durante el periodo en que el trabajador usa el vehiculo con fines privados; la vigilancia continua carece de justificacion adecuada.',
        nl: 'De werkgever heeft noch een grondslag noch een recht om gegevens te verwerken gedurende de periode waarin de werknemer het voertuig voor prive-doeleinden gebruikt; continue bewaking mist een adequate rechtvaardiging.',
      },
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per la sorveglianza sul luogo di lavoro e il monitoraggio sistematico dei dipendenti (lista DVI)",
        en: 'Impact assessment (DPIA) for workplace surveillance and systematic monitoring of employees (DVI list)',
        de: 'Folgenabschaetzung (DPIA) fuer die Ueberwachung am Arbeitsplatz und die systematische Ueberwachung der Beschaeftigten (DVI-Liste)',
        fr: "Analyse d'impact (DPIA) pour la surveillance sur le lieu de travail et le suivi systematique des salaries (liste DVI)",
        es: 'Evaluacion de impacto (DPIA) para la vigilancia en el lugar de trabajo y el seguimiento sistematico de los empleados (lista DVI)',
        nl: 'Effectbeoordeling (DPIA) voor toezicht op de werkplek en systematische monitoring van werknemers (DVI-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista DVI rende obbligatoria la valutazione d'impatto per la sorveglianza sul luogo di lavoro, il monitoraggio sistematico delle attivita dei dipendenti e il tracciamento su larga scala.",
        en: 'The DVI list makes the impact assessment mandatory for workplace surveillance, systematic monitoring of employees\' activities and large-scale tracking.',
        de: 'Die DVI-Liste macht die Folgenabschaetzung verpflichtend fuer die Ueberwachung am Arbeitsplatz, die systematische Ueberwachung der Taetigkeiten der Beschaeftigten und die grossangelegte Nachverfolgung.',
        fr: "La liste DVI rend l'analyse d'impact obligatoire pour la surveillance sur le lieu de travail, le suivi systematique des activites des salaries et le pistage a grande echelle.",
        es: 'La lista DVI hace obligatoria la evaluacion de impacto para la vigilancia en el lugar de trabajo, el seguimiento sistematico de las actividades de los empleados y el rastreo a gran escala.',
        nl: 'De DVI-lijst maakt de effectbeoordeling verplicht voor toezicht op de werkplek, systematische monitoring van de activiteiten van werknemers en grootschalige tracking.',
      },
      fonte: FONTE_DVI_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Svolgi il test di bilanciamento prima di iniziare il trattamento.',
        en: 'Carry out the balancing test before starting the processing.',
        de: 'Fuehren Sie den Abwaegungstest durch, bevor Sie mit der Verarbeitung beginnen.',
        fr: 'Effectuez le test de mise en balance avant de commencer le traitement.',
        es: 'Realice el test de ponderacion antes de iniciar el tratamiento.',
        nl: 'Voer de afwegingstoets uit voordat u met de verwerking begint.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (legitimate interest, not consent).',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (berechtigtes Interesse, nicht die Einwilligung).',
        fr: 'Identifiez une base juridique valable (interet legitime, non le consentement).',
        es: 'Identifique una base juridica valida (interes legitimo, no el consentimiento).',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang, niet de toestemming).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Informa i lavoratori prima che inizino a usare il veicolo, in modo trasparente e semplice.',
        en: 'Inform workers before they begin using the vehicle, in a transparent and plain way.',
        de: 'Informieren Sie die Beschaeftigten, bevor sie das Fahrzeug benutzen, transparent und einfach.',
        fr: "Informez les salaries avant qu'ils ne commencent a utiliser le vehicule, de maniere transparente et simple.",
        es: 'Informe a los trabajadores antes de que comiencen a usar el vehiculo, de forma transparente y sencilla.',
        nl: 'Informeer de werknemers voordat zij het voertuig gaan gebruiken, op transparante en eenvoudige wijze.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per la sorveglianza sul luogo di lavoro.",
        en: 'Carry out the impact assessment (DPIA) for workplace surveillance.',
        de: 'Fuehren Sie die Folgenabschaetzung (DPIA) fuer die Ueberwachung am Arbeitsplatz durch.',
        fr: "Effectuez l'analyse d'impact (DPIA) pour la surveillance sur le lieu de travail.",
        es: 'Realice la evaluacion de impacto (DPIA) para la vigilancia en el lugar de trabajo.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor toezicht op de werkplek.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente trattamento durante l\'uso privato, niente sorveglianza continua.',
        en: 'Configure the system: no processing during private use, no continuous surveillance.',
        de: 'Konfigurieren Sie das System: keine Verarbeitung waehrend der privaten Nutzung, keine kontinuierliche Ueberwachung.',
        fr: "Configurez le systeme: pas de traitement pendant l'usage prive, pas de surveillance continue.",
        es: 'Configure el sistema: ningun tratamiento durante el uso privado, ninguna vigilancia continua.',
        nl: 'Configureer het systeem: geen verwerking tijdens privegebruik, geen continue bewaking.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'In caso di cambio sistema: se cambi sistema o software di monitoraggio, aggiorna e ri-consegna l’informativa, e verifica se va rinnovato l’accordo o l’autorizzazione nazionale per il controllo a distanza. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: quella consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether the national agreement or authorisation for remote monitoring needs renewing. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus und prüfen Sie, ob die nationale Vereinbarung oder Genehmigung zur Fernüberwachung erneuert werden muss. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si l’accord ou l’autorisation nationale de contrôle à distance doit être renouvelé. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'En caso de cambio de sistema: si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debe renovarse el acuerdo o la autorización nacional para el control a distancia. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la entregada antes no basta.',
        nl: 'Bij een systeemwissel: als je van monitoringsysteem of -software verandert, werk de privacyverklaring bij en verstrek deze opnieuw, en controleer of de nationale overeenkomst of toestemming voor controle op afstand moet worden vernieuwd. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'DVI, reclami',
      portale: FONTE_DVI_RECLAMO.url,
      urlFonte: FONTE_DVI_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euros or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4% des Umsatzes (DSGVO)',
      fr: "jusqu'a 20 millions d'euros ou 4% du chiffre d'affaires (RGPD)",
      es: 'hasta 20 millones de euros o el 4% de la facturacion (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: 'Non risulta una multa del DVI specifica e pubblicata per il GPS sui dipendenti. In un caso del 2023 il DVI ha indagato la societa QUANTRUM per una videosorveglianza che registrava anche l\'audio e ha ordinato di cessare la registrazione audio (provvedimento correttivo, senza multa). Il rischio sanzionatorio resta quello generale del GDPR (art. 83).',
      en: 'There is no specific, published DVI fine for GPS tracking of employees. In a 2023 case the DVI investigated the company QUANTRUM for video surveillance that also recorded audio and ordered it to stop the audio recording (corrective measure, without a fine). The penalty risk remains the general one under the GDPR (Art. 83).',
      de: 'Es ist keine spezifische, veroeffentlichte Geldbusse der DVI fuer GPS-Tracking von Beschaeftigten bekannt. In einem Fall aus dem Jahr 2023 untersuchte die DVI das Unternehmen QUANTRUM wegen einer Videoueberwachung, die auch Audio aufzeichnete, und ordnete an, die Audioaufzeichnung einzustellen (korrektive Massnahme, ohne Geldbusse). Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).',
      fr: "Il n'existe pas d'amende de la DVI specifique et publiee pour le suivi GPS des salaries. Dans une affaire de 2023, la DVI a enquete sur la societe QUANTRUM pour une videosurveillance qui enregistrait aussi l'audio et lui a ordonne de cesser l'enregistrement audio (mesure corrective, sans amende). Le risque de sanction reste celui, general, du RGPD (art. 83).",
      es: "No consta una multa del DVI especifica y publicada por el GPS de los empleados. En un caso de 2023 el DVI investigo a la empresa QUANTRUM por una videovigilancia que tambien grababa el audio y ordeno cesar la grabacion de audio (medida correctiva, sin multa). El riesgo sancionador sigue siendo el general del RGPD (art. 83).",
      nl: 'Er is geen specifieke, gepubliceerde boete van de DVI voor GPS-tracking van werknemers. In een zaak uit 2023 onderzocht de DVI het bedrijf QUANTRUM wegens cameratoezicht dat ook audio opnam en gelastte het de audio-opname te staken (corrigerende maatregel, zonder boete). Het sanctierisico blijft het algemene risico van de AVG (art. 83).',
    },
    urlFonte: FONTE_DVI_GPS.url,
  },

  fonti: [
    FONTE_DVI_GPS,
    FONTE_DVI_VIDEO,
    FONTE_DVI_VIDEO_REMOTO,
    FONTE_DVI_DPIA,
    FONTE_DVI_RECLAMO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
