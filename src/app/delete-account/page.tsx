'use client';

import { FormEvent, useState } from 'react';
import { Trash2, ShieldCheck, Clock, FileText, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const FIRESTORE_URL =
  'https://firestore.googleapis.com/v1/projects/geotap-v2/databases/(default)/documents/accountDeletionRequests';

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
      setError('Something went wrong. Please try again or contact support@geotapp.com.');
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
            Request Account Deletion
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
            Submit this form to request the deletion of your GeoTapp account and associated personal data.
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
              <h3 className="font-bold text-slate-900 mb-1">B2B Platform - Data Managed by Your Employer</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                GeoTapp is a business-to-business platform. Your account and work-session data belong to the company
                that activated your licence. Upon receiving your request, we will notify the responsible company
                admin and process the deletion in accordance with applicable law.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
            <div className="mt-1 shrink-0 p-2 bg-white rounded-lg border border-slate-200">
              <Clock size={20} className="text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Legal Data Retention</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Certain records (attendance logs, invoices, fiscal documents) may be retained for the period
                required by Italian and EU law (typically 10 years for accounting records). These records will be
                anonymised or deleted as soon as the retention period expires.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4">
            <div className="mt-1 shrink-0 p-2 bg-white rounded-lg border border-slate-200">
              <FileText size={20} className="text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Your GDPR Rights</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Under GDPR (Regulation EU 2016/679) you have the right to erasure ("right to be forgotten"),
                rectification, and data portability. You can also contact us at{' '}
                <a href="mailto:privacy@geotapp.com" className="text-slate-700 underline hover:text-slate-900">
                  privacy@geotapp.com
                </a>{' '}
                for any privacy-related enquiry.
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
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Request Received</h2>
              <p className="text-slate-500 leading-relaxed max-w-md mx-auto">
                Your deletion request has been submitted. Our team will process it within{' '}
                <strong className="text-slate-700">30 days</strong> and send a confirmation to your email address.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Registered Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  placeholder="mario@azienda.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Company Name <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  placeholder="Nome Azienda Srl"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Additional Notes <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"
                  placeholder="Any additional information about your request..."
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
                {loading ? 'Submitting…' : 'Submit Deletion Request'}
              </button>

              <p className="text-center text-xs text-slate-400">
                By submitting this form you confirm that you are the account holder. Processing time: up to 30 days.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
