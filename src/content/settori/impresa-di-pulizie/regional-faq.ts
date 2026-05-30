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
  'en-us': 'Regional compliance',
  'en-gb': 'Regional compliance',
  'en-au': 'Regional compliance',
  'en-ca': 'Regional compliance',
  'en-ie': 'Regional compliance',
};

export const REGIONAL_FAQ: Partial<Record<AppLocale, RegionalFaqItem[]>> = {
  it: [
    {
      q: 'Cosa serve per dimostrare ore e presenze ai sensi del CCNL Multiservizi?',
      a: 'Per ogni operatore: ore per cantiere, maggiorazioni festivo/notturno e registrazione sul Libro Unico del Lavoro, con la tracciabilità richiesta in caso di verifica ispettiva.',
    },
    {
      q: 'Come si rispetta l\'art. 4 dello Statuto dei Lavoratori sulla geolocalizzazione?',
      a: 'GPS attivo solo durante il turno, con informativa, valutazione del legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro: senza uno dei due il controllo a distanza non è lecito.',
    },
    {
      q: 'Come si gestisce il cambio appalto (clausola sociale)?',
      a: 'Storico completo di ore, anzianità e indennità per ogni operatore, pronto per il subentro nell\'appalto previsto dall\'art. 4 del CCNL Multiservizi.',
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
      a: 'Géolocalisation limitée au temps de travail, information préalable, intérêt légitime et consultation du CSE, conformément aux lignes directrices de la CNIL.',
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
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso do trabalhador, conforme a CNPD.',
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
      q: 'FLSA and state-specific cleaning-services records?',
      a: 'Per-worker hours per week, overtime computation, meal-break/rest-break compliance (CA §512, NY §162, IL §140) and the seven-year retention window required by IRS and DOL.',
    },
    {
      q: 'OSHA 1910 hazard-communication (bloodborne pathogens) training?',
      a: 'Per-worker HazCom and BBP-29 CFR 1910.1030 training records, with refresher dates and PPE-issuance log tied to the site assignment.',
    },
    {
      q: 'Service Contract Act prevailing-wage records?',
      a: 'For federal-building cleaning, WD-rate per classification per worker, WH-347 weekly certified payroll, and the SCA wage determination archive per contract.',
    },
  ],
  'en-gb': [
    {
      q: 'Cleaning sector NMW/LW compliance per shift?',
      a: 'Per-shift travel-time, briefing-time and on-site time, with the NMW Reg 2015 SI 2015/621 reg.59 record-keeping window, the rounding-policy log and the unpaid-pre-shift evidence.',
    },
    {
      q: 'ICO Employment Practices Code GPS workforce compliance?',
      a: 'Privacy notice, LIA and DPIA per site, with worker consent log and access-request workflow under UK GDPR Articles 13/15 and DPA 2018.',
    },
    {
      q: 'BICSc training and equipment-certification tracking?',
      a: 'Per-worker BICSc Cleaning Operators Proficiency Certificate, COSHH training and equipment-use authorisation per site.',
    },
  ],
  'en-au': [
    {
      q: 'Cleaning Services Award MA000022 penalty-rate compliance?',
      a: 'Per-worker classification, weekend and public-holiday penalty rates with state-calendar specifics, and the casual-loading interaction with award rates per shift.',
    },
    {
      q: 'WHS site safety for contract-cleaning sites?',
      a: 'Entry, exit, supervisor sign-on and SWMS acknowledgement per site, satisfying the Model WHS Regulations cleaning-services audit.',
    },
    {
      q: 'Modern Slavery Act 2018 (Cth) supply-chain evidence?',
      a: 'For contractors above the AUD 100m threshold, the workforce reporting feeding the annual statement to the Modern Slavery Register.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial ESA cleaning-services compliance per province?',
      a: 'Per-province (Ontario, BC, Alberta, QC) ESA records: hours, breaks, public-holiday pay, vacation, and the four-to-seven-year retention window depending on province.',
    },
    {
      q: 'PIPEDA/provincial PIPA workforce-monitoring notice?',
      a: 'Privacy notice, lawful-basis analysis and access workflow per province, with the OPC/OIPC complaint-response readiness.',
    },
    {
      q: 'Federal Modern Slavery Act 2024 (Bill S-211) reporting?',
      a: 'Workforce supply-chain evidence and forced-labour-risk assessment feeding the annual report to Public Safety Canada.',
    },
  ],
  'en-ie': [
    {
      q: 'Cleaning sector ERO and JLC compliance?',
      a: 'Where an Employment Regulation Order applies, per-worker hourly rate and shift pattern reconciled to ERO terms, exportable for WRC and Labour Court enquiry.',
    },
    {
      q: 'Sectoral GDPR DPIA for contract-cleaning workforce?',
      a: 'Privacy notice, DPIA and Article 6(1)(f) LIA per site, with the Data Protection Commission audit support pack.',
    },
    {
      q: 'EMPA 2018 banded-hours request handling?',
      a: 'Per-worker 12-month average against the OWTA s.18C band, with the request-and-response audit log evidencing compliance.',
    },
  ],
};
