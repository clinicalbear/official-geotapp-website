'use client';

// 404 della direzione L. Il root layout non renderizza html/body (lo fa
// [locale]/layout.tsx per le pagine vere), quindi qui, come in
// global-error.tsx, il documento va reso per intero. Prima di questa pagina
// il 404 era il default di Next: solo "404", senza nav, senza uscite.

import { useEffect, useState } from 'react';

type T = { lead: string; desc: string; home: string; pricing: string; cta: string };

const TEXTS: Record<string, T> = {
  it: { lead: 'Questa pagina non esiste.', desc: 'O ha cambiato indirizzo, o non c\'è mai stata. Il resto del sito però funziona.', home: 'Vai alla home', pricing: 'Prezzi', cta: 'Prova gratis' },
  en: { lead: 'This page does not exist.', desc: 'Either it moved, or it was never here. The rest of the site works fine.', home: 'Go to the homepage', pricing: 'Pricing', cta: 'Try free' },
  de: { lead: 'Diese Seite existiert nicht.', desc: 'Entweder ist sie umgezogen, oder es gab sie nie. Der Rest der Website funktioniert.', home: 'Zur Startseite', pricing: 'Preise', cta: 'Kostenlos testen' },
  fr: { lead: 'Cette page n\'existe pas.', desc: 'Soit elle a changé d\'adresse, soit elle n\'a jamais existé. Le reste du site fonctionne.', home: 'Aller à l\'accueil', pricing: 'Tarifs', cta: 'Essai gratuit' },
  es: { lead: 'Esta página no existe.', desc: 'O cambió de dirección, o nunca estuvo aquí. El resto del sitio funciona.', home: 'Ir al inicio', pricing: 'Precios', cta: 'Prueba gratis' },
  pt: { lead: 'Esta página não existe.', desc: 'Ou mudou de endereço, ou nunca esteve aqui. O resto do site funciona.', home: 'Ir para a página inicial', pricing: 'Preços', cta: 'Teste grátis' },
  nl: { lead: 'Deze pagina bestaat niet.', desc: 'Of ze is verhuisd, of ze is er nooit geweest. De rest van de site werkt gewoon.', home: 'Naar de homepage', pricing: 'Prijzen', cta: 'Probeer gratis' },
  da: { lead: 'Denne side findes ikke.', desc: 'Enten er den flyttet, eller også har den aldrig været her. Resten af sitet virker.', home: 'Gå til forsiden', pricing: 'Priser', cta: 'Prøv gratis' },
  sv: { lead: 'Den här sidan finns inte.', desc: 'Antingen har den flyttat, eller så har den aldrig funnits. Resten av sajten fungerar.', home: 'Gå till startsidan', pricing: 'Priser', cta: 'Prova gratis' },
  nb: { lead: 'Denne siden finnes ikke.', desc: 'Enten har den flyttet, eller så har den aldri vært her. Resten av nettstedet virker.', home: 'Gå til forsiden', pricing: 'Priser', cta: 'Prøv gratis' },
  ru: { lead: 'Такой страницы нет.', desc: 'Либо она переехала, либо её никогда не было. Остальной сайт работает.', home: 'На главную', pricing: 'Цены', cta: 'Попробовать бесплатно' },
};

const LOCALES = Object.keys(TEXTS);

export default function NotFound() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const seg = window.location.pathname.split('/')[1];
    if (LOCALES.includes(seg)) { setLocale(seg); return; }
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (LOCALES.includes(nav)) setLocale(nav);
  }, []);

  const t = TEXTS[locale] ?? TEXTS.en;
  const p = (path: string) => `/${locale}${path}`;

  const link: React.CSSProperties = {
    color: '#F2F0E9', fontSize: 16, borderBottom: '1px solid rgba(242,240,233,.42)',
    paddingBottom: 3, textDecoration: 'none',
  };

  return (
    <html lang={locale}>
      <body style={{ margin: 0 }}>
        <div style={{
          minHeight: '100vh', background: '#0E0E0C', color: '#F2F0E9',
          display: 'grid', placeContent: 'center', textAlign: 'center',
          fontFamily: 'Inter, system-ui, sans-serif', padding: '32px 20px',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/LogoGeoTapp.webp" alt="GeoTapp" style={{ height: 44, width: 'auto', margin: '0 auto 42px' }} />
          <p style={{
            fontFamily: '"Anton", "Arial Narrow", Impact, sans-serif', fontSize: 'clamp(90px, 18vw, 190px)',
            lineHeight: 0.9, margin: 0, textTransform: 'uppercase', letterSpacing: '.01em',
          }}>
            4<span style={{ color: '#B6E86A' }}>0</span>4
          </p>
          <p style={{ fontSize: 22, fontWeight: 700, margin: '34px 0 8px' }}>{t.lead}</p>
          <p style={{ fontSize: 15.5, color: 'rgba(242,240,233,.7)', margin: '0 0 36px', maxWidth: '46ch' }}>{t.desc}</p>
          <div style={{ display: 'flex', gap: 26, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href={p('/trial/')} style={{
              background: '#8FC436', color: '#0E0E0C', padding: '15px 30px', borderRadius: 99,
              fontSize: 15.5, fontWeight: 600, textDecoration: 'none',
            }}>{t.cta}</a>
            <a href={p('/')} style={link}>{t.home}</a>
            <a href={p('/pricing/')} style={link}>{t.pricing}</a>
            <a href="/blog/" style={link}>Blog</a>
          </div>
        </div>
      </body>
    </html>
  );
}
