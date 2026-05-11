/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A3636",    /* Dark Teal */
        secondary: "#2C5E3E",  /* Forest Green */
        accent: "#74A86A",     /* Emerald/Light Green */
        background: "#f8fafc",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
