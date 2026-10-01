import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const DEMO_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Prenota una Demo Gratuita di GeoTapp, 30 Minuti | GeoTapp', description: 'Scopri come GeoTapp elimina le contestazioni sulle ore e rende ogni intervento documentato. Demo gratuita di 30 minuti con il nostro team.' },
  en: { title: 'Book a Free GeoTapp Demo, 30 Minutes | GeoTapp', description: 'See how GeoTapp stops hour disputes and makes every field job verifiable. Free 30-minute demo with our team.' },
  de: { title: 'Kostenlose GeoTapp-Demo buchen, 30 Minuten | GeoTapp', description: 'Sehen Sie, wie GeoTapp Streit um Arbeitsstunden beendet und jeden Einsatz im Außendienst prüfbar macht. Kostenlose 30-Minuten-Demo mit unserem Team.' },
  fr: { title: 'Réserver une démo gratuite de GeoTapp, 30 minutes | GeoTapp', description: 'Découvrez comment GeoTapp met fin aux litiges sur les heures et rend chaque intervention vérifiable. Démo gratuite de 30 minutes avec notre équipe.' },
  es: { title: 'Reserva una demo gratuita de GeoTapp, 30 minutos | GeoTapp', description: 'Descubre cómo GeoTapp reduce las disputas sobre las horas y hace verificable cada intervención. Demo gratuita de 30 minutos con nuestro equipo.' },
  pt: { title: 'Agende uma demo gratuita do GeoTapp, 30 minutos | GeoTapp', description: 'Veja como o GeoTapp reduz as contestações sobre as horas e torna cada intervenção verificável. Demo gratuita de 30 minutos com a nossa equipa.' },
  nl: { title: 'Boek een gratis GeoTapp-demo, 30 minuten | GeoTapp', description: 'Ontdek hoe GeoTapp geschillen over uren voorkomt en elke klus gedocumenteerd maakt. Gratis demo van 30 minuten met ons team.' },
  ru: { title: 'Записаться на бесплатное демо GeoTapp, 30 минут | GeoTapp', description: 'Узнайте, как GeoTapp устраняет споры по часам и делает каждый выезд верифицируемым. Бесплатное 30-минутное демо.' },
  da: { title: 'Book en gratis GeoTapp-demo, 30 minutter | GeoTapp', description: 'Se, hvordan GeoTapp får færre tvister om timerne og gør hver opgave dokumenteret. Gratis demo på 30 minutter med vores team.' },
  sv: { title: 'Boka en gratis genomgång av GeoTapp, 30 minuter | GeoTapp', description: 'Se hur GeoTapp ger färre tvister om timmarna och gör varje uppdrag dokumenterat. Gratis genomgång på 30 minuter med vårt team.' },
  nb: { title: 'Bestill en gratis GeoTapp-demo, 30 minutter | GeoTapp', description: 'Se hvordan GeoTapp gir færre tvister om timene og gjør hvert oppdrag dokumentert. Gratis demo på 30 minutter med teamet vårt.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = DEMO_META[locale] ?? DEMO_META[locale.startsWith('en-') ? 'en' : 'it'];
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
