import React from 'react';

import './styles.css';

export const BUTTON_TYPES = {
  DEFAULT: 'default',
  PRIMARY: 'info',
  SECONDARY: 'gray',
  DANGER: 'danger',
  WARNING: 'warning',
  LINK: 'link'
}

const Button = ({
  text,
  onClick,
  type
}) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      className={`btn ${type}`}
      aria-label={text}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
