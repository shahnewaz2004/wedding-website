/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Baskvl: ['Baskvl'],
      Lowan: ['Lowan'],
      Danette: ['Danette'],
      Playfair: ['Playfair']
    },
    extend: {
      backgroundImage: {
        body: "url('../asset/background.png')"
      }
    }
  },
  plugins: [],
}