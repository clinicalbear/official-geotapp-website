'use client';

interface MapBackgroundProps {
  products?: Array<'timetracker' | 'flow' | 'verifier'>;
}

const COLORS = {
  timetracker: '#F97316',
  flow: '#8B5CF6',
  verifier: '#22C55E',
};

function buildSvg(colors: string[]): string {
  const c = (i: number) => colors[i % colors.length];
  const p: string[] = [];

  // Coordinate grid
  for (let x = 0; x <= 1400; x += 200) {
    p.push(`<line x1="${x}" y1="0" x2="${x}" y2="950" stroke="${c(0)}" stroke-width="0.5" opacity="0.05"/>`);
  }
  for (let y = 0; y <= 950; y += 200) {
    p.push(`<line x1="0" y1="${y}" x2="1400" y2="${y}" stroke="${c(1)}" stroke-width="0.5" opacity="0.05"/>`);
  }

  // Route trails
  const routes = [
    { d: 'M120 180 L280 220 L350 380 L500 350 L580 500 L720 480', color: c(0) },
    { d: 'M900 120 L850 280 L950 380 L880 520 L1000 580 L1200 620', color: c(1) },
    { d: 'M300 650 L450 600 L550 700 L700 660 L780 780 L920 720', color: c(2) },
  ];
  routes.forEach((r) => {
    p.push(`<path d="${r.d}" fill="none" stroke="${r.color}" stroke-width="1.5" opacity="0.10" stroke-dasharray="8 4" stroke-linecap="round"/>`);
  });

  // Waypoints
  const wps = [
    { x: 120, y: 180 }, { x: 350, y: 380 }, { x: 720, y: 480 },
    { x: 900, y: 120 }, { x: 950, y: 380 }, { x: 1200, y: 620 },
    { x: 300, y: 650 }, { x: 700, y: 660 }, { x: 920, y: 720 },
    { x: 500, y: 350 }, { x: 880, y: 520 }, { x: 550, y: 700 },
  ];
  wps.forEach((w, i) => {
    p.push(`<circle cx="${w.x}" cy="${w.y}" r="6" fill="none" stroke="${c(i)}" stroke-width="0.5" opacity="0.08"/>`);
    p.push(`<circle cx="${w.x}" cy="${w.y}" r="2" fill="${c(i)}" opacity="0.15"/>`);
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 950" preserveAspectRatio="xMidYMid slice">${p.join('')}</svg>`;
}

export default function MapBackground({ products }: MapBackgroundProps) {
  const activeProducts = products && products.length > 0
    ? products
    : (['timetracker', 'flow', 'verifier'] as const);

  const colors = activeProducts.map((pp) => COLORS[pp]);
  const svg = buildSvg(colors);
  const encoded = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage: encoded,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 18%, transparent 32%, transparent 68%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,1) 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 18%, transparent 32%, transparent 68%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,1) 100%)',
      }}
    />
  );
}
