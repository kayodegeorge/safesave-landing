/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'safe-blue': '#004AAD',
        'safe-light': '#686869',
        'safe-orange': '#F09135',
      },
    },
  },
  plugins: [],
}
