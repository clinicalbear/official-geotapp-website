/**
 * Scheda-paese Macedonia del Nord per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Macedonia del Nord NON e' uno Stato membro dell'UE, ma un paese
 * candidato. La sua disciplina poggia sulla Legge sulla protezione dei dati
 * personali (LPDP, Gazzetta ufficiale 42/20, in vigore dal 24 febbraio 2020),
 * allineata al GDPR, e sugli atti subordinati dell'AZLP (regolamento sulla
 * videosorveglianza e lista dei trattamenti che richiedono una DPIA, 11.05.2020). Unica autorita' nazionale: l'AZLP. Nessun numero, URL o autorita' e'
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LPDP = {
  titolo: 'Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - traduzione inglese non ufficiale pubblicata dall\'AZLP',
  url: 'https://azlp.mk/wp-content/uploads/2022/12/lpdp_2020.pdf',
};
const FONTE_AZLP_DPIA = {
  titolo:
    'AZLP, lista dei trattamenti che richiedono la DPIA (11.05.2020, punti 10 e 12: posizione e spostamenti, dati dei lavoratori)',
  url: 'https://azlp.mk/wp-content/uploads/2022/12/List-Mandatory-DPIA.pdf',
};
const FONTE_AZLP_ATTI = {
  titolo: 'AZLP, atti subordinati (regolamenti e liste), pagina ufficiale',
  url: 'https://azlp.mk/en/pdpa/regulations-and-documents/by-laws-for-the-protection-of-personal-data/',
};
const FONTE_AZLP = {
  titolo: 'AZLP (Garante macedone), pagina ufficiale e reclami',
  url: 'https://azlp.mk/en/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const macedoniaDelNord: SchedaPaese = {
  codiceISO: 'MK',
  slugCanonico: 'macedonia-del-nord',
  nome: 'Macedonia del Nord',
  nomi: {
    it: 'Macedonia del Nord',
    en: 'North Macedonia',
    'en-us': 'North Macedonia',
    'en-gb': 'North Macedonia',
    'en-au': 'North Macedonia',
    'en-ie': 'North Macedonia',
    'en-ca': 'North Macedonia',
    de: 'Nordmazedonien',
    nl: 'Noord-Macedonië',
    fr: 'Macédoine du Nord',
    es: 'Macedonia del Norte',
    pt: 'Macedónia do Norte',
    da: 'Nordmakedonien',
    sv: 'Nordmakedonien',
    nb: 'Nord-Makedonia',
    ru: 'Северная Македония',
  },
  bandiera: '🇲🇰',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'AZLP (Agenzia per la protezione dei dati personali)',
      en: 'AZLP (Personal Data Protection Agency)',
      de: 'AZLP (Agentur für den Schutz personenbezogener Daten)',
      fr: 'AZLP (Agence de protection des données personnelles)',
      es: 'AZLP (Agencia de Protección de Datos Personales)',
      nl: 'AZLP (Agentschap voor de Bescherming van Persoonsgegevens)',
      pt: 'AZLP (Agência de Proteção de Dados Pessoais)',
      da: 'AZLP (Agentur for Beskyttelse af Personoplysninger)',
      sv: 'AZLP (Myndigheten för skydd av personuppgifter)',
      nb: 'AZLP (Byrå for beskyttelse av personopplysninger)',
      ru: 'AZLP (Агентство по защите персональных данных)',
    },
    portale: FONTE_AZLP.url,
    urlFonte: FONTE_AZLP.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Macedonia del Nord è un paese candidato, fuori dall'UE, con una legge del 2020 allineata al GDPR. Unica autorità nazionale, l'AZLP; nessuna ripartizione regionale.",
      en: 'North Macedonia is a candidate country, outside the EU, with a 2020 law aligned with the GDPR. There is a single national authority, the AZLP, with no regional breakdown.',
      de: 'Nordmazedonien ist ein Beitrittskandidat außerhalb der EU mit einem an die DSGVO angeglichenen Gesetz von 2020. Es gibt nur eine nationale Behörde, die AZLP, ohne regionale Untergliederung.',
      fr: "La Macédoine du Nord est un pays candidat, hors de l'UE, dotée d'une loi de 2020 alignée sur le RGPD. Il existe une seule autorité nationale, l'AZLP, sans subdivision régionale.",
      es: 'Macedonia del Norte es un país candidato, fuera de la UE, con una ley de 2020 alineada con el RGPD. Existe una única autoridad nacional, la AZLP, sin división regional.',
      nl: 'Noord-Macedonie is een kandidaat-land buiten de EU, met een wet uit 2020 die is afgestemd op de AVG. Er is een enkele nationale autoriteit, de AZLP, zonder regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione obbligatoria ai lavoratori e base giuridica (LPDP 2020)',
        en: 'Mandatory information to workers and a legal basis (LPDP 2020)',
        de: 'Pflicht zur Information der Beschäftigten und Rechtsgrundlage (LPDP 2020)',
        fr: 'Information obligatoire des travailleurs et base juridique (LPDP 2020)',
        es: 'Información obligatoria a los trabajadores y base jurídica (LPDP 2020)',
        nl: 'Verplichte informatie aan werknemers en een rechtsgrond (LPDP 2020)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve informare i lavoratori del monitoraggio e disporre di una base giuridica tra quelle dell'art. 10; per la videosorveglianza la legge impone espressamente l'obbligo di notificare i dipendenti.",
        en: 'The employer must inform workers of the monitoring and rely on one of the legal bases under art. 10; for video surveillance the law expressly requires that employees be notified.',
        de: 'Der Arbeitgeber muss die Beschäftigten über die Überwachung informieren und sich auf eine der Rechtsgrundlagen nach Art. 10 stützen; für die Videoüberwachung verlangt das Gesetz ausdrücklich, dass die Beschäftigten benachrichtigt werden.',
        fr: "L'employeur doit informer les travailleurs de la surveillance et disposer de l'une des bases juridiques de l'art. 10 ; pour la vidéosurveillance, la loi impose expressément de notifier les salaries.",
        es: 'El empleador debe informar a los trabajadores de la supervisión y disponer de una de las bases jurídicas del art. 10; para la videovigilancia la ley exige expresamente notificar a los empleados.',
        nl: 'De werkgever moet de werknemers informeren over de monitoring en zich baseren op een van de rechtsgronden van art. 10; voor cameratoezicht verplicht de wet uitdrukkelijk om de werknemers op de hoogte te stellen.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: "Autorizzazione preventiva: nessuna; notifica all'AZLP solo per i trattamenti ad alto rischio (art. 71)",
        en: "Prior authorisation: none; notification to the AZLP only for high-risk processing (art. 71)",
        de: "Vorherige Genehmigung: keine; Meldung an die AZLP nur bei Verarbeitungen mit hohem Risiko (Art. 71)",
        fr: "Autorisation préalable : aucune ; notification à l'AZLP uniquement pour les traitements à haut risque (art. 71)",
        es: "Autorización previa: ninguna; notificación a la AZLP solo para los tratamientos de alto riesgo (art. 71)",
        nl: "Voorafgaande machtiging: geen; melding aan de AZLP alleen voor verwerkingen met een hoog risico (art. 71)",
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Non serve alcuna autorizzazione preventiva. Resta però un obbligo di notifica all'AZLP (art. 71) quando, usando nuove tecnologie, un trattamento può comportare un rischio elevato per i diritti delle persone; l'Agenzia tiene un registro elettronico di questi archivi. Il tracciamento della posizione dei lavoratori compare nell'elenco AZLP dei trattamenti ad alto rischio, quindi la notifica va valutata caso per caso. La consultazione preventiva dell'Agenzia (art. 40) scatta solo se la DPIA evidenzia un rischio residuo elevato.",
        en: "No prior authorisation is needed. There remains, however, a duty to notify the AZLP (art. 71) where, using new technologies, processing may pose a high risk to people's rights; the Agency keeps an electronic record of such filing systems. Tracking the location of workers appears on the AZLP list of high-risk processing, so notification must be assessed case by case. Prior consultation of the Agency (art. 40) is triggered only if the DPIA shows a high residual risk.",
        de: "Eine vorherige Genehmigung ist nicht nötig. Es bleibt jedoch eine Meldepflicht gegenüber der AZLP (Art. 71), wenn eine Verarbeitung unter Einsatz neuer Technologien ein hohes Risiko für die Rechte der Personen bergen kann; die Agentur führt ein elektronisches Verzeichnis dieser Datenbestände. Die Ortung von Beschäftigten steht auf der AZLP-Liste der Verarbeitungen mit hohem Risiko, die Meldung ist daher im Einzelfall zu prüfen. Die vorherige Konsultation der Agentur (Art. 40) greift nur, wenn die DSFA ein hohes Restrisiko zeigt.",
        fr: "Aucune autorisation préalable n'est requise. Il subsiste toutefois une obligation de notifier l'AZLP (art. 71) lorsque, en recourant à de nouvelles technologies, un traitement peut présenter un risque élevé pour les droits des personnes ; l'Agence tient un registre électronique de ces fichiers. Le suivi de la position des travailleurs figure sur la liste AZLP des traitements à haut risque : la notification doit donc être examinée au cas par cas. La consultation préalable de l'Agence (art. 40) n'intervient que si l'AIPD révèle un risque résiduel élevé.",
        es: "No se necesita ninguna autorización previa. Subsiste, sin embargo, la obligación de notificar a la AZLP (art. 71) cuando, al usar nuevas tecnologías, un tratamiento pueda entrañar un riesgo elevado para los derechos de las personas; la Agencia lleva un registro electrónico de esos archivos. El seguimiento de la ubicación de los trabajadores figura en la lista de la AZLP de tratamientos de alto riesgo, por lo que la notificación debe valorarse caso por caso. La consulta previa a la Agencia (art. 40) solo procede si la EIPD muestra un riesgo residual elevado.",
        nl: "Een voorafgaande machtiging is niet nodig. Er blijft echter een meldingsplicht aan de AZLP (art. 71) wanneer een verwerking met nieuwe technologieën een hoog risico voor de rechten van personen kan inhouden; het Agentschap houdt een elektronisch register van zulke bestanden bij. Het volgen van de locatie van werknemers staat op de AZLP-lijst van verwerkingen met een hoog risico, dus de melding moet per geval worden beoordeeld. Voorafgaande raadpleging van het Agentschap (art. 40) is alleen aan de orde als de DPIA een hoog restrisico aantoont.",
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Base = interesse legittimo (art. 10), non il consenso',
        en: 'Basis = legitimate interest (art. 10), not consent',
        de: 'Grundlage = berechtigtes Interesse (Art. 10), nicht die Einwilligung',
        fr: "Base = intérêt légitime (art. 10), non le consentement",
        es: 'Base = interés legítimo (art. 10), no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang (art. 10), niet toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base usuale è l'interesse legittimo, con test di bilanciamento; il consenso nel rapporto di lavoro non è di norma valido per lo squilibrio di potere.",
        en: 'The usual basis is legitimate interest, with a balancing test; consent in the employment relationship is normally not valid because of the imbalance of power.',
        de: 'Die übliche Grundlage ist das berechtigte Interesse mit einer Abwägungsprüfung; die Einwilligung im Beschäftigungsverhältnis ist wegen des Machtungleichgewichts in der Regel nicht wirksam.',
        fr: "La base habituelle est l'intérêt légitime, avec un test de mise en balance ; dans la relation de travail, le consentement n'est en principe pas valable en raison du déséquilibre de pouvoir.",
        es: 'La base habitual es el interés legítimo, con una prueba de ponderación; el consentimiento en la relación laboral no suele ser valido por el desequilibrio de poder.',
        nl: 'De gebruikelijke grondslag is het gerechtvaardigd belang, met een belangenafweging; toestemming in de arbeidsrelatie is doorgaans niet geldig vanwege de machtsongelijkheid.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: "Finalità determinata, minimizzazione e conservazione limitata; il tracciamento continuo va giustificato (art. 9)",
        en: "Specified purpose, data minimisation and limited retention; continuous tracking must be justified (art. 9)",
        de: "Festgelegter Zweck, Datenminimierung und begrenzte Speicherung; dauerhafte Ortung muss gerechtfertigt sein (Art. 9)",
        fr: "Finalité déterminée, minimisation des données et conservation limitée ; le suivi continu doit être justifié (art. 9)",
        es: "Finalidad determinada, minimización de datos y conservación limitada; el seguimiento continuo debe justificarse (art. 9)",
        nl: "Bepaald doel, minimale gegevensverwerking en beperkte bewaring; continue tracking moet worden gerechtvaardigd (art. 9)",
      },
      risposta: 'si',
      dettaglio: {
        it: "L'art. 9 esige dati raccolti per finalità determinate, esplicite e legittime, adeguati e limitati a quanto necessario, conservati non oltre il tempo necessario. La legge non parla di GPS: un tracciamento continuo della posizione deve quindi poter essere giustificato come necessario per la finalità dichiarata, e la sua valutazione rientra nella DPIA (art. 39).",
        en: "Art. 9 requires data collected for specified, explicit and legitimate purposes, adequate and limited to what is necessary, and kept no longer than necessary. The law does not mention GPS: continuous location tracking must therefore be justifiable as necessary for the declared purpose, and its assessment belongs in the DPIA (art. 39).",
        de: "Art. 9 verlangt Daten, die für festgelegte, eindeutige und legitime Zwecke erhoben, angemessen und auf das Notwendige beschränkt sind und nicht länger als nötig gespeichert werden. Das Gesetz erwähnt GPS nicht: Eine dauerhafte Ortung muss daher als für den angegebenen Zweck erforderlich begründbar sein, und ihre Bewertung gehört in die DSFA (Art. 39).",
        fr: "L'art. 9 exige des données collectées pour des finalités déterminées, explicites et légitimes, adéquates et limitées à ce qui est nécessaire, conservées pas plus longtemps que nécessaire. La loi ne mentionne pas le GPS : un suivi continu de la position doit donc pouvoir être justifié comme nécessaire à la finalité déclarée, et son évaluation relève de l'AIPD (art. 39).",
        es: "El art. 9 exige datos recogidos con fines determinados, explícitos y legítimos, adecuados y limitados a lo necesario, conservados no más tiempo del necesario. La ley no menciona el GPS: un seguimiento continuo de la ubicación debe poder justificarse como necesario para la finalidad declarada, y su valoración corresponde a la EIPD (art. 39).",
        nl: "Art. 9 eist gegevens die voor bepaalde, uitdrukkelijke en legitieme doeleinden zijn verzameld, passend en beperkt tot wat nodig is, en niet langer bewaard dan nodig. De wet vermeldt GPS niet: continue locatietracking moet dus als noodzakelijk voor het opgegeven doel te rechtvaardigen zijn, en de beoordeling ervan hoort in de DPIA (art. 39).",
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il tracciamento della posizione e il controllo dei lavoratori (lista AZLP, art. 39)",
        en: "Impact assessment (DPIA) for tracking the location of workers and monitoring their work (AZLP list, art. 39)",
        de: "Folgenabschätzung (DSFA) für die Ortung und Kontrolle von Beschäftigten (AZLP-Liste, Art. 39)",
        fr: "Analyse d'impact (AIPD) pour le suivi de la position et le contrôle des travailleurs (liste AZLP, art. 39)",
        es: "Evaluación de impacto (EIPD) para el seguimiento de la ubicación y el control de los trabajadores (lista AZLP, art. 39)",
        nl: "Effectbeoordeling (DPIA) voor het volgen van de locatie en het controleren van werknemers (AZLP-lijst, art. 39)",
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista AZLP dei trattamenti che richiedono una valutazione d'impatto include il monitoraggio della posizione di una persona tramite GPS e altri canali (punto 10) e il trattamento dei dati dei lavoratori con applicazioni o sistemi che ne seguono lavoro, spostamenti e comunicazioni (punto 12). La DPIA va fatta prima di iniziare il trattamento.",
        en: "The AZLP list of processing that requires an impact assessment includes monitoring a person's location through GPS and other channels (point 10) and processing workers' data with applications or systems that follow their work, movements and communications (point 12). The DPIA must be done before the processing starts.",
        de: "Die AZLP-Liste der Verarbeitungen, die eine Folgenabschätzung erfordern, umfasst die Überwachung des Standorts einer Person per GPS und über andere Kanäle (Punkt 10) sowie die Verarbeitung von Beschäftigtendaten mit Anwendungen oder Systemen, die Arbeit, Bewegungen und Kommunikation verfolgen (Punkt 12). Die DSFA ist vor Beginn der Verarbeitung durchzuführen.",
        fr: "La liste de l'AZLP des traitements qui exigent une analyse d'impact comprend la surveillance de la position d'une personne par GPS et d'autres canaux (point 10) et le traitement des données des travailleurs par des applications ou systèmes qui suivent leur travail, leurs déplacements et leurs communications (point 12). L'AIPD doit être réalisée avant le début du traitement.",
        es: "La lista de la AZLP de tratamientos que exigen una evaluación de impacto incluye la monitorización de la ubicación de una persona mediante GPS y otros canales (punto 10) y el tratamiento de los datos de los trabajadores con aplicaciones o sistemas que siguen su trabajo, sus desplazamientos y sus comunicaciones (punto 12). La EIPD debe realizarse antes de iniciar el tratamiento.",
        nl: "De AZLP-lijst van verwerkingen die een effectbeoordeling vereisen omvat het monitoren van de locatie van een persoon via GPS en andere kanalen (punt 10) en de verwerking van werknemersgegevens met toepassingen of systemen die hun werk, verplaatsingen en communicatie volgen (punt 12). De DPIA moet vóór de start van de verwerking worden uitgevoerd.",
      },
      fonte: FONTE_AZLP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, art. 10) con test di bilanciamento.',
        en: 'Identify a valid legal basis (legitimate interest, art. 10) with a balancing test.',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, Art. 10) mit einer Abwägungsprüfung.',
        fr: "Déterminez une base juridique valable (intérêt légitime, art. 10) avec un test de mise en balance.",
        es: 'Determine una base jurídica valida (interés legítimo, art. 10) con una prueba de ponderación.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang, art. 10) met een belangenafweging.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori del monitoraggio.',
        en: 'Inform the workers of the monitoring.',
        de: 'Informieren Sie die Beschäftigten über die Überwachung.',
        fr: 'Informez les travailleurs de la surveillance.',
        es: 'Informe a los trabajadores de la supervisión.',
        nl: 'Informeer de werknemers over de monitoring.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il tracciamento GPS dei lavoratori.",
        en: 'Carry out the impact assessment (DPIA) for GPS tracking of workers.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) für die GPS-Ortung der Beschäftigten durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour le suivi GPS des travailleurs.",
        es: 'Realice la evaluación de impacto (EIPD) para el seguimiento GPS de los trabajadores.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de GPS-tracking van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Limita il trattamento al necessario: niente tracciamento continuo.',
        en: 'Limit the processing to what is necessary: no continuous tracking.',
        de: 'Beschränken Sie die Verarbeitung auf das Erforderliche: keine kontinuierliche Ortung.',
        fr: 'Limitez le traitement au nécessaire : pas de suivi continu.',
        es: 'Límite el tratamiento a lo necesario: sin seguimiento continuo.',
        nl: 'Beperk de verwerking tot wat noodzakelijk is: geen continue tracking.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema rispettando minimizzazione e limitazione della finalità.",
        en: 'Configure the system in line with data minimisation and purpose limitation.',
        de: 'Konfigurieren Sie das System unter Beachtung von Datenminimierung und Zweckbindung.',
        fr: "Configurez le système en respectant la minimisation des données et la limitation des finalités.",
        es: 'Configure el sistema respetando la minimización de datos y la limitación de la finalidad.',
        nl: 'Configureer het systeem met inachtneming van gegevensminimalisatie en doelbinding.',
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
      ente: 'AZLP',
      portale: FONTE_AZLP.url,
      urlFonte: FONTE_AZLP.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino al 4% del fatturato annuo',
      en: 'up to 4% of annual turnover',
      de: 'bis zu 4% des Jahresumsatzes',
      fr: "jusqu'à 4% du chiffre d'affaires annuel",
      es: 'hasta el 4% de la facturación anual',
      nl: 'tot 4% van de jaaromzet',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AZLP specifica è pubblicata per il GPS sui dipendenti. Il massimale è quello dell'art. 111 (violazione dei principi, della liceità, dell'informazione): fino al 4% del fatturato annuo mondiale della persona giuridica; per le violazioni sulla videosorveglianza l'art. 112 prevede da 1.000 a 10.000 euro. La lista AZLP classifica il tracciamento della posizione dei lavoratori come trattamento che richiede una valutazione d'impatto.",
      en: 'There is no specific, published AZLP fine for GPS on employees. The ceiling is the one in art. 111 (breach of the principles, lawfulness, information): up to 4% of the legal entity\'s total annual turnover; for video surveillance breaches art. 112 provides 1,000 to 10,000 euros. The AZLP list classifies location tracking of workers as processing that requires an impact assessment.',
      de: 'Es ist keine spezifische, veröffentlichte Geldbuße der AZLP zu GPS bei Beschäftigten bekannt. Der Höchstbetrag ist der des Art. 111 (Verstoß gegen die Grundsätze, die Rechtmäßigkeit, die Information): bis zu 4 % des gesamten Jahresumsatzes der juristischen Person; bei Verstößen gegen die Videoüberwachung sieht Art. 112 1.000 bis 10.000 Euro vor. Die AZLP-Liste stuft die Ortung von Beschäftigten als Verarbeitung ein, die eine Folgenabschätzung erfordert.',
      fr: "Aucune amende spécifique et publiée de l'AZLP n'est connue pour le GPS sur les salariés. Le plafond est celui de l'art. 111 (violation des principes, de la licéité, de l'information) : jusqu'à 4 % du chiffre d'affaires annuel total de la personne morale ; pour les violations en matière de vidéosurveillance, l'art. 112 prévoit 1 000 à 10 000 euros. La liste de l'AZLP classe le suivi de la position des travailleurs parmi les traitements qui nécessitent une analyse d'impact.",
      es: 'No consta una multa específica y publicada de la AZLP por el GPS sobre los empleados. El máximo es el del art. 111 (infracción de los principios, de la licitud, de la información): hasta el 4 % del volumen de negocios anual total de la persona jurídica; para las infracciones de videovigilancia el art. 112 prevé de 1.000 a 10.000 euros. La lista de la AZLP clasifica el seguimiento de la ubicación de los trabajadores como tratamiento que requiere una evaluación de impacto.',
      nl: 'Er is geen specifieke, gepubliceerde boete van de AZLP bekend voor GPS op werknemers. Het maximum is dat van art. 111 (schending van de beginselen, de rechtmatigheid, de informatie): tot 4 % van de totale jaaromzet van de rechtspersoon; voor schendingen bij camerabewaking voorziet art. 112 in 1.000 tot 10.000 euro. De AZLP-lijst classificeert het volgen van de locatie van werknemers als verwerking die een effectbeoordeling vereist.',
    },
    urlFonte: FONTE_LPDP.url,
    tipoImporto: 'massimale',
  },

  fonti: [FONTE_LPDP, FONTE_AZLP_DPIA, FONTE_AZLP_ATTI, FONTE_AZLP, FONTE_GDPR],

  aggiornatoIl: '2026-09-30',
};
