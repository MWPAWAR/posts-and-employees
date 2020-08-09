import fetchPosts from '../apis/posts';
import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../constants/action-types';

export default () => dispatch => {
  dispatch({ type: FETCH_POSTS });

  return fetchPosts()
    .then(response => {
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: { data: response.data } });
    })
    .catch(() => {
      dispatch({ type: FETCH_POSTS_FAILURE });
    })
};
