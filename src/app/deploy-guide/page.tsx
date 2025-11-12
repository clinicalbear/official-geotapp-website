import Link from "next/link";
/* eslint-disable react/no-unescaped-entities */

type GuideSection = {
  title: string;
  subtitle?: string;
  steps: string[];
  snippet?: {
    label: string;
    code: string;
  };
  resources?: { label: string; href: string }[];
};

const sections: GuideSection[] = [
  {
    title: "1. Clona il progetto e prepara l'ambiente locale",
    subtitle: "Tempo stimato: circa 10 minuti",
    steps: [
      "Installa Node.js 18+ (o 20 LTS) e Git, verificando con `node -v` e `git --version`.",
      "Clona il repository: `git clone <repo-url> officialWebSiteGeoTapp && cd officialWebSiteGeoTapp`.",
      "Esegui `npm install` per installare Next 16, React 19 e Tailwind gia configurati.",
      "Duplica `.env.example` in `.env.local` e personalizza almeno ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_SESSION_SECRET, CONTACT_* e (consigliato) CMS_ADMIN_TOKEN.",
      "Crea anche `.env.deploy` con gli stessi valori per copiarli velocemente su Cloudflare Pages e Render.",
      "Avvia `npm run dev` e verifica sia `http://localhost:3000` sia `http://localhost:3000/admin` (login di default: MikeAdmin / @@G4bri312020@@).",
    ],
    snippet: {
      label: "Esempio .env.local",
      code: [
        "ADMIN_USERNAME=MikeAdmin",
        "ADMIN_PASSWORD=@@G4bri312020@@",
        "ADMIN_SESSION_SECRET=change-this-session-secret",
        "CMS_ADMIN_TOKEN=super-secure-token",
        "CONTACT_SMTP_HOST=smtp.server.com",
        "CONTACT_SMTP_PORT=587",
        "CONTACT_SMTP_USER=username",
        "CONTACT_SMTP_PASS=password",
        "CONTACT_FROM_EMAIL=noreply@geotapp.com",
        "CONTACT_TO_EMAIL=info@geotapp.com",
      ].join("\n"),
    },
  },
  {
    title: "2. Popola e verifica i contenuti dal CMS",
    subtitle: "Blocchi con pulsante Salva dedicato",
    steps: [
      "Apri `http://localhost:3000/admin/login`, inserisci le credenziali definite nelle variabili e accedi.",
      "Se hai impostato `CMS_ADMIN_TOKEN`, incollalo nel campo superiore del pannello prima di salvare.",
      "Compila i blocchi della tab Contenuti (branding, SEO, parallax, social proof, pagine Servizi / Prezzi / Chi siamo). Ogni sezione ha il proprio bottone \"Salva contenuti\".",
      "Carica loghi, foto e video (max 1.5 MB) tramite il Media Manager: i file vengono convertiti in base64 direttamente in `siteContent.json`.",
      "Nel tab Integrazioni inserisci URL e chiavi di Django, Stripe, Flutter login e Firebase, poi premi \"Salva integrazioni\" per aggiornare `integrationConfig.json`.",
      "Usa \"Ripristina\" quando vuoi tornare ai placeholder iniziali senza dover modificare manualmente i file.",
      "Versiona sempre `src/content/siteContent.json` e `src/content/integrationConfig.json`: sono i due file che il deploy usera in produzione.",
    ],
  },
  {
    title: "3. Deploy frontend su Cloudflare Pages (o Vercel)",
    subtitle: "Focus: variabili e JSON persistenti",
    steps: [
      "Crea un repository remoto (GitHub, GitLab) e push dell'intero progetto includendo i due JSON creati dal CMS.",
      "Su Cloudflare Pages avvia un nuovo progetto collegando il repo. Build command `npm run build`, directory di output `.next`.",
      "Nella sezione Environment aggiungi tutte le variabili frontend: ADMIN_*, ADMIN_SESSION_SECRET, CMS_ADMIN_TOKEN, CONTACT_*.",
      "Opzionale: definisci `CONTENT_FILE_PATH` e `INTEGRATION_FILE_PATH` (es. `/tmp/siteContent.json`) per salvare i JSON fuori dal bundle. In alternativa, continua a versionarli e ridistribuisci.",
      "Abilita i Deploy Preview per testare i contenuti prima di pubblicare su `main`.",
      "Al termine del primo deploy controlla `https://<project>.pages.dev/admin`: dopo il login dovresti trovare gli stessi contenuti salvati in locale.",
    ],
    resources: [
      { label: "Cloudflare Pages docs", href: "https://developers.cloudflare.com/pages/" },
      { label: "Vercel deployment guide", href: "https://vercel.com/docs/deployments" },
    ],
  },
  {
    title: "4. Backend Django e database su Render",
    subtitle: "Web service + worker per sync e webhook",
    steps: [
      "Apri `goetap_backend`, inizializza un repository e pubblicalo su GitHub (o collega il repo esistente da Render).",
      "Crea un nuovo Web Service su Render, scegli Python 3.11 e imposta come start command `gunicorn config.wsgi:application`.",
      "Aggiungi un database Postgres gestito da Render, copia la stringa di connessione in `DATABASE_URL` ed esegui `python manage.py migrate` dalla shell.",
      "Configura tutte le variabili: DJANGO_SECRET_KEY, ADMIN_TOKEN, CMS_ADMIN_TOKEN, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, FIREBASE_*, GOOGLE_APPLICATION_CREDENTIALS (se usi service account).",
      "Crea eventuali Worker o Cron Job (per esempio per sincronizzare Firebase o chiudere abbonamenti scaduti).",
      "Recupera l'URL pubblico (es. `https://geotapp-backend.onrender.com`) e incollalo nel tab Django del CMS insieme alla webhook `/api/django/webhooks`.",
    ],
    snippet: {
      label: "Variabili consigliate su Render",
      code: [
        "DJANGO_SECRET_KEY=************",
        "ADMIN_TOKEN=service-token-usato-dal-cms",
        "CMS_ADMIN_TOKEN=super-secure-token",
        "DATABASE_URL=postgres://...",
        "STRIPE_SECRET_KEY=sk_live_***",
        "STRIPE_WEBHOOK_SECRET=whsec_***",
        "FIREBASE_PROJECT_ID=geotapp-prod",
        "FIREBASE_API_KEY=AIza...",
      ].join("\n"),
    },
    resources: [
      { label: "Render Web Service", href: "https://render.com/docs/web-services" },
      { label: "Gunicorn + Django", href: "https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/" },
    ],
  },
  {
    title: "5. Stripe, login Flutter e Firebase",
    subtitle: "Integrazioni con test guidato",
    steps: [
      "Stripe: crea prodotti e Price ID (uno per riga nel CMS). Imposta il webhook verso `https://app.geotapp.com/api/stripe/webhook` e copia il secret nella tab Integrazioni.",
      "Stripe test: usa `stripe login` e `stripe trigger checkout.session.completed` per verificare che il backend riceva eventi 200.",
      "Flutter login: sincronizza `clientId`, `redirectUri` e `deepLinkScheme` tra il CMS e il progetto `goetap_flutter` (aggiorna gli stessi valori nei file di configurazione Firebase/Auth).",
      "Firebase: copia `projectId`, `apiKey`, `databaseUrl` e l'elenco delle collection da sincronizzare (es. meetings, payments, roles). Controlla che le rules permettano l'accesso al servizio Django.",
      "Dal CMS clicca su \"Test integrazioni\" per chiamare `/api/integrations/test` e ottenere subito un OK / Warning sulle configurazioni inserite.",
    ],
    resources: [
      { label: "Stripe webhooks", href: "https://stripe.com/docs/webhooks" },
      { label: "Firebase security rules", href: "https://firebase.google.com/docs/rules" },
    ],
  },
  {
    title: "6. Check finale, migrazione e pubblicazione",
    subtitle: "Ultimi test prima del go-live",
    steps: [
      "Front-end: esegui `npm run lint` e `npm run build`. Back-end: lancia i test Django o almeno `python manage.py check`.",
      "Esegui il push su `main`: Cloudflare pubblica il front-end, Render ridistribuisce il back-end. Monitora i log delle due piattaforme per 5-10 minuti.",
      "Apri `/admin` in produzione e controlla Hero, Parallax, Social Proof, Servizi, Prezzi e Chi siamo.",
      "Invia un form di contatto verso `info@geotapp.com` e crea un checkout Stripe in modalita test per verificare webhook e SMTP.",
      "Annota gli step di rollback (tag Git o backup JSON) cosi puoi ripristinare tutto in pochi secondi se qualcosa non va.",
    ],
  },
];

