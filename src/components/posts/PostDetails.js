import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';

import getPostById from '../../selectors/post';
import './styles.css';

const PostDetails = ({ post }) => (
  post
    ? (
      <Card className="post-details">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
          <Typography component="div">
            <Typography color="textPrimary" component="span">
              <FormattedMessage id="app.posts.post.description" />
            </Typography>
            <Typography color="textSecondary" component="span">{post.body}</Typography>
          </Typography>
        </CardContent>
      </Card>
    ) : (
      <Card className="post-details">
        <Typography variant="subtitle2" color="error" component="div" align="center">
          <FormattedMessage id="app.error-no-data" />
        </Typography>
      </Card>
    )
);

const mapStateToPros = (state, props) => ({
  post: getPostById(state, props.match.params.postId)
});

PostDetails.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
}

export { PostDetails };

export default connect(mapStateToPros)(PostDetails);
