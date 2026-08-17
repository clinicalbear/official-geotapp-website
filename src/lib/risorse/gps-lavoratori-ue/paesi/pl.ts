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
  titolo: 'Kodeks pracy, art. 22(2) (monitoraggio), testo consolidato ISAP (Sejm)',
  url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20250000277',
};
const FONTE_KP_22_3 = {
  titolo: 'Kodeks pracy, art. 22(3) (altre forme di monitoraggio, incl. GPS), testo consolidato ISAP (Sejm)',
  url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20250000277',
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
    verificatoIl: '2026-06-15',
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
        it: "il Codice del lavoro polacco disciplina espressamente il monitoraggio: finalità, portata e modalità vanno stabilite nel contratto collettivo, nel regolamento del lavoro o in un avviso, e le regole sul monitoraggio video si applicano anche alle altre forme (GPS incluso).",
        en: 'the Polish Labour Code expressly governs monitoring: purpose, scope and methods must be set out in the collective agreement, the work regulations or a notice, and the rules on video monitoring also apply to other forms (GPS included).',
        de: 'das polnische Arbeitsgesetzbuch regelt die Überwachung ausdrücklich: Zweck, Umfang und Art müssen im Tarifvertrag, in der Arbeitsordnung oder in einer Bekanntmachung festgelegt werden, und die Regeln zur Videoüberwachung gelten auch für andere Formen (GPS eingeschlossen).',
        fr: "le Code du travail polonais régit expressément la surveillance: la finalité, la portée et les modalités doivent être fixées dans la convention collective, le règlement du travail ou un avis, et les règles sur la vidéosurveillance s'appliquent aussi aux autres formes (GPS compris).",
        es: 'el Código de trabajo polaco regula expresamente el monitoreo: la finalidad, el alcance y las modalidades deben establecerse en el convenio colectivo, el reglamento de trabajo o un aviso, y las reglas sobre videovigilancia se aplican también a las demás formas (GPS incluido).',
        nl: 'het Poolse arbeidswetboek regelt monitoring uitdrukkelijk: doel, omvang en wijze moeten worden vastgelegd in de collectieve overeenkomst, het arbeidsreglement of een kennisgeving, en de regels voor cameratoezicht gelden ook voor andere vormen (GPS inbegrepen).',
      },
      fonte: FONTE_KP_22_3,
    },
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori almeno 2 settimane prima, e per iscritto al neoassunto (art. 22(2) par. 7-8)',
        en: 'Prior information to workers at least 2 weeks in advance, and in writing to the new hire (art. 22(2) par. 7-8)',
        de: 'Vorherige Information der Beschäftigten mindestens 2 Wochen im Voraus und schriftlich an den neu Eingestellten (Art. 22(2) Abs. 7-8)',
        fr: "Information préalable des salaries au moins 2 semaines a l'avance, et par écrit au nouvel embauche (art. 22(2) par. 7-8)",
        es: 'Información previa a los trabajadores con al menos 2 semanas de antelación, y por escrito al nuevo contratado (art. 22(2) par. 7-8)',
        nl: 'Voorafgaande informatie aan werknemers ten minste 2 weken van tevoren, en schriftelijk aan de nieuwe medewerker (art. 22(2) lid 7-8)',
      },
      risposta: 'si',
      dettaglio: {
        it: "il datore informa i lavoratori dell'introduzione del monitoraggio almeno due settimane prima dell'avvio, e consegna l'informazione per iscritto al neoassunto prima di adibirlo al lavoro.",
        en: 'the employer informs the workers of the introduction of monitoring at least two weeks before it starts, and gives the information in writing to the new hire before assigning them to work.',
        de: 'der Arbeitgeber informiert die Beschäftigten über die Einführung der Überwachung mindestens zwei Wochen vor dem Beginn und übergibt dem neu Eingestellten die Information schriftlich, bevor er ihn zur Arbeit einsetzt.',
        fr: "l'employeur informe les salaries de l'introduction de la surveillance au moins deux semaines avant son démarrage, et remet l'information par écrit au nouvel embauche avant de l'affecter au travail.",
        es: 'el empleador informa a los trabajadores de la introducción del monitoreo al menos dos semanas antes de su inicio, y entrega la información por escrito al nuevo contratado antes de asignarle el trabajo.',
        nl: 'de werkgever informeert de werknemers over de invoering van monitoring ten minste twee weken voor de start, en overhandigt de informatie schriftelijk aan de nieuwe medewerker voordat deze aan het werk wordt gezet.',
      },
      fonte: FONTE_KP_22_2,
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
        it: "non serve un'autorizzazione preventiva dell'UODO; la procedura e interna (regole nel regolamento/avviso, informazione, segnalazione delle aree) più il rispetto del GDPR.",
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
        it: "per l'UODO il datore non e legittimato a raccogliere dati sugli spostamenti privati del lavoratore (salvo casi eccezionali come furto del veicolo); se il veicolo e usato anche privatamente vanno previste regole e la disattivazione fuori servizio. Il rischio per i diritti deve essere proporzionato allo scopo.",
        en: 'for the UODO the employer is not entitled to collect data on the worker\'s private movements (save for exceptional cases such as theft of the vehicle); if the vehicle is also used privately, rules and deactivation outside service must be provided. The risk to rights must be proportionate to the purpose.',
        de: 'für die UODO ist der Arbeitgeber nicht berechtigt, Daten über die privaten Bewegungen des Beschäftigten zu erheben (außer in Ausnahmefällen wie dem Diebstahl des Fahrzeugs); wird das Fahrzeug auch privat genutzt, sind Regeln und die Deaktivierung außerhalb des Dienstes vorzusehen. Das Risiko für die Rechte muss im Verhältnis zum Zweck stehen.',
        fr: "pour l'UODO, l'employeur n'est pas autorisé a collecter des données sur les déplacements prives du salarie (sauf cas exceptionnels comme le vol du véhicule); si le véhicule est également utilise a titre prive, des règles et la désactivation hors service doivent être prévues. Le risque pour les droits doit être proportionné a la finalité.",
        es: 'para la UODO el empleador no esta legitimado para recopilar datos sobre los desplazamientos privados del trabajador (salvo casos excepcionales como el robo del vehículo); si el vehículo se usa también de forma privada, deben preverse reglas y la desactivación fuera de servicio. El riesgo para los derechos debe ser proporcionado a la finalidad.',
        nl: 'voor de UODO is de werkgever niet gerechtigd gegevens te verzamelen over de prive-verplaatsingen van de werknemer (behoudens uitzonderlijke gevallen zoals diefstal van het voertuig); wordt het voertuig ook prive gebruikt, dan moeten regels en uitschakeling buiten dienst worden voorzien. Het risico voor de rechten moet evenredig zijn aan het doel.',
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
        it: "la lista UODO dei trattamenti che richiedono una valutazione d'impatto include espressamente il trattamento dei dati di localizzazione dei lavoratori e il monitoraggio sistematico nel contesto del lavoro.",
        en: 'the UODO list of processing operations that require an impact assessment expressly includes the processing of workers\' location data and systematic monitoring in the work context.',
        de: 'die UODO-Liste der Verarbeitungen, die eine Folgenabschätzung erfordern, umfasst ausdrücklich die Verarbeitung der Standortdaten der Beschäftigten und die systematische Überwachung im Arbeitskontext.',
        fr: "la liste UODO des traitements qui requièrent une analyse d'impact inclut expressément le traitement des données de localisation des salaries et la surveillance systématique dans le contexte du travail.",
        es: 'la lista UODO de los tratamientos que requieren una evaluación de impacto incluye expresamente el tratamiento de los datos de localización de los trabajadores y el monitoreo sistemático en el contexto laboral.',
        nl: 'de UODO-lijst van verwerkingen die een effectbeoordeling vereisen, omvat uitdrukkelijk de verwerking van de locatiegegevens van werknemers en systematische monitoring in de werkcontext.',
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
        it: "Informa i lavoratori almeno due settimane prima dell'avvio; consegna l'informazione per iscritto al neoassunto prima del lavoro.",
        en: 'Inform the workers at least two weeks before the start; give the information in writing to the new hire before work begins.',
        de: 'Informieren Sie die Beschäftigten mindestens zwei Wochen vor dem Beginn; übergeben Sie dem neu Eingestellten die Information schriftlich vor der Arbeit.',
        fr: "Informez les salaries au moins deux semaines avant le démarrage; remettez l'information par écrit au nouvel embauche avant le travail.",
        es: 'Informe a los trabajadores al menos dos semanas antes del inicio; entregue la información por escrito al nuevo contratado antes del trabajo.',
        nl: 'Informeer de werknemers ten minste twee weken voor de start; overhandig de informatie schriftelijk aan de nieuwe medewerker voor het werk.',
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
      ente: 'UODO, reclami',
      portale: FONTE_UODO_RECLAMO.url,
      urlFonte: FONTE_UODO_RECLAMO.url,
      verificatoIl: '2026-06-15',
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
      it: 'UODO contro Centrum Medyczne Ujastek (Cracovia, decisione DKN.5131.4.2024): videosorveglianza installata in due stanze di neonatologia senza che ne fossero informati pazienti ne dipendenti, più sicurezza inadeguata delle registrazioni. Multa complessiva 1.145.891 PLN (circa 266.000 euro). Non e un caso di GPS, ma riguarda il monitoraggio dei dipendenti non comunicato.',
      en: 'UODO against Centrum Medyczne Ujastek (Krakow, decision DKN.5131.4.2024): video surveillance installed in two neonatology rooms without informing either patients or employees, plus inadequate security of the recordings. Total fine 1,145,891 PLN (about 266,000 euro). It is not a GPS case, but it concerns undisclosed monitoring of employees.',
      de: 'UODO gegen Centrum Medyczne Ujastek (Krakau, Entscheidung DKN.5131.4.2024): Videoüberwachung in zwei Räumen der Neonatologie installiert, ohne dass Patienten oder Beschäftigte darüber informiert wurden, dazu unzureichende Sicherheit der Aufzeichnungen. Gesamtgeldbusse 1.145.891 PLN (rund 266.000 Euro). Es ist kein GPS-Fall, betrifft aber die nicht mitgeteilte Überwachung der Beschäftigten.',
      fr: "UODO contre Centrum Medyczne Ujastek (Cracovie, décision DKN.5131.4.2024): vidéosurveillance installée dans deux salles de néonatologie sans que les patients ni les employés en soient informes, ainsi qu'une securite inadéquate des enregistrements. Amende totale de 1 145 891 PLN (environ 266 000 euros). Ce n'est pas un cas de GPS, mais il concerne la surveillance non communiquée des employés.",
      es: 'UODO contra Centrum Medyczne Ujastek (Cracovia, decisión DKN.5131.4.2024): videovigilancia instalada en dos salas de neonatología sin que se informara ni a los pacientes ni a los empleados, mas una seguridad inadecuada de las grabaciones. Multa total de 1.145.891 PLN (unos 266.000 euros). No es un caso de GPS, pero se refiere al monitoreo no comunicado de los empleados.',
      nl: 'UODO tegen Centrum Medyczne Ujastek (Krakau, besluit DKN.5131.4.2024): cameratoezicht geinstalleerd in twee neonatologieruimtes zonder dat patienten noch werknemers daarvan op de hoogte werden gebracht, plus onvoldoende beveiliging van de opnamen. Totale boete van 1.145.891 PLN (ongeveer 266.000 euro). Het is geen GPS-zaak, maar het betreft niet-meegedeelde monitoring van werknemers.',
    },
    urlFonte: FONTE_UODO_UJASTEK.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_KP_22_2,
    FONTE_KP_22_3,
    FONTE_UODO_GUIDA,
    FONTE_UODO_DPIA,
    FONTE_UODO_RECLAMO,
    FONTE_UODO_UJASTEK,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
