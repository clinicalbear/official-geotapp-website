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
const FONTE_TUIS = {
  titolo: 'Legge sul fiduciario dei lavoratori (Töötajate usaldusisiku seadus), §§ 17 e 20 - Riigi Teataja',
  url: 'https://www.riigiteataja.ee/akt/107012025003',
};
const FONTE_IKS = {
  titolo: 'Legge estone sulla protezione dei dati personali (Isikuandmete kaitse seadus), §§ 62-73 - Riigi Teataja',
  url: 'https://www.riigiteataja.ee/akt/IKS',
};
const FONTE_AKI_GUIDA_2011 = {
  titolo: 'AKI, guida per il personale sui dati nel rapporto di lavoro (2011, ante-GDPR), punto 2.9 GPS',
  url: 'https://www.aki.ee/sites/default/files/dokumendid/isikuandmed_toosuhetes_juhis_personalitootajale.pdf',
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
    ente: {
      it: 'AKI (Andmekaitse Inspektsioon, Garante estone)',
      en: 'AKI (Andmekaitse Inspektsioon, Estonian data protection authority)',
      de: 'AKI (Andmekaitse Inspektsioon, estnische Datenschutzbehörde)',
      fr: 'AKI (Andmekaitse Inspektsioon, autorité estonienne de protection des données)',
      es: 'AKI (Andmekaitse Inspektsioon, autoridad estonia de protección de datos)',
      nl: 'AKI (Andmekaitse Inspektsioon, Estse gegevensbeschermingsautoriteit)',
      pt: 'AKI (Andmekaitse Inspektsioon, autoridade estónia de proteção de dados)',
      da: 'AKI (Andmekaitse Inspektsioon, estisk databeskyttelsesmyndighed)',
      sv: 'AKI (Andmekaitse Inspektsioon, estniska dataskyddsmyndigheten)',
      nb: 'AKI (Andmekaitse Inspektsioon, estisk datatilsyn)',
      ru: 'AKI (Andmekaitse Inspektsioon, эстонский орган по защите данных)',
    },
    portale: FONTE_AKI_RECLAMO.url,
    urlFonte: FONTE_AKI_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Estonia ha un'unica autorità nazionale, l'AKI; nessuna ripartizione regionale. Particolarità: le multe GDPR passano per la procedura per contravvenzioni; dal novembre 2023 il tetto e allineato al GDPR.",
      en: 'Estonia has a single national authority, the AKI; no regional division. A particularity: GDPR fines go through the misdemeanour procedure; since November 2023 the cap is aligned with the GDPR.',
      de: 'Estland hat eine einzige nationale Behörde, die AKI; keine regionale Aufteilung. Eine Besonderheit: DSGVO-Geldbußen laufen über das Ordnungswidrigkeitenverfahren; seit November 2023 ist die Obergrenze an die DSGVO angeglichen.',
      fr: "L'Estonie a une seule autorité nationale, l'AKI; aucune répartition régionale. Une particularité: les amendes RGPD passent par la procédure pour contraventions; depuis novembre 2023 le plafond est aligne sur le RGPD.",
      es: 'Estonia tiene una única autoridad nacional, la AKI; sin reparto regional. Una particularidad: las multas del RGPD pasan por el procedimiento de faltas; desde noviembre de 2023 el límite esta alineado con el RGPD.',
      nl: 'Estland heeft een enkele nationale autoriteit, de AKI; geen regionale verdeling. Een bijzonderheid: AVG-boetes lopen via de overtredingsprocedure; sinds november 2023 is het plafond afgestemd op de AVG.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori e base giuridica documentata (interesse legittimo, non il consenso)',
        en: 'Prior information to workers and a documented legal basis (legitimate interest, not consent)',
        de: 'Vorherige Information der Beschäftigten und dokumentierte Rechtsgrundlage (berechtigtes Interesse, nicht Einwilligung)',
        fr: 'Information préalable des salaries et base juridique documentée (intérêt légitime, pas le consentement)',
        es: 'Información previa a los trabajadores y base jurídica documentada (interés legítimo, no el consentimiento)',
        nl: 'Voorafgaande informatie aan werknemers en een gedocumenteerde rechtsgrond (gerechtvaardigd belang, niet toestemming)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve spiegare ai lavoratori su quale base giuridica e installato il GPS; nel rapporto di lavoro il consenso non è di norma una base valida per lo squilibrio di potere, è la base e di regola il legittimo interesse (con una relativa analisi) oppure l'esecuzione del contratto di lavoro.",
        en: 'The employer must explain to workers on which legal basis the GPS is installed; in the employment relationship consent is not normally a valid basis because of the power imbalance, and the basis is as a rule legitimate interest (with a supporting analysis) or performance of the employment contract.',
        de: 'Der Arbeitgeber muss den Beschäftigten erläutern, auf welcher Rechtsgrundlage das GPS installiert ist; im Arbeitsverhältnis ist die Einwilligung wegen des Machtungleichgewichts in der Regel keine gültige Grundlage, die Grundlage ist regelmäßig das berechtigte Interesse (mit entsprechender Analyse) oder die Erfüllung des Arbeitsvertrags.',
        fr: "L'employeur doit expliquer aux salariés sur quelle base juridique le GPS est installé ; dans la relation de travail le consentement n'est généralement pas une base valable en raison du déséquilibre de pouvoir, et la base est en règle générale l'intérêt légitime (avec une analyse à l'appui) ou l'exécution du contrat de travail.",
        es: 'El empleador debe explicar a los trabajadores sobre qué base jurídica se instala el GPS; en la relación laboral el consentimiento no suele ser una base válida por el desequilibrio de poder, y la base suele ser el interés legítimo (con un análisis que lo respalde) o la ejecución del contrato de trabajo.',
        nl: 'De werkgever moet werknemers uitleggen op welke rechtsgrond de GPS is geïnstalleerd; in de arbeidsrelatie is toestemming door de machtsongelijkheid doorgaans geen geldige grondslag, en de grondslag is in de regel gerechtvaardigd belang (met een onderbouwende analyse) of uitvoering van de arbeidsovereenkomst.',
      },
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: {
        it: 'Consenso o accordo del consiglio aziendale obbligatorio prima di installare',
        en: 'Mandatory consent or agreement of the works council before installing',
        de: 'Verpflichtende Zustimmung oder Vereinbarung des Betriebsrats vor der Installation',
        fr: "Consentement ou accord obligatoire du comite d'entreprise avant l'installation",
        es: 'Consentimiento o acuerdo obligatorio del comité de empresa antes de instalar',
        nl: 'Verplichte instemming of overeenkomst van de ondernemingsraad voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "L'Estonia non prevede un consenso o un accordo obbligatorio di un consiglio aziendale; i filtri sono il GDPR, le linee guida dell'AKI e il principio di necessità e proporzionalità. Con almeno 30 dipendenti, pero, il datore deve informare e consultare il fiduciario dei lavoratori (o, se manca, i lavoratori) sulle decisioni che comportano cambiamenti rilevanti nell'organizzazione del lavoro: può riguardare l'introduzione di un sistema di monitoraggio (legge sul fiduciario, §§ 17 e 20).",
        en: "Estonia does not require mandatory consent or agreement from a works council; the filters are the GDPR, the AKI's guidelines and the principle of necessity and proportionality. With at least 30 employees, however, the employer must inform and consult the employees' trustee (or, failing one, the employees) on planned decisions likely to bring significant changes in work organisation: this may cover introducing a monitoring system (Employees' Trustee Act, §§ 17 and 20).",
        de: 'Estland sieht keine verpflichtende Zustimmung oder Vereinbarung eines Betriebsrats vor; die Prüfkriterien sind die DSGVO, die Leitlinien der AKI und der Grundsatz der Erforderlichkeit und Verhältnismäßigkeit. Bei mindestens 30 Beschäftigten muss der Arbeitgeber jedoch den Vertrauensmann der Beschäftigten (oder, wenn es keinen gibt, die Beschäftigten) über geplante Entscheidungen mit wesentlichen Änderungen der Arbeitsorganisation informieren und konsultieren: das kann die Einführung eines Überwachungssystems betreffen (Gesetz über den Vertrauensmann der Arbeitnehmer, §§ 17 und 20).',
        fr: "L'Estonie ne prévoit pas de consentement ou d'accord obligatoire d'un comité d'entreprise ; les filtres sont le RGPD, les lignes directrices de l'AKI et le principe de nécessité et de proportionnalité. À partir de 30 salariés, l'employeur doit toutefois informer et consulter le délégué de confiance des salariés (ou, à défaut, les salariés) sur les décisions prévues entraînant des changements importants dans l'organisation du travail : cela peut concerner l'introduction d'un système de surveillance (loi sur le délégué de confiance des salariés, §§ 17 et 20).",
        es: 'Estonia no prevé un consentimiento o acuerdo obligatorio de un comité de empresa; los filtros son el RGPD, las directrices de la AKI y el principio de necesidad y proporcionalidad. Con al menos 30 empleados, sin embargo, el empleador debe informar y consultar al delegado de confianza de los trabajadores (o, en su defecto, a los trabajadores) sobre las decisiones previstas que supongan cambios importantes en la organización del trabajo: puede afectar a la introducción de un sistema de vigilancia (ley del delegado de confianza de los trabajadores, §§ 17 y 20).',
        nl: 'Estland vereist geen verplichte instemming of overeenkomst van een ondernemingsraad; de toetsstenen zijn de AVG, de richtsnoeren van de AKI en het beginsel van noodzaak en evenredigheid. Bij minstens 30 werknemers moet de werkgever echter de vertrouwenspersoon van de werknemers (of, bij ontstentenis, de werknemers) informeren en raadplegen over voorgenomen besluiten die tot belangrijke wijzigingen in de arbeidsorganisatie leiden: dit kan de invoering van een monitoringsysteem betreffen (wet op de vertrouwenspersoon van werknemers, §§ 17 en 20).',
      },
      fonte: FONTE_TUIS,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'AKI; il titolare valuta da se base giuridica e proporzionalità.",
        en: 'No prior authorisation from the AKI is required; the controller assesses the legal basis and proportionality on its own.',
        de: 'Eine vorherige Genehmigung der AKI ist nicht erforderlich; der Verantwortliche beurteilt Rechtsgrundlage und Verhältnismäßigkeit selbst.',
        fr: "Aucune autorisation préalable de l'AKI n'est nécessaire; le responsable du traitement évalue lui-même la base juridique et la proportionnalité.",
        es: 'No se necesita una autorización previa de la AKI; el responsable evalúa por si mismo la base jurídica y la proporcionalidad.',
        nl: 'Een voorafgaande toestemming van de AKI is niet nodig; de verwerkingsverantwoordelijke beoordeelt zelf de rechtsgrond en de evenredigheid.',
      },
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: {
        it: 'GPS proporzionato, con la misura meno invasiva; niente tracciamento in tempo reale fuori orario',
        en: 'Proportionate GPS, using the least intrusive measure; no real-time tracking outside working hours',
        de: 'Verhältnismäßiges GPS mit dem mildesten Mittel; keine Echtzeitortung außerhalb der Arbeitszeit',
        fr: 'GPS proportionné, avec la mesure la moins intrusive ; pas de suivi en temps réel hors des heures de travail',
        es: 'GPS proporcionado, con la medida menos intrusiva; sin seguimiento en tiempo real fuera del horario',
        nl: 'Evenredige GPS met de minst ingrijpende maatregel; geen realtime volgen buiten werktijd',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Per l\'AKI i dispositivi di sorveglianza (GPS compreso) sono l\'intrusione più intensa nella vita privata: il datore deve scegliere la misura meno dannosa per il lavoratore, avere una base giuridica e trattare i dati in modo proporzionato ai rischi. Secondo la guida dell\'AKI del 2011 (ante-GDPR) il datore non può seguire il lavoratore in tempo reale con il GPS fuori dall\'orario di lavoro.',
        en: "For the AKI, monitoring devices (GPS included) are the most intensive intrusion into private life: the employer must choose the measure least harmful to the worker, have a legal basis and process data proportionately to the risks. According to the AKI's 2011 guide (pre-GDPR) the employer cannot follow a worker in real time with GPS outside working hours.",
        de: 'Nach Auffassung der AKI sind Überwachungsgeräte (einschließlich GPS) der intensivste Eingriff in das Privatleben: Der Arbeitgeber muss das für den Beschäftigten mildeste Mittel wählen, eine Rechtsgrundlage haben und die Daten verhältnismäßig zu den Risiken verarbeiten. Nach dem Leitfaden der AKI von 2011 (vor der DSGVO) darf der Arbeitgeber Beschäftigte außerhalb der Arbeitszeit nicht per GPS in Echtzeit verfolgen.',
        fr: "Pour l'AKI, les dispositifs de surveillance (GPS compris) sont l'atteinte la plus intense à la vie privée : l'employeur doit choisir la mesure la moins dommageable pour le salarié, disposer d'une base juridique et traiter les données de façon proportionnée aux risques. Selon le guide de l'AKI de 2011 (antérieur au RGPD), l'employeur ne peut pas suivre un salarié en temps réel par GPS en dehors des heures de travail.",
        es: 'Para la AKI, los dispositivos de vigilancia (GPS incluido) son la intromisión más intensa en la vida privada: el empleador debe elegir la medida menos lesiva para el trabajador, contar con una base jurídica y tratar los datos de forma proporcionada a los riesgos. Según la guía de la AKI de 2011 (anterior al RGPD), el empleador no puede seguir a un trabajador en tiempo real con GPS fuera del horario laboral.',
        nl: "Volgens de AKI zijn bewakingsapparaten (gps inbegrepen) de meest intensieve inbreuk op het privéleven: de werkgever moet de voor de werknemer minst schadelijke maatregel kiezen, een rechtsgrond hebben en de gegevens evenredig aan de risico's verwerken. Volgens de gids van de AKI uit 2011 (van vóór de AVG) mag de werkgever een werknemer buiten werktijd niet in realtime met gps volgen.",
      },
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico delle attività dei dipendenti e il tracciamento della posizione in tempo reale (lista AKI)",
        en: 'Impact assessment (DPIA) for systematic monitoring of employees activities and real-time location tracking (AKI list)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die systematische Überwachung der Tätigkeiten der Beschäftigten und die Echtzeit-Standortverfolgung (AKI-Liste)',
        fr: "Analyse d'impact (AIPD) pour la surveillance systématique des activités des salaries et le suivi de la position en temps réel (liste AKI)",
        es: 'Evaluación de impacto (EIPD) para la supervisión sistemática de las actividades de los empleados y el seguimiento de la ubicación en tiempo real (lista AKI)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de systematische monitoring van de activiteiten van werknemers en het realtime volgen van de locatie (AKI-lijst)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "La lista AKI include, tra i casi che richiedono una valutazione d'impatto, il trattamento su larga scala che comporta il monitoraggio sistematico delle attività dei dipendenti è quello su larga scala che comporta il tracciamento della posizione in tempo reale. L'obbligo scatta quindi per i trattamenti su larga scala (numero di interessati, volume di dati, durata, ambito geografico); sotto quella soglia va comunque valutato il rischio caso per caso.",
        en: "The AKI list includes, among the cases that require an impact assessment, large-scale processing involving systematic monitoring of employees' activities and large-scale processing involving real-time location tracking. The duty therefore applies to large-scale processing (number of data subjects, data volume, duration, geographic scope); below that threshold the risk must still be assessed case by case.",
        de: 'Die AKI-Liste führt unter den Fällen, die eine Folgenabschätzung erfordern, die umfangreiche Verarbeitung mit systematischer Überwachung der Tätigkeiten der Beschäftigten und die umfangreiche Verarbeitung mit Echtzeitverfolgung des Standorts auf. Die Pflicht gilt daher für Verarbeitungen in großem Umfang (Zahl der Betroffenen, Datenmenge, Dauer, geografische Reichweite); darunter ist das Risiko im Einzelfall zu bewerten.',
        fr: "La liste de l'AKI range parmi les cas exigeant une analyse d'impact le traitement à grande échelle comportant une surveillance systématique des activités des salariés et celui, à grande échelle, comportant un suivi de la position en temps réel. L'obligation vaut donc pour les traitements à grande échelle (nombre de personnes, volume de données, durée, étendue géographique) ; en deçà, le risque doit être évalué au cas par cas.",
        es: 'La lista de la AKI incluye, entre los casos que requieren una evaluación de impacto, el tratamiento a gran escala que supone una supervisión sistemática de las actividades de los empleados y el que supone un seguimiento de la ubicación en tiempo real. La obligación rige, por tanto, para los tratamientos a gran escala (número de interesados, volumen de datos, duración, alcance geográfico); por debajo de ese umbral hay que valorar el riesgo caso por caso.',
        nl: 'De AKI-lijst noemt onder de gevallen die een effectbeoordeling vereisen de grootschalige verwerking met systematische monitoring van de activiteiten van werknemers en de grootschalige verwerking met realtime locatiebepaling. De verplichting geldt dus voor grootschalige verwerkingen (aantal betrokkenen, gegevensvolume, duur, geografische reikwijdte); daaronder moet het risico per geval worden beoordeeld.',
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
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, nicht Einwilligung) und dokumentieren Sie sie.',
        fr: 'Déterminez une base juridique valable (intérêt légitime, pas le consentement) et documentez-la.',
        es: 'Identifique una base jurídica valida (interés legítimo, no el consentimiento) y documentela.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang, niet toestemming) en documenteer deze.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Verifica che il trattamento sia proporzionato ai rischi effettivi.',
        en: 'Check that the processing is proportionate to the actual risks.',
        de: 'Prüfen Sie, ob die Verarbeitung verhältnismäßig zu den tatsächlichen Risiken ist.',
        fr: 'Vérifiez que le traitement est proportionné aux risques réels.',
        es: 'Compruebe que el tratamiento sea proporcionado a los riesgos reales.',
        nl: 'Controleer of de verwerking evenredig is aan de werkelijke risicos.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) se il monitoraggio sistematico o il tracciamento in tempo reale è su larga scala, e comunque valuta il rischio.",
        en: 'Carry out the impact assessment (DPIA) if the systematic monitoring or real-time tracking is large-scale, and in any case assess the risk.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) durch, wenn die systematische Überwachung oder Echtzeitverfolgung in großem Umfang erfolgt, und bewerten Sie in jedem Fall das Risiko.',
        fr: "Réalisez l'analyse d'impact (AIPD) si la surveillance systématique ou le suivi en temps réel est à grande échelle, et évaluez dans tous les cas le risque.",
        es: 'Realice la evaluación de impacto (EIPD) si la supervisión sistemática o el seguimiento en tiempo real es a gran escala, y valore en todo caso el riesgo.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit als de systematische monitoring of het realtime volgen grootschalig is, en beoordeel in elk geval het risico.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Informa i lavoratori in anticipo (art. 13 GDPR), spiegando la base giuridica del GPS.',
        en: 'Inform workers in advance (Art. 13 GDPR), explaining the legal basis of the GPS.',
        de: 'Informieren Sie die Beschäftigten im Voraus (Art. 13 DSGVO) und erläutern Sie die Rechtsgrundlage des GPS.',
        fr: 'Informez les salaries a l\'avance (art. 13 RGPD) en expliquant la base juridique du GPS.',
        es: 'Informe a los trabajadores con antelación (art. 13 RGPD), explicando la base jurídica del GPS.',
        nl: 'Informeer de werknemers vooraf (art. 13 AVG) en leg de rechtsgrond van de GPS uit.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente tracciamento in tempo reale fuori orario e la misura meno invasiva possibile.',
        en: 'Configure the system: no real-time tracking outside working hours and the least intrusive measure possible.',
        de: 'Konfigurieren Sie das System: keine Echtzeitortung außerhalb der Arbeitszeit und das mildeste mögliche Mittel.',
        fr: 'Configurez le système : pas de suivi en temps réel hors des heures de travail et la mesure la moins intrusive possible.',
        es: 'Configure el sistema: sin seguimiento en tiempo real fuera del horario laboral y con la medida menos intrusiva posible.',
        nl: 'Configureer het systeem: geen realtime volgen buiten werktijd en de minst ingrijpende maatregel.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'In caso di cambio di sistema: se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: quella consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'En caso de cambio de sistema: si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la entregada antes no basta.',
        nl: 'Bij een systeemwissel: als je van monitoringsysteem of -software verandert, werk de privacyverklaring bij en verstrek deze opnieuw, en controleer of je de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
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
      fr: "jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires (RGPD)",
      es: 'hasta 20 millones de euros o el 4% de la facturación (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AKI specifica è pubblicata per il GPS sui dipendenti. In Estonia le multe GDPR passano per la procedura per contravvenzioni, di cui l'AKI è l'organo extragiudiziale; il tetto della legge estone (art. 65 della legge sulla protezione dei dati) coincide con quello del GDPR: fino a 20 milioni di euro o 4% del fatturato mondiale. Dal 1 novembre 2023 queste contravvenzioni si prescrivono in tre anni. L'AKI ha pubblicato indicazioni specifiche su videosorveglianza, GPS e altri strumenti di controllo dei dipendenti.",
      en: "There is no specific, published AKI fine for GPS on employees. In Estonia GDPR fines go through the misdemeanour procedure, in which the AKI is the out-of-court body; the cap in Estonian law (Personal Data Protection Act, § 65) matches the GDPR: up to 20 million euro or 4% of worldwide turnover. Since 1 November 2023 these misdemeanours are subject to a three-year limitation period. The AKI has published specific guidance on video surveillance, GPS and other tools for monitoring employees.",
      de: "Eine spezifische, veröffentlichte Geldbuße der AKI für GPS bei Beschäftigten ist nicht bekannt. In Estland laufen DSGVO-Geldbußen über das Ordnungswidrigkeitenverfahren, in dem die AKI die außergerichtliche Stelle ist; die Obergrenze im estnischen Recht (Datenschutzgesetz, § 65) entspricht der DSGVO: bis zu 20 Millionen Euro oder 4% des weltweiten Umsatzes. Seit dem 1. November 2023 verjähren diese Ordnungswidrigkeiten nach drei Jahren. Die AKI hat konkrete Hinweise zu Videoüberwachung, GPS und anderen Kontrollmitteln für Beschäftigte veröffentlicht.",
      fr: "Aucune amende de l'AKI spécifique et publiée pour le GPS sur les salaries n'apparait. En Estonie les amendes RGPD passent par la procédure pour contraventions, dont l'AKI est l'organe extrajudiciaire ; le plafond de la loi estonienne (loi sur la protection des données personnelles, § 65) correspond à celui du RGPD : jusqu'à 20 millions d'euros ou 4 % du chiffre d'affaires mondial. Depuis le 1er novembre 2023, ces contraventions se prescrivent par trois ans. L'AKI a publié des indications précises sur la vidéosurveillance, le GPS et d'autres outils de contrôle des salariés.",
      es: "No consta una multa de la AKI especifica y publicada para el GPS sobre los empleados. En Estonia las multas del RGPD pasan por el procedimiento de faltas, en el que la AKI es el órgano extrajudicial; el límite de la ley estonia (ley de protección de datos personales, § 65) coincide con el del RGPD: hasta 20 millones de euros o el 4% de la facturación mundial. Desde el 1 de noviembre de 2023 estas faltas prescriben a los tres años. La AKI ha publicado indicaciones específicas sobre videovigilancia, GPS y otras herramientas de control de los empleados.",
      nl: "Er is geen specifieke, gepubliceerde boete van de AKI voor GPS bij werknemers bekend. In Estland lopen AVG-boetes via de overtredingsprocedure, waarin de AKI de buitengerechtelijke instantie is; het plafond in de Estse wet (wet bescherming persoonsgegevens, § 65) komt overeen met de AVG: tot 20 miljoen euro of 4% van de wereldwijde omzet. Sinds 1 november 2023 verjaren deze overtredingen na drie jaar. De AKI heeft specifieke richtsnoeren gepubliceerd over cameratoezicht, gps en andere controlemiddelen voor werknemers.",
    },
    urlFonte: FONTE_IKS.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_AKI_RAPPORTI,
    FONTE_AKI_GUIDA_2011,
    FONTE_TUIS,
    FONTE_IKS,
    FONTE_AKI_MATERIALE,
    FONTE_AKI_DPIA,
    FONTE_AKI_RECLAMO,
    FONTE_AKI_UFFICIALE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
