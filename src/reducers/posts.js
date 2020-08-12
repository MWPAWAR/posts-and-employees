import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../constants/action-types';

const INITIAL_STATE = { isError: false };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POSTS:
      return { ...state };
    case FETCH_POSTS_SUCCESS:
      return { ...state, ...payload, isError: false };
    case FETCH_POSTS_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
