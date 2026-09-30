'use client';

import './l-page.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { DEFAULT_LOCALE, getLocaleFromPathname } from '@/lib/i18n/locale-routing';

import { useCart } from '@/store/cart';

const T: Record<string, Record<string, string>> = {
  it: { title: 'Pagamento riuscito', thanks: 'Grazie per aver scelto GeoTapp.', generating: 'Stiamo preparando il tuo account…', ready: "Il tuo account è pronto: manca solo l'attivazione.", email_sent: 'Ti abbiamo mandato la licenza per email.', check_inbox: 'Controlla la tua casella di posta.', back_home: 'Torna alla home', activate: "Attiva l'account", waiting: 'Un attimo…', unavailable: 'Link non disponibile', help: 'Hai dubbi? Scrivici', loading: 'Caricamento…', error_unknown: 'Errore sconosciuto dal server', error_connection: 'Errore di connessione.' },
  en: { title: 'Payment Successful!', thanks: 'Thank you for choosing GeoTapp.', generating: 'Generating your account...', ready: 'Your account is ready for activation!', email_sent: 'Licence sent via email!', check_inbox: 'Check your inbox.', back_home: 'Back to Home', activate: 'ACTIVATE ACCOUNT NOW', waiting: 'Please wait...', unavailable: 'Link unavailable', help: 'Questions? Contact us', loading: 'Loading...', error_unknown: 'Unknown server error', error_connection: 'Connection error.' },
  de: { title: 'Zahlung erfolgreich', thanks: 'Vielen Dank, dass Sie sich für GeoTapp entschieden haben.', generating: 'Ihr Konto wird vorbereitet…', ready: 'Ihr Konto ist bereit: Es fehlt nur noch die Aktivierung.', email_sent: 'Wir haben Ihnen die Lizenz per E-Mail geschickt.', check_inbox: 'Bitte prüfen Sie Ihren Posteingang.', back_home: 'Zurück zur Startseite', activate: 'Konto aktivieren', waiting: 'Einen Moment…', unavailable: 'Link nicht verfügbar', help: 'Fragen? Schreiben Sie uns', loading: 'Wird geladen…', error_unknown: 'Unbekannter Serverfehler', error_connection: 'Verbindungsfehler.' },
  fr: { title: 'Paiement réussi', thanks: 'Merci d\'avoir choisi GeoTapp.', generating: 'Nous préparons votre compte…', ready: 'Votre compte est prêt : il ne manque que l\'activation.', email_sent: 'Nous vous avons envoyé la licence par e-mail.', check_inbox: 'Vérifiez votre boîte de réception.', back_home: 'Retour à l\'accueil', activate: 'Activer le compte', waiting: 'Un instant…', unavailable: 'Lien indisponible', help: 'Une question ? Écrivez-nous', loading: 'Chargement…', error_unknown: 'Erreur serveur inconnue', error_connection: 'Erreur de connexion.' },
  es: { title: 'Pago realizado', thanks: 'Gracias por elegir GeoTapp.', generating: 'Estamos preparando tu cuenta…', ready: 'Tu cuenta está lista: solo falta la activación.', email_sent: 'Te hemos enviado la licencia por correo electrónico.', check_inbox: 'Revisa tu bandeja de entrada.', back_home: 'Volver al inicio', activate: 'Activar la cuenta', waiting: 'Un momento…', unavailable: 'Enlace no disponible', help: '¿Dudas? Escríbenos', loading: 'Cargando…', error_unknown: 'Error desconocido del servidor', error_connection: 'Error de conexión.' },
  nl: { title: 'Betaling gelukt', thanks: 'Bedankt dat u voor GeoTapp hebt gekozen.', generating: 'We maken uw account klaar…', ready: 'Uw account is klaar: alleen de activering ontbreekt nog.', email_sent: 'We hebben u de licentie per e-mail gestuurd.', check_inbox: 'Kijk in uw inbox.', back_home: 'Terug naar de home', activate: 'Activeer het account', waiting: 'Een ogenblik…', unavailable: 'Link niet beschikbaar', help: 'Twijfels? Schrijf ons', loading: 'Laden…', error_unknown: 'Onbekende fout van de server', error_connection: 'Verbindingsfout.' },
  pt: { title: 'Pagamento efetuado', thanks: 'Obrigado por escolher o GeoTapp.', generating: 'Estamos a preparar a sua conta…', ready: 'A sua conta está pronta: falta apenas a ativação.', email_sent: 'Enviámos-lhe a licença por e-mail.', check_inbox: 'Consulte a sua caixa de correio.', back_home: 'Voltar ao início', activate: 'Ativar a conta', waiting: 'Um momento…', unavailable: 'Ligação indisponível', help: 'Tem dúvidas? Escreva-nos', loading: 'A carregar…', error_unknown: 'Erro desconhecido do servidor', error_connection: 'Erro de ligação.' },
  da: { title: 'Betaling gennemført!', thanks: 'Tak, fordi du valgte GeoTapp.', generating: 'Din konto oprettes...', ready: 'Din konto er klar til aktivering!', email_sent: 'Licens sendt via e-mail!', check_inbox: 'Tjek din indbakke.', back_home: 'Tilbage til forsiden', activate: 'AKTIVÉR KONTO NU', waiting: 'Vent venligst...', unavailable: 'Link utilgængeligt', help: 'Spørgsmål? Kontakt os', loading: 'Indlæser...', error_unknown: 'Ukendt serverfejl', error_connection: 'Forbindelsesfejl.' },
  sv: { title: 'Betalningen lyckades!', thanks: 'Tack för att du valde GeoTapp.', generating: 'Ditt konto skapas...', ready: 'Ditt konto är redo att aktiveras!', email_sent: 'Licens skickad via e-post!', check_inbox: 'Kolla din inkorg.', back_home: 'Tillbaka till startsidan', activate: 'AKTIVERA KONTO NU', waiting: 'Vänta...', unavailable: 'Länk otillgänglig', help: 'Frågor? Kontakta oss', loading: 'Laddar...', error_unknown: 'Okänt serverfel', error_connection: 'Anslutningsfel.' },
  nb: { title: 'Betalingen er fullført!', thanks: 'Takk for at du valgte GeoTapp.', generating: 'Kontoen din opprettes...', ready: 'Kontoen din er klar til aktivering!', email_sent: 'Lisens sendt på e-post!', check_inbox: 'Sjekk innboksen din.', back_home: 'Tilbake til forsiden', activate: 'AKTIVER KONTO NÅ', waiting: 'Vent litt...', unavailable: 'Lenke utilgjengelig', help: 'Spørsmål? Kontakt oss', loading: 'Laster...', error_unknown: 'Ukjent serverfeil', error_connection: 'Tilkoblingsfeil.' },
  ru: { title: 'Оплата прошла успешно!', thanks: 'Спасибо, что выбрали GeoTapp.', generating: 'Создание вашего аккаунта...', ready: 'Ваш аккаунт готов к активации!', email_sent: 'Лицензия отправлена на email!', check_inbox: 'Проверьте вашу почту.', back_home: 'На главную', activate: 'АКТИВИРОВАТЬ АККАУНТ', waiting: 'Подождите...', unavailable: 'Ссылка недоступна', help: 'Вопросы? Свяжитесь с нами', loading: 'Загрузка...', error_unknown: 'Неизвестная ошибка сервера', error_connection: 'Ошибка соединения.' },
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const sessionId = searchParams.get('session_id');
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const t = T[locale] ?? T.en;

  const [loading, setLoading] = useState(true);
  const [inviteLink, setInviteLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { clearCart } = useCart();

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }

    clearCart();

    const saasUrl =
      process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com';
    fetch(`${saasUrl}/api/v1/purchase/activate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Origin: 'https://geotapp.com',
      },
      body: JSON.stringify({ session_id: sessionId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.emailOnly) {
          setInviteLink('EMAIL_ONLY');
        } else if (data.success && data.link) {
          setInviteLink(data.link);
        } else {
          console.error('Invite generation failed:', data.error);
          setError(data.error || t.error_unknown);
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(t.error_connection);
      })
      .finally(() => setLoading(false));
  }, [sessionId]);

  return (
    <div className="lp-l lp-success">
      <div className="card">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="ico">✓</div>

          <h1>{t.title}</h1>

          <div className="msg">
            <p>{t.thanks}</p>
            {loading && <p className="wait">{t.generating}</p>}
            {!loading && inviteLink && <p className="ready">{t.ready}</p>}
            {!loading && error && <p className="err">{error}</p>}
          </div>

          <div className="stack">
            {inviteLink === 'EMAIL_ONLY' ? (
              <>
                <div className="msg" style={{ textAlign: 'left' }}>
                  <p className="ready" style={{ fontWeight: 600 }}>{t.email_sent}</p>
                  <p>{t.check_inbox}</p>
                </div>
                <Link href="/" className="pill-mute">
                  {t.back_home}
                </Link>
              </>
            ) : inviteLink ? (
              <a href={inviteLink} className="pill-ok">
                {t.activate}
              </a>
            ) : (
              <button disabled={loading} className="pill-disabled">
                {loading ? t.waiting : t.unavailable}
              </button>
            )}

            {inviteLink !== 'EMAIL_ONLY' && (
              <a href="mailto:info@geotapp.com" className="pill-ghost">
                {t.help}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
