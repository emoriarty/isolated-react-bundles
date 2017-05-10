import React from 'react';
import ReactDOM from 'react-dom';
import RatingWidget from '../widgets/Rating';

import '../../style/home.scss';

const mountingRatingWidget = 
    document.getElementById('rating-widget');

if (mountingRatingWidget) {
  ReactDOM.render(
    <RatingWidget size={5} rating={2} />,
    mountingRatingWidget
  )
}
