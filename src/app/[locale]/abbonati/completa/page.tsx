import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const COMPLETA_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Completa l’abbonamento - GeoTapp', description: 'Attiva il tuo abbonamento GeoTapp: partita IVA, condizioni e pagamento.' },
  en: { title: 'Complete your subscription - GeoTapp', description: 'Activate your GeoTapp subscription: VAT number, terms and payment.' },
  de: { title: 'Abonnement abschließen - GeoTapp', description: 'Aktivieren Sie Ihr GeoTapp-Abonnement: USt-IdNr., Bedingungen und Zahlung.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = COMPLETA_META[locale] ?? COMPLETA_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    robots: { index: false, follow: false },
    alternates: buildLocaleAlternates(locale, '/abbonati/completa/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/abbonati/completa/`,
      type: 'website',
      title: meta.title,
      description: meta.description,
    },
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../../abbonati/completa/page';
