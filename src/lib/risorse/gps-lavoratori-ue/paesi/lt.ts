/**
 * Scheda-paese Lituania per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 27 del Codice del lavoro lituano (regole interne e informazione sul
 * monitoraggio), lista VDAI dei trattamenti che richiedono una DPIA, decisione
 * VDAI del 2022 sulla corrispondenza personale di un dipendente, servizi e
 * reclami del VDAI e GDPR.
 *
 * La Lituania ha un'unica autorita' nazionale, il VDAI, senza ripartizione
 * regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_EUROFOUND_ART27 = {
  titolo:
    'Eurofound, monitoraggio dei lavoratori in Lituania (Codice del lavoro art. 27)',
  url: 'https://apps.eurofound.europa.eu/legislationdb/employee-monitoring-and-surveillance/lithuania',
};
const FONTE_VDAI_DPIA = {
  titolo:
    'VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)',
  url: 'https://www.edpb.europa.eu/sites/default/files/decisions/lt-dpia_list_en_20190314.pdf',
};
const FONTE_VDAI_CORRISPONDENZA = {
  titolo:
    'VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)',
  url: 'https://www.edpb.europa.eu/news/national-news/2023/lithuanian-sa-adopted-decision-processing-employees-personal-correspondence_en',
};
const FONTE_VDAI_SERVIZI = {
  titolo: 'VDAI (Garante lituano), servizi e reclami',
  url: 'https://vdai.lrv.lt/en/services/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const lituania: SchedaPaese = {
  codiceISO: 'LT',
  slugCanonico: 'lituania',
  nome: 'Lituania',
  nomi: {
    it: 'Lituania',
    en: 'Lithuania',
    'en-us': 'Lithuania',
    'en-gb': 'Lithuania',
    'en-au': 'Lithuania',
    'en-ie': 'Lithuania',
    'en-ca': 'Lithuania',
    de: 'Litauen',
    nl: 'Litouwen',
    fr: 'Lituanie',
    es: 'Lituania',
    pt: 'Lituânia',
    da: 'Litauen',
    sv: 'Litauen',
    nb: 'Litauen',
    ru: 'Литва',
  },
  bandiera: '🇱🇹',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'VDAI (Valstybine duomenu apsaugos inspekcija, Garante lituano)',
    portale: FONTE_VDAI_SERVIZI.url,
    urlFonte: FONTE_VDAI_SERVIZI.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Lituania ha un'unica autorita nazionale, il VDAI; nessuna ripartizione regionale.",
      en: 'Lithuania has a single national authority, the VDAI; there is no regional split.',
      de: 'Litauen hat eine einzige nationale Behoerde, das VDAI; es gibt keine regionale Aufteilung.',
      fr: 'La Lituanie dispose d une seule autorite nationale, le VDAI; il n y a pas de repartition regionale.',
      es: 'Lituania cuenta con una unica autoridad nacional, el VDAI; no hay reparto regional.',
      nl: 'Litouwen heeft een enkele nationale autoriteit, het VDAI; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Regole interne e informazione preventiva dei lavoratori sul monitoraggio (Codice del lavoro art. 27)',
        en: 'Internal rules and prior information of workers about monitoring (Labour Code art. 27)',
        de: 'Interne Regeln und vorherige Information der Arbeitnehmer ueber die Ueberwachung (Arbeitsgesetzbuch Art. 27)',
        fr: 'Regles internes et information prealable des travailleurs sur la surveillance (Code du travail art. 27)',
        es: 'Normas internas e informacion previa de los trabajadores sobre la vigilancia (Codigo del trabajo art. 27)',
        nl: 'Interne regels en voorafgaande informatie van werknemers over monitoring (Arbeidswetboek art. 27)',
      },
      risposta: 'si',
      dettaglio: {
        it: "L'art. 27 del Codice del lavoro obbliga il datore a predisporre regole interne e a informare i lavoratori sull'uso delle tecnologie e sul monitoraggio sul luogo di lavoro, anche su sorveglianza video/audio e tracciamento di comportamento, posizione o movimento.",
        en: 'Article 27 of the Labour Code requires the employer to set up internal rules and to inform workers about the use of technologies and about monitoring in the workplace, including video/audio surveillance and tracking of behaviour, location or movement.',
        de: 'Artikel 27 des Arbeitsgesetzbuchs verpflichtet den Arbeitgeber, interne Regeln aufzustellen und die Arbeitnehmer ueber den Einsatz von Technologien und ueber die Ueberwachung am Arbeitsplatz zu informieren, auch ueber Video-/Audioueberwachung und die Verfolgung von Verhalten, Standort oder Bewegung.',
        fr: "L article 27 du Code du travail oblige l employeur a etablir des regles internes et a informer les travailleurs sur l usage des technologies et sur la surveillance sur le lieu de travail, y compris la videosurveillance/audiosurveillance et le suivi du comportement, de la position ou du mouvement.",
        es: 'El articulo 27 del Codigo del trabajo obliga al empleador a establecer normas internas y a informar a los trabajadores sobre el uso de las tecnologias y sobre la vigilancia en el lugar de trabajo, incluida la videovigilancia/audiovigilancia y el seguimiento del comportamiento, la posicion o el movimiento.',
        nl: 'Artikel 27 van het Arbeidswetboek verplicht de werkgever interne regels op te stellen en de werknemers te informeren over het gebruik van technologieen en over de monitoring op de werkplek, ook over video-/audiobewaking en het volgen van gedrag, locatie of beweging.',
      },
      fonte: FONTE_EUROFOUND_ART27,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d une autorite avant l installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'Con il GDPR non serve piu alcuna notifica o autorizzazione preventiva; il titolare si autovaluta e conserva la documentazione.',
        en: 'Under the GDPR no prior notification or authorisation is needed any longer; the controller self-assesses and keeps the documentation.',
        de: 'Mit der DSGVO ist keine vorherige Meldung oder Genehmigung mehr erforderlich; der Verantwortliche bewertet selbst und bewahrt die Dokumentation auf.',
        fr: "Avec le RGPD, aucune notification ou autorisation prealable n est plus necessaire; le responsable du traitement procede a une auto-evaluation et conserve la documentation.",
        es: 'Con el RGPD ya no es necesaria ninguna notificacion ni autorizacion previa; el responsable se autoevalua y conserva la documentacion.',
        nl: 'Met de AVG is geen voorafgaande melding of toestemming meer nodig; de verwerkingsverantwoordelijke beoordeelt dit zelf en bewaart de documentatie.',
      },
      fonte: FONTE_EUROFOUND_ART27,
    },
    {
      voce: {
        it: 'Base = interesse legittimo, non il consenso',
        en: 'Basis = legitimate interest, not consent',
        de: 'Grundlage = berechtigtes Interesse, nicht die Einwilligung',
        fr: "Base = interet legitime, non le consentement",
        es: 'Base = interes legitimo, no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang, niet de toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il monitoraggio e ammesso solo con uno scopo reale e giustificato; la base e l\'interesse legittimo, non il consenso, che nel rapporto di lavoro non e liberamente prestato.',
        en: 'Monitoring is allowed only for a real and justified purpose; the basis is legitimate interest, not consent, which in the employment relationship is not freely given.',
        de: 'Die Ueberwachung ist nur fuer einen tatsaechlichen und gerechtfertigten Zweck zulaessig; die Grundlage ist das berechtigte Interesse, nicht die Einwilligung, die im Arbeitsverhaeltnis nicht freiwillig erteilt wird.',
        fr: "La surveillance n est admise que pour une finalite reelle et justifiee; la base est l interet legitime, et non le consentement, qui dans la relation de travail n est pas librement donne.",
        es: 'La vigilancia solo se admite con una finalidad real y justificada; la base es el interes legitimo, no el consentimiento, que en la relacion laboral no se presta libremente.',
        nl: 'Monitoring is alleen toegestaan voor een reeel en gerechtvaardigd doel; de grondslag is het gerechtvaardigd belang, niet de toestemming, die in de arbeidsverhouding niet vrijelijk wordt gegeven.',
      },
      fonte: FONTE_EUROFOUND_ART27,
    },
    {
      voce: {
        it: 'GPS proporzionato, sospeso fuori orario o disattivabile dal lavoratore; niente tracciamento continuo',
        en: 'Proportionate GPS, suspended outside working hours or switchable off by the worker; no continuous tracking',
        de: 'Verhaeltnismaessiges GPS, ausserhalb der Arbeitszeit ausgesetzt oder vom Arbeitnehmer abschaltbar; keine kontinuierliche Verfolgung',
        fr: "GPS proportionne, suspendu en dehors des heures de travail ou desactivable par le travailleur; pas de suivi continu",
        es: 'GPS proporcionado, suspendido fuera del horario de trabajo o desactivable por el trabajador; sin seguimiento continuo',
        nl: 'Evenredig GPS, buiten werktijd opgeschort of door de werknemer uit te schakelen; geen continue tracking',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il tracciamento del veicolo va sospeso fuori dall\'orario di lavoro o il lavoratore deve poterlo disattivare; il tracciamento GPS continuo e stato ritenuto sproporzionato e va preferito un mezzo meno invasivo.',
        en: 'Vehicle tracking must be suspended outside working hours or the worker must be able to switch it off; continuous GPS tracking has been held disproportionate and a less intrusive means is to be preferred.',
        de: 'Die Fahrzeugverfolgung muss ausserhalb der Arbeitszeit ausgesetzt werden oder der Arbeitnehmer muss sie abschalten koennen; die kontinuierliche GPS-Verfolgung wurde als unverhaeltnismaessig angesehen, und ein weniger eingreifendes Mittel ist vorzuziehen.',
        fr: "Le suivi du vehicule doit etre suspendu en dehors des heures de travail ou le travailleur doit pouvoir le desactiver; le suivi GPS continu a ete juge disproportionne et un moyen moins intrusif est a privilegier.",
        es: 'El seguimiento del vehiculo debe suspenderse fuera del horario de trabajo o el trabajador debe poder desactivarlo; el seguimiento GPS continuo se ha considerado desproporcionado y debe preferirse un medio menos invasivo.',
        nl: 'Het volgen van het voertuig moet buiten werktijd worden opgeschort of de werknemer moet het kunnen uitschakelen; continue GPS-tracking is als onevenredig beoordeeld en een minder ingrijpend middel verdient de voorkeur.',
      },
      fonte: FONTE_EUROFOUND_ART27,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti, inclusi posizione e movimento (lista VDAI, voce 10)",
        en: 'Data protection impact assessment (DPIA) for monitoring employees, including location and movement (VDAI list, item 10)',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer die Ueberwachung von Beschaeftigten, einschliesslich Standort und Bewegung (VDAI-Liste, Punkt 10)',
        fr: "Analyse d impact relative a la protection des donnees (AIPD) pour la surveillance des salaries, y compris la position et le mouvement (liste VDAI, point 10)",
        es: 'Evaluacion de impacto relativa a la proteccion de datos (EIPD) para la vigilancia de los empleados, incluida la posicion y el movimiento (lista VDAI, punto 10)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de monitoring van werknemers, inclusief locatie en beweging (VDAI-lijst, punt 10)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista VDAI dei trattamenti che richiedono una valutazione d'impatto include espressamente il trattamento dei dati dei dipendenti per il monitoraggio, inclusi comportamento, posizione o movimento.",
        en: 'The VDAI list of processing operations requiring a data protection impact assessment expressly includes the processing of employees data for monitoring, including behaviour, location or movement.',
        de: 'Die VDAI-Liste der Verarbeitungsvorgaenge, die eine Datenschutz-Folgenabschaetzung erfordern, umfasst ausdruecklich die Verarbeitung von Beschaeftigtendaten zur Ueberwachung, einschliesslich Verhalten, Standort oder Bewegung.',
        fr: "La liste VDAI des traitements necessitant une analyse d impact inclut expressement le traitement des donnees des salaries a des fins de surveillance, y compris le comportement, la position ou le mouvement.",
        es: 'La lista VDAI de los tratamientos que requieren una evaluacion de impacto incluye expresamente el tratamiento de los datos de los empleados con fines de vigilancia, incluido el comportamiento, la posicion o el movimiento.',
        nl: 'De VDAI-lijst van verwerkingen waarvoor een gegevensbeschermingseffectbeoordeling vereist is, omvat uitdrukkelijk de verwerking van werknemersgegevens voor monitoring, inclusief gedrag, locatie of beweging.',
      },
      fonte: FONTE_VDAI_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Predisponi regole interne sul monitoraggio e informa i lavoratori (art. 27 + art. 13 GDPR).',
        en: 'Set up internal rules on monitoring and inform workers (art. 27 + art. 13 GDPR).',
        de: 'Stellen Sie interne Regeln zur Ueberwachung auf und informieren Sie die Arbeitnehmer (Art. 27 + Art. 13 DSGVO).',
        fr: 'Etablissez des regles internes sur la surveillance et informez les travailleurs (art. 27 + art. 13 RGPD).',
        es: 'Establezca normas internas sobre la vigilancia e informe a los trabajadores (art. 27 + art. 13 RGPD).',
        nl: 'Stel interne regels over monitoring op en informeer de werknemers (art. 27 + art. 13 AVG).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (legitimate interest, not consent).',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (berechtigtes Interesse, nicht die Einwilligung).',
        fr: 'Determinez une base juridique valable (interet legitime, non le consentement).',
        es: 'Identifique una base juridica valida (interes legitimo, no el consentimiento).',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang, niet de toestemming).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti, inclusi posizione e movimento.",
        en: 'Carry out the data protection impact assessment (DPIA) for monitoring employees, including location and movement.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) fuer die Ueberwachung der Beschaeftigten durch, einschliesslich Standort und Bewegung.',
        fr: "Realisez l analyse d impact relative a la protection des donnees (AIPD) pour la surveillance des salaries, y compris la position et le mouvement.",
        es: 'Realice la evaluacion de impacto relativa a la proteccion de datos (EIPD) para la vigilancia de los empleados, incluida la posicion y el movimiento.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit voor de monitoring van werknemers, inclusief locatie en beweging.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato: sospeso fuori orario o disattivabile dal lavoratore.',
        en: 'Configure the system in a proportionate way: suspended outside working hours or switchable off by the worker.',
        de: 'Konfigurieren Sie das System verhaeltnismaessig: ausserhalb der Arbeitszeit ausgesetzt oder vom Arbeitnehmer abschaltbar.',
        fr: "Configurez le systeme de maniere proportionnee: suspendu en dehors des heures de travail ou desactivable par le travailleur.",
        es: 'Configure el sistema de forma proporcionada: suspendido fuera del horario de trabajo o desactivable por el trabajador.',
        nl: 'Configureer het systeem op evenredige wijze: buiten werktijd opgeschort of door de werknemer uit te schakelen.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Conserva la documentazione e mettila a disposizione del VDAI su richiesta.',
        en: 'Keep the documentation and make it available to the VDAI on request.',
        de: 'Bewahren Sie die Dokumentation auf und stellen Sie sie dem VDAI auf Anfrage zur Verfuegung.',
        fr: 'Conservez la documentation et mettez-la a la disposition du VDAI sur demande.',
        es: 'Conserve la documentacion y pongala a disposicion del VDAI cuando lo solicite.',
        nl: 'Bewaar de documentatie en stel deze op verzoek ter beschikking van het VDAI.',
      },
    },
  ],

  contatti: [
    {
      ente: 'VDAI, servizi e reclami',
      portale: FONTE_VDAI_SERVIZI.url,
      urlFonte: FONTE_VDAI_SERVIZI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euro or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4% des Umsatzes (DSGVO)',
      fr: "jusqu a 20 millions d euros ou 4% du chiffre d affaires (RGPD)",
      es: 'hasta 20 millones de euros o el 4% de la facturacion (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: 'Non risulta una multa del VDAI specifica e pubblicata per il GPS sui dipendenti. In una decisione del 7 ottobre 2022 il VDAI ha ritenuto illecito il trattamento della corrispondenza personale di un dipendente (esaminata e usata per un procedimento disciplinare) senza una base giuridica ai sensi dell\'art. 6 GDPR. Il VDAI ha inoltre ritenuto sproporzionato il tracciamento GPS continuo dei dipendenti. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).',
      en: 'There is no specific, published VDAI fine for GPS on employees. In a decision of 7 October 2022 the VDAI held unlawful the processing of an employee personal correspondence (examined and used for a disciplinary proceeding) without a legal basis under art. 6 GDPR. The VDAI also held continuous GPS tracking of employees to be disproportionate. The sanction risk remains the general one under the GDPR (art. 83).',
      de: 'Es gibt keine spezifische, veroeffentlichte VDAI-Geldbusse fuer GPS bei Beschaeftigten. In einer Entscheidung vom 7. Oktober 2022 hat das VDAI die Verarbeitung der persoenlichen Korrespondenz eines Beschaeftigten (die geprueft und fuer ein Disziplinarverfahren verwendet wurde) ohne Rechtsgrundlage nach Art. 6 DSGVO fuer rechtswidrig erklaert. Das VDAI hat zudem die kontinuierliche GPS-Verfolgung von Beschaeftigten als unverhaeltnismaessig angesehen. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).',
      fr: "Il n existe pas d amende specifique et publiee du VDAI pour le GPS sur les salaries. Dans une decision du 7 octobre 2022, le VDAI a juge illicite le traitement de la correspondance personnelle d un salarie (examinee et utilisee pour une procedure disciplinaire) sans base juridique au sens de l art. 6 RGPD. Le VDAI a en outre juge disproportionne le suivi GPS continu des salaries. Le risque de sanction reste celui, general, du RGPD (art. 83).",
      es: 'No consta una multa especifica y publicada del VDAI por el GPS sobre los empleados. En una decision de 7 de octubre de 2022 el VDAI considero ilicito el tratamiento de la correspondencia personal de un empleado (examinada y utilizada para un procedimiento disciplinario) sin una base juridica con arreglo al art. 6 RGPD. El VDAI considero ademas desproporcionado el seguimiento GPS continuo de los empleados. El riesgo sancionador sigue siendo el general del RGPD (art. 83).',
      nl: 'Er is geen specifieke, gepubliceerde VDAI-boete voor GPS op werknemers. In een besluit van 7 oktober 2022 oordeelde het VDAI dat de verwerking van de persoonlijke correspondentie van een werknemer (onderzocht en gebruikt voor een tuchtprocedure) zonder rechtsgrondslag op grond van art. 6 AVG onrechtmatig was. Het VDAI achtte bovendien continue GPS-tracking van werknemers onevenredig. Het sanctierisico blijft het algemene risico van de AVG (art. 83).',
    },
    urlFonte: FONTE_VDAI_CORRISPONDENZA.url,
  },

  fonti: [
    FONTE_EUROFOUND_ART27,
    FONTE_VDAI_DPIA,
    FONTE_VDAI_CORRISPONDENZA,
    FONTE_VDAI_SERVIZI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
