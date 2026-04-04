# SEO Implementation Plan — geotapp.com

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Scalare le posizioni Google passando da ~7 clic/mese a 300+ in 90 giorni, correggendo errori tecnici critici, ottimizzando le pagine già indicizzate e sostituendo il blog finto con contenuto reale SSR.

**Architecture:** Fix tecnici prima (massimo impatto immediato), poi ottimizzazione on-page su pagine già indicizzate con impression ma 0 clic, poi blog reale SSR dal WP REST API, infine structured data su tutto il sito. Il posizionamento strategico è "certificazione del lavoro sul campo" — non timbratura.

**Tech Stack:** Next.js 14 App Router, Cloudflare Workers, WordPress REST API, TypeScript, Tailwind CSS.

---

## FASE 0 — Fix Tecnici Urgenti

### Task 1: Redirect www → non-www nel middleware Next.js

**Contesto:** `www.geotapp.com/*` appare in GSC come dominio separato (6+ URL indicizzati). Il middleware gestisce già i redirect locale — aggiungere qui il redirect www.

**Files:**
- Modify: `src/middleware.ts`

**Step 1: Individua l'entry point del middleware**

Apri `src/middleware.ts`. Cerca la funzione `export function middleware(request: NextRequest)`. Il redirect www va aggiunto come prima istruzione, prima di qualsiasi altra logica.

**Step 2: Aggiungi il redirect www → non-www**

Dentro la funzione `middleware`, aggiungi all'inizio (dopo le dichiarazioni di variabili iniziali ma prima di qualsiasi altra logica):

```typescript
// Redirect www → non-www (301 permanent)
const host = request.headers.get('host') ?? '';
if (host.startsWith('www.')) {
  const url = request.nextUrl.clone();
  url.host = host.slice(4); // rimuove "www."
  return NextResponse.redirect(url, { status: 301 });
}
```

**Step 3: Verifica che non rompa nulla**

Controlla che la funzione `config.matcher` del middleware includa già `'/(.*)'` o simile — deve matchare tutte le route, non solo quelle localizzate.

**Step 4: Commit**

```bash
git add src/middleware.ts
git commit -m "fix(seo): redirect www → non-www (301) nel middleware"
```

---

### Task 2: Blocca crm.geotapp.com dall'indicizzazione

**Contesto:** `crm.geotapp.com` è `geotapp-cms` (Fluxa, Fastify + React/Vite). Appare in GSC con 5 impressioni. Non deve mai essere indicizzato. Il fix è a livello Cloudflare perché non è Next.js.

**Files:**
- Nessun file da modificare nel repo `geotapp-site` — questa è una configurazione Cloudflare.

**Step 1: Cloudflare Dashboard → Transform Rules**

1. Vai su Cloudflare Dashboard → dominio `geotapp.com` (o il dominio che gestisce `crm.geotapp.com`)
2. Menu: **Rules → Transform Rules → Modify Response Header**
3. Crea nuova regola:
   - **Nome:** `Block CRM indexing`
   - **When:** `Hostname equals crm.geotapp.com`
   - **Then:** Set header `X-Robots-Tag` = `noindex, nofollow`

**Step 2: Aggiungi robots.txt a geotapp-cms**

In `geotapp-cms`, trova il punto dove Fastify serve file statici o aggiungi una route:

```typescript
// In apps/cms-core o apps/admin — dove gira il server Fastify
fastify.get('/robots.txt', async (request, reply) => {
  reply
    .header('Content-Type', 'text/plain')
    .send('User-agent: *\nDisallow: /');
});
```

**Step 3: Verifica**

Dopo il deploy, controlla con:
```bash
curl -I https://crm.geotapp.com/robots.txt
# Deve restituire X-Robots-Tag: noindex, nofollow
curl https://crm.geotapp.com/robots.txt
# Deve restituire: User-agent: *\nDisallow: /
```

**Step 4: Richiedi rimozione URL in GSC**

