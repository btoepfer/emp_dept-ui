import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('departments.department');
  },

  actions: {
    createEmployee: function() {
      var controller = this.get('controller');
      var dept = this.modelFor('departments.department');
      var emp = this.store.createRecord('employee', {
        empno: controller.get('empno'),
        ename: controller.get('ename'),
        job: controller.get('job'),
        hiredate: controller.get('hiredate'),
        sal: controller.get('sal'),
        department: dept
      });
      emp.save().then(function() {
        controller.set('empno', '');
        controller.set('ename', '');
        controller.set('job', '');
        controller.set('hiredate', '');
        controller.set('sal', '');
      });
    } 
  }
});
