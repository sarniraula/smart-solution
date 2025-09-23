/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // clean modern font
      },
      colors: {
        brand: {
          DEFAULT: "#004225", // deep green like in your screenshot
          light: "#2E7D32",
          dark: "#002d19"
        }
      },
    },
  },
  plugins: [],
}
