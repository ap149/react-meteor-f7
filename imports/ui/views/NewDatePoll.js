import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'; 
import './NewDatePoll.css';

import FixedHeader from '../components/FixedHeader/FixedHeader.js';
import Footer from '../components/Footer/Footer.js';
import DatePicker from '../components/Datepicker/Datepicker.js';

import { connect } from 'react-redux';
import { resetDates } from '../../store/actions';

class NewDatePoll extends Component {
  headerLeftTap(){
    browserHistory.goBack();
    this.props.resetDates();
  }

  goNext(){
    console.log("next step");
  }

  render(){
    return (
      <div className="container-fullscreen has-header">
        <FixedHeader
          title="New date poll"
          leftIcon="back"
          leftIconTap={this.headerLeftTap.bind(this)}
        />
        <DatePicker />
        <Footer
          buttonOneLabel="Next"
          buttonOneTap={this.goNext.bind(this)}
          buttonOneDisabled={this.props.selectedDates.length == 0}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedDates } = state.reducers.datepickerReducer;
  return { selectedDates };
}

export default connect(mapStateToProps, { resetDates })(NewDatePoll);
