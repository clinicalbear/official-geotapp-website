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

  // ── LEFT SIDE — organic European old town ──

  // Main boulevard curving left side
  p.push(`<path d="M-20 280 C80 260 180 300 280 270 S400 230 500 290 S600 350 680 310" fill="none" stroke="${c(0)}" stroke-width="1.5" opacity="0.16" stroke-linecap="round"/>`);
  // Vertical main road left
  p.push(`<path d="M300 -20 C280 80 320 180 290 300 S260 420 310 550 S340 680 280 850 L260 950" fill="none" stroke="${c(1)}" stroke-width="1.5" opacity="0.16" stroke-linecap="round"/>`);
  // Diagonal avenue left
  p.push(`<path d="M-20 120 C60 140 150 200 250 310 S350 430 420 520 S480 600 500 700" fill="none" stroke="${c(2)}" stroke-width="1.4" opacity="0.14" stroke-linecap="round"/>`);
  // Lower horizontal left
  p.push(`<path d="M-20 580 C100 560 200 600 320 570 S450 530 550 580" fill="none" stroke="${c(0)}" stroke-width="1.3" opacity="0.14" stroke-linecap="round"/>`);
  // Left side streets
  p.push(`<path d="M120 260 C140 330 100 400 150 470" fill="none" stroke="${c(1)}" stroke-width="0.7" opacity="0.11" stroke-linecap="round"/>`);
  p.push(`<path d="M280 270 C300 340 270 410 310 490" fill="none" stroke="${c(2)}" stroke-width="0.7" opacity="0.11" stroke-linecap="round"/>`);
  p.push(`<path d="M420 230 C400 300 440 370 410 440" fill="none" stroke="${c(0)}" stroke-width="0.7" opacity="0.11" stroke-linecap="round"/>`);
  p.push(`<path d="M80 400 C130 420 170 390 220 430" fill="none" stroke="${c(1)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  p.push(`<path d="M180 500 C230 520 260 490 320 530" fill="none" stroke="${c(2)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  p.push(`<path d="M100 140 C130 190 110 240 160 280" fill="none" stroke="${c(0)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  p.push(`<path d="M350 130 C340 200 370 270 340 340" fill="none" stroke="${c(1)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  // Alleys
  p.push(`<path d="M160 310 C180 330 170 360 190 380" fill="none" stroke="${c(2)}" stroke-width="0.4" opacity="0.09" stroke-linecap="round"/>`);
  p.push(`<path d="M250 400 C270 430 250 460 280 480" fill="none" stroke="${c(0)}" stroke-width="0.4" opacity="0.09" stroke-linecap="round"/>`);
  p.push(`<path d="M380 350 C400 370 390 400 410 430" fill="none" stroke="${c(1)}" stroke-width="0.4" opacity="0.09" stroke-linecap="round"/>`);
  p.push(`<path d="M70 500 L30 530" fill="none" stroke="${c(2)}" stroke-width="0.4" opacity="0.08" stroke-linecap="round"/>`);
  p.push(`<path d="M200 600 L160 640" fill="none" stroke="${c(0)}" stroke-width="0.4" opacity="0.08" stroke-linecap="round"/>`);

  // ── RIGHT SIDE — different neighborhood, more diagonal/radial ──

  // Radial road from a central point (piazza)
  const piazzaX = 1050, piazzaY = 400;
  p.push(`<path d="M${piazzaX} ${piazzaY} C1100 350 1150 280 1200 200 S1280 100 1350 -20" fill="none" stroke="${c(0)}" stroke-width="1.4" opacity="0.15" stroke-linecap="round"/>`);
  p.push(`<path d="M${piazzaX} ${piazzaY} C1120 420 1200 450 1300 460 S1380 470 1450 480" fill="none" stroke="${c(1)}" stroke-width="1.4" opacity="0.15" stroke-linecap="round"/>`);
  p.push(`<path d="M${piazzaX} ${piazzaY} C1080 460 1120 540 1150 640 S1180 750 1200 850" fill="none" stroke="${c(2)}" stroke-width="1.4" opacity="0.15" stroke-linecap="round"/>`);
  p.push(`<path d="M${piazzaX} ${piazzaY} C1000 440 950 500 900 580 S840 680 800 780" fill="none" stroke="${c(0)}" stroke-width="1.3" opacity="0.14" stroke-linecap="round"/>`);
  p.push(`<path d="M${piazzaX} ${piazzaY} C1010 350 980 280 960 200 S930 100 920 -20" fill="none" stroke="${c(1)}" stroke-width="1.3" opacity="0.14" stroke-linecap="round"/>`);
  p.push(`<path d="M${piazzaX} ${piazzaY} C1100 380 1180 340 1280 310 S1380 280 1450 260" fill="none" stroke="${c(2)}" stroke-width="1.2" opacity="0.13" stroke-linecap="round"/>`);
  // Ring around piazza
  p.push(`<circle cx="${piazzaX}" cy="${piazzaY}" r="30" fill="none" stroke="${c(0)}" stroke-width="1.2" opacity="0.14"/>`);
  p.push(`<circle cx="${piazzaX}" cy="${piazzaY}" r="10" fill="${c(0)}" opacity="0.06"/>`);
  // Right side streets connecting radials
  p.push(`<path d="M1100 280 C1140 310 1120 360 1160 380" fill="none" stroke="${c(1)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  p.push(`<path d="M1200 350 C1220 400 1180 440 1220 480" fill="none" stroke="${c(2)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  p.push(`<path d="M1000 300 C1040 330 1020 370 1060 400" fill="none" stroke="${c(0)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  p.push(`<path d="M950 480 C990 510 970 550 1010 580" fill="none" stroke="${c(1)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  p.push(`<path d="M1100 520 C1140 550 1120 590 1160 620" fill="none" stroke="${c(2)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  p.push(`<path d="M1180 200 C1220 240 1200 280 1240 320" fill="none" stroke="${c(0)}" stroke-width="0.5" opacity="0.09" stroke-linecap="round"/>`);

  // ── CENTER — connecting roads between left and right neighborhoods ──
  p.push(`<path d="M550 290 C620 300 700 350 780 340 S860 320 950 360 L${piazzaX} ${piazzaY}" fill="none" stroke="${c(2)}" stroke-width="1.3" opacity="0.14" stroke-linecap="round"/>`);
  p.push(`<path d="M500 520 C580 500 660 540 750 510 S850 470 950 500" fill="none" stroke="${c(0)}" stroke-width="1.0" opacity="0.12" stroke-linecap="round"/>`);
  p.push(`<path d="M550 700 C650 680 750 720 850 690 S950 650 1050 700" fill="none" stroke="${c(1)}" stroke-width="0.8" opacity="0.11" stroke-linecap="round"/>`);
  // Center side streets
  p.push(`<path d="M620 300 C640 370 610 430 650 500" fill="none" stroke="${c(2)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  p.push(`<path d="M780 340 C760 410 800 480 770 550" fill="none" stroke="${c(0)}" stroke-width="0.6" opacity="0.10" stroke-linecap="round"/>`);
  p.push(`<path d="M700 200 C720 260 690 330 720 390" fill="none" stroke="${c(1)}" stroke-width="0.5" opacity="0.09" stroke-linecap="round"/>`);

  // ── Roundabouts ──
  const roundabouts = [
    { x: 280, y: 270 }, { x: 500, y: 290 }, { x: 310, y: 550 },
    { x: 420, y: 520 }, { x: 680, y: 310 }, { x: 780, y: 510 },
    { x: 900, y: 580 }, { x: 1150, y: 280 }, { x: 1200, y: 480 },
  ];
  roundabouts.forEach((r, i) => {
    p.push(`<circle cx="${r.x}" cy="${r.y}" r="6" fill="none" stroke="${c(i)}" stroke-width="0.8" opacity="0.13"/>`);
    p.push(`<circle cx="${r.x}" cy="${r.y}" r="2" fill="${c(i)}" opacity="0.08"/>`);
  });

  // ── Buildings — rotated, varied sizes, along streets ──
  const bldgs = [
    // Left neighborhood
    { x: 80, y: 240, w: 18, h: 12, r: -6 }, { x: 130, y: 285, w: 14, h: 20, r: 10 },
    { x: 200, y: 250, w: 20, h: 14, r: -4 }, { x: 170, y: 330, w: 16, h: 22, r: 15 },
    { x: 230, y: 370, w: 22, h: 12, r: -8 }, { x: 310, y: 330, w: 14, h: 18, r: 5 },
    { x: 350, y: 400, w: 18, h: 14, r: -12 }, { x: 420, y: 350, w: 16, h: 20, r: 8 },
    { x: 110, y: 430, w: 20, h: 16, r: -3 }, { x: 180, y: 470, w: 14, h: 14, r: 12 },
    { x: 260, y: 440, w: 18, h: 12, r: -7 }, { x: 340, y: 480, w: 16, h: 18, r: 4 },
    { x: 80, y: 530, w: 14, h: 16, r: 9 }, { x: 150, y: 560, w: 20, h: 12, r: -5 },
    { x: 250, y: 540, w: 16, h: 20, r: 6 }, { x: 350, y: 580, w: 18, h: 14, r: -10 },
    { x: 420, y: 560, w: 12, h: 16, r: 3 }, { x: 480, y: 520, w: 22, h: 14, r: -8 },
    { x: 100, y: 160, w: 16, h: 12, r: 14 }, { x: 200, y: 180, w: 14, h: 18, r: 20 },
    { x: 350, y: 180, w: 18, h: 14, r: -6 }, { x: 450, y: 260, w: 14, h: 16, r: 8 },
    { x: 130, y: 620, w: 18, h: 12, r: 4 }, { x: 250, y: 640, w: 14, h: 18, r: -8 },
    { x: 380, y: 630, w: 20, h: 14, r: 6 }, { x: 450, y: 660, w: 16, h: 12, r: -3 },
    // Right neighborhood (around piazza, angled differently)
    { x: 1000, y: 320, w: 16, h: 14, r: -25 }, { x: 1080, y: 300, w: 14, h: 18, r: 30 },
    { x: 1140, y: 340, w: 18, h: 12, r: -15 }, { x: 1100, y: 440, w: 20, h: 16, r: 20 },
    { x: 1030, y: 480, w: 14, h: 14, r: -30 }, { x: 1150, y: 480, w: 16, h: 18, r: 25 },
    { x: 980, y: 540, w: 18, h: 12, r: -20 }, { x: 1060, y: 560, w: 14, h: 20, r: 15 },
    { x: 1180, y: 560, w: 20, h: 14, r: -10 }, { x: 1120, y: 220, w: 16, h: 16, r: 35 },
    { x: 1220, y: 260, w: 14, h: 12, r: -20 }, { x: 1250, y: 400, w: 18, h: 16, r: 10 },
    { x: 1160, y: 640, w: 16, h: 14, r: -25 }, { x: 1080, y: 680, w: 14, h: 18, r: 20 },
    { x: 960, y: 200, w: 18, h: 12, r: -15 }, { x: 1000, y: 140, w: 14, h: 16, r: 10 },
    { x: 1200, y: 160, w: 20, h: 14, r: 25 }, { x: 1300, y: 350, w: 16, h: 18, r: -30 },
    // Center
    { x: 600, y: 320, w: 16, h: 14, r: 8 }, { x: 660, y: 370, w: 14, h: 18, r: -6 },
    { x: 720, y: 400, w: 18, h: 12, r: 12 }, { x: 780, y: 450, w: 14, h: 16, r: -10 },
    { x: 640, y: 480, w: 20, h: 14, r: 5 }, { x: 700, y: 540, w: 16, h: 18, r: -8 },
    { x: 550, y: 400, w: 14, h: 12, r: 10 }, { x: 850, y: 420, w: 18, h: 16, r: -4 },
    { x: 580, y: 600, w: 16, h: 14, r: 7 }, { x: 700, y: 650, w: 14, h: 18, r: -12 },
    { x: 820, y: 630, w: 18, h: 12, r: 9 }, { x: 900, y: 660, w: 16, h: 16, r: -6 },
  ];
  bldgs.forEach((b, i) => {
    p.push(
      `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="1" fill="${c(i)}" opacity="0.06" transform="rotate(${b.r} ${b.x + b.w / 2} ${b.y + b.h / 2})"/>`
    );
  });

  // ── GPS Pins ──
  const pins = [
    { x: 200, y: 250 }, { x: 400, y: 280 }, { x: 150, y: 450 },
    { x: 320, y: 530 }, { x: 450, y: 650 }, { x: 100, y: 600 },
    { x: piazzaX, y: piazzaY - 40 }, { x: 1150, y: 260 }, { x: 1200, y: 470 },
    { x: 1080, y: 650 }, { x: 950, y: 550 }, { x: 680, y: 290 },
    { x: 750, y: 500 }, { x: 600, y: 620 }, { x: 850, y: 680 },
    { x: 280, y: 180 }, { x: 500, y: 400 }, { x: 1300, y: 340 },
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
