import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Spinner from '../core/spinner/Spinner';
import fetchPosts from '../../actions/posts';
import getPosts from '../../selectors/posts';
import Post from './Post';
import styles from './styles.module.css';

const Posts = ({ fetchPosts, hasPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  if (!hasPosts) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  const postItems = posts.map((post) => <Post id={post.id} title={post.title} body={post.body} />);

  return (
    <Fragment>
      <h2 className={styles.heading}>
        <FormattedMessage id="app.posts.label" />
      </h2>
      <div className={styles.container}>{postItems}</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const posts = getPosts(state);
  const hasPosts = posts.length > 0;

  return {
    posts,
    hasPosts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
