import React from 'react';

import './styles.css';

const Card = ({
  className,
  title,
  body,
  children
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-container">
        {title && (<h3 className="card-title">{title}</h3>)}
        {body && (<p className="card-description">{body}</p>)}
        {children}
      </div>
    </div>
  );
};

export default Card;
