'use client';

import { useState } from 'react';

export interface CommentItem {
  id: number;
  author: string;
  date: string;
  html: string;
  avatar: string | null;
}

interface CommentsProps {
  postId: number;
  locale: string;
  comments: CommentItem[];
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const L: Record<
  string,
  {
    heading: string;
    none: string;
    formTitle: string;
    name: string;
    email: string;
    emailNote: string;
    comment: string;
    consentPre: string;
    privacy: string;
    btn: string;
    sending: string;
    success: string;
    error: string;
    incomplete: string;
  }
> = {
  it: {
    heading: 'Commenti',
    none: 'Ancora nessun commento. Lascia il primo.',
    formTitle: 'Lascia un commento',
    name: 'Il tuo nome',
    email: 'La tua email',
    emailNote: 'L’email non viene pubblicata.',
    comment: 'Scrivi qui il tuo commento',
    consentPre: 'Ho letto e accetto la',
    privacy: 'privacy policy',
    btn: 'Invia il commento',
    sending: 'Invio in corso...',
    success: 'Grazie. Il commento è stato inviato e comparirà dopo l’approvazione.',
    error: 'Qualcosa non ha funzionato. Riprova tra poco.',
    incomplete: 'Compila tutti i campi e accetta la privacy policy.',
  },
  en: {
    heading: 'Comments',
    none: 'No comments yet. Be the first.',
    formTitle: 'Leave a comment',
    name: 'Your name',
    email: 'Your email',
    emailNote: 'Your email will not be published.',
    comment: 'Write your comment here',
    consentPre: 'I have read and accept the',
    privacy: 'privacy policy',
    btn: 'Post comment',
    sending: 'Sending...',
    success: 'Thank you. Your comment has been sent and will appear once approved.',
    error: 'Something went wrong. Please try again shortly.',
    incomplete: 'Please fill in every field and accept the privacy policy.',
  },
  de: {
    heading: 'Kommentare',
    none: 'Noch keine Kommentare. Schreibe den ersten.',
    formTitle: 'Einen Kommentar schreiben',
    name: 'Dein Name',
    email: 'Deine E-Mail',
    emailNote: 'Die E-Mail wird nicht veröffentlicht.',
    comment: 'Schreibe hier deinen Kommentar',
    consentPre: 'Ich habe die',
    privacy: 'Datenschutzerklärung',
    btn: 'Kommentar senden',
    sending: 'Wird gesendet...',
    success: 'Danke. Dein Kommentar wurde gesendet und erscheint nach der Freigabe.',
    error: 'Etwas ist schiefgelaufen. Bitte versuche es gleich noch einmal.',
    incomplete: 'Bitte fülle alle Felder aus und akzeptiere die Datenschutzerklärung.',
  },
  fr: {
    heading: 'Commentaires',
    none: 'Aucun commentaire pour le moment. Soyez le premier.',
    formTitle: 'Laisser un commentaire',
    name: 'Votre nom',
    email: 'Votre email',
    emailNote: "L'email ne sera pas publié.",
    comment: 'Écrivez votre commentaire ici',
    consentPre: "J'ai lu et j'accepte la",
    privacy: 'politique de confidentialité',
    btn: 'Envoyer le commentaire',
    sending: 'Envoi en cours...',
    success: 'Merci. Votre commentaire a été envoyé et apparaîtra après validation.',
    error: 'Une erreur est survenue. Réessayez dans un instant.',
    incomplete: 'Remplissez tous les champs et acceptez la politique de confidentialité.',
  },
};

function formatDate(iso: string, locale: string): string {
  try {
    return new Date(iso).toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso.slice(0, 10);
  }
}

export default function Comments({ postId, locale, comments }: CommentsProps) {
  const t = L[locale] || L.en;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !content.trim() || !consent) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          post: postId,
          author_name: name,
          author_email: email,
          content,
          consent,
          gt_hp: hp,
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#8FC436] transition-colors';

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12 border-t border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900">
          {t.heading}
          {comments.length > 0 && (
            <span className="text-slate-400 font-semibold"> ({comments.length})</span>
          )}
        </h2>

        {comments.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">{t.none}</p>
        ) : (
          <ul className="mt-6 space-y-6">
            {comments.map((c) => (
              <li key={c.id} className="flex gap-4">
                {c.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full shrink-0 bg-slate-100"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full shrink-0 bg-[#8FC436]/15 text-[#8FC436] flex items-center justify-center text-sm font-bold">
                    {c.author.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-slate-900">{c.author}</span>
                    <span className="text-xs text-slate-400">{formatDate(c.date, locale)}</span>
                  </div>
                  <div
                    className="mt-1 text-sm text-slate-600 leading-relaxed [&_a]:text-[#8FC436] [&_a]:underline"
                    dangerouslySetInnerHTML={{ __html: c.html }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 rounded-2xl border border-[#8FC436]/20 bg-[#8FC436]/5 p-6 sm:p-8">
          <p className="text-lg font-bold text-slate-900">{t.formTitle}</p>

          {status === 'success' ? (
            <p className="mt-4 text-sm font-semibold text-[#8FC436]">{t.success}</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.name}
                  maxLength={80}
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.email}
                  required
                  className={inputClass}
                />
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={t.comment}
                rows={4}
                maxLength={3000}
                required
                className={inputClass + ' resize-y'}
              />
              {/* Honeypot: nascosto agli umani, i bot tendono a riempirlo. */}
              <input
                type="text"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1 }}
              />
              <label className="flex items-start gap-2 text-xs text-slate-500">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-0.5 accent-[#8FC436]"
                />
                <span>
                  {t.consentPre}{' '}
                  <a
                    href={`/${locale}/privacy/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8FC436] underline"
                  >
                    {t.privacy}
                  </a>
                  . {t.emailNote}
                </span>
              </label>
              {status === 'error' && (
                <p className="text-xs text-red-500">{t.incomplete}</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#8FC436] rounded-xl hover:bg-[#7db02e] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? t.sending : t.btn}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
