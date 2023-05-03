import React from 'react';
import { TypographyProps } from 'src/models/atoms/typography';
import { Base } from './Heading.styles';

function H1({ fontSize, color, text }: TypographyProps): JSX.Element {
  return (
    <Base fontSize={fontSize} color={color} tagName="h1">
      {text}
    </Base>
  );
}

export default H1;
