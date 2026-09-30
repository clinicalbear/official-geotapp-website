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
      q: 'Ore e trasferte secondo il CCNL Metalmeccanici?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per tecnico e per commessa, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione dei tecnici e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Abilitazione DM 37/2008 e dichiarazione di conformità?',
      a: "GeoTapp non gestisce le abilitazioni del DM 37/2008 e non produce la dichiarazione di conformità. Registra ora, posizione, foto e note di ogni intervento, da allegare alla documentazione dell'impianto.",
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
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, dentro dos critérios da CNPD.',
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
      q: 'UL and ETL listing records per installation?',
      a: 'GeoTapp does not verify or track UL or ETL listings or manufacturer-authorised installer programmes, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State home-improvement contractor licensing?',
      a: 'GeoTapp does not verify or track state contractor licences, bonds, insurance or renewals, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'ADA accessibility checks on site?',
      a: 'GeoTapp does not verify or track ADA compliance checklists, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: 'MCS installer certification?',
      a: 'GeoTapp does not verify or track MCS certification, technology categories or installation references, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Building Regulations Part P notification?',
      a: 'GeoTapp does not verify or track Part P competent-person registration or notifications, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'TrustMark scheme audits?',
      a: 'GeoTapp does not verify or track TrustMark requirements, customer-feedback logs or dispute-resolution records, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'AS/NZS installation-standard records?',
      a: 'GeoTapp does not verify or track AS/NZS 3000, 3500 or 5033 compliance or licence chains, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Clean Energy Council installer accreditation?',
      a: 'GeoTapp does not verify or track CEC accreditation or installation-class endorsements, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State building-licence registrations?',
      a: 'GeoTapp does not verify or track state contractor licences or registrations, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA-listed product installation records?',
      a: 'GeoTapp does not verify or track CSA listings or manufacturer-authorised installer training, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Provincial trade qualifications?',
      a: 'GeoTapp does not verify or track provincial trade certificates, Red Seal endorsements or continuing-education credits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Consent for on-reserve installations?',
      a: 'GeoTapp does not manage consent records or impact-benefit agreements. It records who clocked in, where and at what time on each site; agreements and consent records stay with the company and the communities concerned.',
    },
  ],
  'en-ie': [
    {
      q: 'Safe Electric and RECI registration?',
      a: 'GeoTapp does not verify or track Safe Electric or RECI registration, periodic inspections or Certs of Compliance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'SEAI installer requirements?',
      a: 'GeoTapp does not verify or track SEAI registration numbers or installation evidence for grant claims, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WRC and HSA inspection records?',
      a: 'GeoTapp does not manage OWTA hours reconciliation, Construction SEO rates or HSA notifiable-incident logs. It records who clocked in, where and at what time on each site, and that history can be shown to an inspector, alongside the hours and attendance you can export to Excel or CSV. The documents the rules require stay with the company.',
    },
  ],
};
