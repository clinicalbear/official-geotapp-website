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

  // ── Coordinate grid (lat/lon style) ──
  for (let x = 0; x <= 1400; x += 100) {
    const op = x % 200 === 0 ? '0.06' : '0.03';
    const sw = x % 200 === 0 ? '0.8' : '0.4';
    p.push(`<line x1="${x}" y1="0" x2="${x}" y2="950" stroke="${c(0)}" stroke-width="${sw}" opacity="${op}"/>`);
  }
  for (let y = 0; y <= 950; y += 100) {
    const op = y % 200 === 0 ? '0.06' : '0.03';
    const sw = y % 200 === 0 ? '0.8' : '0.4';
    p.push(`<line x1="0" y1="${y}" x2="1400" y2="${y}" stroke="${c(1)}" stroke-width="${sw}" opacity="${op}"/>`);
  }

  // ── Coordinate labels (faint numbers like lat/lon) ──
  const coords = [
    { x: 205, y: 15, t: '45.4642° N' }, { x: 405, y: 15, t: '9.1900° E' },
    { x: 605, y: 15, t: '45.4654° N' }, { x: 805, y: 15, t: '9.1915° E' },
    { x: 1005, y: 15, t: '45.4668° N' }, { x: 1205, y: 15, t: '9.1932° E' },
    { x: 5, y: 205, t: '45.464°' }, { x: 5, y: 405, t: '45.463°' },
    { x: 5, y: 605, t: '45.462°' }, { x: 5, y: 805, t: '45.461°' },
  ];
  coords.forEach((co) => {
    p.push(`<text x="${co.x}" y="${co.y}" font-family="monospace" font-size="7" fill="${c(0)}" opacity="0.08">${co.t}</text>`);
  });

  // ── GPS route paths (dashed, like navigation trails) ──
  const routes = [
    { d: 'M120 180 L280 220 L350 380 L500 350 L580 500 L720 480 L800 620', color: c(0), w: 2 },
    { d: 'M900 120 L850 280 L950 380 L880 520 L1000 580 L1100 500 L1200 620 L1280 580', color: c(1), w: 2 },
    { d: 'M300 650 L450 600 L550 700 L700 660 L780 780 L920 720 L1050 800', color: c(2), w: 2 },
    { d: 'M150 450 L250 500 L380 440 L480 520 L560 460', color: c(0), w: 1.5 },
    { d: 'M650 200 L720 300 L680 380 L760 420', color: c(1), w: 1.5 },
    { d: 'M1050 250 L1120 350 L1080 420 L1180 480', color: c(2), w: 1.5 },
  ];
  routes.forEach((r) => {
    p.push(`<path d="${r.d}" fill="none" stroke="${r.color}" stroke-width="${r.w}" opacity="0.12" stroke-dasharray="8 4" stroke-linecap="round"/>`);
  });

  // ── Waypoints (circles at route turns with pulse ring) ──
  const waypoints = [
    { x: 120, y: 180 }, { x: 350, y: 380 }, { x: 580, y: 500 }, { x: 800, y: 620 },
    { x: 900, y: 120 }, { x: 950, y: 380 }, { x: 1100, y: 500 }, { x: 1280, y: 580 },
    { x: 300, y: 650 }, { x: 550, y: 700 }, { x: 780, y: 780 }, { x: 1050, y: 800 },
    { x: 250, y: 500 }, { x: 480, y: 520 }, { x: 720, y: 300 }, { x: 1120, y: 350 },
    { x: 280, y: 220 }, { x: 500, y: 350 }, { x: 720, y: 480 },
    { x: 850, y: 280 }, { x: 1000, y: 580 }, { x: 450, y: 600 },
    { x: 700, y: 660 }, { x: 920, y: 720 }, { x: 880, y: 520 },
  ];
  waypoints.forEach((w, i) => {
    const color = c(i);
    // Outer pulse ring
    p.push(`<circle cx="${w.x}" cy="${w.y}" r="8" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.08"/>`);
    // Inner filled dot
    p.push(`<circle cx="${w.x}" cy="${w.y}" r="3" fill="${color}" opacity="0.15"/>`);
    // Center bright dot
    p.push(`<circle cx="${w.x}" cy="${w.y}" r="1.2" fill="${color}" opacity="0.25"/>`);
  });

  // ── Distance markers (small ticks along routes) ──
  const ticks = [
    { x: 200, y: 200, r: 15 }, { x: 430, y: 360, r: -10 },
    { x: 650, y: 490, r: 20 }, { x: 870, y: 300, r: -15 },
    { x: 1050, y: 560, r: 10 }, { x: 380, y: 620, r: -8 },
    { x: 750, y: 720, r: 12 }, { x: 1150, y: 460, r: -18 },
  ];
  ticks.forEach((t, i) => {
    p.push(`<line x1="${t.x - 4}" y1="${t.y}" x2="${t.x + 4}" y2="${t.y}" stroke="${c(i)}" stroke-width="0.6" opacity="0.10" transform="rotate(${t.r} ${t.x} ${t.y})"/>`);
  });

  // ── Signal radius circles (like GPS accuracy zones) ──
  const signals = [
    { x: 350, y: 380, r: 40 }, { x: 950, y: 380, r: 50 },
    { x: 550, y: 700, r: 35 }, { x: 1100, y: 500, r: 45 },
    { x: 250, y: 500, r: 30 }, { x: 800, y: 620, r: 42 },
  ];
  signals.forEach((s, i) => {
    p.push(`<circle cx="${s.x}" cy="${s.y}" r="${s.r}" fill="${c(i)}" opacity="0.03"/>`);
    p.push(`<circle cx="${s.x}" cy="${s.y}" r="${s.r}" fill="none" stroke="${c(i)}" stroke-width="0.5" opacity="0.06" stroke-dasharray="3 3"/>`);
  });

  // ── Compass rose (top-right area) ──
  const cx = 1300, cy = 100;
  p.push(`<circle cx="${cx}" cy="${cy}" r="25" fill="none" stroke="${c(0)}" stroke-width="0.5" opacity="0.08"/>`);
  p.push(`<circle cx="${cx}" cy="${cy}" r="18" fill="none" stroke="${c(0)}" stroke-width="0.3" opacity="0.06"/>`);
  // N-S line
  p.push(`<line x1="${cx}" y1="${cy - 22}" x2="${cx}" y2="${cy + 22}" stroke="${c(0)}" stroke-width="0.4" opacity="0.08"/>`);
  // E-W line
  p.push(`<line x1="${cx - 22}" y1="${cy}" x2="${cx + 22}" y2="${cy}" stroke="${c(0)}" stroke-width="0.4" opacity="0.08"/>`);
  // N arrow
  p.push(`<path d="M${cx} ${cy - 22} L${cx - 3} ${cy - 16} L${cx + 3} ${cy - 16} Z" fill="${c(0)}" opacity="0.12"/>`);
  p.push(`<text x="${cx - 2}" y="${cy - 27}" font-family="monospace" font-size="6" fill="${c(0)}" opacity="0.10">N</text>`);

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
        backgroundRepeat: 'no-repeat',
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 18%, transparent 32%, transparent 68%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,1) 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 18%, transparent 32%, transparent 68%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,1) 100%)',
      }}
    />
  );
}
