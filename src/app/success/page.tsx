'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { DEFAULT_LOCALE, getLocaleFromPathname } from '@/lib/i18n/locale-routing';

import { useCart } from '@/store/cart';

const T: Record<string, Record<string, string>> = {
  it: { title: 'Pagamento Riuscito!', thanks: 'Grazie per aver scelto GeoTapp.', generating: 'Generazione Account in corso...', ready: "Il tuo account è pronto per l'attivazione!", email_sent: 'Licenza inviata via Email!', check_inbox: 'Controlla la tua casella di posta.', back_home: 'Torna alla Home', activate: 'ATTIVA ACCOUNT ORA', waiting: 'Attendi...', unavailable: 'Link non disponibile', help: 'Hai dubbi? Contattaci', loading: 'Caricamento...', error_unknown: 'Errore sconosciuto dal server', error_connection: 'Errore di connessione.' },
  en: { title: 'Payment Successful!', thanks: 'Thank you for choosing GeoTapp.', generating: 'Generating your account...', ready: 'Your account is ready for activation!', email_sent: 'Licence sent via email!', check_inbox: 'Check your inbox.', back_home: 'Back to Home', activate: 'ACTIVATE ACCOUNT NOW', waiting: 'Please wait...', unavailable: 'Link unavailable', help: 'Questions? Contact us', loading: 'Loading...', error_unknown: 'Unknown server error', error_connection: 'Connection error.' },
  de: { title: 'Zahlung erfolgreich!', thanks: 'Vielen Dank, dass Sie sich für GeoTapp entschieden haben.', generating: 'Konto wird erstellt...', ready: 'Ihr Konto ist bereit zur Aktivierung!', email_sent: 'Lizenz per E-Mail gesendet!', check_inbox: 'Überprüfen Sie Ihren Posteingang.', back_home: 'Zurück zur Startseite', activate: 'KONTO JETZT AKTIVIEREN', waiting: 'Bitte warten...', unavailable: 'Link nicht verfügbar', help: 'Fragen? Kontaktieren Sie uns', loading: 'Laden...', error_unknown: 'Unbekannter Serverfehler', error_connection: 'Verbindungsfehler.' },
  fr: { title: 'Paiement réussi !', thanks: 'Merci d\'avoir choisi GeoTapp.', generating: 'Génération de votre compte...', ready: 'Votre compte est prêt à être activé !', email_sent: 'Licence envoyée par email !', check_inbox: 'Vérifiez votre boîte de réception.', back_home: 'Retour à l\'accueil', activate: 'ACTIVER LE COMPTE', waiting: 'Patientez...', unavailable: 'Lien indisponible', help: 'Des questions ? Contactez-nous', loading: 'Chargement...', error_unknown: 'Erreur serveur inconnue', error_connection: 'Erreur de connexion.' },
  es: { title: '¡Pago exitoso!', thanks: 'Gracias por elegir GeoTapp.', generating: 'Generando tu cuenta...', ready: '¡Tu cuenta está lista para activarse!', email_sent: '¡Licencia enviada por email!', check_inbox: 'Revisa tu bandeja de entrada.', back_home: 'Volver al inicio', activate: 'ACTIVAR CUENTA AHORA', waiting: 'Espera...', unavailable: 'Enlace no disponible', help: '¿Dudas? Contáctanos', loading: 'Cargando...', error_unknown: 'Error desconocido del servidor', error_connection: 'Error de conexión.' },
  nl: { title: 'Betaling geslaagd!', thanks: 'Bedankt dat u voor GeoTapp hebt gekozen.', generating: 'Account wordt aangemaakt...', ready: 'Uw account is klaar voor activering!', email_sent: 'Licentie per e-mail verzonden!', check_inbox: 'Controleer uw inbox.', back_home: 'Terug naar Home', activate: 'ACCOUNT NU ACTIVEREN', waiting: 'Even geduld...', unavailable: 'Link niet beschikbaar', help: 'Vragen? Neem contact op', loading: 'Laden...', error_unknown: 'Onbekende serverfout', error_connection: 'Verbindingsfout.' },
  pt: { title: 'Pagamento realizado!', thanks: 'Obrigado por escolher o GeoTapp.', generating: 'A gerar a sua conta...', ready: 'A sua conta está pronta para ativação!', email_sent: 'Licença enviada por email!', check_inbox: 'Verifique a sua caixa de entrada.', back_home: 'Voltar ao início', activate: 'ATIVAR CONTA AGORA', waiting: 'Aguarde...', unavailable: 'Link indisponível', help: 'Dúvidas? Contacte-nos', loading: 'A carregar...', error_unknown: 'Erro desconhecido do servidor', error_connection: 'Erro de ligação.' },
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
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, rgba(73, 226, 214, 0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(106, 125, 252, 0.14), transparent 40%), #0a0d1b',
      }}
    >
      <motion.div
        className="p-12 rounded-lg max-w-md w-full text-center"
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.28)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'rgba(106,125,252,0.35)' }}
        >
          <span className="text-4xl" style={{ color: '#e8ecf8' }}>
            ✓
          </span>
        </div>

        <h1
          className="text-3xl font-bold mb-4 font-display"
          style={{ color: '#e8ecf8' }}
        >
          {t.title}
        </h1>

        <div className="mb-6" style={{ color: '#cdd2e8' }}>
          <p>{t.thanks}</p>
          {loading && (
            <p className="mt-4 text-yellow-400 animate-pulse">
              {t.generating}
            </p>
          )}

          {!loading && inviteLink && (
            <p className="mt-4 text-emerald-300">
              {t.ready}
            </p>
          )}

          {!loading && error && <p className="mt-4 text-red-400">{error}</p>}
        </div>

        {inviteLink === 'EMAIL_ONLY' ? (
          <div className="space-y-4">
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-200">
              <p className="font-bold">{t.email_sent}</p>
              <p className="text-sm opacity-80">
                {t.check_inbox}
              </p>
            </div>
            <Link
              href="/"
              className="block px-6 py-3 font-medium rounded-lg transition"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#e8ecf8',
              }}
            >
              {t.back_home}
            </Link>
          </div>
        ) : inviteLink ? (
          <a
            href={inviteLink}
            className="block px-6 py-3 font-medium rounded-lg transition transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #6a7dfc, #49e2d6)',
              color: '#0b0f1f',
              boxShadow: '0 0 20px rgba(73, 226, 214, 0.4)',
            }}
          >
            {t.activate}
          </a>
        ) : (
          <button
            disabled={loading}
            className="block w-full px-6 py-3 font-medium rounded-lg transition opacity-50 cursor-not-allowed"
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: '#e8ecf8',
            }}
          >
            {loading ? t.waiting : t.unavailable}
          </button>
        )}

        {inviteLink !== 'EMAIL_ONLY' && (
          <a
            href="mailto:info@geotapp.com"
            className="block px-6 py-3 font-medium rounded-lg transition"
            style={{
              color: '#e8ecf8',
              border: '1px solid rgba(255,255,255,0.4)',
            }}
          >
            {t.help}
          </a>
        )}
      </motion.div>
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
