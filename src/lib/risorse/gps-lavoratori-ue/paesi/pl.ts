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
      fr: "La Pologne dispose d'une seule autorité nationale, l'UODO; aucune répartition régionale.",
      es: 'Polonia tiene una única autoridad nacional, la UODO; sin reparto regional.',
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
        es: 'Finalidad, alcance y modalidades del monitoreo fijados en un convenio colectivo, el reglamento de trabajo o un aviso (Kodeks pracy art. 22(2)/22(3))',
        nl: 'Doel, omvang en wijze van monitoring vastgelegd in een collectieve overeenkomst, een arbeidsreglement of een kennisgeving (Kodeks pracy art. 22(2)/22(3))',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il Codice del lavoro polacco disciplina espressamente il monitoraggio: finalità, portata e modalità vanno stabilite nel contratto collettivo, nel regolamento del lavoro o in un avviso, e queste stesse regole valgono anche per le altre forme di monitoraggio (GPS incluso) quando sono necessarie all'organizzazione del lavoro e al corretto uso degli strumenti di lavoro.",
        en: 'the Polish Labour Code expressly governs monitoring: purpose, scope and methods must be set out in the collective agreement, the work regulations or a notice, and these same rules also apply to other forms of monitoring (GPS included) where necessary for organising work and the proper use of work tools.',
        de: 'das polnische Arbeitsgesetzbuch regelt die Überwachung ausdrücklich: Zweck, Umfang und Art müssen im Tarifvertrag, in der Arbeitsordnung oder in einer Bekanntmachung festgelegt werden, und dieselben Regeln gelten auch für andere Überwachungsformen (GPS eingeschlossen), wenn sie für die Arbeitsorganisation und die ordnungsgemäße Nutzung der Arbeitsmittel erforderlich sind.',
        fr: "le Code du travail polonais régit expressément la surveillance: la finalité, la portée et les modalités doivent être fixées dans la convention collective, le règlement du travail ou un avis, et ces mêmes règles s'appliquent aussi aux autres formes de surveillance (GPS compris) lorsqu'elles sont nécessaires à l'organisation du travail et à l'usage correct des outils de travail.",
        es: 'el Código de trabajo polaco regula expresamente el monitoreo: la finalidad, el alcance y las modalidades deben establecerse en el convenio colectivo, el reglamento de trabajo o un aviso, y esas mismas reglas se aplican también a las demás formas de monitoreo (GPS incluido) cuando son necesarias para la organización del trabajo y el uso adecuado de las herramientas de trabajo.',
        nl: 'het Poolse arbeidswetboek regelt monitoring uitdrukkelijk: doel, omvang en wijze moeten worden vastgelegd in de collectieve overeenkomst, het arbeidsreglement of een kennisgeving, en diezelfde regels gelden ook voor andere vormen van monitoring (GPS inbegrepen) wanneer die nodig zijn voor de organisatie van het werk en het juiste gebruik van de werkmiddelen.',
      },
      fonte: FONTE_KP_22_3,
    },
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori almeno 2 settimane prima, e su carta o in forma elettronica al neoassunto (art. 22(2) par. 7-8)',
        en: 'Prior information to workers at least 2 weeks in advance, and on paper or electronically to the new hire (art. 22(2) par. 7-8)',
        de: 'Vorherige Information der Beschäftigten mindestens 2 Wochen im Voraus und in Papier- oder elektronischer Form an den neu Eingestellten (Art. 22(2) Abs. 7-8)',
        fr: "Information préalable des salaries au moins 2 semaines a l'avance, et sur papier ou sous forme électronique au nouvel embauché (art. 22(2) par. 7-8)",
        es: 'Información previa a los trabajadores con al menos 2 semanas de antelación, y en papel o en formato electrónico al nuevo contratado (art. 22(2) par. 7-8)',
        nl: 'Voorafgaande informatie aan werknemers ten minste 2 weken van tevoren, en op papier of elektronisch aan de nieuwe medewerker (art. 22(2) lid 7-8)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore informa i lavoratori dell'introduzione del monitoraggio almeno due settimane prima dell'avvio, e consegna l'informazione su carta o in forma elettronica al neoassunto prima di adibirlo al lavoro.",
        en: 'the employer informs the workers of the introduction of monitoring at least two weeks before it starts, and gives the information on paper or electronically to the new hire before assigning them to work.',
        de: 'der Arbeitgeber informiert die Beschäftigten über die Einführung der Überwachung mindestens zwei Wochen vor dem Beginn und übergibt dem neu Eingestellten die Information in Papier- oder elektronischer Form, bevor er ihn zur Arbeit einsetzt.',
        fr: "l'employeur informe les salaries de l'introduction de la surveillance au moins deux semaines avant son démarrage, et remet l'information sur papier ou sous forme électronique au nouvel embauché avant de l'affecter au travail.",
        es: 'el empleador informa a los trabajadores de la introducción del monitoreo al menos dos semanas antes de su inicio, y entrega la información en papel o en formato electrónico al nuevo contratado antes de asignarle el trabajo.',
        nl: 'de werkgever informeert de werknemers over de invoering van monitoring ten minste twee weken voor de start, en overhandigt de informatie op papier of elektronisch aan de nieuwe medewerker voordat deze aan het werk wordt gezet.',
      },
      fonte: FONTE_DU_2026_25,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'UODO; la procedura è interna (regole nel regolamento/avviso, informazione, segnalazione delle aree) più il rispetto del GDPR.",
        en: 'no prior authorisation from the UODO is required; the procedure is internal (rules in the regulations/notice, information, marking of areas) plus compliance with the GDPR.',
        de: 'eine vorherige Genehmigung der UODO ist nicht erforderlich; das Verfahren ist intern (Regeln in der Ordnung/Bekanntmachung, Information, Kennzeichnung der Bereiche) zuzüglich der Einhaltung der DSGVO.',
        fr: "aucune autorisation préalable de l'UODO n'est requise; la procédure est interne (règles dans le règlement/avis, information, signalisation des zones) plus le respect du RGPD.",
        es: 'no se requiere una autorización previa de la UODO; el procedimiento es interno (reglas en el reglamento/aviso, información, señalización de las áreas) mas el cumplimiento del RGPD.',
        nl: 'er is geen voorafgaande toestemming van de UODO nodig; de procedure is intern (regels in het reglement/de kennisgeving, informatie, markering van de zones) plus naleving van de AVG.',
      },
      fonte: FONTE_UODO_GUIDA,
    },
    {
      voce: {
        it: 'Niente tracciamento degli spostamenti privati o fuori orario; proporzionalità (UODO)',
        en: 'No tracking of private movements or outside working hours; proportionality (UODO)',
        de: 'Keine Verfolgung privater Bewegungen oder außerhalb der Arbeitszeit; Verhältnismäßigkeit (UODO)',
        fr: 'Aucun suivi des déplacements prives ou hors des heures de travail; proportionnalité (UODO)',
        es: 'Sin rastreo de los desplazamientos privados o fuera del horario; proporcionalidad (UODO)',
        nl: 'Geen volgen van prive-verplaatsingen of buiten werktijd; evenredigheid (UODO)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'UODO il datore non è legittimato a raccogliere dati sugli spostamenti privati del lavoratore (salvo casi eccezionali come furto del veicolo); se il veicolo è usato anche privatamente la guida indica di stabilire che è solo di servizio oppure di adeguare il regolamento d'uso, ottenere il consenso del lavoratore per quei dati e dargli l'informativa. Il rischio per i diritti deve essere proporzionato allo scopo.",
        en: 'for the UODO the employer is not entitled to collect data on the worker\'s private movements (save for exceptional cases such as theft of the vehicle); if the vehicle is also used privately, the guide says to either provide that it is for work use only or to adapt the vehicle-use rules, obtain the worker\'s consent for that data and give the information notice. The risk to rights must be proportionate to the purpose.',
        de: 'für die UODO ist der Arbeitgeber nicht berechtigt, Daten über die privaten Bewegungen des Beschäftigten zu erheben (außer in Ausnahmefällen wie dem Diebstahl des Fahrzeugs); wird das Fahrzeug auch privat genutzt, empfiehlt der Leitfaden, entweder die ausschließlich dienstliche Nutzung festzulegen oder die Nutzungsregeln anzupassen, die Einwilligung des Beschäftigten für diese Daten einzuholen und die Information zu erteilen. Das Risiko für die Rechte muss im Verhältnis zum Zweck stehen.',
        fr: "pour l'UODO, l'employeur n'est pas autorisé a collecter des données sur les déplacements prives du salarie (sauf cas exceptionnels comme le vol du véhicule); si le véhicule est également utilise a titre prive, le guide indique de prévoir un usage exclusivement professionnel ou d'adapter le règlement d'usage, d'obtenir le consentement du salarie pour ces données et de lui remettre l'information. Le risque pour les droits doit être proportionné a la finalité.",
        es: 'para la UODO el empleador no esta legitimado para recopilar datos sobre los desplazamientos privados del trabajador (salvo casos excepcionales como el robo del vehículo); si el vehículo se usa también de forma privada, la guía indica establecer que es solo de servicio o bien adaptar el reglamento de uso, obtener el consentimiento del trabajador para esos datos y darle la información. El riesgo para los derechos debe ser proporcionado a la finalidad.',
        nl: 'voor de UODO is de werkgever niet gerechtigd gegevens te verzamelen over de prive-verplaatsingen van de werknemer (behoudens uitzonderlijke gevallen zoals diefstal van het voertuig); wordt het voertuig ook prive gebruikt, dan schrijft de gids voor het uitsluitend voor het werk te bestemmen of het gebruiksreglement aan te passen, de toestemming van de werknemer voor die gegevens te verkrijgen en hem te informeren. Het risico voor de rechten moet evenredig zijn aan het doel.',
      },
      fonte: FONTE_UODO_GUIDA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per i dati di localizzazione dei lavoratori (lista UODO)",
        en: 'Impact assessment (DPIA) for workers\' location data (UODO list)',
        de: 'Folgenabschätzung (DSFA) für die Standortdaten der Beschäftigten (UODO-Liste)',
        fr: "Analyse d'impact (AIPD) pour les données de localisation des salaries (liste UODO)",
        es: 'Evaluación de impacto (EIPD) para los datos de localización de los trabajadores (lista UODO)',
        nl: 'Effectbeoordeling (DPIA) voor de locatiegegevens van werknemers (UODO-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista UODO funziona per criteri: di norma la DPIA serve quando ne ricorrono almeno due. Tra gli esempi ci sono il monitoraggio sistematico dei lavoratori e il trattamento regolare di dati che permettono di osservare gli spostamenti sul territorio (per esempio i dati di geolocalizzazione). Il GPS sui lavoratori ne integra di norma più di uno.",
        en: 'the UODO list works by criteria: as a rule an impact assessment is needed when at least two apply. Its examples include systematic monitoring of workers and regular processing of data that lets movements across the territory be observed (for example geolocation data). GPS on workers normally meets more than one.',
        de: 'die UODO-Liste arbeitet mit Kriterien: in der Regel ist eine Folgenabschätzung nötig, wenn mindestens zwei zutreffen. Zu den Beispielen gehören die systematische Überwachung von Beschäftigten und die regelmäßige Verarbeitung von Daten, die die Beobachtung von Bewegungen im Gelände erlauben (etwa Geolokalisierungsdaten). GPS bei Beschäftigten erfüllt in der Regel mehr als ein Kriterium.',
        fr: "la liste UODO fonctionne par critères : en règle générale, une analyse d'impact est requise lorsqu'au moins deux critères sont réunis. Parmi les exemples figurent la surveillance systématique des salaries et le traitement régulier de données permettant d'observer les déplacements sur le terrain (par exemple les données de géolocalisation). Le GPS sur les salaries remplit en général plus d'un critère.",
        es: 'la lista UODO funciona por criterios: por regla general la evaluación de impacto es necesaria cuando concurren al menos dos. Entre los ejemplos figuran el monitoreo sistemático de los trabajadores y el tratamiento regular de datos que permiten observar los desplazamientos en el terreno (por ejemplo, los datos de geolocalización). El GPS sobre los trabajadores cumple normalmente más de un criterio.',
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
        es: 'Establezca la finalidad, el alcance y las modalidades del monitoreo en el convenio colectivo, el reglamento de trabajo o un aviso.',
        nl: 'Leg het doel, de omvang en de wijze van monitoring vast in de collectieve overeenkomst, het arbeidsreglement of een kennisgeving.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Informa i lavoratori almeno due settimane prima dell'avvio; consegna l'informazione su carta o in forma elettronica al neoassunto prima del lavoro.",
        en: 'Inform the workers at least two weeks before the start; give the information on paper or electronically to the new hire before work begins.',
        de: 'Informieren Sie die Beschäftigten mindestens zwei Wochen vor dem Beginn; übergeben Sie dem neu Eingestellten die Information in Papier- oder elektronischer Form vor der Arbeit.',
        fr: "Informez les salaries au moins deux semaines avant le démarrage; remettez l'information sur papier ou sous forme électronique au nouvel embauché avant le travail.",
        es: 'Informe a los trabajadores al menos dos semanas antes del inicio; entregue la información en papel o en formato electrónico al nuevo contratado antes del trabajo.',
        nl: 'Informeer de werknemers ten minste twee weken voor de start; overhandig de informatie op papier of elektronisch aan de nieuwe medewerker voor het werk.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Individua una base giuridica valida ai sensi del GDPR (di norma interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis under the GDPR (as a rule legitimate interest, not consent).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage nach der DSGVO (in der Regel berechtigtes Interesse, nicht die Einwilligung).',
        fr: 'Déterminez une base juridique valable au titre du RGPD (en règle generale l\'intérêt légitime, non le consentement).',
        es: 'Determine una base jurídica valida conforme al RGPD (por regla general el interés legítimo, no el consentimiento).',
        nl: 'Bepaal een geldige rechtsgrondslag op grond van de AVG (in de regel gerechtvaardigd belang, niet toestemming).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per i dati di localizzazione dei lavoratori.",
        en: 'Carry out the impact assessment (DPIA) for workers\' location data.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) für die Standortdaten der Beschäftigten durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour les données de localisation des salaries.",
        es: 'Realice la evaluación de impacto (EIPD) para los datos de localización de los trabajadores.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de locatiegegevens van werknemers.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente tracciamento privato/fuori orario, finalità coincidente con l\'uso reale.',
        en: 'Configure the system: no private/off-hours tracking, purpose matching actual use.',
        de: 'Konfigurieren Sie das System: keine private Verfolgung/außerhalb der Arbeitszeit, Zweck deckungsgleich mit der tatsächlichen Nutzung.',
        fr: "Configurez le système: aucun suivi prive/hors des heures, finalité correspondant a l'usage réel.",
        es: 'Configure el sistema: sin rastreo privado/fuera del horario, finalidad coincidente con el uso real.',
        nl: 'Configureer het systeem: geen prive-/buiten-werktijd-tracking, doel dat overeenkomt met het werkelijke gebruik.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
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
      en: 'about 266,000 € (1,145,891 PLN)',
      de: 'rund 266.000 € (1.145.891 PLN)',
      fr: 'environ 266 000 € (1 145 891 PLN)',
      es: 'unos 266.000 € (1.145.891 PLN)',
      nl: 'ongeveer 266.000 € (1.145.891 PLN)',
    },
    casoCitato: {
      it: 'UODO contro Centrum Medyczne Ujastek (Cracovia, decisione DKN.5131.4.2024): videosorveglianza installata in due stanze di neonatologia senza che ne fossero informati pazienti ne dipendenti, più sicurezza inadeguata delle registrazioni. Multa complessiva 1.145.891 PLN (circa 266.000 euro). Non è un caso di GPS, ma riguarda il monitoraggio dei dipendenti non comunicato.',
      en: 'UODO against Centrum Medyczne Ujastek (Krakow, decision DKN.5131.4.2024): video surveillance installed in two neonatology rooms without informing either patients or employees, plus inadequate security of the recordings. Total fine 1,145,891 PLN (about 266,000 euro). It is not a GPS case, but it concerns undisclosed monitoring of employees.',
      de: 'UODO gegen Centrum Medyczne Ujastek (Krakau, Entscheidung DKN.5131.4.2024): Videoüberwachung in zwei Räumen der Neonatologie installiert, ohne dass Patienten oder Beschäftigte darüber informiert wurden, dazu unzureichende Sicherheit der Aufzeichnungen. Gesamtgeldbuße 1.145.891 PLN (rund 266.000 Euro). Es ist kein GPS-Fall, betrifft aber die nicht mitgeteilte Überwachung der Beschäftigten.',
      fr: "UODO contre Centrum Medyczne Ujastek (Cracovie, décision DKN.5131.4.2024): vidéosurveillance installée dans deux salles de néonatologie sans que les patients ni les employés en soient informes, ainsi qu'une securite inadéquate des enregistrements. Amende totale de 1 145 891 PLN (environ 266 000 euros). Ce n'est pas un cas de GPS, mais il concerne la surveillance non communiquée des employés.",
      es: 'UODO contra Centrum Medyczne Ujastek (Cracovia, decisión DKN.5131.4.2024): videovigilancia instalada en dos salas de neonatología sin que se informara ni a los pacientes ni a los empleados, mas una seguridad inadecuada de las grabaciones. Multa total de 1.145.891 PLN (unos 266.000 euros). No es un caso de GPS, pero se refiere al monitoreo no comunicado de los empleados.',
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
