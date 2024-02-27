/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        borderGray : "#F2F2F2",
        tableHeading : "#8183A6",
        headingRow : "#FAFAFB",
        headingRowIem : "#939FB1",
        tableSeparator : "#EDF2F7",
        grayTableText : "#596087",
        mobileText : "#ACB4BC",
        pillBG : "#E4ECF7"
      }
    },
  },
  plugins: [],
}

