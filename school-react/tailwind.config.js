/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-purple': '#4B1F6F',
        'royal-purple-dark': '#381653',
        'royal-purple-light': '#6B3A8D',
        'elegant-gold': '#D4A72C',
        'gold-light': '#F3D98B',
        'gold-dark': '#B88E1E',
        'cream-bg': '#FAF8F4',
        'soft-purple': '#F1EAF7',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
