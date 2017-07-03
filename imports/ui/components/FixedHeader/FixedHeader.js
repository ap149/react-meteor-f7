import React, { Component } from 'react';
import { browserHistory } from 'react-router'; 
import './FixedHeader.css';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import HeaderBack from 'material-ui/svg-icons/navigation/arrow-back';

import { connect } from 'react-redux';

class FixedHeader extends Component {
  renderLeftIcon(){
    const { leftIcon, leftIconTap } = this.props;
    if (leftIcon == 'back') {
      return (
        <IconButton 
          onTouchTap={leftIconTap}
        >
          <HeaderBack />
        </IconButton>        
      )
    }
    return (<div></div>)
  }

  render(){
    const { title, onTouchTap } = this.props;
    return (
      <div>
        <div className="header-container">
          <AppBar
            className='customer-header'
            title={title}
            titleStyle={{fontSize: '18px'}}
            iconElementLeft={this.renderLeftIcon()}
          />
        </div>
        <div className="header-dummy"></div>       
      </div>
    )
  }
}

export default FixedHeader;