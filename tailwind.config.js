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
      backgroundImage: {
        'aspc-gradient': 'linear-gradient(135deg, #3e4095 0%, #ed3237 100%)',
        'aspc-gradient-hover': 'linear-gradient(135deg, #2d2f6b 0%, #c72529 100%)',
      },
    },
  },
  plugins: [],
}