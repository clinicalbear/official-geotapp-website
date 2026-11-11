'use client';

import { useEffect, useState } from 'react';
import { PRESS_COVERAGE, pressVisibili, type PressItem } from '@/lib/press/data';

/**
 * La copertura stampa visibile ADESSO. Il server e il primo render del browser mostrano solo le voci
 * senza `visibleFrom` (cosi' l'HTML coincide e non c'e' errore di idratazione); appena la pagina e' montata
 * si legge l'ora e compaiono anche le uscite programmate il cui momento e' arrivato.
 */
export function useCopertura(): PressItem[] {
  const [adesso, setAdesso] = useState<number | null>(null);
  useEffect(() => setAdesso(Date.now()), []);
  return pressVisibili(PRESS_COVERAGE, adesso);
}
