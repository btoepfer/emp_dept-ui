import DS from 'ember-data';

export default DS.Model.extend({
  deptno:      DS.attr("number"),
  dname:       DS.attr("string"),
  loc:         DS.attr("string")
});

