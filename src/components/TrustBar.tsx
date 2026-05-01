'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, MapPin, FileCheck } from 'lucide-react';

const COPY: Record<string, {
  headline: string;
  stat1: string; label1: string;
  stat2: string; label2: string;
  stat3: string; label3: string;
  sectors: string;
}> = {
  it: { headline: 'Aziende con operatori sul campo si fidano di GeoTapp', stat1: '500+', label1: 'Aziende attive', stat2: '50.000+', label2: 'Interventi verificati', stat3: '6', label3: 'Settori coperti', sectors: 'Pulizie · Edilizia · Sicurezza · Installatori · Manutenzione · Impiantistica' },
  en: { headline: 'Field service companies trust GeoTapp', stat1: '500+', label1: 'Active companies', stat2: '50,000+', label2: 'Verified jobs', stat3: '6', label3: 'Sectors covered', sectors: 'Cleaning · Construction · Security · Installers · Maintenance · HVAC' },
  de: { headline: 'Außendienstunternehmen vertrauen auf GeoTapp', stat1: '500+', label1: 'Aktive Unternehmen', stat2: '50.000+', label2: 'Verifizierte Einsätze', stat3: '6', label3: 'Branchen abgedeckt', sectors: 'Reinigung · Bau · Sicherheit · Installateure · Wartung · Haustechnik' },
  fr: { headline: 'Les entreprises de terrain font confiance à GeoTapp', stat1: '500+', label1: 'Entreprises actives', stat2: '50 000+', label2: 'Interventions vérifiées', stat3: '6', label3: 'Secteurs couverts', sectors: 'Nettoyage · BTP · Sécurité · Installateurs · Maintenance · CVC' },
  es: { headline: 'Empresas de campo confían en GeoTapp', stat1: '500+', label1: 'Empresas activas', stat2: '50.000+', label2: 'Intervenciones verificadas', stat3: '6', label3: 'Sectores cubiertos', sectors: 'Limpieza · Construcción · Seguridad · Instaladores · Mantenimiento · Climatización' },
  pt: { headline: 'Empresas de campo confiam no GeoTapp', stat1: '500+', label1: 'Empresas ativas', stat2: '50.000+', label2: 'Intervenções verificadas', stat3: '6', label3: 'Setores cobertos', sectors: 'Limpeza · Construção · Segurança · Instaladores · Manutenção · AVAC' },
  nl: { headline: 'Buitendienstbedrijven vertrouwen op GeoTapp', stat1: '500+', label1: 'Actieve bedrijven', stat2: '50.000+', label2: 'Geverifieerde opdrachten', stat3: '6', label3: 'Sectoren gedekt', sectors: 'Schoonmaak · Bouw · Beveiliging · Installateurs · Onderhoud · HVAC' },
  ru: { headline: 'Компании с выездными сотрудниками доверяют GeoTapp', stat1: '500+', label1: 'Активных компаний', stat2: '50 000+', label2: 'Верифицированных выездов', stat3: '6', label3: 'Покрытых отраслей', sectors: 'Уборка · Строительство · Охрана · Монтаж · Обслуживание · ОВК' },
  da: { headline: 'Feltservicevirksomheder stoler på GeoTapp', stat1: '500+', label1: 'Aktive virksomheder', stat2: '50.000+', label2: 'Verificerede jobs', stat3: '6', label3: 'Sektorer dækket', sectors: 'Rengøring · Byggeri · Sikkerhed · Installatører · Vedligeholdelse · VVS' },
  sv: { headline: 'Fältserviceföretag litar på GeoTapp', stat1: '500+', label1: 'Aktiva företag', stat2: '50 000+', label2: 'Verifierade jobb', stat3: '6', label3: 'Sektorer täckta', sectors: 'Städning · Bygg · Säkerhet · Installatörer · Underhåll · VVS' },
  nb: { headline: 'Feltservicebedrifter stoler på GeoTapp', stat1: '500+', label1: 'Aktive bedrifter', stat2: '50 000+', label2: 'Verifiserte oppdrag', stat3: '6', label3: 'Sektorer dekket', sectors: 'Rengjøring · Bygg · Sikkerhet · Installatører · Vedlikehold · VVS' },
};

const STAT_TARGETS = [500, 50000, 6];
const STAT_SUFFIXES = ['+', '+', ''];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted = target >= 1000
    ? count.toLocaleString('de-DE')
    : count.toString();

  return <>{formatted}{suffix}</>;
}

const STATS_ICONS = [ShieldCheck, MapPin, FileCheck];
const ICON_COLORS = ['#8FC436', '#3BAEE0', '#F97316'];

export default function TrustBar({ locale }: { locale: string }) {
  const c = COPY[locale] ?? COPY.en;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { label: c.label1, target: STAT_TARGETS[0], suffix: STAT_SUFFIXES[0] },
    { label: c.label2, target: STAT_TARGETS[1], suffix: STAT_SUFFIXES[1] },
    { label: c.label3, target: STAT_TARGETS[2], suffix: STAT_SUFFIXES[2] },
  ];

  return (
    <motion.section
      ref={ref}
      aria-label="Trust signals"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        padding: '64px 24px',
        textAlign: 'center',
      }}
    >
      <p style={{
        margin: '0 0 48px',
        fontFamily: 'var(--font-poppins, Poppins, sans-serif)',
        fontSize: '1.1rem',
        fontWeight: 600,
        color: '#475569',
        letterSpacing: '0.01em',
      }}>
        {c.headline}
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '64px',
        flexWrap: 'wrap',
        marginBottom: '40px',
      }}>
        {stats.map(({ label, target, suffix }, i) => {
          const Icon = STATS_ICONS[i];
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', minWidth: '120px' }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: `${ICON_COLORS[i]}12`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={28} color={ICON_COLORS[i]} strokeWidth={1.8} />
              </div>
              <span style={{
                fontFamily: 'var(--font-poppins, Poppins, sans-serif)',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}>
                <AnimatedCounter target={target} suffix={suffix} inView={inView} />
              </span>
              <span style={{
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
                fontSize: '0.85rem',
                color: '#64748b',
                fontWeight: 500,
              }}>
                {label}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
      }}>
        {c.sectors.split(' · ').map((sector, i) => (
          <span
            key={sector}
            style={{
              fontFamily: 'var(--font-inter, Inter, sans-serif)',
              fontSize: '0.8rem',
              color: '#475569',
              fontWeight: 500,
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'white',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            {sector}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
