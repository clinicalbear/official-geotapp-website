/**
 * Scheda-paese Francia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. L2312-38 e art. L1222-4 del Code du travail, guida CNIL sulla
 * geolocalizzazione dei veicoli dei dipendenti, lista CNIL dei trattamenti che
 * richiedono un'AIPD, abolizione delle dichiarazioni preventive alla CNIL dal
 * 25 maggio 2018, sanzioni CNIL del novembre 2023 in procedura semplificata, sanzione CNIL
 * UBEEQO (175.000 €) e GDPR.
 *
 * La Francia non e' uno Stato federale: c'e' un'unica autorita' nazionale, la
 * CNIL, senza ripartizione regionale. Nessun numero, URL o autorita' e'
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_L2312_38 = {
  titolo: 'Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035610275/',
};
const FONTE_L1222_4 = {
  titolo: 'Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006900861',
};
const FONTE_CNIL_GEOLOCALIZZAZIONE = {
  titolo: 'CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti',
  url: 'https://www.cnil.fr/fr/la-geolocalisation-des-vehicules-des-salaries',
};
const FONTE_CNIL_AIPD = {
  titolo: "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)",
  url: 'https://www.cnil.fr/sites/default/files/atoms/files/liste-traitements-avec-aipd-requise-v2.pdf',
};
const FONTE_CNIL_ABOLIZIONE_FORMALITA = {
  titolo: 'CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018',
  url: 'https://www.cnil.fr/fr/cnil-direct/question/reglement-europeen-faut-il-encore-effectuer-des-declarations-la-cnil',
};
const FONTE_CNIL_SANZIONI_2025 = {
  titolo: 'CNIL, dieci nuove sanzioni (procedura semplificata, 7 novembre 2023)',
  url: 'https://www.cnil.fr/fr/la-cnil-prononce-dix-nouvelles-sanctions-dans-le-cadre-de-sa-procedure-simplifiee',
};
const FONTE_EDPB_UBEEQO = {
  titolo: 'CNIL, deliberazione SAN-2022-015 del 7 luglio 2022 (UBEEQO International, 175.000 €), su Légifrance',
  url: 'https://www.legifrance.gouv.fr/cnil/id/CNILTEXT000046070924',
};
const FONTE_CNIL_RECLAMO = {
  titolo: 'CNIL, presentare un reclamo',
  url: 'https://www.cnil.fr/fr/plaintes',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const francia: SchedaPaese = {
  codiceISO: 'FR',
  slugCanonico: 'francia',
  nome: 'Francia',
  nomi: {
    it: 'Francia',
    en: 'France',
    'en-us': 'France',
    'en-gb': 'France',
    'en-au': 'France',
    'en-ie': 'France',
    'en-ca': 'France',
    de: 'Frankreich',
    nl: 'Frankrijk',
    fr: 'France',
    es: 'Francia',
    pt: 'França',
    da: 'Frankrig',
    sv: 'Frankrike',
    nb: 'Frankrike',
    ru: 'Франция',
  },
  bandiera: '🇫🇷',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: "CNIL (Commission Nationale de l'Informatique et des Libertes)",
    urlFonte: FONTE_CNIL_GEOLOCALIZZAZIONE.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Francia ha un'unica autorità nazionale, la CNIL; nessuna ripartizione regionale.",
      en: 'France has a single national authority, the CNIL; there is no regional split.',
      de: 'Frankreich hat eine einzige nationale Behörde, die CNIL; es gibt keine regionale Aufteilung.',
      fr: 'La France a une seule autorité nationale, la CNIL ; il n’y a pas de répartition régionale.',
      es: 'Francia tiene una única autoridad nacional, la CNIL; no hay reparto regional.',
      pt: "A França tem uma única autoridade nacional, a CNIL; não existe repartição regional.",
      da: 'Frankrig har én national myndighed, CNIL; der er ingen regional opdeling.',
      nl: 'Frankrijk heeft een enkele nationale autoriteit, de CNIL; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consultazione del CSE prima di installare il sistema di controllo (art. L2312-38)',
        en: 'Consultation of the CSE before installing the monitoring system (art. L2312-38)',
        de: 'Anhörung des CSE vor der Installation des Kontrollsystems (Art. L2312-38)',
        fr: 'Consultation du CSE avant l’installation du système de contrôle (art. L2312-38)',
        es: 'Consulta al CSE antes de instalar el sistema de control (art. L2312-38)',
        pt: "Consulta do CSE antes de instalar o sistema de controlo (art. L2312-38)",
        da: 'Høring af CSE, før overvågningssystemet installeres (art. L2312-38)',
        nl: 'Raadpleging van de CSE voor de installatie van het controlesysteem (art. L2312-38)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Prima di decidere di installare un mezzo di controllo dell'attività dei dipendenti, il datore deve informare e consultare il CSE (comitato sociale ed economico). La consultazione prevista dall'art. L2312-38 vale nelle imprese con almeno 50 dipendenti: il Codice del lavoro la colloca fra le attribuzioni del CSE in quelle imprese. Sotto i 50 dipendenti resta comunque l'obbligo di informare individualmente ogni dipendente prima di raccogliere i suoi dati (art. L1222-4).",
        en: "Before deciding to install a means of monitoring employees' activity, the employer must inform and consult the CSE (Social and Economic Committee). The consultation under art. L2312-38 applies in companies with at least 50 employees: the Labour Code places it among the powers of the CSE in those companies. Below 50 employees the obligation to inform each employee individually before collecting their data still applies (art. L1222-4).",
        de: 'Bevor der Arbeitgeber beschließt, ein Mittel zur Kontrolle der Tätigkeit der Beschäftigten zu installieren, muss er den CSE (Sozial- und Wirtschaftsausschuss) informieren und anhören. Die Anhörung nach Art. L2312-38 gilt in Unternehmen mit mindestens 50 Beschäftigten: Das Arbeitsgesetzbuch ordnet sie den Befugnissen des CSE in diesen Unternehmen zu. Unter 50 Beschäftigten bleibt die Pflicht, jeden Beschäftigten vor der Erhebung seiner Daten einzeln zu informieren (Art. L1222-4).',
        fr: 'Avant de décider d’installer un moyen de contrôle de l’activité des salariés, l’employeur doit informer et consulter le CSE (Comité Social et Économique). La consultation prévue par l’art. L2312-38 vaut dans les entreprises d’au moins 50 salariés : le Code du travail la range parmi les attributions du CSE dans ces entreprises. En dessous de 50 salariés, l’obligation d’informer individuellement chaque salarié avant de collecter ses données demeure (art. L1222-4).',
        es: "Antes de decidir instalar un medio de control de la actividad de los empleados, el empleador debe informar y consultar al CSE (Comité Social y Económico). La consulta prevista por el art. L2312-38 rige en las empresas de al menos 50 empleados: el Código del trabajo la sitúa entre las atribuciones del CSE en esas empresas. Por debajo de 50 empleados se mantiene la obligación de informar individualmente a cada empleado antes de recoger sus datos (art. L1222-4).",
        pt: "Antes de decidir instalar um meio de controlo da atividade dos trabalhadores, a entidade empregadora deve informar e consultar o CSE (comité social e económico). A consulta prevista no art. L2312-38 aplica-se nas empresas com, pelo menos, 50 trabalhadores: o Código do Trabalho inclui-a entre as atribuições do CSE nessas empresas. Abaixo dos 50 trabalhadores mantém-se, em todo o caso, a obrigação de informar individualmente cada trabalhador antes de recolher os seus dados (art. L1222-4).",
        da: "Før arbejdsgiveren beslutter at installere et middel til kontrol af medarbejdernes aktivitet, skal han informere og høre CSE (det sociale og økonomiske udvalg). Høringen efter art. L2312-38 gælder i virksomheder med mindst 50 medarbejdere: arbejdskodekset placerer den blandt CSE's beføjelser i disse virksomheder. Under 50 medarbejdere gælder stadig forpligtelsen til at informere hver enkelt medarbejder individuelt, før hans data indsamles (art. L1222-4).",
        nl: 'Voordat de werkgever besluit een middel voor de controle van de activiteit van de werknemers te installeren, moet hij de CSE (Sociaal en Economisch Comite) informeren en raadplegen. De raadpleging volgens art. L2312-38 geldt in ondernemingen met ten minste 50 werknemers: het Arbeidswetboek plaatst haar bij de bevoegdheden van de CSE in die ondernemingen. Onder de 50 werknemers blijft de verplichting om elke werknemer individueel te informeren voordat zijn gegevens worden verzameld (art. L1222-4).',
      },
      fonte: FONTE_L2312_38,
    },
    {
      voce: {
        it: "Autorizzazione di un'autorità del lavoro prima di installare",
        en: 'Authorisation from a labour authority before installing',
        de: 'Genehmigung einer Arbeitsbehörde vor der Installation',
        fr: 'Autorisation d’une autorité du travail avant l’installation',
        es: 'Autorización de una autoridad laboral antes de instalar',
        pt: "Autorização de uma autoridade do trabalho antes da instalação",
        da: 'Tilladelse fra en arbejdsmarkedsmyndighed før installation',
        nl: 'Toestemming van een arbeidsautoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La Francia non prevede un'autorizzazione preventiva di un'autorità del lavoro, né più dichiarazioni preventive alla CNIL (abolite dal 25 maggio 2018 col GDPR). Il modello è basato sulla responsabilizzazione: registro dei trattamenti e AIPD quando il rischio e elevato.",
        en: 'France does not require prior authorisation from a labour authority, nor any further prior declarations to the CNIL (abolished on 25 May 2018 with the GDPR). The model is based on accountability: a record of processing activities and a DPIA where the risk is high.',
        de: 'Frankreich sieht keine vorherige Genehmigung einer Arbeitsbehörde vor und auch keine vorherigen Meldungen an die CNIL mehr (seit dem 25. Mai 2018 mit der DSGVO abgeschafft). Das Modell beruht auf Rechenschaftspflicht: Verzeichnis der Verarbeitungstätigkeiten und DSFA, wenn das Risiko hoch ist.',
        fr: 'La France ne prévoit pas d’autorisation préalable d’une autorité du travail, ni de déclarations préalables à la CNIL (supprimées depuis le 25 mai 2018 avec le RGPD). Le modèle repose sur la responsabilisation : registre des traitements et AIPD lorsque le risque est élevé.',
        es: 'Francia no prevé una autorización previa de una autoridad laboral, ni más declaraciones previas a la CNIL (suprimidas desde el 25 de mayo de 2018 con el RGPD). El modelo se basa en la responsabilidad proactiva: registro de las actividades de tratamiento y EIPD cuando el riesgo es elevado.',
        pt: "A França não prevê uma autorização prévia de uma autoridade do trabalho, nem já declarações prévias à CNIL (abolidas desde 25 de maio de 2018 com o RGPD). O modelo assenta na responsabilização: registo das atividades de tratamento e AIPD quando o risco é elevado.",
        da: 'Frankrig kræver ingen forudgående tilladelse fra en arbejdsmarkedsmyndighed og heller ingen yderligere forudgående anmeldelser til CNIL (afskaffet den 25. maj 2018 med GDPR). Modellen bygger på ansvarlighed: fortegnelse over behandlingsaktiviteter og konsekvensanalyse (AIPD), når risikoen er høj.',
        nl: 'Frankrijk vereist geen voorafgaande toestemming van een arbeidsautoriteit, noch nog voorafgaande aangiften bij de CNIL (sinds 25 mei 2018 met de AVG afgeschaft). Het model berust op verantwoording: een register van verwerkingsactiviteiten en een DPIA wanneer het risico hoog is.',
      },
      fonte: FONTE_CNIL_ABOLIZIONE_FORMALITA,
    },
    {
      voce: {
        it: 'Informazione individuale e preventiva del lavoratore (art. L1222-4 + art. 13 GDPR)',
        en: 'Individual and prior information to the worker (art. L1222-4 + art. 13 GDPR)',
        de: 'Individuelle und vorherige Information des Beschäftigten (Art. L1222-4 + Art. 13 DSGVO)',
        fr: 'Information individuelle et préalable du salarié (art. L1222-4 + art. 13 RGPD)',
        es: 'Información individual y previa al trabajador (art. L1222-4 + art. 13 RGPD)',
        pt: "Informação individual e prévia do trabalhador (art. L1222-4 + art. 13.º do RGPD)",
        da: 'Individuel og forudgående information til medarbejderen (art. L1222-4 + art. 13 i GDPR)',
        nl: 'Individuele en voorafgaande informatie aan de werknemer (art. L1222-4 + art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Nessun dato può essere raccolto da un dispositivo non portato preventivamente a conoscenza del lavoratore; ognuno va informato su titolare, finalità, destinatari e diritti.',
        en: 'No data may be collected from a device not brought to the worker\'s knowledge in advance; each worker must be informed of the controller, the purposes, the recipients and their rights.',
        de: 'Es dürfen keine Daten von einem Gerät erhoben werden, das dem Beschäftigten nicht vorab zur Kenntnis gebracht wurde; jeder ist über den Verantwortlichen, die Zwecke, die Empfänger und seine Rechte zu informieren.',
        fr: 'Aucune donnée ne peut être collectée par un dispositif non porté préalablement à la connaissance du salarié ; chacun doit être informé du responsable, des finalités, des destinataires et de ses droits.',
        es: 'No se puede recoger ningún dato mediante un dispositivo que no se haya puesto previamente en conocimiento del trabajador; cada uno debe ser informado del responsable, las finalidades, los destinatarios y sus derechos.',
        pt: "Nenhum dado pode ser recolhido por um dispositivo que não tenha sido previamente dado a conhecer ao trabalhador; cada um deve ser informado sobre o responsável pelo tratamento, as finalidades, os destinatários e os seus direitos.",
        da: 'Der må ikke indsamles data fra en enhed, som medarbejderen ikke på forhånd er gjort bekendt med; hver medarbejder skal informeres om den dataansvarlige, formålene, modtagerne og sine rettigheder.',
        nl: 'Er mogen geen gegevens worden verzameld via een apparaat dat niet vooraf ter kennis van de werknemer is gebracht; iedereen moet worden geinformeerd over de verwerkingsverantwoordelijke, de doeleinden, de ontvangers en zijn rechten.',
      },
      fonte: FONTE_L1222_4,
    },
    {
      voce: {
        it: 'Divieto di sorveglianza permanente: geolocalizzazione sussidiaria e disattivabile fuori orario',
        en: 'Ban on permanent surveillance: geolocation must be subsidiary and switchable off outside working hours',
        de: 'Verbot der ständigen Überwachung: Geolokalisierung muss subsidiär und außerhalb der Arbeitszeit abschaltbar sein',
        fr: 'Interdiction de la surveillance permanente : géolocalisation subsidiaire et désactivable hors temps de travail',
        es: 'Prohibición de la vigilancia permanente: geolocalización subsidiaria y desactivable fuera del horario',
        pt: "Proibição de vigilância permanente: geolocalização subsidiária e desativável fora do horário",
        da: 'Forbud mod permanent overvågning: geolokalisering skal være subsidiær og kunne slås fra uden for arbejdstiden',
        nl: 'Verbod op permanente surveillance: geolocatie moet subsidiair en buiten werktijd uitschakelbaar zijn',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per la CNIL la geolocalizzazione non può servire a controllare il dipendente in permanenza, è sussidiaria (vietata se esiste già un mezzo meno intrusivo, es. per calcolare l'orario se esiste già un altro sistema di timbratura) e deve poter essere disattivata fuori dall'orario di lavoro.",
        en: 'For the CNIL, geolocation may not be used to monitor the employee permanently; it is subsidiary (prohibited if a less intrusive means already exists, e.g. to calculate working time where another clock-in system already exists) and must be able to be switched off outside working hours.',
        de: 'Für die CNIL darf die Geolokalisierung nicht dazu dienen, den Beschäftigten dauerhaft zu kontrollieren; sie ist subsidiär (verboten, wenn bereits ein weniger eingriffsintensives Mittel besteht, z. B. zur Berechnung der Arbeitszeit, wenn bereits ein anderes Zeiterfassungssystem besteht) und muss außerhalb der Arbeitszeit abschaltbar sein.',
        fr: 'Pour la CNIL, la géolocalisation ne peut servir à contrôler le salarié en permanence ; elle est subsidiaire (interdite s’il existe déjà un moyen moins intrusif, par ex. pour calculer le temps de travail s’il existe déjà un autre système de pointage) et doit pouvoir être désactivée en dehors du temps de travail.',
        es: 'Para la CNIL, la geolocalización no puede servir para controlar al empleado de forma permanente; es subsidiaria (prohibida si ya existe un medio menos intrusivo, p. ej. para calcular el horario si ya existe otro sistema de fichaje) y debe poder desactivarse fuera del horario de trabajo.',
        pt: "Para a CNIL, a geolocalização não pode servir para controlar o trabalhador de forma permanente; é subsidiária (proibida se já existir um meio menos intrusivo, por exemplo para calcular o horário quando já existe outro sistema de registo de ponto) e deve poder ser desativada fora do horário de trabalho.",
        da: 'Ifølge CNIL må geolokalisering ikke bruges til at overvåge medarbejderen permanent; den er subsidiær (forbudt, hvis der allerede findes et mindre indgribende middel, f.eks. til at beregne arbejdstiden, hvis der allerede findes et andet stemplingssystem) og skal kunne slås fra uden for arbejdstiden.',
        nl: 'Voor de CNIL mag geolocatie niet dienen om de werknemer permanent te controleren; zij is subsidiair (verboden als er al een minder ingrijpend middel bestaat, bijv. om de werktijd te berekenen als er al een ander prikkloksysteem bestaat) en moet buiten werktijd uitgeschakeld kunnen worden.',
      },
      fonte: FONTE_CNIL_GEOLOCALIZZAZIONE,
    },
    {
      voce: {
        it: "Valutazione d'impatto (AIPD) per la sorveglianza costante dell'attività dei dipendenti",
        en: "Data protection impact assessment (DPIA) for constant monitoring of employees' activity",
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die ständige Überwachung der Tätigkeit der Beschäftigten',
        fr: 'Analyse d’impact (AIPD) pour la surveillance constante de l’activité des salariés',
        es: 'Evaluación de impacto (EIPD) para la vigilancia constante de la actividad de los empleados',
        pt: "Avaliação de impacto (AIPD) para a vigilância constante da atividade dos trabalhadores",
        da: 'Konsekvensanalyse (AIPD) ved konstant overvågning af medarbejdernes aktivitet',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de voortdurende controle van de activiteit van werknemers',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "La lista CNIL include tra i trattamenti che richiedono un'AIPD quelli che sorvegliano in modo costante l'attività dei dipendenti e i trattamenti di dati di localizzazione su larga scala. Un sistema che rileva la posizione solo in momenti puntuali (per esempio alla timbratura), in una piccola azienda, può non rientrare in nessuna delle due categorie: in quel caso il rischio va valutato caso per caso (art. 35 GDPR).",
        en: "The CNIL list includes, among the processing operations requiring a DPIA, those that constantly monitor employees' activity and large-scale processing of location data. A system that records the position only at specific moments (for example at clock-in), in a small company, may fall under neither category: in that case the risk must be assessed case by case (Article 35 GDPR).",
        de: 'Die CNIL-Liste zählt zu den Verarbeitungen, die eine DSFA erfordern, jene, die die Tätigkeit der Beschäftigten ständig überwachen, sowie die Verarbeitung von Standortdaten in großem Umfang. Ein System, das den Standort nur punktuell erfasst (etwa beim Stempeln), kann in einem kleinen Unternehmen unter keine der beiden Kategorien fallen: dann ist das Risiko im Einzelfall zu bewerten (Artikel 35 DSGVO).',
        fr: 'La liste de la CNIL inclut parmi les traitements requierant une AIPD ceux qui surveillent de manière constante l’activité des salariés et les traitements de données de localisation à grande échelle. Un système qui relève la position seulement à des moments ponctuels (par exemple au pointage), dans une petite entreprise, peut ne relever d’aucune de ces deux catégories : le risque doit alors être apprécié au cas par cas (article 35 RGPD).',
        es: 'La lista de la CNIL incluye, entre los tratamientos que requieren una EIPD, los que vigilan de forma constante la actividad de los empleados y los tratamientos de datos de localización a gran escala. Un sistema que registra la posición solo en momentos puntuales (por ejemplo al fichar), en una empresa pequeña, puede no entrar en ninguna de las dos categorías: en ese caso el riesgo debe valorarse caso por caso (artículo 35 RGPD).',
        pt: "A lista da CNIL inclui, entre os tratamentos que exigem uma AIPD, os que vigiam de forma constante a atividade dos trabalhadores e os tratamentos de dados de localização em grande escala. Um sistema que regista a posição apenas em momentos pontuais (por exemplo, ao picar o ponto), numa pequena empresa, pode não se enquadrar em nenhuma das duas categorias: nesse caso, o risco deve ser avaliado caso a caso (art. 35.º do RGPD).",
        da: "CNIL's liste medtager blandt de behandlinger, der kræver en AIPD, dem, der konstant overvåger medarbejdernes aktivitet, og behandling af lokaliseringsdata i stor skala. Et system, der kun registrerer positionen på bestemte tidspunkter (for eksempel ved stempling), i en lille virksomhed, falder måske under ingen af de to kategorier: i så fald skal risikoen vurderes fra sag til sag (art. 35 i GDPR).",
        nl: 'De CNIL-lijst rekent tot de verwerkingen die een DPIA vereisen die welke de activiteit van werknemers voortdurend bewaken en de grootschalige verwerking van locatiegegevens. Een systeem dat de positie alleen op bepaalde momenten vastlegt (bijvoorbeeld bij het klokken), in een klein bedrijf, valt mogelijk onder geen van beide categorieën: dan moet het risico per geval worden beoordeeld (artikel 35 AVG).',
      },
      fonte: FONTE_CNIL_AIPD,
    },
    {
      voce: {
        it: 'Conservazione limitata dei dati di localizzazione',
        en: 'Limited retention of location data',
        de: 'Begrenzte Speicherung der Standortdaten',
        fr: 'Conservation limitée des données de localisation',
        es: 'Conservación limitada de los datos de localización',
        pt: "Conservação limitada dos dados de localização",
        da: 'Begrænset opbevaring af lokaliseringsdata',
        nl: 'Beperkte bewaring van locatiegegevens',
      },
      risposta: 'si',
      dettaglio: {
        it: "La CNIL indica di regola una conservazione non oltre due mesi. Si arriva a un anno se i dati servono a ottimizzare i giri o a provare gli interventi svolti, quando la prova non si può dare in altro modo, e a cinque anni se servono al controllo dell'orario di lavoro.",
        en: 'As a rule the CNIL indicates retention of no more than two months. It can be one year if the data is used to optimise rounds or to prove the work carried out, when that proof cannot be given otherwise, and five years if it is used to monitor working time.',
        de: 'Die CNIL nennt in der Regel eine Speicherdauer von höchstens zwei Monaten. Ein Jahr ist möglich, wenn die Daten der Tourenoptimierung oder dem Nachweis erbrachter Einsätze dienen und dieser Nachweis nicht anders erbracht werden kann, und fünf Jahre, wenn sie der Kontrolle der Arbeitszeit dienen.',
        fr: 'En principe, la CNIL indique une conservation de deux mois au plus. Elle peut aller jusqu’à un an lorsque les données servent à optimiser les tournées ou à prouver les interventions effectuées, si cette preuve ne peut être apportée autrement, et jusqu’à cinq ans lorsqu’elles servent au suivi du temps de travail.',
        es: 'La CNIL indica como regla una conservación no superior a dos meses. Puede llegar a un año si los datos sirven para optimizar las rutas o para probar las intervenciones realizadas, cuando esa prueba no pueda aportarse de otro modo, y a cinco años si sirven para el control del tiempo de trabajo.',
        pt: "A CNIL indica, por regra, uma conservação não superior a dois meses. Pode chegar a um ano se os dados servirem para otimizar os percursos ou para provar as intervenções realizadas, quando essa prova não possa ser feita de outra forma, e a cinco anos se servirem para o controlo do tempo de trabalho.",
        da: 'CNIL angiver som hovedregel en opbevaring på højst to måneder. Den kan være et år, hvis dataene bruges til at optimere ruter eller til at dokumentere udført arbejde, når dokumentationen ikke kan gives på anden måde, og fem år, hvis de bruges til at kontrollere arbejdstiden.',
        nl: 'De CNIL noemt als regel een bewaartermijn van ten hoogste twee maanden. Een jaar is mogelijk als de gegevens dienen om routes te optimaliseren of verrichte interventies te bewijzen, wanneer dat bewijs niet anders te leveren is, en vijf jaar als ze dienen voor de controle van de arbeidstijd.',
      },
      fonte: FONTE_CNIL_GEOLOCALIZZAZIONE,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Se l'azienda ha almeno 50 dipendenti, informa e consulta il CSE prima di decidere l'installazione (art. L2312-38).",
        en: 'If the company has at least 50 employees, inform and consult the CSE before deciding on the installation (art. L2312-38).',
        de: 'Hat das Unternehmen mindestens 50 Beschäftigte, informieren und konsultieren Sie den CSE, bevor Sie über die Installation entscheiden (Art. L2312-38).',
        fr: 'Si l’entreprise compte au moins 50 salariés, informez et consultez le CSE avant de décider l’installation (art. L2312-38).',
        es: 'Si la empresa tiene al menos 50 empleados, informa y consulta al CSE antes de decidir la instalación (art. L2312-38).',
        pt: "Se a empresa tiver, pelo menos, 50 trabalhadores, informe e consulte o CSE antes de decidir a instalação (art. L2312-38).",
        da: 'Hvis virksomheden har mindst 50 medarbejdere, skal du informere og høre CSE, før du beslutter installationen (art. L2312-38).',
        nl: 'Als de onderneming ten minste 50 werknemers heeft, informeer en raadpleeg de CSE voordat u over de installatie beslist (art. L2312-38).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa individualmente e preventivamente ogni lavoratore (art. L1222-4, art. 13 GDPR).',
        en: 'Inform each worker individually and in advance (art. L1222-4, art. 13 GDPR).',
        de: 'Informieren Sie jeden Beschäftigten individuell und im Voraus (Art. L1222-4, Art. 13 DSGVO).',
        fr: 'Informez individuellement et préalablement chaque salarié (art. L1222-4, art. 13 RGPD).',
        es: 'Informa individual y previamente a cada trabajador (art. L1222-4, art. 13 RGPD).',
        pt: "Informe individual e previamente cada trabalhador (art. L1222-4, art. 13.º do RGPD).",
        da: 'Informér hver medarbejder individuelt og på forhånd (art. L1222-4, art. 13 i GDPR).',
        nl: 'Informeer elke werknemer individueel en vooraf (art. L1222-4, art. 13 AVG).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Verifica la sussidiarietà: la geolocalizzazione non è ammessa se esiste già un mezzo meno intrusivo per la stessa finalità.',
        en: 'Check subsidiarity: geolocation is not allowed if a less intrusive means already exists for the same purpose.',
        de: 'Prüfen Sie die Subsidiarität: Geolokalisierung ist nicht zulässig, wenn für denselben Zweck bereits ein weniger eingriffsintensives Mittel besteht.',
        fr: 'Vérifiez la subsidiarité : la géolocalisation n’est pas admise s’il existe déjà un moyen moins intrusif pour la même finalité.',
        es: 'Verifica la subsidiariedad: la geolocalización no se admite si ya existe un medio menos intrusivo para la misma finalidad.',
        pt: "Verifique a subsidiariedade: a geolocalização não é admitida se já existir um meio menos intrusivo para a mesma finalidade.",
        da: 'Kontrollér subsidiariteten: geolokalisering er ikke tilladt, hvis der allerede findes et mindre indgribende middel til samme formål.',
        nl: 'Controleer de subsidiariteit: geolocatie is niet toegestaan als er voor hetzelfde doel al een minder ingrijpend middel bestaat.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (AIPD) se il trattamento sorveglia in modo costante o tratta localizzazione su larga scala.",
        en: 'Carry out the impact assessment (DPIA) if the processing monitors constantly or processes location data on a large scale.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) durch, wenn die Verarbeitung ständig überwacht oder Standortdaten in großem Umfang verarbeitet.',
        fr: 'Réalisez l’analyse d’impact (AIPD) si le traitement surveille de manière constante ou traite des données de localisation à grande échelle.',
        es: 'Realiza la evaluación de impacto (EIPD) si el tratamiento vigila de forma constante o trata datos de localización a gran escala.',
        pt: "Realize a avaliação de impacto (AIPD) se o tratamento vigiar de forma constante ou tratar dados de localização em grande escala.",
        da: 'Gennemfør konsekvensanalysen (AIPD), hvis behandlingen overvåger konstant eller behandler lokaliseringsdata i stor skala.',
        nl: 'Voer de effectbeoordeling (DPIA) uit als de verwerking voortdurend controleert of locatiegegevens op grote schaal verwerkt.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente tracciamento permanente, disattivazione fuori orario, conservazione limitata.',
        en: 'Configure the system: no permanent tracking, switch-off outside working hours, limited retention.',
        de: 'Konfigurieren Sie das System: keine ständige Ortung, Abschaltung außerhalb der Arbeitszeit, begrenzte Speicherung.',
        fr: 'Configurez le système : pas de suivi permanent, désactivation hors temps de travail, conservation limitée.',
        es: 'Configura el sistema: sin seguimiento permanente, desactivación fuera del horario, conservación limitada.',
        pt: "Configure o sistema: sem seguimento permanente, desativação fora do horário, conservação limitada.",
        da: 'Konfigurér systemet: ingen permanent sporing, afbrydelse uden for arbejdstiden, begrænset opbevaring.',
        nl: 'Configureer het systeem: geen permanente tracering, uitschakeling buiten werktijd, beperkte bewaring.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Tieni aggiornato il registro dei trattamenti (responsabilizzazione, non più dichiarazione preventiva).',
        en: 'Keep the record of processing activities up to date (accountability, no longer a prior declaration).',
        de: 'Halten Sie das Verzeichnis der Verarbeitungstätigkeiten aktuell (Rechenschaftspflicht, keine vorherige Meldung mehr).',
        fr: 'Tenez à jour le registre des traitements (responsabilisation, plus de déclaration préalable).',
        es: 'Mantén actualizado el registro de las actividades de tratamiento (responsabilidad proactiva, ya no declaración previa).',
        pt: "Mantenha atualizado o registo das atividades de tratamento (responsabilização, já não declaração prévia).",
        da: 'Hold fortegnelsen over behandlingsaktiviteter opdateret (ansvarlighed, ikke længere en forudgående anmeldelse).',
        nl: 'Houd het register van verwerkingsactiviteiten actueel (verantwoording, geen voorafgaande aangifte meer).',
      },
    },
    {
      passo: 7,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'Si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la información entregada antes no basta.',
        pt: "Se mudar de sistema ou de software de monitorização, atualize e entregue de novo a informação e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, nos casos em que a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue anteriormente não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsinformationen igen og tjekke, om du igen skal informere eller høre medarbejderrepræsentanterne, hvor loven kræver det. Ofte skifter leverandøren (databehandleren), de indsamlede data og metoderne: den information, der blev udleveret tidligere, er ikke nok.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'CNIL, presentare un reclamo',
      portale: FONTE_CNIL_RECLAMO.url,
      urlFonte: FONTE_CNIL_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '175.000 €',
      en: 'EUR 175,000',
      de: '175.000 EUR',
      fr: '175 000 EUR',
      es: '175.000 €',
      pt: "175.000 €",
      da: '175.000 €',
      nl: '175.000 EUR',
    },
    casoCitato: {
      it: "CNIL contro UBEEQO International, 7 luglio 2022: geolocalizzazione quasi permanente in violazione della minimizzazione, della durata di conservazione e dell'obbligo di informazione. Riguardava i veicoli a noleggio (clienti), non i dipendenti in senso stretto, ma è la sanzione francese più importante sulla geolocalizzazione continua eccessiva. Nel novembre 2023 la CNIL ha inoltre sanzionato più datori per la geolocalizzazione continua dei veicoli dei dipendenti senza possibilità di sospensione durante le pause.",
      en: 'CNIL v. UBEEQO International, 7 July 2022: near-permanent geolocation in breach of data minimisation, the retention period and the information obligation. It concerned rental vehicles (customers), not employees in the strict sense, but it is the French landmark fine on excessive continuous geolocation. In November 2023 the CNIL also fined several employers for the continuous geolocation of employees\' vehicles without the possibility of suspension during breaks.',
      de: 'CNIL gegen UBEEQO International, 7. Juli 2022: nahezu permanente Geolokalisierung unter Verstoß gegen die Datenminimierung, die Speicherdauer und die Informationspflicht. Es ging um Mietfahrzeuge (Kunden), nicht um Beschäftigte im engeren Sinne, doch es ist das französische Leiturteil zur übermäßigen kontinuierlichen Geolokalisierung. Im November 2023 verhängte die CNIL zudem gegen mehrere Arbeitgeber Bußgelder wegen der kontinuierlichen Geolokalisierung der Fahrzeuge der Beschäftigten ohne Möglichkeit der Aussetzung während der Pausen.',
      fr: 'CNIL contre UBEEQO International, 7 juillet 2022 : géolocalisation quasi permanente en violation de la minimisation, de la durée de conservation et de l’obligation d’information. Cela concernait des véhicules de location (clients), non les salariés au sens strict, mais c’est la sanction phare française sur la géolocalisation continue excessive. En novembre 2023, la CNIL a en outre sanctionné plusieurs employeurs pour la géolocalisation continue des véhicules des salariés sans possibilité de suspension pendant les pauses.',
      es: 'CNIL contra UBEEQO International, 7 de julio de 2022: geolocalización casi permanente en infracción de la minimización, el plazo de conservación y la obligación de información. Afectaba a vehículos de alquiler (clientes), no a los empleados en sentido estricto, pero es la sanción de referencia francesa sobre la geolocalización continua excesiva. En noviembre de 2023 la CNIL sancionó además a varios empleadores por la geolocalización continua de los vehículos de los empleados sin posibilidad de suspensión durante las pausas.',
      pt: "CNIL contra UBEEQO International, 7 de julho de 2022: geolocalização quase permanente, em violação da minimização, do prazo de conservação e da obrigação de informação. Dizia respeito a veículos de aluguer (clientes), não a trabalhadores em sentido estrito, mas é a sanção francesa de referência sobre a geolocalização contínua excessiva. Em novembro de 2023, a CNIL sancionou ainda vários empregadores pela geolocalização contínua dos veículos dos trabalhadores, sem possibilidade de suspensão durante as pausas.",
      da: 'CNIL mod UBEEQO International, 7. juli 2022: næsten permanent geolokalisering i strid med dataminimering, opbevaringsperioden og oplysningspligten. Sagen drejede sig om udlejningskøretøjer (kunder), ikke om medarbejdere i streng forstand, men det er den franske hovedafgørelse om overdreven kontinuerlig geolokalisering. I november 2023 idømte CNIL desuden flere arbejdsgivere bøder for kontinuerlig geolokalisering af medarbejdernes køretøjer uden mulighed for at afbryde den under pauser.',
      nl: 'CNIL tegen UBEEQO International, 7 juli 2022: bijna permanente geolocatie in strijd met de minimalisering, de bewaartermijn en de informatieplicht. Het betrof huurvoertuigen (klanten), niet de werknemers in strikte zin, maar het is de Franse toonaangevende boete inzake buitensporige continue geolocatie. In november 2023 beboette de CNIL bovendien meerdere werkgevers voor de continue geolocatie van de voertuigen van werknemers zonder mogelijkheid tot opschorting tijdens de pauzes.',
    },
    urlFonte: FONTE_EDPB_UBEEQO.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_L2312_38,
    FONTE_L1222_4,
    FONTE_CNIL_GEOLOCALIZZAZIONE,
    FONTE_CNIL_AIPD,
    FONTE_CNIL_ABOLIZIONE_FORMALITA,
    FONTE_CNIL_SANZIONI_2025,
    FONTE_EDPB_UBEEQO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
