/**
 * Scheda-paese Bosnia ed Erzegovina per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Bosnia ed Erzegovina NON e' UE; e' un paese candidato. Dal 2025
 * ha una NUOVA legge sulla protezione dei dati personali (Gazzetta ufficiale BiH
 * n. 12/25), allineata al GDPR, in vigore dall'8 marzo 2025 e applicabile da fine
 * ottobre 2025. Non e' più' il vecchio regime del 2006.
 *
 * Contenuti basati su fonti verificate e citate nella sezione "Fonti": nuova legge
 * 12/25, decisione AZLP del 10.11.2025 sui trattamenti che richiedono una DPIA (include
 * il monitoraggio dei dipendenti con sistemi di controllo di lavoro e spostamenti), pagina ufficiale dell'AZLP, analisi DLA
 * Piper sul quadro bosniaco e GDPR come riferimento comparativo. L'autorità' garante
 * e' unica e nazionale (AZLP); non c'e' ripartizione per entità'. Nessun numero, URL
 * o autorita' e' inventato qui.
 */

import type { SchedaPaese , Fonte} from '../types';

// URL delle fonti citate.
const FONTE_LEGGE_12_25 = {
  titolo:
    'Legge sulla protezione dei dati personali (Gazzetta BiH 12/25), testo pubblicato dall AZLP',
  url: 'https://azlp.ba/propisi/default.aspx?id=4546&langTag=bs-BA',
};
const FONTE_AZLP_DPIA: Fonte = {
  titolo:
    'AZLP, decisione del 10.11.2025 sulla lista dei trattamenti che richiedono una DPIA (punto 8: dati dei dipendenti, controllo di lavoro e spostamenti)',
  url: 'https://azlp.ba/Provodenje_ZZLP/default.aspx?id=4896&langTag=bs-BA',
};
const FONTE_AZLP = {
  titolo: 'AZLP (Garante bosniaco), pagina ufficiale',
  url: 'https://azlp.ba/',
};
const FONTE_DLA_PIPER = {
  titolo: 'Legge sulla protezione dei dati personali, Gazzetta ufficiale BiH 12/25',
  url: 'https://www.sluzbenilist.ba/page/akt/aCRNh0ohz4nh78h77P7BE=',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const bosnia: SchedaPaese = {
  codiceISO: 'BA',
  slugCanonico: 'bosnia-erzegovina',
  nome: 'Bosnia ed Erzegovina',
  nomi: {
    it: 'Bosnia ed Erzegovina',
    en: 'Bosnia and Herzegovina',
    'en-us': 'Bosnia and Herzegovina',
    'en-gb': 'Bosnia and Herzegovina',
    'en-au': 'Bosnia and Herzegovina',
    'en-ie': 'Bosnia and Herzegovina',
    'en-ca': 'Bosnia and Herzegovina',
    de: 'Bosnien und Herzegowina',
    nl: 'Bosnië en Herzegovina',
    fr: 'Bosnie-Herzégovine',
    es: 'Bosnia y Herzegovina',
    pt: 'Bósnia e Herzegovina',
    da: 'Bosnien-Hercegovina',
    sv: 'Bosnien och Hercegovina',
    nb: 'Bosnia-Hercegovina',
    ru: 'Босния и Герцеговина',
  },
  bandiera: '🇧🇦',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'AZLP (Agenzia per la protezione dei dati personali della BiH)',
      en: 'AZLP (Personal Data Protection Agency of Bosnia and Herzegovina)',
      de: 'AZLP (Agentur für den Schutz personenbezogener Daten von Bosnien und Herzegowina)',
      fr: 'AZLP (Agence de protection des données personnelles de Bosnie-Herzégovine)',
      es: 'AZLP (Agencia de Protección de Datos Personales de Bosnia y Herzegovina)',
      nl: 'AZLP (Agentschap voor de Bescherming van Persoonsgegevens van Bosnië en Herzegovina)',
      pt: 'AZLP (Agência de Proteção de Dados Pessoais da Bósnia e Herzegovina)',
      da: 'AZLP (Agentur for Beskyttelse af Personoplysninger i Bosnien-Hercegovina)',
      sv: 'AZLP (Myndigheten för skydd av personuppgifter i Bosnien och Hercegovina)',
      nb: 'AZLP (Byrå for beskyttelse av personopplysninger i Bosnia-Hercegovina)',
      ru: 'AZLP (Агентство по защите персональных данных Боснии и Герцеговины)',
    },
    portale: 'https://azlp.ba/',
    urlFonte: 'https://azlp.ba/',
    verificatoIl: '2026-06-15',
    note: {
      it: "La Bosnia ed Erzegovina è un Paese candidato, fuori dall'UE; dal 2025 ha una nuova legge allineata al GDPR. Unica autorità nazionale, l'AZLP; nessuna ripartizione per entità.",
      en: 'Bosnia and Herzegovina is a candidate country, outside the EU; since 2025 it has a new law aligned with the GDPR. A single national authority, the AZLP; no division by entity.',
      de: 'Bosnien und Herzegowina ist ein Beitrittskandidat außerhalb der EU; seit 2025 gilt ein neues, an die DSGVO angeglichenes Gesetz. Es gibt eine einzige nationale Behörde, die AZLP; keine Aufteilung nach Entitäten.',
      fr: 'La Bosnie-Herzégovine est un pays candidat, hors de l’UE ; depuis 2025, elle dispose d’une nouvelle loi alignée sur le RGPD. Une seule autorité nationale, l’AZLP ; aucune répartition par entité.',
      es: 'Bosnia y Herzegovina es un país candidato, fuera de la UE; desde 2025 cuenta con una nueva ley alineada con el RGPD. Una única autoridad nacional, la AZLP; sin reparto por entidades.',
      nl: 'Bosnie en Herzegovina is een kandidaat-lidstaat buiten de EU; sinds 2025 geldt er een nieuwe wet die is afgestemd op de AVG. Een enkele nationale autoriteit, de AZLP; geen verdeling per entiteit.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione ai lavoratori e base giuridica valida (nuova legge 12/25)',
        en: 'Informing workers and a valid legal basis (new law 12/25)',
        de: 'Information der Arbeitnehmer und gültige Rechtsgrundlage (neues Gesetz 12/25)',
        fr: 'Information des travailleurs et base juridique valable (nouvelle loi 12/25)',
        es: 'Información a los trabajadores y base jurídica valida (nueva ley 12/25)',
        nl: 'Informatie aan werknemers en een geldige rechtsgrondslag (nieuwe wet 12/25)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La nuova legge, allineata al GDPR, richiede una base giuridica tra le sei previste e l'informazione ai lavoratori per il trattamento dei loro dati, incluso il GPS.",
        en: 'The new law, aligned with the GDPR, requires one of the six legal bases provided for and that workers be informed about the processing of their data, including GPS.',
        de: 'Das neue, an die DSGVO angeglichene Gesetz verlangt eine der sechs vorgesehenen Rechtsgrundlagen sowie die Information der Arbeitnehmer über die Verarbeitung ihrer Daten, einschließlich GPS.',
        fr: 'La nouvelle loi, alignée sur le RGPD, exige l’une des six bases juridiques prévues et l’information des travailleurs sur le traitement de leurs données, y compris le GPS.',
        es: 'La nueva ley, alineada con el RGPD, exige una de las seis bases jurídicas previstas y la información a los trabajadores sobre el tratamiento de sus datos, incluido el GPS.',
        nl: 'De nieuwe wet, afgestemd op de AVG, vereist een van de zes voorziene rechtsgrondslagen en dat werknemers worden geinformeerd over de verwerking van hun gegevens, inclusief GPS.',
      },
      fonte: FONTE_LEGGE_12_25,
    },
    {
      voce: {
        it: "Autorizzazione o registrazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation or registration with an authority before installing',
        de: 'Vorherige Genehmigung oder Registrierung bei einer Behörde vor der Installation',
        fr: 'Autorisation ou enregistrement préalable auprès d’une autorité avant l’installation',
        es: 'Autorización o registro previo ante una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming of registratie bij een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La nuova legge sostituisce l'obbligo generale di registrazione presso l'Agenzia con la tenuta di un registro interno dei trattamenti.",
        en: 'The new law replaces the general obligation to register with the Agency with keeping an internal record of processing activities.',
        de: 'Das neue Gesetz ersetzt die allgemeine Pflicht zur Registrierung bei der Agentur durch das Führen eines internen Verzeichnisses der Verarbeitungstätigkeiten.',
        fr: 'La nouvelle loi remplace l’obligation générale d’enregistrement auprès de l’Agence par la tenue d’un registre interne des traitements.',
        es: 'La nueva ley sustituye la obligación general de registro ante la Agencia por el mantenimiento de un registro interno de las actividades de tratamiento.',
        nl: 'De nieuwe wet vervangt de algemene verplichting tot registratie bij het Agentschap door het bijhouden van een intern register van verwerkingsactiviteiten.',
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: 'Base = interesse legittimo, non il consenso',
        en: 'Basis = legitimate interest, not consent',
        de: 'Grundlage = berechtigtes Interesse, nicht die Einwilligung',
        fr: 'Base = intérêt légitime, et non le consentement',
        es: 'Base = interés legítimo, no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang, niet toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base usuale è l'interesse legittimo; nel rapporto di lavoro il consenso è una base debole per lo squilibrio di potere.",
        en: 'The usual basis is legitimate interest; in the employment relationship consent is a weak basis because of the imbalance of power.',
        de: 'Die übliche Grundlage ist das berechtigte Interesse; im Arbeitsverhältnis ist die Einwilligung wegen des Machtungleichgewichts eine schwache Grundlage.',
        fr: 'La base habituelle est l’intérêt légitime ; dans la relation de travail, le consentement est une base faible en raison du déséquilibre des pouvoirs.',
        es: 'La base habitual es el interés legítimo; en la relación laboral el consentimiento es una base débil por el desequilibrio de poder.',
        nl: 'De gebruikelijke grondslag is het gerechtvaardigd belang; in de arbeidsverhouding is toestemming een zwakke grondslag vanwege de machtsongelijkheid.',
      },
      fonte: FONTE_LEGGE_12_25,
    },
    {
      voce: {
        it: "Finalità determinata, minimizzazione e conservazione limitata (art. 7)",
        en: "Specified purpose, data minimisation and limited retention (art. 7)",
        de: "Festgelegter Zweck, Datenminimierung und begrenzte Speicherung (Art. 7)",
        fr: 'Finalité déterminée, minimisation des données et conservation limitée (art. 7)',
        es: "Finalidad determinada, minimización de datos y conservación limitada (art. 7)",
        nl: "Bepaald doel, minimale gegevensverwerking en beperkte bewaring (art. 7)",
      },
      risposta: 'si',
      dettaglio: {
        it: "L'art. 7 esige dati raccolti per finalità determinate, esplicite e legittime, limitati a quanto necessario e conservati non oltre il tempo necessario; il titolare deve poter dimostrare la conformità.",
        en: "Art. 7 requires data collected for specified, explicit and legitimate purposes, limited to what is necessary and kept no longer than necessary; the controller must be able to demonstrate compliance.",
        de: "Art. 7 verlangt Daten, die für festgelegte, eindeutige und legitime Zwecke erhoben, auf das Notwendige beschränkt und nicht länger als nötig gespeichert werden; der Verantwortliche muss die Einhaltung nachweisen können.",
        fr: 'L’art. 7 exige des données collectées pour des finalités déterminées, explicites et légitimes, limitées à ce qui est nécessaire et conservées pas plus longtemps que nécessaire ; le responsable doit pouvoir démontrer la conformité.',
        es: "El art. 7 exige datos recogidos con fines determinados, explícitos y legítimos, limitados a lo necesario y conservados no más tiempo del necesario; el responsable debe poder demostrar el cumplimiento.",
        nl: "Art. 7 eist gegevens die voor bepaalde, uitdrukkelijke en legitieme doeleinden zijn verzameld, beperkt zijn tot wat nodig is en niet langer worden bewaard dan nodig; de verwerkingsverantwoordelijke moet de naleving kunnen aantonen.",
      },
      fonte: FONTE_LEGGE_12_25,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti con app o sistemi di tracciamento (decisione AZLP del 10.11.2025)",
        en: "Impact assessment (DPIA) for monitoring employees with apps or tracking systems (AZLP decision of 10.11.2025)",
        de: "Datenschutz-Folgenabschätzung (DSFA) für die Überwachung von Beschäftigten mit Apps oder Tracking-Systemen (AZLP-Beschluss vom 10.11.2025)",
        fr: 'Analyse d’impact (AIPD) pour la surveillance des employés par des applications ou systèmes de suivi (décision AZLP du 10.11.2025)',
        es: "Evaluación de impacto (EIPD) para la monitorización de los empleados con aplicaciones o sistemas de seguimiento (decisión de la AZLP del 10.11.2025)",
        nl: "Effectbeoordeling (DPIA) voor het monitoren van werknemers met apps of trackingsystemen (AZLP-besluit van 10.11.2025)",
      },
      risposta: 'si',
      dettaglio: {
        it: "La decisione AZLP del 10 novembre 2025 (n. 03-02-2-1676-1/25, punto 8) rende obbligatoria la valutazione d'impatto quando il datore di lavoro tratta i dati dei dipendenti con applicazioni o sistemi per seguirne il lavoro, gli spostamenti o le comunicazioni. Il GPS non è nominato, ma il tracciamento degli spostamenti in pratica vi rientra. La valutazione va fatta prima del trattamento; la consultazione preventiva dell'AZLP serve solo se resta un rischio elevato.",
        en: "The AZLP decision of 10 November 2025 (no. 03-02-2-1676-1/25, point 8) makes an impact assessment mandatory where an employer processes employee data with applications or systems to follow their work, movements or communications. GPS is not named, but tracking movements in practice falls within it. The assessment must be done before the processing; prior consultation of the AZLP is needed only if a high risk remains.",
        de: "Der AZLP-Beschluss vom 10. November 2025 (Nr. 03-02-2-1676-1/25, Punkt 8) macht die Folgenabschätzung verpflichtend, wenn ein Arbeitgeber Beschäftigtendaten mit Anwendungen oder Systemen verarbeitet, um Arbeit, Bewegungen oder Kommunikation zu verfolgen. GPS wird nicht genannt, doch die Ortung von Bewegungen fällt in der Praxis darunter. Die Folgenabschätzung ist vor der Verarbeitung durchzuführen; eine vorherige Konsultation der AZLP ist nur nötig, wenn ein hohes Risiko bleibt.",
        fr: 'La décision de l’AZLP du 10 novembre 2025 (n° 03-02-2-1676-1/25, point 8) rend l’analyse d’impact obligatoire lorsque l’employeur traite les données des employés au moyen d’applications ou de systèmes servant à suivre leur travail, leurs déplacements ou leurs communications. Le GPS n’est pas nommé, mais le suivi des déplacements y entre en pratique. L’analyse doit être faite avant le traitement ; la consultation préalable de l’AZLP n’est nécessaire que si un risque élevé subsiste.',
        es: "La decisión de la AZLP del 10 de noviembre de 2025 (n.º 03-02-2-1676-1/25, punto 8) hace obligatoria la evaluación de impacto cuando el empleador trata los datos de los empleados con aplicaciones o sistemas para seguir su trabajo, sus desplazamientos o sus comunicaciones. El GPS no se nombra, pero el seguimiento de los desplazamientos entra en la práctica. La evaluación debe hacerse antes del tratamiento; la consulta previa a la AZLP solo hace falta si persiste un riesgo elevado.",
        nl: "Het AZLP-besluit van 10 november 2025 (nr. 03-02-2-1676-1/25, punt 8) maakt een effectbeoordeling verplicht wanneer een werkgever werknemersgegevens verwerkt met toepassingen of systemen om hun werk, verplaatsingen of communicatie te volgen. GPS wordt niet genoemd, maar het volgen van verplaatsingen valt in de praktijk eronder. De beoordeling moet vóór de verwerking plaatsvinden; voorafgaande raadpleging van de AZLP is alleen nodig als een hoog risico overblijft.",
      },
      fonte: FONTE_AZLP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo) e tieni il registro interno dei trattamenti.',
        en: 'Identify a valid legal basis (legitimate interest) and keep the internal record of processing activities.',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse) und führen Sie das interne Verzeichnis der Verarbeitungstätigkeiten.',
        fr: 'Identifiez une base juridique valable (intérêt légitime) et tenez le registre interne des traitements.',
        es: 'Identifique una base jurídica valida (interés legítimo) y mantenga el registro interno de las actividades de tratamiento.',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang) en houd het interne register van verwerkingsactiviteiten bij.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori sul trattamento (GPS incluso).',
        en: 'Inform workers about the processing (including GPS).',
        de: 'Informieren Sie die Arbeitnehmer über die Verarbeitung (einschließlich GPS).',
        fr: 'Informez les travailleurs sur le traitement (GPS inclus).',
        es: 'Informe a los trabajadores sobre el tratamiento (incluido el GPS).',
        nl: 'Informeer de werknemers over de verwerking (inclusief GPS).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti.",
        en: 'Carry out the impact assessment (DPIA) for monitoring employees.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Überwachung der Beschäftigten durch.',
        fr: 'Réalisez l’analyse d’impact (AIPD) pour la surveillance des employés.',
        es: 'Realice la evaluación de impacto (EIPD) para la monitorización de los empleados.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor het monitoren van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Applica minimizzazione e proporzionalità.',
        en: 'Apply minimisation and proportionality.',
        de: 'Wenden Sie Datenminimierung und Verhältnismäßigkeit an.',
        fr: 'Appliquez la minimisation et la proportionnalité.',
        es: 'Aplique la minimización y la proporcionalidad.',
        nl: 'Pas minimalisatie en evenredigheid toe.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato alla finalità dichiarata.',
        en: 'Configure the system in a way proportionate to the stated purpose.',
        de: 'Konfigurieren Sie das System verhältnismäßig zum angegebenen Zweck.',
        fr: 'Configurez le système de manière proportionnée à la finalité déclarée.',
        es: 'Configure el sistema de forma proporcionada a la finalidad declarada.',
        nl: 'Configureer het systeem op een manier die in verhouding staat tot het verklaarde doel.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'En caso de cambio de sistema: si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la entregada antes no basta.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'AZLP',
      portale: 'https://azlp.ba/',
      urlFonte: 'https://azlp.ba/',
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 40 milioni di BAM o 4% del fatturato (nuova legge in stile GDPR)',
      en: 'up to 40 million BAM or 4% of turnover (new GDPR-style law)',
      de: 'bis zu 40 Millionen BAM oder 4 % des Umsatzes (neues Gesetz im DSGVO-Stil)',
      fr: 'jusqu’à 40 millions de BAM ou 4 % du chiffre d’affaires (nouvelle loi de type RGPD)',
      es: 'hasta 40 millones de BAM o el 4 % del volumen de negocios (nueva ley de estilo RGPD)',
      nl: 'tot 40 miljoen BAM of 4% van de omzet (nieuwe wet in AVG-stijl)',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AZLP specifica pubblicata per il GPS sui dipendenti. Con la nuova legge, in vigore da marzo 2025 è applicabile dal 4 ottobre 2025, le sanzioni sono in stile GDPR: fino a 40 milioni di BAM o il 4% del fatturato annuo mondiale. Con la decisione del 10 novembre 2025 l'AZLP ha reso obbligatoria la valutazione d'impatto per il monitoraggio dei dipendenti con sistemi di controllo di lavoro e spostamenti (art. 113, c. 5 della legge per l'importo).",
      en: "There is no specific, published AZLP fine for GPS tracking of employees. Under the new 2025 law, penalties are GDPR-style: up to 40 million BAM or 4% of annual worldwide turnover. By its decision of 10 November 2025 the AZLP made an impact assessment mandatory for monitoring employees with systems that follow their work and movements (art. 113(5) of the law for the amount).",
      de: "Eine spezifische, veröffentlichte Geldbuße der AZLP für die GPS-Ortung von Beschäftigten ist nicht bekannt. Mit dem neuen Gesetz von 2025 sind die Sanktionen im DSGVO-Stil: bis zu 40 Millionen BAM oder 4 % des weltweiten Jahresumsatzes. Mit ihrem Beschluss vom 10. November 2025 hat die AZLP die Folgenabschätzung für die Überwachung von Beschäftigten mit Systemen zur Verfolgung von Arbeit und Bewegungen verpflichtend gemacht (Art. 113 Abs. 5 des Gesetzes für den Betrag).",
      fr: 'Il n’existe pas d’amende spécifique et publiée de l’AZLP pour le suivi GPS des employés. Avec la nouvelle loi de 2025, les sanctions sont de type RGPD : jusqu’à 40 millions de BAM ou 4 % du chiffre d’affaires annuel mondial. Par sa décision du 10 novembre 2025, l’AZLP a rendu obligatoire l’analyse d’impact pour la surveillance des employés par des systèmes de suivi du travail et des déplacements (art. 113, al. 5 de la loi pour le montant).',
      es: "No consta una multa especifica y publicada de la AZLP por el seguimiento por GPS de los empleados. Con la nueva ley de 2025 las sanciones son de estilo RGPD: hasta 40 millones de BAM o el 4 % del volumen de negocios anual mundial. Con su decisión del 10 de noviembre de 2025, la AZLP hizo obligatoria la evaluación de impacto para la monitorización de los empleados con sistemas de seguimiento del trabajo y de los desplazamientos (art. 113, ap. 5 de la ley para el importe).",
      nl: "Er is geen specifieke, gepubliceerde boete van de AZLP voor GPS-tracking van werknemers bekend. Met de nieuwe wet van 2025 zijn de sancties in AVG-stijl: tot 40 miljoen BAM of 4% van de wereldwijde jaaromzet. Met haar besluit van 10 november 2025 heeft de AZLP een effectbeoordeling verplicht gesteld voor het monitoren van werknemers met systemen die hun werk en verplaatsingen volgen (art. 113, lid 5 van de wet voor het bedrag).",
    },
    urlFonte: 'https://www.sluzbenilist.ba/page/akt/aCRNh0ohz4nh78h77P7BE=',
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_LEGGE_12_25,
    FONTE_AZLP_DPIA,
    FONTE_AZLP,
    FONTE_DLA_PIPER,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
