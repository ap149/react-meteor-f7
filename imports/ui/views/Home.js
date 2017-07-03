// import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';

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

    };
  };

  render(){

    return (
      <div className="container-fullscreen">
        <div>Home</div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return { };
// }

export default connect(null, { })(Home);