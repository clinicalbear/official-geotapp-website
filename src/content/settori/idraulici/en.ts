import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    // Riscritti 14/07/2026: il vecchio title ripeteva "plumb" due volte ed era l'eco
    // letterale della query (pos 8,2 con 86 impressioni e ZERO click: a quella posizione
    // il problema non e' il ranking, e' che lo snippet sembra generato da una macchina).
    // La vecchia description era 170c: Google tagliava la promessa a meta' frase.
    title: 'GPS App for Plumbers: Prove Every Job You Did | GeoTapp',
    description: 'Your engineer says the job is done. The client says nobody showed up. A clock-in with position and a photo report give you something to show.',
  },
  hero: {
    badge: 'App for Plumbers, HVAC Technicians and Heating Engineers',
    h1_line1: 'App for plumbers and HVAC technicians:',
    h1_line2: 'GPS job reports, photo evidence and fewer disputes.',
    subtitle: 'GeoTapp records every plumbing and heating job with GPS, photos and recorded times. Client disputes the work? Show them the report instead of arguing it out.',
    cta_primary: 'Try it free for 14 days',
    cta_note: 'The trial commits you to nothing. No credit card.',
  },
  pain: {
    title: 'The problem every plumbing business knows',
    items: [
      {
        title: 'Client disputes the job or the materials used',
        desc: 'They say the repair wasn\'t done or the materials were different. Without verifiable proof, every dispute becomes word against word.',
      },
      {
        title: 'No documentation of the system after the job',
        desc: 'The engineer finished the work, but there\'s no photo record or technical note. If a fault occurs later, reconstructing what was done becomes impossible.',
      },
      {
        title: 'Emergency call-outs are impossible to document',
        desc: 'Emergency jobs are the hardest to document. The engineer rushes out, works without paperwork, and then there\'s nothing to show the client.',
      },
    ],
  },
  workflow: {
    title: 'How it works in three steps',
    subtitle: 'From the job to the office, without phone calls.',
    steps: [
      {
        title: 'Engineer records the job on site',
        desc: 'With GeoTapp TimeTracker they clock in, take breaks and clock out with their position recorded, photograph the plumbing or heating system and add technical notes from their smartphone.',
      },
      {
        title: 'Office sees each update as it arrives',
        desc: 'GeoTapp Flow receives the data as soon as the phone has signal. The manager sees job status, assigned engineer, progress and photo evidence without calling.',
      },
      {
        title: 'The job report is your proof',
        desc: 'At the end of the job the system generates a sealed report: position and time, system photos, materials used, technical notes. Any change is detectable, and the client can verify it independently.',
      },
    ],
  },
  differenza: {
    title: 'App for plumbers: time recording or verifiable proof of work?',
    subtitle: 'Most apps record the clock-in. GeoTapp produces verifiable proof.',
    rows: [
      {
        label: 'What it records',
        competitor: 'Clock-in and clock-out time',
        geotapp: 'Time + position at clock-in + system photos + materials and notes',
      },
      {
        label: 'In case of dispute',
        competitor: 'Just your word',
        geotapp: 'Sealed report, any change is detectable',
      },
      {
        label: 'Job documentation',
        competitor: 'Manual or absent',
        geotapp: 'Auto-generated with GPS and photos',
      },
      {
        label: 'Who can verify',
        competitor: 'Your office only',
        geotapp: 'You, the client, a third party',
      },
      {
        label: 'GDPR compliance',
        competitor: 'Often to verify',
        geotapp: 'Built to stay within GDPR, forms included',
      },
    ],
  },
  prima_dopo: {
    title: 'Before GeoTapp. After GeoTapp.',
    prima: [
      'Client disputes that the repair was completed.',
      'You have no photos or verifiable timestamps.',
      'The argument goes on for weeks. You risk not being paid.',
      'The engineer has nothing to defend themselves with.',
    ],
    dopo: [
      'Client disputes that the repair was completed.',
      'You open the report: photos of the system, time, position, technical notes.',
      'You send it, and the client can verify it alone.',
      'You have proof to show. The engineer has something in hand too.',
    ],
  },
  scenario: {
    title: 'A typical case',
    body: 'A client disputes an emergency heating repair and refuses to pay, claiming the work was not completed. With GeoTapp you open the job report: before and after photos of the system, arrival and departure times with position, technical notes on parts replaced, all generated automatically from the engineer\'s smartphone on site.',
    resolution: 'Instead of one word against another, there is a document the client can check alone.',
  },
  features: {
    title: 'App for plumbers and HVAC technicians: what you get with GeoTapp.',
    items: [
      {
        title: 'GPS time tracking at each clock-in',
        desc: 'Every arrival, break and departure is recorded with position, timestamp and job reference. Something to show clients when it matters.',
      },
      {
        title: 'Sealed plumbing and heating system photos',
        desc: 'The engineer photographs before and after the job. Every image is linked to GPS and timestamp, and any later change is detectable.',
      },
      {
        title: 'Automatic digital job reports',
        desc: 'At the end of the job the report is ready: hours, photos, technical notes and parts. The office sends it to the client from Flow with one click.',
      },
      {
        title: 'Emergency and scheduled maintenance management',
        desc: 'Manage both emergency call-outs and planned maintenance from the same screen. Every job has its own record and history.',
      },
      {
        title: 'Payroll export',
        desc: 'Export the month\'s attendance to Excel or CSV, ready for your payroll provider or accountant. Payroll processing becomes a quick task.',
      },
      {
        title: 'Your plumbers are protected',
        desc: 'A verifiable report gives the engineer something in hand against unfounded claims about work not done or materials not used.',
      },
    ],
  },
  cta_mid: {
    title: 'Want to see how it works on a real plumbing job?',
    body: 'Try it on a real job, from opening the job to the report the client receives: 14 days free, no credit card.',
    cta: 'Try it free for 14 days',
  },
  trust: {
    title: 'If a report is changed, it shows. Even if you or we are the ones changing it.',
    body: 'GeoTapp reports are generated by the system at the moment of the job. Once a report is sealed, correcting a time or moving a photo breaks the seal, and the verification flags it.',
    badge: 'Verifiable by anyone, without access to your account',
  },
  testimonial: {
    quote: 'I used to spend hours explaining jobs to clients. Now I send the report instead of arguing it out.',
    author: 'Robert C.',
    role: 'Owner, plumbing and heating services',
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'What plumbers and HVAC technicians ask us most before getting started.',
    items: [
      {
        q: 'Does GeoTapp do GPS time tracking for plumbers?',
        a: 'Yes. Plumbers and heating engineers clock in and out from the field with a single tap, and each entry is stamped with a GPS position and the time. The office gets exact hours per job and per site without chasing anyone for a timesheet, and the same data feeds straight into the sealed job report.',
      },
      {
        q: 'Is GeoTapp suitable as an app for plumbers and HVAC technicians?',
        a: 'Yes. GeoTapp is used by plumbers and heating engineers to manage jobs, timesheets, attendance and photo evidence of plumbing and heating systems. It works for emergency call-outs and planned maintenance alike.',
      },
      {
        q: 'Can I use GeoTapp to document plumbing and heating jobs?',
        a: 'Yes. The engineer photographs before and after the job. Every image is linked to GPS, timestamp and job reference, and is included in the sealed report.',
      },
      {
        q: 'Does GeoTapp handle emergency call-outs and scheduled maintenance?',
        a: 'Yes. Every job type, emergency, maintenance, commissioning, has its own job record in GeoTapp. The full history of every system is always available with all photo evidence.',
      },
      {
        q: 'Does GeoTapp track the engineers\' location during the day?',
        a: 'No. The position is recorded only when the engineer clocks in (start, break, finish) or takes a proof photo. Nothing is recorded automatically between one clock-in and the next: the app does not even ask for permission to read the location in the background.',
      },
    ],
  },
  cta: {
    title: 'Every job done right deserves proof. GeoTapp generates it.',
    subtitle: 'Verifiable reports, position at clock-in, photos sealed into the report.',
    primary: 'Try it free for 14 days',
    secondary: 'View Pricing',
  },
  pricing_hint: {
    label: 'TimeTracker seats from',
    per: 'per operator per month, plus a Flow plan',
    note: '14-day free trial',
  },
  schema_sector_name: 'Plumbers and HVAC Technicians',
  schema_faq: [
    {
      question: 'Does GeoTapp offer GPS time tracking for plumbers and heating engineers?',
      answer: 'Yes. GeoTapp provides GPS time tracking built for plumbers: the engineer taps to start and stop on site, every clock-in carries a GPS position and a timestamp, and the office sees exact hours per job without manual timesheets.',
    },
    {
      question: 'Does GeoTapp work as an app for plumbers and HVAC technicians?',
      answer: 'Yes. GeoTapp is the app for plumbers and HVAC technicians that records every job with GPS, photos and recorded times. The engineer clocks in from the field, the office sees each clock-in as it arrives, and the client receives a sealed job report.',
    },
    {
      question: 'How do I seal a plumbing or heating job with GeoTapp?',
      answer: 'The engineer records start and finish time with their position, photographs the system before and after, and adds technical notes on materials used. The system generates a sealed report the client can verify independently.',
    },
    {
      question: 'Does GeoTapp handle emergency plumbing call-outs and scheduled maintenance?',
      answer: 'Yes. Both emergency jobs and planned maintenance are managed from the same app. Every job generates a history with photo evidence and recorded times and positions.',
    },
    {
      question: 'Are GeoTapp job reports accepted in disputes?',
      answer: 'GeoTapp reports are sealed with GPS, timestamps and photo evidence, and the client verifies them alone. They help show that the document has not been changed; on their own they are not absolute proof of the facts, nor legal advice.',
    },
    {
      question: 'Does GeoTapp track the engineers\' location during the day?',
      answer: 'No. The position is recorded only when the engineer clocks in (start, break, finish) or takes a proof photo. Nothing is recorded automatically between one clock-in and the next: the app does not even ask for permission to read the location in the background.',
    },
  ],
};

export default content;
