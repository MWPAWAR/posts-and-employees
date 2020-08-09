import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Employee from './Employee';
import getEmployees from '../../selectors/employees';
import fetchEmployees from '../../actions/employees';
import './styles.css'

const Employees = ({
  employees,
  fetchEmployees,
  hasEmployees
}) => {
  useEffect(() => {
    if (!hasEmployees) fetchEmployees();
  }, []);

  const employeeItems = 
    employees.map((employee) => (
      <Employee
        id={employee.id}
        name={employee.name}
        address={employee.address}
      />
    )
  );

  return (
    <Fragment>
      <h2 className="heading">
        <FormattedMessage id="app.employees.label" />
      </h2>
      <div className="container">{employeeItems}</div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  const employees = getEmployees(state);
  const hasEmployees = employees.length > 0;

  return {
    employees,
    hasEmployees
  };
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.object.isRequired
    })
  ),
  fetchEmployees: PropTypes.func.isRequired,
  hasEmployees: PropTypes.bool.isRequired
};

export { Employees }; // exporting a constant from here for testing.

export default connect(mapStateToProps, { fetchEmployees })(Employees);
