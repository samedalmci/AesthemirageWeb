/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          200: "#E8C67A",
          500: "#C89E4B",
          700: "#9B7530",
        },
        navy: {
          900: "#122044",
        },
      },
    },
  },
  plugins: [],
};
