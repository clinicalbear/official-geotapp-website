

import {
  Timer,
  CalendarDays,
  Users,
  MapPin,
  Zap,
  MessageSquare,
  Link,
  FileText,
  Palette,
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
  // --- Gruppo 1: il turno (timbratura, pianificazione, operatori) ---
  {
    id: 'timelock-alpha',
    systemName: 'GPS Time Tracking',
    codeName: 'Clock-in',
    icon: Timer,
    color: 'cyan',
    shortDescription:
      'Clock-in and clock-out linked to GPS position and precise timestamp. Every work session becomes a verifiable operational event.',
    fullDescription: `
### Time is Verifiable.

Timestamps without verification generate disputes.
**GPS Time Tracking** makes every work session a reliable, defensible record.

#### Geolocated Clock-in and Clock-out

The technician records entry and exit from the field.
Location, address and time are registered automatically.

#### Immutable History

Every session is a verifiable record: start time, end time, position, duration and associated job.
The client asks when you arrived? The data is there, always.
        `,
  },
  {
    id: 'event-horizon',
    systemName: 'Shift Planning',
    codeName: 'Scheduling',
    icon: CalendarDays,
    color: 'blue',
    shortDescription:
      'Manage shifts and staff availability. Weekly and monthly views for coordination without confusion or overlaps.',
    fullDescription: `
### No Shift Conflicts.

Organising mobile personnel requires clarity.
**Shift Planning** gives the manager a precise, up-to-date view.

#### Calendar View

See who works when.
Identify absences, holidays and overlaps before they become operational problems.

#### Real-time Availability

Employees confirm attendance or report absences directly from the app.
The manager sees gaps in the schedule before assigning new jobs.
        `,
  },
  {
    id: 'unit-matrix',
    systemName: 'Operator Registry',
    codeName: 'People',
    icon: Users,
    color: 'indigo',
    shortDescription:
      'Manage a complete record of your operators: roles, contacts, certifications and platform access.',
    fullDescription: `
### Know Your Team.

Every operator is a key operational resource.
**Operator Registry** centralises all vital information.

#### Certification Management

See at a glance who holds the required qualifications for a specific intervention or site.

#### Rapid Onboarding

Adding a new technician is simple.
Send an invite link: within minutes they are operational on GeoTapp TimeTracker.
        `,
  },

  // --- Gruppo 2: il campo (sedi e cantieri, mezzi e spese, comunicazioni) ---
  {
    id: 'sector-grid',
    systemName: 'Sites and Worksites',
    codeName: 'Sites',
    icon: MapPin,
    color: 'emerald',
    shortDescription:
      'Create a database of operational sites and worksites. Link each intervention to the correct location and organise teams by zone.',
    fullDescription: `
### Every Intervention in the Right Place.

Working without geographic reference generates confusion.
**Sites and Worksites** brings operational clarity.

#### Site Database

Create a catalogue of client sites, worksites and operational locations.
The system automatically links technician activity to the intervention site.

#### Zone-based Teams

Organise technicians into teams by site or geographic area.
Assign interventions to the correct team, not just the individual.
        `,
  },
  {
    id: 'energy-logistics',
    systemName: 'Vehicle and Expense Management',
    codeName: 'Fleet',
    icon: Zap,
    color: 'orange',
    shortDescription:
      'Track company vehicle usage, fuel consumed and travel expenses for field staff.',
    fullDescription: `
### Every Trip Documented.

Travel expenses are a critical item for any company with mobile staff.
**Vehicle Management** monitors every outgoing cost.

#### Vehicle Usage

Temporarily assign a vehicle to an employee for an intervention.
Always know who is using which vehicle and for which job.

#### Fuel Expenses

The employee records refuelling directly from the app with a receipt photo and amount.
Everything archived, everything linked to the job.
        `,
  },
  {
    id: 'neural-link',
    systemName: 'Operational Communications',
    codeName: 'Comms',
    icon: MessageSquare,
    color: 'violet',
    shortDescription:
      'Internal channel for company communications. Targeted messages to specific groups with read confirmations.',
    fullDescription: `
### Clear Communications. No Background Noise.

WhatsApp mixes private and professional life and offers no control over read status.
**Operational Communications** is the official company channel.

#### Targeted Messages

Notify only the team that needs to know.
Shift change at the Rome site? Only the assigned technicians receive the message.

#### Read Confirmations

Always know who read the communication and who did not.
Clear and transparent accountability for everyone.
        `,
  },

  // --- Gruppo 3: cosa esce (export presenze, report, personalizzazione) ---
  {
    id: 'payroll-bridge',
    systemName: 'Attendance Export',
    codeName: 'Payroll export',
    icon: Link,
    color: 'pink',
    shortDescription:
      'Export monthly attendance in formats compatible with the main payroll software. Less manual work, fewer errors.',
    fullDescription: `
### Payroll Without Headaches.

Month end does not have to be an administrative nightmare.
**Attendance Export** connects field operations to HR administration.

#### Multi-Format

Generate attendance files ready for import into the main payroll software (Zucchetti, INAZ, TeamSystem).

#### Consultant Access

Give limited access to your payroll firm.
They download the data they need independently, without calling you every month end.
        `,
  },
  {
    id: 'data-core',
    systemName: 'Weekly Reports',
    codeName: 'Reporting',
    icon: FileText,
    color: 'slate',
    shortDescription:
      'Detailed reports on hours worked per job and per operator. Reliable data for internal control and billing.',
    fullDescription: `
### Data Does Not Lie.

Make decisions based on facts, not impressions.
**Weekly Reports** extracts value from daily operations.

#### Detailed Reports

Every week, a complete picture: who worked, where, on which job and for how long.

#### Full Transparency

Employees and managers consult the same monthly report.
Hours counted are identical for everyone.
No disputes at month end.
        `,
  },
  {
    id: 'identity-forge',
    systemName: 'Branded App',
    codeName: 'Branding',
    icon: Palette,
    color: 'rose',
    shortDescription:
      'Upload your logo and choose your company colours. Your operators use an app that reflects your brand identity.',
    fullDescription: `
### Your Company, Your App.

Do not use a generic app.
Make your employees feel part of YOUR company with a consistent visual experience.

#### Company Logo

Your logo prominently displayed on the login screen and main dashboard.

#### Company Colours

Choose the colour theme that fits your corporate image.
Professional, consistent, recognisable.
        `,
  },
];
