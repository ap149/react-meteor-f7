import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

// import './Datepicker.css';
import Calendar from './Calendar.js';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class Datepicker extends Component {

  getDialogTitle(){
    const int = this.props.selectedDates.length;
    if (int == 0) {
      return "Choose some dates";
    }
    return int > 1 ? `${int} dates selected` : "1 date selected";
  }

  render(){
    const {
      open,
      handleCancel,
      handleOk
    } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={handleCancel}
      />,
      <FlatButton
        label="Next"
        primary={true}
        keyboardFocused={true}
        onTouchTap={handleOk}
        disabled={this.props.selectedDates.length == 0}
      />,
    ];

    return (
      <div>
        <Dialog
          open={open}
          actions={actions}
          title={this.getDialogTitle()}
          modal={false}
          onRequestClose={handleCancel}
        >
          <Calendar />
        </Dialog>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedDates } = state.reducers.datepickerReducer;
  return { selectedDates };
}

export default connect(mapStateToProps, { })(Datepicker);