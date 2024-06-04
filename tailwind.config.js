/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#f9f7f3',
        'secondary': '#1b2629',
        'btnColor': '#9c702a'
      }
    },
  },
  plugins: [],
}

