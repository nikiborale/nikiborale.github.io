/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        headingAlt: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        body: ['"Inter"', '"Source Sans 3"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ivory: '#F3F7FB',
        blush: '#7FD1FF',
        renaissance: '#1B4D7A',
        sage: '#7EC4A1',
        ochre: '#48BFE3',
        lavender: '#A3BFFA',
        ink: '#0B1E2D',
        cocoa: '#29465B',
        rose: '#D9F0FF',
        mist: '#E7F1FA',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(158, 42, 43, 0.12)',
        bloom: '0 18px 40px rgba(199, 154, 59, 0.22)',
      },
      backgroundImage: {
        watercolor:
          'radial-gradient(circle at 20% 20%, rgba(232, 160, 168, 0.28), transparent 45%), radial-gradient(circle at 70% 10%, rgba(200, 182, 226, 0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(156, 175, 136, 0.25), transparent 45%), radial-gradient(circle at 15% 80%, rgba(199, 154, 59, 0.18), transparent 40%)',
      },
    },
  },
  plugins: [],
}
