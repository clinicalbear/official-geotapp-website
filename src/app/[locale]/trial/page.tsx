import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const TRIAL_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Prova GeoTapp gratis per 14 giorni | GeoTapp', description: 'Prova GeoTapp gratis per 14 giorni, senza carta di credito: timbrature con posizione, foto di prova e report che il cliente verifica da solo, dal primo giorno.' },
  en: { title: 'Try GeoTapp free for 14 days | GeoTapp', description: 'Try GeoTapp free for 14 days, no credit card required: clock-ins with location, proof photos and reports the client verifies alone, from day one.' },
  de: { title: 'Kostenlosen 14-Tage-Test starten - GeoTapp', description: 'Testen Sie GeoTapp 14 Tage kostenlos, ohne Kreditkarte: Stempeln mit Standort, Nachweisfotos und Berichte, die der Kunde selbst prüft, vom ersten Tag an.' },
  nl: { title: 'Probeer GeoTapp 14 dagen gratis | GeoTapp', description: 'Probeer GeoTapp 14 dagen gratis, zonder creditcard: registraties met locatie, bewijsfoto\'s en rapporten die de klant zelf controleert, vanaf de eerste dag.' },
  fr: { title: 'Essayez GeoTapp gratuitement pendant 14 jours | GeoTapp', description: 'Essayez GeoTapp gratuitement 14 jours, sans carte bancaire : pointages avec position, photos de preuve et rapports que le client vérifie seul.' },
  es: { title: 'Prueba GeoTapp gratis durante 14 días | GeoTapp', description: 'Prueba GeoTapp gratis 14 días, sin tarjeta de crédito: fichajes con ubicación, fotos de prueba e informes que el cliente verifica por sí mismo, desde el primer día.' },
  pt: { title: 'Experimente o GeoTapp grátis durante 14 dias | GeoTapp', description: 'Experimente o GeoTapp grátis 14 dias, sem cartão: picagens com localização, fotos de prova e relatórios que o cliente verifica sozinho, desde o primeiro dia.' },
  da: { title: 'Prøv GeoTapp gratis i 14 dage | GeoTapp', description: 'Prøv GeoTapp gratis i 14 dage uden kreditkort: stemplinger med position, bevisfotos og rapporter, som kunden selv verificerer, fra første dag.' },
  sv: { title: 'Starta din gratis 14-dagars provperiod - GeoTapp', description: 'Prova GeoTapp gratis i 14 dagar, inget kreditkort krävs. Hantera närvaro, uppdrag och kunder från dag ett.' },
  nb: { title: 'Start din gratis 14-dagers prøveperiode - GeoTapp', description: 'Prøv GeoTapp gratis i 14 dager, intet kredittkort nødvendig. Administrer oppmøte, oppdrag og kunder fra dag én.' },
  ru: { title: 'Начните бесплатный 14-дневный пробный период - GeoTapp', description: 'Попробуйте GeoTapp бесплатно 14 дней, без кредитной карты. Управляйте посещаемостью, выездами и клиентами с первого дня.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = TRIAL_META[locale] ?? TRIAL_META.en;
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
