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
          950: '#070D19',
          900: '#0A1428',
          850: '#0D1B36',
          800: '#112244',
          700: '#1A3366',
          600: '#264A8E',
          100: '#E8EDF5',
          50: '#F4F6FA',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F9F4EB',
          200: '#EDE0CC',
          300: '#DFC8A6',
          400: '#D0B080',
          500: '#C5A880', // primary muted gold
          600: '#B59463',
          700: '#947447',
          800: '#755832',
          900: '#523D20',
        },
        charcoal: {
          900: '#121417',
          800: '#1E2229',
          700: '#2D323B',
          600: '#4A5160',
          500: '#687282',
          400: '#9BA3AF',
          300: '#CBD1D8',
          100: '#F0F2F5',
          50: '#F8F9FA',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(10, 20, 40, 0.05), 0 20px 40px -15px rgba(10, 20, 40, 0.05)',
        'premium': '0 10px 30px -5px rgba(10, 20, 40, 0.08), 0 0 0 1px rgba(197, 168, 128, 0.15)',
        'elevated': '0 20px 40px -10px rgba(10, 20, 40, 0.12), 0 0 0 1px rgba(10, 20, 40, 0.06)',
      }
    },
  },
  plugins: [],
}
