'use client';

import { useRef } from 'react';
// 24/09/2026: le entrate non usano piu' framer-motion (34 KB a ogni prima visita per una
// dissolvenza) ma le classi .r di LEffetti, che fanno lo stesso in CSS su tutto il sito.
import { ShieldCheck, MapPin, FileCheck } from 'lucide-react';

// Claim qualitativi VERIFICABILI (no metriche inventate): i tre differenziatori
// reali del prodotto, sigillo anti-manomissione, GPS reale, verifica lato cliente.
const COPY: Record<string, {
  headline: string;
  claims: { title: string; sub: string }[];
  sectors: string;
}> = {
  it: { headline: 'La prova del lavoro sul campo, verificabile da chiunque', claims: [
    { title: 'Ogni manomissione è visibile', sub: 'Sigillo crittografico su ogni intervento' },
    { title: 'Timbratura GPS reale', sub: 'Posizione e ora registrate sul posto' },
    { title: 'Verifica indipendente', sub: 'Il cliente controlla, senza account' },
  ], sectors: 'Pulizie · Edilizia · Sicurezza · Installatori · Manutenzione · Impiantistica' },
  en: { headline: 'Proof of field work, verifiable by anyone', claims: [
    { title: 'Tamper-evident reports', sub: 'Cryptographic seal on every job' },
    { title: 'Real GPS clock-in', sub: 'Location and time logged on site' },
    { title: 'Independent verification', sub: 'The client checks, no account needed' },
  ], sectors: 'Cleaning · Construction · Security · Installers · Maintenance · HVAC' },
  de: { headline: 'Nachweis der Außendienstarbeit, von jedem überprüfbar', claims: [
    { title: 'Jede Manipulation ist erkennbar', sub: 'Kryptografisches Siegel auf jedem Einsatz' },
    { title: 'Echte GPS-Erfassung', sub: 'Ort und Zeit vor Ort erfasst' },
    { title: 'Unabhängige Überprüfung', sub: 'Der Kunde prüft, ganz ohne Konto' },
  ], sectors: 'Reinigung · Bau · Sicherheit · Installateure · Wartung · Haustechnik' },
  fr: { headline: 'La preuve du travail sur le terrain, vérifiable par tous', claims: [
    { title: 'Toute altération est détectable', sub: 'Sceau cryptographique sur chaque intervention' },
    { title: 'Pointage GPS réel', sub: 'Lieu et heure enregistrés sur place' },
    { title: 'Vérification indépendante', sub: 'Le client vérifie, sans compte' },
  ], sectors: 'Nettoyage · BTP · Sécurité · Installateurs · Maintenance · CVC' },
  es: { headline: 'La prueba del trabajo de campo, verificable por cualquiera', claims: [
    { title: 'Toda alteración es detectable', sub: 'Sello criptográfico en cada intervención' },
    { title: 'Fichaje GPS real', sub: 'Ubicación y hora registradas in situ' },
    { title: 'Verificación independiente', sub: 'El cliente comprueba, sin cuenta' },
  ], sectors: 'Limpieza · Construcción · Seguridad · Instaladores · Mantenimiento · Climatización' },
  pt: { headline: 'A prova do trabalho no terreno, verificável por qualquer um', claims: [
    { title: 'Qualquer adulteração é detetável', sub: 'Selo criptográfico em cada intervenção' },
    { title: 'Registo GPS real', sub: 'Local e hora registados no local' },
    { title: 'Verificação independente', sub: 'O cliente verifica, sem conta' },
  ], sectors: 'Limpeza · Construção · Segurança · Instaladores · Manutenção · AVAC' },
  nl: { headline: 'Bewijs van werk in het veld, door iedereen te verifiëren', claims: [
    { title: 'Elke wijziging is zichtbaar', sub: 'Cryptografisch zegel op elke opdracht' },
    { title: 'Echte GPS-registratie', sub: 'Locatie en tijd ter plaatse vastgelegd' },
    { title: 'Onafhankelijke verificatie', sub: 'De klant controleert, zonder account' },
  ], sectors: 'Schoonmaak · Bouw · Beveiliging · Installateurs · Onderhoud · HVAC' },
  ru: { headline: 'Доказательство полевой работы, которое может проверить каждый', claims: [
    { title: 'Любое изменение заметно', sub: 'Криптографическая печать на каждом выезде' },
    { title: 'Реальная GPS-отметка', sub: 'Место и время фиксируются на объекте' },
    { title: 'Независимая проверка', sub: 'Клиент проверяет без аккаунта' },
  ], sectors: 'Уборка · Строительство · Охрана · Монтаж · Обслуживание · ОВК' },
  da: { headline: 'Bevis for feltarbejde, som alle kan verificere', claims: [
    { title: 'Enhver ændring er synlig', sub: 'Kryptografisk segl på hvert job' },
    { title: 'Ægte GPS-stempling', sub: 'Sted og tid registreret på stedet' },
    { title: 'Uafhængig verificering', sub: 'Kunden tjekker, uden konto' },
  ], sectors: 'Rengøring · Byggeri · Sikkerhed · Installatører · Vedligeholdelse · VVS' },
  sv: { headline: 'Bevis på fältarbete, verifierbart av vem som helst', claims: [
    { title: 'Varje ändring är synlig', sub: 'Kryptografiskt sigill på varje jobb' },
    { title: 'Äkta GPS-stämpling', sub: 'Plats och tid registreras på plats' },
    { title: 'Oberoende verifiering', sub: 'Kunden kontrollerar, utan konto' },
  ], sectors: 'Städning · Bygg · Säkerhet · Installatörer · Underhåll · VVS' },
  nb: { headline: 'Bevis på feltarbeid, verifiserbart av hvem som helst', claims: [
    { title: 'Enhver endring er synlig', sub: 'Kryptografisk segl på hvert oppdrag' },
    { title: 'Ekte GPS-stempling', sub: 'Sted og tid registrert på stedet' },
    { title: 'Uavhengig verifisering', sub: 'Kunden sjekker, uten konto' },
  ], sectors: 'Rengjøring · Bygg · Sikkerhet · Installatører · Vedlikehold · VVS' },
};

