import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // return this.modelFor('departments');
    return this.get('store').findRecord('department', params.id);
  }
});
