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
        Battlebridge: ['Morning Glory'],
        Museo:['Museo']
      },
      borderRadius: {
        extraLarge: '2rem'
        // K22: ['\'K22\' , Arial, sans-serif;'],
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      animation:{
        blob:"blob 1s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            transform:"scale(1)",
          },
          "33%":{
            transform:"scale(1.2)",
          },
          "66%":{
            transform:"scale(0.8)"
          }
        },
      },
    },

  },
  plugins: [],
}
