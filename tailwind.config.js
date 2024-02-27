/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["satoshi_variable", "sans-serif"], // Use the correct font name
      },
    },
  },
  plugins: [],
};
