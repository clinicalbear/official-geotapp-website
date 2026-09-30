import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  it: 'Conformità normativa in Italia',
  de: 'Vorschriften und Nachweise in Deutschland',
  fr: 'Règles et justificatifs en France',
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
      q: 'Ore, reperibilità e trasferte secondo il CCNL Metalmeccanici?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita con posizione e ora, per elettricista e per cantiere, e le esporta in Excel o CSV per il consulente del lavoro. L'applicazione del CCNL (maggiorazioni, indennità) e la tenuta del Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata al lavoro e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Lavori elettrici CEI 11-27 (PES/PAV/PEI) e DM 37/2008?',
      a: "GeoTapp non verifica le abilitazioni né i profili di idoneità (PES/PAV/PEI) e non produce la dichiarazione di conformità del DM 37/2008. Registra ora, posizione e foto di ogni intervento, che il tecnico può allegare alla propria documentazione.",
    },
  ],
  de: [
    {
      q: 'Arbeitszeiten, Bereitschaft und Fahrten im Elektrohandwerk?',
      a: 'GeoTapp erfasst bei jeder Stempelung Beginn, Pausen und Ende mit Position und Uhrzeit, je Elektriker und Baustelle, und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Die Anwendung des Tarifvertrags (Zuschläge, Zulagen) und die Lohnabrechnung bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'GPS-Ortung der Elektriker: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'DGUV Vorschrift 3 und Elektrofachkraft?',
      a: 'GeoTapp prüft weder die Qualifikation als Elektrofachkraft noch die Prüfungen nach DGUV Vorschrift 3 und erstellt keine Prüfprotokolle. Es erfasst Uhrzeit, Position und Fotos jedes Einsatzes, die der Techniker seiner eigenen Dokumentation beifügen kann.',
    },
  ],
  fr: [
    {
      q: "Heures et astreintes des électriciens ?",
      a: "À chaque pointage, GeoTapp enregistre arrivée, pauses et départ avec position et heure, par électricien et par chantier, et les exporte en Excel ou CSV pour votre comptable ou gestionnaire de paie. L'application de la convention collective (majorations, indemnités) et l'établissement de la paie restent de son ressort et de celui de l'entreprise.",
    },
    {
      q: "Géolocalisation des électriciens : RGPD et CNIL ?",
      a: "La position n'est enregistrée qu'au pointage et avec les photos de preuve, jamais en continu, et l'information aux salariés est signée dans l'appli avant de pointer. Reste à l'employeur de vérifier ce que le RGPD (intérêt légitime) et la consultation du CSE exigent dans son cas.",
    },
    {
      q: "Habilitation électrique (NF C 18-510) ?",
      a: "GeoTapp ne vérifie ni les habilitations électriques ni leur validité et ne produit aucun titre d'habilitation. Il enregistre l'heure, la position et les photos de chaque intervention, que le technicien peut joindre à sa propre documentation.",
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
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, dentro dos critérios da CNPD.',
    },
    {
      q: 'Certificação DGEG de instalações elétricas?',
      a: 'Associação de cada intervenção à certificação DGEG do técnico, com o histórico de suporte ao termo de responsabilidade da instalação.',
    },
  ],
  nl: [
    {
      q: 'Werktijden, bereikbaarheid en reizen bij elektrotechnisch werk?',
      a: 'GeoTapp legt bij elke registratie begin, pauzes en einde vast met locatie en tijd, per elektricien en per bouwplaats, en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. De toepassing van de cao (toeslagen, vergoedingen) en de salarisverwerking blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'Gps bij elektriciens: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'NEN 3140 en de kwalificaties van elektrotechnisch personeel?',
      a: 'GeoTapp controleert de kwalificaties van elektrotechnisch personeel niet en voert de keuringen volgens NEN 3140 niet uit, en maakt geen keuringsrapporten. Het legt tijd, locatie en foto\'s van elke klus vast, die de monteur bij zijn eigen documentatie kan voegen.',
    },
  ],
  'en-us': [
    {
      q: 'NECA-style job-costing records?',
      a: 'GeoTapp records hours per worker and per job, which you export to Excel or CSV. It does not apply NECA cost codes or prevailing-wage rules: your accounting system and advisor do that.',
    },
    {
      q: 'OSHA electrical-safety training logs?',
      a: 'GeoTapp does not verify or track qualified-person status, lockout/tagout assignments or arc-flash PPE training, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State journeyman and master license renewals?',
      a: 'GeoTapp does not verify or track state licenses, expiry dates or CEU completion, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: '18th Edition (BS 7671) qualification records?',
      a: 'GeoTapp does not verify or track BS 7671 qualifications, ECS cards or Part P scheme registration, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Electrical safety audits?',
      a: 'GeoTapp does not verify or track inspection certificates, periodic-inspection schedules or tested-equipment registers, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'CDM 2015 evidence for electrical packages?',
      a: 'GeoTapp does not manage F10 notifications, site inductions or the Construction Phase Plan. It records who clocked in, where and at what time on each site, and that history can be shown to the principal contractor. The documents the rules require stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'Electrical Trades Award and rosters?',
      a: 'GeoTapp does not apply the Electrical Trades Award, on-call allowances or after-hours penalty rates and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'AS/NZS 3000 competency records?',
      a: 'GeoTapp does not verify or track electrical licences, scopes of work or CPD records, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State-by-state electrical safety reporting?',
      a: 'GeoTapp does not manage Energy Safe Victoria, ESO QLD, EnergySafety WA or SafeWork NSW reporting. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA Z462 electrical-safety training?',
      a: 'GeoTapp does not verify or track CSA Z462 certification or hazard-risk-category training, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Provincial electrician and apprentice licensing?',
      a: 'GeoTapp does not verify or track provincial licences, journeyperson ratios or apprentice supervision, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'WSIB reporting for electrical contractors?',
      a: 'GeoTapp does not manage WSIB Form 7, orientation logs or premium-rate appeals. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
  ],
  'en-ie': [
    {
      q: 'Safe Electric registration?',
      a: 'GeoTapp does not verify or track Safe Electric registration, PSA assessments or Certs of Compliance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'RECI and ECSSA scheme audits?',
      a: 'GeoTapp does not verify or track RECI or ECSSA scheme requirements, periodic-inspection schedules or tested-equipment registers, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Construction Sectoral Employment Order rates for electrical work?',
      a: 'GeoTapp does not apply the Construction Sectoral Employment Order rates or travel-time payments and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
  ],
};
