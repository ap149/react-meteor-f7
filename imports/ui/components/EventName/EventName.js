import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { newEventTitle } from '../../../store/actions';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class EventName extends Component {

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
      />,
    ];

    return (
      <div>
        <Dialog
          open={open}
          actions={actions}
          title="Event name"
          modal={false}
          onRequestClose={handleCancel}
        >
          <TextField
            hintText="Enter a name for your event"
            onChange={(event, val) => this.props.newEventTitle(val)}
          />        
        </Dialog>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedDates } = state.reducers.datepickerReducer;
  return { selectedDates };
}

export default connect(mapStateToProps, { newEventTitle })(EventName);