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

  // ── Main roads — organic curves, different widths ──
  const mainRoads = [
    // Big boulevard curving through the city
    'M-20 300 C100 280 200 320 350 290 S500 240 650 300 S850 380 1000 310 S1200 260 1450 340',
    // Another major road crossing
    'M400 -20 C380 100 420 200 390 350 S360 500 400 620 S440 750 380 950',
    // Diagonal avenue
    'M-20 100 C100 130 250 200 400 350 S550 500 700 550 S900 580 1100 650 L1450 750',
    // Ring road
    'M-20 650 C150 600 300 580 500 620 S700 680 850 640 S1050 580 1200 630 L1450 660',
    // North-south highway
    'M800 -20 C790 120 820 250 780 400 S750 550 800 700 S830 800 790 950',
    // Connector road
    'M-20 480 C120 460 250 490 380 470 S520 440 650 480 S800 520 950 470 L1450 500',
  ];

  mainRoads.forEach((d, i) => {
    p.push(`<path d="${d}" fill="none" stroke="${c(i)}" stroke-width="1.6" opacity="0.15" stroke-linecap="round"/>`);
  });

  // ── Secondary streets — shorter, connecting main roads ──
  const secondaryRoads = [
    // Curved side streets
    'M200 280 C220 350 180 420 230 490',
    'M350 290 C370 370 340 440 380 520',
    'M500 240 C480 310 520 380 490 460',
    'M650 300 C630 380 670 450 640 540',
    'M150 100 C180 170 140 250 190 310',
    'M550 100 C530 190 570 280 540 350',
    'M900 310 C880 400 920 480 890 560',
    'M1050 280 C1030 360 1070 430 1040 520',
    // Short connectors
    'M250 200 C300 220 340 190 390 220',
    'M450 350 C500 380 540 340 600 370',
    'M700 400 C740 440 780 410 830 450',
    'M100 500 C150 530 190 510 250 540',
    'M550 550 C600 580 640 560 700 590',
    'M850 550 C900 520 940 560 1000 530',
    'M300 650 C350 680 400 650 450 690',
    'M600 680 C650 650 700 690 750 660',
    // Winding alleys
    'M180 350 C200 360 190 390 210 400 S230 430 210 460',
    'M420 400 C440 420 430 450 450 470 S470 500 450 520',
    'M680 450 C700 470 690 500 710 520 S730 550 710 580',
    'M950 400 C970 430 960 460 980 490',
    'M1100 400 C1120 440 1110 480 1130 520',
    'M300 550 C280 580 310 610 290 640',
    'M500 580 C520 610 510 640 530 670',
    'M750 600 C770 630 760 660 780 690',
    // Dead-end streets
    'M130 300 L80 320',
    'M270 470 L220 500',
    'M580 450 L540 490',
    'M830 350 L870 310',
    'M1000 550 L1050 580',
    'M350 700 L310 740',
  ];

  secondaryRoads.forEach((d, i) => {
    p.push(`<path d="${d}" fill="none" stroke="${c(i)}" stroke-width="0.7" opacity="0.12" stroke-linecap="round"/>`);
  });

  // ── Buildings — irregular shapes along streets ──
  // Rotated rectangles to follow street angles
  const buildings = [
    // Along first boulevard
    { x: 120, y: 260, w: 18, h: 12, r: -5 }, { x: 160, y: 310, w: 14, h: 20, r: 8 },
    { x: 220, y: 255, w: 22, h: 14, r: -3 }, { x: 280, y: 300, w: 16, h: 18, r: 12 },
    { x: 370, y: 260, w: 20, h: 12, r: -8 }, { x: 430, y: 300, w: 14, h: 22, r: 5 },
    { x: 520, y: 250, w: 18, h: 16, r: -4 }, { x: 580, y: 280, w: 24, h: 14, r: 10 },
    { x: 670, y: 270, w: 16, h: 20, r: -6 }, { x: 740, y: 310, w: 20, h: 14, r: 3 },
    { x: 820, y: 340, w: 14, h: 18, r: -10 }, { x: 900, y: 290, w: 22, h: 12, r: 7 },
    { x: 980, y: 320, w: 16, h: 16, r: -2 }, { x: 1060, y: 280, w: 20, h: 14, r: 9 },
    { x: 1140, y: 310, w: 14, h: 20, r: -5 },
    // Along diagonal avenue
    { x: 100, y: 130, w: 16, h: 12, r: 15 }, { x: 180, y: 180, w: 20, h: 14, r: 20 },
    { x: 300, y: 240, w: 14, h: 18, r: 25 }, { x: 450, y: 370, w: 18, h: 12, r: 18 },
    { x: 560, y: 440, w: 22, h: 14, r: 12 }, { x: 720, y: 520, w: 16, h: 20, r: 8 },
    { x: 870, y: 570, w: 20, h: 14, r: 5 }, { x: 1000, y: 610, w: 14, h: 18, r: 15 },
    { x: 1120, y: 660, w: 18, h: 12, r: 10 },
    // Fill areas between roads
    { x: 200, y: 380, w: 16, h: 14, r: -8 }, { x: 250, y: 420, w: 12, h: 18, r: 5 },
    { x: 320, y: 390, w: 20, h: 12, r: -3 }, { x: 380, y: 440, w: 14, h: 16, r: 10 },
    { x: 440, y: 410, w: 18, h: 14, r: -6 }, { x: 500, y: 460, w: 16, h: 20, r: 4 },
    { x: 570, y: 380, w: 12, h: 14, r: -12 }, { x: 620, y: 420, w: 20, h: 12, r: 8 },
    { x: 700, y: 460, w: 14, h: 18, r: -4 }, { x: 760, y: 430, w: 18, h: 14, r: 7 },
    { x: 830, y: 470, w: 16, h: 12, r: -9 }, { x: 900, y: 440, w: 22, h: 16, r: 3 },
    // South area
    { x: 150, y: 560, w: 14, h: 12, r: 6 }, { x: 220, y: 590, w: 18, h: 16, r: -4 },
    { x: 340, y: 570, w: 16, h: 14, r: 8 }, { x: 420, y: 610, w: 12, h: 18, r: -7 },
    { x: 500, y: 590, w: 20, h: 12, r: 5 }, { x: 600, y: 630, w: 14, h: 16, r: -3 },
    { x: 680, y: 600, w: 18, h: 14, r: 10 }, { x: 770, y: 640, w: 16, h: 12, r: -8 },
    { x: 860, y: 610, w: 12, h: 18, r: 4 }, { x: 950, y: 580, w: 20, h: 14, r: -6 },
    { x: 1050, y: 550, w: 14, h: 16, r: 9 }, { x: 1130, y: 590, w: 18, h: 12, r: -2 },
    // North area
    { x: 450, y: 120, w: 14, h: 12, r: -8 }, { x: 620, y: 140, w: 16, h: 18, r: 5 },
    { x: 700, y: 100, w: 20, h: 14, r: -3 }, { x: 850, y: 130, w: 14, h: 16, r: 10 },
    { x: 950, y: 150, w: 18, h: 12, r: -5 }, { x: 1080, y: 120, w: 16, h: 20, r: 7 },
    // Near ring road
    { x: 130, y: 620, w: 16, h: 12, r: 4 }, { x: 250, y: 660, w: 14, h: 14, r: -6 },
    { x: 430, y: 650, w: 18, h: 12, r: 8 }, { x: 560, y: 670, w: 12, h: 16, r: -4 },
    { x: 720, y: 660, w: 20, h: 14, r: 3 }, { x: 880, y: 680, w: 16, h: 12, r: -9 },
    { x: 1020, y: 640, w: 14, h: 18, r: 6 }, { x: 1160, y: 670, w: 18, h: 14, r: -2 },
  ];

  buildings.forEach((b, i) => {
    p.push(
      `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="1" fill="${c(i)}" opacity="0.06" transform="rotate(${b.r} ${b.x + b.w / 2} ${b.y + b.h / 2})"/>`
    );
  });

  // ── Roundabouts ──
  const roundabouts = [
    { x: 350, y: 290 }, { x: 650, y: 300 }, { x: 800, y: 400 },
    { x: 400, y: 470 }, { x: 500, y: 620 }, { x: 780, y: 640 },
    { x: 200, y: 490 }, { x: 950, y: 470 }, { x: 1100, y: 630 },
  ];
  roundabouts.forEach((r, i) => {
    p.push(`<circle cx="${r.x}" cy="${r.y}" r="7" fill="none" stroke="${c(i)}" stroke-width="0.8" opacity="0.14"/>`);
    p.push(`<circle cx="${r.x}" cy="${r.y}" r="2.5" fill="${c(i)}" opacity="0.10"/>`);
  });

  // ── GPS Pins ──
  const pins = [
    { x: 200, y: 270 }, { x: 450, y: 330 }, { x: 700, y: 280 },
    { x: 550, y: 500 }, { x: 350, y: 600 }, { x: 850, y: 560 },
    { x: 150, y: 450 }, { x: 950, y: 350 }, { x: 1100, y: 500 },
    { x: 300, y: 180 }, { x: 600, y: 150 }, { x: 900, y: 200 },
    { x: 400, y: 700 }, { x: 750, y: 700 }, { x: 1050, y: 300 },
    { x: 100, y: 600 }, { x: 650, y: 600 }, { x: 1000, y: 680 },
  ];
  pins.forEach((pin, i) => {
    const color = c(i);
    p.push(
      `<g transform="translate(${pin.x},${pin.y})" opacity="0.20">` +
        `<path d="M0-9 C-4-9 -7-5 -7-3 C-7 1 0 7 0 7 C0 7 7 1 7-3 C7-5 4-9 0-9Z" fill="${color}"/>` +
        `<circle cx="0" cy="-3" r="2" fill="white" opacity="0.9"/>` +
      `</g>`
    );
  });

  // ── River (organic S-curve) ──
  p.push(
    `<path d="M1300 -20 C1250 80 1180 150 1200 250 S1150 400 1180 500 S1120 650 1200 800 L1250 950" fill="none" stroke="${c(1)}" stroke-width="4" opacity="0.05" stroke-linecap="round"/>`
  );
  // River banks
  p.push(
    `<path d="M1310 -20 C1260 80 1190 150 1210 250 S1160 400 1190 500 S1130 650 1210 800 L1260 950" fill="none" stroke="${c(1)}" stroke-width="0.5" opacity="0.08" stroke-linecap="round"/>`
  );
  p.push(
    `<path d="M1290 -20 C1240 80 1170 150 1190 250 S1140 400 1170 500 S1110 650 1190 800 L1240 950" fill="none" stroke="${c(1)}" stroke-width="0.5" opacity="0.08" stroke-linecap="round"/>`
  );

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 950" preserveAspectRatio="xMidYMid slice">${p.join('')}</svg>`;
}

export default function MapBackground({ products }: MapBackgroundProps) {
  const activeProducts = products && products.length > 0
    ? products
    : (['timetracker', 'flow', 'verifier'] as const);

  const colors = activeProducts.map((p) => COLORS[p]);
  const svg = buildSvg(colors);
  const encoded = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: '-15% -8%',
        width: '116%',
        height: '130%',
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage: encoded,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'perspective(1200px) rotateX(10deg) rotateZ(-2deg)',
        transformOrigin: 'center center',
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 15%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.9) 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 15%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.9) 100%)',
      }}
    />
  );
}
