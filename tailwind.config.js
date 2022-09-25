module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: ['group-hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}