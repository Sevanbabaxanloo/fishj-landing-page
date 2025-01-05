/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./paiges/**/*.{html,js}",
    "./dist/**/*.css",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "390px",
        sm: "450px",
        md: "768px",
        lg: "1030px",
        xl: "1280px",
        xxl: "1440px",
      },
      backgroundImage: {
        oppgray: "rgba(242, 244, 246, 0.9)",
        leftgradient:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%)",
        rightgradient:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)",
        lgradient:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%)",
        rgradient:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)",
        lgradients:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%)",
        rgradients:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)",
        downgradient:
          "linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(255,255,255,0.9069432704722514) 30%, rgba(255,255,255,0.9769712816767332) 50%, rgba(255,255,255,1) 100%)",
      },
      colors: {
        coolGray: "#F2F4F6",
        blue: "#1898D8",
        textgray: "rgba(0, 0, 0, 0.50)",
      },
      inset: {
        190: "190px",
      },
      borderColor: {
        color: "#1898D8",
        gray: "#D8D8D8",
      },
      lineHeight: {
        height: "36px",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },

      fontWeight: {
        600: 600,
      },
      margin: {
        4: "4px",
        6: "6px",
      },
      width: {
        481: "481px",
        1440: "1440px",
        370: "370px",
        width: "100vw",
      },
      height: {
        80: "80px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
