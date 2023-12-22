/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baby_blue: '#2BC6E9',
        peach: '#FFCF52',
      }
    },
  },
  plugins: [],
}

