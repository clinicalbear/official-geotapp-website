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
      q: 'Dienste und Stunden nach dem Tarifvertrag Sicherheitsdienstleistungen?',
      a: 'Stunden je Mitarbeiter und Objekt, Nacht- und Feiertagszuschläge und Aufbewahrung nach §16 ArbZG, mit Schichtabdeckung, die bei jeder Stempelung aktualisiert wird.',
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
      a: 'Heures par agent et par site, majorations de nuit et jours fériés et conservation des données, avec couverture des vacations mise à jour à chaque pointage.',
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
      q: 'Diensten en uren volgens de CAO Particuliere Beveiliging?',
      a: 'Uren per beveiliger en per object, nacht- en feestdagtoeslagen en de bewaartermijn uit de Arbeidstijdenwet, met dekking van diensten bijgewerkt bij elke in- of uitklokactie.',
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
