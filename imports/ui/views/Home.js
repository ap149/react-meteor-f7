import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Router, browserHistory, Link } from 'react-router'; 
import { connect } from 'react-redux';
import { resetDates } from '../../store/actions';

import './Home.css';
import Datepicker from '../components/Datepicker/Datepicker.js';
import EventName from '../components/EventName/EventName.js';

import Dates from '../helpers/Dates.js';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
  height: '100%',
  maxHeight: 'none'
};

class Home extends Component {
  constructor(){
    super();
    this.state = {
      datepickerOpen: false,
      newEventNameOpen: false
    };
  };

  handleOpen = () => {
    this.setState({datepickerOpen: true});
  };

  handleCancel = () => {
    this.props.resetDates();
    this.setState({datepickerOpen: false});
    this.setState({newEventNameOpen: false});
  };

  handleNext = () => {
    console.log("next");
    this.setState({datepickerOpen: false});
    this.setState({newEventNameOpen: true});
  };

  handleDone = () => {
    console.log("done");
    this.setState({newEventNameOpen: false});

    const { selectedDates, eventTitle } = this.props;
    const dates = Dates.selectedDatesToDates(selectedDates);
    Meteor.call('events.insert', dates, Meteor.user().username, this.props.eventTitle, function(err, res){
      if (err){
        console.log(err);
        return;
      }
      console.log(res);
    })  
  };

  renderTestButtons(){
    
  }

  testFunction(){
    console.log(Router);
    console.log(browserHistory);
    browserHistory.push(`event/y2TWtSHF2DksXbt5m`);
  }

  render(){

    return (
      <div className="container-fullscreen">
        <div>Home</div>
        <FlatButton 
          label="Pick dates"
          primary={true}
          onTouchTap={this.handleOpen}
        />
        <FlatButton 
          label="Test"
          primary={true}
          onTouchTap={this.testFunction}
        />
        <Datepicker 
          open={this.state.datepickerOpen}
          handleCancel={this.handleCancel}
          handleOk={this.handleNext}
        />
        <EventName 
          open={this.state.newEventNameOpen}
          handleCancel={this.handleCancel}
          handleOk={this.handleDone}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedDates } = state.reducers.datepickerReducer;
  const { eventTitle } = state.reducers.eventReducer;
  return { selectedDates, eventTitle };
}

export default connect(mapStateToProps, { resetDates})(Home);