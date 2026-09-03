

import {
  Database,
  CreditCard,
  Box,
  Layers,
  Smartphone,
  BarChart3,
  Activity,
  Shield,
  FileText,
} from 'lucide-react';

export interface SystemDetail {
  id: string;
  systemName: string;
  codeName: string;
  icon: any;
  color: string;
  shortDescription: string;
  fullDescription: string;
}

export const GEOTAPP_SYSTEMS: SystemDetail[] = [
  // --- Gruppo 1: il lavoro (commesse, assegnazione, rendicontazione) ---
  {
    id: 'nexus-core',
    systemName: 'Job Management',
    codeName: 'Operations',
    icon: Database, // Was Users
    color: 'blue',
    shortDescription:
      'Create and manage technical interventions. Assign tasks to technicians, monitor progress and keep everything tracked per job.',
    fullDescription: `
### Central Job Control.

Every intervention starts as a structured job.
**Job Management** gives you a clear view of all work in progress.

#### Intervention Management

Create a job, assign the technician, define the site and date.
Monitor status: Open, In Progress, Completed.

#### Operational History

Every job has a complete archive of activities, photo proofs, notes and timestamps.
The client asks what was done? You have the data. Always.
        `,
  },
  {
    id: 'titan-flow',
    systemName: 'Task Assignment',
    codeName: 'Dispatch',
    icon: Activity, // Was Zap
    color: 'cyan',
    shortDescription:
      'Distribute work to technicians with precision. Communicate instructions, deadlines and operational priorities in a structured way.',
    fullDescription: `
### The Right Job to the Right Technician.

Confused task assignment generates delays and disputes.
**Task Assignment** brings operational clarity.

#### Precise Distribution

As soon as a job is opened, assign one or more technicians.
Each technician sees their work on GeoTapp TimeTracker.

#### Operational Communication

Instructions, notes, technical attachments: everything reaches the technician before they leave for the field.
Fewer calls, fewer misunderstandings, fewer delays.
        `,
  },
  {
    id: 'ledger-prime',
    systemName: 'Reports and Billing',
    codeName: 'Reporting',
    icon: CreditCard,
    color: 'yellow',
    shortDescription:
      'Generate structured reports from every job. Export documentation and support billing with real field data.',
    fullDescription: `
### From Work to Report, in an Orderly Way.

Manual billing is slow and often incomplete.
**Reports and Billing** closes the operational cycle.

#### Structured Reports

Every completed intervention generates documentation by collecting timestamps, photos and notes from the field.
No data to enter manually, it all comes from TimeTracker.

#### Billing Support

Real job data supports more accurate quotes and invoices.
Fewer errors, fewer disputes, faster administrative cycle.
        `,
  },

  // --- Gruppo 2: l'organizzazione (calendario, risorse, pianificazione) ---
  {
    id: 'quantum-logistics',
    systemName: 'Intervention Calendar',
    codeName: 'Scheduling',
    icon: Box,
    color: 'green',
    shortDescription:
      'Plan interventions, visualise the operational calendar and manage team availability without overlaps.',
    fullDescription: `
### Full View of Planned Work.

Without a shared calendar, planning becomes chaotic.
**Intervention Calendar** gives you clear operational visibility.

#### Advanced Planning

View all interventions on daily, weekly and monthly calendar views.
Identify overlaps and optimise workload distribution.

#### Team Availability

See who is available, who is on leave and who is already overloaded.
Assign new interventions without creating operational conflicts.
        `,
  },
  {
    id: 'supply-command',
    systemName: 'Resource Management',
    codeName: 'Resources',
    icon: Layers, // Was Truck (which might be missing?) safely leverage Layers or similar
    color: 'red',
    shortDescription:
      'Control materials, equipment and operational resources needed for each field intervention. No surprises.',
    fullDescription: `
### No Intervention Short of Resources.

Sending a technician to the field without the right materials is a costly mistake.
**Resource Management** prevents operational surprises.

#### Materials per Job

Link required resources to each job.
The manager sees in advance what is needed and when.

#### Suppliers and Procurement

Store contact details and terms for your regular suppliers.
Reduce procurement time and keep costs under control.
        `,
  },
  {
    id: 'the-architect',
    systemName: 'Work Planning',
    codeName: 'Planning',
    icon: Layers,
    color: 'purple',
    shortDescription:
      'Organise work into phases, tasks and deadlines. Keep the project under control without spreadsheets or WhatsApp messages.',
    fullDescription: `
### Structure the Work. Control the Progress.

Complex jobs require structure.
**Work Planning** brings operational order.

#### Phases and Deadlines

Structure complex interventions into operational phases with clear deadlines.
Assign responsibilities to each team member.

#### Progress Monitoring

Visualize progress in real time.
Always know what has been done and what remains open.
Act before a delay becomes a client problem.
        `,
  },

  // --- Gruppo 3: la prova e il controllo (documentazione, campo-ufficio, visibilita') ---
  {
    id: 'the-auditor',
    systemName: 'Intervention Documentation',
    codeName: 'Evidence',
    icon: FileText, // Was Receipt
    color: 'fuchsia',
    shortDescription:
      'Collect photo evidence, operational notes and signed documents for every intervention. Work performed stays verifiable.',
    fullDescription: `
### Real Proof for Every Intervention.

Without documentation, completed work is contestable.
**Intervention Documentation** makes every job verifiable.

#### Photo Evidence

Technicians take photos directly from GeoTapp TimeTracker on the field.
Images are automatically linked to the job with timestamp and location.

#### Digital Client Signature

The client can sign the work report directly on the technician's screen.
The digital signature is included in the report and constitutes proof of service delivered.
        `,
  },
  {
    id: 'the-uplink',
    systemName: 'Field-to-Office Link',
    codeName: 'Integration',
    icon: Smartphone,
    color: 'orange',
    shortDescription:
      'Data collected by TimeTracker arrives in Flow in real time. Field and office work on the same operational data.',
    fullDescription: `
### Office and Field, Finally Connected.

The disconnect between field and office generates avoidable errors, delays and disputes.
**Field-to-Office Link** closes the gap.

#### Real-time Synchronisation

Every clock-in, photo and note recorded on TimeTracker arrives in Flow immediately.
The manager has a live view without having to call the technician.

#### Reliable History

Everything the technician records on the field is archived and linked to the job.
No data is lost. No information is missing when it is time to report.
        `,
  },
  {
    id: 'the-oracle',
    systemName: 'Operational Visibility',
    codeName: 'Analytics',
    icon: BarChart3,
    color: 'indigo',
    shortDescription:
      'Real-time operational dashboard. Always know how many interventions are open, in progress or completed today.',
    fullDescription: `
### Operational Data, Not Assumptions.

Deciding without reliable data is dangerous.
**Operational Visibility** turns field data into concrete information.

#### Operational Dashboard

See in real time:
- Open and in-progress interventions
- Active technicians
- Interventions completed today and this week

#### Periodic Reports

Receive automated activity summaries.
Compare periods, identify bottlenecks and optimise operations.
        `,
  },
];
