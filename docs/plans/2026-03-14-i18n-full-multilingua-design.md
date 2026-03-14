# Design: Internazionalizzazione completa geotapp-site

**Data:** 2026-03-14
**Stato:** Approvato
**Branch target:** `wip/2026-03-11-pre-fleet-snapshot`

---

## Obiettivo

Tradurre l'intero sito geotapp.com in 11 lingue (IT, EN, DE, FR, ES, PT, NL, SV, DA, NB, RU) con routing automatico basato su geolocalizzazione IP. Le pagine settori (installatori, pulizie, sicurezza) devono essere ottimizzate per il mercato di riferimento di ogni lingua — non solo tradotte, ma riscritte con terminologia locale, normative pertinenti, software integrabili e keyword SEO del settore nel paese.

---

## Stato attuale

### Già funzionante
- `config.ts`: tutti 11 locale definiti, `COUNTRY_TO_LOCALE` completo
- `middleware.ts`: geolocation via `cf-ipcountry` / `x-vercel-ip-country` / `Accept-Language`, redirect automatico
- `locale-routing.ts`: `resolveLocale`, `localizePath`, `getLocaleFromPathname`
- `[locale]/` routing structure in place
- `dictionaries.ts`: stub `withOverrides` per 9 locale (coprono solo navbar/footer/landing/pricing/contact/login_hub)

### Problemi da risolvere
1. `home_sections` e `product_pages` (300+ chiavi) non tradotti nei 9 locale non-IT → fallback su EN
2. Pagine `settori/installatori`, `settori/pulizie`, `settori/sicurezza`: copy hardcoded in italiano, nessuna i18n
3. `geotapp-verifier/page.tsx`: gestisce solo IT/EN via `isItalian ? ... : ...`, 'use client' non necessario
4. `settori/page.tsx`: link hardcoded `/settori/installatori` (non localizzati)
5. FAQ schema LD+JSON in `installatori/content.tsx`: apostrofi mancanti (`è`, `Sì`, `più`)
6. `dictionaries.ts`: stubs inline con traslitterazione russo invece di Cirillico

---

## Architettura scelta: Approccio B — File JSON separati per locale

### Motivazione
- Coerente con il pattern esistente di `it.json` / `en.json`
- Ogni file è indipendente e mantenibile
- Scala per traduttori futuri
- Type-safe tramite `SiteDictionary = typeof enDict`

---

## Struttura file

```
src/
  dictionaries/
    it.json          (esiste, invariato)
    en.json          (esiste, invariato)
    de.json          NUOVO - traduzione completa in tedesco
    fr.json          NUOVO - traduzione completa in francese
    es.json          NUOVO - traduzione completa in spagnolo
    pt.json          NUOVO - traduzione completa in portoghese
    nl.json          NUOVO - traduzione completa in olandese
    sv.json          NUOVO - traduzione completa in svedese
    da.json          NUOVO - traduzione completa in danese
    nb.json          NUOVO - traduzione completa in norvegese
    ru.json          NUOVO - traduzione completa in russo (Cirillico)

  content/
    settori/
      types.ts                    NUOVO - SettoreContent interface
      installatori/
        index.ts                  NUOVO - registry + getInstallatoriContent()
        it.ts  en.ts  de.ts  fr.ts  es.ts
        pt.ts  nl.ts  sv.ts  da.ts  nb.ts  ru.ts
      pulizie/
        index.ts
        it.ts  en.ts  de.ts  fr.ts  es.ts
        pt.ts  nl.ts  sv.ts  da.ts  nb.ts  ru.ts
      sicurezza/
        index.ts
        it.ts  en.ts  de.ts  fr.ts  es.ts
        pt.ts  nl.ts  sv.ts  da.ts  nb.ts  ru.ts
      verifier/
        index.ts                  NUOVO - getVerifierCopy()
        it.ts  en.ts  de.ts  fr.ts  es.ts
        pt.ts  nl.ts  sv.ts  da.ts  nb.ts  ru.ts

  lib/i18n/
    dictionaries.ts   MODIFICA - importa JSON files, rimuove stubs inline

  app/
    settori/page.tsx               MODIFICA - link localizzati
    settori/installatori/
      content.tsx                  MODIFICA - refactor a SettorePageLayout
      page.tsx                     MODIFICA - server component
    settori/pulizie/
      content.tsx                  MODIFICA
      page.tsx                     MODIFICA
    settori/sicurezza/
      content.tsx                  MODIFICA
      page.tsx                     MODIFICA
    products/geotapp-verifier/
      page.tsx                     MODIFICA - rimuove isItalian, usa getVerifierCopy
    sitemap.ts                     MODIFICA - include tutte URL locale×settore

  components/
    SettorePageLayout.tsx          NUOVO - layout riusabile per tutti i settori
```

---

## Schema TypeScript

```typescript
// src/content/settori/types.ts
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
    items: Array<{ title: string; desc: string }>;  // 3 elementi
  };
  workflow: {
    title: string;
    subtitle: string;
    steps: Array<{ title: string; desc: string }>;  // 3 elementi
  };
  features: {
    title: string;
    items: Array<{ title: string; desc: string }>;  // 3 elementi
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;         // 3 elementi
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  schema_sector_name: string;
}
```

---

## Pattern registry settori

