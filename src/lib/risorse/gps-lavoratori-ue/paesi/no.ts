/**
 * Scheda-paese Norvegia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Arbeidsmiljoloven cap. 9 (misure di controllo, §§ 9-1 e 9-2), guida del
 * Datatilsynet su GPS e tracciamento dei veicoli aziendali, guida del
 * Datatilsynet su quando svolgere una valutazione d'impatto, decisione
 * Personvernnemnda PVN-2017-07 e GDPR.
 *
 * La Norvegia (SEE) ha un'unica autorita garante nazionale, il Datatilsynet:
 * non c'e' alcuna ripartizione regionale. Nessun numero, URL o autorita' e'
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_AML_KAP9 = {
  titolo:
    'Arbeidsmiljoloven, kap. 9 (misure di controllo, §§ 9-1 e 9-2)',
  url: 'https://lovdata.no/nav/lov/2005-06-17-62/kap9',
};
const FONTE_DATATILSYNET_VEICOLI = {
  titolo:
    'Datatilsynet (Norvegia), GPS e tracciamento dei veicoli aziendali',
  url: 'https://www.datatilsynet.no/personvern-pa-ulike-omrader/personvern-pa-arbeidsplassen/overvaking-kjoretoy/',
};
const FONTE_DATATILSYNET_DPIA = {
  titolo:
    "Datatilsynet (Norvegia), quando svolgere una valutazione d'impatto",
  url: 'https://www.datatilsynet.no/rettigheter-og-plikter/virksomhetenes-plikter/vurdering-av-personvernkonsekvenser/nar-ma-man-gjennomfore-en-vurdering-av-personvernkonsekvenser/',
};
const FONTE_DATATILSYNET = {
  titolo: 'Datatilsynet (autorita garante norvegese)',
  url: 'https://www.datatilsynet.no/en/',
};
const FONTE_PVN_2017_07 = {
  titolo:
    'Personvernnemnda, PVN-2017-07 (uso del GPS per controllare le ore del dipendente)',
  url: 'https://personvernnemnda.no/2017/08/26/pvn-2017-07-arbeidsgivers-bruk-av-innsamlede-opplysninger-til-et-nytt-formal-overtredelsesgebyr/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const norvegia: SchedaPaese = {
  codiceISO: 'NO',
  slugCanonico: 'norvegia',
  nome: 'Norvegia',
  nomi: {
    it: 'Norvegia',
    en: 'Norway',
    'en-us': 'Norway',
    'en-gb': 'Norway',
    'en-au': 'Norway',
    'en-ie': 'Norway',
    'en-ca': 'Norway',
    de: 'Norwegen',
    nl: 'Noorwegen',
    fr: 'Norvège',
    es: 'Noruega',
    pt: 'Noruega',
    da: 'Norge',
    sv: 'Norge',
    nb: 'Norge',
    ru: 'Норвегия',
  },
  bandiera: '🇳🇴',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Datatilsynet (autorita garante norvegese)',
    portale: FONTE_DATATILSYNET.url,
    urlFonte: FONTE_DATATILSYNET.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Norvegia (SEE) ha un'unica autorita nazionale, il Datatilsynet; nessuna ripartizione regionale.",
      en: 'Norway (EEA) has a single national authority, the Datatilsynet; there is no regional breakdown.',
      de: 'Norwegen (EWR) hat eine einzige nationale Behoerde, das Datatilsynet; es gibt keine regionale Aufteilung.',
      fr: "La Norvege (EEE) dispose d'une seule autorite nationale, le Datatilsynet; il n'y a aucune repartition regionale.",
      es: 'Noruega (EEE) tiene una unica autoridad nacional, el Datatilsynet; no existe ninguna division regional.',
      nl: 'Noorwegen (EER) heeft een enkele nationale autoriteit, het Datatilsynet; er is geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Motivo oggettivo (saklig grunn) e non sproporzionato (Arbeidsmiljoloven § 9-1)',
        en: 'Objective reason (saklig grunn) and not disproportionate (Arbeidsmiljoloven § 9-1)',
        de: 'Sachlicher Grund (saklig grunn) und nicht unverhaeltnismaessig (Arbeidsmiljoloven § 9-1)',
        fr: 'Motif objectif (saklig grunn) et non disproportionne (Arbeidsmiljoloven § 9-1)',
        es: 'Motivo objetivo (saklig grunn) y no desproporcionado (Arbeidsmiljoloven § 9-1)',
        nl: 'Objectieve reden (saklig grunn) en niet onevenredig (Arbeidsmiljoloven § 9-1)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Una misura di controllo (incluso il GPS) e ammessa solo se ha un motivo oggettivo nelle esigenze dell'impresa e non comporta un onere sproporzionato per il lavoratore.",
        en: "A control measure (including GPS) is permitted only if it has an objective reason rooted in the business's needs and does not impose a disproportionate burden on the worker.",
        de: 'Eine Kontrollmassnahme (einschliesslich GPS) ist nur zulaessig, wenn sie einen sachlichen Grund in den Beduerfnissen des Unternehmens hat und keine unverhaeltnismaessige Belastung fuer den Arbeitnehmer darstellt.',
        fr: "Une mesure de controle (y compris le GPS) n'est admise que si elle repose sur un motif objectif lie aux besoins de l'entreprise et n'impose pas une charge disproportionnee au travailleur.",
        es: 'Una medida de control (incluido el GPS) solo se admite si tiene un motivo objetivo basado en las necesidades de la empresa y no supone una carga desproporcionada para el trabajador.',
        nl: 'Een controlemaatregel (waaronder GPS) is alleen toegestaan als deze een objectieve reden heeft in de behoeften van de onderneming en geen onevenredige last voor de werknemer oplevert.',
      },
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: {
        it: 'Discussione preventiva con i rappresentanti (tillitsvalgte) (§ 9-2)',
        en: 'Prior discussion with the employee representatives (tillitsvalgte) (§ 9-2)',
        de: 'Vorherige Eroerterung mit den Arbeitnehmervertretern (tillitsvalgte) (§ 9-2)',
        fr: 'Discussion prealable avec les representants du personnel (tillitsvalgte) (§ 9-2)',
        es: 'Discusion previa con los representantes de los trabajadores (tillitsvalgte) (§ 9-2)',
        nl: 'Voorafgaand overleg met de werknemersvertegenwoordigers (tillitsvalgte) (§ 9-2)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: 'Il datore deve discutere il più presto possibile la misura con i rappresentanti dei lavoratori. Vale dove esistono rappresentanti (tillitsvalgte).',
        en: 'The employer must discuss the measure with the employee representatives as soon as possible. This applies where representatives (tillitsvalgte) exist.',
        de: 'Der Arbeitgeber muss die Massnahme so frueh wie moeglich mit den Arbeitnehmervertretern eroertern. Dies gilt, wo Vertreter (tillitsvalgte) vorhanden sind.',
        fr: "L'employeur doit discuter de la mesure avec les representants du personnel le plus tot possible. Cela vaut la ou des representants (tillitsvalgte) existent.",
        es: 'El empresario debe discutir la medida con los representantes de los trabajadores lo antes posible. Se aplica donde existen representantes (tillitsvalgte).',
        nl: 'De werkgever moet de maatregel zo vroeg mogelijk met de werknemersvertegenwoordigers bespreken. Dit geldt waar vertegenwoordigers (tillitsvalgte) bestaan.',
      },
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorization from an authority before installing',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'Il capitolo 9 non prevede alcuna autorizzazione preventiva del Datatilsynet; la liceita e responsabilità del titolare.',
        en: 'Chapter 9 provides for no prior authorization from the Datatilsynet; lawfulness is the responsibility of the controller.',
        de: 'Kapitel 9 sieht keine vorherige Genehmigung des Datatilsynet vor; die Rechtmaessigkeit liegt in der Verantwortung des Verantwortlichen.',
        fr: 'Le chapitre 9 ne prevoit aucune autorisation prealable du Datatilsynet; la liceite releve de la responsabilite du responsable du traitement.',
        es: 'El capitulo 9 no preve ninguna autorizacion previa del Datatilsynet; la licitud es responsabilidad del responsable del tratamiento.',
        nl: 'Hoofdstuk 9 voorziet niet in voorafgaande toestemming van het Datatilsynet; de rechtmatigheid is de verantwoordelijkheid van de verwerkingsverantwoordelijke.',
      },
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori (scopo, conseguenze, durata; § 9-2 + art. 13 GDPR)',
        en: 'Prior information to workers (purpose, consequences, duration; § 9-2 + Art. 13 GDPR)',
        de: 'Vorherige Information der Arbeitnehmer (Zweck, Folgen, Dauer; § 9-2 + Art. 13 DSGVO)',
        fr: 'Information prealable des travailleurs (finalite, consequences, duree; § 9-2 + art. 13 RGPD)',
        es: 'Informacion previa a los trabajadores (finalidad, consecuencias, duracion; § 9-2 + art. 13 RGPD)',
        nl: 'Voorafgaande informatie aan de werknemers (doel, gevolgen, duur; § 9-2 + art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Prima di attivare, il datore informa i lavoratori su scopo della misura, conseguenze pratiche (come sara svolta) e durata prevista.',
        en: 'Before activating it, the employer informs the workers about the purpose of the measure, the practical consequences (how it will be carried out) and the expected duration.',
        de: 'Vor der Aktivierung informiert der Arbeitgeber die Arbeitnehmer ueber den Zweck der Massnahme, die praktischen Folgen (wie sie durchgefuehrt wird) und die voraussichtliche Dauer.',
        fr: "Avant de l'activer, l'employeur informe les travailleurs de la finalite de la mesure, des consequences pratiques (comment elle sera mise en oeuvre) et de la duree prevue.",
        es: 'Antes de activarla, el empresario informa a los trabajadores sobre la finalidad de la medida, las consecuencias practicas (como se llevara a cabo) y la duracion prevista.',
        nl: 'Voordat de werkgever deze activeert, informeert hij de werknemers over het doel van de maatregel, de praktische gevolgen (hoe deze wordt uitgevoerd) en de verwachte duur.',
      },
      fonte: FONTE_AML_KAP9,
    },
    {
      voce: {
        it: 'GPS sui veicoli solo per la finalita dichiarata, senza riuso per valutare il rendimento',
        en: 'GPS on vehicles only for the stated purpose, with no reuse to assess performance',
        de: 'GPS in Fahrzeugen nur fuer den angegebenen Zweck, ohne Weiterverwendung zur Leistungsbewertung',
        fr: 'GPS sur les vehicules uniquement pour la finalite declaree, sans reutilisation pour evaluer le rendement',
        es: 'GPS en los vehiculos solo para la finalidad declarada, sin reutilizacion para evaluar el rendimiento',
        nl: 'GPS op voertuigen alleen voor het verklaarde doel, zonder hergebruik om de prestaties te beoordelen',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il GPS sui veicoli e normalmente una misura di controllo: lo scopo va specificato, e i dati raccolti non possono essere riusati per valutare il rendimento dei dipendenti.',
        en: 'GPS on vehicles is normally a control measure: the purpose must be specified, and the collected data cannot be reused to assess employees performance.',
        de: 'GPS in Fahrzeugen ist normalerweise eine Kontrollmassnahme: Der Zweck muss angegeben werden, und die erhobenen Daten duerfen nicht zur Bewertung der Leistung der Arbeitnehmer weiterverwendet werden.',
        fr: 'Le GPS sur les vehicules est normalement une mesure de controle: la finalite doit etre precisee, et les donnees collectees ne peuvent pas etre reutilisees pour evaluer le rendement des salaries.',
        es: 'El GPS en los vehiculos es normalmente una medida de control: la finalidad debe especificarse, y los datos recopilados no pueden reutilizarse para evaluar el rendimiento de los empleados.',
        nl: 'GPS op voertuigen is normaal gesproken een controlemaatregel: het doel moet worden gespecificeerd en de verzamelde gegevens mogen niet worden hergebruikt om de prestaties van werknemers te beoordelen.',
      },
      fonte: FONTE_DATATILSYNET_VEICOLI,
    },
    {
      voce: {
        it: "Valutazione d'impatto per il monitoraggio sistematico dei dipendenti e i dati di localizzazione",
        en: 'Data protection impact assessment for systematic monitoring of employees and location data',
        de: 'Datenschutz-Folgenabschaetzung fuer die systematische Ueberwachung der Arbeitnehmer und Standortdaten',
        fr: "Analyse d'impact relative a la protection des donnees pour la surveillance systematique des salaries et les donnees de localisation",
        es: 'Evaluacion de impacto relativa a la proteccion de datos para la supervision sistematica de los empleados y los datos de localizacion',
        nl: 'Gegevensbeschermingseffectbeoordeling voor systematische monitoring van werknemers en locatiegegevens',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il Datatilsynet richiede sempre una valutazione d'impatto per il monitoraggio sistematico dei dipendenti, e per i dati di localizzazione combinati con altri criteri di rischio.",
        en: 'The Datatilsynet always requires a data protection impact assessment for the systematic monitoring of employees, and for location data combined with other risk criteria.',
        de: 'Das Datatilsynet verlangt immer eine Datenschutz-Folgenabschaetzung fuer die systematische Ueberwachung der Arbeitnehmer und fuer Standortdaten in Kombination mit anderen Risikokriterien.',
        fr: "Le Datatilsynet exige toujours une analyse d'impact relative a la protection des donnees pour la surveillance systematique des salaries, et pour les donnees de localisation combinees a d'autres criteres de risque.",
        es: 'El Datatilsynet exige siempre una evaluacion de impacto relativa a la proteccion de datos para la supervision sistematica de los empleados, y para los datos de localizacion combinados con otros criterios de riesgo.',
        nl: 'Het Datatilsynet vereist altijd een gegevensbeschermingseffectbeoordeling voor de systematische monitoring van werknemers en voor locatiegegevens in combinatie met andere risicocriteria.',
      },
      fonte: FONTE_DATATILSYNET_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica un motivo oggettivo (saklig grunn) e che la misura non sia sproporzionata (§ 9-1).',
        en: 'Check for an objective reason (saklig grunn) and that the measure is not disproportionate (§ 9-1).',
        de: 'Pruefen Sie, ob ein sachlicher Grund (saklig grunn) vorliegt und ob die Massnahme nicht unverhaeltnismaessig ist (§ 9-1).',
        fr: "Verifiez l'existence d'un motif objectif (saklig grunn) et que la mesure n'est pas disproportionnee (§ 9-1).",
        es: 'Verifique un motivo objetivo (saklig grunn) y que la medida no sea desproporcionada (§ 9-1).',
        nl: 'Controleer of er een objectieve reden (saklig grunn) is en dat de maatregel niet onevenredig is (§ 9-1).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Se esistono rappresentanti dei lavoratori, discuti con loro il più presto possibile la misura (§ 9-2).',
        en: 'If employee representatives exist, discuss the measure with them as soon as possible (§ 9-2).',
        de: 'Wenn es Arbeitnehmervertreter gibt, eroertern Sie die Massnahme so frueh wie moeglich mit ihnen (§ 9-2).',
        fr: "Si des representants du personnel existent, discutez de la mesure avec eux le plus tot possible (§ 9-2).",
        es: 'Si existen representantes de los trabajadores, discuta la medida con ellos lo antes posible (§ 9-2).',
        nl: 'Als er werknemersvertegenwoordigers zijn, bespreek de maatregel dan zo vroeg mogelijk met hen (§ 9-2).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Informa i lavoratori su scopo, conseguenze e durata prima di attivare.',
        en: 'Inform the workers about the purpose, consequences and duration before activating.',
        de: 'Informieren Sie die Arbeitnehmer vor der Aktivierung ueber Zweck, Folgen und Dauer.',
        fr: "Informez les travailleurs de la finalite, des consequences et de la duree avant l'activation.",
        es: 'Informe a los trabajadores sobre la finalidad, las consecuencias y la duracion antes de activar.',
        nl: 'Informeer de werknemers over het doel, de gevolgen en de duur voordat u activeert.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto per il monitoraggio sistematico o i dati di localizzazione.",
        en: 'Carry out the data protection impact assessment for systematic monitoring or location data.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung fuer die systematische Ueberwachung oder Standortdaten durch.',
        fr: "Realisez l'analyse d'impact relative a la protection des donnees pour la surveillance systematique ou les donnees de localisation.",
        es: 'Realice la evaluacion de impacto relativa a la proteccion de datos para la supervision sistematica o los datos de localizacion.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling uit voor systematische monitoring of locatiegegevens.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: solo finalita dichiarata, niente riuso per valutare il rendimento.',
        en: 'Configure the system: stated purpose only, no reuse to assess performance.',
        de: 'Konfigurieren Sie das System: nur fuer den angegebenen Zweck, keine Weiterverwendung zur Leistungsbewertung.',
        fr: 'Configurez le systeme: finalite declaree uniquement, aucune reutilisation pour evaluer le rendement.',
        es: 'Configure el sistema: solo la finalidad declarada, sin reutilizacion para evaluar el rendimiento.',
        nl: 'Configureer het systeem: alleen het verklaarde doel, geen hergebruik om de prestaties te beoordelen.',
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
      ente: 'Datatilsynet',
      portale: FONTE_DATATILSYNET.url,
      urlFonte: FONTE_DATATILSYNET.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '100.000 NOK (circa 8.500 euro)',
      en: '100,000 NOK (about 8,500 euros)',
      de: '100.000 NOK (etwa 8.500 Euro)',
      fr: '100 000 NOK (environ 8 500 euros)',
      es: '100.000 NOK (unos 8.500 euros)',
      nl: '100.000 NOK (ongeveer 8.500 euro)',
    },
    casoCitato: {
      it: "Personvernnemnda, PVN-2017-07: un datore confrontava i dati GPS del veicolo aziendale con i fogli ore del dipendente, a sua insaputa, per controllare se avesse lavorato le ore dichiarate, riusando i dati per un nuovo scopo senza base giuridica. Deciso sotto la vecchia legge pre-GDPR, ma il principio (vietato riusare il GPS per controllare le ore) e confermato dalle linee guida attuali del Datatilsynet.",
      en: "Personvernnemnda, PVN-2017-07: an employer compared the GPS data of the company vehicle with the employee's timesheets, without the employee's knowledge, to check whether they had worked the declared hours, reusing the data for a new purpose without a legal basis. Decided under the old pre-GDPR law, but the principle (reusing GPS to check working hours is prohibited) is confirmed by the Datatilsynet's current guidelines.",
      de: 'Personvernnemnda, PVN-2017-07: Ein Arbeitgeber verglich die GPS-Daten des Firmenfahrzeugs ohne Wissen des Arbeitnehmers mit dessen Stundenzetteln, um zu pruefen, ob dieser die angegebenen Stunden gearbeitet hatte, und verwendete die Daten ohne Rechtsgrundlage fuer einen neuen Zweck weiter. Entschieden nach dem alten Recht vor der DSGVO, aber der Grundsatz (die Weiterverwendung von GPS zur Kontrolle der Arbeitszeiten ist verboten) wird durch die aktuellen Leitlinien des Datatilsynet bestaetigt.',
      fr: "Personvernnemnda, PVN-2017-07: un employeur comparait les donnees GPS du vehicule de l'entreprise avec les feuilles d'heures du salarie, a son insu, pour verifier s'il avait effectue les heures declarees, reutilisant les donnees pour une nouvelle finalite sans base legale. Decide sous l'ancienne loi anterieure au RGPD, mais le principe (la reutilisation du GPS pour controler les heures est interdite) est confirme par les lignes directrices actuelles du Datatilsynet.",
      es: "Personvernnemnda, PVN-2017-07: un empresario comparaba los datos GPS del vehiculo de la empresa con las hojas de horas del empleado, sin su conocimiento, para comprobar si habia trabajado las horas declaradas, reutilizando los datos para una nueva finalidad sin base juridica. Decidido bajo la antigua ley anterior al RGPD, pero el principio (esta prohibido reutilizar el GPS para controlar las horas) lo confirman las directrices actuales del Datatilsynet.",
      nl: 'Personvernnemnda, PVN-2017-07: een werkgever vergeleek de GPS-gegevens van het bedrijfsvoertuig zonder medeweten van de werknemer met diens urenstaten om te controleren of deze de opgegeven uren had gewerkt, waarbij de gegevens zonder rechtsgrond voor een nieuw doel werden hergebruikt. Beslist onder de oude wet van voor de AVG, maar het beginsel (het hergebruik van GPS om de uren te controleren is verboden) wordt bevestigd door de huidige richtlijnen van het Datatilsynet.',
    },
    urlFonte: FONTE_PVN_2017_07.url,
  },

  fonti: [
    FONTE_AML_KAP9,
    FONTE_DATATILSYNET_VEICOLI,
    FONTE_DATATILSYNET_DPIA,
    FONTE_DATATILSYNET,
    FONTE_PVN_2017_07,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
