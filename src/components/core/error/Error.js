import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/Card';
import styles from './styles.module.css';

const DataUnavailable = ({ message }) => (
  <Card className={styles.details}>
    <div className={styles.error}>{message}</div>
  </Card>
);

DataUnavailable.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default DataUnavailable;
