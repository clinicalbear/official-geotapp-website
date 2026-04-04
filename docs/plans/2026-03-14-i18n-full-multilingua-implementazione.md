# i18n Full Multilingua — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Translate the entire geotapp-site into 11 languages (IT existing, EN existing, + 9 new) with market-optimized sector pages per locale and automatic geolocation-based routing.

**Architecture:** Separate JSON file per locale (`src/dictionaries/[locale].json`) matching the existing `en.json`/`it.json` structure. Market-optimized sector content via `src/content/settori/[settore]/[locale].ts` files with a dynamic-import registry. Reusable `SettorePageLayout` server component. Verifier page refactored from `isItalian` to a full content registry.

**Tech Stack:** Next.js App Router (server components), TypeScript, existing i18n middleware (no changes needed), `src/lib/i18n/dictionaries.ts` refactored to import JSON files.

**Design doc:** `docs/plans/2026-03-14-i18n-full-multilingua-design.md`

**Parallel task groups:**
- Tasks 2–10 (9 JSON dictionaries) are fully independent — run in parallel
- Tasks 12–14 (3 settori content groups) are fully independent — run in parallel
- Tasks 11, 15, 16, 17 must run after their prerequisites

---

## Task 1: Foundation — SettoreContent type + SettorePageLayout component

**Files:**
- Create: `src/content/settori/types.ts`
- Create: `src/components/SettorePageLayout.tsx`

**Step 1: Create `src/content/settori/types.ts`**

```typescript
import type { AppLocale } from '@/lib/i18n/config';

export interface SettoreContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    h1_line1: string;
    h1_line2: string;
    subtitle: string;
    cta_primary: string;
    cta_note: string;
  };
  pain: {
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  workflow: {
    title: string;
    subtitle: string;
    steps: Array<{ title: string; desc: string }>;
  };
  features: {
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  schema_sector_name: string;
}

export type SettoreSlug = 'installatori' | 'pulizie' | 'sicurezza';
```

**Step 2: Create `src/components/SettorePageLayout.tsx`**

This component replaces the three `content.tsx` files with a single layout driven by `SettoreContent`. It must:
- Be a server component (no `'use client'`)
- Accept `content: SettoreContent`, `locale: AppLocale`, `settore: SettoreSlug`
- Emit the same visual structure as the existing `installatori/content.tsx` (hero, pain, workflow, features, testimonial, faq, cta sections)
- Produce locale-aware links (via `localizePath`)
- Emit FAQ + BreadcrumbList LD+JSON `<Script>` tags with correct apostrophes in content (use the raw `content.faq.items` strings — apostrophes must be correct in content files, not escaped here)

