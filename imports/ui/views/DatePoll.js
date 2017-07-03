import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import FixedHeader from '../components/FixedHeader/FixedHeader.js';
import DateOption from '../components/DateOption/DateOption.js';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class DatePoll extends Component {
  constructor(){
    super()

    const dt1 = {
      date: moment().add(3, 'days'),
      count: 3
    }
    const dt2 = {
      date: moment().add(7, 'days'),
      count: 14
    }
    const dt3 = {
      date: moment().add(14, 'days'),
      count: 5
    }

    this.state = {
      dates: [dt1, dt2, dt3],
      eventTitle: "Drinks"
    }
  }

  render(){
    return (
      <div>
        <FixedHeader
          title={this.state.eventTitle}
        />
        <DateOption />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedDates } = state.reducers.datepickerReducer;
  return { selectedDates };
}

export default connect(null, { })(DatePoll);