import {
  TOGGLE_DATE,
  RESET_DATES
} from '../types';

const INITIAL_STATE = {
  selectedDates: [] 
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DATE:
      let newSelectedDates = [];
      let oldSelectedDates = state.selectedDates;      
      if (oldSelectedDates.length == 0){
        newSelectedDates.push(action.payload);
      } else {
        for (var i = 0; i < oldSelectedDates.length; i++) {
          newSelectedDates.push(oldSelectedDates[i]);
        }
        console.log("1:", newSelectedDates);
        const index = newSelectedDates.indexOf(action.payload);
        if (index == -1){
          newSelectedDates.push(action.payload);
        } else {
          newSelectedDates.splice(index, 1);
        }        
      }
      return Object.assign(
        {},
        state,
        {selectedDates: newSelectedDates},
      );
    case RESET_DATES:
      const selectedDates = [];
      return Object.assign(
        {},
        state,
        {selectedDates},
      );      
    default:
      return Object.assign(
        {},
        state
      );
  }
};