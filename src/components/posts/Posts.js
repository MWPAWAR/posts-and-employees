import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import fetchPosts from '../../actions/posts';
import getPosts from '../../selectors/posts';
import Post from './Post';
import './styles.css';

const Posts = ({
  fetchPosts,
  hasPosts,
  posts
}) => {
  useEffect(() => {
    if (!hasPosts) fetchPosts();
  }, []);

  const postItems = posts.map(
    post =>
      <Post 
        id={post.id}
        title={post.title}
        body={post.body}
      />
  );

  return (
    <Fragment>
      <h2 className="heading">
        <FormattedMessage id="app.posts.label" />
      </h2>
      <div className="container">{postItems}</div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  const posts = getPosts(state);
  const hasPosts = posts.length > 0;

  return {
    posts,
    hasPosts
  };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
