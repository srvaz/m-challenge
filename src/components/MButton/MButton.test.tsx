import { BUTTON_VARIANTS, MButton } from './index';
import { fireEvent, render } from '@testing-library/react';

import React from 'react';

describe('MButton', () => {
  let wrapper: any;
  const props = {
    onClick: jest.fn(),
    variant: BUTTON_VARIANTS.DEFAULT,
  }

  describe('should render correctly', () => {
    test('default', () => {
      wrapper = render(<MButton {...props}>Mock Button</MButton>);
      expect(wrapper.asFragment()).toMatchSnapshot();
    });

    test('primary', () => {
      props.variant = BUTTON_VARIANTS.PRIMARY;
      wrapper = render(<MButton {...props}>Mock Button</MButton>);
      expect(wrapper.asFragment()).toMatchSnapshot();
    });

    test('secondary', () => {
      props.variant = BUTTON_VARIANTS.SECONDARY;
      wrapper = render(<MButton {...props}>Mock Button</MButton>);
      expect(wrapper.asFragment()).toMatchSnapshot();
    });

    test('outlined', () => {
      props.variant = BUTTON_VARIANTS.OUTLINED;
      wrapper = render(<MButton {...props}>Mock Button</MButton>);
      expect(wrapper.asFragment()).toMatchSnapshot();
    });
  })

  test('should execute the callback function', () => {
    wrapper = render(<MButton {...props}>Mock Button</MButton>);
    fireEvent.click(wrapper.getByText(/Mock/));

    expect(props.onClick).toBeCalled();
  });
});

