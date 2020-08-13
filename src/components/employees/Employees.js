import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Employee from './Employee';
import getEmployees from '../../selectors/employees';
import fetchData from '../../actions/employees';
import withSpinner from '../hocs/with-spinner';
import styles from './styles.module.css';

export const Employees = ({ employees }) => {
  return (
    <>
      <h2 className={styles.heading}>
        <FormattedMessage id="app.employees.label" />
      </h2>
      <div className={styles.container}>
        {employees.map((employee) => (
          <Employee id={employee.id} name={employee.name} address={employee.address} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const employees = getEmployees(state);
  const isDataAvailable = employees.length > 0;

  return {
    employees,
    isDataAvailable,
  };
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.object.isRequired,
    })
  ),
  fetchData: PropTypes.func.isRequired,
  isDataAvailable: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { fetchData })(withSpinner(Employees));
