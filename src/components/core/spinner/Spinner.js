import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.spinner}>
    <img src="/spinner.svg" alt="Loading ..." />
  </div>
);

export default Spinner;
