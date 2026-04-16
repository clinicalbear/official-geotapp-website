# Trial Page & CTA Update — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Trasformare la landing page di geotapp-site per promuovere il trial self-service: nuova pagina `/trial`, redirect 301 da `/demo`, aggiornamento testi CTA in navbar/homepage, aggiornamento link navbar da `/contact` a `/trial`.

**Architecture:** Nuova pagina `src/app/trial/page.tsx` con form che chiama `NEXT_PUBLIC_SAAS_URL/api/trial/start`. Redirect 301 gestiti in `next.config.mjs`. CTA aggiornati nei dizionari (it/en/de) e nei componenti Navbar e page.tsx homepage.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, framer-motion, lucide-react, dizionari i18n locali

---

### Task 1: Aggiungere sezione `trial` nei dizionari it/en/de + aggiornare testi CTA

**Files:**
- Modify: `src/dictionaries/it.json`
- Modify: `src/dictionaries/en.json`
- Modify: `src/dictionaries/de.json`

**Step 1: Aggiorna `it.json`**

Trova e sostituisci nel blocco `"navbar"`:
```json
"cta": "Richiedi Demo",
```
→
```json
"cta": "Inizia trial gratuito",
```

Trova e sostituisci nel blocco `"landing"`:
```json
"hero_cta_primary": "Prenota Demo 30 Minuti",
```
→
```json
"hero_cta_primary": "Inizia trial gratuito",
```

Trova e sostituisci (la seconda occorrenza, nella sezione `landing`):
```json
"cta_button": "Prenota Demo 30 Minuti",
```
→
```json
"cta_button": "Inizia trial gratuito",
```

Aggiungi questa sezione `"trial"` subito prima della sezione `"demo"` (cerca `"demo": {` e inserisci prima):
```json
"trial": {
  "page_title": "14 giorni gratis. Nessuna carta.",
  "page_subtitle": "Accesso completo a tutti i moduli GeoTapp Flow per 14 giorni. Nessuna carta di credito, nessun impegno. Annulli quando vuole.",
  "badge": "Trial gratuito — 14 giorni",
  "form_title": "Crea il tuo account",
  "form_company": "Nome azienda",
  "form_company_placeholder": "Es. Impianti Rossi Srl",
  "form_vat": "Partita IVA europea",
  "form_vat_placeholder": "Es. IT12345678901",
  "form_email": "Email aziendale",
  "form_email_placeholder": "Es. mario@azienda.it",
  "form_fullname": "Nome completo",
  "form_fullname_placeholder": "Es. Mario Rossi",
  "form_plan": "Piano",
  "plan_solo": "Solo (1 utente)",
  "plan_team": "Team (fino a 5 utenti)",
  "plan_business": "Business (utenti illimitati)",
  "form_seats": "Licenze Timetracker",
  "form_seats_hint": "Quanti operatori useranno l'app mobile?",
  "form_submit": "Inizia trial gratuito",
  "form_submitting": "Attivazione in corso...",
  "form_privacy": "I tuoi dati sono trattati secondo la nostra",
  "form_privacy_link": "Privacy Policy",
  "form_email_hint": "Usa un'email aziendale (no Gmail, Yahoo, ecc.)",
  "success_title": "Controlla la tua email!",
  "success_desc": "Abbiamo inviato il link di attivazione a ",
  "success_desc2": "Clicca il link per impostare la password e accedere al tuo trial.",
  "success_spam": "Non lo trovi? Controlla la cartella spam.",
  "error_message": "Errore durante l'attivazione. Riprova o scrivi a info@geotapp.com.",
  "benefits_title": "Cosa include il trial",
  "benefits": [
    { "title": "Accesso completo", "desc": "Tutti i moduli attivi: CRM, fatturazione, gestione squadre, supporto clienti." },
    { "title": "Nessuna carta richiesta", "desc": "Inserisci solo i dati aziendali. La carta si aggiunge solo se decidi di continuare." },
    { "title": "Dati al sicuro", "desc": "I tuoi dati rimangono tuoi. Puoi esportarli in qualsiasi momento." }
  ],
  "faq": [
    { "q": "Cosa succede dopo 14 giorni?", "a": "Riceverai un'email con il link per attivare l'abbonamento. Se non fai nulla, l'account viene sospeso senza addebiti." },
    { "q": "Devo inserire la carta di credito?", "a": "No. Il trial è completamente gratuito e senza carta. La inserisci solo se scegli di continuare." },
    { "q": "Posso invitare il mio team?", "a": "Sì, puoi aggiungere utenti dal pannello impostazioni durante il trial." },
    { "q": "Quanto tempo ci vuole per iniziare?", "a": "Meno di 2 minuti: compila il form, ricevi l'email, imposta la password e sei dentro." }
  ]
},
```

