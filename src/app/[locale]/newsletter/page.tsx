import type { Metadata } from 'next';
import NewsletterSignup from '@/components/NewsletterSignup';
import { NEWSLETTER, linguaNewsletter } from '@/lib/newsletter/content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = NEWSLETTER[linguaNewsletter(locale)];
  const url = `https://geotapp.com/${locale}/newsletter/`;
  // Come per /survey/: titolo e descrizione social devono parlare della
  // newsletter, non del prodotto, altrimenti il link condiviso si annuncia da
  // solo come pubblicita' (vedi il difetto trovato sul sondaggio il 02/09/2026).
  return {
    title: { absolute: `${c.title} - GeoTapp` },
    description: c.intro,
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

export default async function NewsletterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="px-4 pb-20 pt-10">
      <NewsletterSignup locale={locale} />
    </main>
  );
}
