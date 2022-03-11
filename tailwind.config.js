const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'highlight': ['Sen', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
