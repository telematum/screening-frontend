/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        custom: "5rem", // Define your custom border radius value here
      },
    },
  },
  plugins: [],
};
