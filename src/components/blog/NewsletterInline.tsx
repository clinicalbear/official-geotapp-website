'use client';

import { useState } from 'react';

const LABELS: Record<string, { title: string; desc: string; placeholder: string; btn: string; success: string }> = {
  it: { title: 'Ricevi articoli come questo nella tua inbox', desc: 'Spunti pratici su GPS tracking, gestione operativa e GDPR. Niente spam, solo contenuti utili.', placeholder: 'La tua email', btn: 'Iscriviti', success: 'Iscritto! Controlla la tua email.' },
  en: { title: 'Get articles like this in your inbox', desc: 'Practical insights on GPS tracking, field operations and GDPR. No spam, just useful content.', placeholder: 'Your email', btn: 'Subscribe', success: 'Subscribed! Check your email.' },
  de: { title: 'Artikel wie diesen direkt in dein Postfach', desc: 'Praktische Einblicke zu GPS-Tracking, Betriebsmanagement und DSGVO. Kein Spam, nur nutzliche Inhalte.', placeholder: 'Deine E-Mail', btn: 'Abonnieren', success: 'Abonniert! Prufe deine E-Mail.' },
  fr: { title: 'Recevez des articles comme celui-ci', desc: 'Conseils pratiques sur le suivi GPS, la gestion terrain et le RGPD. Pas de spam, que du contenu utile.', placeholder: 'Votre email', btn: "S'inscrire", success: 'Inscrit ! Verifiez votre email.' },
};

interface NewsletterInlineProps {
  locale: string;
}

export default function NewsletterInline({ locale }: NewsletterInlineProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const labels = LABELS[locale] || LABELS.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: integrate with newsletter service
    setSubmitted(true);
  };

  return (
    <div className="my-12 rounded-2xl border border-[#8FC436]/20 bg-[#8FC436]/5 p-8 text-center">
      <p className="text-lg font-bold text-slate-900">{labels.title}</p>
      <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">{labels.desc}</p>
      {submitted ? (
        <p className="mt-4 text-sm font-semibold text-[#8FC436]">{labels.success}</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 flex items-center gap-2 max-w-sm mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={labels.placeholder}
            required
            className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#8FC436] transition-colors"
          />
          <button
            type="submit"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#8FC436] rounded-xl hover:bg-[#7db02e] transition-colors"
          >
            {labels.btn}
          </button>
        </form>
      )}
    </div>
  );
}
