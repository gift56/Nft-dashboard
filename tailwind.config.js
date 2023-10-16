/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyColor: "#0B0D21",
        sidebarhoverColor: "#232966",
        inputBorderColor: "#212554",
      },
      backgroundImage: {
        inputBg:
          "linear-gradient(162deg, #161A42 22.61%, rgba(22, 26, 66, 0.00) 118.29%)",
      },
    },
  },
  plugins: [],
};
