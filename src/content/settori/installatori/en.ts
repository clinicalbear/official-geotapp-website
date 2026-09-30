import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'GeoTapp for Electricians & Installers - Seal Every Job',
    description: 'GeoTapp is the field service app for electricians, plumbers and installers: job reports with position and photos, sealed so that any change is detectable. Try free for 14 days.',
  },
  hero: {
    badge: 'Software for Electricians, Plumbers and Field Maintenance Teams',
    h1_line1: 'Field maintenance, organised:',
    h1_line2: 'jobs, timesheets and proof, all in one place',
    subtitle: 'GeoTapp connects Flow + TimeTracker for maintenance contractors working between vans, sites and end clients. Android and iOS apps support the technician in the field; the office sees the job, times, photo evidence and notes without chasing anyone.',
    cta_primary: 'Try it free for 14 days',
    cta_note: 'The trial commits you to nothing. No credit card.',
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
    subtitle: 'From the van to the office, without phone calls.',
    steps: [
      {
        title: 'Technician clocks in on site',
        desc: 'With GeoTapp TimeTracker they record start, breaks, finish, photos and notes from their smartphone. The position is taken only when they clock in, as the GDPR calls for.',
      },
      {
        title: 'Office sees each update as it arrives',
        desc: 'Flow receives the data as soon as the phone has signal. The manager sees job status, progress, assigned technician and photo evidence without calling.',
      },
      {
        title: 'The report is already ready',
        desc: 'At the end of the job the work report is already structured with the recorded data. No manual reconstruction, and an answer ready when a client asks.',
      },
    ],
  },
  differenza: {
    title: 'App for installers: time tracking or verifiable proof of work?',
    subtitle: 'Most apps record the clock-in. GeoTapp produces verifiable proof.',
    rows: [
      {
        label: 'What it records',
        competitor: 'Clock-in and clock-out time',
        geotapp: 'Time + position at clock-in + photos + work completed',
      },
      {
        label: 'Who can verify',
        competitor: 'Your office only',
        geotapp: 'You, the client, a third party, independently',
      },
      {
        label: 'In case of dispute',
        competitor: 'Just your word',
        geotapp: 'Sealed report, any change is detectable',
      },
      {
        label: 'Job report',
        competitor: 'Manual or absent',
        geotapp: 'Auto-generated with GPS and photos',
      },
      {
        label: 'GDPR compliance',
        competitor: 'Often to verify',
        geotapp: 'Built to stay within GDPR, forms included',
      },
    ],
  },

  prima_dopo: {
    title: 'What happens now. What happens with GeoTapp.',
    prima: [
      'The client disputes the time or the work completed.',
      'The engineer says "I did it". The client says "it doesn\'t show".',
      'You have nothing to prove it. The argument drags on for days.',
      'Sometimes you lose the payment. You always lose time.',
    ],
    dopo: [
      'The client disputes the time or the work completed.',
      'You open the report: photos, GPS, time, seal.',
      'You send it, and the client can verify it alone.',
      'You have proof to show. The engineer has something in hand too.',
    ],
  },

  scenario: {
    title: 'A typical case',
    body: 'The client disputes the end time of a job and requests a discount on the invoice. With GeoTapp you open the job report: photo of the completed installation, clock-in times and positions, duration calculated automatically, all generated from the technician\'s smartphone at the time of work.',
    resolution: 'Instead of one word against another, there is a document the client can check alone.',
  },

  features: {
    title: 'App for electricians and installers: GPS job reports and photo evidence.',
    items: [
      {
        title: 'GPS time tracking at each clock-in',
        desc: 'Every entry, break and exit is linked to position, time and job. Something to show clients or inspectors when it matters.',
      },
      {
        title: 'Sealed photo evidence',
        desc: 'The technician photographs directly from the app. Every image is linked to the job with GPS and timestamp, included in the sealed report, and any later change is detectable.',
      },
      {
        title: 'Payroll export',
        desc: 'Export the month\'s attendance to Excel or CSV, ready for your payroll provider or accountant.',
      },
      {
        title: 'Multi-site job management',
        desc: 'Assign jobs, follow the progress of every site and get an alert if a shift is left open.',
      },
      {
        title: 'Automatic digital job sheets',
        desc: 'At the end of the job the report is ready: hours, photos and notes. No paper, no calls. The office sends it to the client from Flow with one click.',
      },
      {
        title: 'Your engineers are protected',
        desc: 'A verifiable report gives the engineer something in hand against unfounded accusations. Good work is shown by the data. No grey areas between field and office.',
      },
    ],
  },

  cta_mid: {
    title: 'Want to see how it works on a real job?',
    body: 'Try it on a real job, from opening the job to the report the client receives: 14 days free, no credit card.',
    cta: 'Try it free for 14 days',
  },

  trust: {
    title: 'If one of our reports is changed, it shows. Even if we are the ones changing it.',
    body: 'GeoTapp reports are generated by the system at the moment of the job. Once a report is sealed, correcting a time or moving a photo breaks the seal, and the verification flags it. The client or an adviser who receives it can check it alone.',
    badge: 'Verifiable by anyone, without access to your account',
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
        a: 'Yes. TimeTracker collects photos, notes and timestamps in the field, while Flow links everything to the job record and operational history.',
      },
      {
        q: 'Does GeoTapp help reduce disputes over hours and work done?',
        a: 'That\'s one of the primary use cases: times, position, notes and photo evidence make the job easier to reconstruct and easier to show.',
      },
    ],
  },
  cta: {
    title: 'Stop chasing the field.',
    subtitle: 'GeoTapp Flow and TimeTracker give you the clock-ins, photos and reports without the phone calls.',
    primary: 'Try it free for 14 days',
    secondary: 'View Pricing',
  },
  pricing_hint: {
    label: 'TimeTracker seats from',
    per: 'per operator per month, plus a Flow plan',
    note: '14-day free trial',
  },
  schema_sector_name: 'Electricians and Plumbers',
};

export default content;
