/**
 * Scheda-paese Moldova per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Moldova NON e' uno Stato membro dell'UE, ma un paese candidato.
 * La legge in vigore nel 2026 e' la Legge 133/2011 sulla protezione dei dati
 * personali; una nuova legge allineata al GDPR (Legge 195/2024) entra in vigore
 * solo il 23 agosto 2026. Il quadro descritto qui e' allineato al GDPR ma distinto.
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge 133/2011, guida del CNPDCP sulla videosorveglianza, pagina reclami del
 * CNPDCP, scheda DLA Piper sulla protezione dati in Moldova e GDPR come
 * riferimento comparativo. Unica autorita' nazionale, il CNPDCP; nessuna
 * ripartizione regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LEGGE_133 = {
  titolo: 'Legge n. 133/2011 sulla protezione dei dati personali',
  url: 'https://www.legis.md/cautare/getResults?doc_id=128114&lang=ro',
};
const FONTE_CNPDCP_VIDEO = {
  titolo:
    "CNPDCP, guida sull'installazione e gestione della videosorveglianza",
  url: 'https://datepersonale.md/en/data-controller/ncpdp-guidelines/',
};
const FONTE_CNPDCP_RECLAMI = {
  titolo: 'CNPDCP, presentare un reclamo',
  url: 'https://datepersonale.md/about/plingeri-si-petitii/',
};
const FONTE_DLA_PIPER = {
  titolo:
    'DLA Piper, protezione dei dati in Moldova (DPIA, registrazione abolita)',
  url: 'https://www.dlapiperdataprotection.com/?t=law&c=MD',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const moldova: SchedaPaese = {
  codiceISO: 'MD',
  slugCanonico: 'moldova',
  nome: 'Moldova',
  nomi: {
    it: 'Moldova',
    en: 'Moldova',
    'en-us': 'Moldova',
    'en-gb': 'Moldova',
    'en-au': 'Moldova',
    'en-ie': 'Moldova',
    'en-ca': 'Moldova',
    de: 'Moldau',
    nl: 'Moldavië',
    fr: 'Moldavie',
    es: 'Moldavia',
    pt: 'Moldávia',
    da: 'Moldova',
    sv: 'Moldavien',
    nb: 'Moldova',
    ru: 'Молдова',
  },
  bandiera: '🇲🇩',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'CNPDCP (Centro nazionale per la protezione dei dati personali)',
    portale: FONTE_CNPDCP_RECLAMI.url,
    urlFonte: FONTE_CNPDCP_RECLAMI.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Moldova e' un paese candidato, fuori dall'UE; la legge in vigore e' la 133/2011, mentre una nuova legge allineata al GDPR (195/2024) entra in vigore il 23 agosto 2026. Unica autorita' nazionale, il CNPDCP; nessuna ripartizione regionale.",
      en: 'Moldova is a candidate country, outside the EU; the law in force is 133/2011, while a new law aligned with the GDPR (195/2024) comes into force on 23 August 2026. There is a single national authority, the CNPDCP; no regional breakdown.',
      de: 'Die Republik Moldau ist ein Kandidatenland ausserhalb der EU; das geltende Gesetz ist das Gesetz 133/2011, waehrend ein neues, an die DSGVO angelehntes Gesetz (195/2024) am 23. August 2026 in Kraft tritt. Es gibt nur eine nationale Behoerde, das CNPDCP; keine regionale Aufteilung.',
      fr: "La Moldavie est un pays candidat, hors de l'UE; la loi en vigueur est la loi 133/2011, tandis qu'une nouvelle loi alignee sur le RGPD (195/2024) entre en vigueur le 23 aout 2026. Il existe une seule autorite nationale, le CNPDCP; aucune repartition regionale.",
      es: 'Moldavia es un pais candidato, fuera de la UE; la ley en vigor es la 133/2011, mientras que una nueva ley alineada con el RGPD (195/2024) entra en vigor el 23 de agosto de 2026. Existe una unica autoridad nacional, el CNPDCP; sin reparto regional.',
      nl: 'Moldavië is een kandidaat-lidstaat, buiten de EU; de geldende wet is wet 133/2011, terwijl een nieuwe, op de AVG afgestemde wet (195/2024) op 23 augustus 2026 in werking treedt. Er is één nationale autoriteit, het CNPDCP; geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Base giuridica valida e informazione ai lavoratori (Legge 133/2011 + Codice del lavoro art. 91-94)',
        en: 'Valid legal basis and information to workers (Law 133/2011 + Labour Code art. 91-94)',
        de: 'Gueltige Rechtsgrundlage und Information der Arbeitnehmer (Gesetz 133/2011 + Arbeitsgesetzbuch Art. 91-94)',
        fr: 'Base juridique valable et information des travailleurs (loi 133/2011 + Code du travail art. 91-94)',
        es: 'Base juridica valida e informacion a los trabajadores (Ley 133/2011 + Codigo del trabajo art. 91-94)',
        nl: 'Geldige rechtsgrondslag en informatie aan werknemers (wet 133/2011 + Arbeidswetboek art. 91-94)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il monitoraggio dei lavoratori (video, internet e per estensione GPS) e' disciplinato dalla Legge 133/2011 e dal Codice del lavoro (artt. 91-94); i lavoratori vanno informati su chi accede ai dati e su quali dati si raccolgono.",
        en: 'The monitoring of workers (video, internet and, by extension, GPS) is governed by Law 133/2011 and the Labour Code (art. 91-94); workers must be informed about who accesses the data and what data is collected.',
        de: 'Die Ueberwachung der Arbeitnehmer (Video, Internet und im weiteren Sinne GPS) ist durch das Gesetz 133/2011 und das Arbeitsgesetzbuch (Art. 91-94) geregelt; die Arbeitnehmer muessen darueber informiert werden, wer auf die Daten zugreift und welche Daten erhoben werden.',
        fr: "La surveillance des travailleurs (video, internet et, par extension, GPS) est regie par la loi 133/2011 et le Code du travail (art. 91-94); les travailleurs doivent etre informes de qui accede aux donnees et de quelles donnees sont collectees.",
        es: 'La supervision de los trabajadores (video, internet y, por extension, GPS) se rige por la Ley 133/2011 y el Codigo del trabajo (art. 91-94); se debe informar a los trabajadores sobre quien accede a los datos y que datos se recogen.',
        nl: 'De monitoring van werknemers (video, internet en bij uitbreiding GPS) wordt geregeld door wet 133/2011 en het Arbeidswetboek (art. 91-94); werknemers moeten worden geinformeerd over wie toegang heeft tot de gegevens en welke gegevens worden verzameld.',
      },
      fonte: FONTE_LEGGE_133,
    },
    {
      voce: {
        it: "Notifica o registrazione preventiva di un'autorita prima di installare",
        en: 'Prior notification or registration with an authority before installing',
        de: 'Vorherige Meldung oder Registrierung bei einer Behoerde vor der Installation',
        fr: "Notification ou enregistrement prealable aupres d'une autorite avant l'installation",
        es: 'Notificacion o registro previo ante una autoridad antes de instalar',
        nl: 'Voorafgaande melding of registratie bij een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "L'obbligo di notifica/registrazione dei sistemi di dati al CNPDCP e' stato abolito dal 10 gennaio 2022 ed e' stato sostituito da una valutazione d'impatto a carico del titolare.",
        en: 'The obligation to notify/register data systems with the CNPDCP was abolished on 10 January 2022 and replaced by an impact assessment carried out by the controller.',
        de: 'Die Pflicht zur Meldung/Registrierung von Datensystemen beim CNPDCP wurde zum 10. Januar 2022 abgeschafft und durch eine vom Verantwortlichen durchzufuehrende Folgenabschaetzung ersetzt.',
        fr: "L'obligation de notifier/enregistrer les systemes de donnees aupres du CNPDCP a ete abolie le 10 janvier 2022 et remplacee par une analyse d'impact realisee par le responsable du traitement.",
        es: 'La obligacion de notificar/registrar los sistemas de datos ante el CNPDCP se abolio el 10 de enero de 2022 y se sustituyo por una evaluacion de impacto a cargo del responsable del tratamiento.',
        nl: 'De verplichting om gegevenssystemen bij het CNPDCP te melden/registreren is op 10 januari 2022 afgeschaft en vervangen door een effectbeoordeling die door de verwerkingsverantwoordelijke wordt uitgevoerd.',
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: 'Base = consenso o interesse legittimo',
        en: 'Basis = consent or legitimate interest',
        de: 'Grundlage = Einwilligung oder berechtigtes Interesse',
        fr: 'Base = consentement ou interet legitime',
        es: 'Base = consentimiento o interes legitimo',
        nl: 'Grondslag = toestemming of gerechtvaardigd belang',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il trattamento si fonda sul consenso o su un'altra base, incluso l'interesse legittimo del titolare (salvo prevalenza dei diritti dell'interessato).",
        en: 'The processing is based on consent or another basis, including the legitimate interest of the controller (unless the rights of the data subject prevail).',
        de: 'Die Verarbeitung stuetzt sich auf die Einwilligung oder eine andere Grundlage, einschliesslich des berechtigten Interesses des Verantwortlichen (sofern nicht die Rechte der betroffenen Person ueberwiegen).',
        fr: "Le traitement repose sur le consentement ou sur une autre base, y compris l'interet legitime du responsable du traitement (sauf si les droits de la personne concernee prevalent).",
        es: 'El tratamiento se basa en el consentimiento o en otra base, incluido el interes legitimo del responsable del tratamiento (salvo que prevalezcan los derechos del interesado).',
        nl: 'De verwerking is gebaseerd op toestemming of een andere grondslag, waaronder het gerechtvaardigd belang van de verwerkingsverantwoordelijke (tenzij de rechten van de betrokkene prevaleren).',
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: 'Minimizzazione e limitazione della finalita; niente tracciamento eccessivo fuori orario',
        en: 'Minimisation and purpose limitation; no excessive tracking outside working hours',
        de: 'Datenminimierung und Zweckbindung; keine uebermaessige Ortung ausserhalb der Arbeitszeit',
        fr: 'Minimisation et limitation des finalites; pas de suivi excessif en dehors des heures de travail',
        es: 'Minimizacion y limitacion de la finalidad; sin seguimiento excesivo fuera del horario laboral',
        nl: 'Minimalisatie en doelbinding; geen overmatige tracking buiten werktijd',
      },
      risposta: 'si',
      dettaglio: {
        it: "Valgono i principi di minimizzazione e limitazione della finalita'; un tracciamento GPS continuo o fuori dall'orario di lavoro e' sproporzionato.",
        en: 'The principles of data minimisation and purpose limitation apply; continuous GPS tracking or tracking outside working hours is disproportionate.',
        de: 'Es gelten die Grundsaetze der Datenminimierung und der Zweckbindung; eine kontinuierliche GPS-Ortung oder eine Ortung ausserhalb der Arbeitszeit ist unverhaeltnismaessig.',
        fr: "Les principes de minimisation des donnees et de limitation des finalites s'appliquent; un suivi GPS continu ou en dehors des heures de travail est disproportionne.",
        es: 'Se aplican los principios de minimizacion de datos y limitacion de la finalidad; un seguimiento GPS continuo o fuera del horario laboral es desproporcionado.',
        nl: 'De beginselen van dataminimalisatie en doelbinding zijn van toepassing; continue GPS-tracking of tracking buiten werktijd is onevenredig.',
      },
      fonte: FONTE_CNPDCP_VIDEO,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA)",
        en: 'Impact assessment (DPIA)',
        de: 'Folgenabschaetzung (DSFA)',
        fr: "Analyse d'impact (AIPD)",
        es: 'Evaluacion de impacto (EIPD)',
        nl: 'Effectbeoordeling (DPIA)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Dal 2022 il titolare deve svolgere una valutazione d'impatto (che ha sostituito la registrazione), descrivendo i trattamenti previsti, la finalita' e l'interesse legittimo.",
        en: 'Since 2022 the controller must carry out an impact assessment (which has replaced registration), describing the intended processing, the purpose and the legitimate interest.',
        de: 'Seit 2022 muss der Verantwortliche eine Folgenabschaetzung durchfuehren (die die Registrierung ersetzt hat) und darin die geplanten Verarbeitungen, den Zweck und das berechtigte Interesse beschreiben.',
        fr: "Depuis 2022, le responsable du traitement doit realiser une analyse d'impact (qui a remplace l'enregistrement), decrivant les traitements prevus, la finalite et l'interet legitime.",
        es: 'Desde 2022 el responsable del tratamiento debe realizar una evaluacion de impacto (que ha sustituido al registro), describiendo los tratamientos previstos, la finalidad y el interes legitimo.',
        nl: 'Sinds 2022 moet de verwerkingsverantwoordelijke een effectbeoordeling uitvoeren (die de registratie heeft vervangen), waarin de voorgenomen verwerkingen, het doel en het gerechtvaardigd belang worden beschreven.',
      },
      fonte: FONTE_DLA_PIPER,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Individua una base giuridica valida (consenso o interesse legittimo).',
        en: 'Identify a valid legal basis (consent or legitimate interest).',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (Einwilligung oder berechtigtes Interesse).',
        fr: 'Identifiez une base juridique valable (consentement ou interet legitime).',
        es: 'Identifique una base juridica valida (consentimiento o interes legitimo).',
        nl: 'Bepaal een geldige rechtsgrondslag (toestemming of gerechtvaardigd belang).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori su quali dati si raccolgono e chi vi accede.',
        en: 'Inform workers about what data is collected and who accesses it.',
        de: 'Informieren Sie die Arbeitnehmer darueber, welche Daten erhoben werden und wer darauf zugreift.',
        fr: 'Informez les travailleurs des donnees collectees et de qui y accede.',
        es: 'Informe a los trabajadores sobre que datos se recogen y quien accede a ellos.',
        nl: 'Informeer werknemers over welke gegevens worden verzameld en wie er toegang toe heeft.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) prima di attivare il sistema.",
        en: 'Carry out the impact assessment (DPIA) before activating the system.',
        de: 'Fuehren Sie die Folgenabschaetzung (DSFA) durch, bevor Sie das System aktivieren.',
        fr: "Realisez l'analyse d'impact (AIPD) avant d'activer le systeme.",
        es: 'Realice la evaluacion de impacto (EIPD) antes de activar el sistema.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voordat u het systeem activeert.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Applica minimizzazione e limitazione della finalita.',
        en: 'Apply data minimisation and purpose limitation.',
        de: 'Wenden Sie Datenminimierung und Zweckbindung an.',
        fr: 'Appliquez la minimisation des donnees et la limitation des finalites.',
        es: 'Aplique la minimizacion de datos y la limitacion de la finalidad.',
        nl: 'Pas dataminimalisatie en doelbinding toe.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema: niente tracciamento continuo o fuori dall'orario di lavoro.",
        en: 'Configure the system: no continuous tracking or tracking outside working hours.',
        de: 'Konfigurieren Sie das System: keine kontinuierliche Ortung und keine Ortung ausserhalb der Arbeitszeit.',
        fr: 'Configurez le systeme: pas de suivi continu ni de suivi en dehors des heures de travail.',
        es: 'Configure el sistema: sin seguimiento continuo ni seguimiento fuera del horario laboral.',
        nl: 'Configureer het systeem: geen continue tracking of tracking buiten werktijd.',
      },
    },
  ],

  contatti: [
    {
      ente: 'CNPDCP, reclami',
      portale: FONTE_CNPDCP_RECLAMI.url,
      urlFonte: FONTE_CNPDCP_RECLAMI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato con la nuova legge in stile GDPR (dal 23 agosto 2026)',
      en: 'up to 20 million euro or 4% of turnover under the new GDPR-style law (from 23 August 2026)',
      de: 'bis zu 20 Millionen Euro oder 4% des Umsatzes nach dem neuen, an die DSGVO angelehnten Gesetz (ab 23. August 2026)',
      fr: "jusqu'a 20 millions d'euros ou 4% du chiffre d'affaires avec la nouvelle loi de type RGPD (a partir du 23 aout 2026)",
      es: 'hasta 20 millones de euros o el 4% de la facturacion con la nueva ley de estilo RGPD (a partir del 23 de agosto de 2026)',
      nl: 'tot 20 miljoen euro of 4% van de omzet onder de nieuwe, op de AVG gebaseerde wet (vanaf 23 augustus 2026)',
    },
    casoCitato: {
      it: "Non risulta una decisione del CNPDCP specifica e pubblicata sul GPS sui dipendenti. La legge in vigore (133/2011) prevede sanzioni piu' contenute; la nuova legge 195/2024, in vigore dal 23 agosto 2026, allinea il quadro al GDPR (fino a 20 milioni di euro o 4% del fatturato).",
      en: 'There is no specific, published CNPDCP decision on GPS tracking of employees. The law in force (133/2011) provides for lower penalties; the new law 195/2024, in force from 23 August 2026, aligns the framework with the GDPR (up to 20 million euro or 4% of turnover).',
      de: 'Es gibt keine spezifische, veroeffentlichte Entscheidung des CNPDCP zur GPS-Ortung von Beschaeftigten. Das geltende Gesetz (133/2011) sieht geringere Sanktionen vor; das neue Gesetz 195/2024, das ab dem 23. August 2026 gilt, gleicht den Rahmen an die DSGVO an (bis zu 20 Millionen Euro oder 4% des Umsatzes).',
      fr: "Il n'existe pas de decision specifique et publiee du CNPDCP sur le suivi GPS des salaries. La loi en vigueur (133/2011) prevoit des sanctions plus limitees; la nouvelle loi 195/2024, en vigueur a partir du 23 aout 2026, aligne le cadre sur le RGPD (jusqu'a 20 millions d'euros ou 4% du chiffre d'affaires).",
      es: 'No consta una decision especifica y publicada del CNPDCP sobre el seguimiento por GPS de los empleados. La ley en vigor (133/2011) preve sanciones mas reducidas; la nueva ley 195/2024, en vigor desde el 23 de agosto de 2026, alinea el marco con el RGPD (hasta 20 millones de euros o el 4% de la facturacion).',
      nl: 'Er is geen specifiek, gepubliceerd besluit van het CNPDCP over GPS-tracking van werknemers. De geldende wet (133/2011) voorziet in lagere sancties; de nieuwe wet 195/2024, van kracht vanaf 23 augustus 2026, brengt het kader in lijn met de AVG (tot 20 miljoen euro of 4% van de omzet).',
    },
    urlFonte: FONTE_DLA_PIPER.url,
  },

  fonti: [
    FONTE_LEGGE_133,
    FONTE_CNPDCP_VIDEO,
    FONTE_CNPDCP_RECLAMI,
    FONTE_DLA_PIPER,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
