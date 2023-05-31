import React from 'react';
import { TypographyProps } from 'src/models/atoms/typography';
import { Base } from './Heading.styles';

function H1({ text, className }: TypographyProps): JSX.Element {
  return (
    <Base tagName="h1" className={className}>
      {text}
    </Base>
  );
}

export default H1;
