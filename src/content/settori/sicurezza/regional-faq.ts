import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  it: 'Conformità normativa in Italia',
  de: 'Vorschriften und Nachweise in Deutschland',
  fr: 'Règles et documents',
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
      q: '¿Turnos y horas según el convenio de empresas de seguridad?',
      a: 'Registro diario (art. 34.9 ET) por vigilante y servicio, pluses de nocturnidad y festivos y conservación de datos, con cobertura de turnos actualizada en cada fichaje.',
    },
    {
      q: '¿RGPD y AEPD para la geolocalización de vigilantes?',
      a: 'Geolocalización solo durante la jornada, con información previa, interés legítimo y el art. 90 LOPDGDD, con derecho de acceso del trabajador.',
    },
    {
      q: '¿Ley 5/2014 de Seguridad Privada y TIP del vigilante?',
      a: 'Asociación de cada servicio a vigilantes con Tarjeta de Identidad Profesional (TIP) en vigor, conforme a la Ley 5/2014, con historial de validez.',
    },
  ],
  pt: [
    {
      q: 'Turnos e horas segundo a CCT da segurança privada?',
      a: 'Horas por vigilante e por serviço, acréscimos noturnos e de feriado e conservação dos dados, com cobertura de turnos atualizada a cada registo de ponto.',
    },
    {
      q: 'RGPD e CNPD na geolocalização dos vigilantes?',
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, dentro dos critérios da CNPD.',
    },
    {
      q: 'Lei 34/2013 e cartão profissional do vigilante?',
      a: 'Associação de cada serviço a vigilantes com cartão profissional válido, conforme a Lei 34/2013 da segurança privada, com histórico de validade.',
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
