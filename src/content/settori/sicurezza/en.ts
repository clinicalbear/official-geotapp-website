import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Security Company Software | GeoTapp — Certify Every Shift',
    description: 'GeoTapp is the security company management software that certifies every shift: GPS-verified attendance, documented rounds and photo evidence. GDPR compliant. Try free.',
  },
  hero: {
    badge: 'Software for Security Guards, Stewarding & Events Security',
    h1_line1: 'Verified attendance and shift records',
    h1_line2: 'for security guards and stewarding teams',
    subtitle: 'GeoTapp Flow and TimeTracker document guard presence at assigned posts with verified GPS and immutable timestamps. SIA licence tracking, digital shift handover and incident reports with location proof — all in one platform.',
    cta_primary: 'Book a Demo',
    cta_note: 'No commitment. Response within 12 working hours.',
  },
  pain: {
    title: 'The problems you already know',
    items: [
      {
        title: 'Proving guards were at assigned posts',
        desc: 'A client disputes whether a guard was present at a specific time. Without verified GPS and immutable timestamps, the dispute stays open and contract compliance is impossible to demonstrate.',
      },
      {
        title: 'Incident reports without location proof',
        desc: 'A handwritten incident report has little evidential value without a certified GPS position and a tamper-proof timestamp. Paper logs are too easy to challenge in disputes or legal proceedings.',
      },
      {
        title: 'Paper-based shift handovers',
        desc: 'Guard changeovers rely on verbal briefings or handwritten notes. Critical information gets lost, accountability gaps appear, and retrospective audits become guesswork.',
      },
    ],
  },
  workflow: {
    title: 'How it works in three steps',
    subtitle: 'From the guard post to the operations room — without paperwork.',
    steps: [
      {
        title: 'The guard clocks in at the assigned post',
        desc: 'GeoTapp TimeTracker records clock-in, clock-out, GPS position and photos with immutable timestamps. Every patrol round is logged automatically from the guard\'s smartphone.',
      },
      {
        title: 'The manager sees all posts in real time',
        desc: 'Flow receives data instantly. The operations manager checks full post coverage, shift changes and any deviations without calling the field team.',
      },
      {
        title: 'The attendance report is ready for the client',
        desc: 'At shift end the attendance log is structured with real GPS data, ready for client audit or a SIA compliance inspection.',
      },
    ],
  },
  features: {
    title: 'What you get',
    items: [
      {
        title: 'GPS-verified attendance per guard',
        desc: 'Every check-in is linked to position, timestamp and assigned post. Defensible to the client, the SIA, and in any contractual dispute or BS 7858 audit.',
      },
      {
        title: 'SIA licence and qualification tracking',
        desc: 'Track SIA licence numbers, BS 7858 screening dates and renewal deadlines for every operative. No unqualified guard deployed by mistake.',
      },
      {
        title: 'Export compatible with Sage and BrightHR',
        desc: 'Export monthly attendance in formats accepted by the leading UK payroll and HR platforms. Payroll processing becomes a fast, error-free operation.',
      },
    ],
  },
  testimonial: {
    quote: 'GeoTapp ended disputes over shift coverage. Clients receive a GPS-stamped attendance log and there is nothing to argue about.',
    author: 'James H.',
    role: 'Operations Director, contract security company',
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'What teams ask us most before getting started.',
    items: [
      {
        q: 'Is GeoTapp suitable for SIA-licensed security guard companies?',
        a: 'Yes. GeoTapp is used by contract security companies to document guard attendance at assigned posts with verified GPS, manage shift handovers and track SIA licence expiry dates across their workforce.',
      },
      {
        q: 'How does GeoTapp help with incident report documentation?',
        a: 'TimeTracker links every incident to a certified GPS position and an immutable timestamp. The generated incident report includes coordinates, time and photos, making it defensible in legal and contractual proceedings.',
      },
      {
        q: 'Does GeoTapp support digital shift handovers between guards?',
        a: 'Yes. Shift handovers are recorded digitally with acknowledgement, operational notes and post status. The manager has full visibility of service continuity without relying on verbal handovers.',
      },
    ],
  },
  cta: {
    title: 'End disputes over shift coverage.',
    subtitle: 'GeoTapp Flow and TimeTracker give your security company the verifiable proof clients and regulators demand.',
    primary: 'Book a Demo',
    secondary: 'See Pricing',
  },
  schema_sector_name: 'Security Guards',
};

export default content;
