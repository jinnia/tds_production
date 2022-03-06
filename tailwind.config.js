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
        milonga: ['\'Museo\', cursive;'],
        philosopher: ['\'Museo\', cursive;'],
        Battlebridge: ['Museo'],
        Museo: ['Museo']
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
        blob: "blob 10s infinite",
        blob_1: "blob_1 10s infinite",
        tilt: 'tilt 10s infinite linear',
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

        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.8deg)',
          },
          '75%': {
            transform: 'rotate(-0.8deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
    },

  },
  plugins: [],
})
