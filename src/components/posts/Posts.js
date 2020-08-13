import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import fetchData from '../../actions/posts';
import getPosts from '../../selectors/posts';
import Post from './Post';
import withSpinner from '../hocs/with-spinner';
import styles from './styles.module.css';

const Posts = ({ posts }) => (
  <>
    <h2 className={styles.heading}>
      <FormattedMessage id="app.posts.label" />
    </h2>
    <div className={styles.container}>
      {posts.map((post) => (
        <Post id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  </>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  )
}

const mapStateToProps = (state) => {
  const posts = getPosts(state);
  const isDataAvailable = posts.length > 0;

  return {
    posts,
    isDataAvailable,
  };
};

export default connect(mapStateToProps, { fetchData })(withSpinner(Posts));
