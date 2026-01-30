# 🌐 Deploy geotapp-site su Cloudflare Pages

## ✅ Deploy Completato: geotapp-saas (VPS)

Tutte le variabili d'ambiente sono state aggiornate e deployate con successo su:
- **URL**: https://crm.geotapp.com
- **Server**: VPS 82.165.15.122
- **Status**: 🟢 Online con nuovi price_id

### Variabili Verificate sul VPS:
```bash
✅ STRIPE_PRICE_FLOW_START_MONTHLY=price_1StVkdCgA44aD4AuyTLDeZwE
✅ STRIPE_PRICE_FLOW_START_ANNUAL=price_1StVlrCgA44aD4AunKfs9lb7
✅ STRIPE_PRICE_FLOW_PRO_MONTHLY=price_1StVvsCgA44aD4Au3c8ZJpyg
✅ STRIPE_PRICE_FLOW_PRO_ANNUAL=price_1StW2pCgA44aD4AudAJ2ZLlD
✅ STRIPE_PRICE_FLOW_ELITE_MONTHLY=price_1StW4NCgA44aD4AuoaCg40qZ
✅ STRIPE_PRICE_FLOW_ELITE_ANNUAL=price_1StW5GCgA44aD4AuftXBOMSb
✅ STRIPE_PRICE_FLOW_FOUNDER_ONETIME=price_1StW6YCgA44aD4Au09sY1UH2
✅ STRIPE_PRICE_FLOW_EXTRA_USER_MONTHLY=price_1StW6yCgA44aD4AuvAjSWGt1
✅ STRIPE_PRICE_TIMETRACKER_EXTRA_USER_MONTHLY=price_1StW7LCgA44aD4Au9VAr3k1l
✅ COMMUNICATION_SECRET=7R5CpPjJ+vOouieHjbIrGR0vvwYrERj/fcUjwSAqyNQ=
✅ FIREBASE_FUNCTION_URL=https://us-central1-geotap-v2.cloudfunctions.net/syncSubscriptionToFirestore
```

---

## 📋 TODO: Deploy su Cloudflare Pages

### Opzione 1: Via Dashboard Cloudflare (Consigliato)

1. **Accedi a Cloudflare**
   - Vai su https://dash.cloudflare.com/
   - Login con le tue credenziali

2. **Seleziona il progetto**
   - Workers & Pages → Pages
   - Trova il progetto **geotapp-site** (o come si chiama)

3. **Aggiorna Environment Variables**
   - Settings → Environment Variables
   - Seleziona **Production** environment

4. **Aggiungi/Aggiorna queste variabili:**

```bash
# Stripe Price IDs - Flow Plans (Nuovi Prezzi 2026)

# START - 18,90€/mese o 189€/anno
NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_MONTHLY=price_1StVkdCgA44aD4AuyTLDeZwE
NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_ANNUAL=price_1StVlrCgA44aD4AunKfs9lb7

# PRO - 37,90€/mese o 379€/anno
NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_MONTHLY=price_1StVvsCgA44aD4Au3c8ZJpyg
NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_ANNUAL=price_1StW2pCgA44aD4AudAJ2ZLlD

# ELITE - 69,90€/mese o 699€/anno
NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_MONTHLY=price_1StW4NCgA44aD4AuoaCg40qZ
NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_ANNUAL=price_1StW5GCgA44aD4AuftXBOMSb

# FOUNDER - 1.299€ one-time (lifetime)
NEXT_PUBLIC_STRIPE_PRICE_FLOW_FOUNDER_ONETIME=price_1StW6YCgA44aD4Au09sY1UH2

# Extra Users
NEXT_PUBLIC_STRIPE_PRICE_FLOW_EXTRA_USER_MONTHLY=price_1StW6yCgA44aD4AuvAjSWGt1
NEXT_PUBLIC_STRIPE_PRICE_TIMETRACKER_EXTRA_USER_MONTHLY=price_1StW7LCgA44aD4Au9VAr3k1l
```

5. **Salva le modifiche**
   - Click su "Save"

6. **Redeploy il progetto**
   - Deployments → View build
   - Retry deployment (o aspetta il prossimo commit su git)
   - **OPPURE**: Vai su "Deployments" → click sul deployment più recente → "Redeploy"

---

### Opzione 2: Via Wrangler CLI (Avanzato)

Se hai configurato Wrangler (CLI di Cloudflare):

```bash
# Installa Wrangler se non ce l'hai
npm install -g wrangler

# Login
wrangler login

# Imposta le env vars
wrangler pages secret put NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_MONTHLY
# Inserisci: price_1StVkdCgA44aD4AuyTLDeZwE

wrangler pages secret put NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_ANNUAL
# Inserisci: price_1StVlrCgA44aD4AunKfs9lb7

# ... ripeti per tutte le variabili sopra

# Redeploy
wrangler pages deploy
```

