'use client';
// Il carrello montato in ogni pagina. Il pannello vero (CartDrawerPanel, con framer-motion,
// le icone e il modulo consensi) pesava circa 60 KB di JavaScript scaricati a ogni prima
// visita anche da chi il carrello non lo apre mai, e Lighthouse li contava prima del
// titolo della home. Qui si scarica solo la prima volta che il carrello si apre, poi resta
// montato cosi' l'animazione di chiusura funziona come prima.
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useCart } from '@/store/cart';

const CartDrawerPanel = dynamic(() => import('./CartDrawerPanel'), { ssr: false });

export default function CartDrawer() {
  const isOpen = useCart((s) => s.isOpen);
  const [needed, setNeeded] = useState(false);

  useEffect(() => {
    if (isOpen) setNeeded(true);
  }, [isOpen]);

  return needed ? <CartDrawerPanel /> : null;
}
