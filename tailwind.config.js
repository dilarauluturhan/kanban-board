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
        "columnBgColor":"#4f5052",
      }
    },
  },
  plugins: [],
}