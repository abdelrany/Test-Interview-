/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{html, js, jsx, ts, tsx }", 
    "./components/*.{ js, jsx, ts, tsx }",
    './components/**/*.{html,js}',
    './components/**/*.{html,js,tsx,jsx}',
    './src/components/**/*.{html,js,tsx,jsx}',
    './src/components/**/*.{html,js}',
    './src/App.tsx'

  ],
  theme: {
    extend: {
      colors:{
        primary:"#154286",

        secondary:"#4A63A9",

        dark:"#202427",
        light:"#D0EEF6",
        background:"#F6FBFE",
        danger:"#CA513A"
      }
    },
  },
  plugins: [],
}
