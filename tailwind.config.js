/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f5f2',
          100: '#f2e9e2',
          200: '#e6d5c7',
          300: '#d9bba7',
          400: '#cc9a7f',
          500: '#bd8060',
          600: '#b06242',
          700: '#a25236',
          800: '#8d4631',
          900: '#783e2d',
          950: '#411f17',
        },
        secondary: {
          50: '#fefbed',
          100: '#fdf7d0',
          200: '#faf099',
          300: '#f6e15b',
          400: '#f2cb2a',
          500: '#e3b115',
          600: '#c3890d',
          700: '#9c640e',
          800: '#7f4e12',
          900: '#694014',
          950: '#3c2108',
        },
        accent: {
          50: '#f8f8f8',
          100: '#f1ebe7',
          200: '#decdbc',
          300: '#cba68e',
          400: '#b88262',
          500: '#a66947',
          600: '#95583c',
          700: '#7d4930',
          800: '#673c2a',
          900: '#543325',
          950: '#2d1a14',
        },
        dark: {
          100: '#292524',
          200: '#1c1917',
          300: '#0c0a09',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};