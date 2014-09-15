import Ember from 'ember';

export default Ember.Component.extend({
  size: 250,
  color: 'white',

  loadingSvgSize: function() {
    return this.get('size')
  }.property('size'),

  loadingSvgColor: function() {
    return this.get('color');
  }.property('color')
});
