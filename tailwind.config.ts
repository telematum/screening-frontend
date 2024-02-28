import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        grayShade: {
          1: '#e9eaeb',
          2: '#7a7a9d',
          3: '#fafafb',
          4: '#edf2f7',
          5: '#8492a6',
          6: '#425466',
          7: '#a3a3bc',
        },

        blueShade: {
          1: '#e4ecf7',
          2: '#505780',
          3: '#dbe3f0',
        }
      }
    },
  },
  plugins: [],
};
export default config;
