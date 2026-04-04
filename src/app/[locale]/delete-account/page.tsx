import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Request Account Deletion | GeoTapp',
    description:
      'Submit a request to delete your GeoTapp account and personal data. We process all requests within 30 days in compliance with GDPR.',
  },
  it: {
    title: 'Richiedi la cancellazione dell\'account | GeoTapp',
    description:
      'Invia una richiesta per cancellare il tuo account GeoTapp e i tuoi dati personali. Elaboriamo tutte le richieste entro 30 giorni in conformità al GDPR.',
  },
  de: {
    title: 'Kontolöschung beantragen | GeoTapp',
    description:
      'Stellen Sie einen Antrag zur Löschung Ihres GeoTapp-Kontos und Ihrer persönlichen Daten. Wir bearbeiten alle Anfragen innerhalb von 30 Tagen gemäß DSGVO.',
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
