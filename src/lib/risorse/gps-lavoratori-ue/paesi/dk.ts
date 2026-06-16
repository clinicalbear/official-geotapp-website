/**
 * Scheda-paese Danimarca per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * la guida del Datatilsynet sul controllo dei dipendenti (Kontrol af
 * medarbejdere), la lista danese dei trattamenti che richiedono sempre una
 * valutazione d'impatto, i controlli 2020 del Datatilsynet sull'obbligo di
 * informazione (GPS e videosorveglianza), il sito ufficiale del Datatilsynet
 * e il GDPR.
 *
 * La Danimarca ha un'unica autorita nazionale, il Datatilsynet. Particolarita:
 * le multe non le impone l'autorita, ma i tribunali su segnalazione del
 * Datatilsynet alla polizia. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_DATATILSYNET_GUIDA = {
  titolo:
    'Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)',
  url: 'https://www.datatilsynet.dk/Media/638348919997326341/Kontrol%20af%20medarbejdere.pdf',
};
const FONTE_DATATILSYNET_DPIA = {
  titolo:
    "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto",
  url: 'https://www.datatilsynet.dk/Media/4/1/Datatilsynets%20liste%20over%20behandlinger%20der%20altid%20er%20underlagt%20kravet%20om%20en%20konsekvensanalyse%20(2).pdf',
};
const FONTE_DATATILSYNET_CONTROLLI_2020 = {
  titolo:
    'Datatilsynet, controlli 2020 sull\'obbligo di informazione (GPS e videosorveglianza)',
  url: 'https://www.datatilsynet.dk/presse-og-nyheder/nyhedsarkiv/2020/aug/nye-afgoerelser-tilsyn-med-efterlevelse-af-oplysningspligten-',
};
const FONTE_DATATILSYNET = {
  titolo: 'Datatilsynet (autorita garante danese)',
  url: 'https://www.datatilsynet.dk/english',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const danimarca: SchedaPaese = {
  codiceISO: 'DK',
  slugCanonico: 'danimarca',
  nome: 'Danimarca',
  nomi: {
    it: 'Danimarca',
    en: 'Denmark',
    'en-us': 'Denmark',
    'en-gb': 'Denmark',
    'en-au': 'Denmark',
    'en-ie': 'Denmark',
    'en-ca': 'Denmark',
    de: 'Dänemark',
    nl: 'Denemarken',
    fr: 'Danemark',
    es: 'Dinamarca',
    pt: 'Dinamarca',
    da: 'Danmark',
    sv: 'Danmark',
    nb: 'Danmark',
    ru: 'Дания',
  },
  bandiera: '🇩🇰',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Datatilsynet (autorita garante danese)',
    portale: FONTE_DATATILSYNET.url,
    urlFonte: FONTE_DATATILSYNET.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Danimarca ha un'unica autorita nazionale, il Datatilsynet. Particolarita: le multe non le impone l'autorita, ma i tribunali su segnalazione del Datatilsynet alla polizia.",
      en: 'Denmark has a single national authority, the Datatilsynet. A particularity: fines are not imposed by the authority but by the courts, following a report from the Datatilsynet to the police.',
      de: 'Dänemark hat eine einzige nationale Behörde, das Datatilsynet. Eine Besonderheit: Bußgelder werden nicht von der Behörde verhängt, sondern von den Gerichten, nachdem das Datatilsynet den Fall bei der Polizei angezeigt hat.',
      fr: "Le Danemark dispose d'une seule autorité nationale, le Datatilsynet. Particularité : les amendes ne sont pas imposées par l'autorité, mais par les tribunaux, à la suite d'un signalement du Datatilsynet à la police.",
      es: 'Dinamarca tiene una única autoridad nacional, el Datatilsynet. Particularidad: las multas no las impone la autoridad, sino los tribunales, tras una denuncia del Datatilsynet a la policía.',
      nl: 'Denemarken heeft één nationale autoriteit, het Datatilsynet. Bijzonderheid: boetes worden niet opgelegd door de autoriteit, maar door de rechtbanken, nadat het Datatilsynet de zaak bij de politie heeft aangegeven.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Motivo oggettivo (saglig grund) e proporzionalita del controllo',
        en: 'Objective reason (saglig grund) and proportionality of the monitoring',
        de: 'Sachlicher Grund (saglig grund) und Verhältnismäßigkeit der Kontrolle',
        fr: 'Motif objectif (saglig grund) et proportionnalité du contrôle',
        es: 'Motivo objetivo (saglig grund) y proporcionalidad del control',
        nl: 'Objectieve reden (saglig grund) en evenredigheid van de controle',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il controllo dei dipendenti deve avere un motivo oggettivo e legittimo ed essere proporzionato; non e ammessa una pura sorveglianza del rendimento.',
        en: 'Monitoring of employees must have an objective and legitimate reason and be proportionate; mere performance surveillance is not allowed.',
        de: 'Die Kontrolle von Beschäftigten muss einen sachlichen und berechtigten Grund haben und verhältnismäßig sein; eine reine Leistungsüberwachung ist nicht zulässig.',
        fr: "Le contrôle des salariés doit reposer sur un motif objectif et légitime et être proportionné ; une simple surveillance du rendement n'est pas admise.",
        es: 'El control de los empleados debe tener un motivo objetivo y legítimo y ser proporcionado; no se admite una mera vigilancia del rendimiento.',
        nl: 'De controle van werknemers moet een objectieve en legitieme reden hebben en evenredig zijn; louter prestatiebewaking is niet toegestaan.',
      },
      fonte: FONTE_DATATILSYNET_GUIDA,
    },
    {
      voce: {
        it: 'Base giuridica: accordo collettivo sui controlli, oppure legittimo interesse',
        en: 'Legal basis: collective agreement on monitoring, or legitimate interest',
        de: 'Rechtsgrundlage: Tarifvertrag über Kontrollmaßnahmen oder berechtigtes Interesse',
        fr: 'Base juridique : accord collectif sur les contrôles, ou intérêt légitime',
        es: 'Base jurídica: convenio colectivo sobre los controles, o interés legítimo',
        nl: 'Rechtsgrond: collectieve overeenkomst over controles, of gerechtvaardigd belang',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Se un accordo collettivo sui controlli (es. l'accordo DA/LO) copre il monitoraggio, la base e la legge danese sulla protezione dei dati; in assenza, la base e il legittimo interesse del datore privato. Gli accordi collettivi impongono proprie regole di preavviso.",
        en: 'If a collective agreement on monitoring (e.g. the DA/LO agreement) covers the surveillance, the basis is the Danish data protection law; in its absence, the basis is the legitimate interest of the private employer. Collective agreements impose their own notice rules.',
        de: 'Deckt ein Tarifvertrag über Kontrollmaßnahmen (z. B. der DA/LO-Tarifvertrag) die Überwachung ab, ist die Grundlage das dänische Datenschutzgesetz; fehlt ein solcher, ist die Grundlage das berechtigte Interesse des privaten Arbeitgebers. Tarifverträge legen eigene Ankündigungsregeln fest.',
        fr: "Si un accord collectif sur les contrôles (par ex. l'accord DA/LO) couvre la surveillance, la base est la loi danoise sur la protection des données ; à défaut, la base est l'intérêt légitime de l'employeur privé. Les accords collectifs imposent leurs propres règles de préavis.",
        es: 'Si un convenio colectivo sobre los controles (p. ej. el convenio DA/LO) cubre la vigilancia, la base es la ley danesa de protección de datos; en su ausencia, la base es el interés legítimo del empleador privado. Los convenios colectivos imponen sus propias reglas de preaviso.',
        nl: 'Als een collectieve overeenkomst over controles (bijv. de DA/LO-overeenkomst) de bewaking dekt, is de grondslag de Deense gegevensbeschermingswet; bij gebreke daarvan is de grondslag het gerechtvaardigd belang van de particuliere werkgever. Collectieve overeenkomsten leggen eigen kennisgevingsregels op.',
      },
      fonte: FONTE_DATATILSYNET_GUIDA,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva del Datatilsynet; vale la responsabilizzazione piu l'obbligo di informazione.",
        en: 'No prior authorisation from the Datatilsynet is required; what applies is accountability plus the duty to inform.',
        de: 'Eine vorherige Genehmigung des Datatilsynet ist nicht erforderlich; es gilt die Rechenschaftspflicht und die Informationspflicht.',
        fr: "Aucune autorisation préalable du Datatilsynet n'est nécessaire ; s'appliquent la responsabilisation et l'obligation d'information.",
        es: 'No se necesita una autorización previa del Datatilsynet; rigen la responsabilidad proactiva y el deber de información.',
        nl: 'Voorafgaande toestemming van het Datatilsynet is niet vereist; van toepassing zijn de verantwoordingsplicht en de informatieplicht.',
      },
      fonte: FONTE_DATATILSYNET_GUIDA,
    },
    {
      voce: {
        it: "Informazione preventiva ai lavoratori (al piu tardi all'attivazione, art. 13 GDPR)",
        en: 'Prior information to workers (at the latest at activation, art. 13 GDPR)',
        de: 'Vorherige Information der Beschäftigten (spätestens bei Aktivierung, Art. 13 DSGVO)',
        fr: "Information préalable des travailleurs (au plus tard à l'activation, art. 13 RGPD)",
        es: 'Información previa a los trabajadores (a más tardar en la activación, art. 13 RGPD)',
        nl: 'Voorafgaande informatie aan werknemers (uiterlijk bij activering, art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "I lavoratori vanno informati, al piu tardi al momento dell'attivazione del controllo, su scopo, portata e uso dei dati, in forma chiara e accessibile.",
        en: 'Workers must be informed, at the latest when the monitoring is activated, of the purpose, scope and use of the data, in a clear and accessible form.',
        de: 'Die Beschäftigten sind spätestens bei Aktivierung der Kontrolle in klarer und zugänglicher Form über Zweck, Umfang und Verwendung der Daten zu informieren.',
        fr: "Les travailleurs doivent être informés, au plus tard au moment de l'activation du contrôle, de la finalité, de la portée et de l'utilisation des données, sous une forme claire et accessible.",
        es: 'Los trabajadores deben ser informados, a más tardar en el momento de la activación del control, sobre la finalidad, el alcance y el uso de los datos, de forma clara y accesible.',
        nl: 'De werknemers moeten uiterlijk bij activering van de controle op duidelijke en toegankelijke wijze worden geïnformeerd over het doel, de omvang en het gebruik van de gegevens.',
      },
      fonte: FONTE_DATATILSYNET_GUIDA,
    },
    {
      voce: {
        it: 'GPS solo per finalita legittima, senza riuso per sorvegliare comportamento o posizione del conducente; disattivabile in uso privato',
        en: 'GPS only for a legitimate purpose, with no reuse to monitor the driver behaviour or location; switchable off for private use',
        de: 'GPS nur für einen berechtigten Zweck, ohne Weiterverwendung zur Überwachung von Verhalten oder Standort des Fahrers; bei privater Nutzung abschaltbar',
        fr: 'GPS uniquement à une fin légitime, sans réutilisation pour surveiller le comportement ou la position du conducteur ; désactivable en usage privé',
        es: 'GPS solo para una finalidad legítima, sin reutilización para vigilar el comportamiento o la posición del conductor; desactivable en uso privado',
        nl: 'GPS alleen voor een legitiem doel, zonder hergebruik om gedrag of locatie van de bestuurder te bewaken; uitschakelbaar bij privégebruik',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il GPS sui veicoli e ammesso per pianificare i percorsi, monitorare il trasporto o per la sicurezza dei dipendenti, ma i dati non possono essere riusati per sorvegliare comportamento o posizione del conducente; se l'uso privato e consentito, il dipendente deve poter spegnere il GPS.",
        en: 'GPS on vehicles is allowed to plan routes, monitor transport or for the safety of employees, but the data cannot be reused to monitor the driver behaviour or location; if private use is permitted, the employee must be able to switch the GPS off.',
        de: 'GPS in Fahrzeugen ist zur Routenplanung, zur Überwachung des Transports oder zur Sicherheit der Beschäftigten zulässig, die Daten dürfen jedoch nicht zur Überwachung von Verhalten oder Standort des Fahrers weiterverwendet werden; ist die private Nutzung erlaubt, muss der Beschäftigte das GPS abschalten können.',
        fr: "Le GPS sur les véhicules est admis pour planifier les itinéraires, surveiller le transport ou pour la sécurité des employés, mais les données ne peuvent pas être réutilisées pour surveiller le comportement ou la position du conducteur ; si l'usage privé est autorisé, le salarié doit pouvoir éteindre le GPS.",
        es: 'El GPS en los vehículos se admite para planificar las rutas, supervisar el transporte o para la seguridad de los empleados, pero los datos no pueden reutilizarse para vigilar el comportamiento o la posición del conductor; si se permite el uso privado, el empleado debe poder apagar el GPS.',
        nl: 'GPS op voertuigen is toegestaan om routes te plannen, het vervoer te bewaken of voor de veiligheid van werknemers, maar de gegevens mogen niet worden hergebruikt om het gedrag of de locatie van de bestuurder te bewaken; als privégebruik is toegestaan, moet de werknemer de GPS kunnen uitschakelen.',
      },
      fonte: FONTE_DATATILSYNET_GUIDA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per i dati di localizzazione combinati con un altro criterio",
        en: 'Impact assessment (DPIA) for location data combined with another criterion',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für Standortdaten in Kombination mit einem weiteren Kriterium',
        fr: "Analyse d'impact (AIPD) pour les données de localisation combinées à un autre critère",
        es: 'Evaluación de impacto (EIPD) para los datos de localización combinados con otro criterio',
        nl: 'Effectbeoordeling (DPIA) voor locatiegegevens gecombineerd met een ander criterium',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista danese richiede sempre una valutazione d'impatto per il trattamento di dati di localizzazione in combinazione con almeno un altro criterio (linee guida WP248).",
        en: 'The Danish list always requires an impact assessment for the processing of location data in combination with at least one other criterion (WP248 guidelines).',
        de: 'Die dänische Liste verlangt stets eine Folgenabschätzung für die Verarbeitung von Standortdaten in Kombination mit mindestens einem weiteren Kriterium (Leitlinien WP248).',
        fr: "La liste danoise exige toujours une analyse d'impact pour le traitement de données de localisation combinées à au moins un autre critère (lignes directrices WP248).",
        es: 'La lista danesa exige siempre una evaluación de impacto para el tratamiento de datos de localización en combinación con al menos otro criterio (directrices WP248).',
        nl: 'De Deense lijst vereist altijd een effectbeoordeling voor de verwerking van locatiegegevens in combinatie met ten minste één ander criterium (richtsnoeren WP248).',
      },
      fonte: FONTE_DATATILSYNET_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica un motivo oggettivo (saglig grund) e la proporzionalita del controllo.',
        en: 'Verify an objective reason (saglig grund) and the proportionality of the monitoring.',
        de: 'Prüfen Sie einen sachlichen Grund (saglig grund) und die Verhältnismäßigkeit der Kontrolle.',
        fr: 'Vérifiez un motif objectif (saglig grund) et la proportionnalité du contrôle.',
        es: 'Verifique un motivo objetivo (saglig grund) y la proporcionalidad del control.',
        nl: 'Controleer een objectieve reden (saglig grund) en de evenredigheid van de controle.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Individua la base giuridica: accordo collettivo sui controlli, oppure legittimo interesse; rispetta gli eventuali preavvisi dell'accordo collettivo.",
        en: 'Identify the legal basis: collective agreement on monitoring, or legitimate interest; observe any notice periods set by the collective agreement.',
        de: 'Bestimmen Sie die Rechtsgrundlage: Tarifvertrag über Kontrollmaßnahmen oder berechtigtes Interesse; beachten Sie etwaige Ankündigungsfristen des Tarifvertrags.',
        fr: "Déterminez la base juridique : accord collectif sur les contrôles, ou intérêt légitime ; respectez les éventuels préavis prévus par l'accord collectif.",
        es: 'Determine la base jurídica: convenio colectivo sobre los controles, o interés legítimo; respete los eventuales preavisos del convenio colectivo.',
        nl: 'Bepaal de rechtsgrond: collectieve overeenkomst over controles, of gerechtvaardigd belang; neem eventuele kennisgevingstermijnen uit de collectieve overeenkomst in acht.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Informa i lavoratori al piu tardi al momento dell'attivazione (art. 13 GDPR).",
        en: 'Inform the workers at the latest when the monitoring is activated (art. 13 GDPR).',
        de: 'Informieren Sie die Beschäftigten spätestens bei der Aktivierung (Art. 13 DSGVO).',
        fr: "Informez les travailleurs au plus tard au moment de l'activation (art. 13 RGPD).",
        es: 'Informe a los trabajadores a más tardar en el momento de la activación (art. 13 RGPD).',
        nl: 'Informeer de werknemers uiterlijk bij de activering (art. 13 AVG).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per i dati di localizzazione.",
        en: 'Carry out the impact assessment (DPIA) for the location data.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Standortdaten durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour les données de localisation.",
        es: 'Realice la evaluación de impacto (EIPD) para los datos de localización.',
        nl: 'Voer de effectbeoordeling (DPIA) voor de locatiegegevens uit.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: solo finalita dichiarata, niente riuso per sorvegliare il conducente, spegnimento in uso privato.',
        en: 'Configure the system: declared purpose only, no reuse to monitor the driver, switch-off for private use.',
        de: 'Konfigurieren Sie das System: nur der angegebene Zweck, keine Weiterverwendung zur Überwachung des Fahrers, Abschaltung bei privater Nutzung.',
        fr: "Configurez le système : finalité déclarée uniquement, aucune réutilisation pour surveiller le conducteur, extinction en usage privé.",
        es: 'Configure el sistema: solo la finalidad declarada, sin reutilización para vigilar al conductor, apagado en uso privado.',
        nl: 'Configureer het systeem: alleen het opgegeven doel, geen hergebruik om de bestuurder te bewaken, uitschakeling bij privégebruik.',
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
      ente: 'Datatilsynet',
      portale: FONTE_DATATILSYNET.url,
      urlFonte: FONTE_DATATILSYNET.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'decisa dai tribunali (fino a 20 milioni di euro o 4% del fatturato, art. 83 GDPR)',
      en: 'set by the courts (up to 20 million euros or 4% of turnover, art. 83 GDPR)',
      de: 'von den Gerichten festgelegt (bis zu 20 Millionen Euro oder 4 % des Umsatzes, Art. 83 DSGVO)',
      fr: "fixée par les tribunaux (jusqu'à 20 millions d'euros ou 4 % du chiffre d'affaires, art. 83 RGPD)",
      es: 'fijada por los tribunales (hasta 20 millones de euros o el 4 % del volumen de negocio, art. 83 RGPD)',
      nl: 'vastgesteld door de rechtbanken (tot 20 miljoen euro of 4% van de omzet, art. 83 AVG)',
    },
    casoCitato: {
      it: "In Danimarca le sanzioni GDPR non le impone l'autorita garante: il Datatilsynet segnala il caso alla polizia e il tribunale fissa la multa. Nei controlli del 2020 su GPS e videosorveglianza dei dipendenti senza informativa, il Datatilsynet ha espresso 'critica seria' (alvorlig kritik) in tre casi su cinque, non multe in denaro.",
      en: "In Denmark GDPR fines are not imposed by the data protection authority: the Datatilsynet reports the case to the police and the court sets the fine. In the 2020 audits on GPS and video surveillance of employees without notice, the Datatilsynet issued 'serious criticism' (alvorlig kritik) in three cases out of five, not monetary fines.",
      de: "In Dänemark werden DSGVO-Bußgelder nicht von der Datenschutzbehörde verhängt: Das Datatilsynet zeigt den Fall bei der Polizei an, und das Gericht setzt das Bußgeld fest. Bei den Prüfungen 2020 zu GPS und Videoüberwachung von Beschäftigten ohne Information sprach das Datatilsynet in drei von fünf Fällen eine 'ernste Kritik' (alvorlig kritik) aus, keine Geldbußen.",
      fr: "Au Danemark, les amendes RGPD ne sont pas imposées par l'autorité de protection des données : le Datatilsynet signale le cas à la police et le tribunal fixe l'amende. Lors des contrôles de 2020 sur le GPS et la vidéosurveillance des salariés sans information, le Datatilsynet a exprimé une 'critique sérieuse' (alvorlig kritik) dans trois cas sur cinq, et non des amendes pécuniaires.",
      es: "En Dinamarca las multas del RGPD no las impone la autoridad de protección de datos: el Datatilsynet denuncia el caso a la policía y el tribunal fija la multa. En los controles de 2020 sobre GPS y videovigilancia de empleados sin información, el Datatilsynet expresó una 'crítica seria' (alvorlig kritik) en tres de cinco casos, no multas económicas.",
      nl: "In Denemarken worden AVG-boetes niet opgelegd door de gegevensbeschermingsautoriteit: het Datatilsynet meldt de zaak bij de politie en de rechtbank stelt de boete vast. Bij de controles van 2020 op GPS en videobewaking van werknemers zonder informatie uitte het Datatilsynet in drie van de vijf gevallen 'ernstige kritiek' (alvorlig kritik), geen geldboetes.",
    },
    urlFonte: FONTE_DATATILSYNET_CONTROLLI_2020.url,
  },

  fonti: [
    FONTE_DATATILSYNET_GUIDA,
    FONTE_DATATILSYNET_DPIA,
    FONTE_DATATILSYNET_CONTROLLI_2020,
    FONTE_DATATILSYNET,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
