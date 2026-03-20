import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for Electricians & Installers | GeoTapp — Certify Every Job',
    description: 'GeoTapp is the field service app for electricians, plumbers and installers that certifies every job: GPS-verified reports and photo evidence. Try free.',
  },
  hero: {
    badge: 'Software for Electricians, Plumbers and Field Maintenance Teams',
    h1_line1: 'Field maintenance under control:',
    h1_line2: 'jobs, timesheets and proof — all in one place',
    subtitle: 'GeoTapp connects Flow + TimeTracker for maintenance contractors working between vans, sites and end clients. Android and iOS apps support the technician in the field; the office sees the job, times, photo evidence and notes without chasing anyone.',
    cta_primary: 'Request a Demo',
    cta_note: 'No commitment. Response within 12 business hours.',
  },
  pain: {
    title: 'The problem you already know',
    items: [
      {
        title: 'Disputes over hours and work done',
        desc: 'The client disputes the attendance time. The engineer has no proof. The argument drags on for weeks and costs more than the job itself.',
      },
      {
        title: 'Office chasing the field',
        desc: 'The manager calls technicians to find out where they are, what they\'ve done, when they\'ll finish. Every call interrupts both sides.',
      },
      {
        title: 'Incomplete or lost job sheets',
        desc: 'Paper sheets, WhatsApp, emails: data arrives incomplete, late or not at all. Reconstructing the final account is a separate job.',
      },
    ],
  },
  workflow: {
    title: 'How it works in three steps',
    subtitle: 'From the van to the office — without phone calls.',
    steps: [
      {
        title: 'Technician clocks in on site',
        desc: 'With GeoTapp TimeTracker they record start, finish, photos and notes from their smartphone. GPS verified, GDPR compliant.',
      },
      {
        title: 'Office sees everything in real time',
        desc: 'Flow receives the data instantly. The manager sees job status, progress, assigned technician and photo evidence without calling.',
      },
      {
        title: 'The report is already ready',
        desc: 'At the end of the job the work report is already structured with real data. No manual reconstruction. No dispute without an answer.',
      },
    ],
  },
  features: {
    title: 'What you get',
    items: [
      {
        title: 'Verifiable GPS time tracking',
        desc: 'Every clock-in and clock-out is linked to location, timestamp and job. Defensible to clients and inspectors alike.',
      },
      {
        title: 'Photo evidence from the field',
        desc: 'The technician photographs directly from the app. Images linked to the job with date and time. No room for dispute.',
      },
      {
        title: 'Payroll export',
        desc: 'Export monthly attendance in formats compatible with Sage, Xero and BrightHR. Payroll processing becomes a 10-minute task.',
      },
    ],
  },
  testimonial: {
    quote: 'We used to spend hours collecting job sheets from the field. Now the report is ready by the time the engineer gets back to the van.',
    author: 'James H.',
    role: 'Operations Manager, M&E contractor',
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'What people ask us most before getting started.',
    items: [
      {
        q: 'Is GeoTapp suitable for electricians and plumbers?',
        a: 'Yes. GeoTapp helps electricians, plumbers and maintenance contractors manage jobs, timesheets, attendance and field evidence between site and office.',
      },
      {
        q: 'Can I use GeoTapp for job reports and photo evidence?',
        a: 'Yes. TimeTracker collects photos, notes and verifiable timestamps in the field, while Flow links everything to the job record and operational history.',
      },
      {
        q: 'Does GeoTapp help reduce disputes over hours and work done?',
        a: 'That\'s one of the primary use cases: times, location, notes and photo evidence make it far easier to reconstruct and defend what was actually done on site.',
      },
    ],
  },
  cta: {
    title: 'Stop chasing the field.',
    subtitle: 'GeoTapp Flow and TimeTracker give your company the operational control you actually need.',
    primary: 'Request a Demo',
    secondary: 'View Pricing',
  },
  schema_sector_name: 'Electricians and Plumbers',
};

export default content;
