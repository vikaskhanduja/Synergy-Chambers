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
        chambers: {
          navy: {
            950: '#070E18', // Deepest Chancery Ink
            900: '#0C1626', // Oxford Navy Primary
            850: '#111F36', // Deep Chamber Slate
            800: '#182C4C', // Courtroom Slate
            750: '#203962',
            700: '#2A4A7E',
            600: '#3D65A8',
            500: '#537FC7',
            200: '#D0DFFA',
            100: '#E6EFFF',
            50: '#F2F7FF',
          },
          gold: {
            50: '#FDFBF7',  // Pale Warm Parchment
            100: '#F9F5EC', // Light Linen Gilt
            200: '#EFE5D0', // Warm Antique Border
            300: '#E0CEAA', // Soft Muted Gold
            400: '#CDB27E', // Luminous Classic Gold
            500: '#B38E54', // Primary Antique Burnished Bronze/Gold
            600: '#977239', // Deep Aged Gold
            700: '#7C5B27', // Rich Saddle Gold
            800: '#60441A', // Dark Antique Umber
            900: '#432E10', // Deep Bronze
          },
          stone: {
            950: '#0D1117',
            900: '#161C24',
            800: '#212936', // Deepest readable body ink
            700: '#334155', // Secondary reading slate
            600: '#475569', // Reading gray
            500: '#64748B', // Muted label
            400: '#94A3B8', // Subtle caption
            300: '#CBD5E1',
            200: '#E2E8F0', // Delicate hairline border
            150: '#EAEFE9',
            100: '#F1F5F9', // Subtle card tint
            50: '#F8FAFC',  // Clean alabaster canvas
          },
          parchment: {
            50: '#FFFFFF',
            100: '#FAF8F5', // Archival Warm Linen
            200: '#F4F0E8', // Soft Muted Parchment
            300: '#E8E2D5', // Courtroom Stone
          }
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(12, 22, 38, 0.04), 0 6px 16px -4px rgba(12, 22, 38, 0.04)',
        'card': '0 2px 12px -2px rgba(12, 22, 38, 0.06), 0 0 0 1px rgba(12, 22, 38, 0.05)',
        'card-hover': '0 12px 32px -8px rgba(12, 22, 38, 0.1), 0 0 0 1px rgba(179, 142, 84, 0.28)',
        'premium': '0 16px 40px -12px rgba(12, 22, 38, 0.12), 0 0 0 1px rgba(179, 142, 84, 0.35)',
        'elevated': '0 24px 56px -16px rgba(7, 14, 24, 0.28), 0 0 0 1px rgba(179, 142, 84, 0.15)',
      }
    },
  },
  plugins: [],
}