---

### Opzione 3: Via Git Push (Automatico)

Se il progetto è connesso a un repo Git (GitHub/GitLab):

1. **Commit locale** (già fatto):
   ```bash
   cd "d:\xampp\htdocs\GeoTapp EcoSystem\geotapp-site"
   git add .env.local.example
   git commit -m "Update Stripe price IDs (2026)"
   ```

2. **Aggiorna env vars su Cloudflare** (come Opzione 1)

3. **Push su repository**:
   ```bash
   git push origin main
   ```

4. **Cloudflare automaticamente**:
   - Rileva il nuovo commit
   - Avvia un nuovo build
   - Deploya con le nuove env vars

---

## 🧪 Verifica Post-Deploy

Dopo il deploy, verifica che tutto funzioni:

1. **Apri il sito**: https://geotapp.com

2. **Vai alla pagina prezzi** (se presente)

3. **Apri DevTools** (F12) → Console

4. **Verifica le variabili d'ambiente**:
   ```javascript
   console.log(process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_MONTHLY)
   // Dovrebbe mostrare: price_1StVkdCgA44aD4AuyTLDeZwE
   ```

5. **Test checkout Stripe** (opzionale):
   - Prova a creare un checkout con uno dei nuovi piani
   - Verifica che Stripe utilizzi i nuovi price_id

---

## 📊 Riepilogo Price_ID

| Piano | Mensile | Annuale | One-time |
|-------|---------|---------|----------|
| **START** | 18,90€ (`price_1StVkdCgA44aD4AuyTLDeZwE`) | 189€ (`price_1StVlrCgA44aD4AunKfs9lb7`) | - |
| **PRO** | 37,90€ (`price_1StVvsCgA44aD4Au3c8ZJpyg`) | 379€ (`price_1StW2pCgA44aD4AudAJ2ZLlD`) | - |
| **ELITE** | 69,90€ (`price_1StW4NCgA44aD4AuoaCg40qZ`) | 699€ (`price_1StW5GCgA44aD4AuftXBOMSb`) | - |
| **FOUNDER** | - | - | 1.299€ (`price_1StW6YCgA44aD4Au09sY1UH2`) |
| **Flow Extra User** | 6,00€ (`price_1StW6yCgA44aD4AuvAjSWGt1`) | - | - |
| **TT Extra User** | 1,50€ (`price_1StW7LCgA44aD4Au9VAr3k1l`) | - | - |

---

## ✅ Checklist Completa

### geotapp-saas (VPS)
- [x] Price_id aggiornati in `env.production`
- [x] File caricato sul VPS
- [x] Container riavviati completamente (`docker compose down && up -d`)
- [x] Variabili verificate nel container
- [x] App online e funzionante su https://crm.geotapp.com

### geotapp-site (Cloudflare)
- [x] Price_id aggiornati in `.env.local` (locale)
- [x] Price_id documentati in `.env.local.example`
- [x] **DONE**: Env vars aggiornate su Cloudflare Pages via Wrangler CLI
- [x] **DONE**: Commit env vars e deploy scripts (cf21ce3)
- [x] **DONE**: Aggiornato pricing/page.tsx con nuovi prezzi (a5a177f)
- [x] **DONE**: Aggiornato products/geotapp-flow/page.tsx (a5a177f)
- [x] **DONE**: Push su GitHub - deployment automatico in corso
- [ ] **TODO**: Verifica che il sito usi i nuovi price_id dopo deploy (~5-10 min)

### geotapp-flow (Firebase)
- [x] Cloud Function `syncSubscriptionToFirestore` deployata
- [x] `COMMUNICATION_SECRET` configurato
- [x] Pronto per ricevere webhook da geotapp-saas

---

## 🎯 Prossimi Passi

1. **Aggiorna env vars su Cloudflare** (Opzione 1 consigliata)
2. **Redeploy geotapp-site**
3. **Test end-to-end**:
   - Checkout Stripe → Webhook → Firebase sync → Firestore update
4. **Monitor logs** per verificare che tutto funzioni

---

**Ultima modifica**: 25 Gennaio 2026 - 21:15
**Deploy geotapp-saas completato**: ✅
**Deploy geotapp-site**: 🔄 In Progress (Cloudflare auto-deploy triggerato)
**Project Name Cloudflare**: official-geotapp-website
**Commit Hash**:
  - cf21ce3 (env vars + deployment scripts)
  - a5a177f (pricing updates + new price IDs in code)
