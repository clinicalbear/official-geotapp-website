/**
 * Scheda-paese Belgio per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in
 * rete), guida dell'APD/GBA sulla geolocalizzazione dei lavoratori, pagina
 * dell'APD/GBA sulla valutazione d'impatto, pagina dell'APD/GBA per i reclami,
 * decisione 114/2024 della Chambre Contentieuse dell'APD/GBA sui dati biometrici
 * per le presenze e GDPR.
 *
 * Il Belgio e' uno Stato federale, ma ha un'unica autorita' garante nazionale,
 * l'APD/GBA: non c'e' alcuna ripartizione regionale. Per questo `federale` e'
 * false. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_CCT_81 = {
  titolo:
    'CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)',
  url: 'https://cnt-nar.be/sites/default/files/documents/CCT-COORD/cct-081.pdf',
};
const FONTE_APD_GEOLOCALIZZAZIONE = {
  titolo: 'APD/GBA, geolocalizzazione dei lavoratori',
  url: 'https://www.autoriteprotectiondonnees.be/professionnel/themes/vie-privee-sur-le-lieu-de-travail/surveillance-de-l-employeur/geolocalisation',
};
const FONTE_APD_DPIA = {
  titolo: "APD/GBA, valutazione d'impatto sulla protezione dei dati",
  url: 'https://www.autoriteprotectiondonnees.be/professionnel/rgpd-/analyse-d-impact-relative-a-la-protection-des-donnees',
};
const FONTE_APD_RECLAMO = {
  titolo: 'APD/GBA, presentare un reclamo',
  url: 'https://www.autoriteprotectiondonnees.be/citoyen/agir/introduire-une-plainte',
};
const FONTE_DECISIONE_114_2024 = {
  titolo:
    'Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro), testo integrale',
  url: 'https://www.dataprotectionauthority.be/publications/decision-quant-au-fond-n0-114-2024-fr.pdf',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const belgio: SchedaPaese = {
  codiceISO: 'BE',
  slugCanonico: 'belgio',
  nome: 'Belgio',
  nomi: {
    it: 'Belgio',
    en: 'Belgium',
    'en-us': 'Belgium',
    'en-gb': 'Belgium',
    'en-au': 'Belgium',
    'en-ie': 'Belgium',
    'en-ca': 'Belgium',
    de: 'Belgien',
    nl: 'België',
    fr: 'Belgique',
    es: 'Bélgica',
    pt: 'Bélgica',
    da: 'Belgien',
    sv: 'Belgien',
    nb: 'Belgia',
    ru: 'Бельгия',
  },
  bandiera: '🇧🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'Autorità per la protezione dei dati (APD/GBA)',
      en: 'Data Protection Authority (APD/GBA)',
      de: 'Datenschutzbehörde (APD/GBA)',
      fr: 'Autorité de protection des données (APD/GBA)',
      es: 'Autoridad de Protección de Datos (APD/GBA)',
      nl: 'Gegevensbeschermingsautoriteit (APD/GBA)',
      pt: 'Autoridade de Proteção de Dados (APD/GBA)',
      da: 'Databeskyttelsesmyndigheden (APD/GBA)',
      sv: 'Dataskyddsmyndigheten (APD/GBA)',
      nb: 'Datatilsynet (APD/GBA)',
      ru: 'Орган по защите данных (APD/GBA)',
    },
    portale: FONTE_APD_RECLAMO.url,
    urlFonte: FONTE_APD_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Il Belgio è federale ma ha un'unica autorità garante nazionale, l'APD/GBA: nessuna ripartizione regionale.",
      en: 'Belgium is federal but has a single national data protection authority, the APD/GBA: there is no regional division.',
      de: 'Belgien ist ein Bundesstaat, hat jedoch nur eine einzige nationale Datenschutzbehörde, die APD/GBA: Es gibt keine regionale Aufteilung.',
      fr: 'La Belgique est un État fédéral mais dispose d’une seule autorité de protection des données nationale, l’APD/GBA : il n’y a aucune répartition régionale.',
      es: 'Bélgica es un Estado federal, pero cuenta con una única autoridad nacional de protección de datos, la APD/GBA: no existe ninguna división regional.',
      pt: "A Bélgica é federal, mas tem uma única autoridade de controlo nacional, a APD/GBA: sem repartição regional.",
      da: 'Belgien er en forbundsstat, men har kun én national datatilsynsmyndighed, APD/GBA: der er ingen regional opdeling.',
      sv: 'Belgien är en förbundsstat men har en enda nationell dataskyddsmyndighet, APD/GBA: det finns ingen regional uppdelning.',
      nl: 'België is federaal, maar heeft één enkele nationale gegevensbeschermingsautoriteit, de APD/GBA: er is geen regionale opdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Regolamento specifico sulla geolocalizzazione, adottato in concertazione con i lavoratori (APD/GBA)",
        en: 'A specific geolocation policy, adopted in consultation with the workers (APD/GBA)',
        de: 'Eine eigene Regelung zur Ortung, in Abstimmung mit den Arbeitnehmern beschlossen (APD/GBA)',
        fr: 'Règlement spécifique de géolocalisation, pris en concertation avec les travailleurs (APD/GBA)',
        es: 'Reglamento específico de geolocalización, adoptado en consulta con los trabajadores (APD/GBA)',
        pt: "Regulamento específico sobre a geolocalização, adotado em concertação com os trabalhadores (APD/GBA)",
        da: 'En specifik politik for geolokalisering, vedtaget i samråd med medarbejderne (APD/GBA)',
        sv: 'En specifik policy för geolokalisering, antagen i samråd med de anställda (APD/GBA)',
        nl: 'Een specifiek geolocatiereglement, vastgesteld in overleg met de werknemers (APD/GBA)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "In Belgio nessuna norma regola in modo specifico la geolocalizzazione dei lavoratori. Secondo l'APD, principi e modalità del controllo vanno fissati in un regolamento specifico, chiaro e accessibile, preso in concertazione con i lavoratori e, secondo i casi, dopo il parere dell'organo di concertazione; finalità e frequenza del controllo devono essere precise (citare solo «GPS» nel regolamento di lavoro di solito non basta). La CCT n. 81 riguarda il controllo delle comunicazioni elettroniche in rete (e-mail, internet), non la geolocalizzazione.",
        en: 'No Belgian rule specifically governs the geolocation of workers. According to the APD, the principles and arrangements of the monitoring must be set out in a specific, clear and accessible policy, adopted in consultation with the workers and, as the case may be, after the opinion of the consultation body; the purposes and frequency of monitoring must be precise (merely mentioning "GPS tracking" in the work rules is generally not enough). CCT/CAO no. 81 concerns the monitoring of electronic communications on the network (e-mail, internet), not geolocation.',
        de: 'In Belgien regelt keine Vorschrift die Ortung von Arbeitnehmern speziell. Nach der APD sind Grundsätze und Modalitäten der Kontrolle in einer eigenen, klaren und zugänglichen Regelung festzulegen, die in Abstimmung mit den Arbeitnehmern und je nach Fall nach Stellungnahme des Konzertierungsorgans beschlossen wird; Zwecke und Häufigkeit der Kontrolle müssen genau angegeben werden (ein bloßer Hinweis auf „GPS-Verfolgung“ in der Arbeitsordnung genügt meist nicht). Die CCT/CAO Nr. 81 betrifft die Kontrolle elektronischer Kommunikation im Netz (E-Mail, Internet), nicht die Ortung.',
        fr: 'En Belgique, aucune réglementation ne régit spécifiquement la géolocalisation des travailleurs. Selon l’APD, les principes et modalités du contrôle doivent figurer dans un règlement spécifique, clair et accessible, pris en concertation avec les travailleurs et, selon les cas, après avis de l’organe de concertation ; les finalités et la fréquence du contrôle doivent être précises (une simple mention d’un « suivi GPS » dans le règlement de travail n’est généralement pas suffisante). La CCT n° 81 concerne le contrôle des données de communication électroniques en réseau (e-mail, internet), pas la géolocalisation.',
        es: 'En Bélgica ninguna norma regula específicamente la geolocalización de los trabajadores. Según la APD, los principios y modalidades del control deben recogerse en un reglamento específico, claro y accesible, adoptado en consulta con los trabajadores y, según los casos, previo dictamen del órgano de concertación; las finalidades y la frecuencia del control deben ser precisas (una simple mención de un «seguimiento GPS» en el reglamento de trabajo no suele bastar). El CCT n.º 81 se refiere al control de las comunicaciones electrónicas en red (correo, internet), no a la geolocalización.',
        pt: "Na Bélgica, nenhuma norma regula de forma específica a geolocalização dos trabalhadores. Segundo a APD, os princípios e as modalidades do controlo devem ser fixados num regulamento específico, claro e acessível, adotado em concertação com os trabalhadores e, consoante os casos, após parecer do órgão de concertação; a finalidade e a frequência do controlo devem ser precisas (citar apenas «GPS» no regulamento interno normalmente não basta). A CCT n.º 81 diz respeito ao controlo das comunicações eletrónicas em rede (correio eletrónico, internet), não à geolocalização.",
        da: 'Ingen belgisk regel regulerer specifikt geolokalisering af medarbejdere. Ifølge APD skal principperne og rammerne for overvågningen fastlægges i en specifik, klar og tilgængelig politik, vedtaget i samråd med medarbejderne og, alt efter tilfældet, efter udtalelse fra samrådsorganet; formålene med og hyppigheden af overvågningen skal være præcise (det er som regel ikke nok blot at nævne »GPS« i arbejdsreglementet). CCT/CAO nr. 81 handler om overvågning af elektronisk kommunikation på netværket (e-mail, internet), ikke om geolokalisering.',
        sv: 'Ingen belgisk regel reglerar specifikt geolokalisering av anställda. Enligt APD ska övervakningens principer och former anges i en specifik, tydlig och tillgänglig policy, antagen i samråd med de anställda och, i förekommande fall, efter yttrande från samrådsorganet; övervakningens ändamål och frekvens måste vara precisa (att bara nämna "GPS-spårning" i arbetsordningen räcker i allmänhet inte). CCT/CAO nr 81 gäller övervakning av elektronisk kommunikation i nätverket (e-post, internet), inte geolokalisering.',
        nl: 'In België regelt geen enkele regel specifiek de geolocatie van werknemers. Volgens de APD moeten de beginselen en modaliteiten van de controle worden vastgelegd in een specifiek, duidelijk en toegankelijk reglement, opgesteld in overleg met de werknemers en, naargelang het geval, na advies van het overlegorgaan; doeleinden en frequentie van de controle moeten nauwkeurig zijn (een loutere vermelding van „GPS-opvolging” in het arbeidsreglement volstaat doorgaans niet). CAO nr. 81 gaat over de controle van elektronische on-line communicatiegegevens (e-mail, internet), niet over geolocatie.',
      },
      fonte: FONTE_APD_GEOLOCALIZZAZIONE,
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
        sv: 'Förhandstillstånd från en myndighet före installationen',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'APD/GBA; vale la responsabilizzazione, con valutazione d'impatto quando il rischio è elevato e consultazione dell'autorità solo se resta un rischio residuo elevato.",
        en: "No prior authorisation from the APD/GBA is required; the accountability principle applies, with an impact assessment when the risk is high and consultation of the authority only if a high residual risk remains.",
        de: "Eine vorherige Genehmigung der APD/GBA ist nicht erforderlich; es gilt der Grundsatz der Rechenschaftspflicht, mit einer Folgenabschätzung bei hohem Risiko und einer Konsultation der Behörde nur dann, wenn ein hohes Restrisiko verbleibt.",
        fr: 'Aucune autorisation préalable de l’APD/GBA n’est requise ; le principe de responsabilisation s’applique, avec une analyse d’impact lorsque le risque est élevé et une consultation de l’autorité uniquement s’il subsiste un risque résiduel élevé.',
        es: "No se requiere una autorización previa de la APD/GBA; rige el principio de responsabilidad proactiva, con una evaluación de impacto cuando el riesgo es elevado y consulta a la autoridad solo si subsiste un riesgo residual elevado.",
        pt: "Não é necessária autorização prévia da APD/GBA; vale a responsabilização, com avaliação de impacto quando o risco é elevado e consulta da autoridade apenas se subsistir um risco residual elevado.",
        da: 'Der kræves ingen forudgående tilladelse fra APD/GBA; ansvarlighedsprincippet gælder, med en konsekvensanalyse, når risikoen er høj, og høring af myndigheden kun, hvis der fortsat er en høj restrisiko.',
        sv: 'Inget förhandstillstånd från APD/GBA krävs; principen om ansvarsskyldighet gäller, med en konsekvensbedömning när risken är hög och samråd med myndigheten endast om en hög kvarstående risk finns.',
        nl: "Een voorafgaande toestemming van de APD/GBA is niet nodig; het verantwoordingsbeginsel geldt, met een effectbeoordeling wanneer het risico hoog is en raadpleging van de autoriteit alleen als er een hoog restrisico blijft bestaan.",
      },
      fonte: FONTE_APD_DPIA,
    },
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori (base giuridica, diritti; art. 13 GDPR)',
        en: 'Prior information to workers (legal basis, rights; art. 13 GDPR)',
        de: 'Vorherige Information der Arbeitnehmer (Rechtsgrundlage, Rechte; Art. 13 DSGVO)',
        fr: 'Information préalable des travailleurs (base juridique, droits ; art. 13 RGPD)',
        es: 'Información previa a los trabajadores (base jurídica, derechos; art. 13 RGPD)',
        pt: "Informação prévia aos trabalhadores (base jurídica, direitos; art. 13.º do RGPD)",
        da: 'Forudgående information til medarbejderne (retsgrundlag, rettigheder; art. 13 i GDPR)',
        sv: 'Förhandsinformation till de anställda (rättslig grund, rättigheter; art. 13 GDPR)',
        nl: 'Voorafgaande informatie aan werknemers (rechtsgrond, rechten; art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve comunicare prima la base giuridica del trattamento, le finalità e i diritti dei lavoratori; la base è di norma il legittimo interesse o la necessità contrattuale/legale; il consenso va trattato con molta cautela nel rapporto di lavoro, perché raramente è libero (decisione 114/2024 della Camera contenziosa; la pagina APD sulla geolocalizzazione lo cita ancora per i lavoratori itineranti).",
        en: "The employer must communicate beforehand the legal basis of the processing, the purposes and the workers' rights; the basis is normally legitimate interest or contractual/legal necessity; consent must be treated with great caution in employment because it is rarely freely given (decision 114/2024 of the Litigation Chamber; the APD geolocation page still mentions it for itinerant workers).",
        de: "Der Arbeitgeber muss zuvor die Rechtsgrundlage der Verarbeitung, die Zwecke und die Rechte der Arbeitnehmer mitteilen; die Grundlage ist in der Regel das berechtigte Interesse oder die vertragliche/gesetzliche Erforderlichkeit; die Einwilligung ist im Arbeitsverhältnis mit großer Vorsicht zu behandeln, weil sie selten freiwillig ist (Entscheidung 114/2024 der Streitkammer; die APD-Seite zur Ortung nennt sie für reisende Arbeitnehmer noch).",
        fr: 'L’employeur doit communiquer au préalable la base juridique du traitement, les finalités et les droits des travailleurs ; la base est généralement l’intérêt légitime ou la nécessité contractuelle/légale ; le consentement doit être traité avec une grande prudence dans la relation de travail car il est rarement libre (décision 114/2024 de la Chambre Contentieuse ; la page de l’APD sur la géolocalisation le mentionne encore pour les travailleurs itinérants).',
        es: "El empleador debe comunicar previamente la base jurídica del tratamiento, las finalidades y los derechos de los trabajadores; la base suele ser el interés legítimo o la necesidad contractual/legal; el consentimiento debe tratarse con mucha cautela en la relación laboral porque rara vez es libre (decisión 114/2024 de la Sala de lo Contencioso; la página de la APD sobre geolocalización aún lo menciona para los trabajadores itinerantes).",
        pt: "A entidade empregadora deve comunicar previamente a base jurídica do tratamento, as finalidades e os direitos dos trabalhadores; a base é, em regra, o interesse legítimo ou a necessidade contratual/legal; o consentimento deve ser tratado com muita cautela na relação laboral, porque raramente é livre (decisão 114/2024 da Câmara Contenciosa; a página da APD sobre a geolocalização ainda o cita para os trabalhadores itinerantes).",
        da: "Arbejdsgiveren skal på forhånd oplyse om behandlingens retsgrundlag, formålene og medarbejdernes rettigheder; grundlaget er normalt legitim interesse eller nødvendighed af hensyn til en kontrakt eller en retlig forpligtelse; samtykke skal behandles med stor forsigtighed i ansættelsesforhold, fordi det sjældent er frivilligt (afgørelse 114/2024 fra tvistkammeret (Chambre Contentieuse); APD's side om geolokalisering nævner det stadig for omrejsende medarbejdere).",
        sv: 'Arbetsgivaren ska i förväg meddela den rättsliga grunden för behandlingen, ändamålen och de anställdas rättigheter; grunden är normalt berättigat intresse eller avtalsmässig/rättslig nödvändighet; samtycke måste behandlas med stor försiktighet i anställningsförhållanden eftersom det sällan är frivilligt (beslut 114/2024 av Litigation Chamber; APD:s sida om geolokalisering nämner det fortfarande för resande anställda).',
        nl: "De werkgever moet vooraf de rechtsgrond van de verwerking, de doeleinden en de rechten van de werknemers meedelen; de grondslag is doorgaans het gerechtvaardigd belang of de contractuele/wettelijke noodzaak; toestemming moet in een arbeidsverhouding met grote voorzichtigheid worden benaderd omdat ze zelden vrij is (beslissing 114/2024 van de Geschillenkamer; de APD-pagina over geolocatie noemt ze nog voor rondtrekkende werknemers).",
      },
      fonte: FONTE_APD_GEOLOCALIZZAZIONE,
    },
    {
      voce: {
        it: 'Divieto di controllo permanente e sistematico (sproporzionato); disattivabile fuori orario',
        en: 'Ban on permanent and systematic monitoring (disproportionate); deactivatable outside working hours',
        de: 'Verbot einer dauerhaften und systematischen Überwachung (unverhältnismäßig); außerhalb der Arbeitszeit abschaltbar',
        fr: 'Interdiction du contrôle permanent et systématique (disproportionné) ; désactivable en dehors des heures de travail',
        es: 'Prohibición del control permanente y sistemático (desproporcionado); desactivable fuera del horario de trabajo',
        pt: "Proibição de controlo permanente e sistemático (desproporcionado); desativável fora do horário",
        da: 'Forbud mod permanent og systematisk overvågning (uforholdsmæssig); kan slås fra uden for arbejdstiden',
        sv: 'Förbud mot permanent och systematisk övervakning (oproportionerlig); ska kunna stängas av utanför arbetstid',
        nl: 'Verbod op permanente en systematische controle (onevenredig); buiten werktijd uitschakelbaar',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'APD un controllo permanente con lettura sistematica dei dati di localizzazione è in linea di principio sproporzionato; il sistema deve poter essere disattivato quando il veicolo è usato fuori dall'orario di lavoro.",
        en: "According to the APD, permanent monitoring with systematic reading of location data is in principle disproportionate; the system must be able to be deactivated when the vehicle is used outside working hours.",
        de: "Nach Auffassung der APD ist eine dauerhafte Überwachung mit systematischer Auswertung der Standortdaten grundsätzlich unverhältnismäßig; das System muss abgeschaltet werden können, wenn das Fahrzeug außerhalb der Arbeitszeit genutzt wird.",
        fr: 'Pour l’APD, un contrôle permanent avec lecture systématique des données de localisation est en principe disproportionné ; le système doit pouvoir être désactivé lorsque le véhicule est utilisé en dehors des heures de travail.',
        es: "Para la APD, un control permanente con lectura sistemática de los datos de localización es en principio desproporcionado; el sistema debe poder desactivarse cuando el vehículo se utiliza fuera del horario de trabajo.",
        pt: "Para a APD, um controlo permanente com leitura sistemática dos dados de localização é, em princípio, desproporcionado; o sistema deve poder ser desativado quando o veículo é utilizado fora do horário de trabalho.",
        da: 'Ifølge APD er permanent overvågning med systematisk aflæsning af positionsdata i princippet uforholdsmæssig; systemet skal kunne slås fra, når køretøjet bruges uden for arbejdstiden.',
        sv: 'Enligt APD är permanent övervakning med systematisk avläsning av positionsuppgifter i princip oproportionerlig; systemet måste kunna stängas av när fordonet används utanför arbetstid.',
        nl: "Volgens de APD is een permanente controle met systematische uitlezing van de locatiegegevens in beginsel onevenredig; het systeem moet kunnen worden uitgeschakeld wanneer het voertuig buiten werktijd wordt gebruikt.",
      },
      fonte: FONTE_APD_GEOLOCALIZZAZIONE,
    },
    {
      voce: {
        it: "Valutazione d'impatto (AIPD) se il trattamento presenta un rischio elevato",
        en: 'Impact assessment (DPIA) if the processing presents a high risk',
        de: 'Folgenabschätzung (DSFA), wenn die Verarbeitung ein hohes Risiko birgt',
        fr: 'Analyse d’impact (AIPD) si le traitement présente un risque élevé',
        es: 'Evaluación de impacto (EIPD) si el tratamiento presenta un riesgo elevado',
        pt: "Avaliação de impacto (AIPD) se o tratamento apresentar um risco elevado",
        da: 'Konsekvensanalyse (DPIA), hvis behandlingen indebærer en høj risiko',
        sv: 'Konsekvensbedömning (DPIA) om behandlingen medför hög risk',
        nl: 'Effectbeoordeling (DPIA) als de verwerking een hoog risico inhoudt',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Serve una valutazione d'impatto quando il trattamento è suscettibile di comportare un rischio elevato (art. 35 GDPR). L'esempio di legge è la sorveglianza sistematica su larga scala di una zona accessibile al pubblico, e la lista dell'APD non nomina la geolocalizzazione dei dipendenti: va valutato caso per caso, anche con i criteri del gruppo di lavoro Art. 29.",
        en: 'An impact assessment is required when the processing is likely to result in a high risk (Art. 35 GDPR). The example in the law is large-scale systematic monitoring of a publicly accessible area, and the APD list does not name employee geolocation: it must be assessed case by case, also using the Article 29 Working Party criteria.',
        de: 'Eine Folgenabschätzung ist erforderlich, wenn die Verarbeitung voraussichtlich ein hohes Risiko mit sich bringt (Art. 35 DSGVO). Das gesetzliche Beispiel ist die umfangreiche systematische Überwachung eines öffentlich zugänglichen Bereichs; die Liste der APD nennt die Ortung von Beschäftigten nicht: Sie ist im Einzelfall zu beurteilen, auch anhand der Kriterien der Artikel-29-Datenschutzgruppe.',
        fr: 'Une analyse d’impact est requise lorsque le traitement est susceptible d’engendrer un risque élevé (art. 35 RGPD). L’exemple légal est la surveillance systématique à grande échelle d’une zone accessible au public, et la liste de l’APD ne mentionne pas la géolocalisation des employés : il faut apprécier au cas par cas, notamment à l’aide des critères du groupe de travail Article 29.',
        es: 'Es necesaria una evaluación de impacto cuando es probable que el tratamiento entrañe un riesgo elevado (art. 35 RGPD). El ejemplo legal es la vigilancia sistemática a gran escala de una zona de acceso público, y la lista de la APD no menciona la geolocalización de empleados: debe valorarse caso por caso, también con los criterios del Grupo de Trabajo del Artículo 29.',
        pt: "É necessária uma avaliação de impacto quando o tratamento seja suscetível de implicar um risco elevado (art. 35.º do RGPD). O exemplo legal é a vigilância sistemática em grande escala de uma zona de acesso público, e a lista da APD não menciona a geolocalização dos trabalhadores: deve ser avaliada caso a caso, também com os critérios do grupo de trabalho do art. 29.º.",
        da: "En konsekvensanalyse er påkrævet, når behandlingen sandsynligvis indebærer en høj risiko (art. 35 i GDPR). Lovens eksempel er systematisk overvågning i stor skala af et område, der er tilgængeligt for offentligheden, og APD's liste nævner ikke geolokalisering af ansatte: det skal vurderes fra sag til sag, også ud fra kriterierne fra Artikel 29-gruppen.",
        sv: 'En konsekvensbedömning krävs när behandlingen sannolikt medför hög risk (art. 35 GDPR). Exemplet i lagen är storskalig systematisk övervakning av en allmänt tillgänglig plats, och APD:s förteckning nämner inte geolokalisering av anställda: det måste bedömas från fall till fall, även med hjälp av kriterierna från artikel 29-gruppen.',
        nl: 'Een effectbeoordeling is vereist wanneer de verwerking waarschijnlijk een hoog risico met zich meebrengt (art. 35 AVG). Het wettelijke voorbeeld is de grootschalige systematische monitoring van een openbaar toegankelijke ruimte, en de lijst van de APD noemt de geolocatie van werknemers niet: dit moet per geval worden beoordeeld, ook aan de hand van de criteria van de Groep Gegevensbescherming artikel 29.',
      },
      fonte: FONTE_APD_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Prima di installare, fissa in un regolamento specifico principi, finalità e frequenza del controllo, in concertazione con i lavoratori e, secondo i casi, dopo il parere dell'organo di concertazione.",
        en: 'Before installing, set out the principles, purposes and frequency of the monitoring in a specific policy, in consultation with the workers and, as the case may be, after the opinion of the consultation body.',
        de: 'Legen Sie vor der Installation Grundsätze, Zwecke und Häufigkeit der Kontrolle in einer eigenen Regelung fest, in Abstimmung mit den Arbeitnehmern und je nach Fall nach Stellungnahme des Konzertierungsorgans.',
        fr: 'Avant d’installer, fixez dans un règlement spécifique les principes, finalités et fréquence du contrôle, en concertation avec les travailleurs et, selon les cas, après avis de l’organe de concertation.',
        es: 'Antes de instalar, fija en un reglamento específico los principios, finalidades y frecuencia del control, en consulta con los trabajadores y, según los casos, previo dictamen del órgano de concertación.',
        pt: "Antes de instalar, fixe num regulamento específico os princípios, as finalidades e a frequência do controlo, em concertação com os trabalhadores e, consoante os casos, após parecer do órgão de concertação.",
        da: 'Før installationen skal du fastlægge principperne, formålene og hyppigheden af overvågningen i en specifik politik, i samråd med medarbejderne og, alt efter tilfældet, efter udtalelse fra samrådsorganet.',
        sv: 'Före installationen ska du ange övervakningens principer, ändamål och frekvens i en specifik policy, i samråd med de anställda och, i förekommande fall, efter yttrande från samrådsorganet.',
        nl: 'Leg vóór installatie de beginselen, doeleinden en frequentie van de controle vast in een specifiek reglement, in overleg met de werknemers en, naargelang het geval, na advies van het overlegorgaan.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (legittimo interesse o necessità contrattuale/legale), non il consenso.',
        en: 'Identify a valid legal basis (legitimate interest or contractual/legal necessity), not consent.',
        de: 'Ermitteln Sie eine gültige Rechtsgrundlage (berechtigtes Interesse oder vertragliche/gesetzliche Erforderlichkeit), nicht die Einwilligung.',
        fr: 'Déterminez une base juridique valable (intérêt légitime ou nécessité contractuelle/légale), et non le consentement.',
        es: 'Determina una base jurídica válida (interés legítimo o necesidad contractual/legal), no el consentimiento.',
        pt: "Identifique uma base jurídica válida (interesse legítimo ou necessidade contratual/legal), não o consentimento.",
        da: 'Find et gyldigt retsgrundlag (legitim interesse eller nødvendighed af hensyn til en kontrakt eller en retlig forpligtelse), ikke samtykke.',
        sv: 'Fastställ en giltig rättslig grund (berättigat intresse eller avtalsmässig/rättslig nödvändighet), inte samtycke.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang of contractuele/wettelijke noodzaak), niet de toestemming.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Informa preventivamente i lavoratori su base giuridica, finalità e diritti.",
        en: 'Inform the workers beforehand about the legal basis, the purposes and their rights.',
        de: 'Informieren Sie die Arbeitnehmer im Voraus über die Rechtsgrundlage, die Zwecke und ihre Rechte.',
        fr: 'Informez au préalable les travailleurs sur la base juridique, les finalités et les droits.',
        es: 'Informa previamente a los trabajadores sobre la base jurídica, las finalidades y los derechos.',
        pt: "Informe previamente os trabalhadores sobre a base jurídica, as finalidades e os direitos.",
        da: 'Informér medarbejderne på forhånd om retsgrundlag, formål og rettigheder.',
        sv: 'Informera de anställda i förväg om den rättsliga grunden, ändamålen och deras rättigheter.',
        nl: 'Informeer de werknemers vooraf over de rechtsgrond, de doeleinden en de rechten.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto per la sorveglianza sistematica su larga scala.",
        en: 'Carry out the impact assessment for large-scale systematic monitoring.',
        de: 'Führen Sie die Folgenabschätzung für eine systematische Überwachung in großem Umfang durch.',
        fr: 'Réalisez l’analyse d’impact pour la surveillance systématique à grande échelle.',
        es: 'Realiza la evaluación de impacto para la vigilancia sistemática a gran escala.',
        pt: "Realize a avaliação de impacto para a vigilância sistemática em grande escala.",
        da: 'Gennemfør konsekvensanalysen for systematisk overvågning i stor skala.',
        sv: 'Genomför konsekvensbedömningen för storskalig systematisk övervakning.',
        nl: 'Voer de effectbeoordeling uit voor grootschalige systematische monitoring.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente controllo permanente, disattivazione fuori orario.',
        en: 'Configure the system: no permanent monitoring, deactivation outside working hours.',
        de: 'Konfigurieren Sie das System: keine dauerhafte Überwachung, Abschaltung außerhalb der Arbeitszeit.',
        fr: 'Configurez le système : pas de contrôle permanent, désactivation en dehors des heures de travail.',
        es: 'Configura el sistema: sin control permanente, desactivación fuera del horario de trabajo.',
        pt: "Configure o sistema: sem controlo permanente, desativação fora do horário.",
        da: 'Konfigurer systemet: ingen permanent overvågning, og mulighed for at slå det fra uden for arbejdstiden.',
        sv: 'Konfigurera systemet: ingen permanent övervakning, avstängning utanför arbetstid.',
        nl: 'Configureer het systeem: geen permanente controle, uitschakeling buiten werktijd.',
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
        pt: "Se mudar de sistema ou de software de monitorização, atualize e entregue de novo a informação, e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, onde a lei o preveja. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue antes não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsoplysningerne igen og undersøge, om du på ny skal informere eller høre medarbejdernes repræsentanter, hvor loven kræver det. Ofte ændrer leverandøren (databehandleren), de indsamlede oplysninger og metoderne sig: de oplysninger, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter system: när du byter övervakningssystem eller programvara ska du uppdatera och dela ut integritetsinformationen på nytt, och kontrollera om du måste informera eller samråda med de anställdas företrädare igen, där lagen kräver det. Leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och metoderna ändras ofta: den information som lämnades tidigare räcker inte.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'APD/GBA, reclamo',
      portale: FONTE_APD_RECLAMO.url,
      urlFonte: FONTE_APD_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '45.000 euro',
      en: 'EUR 45,000',
      de: '45.000 Euro',
      fr: '45 000 euros',
      es: '45.000 euros',
      pt: "45.000 euros",
      da: '45.000 euro',
      sv: '45 000 €',
      nl: '45.000 euro',
    },
    casoCitato: {
      it: "Chambre Contentieuse dell'APD/GBA, decisione 114/2024 del 6 settembre 2024: un datore usava le impronte digitali dei dipendenti per la rilevazione delle presenze, su una base (il consenso) non valida nel rapporto di lavoro e in violazione della minimizzazione (esistevano mezzi meno intrusivi). Non è un caso di GPS, ma è il caso belga di riferimento sul controllo delle presenze dei dipendenti.",
      en: "Chambre Contentieuse of the APD/GBA, decision 114/2024 of 6 September 2024: an employer used employees' fingerprints for attendance recording, on a basis (consent) that is not valid in the employment relationship and in breach of data minimisation (less intrusive means existed). It is not a GPS case, but it is the Belgian benchmark case on monitoring employees' attendance.",
      de: "Chambre Contentieuse der APD/GBA, Beschluss 114/2024 vom 6. September 2024: Ein Arbeitgeber nutzte die Fingerabdrücke der Beschäftigten zur Anwesenheitserfassung, auf einer im Arbeitsverhältnis ungültigen Grundlage (der Einwilligung) und unter Verstoß gegen die Datenminimierung (es gab weniger eingriffsintensive Mittel). Es handelt sich nicht um einen GPS-Fall, aber um den belgischen Referenzfall zur Anwesenheitskontrolle der Beschäftigten.",
      fr: 'Chambre Contentieuse de l’APD/GBA, décision 114/2024 du 6 septembre 2024 : un employeur utilisait les empreintes digitales des employés pour le pointage des présences, sur une base (le consentement) non valable dans la relation de travail et en violation de la minimisation (des moyens moins intrusifs existaient). Ce n’est pas un cas de GPS, mais c’est le cas belge de référence sur le contrôle des présences des employés.',
      es: "Chambre Contentieuse de la APD/GBA, decisión 114/2024 de 6 de septiembre de 2024: un empleador utilizaba las huellas dactilares de los empleados para el registro de asistencia, sobre una base (el consentimiento) no válida en la relación laboral y en infracción de la minimización (existían medios menos intrusivos). No es un caso de GPS, pero es el caso belga de referencia sobre el control de la asistencia de los empleados.",
      pt: "Chambre Contentieuse da APD/GBA, decisão 114/2024 de 6 de setembro de 2024: uma entidade empregadora utilizava as impressões digitais dos trabalhadores para o registo da assiduidade, com base num fundamento (o consentimento) não válido na relação laboral e em violação da minimização (existiam meios menos intrusivos). Não é um caso de GPS, mas é o caso belga de referência sobre o controlo da assiduidade dos trabalhadores.",
      da: 'Chambre Contentieuse hos APD/GBA, afgørelse 114/2024 af 6. september 2024: en arbejdsgiver brugte de ansattes fingeraftryk til registrering af fremmøde, på et grundlag (samtykke), der ikke er gyldigt i ansættelsesforholdet, og i strid med dataminimering (der fandtes mindre indgribende midler). Det er ikke en GPS-sag, men det er den belgiske referencesag om overvågning af ansattes fremmøde.',
      sv: 'Chambre Contentieuse vid APD/GBA, beslut 114/2024 av den 6 september 2024: en arbetsgivare använde anställdas fingeravtryck för närvaroregistrering, på en grund (samtycke) som inte är giltig i anställningsförhållandet och i strid med uppgiftsminimeringen (det fanns mindre ingripande medel). Det är inte ett GPS-fall, men det är det belgiska referensfallet för övervakning av anställdas närvaro.',
      nl: "Chambre Contentieuse van de APD/GBA, beslissing 114/2024 van 6 september 2024: een werkgever gebruikte de vingerafdrukken van werknemers voor de aanwezigheidsregistratie, op een in de arbeidsverhouding ongeldige grondslag (de toestemming) en in strijd met de minimalisatie (er waren minder ingrijpende middelen). Het is geen GPS-zaak, maar het is de Belgische referentiezaak over de controle van de aanwezigheid van werknemers.",
    },
    urlFonte: FONTE_DECISIONE_114_2024.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_CCT_81,
    FONTE_APD_GEOLOCALIZZAZIONE,
    FONTE_APD_DPIA,
    FONTE_APD_RECLAMO,
    FONTE_DECISIONE_114_2024,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
