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
      q: 'Ore, reperibilità e trasferte secondo il CCNL Metalmeccanici?',
      a: 'Ore per elettricista e per cantiere, indennità di reperibilità e trasferta e conservazione sul Libro Unico del Lavoro, registrate a ogni intervento.',
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata al lavoro e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Lavori elettrici CEI 11-27 (PES/PAV/PEI) e DM 37/2008?',
      a: 'Tracciabilità degli interventi per profilo di idoneità (PES/PAV/PEI) e per lettera A del DM 37/2008, a supporto della dichiarazione di conformità.',
    },
  ],
  de: [
    {
      q: 'Zeiterfassung nach dem Tarifvertrag Elektrohandwerk?',
      a: 'Stunden je Elektriker und Auftrag, Bereitschafts- und Fahrtzeiten und Aufbewahrung nach §16 ArbZG, bei jedem Einsatz erfasst.',
    },
    {
      q: 'DSGVO und Betriebsrat bei GPS-Ortung der Elektriker?',
      a: 'Ortung nur während der Arbeitszeit, mit Interessenabwägung nach Art. 6 DSGVO und Mitbestimmung des Betriebsrats nach §87 BetrVG.',
    },
    {
      q: 'DGUV Vorschrift 3 und VDE 0105-100?',
      a: 'Zuordnung der Arbeiten zur Elektrofachkraft und Nachweis der wiederkehrenden Prüfungen nach DGUV V3 und VDE 0105-100 je Einsatz.',
    },
  ],
  fr: [
    {
      q: 'Heures et astreintes selon la convention de la métallurgie ?',
      a: 'Heures par électricien et par chantier, indemnités d\'astreinte et de déplacement et conservation des données, enregistrées à chaque intervention.',
    },
    {
      q: 'RGPD et CNIL pour la géolocalisation des électriciens ?',
      a: 'Géolocalisation limitée au temps de travail, information préalable, intérêt légitime et consultation du CSE, selon les lignes directrices CNIL.',
    },
    {
      q: 'Habilitation électrique NF C 18-510 ?',
      a: 'Rattachement de chaque intervention à l\'habilitation électrique du salarié (NF C 18-510), avec l\'historique de validité.',
    },
  ],
  es: [
    {
      q: '¿Jornada y disponibilidad según el convenio del metal?',
      a: 'Registro diario (art. 34.9 ET) por electricista y obra, pluses de disponibilidad y dietas y conservación de datos, capturado en cada intervención.',
    },
    {
      q: '¿RGPD y AEPD para la geolocalización de electricistas?',
      a: 'Geolocalización solo durante la jornada, con información previa, interés legítimo y el art. 90 LOPDGDD, con derecho de acceso del trabajador.',
    },
    {
      q: '¿REBT y carné de instalador electricista?',
      a: 'Asociación de cada intervención al carné de instalador electricista (REBT), con el historial de soporte al boletín de instalación.',
    },
  ],
  pt: [
    {
      q: 'Horas e disponibilidade segundo a CCT da metalurgia?',
      a: 'Horas por eletricista e por obra, disponibilidade e ajudas de custo e conservação dos dados, registados em cada intervenção.',
    },
    {
      q: 'RGPD e CNPD na geolocalização dos eletricistas?',
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, conforme a CNPD.',
    },
    {
      q: 'Certificação DGEG de instalações elétricas?',
      a: 'Associação de cada intervenção à certificação DGEG do técnico, com o histórico de suporte ao termo de responsabilidade da instalação.',
    },
  ],
  nl: [
    {
      q: 'Uren en consignatie volgens de CAO Metaal en Techniek?',
      a: 'Uren per elektricien en per opdracht, consignatie- en reisuren en de bewaartermijn uit de Arbeidstijdenwet, bij elke klus vastgelegd.',
    },
    {
      q: 'AVG en de Autoriteit Persoonsgegevens bij GPS-tracking?',
      a: 'Locatie alleen tijdens werktijd, met privacyverklaring, belangenafweging (art. 6 AVG) en DPIA, volgens de richtsnoeren van de AP.',
    },
    {
      q: 'NEN 3140 en aanwijzing (VOP/VP/VK)?',
      a: 'Koppeling van elke klus aan de juiste NEN 3140-aanwijzing (VOP/VP/VK) en het inspectiedossier, per medewerker bijgehouden.',
    },
  ],
  'en-us': [
    {
      q: 'Does GeoTapp produce NECA-compatible job-costing records?',
      a: 'Yes. Per-job hours, per-job labour cost and material allocation feed straight into NECA-style cost codes. The export aligns with prevailing-wage requirements on federal contracts.',
    },
    {
      q: 'OSHA 1910.331-335 electrical-safety training logs?',
      a: 'GeoTapp records qualified-person certification, lockout/tagout assignments and arc-flash PPE acknowledgements. The training profile travels with the worker across job sites.',
    },
    {
      q: 'State journeyman/master licence renewal tracking?',
      a: 'The worker profile holds licence-issuing state, expiry date and CEU completion. The platform blocks clock-in 30 days before expiry until the renewed credential is uploaded.',
    },
  ],
  'en-gb': [
    {
      q: '18th Edition (BS 7671) qualification records?',
      a: 'GeoTapp\'s worker profile tracks the City and Guilds 2382, ECS card category and Part P scheme registration. Expiry dates trigger the renewal workflow before any clock-in is blocked.',
    },
    {
      q: 'Electrical Safety Council (ESC) audit support?',
      a: 'The platform produces the audit pack ESC inspectors request: workforce qualifications, job-level inspection certificates, periodic-inspection schedules and tested-equipment registers, all per site.',
    },
    {
      q: 'CDM 2015 principal contractor evidence for electrical packages?',
      a: 'GeoTapp captures the F10 notification association, site induction, daily clock-in and Construction Phase Plan acknowledgements per worker, satisfying HSE\'s CDM duty-holder audit expectations.',
    },
  ],
  'en-au': [
    {
      q: 'Electrical Trades Award and GPS roster compliance?',
      a: 'The platform applies ETA MA000025 classifications, on-call allowances and after-hours penalty rates, producing the seven-year audit record reg 3.31 Fair Work Regulations 2009 requires.',
    },
    {
      q: 'AS/NZS 3000 wiring rules competency tracking?',
      a: 'Worker profiles hold the state electrical-licence number, the unrestricted/restricted scope and the CPD record. Expiry triggers a 30-day renewal workflow.',
    },
    {
      q: 'ESO state-by-state safety reporting?',
      a: 'GeoTapp consolidates Energy Safe Victoria, ESO QLD, EnergySafety WA and SafeWork NSW reporting from one workforce data source, with state-specific incident notification timelines built in.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA Z462 electrical-safety training evidence?',
      a: 'Worker profile stores the CSA Z462 certification, hazard-risk-category training and refresher dates. Records satisfy the provincial OHS regulators\' arc-flash audit expectations.',
    },
    {
      q: 'Provincial Master Electrician/Apprentice licensing tracker?',
      a: 'Per-worker the platform tracks province of issue, certificate of qualification, journeyperson ratio and apprentice-supervision compliance under each province\'s Apprenticeship Act.',
    },
    {
      q: 'WSIB Schedule 1 reporting for electrical contractors?',
      a: 'GeoTapp produces the Form 7 evidence, the workplace orientation log and the CSA Z462 training record needed for WSIB premium-rate appeals under the Rate Framework.',
    },
  ],
  'en-ie': [
    {
      q: 'Safe Electric registration evidence?',
      a: 'The platform tracks Safe Electric category, valid PSA assessment, ICC reporting and the per-installation Cert of Compliance trail. CER audits become a desk exercise.',
    },
    {
      q: 'RECI/ECSSA scheme audit pack?',
      a: 'Worker qualification, periodic-inspection schedule and tested-equipment register, exportable per scheme audit cycle. Supports the registered electrical contractor\'s annual review.',
    },
    {
      q: 'Construction SEO electrical-work rates?',
      a: 'SEO SI 234/2019 craft-category rates and travel-time payments are computed per worker per shift, reconciled monthly to payroll.',
    },
  ],
};
