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
      q: 'Ore e commesse secondo il CCNL Metalmeccanici?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per tecnico e per impianto, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata all\'intervento e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'DM 37/2008 e verifiche periodiche degli impianti?',
      a: "GeoTapp non gestisce le abilitazioni né le verifiche periodiche previste dal DM 37/2008. Registra ora, posizione, foto e note di ogni intervento e di ogni controllo, che si possono allegare alla dichiarazione di conformità.",
    },
  ],
  de: [
    {
      q: 'Arbeitszeiten und Aufträge im Anlagenbau?',
      a: 'GeoTapp erfasst bei jeder Stempelung Beginn, Pausen und Ende mit Position und Uhrzeit, je Techniker und Anlage, und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Die Anwendung des Tarifvertrags (Zuschläge, Zulagen) und die Lohnabrechnung bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'GPS-Ortung der Anlagentechniker: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'Wiederkehrende Prüfungen nach Betriebssicherheitsverordnung?',
      a: 'GeoTapp verwaltet weder die Befähigung der Personen noch die wiederkehrenden Prüfungen nach der Betriebssicherheitsverordnung (BetrSichV). Es erfasst Uhrzeit, Position, Fotos und Notizen jedes Einsatzes und jeder Kontrolle, die sich der Prüfdokumentation beifügen lassen.',
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
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, dentro dos critérios da CNPD.',
    },
    {
      q: 'Inspeções periódicas e certificação DGEG?',
      a: 'Associação de cada manutenção e inspeção regulamentar à certificação DGEG do técnico, com o histórico de suporte ao termo de responsabilidade.',
    },
  ],
  nl: [
    {
      q: 'Werktijden en opdrachten in de installatietechniek?',
      a: 'GeoTapp legt bij elke registratie begin, pauzes en einde vast met locatie en tijd, per monteur en per installatie, en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. De toepassing van de cao (toeslagen, vergoedingen) en de salarisverwerking blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'Gps bij installatiemonteurs: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'Periodieke keuringen van arbeidsmiddelen en installaties?',
      a: 'GeoTapp beheert noch de bekwaamheid van de personen noch de periodieke keuringen van arbeidsmiddelen op grond van het Arbobesluit. Het legt tijd, locatie, foto\'s en notities van elke klus en elke controle vast, die bij de keuringsdocumentatie kunnen worden gevoegd.',
    },
  ],
  'en-us': [
    {
      q: 'NFPA 70 and 70E training records?',
      a: 'GeoTapp does not verify or track qualified-person certification, NFPA 70E arc-flash training or EPA Section 608 cards, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Joint Commission and CMS facility inspections?',
      a: 'GeoTapp does not manage Joint Commission Environment of Care records or facility credentialing. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
    {
      q: 'LEED commissioning documentation?',
      a: 'GeoTapp records hours by job, which you can export to Excel or CSV as a starting point. It does not prepare LEED commissioning documentation.',
    },
  ],
  'en-gb': [
    {
      q: 'F-Gas Regulation record-keeping?',
      a: 'GeoTapp does not verify or track F-Gas certificates, refrigerant logs or annual reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Building Safety Act 2022 golden thread?',
      a: 'GeoTapp does not manage the golden thread or safety-case files for higher-risk buildings. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
    {
      q: 'BSRIA commissioning evidence?',
      a: 'GeoTapp does not prepare BSRIA commissioning documents. It records the time, position and photos of each visit, which you can attach to your own commissioning records.',
    },
  ],
  'en-au': [
    {
      q: 'ARC refrigerant-handling licences?',
      a: 'GeoTapp does not verify or track ARC licences or refrigerant-recovery records, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'AS 5601 gas installation records?',
      a: 'GeoTapp does not verify or track gas-fitter licences, AS 5601 compliance certificates or gas installation types, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WHS site-visit logs for mechanical services?',
      a: 'GeoTapp does not manage SWMS, electrical-isolation permits or confined-space entry records. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial refrigeration ticket renewals?',
      a: 'GeoTapp does not verify or track provincial refrigeration certificates or continuing-education credits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'TSSA Ontario boiler and pressure-vessel inspections?',
      a: 'GeoTapp does not verify or track TSSA inspections or certified-worker qualifications, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Consent for work on First Nations land?',
      a: 'GeoTapp does not manage consent records or impact-benefit agreements. It records who clocked in, where and at what time on each site; agreements and consent records stay with the company and the communities concerned.',
    },
  ],
  'en-ie': [
    {
      q: 'RGII Domestic Gas Installer registration?',
      a: 'GeoTapp does not verify or track RGII registration, scope of work or annual safety inspections, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'F-Gas record-keeping?',
      a: 'GeoTapp does not verify or track F-Gas categories, refrigerant logs or annual reports, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WRC audits for mechanical contractors?',
      a: 'GeoTapp does not manage OWTA hours reconciliation, Construction SEO rates or on-site safety records. It records who clocked in, where and at what time on each site, and that history can be shown to an inspector, alongside the hours and attendance you can export to Excel or CSV. The documents the rules require stay with the company.',
    },
  ],
};
