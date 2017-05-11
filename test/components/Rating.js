import test from 'tape';
import reactElementToJsxString from 'react-element-to-jsx-string'
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import Rating from '../../src/components/Rating';
import Star from '../../src/components/Star';

const renderer = new ReactShallowRenderer();

test('Testing Rating component output', (assert) => {
  renderer.render(<Rating size={5} rating={2} />);

  const message = 'Should be render correctly as per size and rating specified';
  const expected = reactElementToJsxString(
    <ul className='component rating-widget'>
      <li className='star-item'><Star isActive /></li>
      <li className='star-item'><Star isActive /></li>
      <li className='star-item'><Star /></li>
      <li className='star-item'><Star /></li>
      <li className='star-item'><Star /></li>
    </ul>
  );
  const actual = reactElementToJsxString(renderer.getRenderOutput());
  assert.equal(actual, expected, message);
  assert.end();
});
