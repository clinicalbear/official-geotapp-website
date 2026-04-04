# SEO Pillar Risorse — Contenuto + CTA + JSON-LD

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the thin `/[locale]/settori/[settore]/risorse/` archive pages into full content hubs with editorial intro, product CTA box, and structured data (BreadcrumbList + ItemList) so Google stops classifying them as thin-content archive pages.

**Architecture:** All changes are confined to one file (`src/app/[locale]/settori/[settore]/risorse/page.tsx`). Task 1 is a pure data extension to `SETTORE_CONFIG` — no JSX touched. Task 2 adds JSX sections and JSON-LD using the new config keys. Task 3 is a standalone PHP change to the `zenith-seo` WP plugin to noindex WP archive pages, deployed via SFTP.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, PHP 7.4+ (WordPress plugin), SFTP deploy.

---

## Task 1: Extend SETTORE_CONFIG with intro texts and product CTA data

**Files:**
- Modify: `src/app/[locale]/settori/[settore]/risorse/page.tsx`

No JSX changes in this task — data only. The TypeScript type for `SETTORE_CONFIG` must also be extended inline.

### Step 1: Extend the TypeScript type for SETTORE_CONFIG

Replace the existing type annotation on `SETTORE_CONFIG` (lines 10–13 of the current file) with this expanded type:

```typescript
const SETTORE_CONFIG: Record<string, {
  categoryId: number;
  labels: Record<string, { title: string; description: string; heading: string }>;
  intro: Record<string, string>;
  product: {
    name: string;
    slug: 'geotapp-app' | 'geotapp-flow' | 'geotapp-verifier';
    ctaLabel: Record<string, { discover: string; cta: string }>;
  };
}> = {
```

### Step 2: Add the shared CTA_LABELS constant above SETTORE_CONFIG

Insert this constant immediately before the `SETTORE_CONFIG` declaration:

```typescript
const CTA_LABELS: Record<string, { discover: string; cta: string }> = {
  it: { discover: 'Scopri', cta: 'Vai al prodotto →' },
  en: { discover: 'Discover', cta: 'Go to product →' },
  de: { discover: 'Entdecken', cta: 'Zum Produkt →' },
  fr: { discover: 'Découvrir', cta: 'Voir le produit →' },
  es: { discover: 'Descubrir', cta: 'Ver el producto →' },
  pt: { discover: 'Descobrir', cta: 'Ver o produto →' },
  nl: { discover: 'Ontdekken', cta: 'Naar product →' },
  da: { discover: 'Opdag', cta: 'Gå til produkt →' },
  sv: { discover: 'Upptäck', cta: 'Till produkt →' },
  nb: { discover: 'Oppdag', cta: 'Til produkt →' },
  ru: { discover: 'Узнать', cta: 'К продукту →' },
};
```

### Step 3: Add intro and product to the `pulizie` entry

Inside the `pulizie` object, after the existing `labels` key, add:

