const defaultTheme = require('tailwindcss/defaultTheme')
const withAnimations = require('animated-tailwindcss');
module.exports = withAnimations({
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
      },
      animation: {
        blob: "blob 20s infinite",
        blob_1: "blob_1 20s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(10px, -20px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },

        blob_1: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(40px, 80px) scale(1.1)",
          },
          "66%": {
            transform: "translate(80px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },

  },
  plugins: [],
})
