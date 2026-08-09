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
    ente: {
      it: 'DVI (Datu valsts inspekcija, Garante lettone)',
      en: 'DVI (Datu valsts inspekcija, Latvian data protection authority)',
      de: 'DVI (Datu valsts inspekcija, lettische Datenschutzbehörde)',
      fr: 'DVI (Datu valsts inspekcija, autorité lettone de protection des données)',
      es: 'DVI (Datu valsts inspekcija, autoridad letona de protección de datos)',
      nl: 'DVI (Datu valsts inspekcija, Letse gegevensbeschermingsautoriteit)',
      pt: 'DVI (Datu valsts inspekcija, autoridade letã de proteção de dados)',
      da: 'DVI (Datu valsts inspekcija, lettisk databeskyttelsesmyndighed)',
      sv: 'DVI (Datu valsts inspekcija, lettiska dataskyddsmyndigheten)',
      nb: 'DVI (Datu valsts inspekcija, latvisk datatilsyn)',
      ru: 'DVI (Datu valsts inspekcija, латвийский орган по защите данных)',
    },
    portale: FONTE_DVI_RECLAMO.url,
    urlFonte: FONTE_DVI_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Lettonia ha un'unica autorità nazionale, il DVI; nessuna ripartizione regionale.",
      en: 'Latvia has a single national authority, the DVI; there is no regional split.',
      de: 'Lettland hat eine einzige nationale Behörde, die DVI; es gibt keine regionale Aufteilung.',
      fr: "La Lettonie dispose d'une seule autorité nationale, la DVI; il n'existe pas de répartition régionale.",
      es: 'Letonia tiene una única autoridad nacional, la DVI; no existe un reparto regional.',
      nl: 'Letland heeft een enkele nationale autoriteit, de DVI; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Test di bilanciamento prima del trattamento e informazione preventiva ai lavoratori (DVI)',
        en: 'Balancing test before processing and prior notice to workers (DVI)',
        de: 'Abwägungstest vor der Verarbeitung und vorherige Information der Beschäftigten (DVI)',
        fr: 'Test de mise en balance avant le traitement et information préalable des salaries (DVI)',
        es: 'Test de ponderación antes del tratamiento e información previa a los trabajadores (DVI)',
        nl: 'Afwegingstoets voor de verwerking en voorafgaande informatie aan werknemers (DVI)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il datore deve, prima di iniziare il trattamento, valutare il bilanciamento tra il proprio interesse e quello del lavoratore, e informarlo prima che inizi a usare il veicolo, in modo trasparente e in linguaggio semplice.',
        en: 'Before starting the processing, the employer must assess the balance between its own interest and the worker\'s interest, and must inform the worker before they begin using the vehicle, in a transparent way and in plain language.',
        de: 'Der Arbeitgeber muss vor Beginn der Verarbeitung die Abwägung zwischen seinem eigenen Interesse und dem des Beschäftigten vornehmen und den Beschäftigten informieren, bevor dieser das Fahrzeug benutzt, transparent und in einfacher Sprache.',
        fr: "Avant de commencer le traitement, l'employeur doit évaluer la mise en balance entre son propre intérêt et celui du salarie, et l'informer avant qu'il ne commence a utiliser le véhicule, de manière transparente et en langage simple.",
        es: 'Antes de iniciar el tratamiento, el empleador debe evaluar la ponderación entre su propio interés y el del trabajador, e informarlo antes de que comience a usar el vehículo, de forma transparente y en lenguaje sencillo.',
        nl: 'Voordat de verwerking begint, moet de werkgever de afweging maken tussen zijn eigen belang en dat van de werknemer, en de werknemer informeren voordat deze het voertuig gaat gebruiken, op transparante wijze en in eenvoudige taal.',
      },
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: {
        it: 'Base = interesse legittimo, non il consenso (DVI)',
        en: 'Basis = legitimate interest, not consent (DVI)',
        de: 'Grundlage = berechtigtes Interesse, nicht die Einwilligung (DVI)',
        fr: "Base = intérêt légitime, non le consentement (DVI)",
        es: 'Base = interés legítimo, no el consentimiento (DVI)',
        nl: 'Grondslag = gerechtvaardigd belang, niet de toestemming (DVI)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La base e l\'interesse legittimo del datore; il consenso del lavoratore non e ottenibile come base valida nel rapporto di lavoro.',
        en: "The basis is the employer's legitimate interest; the worker's consent cannot be obtained as a valid basis within the employment relationship.",
        de: 'Die Grundlage ist das berechtigte Interesse des Arbeitgebers; die Einwilligung des Beschäftigten kann im Arbeitsverhältnis nicht als gültige Grundlage eingeholt werden.',
        fr: "La base est l'intérêt légitime de l'employeur; le consentement du salarie ne peut pas être obtenu comme base valable dans la relation de travail.",
        es: 'La base es el interés legítimo del empleador; el consentimiento del trabajador no puede obtenerse como base valida en la relación laboral.',
        nl: 'De grondslag is het gerechtvaardigd belang van de werkgever; de toestemming van de werknemer kan binnen de arbeidsverhouding niet als geldige grondslag worden verkregen.',
      },
      fonte: FONTE_DVI_VIDEO,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'La legge lettone sul trattamento dei dati non prevede un\'autorizzazione preventiva del DVI; il titolare valuta da se la liceità.',
        en: 'Latvian data processing law does not provide for a prior authorisation by the DVI; the controller assesses lawfulness on its own.',
        de: 'Das lettische Datenschutzrecht sieht keine vorherige Genehmigung durch die DVI vor; der Verantwortliche beurteilt die Rechtmäßigkeit selbst.',
        fr: "La loi lettone sur le traitement des données ne prévoit pas d'autorisation préalable de la DVI; le responsable du traitement évalue lui-même la licéité.",
        es: 'La ley letona sobre el tratamiento de datos no prevé una autorización previa del DVI; el responsable evalúa por si mismo la licitud.',
        nl: 'De Letse wet inzake gegevensverwerking voorziet niet in een voorafgaande toestemming van de DVI; de verwerkingsverantwoordelijke beoordeelt de rechtmatigheid zelf.',
      },
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: {
        it: "Niente trattamento durante l'uso privato del veicolo; niente sorveglianza continua",
        en: 'No processing during private use of the vehicle; no continuous surveillance',
        de: 'Keine Verarbeitung während der privaten Nutzung des Fahrzeugs; keine kontinuierliche Überwachung',
        fr: "Pas de traitement pendant l'usage prive du véhicule; pas de surveillance continue",
        es: 'Ningún tratamiento durante el uso privado del vehículo; ninguna vigilancia continua',
        nl: 'Geen verwerking tijdens privegebruik van het voertuig; geen continue bewaking',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il datore non ha base ne diritto di trattare i dati per il periodo in cui il lavoratore usa il veicolo per scopi privati; la sorveglianza continua e priva di giustificazione adeguata.',
        en: 'The employer has neither a basis nor a right to process data for the period in which the worker uses the vehicle for private purposes; continuous surveillance lacks adequate justification.',
        de: 'Der Arbeitgeber hat weder eine Grundlage noch ein Recht, Daten für den Zeitraum zu verarbeiten, in dem der Beschäftigte das Fahrzeug für private Zwecke nutzt; die kontinuierliche Überwachung entbehrt einer angemessenen Rechtfertigung.',
        fr: "L'employeur n'a ni base ni droit de traiter les données pour la période pendant laquelle le salarie utilise le véhicule a des fins privées; la surveillance continue est dépourvue de justification adéquate.",
        es: 'El empleador no tiene base ni derecho a tratar los datos durante el periodo en que el trabajador usa el vehículo con fines privados; la vigilancia continua carece de justificación adecuada.',
        nl: 'De werkgever heeft noch een grondslag noch een recht om gegevens te verwerken gedurende de periode waarin de werknemer het voertuig voor prive-doeleinden gebruikt; continue bewaking mist een adequate rechtvaardiging.',
      },
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per la sorveglianza sul luogo di lavoro e il monitoraggio sistematico dei dipendenti (lista DVI)",
        en: 'Impact assessment (DPIA) for workplace surveillance and systematic monitoring of employees (DVI list)',
        de: 'Folgenabschätzung (DPIA) für die Überwachung am Arbeitsplatz und die systematische Überwachung der Beschäftigten (DVI-Liste)',
        fr: "Analyse d'impact (DPIA) pour la surveillance sur le lieu de travail et le suivi systématique des salaries (liste DVI)",
        es: 'Evaluación de impacto (DPIA) para la vigilancia en el lugar de trabajo y el seguimiento sistemático de los empleados (lista DVI)',
        nl: 'Effectbeoordeling (DPIA) voor toezicht op de werkplek en systematische monitoring van werknemers (DVI-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista DVI rende obbligatoria la valutazione d'impatto per la sorveglianza sul luogo di lavoro, il monitoraggio sistematico delle attività dei dipendenti e il tracciamento su larga scala.",
        en: 'The DVI list makes the impact assessment mandatory for workplace surveillance, systematic monitoring of employees\' activities and large-scale tracking.',
        de: 'Die DVI-Liste macht die Folgenabschätzung verpflichtend für die Überwachung am Arbeitsplatz, die systematische Überwachung der Tätigkeiten der Beschäftigten und die großangelegte Nachverfolgung.',
        fr: "La liste DVI rend l'analyse d'impact obligatoire pour la surveillance sur le lieu de travail, le suivi systématique des activités des salaries et le pistage a grande échelle.",
        es: 'La lista DVI hace obligatoria la evaluación de impacto para la vigilancia en el lugar de trabajo, el seguimiento sistemático de las actividades de los empleados y el rastreo a gran escala.',
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
        de: 'Führen Sie den Abwägungstest durch, bevor Sie mit der Verarbeitung beginnen.',
        fr: 'Effectuez le test de mise en balance avant de commencer le traitement.',
        es: 'Realice el test de ponderación antes de iniciar el tratamiento.',
        nl: 'Voer de afwegingstoets uit voordat u met de verwerking begint.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (legitimate interest, not consent).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, nicht die Einwilligung).',
        fr: 'Identifiez une base juridique valable (intérêt légitime, non le consentement).',
        es: 'Identifique una base jurídica valida (interés legítimo, no el consentimiento).',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang, niet de toestemming).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Informa i lavoratori prima che inizino a usare il veicolo, in modo trasparente e semplice.',
        en: 'Inform workers before they begin using the vehicle, in a transparent and plain way.',
        de: 'Informieren Sie die Beschäftigten, bevor sie das Fahrzeug benutzen, transparent und einfach.',
        fr: "Informez les salaries avant qu'ils ne commencent a utiliser le véhicule, de manière transparente et simple.",
        es: 'Informe a los trabajadores antes de que comiencen a usar el vehículo, de forma transparente y sencilla.',
        nl: 'Informeer de werknemers voordat zij het voertuig gaan gebruiken, op transparante en eenvoudige wijze.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per la sorveglianza sul luogo di lavoro.",
        en: 'Carry out the impact assessment (DPIA) for workplace surveillance.',
        de: 'Führen Sie die Folgenabschätzung (DPIA) für die Überwachung am Arbeitsplatz durch.',
        fr: "Effectuez l'analyse d'impact (DPIA) pour la surveillance sur le lieu de travail.",
        es: 'Realice la evaluación de impacto (DPIA) para la vigilancia en el lugar de trabajo.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor toezicht op de werkplek.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente trattamento durante l\'uso privato, niente sorveglianza continua.',
        en: 'Configure the system: no processing during private use, no continuous surveillance.',
        de: 'Konfigurieren Sie das System: keine Verarbeitung während der privaten Nutzung, keine kontinuierliche Überwachung.',
        fr: "Configurez le système: pas de traitement pendant l'usage prive, pas de surveillance continue.",
        es: 'Configure el sistema: ningún tratamiento durante el uso privado, ninguna vigilancia continua.',
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
      fr: "jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires (RGPD)",
      es: 'hasta 20 millones de euros o el 4% de la facturación (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: 'Non risulta una multa del DVI specifica e pubblicata per il GPS sui dipendenti. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).',
      en: 'There is no specific, published DVI fine for GPS tracking of employees. The penalty risk remains the general one under the GDPR (Art. 83).',
      de: 'Es ist keine spezifische, veröffentlichte Geldbusse der DVI für GPS-Tracking von Beschäftigten bekannt. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).',
      fr: "Il n'existe pas d'amende de la DVI spécifique et publiée pour le suivi GPS des salaries. Le risque de sanction reste celui, général, du RGPD (art. 83).",
      es: "No consta una multa del DVI especifica y publicada por el GPS de los empleados. El riesgo sancionador sigue siendo el general del RGPD (art. 83).",
      nl: 'Er is geen specifieke, gepubliceerde boete van de DVI voor GPS-tracking van werknemers. Het sanctierisico blijft het algemene risico van de AVG (art. 83).',
    },
    urlFonte: FONTE_DVI_GPS.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_DVI_GPS,
    FONTE_DVI_VIDEO,
    FONTE_DVI_VIDEO_REMOTO,
    FONTE_DVI_DPIA,
    FONTE_DVI_RECLAMO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-08-03',
};
