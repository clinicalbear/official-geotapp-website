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
      q: 'UPC/IPC-compliant inspection records per job?',
      a: 'GeoTapp logs jurisdiction (UPC or IPC), inspector name, inspection date and pass/fail per fixture. The trail supports municipal permit reconciliation.',
    },
    {
      q: 'Backflow-prevention tester certification expiry?',
      a: 'The worker profile holds the ASSE/IAPMO tester ID and the annual recertification date. Clock-in is blocked on expiry until evidence is uploaded.',
    },
    {
      q: 'Lead and Copper Rule compliance for water-service work?',
      a: 'Material-batch traceability per job site, alongside the worker\'s lead-safe-work-practice certification under EPA\'s RRP rule where applicable.',
    },
  ],
  'en-gb': [
    {
      q: 'WRAS Approval and Approved Plumber scheme tracking?',
      a: 'Per-worker WRAS Approved Plumber registration and CIPHE membership records, exportable on local-authority Water Fittings Regulation audit.',
    },
    {
      q: 'Gas Safe registration for combined plumbing/gas work?',
      a: 'Where plumbing crosses into gas, Gas Safe ID and appliance categories are tracked per worker, with the renewal workflow at 60/30/14 days.',
    },
    {
      q: 'Legionella risk-assessment evidence?',
      a: 'L8 ACOP-compatible risk assessment template, with workforce training (City and Guilds 6035 etc.) tied to the worker profile, satisfying HSG274 audit expectations.',
    },
  ],
  'en-au': [
    {
      q: 'Plumbing Code of Australia AS/NZS 3500 compliance trail?',
      a: 'Per-job site inspection record aligned to AS/NZS 3500 series, with the licensed plumber\'s number and the supervising-licence chain captured per shift.',
    },
    {
      q: 'State plumbing-licence renewal tracking?',
      a: 'State (PIC NSW, VBA, QBCC, BSA) plumbing licence number, scope of work and expiry date, with 30-day renewal workflow.',
    },
    {
      q: 'WHS site-visit logs for plumbing on construction sites?',
      a: 'Entry, exit, SWMS acknowledgement and confined-space-entry permit per worker, satisfying Safe Work Australia model WHS Regulations audit.',
    },
  ],
  'en-ca': [
    {
      q: 'National Plumbing Code of Canada compliance per job?',
      a: 'Job-level inspection records aligned to NPCC and the provincial adoption (Ontario Building Code Plumbing, BC Plumbing Code, etc.). Workforce qualifications stored per worker.',
    },
    {
      q: 'Trade certification (Red Seal Plumber 306A) tracking?',
      a: 'Worker profile holds the province of certification, Red Seal endorsement and continuing-education credits, with expiry-driven workflow.',
    },
    {
      q: 'Cross-connection control: backflow-tester certification?',
      a: 'Annual recertification dates per worker, with the municipal water-utility audit pack produced on request.',
    },
  ],
  'en-ie': [
    {
      q: 'RGI plumbing/gas dual-qualification tracking?',
      a: 'Where work overlaps RGI scope, the gas-safety Register ID is tracked alongside the plumber qualification, with appliance categories per worker.',
    },
    {
      q: 'WRC and Health and Safety Authority audit support?',
      a: 'Combined records from OWTA 1997 hours, Construction SEO rates (SI 234/2019) where applicable, and HSA notifiable-incident logs.',
    },
    {
      q: 'Water Services Act 2007 compliance evidence?',
      a: 'Per-job-site water-service work record, with the worker qualification trail and the supervising-plumber chain captured per shift.',
    },
  ],
};
