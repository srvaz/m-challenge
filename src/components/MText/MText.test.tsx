import { MText, TEXT_VARIANT } from './index';

import React from 'react';
import { render } from '@testing-library/react';

describe('MText', () => {
  describe('should render correctly', () => {
    test('default', () => {
      const { asFragment } = render(<MText>This is a mock text</MText>)
      expect(asFragment()).toMatchSnapshot();
    });

    test('title', () => {
      const { asFragment } = render(<MText variant={TEXT_VARIANT.TITLE}>This is a mock text</MText>)
      expect(asFragment()).toMatchSnapshot();
    });

    test('subtitle', () => {
      const { asFragment } = render(<MText variant={TEXT_VARIANT.SUBTITLE}>This is a mock text</MText>)
      expect(asFragment()).toMatchSnapshot();
    });

    test('with custom tag', () => {
      const { asFragment } = render(<MText variant={TEXT_VARIANT.SUBTITLE} tag="h2">This is a mock text</MText>)
      expect(asFragment()).toMatchSnapshot();
    });
  });

  test('renders correctly children', () => {
    const mockText = 'This is a mock text';
    const { getByText } = render(<MText>{mockText}</MText>);

    expect(getByText(mockText)).toBeInTheDocument();
  });
});
