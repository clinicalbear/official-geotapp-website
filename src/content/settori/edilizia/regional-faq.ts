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
      q: 'Does GeoTapp satisfy Davis-Bacon prevailing wage record-keeping?',
      a: 'Yes. Davis-Bacon requires weekly certified payrolls (WH-347) tied to actual hours worked. GeoTapp\'s GPS clock-in produces the contemporaneous time records that feed the certified payroll, with the geofence proving on-site time per worker per day.',
    },
    {
      q: 'How does GeoTapp handle OSHA Form 300/300A/301 reporting?',
      a: 'GeoTapp\'s incident-log module captures the workforce presence, training and toolbox-talk attendance that feed Form 300 entries. The export aligns with the OSHA recordkeeping rule 29 CFR 1904 and the annual 300A summary posting requirement.',
    },
    {
      q: 'Is GeoTapp compatible with FLSA §207 overtime calculation?',
      a: 'Yes. The platform computes weekly hours per worker and flags any week above 40, producing the overtime liability automatically. State-specific daily overtime (e.g. California §510) and seven-day rules (Texas, NY) are also supported via per-state rule sets.',
    },
  ],
  'en-gb': [
    {
      q: 'Does GeoTapp satisfy CIS subcontractor verification record-keeping?',
      a: 'Yes. GeoTapp\'s subcontractor model captures right-to-work checks, UTR/PAYE status and on-site time per subcontractor worker, producing the audit pack HMRC requests during a CIS enquiry under SI 2005/2045.',
    },
    {
      q: 'How does GeoTapp meet HSE Section 2 HSWA recordkeeping?',
      a: 'Section 2 HSWA 1974 demands risk assessments and site visit documentation. GeoTapp\'s GPS entry/exit times tie to permit-to-work issuance and toolbox-talk attendance, producing the contemporaneous safe-system-of-work evidence HSE inspectors expect.',
    },
    {
      q: 'WTR 1998 reg.9 records: what does GeoTapp generate automatically?',
      a: 'Weekly working hours per worker, 48-hour rolling four-month average, opt-out register, daily rest, weekly rest and break compliance. All exportable in the form HMRC and HSE accept without parallel data wrangling.',
    },
  ],
  'en-au': [
    {
      q: 'How does GeoTapp align with the Building and Construction General On-site Award?',
      a: 'The platform applies BCGOSA classifications and penalty bands at the roster level, computes industry-allowance entitlements (tool, travel, follow-the-job) and produces the seven-year audit record reg 3.31 Fair Work Regulations 2009 requires.',
    },
    {
      q: 'Does GeoTapp capture WHS Act site-visit logs?',
      a: 'Yes. Entry, exit, supervisor approval, SWMS acknowledgement and toolbox-talk attendance per site, per worker, per day. Compatible with SafeWork notifiable-incident reporting timelines under Model WHS Regulations.',
    },
    {
      q: 'Same Job Same Pay compliance for labour-hire on construction projects?',
      a: 'GeoTapp\'s multi-organisation model evidences host and labour-hire rates side by side, satisfying the Closing Loopholes Act 2023 Part 2-7A regulated-labour-hire arrangement order regime.',
    },
  ],
  'en-ca': [
    {
      q: 'Canada Labour Code Part II safety records: what GeoTapp captures?',
      a: 'Hazard reporting, refusal-to-work logs, joint health and safety committee attendance and site-specific orientation records. The package supports the federally regulated employer\'s section 124 due-diligence file.',
    },
    {
      q: 'Ontario WSIB Form 7: how does GeoTapp prepare the data?',
      a: 'The incident geofence and the worker profile produce the location, time, role and orientation evidence required for Form 7 within the three-day window. Linked to OHSA section 51 critical-injury notification.',
    },
    {
      q: 'Bilingual CNESST audit in Québec construction?',
      a: 'GeoTapp\'s bilingual French/English interface, with Charter of the French Language compliance built in, produces the CNESST audit pack in the inspector\'s preferred language without parallel records.',
    },
  ],
  'en-ie': [
    {
      q: 'Construction SEO SI 234/2019: does GeoTapp produce the records?',
      a: 'Yes. Hourly rate by craft category, travel-time payment trigger, CWPS pension contributions and on-site time per worker, all reconciled monthly to the WRC inspector\'s expected audit pack.',
    },
    {
      q: 'WRC inspection: how fast can you produce records?',
      a: 'The 14-category WRC audit pack (OWTA, EMPA, NMW, payment of wages, family leave, etc.) exports per worker, per year, in a single PDF. Typically produced within four hours of an inspector\'s request.',
    },
    {
      q: 'Subcontractor-chain SEO compliance for principal contractors?',
      a: 'Subcontractor workers clock in on the principal\'s tenant, with SEO rate visible and a monthly reconciliation produced before the WRC inspection. Section 4 Industrial Relations (Amendment) Act 2015 evidence is on file.',
    },
  ],
};
