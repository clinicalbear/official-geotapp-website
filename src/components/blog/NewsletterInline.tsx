'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const LABELS: Record<string, { title: string; desc: string; placeholder: string; btn: string; success: string; error: string }> = {
  it: { title: 'Ricevi articoli come questo nella tua inbox', desc: 'Spunti pratici su GPS tracking, gestione operativa e GDPR. Niente spam, solo contenuti utili.', placeholder: 'La tua email', btn: 'Iscriviti', success: 'Iscritto! Controlla la tua email.', error: 'Qualcosa non ha funzionato. Riprova.' },
  en: { title: 'Get articles like this in your inbox', desc: 'Practical insights on GPS tracking, field operations and GDPR. No spam, just useful content.', placeholder: 'Your email', btn: 'Subscribe', success: 'Subscribed! Check your email.', error: 'Something went wrong. Please try again.' },
  de: { title: 'Artikel wie diesen direkt in dein Postfach', desc: 'Praktische Einblicke zu GPS-Tracking, Betriebsmanagement und DSGVO. Kein Spam, nur nutzliche Inhalte.', placeholder: 'Deine E-Mail', btn: 'Abonnieren', success: 'Abonniert! Prufe deine E-Mail.', error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.' },
  fr: { title: 'Recevez des articles comme celui-ci', desc: 'Conseils pratiques sur le suivi GPS, la gestion terrain et le RGPD. Pas de spam, que du contenu utile.', placeholder: 'Votre email', btn: "S'inscrire", success: 'Inscrit ! Verifiez votre email.', error: 'Une erreur est survenue. Veuillez reessayer.' },
  nl: { title: 'Ontvang artikelen zoals dit in je inbox', desc: 'Praktische inzichten over GPS-tracking, veldbeheer en AVG. Geen spam, alleen nuttige content.', placeholder: 'Je e-mail', btn: 'Abonneren', success: 'Ingeschreven! Check je e-mail.', error: 'Er ging iets mis. Probeer het opnieuw.' },
  es: { title: 'Recibe artículos como este en tu bandeja', desc: 'Ideas prácticas sobre seguimiento GPS, gestión de campo y RGPD. Sin spam, solo contenido útil.', placeholder: 'Tu email', btn: 'Suscríbete', success: '¡Suscrito! Revisa tu email.', error: 'Algo salió mal. Inténtalo de nuevo.' },
  pt: { title: 'Recebe artigos como este na tua caixa', desc: 'Dicas práticas sobre rastreamento GPS, gestão no terreno e RGPD. Sem spam, só conteúdo útil.', placeholder: 'O teu email', btn: 'Subscrever', success: 'Subscrito! Verifica o teu email.', error: 'Algo correu mal. Tenta de novo.' },
  da: { title: 'Få artikler som denne i din indbakke', desc: 'Praktiske indsigter om GPS-sporing, feltstyring og GDPR. Ingen spam, kun nyttigt indhold.', placeholder: 'Din e-mail', btn: 'Tilmeld', success: 'Tilmeldt! Tjek din e-mail.', error: 'Noget gik galt. Prøv igen.' },
  sv: { title: 'Få artiklar som denna i din inkorg', desc: 'Praktiska insikter om GPS-spårning, fältarbete och GDPR. Ingen spam, bara matnyttigt innehåll.', placeholder: 'Din e-post', btn: 'Prenumerera', success: 'Anmäld! Kolla din e-post.', error: 'Något gick fel. Försök igen.' },
  nb: { title: 'Få artikler som denne i innboksen', desc: 'Praktiske innsikter om GPS-sporing, feltarbeid og GDPR. Ingen spam, bare nyttig innhold.', placeholder: 'Din e-post', btn: 'Abonner', success: 'Påmeldt! Sjekk e-posten din.', error: 'Noe gikk galt. Prøv igjen.' },
  ru: { title: 'Получайте такие статьи на почту', desc: 'Практические материалы о GPS-трекинге, выездных работах и GDPR. Без спама, только польза.', placeholder: 'Ваш email', btn: 'Подписаться', success: 'Готово! Проверьте почту.', error: 'Что-то пошло не так. Попробуйте снова.' },
};

interface NewsletterInlineProps {
  locale: string;
}

export default function NewsletterInline({ locale }: NewsletterInlineProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const labels = LABELS[locale] || LABELS.en;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="my-12 rounded-2xl border border-[#8FC436]/20 bg-[#8FC436]/5 p-8 text-center">
      <p className="text-lg font-bold text-slate-900">{labels.title}</p>
      <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">{labels.desc}</p>
      {status === 'success' ? (
        <p className="mt-4 text-sm font-semibold text-[#8FC436]">{labels.success}</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col items-center gap-2 max-w-sm mx-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={labels.placeholder}
              required
              className="flex-1 min-w-0 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#8FC436] transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-modern-sm shrink-0 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? '...' : labels.btn}
            </button>
          </div>
          {status === 'error' && (
            <p className="text-xs text-red-500 mt-1">{labels.error}</p>
          )}
        </form>
      )}
    </div>
  );
}