```tsx
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, CheckCircle2, Clock, FileText } from 'lucide-react';
import { localizePath } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent, SettoreSlug } from '@/content/settori/types';

interface Props {
  content: SettoreContent;
  locale: AppLocale;
  settore: SettoreSlug;
}

const SETTORE_COLORS: Record<SettoreSlug, { badge: string; h1: string; accent: string }> = {
  installatori: { badge: 'bg-indigo-100 text-indigo-700', h1: 'text-indigo-600', accent: 'indigo' },
  pulizie:      { badge: 'bg-cyan-100 text-cyan-700',    h1: 'text-cyan-600',    accent: 'cyan'   },
  sicurezza:    { badge: 'bg-amber-100 text-amber-700',  h1: 'text-amber-600',   accent: 'amber'  },
};

export default function SettorePageLayout({ content, locale, settore }: Props) {
  const colors = SETTORE_COLORS[settore];
  const contactLink = localizePath('/contact', locale);
  const pricingLink = localizePath('/pricing', locale);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: content.schema_sector_name, item: `https://geotapp.com/${locale}/settori/${settore}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <Script
        id={`${settore}-breadcrumb-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`${settore}-faq-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 px-6 pb-24 pt-32">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className={`mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-wide ${colors.badge}`}>
                {content.hero.badge}
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-[1.1] text-slate-900 md:text-6xl">
                {content.hero.h1_line1}
                <span className={`block ${colors.h1}`}>{content.hero.h1_line2}</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-slate-600">{content.hero.subtitle}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={contactLink}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-indigo-700 transition-colors"
                >
                  {content.hero.cta_primary} <ArrowRight size={18} />
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-400">{content.hero.cta_note}</p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white shadow-2xl">
                <div className="space-y-4">
                  {content.features.items.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 text-green-400 shrink-0" size={20} />
                      <div>
                        <div className="font-bold text-sm">{f.title}</div>
                        <div className="text-slate-400 text-xs mt-1">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain section */}
      <section className="px-6 py-24 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{content.pain.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.pain.items.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <FileText className="text-red-400 mb-4" size={28} />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow section */}
      <section className="px-6 py-24 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{content.workflow.title}</h2>
          <p className="text-xl text-slate-600 mb-16">{content.workflow.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {content.workflow.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="px-6 py-24 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{content.features.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.items.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-200">
                <Clock className="text-indigo-400 mb-4" size={28} />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-16 bg-indigo-50">
        <div className="container mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium text-slate-800 italic mb-6">
            &ldquo;{content.testimonial.quote}&rdquo;
          </blockquote>
          <p className="font-bold text-slate-900">{content.testimonial.author}</p>
          <p className="text-slate-500 text-sm">{content.testimonial.role}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">{content.faq.title}</h2>
          <p className="text-center text-slate-500 mb-12">{content.faq.subtitle}</p>
          <div className="space-y-6">
            {content.faq.items.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">{item.q}</h3>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-slate-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">{content.cta.title}</h2>
          <p className="text-slate-300 text-xl mb-10">{content.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={contactLink}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-bold text-white hover:bg-indigo-700 transition-colors"
            >
              {content.cta.primary} <ArrowRight size={18} />
            </Link>
            <Link
              href={pricingLink}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-8 py-4 font-bold text-slate-300 hover:border-slate-400 transition-colors"
            >
              {content.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

**Step 3: Verify TypeScript compiles**

```bash
cd geotapp-site && npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors for these two new files.

**Step 4: Commit**

```bash
git add src/content/settori/types.ts src/components/SettorePageLayout.tsx
git commit -m "feat(i18n): add SettoreContent type and SettorePageLayout server component"
```

---

## Tasks 2–10: Create 9 locale dictionary JSON files

> **PARALLEL:** Tasks 2–10 are independent. Dispatch as parallel subagents.

Each task follows this pattern:
1. Create the JSON file at `src/dictionaries/[locale].json`
2. The file must contain ALL keys from `src/dictionaries/en.json` (319 lines) — translated for that locale
3. Market-specific strings: payroll software names in `product_pages.app.systems.payroll-bridge.full` must match the locale's market (see table below)
4. Run `npx tsc --noEmit` after creation (the file is not imported yet but you can add a temporary import to check)
5. Commit

**Payroll software per locale (for `payroll-bridge` system description):**
| Locale | Software names to use |
|--------|----------------------|
| de     | DATEV, Lexware, Personio, LODAS |
| fr     | Silae, PayFit, ADP, Cegid |
| es     | A3nómina, Sage, Nominasol |
| pt     | Primavera, PHC, TOConline |
| nl     | AFAS, NMBRS, Exact |
| sv     | Visma, Fortnox, Hogia |
| da     | Uniconta, e-conomic, Danløn |
| nb     | Visma Lønn, Tripletex, Datakraft |
| ru     | 1С:ЗУП, СБИС, Контур.Зарплата |

**Russian note:** `ru.json` must be written entirely in Cyrillic script — no transliteration.

---

### Task 2: `src/dictionaries/de.json`

```json
{
  "navbar": {
    "products": "Produkte",
    "pricing": "Preise",
    "blog": "Blog",
    "contact": "Kontakt",
    "login": "Anmelden",
    "cta": "Demo anfragen"
  },
  "footer": {
    "tagline": "Außendienst erfasst. Einsätze organisiert. Berichte prüfbar.",
    "privacy": "Datenschutz",
    "terms": "Nutzungsbedingungen",
    "rights": "Alle Rechte vorbehalten."
  },
  "landing": {
    "hero_badge": "GeoTapp — Außendienst im Griff",
    "hero_title": "Kontrolle über den<br />Außendienst.",
    "hero_subtitle": "GeoTapp gibt Unternehmen mit Technikern und Außendienstmitarbeitern echte Kontrolle über geleistete Arbeit: Tätigkeiten erfasst, Einsätze organisiert, Berichte prüfbar.",
    "hero_cta_primary": "Demo anfragen",
    "hero_cta_secondary": "Produkte entdecken",
    "features_title": "Was Sie wirklich brauchen",
    "features_subtitle": "Drei integrierte Werkzeuge zur Kontrolle des Außendienstes vom Büro aus.",
    "cta_title": "Bereit, den Außendienst zu kontrollieren?",
    "cta_subtitle": "Schließen Sie sich Unternehmen an, die GeoTapp nutzen, um Einsätze zu organisieren und prüfbare Arbeitsberichte zu erstellen.",
    "cta_button": "Demo anfragen"
  },
  "home_sections": {
    "flow": {
      "badge": "GeoTapp Flow",
      "title": "Außendienst aus einer Zentrale koordinieren.",
      "subtitle": "Flow ist das System, das das Büro nutzt, um Aufträge zu verwalten, Tätigkeiten zuzuweisen, Fortschritte zu überwachen und strukturierte Arbeitsberichte zu erstellen. <strong class=\"text-slate-900\">Weniger interne Reibung, mehr echte Kontrolle.</strong>",
      "features": {
        "crm": "<strong>Auftragsverwaltung:</strong> Einsätze erstellen, Techniker zuweisen und Fortschritte in Echtzeit überwachen.",
        "pipeline": "<strong>Strukturierte Berichte:</strong> Jeder abgeschlossene Auftrag erzeugt rückverfolgbare Dokumentation für den Kunden."
      },
      "link": "GeoTapp Flow entdecken"
    },
    "app": {
      "badge": "GeoTapp TimeTracker",
      "title": "Der Techniker erfasst. Das Büro kontrolliert.",
      "subtitle": "TimeTracker ist die mobile App für Techniker zur Erfassung von Außendiensttätigkeiten. Ein- und Ausstempeln, Fotos und Notizen zum jeweiligen Auftrag. <strong>Verfügbar für Android und iOS.</strong>",
      "card_gps": {
        "title": "GPS-Zeiterfassung",
        "desc": "Verifizierter Standort"
      },
      "card_gdpr": {
        "title": "DSGVO-konform",
        "desc": "Kein kontinuierliches Tracking"
      },
      "link": "GeoTapp TimeTracker entdecken"
    },
    "verifier": {
      "badge": "GeoTapp Verifier",
      "title": "Arbeitsberichte, die jeder prüfen kann.",
      "subtitle": "Verifier prüft, ob ein Arbeitsbericht mit den erfassten Betriebsdaten übereinstimmt und nicht verändert wurde. Mehr Transparenz für den Kunden, weniger Streitigkeiten.",
      "features": {
        "integrity": "<strong>Geprüfte Integrität:</strong> Das System gleicht den Bericht mit den tatsächlichen Sitzungsdaten aus dem Außendienst ab.",
        "independent": "<strong>Unabhängige Prüfung:</strong> Jeder kann einen Bericht prüfen, ohne Zugang zur Plattform zu haben."
      },
      "link": "GeoTapp Verifier entdecken"
    },
    "core": {
      "badge": "GeoTapp Plattform",
      "title": "Gebaut für den Außendienst.",
      "subtitle": "Drei integrierte Produkte, ein Ziel: Unternehmen mit Außendienstmitarbeitern die Sichtbarkeit und betriebliche Dokumentation geben, die sie brauchen.",
      "features": [
        {
          "title": "Echte mobile Einsatzfähigkeit",
          "desc": "TimeTracker funktioniert ohne Verbindung und synchronisiert, sobald das Feld wieder online ist. Die Arbeit stoppt nie."
        },
        {
          "title": "Datenschutz by Design",
          "desc": "Der Standort wird <strong>nur</strong> beim Ein- und Ausstempeln erfasst. Kein kontinuierliches Tracking. Vollständig DSGVO-konform."
        },
        {
          "title": "Echtzeitsynchronisation",
          "desc": "Im Außendienst erfasste Tätigkeiten gelangen sofort in Flow, damit das Büro immer ein aktuelles Bild hat."
        },
        {
          "title": "Langfristig prüfbare Berichte",
          "desc": "Mit GeoTapp Verifier kann jeder Bericht unabhängig validiert werden. Erfasste Daten bleiben zuverlässig und verteidigbar."
        }
      ]
    },
    "footer_cta": {
      "title": "Echte Kontrolle über<br />Ihren Außendienst.",
      "subtitle": "GeoTapp Flow, TimeTracker und Verifier arbeiten zusammen, um Ihrem Unternehmen echte Sichtbarkeit und zuverlässige Dokumentation der geleisteten Arbeit zu geben.",
      "button": "Kontakt aufnehmen"
    }
  },
  "pricing": {
    "badge": "GeoTapp Lösungen",
    "title": "Das richtige Produkt wählen.",
    "subtitle": "Praxisnahe Lösungen für Unternehmen mit Technikern und Außendienstmitarbeitern.",
    "vat_note": "Alle Preise zzgl. MwSt. Abrechnung gemäß Nutzungsbedingungen.",
    "categories": {
      "app": {
        "title": "GeoTapp TimeTracker",
        "description": "Mobile App für Außendiensttechniker",
        "products": [
          {
            "name": "GeoTapp TimeTracker",
            "tagline": "Ab",
            "desc": "Die komplette Lösung zur Erfassung von Anwesenheit, Außendiensttätigkeit und Arbeitsnachweisen. Preis pro Nutzer/Jahr.",
            "features": ["Android/iOS App", "GPS-Stempeluhr", "Wochenberichte"],
            "button": "Kalkulator ansehen"
          }
        ]
      },
      "flow": {
        "title": "GeoTapp Flow",
        "description": "Außendienststeuerung und Teamverwaltung",
        "products": [
          {
            "name": "GeoTapp Flow Lifetime",
            "tagline": "Lifetime-Lizenz",
            "desc": "Einmal zahlen, unbegrenzt nutzen. Vollzugang zu GeoTapp Flow ohne laufende Gebühren. Inkl. zukünftiger Updates.",
            "features": ["Vollzugang zu Flow", "Keine monatlichen Gebühren", "Lifetime-Updates inklusive"]
          },
          {
            "name": "GeoTapp Flow Business",
            "tagline": "Für strukturierte Unternehmen",
            "desc": "Erweitertes Einsatzmanagement, unbegrenzte Teams und vorrangiger Support.",
            "features": ["Unbegrenzte Teams", "API-Zugang", "Vorrangiger Support"]
          },
          {
            "name": "GeoTapp Flow Team",
            "tagline": "Für kleine Teams",
            "desc": "Ideal für Arbeitsgruppen, die Koordination und gemeinsame Einsatzsicht benötigen.",
            "features": ["5 Nutzer inklusive", "Auftragsverwaltung", "Basisintegrationen"]
          },
          {
            "name": "GeoTapp Flow Solo",
            "tagline": "Für Einzelunternehmer",
            "desc": "Die volle Leistung von Flow für den selbständig arbeitenden Profi.",
            "features": ["1 Nutzer", "Tätigkeitsverwaltung", "Basisberichte"]
          }
        ]
      }
    }
  },
  "contact": {
    "title": "Sprechen wir über <span class=\"text-primary\">Ihr Geschäft</span>.",
    "subtitle": "Sie möchten wissen, ob GeoTapp zu Ihrem Unternehmen passt. Wir antworten konkret.",
    "guarantee_title": "Antwortgarantie",
    "guarantee_text": "Durchschnittliche Erstantwort innerhalb von 12 Geschäftsstunden. Keine verlorenen Anfragen.",
    "form": {
      "name": "Name",
      "company": "Unternehmen",
      "email": "Geschäftliche E-Mail",
      "reason": "Anfragegrund",
      "message": "Nachricht",
      "send": "Senden"
    }
  },
  "login_hub": {
    "title": "Zugang zu Ihrem <span class=\"text-primary\">Konto</span>.",
    "subtitle": "Wählen Sie das Produkt, mit dem Sie sich verbinden möchten.",
    "flow": {
      "desc": "Einsatzmanagement, Aufträge, Koordination und Berichte.",
      "btn": "In Flow einloggen"
    },
    "timetracker": {
      "desc": "Anwesenheit, Außendiensttätigkeit und Arbeitsnachweise.",
      "btn": "In TimeTracker einloggen"
    }
  },
  "product_pages": {
    "flow": {
      "hero_badge": "GeoTapp Flow — Außendienststeuerung",
      "hero_title": "GeoTapp Flow.<br /><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600\">Operatives Zentrum.</span>",
      "hero_subtitle": "Die Schaltzentrale für Unternehmen mit Außendiensttechnikern und -mitarbeitern. Aufträge verwalten, Teams koordinieren und strukturierte, prüfbare Arbeitsberichte erstellen.",
      "visual_placeholder": "BEDIENFELD",
      "grid_title": "Operative Funktionen",
      "grid_subtitle": "Jedes Modul ist auf echte Außendienstkontrolle ausgelegt. Klicken Sie zum Erkunden.",
      "sectors": {
        "1": "Aufträge und Kunden",
        "2": "Planung und Ressourcen",
        "3": "Kontrolle und Sichtbarkeit"
      },
      "cta_title": "Echte Kontrolle über Ihren Außendienst.",
      "cta_button": "Preise ansehen",
      "modal": {
        "status": "SYSTEMSTATUS: <span class=\"text-green-600\">BETRIEBSBEREIT</span>",
        "encryption": "DATEN: <span class=\"text-slate-400\">GESCHÜTZT</span>",
        "access": "ZUGANG: <span class=\"text-blue-600\">SICHER</span>",
        "close": "Schließen"
      },
      "systems": {
        "nexus-core": {
          "name": "Auftragsverwaltung",
          "short": "Technische Einsätze erstellen und verwalten. Aufgaben zuweisen, Fortschritte überwachen und alles auftragsbezogen verfolgen.",
          "full": "### Zentrale Auftragskontrolle.\n\nJeder Einsatz beginnt als strukturierter Auftrag.\n**Auftragsverwaltung** gibt Ihnen einen klaren Überblick über alle laufenden Arbeiten.\n\n#### Einsatzverwaltung\n\nAuftrag anlegen, Techniker zuweisen, Standort und Datum festlegen.\nStatus überwachen: Offen, In Bearbeitung, Abgeschlossen.\n\n#### Betriebshistorie\n\nJeder Auftrag hat ein vollständiges Archiv mit Tätigkeiten, Fotobeweisen, Notizen und Zeitstempeln.\nDer Kunde fragt, was gemacht wurde? Die Daten sind da. Immer."
        },
        "titan-flow": {
          "name": "Aufgabenzuweisung",
          "short": "Arbeit präzise an Techniker verteilen. Anweisungen, Fristen und operative Prioritäten strukturiert übermitteln.",
          "full": "### Der richtige Auftrag zum richtigen Techniker.\n\nUnklare Aufgabenverteilung erzeugt Verzögerungen und Streitigkeiten.\n**Aufgabenzuweisung** schafft operative Klarheit.\n\n#### Präzise Verteilung\n\nSobald ein Auftrag eröffnet ist, einen oder mehrere Techniker zuweisen.\nJeder Techniker sieht seine Arbeit auf GeoTapp TimeTracker.\n\n#### Operative Kommunikation\n\nAnweisungen, Notizen, technische Anhänge: alles erreicht den Techniker, bevor er zum Außendienst aufbricht.\nWeniger Anrufe, weniger Missverständnisse, weniger Verzögerungen."
        },
        "ledger-prime": {
          "name": "Berichte und Abrechnung",
          "short": "Strukturierte Berichte aus jedem Auftrag erstellen. Dokumentation exportieren und Abrechnung mit echten Außendienstdaten unterstützen.",
          "full": "### Von der Arbeit zum Bericht — geordnet.\n\nManuelle Abrechnung ist langsam und oft unvollständig.\n**Berichte und Abrechnung** schließt den operativen Kreislauf.\n\n#### Strukturierte Berichte\n\nJeder abgeschlossene Einsatz erzeugt Dokumentation durch Zusammenführung von Zeitstempeln, Fotos und Notizen aus dem Außendienst.\nKeine manuelle Dateneingabe — alles kommt aus TimeTracker.\n\n#### Abrechnungsunterstützung\n\nEchte Auftragsdaten unterstützen genauere Angebote und Rechnungen.\nWeniger Fehler, weniger Streitigkeiten, schnellerer Verwaltungszyklus."
        },
        "quantum-logistics": {
          "name": "Einsatzkalender",
          "short": "Einsätze planen, Betriebskalender visualisieren und Teamverfügbarkeit ohne Überschneidungen verwalten.",
          "full": "### Vollständiger Überblick über geplante Arbeiten.\n\nOhne gemeinsamen Kalender wird die Planung chaotisch.\n**Einsatzkalender** gibt Ihnen klare operative Sichtbarkeit.\n\n#### Erweiterte Planung\n\nAlle Einsätze in täglicher, wöchentlicher und monatlicher Kalenderansicht sehen.\nÜberschneidungen erkennen und Arbeitslasten optimieren.\n\n#### Teamverfügbarkeit\n\nSehen Sie, wer verfügbar ist, wer im Urlaub ist und wer bereits überlastet ist.\nNeue Einsätze zuweisen, ohne operative Konflikte zu erzeugen."
        },
        "supply-command": {
          "name": "Ressourcenverwaltung",
          "short": "Materialien, Ausrüstung und operative Ressourcen für jeden Außeneinsatz kontrollieren. Keine Überraschungen.",
          "full": "### Kein Einsatz ohne Ressourcen.\n\nEinen Techniker ohne das richtige Material ins Feld zu schicken ist ein kostspieliger Fehler.\n**Ressourcenverwaltung** verhindert operative Überraschungen.\n\n#### Materialien pro Auftrag\n\nBenötigte Ressourcen mit jedem Auftrag verknüpfen.\nDer Manager sieht im Voraus, was wann benötigt wird.\n\n#### Lieferanten und Beschaffung\n\nKontaktdaten und Konditionen Ihrer Stammlieferanten speichern.\nBeschaffungszeit reduzieren und Kosten kontrollieren."
        },
        "the-architect": {
          "name": "Arbeitsplanung",
          "short": "Arbeit in Phasen, Aufgaben und Fristen strukturieren. Projekte ohne Tabellen oder Messenger-Nachrichten unter Kontrolle halten.",
          "full": "### Arbeit strukturieren. Fortschritt kontrollieren.\n\nKomplexe Aufträge erfordern Struktur.\n**Arbeitsplanung** schafft operative Ordnung.\n\n#### Phasen und Fristen\n\nKomplexe Einsätze in operative Phasen mit klaren Fristen strukturieren.\nVerantwortlichkeiten jedem Teammitglied zuweisen.\n\n#### Fortschrittsüberwachung\n\nFortschritt in Echtzeit visualisieren.\nImmer wissen, was erledigt wurde und was noch offen ist.\nHandeln, bevor eine Verzögerung zum Kundenproblem wird."
        },
        "the-auditor": {
          "name": "Einsatzdokumentation",
          "short": "Fotodokumentation, operative Notizen und unterschriebene Dokumente für jeden Einsatz sammeln. Geleistete Arbeit bleibt prüfbar.",
          "full": "### Echter Nachweis für jeden Einsatz.\n\nOhne Dokumentation ist geleistete Arbeit anfechtbar.\n**Einsatzdokumentation** macht jeden Auftrag prüfbar.\n\n#### Fotodokumentation\n\nTechniker machen Fotos direkt über GeoTapp TimeTracker im Außendienst.\nBilder werden automatisch mit Zeitstempel und Standort mit dem Auftrag verknüpft.\n\n#### Digitale Kundenunterschrift\n\nDer Kunde kann den Arbeitsbericht direkt auf dem Bildschirm des Technikers unterschreiben.\nDie digitale Unterschrift ist im Bericht enthalten und gilt als Beweis der erbrachten Leistung."
        },
        "the-uplink": {
          "name": "Außendienst-Büro-Verbindung",
          "short": "Von TimeTracker erfasste Daten gelangen in Echtzeit in Flow. Außendienst und Büro arbeiten mit denselben operativen Daten.",
          "full": "### Büro und Außendienst — endlich verbunden.\n\nDie Trennung zwischen Außendienst und Büro erzeugt vermeidbare Fehler, Verzögerungen und Streitigkeiten.\n**Außendienst-Büro-Verbindung** schließt die Lücke.\n\n#### Echtzeitsynchronisation\n\nJedes Ein-/Ausstempeln, jedes Foto und jede Notiz in TimeTracker gelangt sofort in Flow.\nDer Manager hat eine Live-Ansicht, ohne den Techniker anrufen zu müssen.\n\n#### Zuverlässige Historie\n\nAlles, was der Techniker im Außendienst erfasst, wird archiviert und mit dem Auftrag verknüpft.\nKeine Daten gehen verloren. Keine Information fehlt, wenn es Zeit ist, Bericht zu erstatten."
        },
        "the-oracle": {
          "name": "Operative Sichtbarkeit",
          "short": "Echtzeit-Betriebsdashboard. Immer wissen, wie viele Einsätze heute offen, in Bearbeitung oder abgeschlossen sind.",
          "full": "### Operative Daten, keine Annahmen.\n\nEntscheidungen ohne verlässliche Daten zu treffen ist gefährlich.\n**Operative Sichtbarkeit** wandelt Außendienstdaten in konkrete Informationen um.\n\n#### Betriebsdashboard\n\nIn Echtzeit sehen:\n- Offene und laufende Einsätze\n- Aktive Techniker\n- Heute und diese Woche abgeschlossene Einsätze\n\n#### Periodische Berichte\n\nAutomatisierte Aktivitätszusammenfassungen erhalten.\nZeiträume vergleichen, Engpässe erkennen und Abläufe optimieren."
        }
      }
    },
    "app": {
      "hero_badge": "GeoTapp TimeTracker — Außendienst-App",
      "hero_title": "GeoTapp TimeTracker.<br /><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600\">Der Außendienst in Ihrer Tasche.</span>",
      "hero_subtitle": "Die mobile App für Techniker zur Erfassung von Tätigkeiten, Sammlung von Nachweisen und Aufrechterhaltung des operativen Fadens direkt aus dem Außendienst. Verfügbar für Android und iOS.",
      "visual_placeholder": "AUSSENDIENST-INTERFACE",
      "grid_title": "Werkzeuge für die Außenarbeit",
      "grid_subtitle": "Jede Funktion ist für Menschen konzipiert, die außerhalb des Büros arbeiten und keine Zeit zu verlieren haben. Klicken Sie zum Erkunden.",
      "sectors": {
        "1": "Kernfunktionen",
        "2": "Logistik und Kommunikation",
        "3": "Daten und Administration"
      },
      "cta_title": "Geben Sie Ihren Technikern das richtige Werkzeug.",
      "cta_button": "Preise ansehen",
      "modal": {
        "status": "SYSTEMSTATUS: <span class=\"text-green-600\">BETRIEBSBEREIT</span>",
        "encryption": "DATEN: <span class=\"text-slate-400\">GESCHÜTZT</span>",
        "device": "GERÄT: <span class=\"text-blue-600\">MOBIL / TABLET</span>",
        "close": "Schließen"
      },
      "systems": {
        "timelock-alpha": {
          "name": "GPS-Zeiterfassung",
          "short": "Ein- und Ausstempeln verknüpft mit GPS-Position und präzisem Zeitstempel. Jede Arbeitssitzung wird zu einem prüfbaren operativen Ereignis.",
          "full": "### Zeit ist prüfbar.\n\nZeitstempel ohne Verifikation erzeugen Streitigkeiten.\n**GPS-Zeiterfassung** macht jede Arbeitssitzung zu einem zuverlässigen, verteidigbaren Datensatz.\n\n#### Geolokaliertes Ein- und Ausstempeln\n\nDer Techniker erfasst Beginn und Ende des Außeneinsatzes.\nStandort, Adresse und Zeit werden automatisch registriert.\n\n#### Unveränderliche Historie\n\nJede Sitzung ist ein prüfbarer Datensatz: Startzeit, Endzeit, Position, Dauer und zugehöriger Auftrag.\nDer Kunde fragt, wann Sie ankamen? Die Daten sind da, immer."
        },
        "event-horizon": {
          "name": "Schichtplanung",
          "short": "Schichten und Personalverfügbarkeit verwalten. Wochen- und Monatsansichten für Koordination ohne Verwirrung oder Überschneidungen.",
          "full": "### Keine Schichtkonflikte.\n\nMobiles Personal zu organisieren erfordert Klarheit.\n**Schichtplanung** gibt dem Manager eine präzise, aktuelle Übersicht.\n\n#### Kalenderansicht\n\nSehen, wer wann arbeitet.\nFehlzeiten, Urlaub und Überschneidungen erkennen, bevor sie zu operativen Problemen werden.\n\n#### Echtzeitverfügbarkeit\n\nMitarbeiter bestätigen Anwesenheit oder melden Abwesenheiten direkt aus der App.\nDer Manager sieht Lücken im Dienstplan, bevor neue Aufträge vergeben werden."
        },
        "unit-matrix": {
          "name": "Mitarbeiterregister",
          "short": "Ein vollständiges Register Ihrer Mitarbeiter führen: Rollen, Kontakte, Zertifizierungen und Plattformzugang.",
          "full": "### Ihr Team kennen.\n\nJeder Mitarbeiter ist eine wichtige operative Ressource.\n**Mitarbeiterregister** zentralisiert alle wichtigen Informationen.\n\n#### Zertifizierungsverwaltung\n\nAuf einen Blick sehen, wer die erforderlichen Qualifikationen für einen bestimmten Einsatz oder Standort besitzt.\n\n#### Schnelles Onboarding\n\nEinen neuen Techniker hinzufügen ist einfach.\nEinladungslink senden: innerhalb von Minuten ist er auf GeoTapp TimeTracker einsatzbereit."
        },
        "sector-grid": {
          "name": "Standorte und Baustellen",
          "short": "Eine Datenbank mit Einsatzstandorten und Baustellen anlegen. Jeden Einsatz dem richtigen Standort zuordnen und Teams nach Zone organisieren.",
          "full": "### Jeder Einsatz am richtigen Ort.\n\nArbeiten ohne geografischen Bezug erzeugt Verwirrung.\n**Standorte und Baustellen** schafft operative Klarheit.\n\n#### Standortdatenbank\n\nEinen Katalog von Kundenstandorten, Baustellen und Betriebsorten erstellen.\nDas System verknüpft Technikertätigkeiten automatisch mit dem Einsatzstandort.\n\n#### Zonenbasierte Teams\n\nTechniker in Teams nach Standort oder geografischem Gebiet organisieren.\nEinsätze dem richtigen Team zuweisen, nicht nur dem Einzelnen."
        },
        "energy-logistics": {
          "name": "Fahrzeug- und Spesenmanagement",
          "short": "Firmenfahrzeugnutzung, Kraftstoffverbrauch und Reisespesen für Außendienstmitarbeiter nachverfolgen.",
          "full": "### Jede Fahrt dokumentiert.\n\nReisespesen sind ein kritischer Posten für jedes Unternehmen mit mobilem Personal.\n**Fahrzeugverwaltung** überwacht jeden anfallenden Kostenpunkt.\n\n#### Fahrzeugnutzung\n\nEinem Mitarbeiter vorübergehend ein Fahrzeug für einen Einsatz zuweisen.\nImmer wissen, wer welches Fahrzeug für welchen Auftrag verwendet.\n\n#### Kraftstoffkosten\n\nMitarbeiter erfassen Tankvorgänge direkt aus der App mit Quittungsfoto und Betrag.\nAlles archiviert, alles mit dem Auftrag verknüpft."
        },
        "neural-link": {
          "name": "Operative Kommunikation",
          "short": "Interner Kanal für Unternehmenskommunikation. Gezielte Nachrichten an bestimmte Gruppen mit Lesebestätigungen.",
          "full": "### Klare Kommunikation. Kein Hintergrundrauschen.\n\nWhatsApp vermischt Privat- und Berufsleben und bietet keine Kontrolle über Lesestatus.\n**Operative Kommunikation** ist der offizielle Unternehmenskanal.\n\n#### Gezielte Nachrichten\n\nNur das Team benachrichtigen, das es wissen muss.\nSchichtwechsel am Standort Berlin? Nur die zugewiesenen Techniker erhalten die Nachricht.\n\n#### Lesebestätigungen\n\nImmer wissen, wer die Mitteilung gelesen hat und wer nicht.\nKlare und transparente Verantwortlichkeit für alle."
        },
        "payroll-bridge": {
          "name": "Anwesenheitsexport",
          "short": "Monatliche Anwesenheiten in Formaten exportieren, die mit führenden Lohnbuchhaltungssystemen kompatibel sind. Weniger manuelle Arbeit, weniger Fehler.",
          "full": "### Lohnbuchhaltung ohne Kopfschmerzen.\n\nMonatsende muss kein administrativer Albtraum sein.\n**Anwesenheitsexport** verbindet Außendienstbetrieb mit der Personalverwaltung.\n\n#### Multi-Format\n\nAnwesenheitsdateien für den Import in führende Lohnbuchhaltungssysteme erstellen (DATEV, Lexware, Personio, LODAS).\n\n#### Steuerberaterzugang\n\nIhrem Lohnbüro eingeschränkten Zugang gewähren.\nEs lädt die benötigten Daten selbständig herunter, ohne Sie jeden Monatsabschluss anrufen zu müssen."
        },
        "data-core": {
          "name": "Wochenberichte",
          "short": "Detaillierte Berichte über geleistete Stunden pro Auftrag und Mitarbeiter. Zuverlässige Daten für interne Kontrolle und Abrechnung.",
          "full": "### Daten lügen nicht.\n\nEntscheidungen auf Fakten statt auf Gefühl basieren.\n**Wochenberichte** extrahiert Wert aus dem täglichen Betrieb.\n\n#### Detaillierte Berichte\n\nJede Woche ein vollständiges Bild: Wer hat wo, an welchem Auftrag und wie lange gearbeitet.\n\n#### Vollständige Transparenz\n\nMitarbeiter und Manager konsultieren denselben Monatsbericht.\nGezählte Stunden sind für alle identisch.\nKeine Streitigkeiten am Monatsende."
        },
        "identity-forge": {
          "name": "Marken-App",
          "short": "Ihr Logo hochladen und Unternehmensfarben wählen. Ihre Mitarbeiter nutzen eine App, die Ihre Markenidentität widerspiegelt.",
          "full": "### Ihr Unternehmen, Ihre App.\n\nKeine generische App verwenden.\nLassen Sie Ihre Mitarbeiter Teil IHRES Unternehmens fühlen — mit einem konsistenten Markenerlebnis.\n\n#### Firmenlogo\n\nIhr Logo prominent auf dem Login-Bildschirm und dem Hauptdashboard.\n\n#### Unternehmensfarben\n\nDas Farbthema wählen, das zu Ihrem Unternehmensauftritt passt.\nProfessionell, konsistent, wiedererkennbar."
        }
      }
    }
  }
}
```

**Commit:**
```bash
git add src/dictionaries/de.json
git commit -m "feat(i18n): add complete German (de) dictionary"
```

---

### Task 3: `src/dictionaries/fr.json`

Translate all keys from `en.json` into French. Key market specifics:
- `payroll-bridge` systems: reference **Silae, PayFit, ADP, Cegid**
- Tone: professional French business language
- Notable terms: "intervention" (intervention), "technicien" (technicien), "rapport" (rapport de travail), "terrain" (terrain)

**Commit:**
```bash
git add src/dictionaries/fr.json
git commit -m "feat(i18n): add complete French (fr) dictionary"
```

---

### Task 4: `src/dictionaries/es.json`

Translate all keys from `en.json` into Spanish (Spain). Key market specifics:
- `payroll-bridge` systems: reference **A3nómina, Sage, Nominasol**
- Tone: professional Castilian Spanish
- Notable terms: "intervención" (intervention), "técnico" (technician), "informe" (report), "campo" (field)

**Commit:**
```bash
git add src/dictionaries/es.json
git commit -m "feat(i18n): add complete Spanish (es) dictionary"
```

---

### Task 5: `src/dictionaries/pt.json`

Translate all keys from `en.json` into Portuguese (Portugal/Brazil neutral). Key market specifics:
- `payroll-bridge` systems: reference **Primavera, PHC, TOConline**
- Notable terms: "intervenção" (intervention), "técnico" (technician), "relatório" (report), "campo" (field)

**Commit:**
```bash
git add src/dictionaries/pt.json
git commit -m "feat(i18n): add complete Portuguese (pt) dictionary"
```

---

### Task 6: `src/dictionaries/nl.json`

Translate all keys from `en.json` into Dutch. Key market specifics:
- `payroll-bridge` systems: reference **AFAS, NMBRS, Exact**
- Notable terms: "interventie" / "werkbeurt" (intervention), "monteur" / "buitendienstmedewerker" (field technician), "rapport" / "werkbon" (work report)

**Commit:**
```bash
git add src/dictionaries/nl.json
git commit -m "feat(i18n): add complete Dutch (nl) dictionary"
```

---

### Task 7: `src/dictionaries/sv.json`

Translate all keys from `en.json` into Swedish. Key market specifics:
- `payroll-bridge` systems: reference **Visma, Fortnox, Hogia**
- Notable terms: "arbetsorder" (work order), "fälttekniker" (field technician), "arbetsrapport" (work report), "fält" (field)

**Commit:**
```bash
git add src/dictionaries/sv.json
git commit -m "feat(i18n): add complete Swedish (sv) dictionary"
```

---

### Task 8: `src/dictionaries/da.json`

Translate all keys from `en.json` into Danish. Key market specifics:
- `payroll-bridge` systems: reference **Uniconta, e-conomic, Danløn**
- Notable terms: "arbejdsordre" (work order), "felttekniker" (field technician), "arbejdsrapport" (work report)

**Commit:**
```bash
git add src/dictionaries/da.json
git commit -m "feat(i18n): add complete Danish (da) dictionary"
```

---

### Task 9: `src/dictionaries/nb.json`

Translate all keys from `en.json` into Norwegian Bokmål. Key market specifics:
- `payroll-bridge` systems: reference **Visma Lønn, Tripletex, Datakraft**
- Notable terms: "arbeidsordre" (work order), "felttekniker" (field technician), "arbeidsrapport" / "utlegg" (work report / expense claim)

**Commit:**
```bash
git add src/dictionaries/nb.json
git commit -m "feat(i18n): add complete Norwegian Bokmål (nb) dictionary"
```

---

### Task 10: `src/dictionaries/ru.json`

Translate all keys from `en.json` into Russian using **Cyrillic script** (not transliteration). Key market specifics:
- `payroll-bridge` systems: reference **1С:ЗУП, СБИС, Контур.Зарплата**
- Notable terms: "выезд" / "полевые работы" (field work), "мастер" / "техник" (field technician), "наряд-допуск" / "акт выполненных работ" (work report)

**Commit:**
```bash
git add src/dictionaries/ru.json
git commit -m "feat(i18n): add complete Russian Cyrillic (ru) dictionary"
```

---

## Task 11: Refactor `src/lib/i18n/dictionaries.ts`

**Prerequisite:** Tasks 2–10 complete.

**Files:**
- Modify: `src/lib/i18n/dictionaries.ts`

**Step 1: Read current file**

The current file imports `en.json` and `it.json`, then defines 9 inline `withOverrides()` stubs for fr, de, es, pt, nl, sv, da, nb, ru. These stubs cover only navbar/footer/landing/pricing/contact/login_hub and fall back to EN for home_sections and product_pages.

**Step 2: Replace stubs with direct JSON imports**

The entire section from `const frDict = withOverrides({...` down to the `dictionaries` export map must be replaced. Keep `withOverrides` and `deepMerge` as safety utilities but only use them on EN as a fallback guard.

Replace the body of `dictionaries.ts` (after the existing imports and utility functions) with:

```typescript
import frDict from '@/dictionaries/fr.json';
import deDict from '@/dictionaries/de.json';
import esDict from '@/dictionaries/es.json';
import ptDict from '@/dictionaries/pt.json';
import nlDict from '@/dictionaries/nl.json';
import svDict from '@/dictionaries/sv.json';
import daDict from '@/dictionaries/da.json';
import nbDict from '@/dictionaries/nb.json';
import ruDict from '@/dictionaries/ru.json';

// Safety net: apply deepMerge with EN baseline so any missing key
// gracefully falls back instead of causing a runtime crash.
// Remove per-locale entries below once translations are complete.
const dictionaries: Record<AppLocale, SiteDictionary> = {
  it: itDict as SiteDictionary,
  en: enDict as SiteDictionary,
  de: deDict as SiteDictionary,
  fr: frDict as SiteDictionary,
  es: esDict as SiteDictionary,
  pt: ptDict as SiteDictionary,
  nl: nlDict as SiteDictionary,
  sv: svDict as SiteDictionary,
  da: daDict as SiteDictionary,
  nb: nbDict as SiteDictionary,
  ru: ruDict as SiteDictionary,
};

export async function getDictionary(locale: AppLocale): Promise<SiteDictionary> {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
```

Keep the existing `getDictionary` export signature unchanged.

**Step 3: TypeScript check**

```bash
cd geotapp-site && npx tsc --noEmit 2>&1 | head -40
```

Expected: no errors. If a JSON file has a missing key the compiler will error — fix the missing key in the relevant JSON file.

**Step 4: Commit**

```bash
git add src/lib/i18n/dictionaries.ts
git commit -m "feat(i18n): refactor dictionaries.ts to import complete per-locale JSON files"
```

---

## Tasks 12–14: Settori content — installatori, pulizie, sicurezza

> **PARALLEL:** Tasks 12–14 are independent. Dispatch as parallel subagents.

Each task creates:
1. `src/content/settori/[settore]/types.ts` — re-exports `SettoreContent` (already in `src/content/settori/types.ts`, just for local convenience)
2. `src/content/settori/[settore]/index.ts` — registry with `getXxxContent(locale)` function
3. `src/content/settori/[settore]/it.ts` — Italian content (market-optimized IT)
4. `src/content/settori/[settore]/en.ts` — English content (market-optimized EN/UK/IE/AU)
5. `src/content/settori/[settore]/de.ts` — German content (DE market: §17 MiLoG etc.)
6. `src/content/settori/[settore]/fr.ts` — French content (FR market: CCN, CNAPS etc.)
7. `src/content/settori/[settore]/es.ts` — Spanish content (ES market: convenio colectivo etc.)
8. `src/content/settori/[settore]/pt.ts` — Portuguese content
9. `src/content/settori/[settore]/nl.ts` — Dutch content (NL market: CAO)
10. `src/content/settori/[settore]/sv.ts` — Swedish content
11. `src/content/settori/[settore]/da.ts` — Danish content
12. `src/content/settori/[settore]/nb.ts` — Norwegian content
13. `src/content/settori/[settore]/ru.ts` — Russian content (Cyrillic)

### Market data reference (from design doc)

| Locale | Installatori | Pulizie | Sicurezza |
|--------|-------------|---------|-----------|
| IT | — | — | — |
| EN | Electricians, Plumbers | Cleaning companies | Security guards |
| DE | Elektriker und Heizungsinstallateure, §17 MiLoG, ArbZG | Gebäudereinigung, Rahmentarifvertrag | §34a GewO, Bewachungsgewerbe |
| FR | Électriciens et plombiers, CCN Bâtiment | CCN Nettoyage (IDCC 3043) | Loi du 12 juillet 1983, CNAPS |
| ES | Instaladores eléctricos, fontaneros | Limpieza de edificios, Convenio colectivo | Ley 5/2014 Seguridad Privada |
| PT | Instaladores elétricos, canalizadores | Limpeza e higiene, CCT Limpeza | Lei 34/2013 Segurança Privada |
| NL | Elektrotechnici, installateurs, CAO Elektrotechnisch | Schoonmaakbedrijven, CAO Schoonmaak | Beveiligingsbedrijven, CAO Particuliere Beveiliging |
| SV | Elektriker, rörmokare, EIO/Installatörerna | Städ- och serviceentreprenad | Bevakningsavtalet |
| DA | Elektrikere, VVS-montører | Rengøringsvirksomheder, Rengøringsoverenskomsten | Vagtvirksomheder, Vagtoverenskomsten |
| NB | Elektrikere, rørleggere, Fellesoverenskomsten | Renholdsbedrifter, NHO Service | Vektere, Landsoverenskomsten |
| RU | Электромонтажники, сантехники, ТК РФ ст. 91-99 | Клининговые компании, СанПиН | ЧОП, охранники, Закон № 2487-1 |

---

### Task 12: `src/content/settori/installatori/`

**Registry pattern — `src/content/settori/installatori/index.ts`:**

```typescript
import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent } from '../types';

const map: Record<AppLocale, () => Promise<{ default: SettoreContent }>> = {
  it: () => import('./it'),
  en: () => import('./en'),
  de: () => import('./de'),
  fr: () => import('./fr'),
  es: () => import('./es'),
  pt: () => import('./pt'),
  nl: () => import('./nl'),
  sv: () => import('./sv'),
  da: () => import('./da'),
  nb: () => import('./nb'),
  ru: () => import('./ru'),
};

export async function getInstallatoriContent(locale: AppLocale): Promise<SettoreContent> {
  const loader = map[locale] ?? map['en'];
  const mod = await loader();
  return mod.default;
}
```

**IT content — `src/content/settori/installatori/it.ts`:**

```typescript
import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software per Installatori e Manutentori | Gestione Interventi e Rapportini | GeoTapp',
    description: 'Software per installatori, elettricisti, idraulici e manutentori: gestione interventi, rapportini, timbrature verificabili e prove fotografiche.',
  },
  hero: {
    badge: 'Software per Installatori, Elettricisti, Idraulici e Manutentori',
    h1_line1: 'Software per installatori e manutentori:',
    h1_line2: 'interventi, rapportini e ore più chiare',
    subtitle: 'GeoTapp unisce Flow + TimeTracker per chi lavora tra furgoni, cantieri e clienti finali. Le app Android e iOS aiutano il tecnico sul campo; l\'ufficio vede commessa, tempi, prove fotografiche e note senza rincorrere nessuno.',
    cta_primary: 'Richiedi una Demo',
    cta_note: 'Nessun vincolo. Risposta entro 12 ore lavorative.',
  },
  pain: {
    title: 'Il problema che conosci già',
    items: [
      {
        title: 'Contestazioni su ore e interventi',
        desc: 'Il cliente nega l\'orario. Il tecnico non ha prove. La disputa si trascina settimane e costa più dell\'intervento stesso.',
      },
      {
        title: 'Ufficio che rincorre il campo',
        desc: 'Il responsabile chiama i tecnici per sapere dove sono, cosa hanno fatto, quando finiscono. Ogni telefonata è un\'interruzione per entrambi.',
      },
      {
        title: 'Rapportini incompleti o persi',
        desc: 'Foglietti, WhatsApp, email: i dati arrivano incompleti, in ritardo o non arrivano. Ricostruire il consuntivo è un lavoro a parte.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona in tre passi',
    subtitle: 'Dal furgone all\'ufficio senza telefonate.',
    steps: [
      {
        title: 'Il tecnico timbra sul campo',
        desc: 'Con GeoTapp TimeTracker registra ingresso, uscita, foto e note direttamente dallo smartphone. GPS verificato, GDPR rispettato.',
      },
      {
        title: 'L\'ufficio vede tutto in tempo reale',
        desc: 'Flow riceve i dati istantaneamente. Il responsabile vede commessa, avanzamento, tecnico assegnato e prove fotografiche senza chiamare.',
      },
      {
        title: 'Il report è già pronto',
        desc: 'A fine intervento il rapportino è già strutturato con dati reali. Nessuna ricostruzione manuale. Nessuna contestazione senza risposta.',
      },
    ],
  },
  features: {
    title: 'Quello che ottieni',
    items: [
      {
        title: 'Timbratura GPS verificabile',
        desc: 'Ogni ingresso e uscita è collegato a posizione, timestamp e commessa. Difendibile davanti al cliente e all\'ispettorato.',
      },
      {
        title: 'Prove fotografiche sul campo',
        desc: 'Il tecnico scatta foto direttamente dall\'app. Immagini collegate all\'intervento, con data e ora. Zero possibilità di contestazione.',
      },
      {
        title: 'Export per la paga',
        desc: 'Esporta presenze mensili compatibili con Zucchetti, INAZ, TeamSystem. L\'elaborazione paghe diventa un\'operazione di 10 minuti.',
      },
    ],
  },
  testimonial: {
    quote: 'Prima passavamo ore a raccogliere i fogli dal campo. Ora il rapportino è già pronto quando il tecnico torna al furgone.',
    author: 'Marco R.',
    role: 'Responsabile operativo, impianti civili',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: 'GeoTapp è adatto come software per installatori e manutentori?',
        a: 'Sì. GeoTapp aiuta installatori, elettricisti, idraulici e manutentori a gestire interventi, rapportini, ore, trasferte e prove del lavoro svolto tra campo e ufficio.',
      },
      {
        q: 'Posso usare GeoTapp per rapportini intervento e prove fotografiche?',
        a: 'Sì. TimeTracker raccoglie foto, note e timbrature verificabili sul campo, mentre Flow collega tutto alla commessa e allo storico operativo.',
      },
      {
        q: 'GeoTapp aiuta a ridurre contestazioni su ore e lavori svolti?',
        a: 'È questo uno dei casi d\'uso principali: tempi, posizione, note e prove fotografiche rendono la ricostruzione dell\'intervento più chiara e più difendibile.',
      },
    ],
  },
  cta: {
    title: 'Smetti di rincorrere il campo.',
    subtitle: 'GeoTapp Flow e TimeTracker danno alla tua azienda il controllo operativo che ti serve davvero.',
    primary: 'Richiedi una Demo',
    secondary: 'Vedi i Prezzi',
  },
  schema_sector_name: 'Installatori',
};

export default content;
```

**DE content — `src/content/settori/installatori/de.ts`:**

```typescript
import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software für Elektriker und Heizungsinstallateure | Einsatzverwaltung | GeoTapp',
    description: 'GeoTapp für Elektriker, Heizungsinstallateure und Handwerksbetriebe: Einsatzverwaltung, GPS-Zeiterfassung nach §17 MiLoG, digitale Stundenzettel und Fotobeweise.',
  },
  hero: {
    badge: 'Software für Elektriker, Heizungsinstallateure und Handwerksbetriebe',
    h1_line1: 'Außendienst im Griff:',
    h1_line2: 'Einsätze, Stundenzettel und Nachweise klar dokumentiert',
    subtitle: 'GeoTapp verbindet Flow + TimeTracker für Handwerksbetriebe, die zwischen Baustellen, Fahrzeugen und Endkunden arbeiten. Die Android- und iOS-Apps unterstützen den Techniker im Außendienst; das Büro sieht Auftrag, Zeiten, Fotobeweise und Notizen ohne Nachfragen — DSGVO-konform, §17 MiLoG-tauglich.',
    cta_primary: 'Demo anfragen',
    cta_note: 'Keine Bindung. Antwort innerhalb von 12 Geschäftsstunden.',
  },
  pain: {
    title: 'Das Problem, das Sie kennen',
    items: [
      {
        title: 'Streitigkeiten über Stunden und Einsätze',
        desc: 'Der Kunde bestreitet die Anwesenheitszeit. Der Techniker hat keine Beweise. Der Streit zieht sich Wochen hin und kostet mehr als der Einsatz selbst.',
      },
      {
        title: 'Büro jagt dem Außendienst nach',
        desc: 'Der Teamleiter ruft Techniker an, um zu wissen wo sie sind, was sie getan haben, wann sie fertig sind. Jeder Anruf unterbricht beide Seiten.',
      },
      {
        title: 'Unvollständige oder verlorene Stundenzettel',
        desc: 'Zettel, WhatsApp, E-Mails: die Daten kommen unvollständig, verspätet oder gar nicht. Die Nachkalkulation ist wieder eine eigene Arbeit.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es in drei Schritten',
    subtitle: 'Vom Fahrzeug ins Büro — ohne Telefonate.',
    steps: [
      {
        title: 'Techniker stempelt im Außendienst',
        desc: 'Mit GeoTapp TimeTracker erfasst er Beginn, Ende, Fotos und Notizen direkt vom Smartphone. GPS-verifiziert, DSGVO-konform, §17 MiLoG-geeignet.',
      },
      {
        title: 'Büro sieht alles in Echtzeit',
        desc: 'Flow empfängt die Daten sofort. Der Teamleiter sieht Auftrag, Fortschritt, zugewiesenen Techniker und Fotobeweise ohne anzurufen.',
      },
      {
        title: 'Bericht ist bereits fertig',
        desc: 'Am Ende des Einsatzes ist der Stundenzettel bereits strukturiert mit echten Daten. Keine manuelle Nacharbeit. Kein Streit ohne Antwort.',
      },
    ],
  },
  features: {
    title: 'Was Sie erhalten',
    items: [
      {
        title: 'GPS-Zeiterfassung nach §17 MiLoG',
        desc: 'Jeder Einsatzbeginn und -abschluss ist mit Position, Zeitstempel und Auftrag verknüpft. Verteidigbar gegenüber Kunden und Behörden.',
      },
      {
        title: 'Fotobeweise im Außendienst',
        desc: 'Der Techniker fotografiert direkt aus der App. Bilder mit Datum und Uhrzeit verknüpft mit dem Einsatz. Keine Möglichkeit zur Anfechtung.',
      },
      {
        title: 'Export für die Lohnbuchhaltung',
        desc: 'Monatliche Anwesenheitsdaten für DATEV, Lexware, Personio und LODAS exportieren. Die Lohnabrechnung wird zur 10-Minuten-Aufgabe.',
      },
    ],
  },
  testimonial: {
    quote: 'Früher haben wir Stunden damit verbracht, Stundenzettel vom Außendienst einzusammeln. Jetzt ist der Bericht fertig, wenn der Techniker zum Fahrzeug zurückkommt.',
    author: 'Klaus M.',
    role: 'Betriebsleiter, Elektroinstallationsbetrieb',
  },
  faq: {
    title: 'Häufige Fragen',
    subtitle: 'Was uns am häufigsten vor dem Start gefragt wird.',
    items: [
      {
        q: 'Ist GeoTapp für Elektriker und Heizungsinstallateure geeignet?',
        a: 'Ja. GeoTapp hilft Elektrikern, Heizungsinstallateuren und Handwerksbetrieben bei der Einsatzverwaltung, Stundenzetteln, ArbZG-konformer Zeiterfassung und Außendienst-Koordination.',
      },
      {
        q: 'Unterstützt GeoTapp die Anforderungen nach §17 MiLoG?',
        a: 'Ja. Die GPS-gestützte Zeiterfassung mit unveränderlichem Protokoll und Exportfunktion unterstützt die Dokumentationspflicht nach §17 MiLoG und den ArbZG-Vorschriften.',
      },
      {
        q: 'Kann ich die Daten direkt in DATEV oder Lexware importieren?',
        a: 'GeoTapp exportiert Anwesenheitsdaten in Standardformaten, die mit DATEV, Lexware, Personio und LODAS kompatibel sind. Ihr Lohnbüro oder Steuerberater kann die Daten direkt einlesen.',
      },
    ],
  },
  cta: {
    title: 'Schluss mit dem Nachlaufen.',
    subtitle: 'GeoTapp Flow und TimeTracker geben Ihrem Betrieb die operative Kontrolle, die Sie wirklich brauchen.',
    primary: 'Demo anfragen',
    secondary: 'Preise ansehen',
  },
  schema_sector_name: 'Elektriker und Heizungsinstallateure',
};

export default content;
```

**EN content — `src/content/settori/installatori/en.ts`:**

```typescript
import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software for Electricians and Plumbers | Job Management and Work Reports | GeoTapp',
    description: 'GeoTapp for electricians, plumbers and maintenance contractors: job management, GPS time tracking, verifiable work reports and photo evidence.',
  },
  hero: {
    badge: 'Software for Electricians, Plumbers and Field Maintenance Teams',
    h1_line1: 'Field maintenance under control:',
    h1_line2: 'jobs, timesheets and proof — all in one place',
    subtitle: 'GeoTapp connects Flow + TimeTracker for maintenance contractors working between vans, sites and end clients. Android and iOS apps support the technician in the field; the office sees the job, times, photo evidence and notes without chasing anyone.',
    cta_primary: 'Request a Demo',
    cta_note: 'No commitment. Response within 12 business hours.',
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
    subtitle: 'From the van to the office — without phone calls.',
    steps: [
      {
        title: 'Technician clocks in on site',
        desc: 'With GeoTapp TimeTracker they record start, finish, photos and notes from their smartphone. GPS verified, GDPR compliant.',
      },
      {
        title: 'Office sees everything in real time',
        desc: 'Flow receives the data instantly. The manager sees job status, progress, assigned technician and photo evidence without calling.',
      },
      {
        title: 'The report is already ready',
        desc: 'At the end of the job the work report is already structured with real data. No manual reconstruction. No dispute without an answer.',
      },
    ],
  },
  features: {
    title: 'What you get',
    items: [
      {
        title: 'Verifiable GPS time tracking',
        desc: 'Every clock-in and clock-out is linked to location, timestamp and job. Defensible to clients and inspectors alike.',
      },
      {
        title: 'Photo evidence from the field',
        desc: 'The technician photographs directly from the app. Images linked to the job with date and time. No room for dispute.',
      },
      {
        title: 'Payroll export',
        desc: 'Export monthly attendance in formats compatible with Sage, Xero and BrightHR. Payroll processing becomes a 10-minute task.',
      },
    ],
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
        a: 'Yes. TimeTracker collects photos, notes and verifiable timestamps in the field, while Flow links everything to the job record and operational history.',
      },
      {
        q: 'Does GeoTapp help reduce disputes over hours and work done?',
        a: 'That\'s one of the primary use cases: times, location, notes and photo evidence make it far easier to reconstruct and defend what was actually done on site.',
      },
    ],
  },
  cta: {
    title: 'Stop chasing the field.',
    subtitle: 'GeoTapp Flow and TimeTracker give your company the operational control you actually need.',
    primary: 'Request a Demo',
    secondary: 'View Pricing',
  },
  schema_sector_name: 'Electricians and Plumbers',
};

export default content;
```

**Remaining locales (fr, es, pt, nl, sv, da, nb, ru):** Follow the same `SettoreContent` structure. Apply market-specific terminology from the table above. Each file must export a default `SettoreContent` object. French, Spanish, Portuguese, Dutch, Swedish, Danish, Norwegian must use correct local terminology; Russian must use Cyrillic throughout.

**Commit:**
```bash
git add src/content/settori/installatori/
git commit -m "feat(i18n): add installatori content for all 11 locales"
```

---

### Task 13: `src/content/settori/pulizie/`

Same pattern as Task 12. Market data per locale:

| Locale | Sector name | Key regulations | Key software |
|--------|-------------|----------------|--------------|
| IT | Imprese di pulizia | CCNL Multiservizi | Zucchetti, INAZ |
| EN | Cleaning companies | AWR, NMW | Sage, BrightHR |
| DE | Gebäudereinigung | Rahmentarifvertrag Gebäudereinigung | DATEV, Personio |
| FR | Nettoyage industriel | CCN Nettoyage IDCC 3043 | Silae, PayFit |
| ES | Limpieza de edificios | Convenio colectivo limpieza | A3nómina, Sage |
| PT | Limpeza e higiene | CCT Limpeza e Higiene Urbana | Primavera, PHC |
| NL | Schoonmaakbedrijven | CAO Schoonmaak | AFAS, NMBRS |
| SV | Städföretag | Städ- och serviceentreprenadavtalet | Visma, Fortnox |
| DA | Rengøringsvirksomheder | Rengøringsoverenskomsten | Uniconta, Danløn |
| NB | Renholdsbedrifter | Renholdsbedriftene (NHO) | Visma Lønn, Tripletex |
| RU | Клининговые компании | СанПиН, профстандарты | 1С:ЗУП, СБИС |

Pain points for pulizie:
- Client disputes over cleaning hours/which areas were cleaned
- Supervision of distributed teams across multiple buildings
- Shift handover documentation
- CAO/CCNL compliance for break times and overtime

Registry file: `src/content/settori/pulizie/index.ts` — same pattern as installatori, export `getPulizieContent(locale)`.

**Commit:**
```bash
git add src/content/settori/pulizie/
git commit -m "feat(i18n): add pulizie content for all 11 locales"
```

---

### Task 14: `src/content/settori/sicurezza/`

Same pattern as Task 12. Market data per locale:

| Locale | Sector name | Key regulations | Key software |
|--------|-------------|----------------|--------------|
| IT | Vigilanza e sicurezza | CCNL Vigilanza (GPG) | Zucchetti, TeamSystem |
| EN | Security guards and stewarding | SIA licence requirements | Sage, BrightHR |
| DE | Bewachungsgewerbe | §34a GewO, DGUV Vorschrift | DATEV, Lexware |
| FR | Agents de sécurité | Loi 12 juillet 1983, CNAPS | Silae, Cegid |
| ES | Vigilantes de seguridad | Ley 5/2014 Seguridad Privada | A3nómina, Nominasol |
| PT | Segurança privada | Lei 34/2013 Segurança Privada | Primavera, TOConline |
| NL | Beveiligingsbedrijven | CAO Particuliere Beveiliging | AFAS, Exact |
| SV | Bevakningsföretag | Bevakningsavtalet | Visma, Hogia |
| DA | Vagtvirksomheder | Vagtoverenskomsten | Uniconta, e-conomic |
| NB | Vaktselskaper | Landsoverenskomsten for vektere | Visma Lønn, Datakraft |
| RU | Частная охрана (ЧОП) | Закон № 2487-1 (ЧОД) | 1С:ЗУП, Контур.Зарплата |

Pain points for sicurezza:
- Proving guards were present at assigned posts at the right times
- Incident report documentation linked to timestamps and GPS
- Shift handover between guards (paper-based → digital)
- Licence/qualification tracking per guard

Registry file: `src/content/settori/sicurezza/index.ts` — export `getSicurezzaContent(locale)`.

**Commit:**
```bash
git add src/content/settori/sicurezza/
git commit -m "feat(i18n): add sicurezza content for all 11 locales"
```

---

## Task 15: Verifier content registry + page refactor

**Files:**
- Create: `src/content/verifier/types.ts`
- Create: `src/content/verifier/index.ts`
- Create: `src/content/verifier/it.ts`
- Create: `src/content/verifier/en.ts`
- Create: `src/content/verifier/de.ts` (+ fr, es, pt, nl, sv, da, nb, ru following same pattern)
- Modify: `src/app/products/geotapp-verifier/page.tsx`

**Step 1: Create `src/content/verifier/types.ts`**

```typescript
export interface VerifierCopy {
  hero_badge: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  problem_badge: string;
  problem_title: string;
  problem_items: Array<{ title: string; desc: string }>;
  what_badge: string;
  what_title: string;
  what_desc: string;
  how_badge: string;
  how_title: string;
  how_steps: Array<{ num: string; title: string; desc: string }>;
  verify_badge: string;
  verify_title: string;
  verify_desc: string;
  tech_badge: string;
  tech_title: string;
  tech_items: Array<{ title: string; desc: string }>;
  cta_badge: string;
  cta_title: string;
  cta_subtitle: string;
  cta_primary: string;
  cta_secondary: string;
}
```

**Step 2: Create `src/content/verifier/index.ts`**

```typescript
import type { AppLocale } from '@/lib/i18n/config';
import type { VerifierCopy } from './types';

const map: Record<AppLocale, () => Promise<{ default: VerifierCopy }>> = {
  it: () => import('./it'),
  en: () => import('./en'),
  de: () => import('./de'),
  fr: () => import('./fr'),
  es: () => import('./es'),
  pt: () => import('./pt'),
  nl: () => import('./nl'),
  sv: () => import('./sv'),
  da: () => import('./da'),
  nb: () => import('./nb'),
  ru: () => import('./ru'),
};

export async function getVerifierCopy(locale: AppLocale): Promise<VerifierCopy> {
  const loader = map[locale] ?? map['en'];
  const mod = await loader();
  return mod.default;
}
```

**Step 3: Create locale content files**

Extract current IT copy from `src/app/products/geotapp-verifier/page.tsx` (the `isItalian` branch, lines ~36–200) into `src/content/verifier/it.ts`. Extract EN copy (the `else` branch) into `src/content/verifier/en.ts`. Create DE, FR, ES, PT, NL, SV, DA, NB, RU files following the same `VerifierCopy` interface.

Each file exports `default: VerifierCopy`.

**Step 4: Refactor `src/app/products/geotapp-verifier/page.tsx`**

Remove `'use client'`, `usePathname`, `isItalian`. Convert to server component that awaits `getVerifierCopy`:

```tsx
import { getLocaleFromPathname, localizePath } from '@/lib/i18n/locale-routing';
import { DEFAULT_LOCALE, type AppLocale } from '@/lib/i18n/config';
import { getVerifierCopy } from '@/content/verifier';
import { headers } from 'next/headers';
// ... other imports (motion components must move to a client sub-component if needed,
//     OR replace motion with plain divs since page.tsx was already using motion without SSR issues)
```

Since the page uses `framer-motion`, keep animated sections in a `'use client'` sub-component `VerifierAnimatedSections` and make `page.tsx` a server component that passes copy as props:

```tsx
// src/app/products/geotapp-verifier/page.tsx (server component)
import type { AppLocale } from '@/lib/i18n/config';
import { DEFAULT_LOCALE } from '@/lib/i18n/config';
import { getVerifierCopy } from '@/content/verifier';
import VerifierContent from './VerifierContent';

export default async function GeoTappVerifierPage({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  // The base page is reached both directly and via [locale] re-export.
  // Locale is injected via the [locale] wrapper; fall back to DEFAULT_LOCALE.
  const locale = (await params?.catch?.(() => undefined) ?? undefined)?.locale as AppLocale | undefined;
  const resolvedLocale = locale ?? DEFAULT_LOCALE;
  const copy = await getVerifierCopy(resolvedLocale);
  return <VerifierContent copy={copy} locale={resolvedLocale} />;
}
```

Create `src/app/products/geotapp-verifier/VerifierContent.tsx` as `'use client'` with all the existing JSX and motion animations, accepting `copy: VerifierCopy` and `locale: AppLocale` as props.

The `[locale]` re-export page at `src/app/[locale]/products/geotapp-verifier/page.tsx` already passes `params` so locale will be resolved correctly.

**Step 5: TypeScript check**

```bash
cd geotapp-site && npx tsc --noEmit 2>&1 | head -40
```

**Step 6: Commit**

```bash
git add src/content/verifier/ src/app/products/geotapp-verifier/
git commit -m "feat(i18n): extract verifier copy to content registry, convert page to server component"
```

---

## Task 16: Wire [locale]/settori pages to content registry

**Prerequisite:** Tasks 1, 12, 13, 14 complete.

**Files:**
- Modify: `src/app/[locale]/settori/installatori/page.tsx`
- Modify: `src/app/[locale]/settori/pulizie/page.tsx`
- Modify: `src/app/[locale]/settori/sicurezza/page.tsx`
- Modify: `src/app/settori/installatori/page.tsx` (base — loads IT content)
- Modify: `src/app/settori/pulizie/page.tsx`
- Modify: `src/app/settori/sicurezza/page.tsx`

**Step 1: Update `src/app/[locale]/settori/installatori/page.tsx`**

Replace the current `export { default } from '../../../settori/installatori/page'` (which always renders Italian) with a proper server component:

```tsx
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

import type { AppLocale } from '@/lib/i18n/config';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { Metadata } from 'next';
import { getInstallatoriContent } from '@/content/settori/installatori';
import SettorePageLayout from '@/components/SettorePageLayout';

const pathname = '/settori/installatori';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = await getInstallatoriContent((locale ?? DEFAULT_LOCALE) as AppLocale);
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, `https://geotapp.com/${l}${pathname}`])
  ) as Record<string, string>;
  languages['x-default'] = `https://geotapp.com${pathname}`;

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `/${locale}${pathname}`,
      languages,
    },
    openGraph: {
      url: `https://geotapp.com/${locale}${pathname}`,
      type: 'website',
      title: content.meta.title,
      description: content.meta.description,
    },
  };
}

