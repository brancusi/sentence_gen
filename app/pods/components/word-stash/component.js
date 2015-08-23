import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wordStash'],

  words: Ember.A(),

  formattedName: Ember.computed(function(){
    return this.get('type').toUpperCase();
  }),

  actions: {
  	handleEnter: function(){
  		this.get('words').pushObject(this.get('newName'));
  		this.set('newName', '');
  	}
  }
});
