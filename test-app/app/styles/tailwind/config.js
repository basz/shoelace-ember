module.exports = {
  content: [
    './app/index.html',
    './app/**/*.hbs',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')(), require('flowbite/plugin')],
};
