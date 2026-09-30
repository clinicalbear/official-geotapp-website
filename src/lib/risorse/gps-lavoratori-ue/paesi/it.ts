/**
 * Scheda-paese Italia per la risorsa "GPS sui lavoratori in UE".
 *
 * Fonte unica dei contenuti: docs/risorse/osservatorio-garante-gps-dipendenti-2026.md
 * (Osservatorio sui provvedimenti del Garante Privacy, dati verificati alla fonte
 * primaria garanteprivacy.it). Nessun numero, URL o autorità è inventato qui:
 * ogni valore proviene da quel documento.
 *
 * NOTA per la pagina (Task successivo): il download di `modelloPdf.url` va
 * collegato alla cattura lead-magnet esistente (leadMagnet 'informativa-gps',
 * MailerLite). Il file PDF è in public/downloads/.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate nel documento (sezione "Fonti").
const FONTE_PROVV_AUTOTRASPORTI = {
  titolo: 'Garante Privacy, Provvedimento n. 7 del 16 gennaio 2025 (doc-web 10112287)',
  url: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10112287',
};
const FONTE_PROVV_ARSAC = {
  titolo:
    'Garante Privacy, Provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), rimosso temporaneamente dal sito in ottemperanza alla sentenza del Tribunale di Cosenza n. 972 del 1° luglio 2026 (opposizione accolta)',
  url: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10128005',
};
const FONTE_SENT_COSENZA_STAMPA = {
  titolo:
    'AGI Lavoro, «Lavoro agile e geolocalizzazione: sentenza del Tribunale di Cosenza» (sentenza n. 972 del 1° luglio 2026; il testo della sentenza non è stato reperito in fonte ufficiale)',
  url: 'https://www.giuslavoristi.it/articolo/2073/lavoro-agile-e-geolocalizzazione-sentenza-del-tribunale-di-cosenza',
  nonUfficiale: 'stampa' as const,
};
const FONTE_SENT_COSENZA_STUDIO = {
  titolo:
    'Avvocati Associati, commento alla sentenza Trib. Cosenza n. 972/2026 (22/09/2026), con passi citati',
  url: 'https://www.avvocati-associati.eu/smart-working-controllo-presenza-sentenza-cosenza-2026/',
  nonUfficiale: 'studio-legale' as const,
};
const FONTE_PROVV_PIONEER = {
  titolo:
    'Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025, n. 10213711 (Pioneer Hi-Bred Italia Sementi)',
  url: 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10213711',
};
const FONTE_PROVV_ATS_LIGURIA = {
  titolo:
    'Garante Privacy, Provvedimento n. 382 del 28 maggio 2026, n. 10259916 (Azienda di Tutela della Salute per la Liguria)',
  url: 'https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10259916',
};
const FONTE_STATUTO_ART4 = {
  titolo: 'Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4',
  url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1970-05-20;300',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR), artt. 5, 13, 25, 35, 88',
  url: 'https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32016R0679',
};

export const italia: SchedaPaese = {
  codiceISO: 'IT',
  slugCanonico: 'italia',
  nome: 'Italia',
  nomi: {
    it: 'Italia',
    en: 'Italy',
    'en-us': 'Italy',
    'en-gb': 'Italy',
    'en-au': 'Italy',
    'en-ie': 'Italy',
    'en-ca': 'Italy',
    de: 'Italien',
    nl: 'Italië',
    fr: 'Italie',
    es: 'Italia',
    pt: 'Itália',
    da: 'Italien',
    sv: 'Italien',
    nb: 'Italia',
    ru: 'Италия',
  },
  bandiera: '🇮🇹',
  federale: false,
  stato: 'completo',

  autoritaCompetente: {
    ente: {
      it: 'Garante per la protezione dei dati personali',
      en: 'Garante per la protezione dei dati personali (Italian Data Protection Authority)',
      de: 'Garante per la protezione dei dati personali (italienische Datenschutzbehörde)',
      fr: 'Garante per la protezione dei dati personali (autorité italienne de protection des données)',
      es: 'Garante per la protezione dei dati personali (autoridad italiana de protección de datos)',
      nl: 'Garante per la protezione dei dati personali (Italiaanse gegevensbeschermingsautoriteit)',
      pt: 'Garante per la protezione dei dati personali (autoridade italiana de proteção de dados)',
      da: 'Garante per la protezione dei dati personali (italiensk databeskyttelsesmyndighed)',
      sv: 'Garante per la protezione dei dati personali (italienska dataskyddsmyndigheten)',
      nb: 'Garante per la protezione dei dati personali (italiensk datatilsyn)',
      ru: 'Garante per la protezione dei dati personali (итальянский орган по защите данных)',
    },
    urlFonte: 'https://www.garanteprivacy.it',
    verificatoIl: '2026-09-30',
  },

  checklist: [
    {
      voce: {
        it: "Accordo sindacale (RSA/RSU) o autorizzazione dell'Ispettorato del Lavoro, prima di installare il sistema",
        en: 'Trade union agreement (RSA/RSU) or authorisation from the Labour Inspectorate, before installing the system',
        de: 'Gewerkschaftsvereinbarung (RSA/RSU) oder Genehmigung der Arbeitsaufsichtsbehörde, bevor das System installiert wird',
        fr: 'Accord syndical (RSA/RSU) ou autorisation de l’Inspection du travail, avant d’installer le système',
        es: 'Acuerdo sindical (RSA/RSU) o autorización de la Inspección de Trabajo, antes de instalar el sistema',
        nl: 'Vakbondsovereenkomst (RSA/RSU) of toestemming van de Arbeidsinspectie, voordat het systeem wordt geïnstalleerd',
      },
      risposta: 'dipende',
      dettaglio: {
        it: 'Il GPS è di norma uno strumento da cui può derivare anche un controllo a distanza dei lavoratori. L’art. 4, comma 1, dello Statuto dei Lavoratori ne consente l’uso solo per esigenze organizzative e produttive, per la sicurezza del lavoro e per la tutela del patrimonio aziendale, e solo dopo accordo collettivo con RSU o RSA (per le imprese su più province o regioni, con le associazioni sindacali comparativamente più rappresentative sul piano nazionale) oppure, in mancanza di accordo, dopo autorizzazione della sede territoriale dell’Ispettorato nazionale del lavoro (o della sede centrale). Il comma 2 esclude però gli strumenti usati dal lavoratore per rendere la prestazione e gli strumenti di registrazione degli accessi e delle presenze: se il sistema rientra davvero lì, accordo o autorizzazione non sono richiesti. La qualificazione va valutata prima di installare. Usarlo in modo difforme da quanto autorizzato è la strada più rapida verso la sanzione.',
        en: 'GPS is normally a tool that can also lead to remote monitoring of workers. Article 4(1) of the Workers\' Statute allows it only for organisational and production needs, workplace safety and the protection of company assets, and only after a collective agreement with the RSU or RSA (for companies spread over several provinces or regions, with the comparatively most representative national trade unions) or, failing an agreement, after authorisation from the territorial office of the National Labour Inspectorate (or its central office). Paragraph 2, however, excludes tools used by the worker to perform the work and tools for recording access and attendance: if the system genuinely falls there, no agreement or authorisation is required. The classification must be assessed before installing. Using the system differently from what was authorised is the fastest route to a penalty.',
        de: 'GPS ist in der Regel ein Instrument, das auch zu einer Fernüberwachung der Beschäftigten führen kann. Artikel 4 Absatz 1 des Arbeitnehmerstatuts erlaubt es nur für organisatorische und produktionsbedingte Erfordernisse, die Arbeitssicherheit und den Schutz des Betriebsvermögens, und nur nach einer kollektiven Vereinbarung mit der RSU oder RSA (bei Unternehmen in mehreren Provinzen oder Regionen mit den auf nationaler Ebene repräsentativsten Gewerkschaften) oder, mangels Vereinbarung, nach Genehmigung der territorialen Stelle der nationalen Arbeitsaufsichtsbehörde (oder ihrer Zentralstelle). Absatz 2 nimmt jedoch Werkzeuge aus, die die Beschäftigten zur Erbringung ihrer Arbeitsleistung nutzen, sowie Systeme zur Erfassung von Zutritt und Anwesenheit: fällt das System tatsächlich darunter, sind weder Vereinbarung noch Genehmigung erforderlich. Die Einordnung ist vor der Installation zu prüfen. Es anders zu nutzen als genehmigt, ist der schnellste Weg zur Sanktion.',
        fr: 'Le GPS est en principe un outil dont peut aussi découler un contrôle à distance des travailleurs. L’article 4, alinéa 1, du Statut des travailleurs ne l’autorise que pour des besoins d’organisation et de production, la sécurité du travail et la protection du patrimoine de l’entreprise, et seulement après un accord collectif avec la RSU ou la RSA (pour les entreprises implantées dans plusieurs provinces ou régions, avec les syndicats comparativement les plus représentatifs au niveau national) ou, à défaut d’accord, après autorisation du bureau territorial de l’Inspection nationale du travail (ou de son bureau central). L’alinéa 2 exclut toutefois les outils utilisés par le travailleur pour exécuter sa prestation et les outils d’enregistrement des accès et des présences : si le système relève réellement de cette catégorie, ni accord ni autorisation ne sont requis. La qualification doit être appréciée avant l’installation. L’utiliser de façon différente de ce qui a été autorisé est le chemin le plus rapide vers la sanction.',
        es: 'El GPS es, por lo general, una herramienta de la que puede derivar también un control a distancia de los trabajadores. El artículo 4, apartado 1, del Estatuto de los Trabajadores solo lo permite para necesidades organizativas y productivas, la seguridad en el trabajo y la protección del patrimonio de la empresa, y solo tras un acuerdo colectivo con la RSU o la RSA (en las empresas con centros en varias provincias o regiones, con los sindicatos comparativamente más representativos a nivel nacional) o, a falta de acuerdo, tras la autorización de la sede territorial de la Inspección Nacional de Trabajo (o de su sede central). El apartado 2 excluye, sin embargo, las herramientas que el trabajador usa para prestar su trabajo y los instrumentos de registro de accesos y presencias: si el sistema entra realmente ahí, no se requiere acuerdo ni autorización. La calificación debe valorarse antes de instalar. Usarlo de forma distinta a lo autorizado es el camino más rápido hacia la sanción.',
        nl: 'GPS is in de regel een instrument waaruit ook toezicht op afstand van werknemers kan voortvloeien. Artikel 4, lid 1, van het Werknemersstatuut staat dit alleen toe voor organisatorische en productiebehoeften, veiligheid op het werk en bescherming van het bedrijfsvermogen, en alleen na een collectieve overeenkomst met de RSU of RSA (bij bedrijven verspreid over meerdere provincies of regio\'s: met de landelijk meest representatieve vakbonden) of, bij gebrek aan overeenkomst, na toestemming van het territoriale kantoor van de nationale Arbeidsinspectie (of het hoofdkantoor). Lid 2 sluit echter middelen uit die de werknemer gebruikt om zijn werk te verrichten en middelen voor registratie van toegang en aanwezigheid: valt het systeem daar echt onder, dan is geen overeenkomst of toestemming nodig. De kwalificatie moet vóór de installatie worden beoordeeld. Het op een andere manier gebruiken dan toegestaan is de snelste weg naar een sanctie.',
      },
      fonte: FONTE_STATUTO_ART4,
    },
    {
      voce: {
        it: 'Rilevazione della posizione solo al timbro, senza monitoraggio continuo',
        en: 'Location recorded only at clock-in and clock-out, with no continuous monitoring',
        de: 'Standorterfassung nur beim Ein- und Ausstempeln, ohne fortlaufende Überwachung',
        fr: 'Position relevée uniquement au pointage, sans suivi continu',
        es: 'Posición registrada solo al fichar, sin seguimiento continuo',
        nl: 'Locatie alleen bij het in- en uitklokken vastgelegd, zonder doorlopende monitoring',
      },
      risposta: 'si',
      dettaglio: {
        it: "È il confine che separa la registrazione delle presenze dal controllo a distanza. Il Tribunale di Cosenza, con sentenza n. 972 del 1° luglio 2026, ha accolto l’opposizione contro il provvedimento del Garante n. 135 del 13 marzo 2025, che aveva sanzionato con 50.000 euro una pubblica amministrazione per un’app di timbratura nel lavoro agile: il Garante ha rimosso temporaneamente il provvedimento dal proprio sito. Secondo le cronache della decisione, per il giudice è decisivo che la posizione sia acquisita soltanto al momento della timbratura, senza consentire un monitoraggio continuo degli spostamenti: così configurato il sistema rientra fra gli strumenti di registrazione degli accessi e delle presenze dell’art. 4, comma 2. Attenzione: è una sentenza di primo grado e non una pronuncia della Cassazione, e non elimina gli altri obblighi. Nei passi riportati da un commento di uno studio legale, la sentenza descrive un sistema che rileva coordinate, giorno e orario «solo al momento della timbratura» e lo accosta agli strumenti dell’art. 4, comma 2; nel caso l’ente aveva comunque adottato anche le garanzie del comma 1 (accordo sindacale). All’opposto, rilevare la posizione ogni sessanta secondi con visualizzazione in tempo reale è costato una sanzione a un’azienda sanitaria nel maggio 2026.",
        en: 'This is the line between recording attendance and remote monitoring. The Court of Cosenza, judgment no. 972 of 1 July 2026, upheld the challenge to the Garante decision no. 135 of 13 March 2025, which had fined a public administration EUR 50,000 over a clock-in app used for remote work: the Garante has temporarily removed that decision from its website. According to reports of the ruling, the decisive point for the judge is that the position is acquired only at the moment of clocking, without allowing continuous tracking of movements: configured that way the system falls among the access and attendance recording tools of Article 4, paragraph 2. Note that this is a first-instance ruling, not a Supreme Court decision, and it does not remove the other obligations. In the passages reported by a law firm commentary, the ruling describes a system that records coordinates, day and time “only at the moment of clocking” and likens it to the tools of Article 4, paragraph 2; in that case the body had in any event also adopted the safeguards of paragraph 1 (trade union agreement). At the opposite end, recording the position every sixty seconds with real-time display cost a health authority a fine in May 2026.',
        de: 'Das ist die Grenze zwischen Anwesenheitserfassung und Fernüberwachung. Das Gericht von Cosenza hat mit Urteil Nr. 972 vom 1. Juli 2026 dem Einspruch gegen den Bescheid Nr. 135 der Garante vom 13. März 2025 stattgegeben, mit dem eine öffentliche Verwaltung wegen einer Stempel-App im Homeoffice mit 50.000 Euro belegt worden war: die Garante hat den Bescheid vorübergehend von ihrer Website genommen. Nach den Berichten über die Entscheidung ist für das Gericht entscheidend, dass der Standort nur im Moment des Stempelns erfasst wird, ohne eine fortlaufende Verfolgung der Bewegungen zu ermöglichen: so konfiguriert zählt das System zu den Zugangs- und Anwesenheitserfassungssystemen nach Artikel 4 Absatz 2. Zu beachten: es handelt sich um ein erstinstanzliches Urteil, nicht um eine Entscheidung des Kassationshofs, und die übrigen Pflichten bleiben bestehen. In den von einem Kanzleikommentar wiedergegebenen Passagen beschreibt das Urteil ein System, das Koordinaten, Tag und Uhrzeit „nur im Moment des Stempelns“ erfasst, und stellt es den Instrumenten des Artikels 4 Absatz 2 gleich; im Fall hatte die Behörde ohnehin auch die Garantien des Absatzes 1 (Gewerkschaftsvereinbarung) eingehalten. Umgekehrt kostete die Erfassung der Position im Sechzig-Sekunden-Takt mit Echtzeitanzeige eine Gesundheitsbehörde im Mai 2026 ein Bußgeld.',
        fr: 'C’est la frontière entre l’enregistrement des présences et le contrôle à distance. Le Tribunal de Cosenza, par le jugement n° 972 du 1er juillet 2026, a fait droit à l’opposition contre la décision du Garante n° 135 du 13 mars 2025, qui avait sanctionné de 50 000 euros une administration publique pour une application de pointage en télétravail : le Garante a temporairement retiré cette décision de son site. D’après les comptes rendus de la décision, le point décisif pour le juge est que la position soit acquise uniquement au moment du pointage, sans permettre un suivi continu des déplacements : ainsi configuré, le système relève des outils d’enregistrement des accès et des présences de l’article 4, paragraphe 2. Attention, il s’agit d’un jugement de première instance et non d’un arrêt de la Cour de cassation, et les autres obligations demeurent. Dans les passages rapportés par le commentaire d’un cabinet d’avocats, le jugement décrit un système qui relève les coordonnées, le jour et l’heure « uniquement au moment du pointage » et l’assimile aux outils de l’article 4, alinéa 2 ; dans cette affaire, l’entité avait de toute façon adopté aussi les garanties de l’alinéa 1 (accord syndical). À l’inverse, relever la position toutes les soixante secondes avec affichage en temps réel a valu une sanction à une agence de santé en mai 2026.',
        es: 'Es la frontera entre registrar la presencia y controlar a distancia. El Tribunal de Cosenza, sentencia n.º 972 de 1 de julio de 2026, estimó la oposición contra la resolución del Garante n.º 135 de 13 de marzo de 2025, que había sancionado con 50.000 euros a una administración pública por una aplicación de fichaje en trabajo a distancia: el Garante ha retirado temporalmente esa resolución de su web. Según las crónicas de la decisión, lo decisivo para el juez es que la posición se obtenga solo en el momento de fichar, sin permitir un seguimiento continuo de los desplazamientos: así configurado el sistema entra entre los instrumentos de registro de accesos y presencias del artículo 4, apartado 2. Ojo, es una sentencia de primera instancia y no del Tribunal Supremo, y no elimina las demás obligaciones. En los pasajes recogidos por el comentario de un despacho de abogados, la sentencia describe un sistema que registra coordenadas, día y hora «solo en el momento de fichar» y lo equipara a los instrumentos del artículo 4, apartado 2; en el caso, la entidad había adoptado además las garantías del apartado 1 (acuerdo sindical). En el extremo opuesto, registrar la posición cada sesenta segundos con visualización instantánea en pantalla le costó una sanción a una agencia sanitaria en mayo de 2026.',
        nl: 'Dit is de grens tussen aanwezigheidsregistratie en toezicht op afstand. De rechtbank van Cosenza heeft met vonnis nr. 972 van 1 juli 2026 het verzet tegen besluit nr. 135 van 13 maart 2025 van de Garante toegewezen, waarmee een overheidsinstantie 50.000 euro boete kreeg voor een klok-app bij thuiswerken: de Garante heeft dat besluit tijdelijk van haar website gehaald. Volgens de berichtgeving over de uitspraak is voor de rechter beslissend dat de positie alleen op het moment van klokken wordt vastgelegd, zonder doorlopende volging van verplaatsingen: zo ingericht valt het systeem onder de toegangs- en aanwezigheidsregistratie van artikel 4, lid 2. Let op: het is een uitspraak in eerste aanleg, geen arrest van het hooggerechtshof, en de overige verplichtingen blijven gelden. In de passages die een commentaar van een advocatenkantoor weergeeft, beschrijft het vonnis een systeem dat coördinaten, dag en tijdstip “alleen op het moment van klokken” vastlegt en het gelijkstelt met de middelen van artikel 4, lid 2; in die zaak had de instantie hoe dan ook ook de waarborgen van lid 1 (vakbondsakkoord) genomen. Aan de andere kant kostte het vastleggen van de positie elke zestig seconden met realtime weergave een zorginstelling in mei 2026 een boete.',
      },
      fonte: FONTE_PROVV_ARSAC,
    },
    {
      voce: {
        it: 'Informativa scritta ai lavoratori, completa e veritiera (art. 13 GDPR)',
        en: 'Written privacy notice to workers, complete and truthful (Article 13 GDPR)',
        de: 'Schriftliche Datenschutzinformation für die Beschäftigten, vollständig und wahrheitsgemäß (Artikel 13 DSGVO)',
        fr: 'Information écrite aux travailleurs, complète et véridique (article 13 RGPD)',
        es: 'Información escrita a los trabajadores, completa y veraz (artículo 13 RGPD)',
        nl: 'Schriftelijke privacyverklaring aan werknemers, volledig en waarheidsgetrouw (artikel 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il lavoratore deve sapere in modo chiaro e veritiero che viene geolocalizzato, come, quando e perché (art. 13 GDPR). Nel caso degli autotrasporti l’informativa c’era ma piena di incongruenze e refusi: per il Garante è come non averla.',
        en: 'The worker must know clearly and truthfully that they are being geolocated, how, when and why (Article 13 GDPR). In the road haulage case the notice existed but was full of inconsistencies and typos: for the Garante that is the same as not having one.',
        de: 'Die beschäftigte Person muss klar und wahrheitsgemäß wissen, dass sie geolokalisiert wird, wie, wann und warum (Artikel 13 DSGVO). Im Fall des Güterkraftverkehrs gab es die Information zwar, sie war aber voller Widersprüche und Tippfehler: für die Garante ist das gleichbedeutend damit, keine zu haben.',
        fr: 'Le travailleur doit savoir de manière claire et véridique qu’il est géolocalisé, comment, quand et pourquoi (article 13 RGPD). Dans l’affaire du transport routier, l’information existait mais était pleine d’incohérences et de fautes de frappe : pour le Garante, c’est comme ne pas en avoir.',
        es: 'El trabajador debe saber de forma clara y veraz que está siendo geolocalizado, cómo, cuándo y por qué (artículo 13 RGPD). En el caso del transporte por carretera la información existía, pero estaba llena de incongruencias y erratas: para el Garante es como no tenerla.',
        nl: 'De werknemer moet duidelijk en waarheidsgetrouw weten dat hij wordt gelokaliseerd, hoe, wanneer en waarom (artikel 13 AVG). In de zaak van het wegtransport bestond de verklaring wel, maar zat ze vol tegenstrijdigheden en typefouten: voor de Garante staat dat gelijk aan er geen hebben.',
      },
      fonte: FONTE_PROVV_AUTOTRASPORTI,
    },
    {
      voce: {
        it: 'Divieto di tracciamento continuo: posizione raccolta solo quando serve (minimizzazione)',
        en: 'No continuous tracking: location collected only when needed (data minimisation)',
        de: 'Verbot der dauerhaften Ortung: Standort nur erhoben, wenn es erforderlich ist (Datenminimierung)',
        fr: 'Interdiction du suivi continu : position collectée uniquement quand c’est nécessaire (minimisation)',
        es: 'Prohibición del seguimiento continuo: ubicación recogida solo cuando es necesario (minimización)',
        nl: 'Verbod op continue tracking: locatie alleen verzameld wanneer nodig (minimalisatie)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Seguire il mezzo in modo continuativo, pause comprese, viola il principio di minimizzazione (art. 5 GDPR). La posizione si raccoglie quando serve a una finalità legittima, non per sapere sempre dov’è la persona. Il tracciamento continuo è uno dei motivi della sanzione da 50.000 € all’azienda di autotrasporti.',
        en: 'Following the vehicle continuously, breaks included, violates the data minimisation principle (Article 5 GDPR). Location is collected when it serves a legitimate purpose, not to always know where the person is. Continuous tracking is one of the reasons for the 50,000 EUR penalty against the road haulage company.',
        de: 'Das Fahrzeug fortlaufend zu verfolgen, einschließlich der Pausen, verstößt gegen den Grundsatz der Datenminimierung (Artikel 5 DSGVO). Der Standort wird erhoben, wenn er einem legitimen Zweck dient, nicht um stets zu wissen, wo sich die Person befindet. Die dauerhafte Ortung ist einer der Gründe für die Sanktion von 50.000 EUR gegen das Güterkraftverkehrsunternehmen.',
        fr: 'Suivre le véhicule en continu, pauses comprises, viole le principe de minimisation (article 5 RGPD). La position est collectée quand elle sert une finalité légitime, non pour savoir en permanence où se trouve la personne. Le suivi continu est l’une des raisons de la sanction de 50 000 EUR infligée à l’entreprise de transport routier.',
        es: 'Seguir el vehículo de forma continua, pausas incluidas, viola el principio de minimización (artículo 5 RGPD). La ubicación se recoge cuando sirve a una finalidad legítima, no para saber siempre dónde está la persona. El seguimiento continuo es uno de los motivos de la sanción de 50.000 € a la empresa de transporte por carretera.',
        nl: 'Het voertuig continu volgen, pauzes inbegrepen, schendt het minimalisatiebeginsel (artikel 5 AVG). De locatie wordt verzameld wanneer ze een legitiem doel dient, niet om altijd te weten waar de persoon is. Continue tracking is een van de redenen voor de boete van 50.000 EUR aan het wegtransportbedrijf.',
      },
      fonte: FONTE_PROVV_AUTOTRASPORTI,
    },
    {
      voce: {
        it: 'Uso dei dati per la sola finalità dichiarata; i dati raccolti in modo illecito non si riusano, nemmeno in un procedimento disciplinare',
        en: 'Use of data only for the declared purpose; unlawfully collected data is not reused, not even in disciplinary proceedings',
        de: 'Nutzung der Daten ausschließlich für den erklärten Zweck; rechtswidrig erhobene Daten werden nicht weiterverwendet, auch nicht in Disziplinarverfahren',
        fr: 'Utilisation des données uniquement pour la finalité déclarée ; les données collectées illicitement ne sont pas réutilisées, pas même dans une procédure disciplinaire',
        es: 'Uso de los datos solo para la finalidad declarada; los datos recogidos de forma ilícita no se reutilizan, ni siquiera en un procedimiento disciplinario',
        nl: 'Gebruik van de gegevens uitsluitend voor het verklaarde doel; onrechtmatig verzamelde gegevens worden niet hergebruikt, ook niet in een disciplinaire procedure',
      },
      risposta: 'si',
      dettaglio: {
        it: 'I dati di posizione vanno usati solo per la finalità per cui sono stati raccolti (art. 5 GDPR, limitazione della finalità). L’art. 4, comma 3, dello Statuto consente di usare le informazioni raccolte «a tutti i fini connessi al rapporto di lavoro», anche disciplinari, solo se al lavoratore è stata data adeguata informazione sulle modalità d’uso e sui controlli e se il trattamento rispetta la normativa privacy. Se la raccolta era illecita o sproporzionata, usare quei dati in un procedimento disciplinare è a sua volta illecito: lo ha stabilito il Garante nel caso dell’azienda sanitaria ligure (provv. n. 382/2026). Vale anche per il perimetro della raccolta: nel caso Pioneer (provv. n. 755/2025, telematica sullo stile di guida, senza geolocalizzazione) il punteggio sullo stile di guida veniva calcolato anche sui viaggi privati e fuori orario, e i dati erano accessibili a personale di altre società del gruppo senza designarle responsabili ex art. 28.',
        en: 'Location data must be used only for the purpose for which it was collected (Article 5 GDPR, purpose limitation). Article 4(3) of the Workers\' Statute allows information collected to be used "for all purposes connected with the employment relationship", disciplinary ones included, only if the worker was given adequate information on how the tools are used and how checks are made, and the processing complies with data protection law. If the collection was unlawful or disproportionate, using that data in disciplinary proceedings is itself unlawful: the Garante ruled so in the Ligurian health authority case (decision no. 382/2026). The same applies to the scope of collection: in the Pioneer case (decision no. 755/2025, driving-style telematics, no geolocation) the driving-style score was calculated on private and off-duty trips as well, and staff of other group companies could access the data without being appointed as processors under Article 28.',
        de: 'Standortdaten dürfen nur für den Zweck genutzt werden, für den sie erhoben wurden (Artikel 5 DSGVO, Zweckbindung). Artikel 4 Absatz 3 des Arbeitnehmerstatuts erlaubt es, die erhobenen Informationen «zu allen mit dem Arbeitsverhältnis verbundenen Zwecken» zu verwenden, auch disziplinarischen, aber nur wenn die beschäftigte Person angemessen über die Nutzung der Instrumente und die Kontrollen informiert wurde und die Verarbeitung das Datenschutzrecht einhält. War die Erhebung rechtswidrig oder unverhältnismäßig, ist die Verwendung dieser Daten in einem Disziplinarverfahren ihrerseits rechtswidrig: so entschied die Garante im Fall der ligurischen Gesundheitsbehörde (Bescheid Nr. 382/2026). Das gilt auch für den Umfang der Erhebung: im Fall Pioneer (Bescheid Nr. 755/2025, Fahrstil-Telematik, ohne Geolokalisierung) floss in den Fahrstil-Score auch das private Fahrverhalten außerhalb der Arbeitszeit ein, und Beschäftigte anderer Konzerngesellschaften konnten auf die Daten zugreifen, ohne als Auftragsverarbeiter nach Artikel 28 bestellt zu sein.',
        fr: 'Les données de position ne doivent être utilisées que pour la finalité pour laquelle elles ont été collectées (article 5 RGPD, limitation des finalités). L’article 4, alinéa 3, du Statut des travailleurs permet d’utiliser les informations collectées « à toutes fins liées à la relation de travail », y compris disciplinaires, seulement si le travailleur a reçu une information adéquate sur les modalités d’usage des outils et de réalisation des contrôles et si le traitement respecte la réglementation sur les données personnelles. Si la collecte était illicite ou disproportionnée, utiliser ces données dans une procédure disciplinaire est à son tour illicite : le Garante l’a jugé dans l’affaire de l’agence de santé ligure (décision n° 382/2026). Cela vaut aussi pour le périmètre de la collecte : dans l’affaire Pioneer (décision n° 755/2025, télématique de style de conduite, sans géolocalisation), le score de conduite intégrait également les trajets privés et hors temps de travail, et des personnes d’autres sociétés du groupe accédaient aux données sans avoir été désignées sous-traitants au titre de l’article 28.',
        es: 'Los datos de posición deben usarse solo para la finalidad para la que se recogieron (artículo 5 RGPD, limitación de la finalidad). El artículo 4, apartado 3, del Estatuto de los Trabajadores permite usar la información recogida «para todos los fines relacionados con la relación laboral», también los disciplinarios, solo si se ha dado al trabajador información adecuada sobre el modo de uso de los instrumentos y de realización de los controles y el tratamiento respeta la normativa de protección de datos. Si la recogida fue ilícita o desproporcionada, usar esos datos en un procedimiento disciplinario es a su vez ilícito: así lo estableció el Garante en el caso de la agencia sanitaria de Liguria (resolución n.º 382/2026). Lo mismo vale para el alcance de la recogida: en el caso Pioneer (resolución n.º 755/2025, telemática de estilo de conducción, sin geolocalización) la puntuación sobre el estilo de conducción se calculaba también con los viajes privados y fuera de horario, y personal de otras sociedades del grupo accedía a los datos sin haber sido designado encargado del tratamiento conforme al artículo 28.',
        nl: 'Locatiegegevens mogen alleen worden gebruikt voor het doel waarvoor ze zijn verzameld (artikel 5 AVG, doelbinding). Artikel 4, lid 3, van het Werknemersstatuut staat toe de verzamelde informatie te gebruiken «voor alle doeleinden die met de arbeidsverhouding verband houden», ook disciplinaire, maar alleen als de werknemer adequaat is geïnformeerd over het gebruik van de middelen en de uitvoering van controles en de verwerking voldoet aan de privacywetgeving. Was de verzameling onrechtmatig of disproportioneel, dan is het gebruik van die gegevens in een disciplinaire procedure zelf onrechtmatig: dat besliste de Garante in de zaak van de Ligurische zorginstelling (besluit nr. 382/2026). Hetzelfde geldt voor de reikwijdte van de verzameling: in de zaak Pioneer (besluit nr. 755/2025, rijstijltelematica, zonder geolocatie) werd de rijstijlscore ook op privéritten en buiten werktijd berekend, en medewerkers van andere groepsvennootschappen hadden toegang tot de gegevens zonder als verwerker op grond van artikel 28 te zijn aangewezen.',
      },
      fonte: FONTE_PROVV_ATS_LIGURIA,
    },
    {
      voce: {
        it: "Valutazione d'impatto sulla protezione dei dati (DPIA)",
        en: 'Data Protection Impact Assessment (DPIA)',
        de: 'Datenschutz-Folgenabschätzung (DSFA)',
        fr: 'Analyse d’impact relative à la protection des données (AIPD)',
        es: 'Evaluación de impacto relativa a la protección de datos (EIPD)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Per un trattamento di questo tipo serve la DPIA (art. 35 GDPR), espressamente prevista dall'elenco allegato al Provvedimento del Garante n. 467 dell'11 ottobre 2018 per i sistemi tecnologici nel rapporto di lavoro, geolocalizzazione compresa. Va fatta prima di accendere il sistema: nel caso dell'azienda sanitaria ligure la valutazione mancante è finita tra le contestazioni.",
        en: 'For processing of this kind a DPIA (Article 35 GDPR) is required, expressly listed in the annex to the Garante decision no. 467 of 11 October 2018 for technological systems in the employment relationship, geolocation included. It must be done before switching the system on: in the Ligurian health authority case the missing assessment was among the findings.',
        de: 'Für eine Verarbeitung dieser Art ist eine DSFA (Artikel 35 DSGVO) erforderlich, ausdrücklich in der Anlage zum Bescheid der Garante Nr. 467 vom 11. Oktober 2018 für technische Systeme im Arbeitsverhältnis einschließlich Geolokalisierung aufgeführt. Sie muss vor der Inbetriebnahme erfolgen: im Fall der ligurischen Gesundheitsbehörde zählte die fehlende Bewertung zu den Beanstandungen.',
        fr: 'Pour un traitement de ce type, l’AIPD (article 35 RGPD) est requise et figure expressément dans l’annexe à la décision du Garante n° 467 du 11 octobre 2018 pour les systèmes technologiques dans la relation de travail, géolocalisation comprise. Elle doit être réalisée avant la mise en service : dans l’affaire de l’agence de santé ligure, l’analyse manquante figurait parmi les griefs.',
        es: 'Para un tratamiento de este tipo se requiere la EIPD (artículo 35 RGPD), prevista expresamente en el anexo de la resolución del Garante n.º 467 de 11 de octubre de 2018 para sistemas tecnológicos en la relación laboral, incluida la geolocalización. Debe hacerse antes de encender el sistema: en el caso de la agencia sanitaria de Liguria la evaluación ausente estuvo entre los reproches.',
        nl: 'Voor een verwerking van dit type is een DPIA (artikel 35 AVG) vereist, uitdrukkelijk opgenomen in de bijlage bij besluit nr. 467 van 11 oktober 2018 van de Garante voor technologische systemen in de arbeidsverhouding, geolocatie inbegrepen. Zij moet vóór ingebruikname worden uitgevoerd: in de zaak van de Ligurische zorginstelling behoorde de ontbrekende beoordeling tot de verwijten.',
      },
      fonte: FONTE_PROVV_ATS_LIGURIA,
    },
    {
      voce: {
        it: 'Conservazione dei dati limitata al tempo strettamente necessario',
        en: 'Data retention limited to the strictly necessary period',
        de: 'Speicherung der Daten beschränkt auf die unbedingt erforderliche Zeit',
        fr: 'Conservation des données limitée à la durée strictement nécessaire',
        es: 'Conservación de los datos limitada al tiempo estrictamente necesario',
        nl: 'Bewaring van de gegevens beperkt tot de strikt noodzakelijke termijn',
      },
      risposta: 'si',
      dettaglio: {
        it: 'I dati si tengono per il tempo necessario alla finalità, non "per sicurezza" a tempo indefinito. Nel caso degli autotrasporti la conservazione per 180 giorni ha contribuito alla sanzione.',
        en: 'Data is kept for the time necessary for the purpose, not "just in case" indefinitely. In the road haulage case, retention for 180 days contributed to the penalty.',
        de: 'Die Daten werden für die für den Zweck erforderliche Zeit aufbewahrt, nicht "zur Sicherheit" unbegrenzt. Im Fall des Güterkraftverkehrs trug die Speicherung über 180 Tage zur Sanktion bei.',
        fr: 'Les données sont conservées le temps nécessaire à la finalité, et non « par sécurité » pour une durée indéterminée. Dans l’affaire du transport routier, la conservation pendant 180 jours a contribué à la sanction.',
        es: 'Los datos se conservan durante el tiempo necesario para la finalidad, no «por seguridad» de forma indefinida. En el caso del transporte por carretera, la conservación durante 180 días contribuyó a la sanción.',
        nl: 'De gegevens worden bewaard voor de tijd die nodig is voor het doel, niet "voor de zekerheid" voor onbepaalde tijd. In de zaak van het wegtransport droeg de bewaring gedurende 180 dagen bij aan de sanctie.',
      },
      fonte: FONTE_PROVV_AUTOTRASPORTI,
    },
    {
      voce: {
        it: 'Finalità legittima e dichiarata (organizzativa, di sicurezza, di tutela del patrimonio)',
        en: 'Legitimate and declared purpose (organisational, safety, protection of company assets)',
        de: 'Legitimer und erklärter Zweck (organisatorisch, Sicherheit, Schutz des Betriebsvermögens)',
        fr: 'Finalité légitime et déclarée (organisationnelle, de sécurité, de protection du patrimoine)',
        es: 'Finalidad legítima y declarada (organizativa, de seguridad, de protección del patrimonio)',
        nl: 'Legitiem en verklaard doel (organisatorisch, veiligheid, bescherming van het bedrijfsvermogen)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Esigenze organizzative, di sicurezza o di tutela del patrimonio aziendale sono finalità legittime. Mai "controllare cosa fa il dipendente": è esattamente la cosa che l’art. 4 vieta.',
        en: 'Organisational, safety or company asset protection needs are legitimate purposes. Never "checking what the employee does": that is exactly what Article 4 prohibits.',
        de: 'Organisatorische Erfordernisse, Sicherheit oder der Schutz des Betriebsvermögens sind legitime Zwecke. Niemals "kontrollieren, was die beschäftigte Person tut": genau das verbietet Artikel 4.',
        fr: 'Les besoins d’organisation, de sécurité ou de protection du patrimoine de l’entreprise sont des finalités légitimes. Jamais « contrôler ce que fait le salarié » : c’est exactement ce que l’article 4 interdit.',
        es: 'Las necesidades organizativas, de seguridad o de protección del patrimonio de la empresa son finalidades legítimas. Nunca «controlar lo que hace el empleado»: es exactamente lo que prohíbe el artículo 4.',
        nl: 'Organisatorische behoeften, veiligheid of bescherming van het bedrijfsvermogen zijn legitieme doelen. Nooit "controleren wat de werknemer doet": dat is precies wat artikel 4 verbiedt.',
      },
      fonte: FONTE_STATUTO_ART4,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Se lo strumento rientra nel comma 1 dell’art. 4 (non è solo registrazione delle presenze né strumento di lavoro, comma 2), completa la procedura prima, non dopo: accordo con le rappresentanze sindacali (RSA o RSU) oppure autorizzazione dell’Ispettorato nazionale del lavoro. Senza, sei fuori dal primo minuto.',
        en: 'If the tool falls under Article 4(1) (it is not merely an attendance-recording or work tool, paragraph 2), complete the procedure first, not later: an agreement with the trade union representatives (RSA or RSU) or authorisation from the National Labour Inspectorate. Without it, you are out from the first minute.',
        de: 'Fällt das Instrument unter Artikel 4 Absatz 1 (es ist nicht bloß ein Anwesenheitserfassungs- oder Arbeitsmittel, Absatz 2), schließen Sie das Verfahren vorher ab, nicht danach: eine Vereinbarung mit den Gewerkschaftsvertretungen (RSA oder RSU) oder eine Genehmigung der nationalen Arbeitsaufsichtsbehörde. Ohne sie sind Sie schon ab der ersten Minute außen vor.',
        fr: 'Si l’outil relève de l’article 4, alinéa 1 (il n’est pas seulement un outil d’enregistrement des présences ni un outil de travail, alinéa 2), achevez d’abord la procédure, pas après : un accord avec les représentations syndicales (RSA ou RSU) ou une autorisation de l’Inspection nationale du travail. Sans cela, vous êtes hors-jeu dès la première minute.',
        es: 'Si la herramienta entra en el artículo 4, apartado 1 (no es solo un registro de presencias ni un instrumento de trabajo, apartado 2), completa el procedimiento antes, no después: un acuerdo con las representaciones sindicales (RSA o RSU) o una autorización de la Inspección Nacional de Trabajo. Sin ello, estás fuera desde el primer minuto.',
        nl: 'Valt het middel onder artikel 4, lid 1 (het is niet enkel een aanwezigheidsregistratie of werkmiddel, lid 2), voltooi de procedure dan eerst, niet later: een overeenkomst met de vakbondsvertegenwoordigingen (RSA of RSU) of toestemming van de nationale Arbeidsinspectie. Zonder die bent u vanaf de eerste minuut buitenspel.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Definisci una finalità legittima e dichiarata: esigenze organizzative, di sicurezza, di tutela del patrimonio aziendale. Mai "controllare cosa fa il dipendente".',
        en: 'Define a legitimate and declared purpose: organisational, safety or company asset protection needs. Never "checking what the employee does".',
        de: 'Legen Sie einen legitimen und erklärten Zweck fest: organisatorische Erfordernisse, Sicherheit oder Schutz des Betriebsvermögens. Niemals "kontrollieren, was die beschäftigte Person tut".',
        fr: 'Définissez une finalité légitime et déclarée : besoins d’organisation, de sécurité, de protection du patrimoine de l’entreprise. Jamais « contrôler ce que fait le salarié ».',
        es: 'Define una finalidad legítima y declarada: necesidades organizativas, de seguridad, de protección del patrimonio de la empresa. Nunca «controlar lo que hace el empleado».',
        nl: 'Bepaal een legitiem en verklaard doel: organisatorische behoeften, veiligheid, bescherming van het bedrijfsvermogen. Nooit "controleren wat de werknemer doet".',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Predisponi un’informativa completa e vera ai sensi dell’art. 13 GDPR: senza refusi, senza zone grigie.',
        en: 'Prepare a complete and truthful privacy notice under Article 13 GDPR: no typos, no grey areas.',
        de: 'Erstellen Sie eine vollständige und wahrheitsgemäße Datenschutzinformation nach Artikel 13 DSGVO: ohne Tippfehler, ohne Grauzonen.',
        fr: 'Préparez une information complète et véridique au sens de l’article 13 RGPD : sans fautes de frappe, sans zones grises.',
        es: 'Prepara una información completa y veraz conforme al artículo 13 RGPD: sin erratas, sin zonas grises.',
        nl: 'Stel een volledige en waarheidsgetrouwe privacyverklaring op conform artikel 13 AVG: zonder typefouten, zonder grijze gebieden.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Applica la minimizzazione: raccogli solo i dati che servono, solo quando servono. Niente tracciamento durante le pause, prevedi la possibilità di spegnimento.',
        en: 'Apply data minimisation: collect only the data you need, only when you need it. No tracking during breaks, provide the ability to switch it off.',
        de: 'Wenden Sie die Datenminimierung an: erheben Sie nur die Daten, die Sie benötigen, und nur dann, wenn Sie sie benötigen. Keine Ortung während der Pausen, sehen Sie eine Abschaltmöglichkeit vor.',
        fr: 'Appliquez la minimisation : ne collectez que les données nécessaires, uniquement quand elles sont nécessaires. Pas de suivi pendant les pauses, prévoyez la possibilité de désactivation.',
        es: 'Aplica la minimización: recoge solo los datos que necesitas, solo cuando los necesitas. Sin seguimiento durante las pausas, prevé la posibilidad de apagado.',
        nl: 'Pas minimalisatie toe: verzamel alleen de gegevens die u nodig hebt, alleen wanneer u ze nodig hebt. Geen tracking tijdens pauzes, voorzie de mogelijkheid om het uit te schakelen.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Limita la conservazione: i dati si tengono per il tempo necessario alla finalità, non a tempo indefinito.',
        en: 'Limit retention: data is kept for the time necessary for the purpose, not indefinitely.',
        de: 'Begrenzen Sie die Speicherung: die Daten werden für die für den Zweck erforderliche Zeit aufbewahrt, nicht unbegrenzt.',
        fr: 'Limitez la conservation : les données sont conservées le temps nécessaire à la finalité, et non pour une durée indéterminée.',
        es: 'Limita la conservación: los datos se conservan durante el tiempo necesario para la finalidad, no de forma indefinida.',
        nl: 'Beperk de bewaring: de gegevens worden bewaard voor de tijd die nodig is voor het doel, niet voor onbepaalde tijd.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Svolgi la valutazione d’impatto (DPIA) quando il rischio è elevato (art. 35 GDPR).',
        en: 'Carry out the impact assessment (DPIA) when the risk is high (Article 35 GDPR).',
        de: 'Führen Sie die Folgenabschätzung (DSFA) durch, wenn das Risiko hoch ist (Artikel 35 DSGVO).',
        fr: 'Réalisez l’analyse d’impact (AIPD) lorsque le risque est élevé (article 35 RGPD).',
        es: 'Realiza la evaluación de impacto (EIPD) cuando el riesgo es elevado (artículo 35 RGPD).',
        nl: 'Voer de effectbeoordeling (DPIA) uit wanneer het risico hoog is (artikel 35 AVG).',
      },
    },
    {
      passo: 7,
      descrizione: {
        it: 'Mantieni lo scopo dichiarato: i dati raccolti per una finalità si riusano, per esempio in un procedimento disciplinare, solo se la raccolta era lecita e il lavoratore era stato informato (art. 4, comma 3, Statuto).',
        en: 'Keep to the declared purpose: data collected for one purpose is reused, for example in disciplinary proceedings, only if the collection was lawful and the worker had been informed (Article 4(3) of the Workers\' Statute).',
        de: 'Bleiben Sie beim erklärten Zweck: für einen Zweck erhobene Daten werden, etwa in einem Disziplinarverfahren, nur weiterverwendet, wenn die Erhebung rechtmäßig war und die beschäftigte Person informiert worden ist (Artikel 4 Absatz 3 des Arbeitnehmerstatuts).',
        fr: 'Tenez-vous à la finalité déclarée : les données collectées pour une finalité ne sont réutilisées, par exemple dans une procédure disciplinaire, que si la collecte était licite et le travailleur informé (article 4, alinéa 3, du Statut des travailleurs).',
        es: 'Mantén la finalidad declarada: los datos recogidos para una finalidad se reutilizan, por ejemplo en un procedimiento disciplinario, solo si la recogida era lícita y el trabajador había sido informado (artículo 4, apartado 3, del Estatuto de los Trabajadores).',
        nl: 'Houd je aan het verklaarde doel: gegevens die voor één doel zijn verzameld, worden, bijvoorbeeld in een disciplinaire procedure, alleen hergebruikt als de verzameling rechtmatig was en de werknemer was geïnformeerd (artikel 4, lid 3, van het Werknemersstatuut).',
      },
    },
    {
      passo: 8,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e, se il nuovo strumento rientra nel comma 1 dell’art. 4, verifica se va rinnovato l’accordo sindacale o l’autorizzazione dell’Ispettorato. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and, if the new tool falls under paragraph 1 of Art. 4, check whether the trade-union agreement or the Labour Inspectorate authorisation needs renewing. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, falls das neue Instrument unter Absatz 1 von Art. 4 fällt, ob die Gewerkschaftsvereinbarung oder die Genehmigung der Arbeitsaufsichtsbehörde erneuert werden muss. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et, si le nouvel outil relève de l’alinéa 1 de l’art. 4, vérifiez si l’accord syndical ou l’autorisation de l’Inspection du travail doit être renouvelé. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'Si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información y, si el nuevo instrumento entra en el apartado 1 del artículo 4, comprueba si hay que renovar el acuerdo sindical o la autorización de la Inspección de Trabajo. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la información entregada antes no basta.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werk de privacyverklaring bij en verstrek deze opnieuw, en controleer, als het nieuwe instrument onder lid 1 van art. 4 valt, of de vakbondsovereenkomst of de toestemming van de Arbeidsinspectie moet worden vernieuwd. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Garante per la protezione dei dati personali',
      urlFonte: 'https://www.garanteprivacy.it',
      verificatoIl: '2026-09-30',
    },
  ],

  // Il download va instradato tramite la cattura lead-magnet esistente
  // (leadMagnet 'informativa-gps', MailerLite) nel Task della pagina.
  modelloPdf: {
    disponibile: true,
    lingua: 'it',
    url: '/downloads/fac-simile-informativa-gps-dipendenti.pdf',
  },

  sanzioneMax: {
    importo: {
      it: '120.000 €',
      en: 'EUR 120,000',
      de: '120.000 EUR',
      fr: '120 000 EUR',
      es: '120.000 €',
      nl: '120.000 EUR',
    },
    casoCitato: {
      it: 'Garante Privacy, Provvedimento n. 755 del 18 dicembre 2025 (Pioneer Hi-Bred Italia Sementi, doc-web 10213711), reso noto con la newsletter del 29 gennaio 2026: 5 dipendenti, dispositivi telematici sui veicoli con punteggio sullo stile di guida calcolato anche sui viaggi privati. Il Garante ha accertato che non erano trattati dati di geolocalizzazione, perché il contratto con il fornitore non prevede quel servizio: è un caso affine, non di GPS (telematica sullo stile di guida, cioè un controllo dei lavoratori a distanza). Sanzione di 120.000 euro per gli artt. 5, 6, 13, 28 e 88 GDPR e 113-114 del Codice, per l’assenza delle garanzie dell’art. 4 dello Statuto.',
      en: 'Garante Privacy, decision no. 755 of 18 December 2025 (Pioneer Hi-Bred Italia Sementi, doc-web 10213711), made public with the newsletter of 29 January 2026: 5 employees, telematics devices on vehicles with a driving-style score calculated on private trips as well. The Garante established that no geolocation data was processed, because the contract with the supplier does not include that service: it is a related case, not a GPS one (driving-style telematics, that is, remote monitoring of workers). Fine of EUR 120,000 under Articles 5, 6, 13, 28 and 88 GDPR and Articles 113-114 of the Code, for the absence of the Article 4 Workers Statute safeguards.',
      de: 'Garante Privacy, Bescheid Nr. 755 vom 18. Dezember 2025 (Pioneer Hi-Bred Italia Sementi, doc-web 10213711), bekannt gemacht mit dem Newsletter vom 29. Januar 2026: 5 Beschäftigte, Telematikgeräte in den Fahrzeugen mit einem Fahrstil-Score, der auch Privatfahrten einbezog. Die Garante stellte fest, dass keine Geolokalisierungsdaten verarbeitet wurden, weil der Vertrag mit dem Anbieter diesen Dienst nicht vorsieht: es ist ein verwandter Fall, kein GPS-Fall (Fahrstil-Telematik, also eine Fernüberwachung der Beschäftigten). Geldbuße von 120.000 Euro nach Artikel 5, 6, 13, 28 und 88 DSGVO sowie Artikel 113-114 des Kodex, wegen fehlender Garantien nach Artikel 4 des Arbeitnehmerstatuts.',
      fr: 'Garante Privacy, décision n° 755 du 18 décembre 2025 (Pioneer Hi-Bred Italia Sementi, doc-web 10213711), rendue publique par la newsletter du 29 janvier 2026 : 5 salariés, dispositifs télématiques sur les véhicules avec un score de conduite calculé aussi sur les trajets privés. Le Garante a constaté qu’aucune donnée de géolocalisation n’était traitée, parce que le contrat avec le fournisseur ne prévoit pas ce service : c’est un cas voisin, pas un cas de GPS (télématique de style de conduite, donc un contrôle à distance des travailleurs). Sanction de 120 000 euros au titre des articles 5, 6, 13, 28 et 88 RGPD et 113-114 du Code, pour l’absence des garanties de l’article 4 du Statut.',
      es: 'Garante Privacy, resolución n.º 755 de 18 de diciembre de 2025 (Pioneer Hi-Bred Italia Sementi, doc-web 10213711), difundida con el boletín de 29 de enero de 2026: 5 empleados, dispositivos telemáticos en los vehículos con una puntuación de conducción calculada también sobre los viajes privados. El Garante comprobó que no se trataban datos de geolocalización, porque el contrato con el proveedor no prevé ese servicio: es un caso afín, no de GPS (telemática de estilo de conducción, es decir, un control a distancia de los trabajadores). Sanción de 120.000 euros por los artículos 5, 6, 13, 28 y 88 RGPD y 113-114 del Código, por la falta de las garantías del artículo 4 del Estatuto.',
      nl: 'Garante Privacy, besluit nr. 755 van 18 december 2025 (Pioneer Hi-Bred Italia Sementi, doc-web 10213711), bekendgemaakt met de nieuwsbrief van 29 januari 2026: 5 werknemers, telematica-apparatuur in de voertuigen met een rijstijlscore die ook privéritten meetelde. De Garante stelde vast dat er geen geolocatiegegevens werden verwerkt, omdat het contract met de leverancier die dienst niet omvat: het is een verwant geval, geen GPS-zaak (rijstijltelematica, dus toezicht op afstand op werknemers). Boete van 120.000 euro op grond van artikelen 5, 6, 13, 28 en 88 AVG en 113-114 van het Wetboek, wegens het ontbreken van de waarborgen van artikel 4 van het Werknemersstatuut.',
    },
    urlFonte:
      'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10213711',
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_PROVV_AUTOTRASPORTI,
    FONTE_PROVV_PIONEER,
    FONTE_PROVV_ATS_LIGURIA,
    FONTE_PROVV_ARSAC,
    FONTE_SENT_COSENZA_STAMPA,
    FONTE_SENT_COSENZA_STUDIO,
    FONTE_STATUTO_ART4,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
