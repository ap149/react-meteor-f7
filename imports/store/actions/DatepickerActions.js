import {
  TOGGLE_DATE,
  RESET_DATES
} from '../types';

export const toggleDate = (daysFromNow) => {
  return {
    type: TOGGLE_DATE,
    payload: daysFromNow
  };
};

export const resetDates = () => {
  return {
    type: RESET_DATES,
  };
};