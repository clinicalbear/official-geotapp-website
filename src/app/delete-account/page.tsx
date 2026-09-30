'use client';

import { FormEvent, useState } from 'react';
import { Trash2, ShieldCheck, Clock, FileText, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { DEFAULT_LOCALE, getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';

const FIRESTORE_URL =
  'https://firestore.googleapis.com/v1/projects/geotap-v2/databases/(default)/documents/accountDeletionRequests';

/**
 * Testi della pagina nella lingua del sito. Fino al 30/09/2026 era tutta in inglese in
 * ogni lingua. L'indirizzo per i diritti privacy e' info@geotapp.com, lo stesso
 * dell'informativa (privacy@ non compare in nessun documento legale).
 */
type Testi = {
  h1: string; intro: string;
  b2bT: string; b2b: string;
  keepT: string; keep: string;
  rightsT: string; rights1: string; rights2: string;
  doneT: string; done1: string; done30: string; done2: string;
  name: string; email: string; company: string; notes: string; optional: string;
  notesPh: string; companyPh: string; namePh: string; emailPh: string;
  sending: string; submit: string; confirm: string; error: string;
};
const T: Record<string, Testi> = {
  en: {
    h1: 'Request account deletion',
    intro: 'Use this form to ask us to delete your GeoTapp account and the personal data linked to it.',
    b2bT: 'Your data is managed by your employer',
    b2b: 'GeoTapp is a business platform. Your account and your work sessions belong to the company that activated your licence. When we receive your request, we inform that company\'s administrator and carry out the deletion as the law requires.',
    keepT: 'Data the law requires us to keep',
    keep: 'Some records (attendance logs, invoices, tax documents) may have to be kept for the period required by Italian and EU law, typically 10 years for accounting records. They are anonymised or deleted as soon as that period ends.',
    rightsT: 'Your GDPR rights',
    rights1: 'Under the GDPR (EU Regulation 2016/679) you have the right to erasure, to rectification and to data portability. For any privacy question you can also write to',
    rights2: '.',
    doneT: 'Request received',
    done1: 'Your deletion request has been sent. We will handle it within',
    done30: '30 days',
    done2: 'and send a confirmation to your email address.',
    name: 'Full name', email: 'Email you registered with', company: 'Company name', notes: 'Notes', optional: '(optional)',
    notesPh: 'Anything else we should know about your request', companyPh: 'Company name', namePh: 'Jane Smith', emailPh: 'jane@company.com',
    sending: 'Sending…', submit: 'Send deletion request',
    confirm: 'By sending this form you confirm that you are the account holder. Handling time: up to 30 days.',
    error: 'Something went wrong. Please try again or write to info@geotapp.com.',
  },
  it: {
    h1: "Richiedi la cancellazione dell'account",
    intro: "Con questo modulo ci chiedi di cancellare il tuo account GeoTapp e i dati personali collegati.",
    b2bT: 'I tuoi dati li gestisce il tuo datore di lavoro',
    b2b: "GeoTapp è una piattaforma per le aziende. Il tuo account e le tue sessioni di lavoro appartengono all'azienda che ha attivato la tua licenza. Quando riceviamo la richiesta avvisiamo l'amministratore di quell'azienda e procediamo alla cancellazione come prevede la legge.",
    keepT: 'I dati che la legge ci obbliga a conservare',
    keep: 'Alcuni documenti (registri presenze, fatture, documenti fiscali) possono dover essere conservati per il periodo richiesto dalla legge italiana ed europea, di solito 10 anni per le scritture contabili. Scaduto quel periodo vengono resi anonimi o cancellati.',
    rightsT: 'I tuoi diritti secondo il GDPR',
    rights1: 'Il GDPR (Regolamento UE 2016/679) ti dà il diritto alla cancellazione, alla rettifica e alla portabilità dei dati. Per qualsiasi domanda sulla privacy puoi scrivere anche a',
    rights2: '.',
    doneT: 'Richiesta ricevuta',
    done1: 'La tua richiesta di cancellazione è stata inviata. La gestiamo entro',
    done30: '30 giorni',
    done2: 'e ti mandiamo una conferma al tuo indirizzo email.',
    name: 'Nome e cognome', email: "Email con cui ti sei registrato", company: "Nome dell'azienda", notes: 'Note', optional: '(facoltativo)',
    notesPh: 'Altro che dobbiamo sapere sulla tua richiesta', companyPh: 'Nome Azienda Srl', namePh: 'Mario Rossi', emailPh: 'mario@azienda.com',
    sending: 'Invio in corso…', submit: 'Invia la richiesta di cancellazione',
    confirm: "Inviando il modulo confermi di essere il titolare dell'account. Tempo di gestione: fino a 30 giorni.",
    error: 'Qualcosa non ha funzionato. Riprova o scrivi a info@geotapp.com.',
  },
  de: {
    h1: 'Kontolöschung beantragen',
    intro: 'Mit diesem Formular bitten Sie uns, Ihr GeoTapp-Konto und die damit verbundenen personenbezogenen Daten zu löschen.',
    b2bT: 'Ihre Daten verwaltet Ihr Arbeitgeber',
    b2b: 'GeoTapp ist eine Plattform für Unternehmen. Ihr Konto und Ihre Arbeitssitzungen gehören dem Unternehmen, das Ihre Lizenz aktiviert hat. Wenn wir Ihren Antrag erhalten, informieren wir den Administrator dieses Unternehmens und führen die Löschung durch, wie es das Gesetz vorsieht.',
    keepT: 'Daten, die wir von Gesetzes wegen aufbewahren müssen',
    keep: 'Manche Unterlagen (Anwesenheitsnachweise, Rechnungen, Steuerunterlagen) müssen unter Umständen für den Zeitraum aufbewahrt werden, den das italienische und das europäische Recht verlangen, in der Regel 10 Jahre für Buchhaltungsunterlagen. Nach Ablauf dieser Frist werden sie anonymisiert oder gelöscht.',
    rightsT: 'Ihre Rechte nach der DSGVO',
    rights1: 'Die DSGVO (Verordnung (EU) 2016/679) gibt Ihnen das Recht auf Löschung, auf Berichtigung und auf Datenübertragbarkeit. Bei Fragen zum Datenschutz können Sie auch schreiben an',
    rights2: '.',
    doneT: 'Antrag eingegangen',
    done1: 'Ihr Löschantrag wurde gesendet. Wir bearbeiten ihn innerhalb von',
    done30: '30 Tagen',
    done2: 'und schicken eine Bestätigung an Ihre E-Mail-Adresse.',
    name: 'Vor- und Nachname', email: 'E-Mail-Adresse, mit der Sie sich registriert haben', company: 'Name des Unternehmens', notes: 'Anmerkungen', optional: '(optional)',
    notesPh: 'Sonstiges, das wir zu Ihrem Antrag wissen sollten', companyPh: 'Muster GmbH', namePh: 'Erika Mustermann', emailPh: 'erika@firma.de',
    sending: 'Wird gesendet …', submit: 'Löschantrag senden',
    confirm: 'Mit dem Absenden des Formulars bestätigen Sie, dass Sie der Kontoinhaber sind. Bearbeitungszeit: bis zu 30 Tage.',
    error: 'Etwas ist schiefgelaufen. Versuchen Sie es erneut oder schreiben Sie an info@geotapp.com.',
  },
  nl: {
    h1: 'Vraag de verwijdering van uw account aan',
    intro: 'Met dit formulier vraagt u ons uw GeoTapp-account en de gekoppelde persoonsgegevens te verwijderen.',
    b2bT: 'Uw gegevens worden beheerd door uw werkgever',
    b2b: 'GeoTapp is een platform voor bedrijven. Uw account en uw werksessies behoren toe aan het bedrijf dat uw licentie heeft geactiveerd. Wanneer we het verzoek ontvangen, waarschuwen we de beheerder van dat bedrijf en gaan we over tot verwijdering zoals de wet voorschrijft.',
    keepT: 'De gegevens die we volgens de wet moeten bewaren',
    keep: 'Sommige documenten (aanwezigheidsregisters, facturen, fiscale documenten) moeten mogelijk worden bewaard voor de termijn die de Italiaanse en Europese wet vereist, meestal 10 jaar voor de boekhouding. Na die termijn worden ze geanonimiseerd of gewist.',
    rightsT: 'Uw rechten volgens de AVG',
    rights1: 'De AVG (Verordening (EU) 2016/679) geeft u het recht op wissing, rectificatie en overdraagbaarheid van de gegevens. Voor elke vraag over privacy kunt u ook schrijven naar',
    rights2: '.',
    doneT: 'Verzoek ontvangen',
    done1: 'Uw verzoek tot verwijdering is verzonden. We handelen het af binnen',
    done30: '30 dagen',
    done2: 'en sturen u een bevestiging op uw e-mailadres.',
    name: 'Voor- en achternaam',
    email: 'E-mailadres waarmee u zich hebt geregistreerd',
    company: 'Naam van het bedrijf',
    notes: 'Opmerkingen',
    optional: '(optioneel)',
    notesPh: 'Wat we nog moeten weten over uw verzoek',
    companyPh: 'Bedrijfsnaam B.V.',
    namePh: 'Jan de Vries',
    emailPh: 'jan@bedrijf.nl',
    sending: 'Bezig met verzenden…',
    submit: 'Verzend het verzoek tot verwijdering',
    confirm: 'Door het formulier te versturen bevestigt u de houder van het account te zijn. Verwerkingstijd: tot 30 dagen.',
    error: 'Er ging iets mis. Probeer het opnieuw of schrijf naar info@geotapp.com.',
  },
};

async function submitDeletionRequest(data: {
  fullName: string;
  email: string;
  companyName: string;
  notes: string;
}) {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const res = await fetch(`${FIRESTORE_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        fullName: { stringValue: data.fullName },
        email: { stringValue: data.email },
        companyName: { stringValue: data.companyName },
        notes: { stringValue: data.notes },
        status: { stringValue: 'pending' },
        createdAt: { timestampValue: new Date().toISOString() },
      },
    }),
  });
  if (!res.ok) throw new Error('Submission failed');
  return res.json();
}

export default function DeleteAccountPage() {
  const locale = getLocaleFromPathname(usePathname()) ?? DEFAULT_LOCALE;
  const t = localizeEnglishDeep(T[locale] ?? T[locale.split('-')[0]] ?? T.en, locale);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    notes: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await submitDeletionRequest(formData);
      setSubmitted(true);
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-5 pb-24 px-6 min-h-screen bg-white text-slate-900">
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
            <Trash2 className="text-red-600" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            {t.h1}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
            {t.intro}
          </p>
        </motion.div>

        {/* Info sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 mb-12"
        >
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
            <div className="mt-1 shrink-0 p-2 bg-white rounded-lg border border-slate-200">
              <ShieldCheck size={20} className="text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">{t.b2bT}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t.b2b}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
            <div className="mt-1 shrink-0 p-2 bg-white rounded-lg border border-slate-200">
              <Clock size={20} className="text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">{t.keepT}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t.keep}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
            <div className="mt-1 shrink-0 p-2 bg-white rounded-lg border border-slate-200">
              <FileText size={20} className="text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">{t.rightsT}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t.rights1}{' '}
                <a href="mailto:info@geotapp.com" className="text-slate-700 underline hover:text-slate-900">
                  info@geotapp.com
                </a>
                {t.rights2}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form / Success */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100/60"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-50 rounded-2xl mb-4">
                <ShieldCheck size={26} className="text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.doneT}</h2>
              <p className="text-slate-500 leading-relaxed max-w-md mx-auto">
                {t.done1}{' '}
                <strong className="text-slate-700">{t.done30}</strong> {t.done2}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  placeholder={t.namePh}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  placeholder={t.emailPh}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.company} <span className="text-slate-400 font-normal">{t.optional}</span>
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  placeholder={t.companyPh}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {t.notes} <span className="text-slate-400 font-normal">{t.optional}</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"
                  placeholder={t.notesPh}
                />
              </div>

              {error && (
                <div className="flex items-start gap-3 border border-red-200 bg-red-50 rounded-xl px-4 py-3">
                  <AlertTriangle size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-red-600 text-white font-bold text-base rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-100 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Trash2 size={18} />
                {loading ? t.sending : t.submit}
              </button>

              <p className="text-center text-xs text-slate-400">
                {t.confirm}
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
