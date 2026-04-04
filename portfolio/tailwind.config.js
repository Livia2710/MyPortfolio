/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#101010",
        "bg-secondary": "#2f2f2c",
        text: "#EDEDED",
        gold: "#CFB04A",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(90deg, #a78e3c 0%, #cfb04a 39%, #ffedb1 50%, #c4a746 60%, #695926 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #101010 13%, #2f2f2c 50%, #101010 100%)",
      },
      fontFamily: {
        title: ["Inria Serif", "serif"],
        body: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};