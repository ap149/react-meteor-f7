import {
  NEW_EVENT_TITLE
} from '../types';

export const newEventTitle = (title) => {
  return {
    type: NEW_EVENT_TITLE,
    payload: title
  };
};
