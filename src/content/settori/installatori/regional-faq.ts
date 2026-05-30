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
      q: 'Ore e trasferte secondo il CCNL Metalmeccanici?',
      a: 'Ore per tecnico e per commessa, indennità di trasferta e reperibilità e conservazione sul Libro Unico del Lavoro, registrate dall\'app a ogni intervento.',
    },
    {
      q: 'Geolocalizzazione dei tecnici e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Abilitazione DM 37/2008 e dichiarazione di conformità?',
      a: 'Tracciamento degli interventi per lettera di abilitazione (a–g) con i dati a supporto della dichiarazione di conformità dell\'impianto.',
    },
  ],
  de: [
    {
      q: 'Zeiterfassung nach dem Tarifvertrag Metall und Elektro?',
      a: 'Stunden je Techniker und Auftrag, Fahrt- und Bereitschaftszeiten und Aufbewahrung nach §16 ArbZG, bei jedem Einsatz erfasst.',
    },
    {
      q: 'DSGVO und Betriebsrat bei GPS-Ortung der Monteure?',
      a: 'Ortung nur während der Arbeitszeit, mit Interessenabwägung nach Art. 6 DSGVO und Mitbestimmung des Betriebsrats nach §87 BetrVG.',
    },
    {
      q: 'Handwerksordnung und Qualifikationsnachweis?',
      a: 'Zuordnung der Einsätze zur qualifizierten Fachkraft bzw. zum Meisterbetrieb nach Handwerksordnung, mit Nachweis je Auftrag.',
    },
  ],
  fr: [
    {
      q: 'Temps et déplacements selon la convention de la métallurgie ?',
      a: 'Heures par technicien et par chantier, indemnités de déplacement et d\'astreinte et conservation des données, enregistrées à chaque intervention.',
    },
    {
      q: 'RGPD et CNIL pour la géolocalisation des installateurs ?',
      a: 'Géolocalisation limitée au temps de travail, information préalable, intérêt légitime et consultation du CSE, selon les lignes directrices CNIL.',
    },
    {
      q: 'Qualification Qualibat et attestations ?',
      a: 'Rattachement des interventions à la qualification (Qualibat/RGE) du technicien, avec l\'historique à l\'appui des attestations.',
    },
  ],
  es: [
    {
      q: '¿Jornada y desplazamientos según el convenio del metal?',
      a: 'Registro diario (art. 34.9 ET) por técnico y obra, dietas y disponibilidad y conservación de datos, capturado en cada intervención.',
    },
    {
      q: '¿RGPD y AEPD para la geolocalización de instaladores?',
      a: 'Geolocalización solo durante la jornada, con información previa, interés legítimo y el art. 90 LOPDGDD, con derecho de acceso del trabajador.',
    },
    {
      q: '¿Habilitación de instalador (REBT/RITE)?',
      a: 'Asociación de cada intervención a la habilitación del instalador (REBT/RITE), con el historial de soporte al certificado de instalación.',
    },
  ],
  pt: [
    {
      q: 'Tempo e deslocações segundo a CCT da metalurgia?',
      a: 'Horas por técnico e por obra, ajudas de custo e disponibilidade e conservação dos dados, registados em cada intervenção.',
    },
    {
      q: 'RGPD e CNPD na geolocalização dos instaladores?',
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, conforme a CNPD.',
    },
    {
      q: 'Certificação DGEG/IMPIC do instalador?',
      a: 'Associação de cada intervenção à certificação do instalador (DGEG/IMPIC), com o histórico de suporte ao termo de responsabilidade.',
    },
  ],
  nl: [
    {
      q: 'Uren en reistijd volgens de CAO Metaal en Techniek?',
      a: 'Uren per monteur en per opdracht, reisuren en consignatie en de bewaartermijn uit de Arbeidstijdenwet, bij elke klus vastgelegd.',
    },
    {
      q: 'AVG en de Autoriteit Persoonsgegevens bij GPS-tracking van monteurs?',
      a: 'Locatie alleen tijdens werktijd, met privacyverklaring, belangenafweging (art. 6 AVG) en DPIA, volgens de richtsnoeren van de AP.',
    },
    {
      q: 'Erkenning en vakbekwaamheid van de installateur?',
      a: 'Koppeling van elke klus aan de erkende, vakbekwame monteur, met het dossier ter onderbouwing van de installatieverklaring.',
    },
  ],
  'en-us': [
    {
      q: 'UL/ETL listing trail per installation?',
      a: 'Per-installation listing-authority record, with worker\'s installation-method training tied to the manufacturer\'s authorised-installer programme.',
    },
    {
      q: 'State home-improvement contractor licensing tracker?',
      a: 'Per-worker state HIC licence number, bond and insurance evidence, with the annual renewal workflow tied to the platform clock-in.',
    },
    {
      q: 'ADA accessibility on-site verification per project?',
      a: 'Per-site ADA-compliance checklist completion record, with the installer signature and date for downstream audit.',
    },
  ],
  'en-gb': [
    {
      q: 'MCS (Microgeneration Certification Scheme) installer trail?',
      a: 'Per-worker MCS technology category, certification expiry, MCS installation reference and annual ongoing-assessment record.',
    },
    {
      q: 'Building Regulations Part P notification?',
      a: 'For domestic electrical installations, the Part P competent-person scheme registration and the notification record per installation.',
    },
    {
      q: 'Trustmark scheme audit support?',
      a: 'Workforce qualifications, customer-feedback log and dispute-resolution record per installation, satisfying Trustmark\'s annual review.',
    },
  ],
  'en-au': [
    {
      q: 'AS/NZS installation-standard records per category?',
      a: 'Per-category (electrical AS/NZS 3000, plumbing AS/NZS 3500, solar AS/NZS 5033) installation record with installer licence and supervising-licence chain.',
    },
    {
      q: 'Clean Energy Council Approved Installer tracking?',
      a: 'For renewable-energy installs, CEC Accreditation ID, installation-class endorsement and annual recertification record.',
    },
    {
      q: 'State home-builder licensing per jurisdiction?',
      a: 'Per-state (HBCF NSW, VBA, QBCC, BSA) installer registration with the contractor-licensing audit pack on request.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA-listed product installation trail?',
      a: 'Per-installation CSA listing record, with the worker\'s manufacturer-authorised-installer training tied to the platform profile.',
    },
    {
      q: 'Provincial trade-qualification ticket per worker?',
      a: 'Per-province trade-qualification certificate (Red Seal where applicable), with continuing-education credits and supervision chain captured per shift.',
    },
    {
      q: 'Indigenous-community engagement for on-reserve installations?',
      a: 'Where applicable, free-prior-informed-consent record, IBA data-clause compliance and OCAP-aligned data governance.',
    },
  ],
  'en-ie': [
    {
      q: 'RECI/Safe Electric installer registration tracking?',
      a: 'Per-worker Safe Electric registration, periodic-inspection schedule and CER-compliant Cert of Compliance issuance per installation.',
    },
    {
      q: 'Sustainable Energy Authority (SEAI) installer trail?',
      a: 'For SEAI-grant-eligible installations, SEAI registration number and installation-method evidence per grant claim.',
    },
    {
      q: 'WRC and HSA inspection audit pack?',
      a: 'Combined OWTA 1997 hours, Construction SEO rates where applicable, and HSA notifiable-incident logs in the inspector\'s preferred format.',
    },
  ],
};
