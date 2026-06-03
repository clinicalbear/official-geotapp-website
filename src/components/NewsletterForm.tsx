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
    subtitle: 'Ricevi i migliori contenuti su gestione operativa, HR e tecnologia per le PMI.',
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
    subtitle: 'Get the best content on field operations, HR and technology for SMBs.',
    email_placeholder: 'Your email',
    sector_label: 'Your sector',
    sector_placeholder: 'Select your sector',
    sectors: [
      { value: 'installatori',    label: 'Installation & Maintenance' },
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
    subtitle: 'Die besten Inhalte zu Außendienst, HR und Technologie für KMU.',
    email_placeholder: 'Ihre E-Mail',
    sector_label: 'Ihre Branche',
    sector_placeholder: 'Branche auswählen',
    sectors: [
      { value: 'installatori',    label: 'Installation & Wartung' },
      { value: 'elettricisti',    label: 'Elektriker' },
      { value: 'idraulici',       label: 'Klempner' },
      { value: 'termoidraulici',  label: 'Heizungsinstallateure' },
      { value: 'pulizie',         label: 'Reinigung & Facility' },
      { value: 'sicurezza',       label: 'Sicherheit & Überwachung' },
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
    subtitle: 'Le meilleur contenu sur la gestion opérationnelle, RH et technologie pour les PME.',
    email_placeholder: 'Votre e-mail',
    sector_label: 'Votre secteur',
    sector_placeholder: 'Sélectionnez votre secteur',
    sectors: [
      { value: 'installatori',    label: 'Installation & Maintenance' },
      { value: 'elettricisti',    label: 'Électriciens' },
      { value: 'idraulici',       label: 'Plombiers' },
      { value: 'termoidraulici',  label: 'Plombiers-Chauffagistes' },
      { value: 'pulizie',         label: 'Nettoyage & Facility' },
      { value: 'sicurezza',       label: 'Sécurité & Surveillance' },
      { value: 'edilizia',        label: 'BTP & Construction' },
      { value: 'impianti',        label: 'Installateurs & Techniciens' },
      { value: 'manutenzione',    label: 'Maintenance' },
      { value: 'altro',           label: 'Autre secteur' },
    ],
    submit: "S'abonner",
    success: 'Inscription confirmée ! Vérifiez votre e-mail.',
    error: 'Une erreur est survenue. Veuillez réessayer.',
    privacy: 'Pas de spam. Désabonnement en un clic.',
  },
  es: {
    title: 'Mantente actualizado',
    subtitle: 'El mejor contenido sobre gestión operativa, RRHH y tecnología para PYMEs.',
    email_placeholder: 'Tu email',
    sector_label: 'Tu sector',
    sector_placeholder: 'Selecciona tu sector',
    sectors: [
      { value: 'installatori',    label: 'Instalación & Mantenimiento' },
      { value: 'elettricisti',    label: 'Electricistas' },
      { value: 'idraulici',       label: 'Fontaneros' },
      { value: 'termoidraulici',  label: 'Fontaneros Calefactores' },
      { value: 'pulizie',         label: 'Limpieza & Facility' },
      { value: 'sicurezza',       label: 'Seguridad & Vigilancia' },
      { value: 'edilizia',        label: 'Construcción' },
      { value: 'impianti',        label: 'Instalaciones' },
      { value: 'manutenzione',    label: 'Mantenimiento' },
      { value: 'altro',           label: 'Otro sector' },
    ],
    submit: 'Suscribirse',
    success: '¡Suscripción confirmada! Revisa tu email.',
    error: 'Algo salió mal. Inténtalo de nuevo.',
    privacy: 'Sin spam. Cancela cuando quieras.',
  },
  pt: {
    title: 'Fique atualizado',
    subtitle: 'O melhor conteúdo sobre gestão operacional, RH e tecnologia para PMEs.',
    email_placeholder: 'O seu email',
    sector_label: 'O seu setor',
    sector_placeholder: 'Selecione o seu setor',
    sectors: [
      { value: 'installatori',    label: 'Instalação & Manutenção' },
      { value: 'elettricisti',    label: 'Eletricistas' },
      { value: 'idraulici',       label: 'Canalizadores' },
      { value: 'termoidraulici',  label: 'Técnicos de Aquecimento' },
      { value: 'pulizie',         label: 'Limpeza & Facility' },
      { value: 'sicurezza',       label: 'Segurança & Vigilância' },
      { value: 'edilizia',        label: 'Construção' },
      { value: 'impianti',        label: 'Instalações' },
      { value: 'manutenzione',    label: 'Manutenção' },
      { value: 'altro',           label: 'Outro setor' },
    ],
    submit: 'Subscrever',
    success: 'Subscrição confirmada! Verifique o seu email.',
    error: 'Algo correu mal. Tente novamente.',
    privacy: 'Sem spam. Cancele quando quiser.',
  },
  nl: {
    title: 'Blijf op de hoogte',
    subtitle: 'De beste content over operationeel management, HR en technologie voor het MKB.',
    email_placeholder: 'Uw e-mail',
    sector_label: 'Uw sector',
    sector_placeholder: 'Selecteer uw sector',
    sectors: [
      { value: 'installatori',    label: 'Installatie & Onderhoud' },
      { value: 'elettricisti',    label: 'Elektriciens' },
      { value: 'idraulici',       label: 'Loodgieters' },
      { value: 'termoidraulici',  label: 'CV-monteurs' },
      { value: 'pulizie',         label: 'Schoonmaak & Facility' },
      { value: 'sicurezza',       label: 'Beveiliging & Bewaking' },
      { value: 'edilizia',        label: 'Bouw' },
      { value: 'impianti',        label: 'Installateurs & Monteurs' },
      { value: 'manutenzione',    label: 'Onderhoud' },
      { value: 'altro',           label: 'Andere sector' },
    ],
    submit: 'Abonneren',
    success: 'Inschrijving bevestigd! Controleer uw e-mail.',
    error: 'Er is iets misgegaan. Probeer opnieuw.',
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
    subtitle: 'Det bedste indhold om feltdrift, HR og teknologi til SMV\'er.',
    email_placeholder: 'Din e-mail',
    sector_label: 'Din branche',
    sector_placeholder: 'Vælg din branche',
    sectors: [
      { value: 'installatori',    label: 'Installation & Service' },
      { value: 'elettricisti',    label: 'Elektrikere' },
      { value: 'idraulici',       label: 'VVS-installatører' },
      { value: 'termoidraulici',  label: 'VVS & Varme' },
      { value: 'pulizie',         label: 'Rengøring & Facility' },
      { value: 'sicurezza',       label: 'Sikkerhed & Overvågning' },
      { value: 'edilizia',        label: 'Byggeri' },
      { value: 'impianti',        label: 'Installatører & Teknikere' },
      { value: 'manutenzione',    label: 'Vedligeholdelse' },
      { value: 'altro',           label: 'Anden branche' },
    ],
    submit: 'Tilmeld',
    success: 'Tilmelding bekræftet! Tjek din e-mail.',
    error: 'Noget gik galt. Prøv igen.',
    privacy: 'Ingen spam. Afmeld med ét klik.',
  },
  sv: {
    title: 'Håll dig uppdaterad',
    subtitle: 'Det bästa innehållet om fältdrift, HR och teknik för SMF.',
    email_placeholder: 'Din e-post',
    sector_label: 'Din bransch',
    sector_placeholder: 'Välj din bransch',
    sectors: [
      { value: 'installatori',    label: 'Installation & Service' },
      { value: 'elettricisti',    label: 'Elektriker' },
      { value: 'idraulici',       label: 'Rörmokare' },
      { value: 'termoidraulici',  label: 'VVS-tekniker' },
      { value: 'pulizie',         label: 'Städning & Facility' },
      { value: 'sicurezza',       label: 'Säkerhet & Bevakning' },
      { value: 'edilizia',        label: 'Byggbranschen' },
      { value: 'impianti',        label: 'Installatörer & Tekniker' },
      { value: 'manutenzione',    label: 'Underhåll' },
      { value: 'altro',           label: 'Annan bransch' },
    ],
    submit: 'Prenumerera',
    success: 'Prenumeration bekräftad! Kontrollera din e-post.',
    error: 'Något gick fel. Försök igen.',
    privacy: 'Ingen skräppost. Avsluta när som helst.',
  },
  nb: {
    title: 'Hold deg oppdatert',
    subtitle: 'Det beste innholdet om feltoperasjoner, HR og teknologi for SMB.',
    email_placeholder: 'Din e-post',
    sector_label: 'Din bransje',
    sector_placeholder: 'Velg din bransje',
    sectors: [
      { value: 'installatori',    label: 'Installasjon & Service' },
      { value: 'elettricisti',    label: 'Elektrikere' },
      { value: 'idraulici',       label: 'Rørleggere' },
      { value: 'termoidraulici',  label: 'VVS-teknikere' },
      { value: 'pulizie',         label: 'Rengjøring & Facility' },
      { value: 'sicurezza',       label: 'Sikkerhet & Overvåkning' },
      { value: 'edilizia',        label: 'Bygg & Anlegg' },
      { value: 'impianti',        label: 'Installatører & Teknikere' },
      { value: 'manutenzione',    label: 'Vedlikehold' },
      { value: 'altro',           label: 'Annen bransje' },
    ],
    submit: 'Abonner',
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
        background: 'rgba(143,196,54,0.12)', border: '1px solid rgba(143,196,54,0.3)',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8FC436" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
        <p style={{ margin: 0, fontFamily: 'var(--font-inter,Inter,sans-serif)', fontSize: '0.9rem', color: '#0f172a', fontWeight: 500 }}>
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
          <h3 style={{ margin: '0 0 0.375rem', fontFamily: 'var(--font-poppins,Poppins,sans-serif)', fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>
            {t.title}
          </h3>
          <p style={{ margin: '0 0 1.25rem', fontFamily: 'var(--font-inter,Inter,sans-serif)', fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
            {t.subtitle}
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {/* Sector selector */}
        <select
          value={sector}
          onChange={e => setSector(e.target.value)}
          style={{
            width: '100%', padding: '0.625rem 0.875rem', borderRadius: '10px',
            border: '1px solid #e2e8f0', background: '#fff', color: sector ? '#0f172a' : '#94a3b8',
            fontFamily: 'var(--font-inter,Inter,sans-serif)', fontSize: '0.875rem', outline: 'none',
          }}
        >
          <option value="" disabled hidden>{t.sector_placeholder}</option>
          {t.sectors.map(s => (
            <option key={s.value} value={s.value} style={{ color: '#0f172a' }}>{s.label}</option>
          ))}
        </select>

        {/* Email + submit row */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t.email_placeholder}
            style={{
              flex: '1 1 200px', padding: '0.625rem 0.875rem', borderRadius: '10px',
              border: '1px solid #e2e8f0', background: '#fff',
              fontFamily: 'var(--font-inter,Inter,sans-serif)', fontSize: '0.875rem',
              outline: 'none', color: '#0f172a',
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '0.625rem 1.25rem', borderRadius: '9999px', border: 'none',
              background: 'linear-gradient(120deg,#5a9e2a,#3a9e6f 48%,#2a8fc4)', color: '#fff', boxShadow: '0 6px 16px rgba(42,143,196,0.3)',
              fontFamily: 'var(--font-inter,Inter,sans-serif)', fontSize: '0.875rem', fontWeight: 700,
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              opacity: status === 'loading' ? 0.7 : 1, whiteSpace: 'nowrap',
            }}
          >
            {status === 'loading' ? '...' : t.submit}
          </button>
        </div>

        {status === 'error' && (
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#ef4444', fontFamily: 'var(--font-inter,Inter,sans-serif)' }}>
            {t.error}
          </p>
        )}

        <p style={{ margin: 0, fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-inter,Inter,sans-serif)' }}>
          {t.privacy}
        </p>
      </form>
    </div>
  );
}
