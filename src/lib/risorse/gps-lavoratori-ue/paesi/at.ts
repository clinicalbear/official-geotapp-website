/**
 * Scheda-paese Austria per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * § 96 e § 96a dell'Arbeitsverfassungsgesetz (ArbVG) sulle misure di controllo e
 * sui sistemi che trattano dati dei lavoratori, regolamento DSFA-V sulla
 * valutazione d'impatto, decisione della Datenschutzbehörde (DSB) 2022-0.021.739
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
const FONTE_DSB_BERICHT_2018 = {
  titolo: 'Datenschutzbehörde (DSB), Datenschutzbericht 2018 (fine del registro DVR)',
  url: 'https://dsb.gv.at/sites/site0344/media/downloads/datenschutzbericht_2018.pdf',
};
const FONTE_DSB_DECISIONE = {
  titolo:
    'Datenschutzbehörde (DSB), decisione 2022-0.021.739 (stop al GPS sui veicoli aziendali)',
  url: 'https://ris.bka.gv.at/Dokumente/Dsk/DSBT_20220301_2022_0_021_739_00/DSBT_20220301_2022_0_021_739_00.html',
};
const FONTE_DSB_RECLAMO = {
  titolo: 'Datenschutzbehörde (DSB), procedura di reclamo',
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
    ente: 'Datenschutzbehörde (DSB)',
    portale: FONTE_DSB_RECLAMO.url,
    urlFonte: FONTE_DSB_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Austria è uno Stato federale ma ha un'unica autorità garante nazionale, la DSB con sede a Vienna: nessuna ripartizione per Land (a differenza della Germania).",
      en: 'Austria is a federal state but has a single national supervisory authority, the DSB based in Vienna: there is no breakdown by Land (unlike Germany).',
      de: 'Österreich ist ein Bundesstaat, verfügt jedoch über eine einzige nationale Aufsichtsbehörde, die DSB mit Sitz in Wien: Es gibt keine Aufteilung nach Bundesland (anders als in Deutschland).',
      fr: 'L’Autriche est un État fédéral mais dispose d’une seule autorité de contrôle nationale, la DSB basée à Vienne : il n’y a pas de répartition par Land (contrairement à l’Allemagne).',
      es: 'Austria es un Estado federal pero cuenta con una única autoridad de control nacional, la DSB con sede en Viena: no hay reparto por Land (a diferencia de Alemania).',
      nl: 'Oostenrijk is een federale staat, maar heeft één nationale toezichthoudende autoriteit, de DSB met zetel in Wenen: er is geen verdeling per Land (anders dan in Duitsland).',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consenso del consiglio aziendale (Betriebsrat) per misure di controllo che toccano la dignità (ArbVG § 96 Abs. 1 Z 3)',
        en: 'Consent of the works council (Betriebsrat) for monitoring measures that affect human dignity (ArbVG § 96 Abs. 1 Z 3)',
        de: 'Zustimmung des Betriebsrats für Kontrollmaßnahmen, die die Menschenwürde berühren (ArbVG § 96 Abs. 1 Z 3)',
        fr: 'Accord du comité d’entreprise (Betriebsrat) pour les mesures de contrôle qui touchent à la dignité humaine (ArbVG § 96 Abs. 1 Z 3)',
        es: 'Consentimiento del comité de empresa (Betriebsrat) para medidas de control que afectan a la dignidad humana (ArbVG § 96 Abs. 1 Z 3)',
        nl: 'Instemming van de ondernemingsraad (Betriebsrat) voor controlemaatregelen die de menselijke waardigheid raken (ArbVG § 96 Abs. 1 Z 3)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Le misure di controllo e i sistemi tecnici idonei a controllare i lavoratori che toccano la dignità umana richiedono il consenso del consiglio aziendale (Betriebsvereinbarung obbligatoria): senza, sono inammissibili. Vale dove esiste un Betriebsrat; in sua assenza serve un accordo individuale ex § 10 AVRAG.",
        en: 'Monitoring measures and technical systems capable of controlling workers that affect human dignity require the consent of the works council (a Betriebsvereinbarung is mandatory): without it, they are inadmissible. This applies where a Betriebsrat exists; in its absence an individual agreement under § 10 AVRAG is required.',
        de: 'Kontrollmaßnahmen und technische Systeme, die zur Kontrolle der Arbeitnehmer geeignet sind und die Menschenwürde berühren, bedürfen der Zustimmung des Betriebsrats (eine Betriebsvereinbarung ist zwingend erforderlich): Ohne diese sind sie unzulässig. Dies gilt, wo ein Betriebsrat besteht; fehlt dieser, ist eine Einzelvereinbarung gemäß § 10 AVRAG erforderlich.',
        fr: 'Les mesures de contrôle et les systèmes techniques susceptibles de contrôler les salariés qui touchent à la dignité humaine requièrent l’accord du comité d’entreprise (une Betriebsvereinbarung est obligatoire) : sans celui-ci, elles sont irrecevables. Cela vaut là où un Betriebsrat existe ; en son absence, un accord individuel au titre du § 10 AVRAG est nécessaire.',
        es: 'Las medidas de control y los sistemas técnicos capaces de controlar a los trabajadores que afectan a la dignidad humana requieren el consentimiento del comité de empresa (una Betriebsvereinbarung es obligatoria): sin él, son inadmisibles. Esto rige donde existe un Betriebsrat; en su ausencia se necesita un acuerdo individual conforme al § 10 AVRAG.',
        nl: 'Controlemaatregelen en technische systemen die geschikt zijn om werknemers te controleren en die de menselijke waardigheid raken, vereisen de instemming van de ondernemingsraad (een Betriebsvereinbarung is verplicht): zonder deze zijn ze ontoelaatbaar. Dit geldt waar een Betriebsrat bestaat; bij afwezigheid daarvan is een individuele overeenkomst krachtens § 10 AVRAG vereist.',
      },
      fonte: FONTE_ARBVG_96,
    },
    {
      voce: {
        it: "Betriebsvereinbarung per sistemi che trattano dati personali dei lavoratori oltre l'anagrafica (ArbVG § 96a)",
        en: 'Betriebsvereinbarung for systems that process workers\' personal data beyond basic identification data (ArbVG § 96a)',
        de: 'Betriebsvereinbarung für Systeme, die personenbezogene Daten der Arbeitnehmer über die Stammdaten hinaus verarbeiten (ArbVG § 96a)',
        fr: 'Betriebsvereinbarung pour les systèmes qui traitent des données personnelles des salariés au-delà des données d’identification de base (ArbVG § 96a)',
        es: 'Betriebsvereinbarung para sistemas que tratan datos personales de los trabajadores más allá de los datos identificativos básicos (ArbVG § 96a)',
        nl: 'Betriebsvereinbarung voor systemen die persoonsgegevens van werknemers verwerken die verder gaan dan de basisidentificatiegegevens (ArbVG § 96a)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "I sistemi che raccolgono e trattano automaticamente dati personali dei lavoratori oltre l'anagrafica e la qualifica richiedono il consenso del consiglio aziendale (che la Schlichtungsstelle può sostituire); il consenso non serve se l'uso dei dati non va oltre gli obblighi previsti da legge, contratto collettivo o contratto individuale. Il § 96a presuppone un Betriebsrat: dove non c'è, non prevede un consenso individuale sostitutivo (restano il GDPR e, per i controlli che toccano la dignità, il § 10 AVRAG).",
        en: 'Systems that automatically collect and process workers\' personal data beyond basic identification and job classification require the consent of the works council (which the Schlichtungsstelle arbitration board can replace); consent is not needed where the use of the data does not go beyond obligations arising from law, collective agreements or the employment contract. Section 96a presupposes a Betriebsrat: where there is none it provides no substitute individual consent (the GDPR still applies and, for controls affecting dignity, § 10 AVRAG).',
        de: 'Systeme, die personenbezogene Daten der Arbeitnehmer über die Stammdaten und die Funktion hinaus automatisch erheben und verarbeiten, erfordern die Zustimmung des Betriebsrats (die die Schlichtungsstelle ersetzen kann); keine Zustimmung ist nötig, wenn die Verwendung der Daten nicht über Verpflichtungen aus Gesetz, kollektiver Rechtsgestaltung oder Arbeitsvertrag hinausgeht. § 96a setzt einen Betriebsrat voraus: Wo keiner besteht, sieht die Norm keine ersatzweise Einzelzustimmung vor (es bleiben die DSGVO und, für Kontrollen, die die Menschenwürde berühren, § 10 AVRAG).',
        fr: 'Les systèmes qui collectent et traitent automatiquement des données personnelles des salariés au-delà des données d’identification de base et de la qualification requièrent l’accord du comité d’entreprise (que la Schlichtungsstelle peut remplacer) ; l’accord n’est pas nécessaire si l’usage des données ne va pas au-delà des obligations découlant de la loi, d’une convention collective ou du contrat de travail. Le § 96a suppose un Betriebsrat : à défaut, il ne prévoit pas de consentement individuel de remplacement (restent le RGPD et, pour les contrôles touchant à la dignité, le § 10 AVRAG).',
        es: 'Los sistemas que recogen y tratan automáticamente datos personales de los trabajadores más allá de los datos identificativos básicos y la categoría profesional requieren el consentimiento del comité de empresa (que la Schlichtungsstelle puede sustituir); no hace falta consentimiento si el uso de los datos no va más allá de las obligaciones derivadas de la ley, de convenios colectivos o del contrato de trabajo. El § 96a presupone un Betriebsrat: donde no lo hay, no prevé un consentimiento individual sustitutivo (quedan el RGPD y, para los controles que afectan a la dignidad, el § 10 AVRAG).',
        nl: 'Systemen die automatisch persoonsgegevens van werknemers verzamelen en verwerken die verder gaan dan de basisidentificatiegegevens en de functie, vereisen de instemming van de ondernemingsraad (die de Schlichtungsstelle kan vervangen); instemming is niet nodig als het gebruik van de gegevens niet verder gaat dan verplichtingen uit wet, collectieve regeling of arbeidsovereenkomst. § 96a veronderstelt een Betriebsrat: waar er geen is, voorziet de bepaling niet in vervangende individuele instemming (de AVG blijft gelden en, voor controles die de menselijke waardigheid raken, § 10 AVRAG).',
      },
      fonte: FONTE_ARBVG_96A,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva: il vecchio registro DVR è stato abolito col GDPR; vale la responsabilizzazione (registro dei trattamenti e valutazione d'impatto quando richiesta).",
        en: 'No prior authorisation is needed: the old DVR register was abolished with the GDPR; the accountability principle applies (records of processing activities and a data protection impact assessment where required).',
        de: 'Eine vorherige Genehmigung ist nicht erforderlich: Das alte DVR-Register wurde mit der DSGVO abgeschafft; es gilt die Rechenschaftspflicht (Verzeichnis der Verarbeitungstätigkeiten und Datenschutz-Folgenabschätzung, sofern erforderlich).',
        fr: 'Aucune autorisation préalable n’est nécessaire : l’ancien registre DVR a été supprimé avec le RGPD ; le principe de responsabilité s’applique (registre des activités de traitement et analyse d’impact lorsqu’elle est requise).',
        es: 'No se necesita autorización previa: el antiguo registro DVR fue suprimido con el RGPD; rige el principio de responsabilidad proactiva (registro de las actividades de tratamiento y evaluación de impacto cuando sea necesaria).',
        nl: 'Een voorafgaande toestemming is niet nodig: het oude DVR-register is met de AVG afgeschaft; het verantwoordingsbeginsel geldt (register van verwerkingsactiviteiten en gegevensbeschermingseffectbeoordeling indien vereist).',
      },
      fonte: FONTE_DSB_BERICHT_2018,
    },
    {
      voce: {
        it: 'Il GPS sui lavoratori è ammesso solo se necessario: vietato se lo scopo è raggiungibile con mezzi meno invasivi',
        en: 'GPS on workers is allowed only if necessary: banned where the purpose can be achieved by less intrusive means',
        de: 'GPS-Ortung von Arbeitnehmern nur zulässig, wenn erforderlich: unzulässig, wenn der Zweck mit milderen Mitteln erreichbar ist',
        fr: 'Le GPS sur les salariés n’est admis que s’il est nécessaire : interdit si la finalité peut être atteinte par des moyens moins intrusifs',
        es: 'El GPS sobre los trabajadores solo se admite si es necesario: prohibido si la finalidad puede alcanzarse con medios menos intrusivos',
        nl: 'GPS bij werknemers alleen toegestaan als het noodzakelijk is: verboden als het doel met minder ingrijpende middelen kan worden bereikt',
      },
      risposta: 'si',
      dettaglio: {
        it: "Nel caso austriaco di riferimento la DSB ha ritenuto illecito il GPS installato su 15 veicoli aziendali (anche a uso privato) perché lo scopo dichiarato (assegnazione degli incarichi, libro di viaggio, verifica dell'orario) era raggiungibile con mezzi che comportano meno dati, e ne ha ordinato la cessazione con effetto immediato.",
        en: 'In the Austrian reference case, the DSB found the GPS installed in 15 company vehicles (also used privately) unlawful because the stated purposes (job allocation, logbook, working-time checks) could be achieved with means involving less data, and ordered it to stop with immediate effect.',
        de: 'Im österreichischen Referenzfall hielt die DSB das in 15 Firmenfahrzeugen (auch privat nutzbar) eingebaute GPS für rechtswidrig, weil die angegebenen Zwecke (Auftragszuteilung, Fahrtenbuch, Arbeitszeitkontrolle) mit datensparsameren Mitteln erreichbar waren, und untersagte die Verarbeitung mit sofortiger Wirkung.',
        fr: 'Dans l’affaire de référence autrichienne, la DSB a jugé illicite le GPS installé dans 15 véhicules de société (aussi utilisables à titre privé) parce que les finalités invoquées (répartition des missions, carnet de bord, contrôle du temps de travail) pouvaient être atteintes avec moins de données, et en a interdit le traitement avec effet immédiat.',
        es: 'En el caso austriaco de referencia, la DSB consideró ilícito el GPS instalado en 15 vehículos de empresa (también de uso privado) porque las finalidades alegadas (asignación de trabajos, libro de viaje, control del tiempo de trabajo) podían alcanzarse con menos datos, y prohibió el tratamiento con efecto inmediato.',
        nl: 'In de Oostenrijkse referentiezaak achtte de DSB de GPS in 15 bedrijfsvoertuigen (ook privé te gebruiken) onrechtmatig omdat de opgegeven doelen (opdrachttoewijzing, ritregistratie, controle van de arbeidstijd) met minder gegevens konden worden bereikt, en verbood de verwerking met onmiddellijke ingang.',
      },
      fonte: FONTE_DSB_DECISIONE,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DSFA) per la geolocalizzazione dei lavoratori",
        en: 'Data protection impact assessment (DSFA) for the geolocation of workers',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die Geolokalisierung von Arbeitnehmern',
        fr: 'Analyse d’impact relative à la protection des données (DSFA) pour la géolocalisation des salariés',
        es: 'Evaluación de impacto relativa a la protección de datos (DSFA) para la geolocalización de los trabajadores',
        nl: 'Gegevensbeschermingseffectbeoordeling (DSFA) voor de geolokalisatie van werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il regolamento austriaco DSFA-V non nomina la geolocalizzazione dei dipendenti. Prevede la valutazione d'impatto se ricorre uno dei criteri del § 2 c. 2 (tra cui la valutazione, solo automatizzata, di luogo o spostamenti con effetti negativi) oppure due o più criteri del § 2 c. 3 (tra cui i dati di lavoratori, considerati persone vulnerabili, e i dati di ubicazione ai sensi del TKG). Il tracciamento sistematico dei dipendenti di solito soddisfa i requisiti, quindi conviene farla; l'ultima parola spetta all'art. 35 GDPR.",
        en: 'The Austrian DSFA-V regulation does not name employee geolocation. It requires an impact assessment where one of the criteria in § 2(2) is met (including purely automated evaluation of location or movements with adverse effects) or two or more criteria in § 2(3) (including data of employees, treated as vulnerable persons, and location data within the meaning of the TKG). Systematic tracking of employees usually meets these tests, so one should be carried out; Article 35 GDPR has the final word.',
        de: 'Die österreichische DSFA-V nennt die Geolokalisierung von Beschäftigten nicht ausdrücklich. Sie verlangt eine Folgenabschätzung, wenn eines der Kriterien des § 2 Abs. 2 erfüllt ist (u. a. rein automatisierte Bewertung von Aufenthaltsort oder Ortswechsel mit nachteiligen Folgen) oder zwei oder mehr Kriterien des § 2 Abs. 3 (u. a. Daten von Arbeitnehmern als schutzbedürftigen Personen und Standortdaten im Sinne des TKG). Die systematische Ortung von Beschäftigten erfüllt diese Voraussetzungen in der Regel, sie sollte daher durchgeführt werden; maßgeblich bleibt Art. 35 DSGVO.',
        fr: 'Le règlement autrichien DSFA-V ne mentionne pas la géolocalisation des salariés. Il exige une analyse d’impact si l’un des critères du § 2, al. 2 est rempli (dont l’évaluation exclusivement automatisée du lieu ou des déplacements avec effets négatifs) ou si deux critères ou plus du § 2, al. 3 le sont (dont les données de salariés, considérés comme personnes vulnérables, et les données de localisation au sens du TKG). Le suivi systématique des salariés remplit en général ces conditions ; il convient donc de la réaliser, l’article 35 du RGPD restant déterminant.',
        es: 'El reglamento austriaco DSFA-V no menciona la geolocalización de los empleados. Exige una evaluación de impacto si se cumple uno de los criterios del § 2, apartado 2 (entre ellos la evaluación exclusivamente automatizada del lugar o los desplazamientos con efectos negativos) o dos o más criterios del § 2, apartado 3 (entre ellos los datos de trabajadores, considerados personas vulnerables, y los datos de localización en el sentido del TKG). El seguimiento sistemático de empleados suele cumplirlos, por lo que conviene hacerla; la última palabra la tiene el artículo 35 del RGPD.',
        nl: 'De Oostenrijkse DSFA-V noemt de geolokalisatie van werknemers niet uitdrukkelijk. Zij vereist een effectbeoordeling als een van de criteria van § 2, lid 2 is vervuld (o.a. uitsluitend geautomatiseerde beoordeling van locatie of verplaatsingen met nadelige gevolgen) of twee of meer criteria van § 2, lid 3 (o.a. gegevens van werknemers als kwetsbare personen en locatiegegevens in de zin van de TKG). Systematische tracking van werknemers voldoet daar meestal aan, dus het is verstandig een beoordeling uit te voeren; artikel 35 AVG blijft doorslaggevend.',
      },
      fonte: FONTE_DSFA_V,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Se esiste un consiglio aziendale, ottieni il suo consenso con una Betriebsvereinbarung prima di attivare (ArbVG § 96 / § 96a); in sua assenza, per i controlli che toccano la dignità, il consenso individuale ex § 10 AVRAG.',
        en: 'If a works council exists, obtain its consent through a Betriebsvereinbarung before activation (ArbVG § 96 / § 96a); in its absence, for controls affecting dignity, individual consent under § 10 AVRAG.',
        de: 'Sofern ein Betriebsrat besteht, holen Sie vor der Aktivierung dessen Zustimmung durch eine Betriebsvereinbarung ein (ArbVG § 96 / § 96a); fehlt dieser, bei Kontrollen, die die Menschenwürde berühren, die Einzelzustimmung gemäß § 10 AVRAG.',
        fr: 'Si un comité d’entreprise existe, obtenez son accord au moyen d’une Betriebsvereinbarung avant l’activation (ArbVG § 96 / § 96a) ; en son absence, pour les contrôles touchant à la dignité, le consentement individuel au titre du § 10 AVRAG.',
        es: 'Si existe un comité de empresa, obtén su consentimiento mediante una Betriebsvereinbarung antes de la activación (ArbVG § 96 / § 96a); en su ausencia, para los controles que afectan a la dignidad, el consentimiento individual conforme al § 10 AVRAG.',
        nl: 'Als er een ondernemingsraad bestaat, verkrijg dan vóór activering diens instemming via een Betriebsvereinbarung (ArbVG § 96 / § 96a); bij afwezigheid daarvan, voor controles die de menselijke waardigheid raken, individuele instemming krachtens § 10 AVRAG.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Verifica che lo scopo non sia raggiungibile con mezzi meno invasivi del tracciamento GPS.',
        en: 'Verify that the purpose cannot be achieved by means less intrusive than GPS tracking.',
        de: 'Prüfen Sie, ob der Zweck nicht mit milderen Mitteln als der GPS-Ortung erreichbar ist.',
        fr: 'Vérifiez que la finalité ne peut être atteinte par des moyens moins intrusifs que le suivi GPS.',
        es: 'Verifica que la finalidad no pueda alcanzarse con medios menos intrusivos que el seguimiento GPS.',
        nl: 'Controleer of het doel niet kan worden bereikt met middelen die minder ingrijpend zijn dan GPS-tracking.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DSFA) per la geolocalizzazione dei lavoratori.",
        en: 'Carry out the data protection impact assessment (DSFA) for the geolocation of workers.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Geolokalisierung der Arbeitnehmer durch.',
        fr: 'Réalisez l’analyse d’impact relative à la protection des données (DSFA) pour la géolocalisation des salariés.',
        es: 'Realiza la evaluación de impacto relativa a la protección de datos (DSFA) para la geolocalización de los trabajadores.',
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
        es: 'Informa a los trabajadores y determina una base jurídica válida (art. 6 RGPD).',
        nl: 'Informeer de werknemers en bepaal een geldige rechtsgrondslag (art. 6 AVG).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema in modo minimo: raccogli solo i dati necessari allo scopo dichiarato (art. 5 c. 1 lett. c GDPR).",
        en: 'Configure the system minimally: collect only the data necessary for the stated purpose (Art. 5(1)(c) GDPR).',
        de: 'Konfigurieren Sie das System datensparsam: Erheben Sie nur die für den angegebenen Zweck erforderlichen Daten (Art. 5 Abs. 1 lit. c DSGVO).',
        fr: 'Configurez le système de façon minimale : ne collectez que les données nécessaires à la finalité déclarée (art. 5, par. 1, point c) du RGPD).',
        es: 'Configura el sistema de forma mínima: recoge solo los datos necesarios para la finalidad declarada (art. 5, apartado 1, letra c, RGPD).',
        nl: 'Configureer het systeem minimaal: verzamel alleen de gegevens die nodig zijn voor het opgegeven doel (art. 5, lid 1, onder c, AVG).',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'Si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la información entregada antes no basta.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Datenschutzbehörde (DSB), reclamo',
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
      fr: 'ordre de cessation (pas d’amende pécuniaire) ; risque RGPD pouvant atteindre 20 millions d’euros ou 4 % du chiffre d’affaires (art. 83)',
      es: 'orden de cese (sin multa pecuniaria); riesgo RGPD de hasta 20 millones de euros o el 4 % del volumen de negocio (art. 83)',
      nl: 'bevel tot beëindiging (geen geldboete); AVG-risico tot 20 miljoen euro of 4% van de omzet (art. 83)',
    },
    casoCitato: {
      it: "Datenschutzbehörde, decisione del 1° marzo 2022 (2022-0.021.739): un'azienda aveva installato tracker GPS fissi su 15 veicoli aziendali a uso misto; la DSB ha ritenuto il trattamento illecito perché lo scopo era raggiungibile con mezzi più miti e ne ha ordinato la cessazione immediata, senza multa in denaro.",
      en: 'Datenschutzbehörde, decision of 1 March 2022 (2022-0.021.739): a company had installed fixed GPS trackers on 15 company vehicles used for mixed purposes; the DSB found the processing unlawful because the purpose could be achieved by less intrusive means and ordered its immediate cessation, without a monetary fine.',
      de: 'Datenschutzbehörde, Entscheidung vom 1. März 2022 (2022-0.021.739): Ein Unternehmen hatte fest verbaute GPS-Tracker an 15 gemischt genutzten Firmenfahrzeugen installiert; die DSB hielt die Verarbeitung für rechtswidrig, weil der Zweck mit milderen Mitteln erreichbar war, und ordnete deren sofortige Einstellung an, ohne Geldbuße.',
      fr: 'Datenschutzbehörde, décision du 1er mars 2022 (2022-0.021.739) : une entreprise avait installé des traceurs GPS fixes sur 15 véhicules de société à usage mixte ; la DSB a jugé le traitement illicite parce que la finalité pouvait être atteinte par des moyens moins intrusifs et en a ordonné la cessation immédiate, sans amende pécuniaire.',
      es: 'Datenschutzbehörde, decisión de 1 de marzo de 2022 (2022-0.021.739): una empresa había instalado rastreadores GPS fijos en 15 vehículos de empresa de uso mixto; la DSB consideró el tratamiento ilícito porque la finalidad podía alcanzarse con medios menos intrusivos y ordenó su cese inmediato, sin multa pecuniaria.',
      nl: 'Datenschutzbehörde, beslissing van 1 maart 2022 (2022-0.021.739): een onderneming had vast ingebouwde GPS-trackers geïnstalleerd op 15 bedrijfsvoertuigen voor gemengd gebruik; de DSB achtte de verwerking onrechtmatig omdat het doel met minder ingrijpende middelen kon worden bereikt en gelastte de onmiddellijke beëindiging ervan, zonder geldboete.',
    },
    urlFonte: FONTE_DSB_DECISIONE.url,
    tipoImporto: 'caso-gps',
  },

  fonti: [
    FONTE_ARBVG_96,
    FONTE_ARBVG_96A,
    FONTE_DSFA_V,
    FONTE_DSB_BERICHT_2018,
    FONTE_DSB_DECISIONE,
    FONTE_DSB_RECLAMO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
