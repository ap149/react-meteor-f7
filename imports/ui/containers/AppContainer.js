// import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Splash from '../views/Splash.js';
import Home from '../views/Home.js';

class App extends Component {
  handleView(){
    if (this.props.currentUser){
      return (
        <Home />
      )
    }

    if (localStorage.getItem('datePollApp')){
      return (
        <div>loading</div>
      )
    }

    return (
      <Splash />
    )
  }

  render(){
    return (
      <div className="fullscreen">
        {this.handleView()}
      </div>
    )
  }
}

export default AppContainer = createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, App);
