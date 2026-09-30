'use client';

import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';

/**
 * Nastro che scorre della direzione L, nei tre colori del marchio.
 * Le parole sono quelle delle garanzie gia' pubblicate sul sito, nella lingua della pagina.
 * Offline e' il verificatore, non l'app: la voce lo dice.
 */
type Voce = [string, '' | 'g' | 'b'];

const VOCI: Record<string, string[]> = {
  it: ['POSIZIONE SOLO ALLA TIMBRATURA', 'REPORT SIGILLATO', 'VERIFICA INDIPENDENTE', 'NESSUN TRACCIAMENTO CONTINUO', 'DATI IN EUROPA', 'VERIFICA ANCHE OFFLINE'],
  de: ['STANDORT NUR BEIM STEMPELN', 'VERSIEGELTER BERICHT', 'UNABHÄNGIGE PRÜFUNG', 'KEINE DURCHGEHENDE ORTUNG', 'DATEN IN EUROPA', 'PRÜFUNG AUCH OFFLINE'],
  fr: ['POSITION UNIQUEMENT AU POINTAGE', 'RAPPORT SCELLÉ', 'VÉRIFICATION INDÉPENDANTE', 'AUCUN SUIVI CONTINU', 'DONNÉES EN EUROPE', 'VÉRIFICATION MÊME HORS LIGNE'],
  es: ['POSICIÓN SOLO AL FICHAR', 'INFORME SELLADO', 'VERIFICACIÓN INDEPENDIENTE', 'SIN SEGUIMIENTO CONTINUO', 'DATOS EN EUROPA', 'VERIFICACIÓN TAMBIÉN SIN CONEXIÓN'],
  pt: ['POSIÇÃO APENAS AO PICAR O PONTO', 'RELATÓRIO SELADO', 'VERIFICAÇÃO INDEPENDENTE', 'SEM SEGUIMENTO CONTÍNUO', 'DADOS NA EUROPA', 'VERIFICAÇÃO TAMBÉM OFFLINE'],
  nl: ['LOCATIE ALLEEN BIJ DE REGISTRATIE', 'VERZEGELD RAPPORT', 'ONAFHANKELIJKE CONTROLE', 'GEEN DOORLOPENDE TRACKING', 'GEGEVENS IN EUROPA', 'CONTROLE OOK OFFLINE'],
  en: ['LOCATION ONLY AT CLOCK-IN', 'SEALED REPORT', 'INDEPENDENT VERIFICATION', 'NO CONTINUOUS TRACKING', 'DATA IN EUROPE', 'VERIFIES OFFLINE TOO'],
};

const COLORI: Voce[1][] = ['', 'g', 'b', '', 'g', 'b'];

function vociPer(locale: string): Voce[] {
  const base = locale.split('-')[0];
  const parole = VOCI[locale] ?? VOCI[base] ?? VOCI.it;
  return parole.map((t, i) => [t, COLORI[i]]);
}

export default function LNastro() {
  const locale = getLocaleFromPathname(usePathname()) ?? 'it';
  const voci = vociPer(locale);
  const giro = [...voci, ...voci];
  return (
    <div className="l-tape">
      <div className="run">
        {giro.map(([t, c], i) => (
          <span key={i} className={c}>{t}</span>
        ))}
      </div>
    </div>
  );
}
