/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ethereal: {
          pink: '#FCE4EC',
          lightPink: '#FFF1F6',
          purple: '#F3E5F5',
          lightPurple: '#FAFAFF',
          silver: '#C0C0C0',
          lightSilver: '#D1D5DB',
          deepPlum: '#4A148C',
          glowPink: 'rgba(252, 228, 236, 0.5)',
          glowPurple: 'rgba(243, 229, 245, 0.5)',
        },
        floral: {
          cream: '#FFF1F6', // Shifted cream towards a very pale pink
          sage: '#93A8AC', // Shifted sage towards a silvery blue-grey
          rose: '#F06292', // Brighter pink for highlights
          lavender: '#CE93D8', // Brighter purple for highlights
          darkSage: '#4A5568', // Silvery dark grey
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Mrs Saint Delafield"', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'fairy-drift': 'fairy-drift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.3, scale: '0.8' },
          '50%': { opacity: 1, scale: '1.2' },
        },
        'fairy-drift': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(100vw, -100vh)' },
        }
      }
    },
  },
  plugins: [],
}
