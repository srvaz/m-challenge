import { MTextArea } from './index';
import React from 'react';
import { render } from '@testing-library/react';

describe('MTextArea', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<MTextArea />);

    expect(asFragment).toMatchSnapshot();
  });
});