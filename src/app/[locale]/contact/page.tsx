import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const CONTACT_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Contatta GeoTapp - Supporto clienti | GeoTapp', description: 'Hai domande su GeoTapp? Scrivici. Il team risponde in italiano e inglese per supporto, partnership e informazioni commerciali.' },
  en: { title: 'Contact GeoTapp - Customer support | GeoTapp', description: 'Have questions about GeoTapp? Write to us. Our team responds in English and Italian for support, partnerships and sales enquiries.' },
  de: { title: 'GeoTapp kontaktieren - Kundensupport | GeoTapp', description: 'Haben Sie Fragen zu GeoTapp? Schreiben Sie uns. Unser Team antwortet auf Deutsch und Englisch.' },
  fr: { title: 'Contacter GeoTapp - Support client | GeoTapp', description: 'Des questions sur GeoTapp ? Écrivez-nous. Notre équipe répond en français et en anglais.' },
  es: { title: 'Contactar GeoTapp - Atención al cliente | GeoTapp', description: '¿Tienes preguntas sobre GeoTapp? Escríbenos. Nuestro equipo responde en español e inglés.' },
  pt: { title: 'Contactar GeoTapp - Suporte ao cliente | GeoTapp', description: 'Tem perguntas sobre o GeoTapp? Escreva-nos. A nossa equipa responde em português e inglês.' },
  nl: { title: 'Contact GeoTapp - Klantenservice | GeoTapp', description: 'Vragen over GeoTapp? Schrijf ons. Ons team antwoordt in het Nederlands en Engels.' },
  ru: { title: 'Связаться с GeoTapp, Поддержка клиентов | GeoTapp', description: 'Есть вопросы о GeoTapp? Напишите нам. Наша команда отвечает на русском и английском языках.' },
  da: { title: 'Kontakt GeoTapp - Kundesupport | GeoTapp', description: 'Har du spørgsmål om GeoTapp? Skriv til os. Vores team svarer på dansk og engelsk.' },
  sv: { title: 'Kontakta GeoTapp - Kundsupport | GeoTapp', description: 'Har du frågor om GeoTapp? Skriv till oss. Vårt team svarar på svenska och engelska.' },
  nb: { title: 'Kontakt GeoTapp - Kundestøtte | GeoTapp', description: 'Har du spørsmål om GeoTapp? Skriv til oss. Teamet svarer på norsk og engelsk.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = CONTACT_META[locale] ?? CONTACT_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/contact/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/contact/`,
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
export { default } from '../../contact/page';
