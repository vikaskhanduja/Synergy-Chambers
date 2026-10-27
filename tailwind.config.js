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
          950: '#09101D', // Deep Chancery Ink
          900: '#0E1729', // Oxford Midnight
          850: '#142036', // Chambers Slate
          800: '#1C2B47', // Courtroom Slate
          750: '#243759',
          700: '#2E456E',
          600: '#3D5B90',
          500: '#5174B2',
          200: '#D3DFEE',
          100: '#E7EFF8',
          50: '#F2F6FA',
        },
        gold: {
          50: '#FCFAF5',
          100: '#F7F2E6',
          200: '#EDE2CB',
          300: '#DFCDB0',
          400: '#CFB58E',
          500: '#B89665', // Refined Antique Bronze Gold
          600: '#9E7E4E',
          700: '#82653A',
          800: '#664E29',
          900: '#4A371B',
        },
        charcoal: {
          950: '#0A0F18',
          900: '#111827', // Deepest readable ink
          800: '#1F2937', // Primary body text
          700: '#374151', // Secondary text
          600: '#4B5563', // Subtext
          500: '#6B7280', // Muted caption
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB', // Delicate hairline border
          100: '#F3F4F6', // Soft tint
          50: '#F9FAFB',  // Clean background
        },
        paper: {
          50: '#FFFFFF',
          100: '#FDFDFD',
          200: '#F8F9FA', // Clean Alabaster
          300: '#F1F3F5', // Soft Stone
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(15, 23, 42, 0.04), 0 6px 16px -4px rgba(15, 23, 42, 0.04)',
        'card': '0 2px 10px -2px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(15, 23, 42, 0.05)',
        'premium': '0 8px 24px -4px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(184, 150, 101, 0.25)',
        'elevated': '0 16px 36px -8px rgba(9, 16, 29, 0.16), 0 0 0 1px rgba(9, 16, 29, 0.08)',
      }
    },
  },
  plugins: [],
}
