import type { NovitaCopy } from './types';

const copy: NovitaCopy = {
  ui: {
    kicker: 'New',
    flowCaption: 'Flow, the owner\'s dashboard',
    phoneCaption: 'TimeTracker, on the phone',
    altFlow: 'Flow, the owner\'s dashboard: {tool} screen',
    altPhone: 'TimeTracker on the phone: {tool} screen',
    flowOnly: 'This tool is used from the Flow dashboard: nothing is needed on your crew\'s phones.',
    seeAlso: 'For electrical checks, boilers and F-gas there are dedicated tools:',
  },
  sections: {
    sicurezza: {
      title: 'New tools for security: patrol rounds, lone workers, handovers and Emergencies',
      intro: 'When you choose your sector, GeoTapp switches on only the tools for your trade. For security there are three, plus the Emergencies module that applies to every sector. Each has a part in Flow, where you decide and check, and a part on the guard\'s phone.',
    },
    pulizie: {
      title: 'New tools for cleaning: quality checks and safety data sheets',
      intro: 'Two tools built for the complaints and inspections a cleaning company faces every week. They switch on when you pick your sector; the others stay hidden.',
    },
    elettricisti: {
      title: 'New tools for electricians: end-of-job test results and periodic check reminders',
      intro: 'For when you finish an installation, and for remembering your clients\' periodic inspections. GeoTapp collects, lays out and reminds: the tests, the certificates and the signatures stay with the people who do them.',
    },
    edilizia: {
      title: 'New tools for construction: subcontractor documents and labour cost estimate',
      intro: 'Two tools for anyone running sites with subcontractors, so you turn up to meetings with the paperwork already in order. You use them from Flow, the owner\'s dashboard.',
    },
    idraulici: {
      title: 'New tools for plumbers and heating engineers: boiler checks and F-gas register',
      intro: 'The work that comes round every year and gets forgotten exactly when it matters: calling clients back for their system check, and keeping track of equipment that contains fluorinated gases.',
    },
    installatori: {
      title: 'New tools for installers: handover with signature and van stock',
      intro: 'Two tools for the two things that eat your time on every job: closing the handover with the customer and knowing what is really in the van.',
    },
    manutenzione: {
      title: 'New tools for maintenance: response times and QR codes on equipment',
      intro: 'For anyone working on service contracts with plenty of equipment spread across several buildings: knowing how much time is left on each request, and finding a machine\'s history in one tap.',
    },
    impianti: {
      title: 'New tools for installation firms: handover with signature and van stock',
      intro: 'This page speaks to anyone who fits and hands over installations, of any kind, so here you find the two tools that suit everyone: handover with signature and van stock. Electrical testing and boiler checks are trades of their own and have dedicated tools.',
    },
  },
  tools: {
    giro_ronda: {
      title: 'Patrol rounds',
      body: 'It is three in the morning and the client wants to know whether the patrol covered every point of the warehouse. In Flow you draw the points on the map and set the rounds with their times; as the guard passes each one, they tap "Checkpoint" on the phone. In the morning you have the night\'s report, already laid out.',
      note: 'Position is read only at the moment the guard taps "Checkpoint": nothing is recorded between one point and the next.',
    },
    lavoratore_isolato: {
      title: 'Lone worker',
      body: 'A guard alone on a site, at night. For each site you choose a plan with the interval you prefer: at those intervals the phone asks "All good?" and, if no answer comes, alerts the coordinator. In Flow you see the shifts in progress and the history of who answered and when.',
      note: 'No position is sent. It is a support tool: it does not replace the safety measures required for people who work alone.',
    },
    consegne_turno: {
      title: 'Shift handover',
      body: 'At six the night guard leaves the site to the morning guard. It used to be keys in a box and a voice message; now, at the end of the shift, they write notes, keys and anomalies for whoever arrives next, who takes them over from the phone. In Flow you see the handovers still to be accepted and the open anomalies. The history cannot be edited.',
    },
    emergenze: {
      title: 'Emergencies and drills',
      body: 'An evacuation drill in a building or at an event: the coordinator picks the scenario and taps the point of danger on the floor plan. Everyone on the team receives their role, what to do and the exits in order on their phone, and replies with a tap: present, on my way, can\'t make it. The dashboard shows who has replied and how long it took; the plans open even without a signal.',
      note: 'It is a coordination and practice tool: it does not replace or validate your emergency plan, and a notification may not arrive, which is why everyone confirms.',
    },
    qualita_pulizie: {
      title: 'Quality checks',
      body: 'The client\'s contact says the third floor was not cleaned properly. The team leader walks the area with the checklist, marks each item pass, fail or not applicable, and attaches a photo. In Flow each item has a weight from 1 to 3, the monthly score is by site and by area, and at month end a PDF comes out to show the client, with the open actions.',
    },
    schede_consumi: {
      title: 'Safety data sheets and usage',
      body: 'An inspector wants to see the safety data sheet for the product on the trolley. In Flow each site has its products, each with its sheet as a PDF, and you see the month\'s withdrawals and costs. On the phone the sheets can be read even where there is no signal, and the withdrawal is logged on the spot.',
    },
    verifiche_misure: {
      title: 'Checks and measurements',
      body: 'Board closed, last day on site: continuity, insulation, RCDs, earth. The electrician enters each reading from the phone with the result and a photo of the instrument; Flow gathers the tests by job and lays them out as attachments to the completion document your country requires.',
      note: 'GeoTapp collects and lays out: it does not test, validate or guarantee compliance. The certificate and the signature stay with the installing contractor.',
    },
    impianti_terra: {
      title: 'Periodic check reminders',
      body: 'For each client you enter the date of the last periodic check of the earthing and electrical installation: Flow warns you before it falls due, so you do not find out when it has already lapsed. Which checks apply, and how often, depends on your national rules.',
      note: 'Your company enters the dates: GeoTapp reminds you, does not carry out the check and does not say whether it is valid.',
    },
    documenti_imprese: {
      title: 'Contractor documents',
      body: 'Before letting a subcontractor onto site you want their paperwork in order, and to remember when it expires, such as insurance certificates. Flow keeps a schedule of the documents for each subcontractor or main contractor and warns you before the date.',
      note: 'It warns you before expiry, it does not say whether a document is valid: you check that, or your adviser does.',
    },
    congruita: {
      title: 'Labour cost estimate',
      body: 'At the end of a job your accountant asks how much labour weighed against the value of the work. Flow makes an internal estimate for each site from the hours logged, and exports it as CSV or PDF, ready to pass on.',
      note: 'It is an internal estimate, not an official calculation: no authority requires or issues this figure.',
    },
    caldaie: {
      title: 'Boiler checks',
      body: 'September: several clients have their check coming due. Flow shows you the systems to call back this month and prepares a draft message to the client, which goes out only if you send it. On the phone the engineer has the list of systems with their due dates and fills in the check report with the readings.',
      note: 'GeoTapp collects and lays out the data: it does not verify or guarantee compliance. The records and any notification your national rules require stay with the engineer.',
    },
    fgas: {
      title: 'F-gas register',
      body: 'A unit containing fluorinated gases has a charge, a CO2 equivalent and a history of interventions. In Flow you see the equipment and what has to be reported; from the phone the engineer opens the register and adds a new intervention straight away, without copying it up in the evening.',
      note: 'Any report your national rules require is made by the engineer or the company: GeoTapp does not send it.',
    },
    consegna_firma: {
      title: 'Handover with signature',
      body: 'You have finished the installation. The engineer scans the barcode of each serial number with the phone, takes the final photos and has the customer sign on screen. Out comes a PDF handover record with your logo, your company details and the barcode of each serial number, which goes into the job report. In Flow you see the month\'s handovers and choose how the record looks: logo, details, wording, colour.',
    },
    magazzino_furgone: {
      title: 'Van stock',
      body: 'The engineer gets to the customer and finds they no longer have the right fitting. On the phone they see what is in the van and what is running low, and log the material used on each job. In Flow you set the thresholds for each van, see what to reorder and what the materials for each job cost.',
    },
    sla: {
      title: 'Response times (SLA)',
      body: 'The contract with the building says how fast a request must be taken on and how fast it must be resolved. In Flow each request shows the time left for each, by contract; at month end there is the report. On the phone the engineer sees the requests assigned, accepts them and marks them as resolved.',
    },
    qr_apparecchi: {
      title: 'QR codes on equipment',
      body: 'In front of a pump or a panel, the engineer scans the QR label and has the history and interventions of that piece of equipment at once. Someone who scans without an account, a tenant for example, can report a problem. In Flow you manage the equipment and print the labels.',
    },
  },
  shots: {
    flow_emergenze_attiva: 'Flow: the coordinator picks the scenario and taps the point of danger on the floor plan to start the drill',
    flow_emergenze_evento: 'Flow: dashboard of the drill in progress, with who has replied and how quickly',
    flow_emergenze_evento_persone: 'Flow: the list of team members with their reply, present, on my way or can\'t make it',
    flow_emergenze_sito: 'Flow: the site floor plan with exits, equipment and zones',
    flow_emergenze_protocolli: 'Flow: the protocols by scenario and role',
    flow_emergenze_squadre: 'Flow: the teams with their certificates, and anyone missing is flagged',
    flow_emergenze_scadenzario: 'Flow: schedule of certificates and equipment checks',
    tt_emergenze_dashboard: 'Phone: the home screen with the drill alert',
    tt_emergenze_indicazioni: 'Phone: personal instructions, with the role and what to do',
    tt_emergenze_indicazioni_2: 'Phone: the exits in order, leaving out those that are blocked',
    tt_emergenze_risposta: 'Phone: the one-tap reply, present, on my way or can\'t make it',
    tt_emergenze_piani: 'Phone: the plans, available even without a signal',
  },
  overrides: {
    'en-gb': {
      verifiche_misure: {
        body: 'Board closed, last day on site: continuity, insulation, RCDs, earth loop. The electrician enters each reading from the phone with the result and a photo of the instrument; Flow gathers the tests by job and lays them out as attachments to the Electrical Installation Certificate (EIC, BS 7671).',
        note: 'GeoTapp collects and lays out: it does not test, validate or guarantee compliance. The certificate and the signature stay with the electrician or contractor who did the work.',
      },
      impianti_terra: {
        title: 'EICR reminders',
        body: 'For each client you enter the date of the last periodic inspection (EICR, BS 7671): Flow warns you before the next one is due, so you do not find out when it has already lapsed. Landlords in England need one for rented homes, and your clients may have their own intervals.',
        note: 'Your company enters the dates: GeoTapp reminds you, does not carry out the inspection and does not say whether it is valid.',
      },
      caldaie: {
        body: 'September: several clients have their annual check coming due. Flow shows you the appliances to call back this month and prepares a draft message to the client, which goes out only if you send it. On the phone the engineer has the list of appliances with their due dates and fills in the check report with the readings, ready for the Gas Safety Record.',
        note: 'There is no public register: the record and the Gas Safe registration stay with the engineer. GeoTapp collects and lays out the data, it does not verify or guarantee compliance.',
      },
      fgas: {
        body: 'A unit containing fluorinated gases has a charge, a CO2 equivalent and a history of interventions. In Flow you see the equipment and what has to be recorded under the F-gas Regulations 2015; from the phone the engineer opens the register and adds a new intervention straight away, without copying it up in the evening.',
        note: 'The company and engineer certification, and the records, stay with them: GeoTapp does not approve anyone\'s qualifications and does not send reports to any body.',
      },
    },
  },
};

export default copy;
