'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // postcssOptions: {
    //   compile: {
    //     enabled: true,
    //     extension: 'scss',
    //     parser: require('postcss-scss'),
    //     includePaths: [__dirname],
    //     // track changes in template, css, scss, and tailwind config files
    //     cacheInclude: [/.*\.hbs$/, /.*\.css$/, /.*\.scss$/, /.*\.html/],
    //     plugins: [
    //       {
    //         module: require('autoprefixer'),
    //       },
    //       {
    //         module: require('tailwindcss'),
    //         options: {
    //           config: './app/styles/tailwind/config.js',
    //         },
    //       },
    //     ],
    //   },
    // },
    'ember-cli-babel': { enableTypeScriptTransform: true },
    autoImport: {
      watchDependencies: ['shoelace-ember'],
    },
    // babel: {
    //   plugins: [
    //     [
    //       '@babel/plugin-transform-typescript',
    //       {
    //         allowDeclareFields: true,
    //         allExtensions: true,
    //         onlyRemoveTypeImports: true,
    //       },
    //     ],
    //   ],
    // },
  });

  const { Webpack } = require('@embroider/webpack');

  return require('@embroider/compat').compatBuild(app, Webpack, {
    extraPublicTrees: [],
    staticAddonTrees: true,
    staticAddonTestSupportTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    splitControllers: true,
    splitRouteClasses: true,
    implicitModulesStrategy: 'packageNames',

    packagerOptions: {
      webpackConfig: {
        module: {
          rules: [
            {
              test: /.css$/i,
              use: [
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      config: 'config/postcss.config.js',
                    },
                  },
                },
              ],
            },
            {
              test: /\.(png|jpe?g|gif|svg)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
          ],
        },
      },
    },
  });
};