In Google Search Console → Rimozioni → Rimozione temporanea → inserisci `https://crm.geotapp.com/` con prefisso. Questo accelera la de-indicizzazione (altrimenti Google ci mette settimane).

---

### Task 3: Blocca pagine WordPress di default dall'indicizzazione

**Contesto:** Queste URL WP appaiono in GSC con impressioni: `/checkout/`, `/cart/`, `/about-us/`, `/services/`, `/pagina-di-esempio/`. Sprecano crawl budget e rischiano penalizzazione per thin content. Il blog WP è su `blog.geotapp.com` ma proxiato sotto `/blog/` — il robots.txt del sito Next.js va già bene (blocca `/blog/wp-admin/` etc.). Il problema sono le pagine WP da bloccare via Rank Math/Yoast direttamente su WordPress.

**Files:**
- Modify: `src/app/robots.ts` (aggiungere disallow per i path che arrivano via proxy)

**Step 1: Aggiorna robots.ts per bloccare i path WP problematici**

Apri `src/app/robots.ts`. Aggiungi i path alla lista `disallow`:

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/blog/wp-admin/',
          '/blog/wp-login.php',
          '/blog/xmlrpc.php',
          '/blog/wp-cron.php',
          // Pagine WP di default — nessun valore SEO
          '/blog/checkout/',
          '/blog/cart/',
          '/blog/about-us/',
          '/blog/services/',
          '/blog/pagina-di-esempio/',
          // Pagine WP interne
          '/blog/wp-json/',
          '/blog/author/',
        ],
      },
    ],
    sitemap: 'https://geotapp.com/sitemap.xml',
    host: 'https://geotapp.com',
  };
}
```

**Step 2: Imposta noindex su WordPress**

Sul pannello WordPress di `blog.geotapp.com` (accesso admin):
- Installa/configura **Rank Math SEO** o **Yoast SEO**
- Vai in Impostazioni SEO → Tipi di contenuto
- Imposta noindex su: pagine WooCommerce (checkout, cart), pagine sample

**Step 3: Fix canonical double slash**

Cerca in WordPress → Impostazioni → Permalink → salva di nuovo per rigenerare. Poi verifica:
```bash
curl -I "https://geotapp.com/blog/2025/12/11/gestione-delle-squadre-in-mobilita//"
# Deve fare redirect 301 alla URL senza double slash
```

**Step 4: Commit**

```bash
git add src/app/robots.ts
git commit -m "fix(seo): blocca pagine WP default in robots.txt (checkout, cart, about-us)"
```

---

### Task 4: Fix trailing slash — URL duplicati senza slash

**Contesto:** GSC mostra `/download` e `/download/`, `/en` e `/en/`, `/features` e `/features/` come URL separate. `next.config.mjs` ha già `trailingSlash: true` ma alcune URL senza slash sfuggono.

**Files:**
- Modify: `src/middleware.ts`

**Step 1: Aggiungi normalizzazione trailing slash nel middleware**

Dopo il redirect www (Task 1), aggiungi:

```typescript
// Force trailing slash su path che non sono file statici e non ce l'hanno già
const { pathname } = request.nextUrl;
const isFile = PUBLIC_FILE.test(pathname); // PUBLIC_FILE già definito nel file
const hasTrailingSlash = pathname.endsWith('/');
const isApiRoute = pathname.startsWith('/api/');
const isBlogProxy = pathname.startsWith('/blog/');

