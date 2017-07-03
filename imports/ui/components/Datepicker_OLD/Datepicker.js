import React, { Component } from 'react';
import moment from 'moment';
import './Datepicker.css';

import Calendar from './Calendar.js';

class Datepicker extends Component {

  onClickDay(daysFromNow){
    console.log()
  }

  render(){
    return (
      <div>
        <Calendar 
          mode='new'
        />
      </div>
    )
  }
}

export default Datepicker;