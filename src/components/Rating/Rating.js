import React from 'react';
import Star from '../Star';

import './Rating.scss';

const Rating = ({ size = 5, rating = 3 }) => {
  var starItems = [];
  for (let i = 0; i < size; i++) {
    starItems.push(
      <li key={i} className="star-item">
        <Star isActive={i < rating}/>
      </li>
    );
  }

  return (
    <ul className="component rating-widget">{starItems}</ul>
  );
};

export default Rating;