**Step 2: Aggiorna `en.json`** — stesse 3 chiavi CTA + sezione trial:

Sostituisci:
```json
"cta": "Book a 30-Minute Demo",
```
→
```json
"cta": "Start free trial",
```

```json
"hero_cta_primary": "Book a 30-Minute Demo",
```
→
```json
"hero_cta_primary": "Start free trial",
```

```json
"cta_button": "Book a 30-Minute Demo",
```
→
```json
"cta_button": "Start free trial",
```

Aggiungi sezione `"trial"` prima di `"demo"`:
```json
"trial": {
  "page_title": "14 days free. No credit card.",
  "page_subtitle": "Full access to all GeoTapp Flow modules for 14 days. No credit card, no commitment. Cancel anytime.",
  "badge": "Free trial — 14 days",
  "form_title": "Create your account",
  "form_company": "Company name",
  "form_company_placeholder": "E.g. Rossi Installations Ltd",
  "form_vat": "European VAT number",
  "form_vat_placeholder": "E.g. IT12345678901",
  "form_email": "Business email",
  "form_email_placeholder": "E.g. mario@company.com",
  "form_fullname": "Full name",
  "form_fullname_placeholder": "E.g. Mario Rossi",
  "form_plan": "Plan",
  "plan_solo": "Solo (1 user)",
  "plan_team": "Team (up to 5 users)",
  "plan_business": "Business (unlimited users)",
  "form_seats": "Timetracker licences",
  "form_seats_hint": "How many field operators will use the mobile app?",
  "form_submit": "Start free trial",
  "form_submitting": "Setting up...",
  "form_privacy": "Your data is processed according to our",
  "form_privacy_link": "Privacy Policy",
  "form_email_hint": "Use a business email (no Gmail, Yahoo, etc.)",
  "success_title": "Check your email!",
  "success_desc": "We've sent the activation link to ",
  "success_desc2": "Click the link to set your password and access your trial.",
  "success_spam": "Can't find it? Check your spam folder.",
  "error_message": "Activation error. Please try again or write to info@geotapp.com.",
  "benefits_title": "What's included",
  "benefits": [
    { "title": "Full access", "desc": "All modules active: CRM, invoicing, team management, customer support." },
    { "title": "No card required", "desc": "Just enter your company details. Add a card only if you decide to continue." },
    { "title": "Your data is safe", "desc": "Your data stays yours. You can export it at any time." }
  ],
  "faq": [
    { "q": "What happens after 14 days?", "a": "You'll receive an email with a link to activate your subscription. If you do nothing, the account is suspended with no charges." },
    { "q": "Do I need to enter a credit card?", "a": "No. The trial is completely free with no card required. You only add it if you choose to continue." },
    { "q": "Can I invite my team?", "a": "Yes, you can add users from the settings panel during the trial." },
    { "q": "How long does it take to get started?", "a": "Less than 2 minutes: fill in the form, receive the email, set your password and you're in." }
  ]
},
```

**Step 3: Aggiorna `de.json`** — stesse 3 chiavi CTA:

```json
"cta": "Demo anfragen",
```
→
```json
"cta": "Kostenlos testen",
```

Cerca nel blocco `"landing"`:
```json
"hero_cta_primary":
```
e aggiorna a `"Kostenlos testen"`.

Stessa cosa per `"cta_button"` nella sezione landing.

