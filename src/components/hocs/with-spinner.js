import React, { useEffect } from 'react';

import Spinner from '../core/spinner/Spinner'
import styles from '../employees/styles.module.css';

const withSpinner = (WrappedComponent) => (props) => {
  const { fetchData, isDataAvailable } = props;

  useEffect(() => {
    fetchData();
  }, []);

  if (!isDataAvailable) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  return <WrappedComponent {...props} />;
};

export default withSpinner;