```typescript
    intro: {
      it: 'La gestione delle imprese di pulizia presenta sfide operative che la maggior parte dei software gestionali ignora: squadre distribuite su più cantieri, timbrature difficili da verificare, clienti che chiedono report documentati. Queste guide raccolgono tutto quello che serve sapere per organizzare presenze, interventi e comunicazione interna in modo efficiente — senza sprechi di tempo in telefonate o fogli Excel. Gli articoli coprono temi pratici come la gestione dei turni, il controllo delle presenze GPS, la documentazione dei lavori svolti e la segnalazione di anomalie sul campo. Ogni guida è pensata per responsabili operativi e titolari di imprese di pulizia che vogliono ridurre i problemi quotidiani e aumentare la trasparenza verso i clienti. GeoTapp App è la soluzione pensata per questo settore: permette ai collaboratori di timbrare entrata e uscita dal cantiere tramite GPS, inviare foto dei lavori completati e comunicare in tempo reale con il coordinatore.',
      en: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. Topics include shift management, GPS attendance tracking, job documentation, and field anomaly reporting. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      de: 'Die Verwaltung von Reinigungsunternehmen stellt operative Herausforderungen: verteilte Teams auf mehreren Baustellen, schwer nachweisbare Anwesenheiten und Kunden, die dokumentierte Berichte verlangen. Diese Leitfäden decken alles ab, was für eine effiziente Organisation von Anwesenheiten und Aufträgen benötigt wird. GeoTapp App ermöglicht Reinigungskräften, per GPS ein- und auszustempeln, Fotos der erledigten Arbeiten zu senden und in Echtzeit mit dem Koordinator zu kommunizieren.',
      fr: "La gestion des entreprises de nettoyage présente des défis opérationnels que la plupart des logiciels ignorent : équipes réparties sur plusieurs chantiers, pointages difficiles à vérifier, clients exigeant des rapports documentés. Ces guides couvrent tout ce qu'il faut savoir pour organiser les présences, les interventions et la communication interne. GeoTapp App permet aux agents de pointer leurs entrées et sorties par GPS, d'envoyer des photos des travaux réalisés et de communiquer en temps réel avec le coordinateur.",
      es: 'La gestión de empresas de limpieza presenta retos operativos que la mayoría del software ignora: equipos distribuidos en múltiples obras, fichajes difíciles de verificar y clientes que exigen informes documentados. Estas guías cubren todo lo necesario para organizar presencias, intervenciones y comunicación interna de forma eficiente. GeoTapp App permite a los operarios fichar entrada y salida desde la obra por GPS, enviar fotos de los trabajos realizados y comunicarse en tiempo real con el coordinador.',
      pt: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      nl: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      da: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      sv: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      nb: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
      ru: "Managing cleaning companies comes with operational challenges most software ignores: distributed teams across multiple sites, attendance that's hard to verify, and clients demanding documented reports. These guides cover everything needed to organize attendance, jobs, and internal communication efficiently. GeoTapp App lets cleaning staff clock in and out from job sites via GPS, send photos of completed work, and communicate in real time with coordinators.",
    },
    product: {
      name: 'GeoTapp App',
      slug: 'geotapp-app',
      ctaLabel: CTA_LABELS,
    },
```

### Step 4: Add intro and product to the `installatori` entry

Inside the `installatori` object, after the existing `labels` key, add:

```typescript
    intro: {
      it: "Gli installatori e le aziende con tecnici sul campo affrontano ogni giorno il problema del coordinamento: sapere dove sono i tecnici, quali interventi sono stati chiusi, cosa è rimasto in sospeso e come documentare il lavoro per il cliente finale. Questi articoli raccolgono le pratiche operative più efficaci per aziende che gestiscono da 3 a 50 tecnici in campo — dall'organizzazione degli ordini di lavoro alla gestione delle emergenze, dalla reportistica automatica all'integrazione con i processi aziendali esistenti. I temi trattati vanno dalla pianificazione degli interventi alla comunicazione con i clienti, passando per la gestione dei ricambi sul campo e il monitoraggio dei KPI operativi. GeoTapp Flow è la piattaforma pensata per questo tipo di aziende: permette di assegnare interventi, seguire lo stato di avanzamento in tempo reale, raccogliere le firme del cliente al termine del lavoro e generare report automatici.",
      en: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. These guides cover effective operational practices for companies managing 3 to 50 field technicians — from work order organization to emergency handling and automatic reporting. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      de: 'Installateure und Außendienstunternehmen stehen täglich vor Koordinationsproblemen: Wo befinden sich die Techniker? Welche Aufträge wurden abgeschlossen? Wie wird die Arbeit für den Endkunden dokumentiert? Diese Leitfäden decken bewährte Betriebspraktiken für Unternehmen mit 3 bis 50 Außendiensttechnikern ab. GeoTapp Flow ermöglicht die Zuweisung von Aufträgen, die Echtzeit-Verfolgung des Fortschritts, die Erfassung von Kundenunterschriften und die automatische Berichterstattung.',
      fr: "Les installateurs et entreprises de terrain font face chaque jour à des problèmes de coordination : savoir où sont les techniciens, quelles interventions ont été clôturées, comment documenter le travail pour le client final. Ces guides couvrent les meilleures pratiques pour les entreprises gérant 3 à 50 techniciens terrain. GeoTapp Flow permet d'assigner des interventions, de suivre l'avancement en temps réel, de collecter les signatures clients et de générer des rapports automatiques.",
      es: 'Los instaladores y empresas de servicio de campo enfrentan retos diarios de coordinación: saber dónde están los técnicos, qué intervenciones se han cerrado y cómo documentar el trabajo para el cliente final. Estas guías cubren las mejores prácticas operativas para empresas con 3 a 50 técnicos de campo. GeoTapp Flow permite asignar intervenciones, seguir el progreso en tiempo real, recoger firmas del cliente y generar informes automáticos.',
      pt: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. These guides cover effective operational practices for companies managing 3 to 50 field technicians. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      nl: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. These guides cover effective operational practices for companies managing 3 to 50 field technicians. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      da: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. These guides cover effective operational practices for companies managing 3 to 50 field technicians. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      sv: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. These guides cover effective operational practices for companies managing 3 to 50 field technicians. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      nb: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. These guides cover effective operational practices for companies managing 3 to 50 field technicians. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
      ru: "Installers and field service companies face daily coordination challenges: knowing where technicians are, which jobs have been closed, what's still pending, and how to document work for the end client. These guides cover effective operational practices for companies managing 3 to 50 field technicians. GeoTapp Flow lets you assign jobs, track progress in real time, collect client signatures on completion, and generate automatic reports.",
    },
    product: {
      name: 'GeoTapp Flow',
      slug: 'geotapp-flow',
      ctaLabel: CTA_LABELS,
    },
```

