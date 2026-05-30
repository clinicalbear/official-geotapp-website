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
      q: 'Ore e interventi multisito secondo il CCNL (Multiservizi/Metalmeccanici)?',
      a: 'Ore per tecnico e per sito, reperibilità e trasferta e conservazione sul Libro Unico del Lavoro, con ogni intervento di manutenzione registrato dall\'app.',
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Sicurezza (D.Lgs 81/2008) e verifiche periodiche?',
      a: 'Tracciabilità di idoneità, DUVRI per appalti e controlli periodici, con storico per ogni sito e tecnico.',
    },
  ],
  de: [
    {
      q: 'Zeiterfassung für standortübergreifende Wartung?',
      a: 'Stunden je Techniker und Standort, Bereitschafts- und Fahrtzeiten und Aufbewahrung nach §16 ArbZG, bei jedem Wartungseinsatz erfasst.',
    },
    {
      q: 'DSGVO und Betriebsrat bei GPS-Ortung der Techniker?',
      a: 'Ortung nur während der Arbeitszeit, mit Interessenabwägung nach Art. 6 DSGVO und Mitbestimmung des Betriebsrats nach §87 BetrVG.',
    },
    {
      q: 'Arbeitssicherheit und wiederkehrende Prüfungen (BetrSichV)?',
      a: 'Zuordnung von Gefährdungsbeurteilung und Prüfeinsätzen zur befähigten Person nach BetrSichV, mit Nachweis je Standort.',
    },
  ],
  fr: [
    {
      q: 'Heures et interventions multisites selon la convention applicable ?',
      a: 'Heures par technicien et par site, indemnités de déplacement et d\'astreinte et conservation des données, enregistrées à chaque intervention de maintenance.',
    },
    {
      q: 'RGPD et CNIL pour la géolocalisation des techniciens ?',
      a: 'Géolocalisation limitée au temps de travail, information préalable, intérêt légitime et consultation du CSE, selon les lignes directrices CNIL.',
    },
    {
      q: 'Sécurité au travail et vérifications réglementaires ?',
      a: 'Rattachement du document unique (DUERP) et des vérifications périodiques à la qualification du technicien, avec historique par site.',
    },
  ],
  es: [
    {
      q: '¿Jornada e intervenciones multisede según el convenio aplicable?',
      a: 'Registro diario (art. 34.9 ET) por técnico y centro, dietas y disponibilidad y conservación de datos, capturado en cada intervención de mantenimiento.',
    },
    {
      q: '¿RGPD y AEPD para la geolocalización de técnicos?',
      a: 'Geolocalización solo durante la jornada, con información previa, interés legítimo y el art. 90 LOPDGDD, con derecho de acceso del trabajador.',
    },
    {
      q: '¿Prevención de riesgos e inspecciones periódicas?',
      a: 'Asociación de la evaluación de riesgos y las inspecciones reglamentarias a la habilitación del técnico, con historial por centro.',
    },
  ],
  pt: [
    {
      q: 'Horas e intervenções multissítio segundo a CCT aplicável?',
      a: 'Horas por técnico e por local, disponibilidade e ajudas de custo e conservação dos dados, registados em cada intervenção de manutenção.',
    },
    {
      q: 'RGPD e CNPD na geolocalização dos técnicos?',
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, conforme a CNPD.',
    },
    {
      q: 'Segurança no trabalho e inspeções periódicas?',
      a: 'Associação da avaliação de riscos e das inspeções regulamentares à qualificação do técnico, com histórico por local.',
    },
  ],
  nl: [
    {
      q: 'Urenregistratie bij onderhoud op meerdere locaties?',
      a: 'Uren per technicus en per locatie, consignatie- en reisuren en de bewaartermijn uit de Arbeidstijdenwet, bij elke onderhoudsklus vastgelegd.',
    },
    {
      q: 'AVG en de Autoriteit Persoonsgegevens bij GPS-tracking?',
      a: 'Locatie alleen tijdens werktijd, met privacyverklaring, belangenafweging (art. 6 AVG) en DPIA, volgens de richtsnoeren van de AP.',
    },
    {
      q: 'RI&E (Arbowet) en periodieke keuringen?',
      a: 'Koppeling van de RI&E en wettelijke keuringen aan de gecertificeerde technicus, met inspectiedossier per locatie.',
    },
  ],
  'en-us': [
    {
      q: 'EPA Section 608 refrigerant handling per technician?',
      a: 'Per-worker EPA Type I/II/III/Universal certification, refrigerant-recovery log per system and annual report submission record.',
    },
    {
      q: 'OSHA 29 CFR 1910 LOTO compliance per maintenance task?',
      a: 'Per-task lockout/tagout assignment, energy-control procedure acknowledgement and authorised-employee certification record.',
    },
    {
      q: 'DOT regulated-maintenance records for transportation assets?',
      a: 'Per-asset maintenance log aligned to FMCSA Part 396, with the technician\'s CDL evidence where applicable.',
    },
  ],
  'en-gb': [
    {
      q: 'PUWER 1998 maintenance-record evidence?',
      a: 'Per-asset inspection and maintenance log aligned to Provision and Use of Work Equipment Regulations 1998, with technician competence per task.',
    },
    {
      q: 'LOLER 1998 lifting-equipment inspection records?',
      a: 'Per-equipment six-monthly/twelve-monthly thorough examination record, with the competent-person ID and report archive.',
    },
    {
      q: 'PAT testing records and IET Code of Practice alignment?',
      a: 'Per-asset PAT test schedule, results log and remedial-action trail, satisfying the Electricity at Work Regulations 1989 audit.',
    },
  ],
  'en-au': [
    {
      q: 'PCBU asset-maintenance evidence under WHS?',
      a: 'Per-asset maintenance log aligned to WHS Act 2011 §27 officer-duty due diligence, with technician competence per task captured.',
    },
    {
      q: 'AS/NZS 3760 in-service safety inspection records?',
      a: 'Per-equipment test schedule, results and tag log aligned to AS/NZS 3760, with the competent-person record per shift.',
    },
    {
      q: 'Heavy Vehicle National Law (HVNL) maintenance records?',
      a: 'Per-asset maintenance log aligned to HVNL chain-of-responsibility, with technician\'s maintenance-management acknowledgement per task.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA Z460 hazardous-energy control records?',
      a: 'Per-task lockout/tagout record aligned to CSA Z460, with authorised-employee certification and provincial OHS regulator audit support.',
    },
    {
      q: 'TSSA Ontario boiler/pressure-system maintenance records?',
      a: 'Per-system inspection and maintenance log feeding the TSSA audit, with the certified worker\'s qualification chain captured per shift.',
    },
    {
      q: 'Federally regulated transport maintenance under CLC Part II?',
      a: 'Per-asset maintenance log aligned to Canada Transportation Act and CLC Part II, with technician\'s competence and refresher dates.',
    },
  ],
  'en-ie': [
    {
      q: 'Safety, Health and Welfare at Work Act 2005 maintenance records?',
      a: 'Per-asset inspection and maintenance log aligned to General Application Regulations 2007 Part 2 (Workplace Equipment), with HSA audit support.',
    },
    {
      q: 'Lifting equipment thorough-examination per LOLER-equivalent?',
      a: 'Per-equipment six-monthly/twelve-monthly examination record, with competent-person ID and report archive, satisfying HSA inspection.',
    },
    {
      q: 'Construction SEO maintenance-package rate compliance?',
      a: 'Where applicable, per-worker SEO craft-category rate and CWPS contribution evidence per maintenance shift.',
    },
  ],
};
