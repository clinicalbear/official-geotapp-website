# ROI Calculator Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a branded, multi-step ROI calculator for GeoTapp at `/[locale]/roi-calculator/` that collects company data, gates results behind a lead form, sends an email notification to michele@geotapp.com, and supports WordPress iframe embedding.

**Architecture:** Multi-step client component (`RoiCalculatorClient.tsx`) animated with Framer Motion. API route `/api/roi-calculator` handles validation + ROI calculation + email sending via Nodemailer over IONOS SMTP. Dictionary keys added to the 4 existing locale JSON files (IT/EN/DE/NL). Page wrapper at `[locale]/roi-calculator/page.tsx` follows the standard locale pattern.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Framer Motion (already installed), Nodemailer (new dep), Tailwind CSS, existing dictionary system (`getDictionary`), IONOS SMTP credentials already in `.env.local`

---

## ROI Calculation Formula

```
risparmio_admin    = ore_admin_settimanali * 0.65 * costo_orario * 52
risparmio_dispute  = contestazioni_mensili * 12 * 180
risparmio_coord    = operatori * 1.0 * costo_orario * 52
risparmio_totale   = risparmio_admin + risparmio_dispute + risparmio_coord

costo_geotapp_annuo = operatori * 25 * 12   // €25/operator/month estimate
payback_mesi        = Math.ceil(costo_geotapp_annuo / (risparmio_totale / 12))
roi_pct             = Math.round((risparmio_totale - costo_geotapp_annuo) / costo_geotapp_annuo * 100)
```

---

### Task 1: Install Nodemailer

**Files:**
- Modify: `package.json`
- Modify: `.env.local.example` (add ROI_EMAIL_TO)

