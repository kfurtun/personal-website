import React from 'react';
import { TypographyProps } from 'src/models/atoms/typography';
import { Base } from './Heading.styles';

function H3({ fontSize, color, text }: TypographyProps): JSX.Element {
  return (
    <Base fontSize={fontSize} color={color} as="h3" tagName="h3">
      {text}
    </Base>
  );
}

export default H3;
