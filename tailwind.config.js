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
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "accent-black": "#191919",
        "accent-gray": "#191919",
        "medium-gray": "#191919",
        "light-gray": "#191919",
        "primary-yellow": "#FFB602",
        "light-yellow": "#FFB60233",
        cream: "#FFF2D2",
        red: "#F37878",
        "light-red": "#EA433533",
        green: "#17FF8F",
        gray: "#EBEBEB",
        blue: "#C2F0FF",
      },
    },
  },
  plugins: [],
});
