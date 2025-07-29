/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'thgreen': '#7B9906',
        'thlightgreen': '#D2F091',
        'thgray': '#666666',
        'thblack': '#202020',
      },
    },
  },
  plugins: [],
}