const quickStart = [
  "Clona il progetto, lancia `npm install` e compila `.env.local`.",
  "Avvia `npm run dev`, entra nel CMS e compila i blocchi critici (branding, parallax, pagine dedicate).",
  "Salva le integrazioni (Django, Stripe, Flutter, Firebase) e usa il test rapido.",
  "Push su GitHub e configura Cloudflare Pages + Render con le stesse variabili.",
  "Esegui smoke test: landing, CTA, form contatti e un evento Stripe in modalita test.",
];

export default function DeployGuidePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-6 py-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
              GeoTapp Deploy
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Guida passo passo</h1>
            <p className="mt-2 text-sm text-slate-400">
              Segui questi blocchi per pubblicare front-end, back-end e integrazioni senza sorprese.
            </p>
          </div>
          <Link
            href="/admin"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/50"
          >
            Torna al CMS
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-6 px-6 py-10">
        {sections.map((section) => (
          <section
            key={section.title}
            className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
                Backend quick start
              </p>
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              {section.subtitle && (
                <p className="mt-1 text-sm text-slate-400">{section.subtitle}</p>
              )}
            </div>
            <ol className="list-decimal space-y-3 pl-5 text-sm text-slate-200">
              {section.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            {section.snippet && (
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-xs text-slate-200">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  {section.snippet.label}
                </p>
                <pre className="mt-2 overflow-x-auto whitespace-pre-wrap">{section.snippet.code}</pre>
              </div>
            )}
            {section.resources && (
              <div className="text-xs text-slate-300">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Link utili</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {section.resources.map((resource) => (
                    <li key={resource.href}>
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-300 underline-offset-2 hover:underline"
                      >
                        {resource.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 p-6 text-slate-100">
          <h2 className="text-xl font-semibold">Percorso super rapido (5 step)</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-100">
            {quickStart.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-200">
            Suggerimento: stampa questa lista e spuntala mentre configuri gli ambienti cosi non salti nessun passaggio.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100">
          <h2 className="text-xl font-semibold text-white">Promemoria variabili chiave</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-300">Frontend</p>
              <ul className="mt-2 text-sm">
                <li>ADMIN_USERNAME / ADMIN_PASSWORD</li>
                <li>ADMIN_SESSION_SECRET</li>
                <li>CMS_ADMIN_TOKEN (opzionale ma consigliato)</li>
                <li>CONTACT_SMTP_* per il form</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-300">Backend Django</p>
              <ul className="mt-2 text-sm">
                <li>DJANGO_SECRET_KEY / ADMIN_TOKEN</li>
                <li>CMS_ADMIN_TOKEN (stesso valore del frontend)</li>
                <li>DATABASE_URL / REDIS_URL</li>
                <li>STRIPE_* e FIREBASE_* definitivi</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-300">Storage contenuti</p>
              <ul className="mt-2 text-sm">
                <li>CONTENT_FILE_PATH (es. /tmp/siteContent.json)</li>
                <li>INTEGRATION_FILE_PATH</li>
                <li>Backup manuale dei due JSON nel repo</li>
                <li>Token CMS identico in tutti gli ambienti</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-200">
            Mantieni un file `.env.deploy` con tutti i valori pronti da incollare nei provider: riduce il rischio di errori di battitura.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
          <h2 className="text-xl font-semibold text-white">Checklist pre go-live</h2>
          <ul className="mt-4 space-y-2">
            <li>[ ] Repository aggiornato con `siteContent.json` e `integrationConfig.json` definitivi.</li>
            <li>[ ] Cloudflare Pages (o Vercel) con build riuscita e preview verificata.</li>
            <li>[ ] Render (backend) con health verde e job schedulati attivi.</li>
            <li>[ ] Stripe webhook in stato Enabled e ultima chiamata 2xx.</li>
            <li>[ ] Regole Firebase aggiornate per permettere l'accesso al servizio Django.</li>
            <li>[ ] Form contatti testato con email ricevuta su `info@geotapp.com`.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