Aggiungi sezione `"trial"` prima di `"demo"`:
```json
"trial": {
  "page_title": "14 Tage kostenlos. Keine Kreditkarte.",
  "page_subtitle": "Vollständiger Zugang zu allen GeoTapp Flow-Modulen für 14 Tage. Keine Kreditkarte, keine Verpflichtung. Jederzeit kündbar.",
  "badge": "Kostenlose Testphase — 14 Tage",
  "form_title": "Konto erstellen",
  "form_company": "Firmenname",
  "form_company_placeholder": "Z.B. Rossi Installationen GmbH",
  "form_vat": "Europäische USt-IdNr.",
  "form_vat_placeholder": "Z.B. DE123456789",
  "form_email": "Geschäftliche E-Mail",
  "form_email_placeholder": "Z.B. mario@firma.de",
  "form_fullname": "Vollständiger Name",
  "form_fullname_placeholder": "Z.B. Mario Rossi",
  "form_plan": "Tarif",
  "plan_solo": "Solo (1 Nutzer)",
  "plan_team": "Team (bis 5 Nutzer)",
  "plan_business": "Business (unbegrenzte Nutzer)",
  "form_seats": "Timetracker-Lizenzen",
  "form_seats_hint": "Wie viele Außendienstmitarbeiter nutzen die mobile App?",
  "form_submit": "Kostenlos testen",
  "form_submitting": "Wird eingerichtet...",
  "form_privacy": "Ihre Daten werden gemäß unserer",
  "form_privacy_link": "Datenschutzerklärung",
  "form_email_hint": "Bitte geschäftliche E-Mail verwenden (kein Gmail, Yahoo usw.)",
  "success_title": "E-Mail prüfen!",
  "success_desc": "Wir haben den Aktivierungslink an ",
  "success_desc2": "Klicken Sie auf den Link, um Ihr Passwort festzulegen und auf Ihren Test zuzugreifen.",
  "success_spam": "Nicht gefunden? Spam-Ordner prüfen.",
  "error_message": "Aktivierungsfehler. Bitte erneut versuchen oder an info@geotapp.com schreiben.",
  "benefits_title": "Was enthalten ist",
  "benefits": [
    { "title": "Vollständiger Zugang", "desc": "Alle Module aktiv: CRM, Rechnungsstellung, Teamverwaltung, Kundensupport." },
    { "title": "Keine Karte erforderlich", "desc": "Nur Firmendaten eingeben. Karte nur hinzufügen, wenn Sie weitermachen möchten." },
    { "title": "Ihre Daten sind sicher", "desc": "Ihre Daten gehören Ihnen. Sie können sie jederzeit exportieren." }
  ],
  "faq": [
    { "q": "Was passiert nach 14 Tagen?", "a": "Sie erhalten eine E-Mail mit einem Link zur Aktivierung des Abonnements. Wenn Sie nichts tun, wird das Konto ohne Kosten gesperrt." },
    { "q": "Muss ich eine Kreditkarte angeben?", "a": "Nein. Der Test ist völlig kostenlos ohne Kreditkarte. Sie fügen diese nur hinzu, wenn Sie weitermachen möchten." },
    { "q": "Kann ich mein Team einladen?", "a": "Ja, Sie können während des Tests Nutzer über die Einstellungen hinzufügen." },
    { "q": "Wie lange dauert der Einstieg?", "a": "Weniger als 2 Minuten: Formular ausfüllen, E-Mail empfangen, Passwort festlegen – fertig." }
  ]
},
```

**Step 4: TypeScript check**
Run: `cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npx tsc --noEmit 2>&1 | head -20`

**Step 5: Commit**
```bash
git add src/dictionaries/it.json src/dictionaries/en.json src/dictionaries/de.json
git commit -m "feat(trial): add trial dictionary section and update CTA texts to trial"
```

---

### Task 2: Creare `src/app/trial/page.tsx`

**Files:**
- Create: `src/app/trial/page.tsx`

**Step 1: Crea il file**

