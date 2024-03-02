/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    screens: {
      'xs': '320px',
     
      'sm': '480px',

      'md': '640px',
    

      'lg': '1024px',


      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}

