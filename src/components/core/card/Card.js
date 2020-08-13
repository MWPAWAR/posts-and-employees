import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Card = ({ className, title, body, children }) => {
  return (
    <div className={classNames(styles.card, className)}>
      <div className={styles.cardContainer}>
        {title && <h3>{title}</h3>}
        {body && <p className={styles.cardDescription}>{body}</p>}
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
