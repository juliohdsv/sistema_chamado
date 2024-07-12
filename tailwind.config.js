/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary-dark":"#121212",
      "secondy-dark": "#181C2E",
      "gray": "rgb(156 163 175)",
      "light": "rgb(209 213 219)",
      "dark": "#000",
      "white": "#fff",
    }
  },
  plugins: [],
}