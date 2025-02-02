/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baby_blue: '#820000',
        peach: '#CF9B67',
        purp: '#5F4B8B',
        secondary: '#1b2720',
        dark_primary: '#121212',
        dark_secondary: '#262626',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}

