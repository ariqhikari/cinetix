/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "accent-black": "#333333",
        "accent-gray": "#191919",
        "medium-gray": "#191919",
        "light-gray": "#F5F5F5",
        yellow: "#F2C46F",
        "light-yellow": "#FFB60233",
        cream: "#FFF2D2",
        red: "#F37878",
        "light-red": "#EA433533",
        green: "#17FF8F",
        gray: "#5A637A",
        blue: "#118EEA",
        "dark-blue": "#1A2C50",
      },
    },
  },
  plugins: [],
});
