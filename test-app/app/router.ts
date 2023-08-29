import EmberRouter from '@ember/routing/router';
import config from 'test-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('introduction', { path: '/' });
  this.route('quick-start');
  this.route('configuration');
  this.route('changelog');
  this.route('dark-mode');
  this.route('localization');

  this.route('components', function () {
    this.route('component', { path: '/:component_name' });
  });
});