if (!isFile && !hasTrailingSlash && !isApiRoute && !isBlogProxy && pathname !== '') {
  const url = request.nextUrl.clone();
  url.pathname = pathname + '/';
  return NextResponse.redirect(url, { status: 308 });
}
```

**Step 2: Verifica che il blog proxy non sia rotto**

Il proxy blog (`/blog/*`) deve passare senza aggiungere trailing slash sulle URL WP che non ce l'hanno (es. `/blog/wp-json/...`). Il check `isBlogProxy` sopra gestisce questo.

**Step 3: Test manuale**

```bash
curl -I https://geotapp.com/download
# Deve rispondere: 308 Location: https://geotapp.com/download/

curl -I https://geotapp.com/en
# Deve rispondere: 308 Location: https://geotapp.com/en/
```

**Step 4: Commit**

```bash
git add src/middleware.ts
git commit -m "fix(seo): forza trailing slash 308 su path senza slash nel middleware"
```

---

## FASE 1 — Ottimizzazione On-Page

### Task 5: Structured Data — Homepage (Organization + SoftwareApplication)

**Contesto:** La homepage non ha Schema.org. Aggiungere `Organization` + `SoftwareApplication` consente a Google di mostrare rich snippets (logo, sitelinks, rating) nei risultati.

**Files:**
- Modify: `src/app/page.tsx` oppure `src/app/[locale]/page.tsx` (dove viene renderizzata la homepage)
- Create: `src/components/seo/JsonLd.tsx`

**Step 1: Crea componente JsonLd riutilizzabile**

```typescript
// src/components/seo/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

**Step 2: Aggiungi Organization schema alla homepage**

Trova il componente root della homepage (cerca dove viene renderizzato `<main>` o `<section>` hero). Aggiungi dentro il `return`:

```typescript
import { JsonLd } from '@/components/seo/JsonLd';

// Dentro il JSX della homepage:
<JsonLd data={{
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GeoTapp',
  url: 'https://geotapp.com',
  logo: 'https://geotapp.com/LogoGeoTapp.png',
  description: 'Piattaforma che certifica il lavoro sul campo con report sigillati, GPS verificato e prove fotografiche.',
  sameAs: [
    // aggiungere social se disponibili
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: 'https://geotapp.com/contact/',
    availableLanguage: ['Italian', 'English', 'German', 'French', 'Spanish'],
  },
}} />

<JsonLd data={{
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'GeoTapp',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  url: 'https://geotapp.com',
  description: 'Sistema di certificazione del lavoro sul campo: report sigillati con GPS reale, prove fotografiche e documentazione verificabile da terzi.',
  offers: {
    '@type': 'Offer',
    url: 'https://geotapp.com/pricing/',
    priceCurrency: 'EUR',
  },
}} />
```

**Step 3: Verifica con Google Rich Results Test**

Apri https://search.google.com/test/rich-results e inserisci `https://geotapp.com/it/` dopo il deploy. Deve riconoscere Organization e SoftwareApplication.

**Step 4: Commit**

```bash
git add src/components/seo/JsonLd.tsx src/app/page.tsx
git commit -m "feat(seo): aggiunge structured data Organization + SoftwareApplication su homepage"
```

---

### Task 6: Structured Data — Settori (Service + FAQPage)

**Contesto:** Le 3 landing settori (pulizie, installatori, sicurezza) hanno 265+43+36 impressioni con 0 clic. Aggiungere `Service` + `FAQPage` Schema per aumentare CTR con rich snippets FAQ nei risultati.

**Files:**
- Modify: `src/components/SettorePageLayout.tsx` (componente condiviso da tutte le landing settori)
- Modify: `src/content/settori/types.ts` (aggiungere campo `faq`)
- Modify: `src/content/settori/pulizie/it.ts` (aggiungere FAQ in italiano)

**Step 1: Aggiungi campo `faq` al tipo SettoreContent**

```typescript
// src/content/settori/types.ts — aggiungi al tipo esistente:
faq?: Array<{
  question: string;
  answer: string;
}>;
```

**Step 2: Aggiungi FAQ al contenuto pulizie IT**

In `src/content/settori/pulizie/it.ts`, aggiungi dopo l'ultimo campo:

```typescript
faq: [
  {
    question: 'GeoTapp è solo un\'app di timbratura?',
    answer: 'No. GeoTapp è un sistema di certificazione del lavoro: ogni intervento produce un report sigillato con GPS verificato, foto e timestamp che il committente può verificare autonomamente. Va oltre la semplice timbratura.',
  },
  {
    question: 'Come funziona per le imprese di pulizie con più edifici?',
    answer: 'Gli operatori timbrano dall\'app mobile su ogni edificio. Il gestore vede in tempo reale chi ha pulito dove e quando, con foto dell\'ambiente allegate. Nessuna contestazione da parte del committente.',
  },
  {
    question: 'È conforme al CCNL Multiservizi?',
    answer: 'Sì. GeoTapp traccia pause, straordinari e presenze in modo conforme al CCNL Multiservizi e rispetta le normative GDPR sulla geolocalizzazione dei dipendenti.',
  },
  {
    question: 'Quanto costa?',
    answer: 'I piani partono da pochi euro per operatore al mese. Puoi richiedere una demo gratuita per vedere il sistema in funzione sulla tua realtà.',
  },
  {
    question: 'Funziona anche per il facility management e il multiservizi?',
    answer: 'Sì. GeoTapp è usato da imprese di pulizie, multiservizi, facility management e ogni realtà con operatori distribuiti su più siti. La piattaforma scala dalla piccola impresa alle grandi aziende.',
  },
],
```

**Step 3: Aggiorna SettorePageLayout per renderizzare Schema**

In `src/components/SettorePageLayout.tsx`, aggiungi all'inizio del return:

```typescript
import { JsonLd } from '@/components/seo/JsonLd';

// Nel JSX, prima del contenuto visibile:
{content.faq && content.faq.length > 0 && (
  <>
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: content.meta.title,
      description: content.meta.description,
      provider: {
        '@type': 'Organization',
        name: 'GeoTapp',
        url: 'https://geotapp.com',
      },
      areaServed: { '@type': 'Country', name: 'Italy' },
      url: `https://geotapp.com/settori/${settore}/`,
    }} />
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: content.faq.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      })),
    }} />
  </>
)}
```

**Step 4: Verifica**

```bash
# Build locale e apri /settori/pulizie/ nel browser
# Ispeziona il DOM: cerca <script type="application/ld+json">
# Oppure usa Google Rich Results Test dopo deploy
```

**Step 5: Commit**

```bash
git add src/components/seo/JsonLd.tsx src/components/SettorePageLayout.tsx \
        src/content/settori/types.ts src/content/settori/pulizie/it.ts
git commit -m "feat(seo): aggiunge Service + FAQPage Schema su landing settori"
```

---

### Task 7: Ottimizzazione meta /settori/pulizie/ — title e description

**Contesto:** "app per impresa di pulizie" ha 174 impressioni e 0 clic. Il meta title attuale è buono ma non include la keyword esatta. Il meta deve includere la keyword primaria e differenziare sul concetto di certificazione (non solo gestione).

**Files:**
- Modify: `src/content/settori/pulizie/it.ts`

**Step 1: Aggiorna meta title e description**

Nel campo `meta` di `src/content/settori/pulizie/it.ts`:

```typescript
meta: {
  title: 'App per Imprese di Pulizie | GeoTapp — Certifica ogni intervento',
  description: 'GeoTapp è l\'app per imprese di pulizie che certifica ogni intervento: report sigillati con GPS e foto, zero contestazioni. Conforme CCNL Multiservizi e GDPR. Prova gratis.',
},
```

**Perché questo title:** include "app per imprese di pulizie" (query con 174 imp), poi il brand, poi la differenziazione ("Certifica"). Sotto i 60 caratteri per non essere troncato.

**Step 2: Aggiorna anche EN per iniziare l'internazionalizzazione**

In `src/content/settori/pulizie/en.ts`, stesso approccio con keyword inglesi:

```typescript
meta: {
  title: 'Cleaning Company Software | GeoTapp — Certify Every Job',
  description: 'GeoTapp is the cleaning company management software that certifies every job: tamper-proof reports with GPS and photos, zero disputes. GDPR compliant. Try free.',
},
```

**Step 3: Commit**

```bash
git add src/content/settori/pulizie/it.ts src/content/settori/pulizie/en.ts
git commit -m "fix(seo): ottimizza meta title/desc pulizie per keyword 'app impresa pulizie'"
```

---

### Task 8: Landing page Zenith-SEO (rimuovi redirect a /pricing)

**Contesto:** `/products/zenith-seo/` fa redirect a `/pricing` invece di avere una landing dedicata. Una pagina prodotto SEO ha keyword altamente specifiche senza competitor diretti — opportunità unica.

**Files:**
- Modify: `src/app/products/zenith-seo/page.tsx`

**Step 1: Sostituisci il redirect con una landing page**

```typescript
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Zenith SEO | GeoTapp — Contenuti ottimizzati per la certificazione del lavoro',
  description: 'Zenith SEO di GeoTapp ottimizza i tuoi contenuti per intercettare clienti che cercano prove di lavoro verificabili, report cantiere e gestione squadre certificata.',
  alternates: { canonical: '/products/zenith-seo/' },
};

export default function ZenithSeoPage() {
  return (
    <main className="bg-background min-h-screen pt-40 pb-20 px-6">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Zenith SEO',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Modulo SEO di GeoTapp per ottimizzare contenuti e posizionamento delle imprese con tecnici sul campo.',
        offers: { '@type': 'Offer', url: 'https://geotapp.com/pricing/', priceCurrency: 'EUR' },
      }} />

      <section className="container mx-auto max-w-4xl text-center mb-20">
        <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-4">
          Prodotto GeoTapp
        </span>
        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
          Zenith SEO
        </h1>
        <p className="text-xl text-text-secondary font-light max-w-2xl mx-auto">
          Il modulo che porta le tue pagine in prima posizione per chi cerca prove di lavoro verificabili, gestione squadre e report cantiere.
        </p>
        <div className="flex gap-4 justify-center mt-10">
          <Link href="/demo/" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-primary transition-colors">
            Richiedi Demo
          </Link>
          <Link href="/pricing/" className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:border-white/50 transition-colors">
            Vedi Prezzi
          </Link>
        </div>
      </section>
    </main>
  );
}
```

**Step 2: Commit**

```bash
git add src/app/products/zenith-seo/page.tsx
git commit -m "feat(seo): sostituisce redirect Zenith-SEO con landing page dedicata"
```

---

## FASE 2 — Blog Reale SSR

### Task 9: Sostituisci il blog stub con fetch SSR da WordPress

**Contesto:** `src/app/blog/page.tsx` è `'use client'` con 3 articoli fake hardcodati (`slug: '#'`). Google la vede vuota. Va sostituita con un Server Component che fetcha i post reali da WP REST API — stesso approccio già usato in `sitemap.ts`.

**Files:**
- Modify: `src/app/blog/page.tsx`

**Step 1: Sostituisci il componente**

```typescript
// src/app/blog/page.tsx
// RIMUOVI 'use client' — deve essere Server Component per SSR/SSG

import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Blog | GeoTapp — Certificazione del lavoro sul campo',
  description: 'Guide, approfondimenti e risorse su gestione squadre, certificazione interventi, GDPR e geolocalizzazione. Dal team GeoTapp.',
  alternates: { canonical: '/blog/' },
};

type WpPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  _embedded?: {
    'wp:term'?: Array<Array<{ name: string; slug: string }>>;
  };
};

async function fetchBlogPosts(): Promise<WpPost[]> {
  try {
    const res = await fetch(
      'https://blog.geotapp.com/wp-json/wp/v2/posts/?per_page=12&_fields=id,slug,title,excerpt,date,link&lang=it&_embed=wp:term',
      {
        headers: {
          host: 'blog.geotapp.com',
          'x-geotapp-proxy': '1',
          'x-forwarded-proto': 'https',
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const posts = await res.json();
    return Array.isArray(posts) ? posts : [];
  } catch {
    return [];
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

function normalizePostUrl(link: string, slug: string): string {
  try {
    const parsed = new URL(link);
    if (parsed.hostname === 'blog.geotapp.com') {
      return `/blog${parsed.pathname}`;
    }
    if (parsed.hostname === 'geotapp.com') {
      return parsed.pathname;
    }
  } catch { /* fallback */ }
  return `/blog/${slug}/`;
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="bg-background min-h-screen pt-40 pb-20 px-6">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'GeoTapp Blog',
        url: 'https://geotapp.com/blog/',
        description: 'Guide e approfondimenti su certificazione del lavoro sul campo, gestione squadre, GDPR e geolocalizzazione.',
        publisher: {
          '@type': 'Organization',
          name: 'GeoTapp',
          url: 'https://geotapp.com',
        },
      }} />

      <section className="container mx-auto max-w-4xl text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
          Pensieri e Scintille.
        </h1>
        <p className="text-xl text-text-secondary font-light">
          Non scriviamo per riempire pagine. Scriviamo per condividere ciò che
          impariamo costruendo il futuro del lavoro certificabile.
        </p>
      </section>

      <section className="container mx-auto max-w-4xl space-y-12">
        {posts.length === 0 ? (
          <p className="text-text-secondary text-center">Caricamento articoli...</p>
        ) : (
          posts.map((post) => {
            const postUrl = normalizePostUrl(post.link, post.slug);
            const excerpt = stripHtml(post.excerpt.rendered).slice(0, 200);
            const date = new Date(post.date).toLocaleDateString('it-IT', {
              day: 'numeric', month: 'long', year: 'numeric',
            });

            return (
              <article key={post.id} className="group">
                <Link href={postUrl}>
                  <div className="flex flex-col md:flex-row gap-8 items-baseline border-b border-white/5 pb-10 hover:border-white/20 transition-colors">
                    <div className="md:w-1/4">
                      <span className="text-text-muted text-sm font-mono">{date}</span>
                    </div>
                    <div className="md:w-3/4">
                      <h2
                        className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <p className="text-text-secondary text-lg leading-relaxed font-light mb-6">
                        {excerpt}{excerpt.length === 200 ? '…' : ''}
                      </p>
                      <span className="flex items-center gap-2 text-white font-bold">
                        Leggi l&apos;articolo →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })
        )}
      </section>

      <section className="container mx-auto max-w-2xl text-center mt-32 pt-20 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white mb-4">Rimani nel loop</h2>
        <p className="text-text-secondary mb-8 font-light">
          Niente spam, solo aggiornamenti di valore sul prodotto e sul settore.
        </p>
        <Link
          href="/contact/"
          className="inline-block px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-primary transition-colors"
        >
          Contattaci
        </Link>
      </section>
    </div>
  );
}
```

**Note importanti:**
- Rimuovere `'use client'` è essenziale — il componente diventa Server Component
- `dangerouslySetInnerHTML` sul title WP è sicuro: il contenuto viene da WP fidato e non da input utente
- Il fallback `posts.length === 0` mostra un messaggio invece di crashare
- Il revalidate 3600 significa che la pagina viene rigenerata ogni ora (ISR)

**Step 2: Verifica build**

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
npm run build 2>&1 | grep -E "error|warn|blog"
```

