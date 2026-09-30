import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    // "cleaners" (chi pulisce) non compariva mai e "GPS tracking" una volta
    // sola: cercano "gps tracking cleaners" e la pagina parlava solo di
    // "cleaning company". 70 impressioni a posizione 68.
    title: 'GPS Tracking for Cleaners: Proof of Every Job Done',
    description: 'GPS clock-ins for cleaners and cleaning companies: your operatives clock in on site, the office sees each clock-in as it arrives, with photo proof of the work.',
  },
  hero: {
    badge: 'GPS tracking for cleaners, cleaning companies and FM contractors',
    h1_line1: 'Cleaning company software:',
    h1_line2: 'shift records, photo proof and recorded hours, every site',
    subtitle: 'GeoTapp connects Flow + TimeTracker for teams spread across multiple buildings and floors. Operatives clock in from their smartphones with the position recorded at that moment; the office sees who clocked in where and when, with photo evidence attached. Data ready to answer a dispute, and hours and breaks recorded for payroll.',
    cta_primary: 'Try it on a real contract',
    cta_note: '14 days, up to 50 field workers, no credit card.',
  },
  pain: {
    title: 'The problem you already know',
    items: [
      {
        title: 'Client disputes over whether areas were cleaned',
        desc: 'The client claims a floor was skipped or the time was wrong. You have a written time, they have their version. Without verifiable proof, you risk the contract.',
      },
      {
        title: 'Supervising distributed teams across multiple sites',
        desc: 'You have staff across buildings, floors and shift patterns. Working out who has clocked in where, and whether they have finished their round, becomes a chain of calls and messages.',
      },
      {
        title: 'Shift handover gaps and missing time records',
        desc: 'The morning shift does not know what the evening crew did. Paper logs go missing, WhatsApp gets ignored, and whoever checks wants times that were recorded, not reconstructed from memory.',
      },
    ],
  },
  workflow: {
    title: 'How it works in three steps',
    subtitle: 'From the building floor to the office, no chasing required.',
    steps: [
      {
        title: 'Operative clocks in on site',
        desc: 'With GeoTapp TimeTracker they log start, breaks, finish, photos of the area and notes directly from their smartphone. The position is recorded at that moment only, and nothing is recorded automatically between clock-ins.',
      },
      {
        title: 'Office sees each update as it arrives',
        desc: 'Flow receives the data as soon as the phone has signal. The manager sees which site has been serviced, by whom, at what time and with what photographic evidence, without making a single call.',
      },
      {
        title: 'The handover report is already done',
        desc: 'At the end of the shift, the service record is generated from the recorded data: hours worked, breaks, positions and photos. No manual reconstruction, and an answer ready when a client asks.',
      },
    ],
  },
  features: {
    title: 'What you get',
    items: [
      {
        title: 'Clock-in with position, by site',
        desc: 'Every start, break and finish is linked to position, timestamp and assigned building. Something to show the client, the contract manager or an inspector when it matters.',
      },
      {
        title: 'Before-and-after photo evidence',
        desc: 'Operatives take photos directly from the app. Images carry date, time and position, and go into the sealed report: any later change is detectable.',
      },
      {
        title: 'Excel or CSV export for payroll',
        desc: 'Export the month\'s attendance to Excel or CSV, with standard hours, breaks and overtime recorded shift by shift, ready for your payroll provider or accountant.',
      },
    ],
  },
  testimonial: {
    quote: 'When a client disputes a job, we send the report with photos and position and they check it themselves.',
    author: 'Rachel T.',
    role: 'Operations Manager, commercial cleaning contractor',
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'What people ask us most before getting started.',
    items: [
      {
        q: 'Is GeoTapp suitable for cleaning companies and facility management contractors?',
        a: 'Yes. GeoTapp helps cleaning companies, FM contractors and facility services providers manage multi-site shifts, document service delivery with clock-ins and photo evidence, and keep the shift, break and overtime records payroll needs.',
      },
      {
        q: 'How do I manage teams spread across multiple buildings at the same time?',
        a: 'Flow shows who has clocked in and where, by building, as each clock-in arrives. You can assign shifts, check coverage and get an alert if a shift is left open.',
      },
      {
        q: 'Does GeoTapp record break times and overtime for payroll?',
        a: 'Yes. Break times, overtime and shift patterns are recorded shift by shift. The monthly export to Excel or CSV goes to your payroll provider or accountant, who apply the rules that govern your contracts, such as NMW and the Agency Workers Regulations.',
      },
      {
        q: 'Does GeoTapp track cleaners\' location during the day?',
        a: 'No. The position is recorded only when the operative clocks in (start, break, finish) or takes a proof photo. Nothing is recorded automatically between clock-ins: the app does not even ask for permission to read the location in the background.',
      },
    ],
  },
  cta: {
    title: 'Answer a dispute with a report. Start now.',
    subtitle: 'GeoTapp Flow and TimeTracker give your cleaning company the clock-ins, photos and sealed reports to show when a client disputes a job.',
    primary: 'Try it free for 14 days',
    secondary: 'See Pricing',
  },
  pricing_hint: {
    label: 'TimeTracker seats from',
    per: 'per operative per month, plus a Flow plan',
    note: '14-day free trial',
  },
  schema_sector_name: 'Cleaning Companies',
};

export default content;
