import type { Metadata } from 'next';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';

const CONTACT_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Contatta GeoTapp - Supporto clienti | GeoTapp', description: 'Hai domande su GeoTapp? Scrivici. Rispondiamo su supporto, collaborazioni e informazioni commerciali.' },
  en: { title: 'Contact GeoTapp - Customer support | GeoTapp', description: 'Have questions about GeoTapp? Write to us. We answer on support, partnerships and sales enquiries.' },
  de: { title: 'GeoTapp kontaktieren - Kundensupport | GeoTapp', description: 'Haben Sie Fragen zu GeoTapp? Schreiben Sie uns. Wir antworten bei Support, Kooperationen und Anfragen zum Vertrieb.' },
  fr: { title: 'Contacter GeoTapp - Support client | GeoTapp', description: 'Des questions sur GeoTapp ? Écrivez-nous. Nous répondons pour le support, les partenariats et les demandes commerciales.' },
  es: { title: 'Contactar con GeoTapp - Atención al cliente | GeoTapp', description: '¿Tienes preguntas sobre GeoTapp? Escríbenos. Respondemos sobre soporte, colaboraciones e información comercial.' },
  pt: { title: 'Contactar o GeoTapp - Suporte ao cliente | GeoTapp', description: 'Tem perguntas sobre o GeoTapp? Escreva-nos. Respondemos sobre suporte, colaborações e informações comerciais.' },
  nl: { title: 'Neem contact op met GeoTapp - Klantenservice | GeoTapp', description: 'Hebt u vragen over GeoTapp? Schrijf ons. We antwoorden over ondersteuning, samenwerkingen en commerciële informatie.' },
  ru: { title: 'Связаться с GeoTapp, Поддержка клиентов | GeoTapp', description: 'Есть вопросы о GeoTapp? Напишите нам. Наша команда отвечает на русском и английском языках.' },
  da: { title: 'Kontakt GeoTapp - Kundesupport | GeoTapp', description: 'Har du spørgsmål om GeoTapp? Skriv til os. Vi svarer på spørgsmål om support, samarbejder og kommerciel information.' },
  sv: { title: 'Kontakta GeoTapp - Kundsupport | GeoTapp', description: 'Har du frågor om GeoTapp? Skriv till oss. Vi svarar på frågor om support, samarbeten och kommersiell information.' },
  nb: { title: 'Kontakt GeoTapp - Kundestøtte | GeoTapp', description: 'Har du spørsmål om GeoTapp? Skriv til oss. Vi svarer på spørsmål om support, samarbeid og kommersiell informasjon.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = CONTACT_META[locale] ?? CONTACT_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/contact/'),
    openGraph: {
      url: buildCanonicalUrl(locale, '/contact/'),
      type: 'website',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: meta.title }],
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
export { default } from '../../contact/page';
