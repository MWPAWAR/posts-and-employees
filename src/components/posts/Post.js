import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Post = ({
  id,
  body,
  title
}) => (
  <Card className="root">
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Link to={`/posts/${id}`}>
        <Button size="large" color="primary">
          <FormattedMessage id="app.posts.btn-view-label" />
        </Button>
      </Link>
    </CardActions>
  </Card>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Post;
