/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#090c10",
        surface: "#0f1318",
        card: "#141920",
        border: "#1e2530",
        accent: "#00e5ff",
        accent2: "#7c3aed",
        accent3: "#f97316",
        muted: "#4a5568",
        text: "#e2e8f0",
        "text-dim": "#8892a4",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.7, transform: "scale(0.97)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(195,100%,50%,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(263,70%,60%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(195,100%,50%,0.07) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
