import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/Card';
import './styles.css';

const DataUnavailable = ({
  message
}) => (
  <Card className="details">
    <div className="error">
      {message}
    </div>
  </Card>
);

DataUnavailable.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default DataUnavailable;
