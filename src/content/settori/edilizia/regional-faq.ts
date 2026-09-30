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
      q: 'Presenze in cantiere ai fini DURC e Cassa Edile?',
      a: "GeoTapp non si collega alla Cassa Edile e non produce il DURC. Registra ore e presenze per operaio e per cantiere, che si esportano in Excel o CSV e servono da base per la denuncia mensile: la denuncia e il DURC restano compito dell'azienda e del suo consulente.",
    },
    {
      q: 'Geolocalizzazione e art. 4 dello Statuto dei Lavoratori in cantiere?',
      a: 'Posizione legata al cantiere e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro richiesti per il controllo a distanza.',
    },
    {
      q: 'Sicurezza cantieri (Titolo IV D.Lgs 81/2008) e subappalto?',
      a: "GeoTapp non gestisce POS, PSC né l'idoneità del personale. Registra chi ha timbrato, dove e a che ora in ogni cantiere, anche per le squadre dei subappaltatori, e questo storico si può mostrare al coordinatore. Gli obblighi documentali sulla sicurezza restano all'impresa.",
    },
  ],
  de: [
    {
      q: 'Zeiterfassung auf der Baustelle: SOKA-BAU und Baumindestlohn?',
      a: 'GeoTapp ist nicht mit SOKA-BAU verbunden und berechnet weder Meldungen noch den Baumindestlohn. Es erfasst Stunden und Anwesenheit je Beschäftigtem und Baustelle, die sich als Excel- oder CSV-Datei exportieren lassen und als Grundlage für die Meldung dienen. Meldung und Lohnabrechnung bleiben Aufgabe des Unternehmens und seiner Lohnbuchhaltung oder Steuerberatung.',
    },
    {
      q: 'GPS-Ortung auf der Baustelle: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'Nachweise bei Subunternehmern und Generalunternehmerhaftung (AEntG)?',
      a: 'GeoTapp prüft weder Löhne noch die Mindestlohnhaftung nach dem AEntG. Es erfasst, wer wann und wo gestempelt hat, auch für die Teams von Subunternehmern, und diese Historie lässt sich dem Auftraggeber zeigen. Die Dokumentationspflichten bleiben beim Unternehmen.',
    },
  ],
  fr: [
    {
      q: 'Pointage et carte BTP sur le chantier ?',
      a: 'Heures par chantier et par compagnon, rattachées à la carte d\'identification professionnelle BTP et à la caisse de congés CIBTP, enregistrées sur site.',
    },
    {
      q: 'RGPD et CNIL pour la géolocalisation des compagnons ?',
      a: 'Géolocalisation limitée au temps de travail et au chantier, information préalable, intérêt légitime et consultation du CSE, selon les lignes directrices CNIL.',
    },
    {
      q: 'Preuve face à la solidarité financière en cas de sous-traitance ?',
      a: 'Historique d\'heures et de salaire par sous-traitant pour répondre à l\'obligation de vigilance et à la solidarité financière du donneur d\'ordre.',
    },
  ],
  es: [
    {
      q: '¿Registro de jornada, TPC y Libro de Subcontratación?',
      a: 'Registro diario (art. 34.9 ET) por trabajador y obra, vinculado a la Tarjeta Profesional de la Construcción y al Libro de Subcontratación, capturado en obra.',
    },
    {
      q: '¿RGPD y AEPD para la geolocalización en obra?',
      a: 'Geolocalización solo durante la jornada y la obra, con información previa, interés legítimo y el art. 90 LOPDGDD, con derecho de acceso del trabajador.',
    },
    {
      q: '¿Acreditación REA y responsabilidad en subcontratación?',
      a: 'Historial de horas y salario por subcontrata para el Registro de Empresas Acreditadas (REA) y la cadena de subcontratación de la Ley 32/2006.',
    },
  ],
  pt: [
    {
      q: 'Registo de tempos na obra e CCT da construção civil?',
      a: 'Horas por trabalhador e por obra, acréscimos aplicáveis e histórico de antiguidade, conforme a CCT da construção civil, registados no estaleiro.',
    },
    {
      q: 'RGPD e CNPD na geolocalização em obra?',
      a: 'Geolocalização apenas durante o tempo de trabalho e na obra, com informação prévia, interesse legítimo e direito de acesso, dentro dos critérios da CNPD.',
    },
    {
      q: 'Comprovação na subcontratação e alvará IMPIC?',
      a: 'Histórico de horas e retribuição por subcontratado, articulável com o alvará IMPIC e a responsabilidade solidária na subcontratação.',
    },
  ],
  nl: [
    {
      q: 'Urenregistratie op de bouwplaats en de cao Bouw & Infra?',
      a: 'GeoTapp is niet gekoppeld aan de sociale fondsen van de bouw en berekent geen toeslagen, vergoedingen of meldingen. Het legt uren en aanwezigheid per medewerker en per bouwplaats vast, die als Excel- of CSV-bestand kunnen worden geëxporteerd en als basis voor de aangifte dienen. De toepassing van de cao Bouw & Infra en de salarisverwerking blijven de taak van het bedrijf en zijn salarisadministrateur.',
    },
    {
      q: 'Gps op de bouwplaats: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'Verklaringen bij onderaanneming, ketenaansprakelijkheid en G-rekening?',
      a: 'GeoTapp controleert geen lonen en beheert de G-rekening, de ketenaansprakelijkheid of de toets op grond van de WAADI niet. Het legt vast wie wanneer en waar heeft geregistreerd, ook voor de ploegen van onderaannemers, en die historie kunt u aan de opdrachtgever tonen. De verplichtingen rond documentatie blijven bij het bedrijf.',
    },
  ],
  'en-us': [
    {
      q: 'Davis-Bacon and certified payroll records?',
      a: 'GeoTapp does not apply Davis-Bacon or prepare certified payrolls (WH-347) and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or advisor, who apply the rules.',
    },
    {
      q: 'OSHA injury and illness recordkeeping?',
      a: 'GeoTapp does not manage OSHA Forms 300, 300A and 301, training records or toolbox-talk attendance. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
    {
      q: 'FLSA overtime and state overtime rules?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the FLSA and state overtime rules stays with your payroll provider or advisor.',
    },
  ],
  'en-gb': [
    {
      q: 'CIS subcontractor verification?',
      a: 'GeoTapp does not verify or track CIS verification, right-to-work checks or UTR/PAYE status, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'HSE and Section 2 HSWA site records?',
      a: 'GeoTapp does not manage risk assessments, permits to work or toolbox talks. It records who clocked in, where and at what time on each site, and that history can be shown to the site manager or an inspector. The documents the rules require stay with the company.',
    },
    {
      q: 'Working Time Regulations records?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the Working Time Regulations (48-hour average, opt-outs, rest periods) stays with your payroll provider or adviser.',
    },
  ],
  'en-au': [
    {
      q: 'Building and Construction General On-site Award?',
      a: 'GeoTapp does not apply the Building and Construction General On-site Award or its allowances and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'WHS site-visit logs?',
      a: 'GeoTapp does not manage SWMS, supervisor approvals or notifiable-incident reporting. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
    {
      q: 'Same Job Same Pay for labour hire?',
      a: 'GeoTapp does not apply Same Job Same Pay rules for host and labour-hire workers and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
  ],
  'en-ca': [
    {
      q: 'Canada Labour Code Part II safety records?',
      a: 'GeoTapp does not manage hazard reporting, refusals to work or joint health and safety committee records. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
    {
      q: 'Ontario WSIB Form 7?',
      a: 'GeoTapp does not manage WSIB Form 7 or critical-injury notifications. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
    {
      q: 'Bilingual CNESST audit in Québec?',
      a: 'GeoTapp is available in French and English, but it does not prepare CNESST audit files. It records who clocked in, where and at what time on each site; the safety file stays with the company.',
    },
  ],
  'en-ie': [
    {
      q: 'Construction Sectoral Employment Order rates?',
      a: 'GeoTapp does not apply the Construction Sectoral Employment Order rates, pension contributions or travel-time payments and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'WRC inspection records?',
      a: 'GeoTapp does not produce a WRC inspection pack. It keeps the hours and attendance of each worker, which you export to Excel or CSV. The other records an inspector may ask for stay with the company and its adviser.',
    },
    {
      q: 'Subcontractor chains on site?',
      a: 'GeoTapp does not manage the principal contractor\'s obligations for subcontractor pay. It records who clocked in, where and at what time on each site, and that history can be shown to the client or whoever asks. The documents the rules require stay with the company.',
    },
  ],
};
