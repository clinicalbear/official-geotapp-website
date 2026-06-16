/**
 * Scheda-paese Finlandia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge sulla protezione della privacy nella vita lavorativa (759/2004), FAQ del
 * Garante finlandese (Tietosuojavaltuutettu) sulla vita lavorativa, lista del
 * Garante dei trattamenti che richiedono una DPIA, pagina del Garante per
 * segnalare una violazione, sanzione del Garante sui dati di localizzazione usati
 * per la rilevazione orario (2021) e GDPR.
 *
 * La Finlandia non e' uno Stato federale: ha un'unica autorita' nazionale, il
 * Garante (Tietosuojavaltuutettu), senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LEGGE_759 = {
  titolo:
    'Legge sulla protezione della privacy nella vita lavorativa (759/2004) - traduzione ufficiale',
  url: 'https://www.finlex.fi/en/legislation/translations/2004/eng/759',
};
const FONTE_GARANTE_FAQ = {
  titolo:
    'Garante finlandese (Tietosuojavaltuutettu), FAQ sulla vita lavorativa',
  url: 'https://tietosuoja.fi/en/faq-working-life',
};
const FONTE_GARANTE_DPIA = {
  titolo:
    'Garante finlandese, lista dei trattamenti che richiedono una DPIA',
  url: 'https://tietosuoja.fi/en/list-of-processing-operations-which-require-dpia',
};
const FONTE_GARANTE_SEGNALAZIONE = {
  titolo: 'Garante finlandese, segnalare una violazione',
  url: 'https://tietosuoja.fi/en/report-of-fault-in-personal-data-processing',
};
const FONTE_GARANTE_SANZIONE = {
  titolo:
    'Garante finlandese, sanzione per dati di localizzazione usati per la rilevazione orario (2021)',
  url: 'https://tietosuoja.fi/en/-/administrative-fine-imposed-on-higher-education-institution-for-data-protection-violations-connected-to-processing-of-location-data-recorded-as-part-of-working-hours-monitoring',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const finlandia: SchedaPaese = {
  codiceISO: 'FI',
  slugCanonico: 'finlandia',
  nome: 'Finlandia',
  nomi: {
    it: 'Finlandia',
    en: 'Finland',
    'en-us': 'Finland',
    'en-gb': 'Finland',
    'en-au': 'Finland',
    'en-ie': 'Finland',
    'en-ca': 'Finland',
    de: 'Finnland',
    nl: 'Finland',
    fr: 'Finlande',
    es: 'Finlandia',
    pt: 'Finlândia',
    da: 'Finland',
    sv: 'Finland',
    nb: 'Finland',
    ru: 'Финляндия',
  },
  bandiera: '🇫🇮',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Ufficio del Garante per la protezione dei dati (Tietosuojavaltuutetun toimisto)',
    portale: FONTE_GARANTE_SEGNALAZIONE.url,
    urlFonte: FONTE_GARANTE_SEGNALAZIONE.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Finlandia ha un'unica autorita' nazionale, il Garante (Tietosuojavaltuutettu); nessuna ripartizione regionale.",
      en: 'Finland has a single national authority, the Data Protection Ombudsman (Tietosuojavaltuutettu); there is no regional subdivision.',
      de: 'Finnland hat eine einzige nationale Behoerde, den Datenschutzbeauftragten (Tietosuojavaltuutettu); es gibt keine regionale Untergliederung.',
      fr: "La Finlande dispose d'une seule autorite nationale, le Mediateur a la protection des donnees (Tietosuojavaltuutettu); il n'existe aucune subdivision regionale.",
      es: 'Finlandia cuenta con una unica autoridad nacional, el Defensor de la Proteccion de Datos (Tietosuojavaltuutettu); no existe division regional.',
      nl: 'Finland heeft een enkele nationale autoriteit, de Ombudsman voor gegevensbescherming (Tietosuojavaltuutettu); er is geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Procedura di cooperazione coi rappresentanti prima di introdurre il monitoraggio tecnico, inclusa la localizzazione',
        en: 'Cooperation procedure with employee representatives before introducing technical monitoring, including location tracking',
        de: 'Kooperationsverfahren mit den Arbeitnehmervertretern vor der Einfuehrung einer technischen Ueberwachung, einschliesslich der Standortbestimmung',
        fr: 'Procedure de cooperation avec les representants du personnel avant la mise en place de la surveillance technique, y compris la geolocalisation',
        es: 'Procedimiento de cooperacion con los representantes de los trabajadores antes de introducir la supervision tecnica, incluida la localizacion',
        nl: 'Overlegprocedure met de werknemersvertegenwoordigers voordat technische monitoring, waaronder locatiebepaling, wordt ingevoerd',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "La determinazione della posizione dei dipendenti e' una forma di sorveglianza tecnica che va trattata nella procedura di cooperazione sul luogo di lavoro prima dell'adozione. La negoziazione vale sopra una soglia dimensionale (50 dipendenti dal 1 luglio 2025); sotto, resta comunque un diritto dei lavoratori di essere sentiti.",
        en: 'Determining the location of employees is a form of technical monitoring that must be addressed in the workplace cooperation procedure before it is adopted. The negotiation applies above a size threshold (50 employees from 1 July 2025); below it, employees still retain the right to be heard.',
        de: 'Die Standortbestimmung von Beschaeftigten ist eine Form der technischen Ueberwachung, die vor ihrer Einfuehrung im betrieblichen Kooperationsverfahren behandelt werden muss. Die Verhandlung gilt oberhalb einer Groessenschwelle (50 Beschaeftigte ab dem 1. Juli 2025); darunter bleibt den Beschaeftigten gleichwohl das Recht, angehoert zu werden.',
        fr: "La determination de la position des salaries est une forme de surveillance technique qui doit etre traitee dans la procedure de cooperation sur le lieu de travail avant son adoption. La negociation s'applique au-dela d'un seuil d'effectif (50 salaries a compter du 1er juillet 2025); en deca, les salaries conservent neanmoins le droit d'etre entendus.",
        es: 'La determinacion de la posicion de los empleados es una forma de vigilancia tecnica que debe tratarse en el procedimiento de cooperacion en el centro de trabajo antes de su adopcion. La negociacion se aplica por encima de un umbral de plantilla (50 empleados desde el 1 de julio de 2025); por debajo, los trabajadores conservan igualmente el derecho a ser oidos.',
        nl: 'Het bepalen van de locatie van werknemers is een vorm van technische monitoring die in de overlegprocedure op de werkplek moet worden behandeld voordat deze wordt ingevoerd. De onderhandeling geldt boven een omvangsdrempel (50 werknemers vanaf 1 juli 2025); daaronder behouden werknemers niettemin het recht om te worden gehoord.',
      },
      fonte: FONTE_GARANTE_FAQ,
    },
    {
      voce: {
        it: 'Solo dati direttamente necessari al rapporto di lavoro; il requisito di necessita non si deroga col consenso (Legge 759/2004)',
        en: 'Only data directly necessary for the employment relationship; the necessity requirement cannot be waived by consent (Act 759/2004)',
        de: 'Nur Daten, die fuer das Arbeitsverhaeltnis unmittelbar erforderlich sind; das Erforderlichkeitsgebot kann nicht durch Einwilligung umgangen werden (Gesetz 759/2004)',
        fr: "Uniquement les donnees directement necessaires a la relation de travail; l'exigence de necessite ne peut etre ecartee par le consentement (Loi 759/2004)",
        es: 'Solo datos directamente necesarios para la relacion laboral; el requisito de necesidad no puede excepcionarse mediante el consentimiento (Ley 759/2004)',
        nl: 'Alleen gegevens die rechtstreeks noodzakelijk zijn voor de arbeidsrelatie; de noodzaakvereiste kan niet met toestemming worden omzeild (Wet 759/2004)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore puo' trattare solo i dati direttamente necessari al rapporto di lavoro; nemmeno il consenso del lavoratore autorizza il trattamento di dati che non soddisfano questo requisito.",
        en: 'The employer may process only data directly necessary for the employment relationship; not even the employee consent authorises the processing of data that does not meet this requirement.',
        de: 'Der Arbeitgeber darf nur Daten verarbeiten, die fuer das Arbeitsverhaeltnis unmittelbar erforderlich sind; auch die Einwilligung des Arbeitnehmers berechtigt nicht zur Verarbeitung von Daten, die diese Anforderung nicht erfuellen.',
        fr: "L'employeur ne peut traiter que les donnees directement necessaires a la relation de travail; meme le consentement du salarie n'autorise pas le traitement de donnees qui ne remplissent pas cette exigence.",
        es: 'El empleador solo puede tratar datos directamente necesarios para la relacion laboral; ni siquiera el consentimiento del trabajador autoriza el tratamiento de datos que no cumplan este requisito.',
        nl: 'De werkgever mag alleen gegevens verwerken die rechtstreeks noodzakelijk zijn voor de arbeidsrelatie; zelfs de toestemming van de werknemer machtigt niet tot de verwerking van gegevens die niet aan deze vereiste voldoen.',
      },
      fonte: FONTE_LEGGE_759,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung durch eine Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva del Garante; la vigilanza e' successiva.",
        en: 'No prior authorisation from the Ombudsman is required; oversight is carried out afterwards.',
        de: 'Eine vorherige Genehmigung des Datenschutzbeauftragten ist nicht erforderlich; die Aufsicht erfolgt nachgelagert.',
        fr: "Aucune autorisation prealable du Mediateur n'est requise; le controle s'exerce a posteriori.",
        es: 'No se requiere autorizacion previa del Defensor; la supervision se ejerce a posteriori.',
        nl: 'Er is geen voorafgaande toestemming van de Ombudsman vereist; het toezicht vindt achteraf plaats.',
      },
      fonte: FONTE_GARANTE_FAQ,
    },
    {
      voce: {
        it: 'La localizzazione non va usata per il controllo dell\'orario salvo casi limitati; proporzionalita',
        en: 'Location tracking should not be used for working-time control except in limited cases; proportionality',
        de: 'Die Standortbestimmung sollte ausser in begrenzten Faellen nicht zur Arbeitszeitkontrolle verwendet werden; Verhaeltnismaessigkeit',
        fr: "La geolocalisation ne doit pas servir au controle du temps de travail, sauf cas limites; proportionnalite",
        es: 'La localizacion no debe utilizarse para el control del horario salvo en casos limitados; proporcionalidad',
        nl: 'Locatiebepaling mag, behoudens beperkte gevallen, niet worden gebruikt voor de controle van de arbeidstijd; evenredigheid',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per il Garante i dati di posizione non vanno usati di norma per monitorare l'orario di lavoro, salvo casi limitati (es. lavoro da remoto senza alternative meno invasive), e solo con una base e una necessita' adeguate.",
        en: 'According to the Ombudsman, location data should not as a rule be used to monitor working time, except in limited cases (e.g. remote work with no less intrusive alternatives), and only with an adequate legal basis and necessity.',
        de: 'Nach Auffassung des Datenschutzbeauftragten sollten Standortdaten in der Regel nicht zur Ueberwachung der Arbeitszeit verwendet werden, ausser in begrenzten Faellen (z. B. Telearbeit ohne weniger eingriffsintensive Alternativen) und nur mit einer angemessenen Rechtsgrundlage und Erforderlichkeit.',
        fr: "Selon le Mediateur, les donnees de localisation ne doivent en principe pas servir a surveiller le temps de travail, sauf cas limites (par exemple le travail a distance sans alternatives moins intrusives), et uniquement avec une base et une necessite adequates.",
        es: 'Segun el Defensor, los datos de localizacion no deben usarse por regla general para controlar el horario de trabajo, salvo en casos limitados (p. ej. trabajo a distancia sin alternativas menos intrusivas), y solo con una base y una necesidad adecuadas.',
        nl: 'Volgens de Ombudsman mogen locatiegegevens in de regel niet worden gebruikt om de arbeidstijd te monitoren, behoudens beperkte gevallen (bijvoorbeeld telewerk zonder minder ingrijpende alternatieven), en alleen met een passende grondslag en noodzaak.',
      },
      fonte: FONTE_GARANTE_FAQ,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per i dati di localizzazione usati per il monitoraggio sistematico",
        en: 'Impact assessment (DPIA) for location data used for systematic monitoring',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer Standortdaten, die zur systematischen Ueberwachung verwendet werden',
        fr: "Analyse d'impact (AIPD) pour les donnees de localisation utilisees a des fins de surveillance systematique",
        es: 'Evaluacion de impacto (EIPD) para los datos de localizacion usados para la supervision sistematica',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor locatiegegevens die worden gebruikt voor systematische monitoring',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista del Garante richiede una valutazione d'impatto quando i dati di localizzazione sono usati per il monitoraggio sistematico delle persone o trattati su larga scala.",
        en: 'The Ombudsman list requires an impact assessment where location data is used for the systematic monitoring of individuals or processed on a large scale.',
        de: 'Die Liste des Datenschutzbeauftragten verlangt eine Folgenabschaetzung, wenn Standortdaten zur systematischen Ueberwachung von Personen verwendet oder in grossem Umfang verarbeitet werden.',
        fr: "La liste du Mediateur exige une analyse d'impact lorsque les donnees de localisation sont utilisees pour la surveillance systematique des personnes ou traitees a grande echelle.",
        es: 'La lista del Defensor exige una evaluacion de impacto cuando los datos de localizacion se utilizan para la supervision sistematica de las personas o se tratan a gran escala.',
        nl: 'De lijst van de Ombudsman vereist een effectbeoordeling wanneer locatiegegevens worden gebruikt voor systematische monitoring van personen of op grote schaal worden verwerkt.',
      },
      fonte: FONTE_GARANTE_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Tratta scopo, adozione e metodi del monitoraggio nella procedura di cooperazione coi rappresentanti (o garantisci ai lavoratori il diritto di essere sentiti).',
        en: 'Address the purpose, adoption and methods of the monitoring in the cooperation procedure with employee representatives (or ensure employees the right to be heard).',
        de: 'Behandeln Sie Zweck, Einfuehrung und Methoden der Ueberwachung im Kooperationsverfahren mit den Arbeitnehmervertretern (oder gewaehrleisten Sie den Beschaeftigten das Recht, angehoert zu werden).',
        fr: "Traitez la finalite, la mise en place et les methodes de la surveillance dans la procedure de cooperation avec les representants du personnel (ou garantissez aux salaries le droit d'etre entendus).",
        es: 'Trate la finalidad, la implantacion y los metodos de la supervision en el procedimiento de cooperacion con los representantes de los trabajadores (o garantice a los trabajadores el derecho a ser oidos).',
        nl: 'Behandel het doel, de invoering en de methoden van de monitoring in de overlegprocedure met de werknemersvertegenwoordigers (of waarborg het recht van werknemers om te worden gehoord).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Limita la raccolta ai dati direttamente necessari al rapporto di lavoro.',
        en: 'Limit the collection to data directly necessary for the employment relationship.',
        de: 'Beschraenken Sie die Erhebung auf Daten, die fuer das Arbeitsverhaeltnis unmittelbar erforderlich sind.',
        fr: 'Limitez la collecte aux donnees directement necessaires a la relation de travail.',
        es: 'Limite la recogida a los datos directamente necesarios para la relacion laboral.',
        nl: 'Beperk de verzameling tot gegevens die rechtstreeks noodzakelijk zijn voor de arbeidsrelatie.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per i dati di localizzazione usati per il monitoraggio sistematico.",
        en: 'Carry out the impact assessment (DPIA) for location data used for systematic monitoring.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) fuer Standortdaten durch, die zur systematischen Ueberwachung verwendet werden.',
        fr: "Realisez l'analyse d'impact (AIPD) pour les donnees de localisation utilisees a des fins de surveillance systematique.",
        es: 'Realice la evaluacion de impacto (EIPD) para los datos de localizacion usados para la supervision sistematica.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit voor locatiegegevens die worden gebruikt voor systematische monitoring.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Informa i lavoratori del contenuto della decisione e delle modalita di sorveglianza.',
        en: 'Inform employees of the content of the decision and of the monitoring methods.',
        de: 'Informieren Sie die Beschaeftigten ueber den Inhalt der Entscheidung und die Ueberwachungsmethoden.',
        fr: 'Informez les salaries du contenu de la decision et des modalites de surveillance.',
        es: 'Informe a los trabajadores del contenido de la decision y de las modalidades de vigilancia.',
        nl: 'Informeer de werknemers over de inhoud van het besluit en de monitoringmethoden.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Non usare la localizzazione per il controllo dell'orario salvo casi limitati e giustificati.",
        en: 'Do not use location tracking for working-time control except in limited and justified cases.',
        de: 'Verwenden Sie die Standortbestimmung nur in begrenzten und gerechtfertigten Faellen zur Arbeitszeitkontrolle.',
        fr: 'N utilisez pas la geolocalisation pour le controle du temps de travail, sauf dans des cas limites et justifies.',
        es: 'No utilice la localizacion para el control del horario salvo en casos limitados y justificados.',
        nl: 'Gebruik locatiebepaling niet voor de controle van de arbeidstijd, behoudens beperkte en gerechtvaardigde gevallen.',
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
      ente: 'Garante, segnalazioni',
      portale: FONTE_GARANTE_SEGNALAZIONE.url,
      urlFonte: FONTE_GARANTE_SEGNALAZIONE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '25.000 €',
      en: 'EUR 25,000',
      de: '25.000 EUR',
      fr: '25 000 EUR',
      es: '25 000 EUR',
      nl: 'EUR 25.000',
    },
    casoCitato: {
      it: "Garante finlandese (collegio sanzioni), 2021: a un istituto di istruzione superiore e' stata inflitta una multa di 25.000 euro per aver trattato i dati di localizzazione dei dipendenti senza necessita' e senza base giuridica, tramite un'app destinata alla registrazione dell'orario di lavoro; ordinata anche la cessazione del trattamento.",
      en: 'Finnish Data Protection Ombudsman (sanctions board), 2021: a higher education institution was fined 25,000 euro for processing employees location data without necessity and without a legal basis, through an app intended for recording working time; the processing was also ordered to cease.',
      de: 'Finnischer Datenschutzbeauftragter (Sanktionskollegium), 2021: Gegen eine Hochschule wurde ein Bussgeld von 25.000 Euro verhaengt, weil sie die Standortdaten der Beschaeftigten ohne Erforderlichkeit und ohne Rechtsgrundlage ueber eine zur Arbeitszeiterfassung bestimmte App verarbeitet hatte; zudem wurde die Einstellung der Verarbeitung angeordnet.',
      fr: "Mediateur finlandais a la protection des donnees (college des sanctions), 2021: un etablissement d'enseignement superieur s'est vu infliger une amende de 25 000 euros pour avoir traite les donnees de localisation de ses salaries sans necessite et sans base juridique, au moyen d'une application destinee a l'enregistrement du temps de travail; la cessation du traitement a egalement ete ordonnee.",
      es: 'Defensor finlandes de la proteccion de datos (colegio de sanciones), 2021: a un centro de ensenanza superior se le impuso una multa de 25 000 euros por tratar los datos de localizacion de los empleados sin necesidad y sin base juridica, mediante una app destinada al registro del horario de trabajo; se ordeno asimismo el cese del tratamiento.',
      nl: 'Finse Ombudsman voor gegevensbescherming (sanctiecollege), 2021: aan een instelling voor hoger onderwijs werd een boete van 25.000 euro opgelegd voor het verwerken van de locatiegegevens van werknemers zonder noodzaak en zonder rechtsgrondslag, via een app bedoeld voor de registratie van de arbeidstijd; tevens werd de beeindiging van de verwerking gelast.',
    },
    urlFonte: FONTE_GARANTE_SANZIONE.url,
  },

  fonti: [
    FONTE_LEGGE_759,
    FONTE_GARANTE_FAQ,
    FONTE_GARANTE_DPIA,
    FONTE_GARANTE_SEGNALAZIONE,
    FONTE_GARANTE_SANZIONE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
