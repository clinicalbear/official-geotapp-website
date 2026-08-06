

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
        background: '#F2F0E9', // L: avorio
        surface: '#EAE7DE', // L: avorio caldo per schede e sezioni
        border: 'rgba(14,14,12,0.16)', // L: filo scuro invece del grigio azzurro
        ink: '#0E0E0C', // L: nero pieno
        lime: '#B6E86A', // L: verde chiaro su fondo scuro

        // Brand Colors (Adjusted for Light Mode visibility)
        primary: {
          DEFAULT: '#8FC436', // GeoTapp Green
          glow: 'rgba(143, 196, 54, 0.2)', // Lighter glow
        },
        'brand-green': '#52C065', // Logo icon green (gradient top of G)
        'brand-blue': '#2DA4E4',  // Logo text blue ("GeoTapp")
        flow: {
          DEFAULT: '#8B5CF6', // Flow purple/lilla
          glow: 'rgba(139, 92, 246, 0.2)',
        },
        app: {
          DEFAULT: '#d97706', // Amber-600
          glow: 'rgba(217, 119, 6, 0.2)',
        },

        text: {
          primary: '#0E0E0C', // L: nero pieno
          secondary: '#4A5244', // L: verde grigio per il testo di servizio
          muted: '#78836F', // L: etichette
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['var(--font-anton)', 'Anton', 'Impact', 'sans-serif'],
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
