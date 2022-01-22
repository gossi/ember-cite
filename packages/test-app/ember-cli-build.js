'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const packageJson = require('./package');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: Object.keys(packageJson.dependencies),
    },
  });

  // the embroider build does not trigger when the watched dependency updates :(
  // might be because of the "factory-components" that are not embroider, ready yet

  // const { Webpack } = require('@embroider/webpack');
  // return require('@embroider/compat').compatBuild(app, Webpack, {
  //   // skipBabel: [
  //   //   {
  //   //     package: 'qunit',
  //   //   },
  //   // ],
  // });

  // ... falling back to classic build
  return app.toTree();
};
