/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        atelier: {
          fog: '#FDFCFA',     // Pristine Broadsheet White
          bone: '#F7F4EE',    // Gallery Archival Bone Canvas
          chalk: '#ECE7DD',   // Warm Legal Linen
          sand: '#DAD3C3',    // Hairline Border Rule
          taupe: '#7D7368',   // Editorial Sepia Metadata
          slate: '#363D44',   // Reading Body Charcoal
          carbon: '#14171A',  // Deep Mineral Carbon
          black: '#0A0C0E',   // Absolute Obsidian
          bronze: '#996C37',  // Burnished Architectural Ochre
          gold: '#C99E56',    // Luminous Antique Gilt
          ochre: '#855A28',   // Deep Legal Seal Ochre
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'monumental': '0.28em',
        'loose-editorial': '0.18em',
      },
      boxShadow: {
        'atelier-subtle': '0 2px 8px rgba(18, 20, 22, 0.04)',
        'atelier-card': '0 8px 30px rgba(18, 20, 22, 0.06)',
        'atelier-elevated': '0 24px 60px rgba(10, 12, 14, 0.22)',
      }
    },
  },
  plugins: [],
}