**Step 1: Install nodemailer**

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
npm install nodemailer
npm install --save-dev @types/nodemailer
```

Expected output: `added 2 packages` (or similar, no errors)

**Step 2: Add ROI_EMAIL_TO to .env.local**

Open `.env.local` and add at the end:

```
ROI_EMAIL_TO=michele@geotapp.com
```

Also add the same line to `.env.local.example`.

**Step 3: Commit**

```bash
git add package.json package-lock.json .env.local.example
git commit -m "feat(roi): add nodemailer dependency"
```

---

### Task 2: Add Dictionary Keys (IT/EN/DE/NL)

**Files:**
- Modify: `src/dictionaries/it.json`
- Modify: `src/dictionaries/en.json`
- Modify: `src/dictionaries/de.json`
- Modify: `src/dictionaries/nl.json`

**Step 1: Add `roi` section to `it.json`**

Add after the last top-level key (before closing `}`):

```json
"roi": {
  "meta_title": "Calcolatore ROI GeoTapp — Scopri il tuo risparmio reale",
  "meta_desc": "Calcola in 2 minuti quanto risparmieresti con GeoTapp: meno burocrazia, zero contestazioni, operatori più produttivi.",
  "hero_title": "Calcola il tuo ROI con GeoTapp",
  "hero_subtitle": "Inserisci i dati della tua azienda e scopri quanto puoi risparmiare ogni anno.",
  "step1_title": "La tua azienda",
  "step1_subtitle": "Parlaci un po' di te",
  "field_settore": "Settore",
  "field_operatori": "Numero di operatori",
  "settore_installatori": "Installatori",
  "settore_pulizie": "Pulizie e sanificazione",
  "settore_sicurezza": "Sicurezza e vigilanza",
  "settore_altro": "Altro settore",
  "step2_title": "La tua situazione attuale",
  "step2_subtitle": "Sii preciso: più dati reali, più accurato il calcolo",
  "field_siti": "Siti visitati al giorno (per operatore)",
  "field_ore_admin": "Ore/settimana spese in burocrazia e reportistica",
  "field_contestazioni": "Contestazioni clienti al mese (non pagato, dispute, ecc.)",
  "field_costo_orario": "Costo orario medio di un operatore (€)",
  "step3_title": "Dove inviamo il tuo report?",
  "step3_subtitle": "I tuoi risultati personalizzati arrivano subito. Nessuno spam.",
  "field_nome": "Nome e cognome",
  "field_email": "Email aziendale",
  "field_telefono": "Telefono (opzionale)",
  "cta_calcola": "Calcola il mio ROI",
  "consent_text": "Cliccando 'Calcola il mio ROI' accetti di ricevere comunicazioni commerciali da GeoTapp. Puoi disiscriverti in qualsiasi momento.",
  "next": "Avanti",
  "back": "Indietro",
  "results_title": "Il tuo risparmio stimato con GeoTapp",
  "results_subtitle": "Basato sui dati che hai inserito",
  "results_admin": "Risparmio burocrazia e reportistica",
  "results_dispute": "Risparmio su contestazioni e dispute",
  "results_coord": "Risparmio coordinamento squadre",
  "results_total": "Risparmio annuo totale",
  "results_payback": "Payback stimato",
  "results_payback_unit": "mesi",
  "results_roi": "ROI stimato",
  "results_cta": "Inizia il trial gratuito di 14 giorni",
  "results_disclaimer": "Stima indicativa basata su medie di settore. I risultati reali possono variare.",
  "per_anno": "/ anno",
  "label_operators": "operatori",
  "embed_title": "Calcolatore ROI GeoTapp"
}
```

**Step 2: Add `roi` section to `en.json`**

```json
"roi": {
  "meta_title": "GeoTapp ROI Calculator — Discover Your Real Savings",
  "meta_desc": "Calculate in 2 minutes how much you'd save with GeoTapp: less paperwork, zero disputes, more productive operators.",
  "hero_title": "Calculate Your ROI with GeoTapp",
  "hero_subtitle": "Enter your company data and discover how much you can save every year.",
  "step1_title": "Your Company",
  "step1_subtitle": "Tell us a bit about yourself",
  "field_settore": "Sector",
  "field_operatori": "Number of operators",
  "settore_installatori": "Installation & Maintenance",
  "settore_pulizie": "Cleaning & Sanitation",
  "settore_sicurezza": "Security & Surveillance",
  "settore_altro": "Other sector",
  "step2_title": "Your Current Situation",
  "step2_subtitle": "Be precise: the more accurate the data, the more accurate the calculation",
  "field_siti": "Sites visited per day (per operator)",
  "field_ore_admin": "Hours/week spent on admin and reporting",
  "field_contestazioni": "Client disputes per month (unpaid, claims, etc.)",
  "field_costo_orario": "Average hourly cost of an operator (€)",
  "step3_title": "Where should we send your report?",
  "step3_subtitle": "Your personalised results arrive instantly. No spam.",
  "field_nome": "Full name",
  "field_email": "Business email",
  "field_telefono": "Phone (optional)",
  "cta_calcola": "Calculate My ROI",
  "consent_text": "By clicking 'Calculate My ROI' you agree to receive commercial communications from GeoTapp. You can unsubscribe at any time.",
  "next": "Next",
  "back": "Back",
  "results_title": "Your Estimated Savings with GeoTapp",
  "results_subtitle": "Based on the data you entered",
  "results_admin": "Admin & reporting savings",
  "results_dispute": "Savings on disputes & claims",
  "results_coord": "Team coordination savings",
  "results_total": "Total annual savings",
  "results_payback": "Estimated payback",
  "results_payback_unit": "months",
  "results_roi": "Estimated ROI",
  "results_cta": "Start Your Free 14-Day Trial",
  "results_disclaimer": "Indicative estimate based on industry averages. Actual results may vary.",
  "per_anno": "/ year",
  "label_operators": "operators",
  "embed_title": "GeoTapp ROI Calculator"
}
```

**Step 3: Add `roi` section to `de.json`**

```json
"roi": {
  "meta_title": "GeoTapp ROI-Rechner — Entdecken Sie Ihre echten Einsparungen",
  "meta_desc": "Berechnen Sie in 2 Minuten, wie viel Sie mit GeoTapp sparen: weniger Verwaltung, null Streitigkeiten, produktivere Mitarbeiter.",
  "hero_title": "Berechnen Sie Ihren ROI mit GeoTapp",
  "hero_subtitle": "Geben Sie Ihre Unternehmensdaten ein und entdecken Sie, wie viel Sie jährlich sparen können.",
  "step1_title": "Ihr Unternehmen",
  "step1_subtitle": "Erzählen Sie uns ein bisschen über sich",
  "field_settore": "Branche",
  "field_operatori": "Anzahl der Mitarbeiter",
  "settore_installatori": "Installation & Wartung",
  "settore_pulizie": "Reinigung & Desinfektion",
  "settore_sicurezza": "Sicherheit & Bewachung",
  "settore_altro": "Andere Branche",
  "step2_title": "Ihre aktuelle Situation",
  "step2_subtitle": "Seien Sie präzise: Je genauer die Daten, desto genauer die Berechnung",
  "field_siti": "Täglich besuchte Standorte (pro Mitarbeiter)",
  "field_ore_admin": "Stunden/Woche für Verwaltung und Berichte",
  "field_contestazioni": "Kundenstreitigkeiten pro Monat (unbezahlt, Ansprüche usw.)",
  "field_costo_orario": "Durchschnittliche Stundenkosten eines Mitarbeiters (€)",
  "step3_title": "Wohin sollen wir Ihren Bericht senden?",
  "step3_subtitle": "Ihre personalisierten Ergebnisse kommen sofort. Kein Spam.",
  "field_nome": "Vor- und Nachname",
  "field_email": "Geschäftliche E-Mail",
  "field_telefono": "Telefon (optional)",
  "cta_calcola": "Meinen ROI berechnen",
  "consent_text": "Mit dem Klick auf 'Meinen ROI berechnen' stimmen Sie zu, kommerzielle Mitteilungen von GeoTapp zu erhalten. Sie können sich jederzeit abmelden.",
  "next": "Weiter",
  "back": "Zurück",
  "results_title": "Ihre geschätzten Einsparungen mit GeoTapp",
  "results_subtitle": "Basierend auf den von Ihnen eingegebenen Daten",
  "results_admin": "Einsparungen bei Verwaltung & Berichten",
  "results_dispute": "Einsparungen bei Streitigkeiten & Ansprüchen",
  "results_coord": "Einsparungen bei der Teamkoordination",
  "results_total": "Gesamte jährliche Einsparungen",
  "results_payback": "Geschätzte Amortisationszeit",
  "results_payback_unit": "Monate",
  "results_roi": "Geschätzter ROI",
  "results_cta": "Starten Sie die kostenlose 14-Tage-Testphase",
  "results_disclaimer": "Indikative Schätzung basierend auf Branchendurchschnittswerten. Tatsächliche Ergebnisse können abweichen.",
  "per_anno": "/ Jahr",
  "label_operators": "Mitarbeiter",
  "embed_title": "GeoTapp ROI-Rechner"
}
```

**Step 4: Add `roi` section to `nl.json`**

```json
"roi": {
  "meta_title": "GeoTapp ROI-Calculator — Ontdek uw echte besparingen",
  "meta_desc": "Bereken in 2 minuten hoeveel u bespaart met GeoTapp: minder administratie, nul geschillen, productievere medewerkers.",
  "hero_title": "Bereken uw ROI met GeoTapp",
  "hero_subtitle": "Voer uw bedrijfsgegevens in en ontdek hoeveel u jaarlijks kunt besparen.",
  "step1_title": "Uw bedrijf",
  "step1_subtitle": "Vertel ons iets over uzelf",
  "field_settore": "Sector",
  "field_operatori": "Aantal medewerkers",
  "settore_installatori": "Installatie & Onderhoud",
  "settore_pulizie": "Schoonmaak & Desinfectie",
  "settore_sicurezza": "Beveiliging & Bewaking",
  "settore_altro": "Andere sector",
  "step2_title": "Uw huidige situatie",
  "step2_subtitle": "Wees precies: hoe nauwkeuriger de gegevens, hoe nauwkeuriger de berekening",
  "field_siti": "Dagelijks bezochte locaties (per medewerker)",
  "field_ore_admin": "Uur/week besteed aan administratie en rapportage",
  "field_contestazioni": "Klantgeschillen per maand (onbetaald, claims, enz.)",
  "field_costo_orario": "Gemiddelde uurkosten van een medewerker (€)",
  "step3_title": "Waar sturen we uw rapport naartoe?",
  "step3_subtitle": "Uw gepersonaliseerde resultaten komen direct. Geen spam.",
  "field_nome": "Voor- en achternaam",
  "field_email": "Zakelijk e-mailadres",
  "field_telefono": "Telefoon (optioneel)",
  "cta_calcola": "Bereken mijn ROI",
  "consent_text": "Door op 'Bereken mijn ROI' te klikken stemt u ermee in commerciële communicatie van GeoTapp te ontvangen. U kunt zich op elk moment afmelden.",
  "next": "Volgende",
  "back": "Terug",
  "results_title": "Uw geschatte besparingen met GeoTapp",
  "results_subtitle": "Gebaseerd op de door u ingevoerde gegevens",
  "results_admin": "Besparingen op administratie & rapportage",
  "results_dispute": "Besparingen op geschillen & claims",
  "results_coord": "Besparingen op teamcoördinatie",
  "results_total": "Totale jaarlijkse besparingen",
  "results_payback": "Geschatte terugverdientijd",
  "results_payback_unit": "maanden",
  "results_roi": "Geschatte ROI",
  "results_cta": "Start uw gratis 14-daagse proefperiode",
  "results_disclaimer": "Indicatieve schatting op basis van sectorgemiddelden. Werkelijke resultaten kunnen variëren.",
  "per_anno": "/ jaar",
  "label_operators": "medewerkers",
  "embed_title": "GeoTapp ROI-Calculator"
}
```

**Step 5: Commit**

```bash
git add src/dictionaries/it.json src/dictionaries/en.json src/dictionaries/de.json src/dictionaries/nl.json
git commit -m "feat(roi): add roi_calculator dictionary keys for IT/EN/DE/NL"
```

---

### Task 3: API Route `/api/roi-calculator`

**Files:**
- Create: `src/app/api/roi-calculator/route.ts`

**Step 1: Create the file**

```typescript
// src/app/api/roi-calculator/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface RoiPayload {
  // Step 1
  settore: string;
  operatori: number;
  // Step 2
  siti: number;
  ore_admin: number;
  contestazioni: number;
  costo_orario: number;
  // Step 3
  nome: string;
  email: string;
  telefono?: string;
  locale: string;
}

