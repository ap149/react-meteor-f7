import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';

class EventDetail extends Component {
  constructor(){
    super();
  }

  componentWillUpdate(){

  }

  render(){
    console.log(this.props);
    return (
      <div className="container-fullscreen">
        <div>event detail</div>
        <FlatButton 
          label="Get event"
          primary={true}
          onTouchTap={() => console.log(this.props.event)}
        />
      </div>
    )
  }
}

export default EventDetail;