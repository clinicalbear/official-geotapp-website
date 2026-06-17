/**
 * Scheda-paese Estonia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * FAQ dell'AKI (Garante estone) sui rapporti di lavoro, materiale dell'AKI sul
 * trattamento dei dati nel rapporto di lavoro, capitolo 5 dell'AKI sulla
 * valutazione d'impatto, pagina dell'AKI per presentare un reclamo, pagina
 * ufficiale dell'AKI e GDPR.
 *
 * L'Estonia ha un'unica autorita nazionale, l'AKI; non e uno Stato federale e
 * non c'e ripartizione regionale della vigilanza. Nessun numero, URL o autorita
 * e inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_AKI_RAPPORTI = {
  titolo: 'AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)',
  url: 'https://www.aki.ee/isikuandmed/kkk/toosuhted',
};
const FONTE_AKI_MATERIALE = {
  titolo: 'AKI, materiale sul trattamento dei dati nel rapporto di lavoro',
  url: 'https://www.aki.ee/isikuandmed/abimaterjalid/isikuandmete-tootlemine-toosuhtes',
};
const FONTE_AKI_DPIA = {
  titolo: "AKI, valutazione d'impatto (capitolo 5)",
  url: 'https://www.aki.ee/5-peatukk-andmekaitsealane-mojuhinnang',
};
const FONTE_AKI_RECLAMO = {
  titolo: 'AKI, presentare un reclamo',
  url: 'https://www.aki.ee/meist/vota-uhendust/kaebus-isikuandmete-kaitse-asjas',
};
const FONTE_AKI_UFFICIALE = {
  titolo: 'AKI (Garante estone), pagina ufficiale',
  url: 'https://www.aki.ee/en',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const estonia: SchedaPaese = {
  codiceISO: 'EE',
  slugCanonico: 'estonia',
  nome: 'Estonia',
  nomi: {
    it: 'Estonia',
    en: 'Estonia',
    'en-us': 'Estonia',
    'en-gb': 'Estonia',
    'en-au': 'Estonia',
    'en-ie': 'Estonia',
    'en-ca': 'Estonia',
    de: 'Estland',
    nl: 'Estland',
    fr: 'Estonie',
    es: 'Estonia',
    pt: 'Estónia',
    da: 'Estland',
    sv: 'Estland',
    nb: 'Estland',
    ru: 'Эстония',
  },
  bandiera: '🇪🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AKI (Andmekaitse Inspektsioon, Garante estone)',
    portale: FONTE_AKI_RECLAMO.url,
    urlFonte: FONTE_AKI_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Estonia ha un'unica autorita nazionale, l'AKI; nessuna ripartizione regionale. Particolarita: le multe GDPR passano per la procedura per contravvenzioni; dal novembre 2023 il tetto e allineato al GDPR.",
      en: 'Estonia has a single national authority, the AKI; no regional division. A particularity: GDPR fines go through the misdemeanour procedure; since November 2023 the cap is aligned with the GDPR.',
      de: 'Estland hat eine einzige nationale Behoerde, die AKI; keine regionale Aufteilung. Eine Besonderheit: DSGVO-Geldbussen laufen ueber das Ordnungswidrigkeitenverfahren; seit November 2023 ist die Obergrenze an die DSGVO angeglichen.',
      fr: "L'Estonie a une seule autorite nationale, l'AKI; aucune repartition regionale. Une particularite: les amendes RGPD passent par la procedure pour contraventions; depuis novembre 2023 le plafond est aligne sur le RGPD.",
      es: 'Estonia tiene una unica autoridad nacional, la AKI; sin reparto regional. Una particularidad: las multas del RGPD pasan por el procedimiento de faltas; desde noviembre de 2023 el limite esta alineado con el RGPD.',
      nl: 'Estland heeft een enkele nationale autoriteit, de AKI; geen regionale verdeling. Een bijzonderheid: AVG-boetes lopen via de overtredingsprocedure; sinds november 2023 is het plafond afgestemd op de AVG.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori e base giuridica documentata (interesse legittimo, non il consenso)',
        en: 'Prior information to workers and a documented legal basis (legitimate interest, not consent)',
        de: 'Vorherige Information der Beschaeftigten und dokumentierte Rechtsgrundlage (berechtigtes Interesse, nicht Einwilligung)',
        fr: 'Information prealable des salaries et base juridique documentee (interet legitime, pas le consentement)',
        es: 'Informacion previa a los trabajadores y base juridica documentada (interes legitimo, no el consentimiento)',
        nl: 'Voorafgaande informatie aan werknemers en een gedocumenteerde rechtsgrond (gerechtvaardigd belang, niet toestemming)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il datore deve spiegare ai lavoratori su quale base giuridica e installato il GPS; nel rapporto di lavoro il consenso non e di norma una base valida per lo squilibrio di potere.',
        en: 'The employer must explain to workers on which legal basis the GPS is installed; in the employment relationship consent is not normally a valid basis because of the power imbalance.',
        de: 'Der Arbeitgeber muss den Beschaeftigten erlaeutern, auf welcher Rechtsgrundlage das GPS installiert ist; im Arbeitsverhaeltnis ist die Einwilligung wegen des Machtungleichgewichts in der Regel keine gueltige Grundlage.',
        fr: "L'employeur doit expliquer aux salaries sur quelle base juridique le GPS est installe; dans la relation de travail le consentement n'est generalement pas une base valable en raison du desequilibre de pouvoir.",
        es: 'El empleador debe explicar a los trabajadores sobre que base juridica se instala el GPS; en la relacion laboral el consentimiento no suele ser una base valida por el desequilibrio de poder.',
        nl: 'De werkgever moet werknemers uitleggen op welke rechtsgrond de GPS is geinstalleerd; in de arbeidsrelatie is toestemming door de machtsongelijkheid doorgaans geen geldige grondslag.',
      },
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: {
        it: 'Consenso o accordo del consiglio aziendale obbligatorio prima di installare',
        en: 'Mandatory consent or agreement of the works council before installing',
        de: 'Verpflichtende Zustimmung oder Vereinbarung des Betriebsrats vor der Installation',
        fr: "Consentement ou accord obligatoire du comite d'entreprise avant l'installation",
        es: 'Consentimiento o acuerdo obligatorio del comite de empresa antes de instalar',
        nl: 'Verplichte instemming of overeenkomst van de ondernemingsraad voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "L'Estonia non prevede un consenso obbligatorio di un consiglio aziendale; i filtri sono il GDPR, le linee guida dell'AKI e il principio di necessita e proporzionalita.",
        en: "Estonia does not require mandatory consent from a works council; the filters are the GDPR, the AKI's guidelines and the principle of necessity and proportionality.",
        de: 'Estland sieht keine verpflichtende Zustimmung eines Betriebsrats vor; die Pruefkriterien sind die DSGVO, die Leitlinien der AKI und der Grundsatz der Erforderlichkeit und Verhaeltnismaessigkeit.',
        fr: "L'Estonie ne prevoit pas de consentement obligatoire d'un comite d'entreprise; les filtres sont le RGPD, les lignes directrices de l'AKI et le principe de necessite et de proportionnalite.",
        es: 'Estonia no prevé un consentimiento obligatorio de un comite de empresa; los filtros son el RGPD, las directrices de la AKI y el principio de necesidad y proporcionalidad.',
        nl: 'Estland vereist geen verplichte instemming van een ondernemingsraad; de toetsstenen zijn de AVG, de richtsnoeren van de AKI en het beginsel van noodzaak en evenredigheid.',
      },
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'AKI; il titolare valuta da se base giuridica e proporzionalita.",
        en: 'No prior authorisation from the AKI is required; the controller assesses the legal basis and proportionality on its own.',
        de: 'Eine vorherige Genehmigung der AKI ist nicht erforderlich; der Verantwortliche beurteilt Rechtsgrundlage und Verhaeltnismaessigkeit selbst.',
        fr: "Aucune autorisation prealable de l'AKI n'est necessaire; le responsable du traitement evalue lui-meme la base juridique et la proportionnalite.",
        es: 'No se necesita una autorizacion previa de la AKI; el responsable evalua por si mismo la base juridica y la proporcionalidad.',
        nl: 'Een voorafgaande toestemming van de AKI is niet nodig; de verwerkingsverantwoordelijke beoordeelt zelf de rechtsgrond en de evenredigheid.',
      },
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: {
        it: 'GPS proporzionato, solo in orario, niente tracciamento in tempo reale fuori orario, disattivabile',
        en: 'Proportionate GPS, only during working hours, no real-time tracking outside working hours, switchable off',
        de: 'Verhaeltnismaessiges GPS, nur waehrend der Arbeitszeit, keine Echtzeitortung ausserhalb der Arbeitszeit, abschaltbar',
        fr: 'GPS proportionne, uniquement pendant les heures de travail, pas de suivi en temps reel hors des heures de travail, desactivable',
        es: 'GPS proporcionado, solo en horario laboral, sin seguimiento en tiempo real fuera del horario, desactivable',
        nl: 'Evenredige GPS, alleen tijdens werktijd, geen realtime volgen buiten werktijd, uitschakelbaar',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il trattamento sul luogo di lavoro deve essere proporzionato ai rischi; il datore non può seguire i lavoratori in tempo reale fuori dall\'orario di lavoro.',
        en: 'Processing at the workplace must be proportionate to the risks; the employer cannot follow workers in real time outside working hours.',
        de: 'Die Verarbeitung am Arbeitsplatz muss verhaeltnismaessig zu den Risiken sein; der Arbeitgeber darf die Beschaeftigten ausserhalb der Arbeitszeit nicht in Echtzeit verfolgen.',
        fr: "Le traitement sur le lieu de travail doit etre proportionne aux risques; l'employeur ne peut pas suivre les salaries en temps reel en dehors des heures de travail.",
        es: 'El tratamiento en el lugar de trabajo debe ser proporcionado a los riesgos; el empleador no puede seguir a los trabajadores en tiempo real fuera del horario laboral.',
        nl: 'De verwerking op de werkplek moet evenredig zijn aan de risicos; de werkgever mag werknemers buiten werktijd niet in realtime volgen.',
      },
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico delle attività dei dipendenti e il tracciamento della posizione in tempo reale (lista AKI)",
        en: 'Impact assessment (DPIA) for systematic monitoring of employees activities and real-time location tracking (AKI list)',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer die systematische Ueberwachung der Taetigkeiten der Beschaeftigten und die Echtzeit-Standortverfolgung (AKI-Liste)',
        fr: "Analyse d'impact (AIPD) pour la surveillance systematique des activites des salaries et le suivi de la position en temps reel (liste AKI)",
        es: 'Evaluacion de impacto (EIPD) para la supervision sistematica de las actividades de los empleados y el seguimiento de la ubicacion en tiempo real (lista AKI)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de systematische monitoring van de activiteiten van werknemers en het realtime volgen van de locatie (AKI-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista AKI include il monitoraggio sistematico delle attività dei dipendenti su larga scala e il tracciamento in tempo reale della posizione di una persona tra i casi che richiedono una valutazione d'impatto.",
        en: 'The AKI list includes large-scale systematic monitoring of employees activities and real-time tracking of a person location among the cases that require an impact assessment.',
        de: 'Die AKI-Liste fuehrt die systematische Ueberwachung der Taetigkeiten der Beschaeftigten in grossem Umfang und die Echtzeitverfolgung des Standorts einer Person unter den Faellen auf, die eine Folgenabschaetzung erfordern.',
        fr: "La liste de l'AKI inclut la surveillance systematique a grande echelle des activites des salaries et le suivi en temps reel de la position d'une personne parmi les cas qui exigent une analyse d'impact.",
        es: 'La lista de la AKI incluye la supervision sistematica a gran escala de las actividades de los empleados y el seguimiento en tiempo real de la ubicacion de una persona entre los casos que requieren una evaluacion de impacto.',
        nl: 'De AKI-lijst noemt de grootschalige systematische monitoring van de activiteiten van werknemers en het realtime volgen van de locatie van een persoon onder de gevallen die een effectbeoordeling vereisen.',
      },
      fonte: FONTE_AKI_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso) e documentala.',
        en: 'Identify a valid legal basis (legitimate interest, not consent) and document it.',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (berechtigtes Interesse, nicht Einwilligung) und dokumentieren Sie sie.',
        fr: 'Determinez une base juridique valable (interet legitime, pas le consentement) et documentez-la.',
        es: 'Identifique una base juridica valida (interes legitimo, no el consentimiento) y documentela.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang, niet toestemming) en documenteer deze.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Verifica che il trattamento sia proporzionato ai rischi effettivi.',
        en: 'Check that the processing is proportionate to the actual risks.',
        de: 'Pruefen Sie, ob die Verarbeitung verhaeltnismaessig zu den tatsaechlichen Risiken ist.',
        fr: 'Verifiez que le traitement est proportionne aux risques reels.',
        es: 'Compruebe que el tratamiento sea proporcionado a los riesgos reales.',
        nl: 'Controleer of de verwerking evenredig is aan de werkelijke risicos.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico o il tracciamento in tempo reale.",
        en: 'Carry out the impact assessment (DPIA) for systematic monitoring or real-time tracking.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) fuer die systematische Ueberwachung oder die Echtzeitverfolgung durch.',
        fr: "Realisez l'analyse d'impact (AIPD) pour la surveillance systematique ou le suivi en temps reel.",
        es: 'Realice la evaluacion de impacto (EIPD) para la supervision sistematica o el seguimiento en tiempo real.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit voor de systematische monitoring of het realtime volgen.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Informa i lavoratori in anticipo (art. 13 GDPR), spiegando la base giuridica del GPS.',
        en: 'Inform workers in advance (Art. 13 GDPR), explaining the legal basis of the GPS.',
        de: 'Informieren Sie die Beschaeftigten im Voraus (Art. 13 DSGVO) und erlaeutern Sie die Rechtsgrundlage des GPS.',
        fr: 'Informez les salaries a l\'avance (art. 13 RGPD) en expliquant la base juridique du GPS.',
        es: 'Informe a los trabajadores con antelacion (art. 13 RGPD), explicando la base juridica del GPS.',
        nl: 'Informeer de werknemers vooraf (art. 13 AVG) en leg de rechtsgrond van de GPS uit.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: solo in orario, niente tracciamento in tempo reale fuori orario, disattivabile.',
        en: 'Configure the system: only during working hours, no real-time tracking outside working hours, switchable off.',
        de: 'Konfigurieren Sie das System: nur waehrend der Arbeitszeit, keine Echtzeitortung ausserhalb der Arbeitszeit, abschaltbar.',
        fr: 'Configurez le systeme: uniquement pendant les heures de travail, pas de suivi en temps reel hors des heures de travail, desactivable.',
        es: 'Configure el sistema: solo en horario laboral, sin seguimiento en tiempo real fuera del horario, desactivable.',
        nl: 'Configureer het systeem: alleen tijdens werktijd, geen realtime volgen buiten werktijd, uitschakelbaar.',
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
      ente: 'AKI, reclami',
      portale: FONTE_AKI_RECLAMO.url,
      urlFonte: FONTE_AKI_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euro or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4% des Umsatzes (DSGVO)',
      fr: "jusqu'a 20 millions d'euros ou 4% du chiffre d'affaires (RGPD)",
      es: 'hasta 20 millones de euros o el 4% de la facturacion (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AKI specifica e pubblicata per il GPS sui dipendenti. In Estonia le multe GDPR passano per la procedura per contravvenzioni e storicamente sono state basse; dal novembre 2023 il tetto e allineato al GDPR (fino a 20 milioni di euro o 4% del fatturato). L'AKI vigila in particolare su videosorveglianza e monitoraggio dei dipendenti.",
      en: "There is no specific, published AKI fine for GPS on employees. In Estonia GDPR fines go through the misdemeanour procedure and have historically been low; since November 2023 the cap is aligned with the GDPR (up to 20 million euro or 4% of turnover). The AKI keeps watch in particular over video surveillance and employee monitoring.",
      de: "Eine spezifische, veroeffentlichte Geldbusse der AKI fuer GPS bei Beschaeftigten ist nicht bekannt. In Estland laufen DSGVO-Geldbussen ueber das Ordnungswidrigkeitenverfahren und waren historisch niedrig; seit November 2023 ist die Obergrenze an die DSGVO angeglichen (bis zu 20 Millionen Euro oder 4% des Umsatzes). Die AKI achtet insbesondere auf Videoueberwachung und die Ueberwachung von Beschaeftigten.",
      fr: "Aucune amende de l'AKI specifique et publiee pour le GPS sur les salaries n'apparait. En Estonie les amendes RGPD passent par la procedure pour contraventions et ont historiquement ete faibles; depuis novembre 2023 le plafond est aligne sur le RGPD (jusqu'a 20 millions d'euros ou 4% du chiffre d'affaires). L'AKI veille en particulier sur la videosurveillance et la surveillance des salaries.",
      es: "No consta una multa de la AKI especifica y publicada para el GPS sobre los empleados. En Estonia las multas del RGPD pasan por el procedimiento de faltas y historicamente han sido bajas; desde noviembre de 2023 el limite esta alineado con el RGPD (hasta 20 millones de euros o el 4% de la facturacion). La AKI vigila en particular la videovigilancia y la supervision de los empleados.",
      nl: "Er is geen specifieke, gepubliceerde boete van de AKI voor GPS bij werknemers bekend. In Estland lopen AVG-boetes via de overtredingsprocedure en zijn ze historisch laag geweest; sinds november 2023 is het plafond afgestemd op de AVG (tot 20 miljoen euro of 4% van de omzet). De AKI houdt in het bijzonder toezicht op cameratoezicht en het monitoren van werknemers.",
    },
    urlFonte: FONTE_AKI_UFFICIALE.url,
  },

  fonti: [
    FONTE_AKI_RAPPORTI,
    FONTE_AKI_MATERIALE,
    FONTE_AKI_DPIA,
    FONTE_AKI_RECLAMO,
    FONTE_AKI_UFFICIALE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
