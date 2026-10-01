/**
 * Scheda-paese Olanda per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * WOR art. 27 (diritto di consenso del consiglio aziendale), lista dell'Autoriteit
 * Persoonsgegevens (AP) dei trattamenti che richiedono una DPIA, condizioni AP per
 * il controllo dei dipendenti, comunicato AP sulla sanzione per le impronte digitali,
 * scheda Eurofound sul monitoraggio dei lavoratori nei Paesi Bassi e GDPR.
 *
 * I Paesi Bassi hanno un'unica autorità nazionale, l'AP, senza ripartizione
 * regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_WOR_27 = {
  titolo:
    'Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)',
  url: 'https://wetten.overheid.nl/BWBR0002747/2024-01-01/0/Hoofdstuk4/Artikel27',
};
const FONTE_AP_DPIA = {
  titolo:
    'Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA',
  url: 'https://wetten.overheid.nl/BWBR0042812',
};
const FONTE_AP_CONDIZIONI = {
  titolo:
    'Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti',
  url: 'https://www.autoriteitpersoonsgegevens.nl/en/themes/employment-and-benefits/monitoring-employees/conditions-for-monitoring-employees',
};
const FONTE_AP_REMOTO = {
  titolo:
    'Autoriteit Persoonsgegevens, controllo dei dipendenti a distanza (GPS sulle auto aziendali)',
  url: 'https://www.autoriteitpersoonsgegevens.nl/en/themes/employment-and-benefits/monitoring-employees/remote-monitoring-of-employees',
};
const FONTE_AP_IMPRONTE = {
  titolo:
    'Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti',
  url: 'https://www.autoriteitpersoonsgegevens.nl/en/current/company-fined-for-processing-employees-fingerprint-data',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};
const FONTE_AP = {
  titolo: 'Autoriteit Persoonsgegevens (AP)',
  url: 'https://www.autoriteitpersoonsgegevens.nl/',
};

export const olanda: SchedaPaese = {
  codiceISO: 'NL',
  slugCanonico: 'olanda',
  nome: 'Olanda',
  nomi: {
    it: 'Paesi Bassi',
    en: 'Netherlands',
    'en-us': 'Netherlands',
    'en-gb': 'Netherlands',
    'en-au': 'Netherlands',
    'en-ie': 'Netherlands',
    'en-ca': 'Netherlands',
    de: 'Niederlande',
    nl: 'Nederland',
    fr: 'Pays-Bas',
    es: 'Países Bajos',
    pt: 'Países Baixos',
    da: 'Nederlandene',
    sv: 'Nederländerna',
    nb: 'Nederland',
    ru: 'Нидерланды',
  },
  bandiera: '🇳🇱',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Autoriteit Persoonsgegevens (AP)',
    portale: FONTE_AP.url,
    urlFonte: FONTE_AP_CONDIZIONI.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "I Paesi Bassi hanno un'unica autorità nazionale, l'AP; nessuna ripartizione regionale.",
      en: 'The Netherlands has a single national authority, the AP; there is no regional breakdown.',
      de: 'Die Niederlande haben eine einzige nationale Behörde, die AP; es gibt keine regionale Aufteilung.',
      fr: 'Les Pays-Bas disposent d’une seule autorité nationale, l’AP ; il n’y a pas de répartition régionale.',
      es: 'Los Países Bajos cuentan con una única autoridad nacional, la AP; no existe reparto regional.',
      pt: "Os Países Baixos têm uma única autoridade nacional, a AP; não existe divisão regional.",
      da: 'Nederlandene har én national myndighed, AP; der er ingen regional opdeling.',
      nl: 'Nederland heeft een enkele nationale autoriteit, de AP; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consenso del consiglio aziendale (OR) prima di installare il sistema (WOR art. 27)',
        en: 'Works council (OR) consent before installing the system (WOR art. 27)',
        de: 'Zustimmung des Betriebsrats (OR) vor der Installation des Systems (WOR Art. 27)',
        fr: 'Accord du conseil d’entreprise (OR) avant l’installation du système (WOR art. 27)',
        es: 'Consentimiento del comité de empresa (OR) antes de instalar el sistema (WOR art. 27)',
        pt: "Consentimento do conselho de empresa (OR) antes de instalar o sistema (WOR art. 27)",
        da: 'Samtykke fra virksomhedsrådet (OR) før systemet installeres (WOR art. 27)',
        nl: 'Instemming van de ondernemingsraad (OR) voordat het systeem wordt geinstalleerd (WOR art. 27)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Dove esiste un consiglio aziendale (ondernemingsraad, OR), il datore ha bisogno del suo consenso preventivo (instemmingsrecht) prima di introdurre un sistema che tratta i dati del personale o ne controlla presenza, comportamento o rendimento (WOR art. 27, lett. k e l). Se l'OR non acconsente, non si può procedere, salvo autorizzazione del giudice cantonale (kantonrechter, art. 27 c. 4), concessa solo se il rifiuto dell'OR è irragionevole o se la misura è imposta da gravi ragioni organizzative, economiche o sociali. Il consenso dell'OR non serve se la materia è già regolata da un contratto collettivo (art. 27 c. 3). Vale dove un OR esiste: è obbligatorio dai 50 dipendenti in su.",
        en: 'Where a works council (ondernemingsraad, OR) exists, the employer needs its prior consent (instemmingsrecht) before introducing a system that processes staff data or monitors attendance, behaviour or performance (WOR art. 27, points k and l). If the OR does not consent, the employer cannot proceed, unless the cantonal court (kantonrechter, art. 27(4)) authorises the decision, which it does only if the OR\'s refusal is unreasonable or the measure is required by serious organisational, economic or social reasons. OR consent is not needed where the matter is already regulated by a collective agreement (art. 27(3)). This applies where an OR exists: it is mandatory from 50 employees upwards.',
        de: 'Wo ein Betriebsrat (ondernemingsraad, OR) besteht, benötigt der Arbeitgeber dessen vorherige Zustimmung (instemmingsrecht), bevor er ein System einführt, das Personaldaten verarbeitet oder Anwesenheit, Verhalten oder Leistung überwacht (WOR Art. 27, Buchstaben k und l). Stimmt der OR nicht zu, darf der Arbeitgeber nicht fortfahren, es sei denn, das Kantonsgericht (kantonrechter, Art. 27 Abs. 4) erlaubt den Beschluss; das geschieht nur, wenn die Verweigerung des OR unbillig ist oder die Maßnahme aus gewichtigen organisatorischen, wirtschaftlichen oder sozialen Gründen geboten ist. Die Zustimmung des OR ist nicht nötig, wenn die Angelegenheit bereits in einem Tarifvertrag geregelt ist (Art. 27 Abs. 3). Dies gilt, wo ein OR besteht: ab 50 Beschäftigten ist er verpflichtend.',
        fr: 'Là où un conseil d’entreprise (ondernemingsraad, OR) existe, l’employeur a besoin de son accord préalable (instemmingsrecht) avant d’introduire un système qui traite les données du personnel ou qui contrôle la présence, le comportement ou le rendement (WOR art. 27, points k et l). Si l’OR ne donne pas son accord, l’employeur ne peut pas avancer, sauf autorisation du juge cantonal (kantonrechter, art. 27 al. 4), accordée seulement si le refus de l’OR est déraisonnable ou si la mesure est imposée par de graves raisons organisationnelles, économiques ou sociales. L’accord de l’OR n’est pas requis si la matière est déjà réglée par une convention collective (art. 27 al. 3). Cela vaut là où un OR existe : il est obligatoire à partir de 50 salariés.',
        es: 'Cuando existe un comité de empresa (ondernemingsraad, OR), el empleador necesita su consentimiento previo (instemmingsrecht) antes de introducir un sistema que trate datos del personal o controle la asistencia, el comportamiento o el rendimiento (WOR art. 27, letras k y l). Si el OR no consiente, el empleador no puede continuar, salvo autorización del juez cantonal (kantonrechter, art. 27.4), que solo se concede si la negativa del OR es irrazonable o si la medida viene exigida por graves razones organizativas, económicas o sociales. El consentimiento del OR no hace falta si la materia ya está regulada en un convenio colectivo (art. 27.3). Esto rige donde existe un OR: es obligatorio a partir de 50 empleados.',
        pt: "Onde exista um conselho de empresa (ondernemingsraad, OR), a entidade empregadora precisa do seu consentimento prévio (instemmingsrecht) antes de introduzir um sistema que trate dados do pessoal ou controle a assiduidade, o comportamento ou o desempenho (WOR art. 27, alíneas k e l). Se o OR não consentir, a entidade empregadora não pode prosseguir, salvo autorização do juiz cantonal (kantonrechter, art. 27, n.º 4), que só é concedida se a recusa do OR for irrazoável ou se a medida for imposta por motivos organizativos, económicos ou sociais graves. O consentimento do OR não é necessário se a matéria já estiver regulada numa convenção coletiva (art. 27, n.º 3). Aplica-se onde exista um OR: é obrigatório a partir de 50 trabalhadores.",
        da: "Hvor der findes et virksomhedsråd (ondernemingsraad, OR), skal arbejdsgiveren have dets forudgående samtykke (instemmingsrecht), før der indføres et system, der behandler personaleoplysninger eller overvåger tilstedeværelse, adfærd eller præstation (WOR art. 27, litra k og l). Hvis OR ikke samtykker, kan arbejdsgiveren ikke gå videre, medmindre kantonretten (kantonrechter, art. 27, stk. 4) godkender beslutningen, hvilket den kun gør, hvis OR's afslag er urimeligt, eller foranstaltningen kræves af alvorlige organisatoriske, økonomiske eller sociale grunde. OR's samtykke er ikke nødvendigt, hvis området allerede er reguleret af en kollektiv overenskomst (art. 27, stk. 3). Det gælder, hvor der findes et OR: Det er obligatorisk fra 50 ansatte.",
        nl: 'Waar een ondernemingsraad (OR) bestaat, heeft de werkgever de voorafgaande instemming (instemmingsrecht) ervan nodig voordat hij een systeem invoert dat personeelsgegevens verwerkt of de aanwezigheid, het gedrag of de prestaties controleert (WOR art. 27, onder k en l). Stemt de OR niet in, dan kan de werkgever niet doorgaan, tenzij de kantonrechter toestemming geeft (art. 27 lid 4); die geeft alleen toestemming als de weigering van de OR onredelijk is of het besluit wordt gevergd door zwaarwegende bedrijfsorganisatorische, bedrijfseconomische of bedrijfssociale redenen. Instemming is niet vereist als de aangelegenheid al inhoudelijk is geregeld in een cao (art. 27 lid 3). Dit geldt waar een OR bestaat: vanaf 50 werknemers is die verplicht.',
      },
      fonte: FONTE_WOR_27,
    },
    {
      voce: {
        it: "Autorizzazione di un'autorità del lavoro prima di installare",
        en: 'Authorisation from a labour authority before installing',
        de: 'Genehmigung einer Arbeitsbehörde vor der Installation',
        fr: 'Autorisation d’une autorité du travail avant l’installation',
        es: 'Autorización de una autoridad laboral antes de instalar',
        pt: "Autorização de uma autoridade laboral antes de instalar",
        da: 'Tilladelse fra en arbejdsmarkedsmyndighed før installation',
        nl: 'Toestemming van een arbeidsautoriteit voordat wordt geinstalleerd',
      },
      risposta: 'no',
      dettaglio: {
        it: "I Paesi Bassi non prevedono un'autorizzazione preventiva di un'autorità del lavoro. I filtri sono il consenso dell'OR e il GDPR. L'autorità garante (AP) va consultata prima solo nel caso dell'art. 36 GDPR, cioè se la DPIA evidenzia un rischio elevato non mitigabile.",
        en: 'The Netherlands does not require prior authorisation from a labour authority. The gatekeepers are OR consent and the GDPR. The data protection authority (AP) must be consulted beforehand only in the case of art. 36 GDPR, that is, if the DPIA reveals a high risk that cannot be mitigated.',
        de: 'Die Niederlande sehen keine vorherige Genehmigung durch eine Arbeitsbehörde vor. Die Filter sind die Zustimmung des OR und die DSGVO. Die Datenschutzbehörde (AP) ist nur im Fall des Art. 36 DSGVO vorab zu konsultieren, das heißt, wenn die DSFA ein hohes, nicht zu minderndes Risiko aufzeigt.',
        fr: 'Les Pays-Bas ne prévoient pas d’autorisation préalable d’une autorité du travail. Les filtres sont l’accord de l’OR et le RGPD. L’autorité de protection des données (AP) ne doit être consultée au préalable que dans le cas de l’art. 36 RGPD, c’est-à-dire si l’AIPD révèle un risque élevé qui ne peut être atténué.',
        es: 'Los Países Bajos no exigen una autorización previa de una autoridad laboral. Los filtros son el consentimiento del OR y el RGPD. La autoridad de protección de datos (AP) solo debe consultarse de antemano en el caso del art. 36 RGPD, es decir, si la EIPD revela un riesgo elevado que no puede mitigarse.',
        pt: "Os Países Baixos não exigem uma autorização prévia de uma autoridade laboral. Os filtros são o consentimento do OR e o RGPD. A autoridade de controlo (AP) só tem de ser consultada previamente no caso do art. 36.º do RGPD, isto é, se a AIPD revelar um risco elevado que não possa ser mitigado.",
        da: "Nederlandene kræver ingen forudgående tilladelse fra en arbejdsmarkedsmyndighed. De afgørende rammer er OR's samtykke og GDPR. Tilsynsmyndigheden (AP) skal kun høres på forhånd i tilfældet efter art. 36 i GDPR, altså hvis konsekvensanalysen (DPIA) afslører en høj risiko, som ikke kan afbødes.",
        nl: 'Nederland kent geen voorafgaande toestemming van een arbeidsautoriteit. De filters zijn de instemming van de OR en de AVG. De toezichthouder (AP) hoeft alleen vooraf te worden geraadpleegd in het geval van art. 36 AVG, dat wil zeggen als de DPIA een hoog risico aantoont dat niet kan worden beperkt.',
      },
      fonte: FONTE_AP_CONDIZIONI,
    },
    {
      voce: {
        it: 'Informazione preventiva dei lavoratori (art. 13 GDPR)',
        en: 'Prior information of workers (art. 13 GDPR)',
        de: 'Vorherige Information der Beschäftigten (Art. 13 DSGVO)',
        fr: 'Information préalable des travailleurs (art. 13 RGPD)',
        es: 'Información previa de los trabajadores (art. 13 RGPD)',
        pt: "Informação prévia dos trabalhadores (art. 13.º do RGPD)",
        da: 'Forudgående information til medarbejderne (art. 13 i GDPR)',
        nl: 'Voorafgaande informatie aan de werknemers (art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'I lavoratori vanno informati in anticipo e in modo completo su cosa viene controllato e perché.',
        en: 'Workers must be informed in advance and fully about what is monitored and why.',
        de: 'Die Beschäftigten sind im Voraus und vollständig darüber zu informieren, was kontrolliert wird und warum.',
        fr: 'Les travailleurs doivent être informés à l’avance et de manière complète de ce qui est contrôlé et pourquoi.',
        es: 'Los trabajadores deben ser informados con antelación y de forma completa sobre qué se controla y por qué.',
        pt: "Os trabalhadores devem ser informados com antecedência e de forma completa sobre o que é controlado e porquê.",
        da: 'Medarbejderne skal informeres på forhånd og fuldt ud om, hvad der overvåges, og hvorfor.',
        nl: 'De werknemers moeten vooraf en volledig worden geinformeerd over wat wordt gecontroleerd en waarom.',
      },
      fonte: FONTE_AP_CONDIZIONI,
    },
    {
      voce: {
        it: 'Base giuridica valida (legittimo interesse con bilanciamento; il consenso del dipendente di norma non vale) e divieto di tracciamento continuo',
        en: 'Valid legal basis (legitimate interest with balancing; employee consent is usually not valid) and ban on continuous tracking',
        de: 'Gültige Rechtsgrundlage (berechtigtes Interesse mit Abwägung; die Einwilligung des Beschäftigten ist in der Regel nicht gültig) und Verbot der dauerhaften Ortung',
        fr: 'Base juridique valable (intérêt légitime avec mise en balance ; le consentement du salarié n’est en général pas valable) et interdiction du suivi continu',
        es: 'Base jurídica válida (interés legítimo con ponderación; el consentimiento del empleado por lo general no es válido) y prohibición del seguimiento continuo',
        pt: "Base jurídica válida (interesse legítimo com ponderação; o consentimento do trabalhador, em regra, não é válido) e proibição do seguimento contínuo",
        da: 'Gyldigt retsgrundlag (legitim interesse med afvejning; medarbejdernes samtykke er normalt ikke gyldigt) og forbud mod løbende sporing',
        nl: 'Geldige rechtsgrondslag (gerechtvaardigd belang met afweging; toestemming van de werknemer is doorgaans niet geldig) en verbod op continue tracering',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'AP il controllo deve essere necessario e proporzionato; la base è di norma il legittimo interesse con test di bilanciamento, non il consenso del dipendente (per lo squilibrio di potere). Per il GPS sulle auto aziendali l'interesse legittimo (per esempio mandare dal cliente l'auto più vicina) deve essere necessario e prevalere sui diritti del lavoratore; se l'auto è usata anche in privato, nel tempo privato di norma prevale la privacy del lavoratore, e in molte aziende il lavoratore può spegnere il tracker.",
        en: 'For the AP, monitoring must be necessary and proportionate; the basis is usually legitimate interest with a balancing test, not the employee\'s consent (because of the imbalance of power). For GPS on company cars the legitimate interest (for example sending the nearest car to a customer) must be necessary and outweigh the employee\'s rights; if the car is also used privately, the employee\'s privacy usually prevails in private time, and at many companies the employee can switch the tracker off.',
        de: 'Für die AP muss die Überwachung erforderlich und verhältnismäßig sein; die Grundlage ist in der Regel das berechtigte Interesse mit einer Abwägungsprüfung, nicht die Einwilligung des Beschäftigten (wegen des Machtungleichgewichts). Beim GPS in Firmenwagen muss das berechtigte Interesse (etwa den nächstgelegenen Wagen zum Kunden zu schicken) erforderlich sein und die Rechte der Beschäftigten überwiegen; wird das Fahrzeug auch privat genutzt, überwiegt in der Privatzeit meist die Privatsphäre, und in vielen Betrieben können die Beschäftigten den Tracker abschalten.',
        fr: 'Pour l’AP, le contrôle doit être nécessaire et proportionné ; la base est en général l’intérêt légitime avec un test de mise en balance, et non le consentement du salarié (en raison du déséquilibre de pouvoir). Pour le GPS des voitures de société, l’intérêt légitime (par exemple envoyer chez le client la voiture la plus proche) doit être nécessaire et l’emporter sur les droits du salarié ; si la voiture sert aussi à titre privé, la vie privée du salarié l’emporte en général pendant le temps privé, et dans beaucoup d’entreprises le salarié peut éteindre le traceur.',
        es: 'Para la AP, el control debe ser necesario y proporcionado; la base suele ser el interés legítimo con una prueba de ponderación, no el consentimiento del empleado (por el desequilibrio de poder). En el GPS de los coches de empresa, el interés legítimo (por ejemplo enviar al cliente el coche más cercano) debe ser necesario y prevalecer sobre los derechos del empleado; si el coche también se usa a título privado, en el tiempo privado suele prevalecer la privacidad del empleado, y en muchas empresas el empleado puede apagar el localizador.',
        pt: "Para a AP, o controlo deve ser necessário e proporcionado; a base é, em regra, o interesse legítimo com um teste de ponderação, não o consentimento do trabalhador (por causa do desequilíbrio de poder). No GPS dos automóveis da empresa, o interesse legítimo (por exemplo, enviar ao cliente o automóvel mais próximo) deve ser necessário e prevalecer sobre os direitos do trabalhador; se o automóvel também for utilizado a título privado, no tempo privado costuma prevalecer a privacidade do trabalhador, e em muitas empresas o trabalhador pode desligar o localizador.",
        da: 'For AP skal overvågningen være nødvendig og forholdsmæssig; grundlaget er normalt legitim interesse med en afvejning, ikke medarbejderens samtykke (på grund af ubalancen i magtforholdet). For GPS i firmabiler skal den legitime interesse (for eksempel at sende den nærmeste bil til en kunde) være nødvendig og veje tungere end medarbejderens rettigheder; hvis bilen også bruges privat, går medarbejderens privatliv normalt forud i fritiden, og mange virksomheder lader medarbejderen slå sporingen fra.',
        nl: 'Voor de AP moet de controle noodzakelijk en evenredig zijn; de grondslag is doorgaans het gerechtvaardigd belang met een afwegingstoets, niet de toestemming van de werknemer (vanwege de machtsongelijkheid). Bij gps in bedrijfsauto\'s moet het gerechtvaardigd belang (bijvoorbeeld de dichtstbijzijnde auto naar een klant sturen) noodzakelijk zijn en zwaarder wegen dan de rechten van de werknemer; wordt de auto ook privé gebruikt, dan weegt in privétijd het privacybelang meestal zwaarder en kunnen werknemers bij veel bedrijven de tracker uitzetten.',
      },
      fonte: FONTE_AP_REMOTO,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti e i dati di localizzazione",
        en: 'Impact assessment (DPIA) for employee monitoring and location data',
        de: 'Folgenabschätzung (DSFA) für die Überwachung von Beschäftigten und Standortdaten',
        fr: 'Analyse d’impact (AIPD) pour la surveillance des salariés et les données de localisation',
        es: 'Evaluación de impacto (EIPD) para la supervisión de los empleados y los datos de localización',
        pt: "Avaliação de impacto sobre a proteção de dados (AIPD) para a monitorização dos trabalhadores e os dados de localização",
        da: 'Konsekvensanalyse (DPIA) for medarbejderovervågning og positionsdata',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de monitoring van werknemers en locatiegegevens',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista DPIA dell'AP cita espressamente i sistemi GPS nei veicoli dei dipendenti e il monitoraggio sistematico delle attività dei lavoratori, oltre al trattamento su larga scala di dati di localizzazione: in questi casi la DPIA è obbligatoria.",
        en: "The AP's DPIA list expressly cites GPS systems in employees' vehicles and the systematic monitoring of workers' activities, as well as the large-scale processing of location data: in these cases the DPIA is mandatory.",
        de: 'Die DSFA-Liste der AP nennt ausdrücklich GPS-Systeme in den Fahrzeugen der Beschäftigten und die systematische Überwachung der Tätigkeiten der Beschäftigten sowie die umfangreiche Verarbeitung von Standortdaten: in diesen Fällen ist die DSFA verpflichtend.',
        fr: 'La liste AIPD de l’AP cite expressément les systèmes GPS dans les véhicules des salariés et la surveillance systématique des activités des travailleurs, ainsi que le traitement à grande échelle de données de localisation : dans ces cas, l’AIPD est obligatoire.',
        es: 'La lista EIPD de la AP cita expresamente los sistemas GPS en los vehículos de los empleados y la supervisión sistemática de las actividades de los trabajadores, así como el tratamiento a gran escala de datos de localización: en estos casos la EIPD es obligatoria.',
        pt: "A lista de AIPD da AP cita expressamente os sistemas GPS nos veículos dos trabalhadores e a monitorização sistemática das atividades dos trabalhadores, bem como o tratamento em grande escala de dados de localização: nestes casos, a AIPD é obrigatória.",
        da: "AP's DPIA-liste nævner udtrykkeligt GPS-systemer i medarbejderes køretøjer og systematisk overvågning af medarbejderes aktiviteter samt behandling af positionsdata i stor skala: I disse tilfælde er konsekvensanalysen (DPIA) obligatorisk.",
        nl: 'De DPIA-lijst van de AP noemt uitdrukkelijk GPS-systemen in de voertuigen van werknemers en het stelselmatig monitoren van de activiteiten van werknemers, naast de grootschalige verwerking van locatiegegevens: in die gevallen is de DPIA verplicht.',
      },
      fonte: FONTE_AP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Se esiste un OR, ottieni il suo consenso (instemmingsrecht) prima di attivare il sistema (WOR art. 27).",
        en: 'If an OR exists, obtain its consent (instemmingsrecht) before activating the system (WOR art. 27).',
        de: 'Wenn ein OR besteht, hole seine Zustimmung (instemmingsrecht) ein, bevor du das System aktivierst (WOR Art. 27).',
        fr: 'Si un OR existe, obtenez son accord (instemmingsrecht) avant d’activer le système (WOR art. 27).',
        es: 'Si existe un OR, obtén su consentimiento (instemmingsrecht) antes de activar el sistema (WOR art. 27).',
        pt: "Se existir um OR, obtenha o seu consentimento (instemmingsrecht) antes de ativar o sistema (WOR art. 27).",
        da: 'Hvis der findes et OR, skal du indhente dets samtykke (instemmingsrecht), før systemet aktiveres (WOR art. 27).',
        nl: 'Als er een OR is, verkrijg dan de instemming ervan (instemmingsrecht) voordat u het systeem activeert (WOR art. 27).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida ai sensi del GDPR: di norma il legittimo interesse con test di bilanciamento, non il consenso del dipendente.',
        en: 'Identify a valid legal basis under the GDPR: usually legitimate interest with a balancing test, not the employee\'s consent.',
        de: 'Bestimme eine gültige Rechtsgrundlage nach der DSGVO: in der Regel das berechtigte Interesse mit einer Abwägungsprüfung, nicht die Einwilligung des Beschäftigten.',
        fr: 'Déterminez une base juridique valable au titre du RGPD : en général l’intérêt légitime avec un test de mise en balance, et non le consentement du salarié.',
        es: 'Determina una base jurídica válida con arreglo al RGPD: por lo general el interés legítimo con una prueba de ponderación, no el consentimiento del empleado.',
        pt: "Identifique uma base jurídica válida nos termos do RGPD: em regra, o interesse legítimo com um teste de ponderação, não o consentimento do trabalhador.",
        da: 'Find et gyldigt retsgrundlag efter GDPR: normalt legitim interesse med en afvejning, ikke medarbejderens samtykke.',
        nl: 'Bepaal een geldige rechtsgrondslag op grond van de AVG: doorgaans het gerechtvaardigd belang met een afwegingstoets, niet de toestemming van de werknemer.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA): per il GPS sui veicoli dei dipendenti e per i dati di localizzazione su larga scala è richiesta.",
        en: "Carry out the impact assessment (DPIA): for GPS on employees' vehicles and for large-scale location data it is required.",
        de: 'Führe die Folgenabschätzung (DSFA) durch: für GPS in den Fahrzeugen der Beschäftigten und für Standortdaten im großen Umfang ist sie erforderlich.',
        fr: 'Réalisez l’analyse d’impact (AIPD) : pour le GPS sur les véhicules des salariés et pour les données de localisation à grande échelle, elle est requise.',
        es: 'Realiza la evaluación de impacto (EIPD): para el GPS en los vehículos de los empleados y para los datos de localización a gran escala es obligatoria.',
        pt: "Realize a avaliação de impacto (AIPD): para o GPS nos veículos dos trabalhadores e para os dados de localização em grande escala, é obrigatória.",
        da: 'Gennemfør konsekvensanalysen (DPIA): Den kræves for GPS i medarbejderes køretøjer og for positionsdata i stor skala.',
        nl: 'Voer de effectbeoordeling (DPIA) uit: voor GPS op de voertuigen van werknemers en voor grootschalige locatiegegevens is die vereist.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Informa i lavoratori in anticipo e in modo completo (art. 13 GDPR).',
        en: 'Inform workers in advance and fully (art. 13 GDPR).',
        de: 'Informiere die Beschäftigten im Voraus und vollständig (Art. 13 DSGVO).',
        fr: 'Informez les travailleurs à l’avance et de manière complète (art. 13 RGPD).',
        es: 'Informa a los trabajadores con antelación y de forma completa (art. 13 RGPD).',
        pt: "Informe os trabalhadores com antecedência e de forma completa (art. 13.º do RGPD).",
        da: 'Informér medarbejderne på forhånd og fuldt ud (art. 13 i GDPR).',
        nl: 'Informeer de werknemers vooraf en volledig (art. 13 AVG).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema con minimizzazione: solo viaggi di lavoro, niente tracciamento continuo o degli spostamenti privati.',
        en: 'Configure the system with data minimisation: work trips only, no continuous tracking or tracking of private movements.',
        de: 'Konfiguriere das System mit Datenminimierung: nur Dienstfahrten, keine dauerhafte Ortung und keine Ortung privater Fahrten.',
        fr: 'Configurez le système avec la minimisation des données : uniquement les déplacements professionnels, pas de suivi continu ni des déplacements privés.',
        es: 'Configura el sistema con minimización de datos: solo desplazamientos de trabajo, sin seguimiento continuo ni de los desplazamientos privados.',
        pt: "Configure o sistema com minimização dos dados: apenas deslocações de trabalho, sem seguimento contínuo nem das deslocações privadas.",
        da: 'Indstil systemet med dataminimering: kun arbejdsture, ingen løbende sporing eller sporing af private bevægelser.',
        nl: 'Configureer het systeem met dataminimalisatie: alleen zakelijke ritten, geen continue tracering of tracering van priveverplaatsingen.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: "Se la DPIA evidenzia un rischio elevato non mitigabile, consulta preventivamente l'AP (art. 36 GDPR).",
        en: 'If the DPIA reveals a high risk that cannot be mitigated, consult the AP beforehand (art. 36 GDPR).',
        de: 'Wenn die DSFA ein hohes, nicht zu minderndes Risiko aufzeigt, konsultiere vorab die AP (Art. 36 DSGVO).',
        fr: 'Si l’AIPD révèle un risque élevé qui ne peut être atténué, consultez au préalable l’AP (art. 36 RGPD).',
        es: 'Si la EIPD revela un riesgo elevado que no puede mitigarse, consulta de antemano a la AP (art. 36 RGPD).',
        pt: "Se a AIPD revelar um risco elevado que não possa ser mitigado, consulte previamente a AP (art. 36.º do RGPD).",
        da: 'Hvis konsekvensanalysen (DPIA) afslører en høj risiko, som ikke kan afbødes, skal du høre AP på forhånd (art. 36 i GDPR).',
        nl: 'Als de DPIA een hoog risico aantoont dat niet kan worden beperkt, raadpleeg dan vooraf de AP (art. 36 AVG).',
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
        pt: "Se mudar de sistema ou de software de monitorização, atualize e volte a entregar a informação, e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, quando a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue antes não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsoplysningerne igen og undersøge, om du på ny skal informere eller høre medarbejdernes repræsentanter, hvor loven kræver det. Ofte ændrer leverandøren (databehandleren), de indsamlede oplysninger og metoderne sig: de oplysninger, der blev udleveret tidligere, er ikke nok.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Autoriteit Persoonsgegevens (AP)',
      portale: FONTE_AP.url,
      urlFonte: FONTE_AP.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '725.000 € (ridotta a 50.000 € in opposizione)',
      en: 'EUR 725,000 (reduced to EUR 50,000 on objection)',
      de: '725.000 EUR (im Widerspruchsverfahren auf 50.000 EUR reduziert)',
      fr: '725 000 EUR (ramenée à 50 000 EUR sur opposition)',
      es: '725.000 € (reducida a 50.000 € tras oposición)',
      pt: "725.000 € (reduzida para 50.000 € em sede de oposição)",
      da: '725.000 euro (nedsat til 50.000 euro efter indsigelse)',
      nl: '725.000 EUR (in bezwaar verlaagd naar 50.000 EUR)',
    },
    casoCitato: {
      it: "Sanzione dell'Autoriteit Persoonsgegevens a un'azienda per il trattamento delle impronte digitali dei dipendenti per la rilevazione delle presenze: dato biometrico (art. 9 GDPR) trattato senza una base valida, perché il consenso dei dipendenti non è considerato libero per lo squilibrio di potere. Non è un caso di GPS ma è il caso olandese più importante sul controllo presenze dei dipendenti. La multa iniziale di 725.000 € è stata ridotta a 50.000 € nel novembre 2020, in sede di opposizione, per la limitata capacità finanziaria dell'azienda durante la crisi da coronavirus.",
      en: "Fine from the Autoriteit Persoonsgegevens against a company for processing employees' fingerprints for attendance recording: biometric data (art. 9 GDPR) processed without a valid basis, because the employees' consent is not regarded as freely given owing to the imbalance of power. It is not a GPS case but it is the Dutch landmark case on employee attendance monitoring. The initial EUR 725,000 fine was reduced to EUR 50,000 in November 2020, on objection, because of the company's limited financial capacity during the coronavirus crisis.",
      de: "Bußgeld der Autoriteit Persoonsgegevens gegen ein Unternehmen wegen der Verarbeitung der Fingerabdrücke von Beschäftigten zur Zeiterfassung: biometrische Daten (Art. 9 DSGVO), die ohne gültige Grundlage verarbeitet wurden, da die Einwilligung der Beschäftigten wegen des Machtungleichgewichts nicht als freiwillig gilt. Es handelt sich nicht um einen GPS-Fall, aber um den niederländischen Leitfall zur Anwesenheitskontrolle von Beschäftigten. Das anfängliche Bußgeld von 725.000 EUR wurde im November 2020 im Widerspruchsverfahren wegen der begrenzten Leistungsfähigkeit des Unternehmens während der Corona-Krise auf 50.000 EUR reduziert.",
      fr: 'Sanction de l’Autoriteit Persoonsgegevens contre une entreprise pour le traitement des empreintes digitales des salariés aux fins de relevé des présences : donnée biométrique (art. 9 RGPD) traitée sans base valable, car le consentement des salariés n’est pas considéré comme libre en raison du déséquilibre de pouvoir. Ce n’est pas un cas de GPS mais c’est le cas de référence néerlandais sur le contrôle des présences des salariés. L’amende initiale de 725 000 EUR a été ramenée à 50 000 EUR en novembre 2020, sur opposition, en raison des capacités financières limitées de l’entreprise pendant la crise du coronavirus.',
      es: "Sanción de la Autoriteit Persoonsgegevens a una empresa por el tratamiento de las huellas dactilares de los empleados para el registro de la asistencia: dato biométrico (art. 9 RGPD) tratado sin una base válida, porque el consentimiento de los empleados no se considera libre por el desequilibrio de poder. No es un caso de GPS, pero es el caso de referencia neerlandés sobre el control de la asistencia de los empleados. La multa inicial de 725.000 € se redujo a 50.000 € en noviembre de 2020, tras la oposición, por la limitada capacidad económica de la empresa durante la crisis del coronavirus.",
      pt: "Sanção da Autoriteit Persoonsgegevens a uma empresa pelo tratamento das impressões digitais dos trabalhadores para o registo da assiduidade: dado biométrico (art. 9.º do RGPD) tratado sem uma base válida, porque o consentimento dos trabalhadores não é considerado livre, por causa do desequilíbrio de poder. Não é um caso de GPS, mas é o caso neerlandês de referência sobre o controlo da assiduidade dos trabalhadores. A coima inicial de 725.000 € foi reduzida para 50.000 € em novembro de 2020, em sede de oposição, devido à limitada capacidade financeira da empresa durante a crise da COVID-19.",
      da: 'Bøde fra Autoriteit Persoonsgegevens til en virksomhed for behandling af medarbejderes fingeraftryk til registrering af tilstedeværelse: biometriske oplysninger (art. 9 i GDPR) behandlet uden gyldigt grundlag, fordi medarbejdernes samtykke ikke anses for frivilligt på grund af ubalancen i magtforholdet. Det er ikke en GPS-sag, men det er den nederlandske hovedsag om overvågning af medarbejderes tilstedeværelse. Den oprindelige bøde på 725.000 euro blev nedsat til 50.000 euro i november 2020 efter indsigelse på grund af virksomhedens begrænsede økonomiske formåen under coronakrisen.',
      nl: "Boete van de Autoriteit Persoonsgegevens aan een bedrijf voor de verwerking van de vingerafdrukken van werknemers voor de aanwezigheidsregistratie: biometrisch gegeven (art. 9 AVG) verwerkt zonder een geldige grondslag, omdat de toestemming van de werknemers niet als vrij wordt beschouwd vanwege de machtsongelijkheid. Het is geen GPS-zaak, maar het is de Nederlandse richtinggevende zaak over de aanwezigheidscontrole van werknemers. De oorspronkelijke boete van 725.000 EUR is in november 2020 in bezwaar verlaagd naar 50.000 EUR, vanwege de beperkte draagkracht van het bedrijf tijdens de coronacrisis.",
    },
    urlFonte: FONTE_AP_IMPRONTE.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_WOR_27,
    FONTE_AP_DPIA,
    FONTE_AP_CONDIZIONI,
    FONTE_AP_REMOTO,
    FONTE_AP_IMPRONTE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
