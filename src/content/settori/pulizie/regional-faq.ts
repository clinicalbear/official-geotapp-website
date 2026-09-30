import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  it: 'Conformità normativa in Italia',
  de: 'Compliance in Deutschland',
  fr: 'Conformité en France',
  es: 'Cumplimiento normativo en España',
  pt: 'Conformidade em Portugal',
  nl: 'Compliance in Nederland',
  'en-us': 'Regional rules and records',
  'en-gb': 'Regional rules and records',
  'en-au': 'Regional rules and records',
  'en-ca': 'Regional rules and records',
  'en-ie': 'Regional rules and records',
};

export const REGIONAL_FAQ: Partial<Record<AppLocale, RegionalFaqItem[]>> = {
  it: [
    {
      q: 'Quale registrazione orari richiede il CCNL Multiservizi/Pulizie?',
      a: "GeoTapp registra ore, pause e uscite per operatore e per cantiere, con posizione e ora, e le esporta in Excel o CSV per il consulente del lavoro. Maggiorazioni festive e notturne, minimi del CCNL e Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'GDPR e Garante Privacy per la geolocalizzazione degli addetti?',
      a: 'Informativa, base giuridica del legittimo interesse e, punto dirimente in Italia, l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro previsti dall\'art. 4 dello Statuto dei Lavoratori per il controllo a distanza.',
    },
    {
      q: 'Tracciabilità del cambio appalto e dei minimi tabellari?',
      a: "GeoTapp non gestisce la clausola sociale né i minimi tabellari. Conserva lo storico di ore e presenze di ogni operatore, che si esporta in Excel o CSV: l'applicazione del CCNL Multiservizi resta al consulente.",
    },
  ],
  de: [
    {
      q: 'Welche Arbeitszeiterfassung verlangt der Tarifvertrag Gebäudereinigung?',
      a: 'Geleistete Stunden je Objekt, Zuschläge für Nacht- und Feiertagsarbeit und die Aufbewahrung nach §16 ArbZG, pro Schicht erfasst, abgestimmt auf den Rahmentarifvertrag.',
    },
    {
      q: 'DSGVO und Betriebsrat bei GPS-Ortung von Reinigungskräften?',
      a: 'Datenschutzerklärung, Interessenabwägung nach Art. 6 DSGVO und vor allem die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG bei der Einführung technischer Überwachung.',
    },
    {
      q: 'Branchenmindestlohn Gebäudereinigung pro Beschäftigtem?',
      a: 'Stunden-zu-Lohn-Abgleich gegen den allgemeinverbindlichen Branchenmindestlohn der Gebäudereinigung und das MiLoG, je Mitarbeiter dokumentiert.',
    },
  ],
  fr: [
    {
      q: 'Quel suivi du temps impose la convention collective de la propreté (IDCC 3043) ?',
      a: 'Heures par site, majorations dimanche et nuit, prime d\'expérience et le transfert de personnel (annexe 7) lors d\'un changement de prestataire, enregistrés à chaque vacation.',
    },
    {
      q: 'RGPD et CNIL pour la géolocalisation des agents de propreté ?',
      a: 'Information préalable, base de l\'intérêt légitime, consultation du CSE et respect des lignes directrices CNIL : pas de suivi hors temps de travail et finalité proportionnée.',
    },
    {
      q: 'SMIC et minima de branche par agent ?',
      a: 'Rapprochement heures-salaire contre le SMIC et la grille de la convention propreté, avec historique des primes et de l\'ancienneté par salarié.',
    },
  ],
  es: [
    {
      q: '¿Qué registro de jornada exige el convenio de limpieza de edificios?',
      a: 'Registro diario obligatorio (art. 34.9 ET, RD-ley 8/2019) por trabajador y centro, plus de domingo y nocturnidad y la subrogación de personal al cambiar de contrata, capturado en cada turno.',
    },
    {
      q: '¿RGPD y AEPD para la geolocalización de operarios?',
      a: 'Información previa, interés legítimo y el art. 90 LOPDGDD: geolocalización solo durante la jornada y de forma proporcionada, con derecho de acceso del trabajador.',
    },
    {
      q: '¿SMI y tablas salariales del convenio por operario?',
      a: 'Conciliación horas-salario frente al SMI y a las tablas del convenio sectorial de limpieza, con histórico de antigüedad y pluses por trabajador.',
    },
  ],
  pt: [
    {
      q: 'Que registo de tempos exige a CCT da limpeza industrial?',
      a: 'Horas por trabalhador e por local, acréscimos de trabalho noturno e em dia feriado e a transmissão de estabelecimento na mudança de prestador, registados a cada turno.',
    },
    {
      q: 'RGPD e CNPD na geolocalização de trabalhadores da limpeza?',
      a: 'Informação prévia, interesse legítimo e o entendimento da CNPD sobre monitorização laboral: geolocalização apenas durante o tempo de trabalho, com direito de acesso do trabalhador.',
    },
    {
      q: 'RMMG e tabelas da contratação coletiva por trabalhador?',
      a: 'Reconciliação horas-retribuição face à RMMG e às tabelas da CCT da limpeza, com histórico de diuturnidades e subsídios por trabalhador.',
    },
  ],
  nl: [
    {
      q: 'Welke urenregistratie eist de CAO Schoonmaak- en Glazenwassersbedrijf?',
      a: 'Gewerkte uren per object, toeslagen voor onregelmatige en nachtdiensten en de bewaartermijn uit de Arbeidstijdenwet, per dienst vastgelegd volgens het CAO-loongebouw.',
    },
    {
      q: 'AVG en de Autoriteit Persoonsgegevens bij GPS-tracking van schoonmakers?',
      a: 'Privacyverklaring, gerechtvaardigd belang (art. 6 AVG) met belangenafweging en een DPIA per inzet, in lijn met de richtsnoeren van de AP: geen tracking buiten werktijd en inzagerecht gewaarborgd.',
    },
    {
      q: 'WML, vakantiegeld en zzp-inzet per schoonmaakmedewerker?',
      a: 'Uren-naar-loon controle tegen het wettelijk minimumloon en de CAO-schalen, inclusief 8% vakantiegeld en de toets op schijnzelfstandigheid van zzp\'ers onder de Wet DBA.',
    },
  ],
  'en-us': [
    {
      q: 'FLSA records for cleaning staff?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the FLSA, tipped and non-tipped distinctions or record-retention periods stays with your payroll provider or adviser.',
    },
    {
      q: 'Janitorial wage orders in California, New York and Illinois?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying state wage orders and rest-day rules stays with your payroll provider or adviser.',
    },
    {
      q: 'OSHA hazard-communication training?',
      a: 'GeoTapp does not verify or track HazCom training, SDS acknowledgements or PPE issuance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: 'National Minimum Wage records for hourly cleaning staff?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying National Minimum Wage rules (deductions, accommodation offset, record retention) stays with your payroll provider or adviser.',
    },
    {
      q: 'UK GDPR and the ICO Employment Practices Code?',
      a: 'The position is recorded only when the worker clocks in (start, break, finish) or takes a proof photo, and the worker signs the privacy notice in the app before clocking in. The lawful basis, the legitimate-interests assessment, the DPIA and subject-access requests, and any consultation with workers or their representatives remain the employer\'s responsibility.',
    },
    {
      q: 'Procurement Act 2023 and living-wage evidence?',
      a: 'GeoTapp does not produce Procurement Act transparency evidence. It records hours and attendance per worker, which you export to Excel or CSV for your payroll provider or adviser.',
    },
  ],
  'en-au': [
    {
      q: 'Cleaning Services Award (MA000022) compliance?',
      a: 'GeoTapp does not apply the Cleaning Services Award, its penalty rates, broken-shift allowance or minimum engagement and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'Fair Work Information Statement and Casual Employment Information Statement?',
      a: 'GeoTapp does not issue or track these statements. It records hours and attendance per worker; the statements stay with the company and its adviser.',
    },
    {
      q: 'WHS site safety for contract cleaning?',
      a: 'GeoTapp does not verify or track SWMS acknowledgements, hazardous-substance training or PPE issuance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial employment standards for cleaning?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying provincial employment standards (hours, breaks, holiday pay, retention periods) stays with your payroll provider or adviser.',
    },
    {
      q: 'PIPEDA and provincial PIPA notices?',
      a: 'The position is recorded only when the worker clocks in (start, break, finish) or takes a proof photo, and the worker signs the privacy notice in the app before clocking in. The lawful-basis assessment and any consultation with workers or their representatives remain the employer\'s responsibility.',
    },
    {
      q: 'Fair Wages and Hours of Labour Act for federal contractors?',
      a: 'GeoTapp does not apply the Fair Wages and Hours of Labour Act or prepare a compliance file and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
  ],
  'en-ie': [
    {
      q: 'Contract Cleaning Employment Regulation Order?',
      a: 'GeoTapp does not apply the Contract Cleaning ERO, its rates or its Sunday and public-holiday premiums and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'WRC inspection records for cleaning?',
      a: 'GeoTapp does not produce a WRC inspection pack. It keeps the hours and attendance of each worker, which you export to Excel or CSV. The other records an inspector may ask for stay with the company and its adviser.',
    },
    {
      q: 'Sick Leave Act 2022 records?',
      a: 'GeoTapp does not calculate sick-leave entitlements. It records hours and attendance per worker, which you export to Excel or CSV for your payroll provider or adviser.',
    },
  ],
};
