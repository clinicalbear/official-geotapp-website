## GeoTapp Official Website

Sito Next.js/React 19 progettato per promuovere la piattaforma SaaS GeoTapp. Presenta i moduli reali dell'app `goetap_flutter`, integra un backend per contenuti e mette in evidenza le connessioni con Django, Stripe e Firebase.

### Stack
- Next.js 16 (App Router, TypeScript, React 19)
- Tailwind v4 (via `@import "tailwindcss"`)
- CMS file-based esposto da `/api/content` + `/api/integrations`
- Middleware + cookie di sessione per proteggere `/admin` e le API
- Nodemailer per il form contatti (`/api/contact`)
- Upload immagini/video convertiti in base64 dal pannello admin

### Quick start
```bash
npm install
npm run dev
```
L'app locale e servita su `http://localhost:3000`.

### Variabili ambiente (`.env.local`)
```
ADMIN_USERNAME=MikeAdmin
ADMIN_PASSWORD=@@G4bri312020@@
ADMIN_SESSION_SECRET=change-this-session-secret
CMS_ADMIN_TOKEN=super-secure-token
CONTACT_SMTP_HOST=smtp.server.com
CONTACT_SMTP_PORT=587
CONTACT_SMTP_USER=username
CONTACT_SMTP_PASS=password
CONTACT_FROM_EMAIL=noreply@geotapp.com
CONTACT_TO_EMAIL=info@geotapp.com
```

### Area admin e sicurezza
- Login su `/admin/login` (credenziali configurabili via `ADMIN_*`). In fase di salvataggio serve anche il token `CMS_ADMIN_TOKEN`.
- Il middleware (`middleware.ts`) impone la presenza del cookie `admin_session` su:
  - `/admin` (dashboard con tab Contenuti / Integrazioni)
  - `/api/content`
  - `/api/integrations`
- Il pulsante **Logout** elimina il cookie tramite `/api/auth/logout`.

### Configuratore Django + Stripe + Flutter + Firebase
- I valori partono da `src/content/integrationConfig.json` e vengono validati con Zod (`integrationConfigSchema`).
- Tab **Integrazioni** in `/admin` permette di:
  - Definire base URL, token e webhook Django.
  - Inserire chiavi e Price ID Stripe, con pulsante di verifica rapida.
  - Configurare login Flutter (client, redirect, deep link, scopes) condiviso con l'app mobile.
  - Allineare database Firebase (project id, api key, realtime database, collezioni da sincronizzare) e generare un promemoria per il sync.
- Gli aggiornamenti passano da `PUT /api/integrations` e vengono salvati su file (override con `INTEGRATION_FILE_PATH` se necessario).

### Branding, SEO, Analytics e Media
- Il tab **Contenuti** ora include pannelli guidati:
  - **Branding**: upload del logo (anche base64), link di destinazione e colore accento iniettato come CSS custom property.
  - **SEO**: title, description, keywords, canonical e immagine OG aggiornano automaticamente i metadata (`generateMetadata`).
  - **Analytics / Head**: textarea per incollare il tag GA4 o altri script; viene iniettato tramite `next/script` nell’`<head>`.
  - **Media manager**: per ogni sezione (Hero, Feature, Parallax, Timeline, Pricing, Contact) puoi caricare immagini/video o incollare URL esterni; le componenti `SectionMedia` li rendono automaticamente.
- Rimane disponibile l’editor JSON completo per modifiche avanzate o per esportare/importare i contenuti.

### Gestione contenuti marketing
- Copy e layout sono in `src/content/siteContent.json`.
- Stessi endpoint di prima (`GET/PUT /api/content`), ora dietro autenticazione + token CMS.
- L'editor JSON su `/admin` mantiene le guideline (max tre colonne, icone ammesse, CTA complete).

### Contact form
`ContactForm` invia i dati a `/api/contact`, il backend valida con Zod e inoltra le richieste a `info@geotapp.com` via SMTP (Nodemailer). Configura le variabili `CONTACT_*` prima del deploy.

### Struttura delle sezioni pubbliche
| Sezione | Descrizione |
| --- | --- |
| Hero + Metrics | Storytelling, CTA doppia e statistiche operative |
| Feature Grid | Tre colonne allineate alle funzioni dell'app Flutter |
| Parallax Sticky | Zona con background fixed e colonna sticky per il valore core |
| Timeline | Tre fasi per integrare Flutter, Django e Stripe |
| Pricing | Tre tier placeholder pronti per gli ID Stripe reali |
| Contact | Copy + form verso info@geotapp.com |

### Deploy guidato (GitHub → Cloudflare Pages + Render)
1. **GitHub** – inizializza il repository e spingilo (branch `main`).
2. **Cloudflare Pages** – collega il repo, imposta build `npm run build`, output `.next`.
   - Inserisci le env `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, `CMS_ADMIN_TOKEN`, `CONTACT_*`.
3. **Render** – crea un Web Service per il backend Django/DB (utilizzerà lo stesso repository backend) e definisci `DJANGO_SECRET_KEY`, `ADMIN_TOKEN`, `CMS_ADMIN_TOKEN`, `DATABASE_URL`.
4. **Database** – puoi usare Render PostgreSQL/Redis o un DSN esterno; il valore viene richiamato dal configuratore Django.
5. Ogni push su `main` aggiorna automaticamente Cloudflare (frontend) e Render (backend); dal pannello admin puoi poi incollare chiavi, webhook e script senza toccare il codice.

### Comandi utili
```bash
npm run dev        # sviluppo
npm run lint       # ESLint
npm run build      # build produzione
npm run start      # serve build
```

### Prossimi passi suggeriti
1. Collegare prezzi reali da Django/Stripe e popolare `priceIds`.
2. Automatizzare il sync Firebase (Cloud Functions o scheduler) usando le collezioni impostate nel configuratore.
3. Abilitare analytics/conversion tracking (Vercel Analytics, Plausible, ecc.) e integrare sistemi di alert per i webhook.
