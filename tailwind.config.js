/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff9f8",
          100: "#d6f1ee",
          200: "#b0e4df",
          300: "#7ecfc8",
          400: "#48b3ab",
          500: "#2a9890",
          600: "#1f7b75",
          700: "#1d6360",
          800: "#1c504f",
          900: "#1b4242",
          950: "#0a2626",
        },
        ink: {
          50: "#f6f8fa",
          100: "#eaeef3",
          200: "#d3dbe3",
          300: "#aeb9c6",
          400: "#8294a6",
          500: "#627691",
          600: "#4d5e78",
          700: "#3f4c62",
          800: "#374154",
          900: "#0f172a",
          950: "#0a0f1c",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.04)",
        card: "0 1px 3px rgba(15,23,42,0.05), 0 10px 30px -10px rgba(15,23,42,0.08)",
        lift: "0 4px 8px rgba(15,23,42,0.04), 0 24px 48px -16px rgba(15,23,42,0.18)",
        glow: "0 10px 30px -10px rgba(31,123,117,0.45)",
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float-soft": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.6" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "float-soft": "float-soft 5s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.16,1,0.3,1) infinite",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
