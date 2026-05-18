import type { AppLocale } from '@/lib/i18n/config';

export interface RegionalFaqItem {
  q: string;
  a: string;
}

export const REGIONAL_FAQ_TITLE: Partial<Record<AppLocale, string>> = {
  'en-us': 'Regional compliance',
  'en-gb': 'Regional compliance',
  'en-au': 'Regional compliance',
  'en-ca': 'Regional compliance',
  'en-ie': 'Regional compliance',
};

export const REGIONAL_FAQ: Partial<Record<AppLocale, RegionalFaqItem[]>> = {
  'en-us': [
    {
      q: 'Does GeoTapp produce NECA-compatible job-costing records?',
      a: 'Yes. Per-job hours, per-job labour cost and material allocation feed straight into NECA-style cost codes. The export aligns with prevailing-wage requirements on federal contracts.',
    },
    {
      q: 'OSHA 1910.331-335 electrical-safety training logs?',
      a: 'GeoTapp records qualified-person certification, lockout/tagout assignments and arc-flash PPE acknowledgements. The training profile travels with the worker across job sites.',
    },
    {
      q: 'State journeyman/master licence renewal tracking?',
      a: 'The worker profile holds licence-issuing state, expiry date and CEU completion. The platform blocks clock-in 30 days before expiry until the renewed credential is uploaded.',
    },
  ],
  'en-gb': [
    {
      q: '18th Edition (BS 7671) qualification records?',
      a: 'GeoTapp\'s worker profile tracks the City and Guilds 2382, ECS card category and Part P scheme registration. Expiry dates trigger the renewal workflow before any clock-in is blocked.',
    },
    {
      q: 'Electrical Safety Council (ESC) audit support?',
      a: 'The platform produces the audit pack ESC inspectors request: workforce qualifications, job-level inspection certificates, periodic-inspection schedules and tested-equipment registers, all per site.',
    },
    {
      q: 'CDM 2015 principal contractor evidence for electrical packages?',
      a: 'GeoTapp captures the F10 notification association, site induction, daily clock-in and Construction Phase Plan acknowledgements per worker, satisfying HSE\'s CDM duty-holder audit expectations.',
    },
  ],
  'en-au': [
    {
      q: 'Electrical Trades Award and GPS roster compliance?',
      a: 'The platform applies ETA MA000025 classifications, on-call allowances and after-hours penalty rates, producing the seven-year audit record reg 3.31 Fair Work Regulations 2009 requires.',
    },
    {
      q: 'AS/NZS 3000 wiring rules competency tracking?',
      a: 'Worker profiles hold the state electrical-licence number, the unrestricted/restricted scope and the CPD record. Expiry triggers a 30-day renewal workflow.',
    },
    {
      q: 'ESO state-by-state safety reporting?',
      a: 'GeoTapp consolidates Energy Safe Victoria, ESO QLD, EnergySafety WA and SafeWork NSW reporting from one workforce data source, with state-specific incident notification timelines built in.',
    },
  ],
  'en-ca': [
    {
      q: 'CSA Z462 electrical-safety training evidence?',
      a: 'Worker profile stores the CSA Z462 certification, hazard-risk-category training and refresher dates. Records satisfy the provincial OHS regulators\' arc-flash audit expectations.',
    },
    {
      q: 'Provincial Master Electrician/Apprentice licensing tracker?',
      a: 'Per-worker the platform tracks province of issue, certificate of qualification, journeyperson ratio and apprentice-supervision compliance under each province\'s Apprenticeship Act.',
    },
    {
      q: 'WSIB Schedule 1 reporting for electrical contractors?',
      a: 'GeoTapp produces the Form 7 evidence, the workplace orientation log and the CSA Z462 training record needed for WSIB premium-rate appeals under the Rate Framework.',
    },
  ],
  'en-ie': [
    {
      q: 'Safe Electric registration evidence?',
      a: 'The platform tracks Safe Electric category, valid PSA assessment, ICC reporting and the per-installation Cert of Compliance trail. CER audits become a desk exercise.',
    },
    {
      q: 'RECI/ECSSA scheme audit pack?',
      a: 'Worker qualification, periodic-inspection schedule and tested-equipment register, exportable per scheme audit cycle. Supports the registered electrical contractor\'s annual review.',
    },
    {
      q: 'Construction SEO electrical-work rates?',
      a: 'SEO SI 234/2019 craft-category rates and travel-time payments are computed per worker per shift, reconciled monthly to payroll.',
    },
  ],
};
