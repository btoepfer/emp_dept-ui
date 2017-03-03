import DS from 'ember-data';

export default DS.Model.extend({
  dname:       DS.attr("string"),
  loc:         DS.attr("string"),
  employees:   DS.hasMany("employee") 
});

