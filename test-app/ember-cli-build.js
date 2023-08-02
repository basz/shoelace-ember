'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },
    autoImport: {
      watchDependencies: ['@shoelace-style/ember'],
      webpack: {
        // wha? how then...
        // plugins: [
        //   new SpriteLoaderPlugin({
        //     extract: true,
        //     outputPath: 'public/sprites/',
        //     publicPath: 'sprites/',
        //   }),
        // ],
      },
    },
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
  });
};
