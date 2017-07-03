import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import './Calendar.css';
import Day from './Day';
import Note from '../../components/Note/Note.js';

import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

class Calendar extends Component {
  constructor(props){
    super(props);

    const now = moment().startOf('month');
    const firstMonth = moment().startOf('month');
    this.state = {
      mode: props.mode,
      firstMonth,
      displayMonth: props.displayMonth || now
    }    
  }

  renderMatrix(){
    const DISPLAY_MONTH = this.state.displayMonth;
    const STARTING_DAY = moment(DISPLAY_MONTH).isoWeekday();
    const DAYS_IN_MONTH = moment(DISPLAY_MONTH).daysInMonth();
    const ROWS_IN_MONTH = Math.ceil(DAYS_IN_MONTH - (8 - STARTING_DAY)) / 7 + 1;
    let
      i, j, day, daysFromToday, date,
      daysRow = [],
      rows = [],
      counter = 0;
    const MONTH = moment(DISPLAY_MONTH).month();
    const YEAR = moment(DISPLAY_MONTH).year();
    for (i=0; i < ROWS_IN_MONTH ; i++){
      daysRow = [];
      for (j=1; j<8 ; j++){
        day = -STARTING_DAY + 7 * (i) + j + 1;
        daysFromToday = moment(DISPLAY_MONTH).add(day - 1, 'days').diff(moment().startOf('day'), 'days');
        date = moment().startOf('days').add(daysFromToday, 'days');
        if (day < 1 || day > DAYS_IN_MONTH){
          daysRow.push(<Day
            key={counter}
            day=''
            date={date}
            month={MONTH}
            year={YEAR}
            daysFromToday={daysFromToday}
            disabled={true}
          />);          
        } else {
          daysRow.push(<Day
            key={counter}
            day={day}
            date={date}
            month={MONTH}
            year={YEAR}
            daysFromToday={daysFromToday}
            disabled={daysFromToday < 0}
          />);
        }
        counter ++;        
      }
      rows.push(<div key={i} className="calendar-row">{daysRow}</div>);   
    }
    return <div>{rows}</div>
  }

  getNoteString(){
    const int = this.props.selectedDates.length;
    if (int == 0) {
      return "Choose some dates";
    }
    return int > 1 ? `${int} dates selected` : "1 date selected";
  }

  render(){
    const iconStyle = {
      color:  '#FFB300',
      borderRadius: '50%'
    }

    return (
      <div>
        <div className="calendar-header">
          <div>
            <IconButton
              onTouchTap={() => this.setState({displayMonth: this.state.displayMonth.subtract(1, 'months')})}
              disabled={this.state.firstMonth.isSame(this.state.displayMonth)}
              iconStyle={iconStyle}
            >
              <ChevronLeft />
            </IconButton>          
          </div>
          <div className="calendar-month-label">{this.state.displayMonth.format('MMMM YYYY')}</div>
          <div>
            <IconButton
              onTouchTap={() => this.setState({displayMonth: this.state.displayMonth.add(1, 'months')})}
              iconStyle={iconStyle}
            >
              <ChevronRight />
            </IconButton>          
          </div>
        </div>
        <Divider />        
        <div className="calendar-row day-label-container">
          <div className="day-label">M</div>
          <div className="day-label">T</div>
          <div className="day-label">W</div>
          <div className="day-label">T</div>
          <div className="day-label">F</div>
          <div className="day-label">S</div>
          <div className="day-label">S</div>
        </div>
        {this.renderMatrix()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedDates } = state.reducers.datepickerReducer;
  return { selectedDates };
}

export default connect(mapStateToProps, { })(Calendar);