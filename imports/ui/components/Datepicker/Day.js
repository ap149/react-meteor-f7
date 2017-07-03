import React, { Component } from 'react';
import './Day.css';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import { connect } from 'react-redux';
import { toggleDate } from '../../../store/actions';

class Day extends Component {
  toggleDate(){
    if (this.props.day == '') return;
    if (this.props.daysFromToday < 0) return;
    this.props.toggleDate(this.props.daysFromToday);
  }

  getDayCellClass(){
    const {
      selectedDates,
      daysFromToday
    } = this.props;

    const selected = ((selectedDates.indexOf(daysFromToday) > -1) && (this.props.day) ? 'selected' : '');
    const disabled = (daysFromToday < 0 ? 'disabled' : '')

    return `calendar-cell ${selected} ${disabled}`
  }

  render(){
    return (
      <div
        className={this.getDayCellClass()}
        onClick={this.toggleDate.bind(this)}
      >
        {this.props.day || ' '}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedDates } = state.reducers.datepickerReducer;
  return { selectedDates };
}

export default connect(mapStateToProps, { toggleDate })(Day);