**Step 3: Test manuale**

```bash
npm run dev
# Apri http://localhost:3000/blog/
# Deve mostrare articoli reali da WordPress con link cliccabili
```

**Step 4: Commit**

```bash
git add src/app/blog/page.tsx
git commit -m "feat(seo): sostituisce blog stub statico con fetch SSR da WP REST API"
```

---

### Task 10: Article Schema su singoli post blog

**Contesto:** I post WP sono serviti via proxy nel middleware. L'`Article` Schema deve essere iniettato nel proxy response o nella pagina WP stessa (via plugin WP). La via più semplice è via Rank Math su WordPress — non richiede modifiche al codice Next.js.

**Files:**
- Nessun file Next.js — configurazione WordPress.

**Step 1: Configura Rank Math su WordPress**

1. Accedi a `blog.geotapp.com/wp-admin`
2. Installa **Rank Math SEO** se non presente
3. In Rank Math → Impostazioni generali → Schema → imposta schema di default per i Post su "Article"
4. Rank Math inietterà automaticamente `Article` Schema in ogni post

**Step 2: Verifica su un articolo**

```bash
curl -s https://geotapp.com/blog/2025/11/20/geolocalizzazione-dipendenti-gdpr-guida-legale/ \
  | grep -o 'application/ld+json.*' | head -1
# Deve contenere @type: Article
```

