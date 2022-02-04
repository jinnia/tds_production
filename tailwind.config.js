const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
            milonga: ['\'Milonga\', cursive;', ...defaultTheme.fontFamily.sans],
            //sans: ['Battlebridge', ...defaultTheme.fontFamily.sans]
          }
    },
    
  },
  plugins: [],
}
