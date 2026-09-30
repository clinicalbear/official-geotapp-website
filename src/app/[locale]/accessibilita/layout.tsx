// Consegna al browser le sezioni del dizionario che il layout di [locale] non manda a
// tutte le pagine (accessibilita, per la pagina client). Vedi dizionarioComune in src/lib/i18n/dictionaries.ts.
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import DictionaryBridge from '@/lib/i18n/DictionaryBridge';
import { sezioniDizionario } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';

// Senza questa funzione la pagina usava titolo e descrizione generici, in inglese, in ogni lingua.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as AppLocale).accessibilita;
  return {
    title: { absolute: t.meta_title },
    description: t.meta_description,
    alternates: buildLocaleAlternates(locale, '/accessibilita/'),
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <DictionaryBridge locale={locale} dict={sezioniDizionario(locale as AppLocale, ['accessibilita'])}>
      {children}
    </DictionaryBridge>
  );
}
