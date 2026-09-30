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
    'Datatilsynet, controlli 2020 sull\'obbligo di informazione nelle misure di controllo dei dipendenti (GPS, videosorveglianza e altre)',
  url: 'https://www.datatilsynet.dk/presse-og-nyheder/nyhedsarkiv/2020/aug/nye-afgoerelser-tilsyn-med-efterlevelse-af-oplysningspligten-',
};
const FONTE_DATATILSYNET_FOCUS_2026 = {
  titolo: 'Datatilsynet, aree prioritarie dei controlli nel 2026 (sorveglianza dei dipendenti)',
  url: 'https://www.datatilsynet.dk/afgoerelser/generelt-om-tilsyn/saerlige-fokusomraader-for-datatilsynets-tilsynsaktiviteter-i-2026',
};
const FONTE_DATATILSYNET = {
  titolo: 'Datatilsynet (autorità garante danese)',
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
    ente: {
      it: 'Datatilsynet (autorità garante danese)',
      en: 'Datatilsynet (Danish data protection authority)',
      de: 'Datatilsynet (dänische Datenschutzbehörde)',
      fr: 'Datatilsynet (autorité danoise de protection des données)',
      es: 'Datatilsynet (autoridad danesa de protección de datos)',
      nl: 'Datatilsynet (Deense gegevensbeschermingsautoriteit)',
      pt: 'Datatilsynet (autoridade dinamarquesa de proteção de dados)',
      da: 'Datatilsynet',
      sv: 'Datatilsynet (danska dataskyddsmyndigheten)',
      nb: 'Datatilsynet (dansk datatilsyn)',
      ru: 'Datatilsynet (датский орган по защите данных)',
    },
    portale: FONTE_DATATILSYNET.url,
    urlFonte: FONTE_DATATILSYNET.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Danimarca ha un'unica autorità nazionale, il Datatilsynet. Particolarità: le multe non le impone l'autorità, ma i tribunali su segnalazione del Datatilsynet alla polizia.",
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
        it: 'Motivo oggettivo (saglig grund) e proporzionalità del controllo',
        en: 'Objective reason (saglig grund) and proportionality of the monitoring',
        de: 'Sachlicher Grund (saglig grund) und Verhältnismäßigkeit der Kontrolle',
        fr: 'Motif objectif (saglig grund) et proportionnalité du contrôle',
        es: 'Motivo objetivo (saglig grund) y proporcionalidad del control',
        nl: 'Objectieve reden (saglig grund) en evenredigheid van de controle',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il controllo dei dipendenti richiede un trattamento con base valida che rispetti i requisiti di saglighed (motivo oggettivo) e proporzionalità: non deve essere più esteso del necessario per lo scopo dichiarato.',
        en: 'Monitoring of employees requires processing on a valid basis that meets the requirements of saglighed (objective reason) and proportionality: it must not go further than necessary for the stated purpose.',
        de: 'Die Kontrolle von Beschäftigten erfordert eine Verarbeitung auf gültiger Grundlage, die die Anforderungen der saglighed (sachlicher Grund) und der Verhältnismäßigkeit erfüllt: sie darf nicht weiter gehen als für den angegebenen Zweck erforderlich.',
        fr: "Le contrôle des salariés exige un traitement reposant sur une base valable qui respecte les exigences de saglighed (motif objectif) et de proportionnalité : il ne doit pas aller au-delà de ce qui est nécessaire pour la finalité déclarée.",
        es: 'El control de los empleados requiere un tratamiento con base válida que cumpla los requisitos de saglighed (motivo objetivo) y proporcionalidad: no debe ir más allá de lo necesario para la finalidad declarada.',
        nl: 'De controle van werknemers vereist een verwerking op een geldige grondslag die voldoet aan de eisen van saglighed (objectieve reden) en evenredigheid: zij mag niet verder gaan dan nodig is voor het opgegeven doel.',
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
        it: "Se un accordo collettivo sui controlli (es. l'accordo DA/LO) copre il monitoraggio, la base e la legge danese sulla protezione dei dati; in assenza, la base è il legittimo interesse del datore privato. Gli accordi collettivi impongono proprie regole di preavviso.",
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
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva del Datatilsynet; vale la responsabilizzazione più l'obbligo di informazione.",
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
        it: "Informazione preventiva ai lavoratori (al più tardi all'attivazione, art. 13 GDPR)",
        en: 'Prior information to workers (at the latest at activation, art. 13 GDPR)',
        de: 'Vorherige Information der Beschäftigten (spätestens bei Aktivierung, Art. 13 DSGVO)',
        fr: "Information préalable des travailleurs (au plus tard à l'activation, art. 13 RGPD)",
        es: 'Información previa a los trabajadores (a más tardar en la activación, art. 13 RGPD)',
        nl: 'Voorafgaande informatie aan werknemers (uiterlijk bij activering, art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "I lavoratori vanno informati, al più tardi al momento dell'attivazione del controllo, su scopo, portata e uso dei dati, in forma chiara e accessibile.",
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
        it: 'GPS solo per finalità legittima, senza riuso per sorvegliare comportamento o posizione del conducente; disattivabile in uso privato',
        en: 'GPS only for a legitimate purpose, with no reuse to monitor the driver behaviour or location; switchable off for private use',
        de: 'GPS nur für einen berechtigten Zweck, ohne Weiterverwendung zur Überwachung von Verhalten oder Standort des Fahrers; bei privater Nutzung abschaltbar',
        fr: 'GPS uniquement à une fin légitime, sans réutilisation pour surveiller le comportement ou la position du conducteur ; désactivable en usage privé',
        es: 'GPS solo para una finalidad legítima, sin reutilización para vigilar el comportamiento o la posición del conductor; desactivable en uso privado',
        nl: 'GPS alleen voor een legitiem doel, zonder hergebruik om gedrag of locatie van de bestuurder te bewaken; uitschakelbaar bij privégebruik',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il GPS sui veicoli è ammesso per pianificare i percorsi, monitorare il trasporto o per la sicurezza dei dipendenti, ma i dati non possono essere riusati per sorvegliare comportamento o posizione del conducente; se l'uso privato è consentito, il dipendente deve poter spegnere il GPS.",
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
        it: 'Verifica un motivo oggettivo (saglig grund) e la proporzionalità del controllo.',
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
        it: "Informa i lavoratori al più tardi al momento dell'attivazione (art. 13 GDPR).",
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
        it: 'Configura il sistema: solo finalità dichiarata, niente riuso per sorvegliare il conducente, spegnimento in uso privato.',
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
      it: "In Danimarca le sanzioni GDPR non le impone l'autorità garante: il Datatilsynet segnala il caso alla polizia e propone la multa; la fissa il tribunale, oppure l'interessato accetta un avviso di multa (bødeforelæg). Nei cinque controlli del 2020 sull'obbligo di informazione nelle misure di controllo dei dipendenti (tra cui GPS sui veicoli e videosorveglianza) il Datatilsynet ha espresso 'critica seria' (alvorlig kritik) in tre casi e 'critica' in due, senza multe in denaro. Attenzione al 2026: il controllo dei dipendenti da parte dei datori di lavoro è tra le aree prioritarie dei controlli dell'anno; il Datatilsynet ha annunciato controlli mirati sul trattamento dei dati personali fatto dai datori di lavoro per controllare i dipendenti.",
      en: "In Denmark GDPR fines are not imposed by the supervisory authority: the Datatilsynet reports the case to the police and proposes the fine; the court sets it, or the party accepts a fine notice (bødeforelæg). In the five 2020 inspections on the duty to inform in employee monitoring measures (including GPS on vehicles and video surveillance), the Datatilsynet issued 'serious criticism' (alvorlig kritik) in three cases and 'criticism' in two, with no monetary fines. Watch out for 2026: employers' monitoring of employees is among this year's priority areas; the Datatilsynet has announced targeted inspections of how employers process personal data to monitor their employees.",
      de: "In Dänemark verhängt nicht die Aufsichtsbehörde die DSGVO-Bußgelder: das Datatilsynet meldet den Fall der Polizei und schlägt die Geldbuße vor; das Gericht setzt sie fest, oder der Betroffene akzeptiert einen Bußgeldbescheid (bødeforelæg). Bei den fünf Prüfungen 2020 zur Informationspflicht bei Kontrollmaßnahmen gegenüber Beschäftigten (u. a. GPS in Fahrzeugen und Videoüberwachung) sprach das Datatilsynet in drei Fällen 'ernste Kritik' (alvorlig kritik) und in zwei Fällen 'Kritik' aus, ohne Geldbußen. Achtung 2026: Die Überwachung von Beschäftigten durch Arbeitgeber gehört zu den Schwerpunkten des Jahres; das Datatilsynet hat gezielte Prüfungen angekündigt, wie Arbeitgeber personenbezogene Daten zur Kontrolle ihrer Beschäftigten verarbeiten.",
      fr: "Au Danemark, ce n'est pas l'autorité de contrôle qui inflige les amendes RGPD: le Datatilsynet signale l'affaire à la police et propose l'amende ; le tribunal la fixe, ou l'intéressé accepte un avis d'amende (bødeforelæg). Lors des cinq contrôles de 2020 sur l'obligation d'information dans les mesures de contrôle des salariés (dont le GPS des véhicules et la vidéosurveillance), le Datatilsynet a exprimé une 'critique sérieuse' (alvorlig kritik) dans trois cas et une 'critique' dans deux, sans amende. A noter pour 2026 : la surveillance des salariés par les employeurs figure parmi les domaines prioritaires de l'année ; le Datatilsynet a annoncé des contrôles ciblés sur le traitement des données personnelles par les employeurs pour surveiller leurs salariés.",
      es: "En Dinamarca las multas del RGPD no las impone la autoridad de control: el Datatilsynet traslada el caso a la policía y propone la multa; la fija el tribunal, o el interesado acepta un aviso de multa (bødeforelæg). En las cinco inspecciones de 2020 sobre el deber de información en las medidas de control de los empleados (incluidos el GPS en vehículos y la videovigilancia), el Datatilsynet expresó 'crítica seria' (alvorlig kritik) en tres casos y 'crítica' en dos, sin multas económicas. Ojo con 2026: la vigilancia de los empleados por parte de los empleadores está entre las áreas prioritarias del año; el Datatilsynet ha anunciado inspecciones dirigidas al tratamiento de datos personales que hacen los empleadores para controlar a sus empleados.",
      nl: "In Denemarken legt niet de toezichthouder de AVG-boetes op: het Datatilsynet meldt de zaak bij de politie en stelt de boete voor; de rechter legt haar op, of de betrokkene aanvaardt een boetevoorstel (bødeforelæg). Bij de vijf inspecties van 2020 naar de informatieplicht bij controlemaatregelen ten aanzien van werknemers (waaronder gps in voertuigen en cameratoezicht) uitte het Datatilsynet in drie gevallen 'ernstige kritiek' (alvorlig kritik) en in twee gevallen 'kritiek', zonder geldboetes. Let op in 2026: het toezicht van werkgevers op werknemers is dit jaar een prioriteitsgebied; het Datatilsynet heeft gerichte inspecties aangekondigd naar de verwerking van persoonsgegevens door werkgevers om hun werknemers te controleren.",
    },
    urlFonte: FONTE_DATATILSYNET_CONTROLLI_2020.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_DATATILSYNET_GUIDA,
    FONTE_DATATILSYNET_DPIA,
    FONTE_DATATILSYNET_CONTROLLI_2020,
    FONTE_DATATILSYNET_FOCUS_2026,
    FONTE_DATATILSYNET,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
