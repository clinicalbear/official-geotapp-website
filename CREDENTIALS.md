# =========================================
# GeoTapp Official V2 - Credenziali CMS
# =========================================

## 📱 Frontend (Next.js)
URL: http://localhost:3000
Dev Server: npm run dev

## 🗄️ Backend Strapi CMS
URL: http://localhost:1337/admin
Start: cd strapi-backend && npm run develop

## 🔑 Credenziali Strapi (Da Creare al Primo Accesso)
- Email Admin: admin@geotapp.com
- Password: (creerai al primo accesso)
- Backup questa credenziale in luogo sicuro

## 🔐 Admin Dashboard (Frontend)
URL: http://localhost:3000/admin/login
Username: admin
Password: geotapp123

## 💳 Stripe Test Keys
Publishable: pk_test_51234567890abcdef
Secret: sk_test_1234567890abcdef
(Sostituisci con le tue chiavi da dashboard.stripe.com)

## 🔥 Firebase Credentials
(Copia da Firebase Console → Project Settings)
API Key: YOUR_FIREBASE_API_KEY
Auth Domain: your-project.firebaseapp.com
Project ID: your-project-id
Storage Bucket: your-project.appspot.com
Messaging Sender ID: 123456789
App ID: 1:123456789:web:abcdef123456

## 📧 Email (Gmail SMTP)
Email User: your-email@gmail.com
App Password: (genera da myaccount.google.com/apppasswords)

## 🌐 Cloudflare Workers
Account ID: (da Cloudflare Dashboard)
Zone ID: (per dominio custom)
API Token: (da Cloudflare → API Tokens)

## 📝 Notes
- Strapi CMS: Crea content types per Page, Blog, Settings
- Firebase: Setup realtime DB per utenti e licenze
- Stripe Webhooks: Configura in dashboard per payment events
- Email: Attiva "Less secure apps" o usa App Password