### Step 5: Add intro and product to the `sicurezza` entry

Inside the `sicurezza` object, after the existing `labels` key, add:

```typescript
    intro: {
      it: "Le aziende di sicurezza e vigilanza operano in ambienti dove la tracciabilità non è un'opzione ma un requisito: ogni ronda deve essere documentata, ogni agente deve essere localizzabile, ogni anomalia deve essere segnalata in tempo reale. Questi articoli affrontano i temi operativi più rilevanti per responsabili di servizi di sicurezza — dalla gestione dei turni e delle presenze alla documentazione degli interventi, dalla comunicazione con la centrale operativa alla reportistica per i clienti finali. La gestione delle squadre di sicurezza richiede strumenti che bilancino controllo operativo e privacy dei lavoratori, con prove concrete di servizio per i clienti e alert automatici in caso di anomalie. GeoTapp App è progettata per rispondere a queste esigenze: permette agli agenti di registrare presenze con geolocalizzazione, documentare ronde ed eventi con foto e note, e comunicare istantaneamente con la centrale.",
      en: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. These guides cover the most relevant operational topics for security service managers — from shift and attendance management to incident documentation and client reporting. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      de: 'Sicherheitsunternehmen arbeiten in Umgebungen, wo Nachverfolgbarkeit keine Option, sondern eine Anforderung ist: jede Runde muss dokumentiert, jeder Agent muss ortbar sein, jede Anomalie muss in Echtzeit gemeldet werden. Diese Leitfäden behandeln die relevantesten operativen Themen für Sicherheitsdienstleiter. GeoTapp App ermöglicht Agenten, Anwesenheiten mit Geolokalisierung zu erfassen, Runden mit Fotos zu dokumentieren und sofort mit der Zentrale zu kommunizieren.',
      fr: "Les entreprises de sécurité opèrent dans des environnements où la traçabilité est une exigence : chaque ronde doit être documentée, chaque agent doit être localisable, chaque anomalie doit être signalée en temps réel. Ces guides couvrent les thèmes opérationnels les plus pertinents pour les responsables de services de sécurité. GeoTapp App permet aux agents d'enregistrer leur présence par géolocalisation, de documenter les rondes avec photos et de communiquer instantanément avec la centrale.",
      es: 'Las empresas de seguridad operan en entornos donde la trazabilidad es un requisito: cada ronda debe documentarse, cada agente debe ser localizable, cada incidente debe reportarse en tiempo real. Estas guías cubren los temas operativos más relevantes para responsables de servicios de seguridad. GeoTapp App permite a los agentes registrar presencias con geolocalización, documentar rondas con fotos y comunicarse instantáneamente con la central.',
      pt: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. These guides cover the most relevant operational topics for security service managers. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      nl: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. These guides cover the most relevant operational topics for security service managers. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      da: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. These guides cover the most relevant operational topics for security service managers. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      sv: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. These guides cover the most relevant operational topics for security service managers. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      nb: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. These guides cover the most relevant operational topics for security service managers. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
      ru: 'Security and surveillance companies operate in environments where traceability is a requirement, not an option: every patrol must be documented, every agent must be locatable, every incident must be reported in real time. These guides cover the most relevant operational topics for security service managers. GeoTapp App lets agents log attendance with geolocation, document patrols with photos and notes, and communicate instantly with the control center.',
    },
    product: {
      name: 'GeoTapp App',
      slug: 'geotapp-app',
      ctaLabel: CTA_LABELS,
    },
```

