# GeoTapp Official Website V2

Sito ufficiale di GeoTapp costruito con Next.js, Tailwind CSS e Strapi CMS.

## Struttura

```
official-v2/
├── src/                    # Frontend Next.js
│   ├── app/               # Pages e layout
│   ├── components/        # Componenti riutilizzabili
│   ├── lib/              # Utilities, API, store
│   └── public/           # Asset statici
├── strapi-backend/       # CMS Strapi
└── README.md
```

## Setup Locale

### Frontend

1. **Installare dipendenze:**
```bash
cd official-v2
npm install
```

2. **Configurare variabili di ambiente:**
```bash
cp .env.local.example .env.local
# Editare .env.local con le tue credenziali
```

3. **Avviare il dev server:**
```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

### Backend (Strapi CMS)

1. **Installare dipendenze:**
```bash
cd strapi-backend
npm install
```

2. **Configurare database:**
Strapi usa SQLite di default. Se vuoi usare PostgreSQL:
```bash
npm install pg
```

3. **Avviare Strapi:**
```bash
npm run develop
```

Strapi admin: `http://localhost:1337/admin`

## Integrazioni

### Firebase
- **Database Realtime**: Per dati utenti e licenze
- **Authentication**: Magic links per signup
- **Storage**: Per file e documenti

### Stripe
- **Checkout**: Per pagamenti abbonamenti
- **Webhooks**: Per gestire eventi pagamenti

### Email (Nodemailer)
- **Gmail SMTP**: Invio email di contatto

### Admin 2FA
- **Google Authenticator**: Protezione accesso admin
- **Speakeasy**: Generazione QR code e verifica codici

## Pagine Principali

- **Home** (`/`): Hero + features + CTA
- **Pricing** (`/pricing`): Piani abbonamenti
- **Features** (`/features`): Dettagli features
- **Chi Siamo** (`/chi-siamo`): Storia e team
- **Contact** (`/contact`): Form contatti
- **Admin** (`/admin`): Dashboard amministrazione

## Deploy su Cloudflare Workers

1. **Build:**
```bash
npm run build
```

2. **Deploy (richiede autenticazione Cloudflare):**
```bash
npm run deploy
```

## Colori GeoTapp

- **Primary**: `#8FC436` (Verde)
- **Dark**: `#0f0f0f` - `#1a1a1a`
- **Light**: `#f0f0f0`

## Prossimi Passi

- [ ] Connettere Strapi con content API
- [ ] Implementare magic links per signup post-checkout
- [ ] Aggiungere blog con articoli dinamici
- [ ] Integrare Stripe webhooks
- [ ] Setup Firebase Realtime DB
- [ ] Deploy in produzione

## Support

Per problemi o domande: info@geotapp.com
# Dynamic promo counters

