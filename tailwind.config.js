const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'special-pink' : "#6b5b95",
        'special-black': "#12130f",
      },
      boxShadow: {
        'header-white': '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
        'header-black': '0px 2.98256px 7.4564px rgba(22,22,22,1)'
      }
    },
  },
  plugins: [],
}