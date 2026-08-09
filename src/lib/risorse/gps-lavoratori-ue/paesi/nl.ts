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
const FONTE_AP_IMPRONTE = {
  titolo:
    'Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti',
  url: 'https://www.autoriteitpersoonsgegevens.nl/en/current/company-fined-for-processing-employees-fingerprint-data',
};
const FONTE_EUROFOUND = {
  titolo: 'Eurofound, monitoraggio dei lavoratori nei Paesi Bassi',
  url: 'https://apps.eurofound.europa.eu/legislationdb/employee-monitoring-and-surveillance/netherlands',
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
    it: 'Olanda',
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
    verificatoIl: '2026-06-15',
    note: {
      it: "I Paesi Bassi hanno un'unica autorità nazionale, l'AP; nessuna ripartizione regionale.",
      en: 'The Netherlands has a single national authority, the AP; there is no regional breakdown.',
      de: 'Die Niederlande haben eine einzige nationale Behörde, die AP; es gibt keine regionale Aufteilung.',
      fr: "Les Pays-Bas disposent d'une seule autorité nationale, l'AP; il n'y a pas de répartition régionale.",
      es: 'Los Países Bajos cuentan con una única autoridad nacional, la AP; no existe reparto regional.',
      nl: 'Nederland heeft een enkele nationale autoriteit, de AP; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consenso del consiglio aziendale (OR) prima di installare il sistema (WOR art. 27)',
        en: 'Works council (OR) consent before installing the system (WOR art. 27)',
        de: 'Zustimmung des Betriebsrats (OR) vor der Installation des Systems (WOR Art. 27)',
        fr: "Accord du conseil d'entreprise (OR) avant l'installation du système (WOR art. 27)",
        es: 'Consentimiento del comité de empresa (OR) antes de instalar el sistema (WOR art. 27)',
        nl: 'Instemming van de ondernemingsraad (OR) voordat het systeem wordt geinstalleerd (WOR art. 27)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Dove esiste un consiglio aziendale (ondernemingsraad, OR), il datore ne ha bisogno del consenso preventivo (instemmingsrecht) prima di introdurre un sistema che tratta i dati del personale o ne controlla presenza, comportamento o rendimento (WOR art. 27, lett. k e l). Se l'OR non acconsente, non si può procedere. Vale dove un OR esiste: e obbligatorio dai 50 dipendenti in su.",
        en: 'Where a works council (ondernemingsraad, OR) exists, the employer needs its prior consent (instemmingsrecht) before introducing a system that processes staff data or monitors attendance, behaviour or performance (WOR art. 27, points k and l). If the OR does not consent, the employer cannot proceed. This applies where an OR exists: it is mandatory from 50 employees upwards.',
        de: 'Wo ein Betriebsrat (ondernemingsraad, OR) besteht, benötigt der Arbeitgeber dessen vorherige Zustimmung (instemmingsrecht), bevor er ein System einführt, das Personaldaten verarbeitet oder Anwesenheit, Verhalten oder Leistung überwacht (WOR Art. 27, Buchstaben k und l). Stimmt der OR nicht zu, darf der Arbeitgeber nicht fortfahren. Dies gilt, wo ein OR besteht: ab 50 Beschäftigten ist er verpflichtend.',
        fr: "La ou un conseil d'entreprise (ondernemingsraad, OR) existe, l'employeur a besoin de son accord préalable (instemmingsrecht) avant d'introduire un système qui traite les données du personnel ou qui contrôle la présence, le comportement ou le rendement (WOR art. 27, points k et l). Si l'OR ne donne pas son accord, l'employeur ne peut pas avancer. Cela vaut la ou un OR existe: il est obligatoire a partir de 50 salaries.",
        es: 'Cuando existe un comité de empresa (ondernemingsraad, OR), el empleador necesita su consentimiento previo (instemmingsrecht) antes de introducir un sistema que trate datos del personal o controle la asistencia, el comportamiento o el rendimiento (WOR art. 27, letras k y l). Si el OR no consiente, el empleador no puede continuar. Esto rige donde existe un OR: es obligatorio a partir de 50 empleados.',
        nl: 'Waar een ondernemingsraad (OR) bestaat, heeft de werkgever de voorafgaande instemming (instemmingsrecht) ervan nodig voordat hij een systeem invoert dat personeelsgegevens verwerkt of de aanwezigheid, het gedrag of de prestaties controleert (WOR art. 27, onder k en l). Stemt de OR niet in, dan kan de werkgever niet doorgaan. Dit geldt waar een OR bestaat: vanaf 50 werknemers is die verplicht.',
      },
      fonte: FONTE_WOR_27,
    },
    {
      voce: {
        it: "Autorizzazione di un'autorità del lavoro prima di installare",
        en: 'Authorisation from a labour authority before installing',
        de: 'Genehmigung einer Arbeitsbehörde vor der Installation',
        fr: "Autorisation d'une autorité du travail avant l'installation",
        es: 'Autorización de una autoridad laboral antes de instalar',
        nl: 'Toestemming van een arbeidsautoriteit voordat wordt geinstalleerd',
      },
      risposta: 'no',
      dettaglio: {
        it: "I Paesi Bassi non prevedono un'autorizzazione preventiva di un'autorità del lavoro. I filtri sono il consenso dell'OR e il GDPR. L'autorità garante (AP) va consultata prima solo nel caso dell'art. 36 GDPR, cioe se la DPIA evidenzia un rischio elevato non mitigabile.",
        en: 'The Netherlands does not require prior authorisation from a labour authority. The gatekeepers are OR consent and the GDPR. The data protection authority (AP) must be consulted beforehand only in the case of art. 36 GDPR, that is, if the DPIA reveals a high risk that cannot be mitigated.',
        de: 'Die Niederlande sehen keine vorherige Genehmigung durch eine Arbeitsbehörde vor. Die Filter sind die Zustimmung des OR und die DSGVO. Die Datenschutzbehoerde (AP) ist nur im Fall des Art. 36 DSGVO vorab zu konsultieren, das heißt, wenn die DSFA ein hohes, nicht zu minderndes Risiko aufzeigt.',
        fr: "Les Pays-Bas ne prévoient pas d'autorisation préalable d'une autorité du travail. Les filtres sont l'accord de l'OR et le RGPD. L'autorité de protection des données (AP) ne doit être consultée au préalable que dans le cas de l'art. 36 RGPD, c'est-a-dire si l'AIPD révèle un risque élevé qui ne peut être atténue.",
        es: 'Los Países Bajos no exigen una autorización previa de una autoridad laboral. Los filtros son el consentimiento del OR y el RGPD. La autoridad de protección de datos (AP) solo debe consultarse de antemano en el caso del art. 36 RGPD, es decir, si la EIPD revela un riesgo elevado que no puede mitigarse.',
        nl: 'Nederland kent geen voorafgaande toestemming van een arbeidsautoriteit. De filters zijn de instemming van de OR en de AVG. De toezichthouder (AP) hoeft alleen vooraf te worden geraadpleegd in het geval van art. 36 AVG, dat wil zeggen als de DPIA een hoog risico aantoont dat niet kan worden beperkt.',
      },
      fonte: FONTE_EUROFOUND,
    },
    {
      voce: {
        it: 'Informazione preventiva dei lavoratori (art. 13 GDPR)',
        en: 'Prior information of workers (art. 13 GDPR)',
        de: 'Vorherige Information der Beschäftigten (Art. 13 DSGVO)',
        fr: 'Information préalable des travailleurs (art. 13 RGPD)',
        es: 'Información previa de los trabajadores (art. 13 RGPD)',
        nl: 'Voorafgaande informatie aan de werknemers (art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'I lavoratori vanno informati in anticipo e in modo completo su cosa viene controllato e perché.',
        en: 'Workers must be informed in advance and fully about what is monitored and why.',
        de: 'Die Beschäftigten sind im Voraus und vollständig darüber zu informieren, was kontrolliert wird und warum.',
        fr: 'Les travailleurs doivent être informes a l\'avance et de manière complète de ce qui est contrôle et pourquoi.',
        es: 'Los trabajadores deben ser informados con antelación y de forma completa sobre que se controla y por que.',
        nl: 'De werknemers moeten vooraf en volledig worden geinformeerd over wat wordt gecontroleerd en waarom.',
      },
      fonte: FONTE_AP_CONDIZIONI,
    },
    {
      voce: {
        it: 'Base giuridica valida (legittimo interesse con bilanciamento; il consenso del dipendente di norma non vale) e divieto di tracciamento continuo',
        en: 'Valid legal basis (legitimate interest with balancing; employee consent is usually not valid) and ban on continuous tracking',
        de: 'Gültige Rechtsgrundlage (berechtigtes Interesse mit Abwägung; die Einwilligung des Beschäftigten ist in der Regel nicht gültig) und Verbot der dauerhaften Ortung',
        fr: "Base juridique valable (intérêt légitime avec mise en balance; le consentement du salarie n'est en général pas valable) et interdiction du suivi continu",
        es: 'Base jurídica valida (interés legítimo con ponderación; el consentimiento del empleado por lo general no es valido) y prohibición del seguimiento continuo',
        nl: 'Geldige rechtsgrondslag (gerechtvaardigd belang met afweging; toestemming van de werknemer is doorgaans niet geldig) en verbod op continue tracering',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'AP il controllo deve essere necessario e proporzionato; la base e di norma il legittimo interesse con test di bilanciamento, non il consenso del dipendente (per lo squilibrio di potere). Il GPS sui veicoli aziendali e ammesso per i viaggi di lavoro, ma non per seguire sistematicamente gli spostamenti privati o fuori orario.",
        en: 'For the AP, monitoring must be necessary and proportionate; the basis is usually legitimate interest with a balancing test, not the employee\'s consent (because of the imbalance of power). GPS on company vehicles is allowed for work trips, but not to systematically track private or off-duty movements.',
        de: 'Für die AP muss die Überwachung erforderlich und verhältnismäßig sein; die Grundlage ist in der Regel das berechtigte Interesse mit einer Abwägungsprüfung, nicht die Einwilligung des Beschäftigten (wegen des Machtungleichgewichts). GPS in Firmenfahrzeugen ist für Dienstfahrten zulässig, nicht aber zur systematischen Verfolgung privater oder außerdienstlicher Fahrten.',
        fr: "Pour l'AP, le contrôle doit être nécessaire et proportionné; la base est en général l'intérêt légitime avec un test de mise en balance, et non le consentement du salarie (en raison du déséquilibre de pouvoir). Le GPS sur les véhicules de l'entreprise est admis pour les déplacements professionnels, mais pas pour suivre systématiquement les déplacements prives ou en dehors des heures de travail.",
        es: 'Para la AP, el control debe ser necesario y proporcionado; la base suele ser el interés legítimo con una prueba de ponderación, no el consentimiento del empleado (por el desequilibrio de poder). El GPS en los vehículos de la empresa se admite para los desplazamientos de trabajo, pero no para seguir sistemáticamente los desplazamientos privados o fuera del horario laboral.',
        nl: 'Voor de AP moet de controle noodzakelijk en evenredig zijn; de grondslag is doorgaans het gerechtvaardigd belang met een afwegingstoets, niet de toestemming van de werknemer (vanwege de machtsongelijkheid). GPS op bedrijfsvoertuigen is toegestaan voor zakelijke ritten, maar niet om priveverplaatsingen of verplaatsingen buiten werktijd stelselmatig te volgen.',
      },
      fonte: FONTE_AP_CONDIZIONI,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti e i dati di localizzazione",
        en: 'Impact assessment (DPIA) for employee monitoring and location data',
        de: 'Folgenabschätzung (DSFA) für die Überwachung von Beschäftigten und Standortdaten',
        fr: "Analyse d'impact (AIPD) pour la surveillance des salaries et les données de localisation",
        es: 'Evaluación de impacto (EIPD) para la supervisión de los empleados y los datos de localización',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de monitoring van werknemers en locatiegegevens',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista DPIA dell'AP cita espressamente i sistemi GPS nei veicoli dei dipendenti e il monitoraggio sistematico delle attività dei lavoratori, oltre al trattamento su larga scala di dati di localizzazione: in questi casi la DPIA e obbligatoria.",
        en: "The AP's DPIA list expressly cites GPS systems in employees' vehicles and the systematic monitoring of workers' activities, as well as the large-scale processing of location data: in these cases the DPIA is mandatory.",
        de: 'Die DSFA-Liste der AP nennt ausdrücklich GPS-Systeme in den Fahrzeugen der Beschäftigten und die systematische Überwachung der Tätigkeiten der Beschäftigten sowie die umfangreiche Verarbeitung von Standortdaten: in diesen Fällen ist die DSFA verpflichtend.',
        fr: "La liste AIPD de l'AP cite expressément les systèmes GPS dans les véhicules des salaries et la surveillance systématique des activités des travailleurs, ainsi que le traitement a grande échelle de données de localisation: dans ces cas, l'AIPD est obligatoire.",
        es: 'La lista EIPD de la AP cita expresamente los sistemas GPS en los vehículos de los empleados y la supervisión sistemática de las actividades de los trabajadores, así como el tratamiento a gran escala de datos de localización: en estos casos la EIPD es obligatoria.',
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
        fr: "Si un OR existe, obtenez son accord (instemmingsrecht) avant d'activer le système (WOR art. 27).",
        es: 'Si existe un OR, obtén su consentimiento (instemmingsrecht) antes de activar el sistema (WOR art. 27).',
        nl: 'Als er een OR is, verkrijg dan de instemming ervan (instemmingsrecht) voordat je het systeem activeert (WOR art. 27).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida ai sensi del GDPR: di norma il legittimo interesse con test di bilanciamento, non il consenso del dipendente.',
        en: 'Identify a valid legal basis under the GDPR: usually legitimate interest with a balancing test, not the employee\'s consent.',
        de: 'Bestimme eine gültige Rechtsgrundlage nach der DSGVO: in der Regel das berechtigte Interesse mit einer Abwägungsprüfung, nicht die Einwilligung des Beschäftigten.',
        fr: "Déterminez une base juridique valable au titre du RGPD: en général l'intérêt légitime avec un test de mise en balance, et non le consentement du salarie.",
        es: 'Determina una base jurídica valida conforme al RGPD: por lo general el interés legítimo con una prueba de ponderación, no el consentimiento del empleado.',
        nl: 'Bepaal een geldige rechtsgrondslag op grond van de AVG: doorgaans het gerechtvaardigd belang met een afwegingstoets, niet de toestemming van de werknemer.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA): per il GPS sui veicoli dei dipendenti e per i dati di localizzazione su larga scala e richiesta.",
        en: "Carry out the impact assessment (DPIA): for GPS on employees' vehicles and for large-scale location data it is required.",
        de: 'Führe die Folgenabschätzung (DSFA) durch: für GPS in den Fahrzeugen der Beschäftigten und für Standortdaten im großen Umfang ist sie erforderlich.',
        fr: "Réalisez l'analyse d'impact (AIPD): pour le GPS sur les véhicules des salaries et pour les données de localisation a grande échelle, elle est requise.",
        es: 'Realiza la evaluación de impacto (EIPD): para el GPS en los vehículos de los empleados y para los datos de localización a gran escala es obligatoria.',
        nl: 'Voer de effectbeoordeling (DPIA) uit: voor GPS op de voertuigen van werknemers en voor grootschalige locatiegegevens is die vereist.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Informa i lavoratori in anticipo e in modo completo (art. 13 GDPR).',
        en: 'Inform workers in advance and fully (art. 13 GDPR).',
        de: 'Informiere die Beschäftigten im Voraus und vollständig (Art. 13 DSGVO).',
        fr: 'Informez les travailleurs a l\'avance et de manière complète (art. 13 RGPD).',
        es: 'Informa a los trabajadores con antelación y de forma completa (art. 13 RGPD).',
        nl: 'Informeer de werknemers vooraf en volledig (art. 13 AVG).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema con minimizzazione: solo viaggi di lavoro, niente tracciamento continuo o degli spostamenti privati.',
        en: 'Configure the system with data minimisation: work trips only, no continuous tracking or tracking of private movements.',
        de: 'Konfiguriere das System mit Datenminimierung: nur Dienstfahrten, keine dauerhafte Ortung und keine Ortung privater Fahrten.',
        fr: "Configurez le système avec la minimisation des données: uniquement les déplacements professionnels, pas de suivi continu ni des déplacements prives.",
        es: 'Configura el sistema con minimización de datos: solo desplazamientos de trabajo, sin seguimiento continuo ni de los desplazamientos privados.',
        nl: 'Configureer het systeem met dataminimalisatie: alleen zakelijke ritten, geen continue tracering of tracering van priveverplaatsingen.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: "Se la DPIA evidenzia un rischio elevato non mitigabile, consulta preventivamente l'AP (art. 36 GDPR).",
        en: 'If the DPIA reveals a high risk that cannot be mitigated, consult the AP beforehand (art. 36 GDPR).',
        de: 'Wenn die DSFA ein hohes, nicht zu minderndes Risiko aufzeigt, konsultiere vorab die AP (Art. 36 DSGVO).',
        fr: "Si l'AIPD révèle un risque élevé qui ne peut être atténue, consultez au préalable l'AP (art. 36 RGPD).",
        es: 'Si la EIPD revela un riesgo elevado que no puede mitigarse, consulta de antemano a la AP (art. 36 RGPD).',
        nl: 'Als de DPIA een hoog risico aantoont dat niet kan worden beperkt, raadpleeg dan vooraf de AP (art. 36 AVG).',
      },
    },
    {
      passo: 7,
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
      ente: 'Autoriteit Persoonsgegevens (AP)',
      portale: FONTE_AP.url,
      urlFonte: FONTE_AP.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '725.000 € (ridotta a 50.000 € in opposizione)',
      en: 'EUR 725,000 (reduced to EUR 50,000 on objection)',
      de: '725.000 EUR (im Widerspruchsverfahren auf 50.000 EUR reduziert)',
      fr: '725 000 EUR (ramenée à 50 000 EUR sur opposition)',
      es: '725.000 EUR (reducida a 50.000 EUR tras oposición)',
      nl: '725.000 EUR (in bezwaar verlaagd naar 50.000 EUR)',
    },
    casoCitato: {
      it: "Sanzione dell'Autoriteit Persoonsgegevens a un'azienda per il trattamento delle impronte digitali dei dipendenti per la rilevazione delle presenze: dato biometrico (art. 9 GDPR) trattato senza una base valida, perché il consenso dei dipendenti non e considerato libero per lo squilibrio di potere. Non e un caso di GPS ma e il caso faro olandese sul controllo presenze dei dipendenti. La multa iniziale di 725.000 € e stata ridotta a 50.000 € nel novembre 2020, in sede di opposizione, per la limitata capacita finanziaria dell'azienda durante la crisi da coronavirus.",
      en: "Fine from the Autoriteit Persoonsgegevens against a company for processing employees' fingerprints for attendance recording: biometric data (art. 9 GDPR) processed without a valid basis, because the employees' consent is not regarded as freely given owing to the imbalance of power. It is not a GPS case but it is the Dutch landmark case on employee attendance monitoring. The initial EUR 725,000 fine was reduced to EUR 50,000 in November 2020, on objection, because of the company's limited financial capacity during the coronavirus crisis.",
      de: "Bußgeld der Autoriteit Persoonsgegevens gegen ein Unternehmen wegen der Verarbeitung der Fingerabdrücke von Beschäftigten zur Zeiterfassung: biometrische Daten (Art. 9 DSGVO), die ohne gültige Grundlage verarbeitet wurden, da die Einwilligung der Beschäftigten wegen des Machtungleichgewichts nicht als freiwillig gilt. Es handelt sich nicht um einen GPS-Fall, aber um den niederländischen Leitfall zur Anwesenheitskontrolle von Beschäftigten. Das anfängliche Bußgeld von 725.000 EUR wurde im November 2020 im Widerspruchsverfahren wegen der begrenzten Leistungsfähigkeit des Unternehmens während der Corona-Krise auf 50.000 EUR reduziert.",
      fr: "Sanction de l'Autoriteit Persoonsgegevens contre une entreprise pour le traitement des empreintes digitales des salaries aux fins de relevé des présences: donnée biométrique (art. 9 RGPD) traitée sans base valable, car le consentement des salaries n'est pas considère comme libre en raison du déséquilibre de pouvoir. Ce n'est pas un cas de GPS mais c'est le cas de référence néerlandais sur le contrôle des présences des salaries. L'amende initiale de 725 000 EUR a été ramenée a 50 000 EUR en novembre 2020, sur opposition, en raison des capacités financières limitées de l'entreprise pendant la crise du coronavirus.",
      es: "Sanción de la Autoriteit Persoonsgegevens a una empresa por el tratamiento de las huellas dactilares de los empleados para el registro de la asistencia: dato biometrico (art. 9 RGPD) tratado sin una base valida, porque el consentimiento de los empleados no se considera libre por el desequilibrio de poder. No es un caso de GPS, pero es el caso de referencia neerlandés sobre el control de la asistencia de los empleados. La multa inicial de 725.000 EUR se redujo a 50.000 EUR en noviembre de 2020, tras la oposición, por la limitada capacidad económica de la empresa durante la crisis del coronavirus.",
      nl: "Boete van de Autoriteit Persoonsgegevens aan een bedrijf voor de verwerking van de vingerafdrukken van werknemers voor de aanwezigheidsregistratie: biometrisch gegeven (art. 9 AVG) verwerkt zonder een geldige grondslag, omdat de toestemming van de werknemers niet als vrij wordt beschouwd vanwege de machtsongelijkheid. Het is geen GPS-zaak, maar het is de Nederlandse richtinggevende zaak over de aanwezigheidscontrole van werknemers. De oorspronkelijke boete van 725.000 EUR is in november 2020 in bezwaar verlaagd naar 50.000 EUR, vanwege de beperkte draagkracht van het bedrijf tijdens de coronacrisis.",
    },
    urlFonte: FONTE_AP_IMPRONTE.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_WOR_27,
    FONTE_AP_DPIA,
    FONTE_AP_CONDIZIONI,
    FONTE_AP_IMPRONTE,
    FONTE_EUROFOUND,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-08-03',
};
