import {
  NEW_USER_NAME
} from '../types';

export const newUserName = (username) => {
  return {
    type: NEW_USER_NAME,
    payload: username
  };
};
