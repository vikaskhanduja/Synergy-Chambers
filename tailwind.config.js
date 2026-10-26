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
          950: '#0A1017', // Deep chancery ink
          900: '#101722', // Oxford ink
          850: '#151F2E', // Midnight slate
          800: '#1C293D', // Chambers slate
          750: '#23334A',
          700: '#2B3D57',
          600: '#3D557A',
          500: '#526E99',
          200: '#D5DFEC',
          100: '#E8EDF5',
          50: '#F2F5F9',
        },
        gold: {
          50: '#FAF6EF', // Soft warm linen
          100: '#F5EDDF', // Light parchment
          200: '#EBDCC5', // Warm antique border
          300: '#DAC297', // Soft antique bronze
          400: '#C4A269', // Champagne bronze
          500: '#AC8549', // Primary muted antique bronze
          600: '#947038', // Deep aged bronze
          700: '#7B5B2A', // Rich saddle bronze
          800: '#60451E', // Dark bronze
          900: '#453012', // Deep umber
        },
        charcoal: {
          950: '#111317',
          900: '#181B20',
          800: '#22262E', // Primary warm body text
          700: '#353B47', // Secondary dark text
          600: '#4E5564', // Reading gray
          500: '#687182', // Muted label
          400: '#8E97A6', // Subtle caption
          300: '#BDC4CF',
          200: '#E8E4DB', // Hairline borders
          100: '#EDEFEA',
          50: '#F5F4F0',
        },
        paper: {
          50: '#FDFCF9',
          100: '#FBF9F5',
          200: '#F5F2EB',
          300: '#EBE6DC',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(16, 23, 34, 0.04), 0 10px 24px -10px rgba(16, 23, 34, 0.04)',
        'card': '0 4px 20px -4px rgba(16, 23, 34, 0.05), 0 0 0 1px rgba(28, 41, 61, 0.06)',
        'premium': '0 12px 32px -6px rgba(16, 23, 34, 0.07), 0 0 0 1px rgba(172, 133, 73, 0.22)',
        'elevated': '0 20px 44px -12px rgba(16, 23, 34, 0.12), 0 0 0 1px rgba(16, 23, 34, 0.08)',
      }
    },
  },
  plugins: [],
}