const CLAIM_ICONS = [ShieldCheck, FileCheck, MapPin];
const ICON_COLORS = ['#22B573', '#19B5D8', '#F97316'];
const ICON_BG = ['rgba(34,181,115,0.12)', 'rgba(25,181,216,0.12)', 'rgba(249,115,22,0.12)'];

export default function TrustBar({ locale }: { locale: string }) {
  const c = COPY[locale] ?? COPY.en;
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      aria-label="Trust signals"
      className="r relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f7f9fc 0%, #f2f4f7 50%, #f7f9fc 100%)',
        borderTop: '1px solid #f7f9fc',
        borderBottom: '1px solid #f7f9fc',
        padding: '80px 24px 72px',
        textAlign: 'center',
      }}
    >
      {/* Subtle background decoration */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(34,181,115,0.06), transparent)',
      }} />

      <div className="relative z-10">
        <p
          className="r"
          style={{
            margin: '0 0 56px',
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#334155',
            letterSpacing: '0.01em',
          }}
        >
          {c.headline}
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '64px',
          flexWrap: 'wrap',
          marginBottom: '56px',
        }}>
          {c.claims.map(({ title, sub }, i) => {
            const Icon = CLAIM_ICONS[i];
            return (
              <div
                key={title}
                className="r-s"
                style={{ transitionDelay: `${i * 0.18}s`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', maxWidth: '260px' }}
              >
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '20px',
                  background: ICON_BG[i],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 4px 20px ${ICON_COLORS[i]}20`,
                }}>
                  <Icon size={34} color={ICON_COLORS[i]} strokeWidth={1.6} />
                </div>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
                  fontWeight: 700,
                  color: '#0b1736',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}>
                  {title}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: '#64748b',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}>
                  {sub}
                </span>
              </div>
            );
          })}
        </div>

        <div
          className="r"
          style={{ transitionDelay: '.6s',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {c.sectors.split(' · ').map((sector) => (
            <span
              key={sector}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: '#475569',
                fontWeight: 500,
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'white',
                border: '1px solid #f7f9fc',
                boxShadow: '0 2px 8px rgba(11,23,54,0.04)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#22B573';
                e.currentTarget.style.color = '#22B573';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(34,181,115,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f7f9fc';
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(11,23,54,0.04)';
              }}
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
