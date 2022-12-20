/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      quoteBefore: "url('./assets/img/quoteBefore.svg')",
      quoteAfter: "url('./assets/img/quoteAfter.svg')",
    },
    colors: {
      paleGray: "#B3BAC0",
      lightGray: "#f0f1f2",
      nameHover: "#0000000F",
      experienceHover: "#666666",
      black: "#000000",
      link: "#3483CC",
      hover: "#EB5757",
      white: "#E5E5E5",
      limpid: "transparent",
      redDiv: "#FF0000",
      attribute: "#A52A2A",
      value: "#008000",
    },
  },
  plugins: [],
};
