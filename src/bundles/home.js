import React from 'react';
import ReactDOM from 'react-dom';
import RatingWidget from '../components/Rating';

import '../../style/components/common.scss';
import '../../style/bundles/home.scss';

const mountingRatingWidget = 
    document.getElementById('rating-widget');

if (mountingRatingWidget) {
  ReactDOM.render(
    <RatingWidget size={5} rating={2} />,
    mountingRatingWidget
  )
}
