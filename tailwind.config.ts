

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F9FC', // L: avorio
        surface: '#EAECF0', // L: avorio caldo per schede e sezioni
        border: 'rgba(11,23,54,0.16)', // L: filo scuro invece del grigio azzurro
        ink: '#0B1736', // L: nero pieno
        lime: '#22B573', // L: verde chiaro su fondo scuro

        // Brand Colors (Adjusted for Light Mode visibility)
        primary: {
          DEFAULT: '#22B573', // GeoTapp Green
          glow: 'rgba(34, 181, 115, 0.2)', // Lighter glow
        },
        'brand-green': '#52C065', // Logo icon green (gradient top of G)
        'brand-blue': '#19B5D8',  // Logo text blue ("GeoTapp")
        // L'azzurro del marchio su fondo chiaro fa 2,63 contro il minimo di
        // 4,5. Questa tinta ne tiene il tono e arriva a 5,15: si usa per il
        // TESTO su fondo chiaro, mai per i fondi.
        'brand-blue-ink': '#0E7C99',
        flow: {
          DEFAULT: '#8B5CF6', // Flow purple/lilla
          glow: 'rgba(139, 92, 246, 0.2)',
        },
        app: {
          DEFAULT: '#d97706', // Amber-600
          glow: 'rgba(217, 119, 6, 0.2)',
        },

        text: {
          primary: '#0B1736', // L: nero pieno
          secondary: '#475467', // L: verde grigio per il testo di servizio
          muted: '#667085', // L: etichette
        },
      },
      // A45: Manrope titoli, Source Sans 3 corpo, IBM Plex Mono codici e
      // coordinate. Le variabili le mette src/lib/fonts.ts sul <body>.
      fontFamily: {
        sans: ['var(--font-body)', 'Source Sans Pro', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
