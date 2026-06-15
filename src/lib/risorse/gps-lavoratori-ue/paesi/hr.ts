/**
 * Scheda-paese Croazia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 43 della Zakon o zastiti na radu (legge sulla sicurezza sul lavoro) sui
 * dispositivi di sorveglianza, guida AZOP sul trattamento dei dati dei dipendenti
 * tramite GPS, lista AZOP dei trattamenti che richiedono una DPIA, pagina AZOP
 * per i reclami e GDPR.
 *
 * La Croazia ha un'unica autorita nazionale, l'AZOP: nessuna ripartizione
 * regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZZR_43 = {
  titolo:
    'Zakon o zastiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)',
  url: 'https://www.zakon.hr/z/167/zakon-o-zastiti-na-radu',
};
const FONTE_AZOP_GPS = {
  titolo:
    'AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS',
  url: 'https://azop.hr/obrada-osobnih-podataka-zaposlenika-putem-gps-uredaja/',
};
const FONTE_AZOP_DPIA = {
  titolo: 'AZOP, lista dei trattamenti che richiedono una DPIA',
  url: 'https://azop.hr/odluka-o-uspostavi-i-javnoj-objavi-popisa-vrsta-postupaka-obrade-koje-podlijezu-zahtjevu-za-procjenu-ucinka-na-zastitu-podataka/',
};
const FONTE_AZOP_RECLAMO = {
  titolo: 'AZOP, richiesta di accertamento di violazione (reclamo)',
  url: 'https://azop.hr/zahtjev-za-utvrdivanje-povrede-prava/',
};
const FONTE_AZOP_HOME = {
  titolo: 'AZOP (Garante croato), pagina ufficiale',
  url: 'https://azop.hr/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const croazia: SchedaPaese = {
  codiceISO: 'HR',
  slugCanonico: 'croazia',
  nome: 'Croazia',
  nomi: {
    it: 'Croazia',
    en: 'Croatia',
    'en-us': 'Croatia',
    'en-gb': 'Croatia',
    'en-au': 'Croatia',
    'en-ie': 'Croatia',
    'en-ca': 'Croatia',
    de: 'Kroatien',
    nl: 'Kroatië',
    fr: 'Croatie',
    es: 'Croacia',
    pt: 'Croácia',
    da: 'Kroatien',
    sv: 'Kroatien',
    nb: 'Kroatia',
    ru: 'Хорватия',
  },
  bandiera: '🇭🇷',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AZOP (Agencija za zastitu osobnih podataka)',
    urlFonte: FONTE_AZOP_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Croazia ha un'unica autorita nazionale, l'AZOP; nessuna ripartizione regionale.",
      en: 'Croatia has a single national authority, the AZOP; there is no regional breakdown.',
      de: 'Kroatien hat eine einzige nationale Behoerde, die AZOP; es gibt keine regionale Aufteilung.',
      fr: "La Croatie dispose d'une seule autorite nationale, l'AZOP; il n'y a aucune repartition regionale.",
      es: 'Croacia cuenta con una unica autoridad nacional, la AZOP; no existe reparto regional alguno.',
      nl: 'Kroatie heeft een enkele nationale autoriteit, de AZOP; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Consenso preventivo del consiglio dei lavoratori se la sorveglianza segue tutti i movimenti per l'intero orario (Zakon o zastiti na radu, art. 43)",
        en: 'Prior consent of the works council if the surveillance follows all movements for the entire working time (Zakon o zastiti na radu, art. 43)',
        de: 'Vorherige Zustimmung des Betriebsrats, wenn die Ueberwachung alle Bewegungen waehrend der gesamten Arbeitszeit verfolgt (Zakon o zastiti na radu, Art. 43)',
        fr: "Consentement prealable du conseil des travailleurs si la surveillance suit tous les mouvements pendant toute la duree du travail (Zakon o zastiti na radu, art. 43)",
        es: 'Consentimiento previo del consejo de trabajadores si la vigilancia sigue todos los movimientos durante toda la jornada (Zakon o zastiti na radu, art. 43)',
        nl: 'Voorafgaande toestemming van de ondernemingsraad als het toezicht alle bewegingen gedurende de hele werktijd volgt (Zakon o zastiti na radu, art. 43)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Se i dispositivi seguono tutti i movimenti del lavoratore per l'intero orario, il datore puo usarli solo con il previo consenso del consiglio dei lavoratori (o del rappresentante sindacale con i relativi poteri). Vale dove tale organo esiste.",
        en: 'If the devices follow all of the worker movements for the entire working time, the employer may use them only with the prior consent of the works council (or of the union representative holding the relevant powers). This applies where such a body exists.',
        de: 'Wenn die Geraete alle Bewegungen des Arbeitnehmers waehrend der gesamten Arbeitszeit verfolgen, darf der Arbeitgeber sie nur mit vorheriger Zustimmung des Betriebsrats (oder des Gewerkschaftsvertreters mit den entsprechenden Befugnissen) einsetzen. Dies gilt, wo ein solches Gremium besteht.',
        fr: "Si les dispositifs suivent tous les mouvements du travailleur pendant toute la duree du travail, l'employeur ne peut les utiliser qu'avec le consentement prealable du conseil des travailleurs (ou du representant syndical disposant des pouvoirs correspondants). Cela vaut la ou un tel organe existe.",
        es: 'Si los dispositivos siguen todos los movimientos del trabajador durante toda la jornada, el empresario solo puede utilizarlos con el consentimiento previo del consejo de trabajadores (o del representante sindical con las facultades correspondientes). Rige alli donde dicho organo existe.',
        nl: 'Als de apparaten alle bewegingen van de werknemer gedurende de hele werktijd volgen, mag de werkgever ze alleen gebruiken met voorafgaande toestemming van de ondernemingsraad (of van de vakbondsvertegenwoordiger met de betreffende bevoegdheden). Dit geldt waar een dergelijk orgaan bestaat.',
      },
      fonte: FONTE_ZZR_43,
    },
    {
      voce: {
        it: "Informazione scritta al lavoratore all'assunzione e regole interne scritte (art. 43 + AZOP)",
        en: 'Written information to the worker at hiring and written internal rules (art. 43 + AZOP)',
        de: 'Schriftliche Information des Arbeitnehmers bei der Einstellung und schriftliche interne Regeln (Art. 43 + AZOP)',
        fr: "Information ecrite du travailleur a l'embauche et regles internes ecrites (art. 43 + AZOP)",
        es: 'Informacion escrita al trabajador en la contratacion y normas internas escritas (art. 43 + AZOP)',
        nl: 'Schriftelijke informatie aan de werknemer bij indiensttreding en schriftelijke interne regels (art. 43 + AZOP)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve informare per iscritto il lavoratore, gia all'assunzione, che sara sorvegliato, e disciplinare il GPS con regole interne scritte: non basta un'informazione orale.",
        en: 'The employer must inform the worker in writing, already at hiring, that they will be monitored, and must regulate the GPS with written internal rules: oral information is not enough.',
        de: 'Der Arbeitgeber muss den Arbeitnehmer bereits bei der Einstellung schriftlich darueber informieren, dass er ueberwacht wird, und das GPS mit schriftlichen internen Regeln regeln: eine muendliche Information genuegt nicht.',
        fr: "L'employeur doit informer le travailleur par ecrit, des l'embauche, qu'il sera surveille, et encadrer le GPS par des regles internes ecrites: une information orale ne suffit pas.",
        es: 'El empresario debe informar al trabajador por escrito, ya en la contratacion, de que sera vigilado, y regular el GPS con normas internas escritas: una informacion oral no basta.',
        nl: 'De werkgever moet de werknemer reeds bij indiensttreding schriftelijk informeren dat hij zal worden gemonitord en de GPS regelen met schriftelijke interne regels: mondelinge informatie volstaat niet.',
      },
      fonte: FONTE_AZOP_GPS,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'AZOP; il titolare valuta da se base giuridica e DPIA.",
        en: 'No prior authorisation from the AZOP is required; the controller assesses the legal basis and the DPIA on its own.',
        de: 'Eine vorherige Genehmigung der AZOP ist nicht erforderlich; der Verantwortliche bewertet Rechtsgrundlage und DSFA selbst.',
        fr: "Aucune autorisation prealable de l'AZOP n'est requise; le responsable du traitement evalue lui-meme la base juridique et l'AIPD.",
        es: 'No se necesita una autorizacion previa de la AZOP; el responsable evalua por si mismo la base juridica y la EIPD.',
        nl: 'Er is geen voorafgaande toestemming van de AZOP nodig; de verwerkingsverantwoordelijke beoordeelt zelf de rechtsgrond en de DPIA.',
      },
      fonte: FONTE_AZOP_GPS,
    },
    {
      voce: {
        it: 'Base = interesse legittimo (non il consenso) e proporzionalita; niente tracciamento fuori orario senza base',
        en: 'Basis = legitimate interest (not consent) and proportionality; no tracking outside working hours without a basis',
        de: 'Grundlage = berechtigtes Interesse (nicht die Einwilligung) und Verhaeltnismaessigkeit; keine Ortung ausserhalb der Arbeitszeit ohne Grundlage',
        fr: "Base = interet legitime (et non le consentement) et proportionnalite; pas de suivi en dehors des heures de travail sans base",
        es: 'Base = interes legitimo (no el consentimiento) y proporcionalidad; nada de rastreo fuera del horario sin base',
        nl: 'Grondslag = gerechtvaardigd belang (niet de toestemming) en evenredigheid; geen tracking buiten werktijd zonder grondslag',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base e di norma l'interesse legittimo, non il consenso del lavoratore (squilibrio di potere); il trattamento deve essere proporzionato e non estendersi fuori dall'orario senza una base chiara.",
        en: 'The basis is normally legitimate interest, not the worker consent (imbalance of power); the processing must be proportionate and must not extend beyond working hours without a clear basis.',
        de: 'Die Grundlage ist in der Regel das berechtigte Interesse, nicht die Einwilligung des Arbeitnehmers (Machtungleichgewicht); die Verarbeitung muss verhaeltnismaessig sein und darf sich ohne klare Grundlage nicht ueber die Arbeitszeit hinaus erstrecken.',
        fr: "La base est normalement l'interet legitime, et non le consentement du travailleur (desequilibre de pouvoir); le traitement doit etre proportionne et ne pas s'etendre au-dela des heures de travail sans base claire.",
        es: 'La base es por lo general el interes legitimo, no el consentimiento del trabajador (desequilibrio de poder); el tratamiento debe ser proporcionado y no extenderse fuera del horario sin una base clara.',
        nl: 'De grondslag is doorgaans het gerechtvaardigd belang, niet de toestemming van de werknemer (machtsongelijkheid); de verwerking moet evenredig zijn en mag zich zonder duidelijke grondslag niet buiten de werktijd uitstrekken.',
      },
      fonte: FONTE_AZOP_GPS,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per i sistemi di tracciamento dei dipendenti (lista AZOP)",
        en: 'Impact assessment (DPIA) for employee tracking systems (AZOP list)',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer Systeme zur Ueberwachung von Arbeitnehmern (AZOP-Liste)',
        fr: "Analyse d'impact (AIPD) pour les systemes de suivi des salaries (liste AZOP)",
        es: 'Evaluacion de impacto (EIPD) para los sistemas de seguimiento de los empleados (lista AZOP)',
        nl: 'Effectbeoordeling (DPIA) voor systemen voor het volgen van werknemers (AZOP-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista AZOP include il trattamento dei dati dei dipendenti tramite app o sistemi di tracciamento (del lavoro, dei movimenti, della comunicazione) tra quelli che richiedono una valutazione d'impatto.",
        en: 'The AZOP list includes the processing of employee data through apps or tracking systems (of work, of movements, of communication) among those that require an impact assessment.',
        de: 'Die AZOP-Liste fuehrt die Verarbeitung von Arbeitnehmerdaten ueber Apps oder Ortungssysteme (der Arbeit, der Bewegungen, der Kommunikation) unter denjenigen auf, die eine Folgenabschaetzung erfordern.',
        fr: "La liste AZOP inclut le traitement des donnees des salaries au moyen d'applications ou de systemes de suivi (du travail, des mouvements, de la communication) parmi ceux qui requierent une analyse d'impact.",
        es: 'La lista AZOP incluye el tratamiento de los datos de los empleados mediante aplicaciones o sistemas de seguimiento (del trabajo, de los movimientos, de la comunicacion) entre los que requieren una evaluacion de impacto.',
        nl: 'De AZOP-lijst rekent de verwerking van werknemersgegevens via apps of volgsystemen (van het werk, van de bewegingen, van de communicatie) tot de verwerkingen die een effectbeoordeling vereisen.',
      },
      fonte: FONTE_AZOP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Se la sorveglianza segue tutti i movimenti per l'intero orario, ottieni il consenso del consiglio dei lavoratori (ZZR art. 43).",
        en: 'If the surveillance follows all movements for the entire working time, obtain the consent of the works council (ZZR art. 43).',
        de: 'Wenn die Ueberwachung alle Bewegungen waehrend der gesamten Arbeitszeit verfolgt, holen Sie die Zustimmung des Betriebsrats ein (ZZR Art. 43).',
        fr: "Si la surveillance suit tous les mouvements pendant toute la duree du travail, obtenez le consentement du conseil des travailleurs (ZZR art. 43).",
        es: 'Si la vigilancia sigue todos los movimientos durante toda la jornada, obtenga el consentimiento del consejo de trabajadores (ZZR art. 43).',
        nl: 'Als het toezicht alle bewegingen gedurende de hele werktijd volgt, verkrijg de toestemming van de ondernemingsraad (ZZR art. 43).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Disciplina il GPS con regole interne scritte e informa per iscritto i lavoratori.',
        en: 'Regulate the GPS with written internal rules and inform the workers in writing.',
        de: 'Regeln Sie das GPS mit schriftlichen internen Regeln und informieren Sie die Arbeitnehmer schriftlich.',
        fr: 'Encadrez le GPS par des regles internes ecrites et informez les travailleurs par ecrit.',
        es: 'Regule el GPS con normas internas escritas e informe a los trabajadores por escrito.',
        nl: 'Regel de GPS met schriftelijke interne regels en informeer de werknemers schriftelijk.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Individua una base giuridica valida (di norma interesse legittimo) e documenta il bilanciamento.',
        en: 'Identify a valid legal basis (normally legitimate interest) and document the balancing test.',
        de: 'Ermitteln Sie eine gueltige Rechtsgrundlage (in der Regel das berechtigte Interesse) und dokumentieren Sie die Abwaegung.',
        fr: "Determinez une base juridique valable (en general l'interet legitime) et documentez la mise en balance.",
        es: 'Identifique una base juridica valida (por lo general el interes legitimo) y documente la ponderacion.',
        nl: 'Bepaal een geldige rechtsgrond (doorgaans het gerechtvaardigd belang) en documenteer de belangenafweging.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il sistema di tracciamento.",
        en: 'Carry out the impact assessment (DPIA) for the tracking system.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) fuer das Ortungssystem durch.',
        fr: "Realisez l'analyse d'impact (AIPD) pour le systeme de suivi.",
        es: 'Realice la evaluacion de impacto (EIPD) para el sistema de seguimiento.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor het volgsysteem.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato: niente tracciamento fuori orario senza base.',
        en: 'Configure the system in a proportionate way: no tracking outside working hours without a basis.',
        de: 'Konfigurieren Sie das System verhaeltnismaessig: keine Ortung ausserhalb der Arbeitszeit ohne Grundlage.',
        fr: 'Configurez le systeme de maniere proportionnee: pas de suivi en dehors des heures de travail sans base.',
        es: 'Configure el sistema de forma proporcionada: nada de rastreo fuera del horario sin base.',
        nl: 'Configureer het systeem op evenredige wijze: geen tracking buiten werktijd zonder grondslag.',
      },
    },
  ],

  contatti: [
    {
      ente: 'AZOP, reclami',
      portale: FONTE_AZOP_RECLAMO.url,
      urlFonte: FONTE_AZOP_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euro or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4% des Umsatzes (DSGVO)',
      fr: "jusqu'a 20 millions d'euros ou 4% du chiffre d'affaires (RGPD)",
      es: 'hasta 20 millones de euros o el 4% de la facturacion (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AZOP specifica e pubblicata per il GPS sui dipendenti. La tutela forte sta nella regola dell'art. 43 della legge sulla sicurezza sul lavoro: la sorveglianza che segue tutti i movimenti per l'intero orario richiede il previo consenso del consiglio dei lavoratori. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).",
      en: 'There is no specific and published AZOP fine for GPS on employees. The strong protection lies in the rule of art. 43 of the occupational safety law: surveillance that follows all movements for the entire working time requires the prior consent of the works council. The penalty risk remains the general one under the GDPR (art. 83).',
      de: 'Eine spezifische und veroeffentlichte Geldbusse der AZOP fuer GPS bei Arbeitnehmern ist nicht bekannt. Der starke Schutz liegt in der Regel des Art. 43 des Arbeitsschutzgesetzes: Eine Ueberwachung, die alle Bewegungen waehrend der gesamten Arbeitszeit verfolgt, erfordert die vorherige Zustimmung des Betriebsrats. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).',
      fr: "Aucune amende specifique et publiee de l'AZOP pour le GPS sur les salaries n'est connue. La protection forte reside dans la regle de l'art. 43 de la loi sur la securite au travail: une surveillance qui suit tous les mouvements pendant toute la duree du travail requiert le consentement prealable du conseil des travailleurs. Le risque de sanction reste celui, general, du RGPD (art. 83).",
      es: 'No consta una multa especifica y publicada de la AZOP por el GPS sobre los empleados. La proteccion fuerte reside en la regla del art. 43 de la ley de seguridad en el trabajo: la vigilancia que sigue todos los movimientos durante toda la jornada requiere el consentimiento previo del consejo de trabajadores. El riesgo sancionador sigue siendo el general del RGPD (art. 83).',
      nl: 'Er is geen specifieke en gepubliceerde boete van de AZOP voor GPS bij werknemers bekend. De sterke bescherming ligt in de regel van art. 43 van de arbeidsveiligheidswet: toezicht dat alle bewegingen gedurende de hele werktijd volgt, vereist de voorafgaande toestemming van de ondernemingsraad. Het sanctierisico blijft het algemene van de AVG (art. 83).',
    },
    urlFonte: FONTE_AZOP_GPS.url,
  },

  fonti: [
    FONTE_ZZR_43,
    FONTE_AZOP_GPS,
    FONTE_AZOP_DPIA,
    FONTE_AZOP_RECLAMO,
    FONTE_AZOP_HOME,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
