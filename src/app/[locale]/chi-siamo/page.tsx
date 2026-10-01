

import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const CHI_SIAMO_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Chi siamo - Il team GeoTapp | GeoTapp', description: 'GeoTapp è un software italiano per dimostrare il lavoro sul campo. Scopri la nostra missione: rendere ogni intervento verificabile, riducendo le contestazioni per le aziende con operatori in mobilità.' },
  en: { title: 'About Us - The GeoTapp Team | GeoTapp', description: 'GeoTapp is Italian software for proving field work. Learn about our mission: making every field job verifiable and reducing disputes for companies with mobile operators.' },
  de: { title: 'Über uns - Das GeoTapp-Team | GeoTapp', description: 'GeoTapp ist eine italienische Software, die Arbeit im Außendienst nachweist. Lernen Sie unsere Mission kennen: jeden Einsatz prüfbar machen und Streitfälle für Unternehmen mit mobilen Mitarbeitenden verringern.' },
  fr: { title: 'À propos - L\'équipe GeoTapp | GeoTapp', description: 'Logiciel italien qui prouve le travail de terrain. Notre mission : rendre chaque intervention vérifiable et réduire les litiges pour les équipes mobiles.' },
  es: { title: 'Quiénes somos - El equipo GeoTapp | GeoTapp', description: 'GeoTapp es un software italiano para demostrar el trabajo en campo. Conoce nuestra misión: hacer verificable cada intervención y reducir las disputas en empresas con operarios en movilidad.' },
  pt: { title: 'Sobre nós - A equipa GeoTapp | GeoTapp', description: 'O GeoTapp é um software italiano para comprovar o trabalho em campo. Conheça a nossa missão: tornar cada intervenção verificável e reduzir as contestações.' },
  nl: { title: 'Over ons - Het GeoTapp-team | GeoTapp', description: 'GeoTapp is een Italiaanse software om werk in het veld aan te tonen. Onze missie: elke klus controleerbaar maken en geschillen verminderen.' },
  da: { title: 'Om os - GeoTapp-teamet | GeoTapp', description: 'GeoTapp er en italiensk software til at dokumentere arbejdet i marken. Lær vores mission at kende: at gøre hver opgave verificerbar og mindske tvister.' },
  sv: { title: 'Om oss - GeoTapp-teamet | GeoTapp', description: 'GeoTapp är en italiensk mjukvara för att visa upp arbetet i fält. Läs om vårt uppdrag: att göra varje uppdrag verifierbart och minska tvisterna för företag med personal i rörelse.' },
  nb: { title: 'Om oss - GeoTapp-teamet | GeoTapp', description: 'GeoTapp er en SaaS for verifisering av feltarbeid. Lær om vår misjon: å gjøre hvert feltoppdrag bevisbart og redusere tvister for bedrifter med mobile medarbeidere.' },
  ru: { title: 'О нас, Команда GeoTapp | GeoTapp', description: 'GeoTapp - SaaS для верификации полевых работ. Узнайте о нашей миссии: сделать каждый выезд доказуемым и сократить споры для компаний с мобильными операторами.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = CHI_SIAMO_META[locale] ?? CHI_SIAMO_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/chi-siamo/'),
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../chi-siamo/page';
