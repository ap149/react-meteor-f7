import { combineReducers } from 'redux';
import datepickerReducer from './DatepickerReducer';
import eventReducer from './EventReducer';
import userReducer from './UserReducer';

export default combineReducers({
  datepickerReducer,
  eventReducer,
  userReducer
});

