import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App for Heating Engineers | GeoTapp - GPS, Job Reports & Proof',
    description: 'GeoTapp is the app for plumbers and heating installers: GPS-verified job reports, boiler photos and tamper-proof records. Close disputes with real evidence. Try free.',
  },
  hero: {
    badge: 'App for Plumbers and Heating Installers',
    h1_line1: 'App for heating engineers:',
    h1_line2: 'GPS job reports, photo evidence and zero disputes.',
    subtitle: 'GeoTapp records every boiler and heating job with GPS, photos and verifiable timestamps. Client disputes parts replaced? Show them the report, no argument needed. Your engineers are protected, your invoices too.',
    cta_primary: 'Start free today',
    cta_note: 'No commitment. Response within 12 business hours.',
  },
  pain: {
    title: 'The problem every heating and plumbing company knows',
    items: [
      {
        title: 'Client disputes parts replaced on the boiler',
        desc: 'They say you fitted different components than agreed, or the system was already like that. Without photo evidence, the dispute becomes your word against theirs.',
      },
      {
        title: 'No documentation of the installation after the job',
        desc: 'The engineer finished the repair, but there is no photo record or technical note. If the fault returns, reconstructing what was done becomes impossible.',
      },
      {
        title: 'Emergency call-outs are not traceable',
        desc: 'Heating breakdowns happen at impossible hours. The engineer attends, fixes the problem, but nothing remains to show the client or insurer.',
      },
    ],
  },
  workflow: {
    title: 'How it works in three steps',
    subtitle: 'From the job to the office, without phone calls.',
    steps: [
      {
        title: 'Engineer records the job on site',
        desc: 'With GeoTapp TimeTracker they clock in and out with GPS, photograph the boiler and system, add notes on parts replaced, all from their smartphone.',
      },
      {
        title: 'Office sees everything in real time',
        desc: 'GeoTapp Flow receives data instantly. The manager sees job reference, assigned engineer, progress and photo evidence without calling.',
      },
      {
        title: 'The job report is your proof',
        desc: 'At the end of the job the system generates a sealed report: GPS timestamp, system photos and parts, technical notes. Tamper-proof. The client can verify it independently.',
      },
    ],
  },
  differenza: {
    title: 'App for heating engineers: time recording or job certification?',
    subtitle: 'Most apps record the clock-in. GeoTapp produces verifiable proof.',
    rows: [
      {
        label: 'What it records',
        competitor: 'Clock-in and clock-out time',
        geotapp: 'Time + verified GPS + system photos + parts replaced',
      },
      {
        label: 'In case of dispute',
        competitor: 'Data not defensible',
        geotapp: 'Sealed report, tamper-proof',
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
        geotapp: 'Compliant by design, forms included',
      },
    ],
  },
  prima_dopo: {
    title: 'Before GeoTapp. After GeoTapp.',
    prima: [
      'Client disputes that the valve was replaced.',
      'You have no photos or documented parts.',
      'The argument goes on for weeks. You risk not being paid.',
      'The engineer has nothing to defend themselves with.',
    ],
    dopo: [
      'Client disputes that the valve was replaced.',
      'You open the report: photo of the old part removed, the new one fitted, GPS timestamp, technical notes.',
      'You send it. The dispute ends in a minute.',
      'The invoice is safe. The engineer is protected.',
    ],
  },
  scenario: {
    title: 'Real case',
    body: 'A client disputes the replacement of a boiler burner and refuses to pay the invoice. With GeoTapp you open the job report: photo of the faulty part removed, the new one installed, GPS timestamp of the job and technical notes from the engineer, all generated automatically from their smartphone on site.',
    resolution: 'The dispute drops. The invoice is paid in full.',
  },
  features: {
    title: 'App for heating engineers: what you get with GeoTapp.',
    items: [
      {
        title: 'Verifiable GPS time tracking',
        desc: 'Every site arrival and departure is recorded with location, timestamp and job reference. Defensible to clients and insurers alike.',
      },
      {
        title: 'Sealed system photos',
        desc: 'The engineer photographs from the app during and after the job. Every image is linked to GPS and timestamp, tamper-proof after generation.',
      },
      {
        title: 'Automatic digital job reports',
        desc: 'At the end of the job the report is ready: hours, photos, parts replaced and signature. The engineer sends it to the client directly from the app.',
      },
      {
        title: 'Job and emergency management',
        desc: 'Assign urgent call-outs, track progress and receive alerts if a job is not completed on time.',
      },
      {
        title: 'Payroll export',
        desc: 'Export monthly attendance in formats compatible with Sage, Xero and BrightHR. Payroll processing becomes a quick task.',
      },
      {
        title: 'Your engineers are protected',
        desc: 'A verifiable report protects the engineer from unfounded accusations about parts or hours. Good work is proven by the data.',
      },
    ],
  },
  cta_mid: {
    title: 'Want to see how it works on a real heating job?',
    body: 'We show you the complete flow: from opening a job to the report the client receives. In 20 minutes you\'ll know if it\'s right for you.',
    cta: 'Start free today',
  },
  trust: {
    title: 'Our reports cannot be altered. Not by you. Not by us.',
    body: 'GeoTapp reports are generated by the system at the moment of the job. There is no panel to "correct" a time or move a photo. The data is what it is, digitally signed, with real GPS.',
    badge: 'Verifiable by anyone, without access to your account',
  },
  testimonial: {
    quote: 'With GeoTapp my engineers photograph the system before and after every job. Disputes about parts have disappeared. Invoices get paid.',
    author: 'Mark S.',
    role: 'Owner, residential and commercial heating installations',
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'What heating engineers ask us most before getting started.',
    items: [
      {
        q: 'Is GeoTapp suitable as an app for heating engineers?',
        a: 'Yes. GeoTapp is used by plumbers and heating installers to manage boiler and heating jobs with GPS job reports, photos and verifiable hours.',
      },
      {
        q: 'Can I use GeoTapp to document parts replaced on boilers?',
        a: 'Yes. The engineer photographs the old part removed and the new one fitted from the app. Every image is linked to GPS, timestamp and job reference, included in the tamper-proof report.',
      },
      {
        q: 'Does GeoTapp help resolve client disputes about heating jobs?',
        a: 'That is exactly the primary use case: GPS timestamp, photo evidence of parts and a sealed report make any unfounded dispute resolvable in minutes.',
      },
    ],
  },
  cta: {
    title: 'Every heating job done right deserves proof. GeoTapp generates it.',
    subtitle: 'Verifiable reports, real GPS, sealed photos. Your work is defensible.',
    primary: 'Start free today',
    secondary: 'View Pricing',
  },
  pricing_hint: {
    label: 'Starting from',
    per: 'operator/month',
    note: '14-day free trial',
  },
  schema_sector_name: 'Heating Engineers',
  schema_faq: [
    {
      question: 'Does GeoTapp work as an app for heating engineers?',
      answer: 'Yes. GeoTapp is the app for plumbers and heating installers that records every boiler and heating job with GPS, photos and verifiable timestamps. The engineer clocks in from the field, the office sees everything in real time, and the client receives a sealed job report.',
    },
    {
      question: 'How do I certify a boiler job with GeoTapp?',
      answer: 'The engineer records start and finish time with verified GPS, photographs the parts replaced and adds technical notes. The system generates a sealed report the client can verify independently.',
    },
    {
      question: 'Does GeoTapp handle multiple teams of heating engineers on different jobs?',
      answer: 'Yes. GeoTapp Flow lets the owner coordinate multiple teams, assign urgent call-outs, track job status and collect photo evidence from all active sites in real time.',
    },
    {
      question: 'Are GeoTapp job reports accepted in heating disputes?',
      answer: 'GeoTapp reports are sealed with GPS, timestamps and photo evidence. They have been used successfully to resolve disputes over parts and work denied by the client.',
    },
  ],
};

export default content;
