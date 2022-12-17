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
      animation: {
        tilt: "tilt 10s linear infinite",
        blob: "blob 10s infinite"
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(10deg)",
          },
          "75%": {
            transform: "rotate(-10deg)",
          },
        },
        blob: {
          "0%, 100%": {
            transform: 'translate(0px, 0px) scale(1)',
          },
          "33%": {
            transform: 'translate(100px, -70px) scale(1.1)',
          },
          "66%": {
            transform: 'translate(20px -20px) scale(0.9)',
          },
        },
      },
    },
  },
  plugins: [],
}
