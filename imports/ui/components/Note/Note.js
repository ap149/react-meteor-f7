import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
  render(){
    const { text } = this.props;
    return (
      <div className="note-container">
        {text}
      </div>
    )
  }
}

export default Note;