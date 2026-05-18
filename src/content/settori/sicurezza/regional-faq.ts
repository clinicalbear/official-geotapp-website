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
