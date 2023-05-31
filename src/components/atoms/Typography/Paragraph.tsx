import React from 'react';
import { TypographyProps } from 'models/atoms/typography';
import { Base } from './Heading.styles';

function P({ text, className }: TypographyProps): JSX.Element {
  return (
    <Base as="p" tagName="p" className={className}>
      {text}
    </Base>
  );
}

export default P;
