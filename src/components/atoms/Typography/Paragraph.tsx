import React from 'react';
import { TypographyProps } from 'models/atoms/typography';
import { Base } from './Heading.styles';

function P({ color, fontSize, text }: TypographyProps) {
  return (
    <Base color={color} fontSize={fontSize} as="p" tagName="p">
      {text}
    </Base>
  );
}

export default P;
