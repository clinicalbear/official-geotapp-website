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
      a: 'Ore per tecnico e per commessa, reperibilità e trasferta e conservazione sul Libro Unico del Lavoro, registrate a ogni intervento su caldaie e impianti termici.',
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Gas fluorurati (Reg. UE 517/2014, DPR 146/2018) e libretto impianto?',
      a: 'Tracciabilità degli interventi per patentino frigoristi (certificazione F-gas) e aggiornamento del libretto di impianto e dei rapporti di controllo.',
    },
  ],
  de: [
    {
      q: 'Zeiterfassung nach dem Tarifvertrag SHK-Handwerk?',
      a: 'Stunden je Techniker und Auftrag, Bereitschafts- und Fahrtzeiten und Aufbewahrung nach §16 ArbZG, bei jedem Heizungseinsatz erfasst.',
    },
    {
      q: 'DSGVO und Betriebsrat bei GPS-Ortung der Heizungsmonteure?',
      a: 'Ortung nur während der Arbeitszeit, mit Interessenabwägung nach Art. 6 DSGVO und Mitbestimmung des Betriebsrats nach §87 BetrVG.',
    },
    {
      q: 'F-Gase-Verordnung (EU 517/2014) und Sachkundenachweis?',
      a: 'Zuordnung der Arbeiten an Kälte- und Klimaanlagen zum sachkundigen Personal nach der F-Gas-Verordnung, mit Nachweis je Einsatz.',
    },
  ],
  fr: [
    {
      q: 'Heures et astreintes selon la convention de la métallurgie ?',
      a: 'Heures par technicien et par chantier, indemnités d\'astreinte et de déplacement et conservation des données, enregistrées à chaque intervention sur chaudière.',
    },
    {
      q: 'RGPD et CNIL pour la géolocalisation des chauffagistes ?',
      a: 'Géolocalisation limitée au temps de travail, information préalable, intérêt légitime et consultation du CSE, selon les lignes directrices CNIL.',
    },
    {
      q: 'Attestation de capacité fluides frigorigènes ?',
      a: 'Rattachement des interventions sur fluides frigorigènes à l\'attestation de capacité (règlement F-Gas), avec l\'historique de validité.',
    },
  ],
  es: [
    {
      q: '¿Jornada y disponibilidad según el convenio del metal?',
      a: 'Registro diario (art. 34.9 ET) por técnico y obra, pluses de disponibilidad y dietas y conservación de datos, capturado en cada intervención en calderas.',
    },
    {
      q: '¿RGPD y AEPD para la geolocalización de técnicos de calefacción?',
      a: 'Geolocalización solo durante la jornada, con información previa, interés legítimo y el art. 90 LOPDGDD, con derecho de acceso del trabajador.',
    },
    {
      q: '¿Carné de gases fluorados (RD 115/2017)?',
      a: 'Asociación de cada intervención con gases fluorados al carné de manipulador habilitado, con el historial de soporte y el RITE.',
    },
  ],
  pt: [
    {
      q: 'Horas e disponibilidade segundo a CCT da metalurgia?',
      a: 'Horas por técnico e por obra, disponibilidade e ajudas de custo e conservação dos dados, registados em cada intervenção em caldeiras.',
    },
    {
      q: 'RGPD e CNPD na geolocalização dos técnicos de aquecimento?',
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, conforme a CNPD.',
    },
    {
      q: 'Certificação de gases fluorados?',
      a: 'Associação de cada intervenção com gases fluorados à certificação do técnico habilitado, com o histórico de suporte e os relatórios de inspeção.',
    },
  ],
  nl: [
    {
      q: 'Uren en consignatie volgens de CAO Metaal en Techniek?',
      a: 'Uren per CV-monteur en per opdracht, consignatie- en reisuren en de bewaartermijn uit de Arbeidstijdenwet, bij elke klus vastgelegd.',
    },
    {
      q: 'AVG en de Autoriteit Persoonsgegevens bij GPS-tracking?',
      a: 'Locatie alleen tijdens werktijd, met privacyverklaring, belangenafweging (art. 6 AVG) en DPIA, volgens de richtsnoeren van de AP.',
    },
    {
      q: 'F-gassen en STEK-certificering bij koel- en CV-werk?',
      a: 'Koppeling van werk aan koel- en verwarmingsinstallaties aan de F-gassen / STEK-gecertificeerde monteur, met logboek per installatie.',
    },
  ],
  'en-us': [
    {
      q: 'EPA Section 608 + HVAC technician certification tracking?',
      a: 'Per-worker EPA Type I/II/III/Universal certification, NATE certification and the manufacturer-authorised technician records per system.',
    },
    {
      q: 'State HVAC contractor licensing per jurisdiction?',
      a: 'Per-state HVAC licence number (CA C-20, TX TDLR, FL CMC, etc.), bond and insurance evidence, with the annual renewal workflow.',
    },
    {
      q: 'Energy Star/AHRI commissioning records?',
      a: 'Per-system commissioning record aligned to Energy Star and AHRI standards, with the technician sign-off and customer acknowledgement.',
    },
  ],
  'en-gb': [
    {
      q: 'Gas Safe Register and competence-of-engineer tracking?',
      a: 'Per-worker Gas Safe ID, appliance categories, expiry dates and the ACS reassessment workflow at 60/30/14 days before expiry.',
    },
    {
      q: 'F-Gas Regulation Cat I-IV certification?',
      a: 'Per-worker F-Gas category certification, refrigerant-recovery log per system and annual report to the Environment Agency.',
    },
    {
      q: 'MCS (Microgeneration Certification Scheme) heat-pump installer trail?',
      a: 'Per-worker MCS heat-pump installer accreditation, annual ongoing assessment record and the MCS installation reference per job.',
    },
  ],
  'en-au': [
    {
      q: 'ARC Refrigerant Handling Licence per technician?',
      a: 'Per-worker ARC RHL number, scope endorsement and refresher dates, with the per-system refrigerant-recovery log.',
    },
    {
      q: 'AS 5601 gas installation compliance?',
      a: 'Per-job Type A / Type B gas installation record with the gas-fitter licence number and AS 5601 compliance certificate per worker.',
    },
    {
      q: 'AS/NZS 3500 plumbing-overlap compliance?',
      a: 'Where work overlaps plumbing scope, per-installation AS/NZS 3500 record and the supervising-plumber chain captured per shift.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial gas-fitter ticket and renewal tracking?',
      a: 'Per-worker provincial gas-fitter classification (Class A/B), the apprenticeship/journeyperson chain and the annual renewal workflow.',
    },
    {
      q: 'TSSA Ontario fuels safety record per system?',
      a: 'Per-system TSSA inspection record, with the technician qualification and the customer acknowledgement archive.',
    },
    {
      q: 'CSA B149 natural-gas / propane code compliance?',
      a: 'Per-installation CSA B149.1/.2 compliance record, with the worker\'s authorisation and refresher dates.',
    },
  ],
  'en-ie': [
    {
      q: 'RGII Domestic and Non-Domestic Gas Installer compliance?',
      a: 'Per-worker RGII registration, scope of work (Domestic, Non-Domestic, Commercial) and the annual ongoing-assessment record.',
    },
    {
      q: 'F-Gas SI 656/2011 record-keeping?',
      a: 'Per-worker F-Gas category, per-system refrigerant log and annual report to EPA Ireland, with the per-installation seven-year retention.',
    },
    {
      q: 'Construction SEO heat-and-plumbing rate compliance?',
      a: 'Where applicable, per-worker SEO craft-category rate, travel-time payment and CWPS contribution evidence per shift.',
    },
  ],
};
