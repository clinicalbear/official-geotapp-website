import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const TRIAL_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Inizia il Trial Gratuito di 14 Giorni - GeoTapp', description: 'Prova GeoTapp gratis per 14 giorni, senza carta di credito. Gestisci presenze, interventi e clienti dal primo giorno.' },
  en: { title: 'Start Your Free 14-Day Trial - GeoTapp', description: 'Try GeoTapp free for 14 days, no credit card required. Manage attendance, field jobs and clients from day one.' },
  de: { title: 'Kostenlosen 14-Tage-Test starten - GeoTapp', description: 'Testen Sie GeoTapp 14 Tage lang kostenlos, ohne Kreditkarte. Verwalten Sie Anwesenheit, Einsätze und Kunden ab dem ersten Tag.' },
  nl: { title: 'Start uw gratis proefperiode van 14 dagen - GeoTapp', description: 'Probeer GeoTapp 14 dagen gratis, geen creditcard vereist. Beheer aanwezigheid, opdrachten en klanten vanaf dag één.' },
  fr: { title: 'Commencez votre essai gratuit de 14 jours - GeoTapp', description: 'Essayez GeoTapp gratuitement pendant 14 jours, sans carte de crédit. Gérez présences, interventions et clients dès le premier jour.' },
  es: { title: 'Comienza tu prueba gratuita de 14 días - GeoTapp', description: 'Prueba GeoTapp gratis durante 14 días, sin tarjeta de crédito. Gestiona asistencia, intervenciones y clientes desde el primer día.' },
  pt: { title: 'Comece o seu teste gratuito de 14 dias - GeoTapp', description: 'Experimente o GeoTapp grátis durante 14 dias, sem cartão de crédito. Gerencie presenças, intervenções e clientes desde o primeiro dia.' },
  da: { title: 'Start din gratis 14-dages prøveperiode - GeoTapp', description: 'Prøv GeoTapp gratis i 14 dage, intet kreditkort krævet. Administrér fremmøde, opgaver og kunder fra dag ét.' },
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
