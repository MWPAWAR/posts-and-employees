import { FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE } from '../constants/action-types';

const INITIAL_STATE = { isError: false };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_EMPLOYEES:
      return { ...state };
    case FETCH_EMPLOYEES_SUCCESS:
      return { ...state, ...payload, isError: false };
    case FETCH_EMPLOYEES_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
