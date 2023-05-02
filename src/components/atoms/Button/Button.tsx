import React from 'react';
import { StyledButton } from './Button.styles';
import Props from 'src/models/atoms/button';

function Button({ text, primary }: Props): JSX.Element {
  return <StyledButton primary={primary}>{text}</StyledButton>;
}

export default Button;

Button.displayName = 'Button';
Button.defaultProps = {
  text: 'resume',
  primary: true,
};
