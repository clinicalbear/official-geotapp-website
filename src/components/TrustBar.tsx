'use client';

import { ShieldCheck, MapPin, FileCheck } from 'lucide-react';

const COPY: Record<string, {
  headline: string;
  stat1: string; label1: string;
  stat2: string; label2: string;
  stat3: string; label3: string;
  sectors: string;
}> = {
  it: { headline: 'Aziende con operatori sul campo si fidano di GeoTapp', stat1: '500+', label1: 'Aziende attive', stat2: '50.000+', label2: 'Interventi verificati', stat3: '3', label3: 'Settori coperti', sectors: 'Pulizie · Installatori · Sicurezza' },
  en: { headline: 'Field service companies trust GeoTapp', stat1: '500+', label1: 'Active companies', stat2: '50,000+', label2: 'Verified jobs', stat3: '3', label3: 'Sectors covered', sectors: 'Cleaning · Installers · Security' },
  de: { headline: 'Außendienstunternehmen vertrauen auf GeoTapp', stat1: '500+', label1: 'Aktive Unternehmen', stat2: '50.000+', label2: 'Verifizierte Einsätze', stat3: '3', label3: 'Branchen abgedeckt', sectors: 'Reinigung · Installateure · Sicherheit' },
  fr: { headline: 'Les entreprises de terrain font confiance à GeoTapp', stat1: '500+', label1: 'Entreprises actives', stat2: '50 000+', label2: 'Interventions vérifiées', stat3: '3', label3: 'Secteurs couverts', sectors: 'Nettoyage · Installateurs · Sécurité' },
  es: { headline: 'Empresas de campo confían en GeoTapp', stat1: '500+', label1: 'Empresas activas', stat2: '50.000+', label2: 'Intervenciones verificadas', stat3: '3', label3: 'Sectores cubiertos', sectors: 'Limpieza · Instaladores · Seguridad' },
  pt: { headline: 'Empresas de campo confiam no GeoTapp', stat1: '500+', label1: 'Empresas ativas', stat2: '50.000+', label2: 'Intervenções verificadas', stat3: '3', label3: 'Setores cobertos', sectors: 'Limpeza · Instaladores · Segurança' },
  nl: { headline: 'Buitendienstbedrijven vertrouwen op GeoTapp', stat1: '500+', label1: 'Actieve bedrijven', stat2: '50.000+', label2: 'Geverifieerde opdrachten', stat3: '3', label3: 'Sectoren gedekt', sectors: 'Schoonmaak · Installateurs · Beveiliging' },
  ru: { headline: 'Компании с выездными сотрудниками доверяют GeoTapp', stat1: '500+', label1: 'Активных компаний', stat2: '50 000+', label2: 'Верифицированных выездов', stat3: '3', label3: 'Покрытых отраслей', sectors: 'Уборка · Монтаж · Охрана' },
  da: { headline: 'Feltservicevirksomheder stoler på GeoTapp', stat1: '500+', label1: 'Aktive virksomheder', stat2: '50.000+', label2: 'Verificerede jobs', stat3: '3', label3: 'Sektorer dækket', sectors: 'Rengøring · Installatører · Sikkerhed' },
  sv: { headline: 'Fältserviceföretag litar på GeoTapp', stat1: '500+', label1: 'Aktiva företag', stat2: '50 000+', label2: 'Verifierade jobb', stat3: '3', label3: 'Sektorer täckta', sectors: 'Städning · Installatörer · Säkerhet' },
  nb: { headline: 'Feltservicebedrifter stoler på GeoTapp', stat1: '500+', label1: 'Aktive bedrifter', stat2: '50 000+', label2: 'Verifiserte oppdrag', stat3: '3', label3: 'Sektorer dekket', sectors: 'Rengjøring · Installatører · Sikkerhet' },
};

const STATS_ICONS = [ShieldCheck, MapPin, FileCheck];

export default function TrustBar({ locale }: { locale: string }) {
  const c = COPY[locale] ?? COPY.en;
  const stats = [
    { stat: c.stat1, label: c.label1 },
    { stat: c.stat2, label: c.label2 },
    { stat: c.stat3, label: c.label3 },
  ];

  return (
    <section
      aria-label="Trust signals"
      style={{
        background: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        padding: '48px 24px',
        textAlign: 'center',
      }}
    >
      <p style={{
        margin: '0 0 32px',
        fontFamily: 'var(--font-poppins, Poppins, sans-serif)',
        fontSize: '1rem',
        fontWeight: 600,
        color: '#475569',
        letterSpacing: '0.01em',
      }}>
        {c.headline}
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '48px',
        flexWrap: 'wrap',
        marginBottom: '28px',
      }}>
        {stats.map(({ stat, label }, i) => {
          const Icon = STATS_ICONS[i];
          return (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '100px' }}>
              <Icon size={28} color="#8FC436" strokeWidth={1.8} />
              <span style={{ fontFamily: 'var(--font-poppins, Poppins, sans-serif)', fontSize: '2rem', fontWeight: 700, color: '#0f172a', lineHeight: 1 }}>
                {stat}
              </span>
              <span style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)', fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
                {label}
              </span>
            </div>
          );
        })}
      </div>

      <p style={{
        margin: 0,
        fontFamily: 'var(--font-inter, Inter, sans-serif)',
        fontSize: '0.875rem',
        color: '#94a3b8',
        letterSpacing: '0.05em',
      }}>
        {c.sectors}
      </p>
    </section>
  );
}
