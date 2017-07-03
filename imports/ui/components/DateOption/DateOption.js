import React, { Component } from 'react';
import moment from 'moment';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import './DateOption.css';

import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionCheck from 'material-ui/svg-icons/action/check-circle';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const styles = {
  uncheckedColor: {
    fill: '#ddd',
    color: '#ddd',
  },
  checkedColorYes: {
    fill: '#4CAF50',
    color: '#4CAF50'
  },  
  checkedColorNo: {
    color: '#4CAF50'
  },  
  radioButton: {
    maxWidth: 120,
    width: 120,
    marginBottom: 8,
  },  
}

class DateOption extends Component {
  constructor(){
    super();
    
  }

  render(){
    return (      
      <div>
        <Card>
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <RadioButtonGroup name="shipSpeed" className="date-option-button-container">
              <RadioButton
                value="yes"
                label="Yes"
                labelStyle={styles.uncheckedColor}
                iconStyle={styles.uncheckedColor}
                checkedIcon={<ActionCheck style={{fill: "#F44336"}}/>}
                style={styles.radioButton}              
              />
              <RadioButton
                value="no"
                label="No"
                labelStyle={styles.uncheckedColor}
                iconStyle={styles.uncheckedColor}
                checkedIcon={<ActionCheck color={red500} />}
                style={styles.uncheckedColor}              
              />
            </RadioButtonGroup>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default DateOption;