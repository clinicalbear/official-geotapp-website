import type { Metadata } from 'next';
import SurveyForm from '@/components/SurveyForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  // noindex: è un form (contenuto thin), il traffico arriva dal link condiviso, non dalla SERP.
  return {
    title: { absolute: 'GeoTapp' },
    robots: { index: false, follow: true },
    alternates: { canonical: `https://geotapp.com/${locale}/survey/` },
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
