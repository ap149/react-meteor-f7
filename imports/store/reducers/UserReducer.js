import {
  NEW_USER_NAME
} from '../types';

const INITIAL_STATE = {
  username: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_USER_NAME:
      return Object.assign(
        {},
        state,
        {username: action.payload}
      );
    default:
      return Object.assign(
        {},
        state
      );
  }
};