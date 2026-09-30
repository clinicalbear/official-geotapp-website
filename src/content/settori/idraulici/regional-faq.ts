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
      q: 'Ore e interventi secondo il CCNL Metalmeccanici/installazione impianti?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per idraulico e per commessa, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Impianti idrico e gas: DM 37/2008 (lettere C/E) e abilitazione gas?',
      a: "GeoTapp non verifica le abilitazioni (gas incluse) e non produce la dichiarazione di conformità del DM 37/2008. Registra ora, posizione e foto di ogni intervento su impianti idrosanitari e gas, che si possono allegare alla documentazione dell'impianto.",
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
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, dentro dos critérios da CNPD.',
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
      q: 'UPC and IPC inspection records?',
      a: 'GeoTapp does not verify or track UPC or IPC inspections, inspector names or fixture pass/fail results, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Backflow-prevention tester certification?',
      a: 'GeoTapp does not verify or track ASSE or IAPMO tester certification or recertification dates, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Lead and Copper Rule and EPA RRP work?',
      a: 'GeoTapp does not verify or track material-batch traceability or lead-safe work certification, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: 'WRAS and Approved Plumber scheme membership?',
      a: 'GeoTapp does not verify or track WRAS Approved Plumber registration, CIPHE membership or Water Fittings Regulations audits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Gas Safe registration for combined plumbing and gas work?',
      a: 'GeoTapp does not verify or track Gas Safe registration or appliance categories, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Legionella risk assessments?',
      a: 'GeoTapp does not verify or track L8 ACOP risk assessments, HSG274 audits or Legionella training, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'AS/NZS 3500 plumbing records?',
      a: 'GeoTapp does not verify or track AS/NZS 3500 compliance or licensed-plumber supervision chains, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State plumbing licence renewals?',
      a: 'GeoTapp does not verify or track state plumbing licences, scopes of work or expiry dates, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WHS site-visit logs for plumbing on construction sites?',
      a: 'GeoTapp does not manage SWMS or confined-space entry permits. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'National Plumbing Code of Canada records?',
      a: 'GeoTapp does not verify or track compliance with the National Plumbing Code or provincial plumbing codes, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Red Seal plumber certification?',
      a: 'GeoTapp does not verify or track Red Seal or provincial trade certification or continuing-education credits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Cross-connection control and backflow testers?',
      a: 'GeoTapp does not verify or track backflow-tester certification or municipal water-utility audits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ie': [
    {
      q: 'RGI plumbing and gas qualifications?',
      a: 'GeoTapp does not verify or track RGI registration or appliance categories, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WRC and HSA audits?',
      a: 'GeoTapp does not manage OWTA hours reconciliation, Construction SEO rates or HSA notifiable-incident logs. It records who clocked in, where and at what time on each site, and that history can be shown to an inspector, alongside the hours and attendance you can export to Excel or CSV. The documents the rules require stay with the company.',
    },
    {
      q: 'Water Services Act 2007 records?',
      a: 'GeoTapp does not verify or track Water Services Act work records or supervising-plumber chains, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
};
