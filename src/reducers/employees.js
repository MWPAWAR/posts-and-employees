import { FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE } from '../constants/action-types';

const INITIAL_STATE = {
  isError: false,
  isFetching: false
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_EMPLOYEES:
      return { ...state, isFetching: true };
    case FETCH_EMPLOYEES_SUCCESS:
      return { ...state, ...payload, isFetching: false  };
    case FETCH_EMPLOYEES_FAILURE:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
