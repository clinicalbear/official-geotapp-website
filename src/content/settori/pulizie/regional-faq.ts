import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  it: 'Conformità normativa in Italia',
  de: 'Vorschriften und Nachweise in Deutschland',
  fr: 'Règles et documents',
  es: 'Normativa y documentación en España',
  pt: 'Normas e registos em Portugal',
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
      q: 'Quale registrazione orari richiede il CCNL Multiservizi/Pulizie?',
      a: "GeoTapp registra ore, pause e uscite per operatore e per cantiere, con posizione e ora, e le esporta in Excel o CSV per il consulente del lavoro. Maggiorazioni festive e notturne, minimi del CCNL e Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'GDPR e Garante Privacy per la geolocalizzazione degli addetti?',
      a: 'Informativa, base giuridica del legittimo interesse e, punto dirimente in Italia, l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro previsti dall\'art. 4 dello Statuto dei Lavoratori per il controllo a distanza.',
    },
    {
      q: 'Tracciabilità del cambio appalto e dei minimi tabellari?',
      a: "GeoTapp non gestisce la clausola sociale né i minimi tabellari. Conserva lo storico di ore e presenze di ogni operatore, che si esporta in Excel o CSV: l'applicazione del CCNL Multiservizi resta al consulente.",
    },
  ],
  de: [
    {
      q: 'Welche Arbeitszeiterfassung braucht ein Reinigungsbetrieb?',
      a: 'GeoTapp erfasst Stunden, Pausen und Ende je Mitarbeiter und Objekt mit Position und Uhrzeit und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Zuschläge für Nacht- und Feiertagsarbeit, Mindestlöhne und die Anwendung des Tarifvertrags bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'DSGVO und Betriebsrat bei GPS-Ortung von Reinigungskräften?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'Aufzeichnungspflicht nach §17 MiLoG und Mindestlohn in der Gebäudereinigung?',
      a: 'Das Gebäudereinigungsgewerbe steht in §2a SchwarzArbG, dort gilt §17 MiLoG: Beginn, Ende und Dauer der täglichen Arbeitszeit sind aufzuzeichnen und zwei Jahre aufzubewahren. GeoTapp berechnet keinen Mindestlohn. Es erfasst Beginn, Pausen und Ende beim Stempeln und bewahrt Stunden und Anwesenheit je Mitarbeiter auf, exportierbar als Excel- oder CSV-Datei. Die Anwendung der Vorgaben bleibt beim Unternehmen und seiner Beratung.',
    },
  ],
  fr: [
    {
      q: 'Quel suivi des horaires pour une entreprise de nettoyage ?',
      a: 'GeoTapp enregistre les heures, les pauses et les départs par agent et par site, avec la position et l\'heure, et les exporte en Excel ou CSV pour votre gestionnaire de paie. Les majorations de nuit et de jours fériés, les minima conventionnels et l\'application de la convention collective restent à la charge de votre gestionnaire de paie et de l\'entreprise.',
    },
    {
      q: 'Géolocalisation des agents de nettoyage : RGPD et représentants du personnel ?',
      a: 'La position n\'est enregistrée qu\'au pointage et pour les photos de preuve, jamais en continu, et l\'information aux salariés se signe dans l\'app avant le premier pointage. La base juridique (intérêt légitime) et, là où ils sont requis, l\'information et la consultation des représentants du personnel relèvent de l\'employeur.',
    },
    {
      q: 'Changement de prestataire et minima conventionnels ?',
      a: 'GeoTapp ne gère ni le transfert de personnel ni les minima conventionnels. Il conserve l\'historique des heures et des présences de chaque agent, exportable en Excel ou CSV : l\'application de la convention collective reste à la charge de votre gestionnaire de paie.',
    },
  ],
  es: [
    {
      q: '¿Qué registro de horarios conviene en una empresa de limpieza?',
      a: 'GeoTapp registra horas, pausas y salidas por trabajador y por centro, con posición y hora, y las exporta a Excel o CSV para tu gestoría o asesor laboral. Los pluses de nocturnidad y festivos, las tablas salariales del convenio y la aplicación del convenio siguen siendo cosa de la gestoría y de la empresa.',
    },
    {
      q: '¿Geolocalización de limpiadores: RGPD y AEPD?',
      a: 'La posición solo se registra al fichar y con las fotos de prueba, nunca de forma continua, y la información a los trabajadores se firma en la app antes de fichar. Corresponde a la empresa comprobar qué exigen en su caso el RGPD (interés legítimo), el art. 90 LOPDGDD y la información a la representación de los trabajadores.',
    },
    {
      q: '¿Subrogación al cambiar de contrata y tablas salariales?',
      a: 'GeoTapp no gestiona la subrogación del personal ni las tablas salariales. Conserva el historial de horas y presencias de cada trabajador, exportable a Excel o CSV: la aplicación del convenio sigue siendo cosa de la gestoría.',
    },
  ],
  pt: [
    {
      q: 'Que registo de horários convém numa empresa de limpeza?',
      a: 'O GeoTapp regista em cada picagem entrada, pausas e saída com localização e hora, por trabalhador e por local, e exporta-as em Excel ou CSV para o seu contabilista ou consultor laboral. Os acréscimos de trabalho noturno e de feriados, as tabelas salariais da convenção e a aplicação da convenção coletiva continuam a cargo do contabilista ou consultor e da empresa.',
    },
    {
      q: 'Geolocalização de trabalhadores da limpeza: RGPD e proteção de dados?',
      a: 'A localização só é registada ao picar o ponto e com as fotos de prova, nunca de forma contínua, e a informação aos trabalhadores assina-se na app antes de picar. Cabe à empresa verificar o que exigem, no seu caso, o RGPD (interesse legítimo), o Código do Trabalho (meios de vigilância à distância) e a informação às estruturas de representação dos trabalhadores.',
    },
    {
      q: 'Mudança de prestador e tabelas salariais?',
      a: 'O GeoTapp não gere a transmissão de pessoal na mudança de prestador nem as tabelas salariais. Conserva o histórico de horas e presenças de cada trabalhador, exportável em Excel ou CSV: a aplicação da convenção coletiva continua a cargo do contabilista ou consultor.',
    },
  ],
  nl: [
    {
      q: 'Welke urenregistratie heeft een schoonmaakbedrijf nodig?',
      a: 'GeoTapp legt uren, pauzes en einde per medewerker en per object vast met locatie en tijd en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. Toeslagen voor nacht- en feestdagenwerk, minimumlonen en de toepassing van de cao blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'AVG en ondernemingsraad bij gps bij schoonmakers?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'Overname van personeel bij opdrachtwisseling en minimumloon in de schoonmaak?',
      a: 'GeoTapp regelt de overname van personeel bij opdrachtwisseling niet en berekent geen minimumlonen. Het bewaart uren en aanwezigheid van elke medewerker, te exporteren als Excel- of CSV-bestand: de toepassing van de cao voor het schoonmaak- en glazenwassersbedrijf blijft bij de salarisadministrateur.',
    },
  ],
  'en-us': [
    {
      q: 'FLSA records for cleaning staff?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying the FLSA, tipped and non-tipped distinctions or record-retention periods stays with your payroll provider or advisor.',
    },
    {
      q: 'Janitorial wage orders in California, New York and Illinois?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying state wage orders and rest-day rules stays with your payroll provider or advisor.',
    },
    {
      q: 'OSHA hazard-communication training?',
      a: 'GeoTapp does not verify or track HazCom training, SDS acknowledgements or PPE issuance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: 'National Minimum Wage records for hourly cleaning staff?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying National Minimum Wage rules (deductions, accommodation offset, record retention) stays with your payroll provider or adviser.',
    },
    {
      q: 'UK GDPR and the ICO Employment Practices Code?',
      a: 'The position is recorded only when the worker clocks in (start, break, finish) or takes a proof photo, and the worker signs the privacy notice in the app before clocking in. The lawful basis, the legitimate-interests assessment, the DPIA and subject-access requests, and any consultation with workers or their representatives remain the employer\'s responsibility.',
    },
    {
      q: 'Procurement Act 2023 and living-wage evidence?',
      a: 'GeoTapp does not produce Procurement Act transparency evidence. It records hours and attendance per worker, which you export to Excel or CSV for your payroll provider or adviser.',
    },
  ],
  'en-au': [
    {
      q: 'Cleaning Services Award (MA000022) compliance?',
      a: 'GeoTapp does not apply the Cleaning Services Award, its penalty rates, broken-shift allowance or minimum engagement and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'Fair Work Information Statement and Casual Employment Information Statement?',
      a: 'GeoTapp does not issue or track these statements. It records hours and attendance per worker; the statements stay with the company and its adviser.',
    },
    {
      q: 'WHS site safety for contract cleaning?',
      a: 'GeoTapp does not verify or track SWMS acknowledgements, hazardous-substance training or PPE issuance, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial employment standards for cleaning?',
      a: 'GeoTapp records hours, breaks and overtime shift by shift, with position and time at each clock-in, and exports them to Excel or CSV. Applying provincial employment standards (hours, breaks, holiday pay, retention periods) stays with your payroll provider or adviser.',
    },
    {
      q: 'PIPEDA and provincial PIPA notices?',
      a: 'The position is recorded only when the worker clocks in (start, break, finish) or takes a proof photo, and the worker signs the privacy notice in the app before clocking in. The lawful-basis assessment and any consultation with workers or their representatives remain the employer\'s responsibility.',
    },
    {
      q: 'Fair Wages and Hours of Labour Act for federal contractors?',
      a: 'GeoTapp does not apply the Fair Wages and Hours of Labour Act or prepare a compliance file and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
  ],
  'en-ie': [
    {
      q: 'Contract Cleaning Employment Regulation Order?',
      a: 'GeoTapp does not apply the Contract Cleaning ERO, its rates or its Sunday and public-holiday premiums and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'WRC inspection records for cleaning?',
      a: 'GeoTapp does not produce a WRC inspection pack. It keeps the hours and attendance of each worker, which you export to Excel or CSV. The other records an inspector may ask for stay with the company and its adviser.',
    },
    {
      q: 'Sick Leave Act 2022 records?',
      a: 'GeoTapp does not calculate sick-leave entitlements. It records hours and attendance per worker, which you export to Excel or CSV for your payroll provider or adviser.',
    },
  ],
};
