import type { Metadata } from 'next';
import SurveyForm from '@/components/SurveyForm';
import { SURVEY, type SurveyLocale } from '@/lib/survey/content';

/** Il locale del sito (anche en-gb, en-us) mappato sulle 11 lingue del sondaggio. */
function linguaSondaggio(locale: string): SurveyLocale {
  const lc = (locale || 'en').toLowerCase();
  if (lc in SURVEY) return lc as SurveyLocale;
  const base = lc.split('-')[0];
  return (base in SURVEY ? base : 'en') as SurveyLocale;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = SURVEY[linguaSondaggio(locale)];
  const url = `https://geotapp.com/${locale}/survey/`;
  // 🔴 L'anteprima social DEVE parlare del sondaggio, non del prodotto. Fino al
  // 02/09/2026 questa pagina ereditava l'openGraph del sito ("GeoTapp - Field Work
  // Verification Platform" più una descrizione commerciale, in inglese per tutte e
  // 11 le lingue): ogni condivisione del questionario si presentava come una
  // pubblicità, proprio nei gruppi dove la pubblicità è vietata.
  return {
    title: { absolute: 'GeoTapp' },
    robots: { index: false, follow: true },
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: c.title,
      description: c.intro,
      images: [{ url: 'https://geotapp.com/og-default.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.intro,
      images: ['https://geotapp.com/og-default.png'],
    },
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

export default async function SurveyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="px-4 pb-20 pt-5">
      <SurveyForm locale={locale} />
    </main>
  );
}
