import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  it: 'Conformità normativa in Italia',
  de: 'Vorschriften und Nachweise in Deutschland',
  fr: 'Règles et justificatifs en France',
  es: 'Cumplimiento normativo en España',
  pt: 'Conformidade em Portugal',
  nl: 'Regels en documentatie in Nederland',
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
      q: 'Welche Arbeitszeitnachweise braucht ein Gebäudereinigungsbetrieb?',
      a: 'GeoTapp erfasst Stunden, Pausen und Ende je Mitarbeiter und Objekt mit Position und Uhrzeit und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Zuschläge für Nacht- und Feiertagsarbeit, Branchenmindestlohn und Prüfungen bleiben bei ihr und beim Unternehmen, das damit ein Zeitprotokoll als Ausgangspunkt hat.',
    },
    {
      q: 'GPS-Ortung von Reinigungskräften: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'Aufzeichnungspflicht nach §17 MiLoG in der Gebäudereinigung?',
      a: 'Das Gebäudereinigungsgewerbe steht in §2a SchwarzArbG, dort gilt §17 MiLoG: Beginn, Ende und Dauer der täglichen Arbeitszeit sind aufzuzeichnen und zwei Jahre aufzubewahren. GeoTapp erfasst Beginn, Pausen und Ende beim Stempeln und bewahrt den Verlauf je Mitarbeiter auf, exportierbar als Excel- oder CSV-Datei. Ob die Aufzeichnung den Vorgaben genügt, bleibt Sache des Unternehmens. GeoTapp ist keine Rechtsberatung.',
    },
  ],
  fr: [
    {
      q: "Quels justificatifs d'heures pour une entreprise de propreté ?",
      a: "GeoTapp enregistre heures, pauses et départs par agent et par site, avec position et heure, et les exporte en Excel ou CSV pour votre comptable ou gestionnaire de paie. Majorations de dimanche et de nuit, paie et contrôles restent de son ressort et de celui de l'entreprise, qui dispose ainsi d'un relevé d'horaires comme point de départ.",
    },
    {
      q: "Géolocalisation des agents de propreté : RGPD et CNIL ?",
      a: "La position n'est enregistrée qu'au pointage et avec les photos de preuve, jamais en continu, et l'information aux salariés est signée dans l'appli avant de pointer. Reste à l'employeur de vérifier ce que le RGPD (intérêt légitime) et la consultation du CSE exigent dans son cas.",
    },
    {
      q: "Comment gérer une reprise de marché (transfert de personnel) ?",
      a: "GeoTapp ne gère ni le transfert du personnel ni la convention collective en cas de reprise de marché. Il conserve l'historique des heures et des présences de chaque agent, exportable en Excel ou CSV : l'application de la convention reste du ressort du comptable ou du gestionnaire de paie.",
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
      q: 'Welke urenregistratie heeft een schoonmaakbedrijf nodig?',
      a: 'GeoTapp legt uren, pauzes en einde per medewerker en per object vast met locatie en tijd en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. Toeslagen voor nacht- en feestdagenwerk, het minimumloon en de controles blijven bij die administrateur en bij het bedrijf, dat zo een tijdsregistratie heeft om van uit te gaan.',
    },
    {
      q: 'Gps bij schoonmakers: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'Cao Schoonmaak en het minimumloon in de schoonmaak?',
      a: 'GeoTapp berekent geen loon en past de cao voor het schoonmaak- en glazenwassersbedrijf niet toe. Het legt begin, pauzes en einde bij het registreren vast en bewaart uren en aanwezigheid per medewerker, te exporteren als Excel- of CSV-bestand. De toepassing van de regels blijft bij het bedrijf en zijn adviseur. GeoTapp is geen juridisch advies.',
    },
  ],
  'en-us': [
    {
      q: 'FLSA and state records for cleaning services?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the FLSA, meal and rest-break rules or record-retention periods stays with your payroll provider or advisor.',
    },
    {
      q: 'OSHA hazard-communication and bloodborne-pathogen training?',
      a: 'GeoTapp does not verify or track HazCom or bloodborne-pathogen training, refresher dates or PPE issuance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Service Contract Act wage records?',
      a: 'GeoTapp does not apply Service Contract Act wage determinations or prepare certified payroll (WH-347) and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or advisor, who apply the rules.',
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
