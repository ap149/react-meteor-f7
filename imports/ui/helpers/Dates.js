import { Meteor } from 'meteor/meteor';
import moment from 'moment';

const Dates = {
  selectedDatesToDates (selectedDates) {
    let datesArray = [];
    for (var i = 0; i < selectedDates.length; i++) {
      datesArray.push(moment().add(selectedDates[i], 'days').startOf('day').toISOString());
    }
    console.log(datesArray);
    return datesArray;
  }
}

export default Dates;