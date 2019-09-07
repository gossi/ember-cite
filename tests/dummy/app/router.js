import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';

import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('references');
    this.route('common');
    this.route('person');
    this.route('episode');

    this.route('book');
    this.route('article');

    this.route('blog-post');

    this.route('video');
    this.route('tv-episode');
    this.route('webisode');
  });
});

export default Router;
