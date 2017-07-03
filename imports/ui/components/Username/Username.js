import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { newUserName } from '../../../store/actions';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class Username extends Component {

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
        label="Done"
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
          title="Your name"
          modal={false}
          onRequestClose={handleCancel}
        >
          Please tell us what to call you
          <TextField
            hintText="Your name"
            onChange={(event, val) => this.props.newUserName(val)}
          />        
        </Dialog>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { username } = state.reducers.userReducer;
  return { username };
}

export default connect(mapStateToProps, { newUserName })(Username);