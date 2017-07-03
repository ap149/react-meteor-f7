import React, { Component } from 'react';
import '../styles';

class App extends Component {
  handleView(){
    if (this.props.currentUser){
      return (
        <div>User found</div>
      )
    }

    if (localStorage.getItem('datePollApp')){
      return (
        <div>loading</div>
      )
    }

    return (
      <div>guest</div>
    )
  }

  render(){
    return (
      <div className="fullscreen">
        {this.handleView()}
      </div>
    )
  }
}

export default App;
