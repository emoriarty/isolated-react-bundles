import React from 'react';

import './Star.scss';

const Star = ({ isActive }) => {
  const classNames = ['component', 'star'];
  const activeClass = 'star--active';

  if (isActive) {
    classNames.push(activeClass);
  }

  return <span className={classNames.join(' ')}>★</span>;
};

export default Star;
