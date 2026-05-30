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
      q: 'Quale registrazione orari richiede il CCNL Multiservizi/Pulizie?',
      a: 'Ore per operatore e per cantiere, maggiorazioni per festivo e notturno e conservazione sul Libro Unico del Lavoro, registrate a ogni turno secondo i minimi del CCNL.',
    },
    {
      q: 'GDPR e Garante Privacy per la geolocalizzazione degli addetti?',
      a: 'Informativa, base giuridica del legittimo interesse e — punto dirimente in Italia — l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro previsti dall\'art. 4 dello Statuto dei Lavoratori per il controllo a distanza.',
    },
    {
      q: 'Tracciabilità del cambio appalto e dei minimi tabellari?',
      a: 'Riconciliazione ore-paga sui minimi del CCNL Multiservizi, con storico di scatti, indennità e clausola sociale di cambio appalto (art. 4) per ogni operatore.',
    },
  ],
  de: [
    {
      q: 'Welche Arbeitszeiterfassung verlangt der Tarifvertrag Gebäudereinigung?',
      a: 'Geleistete Stunden je Objekt, Zuschläge für Nacht- und Feiertagsarbeit und die Aufbewahrung nach §16 ArbZG — pro Schicht erfasst, abgestimmt auf den Rahmentarifvertrag.',
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
      a: 'Privacyverklaring, gerechtvaardigd belang (art. 6 AVG) met belangenafweging en een DPIA per inzet, conform de richtsnoeren van de AP: geen tracking buiten werktijd en inzagerecht gewaarborgd.',
    },
    {
      q: 'WML, vakantiegeld en zzp-inzet per schoonmaakmedewerker?',
      a: 'Uren-naar-loon controle tegen het wettelijk minimumloon en de CAO-schalen, inclusief 8% vakantiegeld en de toets op schijnzelfstandigheid van zzp\'ers onder de Wet DBA.',
    },
  ],
  'en-us': [
    {
      q: 'FLSA tip-credit / non-tip cleaning-staff records?',
      a: 'Per-worker hours per week, dual-jobs distinction (tipped vs non-tipped) where applicable, and the seven-year retention window required by federal and state law.',
    },
    {
      q: 'Janitorial Industry Wage Order (CA, NY, IL) compliance?',
      a: 'State-specific records: California IWC Wage Order 5 / 10, New York Hospitality Wage Order, Illinois One-Day-Rest-In-Seven Act, all captured per shift.',
    },
    {
      q: 'OSHA 1910 hazard-communication trail per worker?',
      a: 'Per-worker HazCom 2012 training records, SDS access acknowledgements and PPE-issuance log tied to each site assignment.',
    },
  ],
  'en-gb': [
    {
      q: 'NMW Act records for hourly cleaning staff?',
      a: 'Per-worker contemporaneous clock-in, weekly hours, deductions, accommodation offset (where applicable) and the six-year retention floor preferred over the three-year statutory minimum.',
    },
    {
      q: 'UK GDPR + ICO Employment Practices Code compliance?',
      a: 'Privacy notice in plain English, Article 6(1)(f) legitimate-interests assessment, DPIA per deployment and Article 15 subject-access response within ten working days.',
    },
    {
      q: 'Procurement Act 2023 living-wage evidence?',
      a: 'For public-sector and large-private-sector contracts, the platform produces the per-worker living-wage evidence tied to the Procurement Act 2023 transparency obligations.',
    },
  ],
  'en-au': [
    {
      q: 'Cleaning Services Award MA000022 detail compliance?',
      a: 'Per-worker classification, penalty rates, casual loading interaction, broken-shift allowance and minimum-engagement compliance, all per shift.',
    },
    {
      q: 'Fair Work Information Statement and Casual EIS issuance?',
      a: 'Statement issuance at start, at six months and at twelve months for casuals, with electronic acknowledgement log per worker.',
    },
    {
      q: 'WHS Act site-safety for contract cleaning?',
      a: 'Per-site SWMS acknowledgement, COSHH-equivalent hazardous-substance training and PPE-issuance log per worker.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial ESA records for cleaning per province?',
      a: 'Per-province ESA records: Ontario s.15, BC s.28, Quebec LSA RLRQ N-1.1, Alberta ECS regulations, all with the per-province retention window.',
    },
    {
      q: 'PIPEDA/provincial PIPA notice and consent for workforce monitoring?',
      a: 'Privacy notice, lawful-basis assessment and per-worker access workflow under PIPEDA or applicable provincial PIPA (BC, AB, QC Law 25).',
    },
    {
      q: 'Living-wage compliance for federal-contractor cleaning?',
      a: 'Per-worker hours-to-wage reconciliation feeding the federal-contractor Fair Wages and Hours of Labour Act compliance file.',
    },
  ],
  'en-ie': [
    {
      q: 'Contract Cleaning ERO compliance?',
      a: 'Per-worker hourly rate against the Contract Cleaning ERO, sunday and public-holiday premium computation, and OWTA s.18C banded-hours record.',
    },
    {
      q: 'WRC inspection pack for cleaning sector?',
      a: 'Combined OWTA hours, EMPA five-day statements, Payment of Wages payslips and family-leave records in the inspector\'s preferred format.',
    },
    {
      q: 'Statutory Sick Pay 2024 calculation per cleaning worker?',
      a: 'Sick Leave Act 2022 SSP days, qualifying-service evidence, daily-rate computation and per-worker SSP take-up history.',
    },
  ],
};
