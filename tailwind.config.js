/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#736CED",
        secondary: "#9F9FED",
        soft: "#F2DFD7",
        light: "#FEF9FF",
        accent: "#22C55E",
      },
    },
  },
  plugins: [],
};
