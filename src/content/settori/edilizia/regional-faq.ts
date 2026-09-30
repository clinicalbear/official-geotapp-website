import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  it: 'Conformità normativa in Italia',
  de: 'Vorschriften und Nachweise in Deutschland',
  fr: 'Règles et justificatifs en France',
  es: 'Normativa y documentación en España',
  pt: 'Regras e documentação em Portugal',
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
      q: "Pointage sur le chantier : carte BTP et caisse de congés ?",
      a: "GeoTapp n'est pas relié à la carte d'identification professionnelle BTP ni à la caisse de congés et ne produit aucune déclaration. Il enregistre heures et présences par compagnon et par chantier, exportables en Excel ou CSV, qui servent de base à vos déclarations : celles-ci restent du ressort de l'entreprise et de son comptable ou gestionnaire de paie.",
    },
    {
      q: "Géolocalisation sur le chantier : RGPD et CNIL ?",
      a: "La position n'est enregistrée qu'au pointage et avec les photos de preuve, jamais en continu, et l'information aux salariés est signée dans l'appli avant de pointer. Reste à l'employeur de vérifier ce que le RGPD (intérêt légitime) et la consultation du CSE exigent dans son cas.",
    },
    {
      q: "Justificatifs en cas de sous-traitance et de solidarité financière ?",
      a: "GeoTapp ne contrôle ni les salaires ni les obligations de vigilance du donneur d'ordre. Il enregistre qui a pointé, où et à quelle heure sur chaque chantier, y compris pour les équipes des sous-traitants, et cet historique peut être montré au maître d'ouvrage. Les obligations documentaires restent à la charge de l'entreprise.",
    },
  ],
  es: [
    {
      q: '¿Fichaje en obra, TPC y Libro de Subcontratación?',
      a: 'GeoTapp no está conectado a la Tarjeta Profesional de la Construcción ni al Libro de Subcontratación y no genera ninguna declaración. Registra horas y presencia por trabajador y por obra, exportables a Excel o CSV, que sirven de base para tus propios registros: el registro de jornada (art. 34.9 ET) y el resto de la documentación siguen siendo responsabilidad de la empresa y de su gestoría.',
    },
    {
      q: '¿Geolocalización en obra: RGPD y AEPD?',
      a: 'La posición solo se registra al fichar y con las fotos de prueba, nunca de forma continua, y la información a los trabajadores se firma en la app antes de fichar. Corresponde a la empresa comprobar qué exigen en su caso el RGPD (interés legítimo), el art. 90 LOPDGDD y la información a la representación de los trabajadores.',
    },
    {
      q: '¿Justificantes en la subcontratación y el REA?',
      a: 'GeoTapp no controla salarios ni gestiona la acreditación en el Registro de Empresas Acreditadas (REA) ni las obligaciones de la Ley 32/2006. Registra quién ha fichado, dónde y a qué hora en cada obra, también para los equipos de las subcontratas, y ese historial puede mostrarse a la promotora. Las obligaciones documentales siguen siendo de la empresa.',
    },
  ],
  pt: [
    {
      q: 'Picagem na obra, horas e CCT da construção civil?',
      a: 'GeoTapp não aplica a CCT da construção civil, não calcula acréscimos e não produz declarações. Regista horas e presenças por trabalhador e por obra, exportáveis para Excel ou CSV, que servem de base aos seus próprios registos: o registo do tempo de trabalho e a restante documentação continuam a ser da responsabilidade da empresa e do seu contabilista.',
    },
    {
      q: 'Geolocalização em obra: RGPD e CNPD?',
      a: 'A posição só é registada ao picar o ponto e com as fotos de prova, nunca de forma contínua, e a informação aos trabalhadores é assinada na app antes de picar. Cabe à empresa verificar o que exigem, no seu caso, o RGPD (interesse legítimo), os artigos 20.º e 21.º do Código do Trabalho e a CNPD.',
    },
    {
      q: 'Comprovativos na subcontratação e alvará do IMPIC?',
      a: 'GeoTapp não controla salários nem gere o alvará do IMPIC ou a responsabilidade solidária na subcontratação. Regista quem picou o ponto, onde e a que horas em cada obra, também para as equipas dos subempreiteiros, e esse histórico pode ser mostrado ao dono de obra. As obrigações documentais continuam a ser da empresa.',
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
