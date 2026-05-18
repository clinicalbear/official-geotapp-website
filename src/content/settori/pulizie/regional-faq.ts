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
      q: 'FLSA tip-credit / non-tip cleaning-staff records?',
      a: 'Per-worker hours per week, dual-jobs distinction (tipped vs non-tipped) where applicable, and the seven-year retention window required by federal and state law.',
    },
    {
      q: 'Janitorial Industry Wage Order (CA, NY, IL) compliance?',
      a: 'State-specific records: California IWC Wage Order 5 / 10, New York Hospitality Wage Order, Illinois One-Day-Rest-In-Seven Act, all captured per shift.',
    },
    {
      q: 'OSHA 1910 hazard-communication trail per worker?',
      a: 'Per-worker HazCom 2012 training records, SDS access acknowledgements and PPE-issuance log tied to each site assignment.',
    },
  ],
  'en-gb': [
    {
      q: 'NMW Act records for hourly cleaning staff?',
      a: 'Per-worker contemporaneous clock-in, weekly hours, deductions, accommodation offset (where applicable) and the six-year retention floor preferred over the three-year statutory minimum.',
    },
    {
      q: 'UK GDPR + ICO Employment Practices Code compliance?',
      a: 'Privacy notice in plain English, Article 6(1)(f) legitimate-interests assessment, DPIA per deployment and Article 15 subject-access response within ten working days.',
    },
    {
      q: 'Procurement Act 2023 living-wage evidence?',
      a: 'For public-sector and large-private-sector contracts, the platform produces the per-worker living-wage evidence tied to the Procurement Act 2023 transparency obligations.',
    },
  ],
  'en-au': [
    {
      q: 'Cleaning Services Award MA000022 detail compliance?',
      a: 'Per-worker classification, penalty rates, casual loading interaction, broken-shift allowance and minimum-engagement compliance, all per shift.',
    },
    {
      q: 'Fair Work Information Statement and Casual EIS issuance?',
      a: 'Statement issuance at start, at six months and at twelve months for casuals, with electronic acknowledgement log per worker.',
    },
    {
      q: 'WHS Act site-safety for contract cleaning?',
      a: 'Per-site SWMS acknowledgement, COSHH-equivalent hazardous-substance training and PPE-issuance log per worker.',
    },
  ],
  'en-ca': [
    {
      q: 'Provincial ESA records for cleaning per province?',
      a: 'Per-province ESA records: Ontario s.15, BC s.28, Quebec LSA RLRQ N-1.1, Alberta ECS regulations, all with the per-province retention window.',
    },
    {
      q: 'PIPEDA/provincial PIPA notice and consent for workforce monitoring?',
      a: 'Privacy notice, lawful-basis assessment and per-worker access workflow under PIPEDA or applicable provincial PIPA (BC, AB, QC Law 25).',
    },
    {
      q: 'Living-wage compliance for federal-contractor cleaning?',
      a: 'Per-worker hours-to-wage reconciliation feeding the federal-contractor Fair Wages and Hours of Labour Act compliance file.',
    },
  ],
  'en-ie': [
    {
      q: 'Contract Cleaning ERO compliance?',
      a: 'Per-worker hourly rate against the Contract Cleaning ERO, sunday and public-holiday premium computation, and OWTA s.18C banded-hours record.',
    },
    {
      q: 'WRC inspection pack for cleaning sector?',
      a: 'Combined OWTA hours, EMPA five-day statements, Payment of Wages payslips and family-leave records in the inspector\'s preferred format.',
    },
    {
      q: 'Statutory Sick Pay 2024 calculation per cleaning worker?',
      a: 'Sick Leave Act 2022 SSP days, qualifying-service evidence, daily-rate computation and per-worker SSP take-up history.',
    },
  ],
};
