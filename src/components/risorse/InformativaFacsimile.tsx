'use client';

import { useState } from 'react';
import { FileText } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import {
  buildFacsimilePrintHtml,
  infLocale,
  type InfLocale,
} from '@/lib/risorse/gps-lavoratori-ue/informativa';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface Copy {
  title: string; // usa {paese}
  desc: string;
  download: string;
  prompt: string;
  placeholder: string;
  btn: string;
  consent: string;
  success: string;
  error: string;
  footer: string; // piè di pagina del PDF
}

/**
 * Copy del blocco download in tutte le lingue del generatore (InfLocale). Le
 * locale del sito senza traduzione propria (en-us/gb/ie/ca/au) ripiegano su 'en'
 * via [infLocale]. Microcopy UI, non prosa marketing.
 */
const COPY: Record<InfLocale, Copy> = {
  it: {
    title: 'Scarica il fac-simile dell’informativa GPS per {paese}',
    desc: 'Modello di informativa privacy per la geolocalizzazione dei dipendenti, conforme all’art. 13 GDPR, con la base giuridica e l’autorità di controllo del Paese. Compila i campi in bianco e fallo verificare dal tuo consulente.',
    download: 'Scarica il fac-simile (PDF)',
    prompt: 'Vuoi anche le prossime guide pratiche su GPS e gestione del campo? Lascia l’email (facoltativo).',
    placeholder: 'La tua email',
    btn: 'Iscrivimi',
    consent: 'Niente spam, disiscrizione in un click.',
    success: 'Fatto, sei iscritto. Le prossime guide arrivano da info@geotapp.com.',
    error: 'Qualcosa non ha funzionato. Riprova.',
    footer: 'Bozza generata gratuitamente con GeoTapp',
  },
  en: {
    title: 'Download the free GPS privacy notice template for {paese}',
    desc: 'Employee geolocation privacy notice template, compliant with GDPR Art. 13, including the country’s legal basis and supervisory authority. Fill in the blank fields and have it checked by your advisor.',
    download: 'Download the template (PDF)',
    prompt: 'Want the next practical guides on GPS and field-team management too? Leave your email (optional).',
    placeholder: 'Your email',
    btn: 'Subscribe',
    consent: 'No spam, unsubscribe in one click.',
    success: 'Done, you’re subscribed. The next guides come from info@geotapp.com.',
    error: 'Something went wrong. Try again.',
    footer: 'Draft generated for free with GeoTapp',
  },
  de: {
    title: 'Kostenlose DSGVO-Vorlage zur GPS-Datenschutzerklärung für {paese} herunterladen',
    desc: 'Muster einer Datenschutzerklärung zur Standortverfolgung von Mitarbeitern, konform mit Art. 13 DSGVO, mit Rechtsgrundlage und Aufsichtsbehörde des Landes. Leere Felder ausfüllen und von Ihrem Berater prüfen lassen.',
    download: 'Vorlage herunterladen (PDF)',
    prompt: 'Möchten Sie auch die nächsten Praxis-Leitfäden zu GPS und Außendienst? E-Mail hinterlassen (optional).',
    placeholder: 'Ihre E-Mail',
    btn: 'Abonnieren',
    consent: 'Kein Spam, Abmeldung mit einem Klick.',
    success: 'Erledigt, Sie sind angemeldet. Die nächsten Leitfäden kommen von info@geotapp.com.',
    error: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
    footer: 'Kostenlos erstellter Entwurf mit GeoTapp',
  },
  fr: {
    title: 'Téléchargez le modèle gratuit d’information RGPD sur le GPS pour {paese}',
    desc: 'Modèle d’information sur la géolocalisation des salariés, conforme à l’art. 13 du RGPD, avec la base légale et l’autorité de contrôle du pays. Complétez les champs vides et faites-le vérifier par votre conseiller.',
    download: 'Télécharger le modèle (PDF)',
    prompt: 'Vous voulez aussi les prochains guides pratiques sur le GPS et la gestion des équipes terrain ? Laissez votre e-mail (facultatif).',
    placeholder: 'Votre e-mail',
    btn: 'S’inscrire',
    consent: 'Pas de spam, désinscription en un clic.',
    success: 'C’est fait, vous êtes inscrit. Les prochains guides viennent de info@geotapp.com.',
    error: 'Une erreur s’est produite. Réessayez.',
    footer: 'Brouillon généré gratuitement avec GeoTapp',
  },
  es: {
    title: 'Descarga la plantilla gratuita de aviso de privacidad GPS para {paese}',
    desc: 'Modelo de aviso de privacidad para la geolocalización de empleados, conforme al art. 13 del RGPD, con la base jurídica y la autoridad de control del país. Rellena los campos en blanco y hazlo revisar por tu asesor.',
    download: 'Descargar la plantilla (PDF)',
    prompt: '¿Quieres también las próximas guías prácticas sobre GPS y gestión de equipos de campo? Deja tu correo (opcional).',
    placeholder: 'Tu correo',
    btn: 'Suscribirme',
    consent: 'Sin spam, cancela en un clic.',
    success: 'Listo, estás suscrito. Las próximas guías llegan desde info@geotapp.com.',
    error: 'Algo salió mal. Inténtalo de nuevo.',
    footer: 'Borrador generado gratis con GeoTapp',
  },
  nl: {
    title: 'Download het gratis AVG-model voor de GPS-privacyverklaring voor {paese}',
    desc: 'Model privacyverklaring voor geolocatie van werknemers, conform art. 13 AVG, met de rechtsgrond en toezichthouder van het land. Vul de lege velden in en laat het controleren door je adviseur.',
    download: 'Download het model (PDF)',
    prompt: 'Wil je ook de volgende praktische gidsen over GPS en veldteams? Laat je e-mail achter (optioneel).',
    placeholder: 'Je e-mail',
    btn: 'Aanmelden',
    consent: 'Geen spam, uitschrijven in één klik.',
    success: 'Klaar, je bent aangemeld. De volgende gidsen komen van info@geotapp.com.',
    error: 'Er ging iets mis. Probeer opnieuw.',
    footer: 'Gratis concept gegenereerd met GeoTapp',
  },
  pt: {
    title: 'Baixe o modelo gratuito de aviso de privacidade GPS para {paese}',
    desc: 'Modelo de aviso de privacidade para a geolocalização de funcionários, conforme o art. 13 do RGPD, com a base jurídica e a autoridade de controlo do país. Preencha os campos em branco e mande verificar pelo seu consultor.',
    download: 'Baixar o modelo (PDF)',
    prompt: 'Também quer os próximos guias práticos sobre GPS e gestão de equipas no terreno? Deixe o seu e-mail (opcional).',
    placeholder: 'O seu e-mail',
    btn: 'Subscrever',
    consent: 'Sem spam, cancele com um clique.',
    success: 'Feito, está subscrito. Os próximos guias chegam de info@geotapp.com.',
    error: 'Algo correu mal. Tente novamente.',
    footer: 'Rascunho gerado gratuitamente com a GeoTapp',
  },
  da: {
    title: 'Hent den gratis GDPR-skabelon til GPS-privatlivspolitik for {paese}',
    desc: 'Skabelon til privatlivspolitik for geolokalisering af medarbejdere, i overensstemmelse med GDPR art. 13, med landets retsgrundlag og tilsynsmyndighed. Udfyld de tomme felter, og få den tjekket af din rådgiver.',
    download: 'Hent skabelonen (PDF)',
    prompt: 'Vil du også have de næste praktiske guides om GPS og styring af feltteams? Efterlad din e-mail (valgfrit).',
    placeholder: 'Din e-mail',
    btn: 'Tilmeld',
    consent: 'Ingen spam, afmeld med ét klik.',
    success: 'Færdig, du er tilmeldt. De næste guides kommer fra info@geotapp.com.',
    error: 'Noget gik galt. Prøv igen.',
    footer: 'Udkast genereret gratis med GeoTapp',
  },
  sv: {
    title: 'Ladda ner den kostnadsfria GDPR-mallen för GPS-integritetspolicy för {paese}',
    desc: 'Mall för integritetspolicy för geolokalisering av anställda, i enlighet med GDPR art. 13, med landets rättsliga grund och tillsynsmyndighet. Fyll i de tomma fälten och låt din rådgivare granska den.',
    download: 'Ladda ner mallen (PDF)',
    prompt: 'Vill du också ha nästa praktiska guider om GPS och hantering av fältteam? Lämna din e-post (valfritt).',
    placeholder: 'Din e-post',
    btn: 'Prenumerera',
    consent: 'Ingen spam, avsluta med ett klick.',
    success: 'Klart, du är anmäld. Nästa guider kommer från info@geotapp.com.',
    error: 'Något gick fel. Försök igen.',
    footer: 'Utkast genererat gratis med GeoTapp',
  },
  nb: {
    title: 'Last ned den gratis GDPR-malen for GPS-personvernerklæring for {paese}',
    desc: 'Mal for personvernerklæring for geolokalisering av ansatte, i samsvar med GDPR art. 13, med landets rettslige grunnlag og tilsynsmyndighet. Fyll ut de tomme feltene og få den sjekket av rådgiveren din.',
    download: 'Last ned malen (PDF)',
    prompt: 'Vil du også ha de neste praktiske guidene om GPS og styring av feltteam? Legg igjen e-posten din (valgfritt).',
    placeholder: 'Din e-post',
    btn: 'Abonner',
    consent: 'Ingen spam, meld deg av med ett klikk.',
    success: 'Ferdig, du er påmeldt. De neste guidene kommer fra info@geotapp.com.',
    error: 'Noe gikk galt. Prøv igjen.',
    footer: 'Utkast generert gratis med GeoTapp',
  },
  ru: {
    title: 'Скачайте бесплатный шаблон уведомления о конфиденциальности GPS (GDPR) для {paese}',
    desc: 'Шаблон уведомления о конфиденциальности для геолокации сотрудников, соответствующий ст. 13 GDPR, с правовым основанием и надзорным органом страны. Заполните пустые поля и проверьте у вашего консультанта.',
    download: 'Скачать шаблон (PDF)',
    prompt: 'Хотите получать следующие практические руководства по GPS и управлению полевыми командами? Оставьте email (необязательно).',
    placeholder: 'Ваш email',
    btn: 'Подписаться',
    consent: 'Без спама, отписка в один клик.',
    success: 'Готово, вы подписаны. Следующие руководства придут с info@geotapp.com.',
    error: 'Что-то пошло не так. Попробуйте снова.',
    footer: 'Черновик, созданный бесплатно с GeoTapp',
  },
};

