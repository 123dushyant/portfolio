/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#2c3539',
      },
      lineHeight: {
        'extra-stretch': '4.5', 
      },
    },
  },
  plugins: [],
}

