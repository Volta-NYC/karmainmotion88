import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the KarmaInMotion88 logo:
        // deep navy ink, dusty rose, warm cream.
        cream: {
          DEFAULT: "#F6F0E6",
          deep: "#ECE2D2",
          soft: "#FBF7EF",
        },
        ink: {
          DEFAULT: "#0E1B33",
          soft: "#1C2C4B",
          muted: "#3A4868",
        },
        rose: {
          DEFAULT: "#BD4E6A",
          deep: "#9C3A54",
          soft: "#D98199",
          blush: "#E9C9CF",
        },
        taupe: {
          DEFAULT: "#6E665A",
          soft: "#8C8475",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        prose2: "68ch",
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(14, 27, 51, 0.28)",
        lift: "0 30px 80px -36px rgba(14, 27, 51, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-14px,0) scale(1.04)" },
        },
        "draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "drift-slow": "drift 14s ease-in-out infinite",
        "drift-slower": "drift 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
export default config