interface Props {
  locale: string;
  countryName: string;
  authority: string;
  countryISO: string;
}

/**
 * Blocco per la scheda-paese: download GRATUITO del fac-simile dell'informativa
 * GPS per quel Paese, nella lingua della pagina (nessun cancello email), con la
 * richiesta email FACOLTATIVA mostrata SOTTO, dopo il download. Genera il PDF
 * on-the-fly via [buildFacsimilePrintHtml] → funziona per tutti i Paesi e tutte
 * le lingue, senza file statici né contenuto legale inventato.
 */
export default function InformativaFacsimile({ locale, countryName, authority, countryISO }: Props) {
  const inf = infLocale(locale);
  const t = COPY[inf] ?? COPY.en;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  /** Costruisce il fac-simile per Paese+lingua e apre la stampa (salva come PDF). */
  function download() {
    const html = buildFacsimilePrintHtml({
      locale: inf,
      countryName,
      authority,
      countryISO,
      footer: t.footer,
    });
    trackEvent('informativa_facsimile_download', { locale, paese: countryISO });
    const w = window.open('', '_blank');
    if (w) {
      w.document.open();
      w.document.write(html);
      w.document.close();
    }
  }

  /** Iscrizione newsletter FACOLTATIVA: NON blocca il download. */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    trackEvent('lead_magnet_submit', { magnet: 'informativa-gps', locale });
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale, leadMagnet: 'informativa-gps' }),
      });
      if (res.ok) {
        setStatus('success');
        trackEvent('lead_magnet_success', { magnet: 'informativa-gps', locale });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="my-4 border border-[rgba(14,14,12,.18)] bg-white p-8 text-center">
      <p className="text-lg font-bold text-[#0E0E0C]">{t.title.replace('{paese}', countryName)}</p>
      <p className="text-sm text-[#78836F] mt-2 max-w-md mx-auto">{t.desc}</p>

      {/* Download GRATUITO, nessun cancello email. */}
      <button
        onClick={download}
        className="b1"
        style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8, border: 0, cursor: 'pointer', background: 'var(--sky)', color: '#fff' }}
      >
        <FileText size={18} /> {t.download}
      </button>

      {/* Iscrizione FACOLTATIVA sotto, dopo il download. */}
      <div className="mt-6 pt-5 border-t border-[rgba(14,14,12,.14)] max-w-sm mx-auto">
        {status === 'success' ? (
          <p className="text-sm font-semibold text-[#5E7C1E]">{t.success}</p>
        ) : (
          <>
            <p className="text-xs text-[#78836F] mb-3">{t.prompt}</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 min-w-0 px-4 py-2.5 text-sm border border-[rgba(14,14,12,.2)] bg-white text-[#3B4237] placeholder:text-[#9AA294] outline-none focus:border-[var(--sky)] transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="shrink-0 px-5 py-2.5 text-sm font-semibold text-[#3B4237] bg-white border border-[rgba(14,14,12,.2)] hover:border-[var(--sky)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? '...' : t.btn}
              </button>
            </form>
            <p className="text-xs text-[#9AA294] mt-2">{t.consent}</p>
            {status === 'error' && <p className="text-xs text-red-500 mt-1">{t.error}</p>}
          </>
        )}
      </div>
    </div>
  );
}
