import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Card from '../core/card/Card';
import Button, { BUTTON_TYPES } from '../core/button/Button';

const Post = ({
  id,
  body,
  title
}) => (
  <Card
    title={title}
    body={body}
  >
    <Link to={`/posts/${id}`}>
      <Button
        type={BUTTON_TYPES.LINK}
        text={<FormattedMessage id="app.posts.btn-view-label" />}
      />
    </Link>
  </Card>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Post;