function calcRoi(p: RoiPayload) {
  const risparmio_admin = p.ore_admin * 0.65 * p.costo_orario * 52;
  const risparmio_dispute = p.contestazioni * 12 * 180;
  const risparmio_coord = p.operatori * 1.0 * p.costo_orario * 52;
  const risparmio_totale = risparmio_admin + risparmio_dispute + risparmio_coord;
  const costo_geotapp_annuo = p.operatori * 25 * 12;
  const payback_mesi = Math.ceil(costo_geotapp_annuo / (risparmio_totale / 12));
  const roi_pct = Math.round((risparmio_totale - costo_geotapp_annuo) / costo_geotapp_annuo * 100);
  return { risparmio_admin, risparmio_dispute, risparmio_coord, risparmio_totale, costo_geotapp_annuo, payback_mesi, roi_pct };
}

function fmt(n: number) {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}

export async function POST(req: NextRequest) {
  let body: RoiPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Validate required fields
  const { settore, operatori, siti, ore_admin, contestazioni, costo_orario, nome, email } = body;
  if (!settore || !nome || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  if ([operatori, siti, ore_admin, contestazioni, costo_orario].some(v => typeof v !== 'number' || v < 0)) {
    return NextResponse.json({ error: 'Invalid numeric fields' }, { status: 400 });
  }

  const roi = calcRoi(body);

  // Send email via IONOS SMTP
  const toEmail = process.env.ROI_EMAIL_TO ?? 'michele@geotapp.com';
  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.it',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const htmlBody = `
    <h2>Nuovo lead ROI Calculator — GeoTapp</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><th style="text-align:left;padding:8px;background:#f5f5f5">Campo</th><th style="text-align:left;padding:8px;background:#f5f5f5">Valore</th></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Nome</td><td style="padding:8px;border-top:1px solid #eee">${nome}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Email</td><td style="padding:8px;border-top:1px solid #eee">${email}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Telefono</td><td style="padding:8px;border-top:1px solid #eee">${body.telefono ?? '—'}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Settore</td><td style="padding:8px;border-top:1px solid #eee">${settore}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Operatori</td><td style="padding:8px;border-top:1px solid #eee">${operatori}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Siti/giorno</td><td style="padding:8px;border-top:1px solid #eee">${siti}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Ore admin/settimana</td><td style="padding:8px;border-top:1px solid #eee">${ore_admin}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Contestazioni/mese</td><td style="padding:8px;border-top:1px solid #eee">${contestazioni}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Costo orario</td><td style="padding:8px;border-top:1px solid #eee">€${costo_orario}</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Lingua</td><td style="padding:8px;border-top:1px solid #eee">${body.locale}</td></tr>
    </table>
    <h3 style="margin-top:24px">Risultati ROI</h3>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px;border-top:1px solid #eee">Risparmio burocrazia</td><td style="padding:8px;border-top:1px solid #eee"><strong>${fmt(roi.risparmio_admin)}/anno</strong></td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Risparmio contestazioni</td><td style="padding:8px;border-top:1px solid #eee"><strong>${fmt(roi.risparmio_dispute)}/anno</strong></td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Risparmio coordinamento</td><td style="padding:8px;border-top:1px solid #eee"><strong>${fmt(roi.risparmio_coord)}/anno</strong></td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee"><strong>TOTALE RISPARMIO</strong></td><td style="padding:8px;border-top:1px solid #eee"><strong style="color:#22c55e;font-size:1.2em">${fmt(roi.risparmio_totale)}/anno</strong></td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Costo GeoTapp stimato</td><td style="padding:8px;border-top:1px solid #eee">${fmt(roi.costo_geotapp_annuo)}/anno</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">Payback stimato</td><td style="padding:8px;border-top:1px solid #eee">${roi.payback_mesi} mesi</td></tr>
      <tr><td style="padding:8px;border-top:1px solid #eee">ROI stimato</td><td style="padding:8px;border-top:1px solid #eee"><strong>${roi.roi_pct}%</strong></td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"GeoTapp ROI Calculator" <${process.env.EMAIL_FROM ?? 'info@geotapp.com'}>`,
      to: toEmail,
      subject: `Nuovo lead ROI: ${nome} (${settore}) — risparmio ${fmt(roi.risparmio_totale)}/anno`,
      html: htmlBody,
    });
  } catch (err) {
    // Log but don't fail the request — user still gets their results
    console.error('[roi-calculator] email send failed:', err);
  }

  return NextResponse.json({ ok: true, roi });
}
```

**Step 2: Commit**

```bash
git add src/app/api/roi-calculator/route.ts
git commit -m "feat(roi): add /api/roi-calculator route with email notification"
```

---

### Task 4: ROI Calculator Client Component

**Files:**
- Create: `src/components/roi-calculator/RoiCalculatorClient.tsx`

This is the main interactive component. Multi-step form with Framer Motion transitions, animated result counters, lead gate.

**Step 1: Create the component**

```tsx
// src/components/roi-calculator/RoiCalculatorClient.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AppLocale } from '@/lib/i18n/config';
import type { getDictionary } from '@/lib/i18n/dictionaries';

type Dict = Awaited<ReturnType<typeof getDictionary>>;
type RoiDict = Dict['roi'];

interface Props {
  dict: RoiDict;
  locale: AppLocale;
  trialUrl: string;
  embed?: boolean;
}

interface FormData {
  settore: string;
  operatori: number;
  siti: number;
  ore_admin: number;
  contestazioni: number;
  costo_orario: number;
  nome: string;
  email: string;
  telefono: string;
}

interface RoiResult {
  risparmio_admin: number;
  risparmio_dispute: number;
  risparmio_coord: number;
  risparmio_totale: number;
  costo_geotapp_annuo: number;
  payback_mesi: number;
  roi_pct: number;
}

const SETTORI = ['installatori', 'pulizie', 'sicurezza', 'altro'] as const;

function useCountUp(target: number, duration = 1200, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active || target === 0) { setValue(target); return; }
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, active, duration]);
  return value;
}

function formatEur(n: number, locale: string) {
  return new Intl.NumberFormat(locale === 'de' ? 'de-DE' : locale === 'nl' ? 'nl-NL' : locale === 'en' ? 'en-GB' : 'it-IT', {
    style: 'currency', currency: 'EUR', maximumFractionDigits: 0,
  }).format(n);
}

function SliderField({ label, value, min, max, step = 1, unit, onChange }: {
  label: string; value: number; min: number; max: number; step?: number; unit?: string; onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm font-bold text-blue-600">{unit === '€' ? `€${value}` : `${value}${unit ? ` ${unit}` : ''}`}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600"
      />
      <div className="flex justify-between text-xs text-gray-400">
        <span>{unit === '€' ? `€${min}` : `${min}`}</span>
        <span>{unit === '€' ? `€${max}` : `${max}`}</span>
      </div>
    </div>
  );
}

function ResultCard({ label, value, highlight, countActive, locale }: {
  label: string; value: number; highlight?: boolean; countActive: boolean; locale: string;
}) {
  const animated = useCountUp(value, 1400, countActive);
  return (
    <div className={`rounded-xl p-4 ${highlight ? 'bg-green-50 border-2 border-green-400' : 'bg-gray-50 border border-gray-200'}`}>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className={`font-bold ${highlight ? 'text-2xl text-green-600' : 'text-xl text-gray-800'}`}>
        {formatEur(animated, locale)}
      </p>
    </div>
  );
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function RoiCalculatorClient({ dict, locale, trialUrl, embed = false }: Props) {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [form, setForm] = useState<FormData>({
    settore: '', operatori: 10, siti: 5, ore_admin: 8,
    contestazioni: 3, costo_orario: 22, nome: '', email: '', telefono: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<RoiResult | null>(null);
  const [countActive, setCountActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Notify parent iframe of height changes
  useEffect(() => {
    if (!embed) return;
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      window.parent.postMessage({ type: 'roi-height', height: el.scrollHeight }, '*');
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [embed]);

  const update = (key: keyof FormData, value: string | number) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const goNext = () => { setDir(1); setStep(s => s + 1); };
  const goBack = () => { setDir(-1); setStep(s => s - 1); };

  const canStep1 = form.settore !== '';
  const canStep2 = true; // sliders always valid

  const handleSubmit = async () => {
    if (!form.nome.trim() || !form.email.trim()) {
      setError('Compila nome e email');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/roi-calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      });
      if (!res.ok) throw new Error('Server error');
      const data = await res.json();
      setResult(data.roi);
      setDir(1);
      setStep(3);
      setTimeout(() => setCountActive(true), 300);
    } catch {
      setError('Errore di rete. Riprova.');
    } finally {
      setLoading(false);
    }
  };

  const wrapperClass = embed
    ? 'min-h-screen bg-white'
    : 'min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4';

  return (
    <div ref={containerRef} className={wrapperClass}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        {!embed && (
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{dict.hero_title}</h1>
            <p className="text-gray-600">{dict.hero_subtitle}</p>
          </div>
        )}

        {/* Progress bar (steps 0-2) */}
        {step < 3 && (
          <div className="flex gap-2 mb-8">
            {[0, 1, 2].map(i => (
              <div key={i} className={`flex-1 h-1.5 rounded-full transition-colors duration-300 ${i <= step ? 'bg-blue-600' : 'bg-gray-200'}`} />
            ))}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="p-8"
            >
              {/* STEP 0: Azienda */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{dict.step1_title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{dict.step1_subtitle}</p>
                  </div>

                  {/* Settore cards */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-3">{dict.field_settore}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {SETTORI.map(s => (
                        <button
                          key={s}
                          onClick={() => update('settore', s)}
                          className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                            form.settore === s
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-gray-200 text-gray-600 hover:border-blue-300'
                          }`}
                        >
                          {dict[`settore_${s}` as keyof RoiDict]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <SliderField
                    label={dict.field_operatori}
                    value={form.operatori} min={1} max={200}
                    onChange={v => update('operatori', v)}
                  />

                  <button
                    disabled={!canStep1}
                    onClick={goNext}
                    className="w-full py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    {dict.next} →
                  </button>
                </div>
              )}

              {/* STEP 1: Situazione attuale */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{dict.step2_title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{dict.step2_subtitle}</p>
                  </div>

                  <SliderField label={dict.field_siti} value={form.siti} min={1} max={30} onChange={v => update('siti', v)} />
                  <SliderField label={dict.field_ore_admin} value={form.ore_admin} min={1} max={40} onChange={v => update('ore_admin', v)} />
                  <SliderField label={dict.field_contestazioni} value={form.contestazioni} min={0} max={30} onChange={v => update('contestazioni', v)} />
                  <SliderField label={dict.field_costo_orario} value={form.costo_orario} min={10} max={80} unit="€" onChange={v => update('costo_orario', v)} />

                  <div className="flex gap-3">
                    <button onClick={goBack} className="flex-1 py-3 rounded-xl font-semibold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors">
                      ← {dict.back}
                    </button>
                    <button onClick={goNext} className="flex-1 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                      {dict.next} →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Lead gate */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{dict.step3_title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{dict.step3_subtitle}</p>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text" placeholder={dict.field_nome} value={form.nome}
                      onChange={e => update('nome', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <input
                      type="email" placeholder={dict.field_email} value={form.email}
                      onChange={e => update('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <input
                      type="tel" placeholder={dict.field_telefono} value={form.telefono}
                      onChange={e => update('telefono', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-base"
                  >
                    {loading ? '...' : dict.cta_calcola}
                  </button>

                  <p className="text-xs text-gray-400 text-center leading-relaxed">{dict.consent_text}</p>

                  <button onClick={goBack} className="w-full text-sm text-gray-500 hover:text-gray-700">
                    ← {dict.back}
                  </button>
                </div>
              )}

              {/* STEP 3: Results */}
              {step === 3 && result && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{dict.results_title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{dict.results_subtitle}</p>
                  </div>

                  {/* Breakdown */}
                  <div className="grid grid-cols-1 gap-3">
                    <ResultCard label={dict.results_admin} value={result.risparmio_admin} countActive={countActive} locale={locale} />
                    <ResultCard label={dict.results_dispute} value={result.risparmio_dispute} countActive={countActive} locale={locale} />
                    <ResultCard label={dict.results_coord} value={result.risparmio_coord} countActive={countActive} locale={locale} />
                  </div>

                  {/* Total + ROI */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white text-center"
                  >
                    <p className="text-sm opacity-80 mb-1">{dict.results_total}</p>
                    <p className="text-4xl font-black">
                      {formatEur(useCountUp(result.risparmio_totale, 1600, countActive), locale)}
                    </p>
                    <p className="text-sm opacity-80 mt-1">{dict.per_anno}</p>
                  </motion.div>

                  {/* Payback + ROI % */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-blue-50 border border-blue-200 p-4 text-center">
                      <p className="text-xs text-gray-500 mb-1">{dict.results_payback}</p>
                      <p className="text-2xl font-bold text-blue-600">{result.payback_mesi}</p>
                      <p className="text-xs text-gray-500">{dict.results_payback_unit}</p>
                    </div>
                    <div className="rounded-xl bg-purple-50 border border-purple-200 p-4 text-center">
                      <p className="text-xs text-gray-500 mb-1">{dict.results_roi}</p>
                      <p className="text-2xl font-bold text-purple-600">{result.roi_pct}%</p>
                    </div>
                  </div>

                  <a
                    href={trialUrl}
                    className="block w-full py-4 rounded-xl font-bold text-white text-center bg-blue-600 hover:bg-blue-700 transition-colors text-base shadow-md"
                  >
                    {dict.results_cta} →
                  </a>

                  <p className="text-xs text-gray-400 text-center">{dict.results_disclaimer}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
```

**Important note on `useCountUp` in JSX:** The `useCountUp` call in the results JSX is inside a component body loop — extract it to a named sub-component `<AnimatedTotal value={...} />` that calls `useCountUp` at the top level. React rules prohibit calling hooks conditionally or inside JSX expressions.

Fix: Replace the inline `{formatEur(useCountUp(...), locale)}` in the green card with a named component:

```tsx
function AnimatedTotal({ value, locale, active }: { value: number; locale: string; active: boolean }) {
  const animated = useCountUp(value, 1600, active);
  return <>{formatEur(animated, locale)}</>;
}
```

And in JSX: `<AnimatedTotal value={result.risparmio_totale} locale={locale} active={countActive} />`

**Step 2: Commit**

```bash
git add src/components/roi-calculator/RoiCalculatorClient.tsx
git commit -m "feat(roi): add RoiCalculatorClient multi-step component"
```

---

### Task 5: Locale Page Wrapper

**Files:**
- Create: `src/app/[locale]/roi-calculator/page.tsx`

**Step 1: Create the page**

```typescript
// src/app/[locale]/roi-calculator/page.tsx
import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { generateLocaleStaticParams } from '@/lib/i18n/static-params';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import RoiCalculatorClient from '@/components/roi-calculator/RoiCalculatorClient';

export { generateLocaleStaticParams as generateStaticParams };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as AppLocale);
  return {
    title: { absolute: dict.roi.meta_title },
    description: dict.roi.meta_desc,
    alternates: buildLocaleAlternates(locale, '/roi-calculator/'),
  };
}

export default async function RoiCalculatorPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ embed?: string }>;
}) {
  const { locale } = await params;
  const { embed } = await searchParams;
  const safeLocale = SUPPORTED_LOCALES.includes(locale as AppLocale) ? (locale as AppLocale) : 'it';
  const dict = getDictionary(safeLocale);
  const trialUrl = `/${safeLocale}/trial/`;

  return (
    <RoiCalculatorClient
      dict={dict.roi}
      locale={safeLocale}
      trialUrl={trialUrl}
      embed={embed === '1'}
    />
  );
}
```

**Step 2: Commit**

```bash
git add src/app/[locale]/roi-calculator/page.tsx
git commit -m "feat(roi): add [locale]/roi-calculator page with metadata"
```

---

### Task 6: WordPress Iframe Embed

The page already supports `?embed=1` via the server component — pass it to the client which hides the hero header and sends postMessage height updates.

**WordPress shortcode** (add to `blog-functions-additions.php` in docs/plans for reference, or directly in WP):

```php
// Add to WordPress functions.php or a plugin
function geotapp_roi_calculator_shortcode($atts) {
    $atts = shortcode_atts(['locale' => 'it', 'height' => '700'], $atts);
    $locale = sanitize_text_field($atts['locale']);
    $height = intval($atts['height']);
    $url = "https://geotapp.com/{$locale}/roi-calculator/?embed=1";
    return '<iframe id="geotapp-roi-calc" src="' . esc_url($url) . '" width="100%" height="' . $height . '" frameborder="0" style="border:none;width:100%;"></iframe>
<script>window.addEventListener("message",function(e){if(e.data&&e.data.type==="roi-height"){var f=document.getElementById("geotapp-roi-calc");if(f)f.style.height=(e.data.height+40)+"px";}});</script>';
}
add_shortcode('geotapp_roi', 'geotapp_roi_calculator_shortcode');
```

Usage in WP post: `[geotapp_roi locale="it"]`

**Step 1: Update the blog article CTA**

In the WordPress article at `https://geotapp.com/blog/2026/04/16/roi-gps-tracking-field-service-formula-esempi/`, replace the existing CTA button block with the shortcode:

```
[geotapp_roi locale="it"]
```

The shortcode can be added via the WP editor (switch to Text/HTML view).

**Step 2: Commit the shortcode PHP snippet for reference**

Add the shortcode to `docs/plans/blog-functions-additions.php` (the existing file already in docs/plans):

```bash
git add docs/plans/blog-functions-additions.php
git commit -m "feat(roi): add WordPress shortcode for roi-calculator iframe embed"
```

---

### Task 7: Build + Push to Main

**Step 1: Run build to catch type errors**

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
npm run build
```

Expected: build completes without errors. Fix any TypeScript errors before proceeding.

**Step 2: Push wip branch**

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem
git push origin wip/2026-03-11-pre-fleet-snapshot
```

**Step 3: Merge to main**

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main
git merge wip/2026-03-11-pre-fleet-snapshot --no-ff -m "merge(roi): roi calculator IT/EN/DE/NL with lead gate and email notification"
git push origin main
```

---

## Common Pitfalls

- **Hook in JSX**: Never call `useCountUp` (or any hook) inside JSX expressions or conditionally. Extract to a named component.
- **`searchParams` in Next.js 15**: Must be `await`-ed — it's a Promise.
- **IONOS SMTP host**: Use `smtp.ionos.it` (port 587) not `smtp.ionos.com`.
- **Dictionary type**: `getDictionary()` returns a synchronous value (it imports JSON statically), not a Promise — no need to `await` it.
- **Framer Motion `AnimatePresence`**: Requires unique `key` on each child — use `step` as the key.
- **`embed` iframe height**: `ResizeObserver` must be cleaned up on unmount to avoid memory leaks.
