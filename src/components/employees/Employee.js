import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Card from '../core/card/Card';
import Button, { BUTTON_TYPES } from '../core/button/Button';

const Employee = ({
  id,
  address: { suite, street, city, zipcode },
  name,
}) => (
  <Card
    title={name}
    body={<FormattedMessage id="app.employees.address" values={{ suite, street, city, zipcode }} />}
  >
    <Link to={`/employees/${id}`}>
      <Button
        type={BUTTON_TYPES.LINK}
        text={<FormattedMessage id="app.employees.btn-view-label" />}
      />
    </Link>
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
