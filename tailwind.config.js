/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'backgroundImage' : {
        'grad' : "url('/public/default.png')"
      }
    },
  },
  plugins: [],
}

