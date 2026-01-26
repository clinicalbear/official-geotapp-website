# 🔧 Fix Cloudflare Pages Environment Variables

## ⚠️ Problema Identificato

Le variabili `NEXT_PUBLIC_STRIPE_PRICE_*` sono state configurate come **Secrets** (runtime-only), ma Next.js richiede che siano **Environment Variables** (build-time) per includerle nel bundle JavaScript.

**Secrets** = Disponibili solo a runtime per Cloudflare Functions
**Environment Variables** = Disponibili durante il build per Next.js

---

## ✅ Soluzione: Configurare via Dashboard

### Step 1: Accedi alla Dashboard

Ho già aperto la pagina, oppure vai manualmente su:
```
https://dash.cloudflare.com/34a3e90dabdb6c10eb33f37259fafca4/pages/view/official-geotapp-website/settings/environment-variables
```

### Step 2: Aggiungi Environment Variables (Production)

Clicca su **"Add variable"** per ogni variabile seguente e seleziona **Production** environment:

#### Flow START Plan
```
Variable name: NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_MONTHLY
Value: price_1StVkdCgA44aD4AuyTLDeZwE
Environment: Production ✓
```

```
Variable name: NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_ANNUAL
Value: price_1StVlrCgA44aD4AunKfs9lb7
Environment: Production ✓
```

#### Flow PRO Plan
```
Variable name: NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_MONTHLY
Value: price_1StVvsCgA44aD4Au3c8ZJpyg
Environment: Production ✓
```

```
Variable name: NEXT_PUBLIC_STRIPE_PRICE_FLOW_PRO_ANNUAL
Value: price_1StW2pCgA44aD4AudAJ2ZLlD
Environment: Production ✓
```

#### Flow ELITE Plan
```
Variable name: NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_MONTHLY
Value: price_1StW4NCgA44aD4AuoaCg40qZ
Environment: Production ✓
```

```
Variable name: NEXT_PUBLIC_STRIPE_PRICE_FLOW_ELITE_ANNUAL
Value: price_1StW5GCgA44aD4AuftXBOMSb
Environment: Production ✓
```

#### Flow FOUNDER Plan
```
Variable name: NEXT_PUBLIC_STRIPE_PRICE_FLOW_FOUNDER_ONETIME
Value: price_1StW6YCgA44aD4Au09sY1UH2
Environment: Production ✓
```

#### Extra Users
```
Variable name: NEXT_PUBLIC_STRIPE_PRICE_FLOW_EXTRA_USER_MONTHLY
Value: price_1StW6yCgA44aD4AuvAjSWGt1
Environment: Production ✓
```

```
Variable name: NEXT_PUBLIC_STRIPE_PRICE_TIMETRACKER_EXTRA_USER_MONTHLY
Value: price_1StW7LCgA44aD4Au9VAr3k1l
Environment: Production ✓
```

### Step 3: Salva e Redeploy

1. Clicca su **"Save"** dopo aver aggiunto tutte le variabili
2. Vai su **Deployments** tab
3. Trova il deployment `a5a177f` (quello attivo)
4. Clicca su **"Retry deployment"** o **"Redeploy"**

**OPPURE** triggera un nuovo deploy:

```bash
cd "d:\xampp\htdocs\GeoTapp EcoSystem\geotapp-site"
git commit --allow-empty -m "Trigger redeploy after env vars fix"
git push official main
```

---

## 📋 Checklist

- [ ] Apri Dashboard Cloudflare
- [ ] Naviga su: Workers & Pages → official-geotapp-website → Settings → Environment variables
- [ ] Aggiungi tutte le 9 variabili NEXT_PUBLIC_STRIPE_PRICE_* (Production)
- [ ] Salva le modifiche
- [ ] Triggera un redeploy (Retry deployment o git push)
- [ ] Aspetta 5-10 minuti per il build
- [ ] Verifica su https://geotapp.com/pricing che i prezzi siano aggiornati:
  - START: 189€/anno
  - PRO: 379€/anno
  - ELITE: 699€/anno
  - FOUNDER: 1.299€ one-time

---

## 🔍 Come Verificare Post-Deploy

Apri DevTools (F12) → Console sulla pagina https://geotapp.com/pricing e verifica:

```javascript
// Verifica che le variabili siano presenti nel bundle
console.log(process.env.NEXT_PUBLIC_STRIPE_PRICE_FLOW_START_MONTHLY)
// Dovrebbe restituire: "price_1StVkdCgA44aD4AuyTLDeZwE"
// Se restituisce undefined, le variabili non sono state incluse nel build
```

---

## ⚡ Differenza Secrets vs Environment Variables

| Feature | Secrets | Environment Variables |
|---------|---------|----------------------|
| **Disponibili durante build** | ❌ No | ✅ Sì |
| **Disponibili a runtime** | ✅ Sì | ✅ Sì |
| **Visibili nel codice client** | ❌ No | ✅ Sì (se NEXT_PUBLIC_*) |
| **Uso tipico** | API keys server-side | Config build-time, variabili pubbliche |
| **Configurazione** | wrangler pages secret | Dashboard o wrangler.toml |

Per Next.js, le variabili `NEXT_PUBLIC_*` **devono** essere Environment Variables perché vengono sostituite durante il build.

---

**Data**: 25 Gennaio 2026
**Issue**: Prezzi non aggiornati su geotapp.com
**Root Cause**: Variabili configurate come Secrets invece di Environment Variables
**Fix**: Riconfigurare come Environment Variables tramite Dashboard
