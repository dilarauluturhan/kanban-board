/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBgColor": "#f8faf9",
        "columnBgColor":"#c5c6c8",
        "textColor":"#272727",
        "sideColor":"#527069"
      }
    },
  },
  plugins: [],
}