```tsx
'use client';

import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  Send,
  ShieldCheck,
  MapPin,
  WifiOff,
  ChevronDown,
  Rocket,
  CreditCard,
  Users,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import Link from 'next/link';

const BENEFIT_ICONS = [
  <Rocket size={20} className="text-primary" />,
  <CreditCard size={20} className="text-emerald-500" />,
  <ShieldCheck size={20} className="text-blue-500" />,
];

const PLANS = ['SOLO', 'TEAM', 'BUSINESS'] as const;

export default function TrialPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const d = getDictionary(locale).trial;

  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    companyName: '',
    vatNumber: '',
    email: '',
    fullName: '',
    plan: 'TEAM' as typeof PLANS[number],
    timetrackerSeats: 3,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const saasUrl = process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com';
      const res = await fetch(`${saasUrl}/api/trial/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || d.error_message);
      setSubmittedEmail(formData.email);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const localePrefix = locale !== 'it' ? `/${locale}` : '/it';

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white text-slate-900">
      <div className="container mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-6"
          >
            {d.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight"
          >
            {d.page_title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-light leading-relaxed"
          >
            {d.page_subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center"
                >
                  <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{d.success_title}</h2>
                  <p className="text-slate-600 mb-1">
                    {d.success_desc}<strong>{submittedEmail}</strong>
                  </p>
                  <p className="text-slate-600 mb-4">{d.success_desc2}</p>
                  <p className="text-slate-500 text-sm">{d.success_spam}</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100/60 space-y-5"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-lg font-bold text-slate-900 mb-2">{d.form_title}</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        {d.form_company} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder={d.form_company_placeholder}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        {d.form_vat} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.vatNumber}
                        onChange={(e) => setFormData({ ...formData, vatNumber: e.target.value })}
                        placeholder={d.form_vat_placeholder}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {d.form_fullname} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={d.form_fullname_placeholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {d.form_email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={d.form_email_placeholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                    <p className="mt-1 text-xs text-slate-400">{d.form_email_hint}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {d.form_plan} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value as typeof PLANS[number] })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none pr-10"
                      >
                        <option value="SOLO">{d.plan_solo}</option>
                        <option value="TEAM">{d.plan_team}</option>
                        <option value="BUSINESS">{d.plan_business}</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {formData.plan !== 'SOLO' && (
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        {d.form_seats}
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={formData.plan === 'TEAM' ? 5 : 999}
                        value={formData.timetrackerSeats}
                        onChange={(e) => setFormData({ ...formData, timetrackerSeats: Number(e.target.value) })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                      <p className="mt-1 text-xs text-slate-400">{d.form_seats_hint}</p>
                    </div>
                  )}

                  {error && (
                    <p className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Send size={20} />
                    {loading ? d.form_submitting : d.form_submit}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    {d.form_privacy}{' '}
                    <Link href={`${localePrefix}/privacy/`} className="underline hover:text-slate-600">
                      {d.form_privacy_link}
                    </Link>
                    .
                  </p>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Trust strip */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" /> GDPR Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-blue-500" /> Timbratura GPS verificata
              </span>
              <span className="flex items-center gap-1.5">
                <WifiOff size={14} className="text-amber-500" /> Funziona offline
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={14} className="text-slate-400" /> Nessuna carta richiesta
              </span>
            </div>
          </motion.div>

          {/* RIGHT: benefits + FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-10"
          >
            {/* Benefits */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">{d.benefits_title}</h2>
              <div className="space-y-5">
                {d.benefits.map((item: { title: string; desc: string }, i: number) => (
                  <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="mt-0.5 shrink-0">{BENEFIT_ICONS[i]}</div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                      <div className="text-sm text-slate-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-5">FAQ</h2>
              <div className="space-y-3">
                {d.faq.map((item: { q: string; a: string }, i: number) => (
                  <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        size={16}
                        className={`shrink-0 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
```

**Step 2: TypeScript check**
Run: `cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npx tsc --noEmit 2>&1 | head -20`
Expected: errori solo pre-esistenti

**Step 3: Commit**
```bash
git add src/app/trial/page.tsx
git commit -m "feat(trial): add /trial signup page"
```

---

### Task 3: Redirect 301 `/demo` → `/trial` in next.config.mjs

**Files:**
- Modify: `next.config.mjs`

**Step 1: Trova il blocco `async redirects()`** e cerca la variabile `appRenames`. Subito dopo la definizione di `appRenames`, aggiungi questo array `demoToTrialRedirects`:

```javascript
const demoToTrialRedirects = [
  // Root (no locale prefix)
  { source: '/demo',   destination: '/trial/', permanent: true },
  { source: '/demo/',  destination: '/trial/', permanent: true },
  // Active locales
  ...['it', 'en', 'de'].flatMap(locale => [
    { source: `/${locale}/demo`,   destination: `/${locale}/trial/`, permanent: true },
    { source: `/${locale}/demo/`,  destination: `/${locale}/trial/`, permanent: true },
  ]),
];
```

Poi trova dove viene composta l'array finale `return [...]` nella funzione `redirects()` e aggiungi `...demoToTrialRedirects` all'array restituito.

**Step 2: TypeScript check**
Run: `cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && node -e "import('./next.config.mjs').then(m => console.log('OK'))" 2>&1 | head -10`

**Step 3: Commit**
```bash
git add next.config.mjs
git commit -m "feat(trial): add 301 redirects from /demo to /trial for all active locales"
```

---

### Task 4: Aggiornare Navbar CTA link: `/contact` → `/trial`

**Files:**
- Modify: `src/components/Navbar.tsx`

Il Navbar ha **due** occorrenze del CTA button che puntano a `getLink('/contact')` (desktop riga ~244, mobile riga ~347). Entrambe vanno cambiate in `getLink('/trial')`.

**Step 1: Leggi il file per verificare le righe esatte**

**Step 2: Sostituisci entrambe le occorrenze** — la stringa da trovare è:
```tsx
href={getLink('/contact')}
className="px-5 py-2.5 text-sm font-bold bg-slate-900 text-white rounded-lg hover:bg-primary hover:text-slate-900 transition-all duration-300 shadow-lg shadow-slate-900/20"
```
→
```tsx
href={getLink('/trial')}
className="px-5 py-2.5 text-sm font-bold bg-slate-900 text-white rounded-lg hover:bg-primary hover:text-slate-900 transition-all duration-300 shadow-lg shadow-slate-900/20"
```

E per il mobile:
```tsx
href={getLink('/contact')}
onClick={() => setIsOpen(false)}
className="w-full py-4 text-center text-white font-bold bg-slate-900 rounded-xl shadow-lg"
```
→
```tsx
href={getLink('/trial')}
onClick={() => setIsOpen(false)}
className="w-full py-4 text-center text-white font-bold bg-slate-900 rounded-xl shadow-lg"
```

**Step 3: TypeScript check**
Run: `cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npx tsc --noEmit 2>&1 | head -20`

**Step 4: Commit**
```bash
git add src/components/Navbar.tsx
git commit -m "feat(trial): update navbar CTA to point to /trial"
```

---

### Task 5: Aggiornare homepage `src/app/page.tsx`: link `/demo` → `/trial`

**Files:**
- Modify: `src/app/page.tsx`

Ci sono **due** occorrenze di `href={getLink('/demo')}` (hero primary CTA riga ~115, sticky mobile CTA riga ~659).
Entrambe vanno cambiate in `href={getLink('/trial')}`.

**Step 1: Leggi il file per verificare le righe esatte**

**Step 2: Sostituisci entrambe** usando replace_all=true per `/demo` → `/trial` SE `/demo` appare solo in questi due CTA. Altrimenti sostituisci singolarmente.

**Step 3: TypeScript check**
Run: `cd /mnt/disco_secondario/GeoTapp-EcoSystem/geotapp-site && npx tsc --noEmit 2>&1 | head -20`

**Step 4: Commit**
```bash
git add src/app/page.tsx
git commit -m "feat(trial): update homepage hero and sticky CTA links to /trial"
```
