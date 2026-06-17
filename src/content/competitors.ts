/**
 * Competitor comparison data, used by /confronto/dinamico/ DynamicComparison.tsx.
 *
 * 12 features in fixed order (matches the static `/confronto/geotapp-vs-{competitor}/`
 * pages already published, to preserve consistency).
 *
 * For each competitor we store: id, label, marketing site URL (so the user can
 * verify), pricing tier (rough EUR/seat/month for entry plan), and a 12-bool
 * vector aligned to FEATURE_KEYS. GeoTapp's vector is fixed (defined once).
 */

export type LocalizedString = Partial<Record<
  'it' | 'en' | 'de' | 'fr' | 'es' | 'nl' | 'pt' | 'da' | 'sv' | 'nb' | 'ru',
  string
>>;

/** 12 feature keys in the canonical order used by all comparison tables. */
export const FEATURE_KEYS = [
  'gps_verified_at_site',
  'sealed_report',
  'geo_timestamped_photos',
  'client_verification',
  'time_tracking',
  'mobile_app',
  'builtin_messaging',
  'payroll_export',
  'free_plan',
  'multi_site_jobs',
  'gdpr_geo_compliance',
  'auto_gps_notice_signed',
] as const;

export type FeatureKey = typeof FEATURE_KEYS[number];

