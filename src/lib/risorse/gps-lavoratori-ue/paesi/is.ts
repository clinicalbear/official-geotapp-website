/**
 * Scheda-paese Islanda per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Regole n. 50/2023 sulla sorveglianza elettronica, FAQ del Persuvernd (Garante
 * islandese) sul GPS, lista Persuvernd dei trattamenti che richiedono una DPIA
 * (Auglysing nr. 828/2019), pagina dei reclami al Persuvernd, decisione
 * Islandspostur sull'uso illecito del GPS su un dipendente e GDPR.
 *
 * L'Islanda fa parte del SEE e applica il GDPR; ha un'unica autorita nazionale,
 * il Persuvernd, senza ripartizione regionale. Nessun numero, URL o autorita e
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
    'Persuvernd (Garante islandese), FAQ sul GPS e i dispositivi di localizzazione',
  url: 'https://www.personuvernd.is/einstaklingar/spurt-og-svarad/allar-spurningar-og-svor/hvada-reglur-gilda-um-okurita-og-annan-rafraenan-stadsetningarbunad',
};
const FONTE_PERSUVERND_DPIA = {
  titolo:
    'Persuvernd, lista dei trattamenti che richiedono una DPIA (Auglysing nr. 828/2019)',
  url: 'https://island.is/stjornartidindi/nr/7034a38d-0b61-4f7a-b3ef-a63252df0d6e',
};
const FONTE_PERSUVERND_RECLAMO = {
  titolo: 'Persuvernd, presentare un reclamo',
  url: 'https://island.is/kvortun-til-personuverndar',
};
const FONTE_PERSUVERND_ISLANDSPOSTUR = {
  titolo:
    'Persuvernd, decisione Islandspostur (uso illecito del GPS su un dipendente)',
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
    ente: 'Persuvernd (Garante islandese per la protezione dei dati)',
    portale: FONTE_PERSUVERND_RECLAMO.url,
    urlFonte: 'https://www.personuvernd.is/',
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Islanda (SEE) ha un'unica autorita nazionale, il Persuvernd; nessuna ripartizione regionale.",
      en: 'Iceland (EEA) has a single national authority, the Persuvernd; no regional breakdown.',
      de: 'Island (EWR) hat eine einzige nationale Behorde, die Persuvernd; keine regionale Aufteilung.',
      fr: "L'Islande (EEE) dispose d'une seule autorite nationale, le Persuvernd; aucune repartition regionale.",
      es: 'Islandia (EEE) tiene una unica autoridad nacional, el Persuvernd; sin reparto regional.',
      nl: 'IJsland (EER) heeft een enkele nationale autoriteit, de Persuvernd; geen regionale opdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Informazione preventiva ai lavoratori e cartello sull'area sorvegliata (Regole 50/2023)",
        en: 'Prior information to workers and a sign about the monitored area (Rules 50/2023)',
        de: 'Vorherige Information der Beschaftigten und ein Schild zum uberwachten Bereich (Regeln 50/2023)',
        fr: "Information prealable des travailleurs et panneau sur la zone surveillee (Regles 50/2023)",
        es: 'Informacion previa a los trabajadores y cartel sobre la zona vigilada (Reglas 50/2023)',
        nl: 'Voorafgaande informatie aan werknemers en een bord over het bewaakte gebied (Regels 50/2023)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La sorveglianza elettronica richiede una finalita chiara e lecita; chi sorveglia deve dare avviso con un cartello o in altro modo evidente prima che la persona entri nell'area sorvegliata.",
        en: 'Electronic monitoring requires a clear and lawful purpose; whoever monitors must give notice with a sign or in another evident way before the person enters the monitored area.',
        de: 'Die elektronische Uberwachung erfordert einen klaren und rechtmassigen Zweck; wer uberwacht, muss durch ein Schild oder auf andere offensichtliche Weise Hinweis geben, bevor die Person den uberwachten Bereich betritt.',
        fr: "La surveillance electronique exige une finalite claire et licite; celui qui surveille doit en avertir par un panneau ou d'une autre maniere evidente avant que la personne entre dans la zone surveillee.",
        es: 'La vigilancia electronica exige una finalidad clara y licita; quien vigila debe avisar con un cartel o de otro modo evidente antes de que la persona entre en la zona vigilada.',
        nl: 'Elektronisch toezicht vereist een duidelijk en rechtmatig doel; wie toezicht houdt, moet dit kenbaar maken met een bord of op een andere duidelijke wijze voordat de persoon het bewaakte gebied betreedt.',
      },
      fonte: FONTE_REGOLE_50_2023,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behorde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva del Persuvernd; il titolare valuta da se e documenta la liceita, con DPIA quando richiesta.",
        en: 'No prior authorisation from the Persuvernd is required; the controller assesses on its own and documents lawfulness, with a DPIA where required.',
        de: 'Eine vorherige Genehmigung der Persuvernd ist nicht erforderlich; der Verantwortliche beurteilt selbst und dokumentiert die Rechtmassigkeit, mit einer DSFA, sofern erforderlich.',
        fr: "Aucune autorisation prealable du Persuvernd n'est requise; le responsable evalue lui-meme et documente la liceite, avec une AIPD lorsque cela est requis.",
        es: 'No se necesita autorizacion previa del Persuvernd; el responsable evalua por si mismo y documenta la licitud, con una EIPD cuando se requiera.',
        nl: 'Er is geen voorafgaande toestemming van de Persuvernd nodig; de verwerkingsverantwoordelijke beoordeelt zelf en documenteert de rechtmatigheid, met een DPIA waar vereist.',
      },
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: {
        it: 'Base = interesse legittimo con test documentato, non il consenso',
        en: 'Basis = legitimate interest with a documented test, not consent',
        de: 'Grundlage = berechtigtes Interesse mit dokumentierter Abwagung, nicht Einwilligung',
        fr: "Base = interet legitime avec un test documente, pas le consentement",
        es: 'Base = interes legitimo con una prueba documentada, no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang met een gedocumenteerde afweging, niet toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base più pertinente e l'interesse legittimo del datore; il datore deve svolgere una valutazione documentata di prevalenza rispetto ai diritti dei lavoratori. Il consenso di norma non e valido nel rapporto di lavoro.",
        en: 'The most relevant basis is the employer legitimate interest; the employer must carry out a documented balancing assessment against workers rights. Consent is generally not valid in the employment relationship.',
        de: 'Die einschlagigste Grundlage ist das berechtigte Interesse des Arbeitgebers; der Arbeitgeber muss eine dokumentierte Abwagung gegenuber den Rechten der Beschaftigten vornehmen. Die Einwilligung ist im Arbeitsverhaltnis in der Regel nicht gultig.',
        fr: "La base la plus pertinente est l'interet legitime de l'employeur; l'employeur doit realiser une evaluation documentee de prevalence par rapport aux droits des travailleurs. Le consentement n'est en regle generale pas valable dans la relation de travail.",
        es: 'La base mas pertinente es el interes legitimo del empleador; el empleador debe realizar una valoracion documentada de prevalencia frente a los derechos de los trabajadores. El consentimiento por lo general no es valido en la relacion laboral.',
        nl: 'De meest relevante grondslag is het gerechtvaardigd belang van de werkgever; de werkgever moet een gedocumenteerde belangenafweging maken ten opzichte van de rechten van de werknemers. Toestemming is in de arbeidsrelatie doorgaans niet geldig.',
      },
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: {
        it: "GPS solo se c'e un bisogno particolare; evitare la sorveglianza continua; disattivabile fuori orario",
        en: 'GPS only if there is a particular need; avoid continuous monitoring; switchable off outside working hours',
        de: 'GPS nur bei besonderem Bedarf; standige Uberwachung vermeiden; ausserhalb der Arbeitszeit abschaltbar',
        fr: "GPS uniquement en cas de besoin particulier; eviter la surveillance continue; desactivable en dehors des heures de travail",
        es: 'GPS solo si hay una necesidad particular; evitar la vigilancia continua; desactivable fuera del horario laboral',
        nl: 'GPS alleen bij een bijzondere behoefte; doorlopend toezicht vermijden; buiten werktijd uitschakelbaar',
      },
      risposta: 'si',
      dettaglio: {
        it: "L'uso di cronotachigrafi o dispositivi di localizzazione richiede un bisogno particolare; va rispettata la proporzionalita ed evitata la sorveglianza continua dei lavoratori; fuori orario il lavoratore deve poterlo disattivare.",
        en: 'The use of tachographs or location devices requires a particular need; proportionality must be respected and continuous monitoring of workers avoided; outside working hours the worker must be able to switch it off.',
        de: 'Die Nutzung von Fahrtenschreibern oder Ortungsgeraten erfordert einen besonderen Bedarf; die Verhaltnismassigkeit ist zu wahren und eine standige Uberwachung der Beschaftigten zu vermeiden; ausserhalb der Arbeitszeit muss der Beschaftigte es abschalten konnen.',
        fr: "L'utilisation de chronotachygraphes ou de dispositifs de localisation exige un besoin particulier; la proportionnalite doit etre respectee et la surveillance continue des travailleurs evitee; en dehors des heures de travail, le travailleur doit pouvoir le desactiver.",
        es: 'El uso de tacografos o dispositivos de localizacion exige una necesidad particular; debe respetarse la proporcionalidad y evitarse la vigilancia continua de los trabajadores; fuera del horario laboral el trabajador debe poder desactivarlo.',
        nl: 'Het gebruik van tachografen of locatieapparatuur vereist een bijzondere behoefte; de evenredigheid moet worden geeerbiedigd en doorlopend toezicht op werknemers vermeden; buiten werktijd moet de werknemer het kunnen uitschakelen.',
      },
      fonte: FONTE_PERSUVERND_GPS,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio del rendimento o del comportamento dei dipendenti (lista Persuvernd)",
        en: 'Impact assessment (DPIA) for monitoring employees performance or behaviour (Persuvernd list)',
        de: 'Datenschutz-Folgenabschatzung (DSFA) zur Uberwachung der Leistung oder des Verhaltens der Beschaftigten (Persuvernd-Liste)',
        fr: "Analyse d'impact (AIPD) pour le suivi du rendement ou du comportement des salaries (liste Persuvernd)",
        es: 'Evaluacion de impacto (EIPD) para el seguimiento del rendimiento o el comportamiento de los empleados (lista Persuvernd)',
        nl: 'Effectbeoordeling (DPIA) voor het monitoren van prestaties of gedrag van werknemers (Persuvernd-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista Persuvernd include il trattamento che comporta il monitoraggio del rendimento o del comportamento dei dipendenti tra i casi che richiedono sempre una valutazione d'impatto.",
        en: 'The Persuvernd list includes processing that involves monitoring employees performance or behaviour among the cases that always require an impact assessment.',
        de: 'Die Persuvernd-Liste fuhrt die Verarbeitung, die mit der Uberwachung der Leistung oder des Verhaltens der Beschaftigten verbunden ist, unter den Fallen auf, die stets eine Folgenabschatzung erfordern.',
        fr: "La liste Persuvernd inclut le traitement impliquant le suivi du rendement ou du comportement des salaries parmi les cas qui exigent toujours une analyse d'impact.",
        es: 'La lista Persuvernd incluye el tratamiento que implica el seguimiento del rendimiento o el comportamiento de los empleados entre los casos que siempre requieren una evaluacion de impacto.',
        nl: 'De Persuvernd-lijst rekent de verwerking die het monitoren van prestaties of gedrag van werknemers omvat tot de gevallen die altijd een effectbeoordeling vereisen.',
      },
      fonte: FONTE_PERSUVERND_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica un bisogno particolare e una finalita chiara e lecita per il GPS (Regole 50/2023).',
        en: 'Verify a particular need and a clear and lawful purpose for the GPS (Rules 50/2023).',
        de: 'Prufen Sie einen besonderen Bedarf und einen klaren und rechtmassigen Zweck fur das GPS (Regeln 50/2023).',
        fr: 'Verifiez un besoin particulier et une finalite claire et licite pour le GPS (Regles 50/2023).',
        es: 'Verifica una necesidad particular y una finalidad clara y licita para el GPS (Reglas 50/2023).',
        nl: 'Controleer een bijzondere behoefte en een duidelijk en rechtmatig doel voor de GPS (Regels 50/2023).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo) e svolgi la valutazione documentata.',
        en: 'Identify a valid legal basis (legitimate interest) and carry out the documented assessment.',
        de: 'Bestimmen Sie eine gultige Rechtsgrundlage (berechtigtes Interesse) und nehmen Sie die dokumentierte Abwagung vor.',
        fr: 'Determinez une base juridique valable (interet legitime) et realisez l\'evaluation documentee.',
        es: 'Identifica una base juridica valida (interes legitimo) y realiza la valoracion documentada.',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang) en voer de gedocumenteerde afweging uit.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti.",
        en: 'Carry out the impact assessment (DPIA) for monitoring employees.',
        de: 'Fuhren Sie die Datenschutz-Folgenabschatzung (DSFA) fur die Uberwachung der Beschaftigten durch.',
        fr: "Realisez l'analyse d'impact (AIPD) pour le suivi des salaries.",
        es: 'Realiza la evaluacion de impacto (EIPD) para el seguimiento de los empleados.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor het monitoren van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Informa i lavoratori in anticipo e segnala l'area sorvegliata.",
        en: 'Inform workers in advance and signpost the monitored area.',
        de: 'Informieren Sie die Beschaftigten im Voraus und kennzeichnen Sie den uberwachten Bereich.',
        fr: 'Informez les travailleurs a l\'avance et signalez la zone surveillee.',
        es: 'Informa a los trabajadores con antelacion y senaliza la zona vigilada.',
        nl: 'Informeer werknemers vooraf en markeer het bewaakte gebied.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente sorveglianza continua, disattivabile fuori orario, niente riuso per altre finalita senza preavviso.',
        en: 'Configure the system: no continuous monitoring, switchable off outside working hours, no reuse for other purposes without prior notice.',
        de: 'Konfigurieren Sie das System: keine standige Uberwachung, ausserhalb der Arbeitszeit abschaltbar, keine Weiterverwendung fur andere Zwecke ohne vorherige Ankundigung.',
        fr: "Configurez le systeme: pas de surveillance continue, desactivable en dehors des heures de travail, pas de reutilisation a d'autres fins sans preavis.",
        es: 'Configura el sistema: sin vigilancia continua, desactivable fuera del horario laboral, sin reutilizacion para otros fines sin previo aviso.',
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
      ente: 'Persuvernd, reclami',
      portale: FONTE_PERSUVERND_RECLAMO.url,
      urlFonte: FONTE_PERSUVERND_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'illiceita dichiarata, senza multa',
      en: 'unlawfulness declared, with no fine',
      de: 'Rechtswidrigkeit festgestellt, ohne Geldbusse',
      fr: 'illiceite declaree, sans amende',
      es: 'ilicitud declarada, sin multa',
      nl: 'onrechtmatigheid vastgesteld, zonder boete',
    },
    casoCitato: {
      it: "Persuvernd, decisione 2022050836 dell'8 dicembre 2023: Islandspostur (Poste islandesi) aveva usato i dati del cronotachigrafo/GPS di un veicolo aziendale per valutare il rendimento di un dipendente e giustificarne il licenziamento, cambiando la finalita (il dispositivo era stato presentato per sicurezza e qualità del servizio) senza preavviso. Trattamento dichiarato illecito, senza multa.",
      en: 'Persuvernd, decision 2022050836 of 8 December 2023: Islandspostur (Iceland Post) had used the tachograph/GPS data of a company vehicle to assess an employee performance and justify dismissal, changing the purpose (the device had been presented for safety and service quality) without prior notice. Processing declared unlawful, with no fine.',
      de: 'Persuvernd, Entscheidung 2022050836 vom 8. Dezember 2023: Islandspostur (Islandische Post) hatte die Fahrtenschreiber-/GPS-Daten eines Firmenfahrzeugs genutzt, um die Leistung eines Beschaftigten zu bewerten und dessen Kundigung zu rechtfertigen, wobei der Zweck (das Gerat war fur Sicherheit und Servicequalitat vorgestellt worden) ohne vorherige Ankundigung geandert wurde. Die Verarbeitung wurde fur rechtswidrig erklart, ohne Geldbusse.',
      fr: "Persuvernd, decision 2022050836 du 8 decembre 2023: Islandspostur (Poste islandaise) avait utilise les donnees du chronotachygraphe/GPS d'un vehicule de societe pour evaluer le rendement d'un salarie et justifier son licenciement, en changeant la finalite (le dispositif avait ete presente pour la securite et la qualite du service) sans preavis. Traitement declare illicite, sans amende.",
      es: 'Persuvernd, decision 2022050836 de 8 de diciembre de 2023: Islandspostur (Correos de Islandia) habia usado los datos del tacografo/GPS de un vehiculo de empresa para evaluar el rendimiento de un empleado y justificar su despido, cambiando la finalidad (el dispositivo se habia presentado para la seguridad y la calidad del servicio) sin previo aviso. Tratamiento declarado ilicito, sin multa.',
      nl: 'Persuvernd, beslissing 2022050836 van 8 december 2023: Islandspostur (IJslandse Post) had de tachograaf-/GPS-gegevens van een bedrijfsvoertuig gebruikt om de prestaties van een werknemer te beoordelen en zijn ontslag te rechtvaardigen, waarbij het doel (het apparaat was gepresenteerd voor veiligheid en servicekwaliteit) zonder voorafgaande kennisgeving werd gewijzigd. De verwerking werd onrechtmatig verklaard, zonder boete.',
    },
    urlFonte: FONTE_PERSUVERND_ISLANDSPOSTUR.url,
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