```typescript
// src/content/settori/installatori/index.ts
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

---

## Pattern pagina settore (Server Component)

```tsx
// app/[locale]/settori/installatori/page.tsx
import { getInstallatoriContent } from '@/content/settori/installatori';
import SettorePageLayout from '@/components/SettorePageLayout';
import type { AppLocale } from '@/lib/i18n/config';

export default async function InstallatoriPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getInstallatoriContent(locale as AppLocale);
  return <SettorePageLayout content={content} locale={locale as AppLocale} settore="installatori" />;
}
```

---

## Refactoring dictionaries.ts

```typescript
// Prima (stubs inline):
const frDict = withOverrides({ navbar: { ... }, footer: { ... } });

// Dopo (file completi):
import frDict from '@/dictionaries/fr.json';
import deDict from '@/dictionaries/de.json';
// ... tutti i locale
```

`withOverrides` e `deepMerge` restano come utility ma vengono applicati solo come safety net su EN per chiavi eventualmente mancanti durante una migrazione futura.

---

## Contenuto market-optimized settori

### Principio
Ogni file `[locale].ts` non è una traduzione meccanica: è una riscrittura per il mercato locale con:
- **Terminologia di settore locale** (es. DE: "Elektriker und Heizungsinstallateure", FR: "Électriciens et plombiers")
- **Normative pertinenti** (es. DE: §17 MiLoG per tracciabilità ore; FR: Convention collective; NL: CAO Schoonmaak)
- **Software paga integrabili per mercato** (vedi tabella sotto)
- **Keyword SEO locali** nell'H1, sottotitoli e FAQ
- **Esempi e terminologia realistica** per il paese (es. NB: "utlegg", DA: "timesedler", RU: "наряды-допуски")

### Software paga per mercato

| Locale | Installatori/Pulizie/Sicurezza |
|--------|-------------------------------|
| DE | DATEV, Lexware, Personio, LODAS |
| FR | Silae, PayFit, ADP, Cegid |
| ES | A3nómina, Sage, Nominasol |
| PT | Primavera, PHC, TOConline |
| NL | AFAS, NMBRS, Exact |
| SV | Visma, Fortnox, Hogia |
| DA | Uniconta, e-conomic, Danløn |
| NB | Visma Lønn, Tripletex, Datakraf |
| RU | 1С:ЗУП, СБИС, Контур.Зарплата |
| EN | Sage, Xero, BrightHR, QuickBooks |

### Normative per settore e mercato

| Locale | Installatori | Pulizie | Sicurezza |
|--------|-------------|---------|-----------|
| DE | §17 MiLoG (Mindestlohn), ArbZG | Rahmentarifvertrag Gebäudereinigung | §34a GewO (Bewachungsgewerbe) |
| FR | Code du travail, CCN Bâtiment | CCN Nettoyage (IDCC 3043) | Loi du 12 juillet 1983, CNAPS |
| ES | Convenio colectivo construcción | Convenio limpieza edificios | Ley 5/2014 Seguridad Privada |
| PT | Código do Trabalho | CCT Limpeza e Higiene | Lei 34/2013 Segurança Privada |
| NL | CAO Elektrotechnisch | CAO Schoonmaak | CAO Particuliere Beveiliging |
| SV | Kollektivavtal EIO/Installatörerna | Städ- och serviceentreprenadavtalet | Bevakningsavtalet |
| DA | Industriens Overenskomst | Rengøringsoverenskomsten | Vagtoverenskomsten |
| NB | Fellesoverenskomsten for byggfag | Renholdsbedriftene (NHO) | Landsoverenskomsten for vektere |
| RU | ТК РФ ст. 91-99 (рабочее время) | СанПиН, профстандарты | Закон № 2487-1 (ЧОД) |

---

## Geolocation — flusso completo (già funzionante)

```
Utente accede a geotapp.com/
  ↓
middleware.ts legge:
  1. Cookie geotapp_locale (preferenza salvata)
  2. Header cf-ipcountry / x-vercel-ip-country
  3. Accept-Language header
  ↓
resolveLocale() → AppLocale
  ↓
redirect → /[locale]/
  ↓
Cookie salvato (365 giorni)
```

Il LanguageSwitcher esistente permette all'utente di sovrascrivere la lingua rilevata.

---

## SEO — sitemap aggiornata

```typescript
// Ogni URL generata:
SUPPORTED_LOCALES × pages = ~150 URL totali
// Incluse le 33 URL settori (11 locale × 3 settori)
// hreflang tag per ogni pagina con tutte le varianti linguistiche
```

---

## Fix inclusi nel piano

| Fix | File | Descrizione |
|-----|------|-------------|
| Apostrofi FAQ schema | `installatori/content.tsx` | `è`, `Sì`, `più`, `l'intervento` |
| Link settori non localizzati | `settori/page.tsx` | `/settori/...` → `/${locale}/settori/...` |
| visual_placeholder esposto | `product_pages` in dizionari | Rimuovere o non renderizzare |
| Russo in traslitterazione | `dictionaries.ts` | Sostituito da `ru.json` in Cirillico |

---

## File totali

| Tipo | Quantità |
|------|----------|
| Nuovi dizionari JSON | 9 |
| File content settori (3 settori × 11 locale + 3 index) | 36 |
| File content verifier (11 locale + 1 index) | 12 |
| `types.ts` settori | 1 |
| `SettorePageLayout.tsx` | 1 |
| Modifiche esistenti | ~12 |
| **Totale** | **~71 file** |
