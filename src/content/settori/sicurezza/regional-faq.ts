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
  'en-us': 'Regional compliance',
  'en-gb': 'Regional compliance',
  'en-au': 'Regional compliance',
  'en-ca': 'Regional compliance',
  'en-ie': 'Regional compliance',
};

export const REGIONAL_FAQ: Partial<Record<AppLocale, RegionalFaqItem[]>> = {
  it: [
    {
      q: 'Turni e ore secondo il CCNL Vigilanza Privata?',
      a: 'Ore per guardia e per servizio, maggiorazioni notturne e festive e conservazione sul Libro Unico del Lavoro, con la copertura dei turni registrata in tempo reale.',
    },
    {
      q: 'Geolocalizzazione delle guardie e art. 4 dello Statuto dei Lavoratori?',
      a: 'Posizione legata al servizio e al turno, con informativa, legittimo interesse e l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato del Lavoro per il controllo a distanza.',
    },
    {
      q: 'Licenza prefettizia (TULPS art. 134) e GPG?',
      a: 'Tracciabilità dell\'impiego di guardie particolari giurate con decreto valido, a supporto degli adempimenti verso la Prefettura e la Questura.',
    },
  ],
  de: [
    {
      q: 'Dienste und Stunden nach dem Tarifvertrag Sicherheitsdienstleistungen?',
      a: 'Stunden je Mitarbeiter und Objekt, Nacht- und Feiertagszuschläge und Aufbewahrung nach §16 ArbZG, mit Echtzeit-Schichtabdeckung.',
    },
    {
      q: 'DSGVO und Betriebsrat bei GPS-Ortung der Sicherheitskräfte?',
      a: 'Ortung nur während der Arbeitszeit, mit Interessenabwägung nach Art. 6 DSGVO und Mitbestimmung des Betriebsrats nach §87 BetrVG.',
    },
    {
      q: 'Bewachungserlaubnis §34a GewO und Bewacherregister?',
      a: 'Zuordnung der Einsätze zu Personal mit Sachkundeprüfung §34a GewO und gültiger Eintragung im Bewacherregister, je Schicht nachweisbar.',
    },
  ],
  fr: [
    {
      q: 'Vacations et heures selon la convention prévention-sécurité ?',
      a: 'Heures par agent et par site, majorations de nuit et jours fériés et conservation des données, avec couverture des vacations enregistrée en temps réel.',
    },
    {
      q: 'RGPD et CNIL pour la géolocalisation des agents ?',
      a: 'Géolocalisation limitée au temps de travail, information préalable, intérêt légitime et consultation du CSE, selon les lignes directrices CNIL.',
    },
    {
      q: 'Autorisation CNAPS et carte professionnelle ?',
      a: 'Rattachement des vacations aux agents détenant la carte professionnelle CNAPS valide (Livre VI du Code de la sécurité intérieure), avec historique de validité.',
    },
  ],
  es: [
    {
      q: '¿Turnos y horas según el convenio de empresas de seguridad?',
      a: 'Registro diario (art. 34.9 ET) por vigilante y servicio, pluses de nocturnidad y festivos y conservación de datos, con cobertura de turnos en tiempo real.',
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
      a: 'Horas por vigilante e por serviço, acréscimos noturnos e de feriado e conservação dos dados, com cobertura de turnos em tempo real.',
    },
    {
      q: 'RGPD e CNPD na geolocalização dos vigilantes?',
      a: 'Geolocalização apenas durante o tempo de trabalho, com informação prévia, interesse legítimo e direito de acesso, conforme a CNPD.',
    },
    {
      q: 'Lei 34/2013 e cartão profissional do vigilante?',
      a: 'Associação de cada serviço a vigilantes com cartão profissional válido, conforme a Lei 34/2013 da segurança privada, com histórico de validade.',
    },
  ],
  nl: [
    {
      q: 'Diensten en uren volgens de CAO Particuliere Beveiliging?',
      a: 'Uren per beveiliger en per object, nacht- en feestdagtoeslagen en de bewaartermijn uit de Arbeidstijdenwet, met dekking van diensten in realtime.',
    },
    {
      q: 'AVG en de Autoriteit Persoonsgegevens bij GPS-tracking?',
      a: 'Locatie alleen tijdens werktijd, met privacyverklaring, belangenafweging (art. 6 AVG) en DPIA, volgens de richtsnoeren van de AP.',
    },
    {
      q: 'WPBR-vergunning (ND-nummer) en legitimatiebewijs?',
      a: 'Koppeling van diensten aan beveiligers met geldig legitimatiebewijs (Justis) onder de WPBR-vergunning (ND-nummer), per dienst aantoonbaar.',
    },
  ],
  'en-us': [
    {
      q: 'State security-officer licensing tracker per worker?',
      a: 'Per-worker state licence (BSIS California, NY DCJS, FL Class D, TX DPS) number, training-hours record, firearms-endorsement where applicable, and the annual renewal workflow.',
    },
    {
      q: 'Pre-employment background-check evidence?',
      a: 'FCRA-compliant background check archive per worker, with the worker\'s adverse-action notice acknowledgement record where applicable.',
    },
    {
      q: 'State-mandated training-hours records (CA AB 1207, NY DCJS)?',
      a: 'Per-worker training-hours log, refresher dates and topic coverage, satisfying state regulator audit on patrol-officer training.',
    },
  ],
  'en-gb': [
    {
      q: 'SIA Approved Contractor Scheme compliance?',
      a: 'Per-worker SIA licence number, scope (security guarding, door supervision, CCTV operation), training-hours log and the ACS annual-review audit pack.',
    },
    {
      q: 'BS 7858 vetting and screening records?',
      a: 'Per-worker BS 7858 screening evidence, with the five-year employment-history verification and reference-check archive.',
    },
    {
      q: 'Bribery Act 2010 anti-bribery and screening trail?',
      a: 'Risk-assessment record per contract, with the worker\'s anti-bribery training acknowledgement under Section 7 corporate liability defence.',
    },
  ],
  'en-au': [
    {
      q: 'State Security Industry Act compliance per jurisdiction?',
      a: 'Per-worker state licence (NSW Security Licensing Enforcement Directorate, VIC LRD, QLD OFT, etc.) number, class endorsement and renewal-workflow.',
    },
    {
      q: 'Security Industry Award MA000016 compliance?',
      a: 'Per-worker classification, overnight allowance, broken-shift allowance and weekend penalty rates per shift, with the seven-year audit record.',
    },
    {
      q: 'WHS night-work and lone-worker records?',
      a: 'Per-worker check-in cadence, panic-button readiness and lone-worker risk-assessment acknowledgement per shift, satisfying Safe Work Australia model regulations.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial Security Services Act compliance per province?',
      a: 'Per-worker provincial licence (Ontario MOL Private Security and Investigative Services Branch, BC SISB, AB Solicitor General, etc.) number and renewal log.',
    },
    {
      q: 'PIPEDA/provincial PIPA-compliant CCTV-operator records?',
      a: 'Per-worker CCTV-operator training and access-log audit trail under PIPEDA and provincial PIPA, with the OPC/OIPC complaint-response pack.',
    },
    {
      q: 'Worker safety: lone-worker check-in per shift?',
      a: 'Per-shift check-in cadence, missed-check-in escalation log and panic-button readiness, satisfying provincial OHS regulator audits.',
    },
  ],
  'en-ie': [
    {
      q: 'PSA security-industry licensing per worker?',
      a: 'Per-worker PSA licence (door-supervisor, security-guard, event-security) number, training-hours record and renewal workflow.',
    },
    {
      q: 'Static and Mobile Guarding ERO compliance?',
      a: 'Per-worker hourly rate against the Security ERO, weekend and public-holiday premiums, and the on-call allowance record per shift.',
    },
    {
      q: 'GDPR + DPA 2018 CCTV-operator records?',
      a: 'Per-worker CCTV-operator training, footage-access log and subject-access workflow under DPC 2024 guidance, with annual DPIA review.',
    },
  ],
};
