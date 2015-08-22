import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wordStash'],

  formattedName: Ember.computed(function(){
    return this.get('type').toUpperCase();
  })

});
