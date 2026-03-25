import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const DEMO_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Prenota una Demo Gratuita di GeoTapp — 30 Minuti | GeoTapp', description: 'Scopri come GeoTapp elimina le contestazioni sulle ore e rende ogni intervento documentato. Demo gratuita di 30 minuti con il nostro team.' },
  en: { title: 'Book a Free GeoTapp Demo — 30 Minutes | GeoTapp', description: 'See how GeoTapp stops hour disputes and makes every field job verifiable. Free 30-minute demo with our team.' },
  de: { title: 'Kostenlose GeoTapp-Demo buchen — 30 Minuten | GeoTapp', description: 'Entdecken Sie, wie GeoTapp Stundenkonflikte beendet und jeden Außendiensteinsatz dokumentierbar macht. Kostenlose 30-Minuten-Demo.' },
  fr: { title: 'Réserver une Démo Gratuite GeoTapp — 30 Minutes | GeoTapp', description: 'Découvrez comment GeoTapp élimine les litiges d\'heures et rend chaque intervention vérifiable. Démo gratuite de 30 minutes.' },
  es: { title: 'Reservar una Demo Gratuita de GeoTapp — 30 Minutos | GeoTapp', description: 'Descubre cómo GeoTapp elimina las disputas de horas y hace verificable cada intervención. Demo gratuita de 30 minutos.' },
  pt: { title: 'Agendar Demo Gratuita do GeoTapp — 30 Minutos | GeoTapp', description: 'Veja como o GeoTapp elimina conflitos de horas e torna cada intervenção verificável. Demo gratuita de 30 minutos.' },
  nl: { title: 'Gratis GeoTapp Demo Boeken — 30 Minuten | GeoTapp', description: 'Ontdek hoe GeoTapp uurconflicten beëindigt en elke buitendienst opdracht verifieerbaar maakt. Gratis 30-minuten demo.' },
  ru: { title: 'Записаться на бесплатное демо GeoTapp — 30 минут | GeoTapp', description: 'Узнайте, как GeoTapp устраняет споры по часам и делает каждый выезд верифицируемым. Бесплатное 30-минутное демо.' },
  da: { title: 'Book Gratis GeoTapp Demo — 30 Minutter | GeoTapp', description: 'Se hvordan GeoTapp stopper timetvister og gør hvert feltjob verificerbart. Gratis 30-minutters demo.' },
  sv: { title: 'Boka Gratis GeoTapp Demo — 30 Minuter | GeoTapp', description: 'Se hur GeoTapp stoppar arbetstidstvister och gör varje fältuppdrag verifierbart. Gratis 30-minuters demo.' },
  nb: { title: 'Bestill Gratis GeoTapp Demo — 30 Minutter | GeoTapp', description: 'Se hvordan GeoTapp stopper timekonflikter og gjør hvert feltoppdrag verifiserbart. Gratis 30-minutters demo.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = DEMO_META[locale] ?? DEMO_META.it;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/demo/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/demo/`,
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
export { default } from '../../demo/page';
