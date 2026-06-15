/**
 * Scheda-paese Cipro per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * il monitoraggio Eurofound sulla Legge 125(I)/2018, l'art. 13 GDPR, la pagina
 * ufficiale del Garante cipriota, la sanzione del Garante al Gruppo Louis
 * (strumento Bradford Factor) e il Regolamento UE 2016/679 (GDPR).
 *
 * Cipro non e' uno Stato federale: c'e' un'unica autorita' nazionale, il Garante
 * (Commissioner for Personal Data Protection), senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_EUROFOUND = {
  titolo:
    'Eurofound, monitoraggio dei lavoratori a Cipro (Legge 125(I)/2018)',
  url: 'https://apps.eurofound.europa.eu/legislationdb/employee-monitoring-and-surveillance/cyprus',
};
const FONTE_GDPR_13 = {
  titolo: 'GDPR, art. 13 (informazione)',
  url: 'https://gdpr-info.eu/art-13-gdpr/',
};
const FONTE_GARANTE_CY = {
  titolo: 'Garante cipriota, pagina ufficiale',
  url: 'http://www.dataprotection.gov.cy/',
};
const FONTE_LOUIS = {
  titolo:
    'EDPB, sanzione del Garante cipriota al Gruppo Louis (strumento Bradford Factor)',
  url: 'https://www.edpb.europa.eu/news/national-news/2020/cypriot-supervisory-authority-banned-processing-automated-tool-used-scoring_en',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const cipro: SchedaPaese = {
  codiceISO: 'CY',
  slugCanonico: 'cipro',
  nome: 'Cipro',
  nomi: {
    it: 'Cipro',
    en: 'Cyprus',
    'en-us': 'Cyprus',
    'en-gb': 'Cyprus',
    'en-au': 'Cyprus',
    'en-ie': 'Cyprus',
    'en-ca': 'Cyprus',
    de: 'Zypern',
    nl: 'Cyprus',
    fr: 'Chypre',
    es: 'Chipre',
    pt: 'Chipre',
    da: 'Cypern',
    sv: 'Cypern',
    nb: 'Kypros',
    ru: 'Кипр',
  },
  bandiera: '🇨🇾',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Garante cipriota per la protezione dei dati personali',
    portale: FONTE_GARANTE_CY.url,
    urlFonte: FONTE_GARANTE_CY.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Cipro ha un'unica autorita nazionale, il Garante (Commissioner for Personal Data Protection); nessuna ripartizione regionale.",
      en: 'Cyprus has a single national authority, the Commissioner for Personal Data Protection; there is no regional split.',
      de: 'Zypern hat eine einzige nationale Behoerde, den Commissioner for Personal Data Protection; es gibt keine regionale Aufteilung.',
      fr: "Chypre dispose d'une unique autorite nationale, le Commissioner for Personal Data Protection; il n'existe aucune repartition regionale.",
      es: 'Chipre cuenta con una unica autoridad nacional, el Commissioner for Personal Data Protection; no hay reparto regional alguno.',
      nl: 'Cyprus heeft een enkele nationale autoriteit, de Commissioner for Personal Data Protection; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Informazione preventiva ai lavoratori (art. 13) ed esistenza di una base giuridica",
        en: 'Prior information to workers (art. 13) and the existence of a legal basis',
        de: 'Vorherige Information der Beschaeftigten (Art. 13) und Bestehen einer Rechtsgrundlage',
        fr: "Information prealable des travailleurs (art. 13) et existence d'une base juridique",
        es: 'Informacion previa a los trabajadores (art. 13) y existencia de una base juridica',
        nl: 'Voorafgaande informatie aan werknemers (art. 13) en het bestaan van een rechtsgrond',
      },
      risposta: 'si',
      dettaglio: {
        it: "il lavoratore va informato prima dell'inizio del monitoraggio su titolare, finalita e base giuridica; non esiste una legge cipriota specifica sul GPS, vale il quadro GDPR e la Legge 125(I)/2018.",
        en: 'the worker must be informed before monitoring begins about the controller, purposes and legal basis; there is no specific Cypriot law on GPS, the GDPR framework and Law 125(I)/2018 apply.',
        de: 'die beschaeftigte Person ist vor Beginn der Ueberwachung ueber den Verantwortlichen, die Zwecke und die Rechtsgrundlage zu informieren; es gibt kein spezifisches zypriotisches GPS-Gesetz, es gelten der DSGVO-Rahmen und das Gesetz 125(I)/2018.',
        fr: "le travailleur doit etre informe avant le debut de la surveillance sur le responsable, les finalites et la base juridique; il n'existe pas de loi chypriote specifique sur le GPS, le cadre du RGPD et la Loi 125(I)/2018 s'appliquent.",
        es: 'el trabajador debe ser informado antes del inicio de la monitorizacion sobre el responsable, las finalidades y la base juridica; no existe una ley chipriota especifica sobre el GPS, se aplican el marco del RGPD y la Ley 125(I)/2018.',
        nl: 'de werknemer moet voor de aanvang van de monitoring worden geinformeerd over de verwerkingsverantwoordelijke, de doeleinden en de rechtsgrond; er is geen specifieke Cypriotische GPS-wet, het AVG-kader en Wet 125(I)/2018 zijn van toepassing.',
      },
      fonte: FONTE_GDPR_13,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "non serve un'autorizzazione preventiva del Garante; con il GDPR il vecchio regime di notifica e stato abolito.",
        en: 'no prior authorisation from the Commissioner is needed; with the GDPR the old notification regime has been abolished.',
        de: 'eine vorherige Genehmigung des Commissioner ist nicht erforderlich; mit der DSGVO wurde das alte Meldesystem abgeschafft.',
        fr: "aucune autorisation prealable du Commissioner n'est requise; avec le RGPD l'ancien regime de notification a ete aboli.",
        es: 'no se necesita una autorizacion previa del Commissioner; con el RGPD se ha abolido el antiguo regimen de notificacion.',
        nl: 'er is geen voorafgaande toestemming van de Commissioner nodig; met de AVG is het oude meldingsregime afgeschaft.',
      },
      fonte: FONTE_EUROFOUND,
    },
    {
      voce: {
        it: 'Base = interesse legittimo con bilanciamento, non il consenso',
        en: 'Basis = legitimate interest with balancing, not consent',
        de: 'Grundlage = berechtigtes Interesse mit Abwaegung, nicht die Einwilligung',
        fr: "Base = interet legitime avec mise en balance, pas le consentement",
        es: 'Base = interes legitimo con ponderacion, no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang met belangenafweging, niet de toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "nel rapporto di lavoro il consenso non e liberamente prestato; la base usuale e l'interesse legittimo, con un test di bilanciamento documentato che non prevalga sui diritti dei lavoratori.",
        en: 'in the employment relationship consent is not freely given; the usual basis is legitimate interest, with a documented balancing test that does not override the workers rights.',
        de: 'im Arbeitsverhaeltnis wird die Einwilligung nicht freiwillig erteilt; die uebliche Grundlage ist das berechtigte Interesse, mit einer dokumentierten Abwaegung, die die Rechte der Beschaeftigten nicht ueberwiegt.',
        fr: "dans la relation de travail le consentement n'est pas librement donne; la base habituelle est l'interet legitime, avec un test de mise en balance documente qui ne prevaut pas sur les droits des travailleurs.",
        es: 'en la relacion laboral el consentimiento no se presta libremente; la base habitual es el interes legitimo, con una prueba de ponderacion documentada que no prevalezca sobre los derechos de los trabajadores.',
        nl: 'in de arbeidsverhouding wordt toestemming niet vrijelijk gegeven; de gebruikelijke grondslag is het gerechtvaardigd belang, met een gedocumenteerde belangenafweging die niet zwaarder weegt dan de rechten van de werknemers.',
      },
      fonte: FONTE_GDPR_13,
    },
    {
      voce: {
        it: 'Niente tracciamento continuo 24 ore su 24; minimizzazione (art. 5.1.c)',
        en: 'No continuous round-the-clock tracking; data minimisation (art. 5.1.c)',
        de: 'Keine kontinuierliche Rund-um-die-Uhr-Ortung; Datenminimierung (Art. 5.1.c)',
        fr: 'Pas de suivi continu 24 heures sur 24; minimisation (art. 5.1.c)',
        es: 'Sin seguimiento continuo las 24 horas; minimizacion (art. 5.1.c)',
        nl: 'Geen continue tracking de klok rond; minimalisering (art. 5.1.c)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'il tracciamento GPS continuo e sempre attivo viola la minimizzazione; va limitato a quanto necessario (orario di lavoro, rischio effettivo).',
        en: 'continuous, always-on GPS tracking breaches data minimisation; it must be limited to what is necessary (working hours, actual risk).',
        de: 'kontinuierliche, dauerhaft aktive GPS-Ortung verstoesst gegen die Datenminimierung; sie ist auf das Notwendige zu beschraenken (Arbeitszeit, tatsaechliches Risiko).',
        fr: "le suivi GPS continu et toujours actif viole la minimisation; il doit etre limite a ce qui est necessaire (temps de travail, risque effectif).",
        es: 'el seguimiento GPS continuo y siempre activo vulnera la minimizacion; debe limitarse a lo necesario (jornada laboral, riesgo efectivo).',
        nl: 'continue, altijd actieve GPS-tracking schendt de minimalisering; deze moet worden beperkt tot wat noodzakelijk is (werktijd, daadwerkelijk risico).',
      },
      fonte: FONTE_GDPR,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico dei dipendenti (art. 35)",
        en: 'Impact assessment (DPIA) for systematic monitoring of employees (art. 35)',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer die systematische Ueberwachung von Beschaeftigten (Art. 35)',
        fr: "Analyse d'impact (AIPD) pour la surveillance systematique des salaries (art. 35)",
        es: 'Evaluacion de impacto (EIPD) para la monitorizacion sistematica de los empleados (art. 35)',
        nl: 'Effectbeoordeling (DPIA) voor systematische monitoring van werknemers (art. 35)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'una DPIA e necessaria quando il monitoraggio dei dipendenti e sistematico; il Garante valuta caso per caso la proporzionalita.',
        en: 'a DPIA is required when employee monitoring is systematic; the Commissioner assesses proportionality case by case.',
        de: 'eine DSFA ist erforderlich, wenn die Ueberwachung der Beschaeftigten systematisch ist; der Commissioner prueft die Verhaeltnismaessigkeit im Einzelfall.',
        fr: "une AIPD est necessaire lorsque la surveillance des salaries est systematique; le Commissioner apprecie la proportionnalite au cas par cas.",
        es: 'una EIPD es necesaria cuando la monitorizacion de los empleados es sistematica; el Commissioner evalua la proporcionalidad caso por caso.',
        nl: 'een DPIA is vereist wanneer de monitoring van werknemers systematisch is; de Commissioner beoordeelt de evenredigheid per geval.',
      },
      fonte: FONTE_EUROFOUND,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo) e documenta il bilanciamento.',
        en: 'Identify a valid legal basis (legitimate interest) and document the balancing test.',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (berechtigtes Interesse) und dokumentieren Sie die Abwaegung.',
        fr: "Identifiez une base juridique valable (interet legitime) et documentez la mise en balance.",
        es: 'Identifique una base juridica valida (interes legitimo) y documente la ponderacion.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang) en documenteer de belangenafweging.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Informa i lavoratori prima dell'inizio del monitoraggio (art. 13).",
        en: 'Inform workers before monitoring begins (art. 13).',
        de: 'Informieren Sie die Beschaeftigten vor Beginn der Ueberwachung (Art. 13).',
        fr: "Informez les travailleurs avant le debut de la surveillance (art. 13).",
        es: 'Informe a los trabajadores antes del inicio de la monitorizacion (art. 13).',
        nl: 'Informeer de werknemers voordat de monitoring begint (art. 13).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico.",
        en: 'Carry out the impact assessment (DPIA) for systematic monitoring.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) fuer die systematische Ueberwachung durch.',
        fr: "Realisez l'analyse d'impact (AIPD) pour la surveillance systematique.",
        es: 'Realice la evaluacion de impacto (EIPD) para la monitorizacion sistematica.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de systematische monitoring.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Limita il GPS a quanto necessario: niente tracciamento continuo 24 ore su 24.',
        en: 'Limit GPS to what is necessary: no continuous round-the-clock tracking.',
        de: 'Beschraenken Sie GPS auf das Notwendige: keine kontinuierliche Rund-um-die-Uhr-Ortung.',
        fr: 'Limitez le GPS a ce qui est necessaire: pas de suivi continu 24 heures sur 24.',
        es: 'Limite el GPS a lo necesario: sin seguimiento continuo las 24 horas.',
        nl: 'Beperk GPS tot wat noodzakelijk is: geen continue tracking de klok rond.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema in modo proporzionato e verifica la prevalenza dell'interesse sui diritti dei lavoratori.",
        en: 'Configure the system proportionately and check that the interest does not override the workers rights.',
        de: 'Konfigurieren Sie das System verhaeltnismaessig und pruefen Sie, dass das Interesse die Rechte der Beschaeftigten nicht ueberwiegt.',
        fr: "Configurez le systeme de maniere proportionnee et verifiez que l'interet ne prevaut pas sur les droits des travailleurs.",
        es: 'Configure el sistema de forma proporcionada y verifique que el interes no prevalece sobre los derechos de los trabajadores.',
        nl: 'Configureer het systeem proportioneel en controleer dat het belang niet zwaarder weegt dan de rechten van de werknemers.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Garante cipriota',
      portale: FONTE_GARANTE_CY.url,
      urlFonte: FONTE_GARANTE_CY.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '82.000 €',
      en: '82,000 EUR',
      de: '82.000 EUR',
      fr: '82 000 EUR',
      es: '82.000 EUR',
      nl: '82.000 EUR',
    },
    casoCitato: {
      it: "Garante cipriota contro il Gruppo Louis (decisione del 25 ottobre 2019, annunciata il 27 gennaio 2020): uso di uno strumento automatico (Bradford Factor) per profilare le assenze per malattia di 818 dipendenti, senza base giuridica valida e su dati sanitari (artt. 6 e 9 GDPR); il bilanciamento dell'interesse legittimo e fallito. Multa complessiva 82.000 euro (70.000 + 10.000 + 2.000 a tre societa del gruppo). Non e un caso di GPS, ma e la sanzione faro cipriota sul monitoraggio dei dipendenti.",
      en: "Cypriot Commissioner against the Louis Group (decision of 25 October 2019, announced on 27 January 2020): use of an automated tool (Bradford Factor) to profile the sick-leave absences of 818 employees, without a valid legal basis and over health data (arts. 6 and 9 GDPR); the legitimate-interest balancing failed. Total fine 82,000 euros (70,000 + 10,000 + 2,000 against three companies of the group). It is not a GPS case, but it is the landmark Cypriot penalty on employee monitoring.",
      de: "Zypriotischer Commissioner gegen die Louis-Gruppe (Entscheidung vom 25. Oktober 2019, bekannt gegeben am 27. Januar 2020): Einsatz eines automatisierten Instruments (Bradford Factor) zur Profilbildung der krankheitsbedingten Fehlzeiten von 818 Beschaeftigten, ohne gueltige Rechtsgrundlage und ueber Gesundheitsdaten (Art. 6 und 9 DSGVO); die Abwaegung des berechtigten Interesses ist gescheitert. Gesamtbussgeld 82.000 Euro (70.000 + 10.000 + 2.000 gegen drei Gesellschaften der Gruppe). Es ist kein GPS-Fall, aber die zypriotische Leitsanktion zur Ueberwachung von Beschaeftigten.",
      fr: "Commissioner chypriote contre le Groupe Louis (decision du 25 octobre 2019, annoncee le 27 janvier 2020): utilisation d'un outil automatise (Bradford Factor) pour profiler les absences pour maladie de 818 salaries, sans base juridique valable et sur des donnees de sante (art. 6 et 9 RGPD); la mise en balance de l'interet legitime a echoue. Amende totale de 82 000 euros (70 000 + 10 000 + 2 000 contre trois societes du groupe). Ce n'est pas un cas de GPS, mais c'est la sanction phare chypriote sur la surveillance des salaries.",
      es: "Commissioner chipriota contra el Grupo Louis (decision del 25 de octubre de 2019, anunciada el 27 de enero de 2020): uso de una herramienta automatizada (Bradford Factor) para perfilar las ausencias por enfermedad de 818 empleados, sin una base juridica valida y sobre datos de salud (arts. 6 y 9 RGPD); la ponderacion del interes legitimo fracaso. Multa total de 82.000 euros (70.000 + 10.000 + 2.000 a tres sociedades del grupo). No es un caso de GPS, pero es la sancion de referencia chipriota sobre la monitorizacion de los empleados.",
      nl: "Cypriotische Commissioner tegen de Louis-groep (besluit van 25 oktober 2019, aangekondigd op 27 januari 2020): gebruik van een geautomatiseerd instrument (Bradford Factor) om de ziekteverzuim-afwezigheden van 818 werknemers te profileren, zonder geldige rechtsgrond en over gezondheidsgegevens (art. 6 en 9 AVG); de afweging van het gerechtvaardigd belang is mislukt. Totale boete 82.000 euro (70.000 + 10.000 + 2.000 tegen drie vennootschappen van de groep). Het is geen GPS-zaak, maar het is de toonaangevende Cypriotische sanctie inzake de monitoring van werknemers.",
    },
    urlFonte: FONTE_LOUIS.url,
  },

  fonti: [FONTE_EUROFOUND, FONTE_GDPR_13, FONTE_GARANTE_CY, FONTE_LOUIS, FONTE_GDPR],

  aggiornatoIl: '2026-06-15',
};
