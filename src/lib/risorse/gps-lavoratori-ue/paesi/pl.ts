/**
 * Scheda-paese Polonia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 22(2) e art. 22(3) del Kodeks pracy (Codice del lavoro), guida UODO alla
 * protezione dei dati sul luogo di lavoro, lista UODO dei trattamenti che
 * richiedono una DPIA, pagina UODO per i reclami, decisione UODO contro Centrum
 * Medyczne Ujastek e GDPR.
 *
 * La Polonia ha un'unica autorità' nazionale, l'UODO, senza ripartizione
 * regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_KP_22_2 = {
  titolo: 'Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato Dz.U. 2026 poz. 1245 (in vigore dal 24 settembre 2026)',
  url: 'https://eli.gov.pl/api/acts/DU/2026/1245/text.pdf',
};
const FONTE_DU_2026_25 = {
  titolo:
    'Legge del 4 dicembre 2025 di modifica del Codice del lavoro, Dz.U. 2026 poz. 25 (art. 22(2) par. 8: "su carta o in forma elettronica", in vigore dal 27 gennaio 2026)',
  url: 'https://eli.gov.pl/api/acts/DU/2026/25/text.pdf',
};
const FONTE_KP_22_3 = {
  titolo: 'Kodeks pracy, art. 22(3) par. 3-4 (altre forme di monitoraggio, tra cui il GPS), testo consolidato Dz.U. 2026 poz. 1245',
  url: 'https://eli.gov.pl/api/acts/DU/2026/1245/text.pdf',
};
const FONTE_UODO_GUIDA = {
  titolo: 'UODO, guida alla protezione dei dati sul luogo di lavoro',
  url: 'https://uodo.gov.pl/pl/file/1469',
};
const FONTE_UODO_DPIA = {
  titolo:
    'UODO, lista dei trattamenti che richiedono una DPIA (M.P. 2019 poz. 666)',
  url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WMP20190000666',
};
const FONTE_UODO_RECLAMO = {
  titolo: 'UODO, presentare un reclamo',
  url: 'https://www.uodo.gov.pl/pl/153/155',
};
const FONTE_UODO_UJASTEK = {
  titolo:
    'UODO, sanzione Centrum Medyczne Ujastek (monitoraggio non comunicato ai dipendenti)',
  url: 'https://uodo.gov.pl/pl/138/3543',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const polonia: SchedaPaese = {
  codiceISO: 'PL',
  slugCanonico: 'polonia',
  nome: 'Polonia',
  nomi: {
    it: 'Polonia',
    en: 'Poland',
    'en-us': 'Poland',
    'en-gb': 'Poland',
    'en-au': 'Poland',
    'en-ie': 'Poland',
    'en-ca': 'Poland',
    de: 'Polen',
    nl: 'Polen',
    fr: 'Pologne',
    es: 'Polonia',
    pt: 'Polónia',
    da: 'Polen',
    sv: 'Polen',
    nb: 'Polen',
    ru: 'Польша',
  },
  bandiera: '🇵🇱',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'UODO (Urzad Ochrony Danych Osobowych)',
    portale: FONTE_UODO_RECLAMO.url,
    urlFonte: FONTE_UODO_RECLAMO.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "La Polonia ha un'unica autorità nazionale, l'UODO; nessuna ripartizione regionale.",
      en: "Poland has a single national authority, the UODO; no regional breakdown.",
      de: 'Polen hat eine einzige nationale Behörde, die UODO; keine regionale Aufteilung.',
      fr: 'La Pologne dispose d’une seule autorité nationale, l’UODO ; aucune répartition régionale.',
      es: 'Polonia tiene una única autoridad nacional, la UODO; sin reparto regional.',
      pt: "A Polónia tem uma única autoridade nacional, a UODO; não existe divisão regional.",
      da: 'Polen har én national myndighed, UODO; ingen regional opdeling.',
      sv: 'Polen har en enda nationell myndighet, UODO; det finns ingen regional uppdelning.',
      nl: 'Polen heeft een enkele nationale autoriteit, de UODO; geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Finalità, portata e modalità del monitoraggio fissate in contratto collettivo, regolamento del lavoro o avviso (Kodeks pracy art. 22(2)/22(3))',
        en: 'Purpose, scope and methods of monitoring set out in a collective agreement, work regulations or a notice (Kodeks pracy art. 22(2)/22(3))',
        de: 'Zweck, Umfang und Art der Überwachung in einem Tarifvertrag, einer Arbeitsordnung oder einer Bekanntmachung festgelegt (Kodeks pracy Art. 22(2)/22(3))',
        fr: 'Finalité, portée et modalités de la surveillance fixées dans une convention collective, le règlement du travail ou un avis (Kodeks pracy art. 22(2)/22(3))',
        es: 'Finalidad, alcance y modalidades de la monitorización fijadas en un convenio colectivo, el reglamento de trabajo o un aviso (Kodeks pracy art. 22(2)/22(3))',
        pt: "Finalidade, âmbito e modalidades da monitorização fixados em convenção coletiva, regulamento de trabalho ou aviso (Kodeks pracy art. 22(2)/22(3))",
        da: 'Formål, omfang og metoder for overvågningen fastsat i en kollektiv overenskomst, arbejdsreglement eller en meddelelse (Kodeks pracy art. 22(2)/22(3))',
        sv: 'Övervakningens ändamål, omfattning och sätt fastställs i kollektivavtal, arbetsordning eller meddelande (Kodeks pracy art. 22(2)/22(3))',
        nl: 'Doel, omvang en wijze van monitoring vastgelegd in een collectieve overeenkomst, een arbeidsreglement of een kennisgeving (Kodeks pracy art. 22(2)/22(3))',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il Codice del lavoro polacco disciplina espressamente il monitoraggio: finalità, portata e modalità vanno stabilite nel contratto collettivo, nel regolamento del lavoro o in un avviso, e queste stesse regole valgono anche per le altre forme di monitoraggio (GPS incluso) quando sono necessarie all'organizzazione del lavoro e al corretto uso degli strumenti di lavoro.",
        en: 'The Polish Labour Code expressly governs monitoring: purpose, scope and methods must be set out in the collective agreement, the work regulations or a notice, and these same rules also apply to other forms of monitoring (GPS included) where necessary for organising work and the proper use of work tools.',
        de: 'das polnische Arbeitsgesetzbuch regelt die Überwachung ausdrücklich: Zweck, Umfang und Art müssen im Tarifvertrag, in der Arbeitsordnung oder in einer Bekanntmachung festgelegt werden, und dieselben Regeln gelten auch für andere Überwachungsformen (GPS eingeschlossen), wenn sie für die Arbeitsorganisation und die ordnungsgemäße Nutzung der Arbeitsmittel erforderlich sind.',
        fr: 'Le Code du travail polonais régit expressément la surveillance : la finalité, la portée et les modalités doivent être fixées dans la convention collective, le règlement du travail ou un avis, et ces mêmes règles s’appliquent aussi aux autres formes de surveillance (GPS compris) lorsqu’elles sont nécessaires à l’organisation du travail et à l’usage correct des outils de travail.',
        es: 'El Código de trabajo polaco regula expresamente la monitorización: la finalidad, el alcance y las modalidades deben establecerse en el convenio colectivo, el reglamento de trabajo o un aviso, y esas mismas reglas se aplican también a las demás formas de monitorización (GPS incluido) cuando son necesarias para la organización del trabajo y el uso adecuado de las herramientas de trabajo.',
        pt: "O Código do Trabalho polaco regula expressamente a monitorização: a finalidade, o âmbito e as modalidades devem ser estabelecidos na convenção coletiva, no regulamento de trabalho ou num aviso, e essas mesmas regras aplicam-se também às demais formas de monitorização (GPS incluído) quando são necessárias para a organização do trabalho e para a utilização adequada dos instrumentos de trabalho.",
        da: 'Den polske arbejdskodeks regulerer udtrykkeligt overvågning: formål, omfang og metoder skal fastsættes i den kollektive overenskomst, arbejdsreglementet eller en meddelelse, og de samme regler gælder også for andre former for overvågning (herunder GPS), når det er nødvendigt for tilrettelæggelsen af arbejdet og den rette brug af arbejdsredskaber.',
        sv: 'Den polska arbetsrätten reglerar övervakning uttryckligen: ändamål, omfattning och sätt ska fastställas i kollektivavtalet, i arbetsordningen eller i ett meddelande, och samma regler gäller även för andra former av övervakning (inklusive GPS) när de är nödvändiga för arbetets organisation och för en korrekt användning av arbetsredskapen.',
        nl: 'het Poolse arbeidswetboek regelt monitoring uitdrukkelijk: doel, omvang en wijze moeten worden vastgelegd in de collectieve overeenkomst, het arbeidsreglement of een kennisgeving, en diezelfde regels gelden ook voor andere vormen van monitoring (GPS inbegrepen) wanneer die nodig zijn voor de organisatie van het werk en het juiste gebruik van de werkmiddelen.',
      },
      fonte: FONTE_KP_22_3,
    },
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori almeno 2 settimane prima, e su carta o in forma elettronica al neoassunto (art. 22(2) par. 7-8)',
        en: 'Prior information to workers at least 2 weeks in advance, and on paper or electronically to the new hire (art. 22(2) par. 7-8)',
        de: 'Vorherige Information der Beschäftigten mindestens 2 Wochen im Voraus und in Papier- oder elektronischer Form an den neu Eingestellten (Art. 22(2) Abs. 7-8)',
        fr: 'Information préalable des salariés au moins 2 semaines à l’avance, et sur papier ou sous forme électronique au nouvel embauché (art. 22(2) par. 7-8)',
        es: 'Información previa a los trabajadores con al menos 2 semanas de antelación, y en papel o en formato electrónico al nuevo contratado (art. 22(2) apdos. 7-8)',
        pt: "Informação prévia aos trabalhadores com, pelo menos, 2 semanas de antecedência e, ao trabalhador recém-contratado, em papel ou em formato eletrónico (art. 22(2), n.os 7-8)",
        da: 'Forudgående information til medarbejderne mindst 2 uger i forvejen og på papir eller elektronisk til den nyansatte (art. 22(2) stk. 7-8)',
        sv: 'Information i förväg till de anställda minst 2 veckor innan, och på papper eller elektroniskt till den nyanställde (art. 22(2) punkt 7-8)',
        nl: 'Voorafgaande informatie aan werknemers ten minste 2 weken van tevoren, en op papier of elektronisch aan de nieuwe medewerker (art. 22(2) lid 7-8)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore informa i lavoratori dell'introduzione del monitoraggio almeno due settimane prima dell'avvio, e consegna l'informazione su carta o in forma elettronica al neoassunto prima di adibirlo al lavoro.",
        en: 'The employer informs the workers of the introduction of monitoring at least two weeks before it starts, and gives the information on paper or electronically to the new hire before assigning them to work.',
        de: 'der Arbeitgeber informiert die Beschäftigten über die Einführung der Überwachung mindestens zwei Wochen vor dem Beginn und übergibt dem neu Eingestellten die Information in Papier- oder elektronischer Form, bevor er ihn zur Arbeit einsetzt.',
        fr: 'L’employeur informe les salariés de l’introduction de la surveillance au moins deux semaines avant son démarrage, et remet l’information sur papier ou sous forme électronique au nouvel embauché avant de l’affecter au travail.',
        es: 'El empleador informa a los trabajadores de la introducción de la monitorización al menos dos semanas antes de su inicio, y entrega la información en papel o en formato electrónico al nuevo contratado antes de asignarle el trabajo.',
        pt: "A entidade empregadora informa os trabalhadores da introdução da monitorização pelo menos duas semanas antes do seu início e entrega a informação em papel ou em formato eletrónico ao trabalhador recém-contratado antes de o afetar ao trabalho.",
        da: 'Arbejdsgiveren informerer medarbejderne om indførelsen af overvågning mindst to uger, før den begynder, og giver den nyansatte oplysningerne på papir eller elektronisk, før vedkommende sættes i arbejde.',
        sv: 'Arbetsgivaren informerar de anställda om att övervakningen införs minst två veckor innan den startar, och lämnar informationen på papper eller elektroniskt till den nyanställde innan denne tas i arbete.',
        nl: 'de werkgever informeert de werknemers over de invoering van monitoring ten minste twee weken voor de start, en overhandigt de informatie op papier of elektronisch aan de nieuwe medewerker voordat deze aan het werk wordt gezet.',
      },
      fonte: FONTE_DU_2026_25,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        pt: "Autorização prévia de uma autoridade antes de instalar",
        da: 'Forudgående tilladelse fra en myndighed før installation',
        sv: 'Förhandstillstånd från en myndighet innan systemet installeras',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'UODO; la procedura è interna (regole nel regolamento/avviso, informazione, segnalazione delle aree) più il rispetto del GDPR.",
        en: 'No prior authorisation from the UODO is required; the procedure is internal (rules in the regulations/notice, information, marking of areas) plus compliance with the GDPR.',
        de: 'eine vorherige Genehmigung der UODO ist nicht erforderlich; das Verfahren ist intern (Regeln in der Ordnung/Bekanntmachung, Information, Kennzeichnung der Bereiche) zuzüglich der Einhaltung der DSGVO.',
        fr: 'Aucune autorisation préalable de l’UODO n’est requise ; la procédure est interne (règles dans le règlement/avis, information, signalisation des zones) plus le respect du RGPD.',
        es: 'No se requiere una autorización previa de la UODO; el procedimiento es interno (reglas en el reglamento/aviso, información, señalización de las áreas) más el cumplimiento del RGPD.',
        pt: "Não é necessária autorização prévia da UODO; o procedimento é interno (regras no regulamento/aviso, informação, sinalização das áreas) e acresce o cumprimento do RGPD.",
        da: 'Der kræves ingen forudgående tilladelse fra UODO; proceduren er intern (regler i reglementet/meddelelsen, information, afmærkning af områder) samt overholdelse af GDPR.',
        sv: 'Något förhandstillstånd från UODO behövs inte; förfarandet är internt (regler i arbetsordningen/meddelandet, information, märkning av områdena) samt efterlevnad av GDPR.',
        nl: 'er is geen voorafgaande toestemming van de UODO nodig; de procedure is intern (regels in het reglement/de kennisgeving, informatie, markering van de zones) plus naleving van de AVG.',
      },
      fonte: FONTE_UODO_GUIDA,
    },
    {
      voce: {
        it: 'Niente tracciamento degli spostamenti privati o fuori orario; proporzionalità (UODO)',
        en: 'No tracking of private movements or outside working hours; proportionality (UODO)',
        de: 'Keine Verfolgung privater Bewegungen oder außerhalb der Arbeitszeit; Verhältnismäßigkeit (UODO)',
        fr: 'Aucun suivi des déplacements privés ou hors des heures de travail ; proportionnalité (UODO)',
        es: 'Sin rastreo de los desplazamientos privados o fuera del horario; proporcionalidad (UODO)',
        pt: "Sem seguimento das deslocações privadas ou fora do horário; proporcionalidade (UODO)",
        da: 'Ingen sporing af private bevægelser eller uden for arbejdstiden; proportionalitet (UODO)',
        sv: 'Ingen spårning av privata förflyttningar eller utanför arbetstid; proportionalitet (UODO)',
        nl: 'Geen volgen van prive-verplaatsingen of buiten werktijd; evenredigheid (UODO)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'UODO il datore non è legittimato a raccogliere dati sugli spostamenti privati del lavoratore (salvo casi eccezionali come furto del veicolo); se il veicolo è usato anche privatamente la guida indica di stabilire che è solo di servizio oppure di adeguare il regolamento d'uso, ottenere il consenso del lavoratore per quei dati e dargli l'informativa. Il rischio per i diritti deve essere proporzionato allo scopo.",
        en: 'For the UODO the employer is not entitled to collect data on the worker\'s private movements (save for exceptional cases such as theft of the vehicle); if the vehicle is also used privately, the guide says to either provide that it is for work use only or to adapt the vehicle-use rules, obtain the worker\'s consent for that data and give the information notice. The risk to rights must be proportionate to the purpose.',
        de: 'für die UODO ist der Arbeitgeber nicht berechtigt, Daten über die privaten Bewegungen des Beschäftigten zu erheben (außer in Ausnahmefällen wie dem Diebstahl des Fahrzeugs); wird das Fahrzeug auch privat genutzt, empfiehlt der Leitfaden, entweder die ausschließlich dienstliche Nutzung festzulegen oder die Nutzungsregeln anzupassen, die Einwilligung des Beschäftigten für diese Daten einzuholen und die Information zu erteilen. Das Risiko für die Rechte muss im Verhältnis zum Zweck stehen.',
        fr: 'Pour l’UODO, l’employeur n’est pas autorisé à collecter des données sur les déplacements privés du salarié (sauf cas exceptionnels comme le vol du véhicule) ; si le véhicule est également utilisé à titre privé, le guide indique de prévoir un usage exclusivement professionnel ou d’adapter le règlement d’usage, d’obtenir le consentement du salarié pour ces données et de lui remettre l’information. Le risque pour les droits doit être proportionné à la finalité.',
        es: 'Para la UODO, el empleador no está legitimado para recopilar datos sobre los desplazamientos privados del trabajador (salvo casos excepcionales como el robo del vehículo); si el vehículo se usa también de forma privada, la guía indica establecer que es solo de servicio o bien adaptar el reglamento de uso, obtener el consentimiento del trabajador para esos datos y darle la información. El riesgo para los derechos debe ser proporcionado a la finalidad.',
        pt: "Para a UODO, a entidade empregadora não está legitimada para recolher dados sobre as deslocações privadas do trabalhador (salvo casos excecionais, como o furto do veículo); se o veículo também for utilizado de forma privada, o guia indica que se estabeleça que é apenas de serviço ou que se adapte o regulamento de utilização, se obtenha o consentimento do trabalhador para esses dados e se lhe forneça a informação. O risco para os direitos deve ser proporcionado à finalidade.",
        da: 'Ifølge UODO har arbejdsgiveren ikke ret til at indsamle oplysninger om medarbejderens private bevægelser (bortset fra ekstraordinære tilfælde som tyveri af køretøjet); hvis køretøjet også bruges privat, siger vejledningen, at man enten skal fastsætte, at det kun er til arbejdsbrug, eller tilpasse reglerne for brug af køretøjet, indhente medarbejderens samtykke til de oplysninger og give en privatlivsmeddelelse. Risikoen for rettighederne skal stå i et rimeligt forhold til formålet.',
        sv: 'Enligt UODO har arbetsgivaren inte rätt att samla in uppgifter om den anställdes privata förflyttningar (utom i undantagsfall som stöld av fordonet); om fordonet också används privat anger vägledningen att man antingen bör fastställa att det endast är ett tjänstefordon eller anpassa användningsreglerna, inhämta den anställdes samtycke för dessa uppgifter och ge honom eller henne information. Risken för rättigheterna ska stå i proportion till ändamålet.',
        nl: 'voor de UODO is de werkgever niet gerechtigd gegevens te verzamelen over de prive-verplaatsingen van de werknemer (behoudens uitzonderlijke gevallen zoals diefstal van het voertuig); wordt het voertuig ook prive gebruikt, dan schrijft de gids voor het uitsluitend voor het werk te bestemmen of het gebruiksreglement aan te passen, de toestemming van de werknemer voor die gegevens te verkrijgen en hem te informeren. Het risico voor de rechten moet evenredig zijn aan het doel.',
      },
      fonte: FONTE_UODO_GUIDA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per i dati di localizzazione dei lavoratori (lista UODO)",
        en: 'Impact assessment (DPIA) for workers\' location data (UODO list)',
        de: 'Folgenabschätzung (DSFA) für die Standortdaten der Beschäftigten (UODO-Liste)',
        fr: 'Analyse d’impact (AIPD) pour les données de localisation des salariés (liste UODO)',
        es: 'Evaluación de impacto (EIPD) para los datos de localización de los trabajadores (lista UODO)',
        pt: "Avaliação de impacto sobre a proteção de dados (AIPD) para os dados de localização dos trabalhadores (lista da UODO)",
        da: "Konsekvensanalyse (DPIA) for medarbejderes positionsdata (UODO's liste)",
        sv: 'Konsekvensbedömning (DPIA) för de anställdas positionsuppgifter (UODO:s lista)',
        nl: 'Effectbeoordeling (DPIA) voor de locatiegegevens van werknemers (UODO-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista UODO funziona per criteri: di norma la DPIA serve quando ne ricorrono almeno due. Tra gli esempi ci sono il monitoraggio sistematico dei lavoratori e il trattamento regolare di dati che permettono di osservare gli spostamenti sul territorio (per esempio i dati di geolocalizzazione). Il GPS sui lavoratori ne integra di norma più di uno.",
        en: 'The UODO list works by criteria: as a rule an impact assessment is needed when at least two apply. Its examples include systematic monitoring of workers and regular processing of data that lets movements across the territory be observed (for example geolocation data). GPS on workers normally meets more than one.',
        de: 'die UODO-Liste arbeitet mit Kriterien: in der Regel ist eine Folgenabschätzung nötig, wenn mindestens zwei zutreffen. Zu den Beispielen gehören die systematische Überwachung von Beschäftigten und die regelmäßige Verarbeitung von Daten, die die Beobachtung von Bewegungen im Gelände erlauben (etwa Geolokalisierungsdaten). GPS bei Beschäftigten erfüllt in der Regel mehr als ein Kriterium.',
        fr: 'La liste UODO fonctionne par critères : en règle générale, une analyse d’impact est requise lorsqu’au moins deux critères sont réunis. Parmi les exemples figurent la surveillance systématique des salariés et le traitement régulier de données permettant d’observer les déplacements sur le terrain (par exemple les données de géolocalisation). Le GPS sur les salariés remplit en général plus d’un critère.',
        es: 'La lista UODO funciona por criterios: por regla general la evaluación de impacto es necesaria cuando concurren al menos dos. Entre los ejemplos figuran la monitorización sistemática de los trabajadores y el tratamiento regular de datos que permiten observar los desplazamientos en el terreno (por ejemplo, los datos de geolocalización). El GPS sobre los trabajadores cumple normalmente más de un criterio.',
        pt: "A lista da UODO funciona por critérios: em regra, a AIPD é necessária quando se verificam pelo menos dois. Entre os exemplos figuram a monitorização sistemática dos trabalhadores e o tratamento regular de dados que permitem observar as deslocações no terreno (por exemplo, os dados de geolocalização). O GPS aplicado aos trabalhadores preenche normalmente mais de um critério.",
        da: "UODO's liste bygger på kriterier: som hovedregel kræves en konsekvensanalyse, når mindst to af dem er opfyldt. Dens eksempler omfatter systematisk overvågning af medarbejdere og regelmæssig behandling af oplysninger, der gør det muligt at følge bevægelser i området (for eksempel geolokaliseringsdata). GPS på medarbejdere opfylder normalt mere end ét af dem.",
        sv: 'UODO:s lista fungerar med kriterier: normalt krävs en DPIA när minst två av dem är uppfyllda. Bland exemplen finns systematisk övervakning av de anställda och regelbunden behandling av uppgifter som gör det möjligt att observera förflyttningar i terrängen (till exempel geolokaliseringsuppgifter). GPS på anställda uppfyller normalt fler än ett.',
        nl: 'de UODO-lijst werkt met criteria: in de regel is een effectbeoordeling nodig wanneer er minstens twee gelden. Tot de voorbeelden behoren systematische monitoring van werknemers en de regelmatige verwerking van gegevens waarmee verplaatsingen in het terrein kunnen worden waargenomen (bijvoorbeeld geolocatiegegevens). GPS bij werknemers voldoet doorgaans aan meer dan een criterium.',
      },
      fonte: FONTE_UODO_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Fissa finalità, portata e modalità del monitoraggio nel contratto collettivo, nel regolamento del lavoro o in un avviso.',
        en: 'Set out the purpose, scope and methods of monitoring in the collective agreement, the work regulations or a notice.',
        de: 'Legen Sie Zweck, Umfang und Art der Überwachung im Tarifvertrag, in der Arbeitsordnung oder in einer Bekanntmachung fest.',
        fr: 'Fixez la finalité, la portée et les modalités de la surveillance dans la convention collective, le règlement du travail ou un avis.',
        es: 'Establece la finalidad, el alcance y las modalidades de la monitorización en el convenio colectivo, el reglamento de trabajo o un aviso.',
        pt: "Fixe a finalidade, o âmbito e as modalidades da monitorização na convenção coletiva, no regulamento de trabalho ou num aviso.",
        da: 'Fastlæg overvågningens formål, omfang og metoder i den kollektive overenskomst, arbejdsreglementet eller en meddelelse.',
        sv: 'Fastställ övervakningens ändamål, omfattning och sätt i kollektivavtalet, i arbetsordningen eller i ett meddelande.',
        nl: 'Leg het doel, de omvang en de wijze van monitoring vast in de collectieve overeenkomst, het arbeidsreglement of een kennisgeving.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Informa i lavoratori almeno due settimane prima dell'avvio; consegna l'informazione su carta o in forma elettronica al neoassunto prima del lavoro.",
        en: 'Inform the workers at least two weeks before the start; give the information on paper or electronically to the new hire before work begins.',
        de: 'Informieren Sie die Beschäftigten mindestens zwei Wochen vor dem Beginn; übergeben Sie dem neu Eingestellten die Information in Papier- oder elektronischer Form vor der Arbeit.',
        fr: 'Informez les salariés au moins deux semaines avant le démarrage ; remettez l’information sur papier ou sous forme électronique au nouvel embauché avant le travail.',
        es: 'Informa a los trabajadores al menos dos semanas antes del inicio; entrega la información en papel o en formato electrónico al nuevo contratado antes del trabajo.',
        pt: "Informe os trabalhadores pelo menos duas semanas antes do início; entregue a informação em papel ou em formato eletrónico ao trabalhador recém-contratado antes do trabalho.",
        da: 'Informér medarbejderne mindst to uger før start; giv den nyansatte oplysningerne på papir eller elektronisk, før vedkommende begynder at arbejde.',
        sv: 'Informera de anställda minst två veckor innan start; lämna informationen på papper eller elektroniskt till den nyanställde innan arbetet.',
        nl: 'Informeer de werknemers ten minste twee weken voor de start; overhandig de informatie op papier of elektronisch aan de nieuwe medewerker voor het werk.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Individua una base giuridica valida ai sensi del GDPR (di norma interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis under the GDPR (as a rule legitimate interest, not consent).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage nach der DSGVO (in der Regel berechtigtes Interesse, nicht die Einwilligung).',
        fr: 'Déterminez une base juridique valable au titre du RGPD (en règle générale l’intérêt légitime, non le consentement).',
        es: 'Determina una base jurídica válida con arreglo al RGPD (por regla general el interés legítimo, no el consentimiento).',
        pt: "Identifique uma base jurídica válida nos termos do RGPD (em regra, o interesse legítimo, não o consentimento).",
        da: 'Find et gyldigt retsgrundlag efter GDPR (som hovedregel legitim interesse, ikke samtykke).',
        sv: 'Identifiera en giltig rättslig grund enligt GDPR (normalt berättigat intresse, inte samtycke).',
        nl: 'Bepaal een geldige rechtsgrondslag op grond van de AVG (in de regel gerechtvaardigd belang, niet toestemming).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per i dati di localizzazione dei lavoratori.",
        en: 'Carry out the impact assessment (DPIA) for workers\' location data.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) für die Standortdaten der Beschäftigten durch.',
        fr: 'Réalisez l’analyse d’impact (AIPD) pour les données de localisation des salariés.',
        es: 'Realiza la evaluación de impacto (EIPD) para los datos de localización de los trabajadores.',
        pt: "Realize a avaliação de impacto (AIPD) para os dados de localização dos trabalhadores.",
        da: 'Gennemfør konsekvensanalysen (DPIA) for medarbejdernes positionsdata.',
        sv: 'Genomför konsekvensbedömningen (DPIA) för de anställdas positionsuppgifter.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de locatiegegevens van werknemers.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente tracciamento privato/fuori orario, finalità coincidente con l\'uso reale.',
        en: 'Configure the system: no private/off-hours tracking, purpose matching actual use.',
        de: 'Konfigurieren Sie das System: keine private Verfolgung/außerhalb der Arbeitszeit, Zweck deckungsgleich mit der tatsächlichen Nutzung.',
        fr: 'Configurez le système : aucun suivi privé/hors des heures, finalité correspondant à l’usage réel.',
        es: 'Configura el sistema: sin rastreo privado/fuera del horario, finalidad coincidente con el uso real.',
        pt: "Configure o sistema: sem seguimento privado/fora do horário, com uma finalidade coincidente com a utilização real.",
        da: 'Indstil systemet: ingen privat sporing eller sporing uden for arbejdstid, formål svarende til den faktiske brug.',
        sv: 'Konfigurera systemet: ingen privat spårning/utanför arbetstid, ändamålet ska överensstämma med den faktiska användningen.',
        nl: 'Configureer het systeem: geen prive-/buiten-werktijd-tracking, doel dat overeenkomt met het werkelijke gebruik.',
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
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'UODO, reclami',
      portale: FONTE_UODO_RECLAMO.url,
      urlFonte: FONTE_UODO_RECLAMO.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'circa 266.000 € (1.145.891 PLN)',
      en: 'about EUR 266,000 (1,145,891 PLN)',
      de: 'rund 266.000 € (1.145.891 PLN)',
      fr: 'environ 266 000 € (1 145 891 PLN)',
      es: 'unos 266.000 € (1.145.891 PLN)',
      pt: "cerca de 266.000 € (1.145.891 PLN)",
      da: 'ca. 266.000 euro (1.145.891 PLN)',
      sv: 'cirka 266 000 € (1 145 891 PLN)',
      nl: 'ongeveer 266.000 € (1.145.891 PLN)',
    },
    casoCitato: {
      it: 'UODO contro Centrum Medyczne Ujastek (Cracovia, decisione DKN.5131.4.2024): videosorveglianza installata in due stanze di neonatologia senza che ne fossero informati pazienti ne dipendenti, più sicurezza inadeguata delle registrazioni. Multa complessiva 1.145.891 PLN (circa 266.000 euro). Non è un caso di GPS, ma riguarda il monitoraggio dei dipendenti non comunicato.',
      en: 'UODO against Centrum Medyczne Ujastek (Krakow, decision DKN.5131.4.2024): video surveillance installed in two neonatology rooms without informing either patients or employees, plus inadequate security of the recordings. Total fine 1,145,891 PLN (about 266,000 euro). It is not a GPS case, but it concerns undisclosed monitoring of employees.',
      de: 'UODO gegen Centrum Medyczne Ujastek (Krakau, Entscheidung DKN.5131.4.2024): Videoüberwachung in zwei Räumen der Neonatologie installiert, ohne dass Patienten oder Beschäftigte darüber informiert wurden, dazu unzureichende Sicherheit der Aufzeichnungen. Gesamtgeldbuße 1.145.891 PLN (rund 266.000 Euro). Es ist kein GPS-Fall, betrifft aber die nicht mitgeteilte Überwachung der Beschäftigten.',
      fr: 'UODO contre Centrum Medyczne Ujastek (Cracovie, décision DKN.5131.4.2024) : vidéosurveillance installée dans deux salles de néonatologie sans que les patients ni les employés en soient informés, ainsi qu’une sécurité inadéquate des enregistrements. Amende totale de 1 145 891 PLN (environ 266 000 euros). Ce n’est pas un cas de GPS, mais il concerne la surveillance non communiquée des employés.',
      es: 'UODO contra Centrum Medyczne Ujastek (Cracovia, decisión DKN.5131.4.2024): videovigilancia instalada en dos salas de neonatología sin que se informara ni a los pacientes ni a los empleados, más una seguridad inadecuada de las grabaciones. Multa total de 1.145.891 PLN (unos 266.000 euros). No es un caso de GPS, pero se refiere a la monitorización no comunicada de los empleados.',
      pt: "UODO contra Centrum Medyczne Ujastek (Cracóvia, decisão DKN.5131.4.2024): videovigilância instalada em duas salas de neonatologia sem que fossem informados nem os doentes nem os trabalhadores, a que acresce uma segurança inadequada das gravações. Coima total de 1.145.891 PLN (cerca de 266.000 euros). Não é um caso de GPS, mas diz respeito à monitorização não comunicada dos trabalhadores.",
      da: 'UODO mod Centrum Medyczne Ujastek (Kraków, afgørelse DKN.5131.4.2024): videoovervågning installeret i to neonatalstuer uden at informere hverken patienter eller medarbejdere samt utilstrækkelig sikring af optagelserne. Samlet bøde 1.145.891 PLN (ca. 266.000 euro). Det er ikke en GPS-sag, men den handler om skjult overvågning af medarbejdere.',
      sv: 'UODO mot Centrum Medyczne Ujastek (Kraków, beslut DKN.5131.4.2024): kameraövervakning installerad i två neonatalrum utan att varken patienter eller anställda hade informerats, samt otillräcklig säkerhet för inspelningarna. Sammanlagt vite 1 145 891 PLN (cirka 266 000 euro). Det är inget GPS-fall, men det gäller övervakning av anställda som inte meddelats.',
      nl: 'UODO tegen Centrum Medyczne Ujastek (Krakau, besluit DKN.5131.4.2024): cameratoezicht geinstalleerd in twee neonatologieruimtes zonder dat patienten noch werknemers daarvan op de hoogte werden gebracht, plus onvoldoende beveiliging van de opnamen. Totale boete van 1.145.891 PLN (ongeveer 266.000 euro). Het is geen GPS-zaak, maar het betreft niet-meegedeelde monitoring van werknemers.',
    },
    urlFonte: FONTE_UODO_UJASTEK.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_KP_22_2,
    FONTE_DU_2026_25,
    FONTE_KP_22_3,
    FONTE_UODO_GUIDA,
    FONTE_UODO_DPIA,
    FONTE_UODO_RECLAMO,
    FONTE_UODO_UJASTEK,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
