/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100:'hsl(12, 88%, 59%)',
          200:'hsl(228, 39%, 23%)',
        },
        secondary:{
          100:'hsl(227, 12%, 61%)',
          200:'hsl(233, 12%, 13%)',
          300:'hsl(13, 100%, 96%)',
          400:'hsl(0, 0%, 98%)'
        },
      },
      fontFamily: {
        'be-vietnam-pro': ['Be Vietnam Pro', 'sans-serif'],
      },
      spacing: {
        '4/10': '40%',
        'screen-1/4':'25vh',
        'screen-1/3':'33vh',
        'screen-1/2':'50vh',
        'screen-3/4':'75vh',
        'screen-5/4':'125vh',
        'screen-3/2':'150vh',
        'screen-7/4':'175vh',
        'screen-2/1':'200vh'
      }
    },
  },
  plugins: [],
}
