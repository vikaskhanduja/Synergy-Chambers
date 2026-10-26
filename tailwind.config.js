/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#061612', // Deepest Courtroom Forest Ink
          900: '#0B221B', // Prestige Pine Ink
          850: '#102E25', // Midnight Chambers Emerald
          800: '#173D32', // Courtroom Slate
          750: '#1E4D40',
          700: '#275F4F',
          600: '#347C68',
          500: '#489F87',
          200: '#CFE6DE',
          100: '#E5F2ED',
          50: '#F2F8F5',
        },
        gold: {
          50: '#FCF9F3', // Softest Champagne Linen
          100: '#F7EFE1', // Light Pale Gilt
          200: '#ECDCBF', // Warm Antique Accent
          300: '#DEC293', // Soft Champagne Gold
          400: '#CCA86E', // Luminous Regal Gold
          500: '#B89253', // Primary Warm Imperial Gold
          600: '#9E7A3D', // Deep Aged Gold
          700: '#82622C', // Rich Saddle Gold
          800: '#654B1E', // Dark Antique Umber
          900: '#483412', // Deep Bronze
        },
        charcoal: {
          950: '#0E1613',
          900: '#16211D',
          800: '#1F2E28', // Primary deep readable text
          700: '#31443D', // Secondary dark text
          600: '#495D56', // Reading slate
          500: '#647A73', // Muted label
          400: '#879E97', // Subtle caption
          300: '#B4C5BF',
          200: '#E1E8E4', // Soft hairline borders
          100: '#ECF2EE',
          50: '#F4F8F5',
        },
        paper: {
          50: '#FFFFFF',
          100: '#FAFBF8', // Pure Archival Ivory Canvas
          200: '#F2F5F0', // Soft Muted Alabaster
          300: '#E4EAE1', // Subtle Courtroom Stone
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(7, 25, 20, 0.04), 0 10px 24px -10px rgba(7, 25, 20, 0.04)',
        'card': '0 4px 20px -4px rgba(7, 25, 20, 0.06), 0 0 0 1px rgba(23, 61, 50, 0.08)',
        'premium': '0 12px 32px -6px rgba(7, 25, 20, 0.09), 0 0 0 1px rgba(184, 146, 83, 0.28)',
        'elevated': '0 20px 48px -12px rgba(6, 22, 18, 0.16), 0 0 0 1px rgba(6, 22, 18, 0.1)',
      }
    },
  },
  plugins: [],
}