---

## FASE 3 — Contenuto Strategico (post-implementazione)

Questi task non sono implementazioni di codice ma azioni editoriali da eseguire nel pannello WordPress dopo le fasi 0-2.

### Task 11: Potenziamento articolo star GDPR

L'articolo `geolocalizzazione-dipendenti-gdpr-guida-legale` ha 1.093 impressioni / 14 clic (CTR ~1.3%, pos. stimata 10-20).

**Azioni WordPress:**
1. Aggiorna la data di pubblicazione → segnale freshness a Google
2. Aggiungi una sezione "CTA" alla fine: "Vuoi sapere come GeoTapp gestisce la geolocalizzazione in modo GDPR-compliant?" → link a `/demo/`
3. Scrivi 2 articoli satellite che linkano a questo:
   - "Fac-simile informativa dipendenti GPS GDPR" (query in GSC: 2 imp)
   - "Timbratura geolocalizzata e legge: cosa può fare il datore di lavoro"

### Task 12: Nuove landing verticali

Crea pagine replicando la struttura di `/settori/pulizie/`:
- `/settori/cantieri/` — keyword: "gestione cantieri edili", "app cantiere"
- `/settori/idraulici/` — keyword: "app per idraulici", "app per termoidraulici"
- `/settori/facility/` — keyword: "software facility management", "presenze facility"

