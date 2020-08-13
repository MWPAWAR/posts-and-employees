import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

export const BUTTON_TYPES = {
  LINK: 'link',
};

const Button = ({ text, onClick, type }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={classNames(styles.btn, styles[type])}
      aria-label={text}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
