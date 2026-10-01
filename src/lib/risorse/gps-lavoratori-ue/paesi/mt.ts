/**
 * Scheda-paese Malta per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * guida dell'IDPC (Garante maltese) al settore del lavoro, guida IDPC alla
 * valutazione d'impatto sulla protezione dei dati, pagina IDPC per presentare un
 * reclamo, decisione IDPC CDP/COMP/579/2025 sulla videosorveglianza della mensa dei
 * dipendenti, Data Protection Act (Cap. 586) e GDPR.
 *
 * Malta ha un'unica autorità nazionale, l'IDPC: nessuna ripartizione regionale.
 * Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_IDPC_LAVORO = {
  titolo: 'IDPC (Garante maltese), guida al settore del lavoro',
  url: 'https://idpc.org.mt/for-organisations/employment-sector/',
};
const FONTE_IDPC_DPIA = {
  titolo: "IDPC, valutazione d'impatto sulla protezione dei dati",
  url: 'https://idpc.org.mt/for-organisations/data-protection-impact-assessment/',
};
const FONTE_IDPC_RECLAMO = {
  titolo: 'IDPC, presentare un reclamo',
  url: 'https://idpc.org.mt/file-a-complaint/',
};
const FONTE_IDPC_DECISIONE = {
  titolo:
    'IDPC, decisione CDP/COMP/579/2025 del 20 aprile 2026 (videosorveglianza della mensa aziendale)',
  url: 'https://idpc.org.mt/wp-content/uploads/2026/04/CDP_COMP_579_2025-REDACTED.pdf',
};
const FONTE_DATA_PROTECTION_ACT = {
  titolo: 'Data Protection Act (Cap. 586)',
  url: 'https://idpc.org.mt/wp-content/uploads/2020/07/CAP-586.pdf',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const malta: SchedaPaese = {
  codiceISO: 'MT',
  slugCanonico: 'malta',
  nome: 'Malta',
  nomi: {
    it: 'Malta',
    en: 'Malta',
    'en-us': 'Malta',
    'en-gb': 'Malta',
    'en-au': 'Malta',
    'en-ie': 'Malta',
    'en-ca': 'Malta',
    de: 'Malta',
    nl: 'Malta',
    fr: 'Malte',
    es: 'Malta',
    pt: 'Malta',
    da: 'Malta',
    sv: 'Malta',
    nb: 'Malta',
    ru: 'Мальта',
  },
  bandiera: '🇲🇹',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'IDPC (Information and Data Protection Commissioner)',
    portale: FONTE_IDPC_RECLAMO.url,
    urlFonte: FONTE_IDPC_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Malta ha un'unica autorità nazionale, l'IDPC; nessuna ripartizione regionale.",
      en: 'Malta has a single national authority, the IDPC; there is no regional breakdown.',
      de: 'Malta hat eine einzige nationale Behörde, den IDPC; es gibt keine regionale Aufgliederung.',
      fr: 'Malte dispose d’une seule autorité nationale, l’IDPC ; il n’y a pas de répartition régionale.',
      es: 'Malta cuenta con una única autoridad nacional, el IDPC; no existe reparto regional.',
      pt: "Malta tem uma única autoridade nacional, o IDPC; não existe divisão regional.",
      da: 'Malta har én national myndighed, IDPC; der er ingen regional opdeling.',
      sv: 'Malta har en enda nationell myndighet, IDPC; det finns ingen regional uppdelning.',
      nb: 'Malta har én nasjonal myndighet, IDPC; det er ingen regional oppdeling.',
      nl: 'Malta heeft een enkele nationale autoriteit, de IDPC; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori (art. 13) e misura strettamente necessaria e proporzionata',
        en: 'Prior information to workers (art. 13) and a strictly necessary and proportionate measure',
        de: 'Vorherige Information der Beschäftigten (Art. 13) und eine streng erforderliche und verhältnismäßige Maßnahme',
        fr: 'Information préalable des travailleurs (art. 13) et mesure strictement nécessaire et proportionnée',
        es: 'Información previa a los trabajadores (art. 13) y medida estrictamente necesaria y proporcionada',
        pt: "Informação prévia aos trabalhadores (art. 13) e medida estritamente necessária e proporcionada",
        da: 'Forudgående information til medarbejderne (art. 13) og en strengt nødvendig og forholdsmæssig foranstaltning',
        sv: 'Information i förväg till de anställda (art. 13) och en åtgärd som är strikt nödvändig och proportionell',
        nb: 'Forhåndsinformasjon til de ansatte (art. 13) og et tiltak som er strengt nødvendig og forholdsmessig',
        nl: 'Voorafgaande informatie aan de werknemers (art. 13) en een strikt noodzakelijke en evenredige maatregel',
      },
      risposta: 'si',
      dettaglio: {
        it: "Ogni misura di monitoraggio deve essere strettamente necessaria e proporzionata, scegliendo il mezzo meno invasivo, e i lavoratori vanno informati in modo chiaro prima dell'inizio del monitoraggio, mai dopo.",
        en: 'Every monitoring measure must be strictly necessary and proportionate, choosing the least intrusive means, and workers must be clearly informed before the monitoring begins, never afterwards.',
        de: 'Jede Überwachungsmaßnahme muss streng erforderlich und verhältnismäßig sein, wobei das am wenigsten eingreifende Mittel zu wählen ist, und die Beschäftigten sind vor Beginn der Überwachung klar zu informieren, niemals danach.',
        fr: 'Toute mesure de surveillance doit être strictement nécessaire et proportionnée, en choisissant le moyen le moins intrusif, et les travailleurs doivent être clairement informés avant le début de la surveillance, jamais après.',
        es: 'Toda medida de monitorización debe ser estrictamente necesaria y proporcionada, eligiendo el medio menos invasivo, y los trabajadores deben ser informados con claridad antes del inicio de la monitorización, nunca después.',
        pt: "Qualquer medida de monitorização deve ser estritamente necessária e proporcionada, escolhendo o meio menos invasivo, e os trabalhadores devem ser informados com clareza antes do início da monitorização, nunca depois.",
        da: 'Enhver overvågningsforanstaltning skal være strengt nødvendig og forholdsmæssig og vælge det mindst indgribende middel, og medarbejderne skal have klar besked, før overvågningen begynder, aldrig bagefter.',
        sv: 'Varje övervakningsåtgärd måste vara strikt nödvändig och proportionell, med det minst ingripande medlet, och de anställda måste informeras tydligt innan övervakningen börjar, aldrig efteråt.',
        nb: 'Ethvert overvåkingstiltak må være strengt nødvendig og forholdsmessig og velge det minst inngripende middelet, og de ansatte må få tydelig beskjed før overvåkingen begynner, aldri etterpå.',
        nl: 'elke monitoringmaatregel moet strikt noodzakelijk en evenredig zijn, waarbij het minst ingrijpende middel wordt gekozen, en de werknemers moeten duidelijk worden geinformeerd voordat de monitoring begint, nooit erna.',
      },
      fonte: FONTE_IDPC_LAVORO,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        pt: "Autorização prévia de uma autoridade antes de instalar",
        da: 'Forudgående tilladelse fra en myndighed før installation',
        sv: 'Förhandstillstånd från en myndighet innan systemet installeras',
        nb: 'Forhåndstillatelse fra en myndighet før installasjon',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'IDPC; il titolare si autovaluta e consulta l'IDPC solo se una DPIA evidenzia un rischio residuo elevato.",
        en: 'No prior authorisation from the IDPC is required; the controller self-assesses and consults the IDPC only if a DPIA reveals a high residual risk.',
        de: 'Es ist keine vorherige Genehmigung des IDPC erforderlich; der Verantwortliche nimmt eine Selbstbewertung vor und konsultiert den IDPC nur, wenn eine DSFA ein hohes Restrisiko ergibt.',
        fr: 'Aucune autorisation préalable de l’IDPC n’est requise ; le responsable du traitement procède à une auto-évaluation et ne consulte l’IDPC que si une AIPD révèle un risque résiduel élevé.',
        es: 'No se requiere autorización previa del IDPC; el responsable se autoevalúa y consulta al IDPC solo si una EIPD revela un riesgo residual elevado.',
        pt: "Não é necessária autorização prévia do IDPC; o responsável pelo tratamento faz a sua própria avaliação e só consulta o IDPC se uma AIPD revelar um risco residual elevado.",
        da: 'Der kræves ingen forudgående tilladelse fra IDPC; den dataansvarlige foretager selv vurderingen og hører kun IDPC, hvis en konsekvensanalyse (DPIA) afslører en høj restrisiko.',
        sv: 'Något förhandstillstånd från IDPC krävs inte; den personuppgiftsansvarige gör en egen bedömning och samråder med IDPC endast om en konsekvensbedömning visar en hög kvarstående risk.',
        nb: 'Det kreves ingen forhåndstillatelse fra IDPC; den behandlingsansvarlige foretar selv vurderingen og rådfører seg bare med IDPC hvis en vurdering av personvernkonsekvenser (DPIA) avdekker en høy restrisiko.',
        nl: 'er is geen voorafgaande toestemming van de IDPC vereist; de verwerkingsverantwoordelijke voert een zelfbeoordeling uit en raadpleegt de IDPC alleen als een DPIA een hoog restrisico aantoont.',
      },
      fonte: FONTE_IDPC_DPIA,
    },
    {
      voce: {
        it: 'Base = interesse legittimo (soglia alta), non il consenso',
        en: 'Basis = legitimate interest (high threshold), not consent',
        de: 'Grundlage = berechtigtes Interesse (höhe Schwelle), nicht die Einwilligung',
        fr: 'Base = intérêt légitime (seuil élevé), non le consentement',
        es: 'Base = interés legítimo (umbral alto), no el consentimiento',
        pt: "Base = interesse legítimo (limiar elevado), não o consentimento",
        da: 'Grundlaget er legitim interesse (høj tærskel), ikke samtykke',
        sv: 'Grunden är berättigat intresse (hög tröskel), inte samtycke',
        nb: 'Grunnlaget er berettiget interesse (høy terskel), ikke samtykke',
        nl: 'Grondslag = gerechtvaardigd belang (hoge drempel), niet de toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il consenso non è di norma valido nel rapporto di lavoro per lo squilibrio di potere, quindi serve un'altra base giuridica dell'art. 6 GDPR: l'IDPC cita l'interesse legittimo, che richiede un test in tre parti (interesse legittimo, stretta necessità, bilanciamento) e ha una soglia alta.",
        en: 'Consent is not normally valid in the employment relationship because of the imbalance of power, so another legal basis under Article 6 GDPR is needed: the IDPC points to legitimate interest, which requires a three-part test (legitimate interest, strict necessity, balancing) and has a high threshold.',
        de: 'Die Einwilligung ist im Arbeitsverhältnis wegen des Machtungleichgewichts in der Regel nicht gültig, es braucht also eine andere Rechtsgrundlage nach Artikel 6 DSGVO: der IDPC nennt das berechtigte Interesse, das einen dreistufigen Test (berechtigtes Interesse, strikte Erforderlichkeit, Abwägung) verlangt und eine hohe Schwelle hat.',
        fr: 'Le consentement n’est généralement pas valable dans la relation de travail en raison du déséquilibre de pouvoir, il faut donc une autre base juridique de l’article 6 RGPD : l’IDPC cite l’intérêt légitime, qui exige un test en trois étapes (intérêt légitime, stricte nécessité, mise en balance) et présente un seuil élevé.',
        es: 'El consentimiento no suele ser válido en la relación laboral debido al desequilibrio de poder, por lo que hace falta otra base jurídica del artículo 6 RGPD: el IDPC cita el interés legítimo, que exige una prueba en tres pasos (interés legítimo, estricta necesidad, ponderación) y tiene un umbral alto.',
        pt: "O consentimento não costuma ser válido na relação laboral, por causa do desequilíbrio de poder, pelo que é necessária outra base jurídica do art. 6.º do RGPD: o IDPC cita o interesse legítimo, que exige um teste em três passos (interesse legítimo, estrita necessidade, ponderação) e tem um limiar elevado.",
        da: 'Samtykke er normalt ikke gyldigt i et ansættelsesforhold på grund af ubalancen i magtforholdet, så der kræves et andet retsgrundlag efter artikel 6 i GDPR: IDPC peger på legitim interesse, som kræver en test i tre led (legitim interesse, streng nødvendighed, afvejning) og har en høj tærskel.',
        sv: 'Samtycke är normalt inte giltigt i anställningsförhållandet på grund av maktobalansen, så en annan rättslig grund enligt artikel 6 i GDPR behövs: IDPC pekar på berättigat intresse, som kräver ett prov i tre delar (berättigat intresse, strikt nödvändighet, avvägning) och har en hög tröskel.',
        nb: 'Samtykke er normalt ikke gyldig i et arbeidsforhold på grunn av ubalansen i maktforholdet, så det kreves et annet rettslig grunnlag etter artikkel 6 i GDPR: IDPC peker på berettiget interesse, som krever en test i tre ledd (berettiget interesse, streng nødvendighet, avveining) og har en høy terskel.',
        nl: 'de toestemming is in de arbeidsverhouding doorgaans niet geldig vanwege de machtsongelijkheid, dus is een andere grondslag uit artikel 6 AVG nodig: de IDPC noemt het gerechtvaardigd belang, dat een driestappentoets vraagt (gerechtvaardigd belang, strikte noodzaak, afweging) en een hoge drempel kent.',
      },
      fonte: FONTE_IDPC_LAVORO,
    },
    {
      voce: {
        it: 'Niente tracciamento continuo o permanente; minimizzazione',
        en: 'No continuous or permanent tracking; data minimisation',
        de: 'Keine kontinuierliche oder dauerhafte Ortung; Datenminimierung',
        fr: 'Pas de suivi continu ou permanent ; minimisation des données',
        es: 'Sin seguimiento continuo o permanente; minimización de datos',
        pt: "Sem seguimento contínuo ou permanente; minimização dos dados",
        da: 'Ingen løbende eller permanent sporing; dataminimering',
        sv: 'Ingen kontinuerlig eller permanent spårning; uppgiftsminimering',
        nb: 'Ingen løpende eller permanent sporing; dataminimering',
        nl: 'Geen continue of permanente tracking; gegevensminimalisatie',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Va raccolto solo il minimo dei dati necessari, con la misura meno invasiva. L\'IDPC lo afferma per la sorveglianza continua con webcam (molto invasiva, di norma non giustificabile come necessaria e proporzionata) e nella decisione CDP/COMP/579/2025 per la ripresa continua di un\'area di riposo; sul GPS non ha una guida specifica, quindi per il tracciamento continuo il principio si applica per analogia.',
        en: 'Only the minimum of necessary data may be collected, using the least invasive measure. The IDPC says so for continuous webcam surveillance (highly invasive, in most cases not justifiable as necessary and proportionate) and, in decision CDP/COMP/579/2025, for continuous recording of a rest area; it has no specific guidance on GPS, so for continuous tracking the principle applies by analogy.',
        de: 'Es darf nur das Minimum der erforderlichen Daten erhoben werden, mit der am wenigsten eingreifenden Maßnahme. Der IDPC sagt dies für die kontinuierliche Webcam-Überwachung (stark eingreifend, meist nicht als erforderlich und verhältnismäßig zu rechtfertigen) und in der Entscheidung CDP/COMP/579/2025 für die dauerhafte Aufzeichnung eines Ruhebereichs; zu GPS gibt es keine spezifische Leitlinie, für die kontinuierliche Ortung gilt der Grundsatz daher entsprechend.',
        fr: 'Seul le minimum de données nécessaires peut être collecté, avec la mesure la moins intrusive. L’IDPC le dit pour la surveillance continue par webcam (très intrusive, le plus souvent non justifiable comme nécessaire et proportionnée) et, dans la décision CDP/COMP/579/2025, pour l’enregistrement continu d’une zone de repos ; il n’a pas de guide spécifique sur le GPS, le principe s’applique donc par analogie au suivi continu.',
        es: 'Solo puede recogerse el mínimo de datos necesarios, con la medida menos invasiva. El IDPC lo afirma para la vigilancia continua con webcam (muy invasiva, en la mayoría de los casos no justificable como necesaria y proporcionada) y, en la decisión CDP/COMP/579/2025, para la grabación continua de una zona de descanso; no tiene una guía específica sobre GPS, por lo que el principio se aplica por analogía al seguimiento continuo.',
        pt: "Só se pode recolher o mínimo de dados necessários, com a medida menos invasiva. O IDPC afirma-o para a vigilância contínua por webcam (muito invasiva, na maioria dos casos não justificável como necessária e proporcionada) e, na decisão CDP/COMP/579/2025, para a gravação contínua de uma zona de descanso; não tem orientações específicas sobre GPS, pelo que o princípio se aplica por analogia ao seguimento contínuo.",
        da: 'Der må kun indsamles det nødvendige minimum af oplysninger ved hjælp af den mindst indgribende foranstaltning. IDPC siger det om løbende webcam-overvågning (meget indgribende, i de fleste tilfælde ikke begrundet som nødvendig og forholdsmæssig) og i afgørelse CDP/COMP/579/2025 om løbende optagelse af et hvileområde; den har ingen specifik vejledning om GPS, så for løbende sporing gælder princippet analogt.',
        sv: 'Endast ett minimum av nödvändiga uppgifter får samlas in, med den minst ingripande åtgärden. IDPC säger detta om kontinuerlig övervakning med webbkamera (mycket ingripande, i regel inte möjlig att motivera som nödvändig och proportionell) och, i beslut CDP/COMP/579/2025, om kontinuerlig filmning av ett vilorum; om GPS finns ingen specifik vägledning, så för kontinuerlig spårning gäller principen analogt.',
        nb: 'Det må bare samles inn det nødvendige minimum av opplysninger ved hjelp av det minst inngripende tiltaket. IDPC sier det om løpende webkamera-overvåking (svært inngripende, i de fleste tilfeller ikke begrunnet som nødvendig og forholdsmessig) og i vedtak CDP/COMP/579/2025 om løpende opptak av et hvilerom; den har ingen spesifikk veiledning om GPS, så for løpende sporing gjelder prinsippet analogt.',
        nl: 'er mag alleen het minimum aan noodzakelijke gegevens worden verzameld, met de minst ingrijpende maatregel. De IDPC zegt dit voor continu webcamtoezicht (zeer ingrijpend, meestal niet te rechtvaardigen als noodzakelijk en evenredig) en, in besluit CDP/COMP/579/2025, voor continue opname van een rustruimte; er is geen specifieke richtlijn over gps, dus voor continue tracking geldt het beginsel naar analogie.',
      },
      fonte: FONTE_IDPC_LAVORO,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per la geolocalizzazione e la valutazione del rendimento dei dipendenti (lista IDPC)",
        en: 'Impact assessment (DPIA) for geolocation and for evaluating employee performance (IDPC list)',
        de: 'Folgenabschätzung (DSFA) für die Standortbestimmung und die Bewertung der Arbeitsleistung der Beschäftigten (IDPC-Liste)',
        fr: 'Analyse d’impact (AIPD) pour la géolocalisation et l’évaluation du rendement des employés (liste de l’IDPC)',
        es: 'Evaluación de impacto (EIPD) para la geolocalización y la evaluación del rendimiento de los empleados (lista del IDPC)',
        pt: "Avaliação de impacto sobre a proteção de dados (AIPD) para a geolocalização e a avaliação do desempenho dos trabalhadores (lista do IDPC)",
        da: "Konsekvensanalyse (DPIA) for geolokalisering og vurdering af medarbejderes præstation (IDPC's liste)",
        sv: 'Konsekvensbedömning (DPIA) för geolokalisering och för bedömning av de anställdas prestation (IDPC:s lista)',
        nb: 'Vurdering av personvernkonsekvenser (DPIA) for geolokalisering og vurdering av ansattes ytelse (IDPCs liste)',
        nl: 'Effectbeoordeling (DPIA) voor geolocatie en voor de beoordeling van de prestaties van werknemers (IDPC-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista IDPC include i trattamenti che comportano l'uso di dati di geolocalizzazione e la valutazione del rendimento dei dipendenti tra quelli che richiedono una valutazione d'impatto.",
        en: 'The IDPC list includes processing involving the use of geolocation data and the evaluation of employee performance among those requiring an impact assessment.',
        de: 'Die IDPC-Liste zählt Verarbeitungen, die die Nutzung von Standortdaten und die Bewertung der Arbeitsleistung der Beschäftigten umfassen, zu denjenigen, die eine Folgenabschätzung erfordern.',
        fr: 'La liste de l’IDPC inclut, parmi les traitements nécessitant une analyse d’impact, ceux qui impliquent l’utilisation de données de géolocalisation et l’évaluation du rendement des employés.',
        es: 'La lista del IDPC incluye, entre los tratamientos que requieren una evaluación de impacto, los que implican el uso de datos de geolocalización y la evaluación del rendimiento de los empleados.',
        pt: "A lista do IDPC inclui, entre os tratamentos que exigem uma avaliação de impacto, os que implicam a utilização de dados de geolocalização e a avaliação do desempenho dos trabalhadores.",
        da: "IDPC's liste omfatter behandling, der involverer brug af geolokaliseringsdata og vurdering af medarbejderes præstation, blandt de behandlinger, der kræver en konsekvensanalyse.",
        sv: 'IDPC:s lista omfattar behandling som innebär användning av geolokaliseringsuppgifter och bedömning av de anställdas prestation bland de behandlingar som kräver en konsekvensbedömning.',
        nb: 'IDPCs liste omfatter behandling som innebærer bruk av geolokaliseringsdata og vurdering av ansattes ytelse, blant behandlingene som krever en vurdering av personvernkonsekvenser.',
        nl: 'de IDPC-lijst rekent de verwerkingen die het gebruik van geolocatiegegevens en de beoordeling van de prestaties van werknemers omvatten tot die welke een effectbeoordeling vereisen.',
      },
      fonte: FONTE_IDPC_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica che la misura sia strettamente necessaria e proporzionata e scegli il mezzo meno invasivo.',
        en: 'Check that the measure is strictly necessary and proportionate and choose the least intrusive means.',
        de: 'Prüfen Sie, ob die Maßnahme streng erforderlich und verhältnismäßig ist, und wählen Sie das am wenigsten eingreifende Mittel.',
        fr: 'Vérifiez que la mesure est strictement nécessaire et proportionnée et choisissez le moyen le moins intrusif.',
        es: 'Comprueba que la medida sea estrictamente necesaria y proporcionada y elige el medio menos invasivo.',
        pt: "Verifique se a medida é estritamente necessária e proporcionada e escolha o meio menos invasivo.",
        da: 'Kontrollér, at foranstaltningen er strengt nødvendig og forholdsmæssig, og vælg det mindst indgribende middel.',
        sv: 'Kontrollera att åtgärden är strikt nödvändig och proportionell och välj det minst ingripande medlet.',
        nb: 'Kontroller at tiltaket er strengt nødvendig og forholdsmessig, og velg det minst inngripende middelet.',
        nl: 'Controleer of de maatregel strikt noodzakelijk en evenredig is en kies het minst ingrijpende middel.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (legitimate interest, not consent).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, nicht die Einwilligung).',
        fr: 'Déterminez une base juridique valable (intérêt légitime, non le consentement).',
        es: 'Determina una base jurídica válida (interés legítimo, no el consentimiento).',
        pt: "Identifique uma base jurídica válida (interesse legítimo, não o consentimento).",
        da: 'Find et gyldigt retsgrundlag (legitim interesse, ikke samtykke).',
        sv: 'Identifiera en giltig rättslig grund (berättigat intresse, inte samtycke).',
        nb: 'Finn et gyldig rettslig grunnlag (berettiget interesse, ikke samtykke).',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang, niet de toestemming).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per la geolocalizzazione dei dipendenti.",
        en: 'Carry out the impact assessment (DPIA) for the geolocation of employees.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) für die Standortbestimmung der Beschäftigten durch.',
        fr: 'Réalisez l’analyse d’impact (AIPD) pour la géolocalisation des employés.',
        es: 'Realiza la evaluación de impacto (EIPD) para la geolocalización de los empleados.',
        pt: "Realize a avaliação de impacto (AIPD) para a geolocalização dos trabalhadores.",
        da: 'Gennemfør konsekvensanalysen (DPIA) for geolokalisering af medarbejdere.',
        sv: 'Genomför konsekvensbedömningen (DPIA) för geolokalisering av de anställda.',
        nb: 'Gjennomfør vurderingen av personvernkonsekvenser (DPIA) for geolokalisering av ansatte.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de geolocatie van de werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Informa i lavoratori in modo chiaro prima dell'inizio del monitoraggio.",
        en: 'Inform the workers clearly before the monitoring begins.',
        de: 'Informieren Sie die Beschäftigten klar, bevor die Überwachung beginnt.',
        fr: 'Informez clairement les travailleurs avant le début de la surveillance.',
        es: 'Informa con claridad a los trabajadores antes del inicio de la monitorización.',
        pt: "Informe os trabalhadores com clareza antes do início da monitorização.",
        da: 'Informér medarbejderne klart, før overvågningen begynder.',
        sv: 'Informera de anställda tydligt innan övervakningen börjar.',
        nb: 'Informer de ansatte tydelig før overvåkingen begynner.',
        nl: 'Informeer de werknemers duidelijk voordat de monitoring begint.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente tracciamento continuo, solo il minimo necessario.',
        en: 'Configure the system: no continuous tracking, only the necessary minimum.',
        de: 'Konfigurieren Sie das System: keine kontinuierliche Ortung, nur das erforderliche Minimum.',
        fr: 'Configurez le système : pas de suivi continu, uniquement le minimum nécessaire.',
        es: 'Configura el sistema: sin seguimiento continuo, solo el mínimo necesario.',
        pt: "Configure o sistema: sem seguimento contínuo, apenas o mínimo necessário.",
        da: 'Indstil systemet: ingen løbende sporing, kun det nødvendige minimum.',
        sv: 'Konfigurera systemet: ingen kontinuerlig spårning, endast det nödvändiga minimet.',
        nb: 'Sett opp systemet: ingen løpende sporing, bare det nødvendige minimum.',
        nl: 'Configureer het systeem: geen continue tracking, alleen het noodzakelijke minimum.',
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
        pt: "Se mudar de sistema ou de software de monitorização, atualize e volte a entregar a informação, e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, quando a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue antes não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsoplysningerne igen og undersøge, om du på ny skal informere eller høre medarbejdernes repræsentanter, hvor loven kræver det. Ofte ændrer leverandøren (databehandleren), de indsamlede oplysninger og metoderne sig: de oplysninger, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter övervakningssystem eller programvara: uppdatera och lämna ut informationen om personuppgiftsbehandling på nytt, och kontrollera om du åter måste informera eller samråda med de anställdas företrädare, där lagen kräver det. Leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och arbetssätten ändras ofta: den information som lämnades tidigare räcker inte.',
        nb: 'Hvis du bytter system eller overvåkingsprogramvare, må du oppdatere og dele ut personverninformasjonen på nytt og vurdere om du på nytt må informere eller høre de ansattes representanter, der loven krever det. Ofte endrer leverandøren (databehandleren), de innsamlede opplysningene og metodene seg: informasjonen som ble delt ut tidligere, er ikke nok.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'IDPC, reclami',
      portale: FONTE_IDPC_RECLAMO.url,
      urlFonte: FONTE_IDPC_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euro or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4% des Umsatzes (DSGVO)',
      fr: 'jusqu’à 20 millions d’euros ou 4 % du chiffre d’affaires (RGPD)',
      es: 'hasta 20 millones de euros o el 4 % de la facturación (RGPD)',
      pt: "até 20 milhões de euros ou 4 % do volume de negócios (RGPD)",
      da: 'op til 20 millioner euro eller 4 % af omsætningen (GDPR)',
      sv: 'upp till 20 miljoner euro eller 4 % av omsättningen (GDPR)',
      nb: 'opptil 20 millioner euro eller 4 % av omsetningen (GDPR)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: "Nell'elenco delle decisioni pubblicate dall'IDPC non compare alcuna decisione su GPS o geolocalizzazione dei dipendenti, né una multa specifica. Il caso più vicino è CDP/COMP/579/2025 (decisione del 20 aprile 2026): la telecamera nella mensa aziendale che riprendeva i dipendenti in pausa, e le cui immagini erano state usate in un procedimento disciplinare, non poteva fondarsi sull'interesse legittimo (violazione degli artt. 5(2) e 6(1) GDPR); l'IDPC ha disposto ammonimento e rimozione della telecamera, senza multa. Non è un caso di GPS. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).",
      en: "The list of decisions published by the IDPC contains no decision on GPS or geolocation of employees, and no specific fine. The closest case is CDP/COMP/579/2025 (decision of 20 April 2026): the camera in the company canteen, which filmed employees on their break and whose footage was used in disciplinary proceedings, could not rely on legitimate interest (infringement of Articles 5(2) and 6(1) GDPR); the IDPC issued a reprimand and ordered the camera removed, with no fine. It is not a GPS case. The sanction risk remains the general one under the GDPR (art. 83).",
      de: "In der Liste der vom IDPC veröffentlichten Entscheidungen findet sich keine Entscheidung zu GPS oder Geolokalisierung von Beschäftigten und auch kein spezifisches Bußgeld. Der nächstliegende Fall ist CDP/COMP/579/2025 (Entscheidung vom 20. April 2026): Die Kamera in der Betriebskantine, die Beschäftigte in der Pause filmte und deren Aufnahmen in einem Disziplinarverfahren verwendet wurden, konnte sich nicht auf das berechtigte Interesse stützen (Verstoß gegen Art. 5 Abs. 2 und Art. 6 Abs. 1 DSGVO); der IDPC sprach eine Verwarnung aus und ordnete die Entfernung der Kamera an, ohne Bußgeld. Es handelt sich nicht um einen GPS-Fall. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).",
      fr: 'La liste des décisions publiées par l’IDPC ne contient aucune décision sur le GPS ou la géolocalisation des employés, ni d’amende spécifique. Le cas le plus proche est CDP/COMP/579/2025 (décision du 20 avril 2026) : la caméra de la cantine de l’entreprise, qui filmait les employés pendant leur pause et dont les images avaient été utilisées dans une procédure disciplinaire, ne pouvait pas s’appuyer sur l’intérêt légitime (violation des art. 5(2) et 6(1) RGPD) ; l’IDPC a prononcé un rappel à l’ordre et ordonné le retrait de la caméra, sans amende. Il ne s’agit pas d’un cas de GPS. Le risque de sanction reste celui, général, du RGPD (art. 83).',
      es: "En la lista de decisiones publicadas por el IDPC no consta ninguna decisión sobre GPS o geolocalización de empleados, ni una multa específica. El caso más cercano es CDP/COMP/579/2025 (decisión de 20 de abril de 2026): la cámara del comedor de la empresa, que grababa a los empleados en su descanso y cuyas imágenes se habían utilizado en un procedimiento disciplinario, no podía basarse en el interés legítimo (infracción de los arts. 5(2) y 6(1) RGPD); el IDPC dictó una amonestación y ordenó retirar la cámara, sin multa. No es un caso de GPS. El riesgo sancionador sigue siendo el general del RGPD (art. 83).",
      pt: "Na lista de decisões publicadas pelo IDPC não consta nenhuma decisão sobre GPS ou geolocalização de trabalhadores, nem uma coima específica. O caso mais próximo é o CDP/COMP/579/2025 (decisão de 20 de abril de 2026): a câmara do refeitório da empresa, que filmava os trabalhadores durante a pausa e cujas imagens tinham sido utilizadas num procedimento disciplinar, não podia basear-se no interesse legítimo (violação dos arts. 5.º, n.º 2, e 6.º, n.º 1, do RGPD); o IDPC aplicou uma advertência e ordenou a remoção da câmara, sem coima. Não é um caso de GPS. O risco sancionatório continua a ser o geral do RGPD (art. 83.º).",
      da: 'Listen over afgørelser, som IDPC har offentliggjort, indeholder ingen afgørelse om GPS eller geolokalisering af medarbejdere og ingen specifik bøde. Den nærmeste sag er CDP/COMP/579/2025 (afgørelse af 20. april 2026): Kameraet i virksomhedens kantine, som filmede medarbejdere i deres pause, og hvis optagelser blev brugt i disciplinærsager, kunne ikke støtte sig til legitim interesse (overtrædelse af artikel 5, stk. 2, og artikel 6, stk. 1, i GDPR); IDPC udstedte en irettesættelse og pålagde, at kameraet blev fjernet, uden bøde. Det er ikke en GPS-sag. Sanktionsrisikoen er fortsat den almindelige efter GDPR (art. 83).',
      sv: 'Bland de beslut som IDPC har offentliggjort finns inget beslut om GPS eller geolokalisering av anställda, och inget specifikt vite. Det närmaste fallet är CDP/COMP/579/2025 (beslut av den 20 april 2026): kameran i företagets matsal, som filmade de anställda under rasten och vars bilder hade använts i ett disciplinärt förfarande, kunde inte grundas på berättigat intresse (överträdelse av artiklarna 5.2 och 6.1 i GDPR); IDPC utfärdade en reprimand och beordrade att kameran skulle tas bort, utan vite. Det är inte ett GPS-fall. Sanktionsrisken är fortsatt den allmänna enligt GDPR (art. 83).',
      nb: 'Listen over vedtak som IDPC har offentliggjort, inneholder ikke noe vedtak om GPS eller geolokalisering av ansatte og ingen spesifikk bot. Den nærmeste saken er CDP/COMP/579/2025 (vedtak av 20. april 2026): Kameraet i bedriftens kantine, som filmet ansatte i pausen, og hvis opptak ble brukt i disiplinærsaker, kunne ikke støtte seg på berettiget interesse (brudd på artikkel 5 nr. 2 og artikkel 6 nr. 1 i GDPR); IDPC utstedte en irettesettelse og påla at kameraet ble fjernet, uten bot. Det er ikke en GPS-sak. Sanksjonsrisikoen er fortsatt den alminnelige etter GDPR (art. 83).',
      nl: "In de lijst van door de IDPC gepubliceerde besluiten staat geen besluit over gps of geolocatie van werknemers, en ook geen specifieke boete. De dichtstbijzijnde zaak is CDP/COMP/579/2025 (besluit van 20 april 2026): de camera in de bedrijfskantine, die werknemers tijdens hun pauze filmde en waarvan de beelden in een tuchtprocedure waren gebruikt, kon zich niet op gerechtvaardigd belang baseren (schending van art. 5(2) en 6(1) AVG); de IDPC gaf een berisping en gelastte het verwijderen van de camera, zonder boete. Het is geen gps-zaak. Het sanctierisico blijft het algemene risico onder de AVG (art. 83).",
    },
    urlFonte: FONTE_IDPC_DECISIONE.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_IDPC_LAVORO,
    FONTE_IDPC_DPIA,
    FONTE_IDPC_RECLAMO,
    FONTE_IDPC_DECISIONE,
    FONTE_DATA_PROTECTION_ACT,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