### Step 6: Verify TypeScript compiles

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npm run build 2>&1 | tail -20
```

Expected: zero TypeScript errors. If the build reports an error about `CTA_LABELS` being used before declaration, ensure it is declared **before** `SETTORE_CONFIG` in the file.

### Step 7: Commit (data only)

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
git add "src/app/[locale]/settori/[settore]/risorse/page.tsx"
git commit -m "feat(seo): pillar risorse — extend SETTORE_CONFIG with intro + product CTA data"
```

---

## Task 2: Update RisorseSettorePage JSX — intro paragraph + CTA box + JSON-LD

**Files:**
- Modify: `src/app/[locale]/settori/[settore]/risorse/page.tsx`

This task touches only the `RisorseSettorePage` component body. Task 1 is a prerequisite.

### Step 1: Add PRODUCT_PAGE_LABELS constant before the component

Insert this constant after `READ_LABELS` (currently around line 121) and before the `export default async function` line:

```typescript
const PRODUCT_PAGE_LABELS: Record<string, string> = {
  it: 'Strumento consigliato per questo settore',
  en: 'Recommended tool for this sector',
  de: 'Empfohlenes Tool für diesen Sektor',
  fr: 'Outil recommandé pour ce secteur',
  es: 'Herramienta recomendada para este sector',
  pt: 'Ferramenta recomendada para este setor',
  nl: 'Aanbevolen tool voor deze sector',
  da: 'Anbefalet værktøj til denne sektor',
  sv: 'Rekommenderat verktyg för denna sektor',
  nb: 'Anbefalt verktøy for denne sektoren',
  ru: 'Рекомендуемый инструмент для этого сектора',
};
```

### Step 2: Add derived variables inside RisorseSettorePage

Inside `RisorseSettorePage`, after the existing line:

```typescript
  const readLabel = READ_LABELS[resolvedLocale] ?? READ_LABELS['en'];
```

Add:

```typescript
  const intro = config.intro[resolvedLocale] ?? config.intro['en'];
  const ctaLabel = config.product.ctaLabel[resolvedLocale] ?? config.product.ctaLabel['en'];
  const productPageLabel = PRODUCT_PAGE_LABELS[resolvedLocale] ?? PRODUCT_PAGE_LABELS['en'];
  const productHref = `/${resolvedLocale}/products/${config.product.slug}/`;
  const pageUrl = `https://geotapp.com/${resolvedLocale}/settori/${settore}/risorse/`;
```

### Step 3: Build JSON-LD objects inside the component

Add immediately after the variable declarations above (still inside the function, before `return`):

```typescript
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: label.heading, item: pageUrl },
    ],
  };

  const itemListJsonLd = posts.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: label.heading,
        url: pageUrl,
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://geotapp.com${post.url}`,
          name: post.title,
        })),
      }
    : null;
