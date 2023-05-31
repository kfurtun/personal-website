import React from 'react';
import { TypographyProps } from 'models/atoms/typography';
import { Base } from './Heading.styles';

function P({ text }: TypographyProps): JSX.Element {
  return (
    <Base as="p" tagName="p">
      {text}
    </Base>
  );
}

export default P;
