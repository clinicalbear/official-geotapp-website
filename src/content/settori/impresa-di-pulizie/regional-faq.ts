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
      q: 'Cosa serve per dimostrare ore e presenze ai sensi del CCNL Multiservizi?',
      a: "GeoTapp registra ore, pause e uscite per operatore e per cantiere, con posizione e ora, e le esporta in Excel o CSV per il consulente del lavoro. Maggiorazioni festive e notturne, Libro Unico del Lavoro e verifiche ispettive restano al consulente e all'azienda, che hanno così un registro degli orari da cui partire.",
    },
    {
      q: 'Come si rispetta l\'art. 4 dello Statuto dei Lavoratori sulla geolocalizzazione?',
      a: 'GPS attivo solo durante il turno, con informativa, valutazione del legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro: senza uno dei due il controllo a distanza non è lecito.',
    },
    {
      q: 'Come si gestisce il cambio appalto (clausola sociale)?',
      a: "GeoTapp non gestisce la clausola sociale né il passaggio di personale nel cambio appalto. Conserva lo storico di ore e presenze di ogni operatore, che si esporta in Excel o CSV: l'applicazione del CCNL resta al consulente.",
    },
  ],
  de: [
    {
      q: 'Welche Nachweise verlangt der Tarifvertrag Gebäudereinigung pro Mitarbeiter?',
      a: 'Stunden je Objekt, Nacht- und Feiertagszuschläge und die Aufbewahrung nach §16 ArbZG, jederzeit prüffähig für den Zoll (Mindestlohnkontrolle).',
    },
    {
      q: 'Wie wird die Mitbestimmung bei GPS-Ortung gewahrt?',
      a: 'Ortung nur während der Arbeitszeit, mit Interessenabwägung nach Art. 6 DSGVO und der Zustimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG vor Einführung.',
    },
    {
      q: 'Wie wird der Branchenmindestlohn nachgewiesen?',
      a: 'Automatischer Stunden-zu-Lohn-Abgleich gegen den allgemeinverbindlichen Mindestlohn der Gebäudereinigung und das MiLoG, je Mitarbeiter dokumentiert.',
    },
  ],
  fr: [
    {
      q: 'Quels justificatifs impose la convention de la propreté (IDCC 3043) ?',
      a: 'Heures par site, majorations dimanche et nuit et historique d\'ancienneté par salarié, ainsi que le transfert de personnel (annexe 7) en cas de reprise de marché.',
    },
    {
      q: 'Comment respecter le RGPD et la CNIL pour la géolocalisation ?',
      a: 'Géolocalisation limitée au temps de travail, information préalable, intérêt légitime et consultation du CSE, en s\'appuyant sur les lignes directrices de la CNIL.',
    },
    {
      q: 'Comment prouver le respect du SMIC et des minima ?',
      a: 'Rapprochement heures-salaire contre le SMIC et la grille de branche, avec historique des primes et de l\'ancienneté par agent.',
    },
  ],
  es: [
    {
      q: '¿Qué justificantes exige el convenio de limpieza de edificios?',
      a: 'Registro diario obligatorio (art. 34.9 ET) por trabajador y centro, plus de domingo y nocturnidad y la subrogación de personal al cambiar de contrata.',
    },
    {
      q: '¿Cómo se cumple el art. 90 LOPDGDD en la geolocalización?',
      a: 'Geolocalización solo durante la jornada y de forma proporcionada, con información previa, interés legítimo y derecho de acceso del trabajador (RGPD + AEPD).',
    },
    {
      q: '¿Cómo se acredita el SMI y las tablas del convenio?',
      a: 'Conciliación horas-salario frente al SMI y a las tablas del convenio sectorial de limpieza, con histórico de antigüedad y pluses por operario.',
    },
  ],
  pt: [
    {
      q: 'Que comprovativos exige a CCT da limpeza por trabalhador?',
      a: 'Horas por local, acréscimos noturnos e de feriado e histórico de diuturnidades, além da transmissão de estabelecimento na mudança de prestador.',
    },
    {
      q: 'Como se cumpre o RGPD e a CNPD na geolocalização?',
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso do trabalhador, dentro dos critérios da CNPD.',
    },
    {
      q: 'Como se demonstra a RMMG e as tabelas da CCT?',
      a: 'Reconciliação horas-retribuição face à RMMG e às tabelas da CCT da limpeza, com histórico de subsídios por trabalhador.',
    },
  ],
  nl: [
    {
      q: 'Welke bewijzen vraagt de CAO Schoonmaak per medewerker?',
      a: 'Gewerkte uren per object, onregelmatigheids- en nachttoeslagen en de bewaartermijn uit de Arbeidstijdenwet, conform het CAO-loongebouw.',
    },
    {
      q: 'Hoe wordt de AVG nageleefd bij GPS-tracking?',
      a: 'Tracking alleen tijdens werktijd, met privacyverklaring, belangenafweging (art. 6 AVG) en een DPIA, volgens de richtsnoeren van de Autoriteit Persoonsgegevens.',
    },
    {
      q: 'Hoe toon je WML en vakantiegeld aan, ook bij zzp\'ers?',
      a: 'Uren-naar-loon controle tegen het wettelijk minimumloon en de CAO-schalen, met 8% vakantiegeld en de Wet DBA-toets op schijnzelfstandigheid.',
    },
  ],
  'en-us': [
    {
      q: 'FLSA and state records for cleaning services?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the FLSA, meal and rest-break rules or record-retention periods stays with your payroll provider or adviser.',
    },
    {
      q: 'OSHA hazard-communication and bloodborne-pathogen training?',
      a: 'GeoTapp does not verify or track HazCom or bloodborne-pathogen training, refresher dates or PPE issuance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Service Contract Act wage records?',
      a: 'GeoTapp does not apply Service Contract Act wage determinations or prepare certified payroll (WH-347) and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
  ],
  'en-gb': [
    {
      q: 'National Minimum Wage and Living Wage in cleaning?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the National Minimum Wage and Living Wage rules (travel time, briefing time, rounding) stays with your payroll provider or adviser.',
    },
    {
      q: 'UK GDPR and the ICO Employment Practices Code?',
      a: 'The position is recorded only when the worker clocks in (start, break, finish) or takes a proof photo, and the worker signs the privacy notice in the app before clocking in. The lawful basis, the legitimate-interests and DPIA assessment and any consultation with workers or their representatives remain the employer\'s responsibility.',
    },
    {
      q: 'BICSc training and equipment authorisations?',
      a: 'GeoTapp does not verify or track BICSc certificates, COSHH training or equipment-use authorisations, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'Cleaning Services Award (MA000022) penalty rates?',
      a: 'GeoTapp does not apply the Cleaning Services Award, penalty rates or casual loadings and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'WHS site safety on contract-cleaning sites?',
      a: 'GeoTapp does not manage SWMS or supervisor sign-on. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
    {
      q: 'Modern Slavery Act 2018 (Cth) reporting?',
      a: 'GeoTapp does not prepare Modern Slavery statements or supply-chain reporting. It keeps the hours and attendance of each worker, which you export to Excel or CSV.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial employment standards for cleaning?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying provincial employment standards (hours, breaks, public-holiday pay, vacation, retention periods) stays with your payroll provider or adviser.',
    },
    {
      q: 'PIPEDA and provincial PIPA notices?',
      a: 'The position is recorded only when the worker clocks in (start, break, finish) or takes a proof photo, and the worker signs the privacy notice in the app before clocking in. The lawful-basis assessment and any consultation with workers or their representatives remain the employer\'s responsibility.',
    },
    {
      q: 'Bill S-211 forced-labour reporting?',
      a: 'GeoTapp does not prepare Bill S-211 reports or supply-chain assessments. It keeps the hours and attendance of each worker, which you export to Excel or CSV.',
    },
  ],
  'en-ie': [
    {
      q: 'Employment Regulation Orders in cleaning?',
      a: 'GeoTapp does not apply an Employment Regulation Order, its rates or its premiums and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'GDPR and the DPIA for a contract-cleaning workforce?',
      a: 'The position is recorded only when the worker clocks in (start, break, finish) or takes a proof photo, and the worker signs the privacy notice in the app before clocking in. The lawful basis, the DPIA and legitimate-interests assessment and any consultation with workers or their representatives remain the employer\'s responsibility.',
    },
    {
      q: 'EMPA 2018 banded-hours requests?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the banded-hours provisions or the 12-month averaging stays with your payroll provider or adviser.',
    },
  ],
};
