'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const T: Record<string, {
  title: string;
  subtitle: string;
  email_placeholder: string;
  sector_label: string;
  sector_placeholder: string;
  sectors: { value: string; label: string }[];
  submit: string;
  success: string;
  error: string;
  privacy: string;
}> = {
  it: {
    title: 'Resta aggiornato',
    subtitle: 'Ricevi i migliori contenuti su organizzazione del lavoro, gestione del personale e strumenti digitali per le piccole imprese.',
    email_placeholder: 'La tua email',
    sector_label: 'Il tuo settore',
    sector_placeholder: 'Seleziona il tuo settore',
    sectors: [
      { value: 'installatori',    label: 'Installatori' },
      { value: 'elettricisti',    label: 'Elettricisti' },
      { value: 'idraulici',       label: 'Idraulici' },
      { value: 'termoidraulici',  label: 'Termoidraulici' },
      { value: 'pulizie',         label: 'Pulizie & Facility' },
      { value: 'sicurezza',       label: 'Sicurezza & Vigilanza' },
      { value: 'edilizia',        label: 'Edilizia' },
      { value: 'impianti',        label: 'Impianti' },
      { value: 'manutenzione',    label: 'Manutenzione' },
      { value: 'altro',           label: 'Altro settore' },
    ],
    submit: 'Iscriviti',
    success: 'Iscrizione confermata! Controlla la tua email.',
    error: 'Qualcosa è andato storto. Riprova.',
    privacy: 'Nessuno spam. Cancellazione con un click.',
  },
  en: {
    title: 'Stay updated',
    subtitle: 'Get the best content on organising field work, managing staff and digital tools for small businesses.',
    email_placeholder: 'Your email',
    sector_label: 'Your sector',
    sector_placeholder: 'Select your sector',
    sectors: [
      { value: 'installatori',    label: 'Installateurs' },
      { value: 'elettricisti',    label: 'Electricians' },
      { value: 'idraulici',       label: 'Plumbers' },
      { value: 'termoidraulici',  label: 'Heating Engineers' },
      { value: 'pulizie',         label: 'Cleaning & Facility' },
      { value: 'sicurezza',       label: 'Security & Surveillance' },
      { value: 'edilizia',        label: 'Construction' },
      { value: 'impianti',        label: 'HVAC & Mechanical' },
      { value: 'manutenzione',    label: 'Maintenance' },
      { value: 'altro',           label: 'Other sector' },
    ],
    submit: 'Subscribe',
    success: 'Subscription confirmed! Check your email.',
    error: 'Something went wrong. Please try again.',
    privacy: 'No spam. Unsubscribe anytime.',
  },
  de: {
    title: 'Bleiben Sie informiert',
    subtitle: 'Die besten Inhalte zu Einsatzplanung, Personalführung und digitalen Werkzeugen für kleine Unternehmen.',
    email_placeholder: 'Ihre E-Mail',
    sector_label: 'Ihre Branche',
    sector_placeholder: 'Branche auswählen',
    sectors: [
      { value: 'installatori',    label: 'Installation & Wartung' },
      { value: 'elettricisti',    label: 'Elektriker' },
      { value: 'idraulici',       label: 'Klempner' },
      { value: 'termoidraulici',  label: 'Heizungsinstallateure' },
      { value: 'pulizie',         label: 'Reinigung & Facility' },
      { value: 'sicurezza',       label: 'Sicherheit & Bewachung' },
      { value: 'edilizia',        label: 'Bauwesen' },
      { value: 'impianti',        label: 'Anlagenbau' },
      { value: 'manutenzione',    label: 'Wartung' },
      { value: 'altro',           label: 'Andere Branche' },
    ],
    submit: 'Abonnieren',
    success: 'Anmeldung bestätigt! Prüfen Sie Ihre E-Mail.',
    error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    privacy: 'Kein Spam. Jederzeit abmelden.',
  },
  fr: {
    title: 'Restez informé',
    subtitle: 'Recevez nos meilleurs contenus sur l’organisation du travail, la gestion du personnel et les outils numériques pour les petites entreprises.',
    email_placeholder: 'Votre e-mail',
    sector_label: 'Votre secteur',
    sector_placeholder: 'Sélectionnez votre secteur',
    sectors: [
      { value: 'installatori',    label: 'Installation & Maintenance' },
      { value: 'elettricisti',    label: 'Électriciens' },
      { value: 'idraulici',       label: 'Plombiers' },
      { value: 'termoidraulici',  label: 'Plombiers-chauffagistes' },
      { value: 'pulizie',         label: 'Nettoyage et facility' },
      { value: 'sicurezza',       label: 'Sécurité et surveillance' },
      { value: 'edilizia',        label: 'BTP' },
      { value: 'impianti',        label: 'Installations' },
      { value: 'manutenzione',    label: 'Maintenance' },
      { value: 'altro',           label: 'Autre secteur' },
    ],
    submit: "Je m’inscris",
    success: 'Inscription confirmée ! Vérifiez votre e-mail.',
    error: 'Une erreur est survenue. Veuillez réessayer.',
    privacy: 'Pas de spam. Désabonnement en un clic.',
  },
  es: {
    title: 'Mantente actualizado',
    subtitle: 'Recibe nuestros mejores contenidos sobre organización del trabajo, gestión del personal y herramientas digitales para las pequeñas empresas.',
    email_placeholder: 'Tu correo electrónico',
    sector_label: 'Tu sector',
    sector_placeholder: 'Selecciona tu sector',
    sectors: [
      { value: 'installatori',    label: 'Instaladores' },
      { value: 'elettricisti',    label: 'Electricistas' },
      { value: 'idraulici',       label: 'Fontaneros' },
      { value: 'termoidraulici',  label: 'Fontaneros y calefactores' },
      { value: 'pulizie',         label: 'Limpieza y facility' },
      { value: 'sicurezza',       label: 'Seguridad y vigilancia' },
      { value: 'edilizia',        label: 'Construcción' },
      { value: 'impianti',        label: 'Instalaciones' },
      { value: 'manutenzione',    label: 'Mantenimiento' },
      { value: 'altro',           label: 'Otro sector' },
    ],
    submit: 'Quiero suscribirme',
    success: '¡Suscripción confirmada! Revisa tu correo.',
    error: 'Algo salió mal. Inténtalo de nuevo.',
    privacy: 'Sin spam. Te das de baja con un clic.',
  },
  pt: {
    title: 'Fique atualizado',
    subtitle: 'Receba os nossos melhores conteúdos sobre organização do trabalho, gestão de pessoal e ferramentas digitais para as pequenas empresas.',
    email_placeholder: 'O seu email',
    sector_label: 'O seu setor',
    sector_placeholder: 'Selecione o seu setor',
    sectors: [
      { value: 'installatori',    label: 'Instaladores' },
      { value: 'elettricisti',    label: 'Eletricistas' },
      { value: 'idraulici',       label: 'Canalizadores' },
      { value: 'termoidraulici',  label: 'Canalizadores e técnicos de aquecimento' },
      { value: 'pulizie',         label: 'Limpeza e facility' },
      { value: 'sicurezza',       label: 'Segurança e vigilância' },
      { value: 'edilizia',        label: 'Construção' },
      { value: 'impianti',        label: 'Instalações' },
      { value: 'manutenzione',    label: 'Manutenção' },
      { value: 'altro',           label: 'Outro setor' },
    ],
    submit: 'Quero subscrever',
    success: 'Subscrição confirmada! Verifique o seu email.',
    error: 'Algo correu mal. Tente novamente.',
    privacy: 'Sem spam. Cancele a subscrição com um clique.',
  },
  nl: {
    title: 'Blijf op de hoogte',
    subtitle: 'Ontvang de beste inhoud over werkorganisatie, personeelsbeheer en digitale tools voor kleine bedrijven.',
    email_placeholder: 'Uw e-mailadres',
    sector_label: 'Uw sector',
    sector_placeholder: 'Selecteer uw sector',
    sectors: [
      { value: 'installatori',    label: 'Installateurs' },
      { value: 'elettricisti',    label: 'Elektriciens' },
      { value: 'idraulici',       label: 'Loodgieters' },
      { value: 'termoidraulici',  label: 'CV- en sanitairinstallateurs' },
      { value: 'pulizie',         label: 'Schoonmaak en facility' },
      { value: 'sicurezza',       label: 'Beveiliging en bewaking' },
      { value: 'edilizia',        label: 'Bouw' },
      { value: 'impianti',        label: 'Installaties' },
      { value: 'manutenzione',    label: 'Onderhoud' },
      { value: 'altro',           label: 'Andere sector' },
    ],
    submit: 'Schrijf u in',
    success: 'Inschrijving bevestigd! Controleer uw e-mail.',
    error: 'Er ging iets mis. Probeer het opnieuw.',
    privacy: 'Geen spam. Afmelden met één klik.',
  },
  ru: {
    title: 'Будьте в курсе',
    subtitle: 'Лучший контент об управлении выездными операциями, HR и технологиях для МСБ.',
    email_placeholder: 'Ваш email',
    sector_label: 'Ваш сектор',
    sector_placeholder: 'Выберите сектор',
    sectors: [
      { value: 'installatori',    label: 'Монтаж и обслуживание' },
      { value: 'elettricisti',    label: 'Электрики' },
      { value: 'idraulici',       label: 'Сантехники' },
      { value: 'termoidraulici',  label: 'Сантехники-теплотехники' },
      { value: 'pulizie',         label: 'Уборка и обслуживание зданий' },
      { value: 'sicurezza',       label: 'Охрана и безопасность' },
      { value: 'edilizia',        label: 'Строительство' },
      { value: 'impianti',        label: 'Инженерные системы' },
      { value: 'manutenzione',    label: 'Техобслуживание' },
      { value: 'altro',           label: 'Другой сектор' },
    ],
    submit: 'Подписаться',
    success: 'Подписка подтверждена! Проверьте email.',
    error: 'Что-то пошло не так. Попробуйте снова.',
    privacy: 'Без спама. Отписка в один клик.',
  },
  da: {
    title: 'Hold dig opdateret',
    subtitle: 'Få vores bedste indhold om tilrettelæggelse af arbejdet, personaleledelse og digitale værktøjer til små virksomheder.',
    email_placeholder: 'Din e-mail',
    sector_label: 'Din branche',
    sector_placeholder: 'Vælg din branche',
    sectors: [
      { value: 'installatori',    label: 'Installatører' },
      { value: 'elettricisti',    label: 'Elektrikere' },
      { value: 'idraulici',       label: 'VVS-installatører' },
      { value: 'termoidraulici',  label: 'VVS og varme' },
      { value: 'pulizie',         label: 'Rengøring og facility' },
      { value: 'sicurezza',       label: 'Sikkerhed og vagt' },
      { value: 'edilizia',        label: 'Byggeri' },
      { value: 'impianti',        label: 'Tekniske anlæg' },
      { value: 'manutenzione',    label: 'Vedligeholdelse' },
      { value: 'altro',           label: 'Anden branche' },
    ],
    submit: 'Tilmeld mig',
    success: 'Tilmelding bekræftet! Tjek din e-mail.',
    error: 'Noget gik galt. Prøv igen.',
    privacy: 'Ingen spam. Afmeld med ét klik.',
  },
  sv: {
    title: 'Håll dig uppdaterad',
    subtitle: 'Få vårt bästa innehåll om arbetsplanering, personalledning och digitala verktyg för småföretag.',
    email_placeholder: 'Din e-post',
    sector_label: 'Din bransch',
    sector_placeholder: 'Välj din bransch',
    sectors: [
      { value: 'installatori',    label: 'Installatörer' },
      { value: 'elettricisti',    label: 'Elektriker' },
      { value: 'idraulici',       label: 'Rörläggare' },
      { value: 'termoidraulici',  label: 'VVS och värme' },
      { value: 'pulizie',         label: 'Städning och fastighetsservice' },
      { value: 'sicurezza',       label: 'Säkerhet och bevakning' },
      { value: 'edilizia',        label: 'Bygg' },
      { value: 'impianti',        label: 'Tekniska installationer' },
      { value: 'manutenzione',    label: 'Underhåll' },
      { value: 'altro',           label: 'Annan bransch' },
    ],
    submit: 'Prenumerera',
    success: 'Prenumeration bekräftad! Kontrollera din e-post.',
    error: 'Något gick fel. Försök igen.',
    privacy: 'Ingen skräppost. Avsluta med ett klick.',
  },
  nb: {
    title: 'Hold deg oppdatert',
    subtitle: 'Få det beste innholdet vårt om tilrettelegging av arbeidet, personalledelse og digitale verktøy for små bedrifter.',
    email_placeholder: 'Din e-post',
    sector_label: 'Din bransje',
    sector_placeholder: 'Velg din bransje',
    sectors: [
      { value: 'installatori',    label: 'Installatører' },
      { value: 'elettricisti',    label: 'Elektrikere' },
      { value: 'idraulici',       label: 'Rørleggere' },
      { value: 'termoidraulici',  label: 'VVS og varme' },
      { value: 'pulizie',         label: 'Renhold og facility' },
      { value: 'sicurezza',       label: 'Sikkerhet og vakthold' },
      { value: 'edilizia',        label: 'Bygg og anlegg' },
      { value: 'impianti',        label: 'Tekniske anlegg' },
      { value: 'manutenzione',    label: 'Vedlikehold' },
      { value: 'altro',           label: 'Annen bransje' },
    ],
    submit: 'Meld meg på',
    success: 'Abonnement bekreftet! Sjekk e-posten din.',
    error: 'Noe gikk galt. Prøv igjen.',
    privacy: 'Ingen spam. Avslutt når som helst.',
  },
};

