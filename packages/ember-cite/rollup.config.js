import multiInput from 'rollup-plugin-multi-input';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { Addon } from '@embroider/addon-dev/rollup';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist'
});

const extensions = ['.js', '.ts'];

const rollupConfig = {
  input: ['src/**/*.ts'],

  // This provides defaults that work well alongside `publicEntrypoints` below.
  // You can augment this if you need to.
  output: { ...addon.output(), entryFileNames: '[name].js' },

  plugins: [
    multiInput({ relative: 'src/' }),

    // this is needed so we can have files that import other files...
    nodeResolve({ resolveOnly: ['./'], extensions }),

    // These are the modules that users should be able to import from your
    // addon. Anything not listed here may get optimized away.
    addon.publicEntrypoints(['components/**/*.js']),

    // These are the modules that should get reexported into the traditional
    // "app" tree. Things in here should also be in publicEntrypoints above, but
    // not everything in publicEntrypoints necessarily needs to go here.
    addon.appReexports(['components/**/*.js']),

    // This babel config should *not* apply presets or compile away ES modules.
    // It exists only to provide development niceties for you, like automatic
    // template colocation.
    // See `babel.config.json` for the actual Babel configuration!
    babel({ babelHelpers: 'bundled', extensions }),

    // Follow the V2 Addon rules about dependencies. Your code can import from
    // `dependencies` and `peerDependencies` as well as standard Ember-provided
    // package names.
    addon.dependencies(),

    // addons are allowed to contain imports of .css files, which we want rollup
    // to leave alone and keep in the published output.
    addon.keepAssets(['translations/**/*.yml']),

    // Remove leftover build artifacts when starting a new build.
    addon.clean()
  ]
};

export default rollupConfig;
