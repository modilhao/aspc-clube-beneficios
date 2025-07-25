/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aspc': {
          'white': '#fefeff',
          'primary': '#3e4095',
          'secondary': '#ed3237',
          'dark': '#373435',
          'light': '#f4f3ee',
        }
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}