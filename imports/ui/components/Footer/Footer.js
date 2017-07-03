import React, { Component } from 'react';
import './Footer.css';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Footer extends Component {
  render(){
    const { 
      buttonOneLabel,
      buttonOneTap,
      buttonOneDisabled
    } = this.props;
    return (
      <div>
        <div className="footer-container">
          <div className="footer-container-inner">
            <RaisedButton 
              primary={true}
              label={buttonOneLabel}
              disabled={buttonOneDisabled}
              onTouchTap={buttonOneTap}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;