# Setup Strapi CMS Backend

## 1️⃣ Installazione

```bash
cd official-v2/strapi-backend
npm install --legacy-peer-deps
```

## 2️⃣ Avviare Strapi

```bash
npm run develop
```

L'admin sarà disponibile su: **http://localhost:1337/admin**

## 3️⃣ Primo Accesso - Crea Admin User

Strapi chiederà di creare un primo utente admin:
- **Email**: admin@geotapp.com
- **Password**: (crea una password forte e memorizzala!)
- **Nome**: Admin GeoTapp

## 4️⃣ Creare Content Types

Nel Strapi Admin, crea i seguenti content types:

### Page
- **title** (String, required)
- **slug** (String, unique, required)
- **description** (String)
- **content** (Rich Text)
- **heroImage** (Media)
- **seoTitle** (String)
- **seoDescription** (String)

### BlogPost
- **title** (String, required)
- **slug** (String, unique, required)
- **excerpt** (Text)
- **content** (Rich Text)
- **author** (String)
- **publishedAt** (Date)
- **category** (String)
- **featuredImage** (Media)

### Settings
- **siteName** (String)
- **siteDescription** (String)
- **googleAnalyticsId** (String)
- **googleAdsId** (String)
- **stripePublicKey** (String)
- **contactEmail** (String)
- **logo** (Media)
- **favicon** (Media)

## 5️⃣ API Endpoints

Una volta creati i content types, saranno disponibili:

```
GET  /api/pages
GET  /api/pages/:id
POST /api/pages (richiede autenticazione)
PUT  /api/pages/:id (richiede autenticazione)

GET  /api/blog-posts
GET  /api/blog-posts/:id
POST /api/blog-posts (richiede autenticazione)

GET  /api/settings
```

## 6️⃣ Configurare Permessi Pubblici

Nel Strapi Admin:
1. Vai a **Settings → Roles & Permissions**
2. Seleziona **Public** role
3. Abilita:
   - Pages → find, findOne
   - Blog Posts → find, findOne
   - Settings → find, findOne

## 7️⃣ Aggiungere Dati di Esempio

Nel Strapi Admin, crea:
- 3-4 Pages (Home, Features, Chi Siamo, etc)
- 3-5 Blog Posts
- 1 Settings entry con dati sito

## 8️⃣ Integrare con Frontend

Il frontend è già configurato per connettersi a Strapi. Modifica `.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Il frontend farà fetch automatico dei dati da Strapi.

## 📝 Note Importanti

- **Database**: Per sviluppo usa SQLite (default). Per produzione, configura PostgreSQL in `config/database.js`
- **Plugin**: Strapi ha plugin built-in per upload, i18n, users-permissions
- **Sviluppo**: Strapi auto-reload quando modifichi i file
- **Documentazione**: https://docs.strapi.io/dev-docs

## 🔗 Utili Link

- Strapi Admin: http://localhost:1337/admin
- Strapi API Docs: http://localhost:1337/documentation/v1.0.0
- Frontend: http://localhost:3000
