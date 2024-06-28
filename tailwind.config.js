// tailwind.config.js

module.exports = {
  content: [
    './src/index.html',
    './src/**/*.{js,ts,jsx,tsx,css,sass}',
  ],
  theme: {
    screen: {
      'maxScreen': '1900px'
    },
    extend: {
      fontFamily: {
        'rowdies': ['Rowdies', 'sans-serif'],
        'BungeeSpice': ['Bungee Spice', 'sans-serif'],
        'PirouetteCacahuete': ['Pirouette Cacahuete'],
      },
    },
  },
  plugins: [],
};