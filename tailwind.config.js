/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyColor: "#0B0D21",
        sidebarhoverColor: "#232966",
        inputBorderColor: "#212554",
        darkColor: "#161A42",
        darkColor2: "#212760",
        primary: "#1FA2FF",
        primary2: "#5EEAD4",
      },
      backgroundImage: {
        inputBg:
          "linear-gradient(162deg, #161A42 22.61%, rgba(22, 26, 66, 0.00) 118.29%)",
        grayBg: "linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%)",
        textBg:
          "linear-gradient(89deg, #BAC1FF -0.98%, #63FEFE 54.08%, #FF3EEC 112.69%)",
      },
    },
  },
  plugins: [],
};
