import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const DetailsRow = ({ label, value }) => (
  <div className={styles.row}>
    <span className={styles.rowLabel}>{label}</span>
    {value}
  </div>
);

DetailsRow.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default DetailsRow;