export default async function InstallatoriPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const content = await getInstallatoriContent(resolvedLocale);
  return <SettorePageLayout content={content} locale={resolvedLocale} settore="installatori" />;
}
```

**Step 2: Update base `src/app/settori/installatori/page.tsx`**

This is the IT canonical URL (no locale prefix). Replace `InstallatoriContent` import with content registry:

```tsx
import { Metadata } from 'next';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/lib/i18n/config';
import { getInstallatoriContent } from '@/content/settori/installatori';
import SettorePageLayout from '@/components/SettorePageLayout';

const pathname = '/settori/installatori';
const url = `https://geotapp.com${pathname}`;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getInstallatoriContent(DEFAULT_LOCALE);
  const localeAlternates = {
    ...Object.fromEntries(
      SUPPORTED_LOCALES.map((locale) => [
        locale,
        locale === DEFAULT_LOCALE ? url : `https://geotapp.com/${locale}${pathname}`,
      ])
    ),
    'x-default': url,
  };
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical: pathname, languages: localeAlternates },
    openGraph: { url, type: 'website', title: content.meta.title, description: content.meta.description },
  };
}

export default async function Page() {
  const content = await getInstallatoriContent(DEFAULT_LOCALE);
  return <SettorePageLayout content={content} locale={DEFAULT_LOCALE} settore="installatori" />;
}
```

**Step 3:** Repeat Steps 1 and 2 for `pulizie` and `sicurezza` (replace `installatori` with `pulizie`/`sicurezza`, `getInstallatoriContent` with `getPulizieContent`/`getSicurezzaContent`, `settore="pulizie"`/`settore="sicurezza"`).

**Step 4: Verify `src/app/settori/installatori/content.tsx` is no longer imported**

After this task, `content.tsx` files are orphaned. Do NOT delete them yet — wait until Task 17 confirms no other imports exist.

**Step 5: TypeScript check**

```bash
cd geotapp-site && npx tsc --noEmit 2>&1 | head -40
```

**Step 6: Commit**

```bash
git add src/app/settori/installatori/ src/app/settori/pulizie/ src/app/settori/sicurezza/ \
        src/app/[locale]/settori/installatori/ src/app/[locale]/settori/pulizie/ src/app/[locale]/settori/sicurezza/