Ogni pagina segue la struttura `content/settori/[settore]/it.ts` + page.tsx + layout.

### Task 13: Pillar page "Certificazione del lavoro"

Crea sul blog WP un articolo lungo (2.000+ parole):
**"Certificazione del lavoro sul campo: cos'è, perché conta e come funziona"**

Questo articolo deve:
- Definire il concetto di "lavoro certificato" vs "lavoro tracciato"
- Spiegare il problema delle contestazioni
- Linkare a tutti i prodotti GeoTapp
- Essere ottimizzato per keyword informazionali che Google Gemini risponde con AI Overview

---

## Checklist Finale di Deploy

Dopo ogni fase, verificare:

```bash
# 1. Robots.txt corretto
curl https://geotapp.com/robots.txt

# 2. Sitemap accessibile
curl https://geotapp.com/sitemap.xml | head -20

# 3. www redirect attivo
curl -I https://www.geotapp.com/

# 4. Trailing slash forzato
curl -I https://geotapp.com/download
curl -I https://geotapp.com/en

# 5. CRM non indicizzabile
curl -I https://crm.geotapp.com/ | grep -i "x-robots"
curl https://crm.geotapp.com/robots.txt

# 6. Blog reale
curl -s https://geotapp.com/blog/ | grep -c "href=\"/blog/"
# Deve restituire > 0 (articoli con link reali)

# 7. Schema.org homepage
curl -s https://geotapp.com/it/ | grep -c "application/ld+json"
# Deve restituire >= 2
```

---

## Note Cloudflare

Alcune fix richiedono accesso alla Cloudflare Dashboard e non al codice:

1. **www redirect** — se il middleware non basta (dominio `www` separato), configurare in Cloudflare: Rules → Redirect Rules → `www.geotapp.com/*` → `https://geotapp.com/$1` (301, Permanent)
2. **crm.geotapp.com noindex** — Transform Rules → Modify Response Header → `X-Robots-Tag: noindex, nofollow` quando hostname = `crm.geotapp.com`
3. **Cache purge** — dopo ogni deploy SEO importante, fare "Purge Everything" in Cloudflare Cache per invalidare immediatamente
