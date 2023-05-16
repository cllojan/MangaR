/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './app/**/*.{ts,tsx}',
    "Components/**/*.{ts,tsx}"
	],
  theme: {    
    extend: {
    }
  },
  plugins: [require("tailwindcss-animate")],
}