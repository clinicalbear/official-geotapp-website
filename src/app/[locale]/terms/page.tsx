

import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const TERMS_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Termini e Condizioni | GeoTapp', description: 'Condizioni generali di servizio GeoTapp: utilizzo della piattaforma, abbonamenti, responsabilità e diritti degli utenti.' },
  en: { title: 'Terms & Conditions | GeoTapp', description: 'GeoTapp general terms of service: platform usage, subscriptions, liability and user rights.' },
  de: { title: 'Allgemeine Geschäftsbedingungen | GeoTapp', description: 'Allgemeine Geschäftsbedingungen von GeoTapp: Plattformnutzung, Abonnements, Haftung und Benutzerrechte.' },
  fr: { title: 'Conditions Générales | GeoTapp', description: 'Conditions générales de service GeoTapp : utilisation de la plateforme, abonnements, responsabilité et droits des utilisateurs.' },
  es: { title: 'Términos y Condiciones | GeoTapp', description: 'Condiciones generales de servicio de GeoTapp: uso de la plataforma, suscripciones, responsabilidad y derechos de los usuarios.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = TERMS_META[locale] ?? TERMS_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    robots: { index: true, follow: true },
    alternates: buildLocaleAlternates(locale, '/terms'),
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../terms/page';
