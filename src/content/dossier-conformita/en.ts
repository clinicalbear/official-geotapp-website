import type { DossierCopy } from './types';

const en: DossierCopy = {
  metaTitle: 'GeoTapp compliance dossier: proof of work, not surveillance',
  metaDesc:
    'What GeoTapp does and does not do, with the legal sources laid out and the limits stated plainly. UK GDPR, ICO worker monitoring guidance, proof integrity.',
  badge: 'Compliance dossier',
  h1: 'Proof of work, not surveillance',
  subtitle:
    'What GeoTapp does and, above all, what it does not do. With the legal sources laid out in the open and the limits stated without spin. A document to read, to check and to quote.',
  sections: [
    {
      heading: 'Why this document exists',
      paragraphs: [
        'In Brussels the rules on how workers may be monitored are being written right now, between the platform work directive, algorithmic management and the AI Act applied to employment. In the meantime, anyone sending teams out into the field already has to record the hours, prove them when someone disputes them, and do so without trampling on people’s privacy. It is a difficult balance, and a fair part of the trust between those who organise the work and those who carry it out rests on getting it right.',
        'GeoTapp was born inside this problem, not alongside it. So, rather than make promises, it sets down in writing what it does and what it does not do, with the legal sources in the open and the limits stated without spin. What follows can be read, checked and quoted. Anyone who finds a weak point is invited to flag it: a compliance dossier is worth what it can withstand, not how it sounds.',
      ],
    },
    {
      heading: 'What it does, and above all what it does not do',
      paragraphs: [
        'There is a single principle behind it: record the event, do not follow the person.',
        'GeoTapp captures location only at the moment of the clock-in and the clock-out, not during the day. Between one stamp and the next there is no tracking at all: no trail of movements, no location gathered without the worker’s knowledge, no digital shadowing. The photo that accompanies the stamp can only be taken from the live camera; an image cannot be uploaded from the gallery. The data collected is kept to the minimum needed by design, not as an afterthought bolted on later.',
        'What GeoTapp does not do matters just as much. It does not follow the worker outside working hours, it does not profile behaviour, it does not measure trade union activity, it does not read emotional states, it does not build scores about people. This is precisely the perimeter the European Parliament has pointed to as off-limits, and GeoTapp already stays outside it.',
      ],
    },
    {
      heading: 'The GDPR principles, applied rather than recited',
      paragraphs: [
        'Data minimisation (Article 5(1)(c) GDPR): location is collected only at the stamp, never continuously.',
        'Purpose limitation (Article 5(1)(b)): the purpose is proof of the work carried out, not remote control of the person.',
        'Lawful basis (Article 6): performance of the employment relationship and a documented legitimate interest, accompanied by the privacy notice.',
        'Transparency (Articles 12-14): the worker receives a clear privacy notice. GeoTapp provides a sample GPS privacy notice, free and downloadable.',
        'Data protection by design (Article 25): minimal collection is the default behaviour of the tool, not an option you have to switch on.',
      ],
    },
    {
      heading: 'Where this sits under UK law',
      paragraphs: [
        'In the United Kingdom there is no equivalent of the Italian Article 4; monitoring at work is governed by the UK GDPR and the Data Protection Act 2018, read alongside the Information Commissioner’s Office guidance on monitoring workers. The thread running through it is simple: monitoring must be lawful, necessary and proportionate to a clearly identified purpose, the least intrusive option that achieves it, and workers must be told what is happening, why and how, normally backed by a data protection impact assessment for anything more than trivial monitoring.',
        'GeoTapp sits inside this framework as a tool that makes compliance easier, not as a shortcut around it. The employer remains the data controller, with its own duties: GeoTapp supplies a tool designed to stay within the rules, and the resources to apply them. For the other European countries, the EU worker GPS map gathers thirty-nine hand-checked national fact sheets, setting out each country’s obligations, competent authority and penalties.',
      ],
    },
    {
      heading: 'The integrity of the proof',
      paragraphs: [
        'When GeoTapp says “proof of work”, it means something that holds up to a challenge, and to hold up it has to be hard to fake and impossible to retouch after the fact. The defence is layered.',
        'Photo capture is locked to the live camera: the value that marks this mode is fixed in the clients and, crucially, is checked by the database rules at the moment of writing, which reject a stamp recorded with a different mode. For every photo the client computes an SHA-256 cryptographic fingerprint, a necessary condition for going any further.',
        'Work sessions are immutable once created: the start time, the location recorded at the stamp and the user’s identity cannot be altered by the worker, and deletion is reserved to administrators. Sessions with a location are created only through a server-side function with administrative privileges, never by direct writing from the app, so the operator cannot backdate a stamp, move its location or make it disappear.',
        'GPS spoofing detection acts before the stamp is even sent. On Android devices the check works on several levels, with a list of known spoofing apps, a check on mock-location permissions and on signs of rooting: if it triggers, the clock-in is blocked, not merely flagged. On iOS the tool uses the operating system’s native signal indicating a location simulated in software. It also catches “teleporting”, that is, a move between two stamps at a physically impossible speed.',
        'Finally, every clock-in leaves a trace in a server-side audit log, with the time generated by the server and not by the device, and no client can write to that log, not even an administrator.',
      ],
    },
    {
      heading: 'The limits, stated plainly',
      paragraphs: [
        'This is the section many would leave out, and it is exactly the one that makes everything else credible. GeoTapp makes spoofing hard and attests to the context of the stamp, but it does not promise the impossible, and saying so is a form of respect for the reader.',
        'The server does not cryptographically re-verify the coordinates: it checks that they are plausible and inside any geofence, but it trusts the location the device reports. Device attestation certifies that the app comes from the official channels; it does not protect against a client modified and reverse-engineered by someone with the skills to do it. The “live camera only” mode is an honest declaration by the device, not cryptographic proof the server can redo on the image itself. The checks are more complete on the smartphone than on the watch. And, above all, the tool does not relieve the company of its role as data controller: the duty of the privacy notice, of consultation where it is needed, of proportionality, all remain its own.',
        'Put another way: GeoTapp raises the bar and documents the event, it does not sell invulnerability. Those who promise invulnerability, as a rule, have never had to prove it in court.',
      ],
    },
    {
      heading: 'The public resources behind it',
      paragraphs: [
        'Everything needed to apply these principles is public and free: the EU worker GPS map with the fact sheets for the thirty-nine countries, the sample GPS privacy notice, the penalty calculator, the surveillance index. Checked at source, free to use and to quote with attribution. They are there because bringing work into line should not be a privilege reserved for those who can afford a legal department.',
      ],
    },
    {
      heading: 'Attestation',
      paragraphs: [
        'The technical claims in this document are made and signed by Michele Angelo Petraroli, founder of GeoTapp, who takes responsibility for them and remains open to scrutiny and challenge. The endorsement of an employment lawyer and of a data protection officer will be added in the next version of the document.',
      ],
    },
  ],
  sourcesTitle: 'Sources and references',
  sources: [
    'Regulation (EU) 2016/679 (GDPR), in particular Articles 5, 6, 12-14, 25.',
    'UK GDPR and the Data Protection Act 2018.',
    'Information Commissioner’s Office (ICO) guidance on monitoring workers.',
    'EU texts under discussion: the platform work directive; provisions on algorithmic management; the Artificial Intelligence Act applied to employment.',
  ],
  lastUpdated: 'Version 1.0',
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'What is the compliance dossier?', a: 'It’s the document that explains, sources in hand, why GeoTapp is a proof-of-work tool and not a surveillance one, and how that holds up under GDPR and employment rules. It’s for anyone who wants to really understand how the data is handled, not for those happy with a slogan.' },
      { q: 'Is GeoTapp a surveillance system?', a: 'No, and it was built specifically not to be. The tool records location only at clock-in, when someone opens or closes a job, never continuously, and it produces the privacy notice to be signed. It proves what was done and where, it doesn’t watch people.' },
      { q: 'What do I need this dossier for?', a: 'To answer when an employee, a client or an advisor asks whether what you use is compliant. Instead of improvising you have a text that lays out the reasoning and the sources, and that you can forward as it is.' },
      { q: 'Are the sources verified?', a: 'Yes, the dossier points to real law and decisions, listed at the end with the update date. It still stays an informative resource and not legal advice: for your specific situation, have everything checked by a professional.' },
      { q: 'Can I show it to a client or in a dispute?', a: 'You can use it to explain how GeoTapp is set up and to show that compliance isn’t a claim tossed out lightly. In litigation, though, what counts is your real data and your privacy notice: the dossier is the context, the proof is the recorded work session.' },
      { q: 'Does it only apply to Italy?', a: 'The underlying reasoning holds across the Union, because it starts from GDPR, but the details on monitoring workers change from country to country. For a single state’s situation, start from its sheet here in the resources.' },
    ],
  },
};

export default en;
