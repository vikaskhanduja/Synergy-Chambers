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
          950: '#070C14', // Deepest Royal Midnight Ink
          900: '#0C1424', // Executive Chambers Navy
          850: '#111C30', // Midnight Slate
          800: '#18263E', // Classic Courtroom Slate
          750: '#20314E',
          700: '#2A3F62',
          600: '#39537E',
          500: '#4D6FA0',
          200: '#D2DFEF',
          100: '#E6EDF7',
          50: '#F1F5FA',
        },
        gold: {
          50: '#FCF9F2', // Softest Champagne Linen
          100: '#F7F0DF', // Light Pale Gilt
          200: '#EDDEBE', // Warm Antique Accent
          300: '#DEC795', // Soft Champagne Gold
          400: '#CBAE6F', // Luminous Regal Gold
          500: '#B6954F', // Primary Warm Executive Gold
          600: '#9C7C3B', // Deep Aged Gold
          700: '#7F622A', // Rich Saddle Gold
          800: '#634B1D', // Dark Antique Umber
          900: '#463311', // Deep Bronze
        },
        charcoal: {
          950: '#090D14',
          900: '#0F172A',
          800: '#1E293B', // Primary deep readable text
          700: '#334155', // Secondary dark text
          600: '#475569', // Reading slate
          500: '#64748B', // Muted label
          400: '#94A3B8', // Subtle caption
          300: '#CBD5E1',
          200: '#E2E8F0', // Soft hairline borders
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        paper: {
          50: '#FFFFFF',
          100: '#FDFDFE', // Crisp Modern Paper
          200: '#F8FAFC', // Clean Light Alabaster
          300: '#EEF2F6', // Subtle Slate Stone
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(7, 12, 20, 0.04), 0 10px 24px -10px rgba(7, 12, 20, 0.04)',
        'card': '0 4px 20px -4px rgba(7, 12, 20, 0.06), 0 0 0 1px rgba(12, 20, 36, 0.08)',
        'premium': '0 12px 32px -6px rgba(7, 12, 20, 0.1), 0 0 0 1px rgba(182, 149, 79, 0.3)',
        'elevated': '0 20px 48px -12px rgba(7, 12, 20, 0.2), 0 0 0 1px rgba(7, 12, 20, 0.12)',
      }
    },
  },
  plugins: [],
}