export const FEATURE_LABELS: Record<FeatureKey, LocalizedString> = {
  gps_verified_at_site: {
    it: 'GPS verificato al momento dell\'intervento',
    en: 'GPS verified at job site',
    de: 'GPS am Einsatzort verifiziert',
    fr: 'GPS vérifié sur le chantier',
    es: 'GPS verificado en el sitio de trabajo',
    nl: 'GPS geverifieerd op de werkplek',
    pt: 'GPS verificado no local de trabalho',
    da: 'GPS verificeret på arbejdsstedet',
    sv: 'GPS-verifierad på arbetsplatsen',
    nb: 'GPS-verifisert på arbeidsstedet',
    ru: 'GPS-проверка на месте работ',
  },
  sealed_report: {
    it: 'Report sigillato crittograficamente',
    en: 'Cryptographically sealed report',
    de: 'Kryptografisch versiegelter Bericht',
    fr: 'Rapport scellé cryptographiquement',
    es: 'Informe sellado criptográficamente',
    nl: 'Cryptografisch verzegeld rapport',
    pt: 'Relatório selado criptograficamente',
    da: 'Kryptografisk forseglet rapport',
    sv: 'Kryptografiskt förseglad rapport',
    nb: 'Kryptografisk forseglet rapport',
    ru: 'Криптографически защищённый отчёт',
  },
  geo_timestamped_photos: {
    it: 'Foto con GPS e timestamp',
    en: 'Photo evidence linked to GPS and timestamp',
    de: 'Fotos mit GPS und Zeitstempel',
    fr: 'Photos avec GPS et horodatage',
    es: 'Fotos con GPS y marca de tiempo',
    nl: 'Foto\'s met GPS en tijdstempel',
    pt: 'Fotos com GPS e marca temporal',
    da: 'Billeder med GPS og tidsstempel',
    sv: 'Foton med GPS och tidsstämpel',
    nb: 'Bilder med GPS og tidsstempel',
    ru: 'Фото с GPS и меткой времени',
  },
  client_verification: {
    it: 'Verifica indipendente del cliente',
    en: 'Independent client verification',
    de: 'Unabhängige Kundenverifikation',
    fr: 'Vérification indépendante du client',
    es: 'Verificación independiente del cliente',
    nl: 'Onafhankelijke klantverificatie',
    pt: 'Verificação independente do cliente',
    da: 'Uafhængig kundeverifikation',
    sv: 'Oberoende kundverifiering',
    nb: 'Uavhengig kundeverifisering',
    ru: 'Независимая проверка клиентом',
  },
  time_tracking: {
    it: 'Tracciamento ore',
    en: 'Time tracking',
    de: 'Zeiterfassung',
    fr: 'Suivi du temps',
    es: 'Seguimiento del tiempo',
    nl: 'Urenregistratie',
    pt: 'Controlo de horas',
    da: 'Tidsregistrering',
    sv: 'Tidsregistrering',
    nb: 'Tidsregistrering',
    ru: 'Учёт рабочего времени',
  },
  mobile_app: {
    it: 'App mobile Android/iOS',
    en: 'Mobile app Android/iOS',
    de: 'Mobile App Android/iOS',
    fr: 'Application mobile Android/iOS',
    es: 'App móvil Android/iOS',
    nl: 'Mobiele app Android/iOS',
    pt: 'App móvel Android/iOS',
    da: 'Mobilapp Android/iOS',
    sv: 'Mobilapp Android/iOS',
    nb: 'Mobilapp Android/iOS',
    ru: 'Мобильное приложение Android/iOS',
  },
  builtin_messaging: {
    it: 'Messaggistica interna',
    en: 'Built-in messaging',
    de: 'Integriertes Messaging',
    fr: 'Messagerie intégrée',
    es: 'Mensajería integrada',
    nl: 'Ingebouwde berichtenuitwisseling',
    pt: 'Mensagens integradas',
    da: 'Indbygget meddelelser',
    sv: 'Inbyggd meddelandetjänst',
    nb: 'Innebygd meldingstjeneste',
    ru: 'Встроенный чат',
  },
  payroll_export: {
    it: 'Export presenze/paghe',
    en: 'Payroll/attendance export',
    de: 'Lohn-/Anwesenheits-Export',
    fr: 'Export paie/présences',
    es: 'Exportación de asistencia/nómina',
    nl: 'Export aanwezigheid/loonadministratie',
    pt: 'Exportação de presenças/folha',
    da: 'Eksport af tilstedeværelse/løn',
    sv: 'Export av närvaro/lön',
    nb: 'Eksport av oppmøte/lønn',
    ru: 'Экспорт посещаемости/зарплат',
  },
  free_plan: {
    it: 'Piano gratuito',
    en: 'Free plan',
    de: 'Kostenloser Plan',
    fr: 'Plan gratuit',
    es: 'Plan gratuito',
    nl: 'Gratis abonnement',
    pt: 'Plano gratuito',
    da: 'Gratis plan',
    sv: 'Gratis plan',
    nb: 'Gratis plan',
    ru: 'Бесплатный тариф',
  },
  multi_site_jobs: {
    it: 'Gestione commesse multi-sito',
    en: 'Multi-site job management',
    de: 'Multi-Standort-Auftragsverwaltung',
    fr: 'Gestion de chantiers multi-sites',
    es: 'Gestión de obras multi-sitio',
    nl: 'Multi-locatie opdrachtbeheer',
    pt: 'Gestão de obras multi-local',
    da: 'Multi-site jobstyring',
    sv: 'Multi-site jobbhantering',
    nb: 'Multi-site jobbstyring',
    ru: 'Управление мультисайтовыми работами',
  },
  gdpr_geo_compliance: {
    it: 'Conformità GDPR geolocalizzazione',
    en: 'GDPR-compliant geolocation',
    de: 'DSGVO-konforme Geolokalisierung',
    fr: 'Géolocalisation conforme RGPD',
    es: 'Geolocalización conforme al RGPD',
    nl: 'AVG-conforme geolocatie',
    pt: 'Geolocalização em conformidade com RGPD',
    da: 'GDPR-kompatibel geolokation',
    sv: 'GDPR-kompatibel geolokalisering',
    nb: 'GDPR-kompatibel geolokasjon',
    ru: 'GDPR-совместимая геолокация',
  },
  auto_gps_notice_signed: {
    it: 'Informativa GPS automatica firmata',
    en: 'Auto GPS notice with digital signature',
    de: 'Auto GPS-Datenschutzhinweis mit Unterschrift',
    fr: 'Notice GPS automatique avec signature',
    es: 'Aviso GPS automático firmado',
    nl: 'Automatische GPS-mededeling met handtekening',
    pt: 'Aviso GPS automático assinado',
    da: 'Automatisk GPS-meddelelse med signatur',
    sv: 'Auto GPS-information med signatur',
    nb: 'Automatisk GPS-melding med signatur',
    ru: 'Авто GPS-уведомление с подписью',
  },
};

