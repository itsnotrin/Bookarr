const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // *arr suite uses these colors
        primary: colors.orange[500],
        secondary: colors.gray[700],
        accent: colors.orange[600],
        background: {
          light: colors.white,
          dark: '#1c1c1c',
        },
        sidebar: {
          light: colors.gray[100],
          dark: '#2c2c2c',
        }
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
      },
    },
  },
  plugins: [],
} 