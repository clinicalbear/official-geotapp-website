import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const TRIAL_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Inizia il Trial Gratuito di 14 Giorni — GeoTapp', description: 'Prova GeoTapp gratis per 14 giorni, senza carta di credito. Gestisci presenze, interventi e clienti dal primo giorno.' },
  en: { title: 'Start Your Free 14-Day Trial — GeoTapp', description: 'Try GeoTapp free for 14 days, no credit card required. Manage attendance, field jobs and clients from day one.' },
  de: { title: 'Kostenlosen 14-Tage-Test starten — GeoTapp', description: 'Testen Sie GeoTapp 14 Tage lang kostenlos, ohne Kreditkarte. Verwalten Sie Anwesenheit, Einsätze und Kunden ab dem ersten Tag.' },
  nl: { title: 'Start uw gratis proefperiode van 14 dagen — GeoTapp', description: 'Probeer GeoTapp 14 dagen gratis, geen creditcard vereist. Beheer aanwezigheid, opdrachten en klanten vanaf dag één.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = TRIAL_META[locale] ?? TRIAL_META.it;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/trial/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/trial/`,
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
export { default } from '../../trial/page';
