// Consegna al browser le sezioni del dizionario che il layout di [locale] non manda a
// tutte le pagine (accessibilita, per la pagina client). Vedi dizionarioComune in src/lib/i18n/dictionaries.ts.
import type { ReactNode } from 'react';
import DictionaryBridge from '@/lib/i18n/DictionaryBridge';
import { sezioniDizionario } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';

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
