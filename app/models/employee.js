import DS from 'ember-data';

export default DS.Model.extend({
  empno:       DS.attr("number"),
  ename:       DS.attr("string"),
  job:         DS.attr("string"),
  hiredate:    DS.attr("string"),
  sal:         DS.attr("number"),
  comm:        DS.attr("number"),
  department:  DS.belongsTo("department")
});
