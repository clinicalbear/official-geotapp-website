import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  it: 'Conformità normativa in Italia',
  de: 'Vorschriften und Nachweise in Deutschland',
  fr: 'Conformité en France',
  es: 'Cumplimiento normativo en España',
  pt: 'Conformidade em Portugal',
  nl: 'Regels en documentatie in Nederland',
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
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per tecnico e per commessa, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Gas fluorurati (Reg. UE 517/2014, DPR 146/2018) e libretto impianto?',
      a: "GeoTapp non gestisce i patentini F-gas né il libretto d'impianto. Registra ora, posizione, foto e note di ogni intervento su caldaie e impianti termici, da allegare alla documentazione dell'impianto.",
    },
  ],
  de: [
    {
      q: 'Arbeitszeiten und Einsätze im Heizungsbau?',
      a: 'GeoTapp erfasst bei jeder Stempelung Beginn, Pausen und Ende mit Position und Uhrzeit, je Techniker und Auftrag, und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Die Anwendung des Tarifvertrags (Zuschläge, Zulagen) und die Lohnabrechnung bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'GPS-Ortung der Heizungsmonteure: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'F-Gase-Verordnung und Sachkundenachweis?',
      a: 'GeoTapp verwaltet keine Sachkundenachweise nach der F-Gase-Verordnung und führt keine Anlagenbücher. Es erfasst Uhrzeit, Position, Fotos und Notizen jedes Einsatzes an Heizkesseln und Heizungsanlagen, die der Anlagendokumentation beigefügt werden können.',
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
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, dentro dos critérios da CNPD.',
    },
    {
      q: 'Certificação de gases fluorados?',
      a: 'Associação de cada intervenção com gases fluorados à certificação do técnico habilitado, com o histórico de suporte e os relatórios de inspeção.',
    },
  ],
  nl: [
    {
      q: 'Werktijden en klussen in de verwarmingstechniek?',
      a: 'GeoTapp legt bij elke registratie begin, pauzes en einde vast met locatie en tijd, per monteur en per opdracht, en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. De toepassing van de cao (toeslagen, vergoedingen) en de salarisverwerking blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'Gps bij cv-monteurs: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'F-gassen en bewijzen van vakbekwaamheid (zoals STEK)?',
      a: 'GeoTapp beheert geen bewijzen van vakbekwaamheid voor F-gassen, zoals het STEK-certificaat, en houdt geen installatieboeken bij. Het legt tijd, locatie, foto\'s en notities van elke klus aan ketels en verwarmingsinstallaties vast, die bij de documentatie van de installatie kunnen worden gevoegd.',
    },
  ],
  'en-us': [
    {
      q: 'EPA Section 608 and HVAC technician certification?',
      a: 'GeoTapp does not verify or track EPA, NATE or manufacturer certifications, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State HVAC contractor licensing?',
      a: 'GeoTapp does not verify or track state HVAC licenses, bonds, insurance or renewals, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Energy Star and AHRI commissioning?',
      a: 'GeoTapp does not prepare Energy Star or AHRI commissioning records. It records the time, position and photos of each job, which you can attach to your own commissioning documents.',
    },
  ],
  'en-gb': [
    {
      q: 'Gas Safe registration?',
      a: 'GeoTapp does not verify or track Gas Safe registration, appliance categories or ACS reassessments, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'F-Gas Regulation certification?',
      a: 'GeoTapp does not verify or track F-Gas certificates, refrigerant logs or annual reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'MCS heat-pump installer accreditation?',
      a: 'GeoTapp does not verify or track MCS accreditation, annual assessments or installation references, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'ARC refrigerant-handling licences?',
      a: 'GeoTapp does not verify or track ARC licences or refrigerant-recovery records, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'AS 5601 gas installation records?',
      a: 'GeoTapp does not verify or track gas-fitter licences or AS 5601 compliance certificates, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'AS/NZS 3500 plumbing overlap?',
      a: 'GeoTapp does not verify or track AS/NZS 3500 records or supervising-plumber chains, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial gas-fitter tickets?',
      a: 'GeoTapp does not verify or track gas-fitter classifications, apprenticeship chains or renewals, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'TSSA Ontario fuels safety records?',
      a: 'GeoTapp does not verify or track TSSA inspection records or technician qualifications, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'CSA B149 gas code?',
      a: 'GeoTapp does not verify or track CSA B149.1 or B149.2 compliance, worker authorisations or refresher dates, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ie': [
    {
      q: 'RGII gas installer registration?',
      a: 'GeoTapp does not verify or track RGII registration, scope of work or annual assessments, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'F-Gas record-keeping?',
      a: 'GeoTapp does not verify or track F-Gas categories, refrigerant logs or annual reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Construction SEO rates for heating and plumbing?',
      a: 'GeoTapp does not apply the Construction Sectoral Employment Order rates, travel-time payments or pension contributions and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
  ],
};
