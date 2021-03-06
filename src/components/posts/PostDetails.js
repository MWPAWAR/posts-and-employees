import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Card from '../core/card/Card';
import DataUnavailable from '../core/error/Error';
import DetailsRow from '../core/details-row/DetailsRow';
import getPostById from '../../selectors/post';
import styles from './styles.module.css';

export const PostDetails = ({ post }) =>
  post ? (
    <Card className={styles.postDetails} title={post.title}>
      <DetailsRow label={<FormattedMessage id="app.posts.post.description" />} value={post.body} />
    </Card>
  ) : (
    <DataUnavailable message={<FormattedMessage id="app.error-no-data" />} />
  );

const mapStateToPros = (state, props) => ({
  post: getPostById(state, props.match.params.postId),
});

PostDetails.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToPros)(PostDetails);
