import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // Pure White
        surface: "#f8fafc",    // Slate 50 (Very light gray for cards/sections)
        border: "#e2e8f0",     // Slate 200 (Subtle borders)

        // Brand Colors (Adjusted for Light Mode visibility)
        primary: {
          DEFAULT: "#8FC436", // GeoTapp Green
          glow: "rgba(143, 196, 54, 0.2)" // Lighter glow
        },
        zenith: {
          DEFAULT: "#00b5af", // Darker Cyan for white bg
          glow: "rgba(0, 181, 175, 0.2)"
        },
        superwp: {
          DEFAULT: "#c026d3", // Fuchsia-600
          glow: "rgba(192, 38, 211, 0.2)"
        },
        flow: {
          DEFAULT: "#059669", // Emerald-600
          glow: "rgba(5, 150, 105, 0.2)"
        },
        app: {
          DEFAULT: "#d97706", // Amber-600
          glow: "rgba(217, 119, 6, 0.2)"
        },

        text: {
          primary: "#0f172a",   // Slate 900 (Nearly Black)
          secondary: "#475569", // Slate 600
          muted: "#94a3b8"      // Slate 400
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Unbounded", "Inter", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config
