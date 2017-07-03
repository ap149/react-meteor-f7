import { Meteor } from 'meteor/meteor';
import RandomString from 'randomstring';

Meteor.methods({
  'test': function() {
    console.log("server method test")
  },

  'anonUsername': function(){
    return RandomString.generate(12);
  }
});