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

const Employee = ({
  id,
  address: { suite, street, city, zipcode },
  name,
}) => (
  <Card className="root">
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <FormattedMessage
            id="app.employees.address"
            values={{ suite, street, city, zipcode }}
          />
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Link to={`/employees/${id}`}>
        <Button size="large" color="primary">
          <FormattedMessage id="app.employees.btn-view-label" />
        </Button>
      </Link>
    </CardActions>
  </Card>
);

Employee.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired
  }).isRequired
};

export default Employee;
