/**
 * Scheda-paese Moldova per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Moldova NON e' uno Stato membro dell'UE, ma un paese candidato.
 * Dal 23 agosto 2026 vale la Legge 195/2024 sulla protezione dei dati personali,
 * allineata al GDPR, che ha abrogato la Legge 133/2011 (art. 89(1) e 90(3)).
 * Il quadro descritto qui e' allineato al GDPR ma distinto.
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge 195/2024, guida del CNPDCP sulla videosorveglianza, pagina reclami del
 * CNPDCP, testo inglese ufficiale della Legge 195/2024 e GDPR come
 * riferimento comparativo. Unica autorita' nazionale, il CNPDCP; nessuna
 * ripartizione regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_CNPDCP_RECLAMI = {
  titolo: 'CNPDCP, presentare un reclamo',
  url: 'https://datepersonale.md/about/plingeri-si-petitii/',
};
const FONTE_DLA_PIPER = {
  titolo:
    'Legge 195/2024 sulla protezione dei dati personali, in vigore dal 23 agosto 2026 (art. 35 DPIA, art. 88 sanzioni), testo inglese pubblicato dal CNPDCP',
  url: 'https://datepersonale.md/wp-content/uploads/2024/09/Law-no.-195-2024-on-personal-data-protection-1.pdf',
};
const FONTE_LISTA_DPIA = {
  titolo:
    'CNPDCP, ordine 27/2022: lista dei trattamenti soggetti a valutazione d\'impatto (modificata dall\'ordine 39/2026)',
  url: 'https://www.legis.md/cautare/getResults?doc_id=155870&lang=ro',
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
    ente: {
      it: 'CNPDCP (Centro nazionale per la protezione dei dati personali)',
      en: 'CNPDCP (National Centre for Personal Data Protection)',
      de: 'CNPDCP (Nationales Zentrum für den Schutz personenbezogener Daten)',
      fr: 'CNPDCP (Centre national de protection des données personnelles)',
      es: 'CNPDCP (Centro Nacional de Protección de Datos Personales)',
      nl: 'CNPDCP (Nationaal Centrum voor de Bescherming van Persoonsgegevens)',
      pt: 'CNPDCP (Centro Nacional de Proteção de Dados Pessoais)',
      da: 'CNPDCP (Nationalt Center for Beskyttelse af Personoplysninger)',
      sv: 'CNPDCP (Nationella centret för skydd av personuppgifter)',
      nb: 'CNPDCP (Nasjonalt senter for beskyttelse av personopplysninger)',
      ru: 'CNPDCP (Национальный центр защиты персональных данных)',
    },
    portale: FONTE_CNPDCP_RECLAMI.url,
    urlFonte: FONTE_CNPDCP_RECLAMI.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Moldova è un Paese candidato, fuori dall'UE; dal 23 agosto 2026 vale la legge 195/2024, allineata al GDPR, che ha abrogato la 133/2011. Unica autorità nazionale, il CNPDCP; nessuna ripartizione regionale.",
      en: 'Moldova is a candidate country, outside the EU; since 23 August 2026 Law 195/2024, aligned with the GDPR, applies and has repealed Law 133/2011. There is a single national authority, the CNPDCP; no regional breakdown.',
      de: 'Die Republik Moldau ist ein Kandidatenland außerhalb der EU; seit dem 23. August 2026 gilt das an die DSGVO angelehnte Gesetz 195/2024, das das Gesetz 133/2011 aufgehoben hat. Es gibt nur eine nationale Behörde, das CNPDCP; keine regionale Aufteilung.',
      fr: 'La Moldavie est un pays candidat, hors de l’UE ; depuis le 23 août 2026 s’applique la loi 195/2024, alignée sur le RGPD, qui a abrogé la loi 133/2011. Il existe une seule autorité nationale, le CNPDCP ; aucune répartition régionale.',
      es: 'Moldavia es un país candidato, fuera de la UE; desde el 23 de agosto de 2026 rige la ley 195/2024, alineada con el RGPD, que ha derogado la ley 133/2011. Existe una única autoridad nacional, el CNPDCP; sin reparto regional.',
      nl: 'Moldavië is een kandidaat-lidstaat, buiten de EU; sinds 23 augustus 2026 geldt de op de AVG afgestemde wet 195/2024, die wet 133/2011 heeft ingetrokken. Er is één nationale autoriteit, het CNPDCP; geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Base giuridica valida e informazione ai lavoratori (Legge 195/2024 + Codice del lavoro art. 91-94)',
        en: 'Valid legal basis and information to workers (Law 195/2024 + Labour Code art. 91-94)',
        de: 'Gültige Rechtsgrundlage und Information der Arbeitnehmer (Gesetz 195/2024 + Arbeitsgesetzbuch Art. 91-94)',
        fr: 'Base juridique valable et information des travailleurs (loi 195/2024 + Code du travail art. 91-94)',
        es: 'Base jurídica valida e información a los trabajadores (Ley 195/2024 + Código del trabajo art. 91-94)',
        nl: 'Geldige rechtsgrondslag en informatie aan werknemers (wet 195/2024 + Arbeidswetboek art. 91-94)',
      },
      risposta: 'si',
      dettaglio: {
        it: "I dati dei lavoratori raccolti con il GPS sono dati personali: valgono la Legge 195/2024 (che dal 23 agosto 2026 ha sostituito la 133/2011; art. 13, informazione all'interessato) e il Codice del lavoro (artt. 91-94: il datore deve far conoscere ai lavoratori, sotto firma, i documenti sul trattamento dei loro dati e i loro diritti e obblighi). Né la legge né il Codice contengono una norma specifica sul GPS.",
        en: 'Worker data collected through GPS is personal data: Law 195/2024 (which replaced Law 133/2011 on 23 August 2026; art. 13, information to the data subject) and the Labour Code (art. 91-94: the employer must make workers acquainted, against signature, with the documents on how their data is processed and with their rights and duties) apply. Neither the law nor the Code contains a specific GPS rule.',
        de: 'Per GPS erhobene Arbeitnehmerdaten sind personenbezogene Daten: Es gelten das Gesetz 195/2024 (das am 23. August 2026 das Gesetz 133/2011 ersetzt hat; Art. 13, Information der betroffenen Person) und das Arbeitsgesetzbuch (Art. 91-94: der Arbeitgeber muss die Arbeitnehmer gegen Unterschrift mit den Unterlagen zur Verarbeitung ihrer Daten sowie mit ihren Rechten und Pflichten vertraut machen). Weder das Gesetz noch das Gesetzbuch enthalten eine eigene GPS-Regel.',
        fr: 'Les données des travailleurs collectées par GPS sont des données personnelles : s’appliquent la loi 195/2024 (qui a remplacé la loi 133/2011 le 23 août 2026 ; art. 13, information de la personne concernée) et le Code du travail (art. 91-94 : l’employeur doit faire prendre connaissance aux travailleurs, contre signature, des documents sur le traitement de leurs données et de leurs droits et obligations). Ni la loi ni le Code ne contiennent de règle spécifique sur le GPS.',
        es: 'Los datos de los trabajadores recogidos por GPS son datos personales: se aplican la Ley 195/2024 (que sustituyó a la ley 133/2011 el 23 de agosto de 2026; art. 13, información al interesado) y el Código del trabajo (art. 91-94: el empleador debe dar a conocer a los trabajadores, bajo firma, los documentos sobre el tratamiento de sus datos y sus derechos y obligaciones). Ni la ley ni el Código contienen una norma específica sobre el GPS.',
        nl: 'Via gps verzamelde werknemersgegevens zijn persoonsgegevens: wet 195/2024 (die op 23 augustus 2026 wet 133/2011 heeft vervangen; art. 13, informatie aan de betrokkene) en het Arbeidswetboek (art. 91-94: de werkgever moet werknemers tegen handtekening kennis laten nemen van de documenten over de verwerking van hun gegevens en van hun rechten en plichten) zijn van toepassing. Noch de wet noch het wetboek bevat een specifieke gps-regel.',
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: "Notifica o registrazione preventiva di un'autorità prima di installare",
        en: 'Prior notification or registration with an authority before installing',
        de: 'Vorherige Meldung oder Registrierung bei einer Behörde vor der Installation',
        fr: 'Notification ou enregistrement préalable auprès d’une autorité avant l’installation',
        es: 'Notificación o registro previo ante una autoridad antes de instalar',
        nl: 'Voorafgaande melding of registratie bij een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "L'obbligo di notifica/registrazione dei sistemi di dati al CNPDCP è stato abolito dal 10 gennaio 2022 ed è stato sostituito da una valutazione d'impatto a carico del titolare.",
        en: 'The obligation to notify/register data systems with the CNPDCP was abolished on 10 January 2022 and replaced by an impact assessment carried out by the controller.',
        de: 'Die Pflicht zur Meldung/Registrierung von Datensystemen beim CNPDCP wurde zum 10. Januar 2022 abgeschafft und durch eine vom Verantwortlichen durchzuführende Folgenabschätzung ersetzt.',
        fr: 'L’obligation de notifier/enregistrer les systèmes de données auprès du CNPDCP a été abolie le 10 janvier 2022 et remplacée par une analyse d’impact réalisée par le responsable du traitement.',
        es: 'La obligación de notificar/registrar los sistemas de datos ante el CNPDCP se abolió el 10 de enero de 2022 y se sustituyo por una evaluación de impacto a cargo del responsable del tratamiento.',
        nl: 'De verplichting om gegevenssystemen bij het CNPDCP te melden/registreren is op 10 januari 2022 afgeschaft en vervangen door een effectbeoordeling die door de verwerkingsverantwoordelijke wordt uitgevoerd.',
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: 'Base = consenso o interesse legittimo',
        en: 'Basis = consent or legitimate interest',
        de: 'Grundlage = Einwilligung oder berechtigtes Interesse',
        fr: 'Base = consentement ou intérêt légitime',
        es: 'Base = consentimiento o interés legítimo',
        nl: 'Grondslag = toestemming of gerechtvaardigd belang',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il trattamento si fonda sul consenso o su un'altra base, incluso l'interesse legittimo del titolare (salvo prevalenza dei diritti dell'interessato).",
        en: 'The processing is based on consent or another basis, including the legitimate interest of the controller (unless the rights of the data subject prevail).',
        de: 'Die Verarbeitung stützt sich auf die Einwilligung oder eine andere Grundlage, einschließlich des berechtigten Interesses des Verantwortlichen (sofern nicht die Rechte der betroffenen Person überwiegen).',
        fr: 'Le traitement repose sur le consentement ou sur une autre base, y compris l’intérêt légitime du responsable du traitement (sauf si les droits de la personne concernée prévalent).',
        es: 'El tratamiento se basa en el consentimiento o en otra base, incluido el interés legítimo del responsable del tratamiento (salvo que prevalezcan los derechos del interesado).',
        nl: 'De verwerking is gebaseerd op toestemming of een andere grondslag, waaronder het gerechtvaardigd belang van de verwerkingsverantwoordelijke (tenzij de rechten van de betrokkene prevaleren).',
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: 'Minimizzazione e limitazione della finalità; niente tracciamento eccessivo fuori orario',
        en: 'Minimisation and purpose limitation; no excessive tracking outside working hours',
        de: 'Datenminimierung und Zweckbindung; keine übermäßige Ortung außerhalb der Arbeitszeit',
        fr: 'Minimisation et limitation des finalités ; pas de suivi excessif en dehors des heures de travail',
        es: 'Minimización y limitación de la finalidad; sin seguimiento excesivo fuera del horario laboral',
        nl: 'Minimalisatie en doelbinding; geen overmatige tracking buiten werktijd',
      },
      risposta: 'si',
      dettaglio: {
        it: "Valgono i principi di limitazione della finalità e di minimizzazione (art. 5(1)(b)-(c) della Legge 195/2024): i dati devono essere limitati a quanto necessario per la finalità dichiarata. Un tracciamento GPS continuo o fuori dall'orario di lavoro difficilmente resta entro questo limite.",
        en: 'The principles of purpose limitation and data minimisation apply (art. 5(1)(b)-(c) of Law 195/2024): data must be limited to what is necessary for the stated purpose. Continuous GPS tracking or tracking outside working hours is unlikely to stay within that limit.',
        de: 'Es gelten die Grundsätze der Zweckbindung und der Datenminimierung (Art. 5(1)(b)-(c) des Gesetzes 195/2024): Die Daten müssen auf das für den festgelegten Zweck Notwendige beschränkt sein. Eine kontinuierliche GPS-Ortung oder eine Ortung außerhalb der Arbeitszeit bleibt kaum innerhalb dieser Grenze.',
        fr: 'Les principes de limitation des finalités et de minimisation des données s’appliquent (art. 5(1)(b)-(c) de la loi 195/2024) : les données doivent être limitées à ce qui est nécessaire pour la finalité déclarée. Un suivi GPS continu ou en dehors des heures de travail reste difficilement dans cette limite.',
        es: 'Se aplican los principios de limitación de la finalidad y minimización de datos (art. 5(1)(b)-(c) de la ley 195/2024): los datos deben limitarse a lo necesario para la finalidad declarada. Un seguimiento GPS continuo o fuera del horario laboral difícilmente se mantiene dentro de ese límite.',
        nl: 'De beginselen van doelbinding en dataminimalisatie zijn van toepassing (art. 5(1)(b)-(c) van wet 195/2024): gegevens moeten beperkt blijven tot wat nodig is voor het vermelde doel. Continue gps-tracking of tracking buiten werktijd blijft moeilijk binnen die grens.',
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA)",
        en: 'Impact assessment (DPIA)',
        de: 'Folgenabschätzung (DSFA)',
        fr: 'Analyse d’impact (AIPD)',
        es: 'Evaluación de impacto (EIPD)',
        nl: 'Effectbeoordeling (DPIA)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Prima di iniziare il titolare deve svolgere una valutazione d'impatto (art. 35 della Legge 195/2024; dal 2022 ha sostituito la registrazione). La lista del CNPDCP (ordine 27/2022, modificato dal 23 agosto 2026) la richiede quando ricorrono almeno due criteri: il GPS sui lavoratori ne integra due (monitoraggio sistematico; dipendenti nei confronti del datore). Va descritto il trattamento, la finalità e l'eventuale interesse legittimo.",
        en: 'Before starting, the controller must carry out an impact assessment (art. 35 of Law 195/2024; since 2022 it has replaced registration). The CNPDCP list (order 27/2022, amended from 23 August 2026) requires it when at least two criteria apply: GPS on workers meets two (systematic monitoring; employees in relation to the employer). It must describe the processing, the purpose and any legitimate interest.',
        de: 'Vor Beginn muss der Verantwortliche eine Folgenabschätzung durchführen (Art. 35 des Gesetzes 195/2024; seit 2022 ersetzt sie die Registrierung). Die Liste des CNPDCP (Anordnung 27/2022, ab 23. August 2026 geändert) verlangt sie, wenn mindestens zwei Kriterien zutreffen: GPS bei Arbeitnehmern erfüllt zwei (systematische Überwachung; Beschäftigte gegenüber dem Arbeitgeber). Zu beschreiben sind Verarbeitung, Zweck und ggf. das berechtigte Interesse.',
        fr: 'Avant de commencer, le responsable du traitement doit réaliser une analyse d’impact (art. 35 de la loi 195/2024 ; depuis 2022 elle a remplacé l’enregistrement). La liste du CNPDCP (ordre 27/2022, modifié à partir du 23 août 2026) l’exige lorsqu’au moins deux critères s’appliquent : le GPS sur les travailleurs en réunit deux (surveillance systématique ; salariés face à l’employeur). Elle décrit le traitement, la finalité et l’éventuel intérêt légitime.',
        es: 'Antes de empezar, el responsable del tratamiento debe realizar una evaluación de impacto (art. 35 de la ley 195/2024; desde 2022 ha sustituido al registro). La lista del CNPDCP (orden 27/2022, modificada desde el 23 de agosto de 2026) la exige cuando concurren al menos dos criterios: el GPS sobre los trabajadores reúne dos (supervisión sistemática; empleados frente al empleador). Debe describir el tratamiento, la finalidad y, en su caso, el interés legítimo.',
        nl: 'Voor aanvang moet de verwerkingsverantwoordelijke een effectbeoordeling uitvoeren (art. 35 van wet 195/2024; sinds 2022 vervangt zij de registratie). De lijst van het CNPDCP (bevel 27/2022, gewijzigd vanaf 23 augustus 2026) eist haar als minstens twee criteria gelden: gps bij werknemers voldoet aan twee (systematische monitoring; werknemers tegenover de werkgever). Beschrijf de verwerking, het doel en zo nodig het gerechtvaardigd belang.',
      },
      fonte: FONTE_LISTA_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Individua una base giuridica valida (consenso o interesse legittimo).',
        en: 'Identify a valid legal basis (consent or legitimate interest).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (Einwilligung oder berechtigtes Interesse).',
        fr: 'Identifiez une base juridique valable (consentement ou intérêt légitime).',
        es: 'Identifique una base jurídica valida (consentimiento o interés legítimo).',
        nl: 'Bepaal een geldige rechtsgrondslag (toestemming of gerechtvaardigd belang).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori su quali dati si raccolgono e chi vi accede.',
        en: 'Inform workers about what data is collected and who accesses it.',
        de: 'Informieren Sie die Arbeitnehmer darüber, welche Daten erhoben werden und wer darauf zugreift.',
        fr: 'Informez les travailleurs des données collectées et de qui y accède.',
        es: 'Informe a los trabajadores sobre que datos se recogen y quien accede a ellos.',
        nl: 'Informeer werknemers over welke gegevens worden verzameld en wie er toegang toe heeft.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) prima di attivare il sistema.",
        en: 'Carry out the impact assessment (DPIA) before activating the system.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) durch, bevor Sie das System aktivieren.',
        fr: 'Réalisez l’analyse d’impact (AIPD) avant d’activer le système.',
        es: 'Realice la evaluación de impacto (EIPD) antes de activar el sistema.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voordat u het systeem activeert.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Applica minimizzazione e limitazione della finalità.',
        en: 'Apply data minimisation and purpose limitation.',
        de: 'Wenden Sie Datenminimierung und Zweckbindung an.',
        fr: 'Appliquez la minimisation des données et la limitation des finalités.',
        es: 'Aplique la minimización de datos y la limitación de la finalidad.',
        nl: 'Pas dataminimalisatie en doelbinding toe.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema: niente tracciamento continuo o fuori dall'orario di lavoro.",
        en: 'Configure the system: no continuous tracking or tracking outside working hours.',
        de: 'Konfigurieren Sie das System: keine kontinuierliche Ortung und keine Ortung außerhalb der Arbeitszeit.',
        fr: 'Configurez le système : pas de suivi continu ni de suivi en dehors des heures de travail.',
        es: 'Configure el sistema: sin seguimiento continuo ni seguimiento fuera del horario laboral.',
        nl: 'Configureer het systeem: geen continue tracking of tracking buiten werktijd.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'En caso de cambio de sistema: si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la entregada antes no basta.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
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
      it: 'fino a 2.000.000 MDL (circa 100.000 euro) o il 2% del fatturato, se più alto (legge 195/2024, in vigore dal 23 agosto 2026)',
      en: 'up to MDL 2,000,000 (about EUR 100,000) or 2% of turnover, whichever is higher (Law 195/2024, in force since 23 August 2026)',
      de: 'bis zu 2.000.000 MDL (rund 100.000 EUR) oder 2% des Umsatzes, je nachdem, welcher Betrag höher ist (Gesetz 195/2024, in Kraft seit 23. August 2026)',
      fr: 'jusqu’à 2 000 000 MDL (environ 100 000 EUR) ou 2 % du chiffre d’affaires, le montant le plus élevé étant retenu (loi 195/2024, en vigueur depuis le 23 août 2026)',
      es: 'hasta 2.000.000 MDL (unos 100.000 EUR) o el 2% de la facturación, si es mayor (ley 195/2024, en vigor desde el 23 de agosto de 2026)',
      nl: 'tot 2.000.000 MDL (ongeveer 100.000 EUR) of 2% van de omzet, als dat hoger is (wet 195/2024, van kracht sinds 23 augustus 2026)',
    },
    casoCitato: {
      it: "Non risulta una decisione del CNPDCP specifica pubblicata sul GPS sui dipendenti. La legge 195/2024, applicabile dal 23 agosto 2026 al posto della 133/2011, recepisce il GDPR ma con un proprio impianto sanzionatorio (art. 88): fino a 1.000.000 MDL o l'1% del fatturato per le violazioni meno gravi e fino a 2.000.000 MDL o il 2% per quelle più gravi, vale l'importo più alto. Nel primo anno si applica il 10% della multa, nel secondo il 40%, dal terzo il 100% (art. 90(4)). Non valgono quindi i massimali europei da 20 milioni di euro.",
      en: 'No specific published CNPDCP decision on employee GPS. Law 195/2024, applicable since 23 August 2026 in place of Law 133/2011, transposes the GDPR but with its own sanction scheme (art. 88): up to MDL 1,000,000 or 1% of turnover for less serious breaches and up to MDL 2,000,000 or 2% for the more serious ones, whichever is higher. In the first year 10% of the fine applies, in the second 40%, from the third 100% (art. 90(4)). The European ceilings of EUR 20 million therefore do not apply.',
      de: 'Es liegt keine spezifische veröffentlichte Entscheidung des CNPDCP zu GPS bei Beschäftigten vor. Das Gesetz 195/2024, seit dem 23. August 2026 anstelle des Gesetzes 133/2011 anwendbar, setzt die DSGVO um, jedoch mit eigenem Sanktionsrahmen (Art. 88): bis zu 1.000.000 MDL oder 1% des Umsatzes bei leichteren Verstößen und bis zu 2.000.000 MDL oder 2% bei schwereren, maßgeblich ist der höhere Betrag. Im ersten Jahr werden 10% der Geldbuße angewendet, im zweiten 40%, ab dem dritten 100% (Art. 90(4)). Die europäischen Obergrenzen von 20 Millionen Euro gelten hier also nicht.',
      fr: 'Aucune décision publiée du CNPDCP spécifique au GPS des salariés. La loi 195/2024, applicable depuis le 23 août 2026 à la place de la loi 133/2011, transpose le RGPD mais avec son propre barème (art. 88) : jusqu’à 1 000 000 MDL ou 1 % du chiffre d’affaires pour les manquements les moins graves et jusqu’à 2 000 000 MDL ou 2 % pour les plus graves, le montant le plus élevé étant retenu. La première année, 10 % de l’amende s’applique, la deuxième 40 %, à partir de la troisième 100 % (art. 90(4)). Les plafonds européens de 20 millions d’euros ne s’appliquent donc pas.',
      es: 'No consta una resolución publicada del CNPDCP especifica sobre el GPS de los empleados. La ley 195/2024, aplicable desde el 23 de agosto de 2026 en lugar de la ley 133/2011, transpone el RGPD pero con su propio régimen sancionador (art. 88): hasta 1.000.000 MDL o el 1% de la facturación para las infracciones menos graves y hasta 2.000.000 MDL o el 2% para las más graves, se aplica el importe mayor. El primer año se aplica el 10% de la multa, el segundo el 40%, desde el tercero el 100% (art. 90(4)). Los techos europeos de 20 millones de euros no se aplican.',
      nl: 'Er is geen specifiek gepubliceerd CNPDCP-besluit over gps bij werknemers. Wet 195/2024, sinds 23 augustus 2026 van toepassing in plaats van wet 133/2011, zet de AVG om maar met een eigen sanctiestelsel (art. 88): tot 1.000.000 MDL of 1% van de omzet voor lichtere inbreuken en tot 2.000.000 MDL of 2% voor de zwaardere, het hoogste bedrag geldt. In het eerste jaar geldt 10% van de boete, in het tweede 40%, vanaf het derde 100% (art. 90(4)). De Europese plafonds van 20 miljoen euro gelden hier dus niet.',
    },
    urlFonte: FONTE_DLA_PIPER.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_CNPDCP_RECLAMI,
    FONTE_DLA_PIPER,
    FONTE_LISTA_DPIA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
