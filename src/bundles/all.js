import React from 'react';
import ReactDOM from 'react-dom';
import RatingWidget from '../components/Rating';
import appendComponent from '../helpers/appendComponent';
import * as Components from '../components';

import '../../style/components/common.scss';
import '../../style/bundles/all.scss';

const mountingPoint = document.getElementById('components')
Object.keys(Components).forEach(
  componentName => {
    const componentTitle = document.createElement('h3');
    componentTitle.textContent = componentName;
    mountingPoint.appendChild(componentTitle);
    ReactDOM.render(
      React.createElement(Components[componentName]),
      appendComponent(mountingPoint)
    )
  }
)
