import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../constants/action-types';

const INITIAL_STATE = {
  isError: false,
  isFetching: false
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_POSTS:
      return { ...state, isFetching: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, ...payload, isFetching: false  };
    case FETCH_POSTS_FAILURE:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
