import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import getEmployeeById from '../../selectors/employee';
import './styles.css';

const EmployeeDetails = ({ employee }) => {
  if (!employee) {
    return (
      <Card className="employee-details">
        <Typography variant="subtitle2" color="error" component="div" align="center">
          <FormattedMessage id="app.error-no-data" />
        </Typography>
      </Card>
    );
  }

  const {
    name,
    username,
    email,
    phone,
    website,
    address: {
      suite,
      street,
      city,
      zipcode
    },
    company: {
      name: companyName,
      catchPhrase,
    }
  } = employee;

  return (
    <Card className="employee-details">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <FormattedMessage
            id="app.employees.employee.name"
            values={{ name, username }}
          />
        </Typography>

        <Typography variant="body2" color="textSecondary" component="div">
          <Typography color="textPrimary" component="span">
            <FormattedMessage id="app.employees.employee.email" />
          </Typography>
          <Typography color="textSecondary" component="span">{email}</Typography>
        </Typography>

        <Typography variant="body2" color="textSecondary" component="div">
          <Typography color="textPrimary" component="span">
            <FormattedMessage id="app.employees.employee.phone" />
          </Typography>
          <Typography color="textSecondary" component="span">{phone}</Typography>
        </Typography>

        <Typography variant="body2" color="textSecondary" component="div">
          <Typography color="textPrimary" component="span">
            <FormattedMessage id="app.employees.employee.website" />
          </Typography>
          <a href={`//${website}`} target="blank"><Typography color="primary" component="span">{website}</Typography></a>
        </Typography>

        <Typography variant="body2" color="textSecondary" component="div">
          <Typography color="textPrimary" component="span">
            <FormattedMessage id="app.employees.employee.address-label" />
          </Typography>
          <Typography color="textSecondary" component="span">
            <FormattedMessage
              id="app.employees.employee.address-val"
              values={{ suite, street, city, zipcode }}
            />
          </Typography>
        </Typography>

        <Typography variant="body2" color="textSecondary" component="div">
          <Typography color="textPrimary" component="span">
            <FormattedMessage id="app.employees.employee.company" />
          </Typography>
          <Typography color="textSecondary" component="span">
            <FormattedMessage
              id="app.employees.employee.company-val"
              values={{ companyName, catchPhrase }}
            />
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

const mapStateToPros = (state, props) => ({
  employee: getEmployeeById(state, props.match.params.empId)
});

EmployeeDetails.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }),
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      catchPhrase: PropTypes.string.isRequired,
      bs: PropTypes.string.isRequired,
    })
  })
};

export { EmployeeDetails };

export default connect(mapStateToPros)(EmployeeDetails);
