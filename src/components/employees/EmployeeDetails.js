import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Card from '../core/card/Card';
import DetailsRow from '../core/details-row/DetailsRow';
import Error from '../core/error/Error';
import getEmployeeById from '../../selectors/employee';
import './styles.css';

const EmployeeDetails = ({ employee }) => {
  if (!employee) {
    return (
      <Error
        message={<FormattedMessage id="app.error-no-data" />}
      />
    )
  }

  const {
    name,
    username,
    email,
    phone,
    website,
    address,
    company
  } = employee;

  return (
    <Card className="employee-details">
      <h3>
        <FormattedMessage
          id="app.employees.employee.name"
          values={{ name, username }}
        />
      </h3>
      <DetailsRow
        label={<FormattedMessage id="app.employees.employee.email" />}
        value={email}
      />
      <DetailsRow
        label={<FormattedMessage id="app.employees.employee.phone" />}
        value={phone}
      />
      <DetailsRow
        label={<FormattedMessage id="app.employees.employee.website" />}
        value={<a href={`//${website}`} target="blank">{website}</a>}
      />
      <DetailsRow
        label={<FormattedMessage id="app.employees.employee.address-label" />}
        value={
          <FormattedMessage
            id="app.employees.employee.address-val"
            values={{ suite: address.suite, street: address.street, city: address.city, zipcode: address.zipcode }}
          />
        }
      />
      <DetailsRow
        label={<FormattedMessage id="app.employees.employee.company" />}
        value={
          <FormattedMessage
            id="app.employees.employee.company-val"
            values={{ companyName: company.name, catchPhrase: company.catchPhrase }}
          />
        }
      />
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
