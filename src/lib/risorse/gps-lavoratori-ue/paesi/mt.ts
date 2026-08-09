/**
 * Scheda-paese Malta per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * guida dell'IDPC (Garante maltese) al settore del lavoro, guida IDPC alla
 * valutazione d'impatto sulla protezione dei dati, pagina IDPC per presentare un
 * reclamo, decisione IDPC CDP/COMP/426/2022 sulla videosorveglianza dei
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
    'IDPC, decisione CDP/COMP/426/2022 (videosorveglianza dei dipendenti)',
  url: 'https://idpc.org.mt/wp-content/uploads/2023/11/CDP_COMP_426_2022.pdf',
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
      fr: "Malte dispose d'une seule autorité nationale, l'IDPC ; il n'y a pas de répartition régionale.",
      es: 'Malta cuenta con una única autoridad nacional, el IDPC; no existe reparto regional.',
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
        nl: 'Voorafgaande informatie aan de werknemers (art. 13) en een strikt noodzakelijke en evenredige maatregel',
      },
      risposta: 'si',
      dettaglio: {
        it: "ogni misura di monitoraggio deve essere strettamente necessaria e proporzionata, scegliendo il mezzo meno invasivo, e i lavoratori vanno informati in modo chiaro prima dell'inizio del monitoraggio, mai dopo.",
        en: 'every monitoring measure must be strictly necessary and proportionate, choosing the least intrusive means, and workers must be clearly informed before the monitoring begins, never afterwards.',
        de: 'Jede Ueberwachungsmassnahme muss streng erforderlich und verhältnismäßig sein, wobei das am wenigsten eingreifende Mittel zu wählen ist, und die Beschäftigten sind vor Beginn der Überwachung klar zu informieren, niemals danach.',
        fr: "toute mesure de surveillance doit être strictement nécessaire et proportionnée, en choisissant le moyen le moins intrusif, et les travailleurs doivent être clairement informes avant le début de la surveillance, jamais après.",
        es: 'toda medida de monitorización debe ser estrictamente necesaria y proporcionada, eligiendo el medio menos invasivo, y los trabajadores deben ser informados con claridad antes del inicio de la monitorización, nunca después.',
        nl: 'elke monitoringmaatregel moet strikt noodzakelijk en evenredig zijn, waarbij het minst ingrijpende middel wordt gekozen, en de werknemers moeten duidelijk worden geinformeerd voordat de monitoring begint, nooit erna.',
      },
      fonte: FONTE_IDPC_LAVORO,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "non serve un'autorizzazione preventiva dell'IDPC; il titolare si autovaluta e consulta l'IDPC solo se una DPIA evidenzia un rischio residuo elevato.",
        en: 'no prior authorisation from the IDPC is required; the controller self-assesses and consults the IDPC only if a DPIA reveals a high residual risk.',
        de: 'Es ist keine vorherige Genehmigung des IDPC erforderlich; der Verantwortliche nimmt eine Selbstbewertung vor und konsultiert den IDPC nur, wenn eine DSFA ein hohes Restrisiko ergibt.',
        fr: "aucune autorisation préalable de l'IDPC n'est requise ; le responsable du traitement procède a une auto-évaluation et ne consulte l'IDPC que si une AIPD révèle un risque résiduel eleve.",
        es: 'no se requiere autorización previa del IDPC; el responsable se autoevalua y consulta al IDPC solo si una EIPD revela un riesgo residual elevado.',
        nl: 'er is geen voorafgaande toestemming van de IDPC vereist; de verwerkingsverantwoordelijke voert een zelfbeoordeling uit en raadpleegt de IDPC alleen als een DPIA een hoog restrisico aantoont.',
      },
      fonte: FONTE_IDPC_DPIA,
    },
    {
      voce: {
        it: 'Base = interesse legittimo (soglia alta), non il consenso',
        en: 'Basis = legitimate interest (high threshold), not consent',
        de: 'Grundlage = berechtigtes Interesse (höhe Schwelle), nicht die Einwilligung',
        fr: 'Base = intérêt légitime (seuil eleve), non le consentement',
        es: 'Base = interés legítimo (umbral alto), no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang (hoge drempel), niet de toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "il consenso non e di norma valido nel rapporto di lavoro per lo squilibrio di potere; la base usuale e l'interesse legittimo, ma con una soglia alta.",
        en: 'consent is not normally valid in the employment relationship because of the imbalance of power; the usual basis is legitimate interest, but with a high threshold.',
        de: 'Die Einwilligung ist im Arbeitsverhältnis wegen des Machtungleichgewichts in der Regel nicht gültig; die übliche Grundlage ist das berechtigte Interesse, jedoch mit einer hohen Schwelle.',
        fr: "le consentement n'est generalement pas valable dans la relation de travail en raison du déséquilibre de pouvoir ; la base habituelle est l'intérêt légitime, mais avec un seuil eleve.",
        es: 'el consentimiento no suele ser valido en la relación laboral debido al desequilibrio de poder; la base habitual es el interés legítimo, pero con un umbral alto.',
        nl: 'de toestemming is in de arbeidsverhouding doorgaans niet geldig vanwege de machtsongelijkheid; de gebruikelijke grondslag is het gerechtvaardigd belang, maar met een hoge drempel.',
      },
      fonte: FONTE_IDPC_LAVORO,
    },
    {
      voce: {
        it: 'Niente tracciamento continuo o permanente; minimizzazione',
        en: 'No continuous or permanent tracking; data minimisation',
        de: 'Keine kontinuierliche oder dauerhafte Ortung; Datenminimierung',
        fr: 'Pas de suivi continu ou permanent ; minimisation des données',
        es: 'Sin seguimiento continuo o permanente; minimización de datos',
        nl: 'Geen continue of permanente tracking; gegevensminimalisatie',
      },
      risposta: 'si',
      dettaglio: {
        it: 'va raccolto solo il minimo dei dati necessari; il tracciamento continuo o permanente e presuntivamente sproporzionato.',
        en: 'only the minimum of necessary data may be collected; continuous or permanent tracking is presumptively disproportionate.',
        de: 'Es darf nur das Minimum der erforderlichen Daten erhoben werden; eine kontinuierliche oder dauerhafte Ortung gilt vermutlich als unverhältnismäßig.',
        fr: 'seul le minimum de données nécessaires peut être collecte ; le suivi continu ou permanent est présume disproportionné.',
        es: 'solo puede recogerse el mínimo de datos necesarios; el seguimiento continuo o permanente se presume desproporcionado.',
        nl: 'er mag alleen het minimum aan noodzakelijke gegevens worden verzameld; continue of permanente tracking wordt verondersteld onevenredig te zijn.',
      },
      fonte: FONTE_IDPC_LAVORO,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per la geolocalizzazione e la valutazione del rendimento dei dipendenti (lista IDPC)",
        en: 'Impact assessment (DPIA) for geolocation and for evaluating employee performance (IDPC list)',
        de: 'Folgenabschätzung (DSFA) für die Standortbestimmung und die Bewertung der Arbeitsleistung der Beschäftigten (IDPC-Liste)',
        fr: "Analyse d'impact (AIPD) pour la géolocalisation et l'évaluation du rendement des employés (liste de l'IDPC)",
        es: 'Evaluación de impacto (EIPD) para la geolocalizacion y la evaluación del rendimiento de los empleados (lista del IDPC)',
        nl: 'Effectbeoordeling (DPIA) voor geolocatie en voor de beoordeling van de prestaties van werknemers (IDPC-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "la lista IDPC include i trattamenti che comportano l'uso di dati di geolocalizzazione e la valutazione del rendimento dei dipendenti tra quelli che richiedono una valutazione d'impatto.",
        en: 'the IDPC list includes processing involving the use of geolocation data and the evaluation of employee performance among those requiring an impact assessment.',
        de: 'Die IDPC-Liste zählt Verarbeitungen, die die Nutzung von Standortdaten und die Bewertung der Arbeitsleistung der Beschäftigten umfassen, zu denjenigen, die eine Folgenabschätzung erfordern.',
        fr: "la liste de l'IDPC inclut, parmi les traitements nécessitant une analyse d'impact, ceux qui impliquent l'utilisation de données de géolocalisation et l'évaluation du rendement des employés.",
        es: 'la lista del IDPC incluye, entre los tratamientos que requieren una evaluación de impacto, los que implican el uso de datos de geolocalizacion y la evaluación del rendimiento de los empleados.',
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
        es: 'Compruebe que la medida sea estrictamente necesaria y proporcionada y elija el medio menos invasivo.',
        nl: 'Controleer of de maatregel strikt noodzakelijk en evenredig is en kies het minst ingrijpende middel.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (legitimate interest, not consent).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, nicht die Einwilligung).',
        fr: "Déterminez une base juridique valable (intérêt légitime, non le consentement).",
        es: 'Determine una base jurídica valida (interés legítimo, no el consentimiento).',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang, niet de toestemming).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per la geolocalizzazione dei dipendenti.",
        en: 'Carry out the impact assessment (DPIA) for the geolocation of employees.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) für die Standortbestimmung der Beschäftigten durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour la géolocalisation des employés.",
        es: 'Realice la evaluación de impacto (EIPD) para la geolocalizacion de los empleados.',
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
        es: 'Informe con claridad a los trabajadores antes del inicio de la monitorización.',
        nl: 'Informeer de werknemers duidelijk voordat de monitoring begint.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente tracciamento continuo, solo il minimo necessario.',
        en: 'Configure the system: no continuous tracking, only the necessary minimum.',
        de: 'Konfigurieren Sie das System: keine kontinuierliche Ortung, nur das erforderliche Minimum.',
        fr: 'Configurez le système : pas de suivi continu, uniquement le minimum nécessaire.',
        es: 'Configure el sistema: sin seguimiento continuo, solo el mínimo necesario.',
        nl: 'Configureer het systeem: geen continue tracking, alleen het noodzakelijke minimum.',
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
      fr: "jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires (RGPD)",
      es: 'hasta 20 millones de euros o el 4% de la facturación (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: "Non risulta una multa dell'IDPC specifica e pubblicata per il GPS sui dipendenti. In un caso (CDP/COMP/426/2022) l'IDPC ha ritenuto eccessiva e sproporzionata la videosorveglianza della mensa aziendale che riprendeva i dipendenti in pausa, usata in un procedimento disciplinare. Non e un caso di GPS. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).",
      en: "There is no specific, published IDPC fine for GPS tracking of employees. In one case (CDP/COMP/426/2022) the IDPC found the video surveillance of the company canteen, which filmed employees on their break and was used in disciplinary proceedings, to be excessive and disproportionate. It is not a GPS case. The sanction risk remains the general one under the GDPR (art. 83).",
      de: "Es ist kein spezifisches, veröffentlichtes Bußgeld des IDPC für die GPS-Ortung von Beschäftigten bekannt. In einem Fall (CDP/COMP/426/2022) hat der IDPC die Videoüberwachung der Betriebskantine, die Beschäftigte in der Pause filmte und in einem Disziplinarverfahren verwendet wurde, als übermäßig und unverhältnismäßig eingestuft. Es handelt sich nicht um einen GPS-Fall. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).",
      fr: "Il n'existe pas d'amende spécifique et publiée de l'IDPC pour le suivi GPS des employés. Dans une affaire (CDP/COMP/426/2022), l'IDPC a jugé excessive et disproportionnée la vidéosurveillance de la cantine de l'entreprise, qui filmait les employés pendant leur pause et a été utilisée dans une procédure disciplinaire. Il ne s'agit pas d'un cas de GPS. Le risque de sanction reste celui, général, du RGPD (art. 83).",
      es: "No consta una multa especifica y publicada del IDPC por el seguimiento GPS de los empleados. En un caso (CDP/COMP/426/2022) el IDPC considero excesiva y desproporcionada la videovigilancia del comedor de la empresa, que grababa a los empleados en su descanso y se utilizo en un procedimiento disciplinario. No es un caso de GPS. El riesgo sancionador sigue siendo el general del RGPD (art. 83).",
      nl: "Er is geen specifieke, gepubliceerde boete van de IDPC voor de GPS-tracking van werknemers bekend. In een zaak (CDP/COMP/426/2022) achtte de IDPC het cameratoezicht in de bedrijfskantine, dat werknemers tijdens hun pauze filmde en in een tuchtprocedure werd gebruikt, buitensporig en onevenredig. Het is geen GPS-zaak. Het sanctierisico blijft het algemene risico onder de AVG (art. 83).",
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

  aggiornatoIl: '2026-06-15',
};
