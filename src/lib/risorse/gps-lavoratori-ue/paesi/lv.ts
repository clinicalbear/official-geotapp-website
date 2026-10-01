/**
 * Scheda-paese Lettonia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * chiarimenti del DVI (Datu valsts inspekcija, Garante lettone) sul tracciamento
 * GPS dei viaggi del dipendente e sulla videosorveglianza dei lavoratori, lista
 * DVI dei trattamenti che richiedono una DPIA (art. 35.4 GDPR), pagina DVI per i
 * reclami e GDPR.
 *
 * La Lettonia ha un'unica autorita nazionale per la protezione dei dati, il DVI;
 * non e uno Stato federale e non esiste una ripartizione regionale della
 * vigilanza. Nessun numero, URL o autorita e inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_DVI_GPS = {
  titolo:
    'DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)',
  url: 'https://www.dvi.gov.lv/lv/jaunums/dviskaidro-vai-drikstu-izsekot-sava-darbinieka-braucieniem',
};
const FONTE_DVI_VIDEO = {
  titolo: 'DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)',
  url: 'https://www.dvi.gov.lv/lv/jaunums/dviskaidro-16092022',
};
const FONTE_DVI_VIDEO_REMOTO = {
  titolo: 'DVI, videosorveglianza dei dipendenti nel lavoro da remoto',
  url: 'https://www.dvi.gov.lv/lv/jaunums/dviskaidro-darbinieku-videonoverosana-attalinata-darba-process',
};
const FONTE_DVI_DPIA = {
  titolo: 'DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)',
  url: 'https://www.edpb.europa.eu/sites/default/files/decisions/lv_sa_dpia_final_list_20181212.pdf',
};
const FONTE_LEGGE_LV = {
  titolo: 'Legge lettone sul trattamento dei dati delle persone fisiche (Fizisko personu datu apstrādes likums) - Likumi.lv',
  url: 'https://likumi.lv/ta/id/300099-fizisko-personu-datu-apstrades-likums',
};
const FONTE_DVI_RECLAMO = {
  titolo: 'DVI, presentare un reclamo',
  url: 'https://www.dvi.gov.lv/en/services/complaint-concerning-processing-personal-data',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const lettonia: SchedaPaese = {
  codiceISO: 'LV',
  slugCanonico: 'lettonia',
  nome: 'Lettonia',
  nomi: {
    it: 'Lettonia',
    en: 'Latvia',
    'en-us': 'Latvia',
    'en-gb': 'Latvia',
    'en-au': 'Latvia',
    'en-ie': 'Latvia',
    'en-ca': 'Latvia',
    de: 'Lettland',
    nl: 'Letland',
    fr: 'Lettonie',
    es: 'Letonia',
    pt: 'Letónia',
    da: 'Letland',
    sv: 'Lettland',
    nb: 'Latvia',
    ru: 'Латвия',
  },
  bandiera: '🇱🇻',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'DVI (Datu valsts inspekcija, Garante lettone)',
      en: 'DVI (Datu valsts inspekcija, Latvian data protection authority)',
      de: 'DVI (Datu valsts inspekcija, lettische Datenschutzbehörde)',
      fr: 'DVI (Datu valsts inspekcija, autorité lettone de protection des données)',
      es: 'DVI (Datu valsts inspekcija, autoridad letona de protección de datos)',
      nl: 'DVI (Datu valsts inspekcija, Letse gegevensbeschermingsautoriteit)',
      pt: 'DVI (Datu valsts inspekcija, autoridade letã de proteção de dados)',
      da: 'DVI (Datu valsts inspekcija, lettisk databeskyttelsesmyndighed)',
      sv: 'DVI (Datu valsts inspekcija, lettiska dataskyddsmyndigheten)',
      nb: 'DVI (Datu valsts inspekcija, latvisk datatilsyn)',
      ru: 'DVI (Datu valsts inspekcija, латвийский орган по защите данных)',
    },
    portale: FONTE_DVI_RECLAMO.url,
    urlFonte: FONTE_DVI_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Lettonia ha un'unica autorità nazionale, il DVI; nessuna ripartizione regionale.",
      en: 'Latvia has a single national authority, the DVI; there is no regional split.',
      de: 'Lettland hat eine einzige nationale Behörde, die DVI; es gibt keine regionale Aufteilung.',
      fr: 'La Lettonie dispose d’une seule autorité nationale, la DVI ; il n’existe pas de répartition régionale.',
      es: 'Letonia tiene una única autoridad nacional, la DVI; no existe un reparto regional.',
      pt: "A Letónia tem uma única autoridade nacional, a DVI; não existe repartição regional.",
      da: 'Letland har én national myndighed, DVI; der er ingen regional opdeling.',
      sv: 'Lettland har en enda nationell myndighet, DVI; det finns ingen regional uppdelning.',
      nb: 'Latvia har én nasjonal myndighet, DVI; det er ingen regional oppdeling.',
      nl: 'Letland heeft een enkele nationale autoriteit, de DVI; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Test di bilanciamento prima del trattamento e informazione preventiva ai lavoratori (DVI)',
        en: 'Balancing test before processing and prior notice to workers (DVI)',
        de: 'Abwägungstest vor der Verarbeitung und vorherige Information der Beschäftigten (DVI)',
        fr: 'Test de mise en balance avant le traitement et information préalable des salariés (DVI)',
        es: 'Test de ponderación antes del tratamiento e información previa a los trabajadores (DVI)',
        pt: "Teste de ponderação antes do tratamento e informação prévia aos trabalhadores (DVI)",
        da: 'Afvejningstest før behandlingen og forudgående information til medarbejderne (DVI)',
        sv: 'Intresseavvägningstest före behandlingen och information i förväg till arbetstagarna (DVI)',
        nb: 'Avveiningstest før behandlingen og forhåndsinformasjon til de ansatte (DVI)',
        nl: 'Afwegingstoets voor de verwerking en voorafgaande informatie aan werknemers (DVI)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il datore deve, prima di iniziare il trattamento, valutare il bilanciamento tra il proprio interesse e quello del lavoratore, e informarlo prima che inizi a usare il veicolo, in modo trasparente e in linguaggio semplice.',
        en: 'Before starting the processing, the employer must assess the balance between its own interest and the worker\'s interest, and must inform the worker before they begin using the vehicle, in a transparent way and in plain language.',
        de: 'Der Arbeitgeber muss vor Beginn der Verarbeitung die Abwägung zwischen seinem eigenen Interesse und dem des Beschäftigten vornehmen und den Beschäftigten informieren, bevor dieser das Fahrzeug benutzt, transparent und in einfacher Sprache.',
        fr: 'Avant de commencer le traitement, l’employeur doit évaluer la mise en balance entre son propre intérêt et celui du salarié, et l’informer avant qu’il ne commence à utiliser le véhicule, de manière transparente et en langage simple.',
        es: 'Antes de iniciar el tratamiento, el empleador debe evaluar la ponderación entre su propio interés y el del trabajador, e informarlo antes de que comience a usar el vehículo, de forma transparente y en lenguaje sencillo.',
        pt: "A entidade empregadora deve, antes de iniciar o tratamento, avaliar a ponderação entre o seu interesse e o do trabalhador, e informá-lo antes de este começar a utilizar o veículo, de forma transparente e em linguagem simples.",
        da: 'Før behandlingen begynder, skal arbejdsgiveren vurdere afvejningen mellem sin egen interesse og medarbejderens og informere medarbejderen, før vedkommende begynder at bruge køretøjet, på en gennemsigtig måde og i et enkelt sprog.',
        sv: 'Innan behandlingen påbörjas ska arbetsgivaren bedöma avvägningen mellan sitt eget intresse och arbetstagarens, och informera arbetstagaren innan hen börjar använda fordonet, på ett öppet sätt och i ett enkelt språk.',
        nb: 'Før behandlingen begynner, må arbeidsgiveren vurdere avveiningen mellom sin egen interesse og den ansattes og informere den ansatte, før vedkommende begynner å bruke kjøretøyet, på en åpen måte og i et enkelt språk.',
        nl: 'Voordat de verwerking begint, moet de werkgever de afweging maken tussen zijn eigen belang en dat van de werknemer, en de werknemer informeren voordat deze het voertuig gaat gebruiken, op transparante wijze en in eenvoudige taal.',
      },
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: {
        it: 'Base = interesse legittimo, non il consenso (DVI)',
        en: 'Basis = legitimate interest, not consent (DVI)',
        de: 'Grundlage = berechtigtes Interesse, nicht die Einwilligung (DVI)',
        fr: 'Base = intérêt légitime, non le consentement (DVI)',
        es: 'Base = interés legítimo, no el consentimiento (DVI)',
        pt: "Base = interesse legítimo, não o consentimento (DVI)",
        da: 'Grundlag = legitim interesse, ikke samtykke (DVI)',
        sv: 'Grund = berättigat intresse, inte samtycke (DVI)',
        nb: 'Grunnlag = berettiget interesse, ikke samtykke (DVI)',
        nl: 'Grondslag = gerechtvaardigd belang, niet de toestemming (DVI)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Di regola la base è l\'interesse legittimo del datore (in alcuni casi un obbligo di legge, come per i tachigrafi); il consenso del lavoratore si può usare solo in casi eccezionali, per lo squilibrio di potere tra datore e lavoratore.',
        en: "As a rule the basis is the employer's legitimate interest (in some cases a legal obligation, as with tachographs); the worker's consent can be used only in exceptional cases, because of the power imbalance between employer and worker.",
        de: 'In der Regel ist die Grundlage das berechtigte Interesse des Arbeitgebers (in manchen Fällen eine rechtliche Verpflichtung, etwa bei Fahrtschreibern); die Einwilligung des Beschäftigten kommt wegen des Machtungleichgewichts zwischen Arbeitgeber und Beschäftigtem nur in Ausnahmefällen in Betracht.',
        fr: 'En règle générale, la base est l’intérêt légitime de l’employeur (dans certains cas une obligation légale, comme pour les tachygraphes) ; le consentement du salarié ne peut être utilisé que dans des cas exceptionnels, en raison du déséquilibre de pouvoir entre employeur et salarié.',
        es: 'Por regla general la base es el interés legítimo del empleador (en algunos casos una obligación legal, como con los tacógrafos); el consentimiento del trabajador solo puede usarse en casos excepcionales, por el desequilibrio de poder entre empleador y trabajador.',
        pt: "Em regra, a base é o interesse legítimo da entidade empregadora (em alguns casos, uma obrigação legal, como para os tacógrafos); o consentimento do trabalhador só pode ser utilizado em casos excecionais, devido ao desequilíbrio de poder entre a entidade empregadora e o trabalhador.",
        da: 'Som hovedregel er grundlaget arbejdsgiverens legitime interesse (i nogle tilfælde en retlig forpligtelse, som for færdselsskrivere); medarbejderens samtykke kan kun bruges i ekstraordinære tilfælde på grund af den skæve magtbalance mellem arbejdsgiver og medarbejder.',
        sv: 'Som regel är grunden arbetsgivarens berättigade intresse (i vissa fall en rättslig skyldighet, som för färdskrivare); arbetstagarens samtycke kan endast användas i undantagsfall, på grund av maktobalansen mellan arbetsgivare och arbetstagare.',
        nb: 'Som hovedregel er grunnlaget arbeidsgiverens berettigede interesse (i noen tilfeller en rettslig forpliktelse, som for fartsskrivere); den ansattes samtykke kan bare brukes i ekstraordinære tilfeller på grunn av den skjeve maktbalansen mellom arbeidsgiver og ansatt.',
        nl: 'In de regel is de grondslag het gerechtvaardigd belang van de werkgever (in sommige gevallen een wettelijke verplichting, zoals bij tachografen); de toestemming van de werknemer kan alleen in uitzonderlijke gevallen worden gebruikt, vanwege de machtsongelijkheid tussen werkgever en werknemer.',
      },
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        pt: "Autorização prévia de uma autoridade antes da instalação",
        da: 'Forudgående tilladelse fra en myndighed før installation',
        sv: 'Förhandstillstånd från en myndighet innan installation',
        nb: 'Forhåndstillatelse fra en myndighet før installasjon',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'La legge lettone sul trattamento dei dati non prevede un\'autorizzazione preventiva del DVI; il titolare valuta da sé la liceità.',
        en: 'Latvian data processing law does not provide for a prior authorisation by the DVI; the controller assesses lawfulness on its own.',
        de: 'Das lettische Datenschutzrecht sieht keine vorherige Genehmigung durch die DVI vor; der Verantwortliche beurteilt die Rechtmäßigkeit selbst.',
        fr: 'La loi lettone sur le traitement des données ne prévoit pas d’autorisation préalable de la DVI ; le responsable du traitement évalue lui-même la licéité.',
        es: 'La ley letona sobre el tratamiento de datos no prevé una autorización previa del DVI; el responsable evalúa por sí mismo la licitud.',
        pt: "A lei letã sobre o tratamento de dados não prevê uma autorização prévia da DVI; o responsável pelo tratamento avalia por si a licitude.",
        da: 'Den lettiske lovgivning om databehandling indeholder ikke en forudgående tilladelse fra DVI; den dataansvarlige vurderer selv lovligheden.',
        sv: 'Den lettiska lagen om behandling av uppgifter föreskriver inget förhandstillstånd från DVI; den personuppgiftsansvarige bedömer själv lagligheten.',
        nb: 'Den latviske lovgivningen om databehandling inneholder ikke en forhåndstillatelse fra DVI; den behandlingsansvarlige vurderer selv lovligheten.',
        nl: 'De Letse wet inzake gegevensverwerking voorziet niet in een voorafgaande toestemming van de DVI; de verwerkingsverantwoordelijke beoordeelt de rechtmatigheid zelf.',
      },
      fonte: FONTE_LEGGE_LV,
    },
    {
      voce: {
        it: "Niente trattamento durante l'uso privato del veicolo; scopo limitato e mezzi meno invasivi",
        en: 'No processing during private use of the vehicle; limited purpose and less intrusive means',
        de: 'Keine Verarbeitung während der privaten Nutzung des Fahrzeugs; begrenzter Zweck und mildere Mittel',
        fr: 'Pas de traitement pendant l’usage privé du véhicule ; finalité limitée et moyens moins intrusifs',
        es: 'Ningún tratamiento durante el uso privado del vehículo; finalidad limitada y medios menos intrusivos',
        pt: "Sem tratamento durante o uso privado do veículo; finalidade limitada e meios menos invasivos",
        da: 'Ingen behandling under privat brug af køretøjet; begrænset formål og mindre indgribende midler',
        sv: 'Ingen behandling under privat användning av fordonet; begränsat ändamål och mindre ingripande medel',
        nb: 'Ingen behandling under privat bruk av kjøretøyet; begrenset formål og mindre inngripende midler',
        nl: 'Geen verwerking tijdens privégebruik van het voertuig; beperkt doel en minder ingrijpende middelen',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il datore non ha base né diritto di trattare i dati per il periodo in cui il lavoratore usa il veicolo per scopi privati. Deve inoltre chiedersi se lo scopo si raggiunga con mezzi meno invasivi (per contare i chilometri non serve registrare la posizione) e non può usare per un altro scopo i dati raccolti per uno (per esempio, i dati di un antifurto per controllare l\'efficienza dell\'autista).',
        en: "The employer has neither a basis nor a right to process data for the period in which the worker uses the vehicle for private purposes. It must also ask whether the purpose can be reached by less intrusive means (to count kilometres there is no need to record location) and may not use data collected for one purpose for another (for example, anti-theft data to check the driver's efficiency).",
        de: 'Der Arbeitgeber hat weder eine Grundlage noch ein Recht, Daten für den Zeitraum zu verarbeiten, in dem der Beschäftigte das Fahrzeug für private Zwecke nutzt. Er muss außerdem prüfen, ob der Zweck mit milderen Mitteln erreichbar ist (zum Zählen der Kilometer muss der Standort nicht erfasst werden), und darf für einen Zweck erhobene Daten nicht für einen anderen verwenden (zum Beispiel Diebstahlschutz-Daten, um die Effizienz des Fahrers zu kontrollieren).',
        fr: 'L’employeur n’a ni base ni droit de traiter les données pour la période pendant laquelle le salarié utilise le véhicule à des fins privées. Il doit aussi se demander si la finalité peut être atteinte par des moyens moins intrusifs (pour compter les kilomètres, il n’est pas nécessaire d’enregistrer la position) et ne peut pas utiliser pour une finalité les données collectées pour une autre (par exemple, les données d’un antivol pour contrôler l’efficacité du conducteur).',
        es: 'El empleador no tiene base ni derecho a tratar los datos durante el periodo en que el trabajador usa el vehículo con fines privados. Debe además preguntarse si la finalidad puede alcanzarse con medios menos intrusivos (para contar los kilómetros no hace falta registrar la posición) y no puede usar para una finalidad los datos recogidos para otra (por ejemplo, los datos de un antirrobo para controlar la eficiencia del conductor).',
        pt: "A entidade empregadora não tem base nem direito de tratar os dados durante o período em que o trabalhador utiliza o veículo para fins privados. Deve ainda perguntar-se se a finalidade pode ser alcançada com meios menos invasivos (para contar os quilómetros não é necessário registar a posição) e não pode utilizar para outra finalidade os dados recolhidos para uma (por exemplo, os dados de um dispositivo antirroubo para controlar a eficiência do condutor).",
        da: 'Arbejdsgiveren har hverken grundlag eller ret til at behandle data i den periode, hvor medarbejderen bruger køretøjet til private formål. Arbejdsgiveren skal desuden overveje, om formålet kan nås med mindre indgribende midler (for at tælle kilometer er det ikke nødvendigt at registrere positionen), og må ikke bruge data, der er indsamlet til ét formål, til et andet (for eksempel data fra en tyverialarm til at kontrollere chaufførens effektivitet).',
        sv: 'Arbetsgivaren har varken grund eller rätt att behandla uppgifter under den tid då arbetstagaren använder fordonet för privata ändamål. Arbetsgivaren ska dessutom fråga sig om ändamålet kan uppnås med mindre ingripande medel (för att räkna kilometer behöver man inte registrera positionen) och får inte använda uppgifter som samlats in för ett ändamål för ett annat (till exempel uppgifter från ett stöldskydd för att kontrollera förarens effektivitet).',
        nb: 'Arbeidsgiveren har verken grunnlag eller rett til å behandle data i den perioden den ansatte bruker kjøretøyet til private formål. Arbeidsgiveren må dessuten vurdere om formålet kan nås med mindre inngripende midler (for å telle kilometer er det ikke nødvendig å registrere posisjonen), og må ikke bruke data som er samlet inn til ett formål, til et annet (for eksempel data fra et tyverialarmsystem til å kontrollere sjåførens effektivitet).',
        nl: 'De werkgever heeft noch een grondslag noch een recht om gegevens te verwerken gedurende de periode waarin de werknemer het voertuig voor privédoeleinden gebruikt. Hij moet zich ook afvragen of het doel met minder ingrijpende middelen kan worden bereikt (om kilometers te tellen hoeft de locatie niet te worden vastgelegd) en mag gegevens die voor het ene doel zijn verzameld niet voor een ander doel gebruiken (bijvoorbeeld diefstalbeveiligingsgegevens om de efficiëntie van de bestuurder te controleren).',
      },
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per la sorveglianza sul luogo di lavoro e il monitoraggio sistematico dei dipendenti (lista DVI)",
        en: 'Impact assessment (DPIA) for workplace surveillance and systematic monitoring of employees (DVI list)',
        de: 'Folgenabschätzung (DPIA) für die Überwachung am Arbeitsplatz und die systematische Überwachung der Beschäftigten (DVI-Liste)',
        fr: 'Analyse d’impact (DPIA) pour la surveillance sur le lieu de travail et le suivi systématique des salariés (liste DVI)',
        es: 'Evaluación de impacto (EIPD) para la vigilancia en el lugar de trabajo y el seguimiento sistemático de los empleados (lista DVI)',
        pt: "Avaliação de impacto (DPIA) para a vigilância no local de trabalho e a monitorização sistemática dos trabalhadores (lista da DVI)",
        da: "Konsekvensanalyse (DPIA) ved overvågning på arbejdspladsen og systematisk overvågning af medarbejdere (DVI's liste)",
        sv: "Konsekvensbedömning (DPIA) för övervakning på arbetsplatsen och systematisk övervakning av anställda (DVI:s lista)",
        nb: 'Vurdering av personvernkonsekvenser (DPIA) ved overvåking på arbeidsplassen og systematisk overvåking av ansatte (DVIs liste)',
        nl: 'Effectbeoordeling (DPIA) voor toezicht op de werkplek en systematische monitoring van werknemers (DVI-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista DVI rende obbligatoria la valutazione d'impatto per la sorveglianza sul luogo di lavoro, il monitoraggio sistematico delle attività dei dipendenti e il tracciamento su larga scala.",
        en: 'The DVI list makes the impact assessment mandatory for workplace surveillance, systematic monitoring of employees\' activities and large-scale tracking.',
        de: 'Die DVI-Liste macht die Folgenabschätzung verpflichtend für die Überwachung am Arbeitsplatz, die systematische Überwachung der Tätigkeiten der Beschäftigten und die großangelegte Nachverfolgung.',
        fr: 'La liste DVI rend l’analyse d’impact obligatoire pour la surveillance sur le lieu de travail, le suivi systématique des activités des salariés et le pistage à grande échelle.',
        es: 'La lista DVI hace obligatoria la evaluación de impacto para la vigilancia en el lugar de trabajo, el seguimiento sistemático de las actividades de los empleados y el rastreo a gran escala.',
        pt: "A lista da DVI torna obrigatória a avaliação de impacto para a vigilância no local de trabalho, a monitorização sistemática das atividades dos trabalhadores e o seguimento em grande escala.",
        da: "DVI's liste gør konsekvensanalysen obligatorisk ved overvågning på arbejdspladsen, systematisk overvågning af medarbejdernes aktiviteter og sporing i stor skala.",
        sv: "DVI:s lista gör konsekvensbedömning obligatorisk för övervakning på arbetsplatsen, systematisk övervakning av de anställdas verksamhet och spårning i stor omfattning.",
        nb: 'DVIs liste gjør vurderingen av personvernkonsekvenser obligatorisk ved overvåking på arbeidsplassen, systematisk overvåking av de ansattes aktiviteter og sporing i stor skala.',
        nl: 'De DVI-lijst maakt de effectbeoordeling verplicht voor toezicht op de werkplek, systematische monitoring van de activiteiten van werknemers en grootschalige tracking.',
      },
      fonte: FONTE_DVI_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Svolgi il test di bilanciamento prima di iniziare il trattamento.',
        en: 'Carry out the balancing test before starting the processing.',
        de: 'Führen Sie den Abwägungstest durch, bevor Sie mit der Verarbeitung beginnen.',
        fr: 'Effectuez le test de mise en balance avant de commencer le traitement.',
        es: 'Realiza el test de ponderación antes de iniciar el tratamiento.',
        pt: "Realize o teste de ponderação antes de iniciar o tratamento.",
        da: 'Gennemfør afvejningstesten, før behandlingen begynder.',
        sv: 'Genomför intresseavvägningstestet innan du påbörjar behandlingen.',
        nb: 'Gjennomfør avveiningstesten før behandlingen begynner.',
        nl: 'Voer de afwegingstoets uit voordat u met de verwerking begint.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (legitimate interest, not consent).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, nicht die Einwilligung).',
        fr: 'Identifiez une base juridique valable (intérêt légitime, non le consentement).',
        es: 'Identifica una base jurídica válida (interés legítimo, no el consentimiento).',
        pt: "Identifique uma base jurídica válida (interesse legítimo, não o consentimento).",
        da: 'Find et gyldigt retsgrundlag (legitim interesse, ikke samtykke).',
        sv: 'Fastställ en giltig rättslig grund (berättigat intresse, inte samtycke).',
        nb: 'Finn et gyldig rettslig grunnlag (berettiget interesse, ikke samtykke).',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang, niet de toestemming).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Informa i lavoratori prima che inizino a usare il veicolo, in modo trasparente e semplice.',
        en: 'Inform workers before they begin using the vehicle, in a transparent and plain way.',
        de: 'Informieren Sie die Beschäftigten, bevor sie das Fahrzeug benutzen, transparent und einfach.',
        fr: 'Informez les salariés avant qu’ils ne commencent à utiliser le véhicule, de manière transparente et simple.',
        es: 'Informa a los trabajadores antes de que comiencen a usar el vehículo, de forma transparente y sencilla.',
        pt: "Informe os trabalhadores antes de começarem a utilizar o veículo, de forma transparente e simples.",
        da: 'Informér medarbejderne, før de begynder at bruge køretøjet, på en gennemsigtig og enkel måde.',
        sv: 'Informera arbetstagarna innan de börjar använda fordonet, på ett öppet och enkelt sätt.',
        nb: 'Informer de ansatte før de begynner å bruke kjøretøyet, på en åpen og enkel måte.',
        nl: 'Informeer de werknemers voordat zij het voertuig gaan gebruiken, op transparante en eenvoudige wijze.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per la sorveglianza sul luogo di lavoro.",
        en: 'Carry out the impact assessment (DPIA) for workplace surveillance.',
        de: 'Führen Sie die Folgenabschätzung (DPIA) für die Überwachung am Arbeitsplatz durch.',
        fr: 'Effectuez l’analyse d’impact (DPIA) pour la surveillance sur le lieu de travail.',
        es: 'Realiza la evaluación de impacto (EIPD) para la vigilancia en el lugar de trabajo.',
        pt: "Realize a avaliação de impacto (DPIA) para a vigilância no local de trabalho.",
        da: 'Gennemfør konsekvensanalysen (DPIA) for overvågning på arbejdspladsen.',
        sv: 'Genomför konsekvensbedömningen (DPIA) för övervakning på arbetsplatsen.',
        nb: 'Gjennomfør vurderingen av personvernkonsekvenser (DPIA) for overvåking på arbeidsplassen.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor toezicht op de werkplek.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente trattamento durante l\'uso privato, scopo limitato e mezzi meno invasivi.',
        en: 'Configure the system: no processing during private use, limited purpose and less intrusive means.',
        de: 'Konfigurieren Sie das System: keine Verarbeitung während der privaten Nutzung, begrenzter Zweck und mildere Mittel.',
        fr: 'Configurez le système : pas de traitement pendant l’usage privé, finalité limitée et moyens moins intrusifs.',
        es: 'Configura el sistema: ningún tratamiento durante el uso privado, finalidad limitada y medios menos intrusivos.',
        pt: "Configure o sistema: sem tratamento durante o uso privado, finalidade limitada e meios menos invasivos.",
        da: 'Konfigurér systemet: ingen behandling under privat brug, begrænset formål og mindre indgribende midler.',
        sv: 'Konfigurera systemet: ingen behandling under privat användning, begränsat ändamål och mindre ingripande medel.',
        nb: 'Sett opp systemet: ingen behandling under privat bruk, begrenset formål og mindre inngripende midler.',
        nl: 'Configureer het systeem: geen verwerking tijdens privégebruik, beperkt doel en minder ingrijpende middelen.',
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
        pt: "Se mudar de sistema ou de software de monitorização, atualize e entregue de novo a informação e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, nos casos em que a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue anteriormente não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsinformationen igen og tjekke, om du igen skal informere eller høre medarbejderrepræsentanterne, hvor loven kræver det. Ofte skifter leverandøren (databehandleren), de indsamlede data og metoderne: den information, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter system eller övervakningsprogram ska du uppdatera och lämna ut integritetsinformationen på nytt och kontrollera om du på nytt måste informera eller höra de anställdas företrädare, där lagen kräver det. Ofta ändras leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och metoderna: den information som lämnades tidigare räcker inte.',
        nb: 'Hvis du bytter system eller overvåkingsprogramvare, må du oppdatere og dele ut personverninformasjonen på nytt og vurdere om du på nytt må informere eller høre de ansattes representanter, der loven krever det. Ofte endrer leverandøren (databehandleren), de innsamlede opplysningene og metodene seg: informasjonen som ble delt ut tidligere, er ikke nok.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'DVI, reclami',
      portale: FONTE_DVI_RECLAMO.url,
      urlFonte: FONTE_DVI_RECLAMO.url,
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
      it: 'Non risulta una multa del DVI specifica pubblicata per il GPS sui dipendenti. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).',
      en: 'There is no specific, published DVI fine for GPS tracking of employees. The penalty risk remains the general one under the GDPR (Art. 83).',
      de: 'Es ist keine spezifische, veröffentlichte Geldbuße der DVI für GPS-Tracking von Beschäftigten bekannt. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).',
      fr: 'Il n’existe pas d’amende de la DVI spécifique et publiée pour le suivi GPS des salariés. Le risque de sanction reste celui, général, du RGPD (art. 83).',
      es: "No consta una multa específica del DVI y publicada por el GPS de los empleados. El riesgo sancionador sigue siendo el general del RGPD (art. 83).",
      pt: "Não consta nenhuma coima da DVI específica publicada sobre o GPS nos trabalhadores. O risco sancionatório mantém-se o geral do RGPD (art. 83.º).",
      da: 'Der kendes ingen specifik offentliggjort bøde fra DVI for GPS på medarbejdere. Sanktionsrisikoen er fortsat den generelle efter GDPR (art. 83).',
      sv: 'Det finns inga uppgifter om någon särskild publicerad DVI-sanktion för GPS på anställda. Sanktionsrisken är fortfarande den allmänna enligt GDPR (art. 83).',
      nb: 'Det er ikke kjent noen spesifikk offentliggjort bot fra DVI for GPS på ansatte. Sanksjonsrisikoen er fortsatt den generelle etter GDPR (art. 83).',
      nl: 'Er is geen specifieke, gepubliceerde boete van de DVI voor GPS-tracking van werknemers. Het sanctierisico blijft het algemene risico van de AVG (art. 83).',
    },
    urlFonte: FONTE_DVI_GPS.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_DVI_GPS,
    FONTE_LEGGE_LV,
    FONTE_DVI_VIDEO,
    FONTE_DVI_VIDEO_REMOTO,
    FONTE_DVI_DPIA,
    FONTE_DVI_RECLAMO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
