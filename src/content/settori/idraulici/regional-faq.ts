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
      q: 'Ore e interventi secondo il CCNL Metalmeccanici/installazione impianti?',
      a: 'Ore per idraulico e per commessa, reperibilità e trasferta e conservazione sul Libro Unico del Lavoro, registrate a ogni intervento.',
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Impianti idrico e gas: DM 37/2008 (lettere C/E) e abilitazione gas?',
      a: 'Tracciabilità degli interventi su impianti idrosanitari e gas per lettera di abilitazione, a supporto della dichiarazione di conformità.',
    },
  ],
  de: [
    {
      q: 'Zeiterfassung nach dem Tarifvertrag SHK-Handwerk?',
      a: 'Stunden je Installateur und Auftrag, Bereitschafts- und Fahrtzeiten und Aufbewahrung nach §16 ArbZG, bei jedem Einsatz erfasst.',
    },
    {
      q: 'DSGVO und Betriebsrat bei GPS-Ortung der Installateure?',
      a: 'Ortung nur während der Arbeitszeit, mit Interessenabwägung nach Art. 6 DSGVO und Mitbestimmung des Betriebsrats nach §87 BetrVG.',
    },
    {
      q: 'Gasinstallation nach TRGI (DVGW G 600)?',
      a: 'Zuordnung der Gasarbeiten zum eingetragenen Installateur und Nachweis nach TRGI (DVGW-Arbeitsblatt G 600) je Einsatz.',
    },
  ],
  fr: [
    {
      q: 'Heures et déplacements selon la convention de la métallurgie ?',
      a: 'Heures par plombier et par chantier, indemnités de déplacement et d\'astreinte et conservation des données, enregistrées à chaque intervention.',
    },
    {
      q: 'RGPD et CNIL pour la géolocalisation des plombiers ?',
      a: 'Géolocalisation limitée au temps de travail, information préalable, intérêt légitime et consultation du CSE, selon les lignes directrices CNIL.',
    },
    {
      q: 'Qualification gaz (PG) et Qualibat ?',
      a: 'Rattachement des interventions gaz à l\'appellation Professionnel Gaz (PG) et aux qualifications Qualibat, avec l\'historique de validité.',
    },
  ],
  es: [
    {
      q: '¿Jornada y desplazamientos según el convenio del metal?',
      a: 'Registro diario (art. 34.9 ET) por fontanero y obra, dietas y disponibilidad y conservación de datos, capturado en cada intervención.',
    },
    {
      q: '¿RGPD y AEPD para la geolocalización de fontaneros?',
      a: 'Geolocalización solo durante la jornada, con información previa, interés legítimo y el art. 90 LOPDGDD, con derecho de acceso del trabajador.',
    },
    {
      q: '¿Carné de instalador de gas (RITE / reglamento del gas)?',
      a: 'Asociación de cada intervención de gas al carné de instalador habilitado, con el historial de soporte al certificado de instalación.',
    },
  ],
  pt: [
    {
      q: 'Horas e deslocações segundo a CCT da metalurgia?',
      a: 'Horas por canalizador e por obra, ajudas de custo e disponibilidade e conservação dos dados, registados em cada intervenção.',
    },
    {
      q: 'RGPD e CNPD na geolocalização dos canalizadores?',
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, conforme a CNPD.',
    },
    {
      q: 'Certificação de instalador de gás (DGEG)?',
      a: 'Associação de cada intervenção de gás à certificação de instalador habilitado pela DGEG, com o histórico de suporte ao termo de responsabilidade.',
    },
  ],
  nl: [
    {
      q: 'Uren en consignatie volgens de CAO Metaal en Techniek?',
      a: 'Uren per loodgieter en per opdracht, consignatie- en reisuren en de bewaartermijn uit de Arbeidstijdenwet, bij elke klus vastgelegd.',
    },
    {
      q: 'AVG en de Autoriteit Persoonsgegevens bij GPS-tracking?',
      a: 'Locatie alleen tijdens werktijd, met privacyverklaring, belangenafweging (art. 6 AVG) en DPIA, volgens de richtsnoeren van de AP.',
    },
    {
      q: 'Gascertificering (BRL 6000 / SCIOS) bij gaswerk?',
      a: 'Koppeling van gaswerk aan de erkende, gecertificeerde installateur (CO-vrij / BRL 6000) en het inspectiedossier, per klus.',
    },
  ],
  'en-us': [
    {
      q: 'UPC/IPC-compliant inspection records per job?',
      a: 'GeoTapp logs jurisdiction (UPC or IPC), inspector name, inspection date and pass/fail per fixture. The trail supports municipal permit reconciliation.',
    },
    {
      q: 'Backflow-prevention tester certification expiry?',
      a: 'The worker profile holds the ASSE/IAPMO tester ID and the annual recertification date. Clock-in is blocked on expiry until evidence is uploaded.',
    },
    {
      q: 'Lead and Copper Rule compliance for water-service work?',
      a: 'Material-batch traceability per job site, alongside the worker\'s lead-safe-work-practice certification under EPA\'s RRP rule where applicable.',
    },
  ],
  'en-gb': [
    {
      q: 'WRAS Approval and Approved Plumber scheme tracking?',
      a: 'Per-worker WRAS Approved Plumber registration and CIPHE membership records, exportable on local-authority Water Fittings Regulation audit.',
    },
    {
      q: 'Gas Safe registration for combined plumbing/gas work?',
      a: 'Where plumbing crosses into gas, Gas Safe ID and appliance categories are tracked per worker, with the renewal workflow at 60/30/14 days.',
    },
    {
      q: 'Legionella risk-assessment evidence?',
      a: 'L8 ACOP-compatible risk assessment template, with workforce training (City and Guilds 6035 etc.) tied to the worker profile, satisfying HSG274 audit expectations.',
    },
  ],
  'en-au': [
    {
      q: 'Plumbing Code of Australia AS/NZS 3500 compliance trail?',
      a: 'Per-job site inspection record aligned to AS/NZS 3500 series, with the licensed plumber\'s number and the supervising-licence chain captured per shift.',
    },
    {
      q: 'State plumbing-licence renewal tracking?',
      a: 'State (PIC NSW, VBA, QBCC, BSA) plumbing licence number, scope of work and expiry date, with 30-day renewal workflow.',
    },
    {
      q: 'WHS site-visit logs for plumbing on construction sites?',
      a: 'Entry, exit, SWMS acknowledgement and confined-space-entry permit per worker, satisfying Safe Work Australia model WHS Regulations audit.',
    },
  ],
  'en-ca': [
    {
      q: 'National Plumbing Code of Canada compliance per job?',
      a: 'Job-level inspection records aligned to NPCC and the provincial adoption (Ontario Building Code Plumbing, BC Plumbing Code, etc.). Workforce qualifications stored per worker.',
    },
    {
      q: 'Trade certification (Red Seal Plumber 306A) tracking?',
      a: 'Worker profile holds the province of certification, Red Seal endorsement and continuing-education credits, with expiry-driven workflow.',
    },
    {
      q: 'Cross-connection control: backflow-tester certification?',
      a: 'Annual recertification dates per worker, with the municipal water-utility audit pack produced on request.',
    },
  ],
  'en-ie': [
    {
      q: 'RGI plumbing/gas dual-qualification tracking?',
      a: 'Where work overlaps RGI scope, the gas-safety Register ID is tracked alongside the plumber qualification, with appliance categories per worker.',
    },
    {
      q: 'WRC and Health and Safety Authority audit support?',
      a: 'Combined records from OWTA 1997 hours, Construction SEO rates (SI 234/2019) where applicable, and HSA notifiable-incident logs.',
    },
    {
      q: 'Water Services Act 2007 compliance evidence?',
      a: 'Per-job-site water-service work record, with the worker qualification trail and the supervising-plumber chain captured per shift.',
    },
  ],
};
