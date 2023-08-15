module.exports = {
  content: [
    './app/index.html',
    './app/**/*.hbs',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/typography')(),
    // require('@tailwindcss/aspect-ratio'),
    // require('tailwindcss-animate'),
    require('flowbite/plugin'),
    // require('rippleui'),
  ],
};