export default function NewsletterForm({
  locale,
  variant = 'default',
  onSuccess,
}: {
  locale: string;
  variant?: 'default' | 'compact';
  onSuccess?: () => void;
}) {
  const t = T[locale] ?? T.en;
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, sector: sector || undefined, locale }),
      });
      if (res.ok) {
        setStatus('success');
        onSuccess?.();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        padding: '1rem 1.25rem', borderRadius: '12px',
        background: 'rgba(34,181,115,0.12)', border: '1px solid rgba(34,181,115,0.3)',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22B573" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#0b1736', fontWeight: 500 }}>
          {t.success}
        </p>
      </div>
    );
  }

  const isCompact = variant === 'compact';

  return (
    <div>
      {!isCompact && (
        <>
          <h3 style={{ margin: '0 0 0.375rem', fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#0b1736' }}>
            {t.title}
          </h3>
          <p style={{ margin: '0 0 1.25rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
            {t.subtitle}
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {/* Selettore settore.
            🔴 `aria-label` non e' un di piu': l'unica etichetta visibile e' la <option>
            disabilitata che fa da segnaposto, e i segnaposto NON contano come nome
            accessibile. Senza, axe lo marca `select-name` con gravita' CRITICA — ed era
            su tutte e 18 le pagine provate, perche' questo modulo sta nel piede del sito.
            Si riusa la stringa gia' tradotta in 11 lingue invece di aggiungerne una nuova.
            (Audit EAA del 23/09/2026.) */}
        <select
          value={sector}
          aria-label={t.sector_placeholder}
          onChange={e => setSector(e.target.value)}
          style={{
            width: '100%', padding: '0.625rem 0.875rem', borderRadius: '10px',
            border: '1px solid #f7f9fc', background: '#fff', color: sector ? '#0b1736' : '#94a3b8',
            fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none',
          }}
        >
          <option value="" disabled hidden>{t.sector_placeholder}</option>
          {t.sectors.map(s => (
            <option key={s.value} value={s.value} style={{ color: '#0b1736' }}>{s.label}</option>
          ))}
        </select>

        {/* Email + submit row */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {/* Il segnaposto non e' un nome accessibile: si riusa la stringa gia'
              tradotta. (Audit EAA del 23/09/2026.) */}
          <input
            type="email"
            required
            aria-label={t.email_placeholder}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t.email_placeholder}
            style={{
              flex: '1 1 200px', padding: '0.625rem 0.875rem', borderRadius: '10px',
              border: '1px solid #f7f9fc', background: '#fff',
              fontFamily: 'var(--font-body)', fontSize: '0.875rem',
              outline: 'none', color: '#0b1736',
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '0.625rem 1.25rem', borderRadius: '9999px', border: 'none',
              background: 'linear-gradient(120deg,#15803d,#15803d 48%,#0e7c99)', color: '#fff', boxShadow: '0 6px 16px rgba(14,124,153,0.3)',
              fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 700,
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              opacity: status === 'loading' ? 0.7 : 1, whiteSpace: 'nowrap',
            }}
          >
            {status === 'loading' ? '...' : t.submit}
          </button>
        </div>

        {status === 'error' && (
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#ef4444', fontFamily: 'var(--font-body)' }}>
            {t.error}
          </p>
        )}

        <p style={{ margin: 0, fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-body)' }}>
          {t.privacy}
        </p>
      </form>
    </div>
  );
}
