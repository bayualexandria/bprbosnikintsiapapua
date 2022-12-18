/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  darkMode: "class", //class or media
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#F97316",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
