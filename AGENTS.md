# geotapp-site

- Next.js + Tailwind + Strapi CMS (`strapi-backend/`). Frontend e backend vanno installati separatamente; configura `.env.local`/`.env.local.example`, lancia Strapi (`npm run develop`) e poi Next.js (`npm run dev`). Guardare i log `wrangler-dev.*.log` in caso di deploy Cloudflare Workers e tenere conto di Firebase + Stripe + Nodemailer (2FA).
- Ogni modifica significativa richiede di aggiornare la versione dell’app/Strapi (package, `.env` versioni) e di classificare il rilascio come `major`/`minor`/`patch` in funzione di compatibilità frontend/backend e dell’impatto sui webhook o sulla 2FA.
