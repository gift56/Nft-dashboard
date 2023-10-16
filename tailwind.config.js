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
        ballsBg: "linear-gradient(90deg, #1CD8D2 0%, #93EDC7 100%)",
        balls2Bg: "linear-gradient(90deg, #F857A6 0%, #FF5858 100%)",
        balls3Bg: "linear-gradient(201deg, #A22DFF 20.19%, #FF95DB 78.58%)",
        balls4Bg: "linear-gradient(201deg, #2DF2FF 20.19%, #DDFF95 78.58%)",
        smallBallsBg: "linear-gradient(203deg, #FF2D92 21.33%, #FFA25F 88.5%)",
        smallBallsBg2: "linear-gradient(90deg, #EC008C 0%, #FC6767 100%)",
      },
      fontFamily: {
        quicksand: "'Quicksand', sans-serif",
      },
      boxShadow: {
        connectShadow: "0px 13px 17px 0px rgba(140, 213, 105, 0.20)",
      },
    },
  },
  plugins: [],
};
