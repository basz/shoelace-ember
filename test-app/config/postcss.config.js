const env = process.env.EMBER_ENV || 'development';

const plugins = [
  require('tailwindcss/nesting'),
  require('tailwindcss')({ config: './config/tailwind.config.js' }),
  require('autoprefixer'),
];

if (env === 'production') {
  plugins.push(
    require('cssnano')({
      preset: 'default',
    }),
  );
}

module.exports = {
  plugins,
};
