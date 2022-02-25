const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        milonga: ['\'Milonga\', cursive;'],
        philosopher: ['\'Morning Glory\', cursive;'],
        Battlebridge: ['Morning Glory']
      },
      borderRadius: {
        extraLarge: '2rem'
        // K22: ['\'K22\' , Arial, sans-serif;'],
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }
    },

  },
  plugins: [],
}
