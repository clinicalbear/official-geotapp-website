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
      q: 'Ore e interventi multisito secondo il CCNL (Multiservizi/Metalmeccanici)?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per tecnico e per sito, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Sicurezza (D.Lgs 81/2008) e verifiche periodiche?',
      a: "GeoTapp non gestisce l'idoneità del personale né il DUVRI. Registra ogni visita con ora, posizione e foto e conserva lo storico per sede e per tecnico, che si può mostrare al cliente.",
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
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, dentro dos critérios da CNPD.',
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
      q: 'EPA Section 608 refrigerant handling?',
      a: 'GeoTapp does not verify or track EPA certifications, refrigerant-recovery logs or annual reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'OSHA lockout/tagout on maintenance tasks?',
      a: 'GeoTapp does not verify or track lockout/tagout procedures, energy-control acknowledgements or authorised-employee certification, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'FMCSA Part 396 maintenance records?',
      a: 'GeoTapp does not verify or track FMCSA Part 396 maintenance logs or CDL evidence, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: 'PUWER 1998 maintenance records?',
      a: 'GeoTapp does not verify or track PUWER inspection and maintenance logs or technician competence, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'LOLER 1998 lifting-equipment examinations?',
      a: 'GeoTapp does not verify or track LOLER thorough-examination records, competent-person IDs or reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'PAT testing records?',
      a: 'GeoTapp does not verify or track PAT test schedules, results or remedial actions, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'PCBU asset-maintenance duties under WHS?',
      a: 'GeoTapp does not verify or track asset-maintenance logs under the WHS Act or officer due-diligence duties, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'AS/NZS 3760 in-service safety inspections?',
      a: 'GeoTapp does not verify or track AS/NZS 3760 test schedules, results or tags, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Heavy Vehicle National Law maintenance records?',
      a: 'GeoTapp does not verify or track HVNL maintenance logs or chain-of-responsibility records, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA Z460 hazardous-energy control?',
      a: 'GeoTapp does not verify or track CSA Z460 lockout/tagout records or authorised-employee certification, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'TSSA Ontario boiler and pressure-system maintenance?',
      a: 'GeoTapp does not verify or track TSSA inspection and maintenance logs or certified-worker qualifications, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Federally regulated transport maintenance?',
      a: 'GeoTapp does not verify or track Canada Transportation Act or CLC Part II maintenance logs, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ie': [
    {
      q: 'Safety, Health and Welfare at Work Act 2005 maintenance records?',
      a: 'GeoTapp does not verify or track workplace-equipment inspection logs or HSA audit files, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Lifting-equipment thorough examinations?',
      a: 'GeoTapp does not verify or track thorough-examination records or competent-person IDs, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Construction SEO rates for maintenance packages?',
      a: 'GeoTapp does not apply the Construction Sectoral Employment Order rates or pension contributions and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
  ],
};
