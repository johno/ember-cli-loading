import Ember from 'ember';

export default Ember.Component.extend({
	size: 250,
	color: 'white',

	loadingSvgSize: Ember.computed.alias('size'),

	loadingSvgColor: Ember.computed.alias('color')
});
