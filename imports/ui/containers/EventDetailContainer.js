// import { Meteor } from 'meteor/meteor';
// import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Events } from '../../api/Events/collection.js';
import EventDetail from '../views/EventDetail.js';

export default EventDetailContainer = createContainer(({params}) => { 
  console.log("loading container");
  console.log(params);
  const eventHandle = Meteor.subscribe('events.detail', params.id);
  const loading = !eventHandle.ready();
  const event = Events.findOne({});
  const eventExists = !loading && !!event;
  return {
    loading,
    eventExists,
    event: event
  };
}, EventDetail);
