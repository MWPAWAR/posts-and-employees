import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const DetailsRow = ({ label, value }) => (
  <div className="row">
    <span className="row-label">{label}</span>
    {value}
  </div>
);

DetailsRow.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default DetailsRow;
