/**
 * Scheda-paese Austria per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * § 96 e § 96a dell'Arbeitsverfassungsgesetz (ArbVG) sulle misure di controllo e
 * sui sistemi che trattano dati dei lavoratori, regolamento DSFA-V sulla
 * valutazione d'impatto, decisione della Datenschutzbehorde (DSB) 2022-0.021.739
 * sul GPS dei veicoli aziendali, procedura di reclamo della DSB e GDPR.
 *
 * L'Austria e' uno Stato federale ma ha un'unica autorita garante nazionale, la
 * DSB con sede a Vienna: nessuna ripartizione per Land, a differenza della
 * Germania. Per questo federale=false. Nessun numero, URL o autorita' e'
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ARBVG_96 = {
  titolo:
    'Arbeitsverfassungsgesetz (ArbVG), § 96 (misure di controllo che toccano la dignita: consenso del consiglio aziendale)',
  url: 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008329&Paragraf=96',
};
const FONTE_ARBVG_96A = {
  titolo:
    'Arbeitsverfassungsgesetz (ArbVG), § 96a (sistemi che trattano dati personali dei lavoratori)',
  url: 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008329&Paragraf=96a',
};
const FONTE_DSFA_V = {
  titolo:
    "DSFA-V, regolamento sui trattamenti che richiedono una valutazione d'impatto",
  url: 'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20010375',
};
const FONTE_DSB_DECISIONE = {
  titolo:
    'Datenschutzbehorde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)',
  url: 'https://ris.bka.gv.at/Dokumente/Dsk/DSBT_20220301_2022_0_021_739_00/DSBT_20220301_2022_0_021_739_00.html',
};
const FONTE_DSB_RECLAMO = {
  titolo: 'Datenschutzbehorde (DSB), procedura di reclamo',
  url: 'https://dsb.gv.at/ueber-die-datenschutzbehoerde/beschwerdeverfahren',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const austria: SchedaPaese = {
  codiceISO: 'AT',
  slugCanonico: 'austria',
  nome: 'Austria',
  nomi: {
    it: 'Austria',
    en: 'Austria',
    'en-us': 'Austria',
    'en-gb': 'Austria',
    'en-au': 'Austria',
    'en-ie': 'Austria',
    'en-ca': 'Austria',
    de: 'Österreich',
    nl: 'Oostenrijk',
    fr: 'Autriche',
    es: 'Austria',
    pt: 'Áustria',
    da: 'Østrig',
    sv: 'Österrike',
    nb: 'Østerrike',
    ru: 'Австрия',
  },
  bandiera: '🇦🇹',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Datenschutzbehorde (DSB)',
    portale: FONTE_DSB_RECLAMO.url,
    urlFonte: FONTE_DSB_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Austria e' uno Stato federale ma ha un'unica autorita garante nazionale, la DSB con sede a Vienna: nessuna ripartizione per Land (a differenza della Germania).",
      en: 'Austria is a federal state but has a single national supervisory authority, the DSB based in Vienna: there is no breakdown by Land (unlike Germany).',
      de: 'Österreich ist ein Bundesstaat, verfügt jedoch über eine einzige nationale Aufsichtsbehörde, die DSB mit Sitz in Wien: Es gibt keine Aufteilung nach Bundesland (anders als in Deutschland).',
      fr: "L'Autriche est un État fédéral mais dispose d'une seule autorité de contrôle nationale, la DSB basée à Vienne : il n'y a pas de répartition par Land (contrairement à l'Allemagne).",
      es: 'Austria es un Estado federal pero cuenta con una única autoridad de control nacional, la DSB con sede en Viena: no hay reparto por Land (a diferencia de Alemania).',
      nl: 'Oostenrijk is een federale staat, maar heeft één nationale toezichthoudende autoriteit, de DSB met zetel in Wenen: er is geen verdeling per Land (anders dan in Duitsland).',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consenso del consiglio aziendale (Betriebsrat) per misure di controllo che toccano la dignita (ArbVG § 96 Abs. 1 Z 3)',
        en: 'Consent of the works council (Betriebsrat) for monitoring measures that affect human dignity (ArbVG § 96 Abs. 1 Z 3)',
        de: 'Zustimmung des Betriebsrats für Kontrollmaßnahmen, die die Menschenwürde berühren (ArbVG § 96 Abs. 1 Z 3)',
        fr: "Accord du comité d'entreprise (Betriebsrat) pour les mesures de contrôle qui touchent à la dignité humaine (ArbVG § 96 Abs. 1 Z 3)",
        es: 'Consentimiento del comité de empresa (Betriebsrat) para medidas de control que afectan a la dignidad humana (ArbVG § 96 Abs. 1 Z 3)',
        nl: 'Instemming van de ondernemingsraad (Betriebsrat) voor controlemaatregelen die de menselijke waardigheid raken (ArbVG § 96 Abs. 1 Z 3)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Le misure di controllo e i sistemi tecnici idonei a controllare i lavoratori che toccano la dignita umana richiedono il consenso del consiglio aziendale (Betriebsvereinbarung obbligatoria): senza, sono inammissibili. Vale dove esiste un Betriebsrat; in sua assenza serve un accordo individuale ex § 10 AVRAG.",
        en: 'Monitoring measures and technical systems capable of controlling workers that affect human dignity require the consent of the works council (a Betriebsvereinbarung is mandatory): without it, they are inadmissible. This applies where a Betriebsrat exists; in its absence an individual agreement under § 10 AVRAG is required.',
        de: 'Kontrollmaßnahmen und technische Systeme, die zur Kontrolle der Arbeitnehmer geeignet sind und die Menschenwürde berühren, bedürfen der Zustimmung des Betriebsrats (eine Betriebsvereinbarung ist zwingend erforderlich): Ohne diese sind sie unzulässig. Dies gilt, wo ein Betriebsrat besteht; fehlt dieser, ist eine Einzelvereinbarung gemäß § 10 AVRAG erforderlich.',
        fr: "Les mesures de contrôle et les systèmes techniques susceptibles de contrôler les salariés qui touchent à la dignité humaine requièrent l'accord du comité d'entreprise (une Betriebsvereinbarung est obligatoire) : sans celui-ci, elles sont irrecevables. Cela vaut là où un Betriebsrat existe ; en son absence, un accord individuel au titre du § 10 AVRAG est nécessaire.",
        es: 'Las medidas de control y los sistemas técnicos capaces de controlar a los trabajadores que afectan a la dignidad humana requieren el consentimiento del comité de empresa (una Betriebsvereinbarung es obligatoria): sin él, son inadmisibles. Esto rige donde existe un Betriebsrat; en su ausencia se necesita un acuerdo individual conforme al § 10 AVRAG.',
        nl: 'Controlemaatregelen en technische systemen die geschikt zijn om werknemers te controleren en die de menselijke waardigheid raken, vereisen de instemming van de ondernemingsraad (een Betriebsvereinbarung is verplicht): zonder deze zijn ze ontoelaatbaar. Dit geldt waar een Betriebsrat bestaat; bij afwezigheid daarvan is een individuele overeenkomst krachtens § 10 AVRAG vereist.',
      },
      fonte: FONTE_ARBVG_96,
    },
    {
      voce: {
        it: "Betriebsvereinbarung per sistemi che trattano dati personali dei lavoratori oltre l'anagrafica (ArbVG § 96a)",
        en: 'Betriebsvereinbarung for systems that process workers personal data beyond basic identification data (ArbVG § 96a)',
        de: 'Betriebsvereinbarung für Systeme, die personenbezogene Daten der Arbeitnehmer über die Stammdaten hinaus verarbeiten (ArbVG § 96a)',
        fr: "Betriebsvereinbarung pour les systèmes qui traitent des données personnelles des salariés au-delà des données d'identification de base (ArbVG § 96a)",
        es: 'Betriebsvereinbarung para sistemas que tratan datos personales de los trabajadores más allá de los datos identificativos básicos (ArbVG § 96a)',
        nl: 'Betriebsvereinbarung voor systemen die persoonsgegevens van werknemers verwerken die verder gaan dan de basisidentificatiegegevens (ArbVG § 96a)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "I sistemi che raccolgono e trattano automaticamente dati personali dei lavoratori oltre l'anagrafica e la qualifica richiedono una Betriebsvereinbarung (o, in assenza di consiglio aziendale, il consenso individuale).",
        en: 'Systems that automatically collect and process workers personal data beyond basic identification and job classification require a Betriebsvereinbarung (or, in the absence of a works council, individual consent).',
        de: 'Systeme, die personenbezogene Daten der Arbeitnehmer über die Stammdaten und die Funktion hinaus automatisch erheben und verarbeiten, erfordern eine Betriebsvereinbarung (oder, wenn kein Betriebsrat besteht, die individuelle Zustimmung).',
        fr: "Les systèmes qui collectent et traitent automatiquement des données personnelles des salariés au-delà des données d'identification de base et de la qualification requièrent une Betriebsvereinbarung (ou, en l'absence de comité d'entreprise, le consentement individuel).",
        es: 'Los sistemas que recogen y tratan automáticamente datos personales de los trabajadores más allá de los datos identificativos básicos y la categoría profesional requieren una Betriebsvereinbarung (o, en ausencia de comité de empresa, el consentimiento individual).',
        nl: 'Systemen die automatisch persoonsgegevens van werknemers verzamelen en verwerken die verder gaan dan de basisidentificatiegegevens en de functie, vereisen een Betriebsvereinbarung (of, bij afwezigheid van een ondernemingsraad, individuele instemming).',
      },
      fonte: FONTE_ARBVG_96A,
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
        it: "Non serve un'autorizzazione preventiva: il vecchio registro DVR e' stato abolito col GDPR; vale la responsabilizzazione (registro dei trattamenti e valutazione d'impatto quando richiesta).",
        en: 'No prior authorisation is needed: the old DVR register was abolished with the GDPR; the accountability principle applies (records of processing activities and a data protection impact assessment where required).',
        de: 'Eine vorherige Genehmigung ist nicht erforderlich: Das alte DVR-Register wurde mit der DSGVO abgeschafft; es gilt die Rechenschaftspflicht (Verzeichnis der Verarbeitungstätigkeiten und Datenschutz-Folgenabschätzung, sofern erforderlich).',
        fr: "Aucune autorisation préalable n'est nécessaire : l'ancien registre DVR a été supprimé avec le RGPD ; le principe de responsabilité s'applique (registre des activités de traitement et analyse d'impact lorsqu'elle est requise).",
        es: 'No se necesita autorización previa: el antiguo registro DVR fue suprimido con el RGPD; rige el principio de responsabilidad proactiva (registro de las actividades de tratamiento y evaluación de impacto cuando sea necesaria).',
        nl: 'Een voorafgaande toestemming is niet nodig: het oude DVR-register is met de AVG afgeschaft; het verantwoordingsbeginsel geldt (register van verwerkingsactiviteiten en gegevensbeschermingseffectbeoordeling indien vereist).',
      },
      fonte: FONTE_DSFA_V,
    },
    {
      voce: {
        it: 'Divieto di monitoraggio GPS permanente; ammesso solo se lo scopo non e raggiungibile con mezzi piu miti',
        en: 'Ban on permanent GPS monitoring; allowed only if the purpose cannot be achieved by less intrusive means',
        de: 'Verbot der dauerhaften GPS-Überwachung; nur zulässig, wenn der Zweck nicht mit milderen Mitteln erreichbar ist',
        fr: 'Interdiction de la surveillance GPS permanente ; admise uniquement si la finalité ne peut être atteinte par des moyens moins intrusifs',
        es: 'Prohibición de la monitorización GPS permanente; admitida solo si la finalidad no puede alcanzarse con medios menos intrusivos',
        nl: 'Verbod op permanente GPS-monitoring; alleen toegestaan als het doel niet met minder ingrijpende middelen kan worden bereikt',
      },
      risposta: 'si',
      dettaglio: {
        it: "Nel caso austriaco di riferimento la DSB ha ritenuto illecito il tracciamento permanente di veicoli aziendali perche lo scopo era raggiungibile con mezzi piu miti, e ne ha ordinato la cessazione; i controlli fuori dall'orario di lavoro sono comunque inammissibili.",
        en: 'In the Austrian reference case, the DSB found the permanent tracking of company vehicles unlawful because the purpose could be achieved by less intrusive means, and ordered it to stop; monitoring outside working hours is in any case inadmissible.',
        de: 'Im österreichischen Referenzfall hielt die DSB die dauerhafte Ortung von Firmenfahrzeugen für rechtswidrig, weil der Zweck mit milderen Mitteln erreichbar war, und ordnete deren Einstellung an; Kontrollen außerhalb der Arbeitszeit sind ohnehin unzulässig.',
        fr: "Dans l'affaire de référence autrichienne, la DSB a jugé illicite le suivi permanent des véhicules de société parce que la finalité pouvait être atteinte par des moyens moins intrusifs, et en a ordonné la cessation ; les contrôles en dehors du temps de travail sont de toute façon irrecevables.",
        es: 'En el caso austriaco de referencia, la DSB consideró ilícito el seguimiento permanente de vehículos de empresa porque la finalidad podía alcanzarse con medios menos intrusivos, y ordenó su cese; los controles fuera del horario de trabajo son en todo caso inadmisibles.',
        nl: 'In de Oostenrijkse referentiezaak achtte de DSB de permanente tracking van bedrijfsvoertuigen onrechtmatig omdat het doel met minder ingrijpende middelen kon worden bereikt, en gelastte de beëindiging ervan; controles buiten werktijd zijn hoe dan ook ontoelaatbaar.',
      },
      fonte: FONTE_DSB_DECISIONE,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DSFA) per la geolocalizzazione dei lavoratori",
        en: 'Data protection impact assessment (DSFA) for the geolocation of workers',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die Geolokalisierung von Arbeitnehmern',
        fr: "Analyse d'impact relative à la protection des données (DSFA) pour la géolocalisation des salariés",
        es: 'Evaluación de impacto relativa a la protección de datos (DSFA) para la geolocalización de los trabajadores',
        nl: 'Gegevensbeschermingseffectbeoordeling (DSFA) voor de geolokalisatie van werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il regolamento austriaco sulla valutazione d'impatto include i trattamenti che valutano comportamento, luogo o spostamenti della persona e quelli su dati di lavoratori; la geolocalizzazione dei dipendenti rientra tra i casi che richiedono una valutazione d'impatto.",
        en: 'The Austrian regulation on impact assessment includes processing that evaluates a person behaviour, location or movements and processing of workers data; the geolocation of employees falls among the cases that require an impact assessment.',
        de: 'Die österreichische Verordnung zur Folgenabschätzung umfasst Verarbeitungen, die das Verhalten, den Aufenthaltsort oder die Bewegungen einer Person bewerten, sowie Verarbeitungen von Arbeitnehmerdaten; die Geolokalisierung von Beschäftigten zählt zu den Fällen, die eine Folgenabschätzung erfordern.',
        fr: "Le règlement autrichien sur l'analyse d'impact inclut les traitements qui évaluent le comportement, le lieu ou les déplacements de la personne ainsi que ceux portant sur les données des salariés ; la géolocalisation des employés relève des cas qui requièrent une analyse d'impact.",
        es: 'El reglamento austriaco sobre la evaluación de impacto incluye los tratamientos que evalúan el comportamiento, el lugar o los desplazamientos de la persona y los relativos a datos de trabajadores; la geolocalización de los empleados se encuentra entre los casos que requieren una evaluación de impacto.',
        nl: 'De Oostenrijkse verordening over de effectbeoordeling omvat verwerkingen die het gedrag, de locatie of de verplaatsingen van een persoon beoordelen, alsook verwerkingen van werknemersgegevens; de geolokalisatie van werknemers behoort tot de gevallen die een effectbeoordeling vereisen.',
      },
      fonte: FONTE_DSFA_V,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Se esiste un consiglio aziendale, ottieni il suo consenso con una Betriebsvereinbarung prima di attivare (ArbVG § 96 / § 96a); in sua assenza, un accordo individuale ex § 10 AVRAG.',
        en: 'If a works council exists, obtain its consent through a Betriebsvereinbarung before activation (ArbVG § 96 / § 96a); in its absence, an individual agreement under § 10 AVRAG.',
        de: 'Sofern ein Betriebsrat besteht, holen Sie vor der Aktivierung dessen Zustimmung durch eine Betriebsvereinbarung ein (ArbVG § 96 / § 96a); fehlt dieser, eine Einzelvereinbarung gemäß § 10 AVRAG.',
        fr: "Si un comité d'entreprise existe, obtenez son accord au moyen d'une Betriebsvereinbarung avant l'activation (ArbVG § 96 / § 96a) ; en son absence, un accord individuel au titre du § 10 AVRAG.",
        es: 'Si existe un comité de empresa, obtenga su consentimiento mediante una Betriebsvereinbarung antes de la activación (ArbVG § 96 / § 96a); en su ausencia, un acuerdo individual conforme al § 10 AVRAG.',
        nl: 'Als er een ondernemingsraad bestaat, verkrijg dan vóór activering diens instemming via een Betriebsvereinbarung (ArbVG § 96 / § 96a); bij afwezigheid daarvan een individuele overeenkomst krachtens § 10 AVRAG.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Verifica che lo scopo non sia raggiungibile con mezzi piu miti del tracciamento permanente.',
        en: 'Verify that the purpose cannot be achieved by means less intrusive than permanent tracking.',
        de: 'Prüfen Sie, ob der Zweck nicht mit milderen Mitteln als der dauerhaften Ortung erreichbar ist.',
        fr: 'Vérifiez que la finalité ne peut être atteinte par des moyens moins intrusifs que le suivi permanent.',
        es: 'Verifique que la finalidad no pueda alcanzarse con medios menos intrusivos que el seguimiento permanente.',
        nl: 'Controleer of het doel niet kan worden bereikt met middelen die minder ingrijpend zijn dan permanente tracking.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DSFA) per la geolocalizzazione dei lavoratori.",
        en: 'Carry out the data protection impact assessment (DSFA) for the geolocation of workers.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Geolokalisierung der Arbeitnehmer durch.',
        fr: "Réalisez l'analyse d'impact relative à la protection des données (DSFA) pour la géolocalisation des salariés.",
        es: 'Realice la evaluación de impacto relativa a la protección de datos (DSFA) para la geolocalización de los trabajadores.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DSFA) uit voor de geolokalisatie van de werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Informa i lavoratori e individua una base giuridica valida (art. 6 GDPR).',
        en: 'Inform the workers and identify a valid legal basis (Art. 6 GDPR).',
        de: 'Informieren Sie die Arbeitnehmer und bestimmen Sie eine gültige Rechtsgrundlage (Art. 6 DSGVO).',
        fr: 'Informez les salariés et déterminez une base juridique valable (art. 6 RGPD).',
        es: 'Informe a los trabajadores y determine una base jurídica válida (art. 6 RGPD).',
        nl: 'Informeer de werknemers en bepaal een geldige rechtsgrondslag (art. 6 AVG).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema: niente tracciamento permanente, nessun controllo fuori dall'orario di lavoro.",
        en: 'Configure the system: no permanent tracking, no monitoring outside working hours.',
        de: 'Konfigurieren Sie das System: keine dauerhafte Ortung, keine Kontrolle außerhalb der Arbeitszeit.',
        fr: 'Configurez le système : pas de suivi permanent, pas de contrôle en dehors du temps de travail.',
        es: 'Configure el sistema: sin seguimiento permanente, sin control fuera del horario de trabajo.',
        nl: 'Configureer het systeem: geen permanente tracking, geen controle buiten werktijd.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Datenschutzbehorde (DSB), reclamo',
      portale: FONTE_DSB_RECLAMO.url,
      urlFonte: FONTE_DSB_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'ordine di cessazione (nessuna multa in denaro); rischio GDPR fino a 20 milioni di euro o 4% del fatturato (art. 83)',
      en: 'cessation order (no monetary fine); GDPR risk of up to 20 million euro or 4% of turnover (Art. 83)',
      de: 'Einstellungsanordnung (keine Geldbuße); DSGVO-Risiko von bis zu 20 Millionen Euro oder 4% des Umsatzes (Art. 83)',
      fr: "ordre de cessation (pas d'amende pécuniaire) ; risque RGPD pouvant atteindre 20 millions d'euros ou 4% du chiffre d'affaires (art. 83)",
      es: 'orden de cese (sin multa pecuniaria); riesgo RGPD de hasta 20 millones de euros o el 4% del volumen de negocio (art. 83)',
      nl: 'bevel tot beëindiging (geen geldboete); AVG-risico tot 20 miljoen euro of 4% van de omzet (art. 83)',
    },
    casoCitato: {
      it: "Datenschutzbehorde, decisione del 1 marzo 2022 (2022-0.021.739): un'azienda aveva installato tracker GPS permanenti su 15 veicoli aziendali a uso misto; la DSB ha ritenuto il trattamento illecito perche lo scopo era raggiungibile con mezzi piu miti e ne ha ordinato la cessazione immediata, senza multa in denaro.",
      en: 'Datenschutzbehorde, decision of 1 March 2022 (2022-0.021.739): a company had installed permanent GPS trackers on 15 company vehicles used for mixed purposes; the DSB found the processing unlawful because the purpose could be achieved by less intrusive means and ordered its immediate cessation, without a monetary fine.',
      de: 'Datenschutzbehörde, Entscheidung vom 1. März 2022 (2022-0.021.739): Ein Unternehmen hatte dauerhafte GPS-Tracker an 15 gemischt genutzten Firmenfahrzeugen installiert; die DSB hielt die Verarbeitung für rechtswidrig, weil der Zweck mit milderen Mitteln erreichbar war, und ordnete deren sofortige Einstellung an, ohne Geldbuße.',
      fr: "Datenschutzbehorde, décision du 1er mars 2022 (2022-0.021.739) : une entreprise avait installé des traceurs GPS permanents sur 15 véhicules de société à usage mixte ; la DSB a jugé le traitement illicite parce que la finalité pouvait être atteinte par des moyens moins intrusifs et en a ordonné la cessation immédiate, sans amende pécuniaire.",
      es: 'Datenschutzbehorde, decisión de 1 de marzo de 2022 (2022-0.021.739): una empresa había instalado rastreadores GPS permanentes en 15 vehículos de empresa de uso mixto; la DSB consideró el tratamiento ilícito porque la finalidad podía alcanzarse con medios menos intrusivos y ordenó su cese inmediato, sin multa pecuniaria.',
      nl: 'Datenschutzbehorde, beslissing van 1 maart 2022 (2022-0.021.739): een onderneming had permanente GPS-trackers geïnstalleerd op 15 bedrijfsvoertuigen voor gemengd gebruik; de DSB achtte de verwerking onrechtmatig omdat het doel met minder ingrijpende middelen kon worden bereikt en gelastte de onmiddellijke beëindiging ervan, zonder geldboete.',
    },
    urlFonte: FONTE_DSB_DECISIONE.url,
  },

  fonti: [
    FONTE_ARBVG_96,
    FONTE_ARBVG_96A,
    FONTE_DSFA_V,
    FONTE_DSB_DECISIONE,
    FONTE_DSB_RECLAMO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