```

### Step 4: Replace the entire JSX return block

Replace the entire `return (...)` block with:

```tsx
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {itemListJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      )}

      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          <Link
            href={`/${resolvedLocale}/settori/${settore}/`}
            className="text-sm text-blue-600 hover:underline"
          >
            {backLabel}
          </Link>

          <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-4">
            {label.heading}
          </h1>

          <p className="text-slate-700 leading-relaxed mb-8 max-w-3xl">
            {intro}
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">
                {productPageLabel}
              </p>
              <p className="text-lg font-bold text-slate-900">
                {ctaLabel.discover} {config.product.name}
              </p>
            </div>
            <Link
              href={productHref}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              {ctaLabel.cta}
            </Link>
          </div>

          {posts.length === 0 ? (
            <p className="text-slate-400 text-sm">Nessun articolo disponibile al momento.</p>
          ) : (
            <ul className="space-y-6">
              {posts.map((post) => (
                <li key={post.id} className="border-b border-slate-100 pb-6">
                  <Link href={post.url} className="group">
                    <h2 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-1">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 mb-2">{post.excerpt}</p>
                    <span className="text-xs font-medium text-blue-600">{readLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </>
  );
```

### Step 5: Verify build and spot-check

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npm run build 2>&1 | tail -30
```

Expected: zero TS errors, 33 static paths generated (3 settori × 11 locales).

Optional local check:

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npm run dev
```

Open `http://localhost:3000/it/settori/pulizie/risorse/` and verify:
- H1 "Risorse per imprese di pulizie"
- Long Italian intro paragraph below
- Blue CTA box "Scopri GeoTapp App" → `/it/products/geotapp-app/`
- Articles list below CTA
- Page source has two `<script type="application/ld+json">` blocks

### Step 6: Commit

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site
git add "src/app/[locale]/settori/[settore]/risorse/page.tsx"
git commit -m "feat(seo): pillar risorse — intro + CTA prodotto + JSON-LD"
```

---

## Task 3: WP noindex for tag / author / date / paged archives

**Context:** `blog.geotapp.com` currently serves tag, author, date and paginated archives with no `noindex` directive. Google indexes them as thin duplicate content, wasting crawl budget. The fix is a method on the `Zenith_SEO` class that hooks into `wp_head`.

**Files:**
- Modify: `.worktrees/integration-2026-03-11-fleet-main/geotapp-blog/wp-content/plugins/zenith-seo/zenith-seo.php`
- Deploy via SFTP to production

**Important:** The new `add_action` call must be placed inside `init()` **before** the `can_load_modules()` guard — the noindex logic must work regardless of license status.

### Step 1: Add the noindex_archives method to the Zenith_SEO class

Locate the closing brace of the `Zenith_SEO` class. Insert this method immediately before it:

```php
	/**
	 * Output noindex meta for WP archive types that should never be indexed:
	 * tag archives, author archives, date archives, and paginated views (/page/2/).
	 * These pages have no original content and waste crawl budget.
	 */
	public function noindex_archives(): void {
		if ( is_tag() || is_author() || is_date() || is_paged() ) {
			echo '<meta name="robots" content="noindex, follow">' . "\n";
		}
	}
```

### Step 2: Register the hook inside init(), before can_load_modules()

Find the `init()` method. It currently starts with:

```php
	public function init() {
		Zenith_License::init();

		if ( ! $this->can_load_modules() ) {
```

Change it to:

```php
	public function init() {
		Zenith_License::init();

		// Noindex archives: runs unconditionally (does not require active license).
		add_action( 'wp_head', array( $this, 'noindex_archives' ), 1 );

		if ( ! $this->can_load_modules() ) {
```

### Step 3: Bump plugin version

In the plugin file header update `Version:` from its current value to one patch bump.

Update the `ZENITH_SEO_VERSION` constant to match.

### Step 4: Deploy to production via SFTP

```bash
sftp -P 22 su326249@access-5018990701.webspace-host.com <<'SFTP'
put /mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main/geotapp-blog/wp-content/plugins/zenith-seo/zenith-seo.php blog/wp-content/plugins/zenith-seo/zenith-seo.php
bye
SFTP
```

### Step 5: Verify noindex is live

```bash
curl -s "https://blog.geotapp.com/tag/gestione-presenze/" | grep -i 'noindex'
```

Expected: `<meta name="robots" content="noindex, follow">` in the response.

Verify single posts are unaffected:

```bash
curl -s "https://blog.geotapp.com/" | grep -i 'noindex'
```

Expected: no match.

### Step 6: Commit

```bash
cd /mnt/disco_secondario/GeoTapp-EcoSystem/.worktrees/integration-2026-03-11-fleet-main
git add geotapp-blog/wp-content/plugins/zenith-seo/zenith-seo.php
git commit -m "feat(seo): noindex WP tag/author/date archives"
```

---

## Verification Checklist

After all three tasks:

- [ ] `npm run build` exits 0 from `geotapp-site/`
- [ ] `/it/settori/pulizie/risorse/` renders: H1 → long intro → blue CTA box → articles
- [ ] `/en/settori/installatori/risorse/` CTA box links to `/en/products/geotapp-flow/`
- [ ] `/de/settori/sicurezza/risorse/` CTA box links to `/de/products/geotapp-app/`
- [ ] Page source has two `<script type="application/ld+json">` blocks
- [ ] BreadcrumbList `item` values use absolute `https://geotapp.com/…` URLs
- [ ] `blog.geotapp.com/tag/*` returns `<meta name="robots" content="noindex, follow">` in `<head>`
- [ ] `blog.geotapp.com/author/*` same
- [ ] `blog.geotapp.com/page/2/` same (paged)
- [ ] A single post page does NOT receive the noindex tag
