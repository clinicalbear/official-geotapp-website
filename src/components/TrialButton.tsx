'use client';

import PolicyConsentField from '@/components/PolicyConsentField';
import { buildPolicyAcceptancePayload } from '@/lib/policyAcceptance';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { DEFAULT_LOCALE, getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';

interface TrialButtonProps {
  priceId: string;
  productName: string;
  productKey?: string;
  className?: string;
  children: React.ReactNode;
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const T: Record<string, { consent: string; prompt: string; invalid: string; loading: string; error: string }> = {
  it: { consent: "Per continuare devi accettare i Termini e dichiarare di aver letto l'Informativa Privacy.", prompt: 'Inserisci la tua email per attivare la prova gratuita', invalid: 'Inserisci un indirizzo email valido.', loading: 'Caricamento...', error: "Si è verificato un errore. Riprova." },
  en: { consent: 'You must accept the Terms and confirm you have read the Privacy Policy to continue.', prompt: 'Enter your email to start the free trial', invalid: 'Please enter a valid email address.', loading: 'Loading...', error: 'An error occurred. Please try again.' },
  de: { consent: 'Sie müssen die AGB akzeptieren und bestätigen, dass Sie die Datenschutzerklärung gelesen haben.', prompt: 'Geben Sie Ihre E-Mail ein, um die kostenlose Testphase zu starten', invalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.', loading: 'Laden...', error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' },
  fr: { consent: 'Vous devez accepter les Conditions et confirmer avoir lu la Politique de confidentialité.', prompt: 'Entrez votre email pour démarrer l\'essai gratuit', invalid: 'Veuillez entrer une adresse email valide.', loading: 'Chargement...', error: 'Une erreur est survenue. Veuillez réessayer.' },
  es: { consent: 'Debes aceptar los Términos y confirmar que has leído la Política de Privacidad.', prompt: 'Introduce tu email para iniciar la prueba gratuita', invalid: 'Introduce una dirección de email válida.', loading: 'Cargando...', error: 'Se ha producido un error. Inténtalo de nuevo.' },
  nl: { consent: 'U moet de Voorwaarden accepteren en bevestigen dat u het Privacybeleid hebt gelezen.', prompt: 'Voer uw e-mail in om de gratis proefperiode te starten', invalid: 'Voer een geldig e-mailadres in.', loading: 'Laden...', error: 'Er is een fout opgetreden. Probeer het opnieuw.' },
  pt: { consent: 'Deve aceitar os Termos e confirmar que leu a Política de Privacidade.', prompt: 'Insira o seu email para iniciar o teste gratuito', invalid: 'Insira um endereço de email válido.', loading: 'A carregar...', error: 'Ocorreu um erro. Tente novamente.' },
};

function inferProductKey(productName: string) {
  const lowerName = productName.toLowerCase();
  if (lowerName.includes('flow')) return 'GEOTAPP_FLOW';
  if (lowerName.includes('timet') || lowerName.includes('app'))
    return 'GEOTAPP_APP';
  return undefined;
}

export default function TrialButton({
  priceId,
  productName,
  productKey,
  className,
  children,
}: TrialButtonProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyRead, setPrivacyRead] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const t = T[locale] ?? T.en;

  const handleClick = async () => {
    if (!termsAccepted || !privacyRead) {
      alert(t.consent);
      return;
    }

    try {
      setLoading(true);

      let resolvedEmail = email;
      if (!resolvedEmail) {
        resolvedEmail = (
          window.prompt(t.prompt) || ''
        ).trim();
        if (!resolvedEmail) {
          setLoading(false);
          return;
        }
        if (!emailRegex.test(resolvedEmail)) {
          alert(t.invalid);
          setLoading(false);
          return;
        }
        setEmail(resolvedEmail);
      }

      const resolvedProductKey = productKey || inferProductKey(productName);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com'}/api/v1/checkout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: [
              {
                stripePriceId: priceId,
                name: productName,
                productKey: resolvedProductKey,
                licenseType: 'STANDARD',
                metadata: {
                  product_key: resolvedProductKey,
                  license_type: 'STANDARD',
                },
              },
            ],
            email: resolvedEmail,
            ...buildPolicyAcceptancePayload(),
          }),
        },
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <PolicyConsentField
        termsAccepted={termsAccepted}
        privacyRead={privacyRead}
        onTermsAcceptedChange={setTermsAccepted}
        onPrivacyReadChange={setPrivacyRead}
        compact
      />
      <button
        onClick={handleClick}
        disabled={loading || !termsAccepted || !privacyRead}
        className={className}
      >
        {loading ? t.loading : children}
      </button>
    </div>
  );
}
