/**
 * Scheda-paese Islanda per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Regole n. 50/2023 sulla sorveglianza elettronica, FAQ del Persónuvernd (Garante
 * islandese) sul GPS, lista Persónuvernd dei trattamenti che richiedono una DPIA
 * (Auglýsing nr. 828/2019), pagina dei reclami al Persónuvernd, decisione
 * Islandspostur sull'uso illecito del GPS su un dipendente e GDPR.
 *
 * L'Islanda fa parte del SEE e applica il GDPR; ha un'unica autorita nazionale,
 * il Persónuvernd, senza ripartizione regionale. Nessun numero, URL o autorita e
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_REGOLE_50_2023 = {
  titolo:
    'Regole n. 50/2023 sulla sorveglianza elettronica (Gazzetta ufficiale)',
  url: 'https://island.is/stjornartidindi/nr/00ede50f-ff8e-4a44-9bb1-019e440b32e1',
};
const FONTE_PERSUVERND_GPS = {
  titolo:
    'Persónuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione',
  url: 'https://www.personuvernd.is/einstaklingar/spurt-og-svarad/allar-spurningar-og-svor/hvada-reglur-gilda-um-okurita-og-annan-rafraenan-stadsetningarbunad',
};
const FONTE_PERSUVERND_DPIA = {
  titolo:
    'Persónuvernd, lista dei trattamenti che richiedono una DPIA (Auglýsing nr. 828/2019)',
  url: 'https://island.is/stjornartidindi/nr/7034a38d-0b61-4f7a-b3ef-a63252df0d6e',
};
const FONTE_PERSUVERND_RECLAMO = {
  titolo: 'Persónuvernd, presentare un reclamo',
  url: 'https://island.is/kvortun-til-personuverndar',
};
const FONTE_PERSUVERND_ISLANDSPOSTUR = {
  titolo:
    'Persónuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)',
  url: 'https://www.personuvernd.is/urlausnir/rafraen-voktun-af-halfu-islandsposts',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const islanda: SchedaPaese = {
  codiceISO: 'IS',
  slugCanonico: 'islanda',
  nome: 'Islanda',
  nomi: {
    it: 'Islanda',
    en: 'Iceland',
    'en-us': 'Iceland',
    'en-gb': 'Iceland',
    'en-au': 'Iceland',
    'en-ie': 'Iceland',
    'en-ca': 'Iceland',
    de: 'Island',
    nl: 'IJsland',
    fr: 'Islande',
    es: 'Islandia',
    pt: 'Islândia',
    da: 'Island',
    sv: 'Island',
    nb: 'Island',
    ru: 'Исландия',
  },
  bandiera: '🇮🇸',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'Persónuvernd (Garante islandese per la protezione dei dati)',
      en: 'Persónuvernd (Icelandic Data Protection Authority)',
      de: 'Persónuvernd (Isländische Datenschutzbehörde)',
      fr: 'Persónuvernd (Autorité islandaise de protection des données)',
      es: 'Persónuvernd (Autoridad islandesa de protección de datos)',
      nl: 'Persónuvernd (IJslandse gegevensbeschermingsautoriteit)',
      pt: 'Persónuvernd (Autoridade islandesa de proteção de dados)',
      da: 'Persónuvernd (Islandsk databeskyttelsesmyndighed)',
      sv: 'Persónuvernd (Isländska dataskyddsmyndigheten)',
      nb: 'Persónuvernd (Islandsk datatilsyn)',
      ru: 'Persónuvernd (Исландский орган по защите данных)',
    },
    portale: FONTE_PERSUVERND_RECLAMO.url,
    urlFonte: 'https://www.personuvernd.is/',
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Islanda (SEE) ha un'unica autorità nazionale, il Persónuvernd; nessuna ripartizione regionale.",
      en: 'Iceland (EEA) has a single national authority, the Persónuvernd; no regional breakdown.',
      de: 'Island (EWR) hat eine einzige nationale Behörde, die Persónuvernd; keine regionale Aufteilung.',
      fr: "L'Islande (EEE) dispose d'une seule autorité nationale, le Persónuvernd; aucune répartition régionale.",
      es: 'Islandia (EEE) tiene una única autoridad nacional, el Persónuvernd; sin reparto regional.',
      nl: 'IJsland (EER) heeft een enkele nationale autoriteit, de Persónuvernd; geen regionale opdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Informazione preventiva ai lavoratori e cartello sull'area sorvegliata (Regole 50/2023)",
        en: 'Prior information to workers and a sign about the monitored area (Rules 50/2023)',
        de: 'Vorherige Information der Beschäftigten und ein Schild zum überwachten Bereich (Regeln 50/2023)',
        fr: "Information préalable des travailleurs et panneau sur la zone surveillée (Règles 50/2023)",
        es: 'Información previa a los trabajadores y cartel sobre la zona vigilada (Reglas 50/2023)',
        nl: 'Voorafgaande informatie aan werknemers en een bord over het bewaakte gebied (Regels 50/2023)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La sorveglianza elettronica richiede una finalità chiara e lecita; chi sorveglia deve dare avviso con un cartello o in altro modo evidente prima che la persona entri nell'area sorvegliata.",
        en: 'Electronic monitoring requires a clear and lawful purpose; whoever monitors must give notice with a sign or in another evident way before the person enters the monitored area.',
        de: 'Die elektronische Überwachung erfordert einen klaren und rechtmassigen Zweck; wer überwacht, muss durch ein Schild oder auf andere offensichtliche Weise Hinweis geben, bevor die Person den überwachten Bereich betritt.',
        fr: "La surveillance électronique exige une finalité claire et licite; celui qui surveille doit en avertir par un panneau ou d'une autre manière évidente avant que la personne entre dans la zone surveillée.",
        es: 'La vigilancia electrónica exige una finalidad clara y licita; quien vigila debe avisar con un cartel o de otro modo evidente antes de que la persona entre en la zona vigilada.',
        nl: 'Elektronisch toezicht vereist een duidelijk en rechtmatig doel; wie toezicht houdt, moet dit kenbaar maken met een bord of op een andere duidelijke wijze voordat de persoon het bewaakte gebied betreedt.',
      },
      fonte: FONTE_REGOLE_50_2023,
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
        it: "Non serve un'autorizzazione preventiva del Persónuvernd; il titolare valuta da se e documenta la liceità, con DPIA quando richiesta.",
        en: 'No prior authorisation from the Persónuvernd is required; the controller assesses on its own and documents lawfulness, with a DPIA where required.',
        de: 'Eine vorherige Genehmigung der Persónuvernd ist nicht erforderlich; der Verantwortliche beurteilt selbst und dokumentiert die Rechtmassigkeit, mit einer DSFA, sofern erforderlich.',
        fr: "Aucune autorisation préalable du Persónuvernd n'est requise; le responsable évalue lui-même et documente la licéité, avec une AIPD lorsque cela est requis.",
        es: 'No se necesita autorización previa del Persónuvernd; el responsable evalúa por si mismo y documenta la licitud, con una EIPD cuando se requiera.',
        nl: 'Er is geen voorafgaande toestemming van de Persónuvernd nodig; de verwerkingsverantwoordelijke beoordeelt zelf en documenteert de rechtmatigheid, met een DPIA waar vereist.',
      },
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: {
        it: 'Base = interesse legittimo con test documentato, non il consenso',
        en: 'Basis = legitimate interest with a documented test, not consent',
        de: 'Grundlage = berechtigtes Interesse mit dokumentierter Abwägung, nicht Einwilligung',
        fr: "Base = intérêt légitime avec un test documente, pas le consentement",
        es: 'Base = interés legítimo con una prueba documentada, no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang met een gedocumenteerde afweging, niet toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base più pertinente e l'interesse legittimo del datore; il datore deve svolgere una valutazione documentata di prevalenza rispetto ai diritti dei lavoratori. Il consenso di norma non e valido nel rapporto di lavoro.",
        en: 'The most relevant basis is the employer legitimate interest; the employer must carry out a documented balancing assessment against workers rights. Consent is generally not valid in the employment relationship.',
        de: 'Die einschlagigste Grundlage ist das berechtigte Interesse des Arbeitgebers; der Arbeitgeber muss eine dokumentierte Abwägung gegenüber den Rechten der Beschäftigten vornehmen. Die Einwilligung ist im Arbeitsverhältnis in der Regel nicht gültig.',
        fr: "La base la plus pertinente est l'intérêt légitime de l'employeur; l'employeur doit réaliser une évaluation documentée de prévalence par rapport aux droits des travailleurs. Le consentement n'est en règle generale pas valable dans la relation de travail.",
        es: 'La base mas pertinente es el interés legítimo del empleador; el empleador debe realizar una valoración documentada de prevalencia frente a los derechos de los trabajadores. El consentimiento por lo general no es valido en la relación laboral.',
        nl: 'De meest relevante grondslag is het gerechtvaardigd belang van de werkgever; de werkgever moet een gedocumenteerde belangenafweging maken ten opzichte van de rechten van de werknemers. Toestemming is in de arbeidsrelatie doorgaans niet geldig.',
      },
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: {
        it: "GPS solo se c'e un bisogno particolare; evitare la sorveglianza continua; disattivabile fuori orario",
        en: 'GPS only if there is a particular need; avoid continuous monitoring; switchable off outside working hours',
        de: 'GPS nur bei besonderem Bedarf; ständige Überwachung vermeiden; außerhalb der Arbeitszeit abschaltbar',
        fr: "GPS uniquement en cas de besoin particulier; éviter la surveillance continue; désactivable en dehors des heures de travail",
        es: 'GPS solo si hay una necesidad particular; evitar la vigilancia continua; desactivable fuera del horario laboral',
        nl: 'GPS alleen bij een bijzondere behoefte; doorlopend toezicht vermijden; buiten werktijd uitschakelbaar',
      },
      risposta: 'si',
      dettaglio: {
        it: "L'uso di cronotachigrafi o dispositivi di localizzazione richiede un bisogno particolare; va rispettata la proporzionalità ed evitata la sorveglianza continua dei lavoratori; fuori orario il lavoratore deve poterlo disattivare.",
        en: 'The use of tachographs or location devices requires a particular need; proportionality must be respected and continuous monitoring of workers avoided; outside working hours the worker must be able to switch it off.',
        de: 'Die Nutzung von Fahrtenschreibern oder Ortungsgeraten erfordert einen besonderen Bedarf; die Verhaltnismassigkeit ist zu wahren und eine ständige Überwachung der Beschäftigten zu vermeiden; außerhalb der Arbeitszeit muss der Beschäftigte es abschalten können.',
        fr: "L'utilisation de chronotachygraphes ou de dispositifs de localisation exige un besoin particulier; la proportionnalité doit être respectée et la surveillance continue des travailleurs évitée; en dehors des heures de travail, le travailleur doit pouvoir le désactiver.",
        es: 'El uso de tacografos o dispositivos de localización exige una necesidad particular; debe respetarse la proporcionalidad y evitarse la vigilancia continua de los trabajadores; fuera del horario laboral el trabajador debe poder desactivarlo.',
        nl: 'Het gebruik van tachografen of locatieapparatuur vereist een bijzondere behoefte; de evenredigheid moet worden geeerbiedigd en doorlopend toezicht op werknemers vermeden; buiten werktijd moet de werknemer het kunnen uitschakelen.',
      },
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio del rendimento o del comportamento dei dipendenti (lista Persónuvernd)",
        en: 'Impact assessment (DPIA) for monitoring employees performance or behaviour (Persónuvernd list)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) zur Überwachung der Leistung oder des Verhaltens der Beschäftigten (Persónuvernd-Liste)',
        fr: "Analyse d'impact (AIPD) pour le suivi du rendement ou du comportement des salaries (liste Persónuvernd)",
        es: 'Evaluación de impacto (EIPD) para el seguimiento del rendimiento o el comportamiento de los empleados (lista Persónuvernd)',
        nl: 'Effectbeoordeling (DPIA) voor het monitoren van prestaties of gedrag van werknemers (Persónuvernd-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista Persónuvernd include il trattamento che comporta il monitoraggio del rendimento o del comportamento dei dipendenti tra i casi che richiedono sempre una valutazione d'impatto.",
        en: 'The Persónuvernd list includes processing that involves monitoring employees performance or behaviour among the cases that always require an impact assessment.',
        de: 'Die Persónuvernd-Liste führt die Verarbeitung, die mit der Überwachung der Leistung oder des Verhaltens der Beschäftigten verbunden ist, unter den Fällen auf, die stets eine Folgenabschätzung erfordern.',
        fr: "La liste Persónuvernd inclut le traitement impliquant le suivi du rendement ou du comportement des salaries parmi les cas qui exigent toujours une analyse d'impact.",
        es: 'La lista Persónuvernd incluye el tratamiento que implica el seguimiento del rendimiento o el comportamiento de los empleados entre los casos que siempre requieren una evaluación de impacto.',
        nl: 'De Persónuvernd-lijst rekent de verwerking die het monitoren van prestaties of gedrag van werknemers omvat tot de gevallen die altijd een effectbeoordeling vereisen.',
      },
      fonte: FONTE_PERSUVERND_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica un bisogno particolare e una finalità chiara e lecita per il GPS (Regole 50/2023).',
        en: 'Verify a particular need and a clear and lawful purpose for the GPS (Rules 50/2023).',
        de: 'Prüfen Sie einen besonderen Bedarf und einen klaren und rechtmassigen Zweck für das GPS (Regeln 50/2023).',
        fr: 'Vérifiez un besoin particulier et une finalité claire et licite pour le GPS (Règles 50/2023).',
        es: 'Verifica una necesidad particular y una finalidad clara y licita para el GPS (Reglas 50/2023).',
        nl: 'Controleer een bijzondere behoefte en een duidelijk en rechtmatig doel voor de GPS (Regels 50/2023).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo) e svolgi la valutazione documentata.',
        en: 'Identify a valid legal basis (legitimate interest) and carry out the documented assessment.',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse) und nehmen Sie die dokumentierte Abwägung vor.',
        fr: 'Déterminez une base juridique valable (intérêt légitime) et réalisez l\'évaluation documentée.',
        es: 'Identifica una base jurídica valida (interés legítimo) y realiza la valoración documentada.',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang) en voer de gedocumenteerde afweging uit.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti.",
        en: 'Carry out the impact assessment (DPIA) for monitoring employees.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Überwachung der Beschäftigten durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour le suivi des salaries.",
        es: 'Realiza la evaluación de impacto (EIPD) para el seguimiento de los empleados.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor het monitoren van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Informa i lavoratori in anticipo e segnala l'area sorvegliata.",
        en: 'Inform workers in advance and signpost the monitored area.',
        de: 'Informieren Sie die Beschäftigten im Voraus und kennzeichnen Sie den überwachten Bereich.',
        fr: 'Informez les travailleurs a l\'avance et signalez la zone surveillée.',
        es: 'Informa a los trabajadores con antelación y señaliza la zona vigilada.',
        nl: 'Informeer werknemers vooraf en markeer het bewaakte gebied.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente sorveglianza continua, disattivabile fuori orario, niente riuso per altre finalità senza preavviso.',
        en: 'Configure the system: no continuous monitoring, switchable off outside working hours, no reuse for other purposes without prior notice.',
        de: 'Konfigurieren Sie das System: keine ständige Überwachung, außerhalb der Arbeitszeit abschaltbar, keine Weiterverwendung für andere Zwecke ohne vorherige Ankündigung.',
        fr: "Configurez le système: pas de surveillance continue, désactivable en dehors des heures de travail, pas de réutilisation a d'autres fins sans préavis.",
        es: 'Configura el sistema: sin vigilancia continua, desactivable fuera del horario laboral, sin reutilización para otros fines sin previo aviso.',
        nl: 'Configureer het systeem: geen doorlopend toezicht, buiten werktijd uitschakelbaar, geen hergebruik voor andere doeleinden zonder voorafgaande kennisgeving.',
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
      ente: 'Persónuvernd, reclami',
      portale: FONTE_PERSUVERND_RECLAMO.url,
      urlFonte: FONTE_PERSUVERND_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'illiceità dichiarata, senza multa',
      en: 'unlawfulness declared, with no fine',
      de: 'Rechtswidrigkeit festgestellt, ohne Geldbusse',
      fr: 'illicéité declaree, sans amende',
      es: 'ilicitud declarada, sin multa',
      nl: 'onrechtmatigheid vastgesteld, zonder boete',
    },
    casoCitato: {
      it: "Persónuvernd, decisione 2022050836 dell'8 dicembre 2023: Islandspostur (Poste islandesi) aveva usato i dati del cronotachigrafo/GPS di un veicolo aziendale per valutare il rendimento di un dipendente e giustificarne il licenziamento, cambiando la finalità (il dispositivo era stato presentato per sicurezza e qualità del servizio) senza preavviso. Trattamento dichiarato illecito, senza multa.",
      en: 'Persónuvernd, decision 2022050836 of 8 December 2023: Islandspostur (Iceland Post) had used the tachograph/GPS data of a company vehicle to assess an employee performance and justify dismissal, changing the purpose (the device had been presented for safety and service quality) without prior notice. Processing declared unlawful, with no fine.',
      de: 'Persónuvernd, Entscheidung 2022050836 vom 8. Dezember 2023: Islandspostur (Isländische Post) hatte die Fahrtenschreiber-/GPS-Daten eines Firmenfahrzeugs genutzt, um die Leistung eines Beschäftigten zu bewerten und dessen Kündigung zu rechtfertigen, wobei der Zweck (das Gerät war für Sicherheit und Servicequalität vorgestellt worden) ohne vorherige Ankündigung geändert wurde. Die Verarbeitung wurde für rechtswidrig erklärt, ohne Geldbusse.',
      fr: "Persónuvernd, décision 2022050836 du 8 décembre 2023: Islandspostur (Poste islandaise) avait utilise les données du chronotachygraphe/GPS d'un véhicule de société pour évaluer le rendement d'un salarie et justifier son licenciement, en changeant la finalité (le dispositif avait été présenté pour la securite et la qualité du service) sans préavis. Traitement déclare illicite, sans amende.",
      es: 'Persónuvernd, decisión 2022050836 de 8 de diciembre de 2023: Islandspostur (Correos de Islandia) había usado los datos del tacografo/GPS de un vehículo de empresa para evaluar el rendimiento de un empleado y justificar su despido, cambiando la finalidad (el dispositivo se había presentado para la seguridad y la calidad del servicio) sin previo aviso. Tratamiento declarado ilícito, sin multa.',
      nl: 'Persónuvernd, beslissing 2022050836 van 8 december 2023: Islandspostur (IJslandse Post) had de tachograaf-/GPS-gegevens van een bedrijfsvoertuig gebruikt om de prestaties van een werknemer te beoordelen en zijn ontslag te rechtvaardigen, waarbij het doel (het apparaat was gepresenteerd voor veiligheid en servicekwaliteit) zonder voorafgaande kennisgeving werd gewijzigd. De verwerking werd onrechtmatig verklaard, zonder boete.',
    },
    urlFonte: FONTE_PERSUVERND_ISLANDSPOSTUR.url,
    tipoImporto: 'caso-gps',
  },

  fonti: [
    FONTE_REGOLE_50_2023,
    FONTE_PERSUVERND_GPS,
    FONTE_PERSUVERND_DPIA,
    FONTE_PERSUVERND_RECLAMO,
    FONTE_PERSUVERND_ISLANDSPOSTUR,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
