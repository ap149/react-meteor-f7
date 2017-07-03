
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import moment from 'moment';

import { Events } from './collection.js';

Meteor.publish('events.detail', function(eventId) {
  console.log("getting: ", eventId)
  return Events.findOne({
   _id: eventId
  });
});

Meteor.publish('events.all', function() {
  console.log("getting: ")
  return Events.find({
  //  _id: eventId
  });
});



Meteor.methods({
  'events.insert'(dates, username, title) {
    // check(text, String);
    if (!this.userId) {throw new Meteor.Error('not-authorized');};

    const userObj = {
      userId: this.userId,
      username
    }

    let newEventObj = {
      title,
      owner: userObj,
      createdAt: Date.now(),
      dates: []
    }

    for (var i = 0; i < dates.length; i++) {
      newEventObj.dates.push({
        date: dates[i],
        users: [userObj]
      })
    };

    return (
      Events.insert(newEventObj)
    )
  }
});