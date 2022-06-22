/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'wrapper': '800px 453px'
      }
    },
  },
  plugins: [],
}
