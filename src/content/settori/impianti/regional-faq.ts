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
      q: 'Ore e commesse secondo il CCNL Metalmeccanici?',
      a: 'Ore per tecnico e per impianto, reperibilità e trasferta e conservazione sul Libro Unico del Lavoro, registrate a ogni intervento di installazione o manutenzione.',
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'DM 37/2008 e verifiche periodiche degli impianti?',
      a: 'Tracciabilità degli interventi per lettera di abilitazione (a–g) e dei controlli periodici, a supporto della dichiarazione di conformità.',
    },
  ],
  de: [
    {
      q: 'Zeiterfassung nach dem Tarifvertrag Metall und Elektro?',
      a: 'Stunden je Techniker und Anlage, Bereitschafts- und Fahrtzeiten und Aufbewahrung nach §16 ArbZG, bei jedem Einsatz erfasst.',
    },
    {
      q: 'DSGVO und Betriebsrat bei GPS-Ortung der Anlagentechniker?',
      a: 'Ortung nur während der Arbeitszeit, mit Interessenabwägung nach Art. 6 DSGVO und Mitbestimmung des Betriebsrats nach §87 BetrVG.',
    },
    {
      q: 'Wiederkehrende Prüfungen nach Betriebssicherheitsverordnung?',
      a: 'Zuordnung der Wartungs- und Prüfeinsätze zur befähigten Person nach BetrSichV, mit Prüfnachweis je Anlage.',
    },
  ],
  fr: [
    {
      q: 'Heures et déplacements selon la convention de la métallurgie ?',
      a: 'Heures par technicien et par installation, indemnités de déplacement et d\'astreinte et conservation des données, enregistrées à chaque intervention.',
    },
    {
      q: 'RGPD et CNIL pour la géolocalisation des techniciens ?',
      a: 'Géolocalisation limitée au temps de travail, information préalable, intérêt légitime et consultation du CSE, selon les lignes directrices CNIL.',
    },
    {
      q: 'Vérifications périodiques et qualifications ?',
      a: 'Rattachement des interventions de maintenance et des vérifications réglementaires à la qualification du technicien, avec l\'historique de validité.',
    },
  ],
  es: [
    {
      q: '¿Jornada y desplazamientos según el convenio del metal?',
      a: 'Registro diario (art. 34.9 ET) por técnico e instalación, dietas y disponibilidad y conservación de datos, capturado en cada intervención.',
    },
    {
      q: '¿RGPD y AEPD para la geolocalización de técnicos?',
      a: 'Geolocalización solo durante la jornada, con información previa, interés legítimo y el art. 90 LOPDGDD, con derecho de acceso del trabajador.',
    },
    {
      q: '¿Inspecciones periódicas y habilitaciones (RITE/REBT)?',
      a: 'Asociación de cada mantenimiento e inspección reglamentaria a la habilitación del instalador (RITE/REBT), con el historial de soporte.',
    },
  ],
  pt: [
    {
      q: 'Horas e instalações segundo a CCT da metalurgia?',
      a: 'Horas por técnico e por instalação, disponibilidade e ajudas de custo e conservação dos dados, registados em cada intervenção.',
    },
    {
      q: 'RGPD e CNPD na geolocalização dos técnicos?',
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, conforme a CNPD.',
    },
    {
      q: 'Inspeções periódicas e certificação DGEG?',
      a: 'Associação de cada manutenção e inspeção regulamentar à certificação DGEG do técnico, com o histórico de suporte ao termo de responsabilidade.',
    },
  ],
  nl: [
    {
      q: 'Uren en consignatie volgens de CAO Metaal en Techniek?',
      a: 'Uren per technicus en per installatie, consignatie- en reisuren en de bewaartermijn uit de Arbeidstijdenwet, bij elke klus vastgelegd.',
    },
    {
      q: 'AVG en de Autoriteit Persoonsgegevens bij GPS-tracking?',
      a: 'Locatie alleen tijdens werktijd, met privacyverklaring, belangenafweging (art. 6 AVG) en DPIA, volgens de richtsnoeren van de AP.',
    },
    {
      q: 'Periodieke keuringen en SCIOS-inspectie?',
      a: 'Koppeling van onderhoud en wettelijke keuringen aan de gecertificeerde technicus (o.a. SCIOS), met inspectiedossier per installatie.',
    },
  ],
  'en-us': [
    {
      q: 'NFPA 70/NFPA 70E electrical-mechanical training trail?',
      a: 'Worker profile holds the qualified-person certification, NFPA 70E arc-flash training and the EPA Section 608 refrigerant handler card where applicable.',
    },
    {
      q: 'Joint Commission/CMS facility-systems inspection records?',
      a: 'Per-job inspection record aligned with Joint Commission Environment of Care standards, with workforce credentialing per facility.',
    },
    {
      q: 'LEED documentation for energy-system commissioning?',
      a: 'Commissioning-agent record per project, with hours-by-task export feeding the LEED Cx documentation pack.',
    },
  ],
  'en-gb': [
    {
      q: 'F-Gas Regulation 2014/SI 2024 record-keeping?',
      a: 'Per-worker F-Gas certificate (Cat I-IV), per-system refrigerant log and annual report, satisfying the Environment Agency audit on fluorinated gas equipment.',
    },
    {
      q: 'Building Safety Act 2022 golden-thread evidence?',
      a: 'For higher-risk buildings, the workforce sign-on, supervisor approval and material-installation record per phase, feeding the safety-case file.',
    },
    {
      q: 'BSRIA commissioning evidence?',
      a: 'Commissioning-agent record, witness-test log and BSRIA guide alignment per system, exportable for client handover.',
    },
  ],
  'en-au': [
    {
      q: 'ARC refrigerant-handling licence tracking?',
      a: 'Per-worker ARC RHL number, work scope, refresher dates and refrigerant-recovery records per job site.',
    },
    {
      q: 'AS 5601 gas installation records?',
      a: 'Type A and Type B gas installation jobs with gas-fitter licence per worker, sign-on per site, and AS 5601 compliance certificate.',
    },
    {
      q: 'WHS Mechanical Services site-visit logs?',
      a: 'Entry, exit, SWMS, electrical-isolation permit and confined-space-entry record per worker, per shift, per site.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial refrigeration ticket renewal tracking?',
      a: 'Per worker the platform stores province of issue, refrigeration-mechanic certificate and continuing-education credits, with the annual renewal workflow.',
    },
    {
      q: 'TSSA Ontario boiler/pressure-vessel inspection records?',
      a: 'Per-system inspection log feeding the TSSA audit, with worker qualification chain captured per shift.',
    },
    {
      q: 'Indigenous-territory facility-systems consent evidence?',
      a: 'Where work occurs on First Nations land, free-prior-informed-consent record per project, satisfying impact-benefit agreement data clauses.',
    },
  ],
  'en-ie': [
    {
      q: 'RGII Domestic Gas Installer scheme tracking?',
      a: 'Per worker the RGII registration, scope of work and the annual safety inspection record, supporting CER audits.',
    },
    {
      q: 'F-Gas SI 656/2011 (as amended) record-keeping?',
      a: 'Per-worker F-Gas category, per-system refrigerant log and annual report, satisfying EPA-Ireland fluorinated-gas audit.',
    },
    {
      q: 'WRC audit on mechanical contractors?',
      a: 'Combined OWTA 1997 hours, Construction SEO rates (SI 234/2019) where applicable, and on-site safety records, in the inspector\'s preferred audit-pack format.',
    },
  ],
};
