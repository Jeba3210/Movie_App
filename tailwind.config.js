/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          "Sedan SC" : ["Sedan SC", "sans-serif"],
        },
    },
  },

  plugins: [],
};

