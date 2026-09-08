import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

// La pagina parla tutte e 11 le lingue del prodotto: anche il titolo della
// scheda del browser, che prima cadeva in inglese per otto clienti su undici.
const COMPLETA_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Attiva il tuo abbonamento - GeoTapp', description: 'Attiva il tuo abbonamento GeoTapp: piano consigliato, postazioni, partita IVA e pagamento.' },
  en: { title: 'Activate your subscription - GeoTapp', description: 'Activate your GeoTapp subscription: recommended plan, seats, VAT number and payment.' },
  de: { title: 'Abonnement aktivieren - GeoTapp', description: 'Aktivieren Sie Ihr GeoTapp-Abonnement: empfohlener Tarif, Plätze, USt-IdNr. und Zahlung.' },
  fr: { title: 'Activez votre abonnement - GeoTapp', description: 'Activez votre abonnement GeoTapp : plan conseillé, postes, numéro de TVA et paiement.' },
  es: { title: 'Activa tu suscripción - GeoTapp', description: 'Activa tu suscripción GeoTapp: plan recomendado, puestos, NIF y pago.' },
  nl: { title: 'Activeer je abonnement - GeoTapp', description: 'Activeer je GeoTapp-abonnement: aanbevolen plan, plaatsen, btw-nummer en betaling.' },
  pt: { title: 'Ative a sua subscrição - GeoTapp', description: 'Ative a sua subscrição GeoTapp: plano recomendado, postos, NIF e pagamento.' },
  da: { title: 'Aktivér dit abonnement - GeoTapp', description: 'Aktivér dit GeoTapp-abonnement: anbefalet plan, pladser, CVR-nummer og betaling.' },
  nb: { title: 'Aktiver abonnementet ditt - GeoTapp', description: 'Aktiver GeoTapp-abonnementet: anbefalt plan, plasser, organisasjonsnummer og betaling.' },
  sv: { title: 'Aktivera din prenumeration - GeoTapp', description: 'Aktivera din GeoTapp-prenumeration: rekommenderad plan, platser, momsnummer och betalning.' },
  ru: { title: 'Активируйте подписку - GeoTapp', description: 'Активируйте подписку GeoTapp: рекомендованный тариф, места, ИНН и оплата.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = COMPLETA_META[locale] ?? COMPLETA_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    robots: { index: false, follow: false },
    alternates: buildLocaleAlternates(locale, '/abbonati/completa/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/abbonati/completa/`,
      type: 'website',
      title: meta.title,
      description: meta.description,
    },
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../../abbonati/completa/page';
