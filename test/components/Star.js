import test from 'tape';
import reactElementToJsxString from 'react-element-to-jsx-string'
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import Star from '../../src/components/Star';

const renderer = new ReactShallowRenderer();

test('Testing Star component output if isActive set', (assert) => {
  renderer.render(<Star isActive={true} />);

  const message = 'Should be active';
  const expected = reactElementToJsxString(
    <span className='component star star--active'>★</span>
  );
  const actual = reactElementToJsxString(renderer.getRenderOutput());

  assert.equals(actual, expected, message);
  assert.end();
});
