import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'; 

import { connect } from 'react-redux';
import { resetDates } from '../../store/actions';

import './Home.css';
import Datepicker from '../components/Datepicker/Datepicker.js';
import EventName from '../components/EventName/EventName.js';
import Username from '../components/Username/Username.js';
import Loading from '../components/Loading/Loading.js';

import User from '../helpers/User.js';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
  height: '100%',
  maxHeight: 'none',
  loading: false
};

class Home extends Component {
  constructor(){
    super();
    this.state = {
      datepickerOpen: false,
      newEventNameOpen: false,
      usernameOpen: false
    };
  };

  handleOpen = () => {
    this.setState({datepickerOpen: true});
  };

  handleCancel = () => {
    this.props.resetDates();
    this.setState({datepickerOpen: false});
    this.setState({newEventNameOpen: false});
    this.setState({usernameOpen: false});
  };

  requestEventName = () => {
    this.setState({datepickerOpen: false});
    this.setState({newEventNameOpen: true});
  };

  requestUserName = () => {
    this.setState({newEventNameOpen: false});
    this.setState({usernameOpen: true});
  }

  handleDone = () => {
    this.setState({usernameOpen: false});
    this.setState({loading: true});
    User.createUser();
    const self = this;
    Meteor.call('anonUsername', function(err, res){
      if (err){
        // handle error
        return false;
      }
      console.log(res);
      self.setState({loading: false});
      const localStore = {
        username: self.props.username,
        password: res
      }
      Accounts.createUser(localStore, function(err){
        if (err){
          // handle error
          return false;
        }
        localStore.userId = Meteor.userId();
        User.setLocalStore(localStore);
        const { selectedDates, eventTitle } = self.props;
        console.log(selectedDates);
        console.log(eventTitle);
      })
    })
  };

  testFunction(){
    Meteor.call('events.insert', function(err, res){
      console.log("err: ", err);
      console.log("res: ", res);
    });
  }

  render(){

    return (
      <div className="fullscreen">
        {
          this.state.loading ?
            <Loading />
          :
          <div>
            <div>splash</div>
            <FlatButton 
              label="Pick dates"
              primary={true}
              onTouchTap={this.handleOpen}
            />
            <FlatButton 
              label="Server tests"
              primary={true}
              onTouchTap={this.testFunction}
            />
            <Datepicker 
              open={this.state.datepickerOpen}
              handleCancel={this.handleCancel}
              handleOk={this.requestEventName}
            />
            <EventName 
              open={this.state.newEventNameOpen}
              handleCancel={this.handleCancel}
              handleOk={this.requestUserName}
            />
            <Username 
              open={this.state.usernameOpen}
              handleCancel={this.handleCancel}
              handleOk={this.handleDone}
            />
          </div>
        }
        {
          Meteor.user() ?
            <div>{Meteor.userId()}</div>
          :
            <div>no user</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedDates } = state.reducers.datepickerReducer;
  const { eventTitle } = state.reducers.eventReducer;
  const { username } = state.reducers.userReducer;
  return { selectedDates, eventTitle, username };
}

export default connect(mapStateToProps, { resetDates})(Home);