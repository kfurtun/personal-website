import React from 'react';
import { render, fireEvent } from 'utils/test-utils';
import Button from './Button';

describe('Button component', () => {
  test('should render a button with text and respond to click events', () => {
    const { getByText } = render(<Button text="Zaa" />);
    const button = getByText('Zaa');
    expect(button).toBeInTheDocument();
  });
});
