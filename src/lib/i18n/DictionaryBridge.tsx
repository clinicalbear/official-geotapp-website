'use client';
// Consegna al browser il dizionario della lingua della pagina (vedi client-dictionary-store.ts).
// Sta in cima ai layout, SOPRA Navbar e pagina: React rende il genitore prima dei figli,
// quindi quando un componente chiama getDictionary() il dizionario e' gia' registrato,
// anche dopo un cambio lingua fatto con router.push (senza ricaricare la pagina).
import type { ReactNode } from 'react';
import type { SiteDictionary } from './dictionaries';
import { storeDictionary } from './client-dictionary-store';

export default function DictionaryBridge({
  locale,
  dict,
  children,
}: {
  locale: string;
  dict: Partial<SiteDictionary>;
  children: ReactNode;
}) {
  storeDictionary(locale, dict);
  return <>{children}</>;
}
