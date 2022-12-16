/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        card: ''
      },
      backgroundSize: {
        '400': '400%'
      },
      backgroundColor: {
        'container': 'rgb(10, 10, 10)',
      },
      aspectRatio: {
        card: { aspectRatio: '1 / 1.6' },
      },
    },
  },
  plugins: [],
}
