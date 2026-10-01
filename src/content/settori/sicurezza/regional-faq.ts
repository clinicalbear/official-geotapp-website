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
  da: 'Regler og dokumentation i Danmark',
  sv: 'Regler och dokumentation i Sverige',
  'en-us': 'Regional rules and records',
  'en-gb': 'Regional rules and records',
  'en-au': 'Regional rules and records',
  'en-ca': 'Regional rules and records',
  'en-ie': 'Regional rules and records',
};

export const REGIONAL_FAQ: Partial<Record<AppLocale, RegionalFaqItem[]>> = {
  it: [
    {
      q: 'Turni e ore secondo il CCNL Vigilanza Privata?',
      a: "GeoTapp registra a ogni timbratura entrata, pause e uscita per guardia e per servizio, con posizione e ora, e le esporta in Excel o CSV per il consulente del lavoro. Maggiorazioni notturne e festive e Libro Unico del Lavoro restano al consulente e all'azienda.",
    },
    {
      q: 'Geolocalizzazione delle guardie e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata al servizio e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Licenza prefettizia (TULPS art. 134) e GPG?',
      a: "GeoTapp non gestisce le licenze, i decreti delle guardie particolari giurate né gli adempimenti verso Prefettura e Questura. Registra chi ha timbrato, dove e quando per ogni servizio, e questo storico si può mostrare al cliente.",
    },
  ],
  de: [
    {
      q: 'Dienste und Stunden im Bewachungsgewerbe?',
      a: 'GeoTapp erfasst bei jeder Stempelung Beginn, Pausen und Ende je Sicherheitskraft und Dienst, mit Position und Uhrzeit, und exportiert sie als Excel- oder CSV-Datei für die Lohnbuchhaltung oder Steuerberatung. Zuschläge für Nacht- und Feiertagsarbeit und die Anwendung des Tarifvertrags bleiben bei ihr und beim Unternehmen.',
    },
    {
      q: 'GPS-Ortung der Sicherheitskräfte: DSGVO und Betriebsrat?',
      a: 'Die Position wird nur beim Stempeln und bei Nachweisfotos erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben. Ob eine Interessenabwägung nach Art. 6 DSGVO und die Mitbestimmung des Betriebsrats nach §87 Abs. 1 Nr. 6 BetrVG erforderlich sind, klärt der Arbeitgeber.',
    },
    {
      q: 'Bewachungserlaubnis nach §34a GewO und Bewacherregister?',
      a: 'GeoTapp verwaltet weder Erlaubnisse noch Sachkundeprüfungen nach §34a GewO noch die Eintragung im Bewacherregister und übernimmt keine Meldungen an Behörden. Es erfasst, wer wann und wo für jeden Dienst gestempelt hat, und diesen Verlauf können Sie dem Kunden zeigen.',
    },
  ],
  fr: [
    {
      q: 'Vacations et heures dans la sécurité privée ?',
      a: 'GeoTapp enregistre à chaque pointage l\'arrivée, les pauses et le départ par agent et par service, avec la position et l\'heure, et les exporte en Excel ou CSV pour votre gestionnaire de paie. Les majorations de nuit et de jours fériés et l\'application de la convention collective restent à la charge de votre gestionnaire de paie et de l\'entreprise.',
    },
    {
      q: 'Géolocalisation des agents de sécurité : RGPD et représentants du personnel ?',
      a: 'La position n\'est enregistrée qu\'au pointage et pour les photos de preuve, jamais en continu, et l\'information aux salariés se signe dans l\'app avant le premier pointage. La base juridique (intérêt légitime) et, là où ils sont requis, l\'information et la consultation des représentants du personnel relèvent de l\'employeur.',
    },
    {
      q: 'Agréments, cartes professionnelles et autorisations ?',
      a: 'GeoTapp ne gère ni les autorisations, ni les cartes professionnelles, ni les démarches auprès des autorités. Il enregistre qui a pointé, où et quand pour chaque service, et cet historique peut être montré au client.',
    },
  ],
  es: [
    {
      q: '¿Turnos y horas de los vigilantes?',
      a: 'GeoTapp registra en cada fichaje entrada, pausas y salida con posición y hora, por vigilante y por servicio, y las exporta a Excel o CSV para tu gestoría o asesor laboral. Los pluses de nocturnidad y festivos y la aplicación del convenio colectivo siguen siendo cosa de la gestoría y de la empresa.',
    },
    {
      q: '¿Geolocalización de vigilantes: RGPD y AEPD?',
      a: 'La posición solo se registra al fichar y con las fotos de prueba, nunca de forma continua, y la información a los trabajadores se firma en la app antes de fichar. Corresponde a la empresa comprobar qué exigen en su caso el RGPD (interés legítimo), el art. 90 LOPDGDD y la información a la representación de los trabajadores.',
    },
    {
      q: '¿Habilitaciones, TIP y autorizaciones?',
      a: 'GeoTapp no gestiona las autorizaciones, la Tarjeta de Identidad Profesional (TIP) ni los trámites ante las autoridades de la Ley 5/2014. Registra quién ha fichado, dónde y cuándo en cada servicio, y ese historial puede mostrarse al cliente.',
    },
  ],
  pt: [
    {
      q: 'Turnos e horas dos vigilantes?',
      a: 'O GeoTapp regista em cada picagem entrada, pausas e saída com localização e hora, por vigilante e por serviço, e exporta-as em Excel ou CSV para o seu contabilista ou consultor laboral. Os acréscimos noturnos e de feriados e a aplicação da convenção coletiva continuam a cargo do contabilista ou consultor e da empresa.',
    },
    {
      q: 'Geolocalização de vigilantes: RGPD e proteção de dados?',
      a: 'A localização só é registada ao picar o ponto e com as fotos de prova, nunca de forma contínua, e a informação aos trabalhadores assina-se na app antes de picar. Cabe à empresa verificar o que exigem, no seu caso, o RGPD (interesse legítimo), o Código do Trabalho (meios de vigilância à distância) e a informação às estruturas de representação dos trabalhadores.',
    },
    {
      q: 'Licenças, cartão profissional e autorizações?',
      a: 'O GeoTapp não gere licenças, cartões profissionais de vigilante nem os procedimentos junto das autoridades competentes. Regista quem picou o ponto, onde e quando em cada serviço, e esse histórico pode ser mostrado ao cliente.',
    },
  ],
  nl: [
    {
      q: 'Diensten en uren in de particuliere beveiliging?',
      a: 'GeoTapp legt bij elke registratie begin, pauzes en einde vast per beveiliger en per dienst, met locatie en tijd, en exporteert ze als Excel- of CSV-bestand voor de salarisadministrateur. Toeslagen voor nacht- en feestdagenwerk en de toepassing van de cao blijven bij die administrateur en bij het bedrijf.',
    },
    {
      q: 'Gps bij beveiligers: AVG en ondernemingsraad?',
      a: 'De locatie wordt alleen vastgelegd bij het registreren en bij bewijsfoto\'s, nooit doorlopend, en de privacyverklaring voor de werknemers wordt in de app ondertekend voordat ze registreren. Of een belangenafweging op grond van art. 6 AVG en de instemming van de ondernemingsraad op grond van art. 27 WOR nodig zijn, beoordeelt de werkgever.',
    },
    {
      q: 'Vergunning en legitimatiebewijs volgens de Wpbr?',
      a: 'GeoTapp beheert geen vergunningen, legitimatiebewijzen of opleidingseisen op grond van de Wet particuliere beveiligingsorganisaties en recherchebureaus (Wpbr) en doet geen meldingen aan autoriteiten. Het legt vast wie wanneer en waar voor elke dienst heeft geregistreerd, en die historie kunt u aan de klant tonen.',
    },
  ],
  da: [
    {
      q: 'Vagter og timer for vagtselskaber?',
      a: 'GeoTapp registrerer ved hver stempling ind, pauser og ud pr. vagt og pr. opgave, med position og klokkeslæt, og eksporterer dem til Excel eller CSV til din bogholder eller dit lønkontor. Anvendelsen af overenskomsten (tillæg for nat og helligdage) og lønbehandlingen forbliver hos bogholderen og virksomheden.',
    },
    {
      q: 'Geolokalisering af vagter: GDPR og Datatilsynet?',
      a: 'Positionen registreres kun ved stempling og med bevisfotos, aldrig løbende, og oplysningerne til medarbejderne underskrives i appen, før der stemples. Det er virksomheden, der selv skal undersøge, hvad GDPR (legitim interesse), databeskyttelsesloven og Datatilsynets vejledning kræver i netop jeres tilfælde.',
    },
    {
      q: 'Godkendelser og autorisationer?',
      a: 'GeoTapp håndterer hverken vagtgodkendelser eller sager over for myndighederne. Det registrerer, hvem der har stemplet, hvor og hvornår på hver opgave, og den historik kan du vise kunden.',
    },
  ],
  sv: [
    {
      q: 'Pass och timmar för bevakningsföretag?',
      a: 'GeoTapp registrerar vid varje instämpling, rast och utstämpling per väktare och per uppdrag position och tid, och exporterar dem till Excel eller CSV för din redovisningsbyrå eller ditt lönekontor. Tillämpningen av kollektivavtalet (tillägg för natt och helg) och lönehanteringen ligger kvar hos redovisningsbyrån och företaget.',
    },
    {
      q: 'Positionering av väktare: GDPR och IMY?',
      a: 'Positionen registreras bara vid stämpling och med bevisfoton, aldrig löpande, och informationen till medarbetarna signeras i appen före stämplingen. Det är företaget som själv måste ta reda på vad GDPR (intresseavvägning), medbestämmandelagen (MBL § 11, förhandling med facket innan systemet införs, där företaget är bundet av kollektivavtal) och IMY:s vägledning kräver i just ditt fall.',
    },
    {
      q: 'Godkännanden och tillstånd?',
      a: 'GeoTapp hanterar varken väktares godkännanden eller ärenden hos myndigheterna. Det registrerar vem som har stämplat, var och när på varje uppdrag, och den historiken kan du visa kunden.',
    },
  ],
  'en-us': [
    {
      q: 'State security-officer licensing?',
      a: 'GeoTapp does not verify or track state security licenses (BSIS, DCJS, Florida Class D, TX DPS), training hours or firearms endorsements, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Pre-employment background checks?',
      a: 'GeoTapp does not verify or track background checks or adverse-action notices, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'State-mandated training hours?',
      a: 'GeoTapp does not verify or track state training-hours requirements or refresher dates, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-gb': [
    {
      q: 'SIA Approved Contractor Scheme?',
      a: 'GeoTapp does not verify or track SIA licences, licence scopes, training hours or ACS audits, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'BS 7858 vetting and screening?',
      a: 'GeoTapp does not verify or track BS 7858 screening, employment-history checks or references, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Bribery Act 2010 anti-bribery training?',
      a: 'GeoTapp does not verify or track anti-bribery training or risk assessments, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
  'en-au': [
    {
      q: 'State security-industry licensing?',
      a: 'GeoTapp does not verify or track state security licences, class endorsements or renewals, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Security Industry Award (MA000016)?',
      a: 'GeoTapp does not apply the Security Industry Award, its overnight or broken-shift allowances or weekend penalty rates and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'Night work and lone-worker safety?',
      a: 'GeoTapp is not a lone-worker safety tool. It records position and time only when the guard clocks in or takes a proof photo, and nothing in between. Lone-worker procedures stay with the company.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial private-security licensing?',
      a: 'GeoTapp does not verify or track provincial security licences or renewals, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Records for CCTV operators under PIPEDA and provincial PIPA?',
      a: 'GeoTapp does not verify or track CCTV-operator training or access logs, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Lone-worker safety on shift?',
      a: 'GeoTapp is not a lone-worker safety tool. It records position and time only when the guard clocks in or takes a proof photo, and nothing in between. Lone-worker procedures stay with the company.',
    },
  ],
  'en-ie': [
    {
      q: 'PSA security licensing?',
      a: 'GeoTapp does not verify or track PSA licences, training hours or renewals, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
    {
      q: 'Static and Mobile Guarding Employment Regulation Order?',
      a: 'GeoTapp does not apply the Security ERO, its premiums or on-call allowances and does not calculate entitlements under it. It records start, breaks and finish with position and time, per worker and per job, and exports them to Excel or CSV for your payroll provider or adviser, who apply the rules.',
    },
    {
      q: 'GDPR and CCTV-operator records?',
      a: 'GeoTapp does not verify or track CCTV-operator training, footage-access logs or subject-access requests, and does not produce the related certificates. It records the time, position and photos of each job, which you can attach to your own documentation. The records themselves stay with the company.',
    },
  ],
};
