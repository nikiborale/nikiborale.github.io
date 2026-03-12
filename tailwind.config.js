/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        charcoal: "#0f1722",
        navy: "#0b1a2a",
        gold: "#d4af37",
        sage: "#9fb5a9",
        blush: "#f2c3d1",
        ivory: "#f5f3ed",
        fog: "#cfd3d8",
        card: "#151f2e",
      },
      boxShadow: {
        glow: "0 20px 60px rgba(212, 175, 55, 0.15)",
      },
    },
  },
  plugins: [],
}
