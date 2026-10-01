import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Request Account Deletion | GeoTapp',
    description:
      'Submit a request to delete your GeoTapp account and personal data. We handle every request within 30 days, as the GDPR requires.',
  },
  it: {
    title: 'Richiedi la cancellazione dell\'account | GeoTapp',
    description:
      'Invia una richiesta per cancellare il tuo account GeoTapp e i tuoi dati personali. Le gestiamo entro 30 giorni, come prevede il GDPR.',
  },
  de: {
    title: 'Kontolöschung beantragen | GeoTapp',
    description:
      'Stellen Sie einen Antrag zur Löschung Ihres GeoTapp-Kontos und Ihrer persönlichen Daten. Wir bearbeiten alle Anfragen innerhalb von 30 Tagen gemäß DSGVO.',
  },
  fr: {
    title: 'Demander la suppression du compte | GeoTapp',
    description:
      'Envoyez une demande pour supprimer votre compte GeoTapp et vos données personnelles. Nous traitons chaque demande sous 30 jours, comme le prévoit le RGPD.',
  },
  es: {
    title: 'Solicitar la eliminación de la cuenta | GeoTapp',
    description:
      'Envía una solicitud para eliminar tu cuenta de GeoTapp y tus datos personales. Gestionamos cada solicitud en un plazo de 30 días, como prevé el RGPD.',
  },
  pt: {
    title: 'Pedir a eliminação da conta | GeoTapp',
    description:
      'Envie um pedido para eliminar a sua conta GeoTapp e os seus dados pessoais. Tratamos cada pedido no prazo de 30 dias, como prevê o RGPD.',
  },
  da: {
    title: 'Anmod om sletning af konto | GeoTapp',
    description:
      'Send en anmodning om at slette din GeoTapp-konto og dine personoplysninger. Vi behandler hver anmodning inden for 30 dage, som GDPR foreskriver.',
  },
  sv: {
    title: 'Begär radering av konto | GeoTapp',
    description:
      'Skicka en begäran om att radera ditt GeoTapp-konto och dina personuppgifter. Vi hanterar varje begäran inom 30 dagar, som GDPR föreskriver.',
  },
  nb: {
    title: 'Be om sletting av kontoen | GeoTapp',
    description:
      'Send en forespørsel om å slette GeoTapp-kontoen din og personopplysningene dine. Vi behandler hver forespørsel innen 30 dager, slik GDPR krever.',
  },
  nl: {
    title: 'Accountverwijdering aanvragen | GeoTapp',
    description:
      'Dien een verzoek in om uw GeoTapp-account en uw persoonsgegevens te verwijderen. We behandelen elk verzoek binnen 30 dagen, zoals de AVG voorschrijft.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale] ?? META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/delete-account/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/delete-account/`,
      type: 'website',
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../delete-account/page';
