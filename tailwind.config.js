/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    plugins: [],
  },
  safelist: [
    'bg-red-200',
    'bg-yellow-200',
    'bg-gray-200',
    'bg-blue-200',
    'bg-green-200'
  ]
}
