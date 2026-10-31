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
        forest: {
          950: '#061411', // Deepest Courtroom Obsidian Pine
          900: '#0C201A', // Lincoln's Inn Heritage Forest Green
          850: '#112A23', // Deep Chambers Slate Green
          800: '#18382F', // Traditional Barrister Green
          750: '#20473C',
          700: '#2A5A4D',
          600: '#3D7767',
          500: '#539683',
          200: '#C7E2D9',
          100: '#E4F1EC',
          50: '#F2F8F5',
        },
        aurum: {
          50: '#FDFBF7',  // Pale Warm Gilt
          100: '#F8F3E6', // Antique Linen Sheen
          200: '#EDE2C7', // Champagne Accent
          300: '#E0CE9F', // Soft Gilt
          400: '#D5B676', // Luminous Brass
          500: '#C5A059', // Primary Noble Champagne Aurum Brass
          600: '#A6833D', // Burnished English Brass
          700: '#876629', // Deep Bronze
          800: '#684D1B', // Dark Umber
          900: '#4A3510',
        },
        chalk: {
          50: '#FAF9F5',  // Noble Alabaster Canvas
          100: '#F4F1EA', // Warm Archival Legal Linen
          200: '#EAE5D9', // Subtle Stone Tint
          300: '#DDD6C6', // Hairline Stone Divider
          400: '#C7BEAB', // Muted Rule
        },
        ink: {
          950: '#0D1412', // Deepest Readable Obsidian Text
          900: '#18221F', // Crisp Primary Headline Ink
          800: '#26332F', // Primary Body Copy
          700: '#3A4B46', // Secondary Text
          600: '#50635E', // Muted Metadata
          500: '#6C807B', // Caption Slate
          400: '#94A6A2',
          300: '#CBD6D3',
          200: '#E2E9E7',
          100: '#F0F4F3',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(12, 32, 26, 0.04), 0 6px 16px -4px rgba(12, 32, 26, 0.04)',
        'card': '0 2px 10px -2px rgba(12, 32, 26, 0.06), 0 0 0 1px rgba(12, 32, 26, 0.06)',
        'elevated': '0 20px 48px -12px rgba(6, 20, 17, 0.25), 0 0 0 1px rgba(197, 160, 89, 0.2)',
      }
    },
  },
  plugins: [],
}
