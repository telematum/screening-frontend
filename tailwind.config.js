/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-color": "#fafafb",
        "header-text-color": "#8080a1",
      },
    },
  },
  plugins: [],
};
