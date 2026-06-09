/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF9FF",
        "text-primary": "#111111",
        "text-secondary": "#666666",
        accent: "#CDB8FF",
        "accent-hover": "#A78BFA",
        "card-border": "#EAE4FF",
        "card-bg": "#F5F2FF",
        "surface": "#FFFFFF",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-mid": "float 6s ease-in-out infinite 1s",
        "float-fast": "float 4s ease-in-out infinite 0.5s",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
