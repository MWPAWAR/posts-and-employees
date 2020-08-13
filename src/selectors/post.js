import { createSelector } from 'reselect';
import getPosts from './posts';

const getPostId = (_, postId) => postId;

export default createSelector(getPosts, getPostId, (posts, postId) =>
  posts.find((post) => String(post.id) === String(postId))
);