/** GeoTapp's feature vector, fixed across all competitor comparisons. */
export const GEOTAPP_FEATURES: Record<FeatureKey, boolean> = {
  gps_verified_at_site: true,
  sealed_report: true,
  geo_timestamped_photos: true,
  client_verification: true,
  time_tracking: true,
  mobile_app: true,
  builtin_messaging: true,
  payroll_export: true,
  free_plan: false, // GeoTapp ha trial 14gg, non free plan permanente
  multi_site_jobs: true,
  gdpr_geo_compliance: true,
  auto_gps_notice_signed: true,
};

export interface Competitor {
  id: string;
  name: string;
  homepage: string;
  /** Entry-plan pricing in EUR per seat per month (rough, for orientation). */
  pricingFromEur: number | null;
  /** Tagline cosa-è-questo-tool per locale. */
  tagline: LocalizedString;
  /** Feature vector aligned to FEATURE_KEYS. */
  features: Record<FeatureKey, boolean>;
}

/**
 * 7 competitor profiles. Data derived from public pricing pages + the existing
 * static /confronto/geotapp-vs-{competitor}/ pages.
 */
export const COMPETITORS: Competitor[] = [
  {
    id: 'connecteam',
    name: 'Connecteam',
    homepage: 'https://connecteam.com/',
    pricingFromEur: 29,
    tagline: {
      it: 'Comunicazione + HR + time tracking, all-in-one per il deskless worker. Forte sul mercato US.',
      en: 'All-in-one communication + HR + time tracking for the deskless workforce. Strong in the US.',
      de: 'Kommunikation + HR + Zeiterfassung für Außendienst-Teams. Starke US-Präsenz.',
    },
    features: {
      gps_verified_at_site: false,
      sealed_report: false,
      geo_timestamped_photos: false,
      client_verification: false,
      time_tracking: true,
      mobile_app: true,
      builtin_messaging: true,
      payroll_export: true,
      free_plan: true,
      multi_site_jobs: false,
      gdpr_geo_compliance: false,
      auto_gps_notice_signed: false,
    },
  },
  {
    id: 'hubstaff',
    name: 'Hubstaff',
    homepage: 'https://hubstaff.com/',
    pricingFromEur: 7,
    tagline: {
      it: 'Time tracking con screenshot e activity monitoring. Pensato per team remoti, non per field service.',
      en: 'Time tracking with screenshots and activity monitoring. Made for remote teams, not field service.',
      de: 'Zeiterfassung mit Screenshots und Aktivitätsüberwachung. Für Remote-Teams, nicht Außendienst.',
    },
    features: {
      gps_verified_at_site: false,
      sealed_report: false,
      geo_timestamped_photos: false,
      client_verification: false,
      time_tracking: true,
      mobile_app: true,
      builtin_messaging: false,
      payroll_export: true,
      free_plan: true,
      multi_site_jobs: false,
      gdpr_geo_compliance: false,
      auto_gps_notice_signed: false,
    },
  },
  {
    id: 'clockify',
    name: 'Clockify',
    homepage: 'https://clockify.me/',
    pricingFromEur: 4,
    tagline: {
      it: 'Time tracking gratuito illimitato. Ottimo per freelance e team office, povero per il campo.',
      en: 'Free unlimited time tracking. Great for freelancers and office teams, weak for field service.',
      de: 'Kostenlose unbegrenzte Zeiterfassung. Gut für Freelancer und Büroteams, schwach im Außendienst.',
    },
    features: {
      gps_verified_at_site: false,
      sealed_report: false,
      geo_timestamped_photos: false,
      client_verification: false,
      time_tracking: true,
      mobile_app: true,
      builtin_messaging: false,
      payroll_export: true,
      free_plan: true,
      multi_site_jobs: false,
      gdpr_geo_compliance: false,
      auto_gps_notice_signed: false,
    },
  },
  {
    id: 'jibble',
    name: 'Jibble',
    homepage: 'https://www.jibble.io/',
    pricingFromEur: 3,
    tagline: {
      it: 'Time tracking con riconoscimento facciale e GPS basic. Free plan generoso ma niente prove di lavoro svolto.',
      en: 'Time tracking with facial recognition and basic GPS. Generous free plan but no work proof.',
      de: 'Zeiterfassung mit Gesichtserkennung und GPS-Basics. Großzügiger Free Plan, kein Arbeitsnachweis.',
    },
    features: {
      gps_verified_at_site: false,
      sealed_report: false,
      geo_timestamped_photos: false,
      client_verification: false,
      time_tracking: true,
      mobile_app: true,
      builtin_messaging: false,
      payroll_export: true,
      free_plan: true,
      multi_site_jobs: false,
      gdpr_geo_compliance: false,
      auto_gps_notice_signed: false,
    },
  },
  {
    id: 'libemax',
    name: 'Libemax',
    homepage: 'https://www.libemax.com/',
    pricingFromEur: 12,
    tagline: {
      it: 'Software italiano per imprese di pulizie e facility. Forte sulla parte gestionale, debole sulla prova del lavoro svolto.',
      en: 'Italian software for cleaning and facility companies. Strong on management, weak on work proof.',
      de: 'Italienische Software für Reinigung und Facility. Stark in Verwaltung, schwach beim Arbeitsnachweis.',
    },
    features: {
      gps_verified_at_site: true, // ha GPS ma non sealed/timestamped come GeoTapp
      sealed_report: false,
      geo_timestamped_photos: false,
      client_verification: false,
      time_tracking: true,
      mobile_app: true,
      builtin_messaging: false,
      payroll_export: true,
      free_plan: false,
      multi_site_jobs: true,
      gdpr_geo_compliance: false,
      auto_gps_notice_signed: false,
    },
  },
  {
    id: 'blink',
    name: 'Blink',
    homepage: 'https://www.joinblink.com/',
    pricingFromEur: 4,
    tagline: {
      it: 'App di comunicazione per deskless workers, focus su engagement. Niente prove di lavoro svolto.',
      en: 'Communication app for deskless workers, focus on engagement. No work proof.',
      de: 'Kommunikations-App für Außendienst, Fokus auf Engagement. Kein Arbeitsnachweis.',
    },
    features: {
      gps_verified_at_site: false,
      sealed_report: false,
      geo_timestamped_photos: false,
      client_verification: false,
      time_tracking: false,
      mobile_app: true,
      builtin_messaging: true,
      payroll_export: false,
      free_plan: false,
      multi_site_jobs: false,
      gdpr_geo_compliance: false,
      auto_gps_notice_signed: false,
    },
  },
  {
    id: 'nobadge',
    name: 'NoBadge',
    homepage: 'https://nobadge.com/',
    pricingFromEur: 5,
    tagline: {
      it: 'Timbrature digitali italiane via QR/NFC. Semplice e leggero, ma niente prove fotografiche o sigillo.',
      en: 'Italian digital clock-in via QR/NFC. Simple and lightweight, no photo proof or seal.',
      de: 'Italienische digitale Stempelung via QR/NFC. Einfach und schlank, kein Foto-Nachweis.',
    },
    features: {
      gps_verified_at_site: true,
      sealed_report: false,
      geo_timestamped_photos: false,
      client_verification: false,
      time_tracking: true,
      mobile_app: true,
      builtin_messaging: false,
      payroll_export: true,
      free_plan: false,
      multi_site_jobs: false,
      gdpr_geo_compliance: false,
      auto_gps_notice_signed: false,
    },
  },
];

/** Helper: prendi il label feature nella locale richiesta con fallback EN/IT. */
export function getFeatureLabel(key: FeatureKey, locale: string): string {
  const lo = locale as keyof LocalizedString;
  const labels = FEATURE_LABELS[key];
  return labels[lo] ?? labels.en ?? labels.it ?? key;
}

/** Helper: tagline competitor in locale con fallback EN/IT. */
export function getCompetitorTagline(c: Competitor, locale: string): string {
  const lo = locale as keyof LocalizedString;
  return c.tagline[lo] ?? c.tagline.en ?? c.tagline.it ?? '';
}
