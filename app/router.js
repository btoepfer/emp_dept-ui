import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('departments', function() {
    this.route('department', {path: ':deptno'}, function() {
      this.route('employees');
    });
  });
});

export default Router;
