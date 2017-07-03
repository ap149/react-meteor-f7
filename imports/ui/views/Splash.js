import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Splash.css';

class Home extends Component {
  constructor(){
    super();
    this.state = {

    };
  };

  render(){

    return (
      <div className="fullscreen">
        Splash screen
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

// const mapStateToProps = (state) => {
//   return {  };
// }

export default connect(null, { })(Home);