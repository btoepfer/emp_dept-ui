import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectJob(value, event) { 
      this.set('job', value);
    }
  }
});
