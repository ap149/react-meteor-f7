import {
  NEW_EVENT_TITLE
} from '../types';

const INITIAL_STATE = {
  eventTitle: [] 
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_EVENT_TITLE:
      return Object.assign(
        {},
        state,
        {eventTitle: action.payload}
      );
    default:
      return Object.assign(
        {},
        state
      );
  }
};