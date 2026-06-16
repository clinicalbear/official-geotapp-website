/**
 * Scheda-paese Germania per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * § 87 BetrVG (cogestione del consiglio aziendale), § 26 BDSG, sentenza CGUE
 * C-34/21, GDPR, guida del Garante della Renania-Palatinato sulla localizzazione
 * GPS, lista DSK dei trattamenti che richiedono una DPIA, elenco BfDI delle
 * autorita' dei Land e comunicato del Garante di Amburgo sul caso H&M.
 *
 * La Germania e' uno Stato federale: per le aziende private la vigilanza spetta
 * al Garante del Land in cui ha sede l'azienda, non al garante federale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_BETRVG_87 = {
  titolo: 'Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)',
  url: 'https://www.gesetze-im-internet.de/betrvg/__87.html',
};
const FONTE_BDSG_26 = {
  titolo: 'Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)',
  url: 'https://www.gesetze-im-internet.de/bdsg_2018/__26.html',
};
const FONTE_GARANTE_BW_C3421 = {
  titolo:
    'Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)',
  url: 'https://www.baden-wuerttemberg.datenschutz.de/faq-rechtsgrundlagen-bei-beschaeftigtendaten/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};
const FONTE_GARANTE_RLP_GPS = {
  titolo:
    'Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti',
  url: 'https://www.datenschutz.rlp.de/themen/gps-ortung',
};
const FONTE_LISTA_DSK_DPIA = {
  titolo:
    "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)",
  url: 'https://www.lda.bayern.de/media/dsfa_muss_liste_dsk_de.pdf',
};
const FONTE_BFDI_LISTA_LAND = {
  titolo:
    'BfDI, elenco delle autorita garanti per la protezione dei dati dei Land',
  url: 'https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html',
};
const FONTE_HM_AMBURGO = {
  titolo:
    'Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)',
  url: 'https://datenschutz-hamburg.de/fileadmin/user_upload/HmbBfDI/Pressemitteilungen/2020/2020-10-01-H_M.pdf',
};
const FONTE_BAYLDA = {
  titolo: 'BayLDA, autorita garante della Baviera',
  url: 'https://www.lda.bayern.de/de/index.html',
};
const FONTE_BLNBDI = {
  titolo: 'BlnBDI, autorita garante di Berlino',
  url: 'https://www.datenschutz-berlin.de/',
};

export const germania: SchedaPaese = {
  codiceISO: 'DE',
  slugCanonico: 'germania',
  nome: 'Germania',
  nomi: {
    it: 'Germania',
    en: 'Germany',
    'en-us': 'Germany',
    'en-gb': 'Germany',
    'en-au': 'Germany',
    'en-ie': 'Germany',
    'en-ca': 'Germany',
    de: 'Deutschland',
    nl: 'Duitsland',
    fr: 'Allemagne',
    es: 'Alemania',
    pt: 'Alemanha',
    da: 'Tyskland',
    sv: 'Tyskland',
    nb: 'Tyskland',
    ru: 'Германия',
  },
  bandiera: '🇩🇪',
  federale: true,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Autorita garante per la protezione dati del Land in cui ha sede l\'azienda',
    urlFonte: FONTE_BFDI_LISTA_LAND.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Germania e' federale: per le aziende private vigila il Garante del Land della sede (16 autorita'), non il garante federale. Esempi: Baviera BayLDA, Berlino BlnBDI. L'elenco ufficiale e' sul sito del BfDI.",
      en: 'Germany is federal: for private companies the supervisory authority is the data protection authority of the Land where the company is based (16 authorities), not the federal commissioner. Examples: Bavaria BayLDA, Berlin BlnBDI. The official list is on the BfDI website.',
      de: 'Deutschland ist föderal: Für private Unternehmen ist die Datenschutzaufsichtsbehörde des Landes zuständig, in dem das Unternehmen seinen Sitz hat (16 Behörden), nicht der Bundesbeauftragte. Beispiele: Bayern BayLDA, Berlin BlnBDI. Die offizielle Liste finden Sie auf der Website des BfDI.',
      fr: "L'Allemagne est un État fédéral : pour les entreprises privées, c'est l'autorité de protection des données du Land où l'entreprise a son siège qui exerce la surveillance (16 autorités), et non le commissaire fédéral. Exemples : Bavière BayLDA, Berlin BlnBDI. La liste officielle figure sur le site du BfDI.",
      es: 'Alemania es un Estado federal: para las empresas privadas, la autoridad de control es la autoridad de protección de datos del Land donde la empresa tiene su sede (16 autoridades), no el comisionado federal. Ejemplos: Baviera BayLDA, Berlín BlnBDI. La lista oficial está en el sitio web del BfDI.',
      nl: 'Duitsland is federaal: voor particuliere bedrijven houdt de gegevensbeschermingsautoriteit van de deelstaat (Land) waar het bedrijf is gevestigd toezicht (16 autoriteiten), niet de federale commissaris. Voorbeelden: Beieren BayLDA, Berlijn BlnBDI. De officiële lijst staat op de website van de BfDI.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Accordo col consiglio aziendale (Betriebsvereinbarung) prima di installare, ex § 87 BetrVG',
        en: 'Agreement with the works council (Betriebsvereinbarung) before installation, under section 87 BetrVG',
        de: 'Betriebsvereinbarung mit dem Betriebsrat vor der Installation, gemäß § 87 BetrVG',
        fr: "Accord avec le comité d'entreprise (Betriebsvereinbarung) avant l'installation, en vertu de l'article 87 BetrVG",
        es: 'Acuerdo con el comité de empresa (Betriebsvereinbarung) antes de instalar, conforme al artículo 87 BetrVG',
        nl: 'Overeenkomst met de ondernemingsraad (Betriebsvereinbarung) vóór installatie, op grond van artikel 87 BetrVG',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "In Germania la cogestione del Betriebsrat e' obbligatoria per i sistemi tecnici idonei a sorvegliare comportamento o rendimento dei lavoratori (§ 87 c.1 n. 6 BetrVG): senza accordo col consiglio aziendale non si puo' attivare. Ma vale SOLO dove un Betriebsrat esiste; molte PMI non ce l'hanno, e allora questo passaggio non c'e' (resta comunque tutto il GDPR). Conta l'idoneita' oggettiva a sorvegliare, non l'intenzione del datore.",
        en: "In Germany the co-determination of the Betriebsrat is mandatory for technical systems capable of monitoring the conduct or performance of workers (section 87(1) no. 6 BetrVG): without an agreement with the works council the system cannot be activated. But this applies ONLY where a Betriebsrat exists; many SMEs do not have one, and then this step does not apply (the entire GDPR still applies). What matters is the objective capability to monitor, not the employer's intention.",
        de: "In Deutschland ist die Mitbestimmung des Betriebsrats zwingend für technische Systeme, die geeignet sind, das Verhalten oder die Leistung der Arbeitnehmer zu überwachen (§ 87 Abs. 1 Nr. 6 BetrVG): Ohne Betriebsvereinbarung darf das System nicht aktiviert werden. Dies gilt jedoch NUR, wo ein Betriebsrat besteht; viele KMU haben keinen, und dann entfällt dieser Schritt (die gesamte DSGVO gilt weiterhin). Entscheidend ist die objektive Eignung zur Überwachung, nicht die Absicht des Arbeitgebers.",
        fr: "En Allemagne, la cogestion du Betriebsrat est obligatoire pour les systèmes techniques susceptibles de surveiller le comportement ou le rendement des travailleurs (article 87, al. 1, n° 6 BetrVG) : sans accord avec le comité d'entreprise, le système ne peut pas être activé. Mais cela ne s'applique QUE là où un Betriebsrat existe ; de nombreuses PME n'en ont pas, et alors cette étape n'existe pas (l'ensemble du RGPD reste applicable). Ce qui compte, c'est l'aptitude objective à surveiller, et non l'intention de l'employeur.",
        es: "En Alemania la cogestión del Betriebsrat es obligatoria para los sistemas técnicos capaces de vigilar el comportamiento o el rendimiento de los trabajadores (artículo 87, ap. 1, n.º 6 BetrVG): sin acuerdo con el comité de empresa el sistema no puede activarse. Pero esto solo se aplica allí donde existe un Betriebsrat; muchas pymes no lo tienen, y entonces este paso no existe (sigue aplicándose todo el RGPD). Lo que cuenta es la idoneidad objetiva para vigilar, no la intención del empleador.",
        nl: "In Duitsland is de medezeggenschap van de Betriebsrat verplicht voor technische systemen die geschikt zijn om het gedrag of de prestaties van werknemers te controleren (artikel 87, lid 1, nr. 6 BetrVG): zonder overeenkomst met de ondernemingsraad mag het systeem niet worden geactiveerd. Maar dit geldt ALLEEN waar een Betriebsrat bestaat; veel mkb-bedrijven hebben er geen, en dan vervalt deze stap (de volledige AVG blijft van toepassing). Wat telt is de objectieve geschiktheid om te controleren, niet de bedoeling van de werkgever.",
      },
      fonte: FONTE_BETRVG_87,
    },
    {
      voce: {
        it: "Autorizzazione di un'autorita' del lavoro prima di installare",
        en: 'Authorization from a labour authority before installation',
        de: 'Genehmigung einer Arbeitsbehörde vor der Installation',
        fr: "Autorisation d'une autorité du travail avant l'installation",
        es: 'Autorización de una autoridad laboral antes de instalar',
        nl: 'Toestemming van een arbeidsautoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La Germania non prevede un'autorizzazione preventiva di un'autorita' del lavoro (nessun equivalente dell'Ispettorato italiano). Il filtro e' l'accordo col consiglio aziendale; l'autorita' garante interviene solo come vigilanza, ed e' consultata prima soltanto nel caso dell'art. 36 GDPR (rischio elevato non mitigabile emerso dalla DPIA).",
        en: "Germany does not require prior authorization from a labour authority (there is no equivalent of the Italian Labour Inspectorate). The filter is the agreement with the works council; the data protection authority acts only as a supervisory body, and is consulted in advance only in the case of Article 36 GDPR (high residual risk that cannot be mitigated, identified by the DPIA).",
        de: "Deutschland sieht keine vorherige Genehmigung durch eine Arbeitsbehörde vor (es gibt kein Äquivalent zur italienischen Arbeitsaufsicht). Der Filter ist die Betriebsvereinbarung; die Datenschutzaufsichtsbehörde wird nur als Aufsicht tätig und vorab nur im Fall des Art. 36 DSGVO konsultiert (hohes, nicht beherrschbares Risiko, das sich aus der Datenschutz-Folgenabschätzung ergibt).",
        fr: "L'Allemagne ne prévoit pas d'autorisation préalable d'une autorité du travail (il n'existe pas d'équivalent de l'Inspection du travail italienne). Le filtre est l'accord avec le comité d'entreprise ; l'autorité de protection des données n'intervient qu'à titre de surveillance et n'est consultée au préalable que dans le cas de l'article 36 du RGPD (risque élevé non maîtrisable mis en évidence par l'AIPD).",
        es: "Alemania no prevé una autorización previa de una autoridad laboral (no existe un equivalente de la Inspección de Trabajo italiana). El filtro es el acuerdo con el comité de empresa; la autoridad de protección de datos interviene solo como órgano de control y se consulta previamente únicamente en el caso del artículo 36 del RGPD (riesgo elevado no mitigable detectado por la EIPD).",
        nl: "Duitsland kent geen voorafgaande toestemming van een arbeidsautoriteit (er is geen equivalent van de Italiaanse Arbeidsinspectie). De filter is de overeenkomst met de ondernemingsraad; de gegevensbeschermingsautoriteit treedt alleen op als toezichthouder en wordt vooraf alleen geraadpleegd in het geval van artikel 36 AVG (hoog, niet te beperken risico dat uit de DPIA blijkt).",
      },
      fonte: FONTE_BETRVG_87,
    },
    {
      voce: {
        it: 'Base giuridica valida per il trattamento (Art. 6 GDPR)',
        en: 'Valid legal basis for the processing (Article 6 GDPR)',
        de: 'Gültige Rechtsgrundlage für die Verarbeitung (Art. 6 DSGVO)',
        fr: 'Base juridique valable pour le traitement (article 6 du RGPD)',
        es: 'Base jurídica válida para el tratamiento (artículo 6 del RGPD)',
        nl: 'Geldige rechtsgrond voor de verwerking (artikel 6 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Serve una base giuridica. Attenzione: dopo la sentenza CGUE C-34/21 del 30 marzo 2023, il § 26 BDSG non basta da solo come base autonoma; il trattamento va fondato direttamente sull'art. 6 GDPR (es. esecuzione del contratto, obbligo legale, legittimo interesse con bilanciamento). Un'eventuale legge dedicata (Beschaeftigtendatengesetz) e' in discussione ma NON risulta in vigore.",
        en: "A legal basis is required. Note: after the CJEU judgment C-34/21 of 30 March 2023, section 26 BDSG is no longer sufficient on its own as a standalone basis; the processing must be grounded directly on Article 6 GDPR (e.g. performance of the contract, legal obligation, legitimate interest with a balancing test). A possible dedicated law (Beschäftigtendatengesetz) is under discussion but does NOT appear to be in force.",
        de: "Es ist eine Rechtsgrundlage erforderlich. Achtung: Nach dem EuGH-Urteil C-34/21 vom 30. März 2023 reicht § 26 BDSG allein nicht mehr als eigenständige Grundlage aus; die Verarbeitung ist unmittelbar auf Art. 6 DSGVO zu stützen (z. B. Vertragserfüllung, rechtliche Verpflichtung, berechtigtes Interesse mit Abwägung). Ein mögliches eigenes Gesetz (Beschäftigtendatengesetz) wird diskutiert, ist aber NICHT in Kraft.",
        fr: "Une base juridique est nécessaire. Attention : après l'arrêt de la CJUE C-34/21 du 30 mars 2023, l'article 26 BDSG ne suffit plus à lui seul comme base autonome ; le traitement doit être fondé directement sur l'article 6 du RGPD (par exemple exécution du contrat, obligation légale, intérêt légitime avec mise en balance). Une éventuelle loi dédiée (Beschäftigtendatengesetz) est en discussion mais ne semble PAS en vigueur.",
        es: "Se necesita una base jurídica. Atención: tras la sentencia del TJUE C-34/21 de 30 de marzo de 2023, el artículo 26 BDSG ya no basta por sí solo como base autónoma; el tratamiento debe fundamentarse directamente en el artículo 6 del RGPD (por ejemplo, ejecución del contrato, obligación legal, interés legítimo con ponderación). Una posible ley específica (Beschäftigtendatengesetz) está en discusión, pero NO consta en vigor.",
        nl: "Er is een rechtsgrond nodig. Let op: na het HvJEU-arrest C-34/21 van 30 maart 2023 volstaat artikel 26 BDSG niet langer op zichzelf als zelfstandige grondslag; de verwerking moet rechtstreeks worden gebaseerd op artikel 6 AVG (bijv. uitvoering van de overeenkomst, wettelijke verplichting, gerechtvaardigd belang met belangenafweging). Een eventuele specifieke wet (Beschäftigtendatengesetz) is in bespreking maar is NIET in werking.",
      },
      fonte: FONTE_GARANTE_BW_C3421,
    },
    {
      voce: {
        it: 'Informativa ai lavoratori (Art. 13 GDPR)',
        en: 'Privacy notice to workers (Article 13 GDPR)',
        de: 'Information der Arbeitnehmer (Art. 13 DSGVO)',
        fr: 'Information des travailleurs (article 13 du RGPD)',
        es: 'Información a los trabajadores (artículo 13 del RGPD)',
        nl: 'Informatie aan werknemers (artikel 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "I lavoratori vanno informati in modo chiaro su quali dati di posizione si raccolgono, come, quando e perche'.",
        en: 'Workers must be clearly informed about which location data is collected, how, when and why.',
        de: 'Die Arbeitnehmer müssen klar darüber informiert werden, welche Standortdaten erhoben werden, wie, wann und warum.',
        fr: 'Les travailleurs doivent être clairement informés des données de localisation collectées, de la manière, du moment et de la raison.',
        es: 'Los trabajadores deben ser informados claramente sobre qué datos de localización se recogen, cómo, cuándo y por qué.',
        nl: 'Werknemers moeten duidelijk worden geïnformeerd over welke locatiegegevens worden verzameld, hoe, wanneer en waarom.',
      },
      fonte: FONTE_GDPR,
    },
    {
      voce: {
        it: 'Divieto di tracciamento continuo (minimizzazione, Art. 5 GDPR)',
        en: 'Prohibition of continuous tracking (data minimisation, Article 5 GDPR)',
        de: 'Verbot der dauerhaften Ortung (Datenminimierung, Art. 5 DSGVO)',
        fr: 'Interdiction du suivi continu (minimisation des données, article 5 du RGPD)',
        es: 'Prohibición del seguimiento continuo (minimización de datos, artículo 5 del RGPD)',
        nl: 'Verbod op continue tracking (dataminimalisatie, artikel 5 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il garante tedesco e' netto: i sistemi che consentono un controllo permanente dei dipendenti sono in linea di principio illeciti, e i lavoratori non vanno esposti a una pressione di controllo costante. La posizione si raccoglie solo quando serve a una finalita' legittima (es. sicurezza del lavoratore isolato, tutela del carico), non in continuo.",
        en: 'The German authority is clear: systems that allow permanent monitoring of employees are in principle unlawful, and workers must not be exposed to constant monitoring pressure. Location is collected only when it serves a legitimate purpose (e.g. safety of a lone worker, protection of the cargo), not continuously.',
        de: 'Die deutsche Aufsichtsbehörde ist eindeutig: Systeme, die eine dauerhafte Überwachung der Beschäftigten ermöglichen, sind grundsätzlich unzulässig, und die Arbeitnehmer dürfen keinem ständigen Überwachungsdruck ausgesetzt werden. Der Standort wird nur erhoben, wenn er einem legitimen Zweck dient (z. B. Sicherheit eines allein arbeitenden Beschäftigten, Schutz der Ladung), nicht durchgehend.',
        fr: "L'autorité allemande est claire : les systèmes permettant une surveillance permanente des salariés sont en principe illicites, et les travailleurs ne doivent pas être exposés à une pression de contrôle constante. La position n'est collectée que lorsqu'elle répond à une finalité légitime (par exemple sécurité du travailleur isolé, protection du chargement), et non en continu.",
        es: 'La autoridad alemana es tajante: los sistemas que permiten un control permanente de los empleados son en principio ilícitos, y los trabajadores no deben estar expuestos a una presión de control constante. La posición se recoge solo cuando responde a una finalidad legítima (por ejemplo, seguridad del trabajador aislado, protección de la carga), no de forma continua.',
        nl: 'De Duitse autoriteit is duidelijk: systemen die permanente controle van werknemers mogelijk maken zijn in beginsel onrechtmatig, en werknemers mogen niet worden blootgesteld aan constante controledruk. De locatie wordt alleen verzameld wanneer dat een gerechtvaardigd doel dient (bijv. veiligheid van een alleenwerkende werknemer, bescherming van de lading), niet continu.',
      },
      fonte: FONTE_GARANTE_RLP_GPS,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per la geolocalizzazione dei dipendenti",
        en: 'Data protection impact assessment (DPIA) for the geolocation of employees',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die Ortung von Beschäftigten',
        fr: "Analyse d'impact relative à la protection des données (AIPD) pour la géolocalisation des salariés",
        es: 'Evaluación de impacto relativa a la protección de datos (EIPD) para la geolocalización de los empleados',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de geolocatie van werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: "La geolocalizzazione dei dipendenti e' espressamente nella lista DSK dei trattamenti che richiedono una valutazione d'impatto sulla protezione dei dati (art. 35 GDPR). Va fatta prima di attivare il sistema.",
        en: 'The geolocation of employees is expressly on the DSK list of processing operations that require a data protection impact assessment (Article 35 GDPR). It must be carried out before activating the system.',
        de: 'Die Ortung von Beschäftigten steht ausdrücklich auf der DSK-Liste der Verarbeitungsvorgänge, die eine Datenschutz-Folgenabschätzung erfordern (Art. 35 DSGVO). Sie ist vor der Aktivierung des Systems durchzuführen.',
        fr: "La géolocalisation des salariés figure expressément sur la liste DSK des traitements qui nécessitent une analyse d'impact relative à la protection des données (article 35 du RGPD). Elle doit être réalisée avant d'activer le système.",
        es: 'La geolocalización de los empleados figura expresamente en la lista DSK de los tratamientos que requieren una evaluación de impacto relativa a la protección de datos (artículo 35 del RGPD). Debe realizarse antes de activar el sistema.',
        nl: 'De geolocatie van werknemers staat uitdrukkelijk op de DSK-lijst van verwerkingen die een gegevensbeschermingseffectbeoordeling vereisen (artikel 35 AVG). Deze moet worden uitgevoerd voordat het systeem wordt geactiveerd.',
      },
      fonte: FONTE_LISTA_DSK_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Se esiste un Betriebsrat, negozia e firma la Betriebsvereinbarung prima di attivare (§ 87 BetrVG).',
        en: 'If a Betriebsrat exists, negotiate and sign the Betriebsvereinbarung before activating (section 87 BetrVG).',
        de: 'Wenn ein Betriebsrat besteht, verhandeln und unterzeichnen Sie die Betriebsvereinbarung vor der Aktivierung (§ 87 BetrVG).',
        fr: "Si un Betriebsrat existe, négociez et signez la Betriebsvereinbarung avant l'activation (article 87 BetrVG).",
        es: 'Si existe un Betriebsrat, negocie y firme la Betriebsvereinbarung antes de activar (artículo 87 BetrVG).',
        nl: 'Als er een Betriebsrat bestaat, onderhandel over en onderteken de Betriebsvereinbarung vóór activering (artikel 87 BetrVG).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Individua una base giuridica valida ai sensi dell'art. 6 GDPR (non piu' il solo § 26 BDSG dopo la sentenza C-34/21).",
        en: 'Identify a valid legal basis under Article 6 GDPR (no longer section 26 BDSG alone, after the C-34/21 judgment).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage nach Art. 6 DSGVO (nach dem Urteil C-34/21 nicht mehr allein § 26 BDSG).',
        fr: "Déterminez une base juridique valable au sens de l'article 6 du RGPD (plus le seul article 26 BDSG après l'arrêt C-34/21).",
        es: 'Determine una base jurídica válida con arreglo al artículo 6 del RGPD (ya no solo el artículo 26 BDSG tras la sentencia C-34/21).',
        nl: 'Bepaal een geldige rechtsgrond op grond van artikel 6 AVG (niet langer alleen artikel 26 BDSG na het arrest C-34/21).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA): per la geolocalizzazione dei dipendenti e' richiesta.",
        en: 'Carry out the data protection impact assessment (DPIA): it is required for the geolocation of employees.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) durch: Für die Ortung von Beschäftigten ist sie erforderlich.',
        fr: "Réalisez l'analyse d'impact relative à la protection des données (AIPD) : elle est requise pour la géolocalisation des salariés.",
        es: 'Realice la evaluación de impacto relativa a la protección de datos (EIPD): es obligatoria para la geolocalización de los empleados.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit: deze is vereist voor de geolocatie van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Consegna l'informativa ai lavoratori (art. 13 GDPR).",
        en: 'Provide the privacy notice to the workers (Article 13 GDPR).',
        de: 'Händigen Sie den Arbeitnehmern die Datenschutzinformation aus (Art. 13 DSGVO).',
        fr: "Remettez l'information aux travailleurs (article 13 du RGPD).",
        es: 'Entregue la información a los trabajadores (artículo 13 del RGPD).',
        nl: 'Verstrek de informatie aan de werknemers (artikel 13 AVG).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema con minimizzazione: niente tracciamento continuo, posizione solo quando serve.',
        en: 'Configure the system with data minimisation: no continuous tracking, location only when needed.',
        de: 'Konfigurieren Sie das System datensparsam: keine dauerhafte Ortung, Standort nur, wenn er benötigt wird.',
        fr: 'Configurez le système selon la minimisation des données : pas de suivi continu, position uniquement lorsque cela est nécessaire.',
        es: 'Configure el sistema con minimización de datos: sin seguimiento continuo, posición solo cuando sea necesario.',
        nl: 'Configureer het systeem met dataminimalisatie: geen continue tracking, locatie alleen wanneer nodig.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: "Se la DPIA evidenzia un rischio elevato non mitigabile, consulta preventivamente l'autorita' garante del tuo Land (art. 36 GDPR).",
        en: 'If the DPIA reveals a high residual risk that cannot be mitigated, consult the data protection authority of your Land in advance (Article 36 GDPR).',
        de: 'Wenn die DSFA ein hohes, nicht beherrschbares Risiko ergibt, konsultieren Sie vorab die Datenschutzaufsichtsbehörde Ihres Landes (Art. 36 DSGVO).',
        fr: "Si l'AIPD révèle un risque élevé non maîtrisable, consultez au préalable l'autorité de protection des données de votre Land (article 36 du RGPD).",
        es: 'Si la EIPD revela un riesgo elevado no mitigable, consulte previamente a la autoridad de protección de datos de su Land (artículo 36 del RGPD).',
        nl: 'Als de DPIA een hoog, niet te beperken risico aan het licht brengt, raadpleeg dan vooraf de gegevensbeschermingsautoriteit van uw deelstaat (Land) (artikel 36 AVG).',
      },
    },
    {
      passo: 7,
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
      ente: "BfDI, elenco delle autorita' dei Land (per trovare la tua)",
      portale: FONTE_BFDI_LISTA_LAND.url,
      urlFonte: FONTE_BFDI_LISTA_LAND.url,
      verificatoIl: '2026-06-15',
    },
    {
      ente: 'BayLDA (esempio, Baviera)',
      portale: 'https://www.lda.bayern.de/de/index.html',
      urlFonte: 'https://www.lda.bayern.de/de/index.html',
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '35,3 milioni di €',
      en: 'EUR 35.3 million',
      de: '35,3 Millionen €',
      fr: '35,3 millions €',
      es: '35,3 millones de €',
      nl: '35,3 miljoen €',
    },
    casoCitato: {
      it: "H&M, sanzione del Garante di Amburgo del 1 ottobre 2020: sorveglianza sistematica di centinaia di dipendenti del centro servizi di Norimberga (annotazioni su vita privata, malattie, famiglia). Non e' un caso specifico di GPS, ma e' la sanzione piu' nota in Germania sul controllo illecito dei lavoratori.",
      en: 'H&M, fine by the Hamburg data protection authority of 1 October 2020: systematic surveillance of hundreds of employees at the Nuremberg service centre (notes on private life, illnesses, family). It is not a specific GPS case, but it is the best-known fine in Germany for the unlawful monitoring of workers.',
      de: 'H&M, Bußgeld der Hamburger Datenschutzaufsichtsbehörde vom 1. Oktober 2020: systematische Überwachung von Hunderten Beschäftigten des Servicecenters in Nürnberg (Aufzeichnungen über Privatleben, Krankheiten, Familie). Es handelt sich nicht um einen speziellen GPS-Fall, aber es ist das bekannteste Bußgeld in Deutschland wegen unrechtmäßiger Überwachung von Beschäftigten.',
      fr: "H&M, sanction de l'autorité de protection des données de Hambourg du 1er octobre 2020 : surveillance systématique de centaines de salariés du centre de services de Nuremberg (notes sur la vie privée, les maladies, la famille). Ce n'est pas un cas spécifique de GPS, mais c'est la sanction la plus connue en Allemagne pour la surveillance illicite des travailleurs.",
      es: 'H&M, sanción de la autoridad de protección de datos de Hamburgo de 1 de octubre de 2020: vigilancia sistemática de cientos de empleados del centro de servicios de Núremberg (anotaciones sobre la vida privada, enfermedades, familia). No es un caso específico de GPS, pero es la sanción más conocida en Alemania por el control ilícito de los trabajadores.',
      nl: 'H&M, boete van de gegevensbeschermingsautoriteit van Hamburg van 1 oktober 2020: systematische bewaking van honderden werknemers van het servicecentrum in Neurenberg (aantekeningen over privéleven, ziekten, familie). Het is geen specifiek GPS-geval, maar het is de bekendste boete in Duitsland wegens onrechtmatige controle van werknemers.',
    },
    urlFonte: FONTE_HM_AMBURGO.url,
  },

  fonti: [
    FONTE_BETRVG_87,
    FONTE_BDSG_26,
    FONTE_GARANTE_BW_C3421,
    FONTE_GDPR,
    FONTE_GARANTE_RLP_GPS,
    FONTE_LISTA_DSK_DPIA,
    FONTE_BFDI_LISTA_LAND,
    FONTE_HM_AMBURGO,
    FONTE_BAYLDA,
    FONTE_BLNBDI,
  ],

  aggiornatoIl: '2026-06-15',
};