git commit -m "feat(i18n): wire settori pages to content registry for all 11 locales"
```

---

## Task 17: Cleanup — hub links, sitemap, orphan removal

**Files:**
- Modify: `src/app/settori/page.tsx`
- Modify: `src/app/sitemap.ts`
- Delete: `src/app/settori/installatori/content.tsx`
- Delete: `src/app/settori/pulizie/content.tsx`
- Delete: `src/app/settori/sicurezza/content.tsx`

**Step 1: Fix settori hub `src/app/settori/page.tsx`**

The hub page has hardcoded Italian text and non-localized links (`href="/settori/installatori"`). It is rendered both at `/settori` (Italian canonical) and at `/[locale]/settori`. It needs to be a server component that reads locale from params.

Replace the entire file:

```tsx
import Link from 'next/link';
import { Hammer, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { DEFAULT_LOCALE, type AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';

interface Props {
  locale?: AppLocale;
}

// Minimal hub copy per locale. Add more keys here if the hub page grows.
const HUB_COPY: Record<string, { title: string; subtitle: string; installatori: string; installatori_desc: string; sicurezza: string; sicurezza_desc: string; pulizie: string; pulizie_desc: string; cta: string }> = {
  it: { title: 'Settori & Soluzioni', subtitle: 'Seleziona il tuo settore per scoprire come GeoTapp può aiutarti.', installatori: 'Installatori', installatori_desc: 'Elettricisti, idraulici, manutentori.', sicurezza: 'Sicurezza', sicurezza_desc: 'Vigilanza, steward, eventi.', pulizie: 'Pulizie', pulizie_desc: 'Imprese di pulizia, facility management.', cta: 'Scopri di più' },
  en: { title: 'Sectors & Solutions', subtitle: 'Select your sector to discover how GeoTapp can help you.', installatori: 'Installers', installatori_desc: 'Electricians, plumbers, maintenance.', sicurezza: 'Security', sicurezza_desc: 'Guards, stewards, events.', pulizie: 'Cleaning', pulizie_desc: 'Cleaning companies, facility management.', cta: 'Find out more' },
  de: { title: 'Branchen & Lösungen', subtitle: 'Wählen Sie Ihre Branche, um zu sehen, wie GeoTapp helfen kann.', installatori: 'Installateure', installatori_desc: 'Elektriker, Sanitärinstallateure, Wartung.', sicurezza: 'Sicherheitsdienst', sicurezza_desc: 'Bewachung, Stewards, Veranstaltungen.', pulizie: 'Gebäudereinigung', pulizie_desc: 'Reinigungsbetriebe, Facility Management.', cta: 'Mehr erfahren' },
  fr: { title: 'Secteurs & Solutions', subtitle: 'Sélectionnez votre secteur pour découvrir comment GeoTapp peut vous aider.', installatori: 'Installateurs', installatori_desc: 'Électriciens, plombiers, maintenance.', sicurezza: 'Sécurité', sicurezza_desc: 'Agents de sécurité, stewards, événements.', pulizie: 'Nettoyage', pulizie_desc: 'Entreprises de nettoyage, facility management.', cta: 'En savoir plus' },
  es: { title: 'Sectores & Soluciones', subtitle: 'Selecciona tu sector para descubrir cómo GeoTapp puede ayudarte.', installatori: 'Instaladores', installatori_desc: 'Electricistas, fontaneros, mantenimiento.', sicurezza: 'Seguridad', sicurezza_desc: 'Vigilantes, stewards, eventos.', pulizie: 'Limpieza', pulizie_desc: 'Empresas de limpieza, facility management.', cta: 'Saber más' },
  pt: { title: 'Setores & Soluções', subtitle: 'Selecione o seu setor para descobrir como o GeoTapp pode ajudá-lo.', installatori: 'Instaladores', installatori_desc: 'Electricistas, canalizadores, manutenção.', sicurezza: 'Segurança', sicurezza_desc: 'Vigilantes, stewards, eventos.', pulizie: 'Limpeza', pulizie_desc: 'Empresas de limpeza, facility management.', cta: 'Saber mais' },
  nl: { title: 'Sectoren & Oplossingen', subtitle: 'Selecteer uw sector om te ontdekken hoe GeoTapp u kan helpen.', installatori: 'Installateurs', installatori_desc: 'Elektriciens, loodgieters, onderhoud.', sicurezza: 'Beveiliging', sicurezza_desc: 'Beveiligers, stewards, evenementen.', pulizie: 'Schoonmaak', pulizie_desc: 'Schoonmaakbedrijven, facility management.', cta: 'Meer weten' },
  sv: { title: 'Branscher & Lösningar', subtitle: 'Välj din bransch för att se hur GeoTapp kan hjälpa dig.', installatori: 'Installatörer', installatori_desc: 'Elektriker, rörmokare, underhåll.', sicurezza: 'Säkerhet', sicurezza_desc: 'Vakter, stewards, evenemang.', pulizie: 'Städning', pulizie_desc: 'Städföretag, facility management.', cta: 'Läs mer' },
  da: { title: 'Brancher & Løsninger', subtitle: 'Vælg din branche for at se, hvordan GeoTapp kan hjælpe dig.', installatori: 'Installatører', installatori_desc: 'Elektrikere, VVS-montører, vedligeholdelse.', sicurezza: 'Sikkerhed', sicurezza_desc: 'Vagter, stewards, arrangementer.', pulizie: 'Rengøring', pulizie_desc: 'Rengøringsvirksomheder, facility management.', cta: 'Læs mere' },
  nb: { title: 'Bransjer & Løsninger', subtitle: 'Velg din bransje for å se hvordan GeoTapp kan hjelpe deg.', installatori: 'Installatører', installatori_desc: 'Elektrikere, rørleggere, vedlikehold.', sicurezza: 'Sikkerhet', sicurezza_desc: 'Vakter, stewards, arrangementer.', pulizie: 'Renhold', pulizie_desc: 'Renholdsbedrifter, facility management.', cta: 'Les mer' },
  ru: { title: 'Отрасли и решения', subtitle: 'Выберите свою отрасль, чтобы узнать, как GeoTapp может вам помочь.', installatori: 'Монтажники', installatori_desc: 'Электромонтажники, сантехники, обслуживание.', sicurezza: 'Охрана', sicurezza_desc: 'Охранники, стюарды, мероприятия.', pulizie: 'Клининг', pulizie_desc: 'Клининговые компании, управление объектами.', cta: 'Подробнее' },
};

export default function SettoriPage({ locale }: Props) {
  const l = locale ?? DEFAULT_LOCALE;
  const copy = HUB_COPY[l] ?? HUB_COPY['en'];

  return (
    <div className="bg-slate-50 min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">{copy.title}</h1>
        <p className="text-xl text-slate-600 mb-12">{copy.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href={localizePath('/settori/installatori', l)} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Hammer size={24} /></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{copy.installatori}</h2>
            <p className="text-slate-500 mb-4">{copy.installatori_desc}</p>
            <div className="flex items-center text-amber-600 font-bold text-sm">{copy.cta} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></div>
          </Link>
          <Link href={localizePath('/settori/sicurezza', l)} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><ShieldCheck size={24} /></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{copy.sicurezza}</h2>
            <p className="text-slate-500 mb-4">{copy.sicurezza_desc}</p>
            <div className="flex items-center text-indigo-600 font-bold text-sm">{copy.cta} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></div>
          </Link>
          <Link href={localizePath('/settori/pulizie', l)} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-cyan-200 transition-all">
            <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Sparkles size={24} /></div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">{copy.pulizie}</h2>
            <p className="text-slate-500 mb-4">{copy.pulizie_desc}</p>
            <div className="flex items-center text-cyan-600 font-bold text-sm">{copy.cta} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
```

Also update `src/app/[locale]/settori/page.tsx` to pass `locale` prop:

```tsx
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
import type { AppLocale } from '@/lib/i18n/config';
import SettoriPage from '../../../settori/page';

export default async function LocaleSettoriPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <SettoriPage locale={locale as AppLocale} />;
}
```

**Step 2: Update `src/app/sitemap.ts`**

Add `/products/geotapp-verifier` to `baseRoutes`:

```typescript
const baseRoutes = [
  '/',
  '/pricing',
  '/contact',
  '/products/geotapp-flow',
  '/products/geotapp-app',
  '/products/geotapp-verifier',   // ADD THIS LINE
  '/settori',
  '/settori/installatori',
  '/settori/sicurezza',
  '/settori/pulizie',
  '/privacy',
  '/terms',
];
```

**Step 3: Delete orphaned content files**

Verify they are no longer imported:

```bash
cd geotapp-site && grep -r "installatori/content\|pulizie/content\|sicurezza/content" src/ --include="*.ts" --include="*.tsx"
```

Expected: no results. Then delete:

```bash
rm src/app/settori/installatori/content.tsx
rm src/app/settori/pulizie/content.tsx
rm src/app/settori/sicurezza/content.tsx
```

**Step 4: Final TypeScript + build check**

```bash
cd geotapp-site && npx tsc --noEmit 2>&1
cd geotapp-site && npm run build 2>&1 | tail -30
```

Expected: zero TypeScript errors, successful build output with ~150 static pages generated.

**Step 5: Commit**

```bash
git add src/app/settori/page.tsx src/app/[locale]/settori/page.tsx src/app/sitemap.ts
git rm src/app/settori/installatori/content.tsx src/app/settori/pulizie/content.tsx src/app/settori/sicurezza/content.tsx
git commit -m "feat(i18n): fix settori hub localized links, add verifier to sitemap, remove orphan content files"
```

---

## Summary of parallel execution strategy

```
Task 1  (foundation)
  ↓
Tasks 2–10  (9 JSON dictionaries — PARALLEL)
  ↓
Task 11  (refactor dictionaries.ts)

Task 1  (foundation)
  ↓
Tasks 12–14  (3 settori content groups — PARALLEL)
  ↓
Task 16  (wire pages)
  ↓
Task 17  (cleanup)

Task 15  (verifier) — independent, run after Task 1
```

Recommended execution with `superpowers:dispatching-parallel-agents`:
1. Start Task 1 (blocking — foundation needed by all)
2. Dispatch Tasks 2–10 in parallel (9 agents, each writes one JSON)
3. Dispatch Tasks 12–14 in parallel (3 agents, each writes one settore × 11 locales)
4. Dispatch Task 15 in parallel with 12–14
5. After all parallel tasks complete: Task 11, then Task 16, then Task 17

---

## Verification checklist

After Task 17 completes:

- [ ] `npx tsc --noEmit` — zero errors
- [ ] `npm run build` — successful, ~150 pages generated
- [ ] `/de/settori/installatori` renders German market-optimized content (§17 MiLoG in FAQ)
- [ ] `/ru/settori/sicurezza` renders Cyrillic content (Закон № 2487-1 in FAQ)
- [ ] `/fr/products/geotapp-app` renders French content (PayFit in payroll-bridge section)
- [ ] `<html lang="de">` on `/de/` pages
- [ ] All 11 locale URLs in sitemap
- [ ] `/products/geotapp-verifier` in sitemap
- [ ] LD+JSON FAQ schema has correct apostrophes (è, Sì, più, l'intervento) in IT pages
- [ ] No `isItalian` pattern remains in codebase: `grep -r "isItalian" src/` → empty
- [ ] No inline Russian transliteration: `grep -r "translitter\|Yelektrik\|Santehnik" src/` → empty
